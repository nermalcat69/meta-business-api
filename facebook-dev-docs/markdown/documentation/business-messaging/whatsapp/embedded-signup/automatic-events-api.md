---
title: "Hosted Embedded Signup"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api
---

# Hosted Embedded Signup

Updated: Jun 28, 2026

You can implement Embedded Signup without adding JavaScript code to your website or customer portal. Instead, use a link that displays a web page describing the onboarding steps. The page includes a button that launches the Embedded Signup flow:

![Hosted Embedded Signup onboarding page with numbered steps and a Get started button that launches the flow](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/557247008_1487309905743315_2332288243528054136_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=n0enIu4gJNEQ7kNvwFjSLLU&_nc_oc=AdrW4pmp67F5Q_F8e-RkgsPVOkWUYvcFS0m3nqL36KfBbcgZfbc92JdJb9lfadIybAeKatxFKpk7o9DpHYTw4JJ4&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=yoxTMfbhi7WYWsXe2zL1EA&_nc_ss=7b2a8&oh=00_AQAqOGcsPyfsf5kcpFfN9CNCU5tXMo8hOUP2bdELbEMIuw&oe=6A606F4A)

## Limitations

Hosted Embedded Signup ("Hosted ES") can only be used to onboard business customers to Cloud API, and the flow cannot be customized.

## Requirements

