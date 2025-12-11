/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        display: ['General Sans', 'Satoshi', 'system-ui', 'sans-serif'],
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        spacegrotesk: ['General Sans', 'Satoshi', 'system-ui', 'sans-serif']
      },
      spacing: {
        // 8pt grid: multiples of 4 and 8
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px'
      },
      colors: {
        space: {
          950: '#05080f',
          900: '#0a0f1f',
          800: '#101828',
          glass: 'rgba(255, 255, 255, 0.05)',
          'glass-hover': 'rgba(255, 255, 255, 0.1)'
        },
        neon: {
          blue: '#3b82f6', // Refined blue
          purple: '#8b5cf6', // Refined purple
          pink: '#ec4899',
          cyan: '#06b6d4'
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #2a8af6 360deg)',
      },
      boxShadow: {
        'vol-sm': '0 8px 30px rgba(0,0,0,0.6), 0 3px 6px rgba(0,0,0,0.5)',
        'vol-lg': '0 40px 120px rgba(0,0,0,0.75), 0 12px 30px rgba(0,0,0,0.6)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        }
      },
      fontSize: {
        // Modular scale 1.25
        'xs': ['0.875rem', { lineHeight: '1.5' }],   // 14px
        'sm': ['1rem', { lineHeight: '1.5' }],       // 16px
        'base': ['1.125rem', { lineHeight: '1.5' }], // 18px body
        'lg': ['1.25rem', { lineHeight: '1.4' }],
        'xl': ['1.5rem', { lineHeight: '1.3' }],
        '2xl': ['2rem', { lineHeight: '1.2' }],
        '3xl': ['3rem', { lineHeight: '1.1' }],      // H2
        '4xl': ['3.5rem', { lineHeight: '1.1' }],
        '5xl': ['4rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],   // H1
        '9xl': ['6rem', { lineHeight: '1' }]         // Hero
      }
    }
  },
  plugins: []
}
