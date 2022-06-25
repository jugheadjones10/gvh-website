const { Directus } = require('@directus/sdk')

module.exports = async function() {
  const directus = new Directus('https://fgi99j4i.directus.app')
  const news = await directus.items('news').readByQuery({ limit: -1 })

  console.log(news)
  return { news: news.data }
};
