---
title: "Onboard WhatsApp Business app users"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients
---

# Onboard WhatsApp Business app users

Updated: Jun 26, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This feature is sometimes referred to as “Coexistence” in support channels and Partner documentation.

You can configure [Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview) to allow business customers to onboard using their existing [WhatsApp Business app⁠](https://business.whatsapp.com/products/business-app?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6KdcceqiNNYqymDpYm9KBjPTP58va7haSvNArot6NrPGxcy44C-DWeG8LGSQ_aem_z4TvYbYJHXtlJ8Vgw1kNGw) account and phone number. After a business customer chooses this option and onboards successfully, they can use your app to send high volumes of messages. They can still send messages on a one-to-one basis using the WhatsApp Business app, and WhatsApp keeps messaging history between both apps in sync.

## How it works

When you configure Embedded Signup for WhatsApp Business app phone numbers, a business customer who goes through the flow will be given the option to connect their existing WhatsApp Business app account to Cloud API:

![Embedded Signup Select your setup screen with the option to connect an existing WhatsApp Business app account](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/594963134_868478475878739_1087736207670610686_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Yqer-83CLJgQ7kNvwHMoaXX&_nc_oc=AdonOy7kBpo0MhdBoeqIm-VKP-zvnRARJ4YrEd-k1vUfvBndp1cR_ze6yZcDDGVg2nVWUCyY7YZKBPgWaMF8FPiV&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQCaC_Pvt_NbGu3A3EASITfijHGlCfCWHMSX4GgyuY5RsA&oe=6A606DAA)

If the business customer chooses to connect their existing account and enters their WhatsApp Business app phone number, WhatsApp presents a verification code to enter.

![Add a phone number for WhatsApp screen with country code dropdown and phone number field filled in](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/597395987_869663325479495_9037141925476479232_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=omXTnlnYr1gQ7kNvwFJo-bp&_nc_oc=AdpBwS4Kn8-is_9UGFjcXZBVyTGYsY_npkDNoTX9xBemeEzSr6KbFxrG_czi7rXZTw3dp8yTibMgoTf-XPucv2T8&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQD0AQSC5uqLTFPZ3A3JuMHUHP4cIH_OCRwET7RN12e-nQ&oe=6A607479)

The message instructs the business to copy the verification code and follow the steps:

![Share your contacts and chats screen showing the verification code and numbered steps to start the process](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/594964209_9901262313331817_1729648792793400624_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Nv35FNEeZswQ7kNvwE2omaj&_nc_oc=AdpaBZL9EI_cA0m2vgrDZDYSi-kb7lzH9yXbcOdBzA6Is6CKf3tDae1ITYIOyi9pIbdGPBURAzTtEZvDPdC0KgFR&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQCHFBdqkBHIa0qz65_IJNOP25G9VCfaa_BU48p1FspV0g&oe=6A606655)

Expect to receive a message from the official Facebook Business Account. Tap **Connect**:

![WhatsApp Business app chat with a Facebook Business Account message and a Connect to the Business Platform button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/594961051_1373101364351984_5370676390334015719_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kuaT4Wp2Gm0Q7kNvwFEnKqK&_nc_oc=AdrEoloWJ4QIUZvjZYFrqeJ1yRMTbwpW0pJk4NzZwoJt35BLPzpk0FELTv-4YAzKHpAbSPpaCO9IfG_ktwXKMizb&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQDnDEWuXnptLc2KYJy7FZKJSXFpLowB6eGdsOmEM2eKDQ&oe=6A604EC7)

Tap the **Connect to the Business Platform** button to continue the onboarding process.

![Business Platform screen explaining coexistence benefits with a Connect to the Business Platform button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/597170039_2568406460203291_8926108086902613098_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6IXgspASgUcQ7kNvwGISmZa&_nc_oc=Adr2HVcu_UqV_NyHfoRNfBIXKK4Q-5QqevzacekFxxr_nNHTCZY1mB07KgylNwb70dWGNV5NpVqmrAkYYZvv_Gsj&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQBMCxHLXexbx8kY6NLfBl6b7B0_Z5LvlbH4Yh_6AzkWxQ&oe=6A605E56)

Tap the **Confirm** button in the app to give the business the option to share their chat history with you.

![Share chat history dialog with Share chats, Don't share chats, and Cancel options over the Business Platform screen](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/598069231_2034072847437945_6021154947158300647_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=oiw8dYIz_8QQ7kNvwG5m4rs&_nc_oc=AdoNr2AAnYq7MJc0Xtqb57V1JmHQdpP8YD9IJXG-A-AU21TnzWBadTR7yhEQ0EwFQgjcWhW6sk9oScPNAv9rn2Kz&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQBN99ej6rthGHuZ2HfpnUhXacdkP1jWJmwomQtzQrRLoA&oe=6A605AB0)

Paste the verification code.

![Enter verification code screen with an Enter Access code field and a Scan QR code instead option](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/594972252_819348487750100_262170023760155076_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AK6IzoZUZ7oQ7kNvwGC3uxl&_nc_oc=AdqGbIv44O8Jjj3IVinGl4pW3z0Y6nN6aU65PQwM-UPH2LJ8IFmlALKGeQFvaw3PCp5E8TOYywJY5egUqwrRssYM&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQBqxxfdYaWV8H-jEfScFxQWCGuzMykYNhs86yNJ7EPzGw&oe=6A6060C4)

They can complete the remainder of the Embedded Signup flow. Completing the flow returns their [asset IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) and [exchangeable token code](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback) to the spawning window, as normal. You can then use this information in API calls to onboard the business customer the same way you would any other business customer. You can also synchronize their contacts and messaging history (if permitted by the business) so you can populate it in your app.

## Requirements

* The business customer must use WhatsApp Business app version **2.24.17** or higher.
* You must already be a [Solution Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/get-started-for-solution-partners) or [Tech Provider](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers).
* You must know how to use [Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api).
* Your webhook callback must be able to successfully accept and digest webhooks.
* You must use Embedded Signup with [session logging](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener).

## Limitations

* To remain compatible with the WhatsApp Business app, business phone numbers that are in use with both the WhatsApp Business app and Cloud API have a fixed throughput of 20 mps.
* If your business customer worked with a partner in the past and still shares the previous credit line, they may see an error when attempting to switch to a new partner. Follow the [guide](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/business-customer-support) to resolve the error.

## Pricing

After a business customer has been onboarded to Cloud API, messages sent by the business via the WhatsApp Business app will continue to be free, but messages sent via Cloud API will be subject to [Cloud API pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing).

See our [API Solutions for WhatsApp Business App Users](https://developers.facebook.com/resources/API-solutions-for-WhatsApp-Business-App-users.pdf) pricing explainer PDF for breakdowns of common pricing scenarios.

## Customer service window

WhatsApp opens a [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) only when a WhatsApp user messages a business customer who is already onboarded onto Cloud API. If a WhatsApp user messages a business customer just before the business customer is onboarded onto Cloud API, the business customer can only respond with a template message, since WhatsApp opened no customer service window. If the WhatsApp user messages the business customer after onboarding onto Cloud API, WhatsApp opens a customer service window as normal, and the business customer can then respond with a non-template message.

The 24-hour customer service window restriction applies to messages sent via Cloud API. Messages sent from the WhatsApp Business app are not subject to the customer service window and do not create, extend, or affect Cloud API conversation windows or Cloud API pricing.

## Feature comparison

The following table describes features available to business customers who have been onboarded to Cloud API, as well as any changes to WhatsApp Business app functionality post-onboarding.

| Existing feature on the WhatsApp Business App | Changes to features on the WhatsApp Business App after onboarding to Cloud API | Is the WhatsApp Business app feature supported on Cloud API? |
| --- | --- | --- |
| Individual (1:1) chats | Message Edit/Revoke is now supported. | Supported.  All chat messages in the most recent 6 months can be synchronized.  Messages sent and received are mirrored between the Cloud API and WhatsApp Business app. |
| Contacts | No change. | Supported.  All contacts with a WhatsApp number can be synchronized. |
| Group chats | No change. | Not supported.  Group chats will not be synchronized. |
| Disappearing messages | Disappearing messages will be turned off for all individual (1:1) chats | Not supported. |
| [View once message⁠](https://faq.whatsapp.com/1077018839582332?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7pZRGJNkapR82BkLzl4w4_UE7S1zwKq24_-Qim5T32ngLAibh0wuNK_zyGbw_aem_1LFZJ9vp50IGGkBwMJKTlA) | View once messages will be disabled for all individual (1:1) chats | Not supported. |
| Live location message | Live location messages will be disabled for all individual (1:1) chats | Not supported. |
| Broadcast lists | Broadcast lists will be disabled.  Business will not be able to create new Broadcast lists.  Existing Broadcast lists will become read-only. | Not supported. |
| Voice and video calls | No change. | Not supported. |
| Business tools (for example, catalog, orders, status) | No change. | Not supported. |
| Messaging tools (for example, marketing messages, greeting message, away message, quick replies, labels) | No change. | Not supported. |
| Business profile (for example, business name, address, website) | No change. | Not supported. |
| Channels | No change. | Not supported. |

## Linked devices

Businesses can link up to four WhatsApp “companion” clients to their WhatsApp Business app account on other devices (described as “[linked devices⁠](https://faq.whatsapp.com/378279804439436/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7-VObiTxlxTaqCGXBIbVmv_9gUI0gZ2PyNcZEG5dRGO-rMPyr_5diVpB4C6Q_aem__oExKUnJtWiy6zuMT6Ie7A)” in our Help Center).

All companion clients are supported, except for [WhatsApp for Windows⁠](https://faq.whatsapp.com/1317564962315842/?cms_platform=windows-desktop&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5X5NMdR8BYNeRmQUydEo_MuPv9UfuVrrfuCgz3YxIIe28OoxyUf1KYisv97Q_aem_WQ7XY5OthMfAYYnv9wjnZA) and [WhatsApp for WearOS⁠](https://faq.whatsapp.com/564431798835071/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7pZRGJNkapR82BkLzl4w4_UE7S1zwKq24_-Qim5T32ngLAibh0wuNK_zyGbw_aem_1LFZJ9vp50IGGkBwMJKTlA).

Once a business customer onboards to Cloud API with an existing WhatsApp Business app account and number, all companion apps will be unlinked from the account, and the business can then re-link any supported companion apps.

WhatsApp users who use an unsupported companion client to message an onboarded business can do so, but the message will not trigger [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages) webhooks, so the business won’t be able to mirror the message in their own app.

Messages sent from an onboarded business (by any means) that are viewed in an unsupported companion device will appear with placeholder text, instructing the WhatsApp user to view the message in their primary device.

## Setting up your app

### Step 1: Subscribe to webhooks

Navigate to the [**App Dashboard**](https://developers.facebook.com/apps) > **WhatsApp** > **Configuration** panel and subscribe your app to the following WhatsApp Business account webhook topic fields, and make sure your app’s callback code can digest payloads for each of them. These fields are in addition to any fields you are already subscribed to as a partner.

* [history](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#history) — describes past messages the business customer has sent/received
* [smb\_app\_state\_sync](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#smb-app-state-sync) — describes the business customer’s current and new contacts
* [smb\_message\_echoes](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#smb-message-echoes) — describes any new messages the business customer sends with the WhatsApp Business app after having been onboarded

### Step 2: Customize Embedded Signup

Add a `featureType` property set to `whatsapp_business_app_onboarding` to the `extras` object in the [launch method and callback registration](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#launch-method-and-callback-registration) portion of the Embedded Signup implementation code.

```
// Launch method and callback registration
  {
  "config_id": "<CONFIGURATION_ID>",
  "response_type": "code",
  "override_default_response_type": true,
  "extras": {
    setup: {},
    "featureType": "whatsapp_business_app_onboarding", // set to 'whatsapp_business_app_onboarding'
    "sessionInfoVersion": "3"
  }
}
```

To verify that you have enabled the feature correctly, access your implementation of Embedded Signup. If the [WABA selection screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen) has been replaced with a screen that gives you the option to connect your existing WhatsApp Business account, the feature is enabled:

![Embedded Signup Select your setup screen replacing WABA selection with the option to connect an existing WhatsApp Business app](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/583640207_829673969692795_3749727619181245789_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=N_jyw8Mi8_sQ7kNvwGMPx8P&_nc_oc=Adpax8VyD3xZtfQfbirVW5cKpMiAlH-wZRfQmDWxSDpjZfVCACuN9_7pkLt05wkTqmwwBs5hesnSoj2oHd0Xe_QF&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQCEpAQ3d7-BEy1GnL2gCVtunDnyveoKxa6kuPqSfZsNRg&oe=6A606DA5)

### Step 3: Surface Embedded Signup to customers

Once you have confirmed that the feature has been enabled, surface Embedded Signup to your business customers.

When a business completes the flow and you [onboard the customer](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#onboarding-business-customers), you have 24 hours to [synchronize their messaging history](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#synchronizing-whatsapp-business-app-data), otherwise they must be offboarded and they must complete the flow again. For this reason:

* onboard and synchronize as soon as the business completes the flow
* inform the business that you are synchronizing their WhatsApp Business app data
* advise them to keep the WhatsApp Business app open to facilitate the synchronization process

Onboarding and synchronization can take several minutes, depending on a number of factors such as the size of the business’s messaging history, their internet speed, and how quickly you can digest webhooks.

When you complete the **onboarding** process, the WhatsApp Business app will automatically refresh and indicate to the business that their number is now connected to the API:

![WhatsApp Business app Business Platform settings showing the connected account with a Disconnect button](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/476788868_1168860751914222_5506074718266109385_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y1EvF-JzC-YQ7kNvwFdgTDC&_nc_oc=AdrVH0B3-rAtG0OO-m8xa3K97uJlBl7xi0TRhc-MBnbGQQYtUQJFjg_HIOaew42wRSk58iqhcy3ydKAWO3yPxczL&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=PNILC_lGxSdlkqFpKOoI7g&_nc_ss=7b2a8&oh=00_AQBy8mhpH_NEywFGQ_pkdQvxK-G1yvqlv5g9yxlOtPXYgw&oe=6A605F50)

After you finish synchronizing the business’s messaging history, inform the customer that the process is complete.

## Onboarding business customers

When a business customer successfully completes the Embedded Signup flow, Embedded Signup returns their asset IDs and an exchangeable token code to the window that spawned the flow, as normal, but the [session event](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) payload sets `event` to `FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING`:

```
```
{  
  data: {  
    waba_id: "<CUSTOMER_WABA_ID>"  
  },  
  type: "WA_EMBEDDED_SIGNUP",  
  event: "FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING",  
  version: 3  
}
```
```

Capture the customer’s asset IDs and exchangeable token code and use them to onboard the customer as you normally would, but **skip the phone number registration step**, as the number is already registered.

* [Onboarding business customers as a partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner)
* [Onboarding business customers as a Tech Provider](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider)

Once you have completed these onboarding steps, you can begin the [messaging history synchronization](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#synchronizing-whatsapp-business-app-data) process.

### Check onboarding status (optional)

To confirm that the customer’s business phone number is registered for both Cloud API and WhatsApp Business app use, request the `is_on_biz_app` and `platform_type` fields on the business phone number ID:

Example request:

```
curl 'https://graph.facebook.com/v25.0/106540352242922?fields=is_on_biz_app,platform_type' \
-H 'Authorization: Bearer EAAJB...'
```

Example response:

If `is_on_biz_app` is `true` and `platform_type` is `CLOUD_API`, the business phone number is able to use Cloud API and the WhatsApp Business app:

```
```
{  
  "is_on_biz_app": true,  
  "platform_type": "CLOUD_API",  
  "id": "106540352242922"  
}
```
```

## Synchronizing WhatsApp Business app data

After you onboard the business customer, you have 24 hours to synchronize their contacts and messaging history, otherwise they must be offboarded and complete the flow again. For this reason, begin the synchronization process as soon as you finish onboarding the business.

As a reminder, make sure that you subscribed to the business’s WABA when you [onboarded the business](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#onboarding-business-customers), and that you are [subscribed to the additional webhook fields](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#step-1-subscribe-to-webhooks), otherwise you will miss important webhooks.

### Step 1: Initiate contacts synchronization

Use the [SMB App Data API](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/smb_app_data#Creating) to request the business customer’s contacts information.

If the request is successful, WhatsApp sends a set of [smb\_app\_state\_sync](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#smb-app-state-sync) webhooks describing the WhatsApp contacts in the business’s WhatsApp Business app. Future additions or changes to the business’s [WhatsApp contacts⁠](https://faq.whatsapp.com/1270784217226727/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5ee5bPoPQCJjY-Hpr_ZpMGiNp3tnPJivpwwtOcac7KVYYjPewIPSbeYD7PtQ_aem_bRFx7smthpchTfxk06o5qg) will trigger a corresponding smb\_app\_state\_sync webhook.

You can only perform this step once. If you need to perform it again, the customer must first offboard, then complete the Embedded Signup flow again.

#### Example request

```
```
curl -X  POST \  
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/smb_app_data \  
-H 'Authorization: <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "sync_type": "smb_app_state_sync"  
}'
```
```

#### Example response

Upon success:

```
```
{  
  "messaging_product": "whatsapp",  
  "request_id" : "<REQUEST_ID>"  
}
```
```

Store the `request_id` value in case you need to contact support.

### Step 2: Initiate message history synchronization

Use the [SMB App Data API](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/smb_app_data#Creating) again, this time to initiate messaging history synchronization.

Upon success, zero, one, or more history webhooks will be triggered, depending on if the business chose to share their messaging history with you.

You can only perform this step once. If you need to perform it again, the customer must first offboard, then complete the Embedded Signup flow again.

#### Messaging history shared

If the business chose to share their messaging history with you, a series of history webhooks will be triggered, describing each message sent to, or received from, WhatsApp users within a set period of time.

See [history](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#history) for a description of the contents of these webhooks and how they are organized.

#### Messaging history not shared

If the business chose not to share their messaging history with you, a [history](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#history) webhook with error code `2593109` will be triggered instead.

#### Example request

```
```
curl -X  POST \  
'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/smb_app_data \  
-H 'Authorization: <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "sync_type": "history"  
}'
```
```

#### Example response

If the request is successful, the API will respond with the following JSON payload. This response only indicates successful acceptance of the request; it does not indicate whether the business shared their messaging history with you.

```
```
{  
  "messaging_product": "whatsapp",  
  "request_id" : "<REQUEST_ID>"  
}
```
```

Store the `request_id` value in case you need to contact support.

### Step 3: Mirror new WhatsApp Business app messages

Onboarded businesses are still able to use the WhatsApp Business app and supported [companion devices](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#linked-devices) to send and receive messages. Each time a business sends a message with one of these apps, it triggers an [smb\_message\_echoes](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#smb-message-echoes) webhook, which you must digest and display in the contact message thread history in your app.

## Reporting conversion activity

Onboarded business customers may run Click to WhatsApp ads, so report purchase/lead-gen signals on behalf of the business using the Conversions API. See [Conversions API for business messaging](https://developers.facebook.com/documentation/ads-commerce/conversions-api/business-messaging).

## Offboarding business customers

You cannot use the [Deregister API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-deregister-api#post-version-phone-number-id-deregister) to deregister a business phone number from Cloud API if it is already in use with both Cloud API and the WhatsApp Business app.

Instead, your clients can use the WhatsApp Business app to disconnect from Cloud API by navigating to the **Settings** > **Account** > **Business Platform** and clicking the **Disconnect Account** button. When your client disconnects from Cloud API, an [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook with a `PARTNER_REMOVED` event is triggered. This webhook may include a `disconnection_info` object that indicates the reason for the disconnection and whether it was initiated by your client or the system.

## Errors

If you onboard a business customer with a WhatsApp Business app phone number, you may receive an [unsupported messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/unsupported) webhook with error code `131060`. This is expected and can occur in the following scenarios:

* **First-time messaging**: A WhatsApp user messages your business for the first time. This is especially common when users tap one of your [ads that click to WhatsApp⁠](https://business.whatsapp.com/products/create-ads-that-click-to-whatsapp?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6lU_QRdXPBfOtX4kSjpfR40oafIVNIfuWOWgjF-at-oiixBivnMKgEOmcOCQ_aem_RY9oVg23lRcpUfRc2hm22Q) and immediately send a message. The error typically resolves within a few seconds, after which WhatsApp delivers messages normally.
* **Unsupported companion device**: A WhatsApp user with an unsupported [companion device](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#linked-devices) sends or receives a message to or from your business.

If you receive this webhook, instruct the business to check the WhatsApp Business app for the message.

## Webhooks

### account\_update

Describes changes to a WhatsApp Business account (“WABA”).

#### Trigger events

* the business phone number associated with the WABA changes
* the WABA’s status changes

#### Payload syntax

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WABA_ID>",  
      "time": <WEBHOOK_TIMESTAMP>,  
      "changes": [  
        {  
          "value": {  
              "phone_number": "<BUSINESS_PHONE_NUMBER>",  
              "event": "<EVENT>",  
              "disconnection_info": {  // only included for PARTNER_REMOVED events  
                "reason": "<DISCONNECTION_REASON>",  
                "initiated_by": "<DISCONNECTION_INITIATED_BY>"  
              }  
           },  
          "field": "account_update"  
        }  
      ]  
    }  
  ]  
}
```
```

#### Example payload

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "time": 1739212624,  
      "changes": [  
        {  
          "value": {  
              "phone_number": "15550783881",  
              "event": "PARTNER_REMOVED",  
              "disconnection_info": {  
                "reason": "PRIMARY_INACTIVITY",  
                "initiated_by": "SYSTEM"  
              }  
           },  
          "field": "account_update"  
        }  
      ]  
    }  
  ]  
}
```
```

The `disconnection_info` object contains:

* `reason` — Why your client was disconnected. Values: `ACCOUNT_DISCONNECTED` (your client’s account was disconnected due to [enforcement](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement) or because your client explicitly deleted their WhatsApp account; can be `USER` or `SYSTEM` initiated), `BUSINESS_DOWNGRADE` (your client registered their business phone number with the consumer WhatsApp app), `CHANGE_NUMBER` (your client changed their phone number), `COMPANION_INACTIVITY` (companion device inactive for approximately 30 days), `PRIMARY_INACTIVITY` (primary device inactive for approximately 14 days), `USER_RE_REGISTERED` (your client re-registered on a new device).
* `initiated_by` — Whether the disconnection was client- or system-initiated. Values: `USER`, `SYSTEM`.

See the [account\_update webhook reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update#partner-removed-disconnection) for full details.

### `account_offboarded`

Describes changes to a WhatsApp Business account (“WABA”) when the business offboards due to device change or re-registration.

#### Trigger events

* The business phone number associated with the WABA changes devices and re-registers.
* The WABA’s status changes due to the business offboarding their WhatsApp Business app phone number.

#### Payload syntax

```
```
{  
 "entry": [  
   {  
     "id": "<WABA_ID>",  
     "time": "<WEBHOOK_TIMESTAMP>",  
     "changes": [  
       {  
         "value": {  
           "event": "ACCOUNT_OFFBOARDED"  
         },  
         "field": "account_update"  
       }  
     ]  
   }  
 ],  
 "object": "whatsapp_business_account"  
}
```
```

#### Example payload

```
```
{  
 "entry": [  
   {  
     "id": "862475293675413",  
     "time": 1768477204,  
     "changes": [  
       {  
         "value": {  
           "event": "ACCOUNT_OFFBOARDED"  
         },  
         "field": "account_update"  
       }  
     ]  
   }  
 ],  
 "object": "whatsapp_business_account"  
}
```
```

### `account_reconnected`

Describes when a WhatsApp Business account (“WABA”) reconnects (re-onboards) after previously offboarding.

#### Trigger events

* The business re-onboards to the same partner after offboarding.
* The WABA’s status changes to reconnected.

#### Payload syntax

```
```
{  
 "entry": [  
   {  
     "id": "<WABA_ID>",  
     "time": "<WEBHOOK_TIMESTAMP>",  
     "changes": [  
       {  
         "value": {  
           "event": "ACCOUNT_RECONNECTED"  
         },  
         "field": "account_update"  
       }  
     ]  
   }  
 ],  
 "object": "whatsapp_business_account"  
}
```
```

#### Example payload

```
```
{  
 "entry": [  
   {  
     "id": "862475293675413",  
     "time": 1768477203,  
     "changes": [  
       {  
         "value": {  
           "event": "ACCOUNT_RECONNECTED"  
         },  
         "field": "account_update"  
       }  
     ]  
   }  
 ],  
 "object": "whatsapp_business_account"  
}
```
```

### Edit

Describes edit events and payload contents for the WhatsApp Business account messages webhook for replies to interactive messages.

#### Trigger events

* A WhatsApp user edits a previously sent message (text, media with caption).
* A WhatsApp user edits a previously sent message within 15 minutes after being sent.

#### Payload syntax

```
```
{  
 "object": "whatsapp_business_account",  
 "entry": [  
   {  
     "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",  
     "changes": [  
       {  
         "value": {  
           "messaging_product": "whatsapp",  
           "metadata": {  
             "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",  
             "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
           },  
           "contacts": [  
             {  
               "profile": {  
                 "name": "<WHATSAPP_USER_PROFILE_NAME>"  
               },  
               "wa_id": "<WHATSAPP_USER_ID>"  
             }  
           ],  
           "messages": [  
             {  
               "from": "<WHATSAPP_USER_PHONE_NUMBER>",  
               "id": "<WHATSAPP_MESSAGE_ID>",  
               "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",  
               "type": "edit",  
               "edit": {  
                 "original_message_id": "<ORIGINAL_WHATSAPP_MESSAGE_ID>",  
                 "message": {  
                   "context": {  
                     "id": "<CONTEXT_ID>"  
                   },  
                   "type": "image",  
                   "image": {  
                     "caption": "<MEDIA_ASSET_CAPTION>",  
                     "mime_type": "<MEDIA_ASSET_MIME_TYPE>",  
                     "sha256": "<MEDIA_ASSET_SHA256_HASH>",  
                     "id": "<MEDIA_ASSET_ID>",  
                     "url": "<MEDIA_ASSET_URL>"  
                   }  
                 }  
               }  
             }  
           ]  
         },  
         "field": "messages"  
       }  
     ]  
   }  
 ]  
}
```
```

#### Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>` | Business display phone number. | 15550783881 |
| `<BUSINESS_PHONE_NUMBER_ID>` | Business phone number ID. | 106540352242922 |
| `<WHATSAPP_USER_PROFILE_NAME>` | WhatsApp user’s profile name. | Sheena Nelson |
| `<WHATSAPP_USER_ID>` | WhatsApp user ID. | 16505551234 |
| `<WHATSAPP_USER_PHONE_NUMBER>` | WhatsApp user phone number. | 16505551234 |
| `<WHATSAPP_MESSAGE_ID>` | WhatsApp message ID for the edit event. | wamid.HBgLMTY1MDM4Nzk0MzkV... |
| `<WEBHOOK_TRIGGER_TIMESTAMP>` | Unix timestamp when the webhook was triggered. | 1739321024 |
| `<ORIGINAL_WHATSAPP_MESSAGE_ID>` | ID of the original message being edited. | wamid.HBgLMTQxMjU1NTA4MjkV... |
| `<CONTEXT_ID>` | Contextual message ID (if applicable). | M0 |
| `<MEDIA_ASSET_CAPTION>` | Caption for the media asset. | Updated image caption |
| `<MEDIA_ASSET_MIME_TYPE>` | MIME type of the media asset. | image/jpeg |
| `<MEDIA_ASSET_SHA256_HASH>` | SHA256 hash of the media asset. | a1b2c3d4e5f6... |
| `<MEDIA_ASSET_ID>` | Media asset ID. | 1234567890 |
| `<MEDIA_ASSET_URL>` | URL to the media asset. | https://media.example.com/... |

#### Example

This example webhook describes an edit made by a user in a message.

```
```
{  
 "object": "whatsapp_business_account",  
 "entry": [  
   {  
     "id": "102290129340398",  
     "changes": [  
       {  
         "value": {  
           "messaging_product": "whatsapp",  
           "metadata": {  
             "display_phone_number": "15550783881",  
             "phone_number_id": "106540352242922"  
           },  
           "contacts": [  
             {  
               "profile": {  
                 "name": "Sheena Nelson"  
               },  
               "wa_id": "16505551234"  
             }  
           ],  
           "messages": [  
             {  
               "from": "16505551234",  
               "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",  
               "timestamp": "1749854575",  
               "type": "edit",  
               "edit": {  
                 "original_message_id": "wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA=",  
                 "message": {  
                   "context": {  
                     "id": "M0"  
                   },  
                   "type": "image",  
                   "image": {  
                     "caption": "Updated image caption",  
                     "mime_type": "image/jpeg",  
                     "sha256": "a1b2c3d4e5f6...",  
                     "id": "1234567890",  
                     "url": "https://media.example.com/updated-image.jpg"  
                   }  
                 }  
               }  
             }  
           ]  
         },  
         "field": "messages"  
       }  
     ]  
   }  
 ]  
}
```
```

### Revoke

This reference describes revoke events and payload contents for the WhatsApp Business account messages webhook for replies to interactive messages.

#### Trigger events

* A WhatsApp user revokes (deletes) a previously sent message.
* A WhatsApp user revokes a previously sent message within two days after being sent.

#### Syntax

```
```
{  
 "object": "whatsapp_business_account",  
 "entry": [  
   {  
     "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",  
     "changes": [  
       {  
         "value": {  
           "messaging_product": "whatsapp",  
           "metadata": {  
             "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",  
             "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
           },  
           "contacts": [  
             {  
               "profile": {  
                 "name": "<WHATSAPP_USER_PROFILE_NAME>"  
               },  
               "wa_id": "<WHATSAPP_USER_ID>"  
             }  
           ],  
           "messages": [  
             {  
               "from": "<WHATSAPP_USER_PHONE_NUMBER>",  
               "id": "<WHATSAPP_MESSAGE_ID>",  
               "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",  
               "type": "revoke",  
               "revoke": {  
                 "original_message_id": "<ORIGINAL_WHATSAPP_MESSAGE_ID>"  
               }  
             }  
           ]  
         },  
         "field": "messages"  
       }  
     ]  
   }  
 ]  
}
```
```

#### Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>` | Business display phone number. | 15550783881 |
| `<BUSINESS_PHONE_NUMBER_ID>` | Business phone number ID. | 106540352242922 |
| `<WHATSAPP_USER_PROFILE_NAME>` | WhatsApp user’s profile name. | Sheena Nelson |
| `<WHATSAPP_USER_ID>` | WhatsApp user ID. | 16505551234 |
| `<WHATSAPP_USER_PHONE_NUMBER>` | WhatsApp user phone number. | 16505551234 |
| `<WHATSAPP_MESSAGE_ID>` | WhatsApp message ID for the revoke event. | wamid.HBgLMTY1MDM4Nzk0MzkV... |
| `<WEBHOOK_TRIGGER_TIMESTAMP>` | Unix timestamp when the webhook was triggered. | 1739321024 |
| `<ORIGINAL_WHATSAPP_MESSAGE_ID>` | ID of the original message being revoked (deleted). | wamid.HBgLMTQxMjU1NTA4MjkV... |

#### Example

This example webhook describes a delete made by a user in a message.

```
```
{  
 "object": "whatsapp_business_account",  
 "entry": [  
   {  
     "id": "102290129340398",  
     "changes": [  
       {  
         "value": {  
           "messaging_product": "whatsapp",  
           "metadata": {  
             "display_phone_number": "15550783881",  
             "phone_number_id": "106540352242922"  
           },  
           "contacts": [  
             {  
               "profile": {  
                 "name": "Sheena Nelson"  
               },  
               "wa_id": "16505551234"  
             }  
           ],  
           "messages": [  
             {  
               "from": "16505551234",  
               "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",  
               "timestamp": "1749854575",  
               "type": "revoke",  
               "revoke": {  
                 "original_message_id": "wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA="  
               }  
             }  
           ]  
         },  
         "field": "messages"  
       }  
     ]  
   }  
 ]  
}
```
```

### History

Describes the WhatsApp Business app chat history of a business that has chosen to share their chat history with a [partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview), or the business’s decision to decline chat history sharing.

#### Trigger events

* a partner [synchronizes the WhatsApp Business app chat history](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#step-2-initiate-message-history-synchronization) of a business customer who they have onboarded with a WhatsApp Business app phone number, and who has agreed to share their chat history
* a partner [synchronizes the WhatsApp Business app chat history](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#step-2-initiate-message-history-synchronization) of a business customer who they have onboarded with a WhatsApp Business app phone number, but the customer has declined to share their chat history

#### Chat history contents

If the business has already approved chat history sharing when the partner requests the business’s chat history, a series of history webhooks will be triggered, describing all messages sent or received within 180 days of the time when the business was onboarded onto Cloud API.

* messages that are part of a group chat will not be included
* media messages will not include media asset IDs; instead, additional history webhooks containing media message asset IDs will be sent separately, but only for media messages sent within 14 days of onboarding

For efficiency purposes, a single webhook could potentially describe thousands of messages, so capture its contents first, then process the contents asynchronously.

#### Phases and chunks

Webhooks are divided into three history phases, where day 0 indicates the time when the business was onboarded onto Cloud API:

* phase 0: day 0 through day 1
* phase 1: day 1 through day 90
* phase 2: day 90 through day 180

For each phase, chat history webhooks may be sent in separate chunks, depending on the total number of messages that comprise the thread.

* you can use the `chunk_order` parameter value to arrange these chunks in their sequential order, as they may not be delivered sequentially
* you can use the `phase` parameter value to monitor phase progress. A value of `2` indicates that the current phase is complete.
* you can use the `progress` parameter value to monitor the overall progress. A value of `100` indicates that synchronization is complete.

If there is no chat history available for a given phase, no corresponding webhooks will be sent.

#### Payload syntax — chat history sharing approved

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WABA_ID>",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>",  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
            },  
            "history": [  
              {  
                "metadata": {  
                  "phase": <PHASE>,  
                  "chunk_order": <CHUNK_ORDER>,  
                  "progress": <PROGRESS>  
                },  
                "threads": [  
                  /* First chat history thread object */  
                  {  
                    "id": "<WHATSAPP_USER_PHONE_NUMBER>",  
                    "messages": [  
                      /* First message object in thread */  
                      {  
                        "from": "<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>",  
                        "to": "<WHATSAPP_USER_PHONE_NUMBER>", // only included if SMB message echo  
                        "id": "<WHATSAPP_MESSAGE_ID>",  
                        "timestamp": "<DEVICE_TIMESTAMP>,  
                        "type": "<MESSAGE_TYPE>",  
                        "<MESSAGE_TYPE>": {  
                          <MESSAGE_CONTENTS>  
                        },  
                        "history_context": {  
                          "status": "<MESSAGE_STATUS>"  
                        }  
                      },  
                      /* Additional message objects in thread would follow, if any */  
                    ]  
                  },  
                  /* Additional chat history thread objects would follow, if any */  
                ]  
              }  
            ]  
          },  
          "field": "history"  
        }  
      ]  
    }  
  ]  
}
```
```

#### Payload contents — chat history sharing approved

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<WABA_ID>`  *String* | The business customer’s WhatsApp Business account ID. | `102290129340398` |
| `<BUSINESS_PHONE_NUMBER>`  *String* | The business customer’s business phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | The business customer’s business phone number ID. | `106540352242922` |
| `<PHASE>`  *Integer* | Indicates history [phase](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#phases-and-chunks). Values can be:   * `0` — indicates messages are from day 0 (business onboarding time) through day 1 * `1` — indicates messages are from day 1 through day 90 * `2` — indicates messages are from day 90 through day 180 | `1` |
| `<CHUNK_ORDER>`  *Integer* | Indicates [chunk](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#phases-and-chunks) number, which you can use to order sets of webhooks sequentially. | `1` |
| `<PROGRESS>`  *Integer* | Indicates percentage total of synchronization progress.  Minimum `0`, maximum `100`. | `55` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | The WhatsApp user’s phone number. | `16505551234` |
| `<BUSINESS_OR_WHATSAPP_USER_PHONE_NUMBER>`  *String* | The business customer’s phone number, or the WhatsApp user’s phone number.  If the value is the business’s phone number, the message object describes a message sent by the business to a WhatsApp user.  If the value is the WhatsApp user’s phone number, the message object describes a message sent by the WhatsApp user to the business. | `15550783881` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | The WhatsApp user’s phone number.  The `to` property is only included if the message object represents an [SMB message echo](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#step-3-mirror-new-whatsapp-business-app-messages). | `16505551234` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA` |
| `<DEVICE_TIMESTAMP>`  *String* | Unix timestamp indicating when the message was received by the recipient’s device. | `1738796547` |
| `<MESSAGE_TYPE>`  *String* | [Message type](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#message-types). This placeholder appears twice in the syntax above, as it serves as a placeholder for the `type` property’s value and its matching property name. See the [example payload below](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#example-history-approved) for a thread with various message types.  If this value is set to `media_placeholder`, the message object describes a message that contained a media asset. In this case, the message contents will be omitted. Instead, a separate history webhook will follow, describing the content of the message and the media asset ID, but only if the message was sent within the last two weeks of your query. See the [example payload below](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#example-media-asset) describing a media message’s contents. | `text` |
| `<MESSAGE_CONTENTS>`  *Object* | An object describing the message’s contents. This value will vary based on the message type, as well as the contents of the message.  For example, if a business sends an `image` message without a caption, the object would not include the `caption` property.  See [Sending messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages) for examples of payloads for each message type. | `{"body":"Here's the info you requested! https://www.meta.com/quest/quest-3/"}` |
| `<MESSAGE_STATUS>`  *String* | Indicates the message’s most recent delivery stats. Values can be:   * `DELIVERED` * `ERROR` * `PENDING` * `PLAYED` * `READ` * `SENT` | `READ` |

#### Example payload — chat history sharing approved

Example payload for two message threads: (1) a thread containing a text message and video message sent to a WhatsApp user, and the WhatsApp user’s response, and (2) a text message sent to a WhatsApp user thanking them for their order.

The media message’s contents in the first thread are not described. Instead, a second webhook is triggered, describing the media message’s contents.

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "history": [  
              {  
                "metadata": {  
                  "phase": 0,  
                  "chunk_order": 1,  
                  "progress": 55  
                },  
                "threads": [  
                  {  
                    "id": "16505551234",  
                    "messages": [  
                      {  
                        "from": "15550783881",  
                        "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA",  
                        "timestamp": "1739230955",  
                        "type": "text",  
                        "text": {  
                          "body": "Here's the info you requested! https://www.meta.com/quest/quest-3/"  
                        },  
                        "history_context": {  
                          "status": "READ"  
                        }  
                      },  
                      {  
                        "from": "15550783881",  
                        "id": "wamid.QyNUEHBgLMTY0NjcwNDM1OTUVAgARGBI1Rj3NEYxMzAzMzQ5MkEA",  
                        "timestamp": "1739230970",  
                        "type": "media_placeholder",  
                        "history_context": {  
                          "status": "PLAYED"  
                        }  
                      },  
                      {  
                        "from": "16505551234",  
                        "id": "wamid.N0FCNjMAHBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0",  
                        "timestamp": "1739230970",  
                        "type": "text",  
                        "text": {  
                          "body": "Thanks!"  
                        },  
                        "history_context": {  
                          "status": "READ"  
                        }  
                      }  
                    ]  
                  },  
                  {  
                    "id": "12125557890",  
                    "messages": [  
                      {  
                        "from": "15550783881",  
                        "id": "wamid.BIyNDlBOEI5N0FCNjMAHBgLMTY0NjcwNDM1OTUVAgARGQUQ4NDc0",  
                        "timestamp": "1739230970",  
                        "type": "text",  
                        "text": {  
                          "body": "Thanks for your order! As a thank you, use code THANKS30 to get 30% of your next order."  
                        },  
                        "history_context": {  
                          "status": "DELIVERED"  
                        }  
                      }  
                    ]  
                  }  
                ]  
              }  
            ]  
          },  
          "field": "history"  
        }  
      ]  
    }  
  ]  
}
```
```

#### Example payload for media message asset

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "messages": [  
              {  
                "from": "16505551234",  
                "id": "wamid.QyNUEHBgLMTY0NjcwNDM1OTUVAgARGBI1Rj3NEYxMzAzMzQ5MkEA",  
                "timestamp": "1738796547",  
                "type": "image",  
                "image": {  
                  "caption": "Black Prince echeveria",  
                  "mime_type": "image/jpeg",  
                  "sha256": "3f9d94d399fa61c191bc1d4ca71375a035cd9b9f5b1128e1f0963a415c16b0cc",  
                  "id": "24230790383178626"  
                }  
              }  
            ]  
          },  
          "field": "history"  
        }  
      ]  
    }  
  ]  
}
```
```

#### Payload syntax — chat history sharing declined

```
```
{  
  "messaging_product": "whatsapp",  
  "metadata": {  
    "display_phone_number": "<BUSINESS_PHONE_NUMBER>",  
    "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
  },  
  "history": [  
    {  
      "errors": [  
        {  
          "code": 2593109,  
          "title": "History sync is turned off by the business from the WhatsApp Business App",  
          "message": "History sync is turned off by the business from the WhatsApp Business App",  
          "error_data": {  
            "details": "History sharing is turned off by the business"  
          }  
        }  
      ]  
    }  
  ]  
}
```
```

#### Example payload — chat history sharing declined

```
```
{  
  "messaging_product": "whatsapp",  
  "metadata": {  
    "display_phone_number": "15550783881",  
    "phone_number_id": "106540352242922"  
  },  
  "history": [  
    {  
      "errors": [  
        {  
          "code": 2593109,  
          "title": "History sync is turned off by the business from the WhatsApp Business App",  
          "message": "History sync is turned off by the business from the WhatsApp Business App",  
          "error_data": {  
            "details": "History sharing is turned off by the business"  
          }  
        }  
      ]  
    }  
  ]  
}
```
```

### smb\_app\_state\_sync

Describes one or more [WhatsApp contacts⁠](https://faq.whatsapp.com/1270784217226727/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR71V6xZzs9Jidkkcw147OgaS1YQvuv2gkjJIIDoPDqNXPAYyqkoltjua8IbIA_aem_ssCMuLYzRNtRPGnwnGXIhw) in a business customer’s WhatsApp Business app.

#### Trigger events:

* a partner [synchronizes the WhatsApp contacts](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#step-1-initiate-contacts-synchronization) of a business customer who they have onboarded with a WhatsApp Business app phone number
* a business customer, onboarded by a partner, with a WhatsApp Business app phone number adds, edits, or removes a [WhatsApp contacts⁠](https://faq.whatsapp.com/1270784217226727/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5X5NMdR8BYNeRmQUydEo_MuPv9UfuVrrfuCgz3YxIIe28OoxyUf1KYisv97Q_aem_WQ7XY5OthMfAYYnv9wjnZA)

#### Payload syntax

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WABA_ID>",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>",  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
            },  
            "state_sync": [  
              {  
                "type": "contact",  
                "contact": {  
                  "full_name": "<CONTACT_FULL_NAME>",  
                  "first_name": "<CONTACT_FIRST_NAME>",  
                  "phone_number": "<CONTACT_PHONE_NUMBER>"  
                },  
                "action": "<ACTION>",  
                "metadata": {  
                  "timestamp": "<WEBHOOK_TIMESTAMP>"  
                }  
              },  
              * Additional contacts would follow, if any */  
            ]  
          },  
          "field": "smb_app_state_sync"  
        }  
      ]  
    }  
  ]  
}
```
```

