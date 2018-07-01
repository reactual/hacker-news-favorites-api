# hacker-news-favorites-api
A simple script that will scrape the favorites for a provided hacker news user id

https://news.ycombinator.com/favorites?id=sbr464 -> https://reactual.lib.id/hnfavs@dev?id=sbr464&limit=1

Currently hosted on stdlib.com, may change.

Docs available at https://stdlib.com/@reactual/lib/hnfavs/dev/

# Usage

### Free API Endpoint
You can run yourself, or the api endpoint hosted at the following url. Be sure to pass the query params mentioned below.

https://reactual.lib.id/hnfavs@dev
---
Accepts 2 query params

### id
required, string, the hn user id. Default is '', and will error if not provided.

### limit 
optional, number, for pagination, 30 favs/page. Default is 1


