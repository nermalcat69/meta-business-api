---
title: "Viewing metrics"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/deep-links
---

# Viewing metrics

Updated: Jun 30, 2026

Conversion metrics will be solely available in the WhatsApp Manager UI and WhatsApp Business Management API that businesses use with Cloud API in October 2025.

As a result, Meta will deprecate the following conversion metrics:

* Viewing conversion metrics via Ads Manager UI (**September 8th, 2025**).
* Viewing conversion metrics via Ads Insights API (**Q1 2026**).

Businesses that use Marketing Messages API for WhatsApp can view metrics from four surfaces:

* Via WhatsApp Business Platform surfaces
  * WhatsApp Manager UI
  * [WhatsApp Business Management API](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-business-management-api)
* Via Ads surfaces (optional)
  * Ads Manager UI "Marketing Messages" tab
  * Marketing API "[Insights API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights)"

| ROI Reporting | WhatsApp Business Management surfaces | Ads surfaces |
| --- | --- | --- |
| Messages sent, delivered, read | Y | Y |
| Total amount spent | Y | Y |
| Cost per delivery | Y | Y |
| CTA URL link clicks | Y | Y |
| Cost per click | Y | Y |
| CTA URL link click rate | N | Y |
| Add to cart (Web + App) | Y | Y`*` |
| Checkout initiated (Web + App) | Y | Y`*` |
| Purchase, purchase value (Web + App) | Y | Y`*` |
| App Activations | Y | Y`*` |
| Registrations completed (App + Web) | Y | Y`*` |
| Adds to wishlist (App + Web) | Y | Y`*` |
| Adds of payment info (App + Web) | Y | Y`*` |
| Levels achieved (App) | Y | Y`*` |
| Ratings submitted (App) | Y | Y`*` |
| Tutorials completed (App) | Y | Y`*` |
| Searches (App + Web) | Y | Y`*` |
| Leads (Web) | Y | Y`*` |
| Content views (App + Web) | Y | Y`*` |
| Other (App) | Y | Y`*` |
| Custom events (Web) | Y | Y`*` |
| Quick Replies | Y | Y |