#### Payload contents

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<WABA_ID>`*String* | The business customer’s WhatsApp Business account ID. | `102290129340398` |
| `<BUSINESS_PHONE_NUMBER>`*String* | The business customer’s business phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`*String* | The business customer’s business phone number ID. | `106540352242922` |
| `<CONTACT_FULL_NAME>`*String* | The contact’s full name, as it appears in the business customer’s WhatsApp Business app phone address book.  Not included when the business customer removes a contact from their WhatsApp Business app phone address book. | `Pablo Morales` |
| `<CONTACT_FIRST_NAME>`*String* | The contact’s first name, as it appears in the business customer’s WhatsApp Business app phone address book.  Not included when the business customer removes a contact from their WhatsApp Business app phone address book. | `Pablo` |
| `<CONTACT_PHONE_NUMBER>`*String* | The contact’s WhatsApp phone number. | `16505551234` |
| `<ACTION>`*String* | Indicates if the business customer added, edited, or deleted a contact from their WhatsApp Business app phone address book. Values can be:   * `add` — the business added or edited a contact * `remove` — the business removed a contact | `add` |
| `<CONTACT_CHANGE_TIMESTAMP>`*String* | Unix timestamp indicating when the contact was added, edited, or removed. | `1738346006` |

### smb\_message\_echoes

