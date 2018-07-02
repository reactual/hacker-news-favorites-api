<img src="img.png" alt="alt text" width="600">


# hacker-news-favorites-api
A simple script that will scrape the favorites for a provided hacker news user id.

[Before](https://news.ycombinator.com/favorites?id=sbr464) ⇨ [After](https://reactual.lib.id/hnfavs@dev?id=sbr464&limit=1) 👍


## Why?
The official Hacker News API from Y Combinator doesn't include the favorites endpoint. I use favorites like bookmarks and wanted to sync them to another app.


## Usage

You can run yourself, or use the api endpoint hosted at the below url. Be sure to pass the query params mentioned below.

##### Base Endpoint:
`https://reactual.lib.id/hnfavs@dev`

##### Example URL:
This example would download 1 page of 30 favorites for the user `sbr464`

`https://reactual.lib.id/hnfavs@dev?id=sbr464&limit=1`

---
Accepts 3 query params, only `id` is required.

#### id
*required* | `string` | default='' | The Hacker News username.

#### limit
*optional* | `number` | default=1 | Max # of pages to download (30/page).

#### offset
*optional* | `number` | default=1 (none) | Pagination offset, the page to begin on.

---


## Data Format
The API will return a JSON object-array containg the favorites as below. You can use the article id to obtain more info via the [Hacker News API](https://github.com/HackerNews/API). There is more info (comments link, score) avail to scrape from favorites, but the HN API is more reliable.

```js
[
  {
    // HN article id
    "id": "17437185",

    // Article's direct url (not comments)
    "link": "https://github.com/serhii-londar/open-source-mac-os-apps",

    // Title of the article on HN
    "title": "Awesome macOS open source applications"
  }
]
```

## Notes
Currently, the request timeout is manually set to just under 3 minutes, but could change. You may need to provide an offset and make multiple requests if you are getting a timeout when trying to download hundreds-thousands+ of favorites. If you receive a timeout error, modify the limit/offset and retry the request. We are using [stdlib](https://stdlib.com/) to host the api.

## More Info
Additional docs & a live testing tool avail at [stdlib](https://stdlib.com/@reactual/lib/hnfavs/dev/).

## Local Installation
It's a node.js app, using [x-ray](https://github.com/matthewmueller/x-ray) for the web scraping. See `src/main.test.js` for example usage locally.

```bash

# Clone repo
$ git clone git@github.com:reactual/hacker-news-favorites-api.git

$ cd hacker-news-favorites-api

# Install with yarn or npm
$ yarn

# Run tests
$ yarn test

```
