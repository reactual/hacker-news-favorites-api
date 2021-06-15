const xray = require('x-ray')()

interface Fav {
  id: string
  title: string
  user: string
  userLink: string
  storyLink: string
}

interface Comment {
  id: string
  title: string
  user: string
  userLink: string
  storyLink: string
  storyId: string
  parentLink: string
  commentLink: string
  comment: string
}

interface ParsedComment extends Comment {
  commentText: string
}

type Context = unknown
type Response = ParsedComment[] | Fav[]

const FAVORITES_LIST: Fav[] = [{
  id: '@id',
  title: 'a.storylink',
  user: '.commhead a.hnuser',
  userLink: '.commhead a.hnuser@href',
  storyLink: 'a.storylink@href',
}]

const COMMENTS_LIST: Comment[] = [{
  id: '@id',
  title: '.commhead .storyon a',
  user: '.commhead a.hnuser',
  userLink: '.commhead a.hnuser@href'
  storyLink: '.commhead .storyon a@href',
  storyId: '',
  parentLink: '.commhead .par a@href',
  commentLink: '.comment a@href',
  comment: '.commtext',
}]

const BASE_URL: string = 'https://news.ycombinator.com/favorites'
const SELECTOR: string = 'tr.athing'
const MORE: string = 'a.morelink@href'

module.exports = async (
  userId: string,
  limit: number,
  offset: number,
  isComments: boolean,
  context?: Context
): Response => {
  if (!(typeof userId === 'string' && userId.length >= 1)) {
    throw new TypeError('The user id argument is a required, non-empty string.')
  }

  const userIdLower: string = userId.toLowerCase()

  if (!(typeof limit === 'number' && limit >= 1)) limit = 1
  if (!(typeof offset === 'number' && offset >= 1)) offset = 1

  let url: string = BASE_URL + `?id=${userIdLower}&p=${offset}`

  if (isComments) {
    url += '&comments=t'
    const results: Comment[] = await xray(url, SELECTOR, COMMENTS_LIST)
      .paginate(MORE)
      .limit(limit)
    const parsed: ParsedComment[] = parseComments(results)
    return parsed
  } else {
    const results: Fav[] = await xray(url, SELECTOR, FAVORITES_LIST)
      .paginate(MORE)
      .limit(limit)
    return results
  }
}

function parseComments(results: Comment[]): ParsedComment[] {
  const parsed: ParsedComment[] = []
  for (let i = 0, entry: Comment, text: string, n = results.length; i < n; ++i) {
    entry = results[i]
    text = entry.comment ? `(todo) ${entry.comment}` : '(todo)'
    parsed[parsed.length] = {
      ...entry,
      commentText: text,
    }
  }
  return parsed
}
