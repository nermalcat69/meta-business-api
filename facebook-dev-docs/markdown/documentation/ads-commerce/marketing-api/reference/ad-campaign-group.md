---
title: "Ad Creative, Preview"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group
---

# Ad Creative, Preview

Updated: Mar 19, 2026

Preview your ad's creative.

### Breaking Change: Event Ads, Link Ads not Associated with Valid Page

We recently announced an initiative to make the Facebook Advertising platform more transparent to Facebook users. Read more about this in the [Facebook press release⁠](https://newsroom.fb.com/news/2017/10/improving-enforcement-and-transparency/)

**To support this initiative, we are deprecating deprecating Event Ads and Link Ads that are not connected to a valid page from Marketing API.**

This breaking change impacts all supported API versions, including the upcoming Marketing API version v2.11, and v2.10 and v2.9 which are available but will be deprecated. This breaking change will take effect the second week of November 2017.

**You will no longer be able to create or edit Event Ads and Link Ads that are not connected to a valid page. Requests will do so return the error:**`ErrorCode::ADPRO2__AD_MUST_HAVE_PAGE (1885833)`

The following ad options used together will fail:

* Event Ads
  * Objective: `EVENT_RESPONSES`
  * Creative fields: `body`, `object_id`
* Link Ads
  * Objective: `LINK_CLICKS`
  * Creative fields: `title`, `body`, `object_url` containing `image_file` or `image_hash`

You can still create Event Ads and Link Ads if you provide a valid `actor_id` in the ad creative's `object_story_id` or `object_story_spec` fields

These options used together are valid:

* Event Ads
  * Objective: `EVENT_RESPONSES`
  * Creative fields: `object_story_id` or `object_story_spec`
* Link Ads
  * Objective: `LINK_CLICKS`
  * Creative fields: `object_story_id` or `object_story_spec`

The nodes, edges and requests impacted are:

* [`ad_ACCOUNT_ID/ads`, Create](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)
* [`ad_ACCOUNT_ID/adcreatives`, Create](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative)
* [`/ad_ID`, Update](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)

Any pre-existing Event or Link Ads continue to run but you cannnot modify these ad's creatives or create new ads with the invalid options once the change goes in effect.

## Reading

The HTML Snippets for previewing this creative

When using a Page Post whose link points to an app on the Google Play Store e.g. (https://play.google.com/store/apps/details?id=com.my.app) or an app on the Apple App Store eg (https://itunes.apple.com/en/app/myapp/id1234567890) Facebook will override/import the following fields:

* the `name` parameter of the Page Post will be overwritten with the name of the app from the Play Store/App Store.
* the thumbnail icon of the app associated with the Page Post will be imported from the Play Store/App Store.

Only certain combinations of creatives and `ad_format` are supported:

* Link ad not connected to a page: RIGHT\_COLUMN\_STANDARD
* Page like ad: RIGHT\_COLUMN\_STANDARD, DESKTOP\_FEED\_STANDARD, MOBILE\_FEED\_STANDARD
* Event ad: RIGHT\_COLUMN\_STANDARD
* Page like ad: RIGHT\_COLUMN\_STANDARD
* Page post ad: RIGHT\_COLUMN\_STANDARD, DESKTOP\_FEED\_STANDARD, MOBILE\_FEED\_STANDARD, INSTAGRAM\_STANDARD, INSTAGRAM\_STORY
* Desktop app ad: DESKTOP\_FEED\_STANDARD
* Mobile app install: MOBILE\_FEED\_STANDARD, INSTAGRAM\_STANDARD, INSTAGRAM\_STORY, MOBILE\_BANNER, MOBILE\_INTERSTITIAL

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
GET /v25.0/<CREATIVE_ID>/previews?ad_format=DESKTOP_FEED_STANDARD&product_item_ids=%5B%22%3CPRODUCT_ITEM_ID%3E%22%5D HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CCREATIVE_ID%3E%2Fpreviews%3Fad_format%3DDESKTOP_FEED_STANDARD%26product_item_ids%3D%255B%2522%253CPRODUCT_ITEM_ID%253E%2522%255D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `ad_format` *enum{AUDIENCE\_NETWORK\_INSTREAM\_VIDEO, AUDIENCE\_NETWORK\_INSTREAM\_VIDEO\_MOBILE, AUDIENCE\_NETWORK\_OUTSTREAM\_VIDEO, AUDIENCE\_NETWORK\_REWARDED\_VIDEO, BIZ\_DISCO\_FEED\_MOBILE, DESKTOP\_FEED\_STANDARD, FACEBOOK\_IFU\_REELS\_MOBILE, FACEBOOK\_PROFILE\_FEED\_DESKTOP, FACEBOOK\_PROFILE\_FEED\_MOBILE, FACEBOOK\_PROFILE\_REELS\_MOBILE, FACEBOOK\_REELS\_BANNER, FACEBOOK\_REELS\_BANNER\_DESKTOP, FACEBOOK\_REELS\_BANNER\_FEED\_ANDROID, FACEBOOK\_REELS\_BANNER\_FEED\_ANDROID\_LARGE, FACEBOOK\_REELS\_BANNER\_FULLSCREEN\_IOS, FACEBOOK\_REELS\_BANNER\_FULLSCREEN\_MOBILE, FACEBOOK\_REELS\_MOBILE, FACEBOOK\_REELS\_POSTLOOP, FACEBOOK\_REELS\_POSTLOOP\_FEED, FACEBOOK\_REELS\_SIMILAR\_PRODUCTS\_MOBILE, FACEBOOK\_REELS\_STICKER, FACEBOOK\_STORY\_MOBILE, FACEBOOK\_STORY\_STICKER\_MOBILE, INSTAGRAM\_EXPLORE\_CONTEXTUAL, INSTAGRAM\_EXPLORE\_GRID\_HOME, INSTAGRAM\_EXPLORE\_IMMERSIVE, INSTAGRAM\_FEED\_WEB, INSTAGRAM\_FEED\_WEB\_M\_SITE, INSTAGRAM\_LEAD\_GEN\_MULTI\_SUBMIT\_ADS, INSTAGRAM\_PROFILE\_FEED, INSTAGRAM\_PROFILE\_REELS, INSTAGRAM\_REELS, INSTAGRAM\_REELS\_OVERLAY, INSTAGRAM\_REELS\_WEB, INSTAGRAM\_REELS\_WEB\_M\_SITE, INSTAGRAM\_SEARCH\_CHAIN, INSTAGRAM\_SEARCH\_GRID, INSTAGRAM\_STANDARD, INSTAGRAM\_STORY, INSTAGRAM\_STORY\_EFFECT\_TRAY, INSTAGRAM\_STORY\_WEB, INSTAGRAM\_STORY\_WEB\_M\_SITE, INSTANT\_ARTICLE\_RECIRCULATION\_AD, INSTANT\_ARTICLE\_STANDARD, INSTREAM\_BANNER\_DESKTOP, INSTREAM\_BANNER\_FEED\_IOS, INSTREAM\_BANNER\_FULLSCREEN\_IOS, INSTREAM\_BANNER\_FULLSCREEN\_MOBILE, INSTREAM\_BANNER\_IMMERSIVE\_MOBILE, INSTREAM\_BANNER\_MOBILE, INSTREAM\_VIDEO\_DESKTOP, INSTREAM\_VIDEO\_FULLSCREEN\_IOS, INSTREAM\_VIDEO\_FULLSCREEN\_MOBILE, INSTREAM\_VIDEO\_IMAGE, INSTREAM\_VIDEO\_IMMERSIVE\_MOBILE, INSTREAM\_VIDEO\_MOBILE, JOB\_BROWSER\_DESKTOP, JOB\_BROWSER\_MOBILE, MARKETPLACE\_MOBILE, MESSENGER\_MOBILE\_INBOX\_MEDIA, MESSENGER\_MOBILE\_STORY\_MEDIA, MOBILE\_BANNER, MOBILE\_FEED\_BASIC, MOBILE\_FEED\_STANDARD, MOBILE\_FULLWIDTH, MOBILE\_INTERSTITIAL, MOBILE\_MEDIUM\_RECTANGLE, MOBILE\_NATIVE, RIGHT\_COLUMN\_STANDARD, SUGGESTED\_VIDEO\_DESKTOP, SUGGESTED\_VIDEO\_FULLSCREEN\_MOBILE, SUGGESTED\_VIDEO\_IMMERSIVE\_MOBILE, SUGGESTED\_VIDEO\_MOBILE, WATCH\_FEED\_HOME, WATCH\_FEED\_MOBILE, WHATSAPP\_STATUS\_MEDIA}* | Use this to select what placement on Facebook the ad preview should be for. The API returns an iframe, which is only valid for 24 hours.  required |
| `creative_feature` *enum{ig\_video\_native\_subtitle, image\_animation, product\_browsing, product\_metadata\_automation, profile\_card, standard\_enhancements\_catalog, text\_overlay\_translation}* | Creative feature to see previews for |
| `dynamic_asset_label` *string* | Provide a label for rendering specific variation of an asset customization ad |
| `dynamic_creative_spec` *Object* | Dynamic creative spec for dynamic ads.  supports emoji |
| `dynamic_customization` *Object* | For dynamic ads in multiple languages, specify the customization to be applied to the ad |
| `end_date` *datetime* | Provide an end date for trip.\* parameters in the creative |
| `height` *int64* | Custom height of the resulting iframe, recommended at least 280 x 280 for the large right hand size height. Note: the parameter affects only the size of the iframe containing the preview object. It has no affect on the actual size of the previewed ad. |
| `place_page_id` *Page ID* | Place page ID to use when rendering a dynamic local ad preview |
| `post` *Object* | Specs for a page post. This field is used when the creative field contains only a Page id as `object_id` in it. Not supported for `ad_format = RIGHT_COLUMN_STANDARD`  ---   `link` *URL* Destination URL of the ad  required  `message` *UTF-8 string* Post message  supports emoji  `picture` *URL* Image URL  `name` *UTF-8 encoded string* Post name  `caption` *UTF-8 encoded string* Post caption  `description` *UTF-8 encoded string* Post description  `call_to_action` *Object* Call to action  supports emoji  ---   `type` *enum{BOOK\_TRAVEL, CONTACT\_US, DONATE, DONATE\_NOW, DOWNLOAD, GET\_DIRECTIONS, GO\_LIVE, INTERESTED, LEARN\_MORE, SEE\_DETAILS, LIKE\_PAGE, MESSAGE\_PAGE, RAISE\_MONEY, SAVE, SEND\_TIP, SHOP\_NOW, SIGN\_UP, VIEW\_INSTAGRAM\_PROFILE, INSTAGRAM\_MESSAGE, LOYALTY\_LEARN\_MORE, PURCHASE\_GIFT\_CARDS, PAY\_TO\_ACCESS, SEE\_MORE, TRY\_IN\_CAMERA, WHATSAPP\_LINK, GET\_IN\_TOUCH, TRY\_NOW, ASK\_A\_QUESTION, START\_A\_CHAT, CHAT\_NOW, ASK\_US, CHAT\_WITH\_US, BOOK\_NOW, CHECK\_AVAILABILITY, ORDER\_NOW, WHATSAPP\_MESSAGE, GET\_MOBILE\_APP, INSTALL\_MOBILE\_APP, USE\_MOBILE\_APP, INSTALL\_APP, USE\_APP, PLAY\_GAME, TRY\_DEMO, WATCH\_VIDEO, WATCH\_MORE, OPEN\_LINK, NO\_BUTTON, LISTEN\_MUSIC, MOBILE\_DOWNLOAD, GET\_OFFER, GET\_OFFER\_VIEW, BUY\_NOW, BUY\_TICKETS, UPDATE\_APP, BET\_NOW, ADD\_TO\_CART, SELL\_NOW, GET\_SHOWTIMES, LISTEN\_NOW, GET\_EVENT\_TICKETS, REMIND\_ME, SEARCH\_MORE, PRE\_REGISTER, SWIPE\_UP\_PRODUCT, SWIPE\_UP\_SHOP, PLAY\_GAME\_ON\_FACEBOOK, VISIT\_WORLD, OPEN\_INSTANT\_APP, JOIN\_GROUP, GET\_PROMOTIONS, SEND\_UPDATES, INQUIRE\_NOW, VISIT\_PROFILE, CHAT\_ON\_WHATSAPP, EXPLORE\_MORE, CONFIRM, JOIN\_CHANNEL, MAKE\_AN\_APPOINTMENT, ASK\_ABOUT\_SERVICES, BOOK\_A\_CONSULTATION, GET\_A\_QUOTE, BUY\_VIA\_MESSAGE, ASK\_FOR\_MORE\_INFO, VIEW\_PRODUCT, VIEW\_CHANNEL, WATCH\_LIVE\_VIDEO, JOIN\_LIVE\_VIDEO, IMAGINE, CALL, MISSED\_CALL, CALL\_NOW, CALL\_ME, APPLY\_NOW, BUY, GET\_QUOTE, SUBSCRIBE, RECORD\_NOW, VOTE\_NOW, GIVE\_FREE\_RIDES, REGISTER\_NOW, OPEN\_MESSENGER\_EXT, EVENT\_RSVP, CIVIC\_ACTION, SEND\_INVITES, REFER\_FRIENDS, REQUEST\_TIME, SEE\_MENU, SEARCH, TRY\_IT, TRY\_ON, LINK\_CARD, DIAL\_CODE, FIND\_YOUR\_GROUPS, START\_ORDER}* The type of the action. Not all types can be used for all ads. Check [Ads Product Guide⁠](https://www.facebook.com/business/ads-guide) to see which type can be used for based on the `objective` of your campaign.  required  `value` *Object* **Default value:** `Vec` JSON containing the call to action data.  supports emoji  ---   `android_url` *string*  `ios_url` *string*  `link` *URL*  `app_link` *string*  `page` *numeric string or integer*  `link_format` *enum {VIDEO\_LEAD, VIDEO\_LPP, VIDEO\_NEKO, VIDEO\_NON\_LINK, VIDEO\_SHOP, WHATSAPP\_CATALOG\_ATTACHMENT}*  `application` *numeric string or integer*  `link_title` *string* supports emoji  `link_description` *string* supports emoji  `link_caption` *string*  `product_link` *string*  `get_movie_showtimes` *boolean*  `sponsorship` *Object* ---   `link` *URL*  `image` *URL*  Show child parameters  `video_annotation` *Object* ---   `annotations` *list<Object>* ---   `start_time_in_sec` *int64*  `end_time_in_sec` *int64*  `link` *URL*  `link_title` *string*  `link_description` *string*  `link_caption` *string*  `image_url` *URL*  Show child parameters  `header_color` *string*  `logo_url` *URL*  `post_click_cta_title` *string*  `post_click_description_title` *string*  Show child parameters  `offer_id` *numeric string or integer*  `offer_view_id` *numeric string or integer*  `advanced_data` *Object* ---   `offer_id` *numeric string or integer*  Show child parameters  `lead_gen_form_id` *numeric string or integer*  `referral_id` *numeric string or integer*  `search_dialog_id` *numeric string or integer*  `fundraiser_campaign_id` *numeric string or integer*  `event_id` *numeric string or integer*  `event_tour_id` *numeric string or integer*  `app_destination` *enum {MESSENGER, MESSENGER\_EXTENSIONS, MESSENGER\_GAMES, LINK\_CARD, MARKETPLACE, WHATSAPP, INSTAGRAM\_DIRECT, INSTAGRAM\_LIVE\_VIDEO, FACEBOOK\_LIVE\_VIDEO}*  `app_destination_page_id` *numeric string or integer*  `is_canvas_video_transition_enabled` *boolean*  `whatsapp_number` *string*  `preinput_text` *string*  `customized_message_page_cta_text` *string*  `external_offer_provider_id` *numeric string or integer*  `origins` *enum {COMPOSER, CAMERA}*  `object_store_urls` *array<string>*  `facebook_login_spec` *Object* ---   `facebook_login_app_id` *numeric string or integer*  `offer_type` *enum {NO\_OFFER, PERCENTAGE\_BASED, AMOUNT\_BASED}*  `offer_pct_call_to_action` *enum {TEN}*  `offer_amt_call_to_action` *enum {TEN}*  Show child parameters  `product_id` *numeric string or integer*  `group_id` *numeric string or integer*  `channel_id` *string*  `land_on_whatsapp_catalog` *enum{1, 2}*  `land_on_whatsapp_profile` *string*  Show child parameters  Show child parameters  `photo_replacement_preview_fbid`  Show child parameters |
| `product_item_ids` *list<string>* | A list of Product Item IDs to use when rendering a dynamic ad preview. |
| `start_date` *datetime* | Provide a start date for trip.\* parameters in the creative |
| `width` *int64* | Custom width of the resulting iframe, recommended at least 280 x 280 for the large right hand size widths. Note: the parameter affects only the size of the iframe containing the preview object. It has no affect on the actual size of the previewed ad. |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [AdPreview](https://developers.facebook.com/docs/marketing-api/reference/ad-preview) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
