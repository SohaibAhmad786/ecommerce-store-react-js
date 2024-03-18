// vite.config.js
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  // ... other configurations
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});



// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";

// export default defineConfig({
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
// })