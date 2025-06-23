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

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'file' | 'image';
}

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
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

  // Auto-scroll to bottom when messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        text: 'Thank you for your message! Our team will get back to you soon.',
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
    { icon: IconPaperclip, label: 'File', action: handleFileAttachment },
    { icon: IconPhoto, label: 'Photo', action: () => setShowAttachmentMenu(false) },
    { icon: IconCamera, label: 'Camera', action: () => setShowAttachmentMenu(false) },
    { icon: IconMicrophone, label: 'Voice', action: () => setShowAttachmentMenu(false) },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
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
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm md:w-96 h-[500px] md:h-[600px] bg-transparent border border-border rounded-lg shadow-2xl flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <IconMessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Support Chat</h3>
              <p className="text-xs text-muted-foreground">Online now</p>
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
        <ScrollArea className="flex-1 p-4 bg-transparent" ref={scrollAreaRef}>
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
                    "p-3 rounded-lg text-sm break-words whitespace-pre-wrap",
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-4 max-w-[75%]'
                      : 'bg-background/60 backdrop-blur-sm border border-border/20 text-foreground mr-2 max-w-[85%] shadow-sm'
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
          <div className="absolute bottom-20 left-4 right-4 bg-background border border-border rounded-lg shadow-lg p-2 animate-slide-up z-10">
            <div className="grid grid-cols-4 gap-2">
              {attachmentOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <option.icon className="w-6 h-6 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-4 border-t border-border bg-background rounded-b-lg relative">
          <div className="flex items-end space-x-2">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                className="hover:bg-accent"
              >
                <IconPlus 
                  className={cn(
                    "w-5 h-5 transition-transform duration-200",
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
                placeholder="Type your message..."
                className="w-full min-h-[40px] max-h-[80px] p-2 pr-12 text-sm bg-background border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent overflow-y-auto"
                rows={1}
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-primary hover:bg-primary/90 text-white"
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
