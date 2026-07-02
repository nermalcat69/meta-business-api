---
title: "Onboarding changes"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution/messaging
---

# Onboarding changes

Updated: Jun 26, 2026

With the new account model, onboarding flows automatically create a separate Messaging Account per partner and return the ID in the existing WABA ID field. The asset creation and sharing logic is the same — a WhatsApp Business account holds the phone number, and each partner gets their own Messaging Account.

## Embedded Signup

Under the new account model, all available Embedded Signup flows reflect the following changes:

* "WhatsApp Business account" and "Messaging Account" appear in Embedded Signup screens and in Meta Business Suite for onboarded clients
* A WhatsApp Business account and Messaging Account are automatically created when a client completes the flow
* `waac_id` starts appearing in [message events](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) starting at **Phase 2 — New Graph API version**

![Embedded Signup screen showing business asset selection, including business portfolio and WhatsApp account.](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/687037137_1496157952242854_8647551524920721314_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hX1MLtTEV7IQ7kNvwEaby8w&_nc_oc=AdqRlmthqdDYvsbSacFHAXyl9E-P6u_4kmPYn1bBvYFWzgVjk1a7rydaVyydRYoDdiHqr-sRcJF7trzpnhFatqHM&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=8ZWI-uE2AGEy0EXM4o_F8g&_nc_ss=7b2a8&oh=00_AQCyRBUzZGvxz0w34aHOxug4wIu_qyzI0YFHUlPj7oOkIQ&oe=6A604FD8)![Embedded Signup screen showing review of what you will share with the partner, including WhatsApp account and Messaging account access.](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/686298255_1496157992242850_7951476350365429832_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=iWVLuUDyTvAQ7kNvwF7G7iS&_nc_oc=AdqlfafBIYbDF021Zp40a_YtvHWgGFvl_xgA0CBHazqKB7vhYK-HX6IdN6SH7cetKQO5w0jM3lrK9FqZdsjPKeFp&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=8ZWI-uE2AGEy0EXM4o_F8g&_nc_ss=7b2a8&oh=00_AQCCTMGq7ukSVGiob00fdeVCvGhrc9XdzPxLfGAWkOl0QA&oe=6A60552E)

![Embedded Signup confirmation screen showing the WhatsApp account and Messaging account that were created.](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/684492607_1496157998909516_4234667336711844346_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=v65TSZDXOwkQ7kNvwGydLq1&_nc_oc=AdpXNk5Ksp0b2sWO-FwLwzpd-NSfN5KLEfaR6K8kpMtZ6KgMJ_kIMrCrG0evcAthmJQNsUv67Z9PZvvmNV8n4KM3&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=8ZWI-uE2AGEy0EXM4o_F8g&_nc_ss=7b2a8&oh=00_AQD-bm1Z1w033n0mS_xtGI0Uba5FNSop3Db3Mb3fth2K0A&oe=6A6068FE)

## Partner-initiated account creation

With [partner-initiated account creation](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation), the same asset creation and sharing logic applies. Starting at **Phase 1 — General availability**, when a client accepts the partner's request to create and share a Messaging Account, they must provide a phone number. Adding a phone number is no longer optional.

## Onboarding changes by phase

Onboarding updates roll out in phases. Each phase is additive — your existing integration continues to work without code changes.

| Phase | Timing | What ships | What you need to do |
| --- | --- | --- | --- |
| **Phase 1 — General availability** | H2 2026 | * Embedded Signup creates a separate Messaging Account per partner automatically whenever a client completes the onboarding flow * "Add phone number later" is removed; the flow is phone-number-first * [Partner-initiated account creation](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation): clients must now provide a phone number when accepting a partner's request to create and share a Messaging Account * Clients already onboarded with one partner can onboard with a different partner using their existing phone number. The `waac_id` is not yet included in message events (available starting Phase 2) | No code changes, but `waba_id` in [message events](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) now refers to a Messaging Account ID. |
| **Phase 2 — New Graph API version** | H1 2027 | * `waac_id` (WhatsApp Account ID) now included in [message events](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) alongside `cs_id` * New Embedded Signup settings allow you to control if and where the Messaging Account gets created (details to follow) | * Start capturing `waac_id` (WhatsApp Account ID) alongside `cs_id` (business phone number ID) and `waba_id` (Messaging Account ID) in [message events](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) * Can now optionally use WhatsApp Account IDs and Messaging Account IDs with new Graph API endpoints |
| **Phase 3 — Mandatory transition** | H1 2028 | * All Messages API versions require `messaging_account_id` (`waba_id` value in message events) for [multiple Messaging Account scenarios](https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution/messaging/#multiple-messaging-account-scenarios) * All APIs that target a phone number ID in the endpoint path, or accept a phone number ID as a query parameter, now must use WAAC IDs instead (`waac_id` value in message events) | Plan engineering work in 2027 to be on the new APIs before this date. |

## Learn more

* [Updates to WhatsApp Business accounts](https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution/) — overview of the new account model
* [Managing messaging accounts](https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution/messaging/) — how the new account model affects messaging
* [Embedded Signup overview](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview/) — current Embedded Signup documentation
