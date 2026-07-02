---
title: "Localized Catalog for Advantage+ Catalog Ads"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog-ig
---

# Localized Catalog for Advantage+ Catalog Ads

Updated: Mar 18, 2026

## Overview

Use this guide to set up your localized catalog for Advantage+ catalog ads.

Your [catalog](https://developers.facebook.com/documentation/ads-commerce/catalog) is an object (or container) of information about your products where you upload your inventory.

### How it Works

Meta provides localized catalog functionality, enabling you to set up your product catalog to show items in ads or shops for items in different countries. Localizing the currency, the price, and the translated title or description are common cases. You can also give a localized product URL to navigate the customer to your country or language-specific product website. Learn more about how to set up your [localized catalog](https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog/localized-catalog-setup).

## Build a Template for Advantage+ Catalog Ads

When building a template for [Advantage+ catalog ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#create-template), you can specify customizations to the creative that are in different languages. For example, you might want to show a different headline to viewers of your ad who speak another language.

In addition to the other fields in the creative’s template data (within the object story spec), you can specify an **array** of customizations, in the `customization_rules_spec` field, where each customization has the following form:

| Field Name | Description | Accepts Template Parameters |
| --- | --- | --- |
| `customization_spec`  type: object | **Required**.  Describes the language for the customization. Learn how to [Create Advantage+ Catalog Ads for Multiple Languages and Countries, Ads Help Center⁠](https://www.facebook.com/business/help/2144286692311411?locale=en_US).  Example: `{'language' => 'en_XX'}` | No |
| `message`  type: string | **Optional**.  Message for your ad, visible on Instagram.  Example: `Test {{product.name | titleize}}` | Yes |
| `link`  type: string | **Optional**.  Link to your website; used to generate the caption of the ad. This field is always replaced with the `link` field from your product feed, except the end card of [Carousel Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/videoads#spec), which links to this. This cannot be a URL on [Facebook.com⁠](http://facebook.com/).  Example: `//link.com`  For Collection ads, you can use `link` to provide an Instant Experiences document, as detailed in [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads).  Example: `https://fb.com/canvas_doc/CANVAS_ID` | No |
| `name`  type: string | **Optional**.  Name or title for your ad, visible on Instagram.  Example: `Headline {{product.price}}` | Yes |
| `description`  type: string | **Optional**.  Description for your ad. Not visible on Instagram.  Example: `Description {{product. description}}` | Yes |
| `template_url_spec`  type: object | **Optional**.  Can be used to provide a web deep link, as detailed in [Click Tracking and Templates](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#create-template). **Note**: We only support the web deeplink.  Example: `{'web' => {'url' => DEEP_LINK}}`  Example: `{'web' => {'url' => 'example://link/?id={{product. retailer_id}}'}}` | Yes |
| `video_id`  type: integer | **Optional**.  For Collection ads only, you can use `video_id` to provide video for Collection hero media, as detailed in [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads).  Example: `1234` | No |
| `picture`  type: string | **Optional**.  For Collection ads only, you can use `picture` to provide an image for Collection hero media, as detailed in [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads).  Example: `https://url/image.jpg` | No |

When specifying the array of customizations, only **one** of the customizations should specify only the `customization_spec`. This identifies the language of the non-customized text that has been used in the `template_data`.

When the ad is rendered, the rendering language is chosen, based on the viewer’s interface language and other signals. Meta also uses product properties from the catalog language feed to match the rendering language, if available.

See also [Build a Creative Template](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#create-template), [Supported Fields for Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#supported-fields), and [Supported Feed Formats for Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#feed-format).

### Template for Collection Ads

When building [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads), you can specify customizations to the creative, similarly as multi-language Advantage+ catalog ads via `customization_rules_spec`.

**Limitations**:

* `link` for Collection ads must be created [using templates](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences#templates) — Instant Storefront, formerly “Sell Products, Grid (1932289657009030)”
* Template for Collection Ads is only delivered via a Facebook Mobile Feed placement only.

### Examples

### Preview Multi-Language or Country Advantage+ Catalog Ads for a Different Language or Country

```
curl -X GET \
  -d 'ad_format="DESKTOP_FEED_STANDARD"' \
  -d 'product_item_ids=[
       "<PRODUCT_ITEM_ID>"
     ]' \
  -d 'dynamic_customization={
       "language": "fr_XX",
       "country": "FR"
     }' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<CREATIVE_ID>/previews
```

### Create a Carousel Advantage+ Catalog Ads Template with Multiple Languages

```
curl -X POST \
  -F 'name="Dynamic Ad Template Creative Sample"' \
  -F 'object_story_spec={
       "page_id": "<PAGE_ID>",
       "template_data": {
         "message": "English Test {{product.name | titleize}}",
         "link": "http://www.example.com/englishurl",
         "name": "English Headline {{product.price}}",
         "description": "English Description {{product.description}}",
         "customization_rules_spec": [
           {
             "customization_spec": {
               "language": "en_XX"
             }
           },
           {
             "customization_spec": {
               "language": "fr_XX"
             },
             "message": "French Test {{product.name | titleize}}",
             "link": "http://www.example.com/frenchurl",
             "name": "French Headline {{product.price}}",
             "description": "French Description {{product.description}}",
             "template_url_spec": {
               "web": {
                 "url": "http://www.example.com/frenchdeeplink"
               }
             }
           }
         ]
       }
     }' \
  -F 'product_set_id="<PRODUCT_SET_ID>"' \
  -F 'template_url_spec={
       "web": {
         "url": "http://www.example.com/englishdeeplink"
       }
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adcreatives
```

### Create a Collection Ad with Image Hero Media with Multiple Languages

```
curl -X POST \
  -F 'object_story_spec={
       "page_id": "<PAGE_ID>",
       "link_data": {
         "picture": "<IMAGE_URL>",
         "link": "<CANVAS_LINK>",
         "name": "English Creative title",
         "message": "English Creative message",
         "call_to_action": {
           "type": "LEARN_MORE"
         },
         "retailer_item_ids": [
           0,
           0,
           0,
           0
         ],
         "customization_rules_spec": [
           {
             "customization_spec": {
               "language": "en_XX"
             }
           },
           {
             "customization_spec": {
               "language": "fr_XX"
             },
             "picture": "<IMAGE_URL_FR>",
             "link": "<CANVAS_LINK_FR>",
             "name": "French Creative title",
             "message": "French Creative message"
           }
         ]
       }
     }' \
  -F 'product_set_id="<PRODUCT_SET_ID>"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adcreatives
```

### Create a Collection Ad with Video Hero Media with Multiple Languages

```
curl -X POST \
  -F 'object_story_spec={
       "page_id": "<PAGE_ID>",
       "video_data": {
         "video_id": "<VIDEO_ID>",
         "image_url": "<IMAGE_URL>",
         "title": "English Creative title",
         "message": "English Creative message",
         "call_to_action": {
           "type": "LEARN_MORE",
           "value": {
             "link": "<CANVAS_LINK>"
           }
         },
         "retailer_item_ids": [
           0,
           0,
           0,
           0
         ],
         "customization_rules_spec": [
           {
             "customization_spec": {
               "language": "en_XX"
             }
           },
           {
             "customization_spec": {
               "language": "fr_XX"
             },
             "video_id": "<VIDEO_ID_FR>",
             "picture": "<IMAGE_URL_FR>",
             "link": "<CANVAS_LINK_FR>",
             "name": "French Creative title",
             "message": "French Creative message"
           }
         ]
       }
     }' \
  -F 'product_set_id="<PRODUCT_SET_ID>"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adcreatives
```

### Create a Collection Ads with Dynamic Video Hero Media with Multiple Languages

```
curl -X POST \
  -F 'object_story_spec={
       "page_id": "<PAGE_ID>",
       "template_data": {
         "format_option": "collection_video",
         "link": "<CANVAS_LINK>",
         "name": "English Creative title",
         "message": "English Creative message",
         "call_to_action": {
           "type": "LEARN_MORE"
         },
         "retailer_item_ids": [
           0,
           0,
           0,
           0
         ],
         "customization_rules_spec": [
           {
             "customization_spec": {
               "language": "en_XX"
             }
           },
           {
             "customization_spec": {
               "language": "fr_XX"
             },
             "link": "<CANVAS_LINK_FR>",
             "name": "French Creative title",
             "message": "French Creative message"
           }
         ]
       }
     }' \
  -F 'product_set_id="<PRODUCT_SET_ID>"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adcreatives
```

## Learn More

* [Localized Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog/localized-catalog-setup)
* [Localized Catalog for Instagram Shopping](https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog-ig)
* [Create Advantage+ Catalog Ads for Multiple Languages and Countries, Ads Help Center⁠](https://www.facebook.com/business/help/2144286692311411?locale=en_US)
* [Build a Creative Template](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#create-template)
* [Catalog, Overview](https://developers.facebook.com/documentation/ads-commerce/catalog)
* [Supported Fields for Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#supported-fields)
* [Supported Feed Formats for Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#feed-format)
* [Advantage+ Catalog Ads - Create Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management)
