---
title: "Parameter Builder Library"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameter-builder-library/get-started
---

# Parameter Builder Library

Updated: Jun 30, 2026

The parameter builder library is a list of open-source SDKs in both client-side (browser JavaScript) and server-side (PHP, Java, Python, Node.js, Ruby). You can implement the parameter builder library to improve the quality of your Conversions API integration. The library can help you create, manage, and send certain customer information parameters, which may lead to performance improvements through increased event match quality (EMQ) scores. The library handles event parameter management in the following ways:

* **Generates match keys**: Automatically generates high-priority Conversions API match keys according to Meta’s best practices.
* **Enhances parameter coverage**: Increases coverage of important event parameters including `fbc` (Meta click ID), `fbp` (Meta browser ID), and IP addresses.
* **Ensures correct formatting**: Ensures that customer information you share, such as email and phone number, is formatted correctly to increase the likelihood of matching to Meta users.
* **Reduces manual effort**: Reduces the manual work and the potential for errors associated with managing event parameters yourself.

## Library overview

**Client-side**: The library and events live in the frontend on the browser side. The libraries are implemented in JavaScript. You can integrate the library in your web page directly.

**Server-side**: The libraries and events live in the backend on the server side. Depending on the language the backend uses, Meta provides libraries in different languages (PHP, Java, Python, Node.js, and Ruby).

## Supported features

The supported parameters are as follows:

| Supported parameter | Supported SDK | Description |
| --- | --- | --- |
| `fbc` (Click ID)  string | Client-side JavaScript  PHP  NodeJS  Java  Python  Ruby | The Meta click ID value is stored in the `_fbc` browser cookie under your domain. See [Managing fbc and fbp parameters](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/fbp-and-fbc) for how to get this value or generate this value from a `fbclid` query parameter.  The format is: `fb.${subdomain_index}.${creation_time}.${fbclid}.${appendix}`  Example: `fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890.ABcDEFGh` |
| `fbp` (Browser ID)  string | Client-side JavaScript  PHP  NodeJS  Java  Python  Ruby | The Meta browser ID value is stored in the `_fbp` browser cookie under your domain. See [Managing fbc and fbp parameters](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/fbp-and-fbc) for how to get this value or generate this value.  The format is: `fb.${subdomain_index}.${creation_time}.${random_number}.${appendix}`  Example: `fb.1.1596403881668.1116446470.ABcDEFGh` |
| `client_ip_address` (Client IP address)  string | Client-side JavaScript  PHP  NodeJS  Java *(coming soon)*  Python *(coming soon)*  Ruby *(coming soon)* | The IP address of the browser corresponding to the event must be a valid IPv4 or IPv6 address. IPv6 is preferable over IPv4 for IPv6-enabled users. The `client_ip_address` user data parameter must never be hashed.  Example:  IPv4: `168.212.226.204.ABcDEFGh`  IPv6: `2001:0db8:85a3:0000:0000:8a2e:0370:7334.ABcDEFGh` |
| Normalized parameters  string   * Email (em) * Phone Number (ph) * First Name (fn) * Last Name (ln) * Date of Birth (db) * Gender (ge) * City (ct) * State (st) * Zip code (zp) * Country (country) * External ID (`external_id`) | Client-side JavaScript  PHP  NodeJS  Java *(coming soon)*  Python *(coming soon)*  Ruby *(coming soon)* | The library adopts the best practice to normalize and hash the customer information parameters. No further action is needed. For more format examples, see [Customer information parameters](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/customer-information-parameters).  Email Example:  Input: `John_Smith@gmail.com`  Normalized format: `john_smith@gmail.com`  Parameter builder SDK SHA256 output: `62a14e44f765419d10fea99367361a727c12365e2520f32218d505ed9aa0f62f.ABcDEFGh` |

## Supported format

For all parameters processed by the parameter builder, Meta adds an appendix field at the end of each parameter to help evaluate the performance of the library. The appendix field has 8 characters containing (1) the SDK version, (2) incrementality, (3) the SDK language.

Check GitHub for implementation details. ([PHP⁠](https://github.com/facebook/capi-param-builder/blob/main/php/capi-param-builder/src/util/AppendixProvider.php) example)

**Note**: If you are seeing the appendix as 2 characters, it is a legacy appendix that only contains the SDK language. Upgrade to the latest version.

## Best practices

* Implement across all surfaces: Make sure the libraries are applied to all surfaces, such as mobile, desktop, and browsers, and domains you want to track.
* Client-side vs Server-side libraries:
  * The server-side library is for the backend server side integration. The server-side library provides support for different languages (PHP, Java, Python, Node.js, and Ruby).
  * The client-side library is for the frontend browser side integration. Note that client-side is only available in JavaScript.
* Cookie management:
  * Capture cookies early: Make sure you save the `_fbp` and `_fbc` cookies as early as possible in the customer journey in your webpage. Ideally retrieve `_fbp` and `_fbc` cookies when loading your landing page. Do not retrieve them only from down-funnel events or when certain events are triggered.
  * Preserve the cookie value format: Do not override or adjust the `_fbc` or `_fbp` cookie. `_fbc` is case sensitive; do not normalize or format the `_fbc` to lowercase.
* IP address handling:
  * Prioritize IPv6 for `getIpFn`: When you implement the `getIpFn` functionality, retrieve the IPv6 address first, then fall back to the IPv4 address if the IPv6 address retrieval capability is not available from the user’s client side.
  * Integrate both the client and server parameter builder to achieve optimized performance:
    * Use the client-side parameter builder to retrieve `client_ip_address` and save to a cookie first.
    * Then use the server-side parameter builder to get the best available `client_ip_address` from both cookie and request to send to Meta using the Conversions API.
* Data normalizing and hashing:
  * Normalize and hash only once: Apply normalization and hashing to customer information parameters only once—either on the client side or the server side—before sending them to Meta through the Conversions API.
  * Parameter value is case-sensitive: All the customer information parameter fields’ values returned from the parameter builder are case sensitive. You can send these values as is back to Meta through the Conversions API without any normalizing (for example, lowercase), as it has been done automatically by the parameter builder SDK in the process.
