module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
     extend: {
       keyframes: {
         twinkle: {
           "0%,100%": { opacity: "0.3" },
           "50%": { opacity: "1" },
         },
       },
       animation: {
         twinkle: "twinkle 3s linear infinite",
       },
     },
   },
   plugins: [],
 };
 