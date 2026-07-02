---
title: "Get started as a Solution Partner"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners
---

# Get started as a Solution Partner

Updated: Jun 24, 2026

This guide goes over the steps [Solution Partners](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview#solution-partners) need to take in order to offer the Cloud API to their clients. There are four main stages:

* [Prepare and plan](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners#prepare-plan)
* [Set up Assets](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners#set-up-assets)
* [Sign Contracts](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners#sign-contracts)
* [Build Integration](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners#build-integration)

After you're done, please [keep up with monthly updates](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/measurement-partners#keep-up-with-monthly-updates).

## Prepare and plan

### Read documentation

Before you start, read through the [developer documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api) and the [Postman collection⁠](https://www.postman.com/meta/workspace/whatsapp-business-platform/collection/13382743-84d01ff8-4253-4720-b454-af661f36acc2?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7pZRGJNkapR82BkLzl4w4_UE7S1zwKq24_-Qim5T32ngLAibh0wuNK_zyGbw_aem_1LFZJ9vp50IGGkBwMJKTlA). This helps you understand how the Cloud API works, including how to get started and migrate numbers.

### Plan onboarding and migration

**Use Embedded Signup to onboard new clients to the Cloud API.** If you haven't already, implement [Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview). Embedded Signup is the fastest and easiest way to register clients, enabling them to start sending messages in less than five minutes.

## Set up assets

To use the Cloud API, you need to have the following assets:

| Asset | Specific Instructions |
| --- | --- |
| **Business portfolio** | You can use an existing one, or [set up a new one⁠](https://www.facebook.com/business/help/1710077379203657). Save the business portfolio ID. |
| **WhatsApp Business account** (WABA) | See [Create a WhatsApp Business account for the WhatsApp Business API⁠](https://www.facebook.com/business/help/2087193751603668) for help. |
| [**Meta App**](https://developers.facebook.com/apps/) | If you don't have an app, you need to [create one](https://developers.facebook.com/docs/development/create-an-app) with the **Business** type. Remember to add a display name and a contact email to your app.  As a Solution Partner, your app must go through [App Review](https://developers.facebook.com/docs/app-review) and request **Advanced access** to the following permissions:   * [`whatsapp_business_management`](https://developers.facebook.com/docs/permissions/reference/whatsapp_business_management) — Manage phone numbers, message templates, registration, and business profiles under a WhatsApp Business account. If your app uses this permission to access WABAs not owned by your business, you must have **Advanced access**. Without it, API calls return error code `200`. To get **Advanced access**, submit your app for [App Review](https://developers.facebook.com/docs/app-review). * [`whatsapp_business_messaging`](https://developers.facebook.com/docs/permissions/reference/whatsapp_business_messaging) — Used to send/receive messages from WhatsApp users, upload/download media under a WhatsApp Business account. To get this permission, your app must go through [App Review](https://developers.facebook.com/docs/app-review). * [`whatsapp_business_manage_events`](https://developers.facebook.com/docs/permissions#whatsapp_business_manage_events) — Used to log events — such as purchases, add-to-cart actions, leads, and more under a WhatsApp Business account. Only request this permission if you are using the [Marketing Messages API for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/overview) with [Conversions API](https://developers.facebook.com/documentation/ads-commerce/conversions-api). To get this permission, your app must go through [App Review](https://developers.facebook.com/docs/app-review).   As a Solution Partner, you can also reuse the same Meta app across different clients and WABAs. But be aware that each app can only have one webhook endpoint and each app needs to go through App Review. |
| **System User** | See [Add system users to your business portfolio⁠](https://www.facebook.com/business/help/503306463479099) for help.  Currently, a Meta App with `whatsapp_business_messaging`, `whatsapp_business_management`, `whatsapp_business_manage_events`, and `business_messaging` permissions has access to up to:   * 1 admin system user * 1 employee system user   Use the admin system user for your production deployment. See [About business portfolio access⁠](https://www.facebook.com/business/help/442345745885606) for more information. |
| **Business Phone Number** | This is the phone number the business will use to send messages. Phone numbers need to be verified through SMS/voice call.  If you wish to use your own number, [add a phone number⁠](https://www.facebook.com/business/help/456220311516626) in WhatsApp Manager and verify it with the [Verify Code API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/verify-code-api#post-version-phone-number-id-verify-code).  If your clients wish to use their own numbers, add and verify their numbers using your [Embedded Signup flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview).  There is no limit to the amount of business phone numbers that can be onboarded to the Cloud API. |
| **Consumer Phone Number** | This is a phone number that is currently using the consumer WhatsApp app. This number will be receiving the messages sent by your business phone number. |

## Sign contracts

### Accepting terms of service

In order to access the WhatsApp Business Messaging Cloud API you need to first accept the WhatsApp Business Platform Terms of Service on behalf of your business.

To do so, navigate to [WhatsApp Manager⁠](https://business.facebook.com/wa/manage/) and accept the Terms of Service in the informational banner.

![WhatsApp Manager banner to Accept WhatsApp Business Platform Terms of Service, with an Accept Terms of Service button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/573027894_844716734562313_3897613670462505628_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=L1UYyUpVhVEQ7kNvwEuVIOt&_nc_oc=Adq2m8Dl4Qf2v4JZTTWp4c7Yi_iijZ16W2a-rwnFjSH9OVL0IWL4YUXwGd9wX2DgBVWXISdYJi4BiYSkBZqFrPrj&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=_058_jY8tfsS0255eEe4nA&_nc_ss=7b2a8&oh=00_AQABPoKlouved-MKWfO6YmtLmaZp0v51Ui78dqSZU5FNIg&oe=6A607299)

For any new Cloud API businesses, you will need to accept Terms of Service before you can start using Cloud API. Registration calls will fail until you accept the Terms of Service.

You as a developer need to accept the Terms of Service. If you are a Solution Partner, you do not need your clients to accept.

## Build integration

### Step 1: Get system user access token

Graph API calls use access tokens for authentication. For more information, see [Access Tokens](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens). Use your system user to generate your token.

To generate a system user access token:

* Go to [**Business portfolio**⁠](https://business.facebook.com/) > **Business Settings** > **Users** > **System Users** to view the system user you created.
* Click on that user and select **Add Assets**. This action launches a new window.
* Under **Select Asset Type** on the left side pane, select **Apps**. Under **Select Assets**, choose the Meta app you want to use (your app must have the correct permissions). Enable **Develop App** for that app.
* Select **Save Changes** to save your settings and return to the system user main screen.
* Now you are ready to generate your token. In the system user main screen, click **Generate Token** and select your Meta app.
* After selecting the app, you will see a list of available permissions.
  Select `whatsapp_business_management` , `whatsapp_business_messaging` , and `whatsapp_business_manage_events` . Click **Generate Token**.
* A new window opens with your system user, assigned app and access token. Save your token.
* Optionally, you can click on your token and see the Token Debugger. In your debugger, you should see the permissions you have selected. You can also directly paste your token into the [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken).

### Step 2: Set up webhooks

With Webhooks set up, you can receive real-time HTTP notifications from the WhatsApp Business Platform. This means you get notified when, for example, you get a message from a customer or there are changes to your WhatsApp Business account (WABA).

To set up your webhook endpoint, you need to create an internet-facing web server with a URL that meets Meta's and WhatsApp's requirements. See our [Webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview) document for more information. If you need an endpoint for testing purposes, [you can deploy a test app](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot) that simply dumps webhook payloads to your console.

#### App setup

Once the endpoint is ready, configure it to be used by your Meta app:

In the App Dashboard, go to **WhatsApp** > **Configuration**, then click the **Edit** button.

* Callback URL: This is the URL Meta will be sending the events to. See the [Webhooks, Getting Started](https://developers.facebook.com/docs/graph-api/webhooks/getting-started) guide for information on creating the URL.
* Verify Token: This string is set up by you, when you create your webhook endpoint.

After adding the information, click **Verify and Save**.

After saving, back in the **Configuration** panel, click the **Manage** button and subscribe to individual webhook fields. To receive notifications of customer messages, be sure to subscribe to the **messages** webhook field.

You only need to set up Webhooks once for every application you have. You can use the same Webhook to receive multiple event types from multiple WhatsApp Business Accounts, or set up an override. For more information, see our Webhooks section.

### Step 3: Subscribe to your WABA

To make sure you get notifications for the correct account, subscribe your app:

```
curl -X POST \
'https://graph.facebook.com/v25.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

If you get the response below, all Webhook events for the phone numbers under this account will be sent to your configured Webhooks endpoint.

```
{  
  "success": true  
}
```

### Step 4: Get phone number ID

To send messages, you need to register the phone number you want to use. Before you can register it, you need to get the phone number's ID. To get your phone number's ID, make the following API call:

```
curl -X GET \
'https://graph.facebook.com/v25.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

If the request is successful, the response includes all phone numbers connected to your WABA:

```
{  
  "data": [  
    {  
      "verified_name": "Jasper's Market",  
      "display_phone_number": "+1 631-555-5555",  
      "id": "1906385232743451",  
      "quality_rating": "GREEN"  
    },  
    {  
      "verified_name": "Jasper's Ice Cream",  
      "display_phone_number": "+1 631-555-5556",  
      "id": "1913623884432103",  
      "quality_rating": "NA"  
    }  
  ]  
}
```

Save the ID for the phone number you want to register. See [Read Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) for more information about this endpoint.

#### Migration exception

If you are migrating a phone number from the On-Premises API to the Cloud API, there are extra steps you need to perform before registering a phone number with the Cloud API. See [Migrate From On-Premises API to Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/migrating-from-onprem-to-cloud) for the full process.

### Step 5: Register phone number

With the phone number's ID in hand, you can register it. In the registration API call, you perform two actions at the same time:

* Register the phone.
* [Enable two-step verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification) by setting a 6-digit registration code — you must set this code on your end. Save and memorize this code as it can be requested later.

**Setting up two-step verification is a requirement to use the Cloud API. If you do not set it up, you will get an onboarding failure message:**

![Onboard Failure: To continue working in your account, please refresh the page to authenticate. Or navigate to the business settings page and authenticate when prompted.](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/561060937_1339318307926820_7669657060757741637_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-jvm-Qu87lwQ7kNvwHVEYj4&_nc_oc=AdqujRL8OaWPEzHcnI3NfHgAPglGWjerNtb0uKPmmxh0VJoGXHEvzT6bB2CBE-VhEvycDEaG0ZmnLVhs08NgDLT4&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=_058_jY8tfsS0255eEe4nA&_nc_ss=7b2a8&oh=00_AQAKYtoLYj-Pjp5uBk9qPh7zFvVy8tsYd7pwijp9T79lAg&oe=6A606850)

Sample request:

```
curl -X POST \
'https://graph.facebook.com/v25.0/<FROM_PHONE_NUMBER_ID>/register' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '{"messaging_product": "whatsapp","pin": "<6_DIGIT_PIN>"}'
```

Sample response:

```
{  
  "success": true  
}
```

#### Embedded Signup users

A phone number **must** be registered up to 14 days after going through the Embedded Signup flow. If a number is not registered during that window, the phone must go through to the Embedded Signup flow again prior to registration.

### Step 6: Receive a message from consumer app

Once participating customers send a message to your business, you get **24 hours of free messages with them** — that window of time is called the customer service window. For testing purposes, enable this window so you can send as many messages as you would like.

From a personal WhatsApp iOS/Android app, send a message to the phone number you just registered. Once the message is sent, you should receive an incoming message to your Webhook with a notification in the following format.

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "16315551234",  
              "phone_number_id": "PHONE_NUMBER_ID"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "Kerry Fisher"  
                },  
                "wa_id": "16315555555"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16315555555",  
                "id": "wamid.ABGGFlA5FpafAgo6tHcNmNjXmuSf",  
                "timestamp": "1602139392",  
                "text": {  
                  "body": "Hello!"  
                },  
                "type": "text"  
                }  
            ]  
          },  
        "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```

### Step 7: Send a test message

Once you have enabled the customer service window, you can send a test message to the consumer number you used in the previous step. To do that, make the following API call:

```
curl -X  POST \
'https://graph.facebook.com/v25.0/<FROM_PHONE_NUMBER_ID>/messages' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Content-Type: application/json' \
-d '{"messaging_product": "whatsapp", "to": "16315555555","text": {"body" : "hello world!"}​}'
```

If your call is successful, your response will include a message ID. Use that ID to track the progress of your messages through Webhooks. The maximum length of the ID is 128 characters.

Sample response:

```
{  
  "id":"wamid.gBGGFlaCGg0xcvAdgmZ9plHrf2Mh-o"  
}
```

With the Cloud API, there is no longer a way to explicitly check if a phone number has a WhatsApp ID. To send someone a message using the Cloud API, just send it directly to the WhatsApp user's phone number after they have [opted-in](https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in). See [Sending messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages).

## Onboard WhatsApp Business app users

If your clients already use the [WhatsApp Business app⁠](https://business.whatsapp.com/products/business-app?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7-VObiTxlxTaqCGXBIbVmv_9gUI0gZ2PyNcZEG5dRGO-rMPyr_5diVpB4C6Q_aem__oExKUnJtWiy6zuMT6Ie7A), you can configure Embedded Signup to [onboard them using their existing account and phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users). Onboarded clients can use your app to message at scale while continuing to use the WhatsApp Business app for one-to-one conversations.

## Keep up with monthly updates

Cloud API updates are released on the first Tuesday of every month. These updates include new features and improvements. You don't need to do any work to use any of the new features, since the Cloud API updates automatically.

## FAQs

### General FAQs

**Which company will be providing the Cloud API?**

WhatsApp develops and operates the WhatsApp Business API, which enables businesses to communicate with WhatsApp consumer users on the WhatsApp network. When using the Cloud API, Meta will host the WhatsApp Business API for you and provide an endpoint for the WhatsApp service for your incoming and outgoing WhatsApp communications.

**Are there any additional costs for the Cloud API?**

Access to Cloud API is free, and we expect it to generate additional cost savings for developers, as Meta hosts and maintains the Cloud API.

### Technical implementation FAQs

**What is the architecture of the Cloud API?**

The Cloud API architecture significantly simplifies the Solution Partner's operational and infrastructure requirements to integrate with WhatsApp Business Platform. First, it removes the infrastructure requirements to run Business API docker containers (CAPEX savings). Second, it obviates the need of operational responsibilities to manage the deployment (OPEX savings).
![Image](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/574916010_1357390812786236_2094506065743510683_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ub5dtkeVRMEQ7kNvwHZGmeK&_nc_oc=AdrpbbGo_SsyWNTb6MnmhmjyYySRKANL7GxaeBDSHykbgESuB_CVDSmGb4YHDEgpXtRxK2-ayli0CVqavilxKhak&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=_058_jY8tfsS0255eEe4nA&_nc_ss=7b2a8&oh=00_AQCmKdTiGZAGxvXeHtpggtI9k3C8RQqDZk-xWIFPwh0rAQ&oe=6A606D14)

**What will disaster recovery look like: if a region is unavailable, how much time does it take to move messages to another region?**

We will have disaster recovery and data replication across multiple regions. The expected downtime would be within our SLA and usually in the order of less than a minute to less than five minutes.

### Data privacy and security FAQs

**Where are the servers for Cloud API?**

Cloud API processes messages on servers in [Meta data centers⁠](https://datacenters.atmeta.com/all-locations/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR71V6xZzs9Jidkkcw147OgaS1YQvuv2gkjJIIDoPDqNXPAYyqkoltjua8IbIA_aem_ssCMuLYzRNtRPGnwnGXIhw). If a business opts to use Cloud API Local Storage, message data is stored in data centers located in another [designated country](https://developers.facebook.com/documentation/business-messaging/whatsapp/local-storage).

**Is the Cloud API end-to-end encrypted? What is the encryption model?**

See [Cloud API Overview, Encryption](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#encryption).

**What happens to message data at rest? How long is it stored?**

Cloud API messages at rest are encrypted. Messages have a maximum retention period of 30 days in order to provide the base features and functionality of the Cloud API service; for example, retransmissions.

**Does Meta have access to encryption keys?**

In order to send and receive messages through Cloud API, Cloud API manages the encryption/decryption keys on behalf of the business. For more detail, see the [WhatsApp Encryption Overview technical whitepaper⁠](https://www.whatsapp.com/security/WhatsApp-Security-Whitepaper.pdf?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5ee5bPoPQCJjY-Hpr_ZpMGiNp3tnPJivpwwtOcac7KVYYjPewIPSbeYD7PtQ_aem_bRFx7smthpchTfxk06o5qg).

### Regulatory compliance FAQs

**How does Cloud API comply with regional data protection laws (such as GDPR, LGPD, and PDPB)?**

Meta takes data protection and people's privacy very seriously and we comply with applicable legal, industry, and regulatory requirements governing data protection, as well as industry best practices. Cloud API customers must meet their own obligations under data protection laws, such as the General Data Protection Regulation (GDPR). Please visit our [Meta Business Messaging Compliance Center⁠](https://www.facebook.com/business/business-messaging/compliance) to learn more.
