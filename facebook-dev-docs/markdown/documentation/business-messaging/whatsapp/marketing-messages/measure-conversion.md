---
title: "Onboard"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion
---

# Onboard

Updated: Jun 30, 2026

Onboarding to the Marketing Messages API for WhatsApp (MM API for WhatsApp) lets you send marketing messages with optimizations on Cloud API and requires no new phone-number registration or template re-creation. See the directions below to onboard your business, whether you integrate with the API directly or work with a partner.

When a business registers for the MM API for WhatsApp, Meta creates linked read-only ad accounts and links each to the marketing templates under the business portfolio.

These linked read-only ad accounts allow a business to fetch their MM API for WhatsApp insights from the Marketing API "Insights API".

These linked read-only ad accounts stay in sync with marketing templates, so changes to marketing templates are reflected in the linked read-only ad accounts.

Follow the steps below to Onboard to MM API for WhatsApp.

## Eligibility requirements

To use the Marketing Messages API for WhatsApp (MM API for WhatsApp), a business must comply with applicable legal, vertical, and content restrictions (country dependent) outlined in [WhatsApp Business Messaging Policies⁠](https://business.whatsapp.com/policy?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4vtMiWribYV0_SoUNRdSl3gjxdjx_XZgF438NmTlQcjV_tUtRP3c7CBA8OrQ_aem_wMVJfDH-8b_ygwtAgI_wvg).

In addition, the following requirements must be met:

* WABA is active and not restricted from messaging due to any violations
* WABA tax country is not in sanctioned regions
* Owner Business country is not in sanctioned regions

MM API for WhatsApp will continuously update vertical eligibility and policies to comply with various policies and regulations internationally, so these requirements may change.

### Check WABA onboarding status and eligibility

Use the [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) and request the `marketing_messages_onboarding_status` field to check the MM API for WhatsApp eligibility status of a WABA.

Eligible WABAs have this field set to `ELIGIBLE`. If this value is set to `ONBOARDED`, it means the business customer WABA has already been onboarded. See the [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) reference for all possible values and their meanings.

**Example request**

```
curl 'https://graph.facebook.com/v25.0/25002526842541/?fields=marketing_messages_onboarding_status' \
    -H 'Authorization: Bearer EAAAl...'
```

**Example response**

```
{  
  "marketing_messages_onboarding_status": "ELIGIBLE",  
  "id": "25002526842541"  
}
```

You can also use the [Client WhatsApp Business Accounts API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_whatsapp_business_accounts) with the following filtering to get a list of all eligible WABAs that have been shared with you.

**Request syntax**

```
GET /<BUSINESS_PORTFOLIO_ID>/client_whatsapp_business_accounts  
  ?filtering=[  
    {  
      'field':'marketing_messages_onboarding_status',  
      'operator':'IN',  
      'value':['ELIGIBLE']  
    }  
  ]
```

**Example request**

```
curl -g 'https://graph.facebook.com/v25.0/19502398688333/client_whatsapp_business_accounts?filtering=[{'field':'marketing_messages_onboarding_status','operator':'IN','value':['ELIGIBLE']}]' \
    -H 'Authorization: Bearer EAAAj...'
```

**Example response**

```
{  
  "data": [  
    {  
      "id": "46302397361990",  
      "name": "San Andreas Roofing",  
      "timezone_id": "1",  
      "message_template_namespace": "93d3e793_8a4f_49c4_b903_fd72aac80f71"  
    }  
  ]  
}
```

### Checking eligibility status (alternative)

This field will be deprecated in version 24.0. Use the [`marketing_messages_onboarding_status` field](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion#check-waba-onboarding-status-and-eligibility) instead.

You can use the [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) and request the [`marketing_messages_lite_api_status`](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion#check-waba-onboarding-status-and-eligibility) field to get eligibility status, but this field will be deprecated at a future date, so use the [`marketing_messages_onboarding_status` field](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboarding#eligibility-requirements) instead.

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=marketing_messages_lite_api_status
```

For partner-managed WABAs, businesses can find eligible WABAs using the following endpoint:

```
GET /<BUSINESS_ID>/client_whatsapp_business_accounts?fields=marketing_messages_lite_api_status
```

See the [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) reference for a list of returnable values and their meanings.

### Check ToS and intent request status for the Meta Business Suite

Use the [Business API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) and request the `marketing_messages_onboarding_status` field to check the MM API for WhatsApp eligibility status.

**Permission**

* `business_management`

**Example request**

```
curl "https://graph.facebook.com/v24.0/52002526842524351/?fields=marketing_messages_onboarding_status" \  
-H 'Authorization: Bearer EAAAl...'
```

**Example response**

```
{  
  "marketing_messages_onboarding_status":  
   {  
      "status": "TERM_OF_SERVICE_SIGNED",  
      "time": "2025-10-07"  
   }  
}
```

Use the [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) and request the `owner_business_info` field to check the onboarding status of the WABA.

**Permissions**

* `whatsapp_business_management`
* `whatsapp_business_messaging`

**Example request**

```
curl GET "https://graph.facebook.com/v24.0/69843579834234?fields=owner_business_info" \  
-H 'Authorization: Bearer EAAAl...'
```

**Example response**

```
{  
  "owner_business_info": {  
    "name": "WhatsApp PaidSend Testing",  
    "id": "<BM_ID>",  
    "marketing_messages_onboarding_status": {  
     "status": "TERM_OF_SERVICE_SIGNED" | "REQUEST_SENT" | "NOT_STARTED"  
     "time": "2025-08-13"  
    }  
  },  
}
```

## Register a phone number on Cloud API

To send a message with MM API for WhatsApp, a business phone number must be registered on Cloud API. MM API for WhatsApp and Cloud API are used together on the same phone number:

* Cloud API allows a business to send Authentication, Service, Utility, and non-Optimized Marketing template messages and freeform messages, and receive inbound messages from consumers on a business phone number.
* MM API for WhatsApp allows a business to send marketing messages with optimizations, over the same phone number as is registered on Cloud API.

WhatsApp Business phone numbers that are not registered on Cloud API cannot be used with MM API for WhatsApp.

If a business phone number is already registered on Cloud API, verification is not required when registering for MM API for WhatsApp. MM API for WhatsApp registration adds no new phone numbers. Existing phone numbers remain registered on Cloud API and become eligible to use MM API for WhatsApp alongside Cloud API for sending marketing messages.

## For partners

If you are a partner onboarding your end businesses, see [onboard business customers](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers).

## Onboarding business customers

You can instruct your business customers to have someone with full control to the business portfolio to accept the Terms of Service and onboard MM API for WhatsApp through WhatsApp Manager.

[![](https://scontent.fdel1-2.fna.fbcdn.net/v/t15.5256-10/558926094_1235414315279342_7583244811951760368_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b07905&_nc_ohc=ywxM3SJ5_1sQ7kNvwF1nyJ4&_nc_oc=Adq2hGHTNBTXyHzkcmxUyrGA-KaL9DvNoWYw3p3UiolqToNSHiQylz8zGoaHA-HqiDQrZkizt6Dq4of_wQdHja5Z&_nc_zt=23&_nc_ht=scontent.fdel1-2.fna&_nc_gid=v6Ct_-RnjdZM6n9ge9_TAg&_nc_ss=7b2a8&oh=00_AQARKWe9Xd1m_qs1NMZeHdfpO_Im0sxdoL8yh8QWJYuu8w&oe=6A4BE5A6)](https://scontent.fdel1-3.fna.fbcdn.net/o1/v/t2/f2/m412/AQNgLHYpIBteNWpUW01qmR_94bm42196p1D3aAb5qYVHzhBg_cWQFRZcpl7BcXjHTKJIPv-I6XH2lPQsuy9i_sBFVablD4z0aHfvXb1qIA.mp4?_nc_cat=105&_nc_oc=AdrUVH76koY9-YqEJuCVuOq5k2vkblce2zSKBSnyzh_QptcqVmBePT0pzM6dWY2Eceks8lrSa9z1Q5J-xtKFYDPf&_nc_sid=8bf8fe&_nc_ht=scontent.fdel1-3.fna.fbcdn.net&_nc_ohc=FrqH51hVQQUQ7kNvwFRg-QH&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNjQwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6OTczMTA5NDI1MDAxNjI0LCJhc3NldF9hZ2VfZGF5cyI6MjcxLCJ2aV91c2VjYXNlX2lkIjoxMDEyOCwiZHVyYXRpb25fcyI6MTYsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=v6Ct_-RnjdZM6n9ge9_TAg&_nc_ss=7b2a8&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQCo52ZmHZZkHniwfDYllRYOTbxmDItbXe3gPFKhDYSGWw&oe=6A4BD1ED&bitrate=86586&tag=sve_sd)

* Open WhatsApp Manager > Overview.
* In the Alerts section, click Accept terms to get started for Marketing Messages API for WhatsApp.
* Follow the steps to finish signing MM API for WhatsApp Terms of Service.

Your business customers should be able to start sending messages through MM API for WhatsApp.

If you are unable to access your WhatsApp Manager, see [find your business portfolio admin](https://developers.facebook.com/documentation/business-messaging/whatsapp/support#i-can-t-find-an-admin-user-at-my-company-to-onboard-to-mm-api-for-whatsapp).

## For business customers without a partner

If your business directly integrates with Cloud API without a partner, follow the instructions below to accept the Terms of Service and onboard to MM API for WhatsApp.

* Navigate to the **[App Dashboard](https://developers.facebook.com/apps)** > **WhatsApp** > **Quickstart** panel.
* On the **Quickstart** page, locate the "Improve ROI with Marketing Messages API for WhatsApp" card and click the "Get started" button.
* Click on "Continue to integration guide" to accept the Terms of Service

![App Dashboard Quickstart page with the Improve ROI with Marketing Messages API for WhatsApp card highlighted](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/476020445_3647418092312679_4465719704295641193_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=yWP1VLqdaI0Q7kNvwG33Arl&_nc_oc=AdrH3aPJZBsNZW0SU6xIFRsL9aNhEOkq_pRxlI9Twpm0iVyIvAeyfNymcjdYCv6h-HWgN2K9KGA10nPyLatfsYTz&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=v6Ct_-RnjdZM6n9ge9_TAg&_nc_ss=7b2a8&oh=00_AQAICZWx_LqPkLu05G-8hyiAXgRXoooX7HW3wEhnHch4-A&oe=6A60550B)

![Marketing Messages API for WhatsApp get started dialog with Terms of Service notice and Continue to integration guide button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/476114538_1636490170408141_5744881403199109308_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RB_6rqWgsrYQ7kNvwGM3fTb&_nc_oc=AdrSR0J-ap_ZjDaiEnfA4J9ongg7j86EhBzw7y7AAXr4xXjQex3TlgXwYnHOTKpRzZfDtpDvRboUNus2bITf_Xjk&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=v6Ct_-RnjdZM6n9ge9_TAg&_nc_ss=7b2a8&oh=00_AQCIJRBpAWKuhpnWLt-0m69kzLEM-HC8ug3fc86NenNyEA&oe=6A604451)

## Sharing event activity

Once your business is onboarded, message status events (delivery status, read, clicked) will automatically be shared with Meta as part of event activity. Meta does not sell your or your subscribers' data; this data is used solely to optimize the performance of marketing campaigns.

### Manage via WhatsApp Account settings

If you wish to disable sharing event activity, toggle it off in [WhatsApp Business account setting⁠](https://business.facebook.com/latest/settings/whatsapp_account).

![WhatsApp Accounts settings with the Privacy and data sharing toggle for sharing event activity with Meta highlighted](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/532666735_24223328414028742_8881901315029283677_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2dv1R1wd95sQ7kNvwFr1ljG&_nc_oc=AdrqTW8iujNAn5mQ9XOvZt6Diw0PxSKeJ_i67_HcB6exmuAE7YK7oW1wuleTrlasYgTwFizQAXm8ydNaG4QXM4jU&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=v6Ct_-RnjdZM6n9ge9_TAg&_nc_ss=7b2a8&oh=00_AQAK2dR1Aex08wyByyTUYqWo_71XFz3ndDfBChGrkMZEgw&oe=6A60579C)

### Configure via API

You can also customize sharing event activity on a per-message basis by including the `<message_activity_sharing>` parameter and setting it to a boolean (True/False) in the `marketing_messages` API call payload. The API call overrides the default account configuration for your WhatsApp Business account.

Use the Marketing Messages API to send a message to a WhatsApp user.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/marketing_messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "message_activity_sharing": "<BOOLEAN>",  
  "type": "<MESSAGE_TYPE",  
  "<MESSAGE_TYPE":"<MESSAGE_CONTENTS>"  
}
```

## Receive MM API for WhatsApp Terms of Service signed webhook (preferred)

Note: The ToS event value will be available from September 8th, 2025. Refer to the legacy webhook below.

When the MM API for WhatsApp Terms of Service (ToS) is signed for a business, a new [`account_update`](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook will be sent for each WhatsApp Business account (WABA) under your business portfolio. The webhook indicates that the WABA's business has successfully accepted the MM API for WhatsApp ToS. When the webhook is triggered, your WABA will be allowed to send messages through MM API for WhatsApp.

You can use the included business portfolio ID and WABA ID to verify compliance and begin sending messages, or trigger subsequent onboarding actions as needed. This webhook is the preferred webhook to track MM API for WhatsApp onboarding and eligibility status.

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<SOLUTION_PROVIDER_BUSINESS_ID>",  
      "time": "<WEBHOOK_TIMESTAMP>",  
      "changes": [  
        {  
          "field": "account_update",  
          "value": {  
            "event": "MM_LITE_TERMS_SIGNED",  
            "waba_info": {  
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>",  
              "waba_id": "<WABA_ID>"  
            }  
          }  
        }  
      ]  
    }  
  ]  
}
```

## Receive onboarding completion webhook (Legacy)

Once you have completed onboarding and linked Ad accounts have been set up, an [`account_update`](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook will be sent for each WABA under your business portfolio to indicate that onboarding has successfully completed. This webhook contains the ID of the read-only Ad account that each WABA is linked to, for use when calling Insights APIs.

Note: This webhook is considered legacy for MM API for WhatsApp onboarding. Please use the MM API for WhatsApp Terms of Service signed webhook.

Important: The `ad_account_linked` webhook event will no longer be fired since partners will not receive access to ad accounts.

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WABA_ID>",  
      "time": "<WEBHOOK_TIMESTAMP>",  
      "changes": [  
        {  
          "field": "account_update",  
          "value": {  
            "event": "AD_ACCOUNT_LINKED",  
            "waba_info": {  
              "waba_id": "<WABA_ID>",  
              "ad_account_id": "<AD_ACCOUNT_ID>",  
              "owner_business_id": "<BUSINESS_PORTFOLIO_ID>"  
            }  
          }  
        }  
      ]  
    }  
  ]  
}
```
