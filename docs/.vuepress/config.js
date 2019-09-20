module.exports = {
  title: "Hello there.",
  description: "Things Iggy writes about",
  themeConfig: {
    nav: [],
    sidebar: "auto"
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  },
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ]
  ]
};
