---
title: "Instagram Partnership Ads with a New Ad Creative"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/partnership-ads/ads-creation/supported-configurations
---

# Instagram Partnership Ads with a New Ad Creative

Updated: Jun 30, 2026

You can use branded content media, such as a post tagged as branded content by a creator, to create partnership ads.

This document shows you how to:

* Create an ad with yourself as the primary identity and the creator as the secondary identity
* Create an ad with the creator as the primary identity and you as the secondary identity

## Before you start

Review the [requirements](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/partnership-ads/ads-creation#before-you-start) for creating partnership ads.

### Upload a new creative

![Flowchart of advertiser uploading media then fetching creator IDs to generate image, video, or carousel ad creative](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/597017468_1383235466868437_1094233186868674612_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=B6wVidJZiRwQ7kNvwFcojmy&_nc_oc=AdozS7m_PmpfHBA7zVMCcLv-Kzlj_4oc6kFwzoKiwIqMX4th3UJ5-irjjMYBmInyFrPDZrCelJChnSugyf_EupLV&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=26UUg3Am3FNYF8JI5WWX_Q&_nc_ss=7b289&oh=00_AQDn3Tvud8qabcLxQK0GVmgY6ZfrJ87GAz5b2idh7N3t7Q&oe=6A60832A)

* [Upload and manage images](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) to later use in an [ad creative](https://developers.facebook.com/docs/marketing-api/adcreative). Image formats, sizes, and design guidelines depend upon your type of ad; see [Ads Guide⁠](https://www.facebook.com/business/ads-guide/) and [Image Crop](https://developers.facebook.com/documentation/ads-commerce/marketing-api/image-crops) for more information.
* To upload videos, follow the [Video API publishing guidelines](https://developers.facebook.com/docs/video-api/guides/publishing).

## Retrieve the creator's Instagram ID

To fetch the creator's Instagram ID, use [Business Discovery](https://developers.facebook.com/docs/instagram-api/guides/business-discovery).

### Example request

This sample query shows how to get the creator Instagram ID of the Blue Bottle Coffee Instagram account. Perform business discovery queries on the Instagram business or creator account's ID, in this case 17841405309211844. Do not use the username of the account that you are attempting to get data about (bluebottle in this example).

```
curl -i -X GET \
  "https://graph.facebook.com/v25.0/17841405309211844?fields=business_discovery.username(bluebottle)&access_token=<ACCESS_TOKEN>"
```

### Example response

```
{  
  "business_discovery": {"id": "17841401441775531" // Blue Bottle's Instagram Account ID }  
}
```

## Creating an ad with yourself as the primary identity

Send a `POST` request to the `/act_{ad-account-id}/adcreatives` endpoint. Set the `page_id` field to your brand's Facebook Page ID for the primary identity. For the secondary identity, pass either the `sponsor_id` (Instagram) or the `sponsor_page_id` (Facebook) field, or both.

**Note:** If you only provide either the `sponsor_id` or the `sponsor_page_id`, the associated Instagram user ID or Facebook Page ID will be automatically linked. If there is no hard link between the Instagram and Facebook accounts, the ad will not be delivered to that specific platform.

### Example request

```
{  
  "degrees_of_freedom_spec": {    // required field to be passed  
    "creative_features_spec": {  
      "standard_enhancements": {    // required field to be passed  
        "action_metadata": {  
          "type": "DEFAULT"  
        },  
        "enroll_status": "OPT_IN"  
      }  
    },  
    "degrees_of_freedom_type": "USER_ENROLLED_AUTOFLOW"  
  },  
  "facebook_branded_content": {  
    "sponsor_page_id": "255033446395141" // Creator Page ID (test rithiky brand)  
  },  
  "instagram_branded_content": {  
    "sponsor_id": "90010551992170" // Creator IG ID (test_rithiky_brand)  
  },  
  "object_story_spec": {  
    "page_id": "110001241469329",   // Advertiser Page ID (test vitaan brand new)  
  "link_data": {  
      "attachment_style": "link",  
      "call_to_action": {  
        "type": "LEARN_MORE"  
      },  
      "link": "www.instagram.com", // sample url  
      "image_hash": "1b7a65956006e9941608b3914d3964f5" //sample image hash  
    }  
  }  
}
```

### Example response

```
{  
  "id": <CREATIVE_ID>  
}
```

### Example ad

Here is how the above sample request would output the ad.

![Sponsored Instagram partnership ad by test_vitaan_brand_new and test_rithiky_brand showing a sunset city skyline](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/577036457_1383235476868436_4883943155114015529_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Gf5_UGNXYJ8Q7kNvwG2J-zG&_nc_oc=Adoj5S-UZAADRXfVHjjUGcMNU4BxtlnOAjb0bG2CKQ3Vd_WCQi4-HQXxavNep-5LmQTuja2PJOwsCIknELbs7uJ9&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=26UUg3Am3FNYF8JI5WWX_Q&_nc_ss=7b289&oh=00_AQB-km-WCo0ilFe0h8E0Nowx8Surxn6p6pQ5dQy0Maz4bg&oe=6A6055B2)

## Creating an ad with the creator as the primary identity

Send a `POST` request to the `/act_{ad-account-id}/adcreatives` endpoint with the `page_id` field set to the creator's Facebook Page ID.

If the creator does not have an existing Facebook Page, you can pass your Page ID as the `page_id` field, but the ad will not be delivered to Facebook.

**Note:** The Instagram user ID will automatically be derived from the Facebook Page ID passed in the `object_story_spec` field.

### Example request

```
{  
  "degrees_of_freedom_spec": {    // required field to be passed  
    "creative_features_spec": {  
      "standard_enhancements": {    // required field to be passed  
        "action_metadata": {  
          "type": "DEFAULT"  
        },  
        "enroll_status": "OPT_IN"  
      }  
    },  
    "degrees_of_freedom_type": "USER_ENROLLED_AUTOFLOW"  
  },  
  "facebook_branded_content": {  
    "sponsor_page_id": "255033446395141" // Advertiser Page ID (test vitaan brand)  
  },  
  "instagram_branded_content": {  
    "sponsor_id": "35302227070484" // Advertiser IG ID (test_vitaan_brand)  
  },  
  "object_story_spec": {  
    "page_id": "255033446395141",   // Creator Page ID (test rithiky brand)  
    "link_data": {  
      "attachment_style": "link",  
      "call_to_action": {  
        "type": "LEARN_MORE"  
      },  
      "link": "www.instagram.com", // sample url  
      "image_hash": "1b7a65956006e9941608b3914d3964f5" //sample image hash  
    }  
  }  
}
```

### Example response

```
{  
  "id": <CREATIVE_ID>  
}
```

### Example ad

Here is how the above sample request would output the ad.

![Sponsored Instagram partnership ad by test_rithiky_brand and test_vitaan_brand_new showing a sunset city skyline](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/596492654_1383235443535106_3111427696375121291_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=LFjF5IJOiWoQ7kNvwGX6j7h&_nc_oc=AdrBW7i_BTvLW1amE8a7sR0IJDWvoaucedKA8O3MP0Ku2G1oC5xptD287CaoDBAKsAjnHdGSTr5xfqXDZVJwKHsm&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=26UUg3Am3FNYF8JI5WWX_Q&_nc_ss=7b289&oh=00_AQAe5CcH7THfTZ9yUfwLJDFFibjvZQpcCtf-XGjb2bcYzg&oe=6A608B47)

## Create an ad

To create an ad with the ad creative you provided using one of the sections above, send a `POST` request to the `/act_{ad-account-id}/ads` endpoint with the following fields:

* `name`: the name for your ad
* `adset_id`: your ad set ID
* `creative`: the `creative_id` parameter set to the ad creative ID you received
* `status`: initially set to `PAUSED`

### Example request

```
curl -X POST \
  -F 'name": "My Ad's Name"' \
  -F 'adset_id: <ADSET_ID>' \
  -F 'creative: {"creative_id": <CREATIVE_ID>}' \
  -F 'status: "PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>'\
'https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads'
```

### Example response

Upon success, your app will receive the ad ID.

```
{  
  "id": <AD_ID>  
}
```

You can use the returned ad ID to [publish your ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started#book-ad).

## Related resources

* [App Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads)
* [Video and Carousel Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/videoads)
* [Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads)
* [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads)
* [Ads that Click to WhatsApp](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-whatsapp)
* [Lead Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads)
