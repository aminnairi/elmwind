const { resolve } = require("path")

module.exports = {
  content: [
    resolve("src", "**", "*.elm"),
    resolve("src", "**", "*.html")
  ],
  theme: {
    extend: {},
  },
  plugins: []
}
