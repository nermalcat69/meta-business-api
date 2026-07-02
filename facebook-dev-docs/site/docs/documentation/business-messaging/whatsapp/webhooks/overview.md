---
title: "On-Behalf-Of account ownership model deprecation"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview
---

# On-Behalf-Of account ownership model deprecation

Updated: May 21, 2026

We have deprecated the On-Behalf-Of ("OBO") account ownership model and replaced it with [partner-initiated WABA creation](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation). All existing WABAs created under the OBO model should have been transferred to clients by October 1, 2025. Post 1st October 2025, all the eligible OBO accounts will be auto-migrated in batches through the end of 2025.

## Deprecation timeline

![OBO deprecation timeline: Mar 24 2025 sunset announcement, 6-month transition window, Sep 30 OBO onboarding deprecated, Oct 1 last day to migrate OBO WABA](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/485146176_691212949947759_244674574159890376_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=oJIMEwSfhwoQ7kNvwGNWGUz&_nc_oc=AdpwqQVM-v2Z0Zkau0fVZNBWK1fZDzUwxvZiG6kvXG3bSxmcnMDQczqf4IPnukRYsG0dPruMJlxJgCG_cbYI2RHN&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=bRg5EDNvkurGQB7tlh6Qhw&_nc_ss=7b2a8&oh=00_AQAitDdArZ1l9mp8cWPZw6091xrSftsI70iYEw_-JedU3w&oe=6A604842)

* **March 24, 2025**: [partner-initiated WABA creation](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation) is made available to all Solution Partners.
* **September 29, 2025**: last day to onboard clients to the OBO model.
* **October 1, 2025**: last day to transfer ownership of OBO model WABAs to clients.

## Payment methods

Partner-initiated WABA creation does not support automatic payment setup. Instead, you must share your credit line with the client via the API. See [Partner-initiated WABA creation](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation) for details.

## Multi-Partner Solutions

Clients cannot be onboarded to a Multi-Partner Solution as part of the
partner-initiated WABA creation process, but can be added to an MPS afterwards. See [Partner-initiated WABA creation](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation) for details.

## Marketing Messages API for WhatsApp

Existing OBO model WABAs need to be transferred to clients if you want to use them with the Marketing Messages API for WhatsApp, but this can be done as part of the [Marketing Messages API for WhatsApp onboarding process](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboarding#onboard-via-a-partner-using-whatsapp-manager).
