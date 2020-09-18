const x = require('x-ray')()

const BASE_URL = 'https://news.ycombinator.com/favorites',
  MORE = 'a.morelink@href',
  SELECTOR = 'tr.athing',
  SELECTOR_LIST = [
    {
      id: '@id',
      title: 'a.storylink',
      link: 'a.storylink@href',
    },
  ]

module.exports = async (id, limit, offset, context) => {
  if (!(typeof id === 'string' && id.length > 0)) {
    throw new TypeError('The user id argument is a required, non-empty string.')
  }
  
  if (!(typeof limit === 'number' && limit >= 1)) limit = 1
  if (!(typeof offset === 'number' && offset >= 1)) offset = 1

  const userId = id.toLowerCase(),
    url = BASE_URL + `?id=${userId}&p=${offset}`

  return await x(url, SELECTOR, SELECTOR_LIST)
    .paginate(MORE)
    .limit(limit)
}
