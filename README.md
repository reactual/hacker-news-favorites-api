<img src="img.png" alt="alt text" width="600">


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
Accepts 3 query params

### id
required, string, the hn user id. Default is '', and will error if not provided.

### limit 
optional, number, for pagination, 30 favs/page. Default is 1

### offset
optional, number, to offset pagination. Sending a value of 5 would start on the 5th page, (skip the newest 120 favorites). Default is 1 (no offset).

# Notes
The timeout for the API endpoint on (stdlib.com)[https://stdlib.com/] is currently 30 seconds. You may need to provide an offset and make multiple requests to download over 10-15 pages if you receive a timeout. If you hit the timeout, you will get an error only, not any results.
