---
title: "Deep links"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages
---

# Deep links

Updated: Jun 30, 2026

You can map an [Android deep link⁠](https://developer.android.com/training/app-links/deep-linking?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7PhSroqLTs1sSPgLv5sjpG0RUhvRN0uf5xd0RFRR4SfRCxfCCWVDMgZpNB8Q_aem_6Qem4VU_wsjfQ1EGmMi3Tw) to a marketing template URL button that, when tapped, loads a particular location or content within your app.

![WhatsApp chat showing a Lucky Shrub marketing template message with a View Deals URL button mapped to a deep link](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/499229465_1266088541526902_7472965918950036987_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5eErpYcBSdgQ7kNvwEb5MTB&_nc_oc=Adrfk_iOtUfemTflQUAKdR1pMF5zv673Aqsh9qbQJYCMZvKKSspguThDT6Zo6rBVtBd2bD2-SSzEKob3qHPpMOlK&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=CPySDdejDtA1njgfCSaXJQ&_nc_ss=7b2a8&oh=00_AQAXuoXSlqgg10jb_9bOClsrXikGkHDSNMhq3JKDWSSyyw&oe=6A606485)

If you have not onboarded to the Marketing Messages API for WhatsApp (MM API for WhatsApp), your marketing templates will not display any conversion metrics. Learn more about how to [measure conversion](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/measure-conversion).

## Template creation via WhatsApp Manager

To create a template with a button mapped to an Android deep link:

* Access [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/).
* Navigate to the **Message templates** > **Manage templates** panel and click the **Create template** button.
* Select **Marketing** (tab) > **Custom** (radio button) and click the **Next** button.
* In the **Buttons** section, click the **+ Add buttons** dropdown menu and select **Visit website**.
* Check the **Track app conversions** checkbox to reveal the deep link fields (pictured below).
* Complete each field using its tooltip or [form field](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/send-marketing-messages#form-fields) descriptions below as guidance.
* Add any additional components you’d like your template to use, name your template, and submit it for approval.

Note that you can also use the **Manage templates** panel to edit an existing template and add a deep link-mapped button, but the template must pass template review again.

![WhatsApp Manager template Buttons form with Track app conversions checked, revealing Meta app ID, Android deep link, and Android fallback URL fields](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/524030257_747636164413080_2609413167857336367_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=bwqqr3TP9SEQ7kNvwFLzZEh&_nc_oc=AdoKdpayBQok8CHVBJJHF_SLTKvGZwxM1gr5y-keH-rh70v567zgOe7ZssMXtwpLdAxvfge__rAoTROqfcSoMmoT&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=CPySDdejDtA1njgfCSaXJQ&_nc_ss=7b2a8&oh=00_AQAdL77I26iHn3BICuDrbUqolvzwF3ZS1V_qvMT1F4aWcg&oe=6A605992)

### Form fields

| Field label | Description | Example value |
| --- | --- | --- |
| Android deep link | **Required.** Android deep link URI. | luckyshrub://deals/`summer_solstice` |
| Android fallback URL | **Optional.** Fallback URL. If the WhatsApp client cannot load the deep link URI, the WhatsApp client loads this URL in the device’s default web browser.  If omitted, the WhatsApp client loads the URL specified in the Website URL field instead. | https://www.luckyshrub.com/deals/`summer_solstice` |
| Button Text | **Required.** Button label text. Maximum 25 characters. | View deal |
| Meta app ID | **Required.** This is a list of the Meta app(s) associated with your business portfolio. Select the app whose access token you will use to send the template. | Lucky Shrub (634974688087057) |
| Type of Action | **Required.**  Must be set to **Visit website**. | Visit website |
| URL Type | **Required.** Set to **Static** if your Android deep link or Android fallback URL has no dynamic values, otherwise set to **Dynamic**. | Static |
| Website URL | **Required.**  URL of a website to load if the WhatsApp user views the message on a non-Android device, or if the WhatsApp client cannot load your Android deep link URI and no Android fallback URL is specified. | https://www.luckyshrub.com/ |

## Template creation via API

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to create the template and include a URL button component mapped to your Android deep link.

Note that you can also use the [Template API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-template-id) to edit an existing template and add a URL button component, but the template must pass template review again.

### Request syntax

Template components can vary based on your needs. This example syntax creates a marketing template with the following components:

* **text header**, without parameters
* **body**, without parameters
* **URL button**, mapped to a deep link URI and fallback URL

```
```
'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "name": "<TEMPLATE_NAME>",  
  "language": "<TEMPLATE_LANGUAGE>",  
  "category": "marketing",  
  "components": [  
    {  
      "type": "header",  
      "format": "text",  
      "text": "<HEADER_TEXT>"  
    },  
    {  
      "type": "body",  
      "text": "<BODY_TEXT>"  
    },  
    {  
      "type": "buttons",  
      "buttons": [  
        {  
          "type": "url",  
          "text": "<BUTTON_LABEL_TEXT>",  
          "url": "<BUTTON_URL>",  
          "app_deep_link": {  
            "meta_app_id": <META_APP_ID>,  
            "android_deep_link": "<ANDROID_DEEP_LINK>",  
            "android_fallback_playstore_url": "<FALLBACK_URL>"  
          }  
        }  
      ]  
    }  
  ]  
}'
```
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`*String* | **Required.**[System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAJB...` |
| `<ANDROID_DEEP_LINK>`*String* | **Required if using a URL button component mapped to a deep link.**[Android deep link⁠](https://developer.android.com/training/app-links/deep-linking?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7PhSroqLTs1sSPgLv5sjpG0RUhvRN0uf5xd0RFRR4SfRCxfCCWVDMgZpNB8Q_aem_6Qem4VU_wsjfQ1EGmMi3Tw) URI. The WhatsApp client loads this URI when the WhatsApp user taps the button on an Android device. | `luckyshrub://deals/summer/` |
| `<API_VERSION>`*String* | **Optional.** Graph API [version](https://developers.facebook.com/docs/graph-api/guides/versioning). | `v22.0` |
| `<BODY_TEXT>`*String* | **Required if using a body component.** Template body text. Variables are supported. Maximum 1024 characters. | `Beat the heat with our sizzling summer deals on succulents! At Lucky Shrub, we...` |
| `<BUTTON_LABEL_TEXT>`*String* | **Required if using a URL button component.** Button label text. Maximum 25 characters. | `View Deals` |
| `<BUTTON_URL>`*String* | **Required if using a URL button component.** URL of a website that the WhatsApp client loads in the device’s default web browser when the user taps the button. For deep links, the WhatsApp client uses this website URL only if the WhatsApp user taps the button on a non-Android device. | `https://www.luckyshrub.com/deals/summer/` |
| `<FALLBACK_URL>`*String* | **Required if using a URL button mapped to a deep link.** URL of a website that the WhatsApp client loads in the device’s default web browser when the user taps the button but the client cannot load the Android deep link URI. | `https://www.luckyshrub.com/deals/summer/` |
| `<HEADER_TEXT>`*String* | **Required if using a text header component.** Template header text string. Supports up to 1 parameter. If this string contains a parameter, you must include an `example` property. Maximum 60 characters. | `Sizzling Summer Deals at Lucky Shrub` |
| `<META_APP_ID>`*Integer* | **Required if using a URL button mapped to a deep link.** Your Meta app ID. | `634974688087057` |
| `<TEMPLATE_LANGUAGE>`*String* | **Required.** Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`*String* | **Required.** Template name. Maximum 512 characters. | `summer_deals_deep_link_v1` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`*String* | **Required.** WhatsApp Business account ID. | `102290129340398` |

## Example request

```
```
curl 'https://graph.facebook.com/v22.0/102290129340398/message_templates' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer EAAJB...' \  
-d '  
{  
  "name": "summer_deals_deep_link_v1",  
  "language": "en_US",  
  "category": "marketing",  
  "components": [  
    {  
      "type": "header",  
      "format": "text",  
      "text": "Sizzling Summer Deals at Lucky Shrub"  
    },  
    {  
      "type": "body",  
      "text": "Beat the heat with our sizzling summer deals on succulents! At Lucky Shrub, we're passionate about bringing a touch of greenery to your life. Our succulents are not only low-maintenance and easy to care for, but they also add a pop of color and style to any room. Use the button below to see our Summer Steals!"  
    },  
    {  
      "type": "buttons",  
      "buttons": [  
        {  
          "type": "url",  
          "text": "View Deals",  
          "url": "https://www.luckyshrub.com/deals/summer/",  
          "app_deep_link": {  
            "meta_app_id": 634974688087057,  
            "android_deep_link": "luckyshrub://deals/summer/",  
            "android_fallback_playstore_url": "https://www.luckyshrub.com/deals/summer/"  
          }  
        }  
      ]  
    }  
  ]  
}'
```
```

## Viewing metrics

See our [Viewing metrics](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/view-metrics) document.
