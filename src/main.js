const x = require('x-ray')()

module.exports = async (id = '', limit = 1, offset = 1, context) => {
  if (!id || typeof id !== 'string') throw Error('invalid user id')

  const user = id.toLowerCase()
  const page = offset < 1 ? 1 : offset
  const url = `https://news.ycombinator.com/favorites?id=${user}&p=${page}`

  const selector = 'tr.athing'
  const articleId = '@id'
  const title = 'a.storylink'
  const link = `${title}@href`
  const more = 'a.morelink@href'

  return await x(url, selector, [{ id: articleId, title, link }])
    .paginate(more)
    .limit(limit)
}
