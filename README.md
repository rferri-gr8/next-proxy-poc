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
