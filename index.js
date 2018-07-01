const Xray = require('x-ray')
const x = Xray()

module.exports = async (id = '', limit = 1, context) => {
  if (!id || typeof id !== 'string') throw Error('invalid user id')

  const u = id.toLowerCase()

  const url = `https://news.ycombinator.com/favorites?id=${u}`

  const selector = 'tr.athing'
  const id_selector = '@id'
  const title = 'a.storylink'
  const link = `${title}@href`
  const more = 'a.morelink@href'

  return await x(url, selector, [{ id: id_selector, title, link }])
    .paginate(more)
    .limit(limit)
}
