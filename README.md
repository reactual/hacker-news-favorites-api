<img src="img.png" alt="alt text" width="600">


# hacker-news-favorites-api
A simple script that will scrape the favorites for a provided hacker news user id

[Before](https://news.ycombinator.com/favorites?id=sbr464) ⇨ [After](https://reactual.lib.id/hnfavs@dev?id=sbr464&limit=1) 👍

Additional docs and testing available at [stdlib](https://stdlib.com/@reactual/lib/hnfavs/dev/).

## Usage

You can run yourself, or use the api endpoint hosted at the above url. Be sure to pass the query params mentioned below.

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

## Notes
The timeout for the API endpoint on (stdlib.com)[https://stdlib.com/] is currently 30 seconds. You may need to provide an offset and make multiple requests to download over 10-15 pages if you receive a timeout. If you hit the timeout, you will get an error only, not any results.


## Local Installation


```bash

# Clone repo
$ git clone git@github.com:reactual/hacker-news-favorites-api.git

$ cd hacker-news-favorites-api

# Install with yarn or npm
$ yarn

# Run tests
$ yarn test

```
