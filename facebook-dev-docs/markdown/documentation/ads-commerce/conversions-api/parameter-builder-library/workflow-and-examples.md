---
title: "Parameter Builder Get Started Guide"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameter-builder-library/workflow-and-examples
---

# Parameter Builder Get Started Guide

Updated: Jun 30, 2026

The open-source parameter builder library's core functions require interaction with the cookie. Please make sure you've read through the cookie interaction section before proceeding.

## Manage cookie interaction

The parameter builder library may read and store cookies based on the API calls.

Parameter builder client-side SDK contains APIs to automatically save cookies when triggered. The server-side SDK can't write cookies, but it is recommended that advertisers save the suggested cookie list from returned APIs.

Please check the usage below for each API. With regard to the user's cookie and consent, please refer to the [Meta Business Tools Terms⁠](https://www.facebook.com/legal/technology_terms) for details.

### Integration with cookie consent

Businesses can implement code that creates a banner and requires affirmative consent (for example, an "I agree" checkbox at the top of the page) to allow cookie saving actions through the parameter builder library. If you already have a system in place that addresses this need, such as a tag manager, you can make this code optional.

## Quick start guide

Main GitHub link: `https://github.com/facebook/capi-param-builder`

Please make sure you are on the latest version.

* PHP: [README⁠](https://github.com/facebook/capi-param-builder/blob/main/php/README.md?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExbno4VGJSUndyWTlBQ3V2TXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5tokAL979f0k9QMOaqj0zRfl3fHmvboOnIW9a1IOYwb69CXYdOf0IxQVHqxg_aem_owDtD09TvNummgpGOz8y0w)
* NodeJS: [README⁠](https://github.com/facebook/capi-param-builder/blob/main/nodejs/README.md?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExbno4VGJSUndyWTlBQ3V2TXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6LCq-sePpqcCvHKLyX1vlYoll0PQieIWsGG3qB3g5gjel4NoVjsgJkh7kLdA_aem_K0Ibhp9zVcdqFyl7OksLUw)
* Java: [README⁠](https://github.com/facebook/capi-param-builder/blob/main/java/README.md?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExTVlWSkhXTDF2NlpMZk11Y3NydGMGYXBwX2lkATAAAR6pL9LwNFWG3YWlOquaZlRK7PhRlUPvsI7zAo2ja9Am270wPPI7cPP9MBhTZg_aem_exGRtPPftALnXwQkYnnsbg)
* Python: [README⁠](https://github.com/facebook/capi-param-builder/blob/main/python/README.md?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExTVlWSkhXTDF2NlpMZk11Y3NydGMGYXBwX2lkATAAAR4Gan4VARzLUBzRar4nK3VxePwLNUoN8X6jp12YjZcabjMb6xxjVUqc4T8Qpw_aem_Q5fW8SiB8PW74ZSfuJkC3Q)
* Ruby: [README⁠](https://github.com/facebook/capi-param-builder/blob/main/ruby/README.md?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExTVlWSkhXTDF2NlpMZk11Y3NydGMGYXBwX2lkATAAAR6NIhae8JbR6oiDx0b2uabW4nMXFDVrcDmMwsoXUzF0HDH2hv7Lsd0TSksxGQ_aem_AsM8En38PrpaFANv2SpWYg)
* Client JavaScript: [README⁠](https://github.com/facebook/capi-param-builder/blob/main/client_js/README.md?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExTVlWSkhXTDF2NlpMZk11Y3NydGMGYXBwX2lkATAAAR7xVHv9vWUWEe-sB7DI5y7WT7pXgEyNokXMNF3mLI9smGpr0qycU8pC6gW9bA_aem_sGoDdh6P97HvlIgVBWIAEA)
