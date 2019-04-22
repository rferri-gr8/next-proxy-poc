# Next.js Proxy Proof-of-Concept

This is a proof-of-concept for a SSR-enabled Next.js app that proxies unhandled routes to a legacy http server. This is an approach that might be taken to front a legacy web application with a Next.js app.

## Get Started

Start the legacy server at `http://localhost:8080`

```sh
cd legacy-server
npm run start
cd ../
```

## Legacy Server

The legacy server handles GET and POST requests to any path by echoing the http request it receives in JSON format.

The server will check for the existence of a `session-token` cookie. If no such cookie exists, it will attempt to set one with a random value.

### Response

The response will include the following information from the request:

- HTTP Method
- HTTP Headers
- Parsed Cookies
- Parsed URL Query String Parameters
- URL Path
- Parsed HTTP Body (if JSON or url-encoded parameters)

#### Sample Response

```json
{
  "method": "POST",
  "cookies": { "session-token": "20560280312699453" },
  "headers": {
    "host": "localhost:8080",
    "connection": "keep-alive",
    "content-length": "24",
    "pragma": "no-cache",
    "cache-control": "no-cache",
    "origin": "http://localhost:8080",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
    "content-type": "application/json",
    "accept": "*/*",
    "referer": "http://localhost:8080/hello?name=Russ",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9",
    "cookie": "session-token=20560280312699453"
  },
  "query": { "name": "Russ" },
  "path": "/hello",
  "body": { "message": "Bonjour" }
}
```
