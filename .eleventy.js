const slinkity = require('slinkity')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({}))

  eleventyConfig.addPassthroughCopy("./css/output.css")

  return {
    dir: {
      input: "pages"
    }
  }
}
