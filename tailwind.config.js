module.exports = {
  // purge: [
  //   "./pages/*.js",
  //   "./pages/**/*.js",
  //   "./components/*.js",
  //   "./components/**/*.js",
  // ],
  
  theme: {
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "green-md": "0px 20px 40px -15px rgba(151,203,169,0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      orange: {
        100: "#FFECEC",
        500: "#F53855",
      },
      green: {
        500: "#97CBA9",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      blue:{
        500: "#668BA4"
      },
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
    },
    extend: {
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite',
        beat: 'beat 1s ease-out infinite',
        beatin: 'beatin 1s ease-in infinite',
        bounce: 'bounce 1s infinite',
        spin: 'spin 0.5s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',

      },
      keyframes:{
        bounce:{
          '0%, 100%': {
            transform: 'translateY(-5%)',
            // animation-timing-function: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            // animation-timing-function: 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
        spin:{
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)', 
        },
      },
        wiggle:{
          '0%, 100%':{ transform: 'rotate(-6deg)' },
          '50%': {transform: 'rotate(6deg)'},
        },
        beat:{
          '0%, 100%':{transform: 'scale(1)'},
          '50%':{transform: 'scale(1.1)'},
        },
        beatin:{
          '0%, 100%':{ transform: 'scale(1)' },
          '50%': {transform: 'scale(1.1)'},
        },
        pulse:{
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: .6
          },
        }
      }
    },
   
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
