const x = require('x-ray')()

module.exports = async (id = '', limit = 1, offset = 1, context) => {
  if (!id || typeof id !== 'string') throw Error('invalid user id')

  const user = id.toLowerCase(),
    articleId = '@id',
    title = 'a.storylink',
    link = `${title}@href`,
    selector = 'tr.athing',
    more = 'a.morelink@href',
    page = offset < 1 ? 1 : offset,
    url = `https://news.ycombinator.com/favorites?id=${user}&p=${page}`

  return await x(url, selector, [{ id: articleId, title, link }])
    .paginate(more)
    .limit(limit)
}
