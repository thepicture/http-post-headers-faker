const expect = require("node:assert/strict");
const { describe, it } = require("node:test");

const faker = require("..");

const { keys } = Object;
const toLowerCase = (element) => element.toLowerCase();
const containsIn = (array) => (element) => array.includes(toLowerCase(element));

expect.containsOrder = (actual, expected) =>
  expect.ok(
    actual
      .filter(containsIn(expected))
      .every((key, index) => expected[index] === toLowerCase(key))
  );

describe("faker", () => {
  describe("chrome", () => {
    it("should fake sec-fetch-* order", () => {
      const expected = ["sec-fetch-site", "sec-fetch-mode", "sec-fetch-dest"];

      const actual = keys(faker.generateChromeHttpPostHeaders());

      expect.containsOrder(actual, expected);
    });

    it("should fake sec-ch-ua-* order", () => {
      const expected = ["sec-ch-ua", "sec-ch-ua-platform", "sec-ch-ua-mobile"];

      const actual = keys(faker.generateChromeHttpPostHeaders());

      expect.containsOrder(actual, expected);
    });

    it("should fake main header order", () => {
      const expected = [
        "host",
        "connection",
        "content-length",
        "accept-language",
        "user-agent",
        "accept-encoding",
      ];

      const actual = keys(faker.generateChromeHttpPostHeaders());

      expect.containsOrder(actual, expected);
    });
  });

  describe("firefox", () => {
    it("should fake sec-fetch-* order", () => {
      const expected = [
        "sec-fetch-dest",
        "sec-fetch-mode",
        "sec-fetch-site",
        "sec-fetch-user",
      ];

      const actual = keys(faker.generateFirefoxHttpPostHeaders());

      expect.containsOrder(actual, expected);
    });

    it("should fake main header order", () => {
      const expected = [
        "host",
        "user-agent",
        "accept",
        "accept-language",
        "accept-encoding",
        "content-length",
        "connection",
      ];

      const actual = keys(faker.generateFirefoxHttpPostHeaders());

      expect.containsOrder(actual, expected);
    });
  });
});