`*` Requires a business to report this conversion event via Meta Pixel or Conversions API for App Events [see Get started with the Meta Pixel and Conversions API⁠](https://www.facebookblueprint.com/student/activity/212737?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5amodz9QIwq0K5DiQy-uHAeZzcxq2BA66Wg0wQFdQjjO7Tb5wRWuvFdB53IA_aem_TZmOXcOz0hzfjuB7QbJLmg).

## View metrics via UIs

After sending Marketing Messages via Marketing Messages API for WhatsApp, view read-only metrics on sends, clicks, and conversions from two UIs:

* WhatsApp Manager
* Ads Manager "Marketing Messages" tab

Marketing Messages API for WhatsApp metrics can be viewed in WhatsApp Manager on both Phone Number and Template screens:

![WhatsApp Manager All conversations dashboard showing conversation counts by category and a trend chart](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/476092006_1150702876444748_6174975982108219980_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vGZ3duwATykQ7kNvwGdiyzy&_nc_oc=AdplBryHPQIVW9HLKeHfs2vdhjQM1aV6b_349AqX9BlEVoCl1MkL2gF_Hlm46WS3eR5H0rkUw339DEB-u3ET7Ai3&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=K9QGLTb65WeTQx_FNWhFAQ&_nc_ss=7b2a8&oh=00_AQBwhfmBrxrvQp0p96tTBWk2IqPDSaGLpDIFvhhqxgVObA&oe=6A6052AC)

### Benchmarks and recommendations metrics

Benchmark metrics provide insights into how your business is performing compared to similar businesses in your industry. These metrics are based on data from the past 30 days and take into account various factors that define similar businesses. Based on the benchmark metrics, WhatsApp provides personalized recommendations to help you improve your template's performance. If your template's read rate or click rate falls below the benchmark, WhatsApp provides suggestions to improve read and click rates.

### Calculating benchmarks

To calculate benchmark metrics, WhatsApp considers the following characteristics:

* **Business Country or Region**: WhatsApp uses the business country as the default cohort, but if the cohort size is too small, it switches to the business region.
* **Business Industry**: WhatsApp compares your business with others in the same industry or vertical to provide relevant benchmarks.
* **Template Categories**: WhatsApp only compares templates within the same category (for example, marketing templates with other marketing templates) to ensure accurate and relevant benchmarks.

WhatsApp then calculates two key benchmark metrics:

* **Read Rate Benchmark**: WhatsApp calculates this metric as the 75th percentile of read rates across similar businesses, representing the percentage of messages read out of total messages delivered.
* **Click Rate Benchmark**: WhatsApp calculates this metric as the 75th percentile of click rates across similar businesses, representing the percentage of link clicks out of total messages delivered.

### Understanding your ranking and how to use benchmark metrics

When you view your benchmark metrics, you will see a ranking that indicates how your template performs compared to templates in the same category. This ranking is calculated by comparing your template's performance with the read rate or click rate performance of peer templates with high engagement over the past 30 days.

Use the benchmark metrics to compare your template's performance to templates from similar businesses over the past 30 days. Benchmarks are calculated daily, with a delay of up to 2 days. This ensures that you have access to updated and relevant data to inform your business decisions.

To access the benchmark and recommendations metrics:

* Go to the WhatsApp Manager and select "Manage templates".
* Choose the template you want to view.
* Select the "Marketing Messages API for WhatsApp" option from the dropdown menu highlighted in red.
* The benchmark metrics and recommendation cards will be displayed below the preview card in the left panel.

![WhatsApp Manager Template insights with the Marketing Messages Lite API dropdown, Benchmarks, and Recommendations cards highlighted](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/489606125_1614641949479830_5793009593844219233_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5DRs_rj8NQQQ7kNvwEsTKet&_nc_oc=Ado9HTUQodGG6RGO3Rhb6T2Tinvlm5A4rp6IibJwQu6p7X581NMAPlBw1FIG8Dju51xB6HsSNhwUdXPWt6SFkZLs&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=K9QGLTb65WeTQx_FNWhFAQ&_nc_ss=7b2a8&oh=00_AQD7fTblo25HuUJA7fGtcGov3tS7EEH6GvxQqazmjmo7WA&oe=6A603D4B)

### Error metrics

You can see a summary of error messages your template encountered within a given period of time by navigating to the [**WhatsApp Manager**⁠](https://business.facebook.com/latest/whatsapp_manager/) > **Message templates** > **Manage templates** panel and clicking on the template. The **Error messages** section displays the errors.

![WhatsApp Manager Template insights page with the Error messages section called out below the performance metrics](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/494916197_1372780987177522_8462538949406730249_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=erYx-LjBEJgQ7kNvwH87BVq&_nc_oc=AdrtOHwRrn5Rx7ALbDn8vIlgSwsMfeymoU08LIgZZkKMI8bQJKkEntYFoEqoBL6iPbmNI_ubfpnGWjoGlN_RLhyP&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=K9QGLTb65WeTQx_FNWhFAQ&_nc_ss=7b2a8&oh=00_AQCQfASJG75eOEh7T--EZx7YVDO6IxOSGIopQkLOdF9UwA&oe=6A605923)

The period of time can be defined using the date selector dropdown at the top of the page. See [Cloud API error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) for a list of error codes and their descriptions.

The most frequently encountered message delivery errors are displayed in the **Summary** tab:

![Error messages Summary tab listing delivery errors such as Message undeliverable and Rate limit hit with bar counts](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/494939750_1018419840401159_1265335467156200602_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZEU64J2KUEMQ7kNvwEuMQaw&_nc_oc=AdosS1wqi1jA4sFWmYph4XrFFimWpKJaDllpQkEDDQWuXe3JJEP6G7CjOclSUgvK6eyK1d3vm6IGgqwx-Ds5lyTh&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=K9QGLTb65WeTQx_FNWhFAQ&_nc_ss=7b2a8&oh=00_AQCMBUeHbF8GiXses291CpbWlV0mcoifhg2QT2h6zuSkXA&oe=6A606F96)

The message delivery errors are also displayed as trend lines in the **Trend** tab:

![Error messages Trend tab line chart plotting delivery error counts over time by error type](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/495675967_1251270636408181_5159031297095990508_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=jNSX2X-XEYwQ7kNvwGekPgW&_nc_oc=Adp6viZf6OPXo6c4ePGJjr6Te-RsXIlBCqYWDvvY51ZJG-DTHPGxS27xDQvQdy4CfDU8qjXH6ZDwdW9lvRuCAjEv&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=K9QGLTb65WeTQx_FNWhFAQ&_nc_ss=7b2a8&oh=00_AQANk5bMTAEmjKBo4Y3Gj97XruiMNFSAltTo-wsbueQKsw&oe=6A606228)

## View metrics via APIs

After registering in Marketing Messages API for WhatsApp, analytics for a business's marketing message templates sent via the API are available from two APIs:

* The WhatsApp Business Management API (does not include conversions)
* The Marketing API "Insights API" (includes conversions)

### Benchmark metrics

You can get benchmark metrics via Insights API for read rates and click rates by requesting the following fields:

* `marketing_messages_read_rate_benchmark`
* `marketing_messages_click_rate_benchmark`

#### Syntax

```
curl  
'https://graph.facebook.com/<API_VERSION>/<AD_GROUP_ID>/insights?fields=<METRICS>' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

#### Example query

This example query returns the number of messages read, their read rate, and the benchmark read rate for comparison, as well as the number of button link clicks, their click rate, and the benchmark click rate for comparison, with a default lookback of 30 days:

```
curl 'https://graph.facebook.com/v17.0/120229306178900226/insights?fields=marketing_messages_read,marketing_messages_read_rate,marketing_messages_read_rate_benchmark,marketing_messages_link_btn_click,marketing_messages_link_btn_click_rate,marketing_messages_click_rate_benchmark' \  
-H 'Authorization: Bearer EAACE...'
```

#### Example response

```
{  
  "data": [  
    {  
      "date_start": "2025-05-11",  
      "date_stop": "2025-06-09",  
      "marketing_messages_read": "265",  
      "marketing_messages_read_rate": "481.818182",  
      "marketing_messages_read_rate_benchmark": "70.27",  
      "marketing_messages_link_btn_click": "59",  
      "marketing_messages_link_btn_click_rate": "107.272727",  
      "marketing_messages_click_rate_benchmark": "18.74"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "after": "MAZDZD",  
      "before": "MAZDZD"  
    }  
  }  
}
```

### Measuring ROI with the Marketing API "Insights API" endpoint (additional conversion metrics, recommended)

Businesses can use the [Meta Pixel⁠](https://www.facebook.com/business/tools/meta-pixel) and [Conversions API for App Events](https://developers.facebook.com/documentation/ads-commerce/conversions-api/app-events) to send signals to Meta when customers take an action on their website or app, after clicking a URL in a marketing message. Note that in-thread conversion optimizations and reporting are not yet available for Marketing Messages API for WhatsApp.

The [Insights API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights) is an interface to retrieve ads statistics, allowing a business to view all of the metrics of the Template Analytics plus additional metrics on when marketing messages sent via Marketing Messages API for WhatsApp led to an event reported from their website via Meta Pixel or Conversions API, like a user adding to cart or checking out. **It is required that the business that owns the Pixel is the same business that owns the WABA.**

#### Step 1: Fetch Ad IDs for Templates, using the Templates endpoint

When a business has registered for Marketing Messages API for WhatsApp, Meta creates a read-only Ad account for each WABA under their BMID, and links any marketing message templates under the WABA to an Ad object in that Ad account. Meta also links each marketing message template under the WABA to an Ad set. These Ad and Ad set IDs are needed when calling the Insights API to retrieve metrics on marketing campaigns sent via Marketing Messages API for WhatsApp.

Once a business has registered for the Marketing Messages API for WhatsApp, the Business Management API's Template endpoint will return an additional parameter reflecting their Ad IDs.

* `ad_id`
* `ad_account_id`
* `ad_campaign_id`
* `ad_adset_id`

These Ad ID parameters indicate the Ad id of linked Ads object for each marketing message template.

Call the Template endpoint to retrieve the Ad IDs for each ad entity linked to marketing message templates, for calling the Insights API later.

| Endpoint | Authentication |
| --- | --- |
| `/WHATSAPP_BUSINESS_ACCOUNT_ID/message_templates` | Developers can authenticate their API calls with the access token generated in the **App Dashboard > WhatsApp > API Setup**.  Business messaging partners must authenticate themselves with an access token with the `whatsapp_business_messaging` permission. |

Request Syntax

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates  
  ?fields=category,ad_id,ad_adset_id,ad_campaign_id,ad_account_id
```

See docs: [GET Message Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#retrieve-templates)

If you only want to fetch 1 Template at a time, you can fetch the Ad ID fields at a Template level.

| Endpoint | Authentication |
| --- | --- |
| `/<TEMPLATE_ID>/` | Developers can authenticate their API calls with the access token generated in the **App Dashboard > WhatsApp > API Setup**.  Business messaging partners must authenticate themselves with an access token with the `whatsapp_business_management` permission. |

Request Syntax

```
GET /<TEMPLATE_ID>  
  ?fields=category,ad_id,ad_adset_id,ad_campaign_id,ad_account_id
```

See docs: [GET Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#fields)

#### Step 2: Call the Insights API using the Ad IDs

Direct integrators or business messaging partners retrieve these read-only campaign objects through the existing Insights API endpoints:

| Endpoint | Authentication |
| --- | --- |
| `/AD_CAMPAIGN_ID/insights` | Partners must authenticate themselves with an access token with the `ads_read` permission. |

Get the specified metrics at an ad object level (that is to say, ad account, campaign, ad set, or ad id level) given its ID:

### Example request

```
curl --verbose -s -G -d "access_token=${ACCESS_TOKEN}" https://graph.facebook.com/v19.0/${AD_ACCOUNT_ID|CAMPAIGN_ID|AD_SET_ID|AD_ID}/insights?fields=marketing_messages_sent%2Cmarketing_messages_read"
```

### Example response

```
{  
  "data": [  
    {  
      "marketing_messages_sent": "2",  
      "marketing_messages_read": "1",  
      "date_start": "2023-09-24",  
      "date_stop": "2023-10-23"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "MAZDZD",  
      "after": "MAZDZD"  
    }  
  }  
}
```

This is only an example. For all available params of the API see the full doc: [Insights API docs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights)

All available insights fields are listed below:

* Sent, Read, Delivered, Click
  * marketing\_messages\_sent
  * marketing\_messages\_read
  * marketing\_messages\_delivered
  * marketing\_messages\_link\_btn\_click
* Rates
  * marketing\_messages\_delivery\_rate
  * marketing\_messages\_read\_rate
  * marketing\_messages\_link\_btn\_click\_rate
* Spend metrics
  * marketing\_messages\_spend
  * marketing\_messages\_cost\_per\_delivered
  * marketing\_messages\_cost\_per\_link\_btn\_click
* Conversion events
  * marketing\_messages\_website\_add\_to\_cart
  * marketing\_messages\_website\_initiate\_checkout
  * marketing\_messages\_website\_purchase
  * marketing\_messages\_website\_purchase\_values
  * marketing\_messages\_app\_add\_to\_cart
  * marketing\_messages\_app\_initiate\_checkout
  * marketing\_messages\_app\_purchase
  * marketing\_messages\_app\_purchase\_values

* `marketing_messages_website_complete_registration`
* `marketing_messages_website_add_to_wishlist`
* `marketing_messages_website_add_payment_info`
* `marketing_messages_website_search`
* `marketing_messages_website_lead`
* `marketing_messages_website_view_content`
* `marketing_messages_website_custom`
* `marketing_messages_app_complete_registration`
* `marketing_messages_app_add_to_wishlist`
* `marketing_messages_app_add_payment_info`
* `marketing_messages_app_level_achieved`
* `marketing_messages_app_rate`
* `marketing_messages_app_tutorial_completion`
* `marketing_messages_app_search`
* `marketing_messages_app_view_content`
* `marketing_messages_app_other`

### Measuring ROI with the WhatsApp Business Management API "Template Analytics" endpoint (basic analytics)

The [Template Analytics](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#template-analytics) endpoint of the WhatsApp Business Management API offers the ability to view metrics including: Sent, Delivered, Read, Clicked, and Cost.

In order to fetch metrics for messages sent via Marketing Messages API for WhatsApp, attach the new parameter "product\_type" with the value below. If omitted, the API returns only analytics for Cloud API.

| Endpoint | Authentication |
| --- | --- |
| `/WHATSAPP_BUSINESS_ACCOUNT_ID/conversation_analytics`  Use the query parameter `conversation_categories` = `MARKETING_MESSAGES` to include data from the Marketing Messages API for WhatsApp.  If omitted, the API will return results for all conversation categories. | Developers can authenticate their API calls with the access token generated in the **App Dashboard > WhatsApp > API Setup**.  Business messaging partners must authenticate themselves with an access token with the `whatsapp_business_management` permission. |

Request Syntax

```
GET /WHATSAPP_BUSINESS_ACCOUNT_ID/?fields=conversation_analytics.start(<START_TIMESTAMP>).end(<END_TIMESTAMP>).granularity(DAILY).conversation_categories(MARKETING_LITE).dimensions(["CONVERSATION_CATEGORY"])
```

See docs: [GET Conversation Analytics](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#conversation-analytics)
