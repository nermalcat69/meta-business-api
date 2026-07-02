---
title: "Facebook partnership ads with a new ad creative"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/partnership-ads/ad-codes
---

# Facebook partnership ads with a new ad creative

Updated: Jun 26, 2026

You can use branded content media, such as a post tagged as branded content by a creator, to create partnership ads.

This document shows you how to:

* Create an ad with yourself as the primary identity and the creator as the secondary identity
* Create an ad with the creator as the primary identity and you as the secondary identity

## Before you start

Review the [requirements](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/partnership-ads/ads-creation#before-you-start) for creating partnership ads.

### Upload a new creative

![Upload a new creative panel in Ads Manager](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/597017468_1383235466868437_1094233186868674612_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=B6wVidJZiRwQ7kNvwFcojmy&_nc_oc=AdozS7m_PmpfHBA7zVMCcLv-Kzlj_4oc6kFwzoKiwIqMX4th3UJ5-irjjMYBmInyFrPDZrCelJChnSugyf_EupLV&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=MY-GuKQv2EFS4qtXztc3VA&_nc_ss=7b289&oh=00_AQA3bjbwrLHzXo3qShh9qYJDoNKSTU5_9umHqkG8Xq492A&oe=6A60832A)

* [Upload and manage images](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) to later use in an [ad creative](https://developers.facebook.com/docs/marketing-api/adcreative). Image formats, sizes, and design guidelines depend upon your type of ad; see [Ads Guide⁠](https://www.facebook.com/business/ads-guide/) and [Image Crop](https://developers.facebook.com/documentation/ads-commerce/marketing-api/image-crops) for more information.
* To upload videos, follow the [Video API publishing guidelines](https://developers.facebook.com/docs/video-api/guides/publishing).

## Retrieve the creator’s Facebook Page ID

You can fetch a creator’s Facebook Page ID using the [Pages Search API](https://developers.facebook.com/docs/pages-api/search-pages), or by asking the creator to provide their [Facebook Page’s ID⁠](https://www.facebook.com/business/help/2814101678867149).

You can also go to the Facebook Page and find under About > Page Transparency.

## Create an ad with yourself as the primary identity

Send a `POST` request to the `/act_{ad-account-id}/adcreatives` endpoint with the `page_id` field set to the advertiser’s Facebook Page ID for the primary identity. You also pass either the `sponsor_id` (Instagram) or the `sponsor_page_id` (Facebook) fields, or both, to be the secondary identity of the partnership ad.

**Note:** If you only provide either the `sponsor_id` or the `sponsor_page_id`, Meta automatically links the associated Instagram user ID or Facebook Page ID. If there is no hard link between the Instagram and Facebook accounts, Meta does not deliver the ad to that specific platform.

### Example request

```
```
{  
  "degrees_of_freedom_spec": {    // required field to be passed  
    "creative_features_spec": {  
      "standard_enhancements": {    // required field to be passed  
        "action_metadata": {  
          "type": "DEFAULT"  
        },  
        "enroll_status": "OPT_IN"  
      }  
    },  
    "degrees_of_freedom_type": "USER_ENROLLED_AUTOFLOW"  
  },  
  "facebook_branded_content": {  
    "sponsor_page_id": "255033446395141" // Creator Page ID (test rithiky brand)  
  },  
  "object_story_spec": {  
    "page_id": "110001241469329",   // Advertiser Page ID (test vitaan brand new)  
  "link_data": {  
      "attachment_style": "link",  
      "call_to_action": {  
        "type": "LEARN_MORE"  
      },  
      "link": "www.instagram.com", // sample url  
      "image_hash": "1b7a65956006e9941608b3914d3964f5" //sample image hash  
    }  
  }  
}
```
```

### Example response

```
```
{  
  "id": <CREATIVE_ID>  
}
```
```

### Example ad

The example request for the advertiser as the primary identity produces the ad shown in the following image.

![Rendered partnership ad with the advertiser as the primary identity and the creator as the secondary identity](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/596498751_1383235470201770_6688408499195165430_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9nRhHIEvSbkQ7kNvwFEuHnj&_nc_oc=AdoUIApy9Kf9X5VK0tsn1fkyN6xX3nZsuMC20pd_UJfTXUsKKs0zTBEdXNaim1f5xOjOo2PnMEDYh3f6T5b4WqyM&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=MY-GuKQv2EFS4qtXztc3VA&_nc_ss=7b289&oh=00_AQDpJuTFOusOucNxnZhV345iIeUbZzbMuduNApoh0sLBqg&oe=6A605D90)

## Create an ad with the creator as the primary identity

Send a `POST` request to the `/act_{ad-account-id}/adcreatives` endpoint with the `page_id` field set to the creator’s Facebook Page ID.

If the creator does not have an existing Facebook Page, you can pass your Page ID as the `page_id` field, but Meta does not deliver the ad to Facebook.

**Note:** Meta automatically derives the Instagram user ID from the Facebook Page ID you pass in the `object_story_spec` field.

### Example request

```
```
{  
  "degrees_of_freedom_spec": {    // required field to be passed  
    "creative_features_spec": {  
      "standard_enhancements": {    // required field to be passed  
        "action_metadata": {  
          "type": "DEFAULT"  
        },  
        "enroll_status": "OPT_IN"  
      }  
    },  
    "degrees_of_freedom_type": "USER_ENROLLED_AUTOFLOW"  
  },  
  "facebook_branded_content": {  
    "sponsor_page_id": "255033446395141" // Advertiser Page ID (test vitaan brand)  
  },  
  "object_story_spec": {  
    "page_id": "255033446395141",   // Creator Page ID (test rithiky brand)  
    "link_data": {  
      "attachment_style": "link",  
      "call_to_action": {  
        "type": "LEARN_MORE"  
      },  
      "link": "www.instagram.com", // sample url  
      "image_hash": "1b7a65956006e9941608b3914d3964f5" //sample image hash  
    }  
  }  
}
```
```

### Example response

```
```
{  
  "id": <CREATIVE_ID>  
}
```
```

### Example ad

The sample request above produces the following ad.

![Rendered partnership ad with the creator as the primary identity and the advertiser as the secondary identity](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/594152998_1383235473535103_33044500718138165_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=z8QBmDOWJe0Q7kNvwGjW9ga&_nc_oc=AdoyQBSWdTuMs34iOLd58vLHA4WOiYcTwYOLLCJz4istjlys9gM5dvuqA14ybVTUakdjHVRpBnl5JTTbqJhifaBW&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=MY-GuKQv2EFS4qtXztc3VA&_nc_ss=7b289&oh=00_AQDaz0EOgToc0z_db9k-Lqv3LGokmp5_wdIMT0O0FDWV6Q&oe=6A606070)

## Create an ad

To create an ad with the ad creative you provided using one of the sections above, send a `POST` request to the `/act_{ad-account-id}/ads` endpoint with the `name` field set to the name for your ad, the `adset_id` field set to your ad set ID, the `creative` field with the `creative_id` parameter set to the ad creative ID you received, and the `status` initially set `PAUSED`.

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

On success, the API returns the ad ID.

```
```
{  
  "id": <AD_ID>  
}
```
```

You can use the returned ad ID to [publish your ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started#book-ad).

## Related resources

* [App Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads)
* [Video and Carousel Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/videoads)
* [Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads)
* [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads)
* [Ads that Click to WhatsApp](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-whatsapp)
* [Lead Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads)
