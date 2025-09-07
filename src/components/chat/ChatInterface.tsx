
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  IconMessageCircle, 
  IconX, 
  IconSend, 
  IconPlus,
  IconPaperclip,
  IconCamera,
  IconMicrophone,
  IconPhoto
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'file' | 'image';
}

const ChatInterface = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t.chat?.greeting || 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const attachmentMenuRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle click outside for attachment menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (attachmentMenuRef.current && !attachmentMenuRef.current.contains(event.target as Node)) {
        setShowAttachmentMenu(false);
      }
    };

    if (showAttachmentMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAttachmentMenu]);

  // Handle textarea auto-resize with line limit
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    setInputValue(textarea.value);
    
    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate number of lines
    const lineHeight = 20; // Approximate line height
    const maxHeight = lineHeight * 4; // 4 lines max
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    
    textarea.style.height = `${newHeight}px`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: t.chat?.response || 'Thank you for your message! Our team will get back to you soon.',
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileAttachment = () => {
    fileInputRef.current?.click();
    setShowAttachmentMenu(false);
  };

  const attachmentOptions = [
    { icon: IconPaperclip, label: t.chat?.file || 'File', action: handleFileAttachment },
    { icon: IconPhoto, label: t.chat?.photo || 'Photo', action: () => setShowAttachmentMenu(false) },
    { icon: IconCamera, label: t.chat?.camera || 'Camera', action: () => setShowAttachmentMenu(false) },
    { icon: IconMicrophone, label: t.chat?.voice || 'Voice', action: () => setShowAttachmentMenu(false) },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="btn-floating w-14 h-14 rounded-2xl shadow-2xl transition-all duration-400 hover:scale-110 hover:rotate-3"
          size="icon"
        >
          <IconMessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Mobile backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Chat interface */}
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm md:w-96 h-[500px] md:h-[600px] glass-card-elevated border border-border/30 rounded-xl shadow-2xl flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/20 bg-gradient-to-r from-background-secondary/80 to-background-accent/80 backdrop-blur-xl rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <IconMessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{t.chat?.title || 'Support Chat'}</h3>
              <p className="text-xs text-muted-foreground">{t.chat?.status || 'Online now'}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="hover:bg-background/80"
          >
            <IconX className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-background-secondary/20 to-background-accent/20 backdrop-blur-sm" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-xl text-sm break-words whitespace-pre-wrap transition-all duration-300",
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-primary to-accent text-white ml-4 max-w-[75%] shadow-lg hover:shadow-xl'
                      : 'bg-transparent border-none text-foreground mr-2 max-w-[85%] text-shadow-sm'
                  )}
                >
                  <p className="leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Attachment menu */}
        {showAttachmentMenu && (
          <div 
            ref={attachmentMenuRef}
            className="absolute bottom-20 left-4 right-4 glass-card-elevated border border-border/30 rounded-xl shadow-xl p-3 animate-slide-up z-10"
          >
            <div className="grid grid-cols-4 gap-2">
              {attachmentOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className="flex flex-col items-center p-3 rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <option.icon className="w-6 h-6 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-4 border-t border-border/20 bg-gradient-to-r from-background-secondary/80 to-background-accent/80 backdrop-blur-xl rounded-b-xl relative">
          <div className="flex items-end space-x-2">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                className="hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 border border-border/30 hover:border-primary/40 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <IconPlus 
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    showAttachmentMenu && "rotate-45"
                  )} 
                />
              </Button>
            </div>
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={t.chat?.placeholder || 'Type your message...'}
                className="w-full min-h-[40px] max-h-[80px] p-3 pr-12 text-sm bg-background-secondary/60 backdrop-blur-sm border border-border/30 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-background-secondary/80 transition-all duration-300 overflow-hidden scrollbar-none"
                rows={1}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-br from-primary to-accent hover:from-primary-light hover:to-accent-light text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl disabled:opacity-50 disabled:transform-none"
              size="icon"
            >
              <IconSend className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={() => {}}
          accept="*/*"
        />
      </div>
    </>
  );
};

export default ChatInterface;
