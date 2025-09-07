import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				'border-muted': 'hsl(var(--border-muted))',
				'border-accent': 'hsl(var(--border-accent))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
					accent: 'hsl(var(--background-accent))'
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--foreground-muted))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					accent: 'hsl(var(--primary-accent))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					dark: 'hsl(var(--secondary-dark))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					light: 'hsl(var(--accent-light))',
					dark: 'hsl(var(--accent-dark))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					dark: 'hsl(var(--muted-dark))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					secondary: 'hsl(var(--card-secondary))',
					accent: 'hsl(var(--card-accent))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'25%': { backgroundPosition: '100% 0%' },
					'50%': { backgroundPosition: '100% 50%' },
					'75%': { backgroundPosition: '0% 100%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-4px) rotate(1deg)' },
					'66%': { transform: 'translateY(-2px) rotate(-1deg)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px hsl(var(--primary) / 0.3), 0 0 10px hsl(var(--primary) / 0.2)' 
					},
					'50%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--primary) / 0.4)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 0 0 hsl(var(--primary) / 0.7)'
					},
					'70%': { 
						opacity: '0.8',
						boxShadow: '0 0 0 15px hsl(var(--primary) / 0)'
					}
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'rotate-in': {
					'0%': { transform: 'rotate(-10deg) scale(0.8)', opacity: '0' },
					'100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' }
				},
				'slide-fade-up': {
					'0%': { 
						transform: 'translateY(20px) scale(0.95)', 
						opacity: '0',
						filter: 'blur(4px)'
					},
					'100%': { 
						transform: 'translateY(0) scale(1)', 
						opacity: '1',
						filter: 'blur(0px)'
					}
				},
				'morphing-gradient': {
					'0%, 100%': { 
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
						backgroundPosition: '0% 50%'
					},
					'50%': { 
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
						backgroundPosition: '100% 50%'
					}
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'accordion-up': 'accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-in': 'fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'gradient-shift': 'gradient-shift 12s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2.5s infinite',
				'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-in': 'scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
				'rotate-in': 'rotate-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-fade-up': 'slide-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'morphing-gradient': 'morphing-gradient 8s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s ease-in-out infinite'
			},
			backgroundSize: {
				'300%': '300%'
			},
			textShadow: {
				'sm': '0 1px 2px hsl(var(--foreground) / 0.1)',
				'DEFAULT': '0 2px 4px hsl(var(--foreground) / 0.1)',
				'lg': '0 4px 8px hsl(var(--foreground) / 0.12)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
