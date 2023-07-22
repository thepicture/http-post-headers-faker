const getSecChUaBrand = require("./utils/chrome/getSecChUaBrand");

const generateChromeHttpPostHeaders = (
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
  } = {
    host: "example.com",
    scheme: "https",
    majorVersion: 115,
    secChUaPlatform: "Windows",
    isMobile: false,
    acceptLanguage: "en-US",
    keepConnectionAlive: true,
    userAgentPlatform: "Windows NT 10.0; Win64; x64",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    secFetchSite: "same-origin",
    contentLength: 0,
    contentType: "application/json",
  }
) => {
  return {
    Host: host,
    Connection: keepConnectionAlive ? "keep-alive" : "close",
    "Content-Length": contentLength,
    ...{ ...(Math.random() > 0.5 ? { Pragma: "no-cache" } : {}) },
    ...{ ...(Math.random() > 0.5 ? { "Cache-Control": "no-cache" } : {}) },
    "sec-ch-ua": `"${getSecChUaBrand(
      majorVersion
    )}";v="8", "Chromium";v="${majorVersion}", "Google Chrome";v="${majorVersion}"`,
    "sec-ch-ua-platform": `"${secChUaPlatform}"`,
    "Accept-Language": acceptLanguage,
    "sec-ch-ua-mobile": `?${Number(isMobile)}`,
    "User-Agent": `Mozilla/5.0 (${userAgentPlatform}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${majorVersion}.0.0.0 Safari/537.36`,
    "Content-Type": contentType,
    Accept: accept,
    Origin: `${scheme}://${host}`,
    "Sec-Fetch-Site": secFetchSite,
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    Referer: `${scheme}://${host}/`,
    "Accept-Encoding": "gzip, deflate, br",
  };
};

const generateFirefoxHttpPostHeaders = (
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
  } = {
    host: "example.com",
    scheme: "https",
    majorVersion: 115,
    acceptLanguage: "en-US,en;q=0.5",
    keepConnectionAlive: true,
    userAgentPlatform: "Windows NT 10.0; Win64; x64; rv:109.0",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    secFetchSite: "same-site",
    contentType: "application/json",
    contentLength: 0,
  }
) => ({
  Host: host,
  "User-Agent": `Mozilla/5.0 (${userAgentPlatform}) Gecko/20100101 Firefox/${majorVersion}.0`,
  Accept: accept,
  "Accept-Language": acceptLanguage,
  "Accept-Encoding": "gzip, deflate, br",
  "Content-Type": contentType,
  "Content-Length": contentLength,
  Origin: `${scheme}://${host}`,
  Connection: keepConnectionAlive ? "keep-alive" : "close",
  Referer: `${scheme}://${host}/`,
  "Upgrade-Insecure-Requests": "1",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": secFetchSite,
  "Sec-Fetch-User": "?1",
});

module.exports = {
  generateChromeHttpPostHeaders,
  generateFirefoxHttpPostHeaders,
};