Describes a message sent by a business customer to a WhatsApp user with the WhatsApp Business app or supported [companion device](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients#linked-devices).

#### Trigger events

* A business customer uses the WhatsApp Business app or supported companion device to message a WhatsApp user.

#### Payload syntax

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WABA_ID>",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>",  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
            },  
            "message_echoes": [  
              {  
                "from": "<BUSINESS_PHONE_NUMBER>",  
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
                "id": "<WHATSAPP_MESSAGE_ID>",  
                "timestamp": "<WEBHOOK_TIMESTAMP>",  
                "type": "<MESSAGE_TYPE>",  
                "<MESSAGE_TYPE>": {  
                  <MESSAGE_CONTENTS>  
                }  
              }  
            ]  
          },  
          "field": "smb_message_echoes"  
        }  
      ]  
    }  
  ]  
}
```
```

#### Payload contents

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<WABA_ID>`  *String* | The business customer’s WhatsApp Business account ID. | `102290129340398` |
| `<BUSINESS_PHONE_NUMBER>`  *String* | The business customer’s business phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | The business customer’s business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | The WhatsApp user’s phone number. | `16505551234` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA` |
| `<WEBHOOK_TIMESTAMP>`  *String* | Unix timestamp indicating when the webhook was triggered. | `1738796547` |
| `<MESSAGE_TYPE>`  *String* | [Message type](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#message-types). This placeholder appears twice in the syntax above, as it serves as a placeholder for the `type` property’s value and its matching property name. | `text` |
| `<MESSAGE_CONTENTS>`  *Object* | An object describing the message’s contents.  This value will vary based on the message `type`, as well as the contents of the message.  For example, if a business sends an `image` message without a caption, the object would not include the `caption` property.  See [Sending messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages) for examples of payloads for each message type. | `{"body":"Here's the info you requested! https://www.meta.com/quest/quest-3/"}` |

#### Example payload

This example payload describes a text message (`type` is `text`) sent to a WhatsApp user by a business customer with the WhatsApp Business app.

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "message_echoes": [  
              {  
                "from": "15550783881",  
                "to": "16505551234",  
                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA",  
                "timestamp": "1700255121",  
                "type": "text",  
                "text": {  
                  "body": "Here's the info you requested! https://www.meta.com/quest/quest-3/"  
                }  
              }  
            ]  
          },  
          "field": "smb_message_echoes"  
        }  
      ]  
    }  
  ]  
}
```
```

## Need support?

For Coexistence *onboarding*, choose:

* Question Topic: “WABiz: Onboarding” and “TechProvider: Onboarding”
* Request Type: “Embedded Signup - Coexistence Onboarding”

For Coexistence *API issues*, choose:

* Question Topic: “WABiz: Cloud API”
* Request Type: “Coexistence Data Synchronization APIs and Webhooks”
