# http-post-headers-faker

Get browser-like HTTP headers for POST requests

```
Most libraries use GET header order for POST requests and the request get detected as a bot

e.g. Akamai
```


## Usage

```javascript
const faker = require("http-post-headers-faker");

const headers = faker.generateChromeHttpPostHeaders();
```

Result:

```javascript
{
  Host: 'example.com',
  Connection: 'keep-alive',
  'Content-Length': 0,
  Pragma: 'no-cache',
  'Cache-Control': 'no-cache',
  'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="115", "Google Chrome";v="115"',
  'sec-ch-ua-platform': '"Windows"',
  'Accept-Language': 'en-US',
  'sec-ch-ua-mobile': '?0',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
  'Content-Type': 'application/json',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  Origin: 'https://example.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  Referer: 'https://example.com/',
  'Accept-Encoding': 'gzip, deflate, br'
}
```

```javascript
const faker = require("http-post-headers-faker");

const headers = faker.generateFirefoxHttpPostHeaders({
  majorVersion: 115,
});
```

Result:

```javascript
{
  Host: 'example.com',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  'Content-Type': 'application/json',
  'Content-Length': 0,
  Origin: 'https://example.com',
  Connection: 'keep-alive',
  Referer: 'https://example.com/',
  'Upgrade-Insecure-Requests': '1',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'same-site',
  'Sec-Fetch-User': '?1'
}
```

## Methods

`generateChromeHttpPostHeaders(options)`

Returns chromium-like headers

### Default options

```javascript
{
    host = "example.com",
    scheme = "https",
    majorVersion = 115,
    secChUaPlatform = "Windows",
    isMobile = false,
    acceptLanguage = "en-US",
    keepConnectionAlive = true,
    userAgentPlatform = "Windows NT 10.0; Win64; x64",
    accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    secFetchSite = "same-origin",
    contentLength = 0,
    contentType = "application/json",
  }
```

`generateFirefoxHttpPostHeaders(options)`

Retuns gecko-like headers

## Default options

```javascript
 {
    host = "example.com",
    scheme = "https",
    majorVersion = 115,
    acceptLanguage = "en-US,en;q=0.5",
    keepConnectionAlive = true,
    userAgentPlatform = "Windows NT 10.0; Win64; x64; rv:109.0",
    accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    secFetchSite = "same-site",
    contentType = "application/json",
    contentLength = 0,
  }
```

If options are overridden, they will merge with the default ones.

Thus, changing `majorVersion` merges with the default options of their respective browser.

## Notice
`Content-Length`'s and other data-specific header values should be changed, e.g.

```javascript
const buffer = getBufferSomehow();

headers['Content-Length'] = buffer.length
```