/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#e8638a',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          muted: '#6b7280',
          light: '#9ca3af',
        },
        ground: {
          DEFAULT: '#fafafa',
          card: '#ffffff',
          border: '#f3f4f6',
        },
        dark: {
          ground: '#111118',
          card: '#1c1c26',
          border: '#2d2d3d',
          ink: '#f0f0f8',
          muted: '#9ca3af',
        },
        gold: {
          deep: '#b37810',
          light: '#f3c853',
          hover: '#9a6509',
          'hover-dark': '#fde68a',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'system-ui', 'sans-serif'],
        display: ['Urbanist', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'carousel-enter': 'carouselEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'carousel-exit': 'carouselExit 0.4s cubic-bezier(0.7, 0, 0.84, 0)',
        shimmer: 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        carouselEnter: {
          from: { opacity: '0', transform: 'translateX(32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        carouselExit: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-32px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
