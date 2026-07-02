---
title: "whitelisted_domains Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api/commands
---

# whitelisted\_domains Reference

Updated: Jul 1, 2025

#### Messenger Profile API

`whitelisted_domains` is a property of the Messenger Profile API. For information on retrieving, setting, updating, and deleting `whitelisted_domains`, see the [Messenger Profile API Reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api).

The `whitelisted_domains` property of your bot's Messenger profile specifies a list of third-party domains that are accessible in the Messenger webview for use with the [Messenger Extensions SDK](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview), and the [Checkbox Plugin](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery).

## Requirements

To set or update the domain whitelist you must have the 'Administrator' role for the Page associated with the bot.

#### Domain Name and HTTPS Required

Domains must meet the following requirements to be whitelisted:

* Served over HTTPS
* Use a fully qualified domain name, such as https://www.messenger.com/. IP addresses and localhost are not supported for whitelisting.

## Whitelisting in Page Settings

In addition to using the Messenger Profile API, Page admins may also update their domain whitelist in Page settings by doing the following:

![](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/24233971_162986520866800_981524615547322368_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5RTYkkZ8D5kQ7kNvwEXyP35&_nc_oc=Adr3Z-DHTgLpxie2vxZBrcrOGZXDj_VeAEOuzQtaUmEWYdyzhcmt2Qoz6vzAX4CEMjyU4uA7HuCiQ-JMVwzqOvPD&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=DWkDSWPUnDQlinQG_hlYEg&_nc_ss=7b289&oh=00_AQDbXJk0Vq5JavzjtwSExp9JvWK-yYAu6EtAegxesOpo3Q&oe=6A607746)

* Click **Settings** at the top of your Page
* Click **Advance Messaging** on the left
* Edit whitelisted domains for your page in the **Whitelisted Domains** section

## `whitelisted_domains` Format

```
{  
  "whitelisted_domains":[  
    "<WHITELISTED_DOMAIN>",  
    "<WHITELISTED_DOMAIN>",  
    ...  
  ]  
}
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `whitelisted_domains` | Array<String> | A list of domains being used. All domains must be valid. Up to 50 domains allowed. |

## Rate Limit

Calls to the Messenger Profile API are limited to 10 API calls per 10 minute interval. This rate limit is enforced per Page.