* You must have completed the steps to become a Solution Partner or Tech Provider.
* If your app is for messaging, it must be able to send messages, manage templates, and have a properly configured production webhook endpoint.
* Your app must be subscribed to the [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook.
* Solution Partners must have a line of credit.

You will also need:

* Your [system token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).
* Your app secret.

## Step 1: Create a Facebook Login for Business configuration

If you don't already have a Facebook Login for Business configuration, you must create one. A Facebook Login for Business configuration defines which permissions to request, and what additional information to collect, from business customers who access Embedded Signup.

Navigate to **Facebook Login for Business** > **Configurations** and click the **+ Create configuration** button to access the configuration flow.

Use a name that will help you differentiate this configuration from any others you may create in the future. When completing the flow, be sure to select the WhatsApp Embedded Signup login variation:

![Create a Configuration login variation step with WhatsApp Embedded Signup selected among Facebook Login for Business options](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/556678416_1155934729723662_8909215200649973782_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hWWfPDEUYrMQ7kNvwFwKbWm&_nc_oc=AdovTXa_wsSvYStj2nCgDLTnzUBmlKfi7gUxow_zfj-kJ60Qa8lSXnsvSoelmyaziLXOTuTtmcU6qU1CRdplGDd9&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=yoxTMfbhi7WYWsXe2zL1EA&_nc_ss=7b2a8&oh=00_AQA2IBADi_YbC7N4QjoddVkjifgpo7l9nnGSONy6iQ2ljQ&oe=6A6065E8)

When choosing assets and permissions, select only those assets and permissions that you will actually need from your business customers.

![Create a Configuration Choose assets step listing Pages, Ad accounts, Catalogs, Pixels, Instagram, and WhatsApp accounts checkboxes](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/556838067_777912301525569_1334774809437446260_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zDZZ1Dc6fsoQ7kNvwGL-h_d&_nc_oc=AdoPVWuHenCANA8MO27LPxxHM4qgTyNUXLJBN3mqSpnQQOGRocqvVj4KBcs5rYpOLBQZhInkn82_i4vnYoTJOnE-&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=yoxTMfbhi7WYWsXe2zL1EA&_nc_ss=7b2a8&oh=00_AQDkRSN-5RNuAJFgU8CoZt2SSE_I65CYJ-5WIYK2JBTkWA&oe=6A6040A1)

For example, if you select the **Catalogs** asset but don't actually need access to customer catalogs, your customers will likely abandon the flow at the catalog selection screen and ask you for clarification.

## Step 2: Get the Hosted Embedded Signup URL

Navigate to the **WhatsApp** > **Quickstart** panel and click the **View onboarding** button.

![App Dashboard WhatsApp Quickstart panel with the View onboarding button highlighted](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/556820792_1873904266492750_8998264804748617024_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Nqb3pH0kCIYQ7kNvwF_if2b&_nc_oc=AdpiFZJZX8NzYFJJRLtnb3BYE8J40yUGy5lhWGJ74NpcUFIkw3fbnuhQAD_eElQ3ILn6wQmyWRdBSz2SVGW_Q566&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=yoxTMfbhi7WYWsXe2zL1EA&_nc_ss=7b2a8&oh=00_AQAy37FTNoLFHLvbl6z67zAAsF3DKDpbZU6pcESa213EUw&oe=6A606AA9)

Locate the **Zero integration onboarding** card. The URL displayed in the card is the onboarding page URL:

![Onboarding screen Zero integration onboarding card showing the onboarding page URL to copy](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/556828984_1430417581383742_4223219994357738350_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vYEaVUU8ym4Q7kNvwGdJZ8Z&_nc_oc=AdqT39Phs-iYvWc2Brv2ARF4jX_lmKMBBRz8UFMdwea75GpOdZB4tGvetsiDoDPH4dZwG_LKrEW1JqijaDxlEw4o&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=yoxTMfbhi7WYWsXe2zL1EA&_nc_ss=7b2a8&oh=00_AQC8xk5XJmbBdBLfmEYBufPdUy3yIlqBqxaBfdfFMWyRyg&oe=6A604CEB)

Click the **Copy** button to copy the URL to your clipboard. Map this URL to a button on your website or customer portal that, when clicked, opens the URL in a new browser window.

To preview the onboarding page, load the URL in a new browser window or tab, or click the blue "new window" icon.

This onboarding page looks like this:

![Hosted Embedded Signup onboarding page with numbered steps and a Get started button that launches the flow](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/557247008_1487309905743315_2332288243528054136_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=n0enIu4gJNEQ7kNvwFjSLLU&_nc_oc=AdrW4pmp67F5Q_F8e-RkgsPVOkWUYvcFS0m3nqL36KfBbcgZfbc92JdJb9lfadIybAeKatxFKpk7o9DpHYTw4JJ4&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=yoxTMfbhi7WYWsXe2zL1EA&_nc_ss=7b2a8&oh=00_AQAqOGcsPyfsf5kcpFfN9CNCU5tXMo8hOUP2bdELbEMIuw&oe=6A606F4A)

Click the **Get started** button, which launches the same flow that business customers who click the button on your website or customer portal will see. Complete the flow if you want to.

## Step 3: Capture customer asset IDs

When a business customer completes the flow, Meta sends an [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook with `event` set to `PARTNER_ADDED`. Capture the customer's WhatsApp Business account ID and business portfolio ID from the webhook payload.

## Step 4: Generate an HMAC-SHA256 hash

Generate an HMAC-SHA256 hash of your app secret and system token.

### Bash example (Linux and macOS)

```
echo -n "<SYSTEM_TOKEN>" | openssl dgst -sha256 -hmac "<APP_SECRET>"
```

* `<SYSTEM_TOKEN>` — Your system token.
* `<APP_SECRET>` — Your app secret ([**App Dashboard**](https://developers.facebook.com/apps) > **App settings** > **Basic**).

## Step 5: Get a business token

Use the [System User Access Tokens API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_user_access_tokens) to get and capture the customer's [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). (Target the customer's business portfolio ID, not yours).

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PORTFOLIO_ID>/system_user_access_tokens' \  
-H 'Content-Type: application/x-www-form-urlencoded' \  
-H 'Authorization: Bearer <SYSTEM_TOKEN>' \  
-d 'appsecret_proof=<APPSECRET_PROOF>' \  
-d 'fetch_only=true'
```

* `<API_VERSION>` — API version.
* `<APPSECRET_PROOF>` — HMAC-SHA256 hash of your app secret and system token.
* `<BUSINESS_PORTFOLIO_ID>` — Business customer's business portfolio ID.
* `<SYSTEM_TOKEN>` — Your system token.

### Response syntax

Upon success:

```
{  
  "access_token": "<BUSINESS_TOKEN>"  
}
```

* `<BUSINESS_TOKEN>` — The business customer's business token.

## Step 6: Get the customer's business phone number ID

Use the [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api) to get and capture the business customer's business phone number ID.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers' \  
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

* `<API_VERSION>` — API version.
* `<BUSINESS_TOKEN>` — Business customer's business token.
* `<WHATSAPP_BUSINESS_ACCOUNT_ID>` — Business customer's WhatsApp Business account ID.

### Response syntax

```
{  
  "data": [  
    {  
      "verified_name": "<VERIFIED_NAME>",  
      "code_verification_status": "<CODE_VERIFICATION_STATUS>",  
      "display_phone_number": "<DISPLAY_PHONE_NUMBER>",  
      "quality_rating": "<QUALITY_RATING>",  
      "platform_type": "<PLATFORM_TYPE>",  
      "throughput": {  
        "level": "<THROUGHPUT_LEVEL>"  
      },  
      "last_onboarded_time": "<LAST_ONBOARDED_TIME>",  
      "webhook_configuration": {  
        "application": "<WEBHOOK_CALLBACK_URL>"  
      },  
      "id": "<BUSINESS_PHONE_NUMBER_ID>"  
    }  
  ]  
}
```

* `<BUSINESS_PHONE_NUMBER_ID>` — Business phone number ID.
* `<CODE_VERIFICATION_STATUS>` — Business phone number verification status.
* `<DISPLAY_PHONE_NUMBER>` — Business display phone number.
* `<LAST_ONBOARDED_TIME>` — Unix timestamp indicating when the number was added to the business customer's WhatsApp Business account (essentially, when the customer successfully completed the flow).
* `<PLATFORM_TYPE>` — Platform.
* `<QUALITY_RATING>` — Business phone number quality rating.
* `<THROUGHPUT_LEVEL>` — Throughput level.
* `<VERIFIED_NAME>` — Business phone number verified name.
* `<WEBHOOK_CALLBACK_URL>` — Webhook callback URL associated with the number.

## Step 7: Onboard the customer

Onboard the business customer by completing the steps in the appropriate onboarding guide for your partner type:

* [Onboarding business customers as a Tech Provider or Tech Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider) (skip step 1)
* [Onboarding business customers as a Solution Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner) (skip step 1)
