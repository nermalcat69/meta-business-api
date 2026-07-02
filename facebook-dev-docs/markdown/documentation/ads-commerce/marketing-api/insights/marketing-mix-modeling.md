---
title: "Tracking and Conversion Specs"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling
---

# Tracking and Conversion Specs

Updated: May 21, 2026

`Tracking Specs` are used primarily for monitoring and reporting purposes. They define what user actions should be tracked after they view or click on an ad. These specs help advertisers understand how users interact with the ad content and whether it leads to offsite conversions, app installs, or other key actions. Tracking specs do not directly influence the optimization of ad delivery but are essential for gathering data on user engagement.

`Conversion specs` are used to define the conditions under which a conversion (a desired action by the user) is counted. These specs are crucial for attributing conversions to specific ads and for optimizing ad performance. Conversion specs are used in the optimization process of ad delivery, where the system predicts and improves conversion rates. `Conversion_specs` has been **read-only** since v2.4. The value is derived from `optimization_goal` from [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign).

## Set tracking specs

Use with any bid type and [creative](https://developers.facebook.com/docs/reference/ads-api/creative-specs) combination. To specify tracking specs, you need an additional field in an [ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup), named `tracking_specs`. The `tracking_specs` field takes arguments identical to [action spec](https://developers.facebook.com/docs/marketing-api/reference/conversion-action-query). To create an ad, see [ad creation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup).

## Default tracking specs

Certain objective, `bid_type`, and creative combinations have a set of default tracking specs. If you set any additional new tracking specs, the default tracking specs are still available and Meta does not overwrite them. For `APP_INSTALLS` or `OUTCOME_ENGAGEMENT` objectives, **Meta overwrites the default tracking specs**. To keep the defaults, add them to your custom specs.

You can use both string or array notation in the spec such as `'APPLICATION_ID'` or `['APPLICATION_ID']`.

* CPM refers to `billing_event=IMPRESSIONS`, `optimization_goal=IMPRESSIONS`
* CPC refers to `billing_event=CLICKS`, `optimization_goal=CLICKS`
* oCPM refers to `billing_event=IMPRESSIONS`, `optimization_goal` set to an action
* CPA refers to both `billing_event` and `optimization_goal` set to an action

| Objective | Creative, Bid type | Tracking Spec | Description |
| --- | --- | --- | --- |
| CANVAS\_APP\_  ENGAGEMENT | Canvas app engagement ads with `optimization_goal= APP_INSTALLS` | [{‘action.type’:  ‘app\_engagement’,  ‘application’:  ‘APPLICATION\_ID’}, {‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’}] | See app\_engagement and post\_engagement [meta specs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling#meta) |
| CANVAS\_APP\_  INSTALLS | Canvas app install ads with optimization **not** set to `optimization_goal= APP_INSTALLS` | [{‘action.type’:  ‘app\_engagement’,  ‘application’:  ‘APPLICATION\_ID’}, {‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’}] | See app\_engagement and post\_engagement [meta specs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling#meta) |
| CONVERSIONS | Page post link and photo ads with `promoted_object` set to a pixel ID and `optimization_goal= OFFSITE_CONVERSIONS` | {‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’},  {‘action.type’:’like’,  ‘page’:PAGE\_ID} | Post Engagement, Page Like specs. Number of link clicks on the specific page post if there is only one link, number of engagements on the post, and number of times users generate stories or engage with a page |
| CONVERSIONS | Page post link and photo ads with optimization **not** set to `optimization_goal= OFFSITE_CONVERSIONS` | {‘action.type’:  ‘offsite\_conversion’,  ‘fb\_pixel’:  ‘FACEBOOK\_PIXEL\_ID’}, {‘action.type’:{‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’},  {‘action.type’:’like’,  ‘page’:PAGE\_ID} | Conversions, Post Engagement, Page Like specs. Number of link clicks on the specific page post if there is only one link, number of engagements on the post, and number of times users generate stories or engage with a page |
| CONVERSIONS | Domain ads with `promoted_object` set to a pixel ID and `optimization_goal= OFFSITE_CONVERSIONS` | {‘action.type’:  ‘link\_click’,  ‘object’:’PAGE\_ID’}, {‘action.type’:’like’,  ‘page’:PAGE\_ID} | Page Likes, Link Clicks specs. Number of link clicks on the specific page post if there is only one link, number of engagements on the post, and number of times users generate stories or engage with a page. |
| CONVERSIONS | Domain ads with optimization **not** set to `optimization_goal= OFFSITE_CONVERSIONS` | {‘action.type’:  ‘offsite\_conversion’,  ‘fb\_pixel’:  ‘FACEBOOK\_PIXEL\_ID’}, {‘action.type’:  ‘link\_click’,  ‘object’:’PAGE\_ID’}, {‘action.type’:’like’,  ‘page’:PAGE\_ID} | Conversion, Page Likes, Link Clicks specs. Number of link clicks on the specific page post if there is only one link, number of engagements on the post, and number of times users generate stories or engage with a page. |
| EVENT\_RESPONSES | Event ads with optimization **not** set to `optimization_goal= EVENT_RESPONSES` | [{‘action.type’:’rsvp’ ,  ‘response’:’yes’, ‘event’:’EVENT\_ID’},  {‘action.type’:’rsvp’ ,  ‘response’:’maybe’, ‘event’:’EVENT\_ID’},  [{‘action.type’:’rsvp’ ,  ‘response’:’no’, ‘event’:’EVENT\_ID’}] | Number of RSVPs (yes, maybe, no) to an event. |
| EVENT\_RESPONSES | Event ads with `optimization_goal= EVENT_RESPONSES` | empty (conversion spec will cover the tracked actions) | Number of RSVPs (yes, maybe, no) to an event. |
| LINK\_CLICKS | Page post link and photo ads with any bid option | {‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’} | Post Engagement.  Number of times an offsite url link, link with particular url domain, offsite link on a page, offsite link on a post was clicked. |
| LINK\_CLICKS | Domain ads with `optimization_goal= LINK_CLICKS` | {‘action.type’:’like’,  ‘page’:PAGE\_ID}] | Page likes.  Number of times an offsite url link, link with particular url domain, offsite link on a page, offsite link on a post was clicked. |
| LINK\_CLICKS | Domain ads with optimization **not** set to `optimization_goal= LINK_CLICKS` | {‘action.type’:  ‘link\_click’,  ‘object’:’PAGE\_ID’}, {‘action.type’:’like’,  ‘page’:PAGE\_ID} | Website Click, Page Likes.  Number of times an offsite url link, link with particular url domain, offsite link on a page, offsite link on a post was clicked. |
| MOBILE\_APP\_  ENGAGEMENT | Mobile app engagement ads with any bid option | {‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’} **For App Engagement Ads you must specify a tracking spec explicitly using the Facebook App ID:**  [{‘action.type’: ‘mobile\_app\_install’, ‘application’: ‘APP\_ID’}, {‘action.type’:  ‘app\_custom\_event’,  ‘application’:APP\_ID}] | See post\_engagement [meta spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling#meta). Also, number of times an [app event](https://developers.facebook.com/docs/ios/app-events) occurs. |
| MOBILE\_APP\_  INSTALLS | Mobile app install ads with any bid option | {‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’} **For App Install Ads you must specify a tracking spec explicitly using the Facebook App ID:**  [{‘action.type’:  ‘app\_custom\_event’,  ‘application’:APP\_ID}, {‘action.type’: ‘mobile\_app\_install’, ‘application’: ‘APP\_ID’}] | See post\_engagement [meta spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling#meta). Also, number of times users install the app through a [mobile app install ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads) if there is an iOS/Android version and the number of times an [app event](https://developers.facebook.com/docs/ios/app-events) occurs. |
| NONE | Any ad type | See [default tracking  specs by ad type](https://developers.facebook.com/documentation/ads-commerce/marketing-api/tracking-specs#default_by_ad) |  |
| PAGE\_LIKES | Page Like ads or page post ads with any bid option | {‘action.type’:  ‘page\_engagement’, ‘page’:’PAGE\_ID’} | See Page Engagement [meta spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling#meta) |
| POST\_ENGAGEMENT | Page post ads with optimization **not** set to `optimization_goal= POST_ENGAGEMENT` | {‘action.type’:  ‘post\_engagement’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’} | See Page Post Engagement [meta spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling#meta) |
| POST\_ENGAGEMENT | Page post ads with `optimization_goal= POST_ENGAGEMENT` | empty | See Page Post Engagement [meta spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/marketing-mix-modeling#meta) |
| POST\_ENGAGEMENT (testing) | any | {‘action.type’:  ‘dwell’,  ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’} | A small percentage of this kind of ad has `dwell` tracking type, focusing on users spending at least a min time on the ads. |
| PRODUCT\_ CATALOG\_SALES | [Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) | {‘action.type’: ‘post\_engagement’, ‘page’: PAGE\_ID, ‘post’: POST\_ID} | Number of link clicks on the specific page post if there is only one link, number of engagements on the post, number of times users generate stories or engage with a page. You can specify a product set that is different from the product set in the promoted object but the default is the product set specified in the promoted object. |

## Meta specs

You can specify multiple types of actions on a single object using a single spec.

| Object | Conversion Spec | Description |
| --- | --- | --- |
| Application | {“action.type”:[“app\_engagement”], “application”:[“APPLICATION\_ID”]} | Number of times users generate stories `app_story` or engage with content via app\_use, app\_install, credit\_spent. |
| Page | {“action.type”:[“page\_engagement”], “page”:[“PAGE\_ID”]} | Number of times users perform any of the following actions in the context of the specified page: check-in, comment, follow, like, page post like, mention, post on page, share a post, answer a question. Plus the number of times users perform any of the following actions in the context of the specified page: click a link, view a photo, play a native FB video. |
| Page Post | {“action.type”:[“post\_engagement”], “post”:[“POST\_ID”], “page”:[“PAGE\_ID”]} | Number of times users perform any of the following actions in the context of the specified post: comment, follow question, like, share, answer question. Plus the number of times users perform any of the following actions: click a link, page like, view photo, play a video hosted on Facebook or an inline YouTube video play. For non-embedded videos use link\_click. |

## Custom tracking specs

To define your own tracking specs, use the action spec framework. See the [Action Specs, Reference](https://developers.facebook.com/docs/marketing-api/reference/conversion-action-query).

| Action (Object Types) | Description, Tracking spec details | Tracking or Conversion Spec |
| --- | --- | --- |
| app\_custom\_event (application) | Custom event on an application.  Number of custom events on a mobile app. | {‘action.type’:  ‘app\_custom\_event’,  ‘application’:APP\_ID} |
| app\_install (application) | Installing an app.  Number of installs  on canvas or mobile app | [{‘action.type’:’app\_install’,  ‘application’:APP\_ID},  {‘action.type’:  ‘mobile\_app\_install’,  ‘application’:APP\_ID}] |
| app\_use (application) | Number of times app was used. | {‘action.type’:’app\_use’,  ‘application’:APP\_ID} |
| checkin (place) | Check in a place.  Number of check-ins into the place or into any child places of this page. | {‘action.type’:’checkin’,  ‘page’: PAGE\_ID},  {‘action.type’:’checkin’,  ‘page.parent:PAGE\_ID} |
| comment (post) | Commenting on a post.  Number of comments on any or specific page post. | {‘action.type’:’comment’,  ‘post.wall’:PAGE\_ID},  {‘action.type’:’comment’,  ‘post’:POST\_ID,  ‘post.wall’:PAGE\_ID} |
| credit\_spend (application) | Instances of spending credit in an app. | ‘action.type’:’credit\_spent’,  ‘application’:APP\_ID} |
| follow (question) | Subscribing to an object.  Number of answers or follows to a question. | {‘action.type’:’vote’, ‘question’:QUESTION\_ID, ‘question.creator’:PAGE\_ID}, {‘action.type’:’follow’, ‘question’:QUESTION\_ID, ‘question.creator’:PAGE\_ID} |
| leadgen\_quality\_conversion (pixel) | Down funnel lead conversion (CRM) events. | {‘action.type’: ‘leadgen\_quality\_conversion’, ‘fb\_pixel’: ‘FACEBOOK\_PIXEL\_ID’}, {‘action.type’: ‘leadgen\_quality\_conversion’, ‘dataset’: ‘OFFLINE\_EVENT\_SET\_ID’} |
| like  (page, post) | Liking an object.  Number of likes on a page or a post. | {‘action.type’:’like’,  ‘page’:PAGE\_ID}  , {‘action.type’:’like’,  ‘post.wall’:PAGE\_ID}  , {‘action.type’:’like’,  ‘post’:POST\_ID,  ‘post.wall’:PAGE\_ID} |
| link\_click (page,post, url, url domain) | Clicking on a link.  Number of times an offsite url link, link with particular url domain, offsite link on a page, offsite link on a post was clicked. | {‘action.type’:[‘link\_click’],  ‘object’:[‘PAGE\_ID’]},  {‘action.type’:[‘link\_click’],  ‘object.domain’:  [‘URL\_DOMAIN’]},  {‘action.type’:[‘link\_click’],  ‘post.wall’:[‘PAGE\_ID’]},  {‘action.type’:[‘link\_click’],  ‘post’:[‘POST\_ID’],  ‘post.wall’:[‘PAGE\_ID’]} |
| mention (page) | Mentioning of a Page.  Number of mentions of a page. | {‘action.type’:’mention’,  ‘object’:PAGE\_ID’} |
| offsite\_conversion (pixel) | Number of offsite conversions, and accumulated revenue. | {‘action.type’:  ‘offsite\_conversion’,  ‘fb\_pixel’:  ‘FACEBOOK\_PIXEL\_ID’} |
| photo\_view (page) | Viewing a photo.  Number of photo views,  video\_plays, or link\_clicks of the photos/videos/link-shares of any or specific post on a page. | {‘action.type’:’photo\_view’, ‘post.wall’:PAGE\_ID}  {‘action.type’:’photo\_view’, ‘post’:POST\_ID,  ‘post.wall’:PAGE\_ID} |
| post (post) | Sharing a story.  Number of times users post on a page. | {‘action.type’:’post’,  ‘post.wall’:PAGE\_ID} |
| receive\_offer (offer) | Claiming an Offer.  Number of people who claimed a specific offer. | {‘action.type’:’receive\_offer’,  ‘offer’:OFFER\_ID} |
| rsvp (event) | Rsvping into an Event.  Number of RSVPs (yes and maybe) to an event. Valid values are `yes`, `maybe`, and `no`. | {‘action.type’:’rsvp’,  ‘event’: EVENT\_ID},  {‘action.type’:’rsvp’,  ‘response’:’yes’,  ‘event’: EVENT\_ID},  {‘action.type’:’rsvp’,  ‘response’:’no’,  ‘event’: EVENT\_ID},  {‘action.type’:’rsvp’,  ‘response’:’maybe’,  ‘event’: EVENT\_ID} |
| tab\_view (page) | Viewing a page tab  Number of views of a specific page tab. If you want all tab views just specify the page. | {‘action.type’:’tab\_view’,  ‘page.tab.name’:  ‘PAGE\_TAB\_NAME’, ‘page’:PAGE\_ID},  {‘action.type’:’tab\_view’,  ‘page’:PAGE\_ID} |
| video\_play (post) | Watching a video.  Number of video watches for any or a specific video post on a page. | {‘action.type’:’video\_play’, ‘post.wall’:PAGE\_ID},{‘action.type’:’video\_play’, ‘post’:POST\_ID,  ‘post.wall’:PAGE\_ID} |

## Examples

### Pixel tracking

Track the performance of different pixels in an ad by specifying the tracking pixel in the ad’s [`tracking_specs`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/tracking-specs) field. For example:

```
tracking_specs="[
  {'action.type':'offsite_conversion','fb_pixel':1},
  {'action.type':'offsite_conversion','fb_pixel':2},
  {'action.type':'offsite_conversion','fb_pixel':3}
]"
```

This tracks the performance of pixels “1”, “2”, and “3”. If you want to optimize for pixel “1” only, define the `promoted_object` of the parent ad set. This is useful when you want to optimize for `CHECKOUT`, but also want to track the number of `REGISTRATION` and `ADD_TO_CART`.

*Pixels optimized by specifying the pixel ID in the `promoted_object` are automatically tracked, so you do not need to specify the same pixel in `tracking_specs`.*

## Using conversion specs

`conversion_specs` is a field for [ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup). It follows the format `{'action.type':'{ACTION}', ... }` where each action applies to an object. Here are examples of conversion specs for various ad types:

| Ad type | Conversion Spec |
| --- | --- |
| Domain ad with social context | {‘action.type’:’link\_click’, ‘object’:’PAGE\_ID’} |
| Page like ad | {‘action.type’:’like’, ‘page’:PAGE\_ID} |
| Page post link ad | {‘action.type’:[‘link\_click’], ‘post’: [POST\_ID], ‘post.wall’:[PAGE\_ID]} |
| All other page post ads | {‘action.type’:’post\_engagement’, ‘post’:’POST\_ID’, ‘page’:’PAGE\_ID’} |
| Event ad | {‘action.type’:’rsvp’ , ‘response’:’yes’, ‘event’:’EVENT\_ID’} |
| Offer ad | {‘action.type’:’receive\_offer’, ‘offer’:OFFER\_ID, ‘offer.creator’:PAGE\_ID} |
| Mobile app install ad | N/A - cannot create such an ad with NONE objective. |
| Mobile app engagement ads | N/A - only CPC and CPM bid types are supported |
| Canvas app install ad | N/A - cannot create such an ad with NONE objective |
| Canvas app engagement ad | N/A - cannot create such an ad with NONE objective |

Some conversion specs contain multiple actions that apply to a single object. These are called *meta specs*. Below are examples:

| Object | Conversion Spec | Description |
| --- | --- | --- |
| Page | {“action.type”:[“page\_engagement”], “page”:[“PAGE\_ID”]} | Times someone takes the following actions in a specific page: check-in, comment, follow, like, page post like, mention, post on page, share a post, answer a question. Includes the number of times someone performs these actions in a specific page: view a photo, play a native Facebook video. |
| Page Post | {“action.type”:[“post\_engagement”], “post”:[“POST\_ID”], “page”:[“PAGE\_ID”]} | Number of times someone takes one of these actions in a specific post: comment, follow question, like, share, claim offer, answer question. Includes the number of times someone performs these actions: click a link, page like, view photo, play a video hosted on Facebook or an inline YouTube video play. For non-embedded videos use `link_click`. |
| Application | {“action.type”:[“app\_engagement”], “application”:[“APPLICATION\_ID”]} | Number of times someone generates `app_story` or engages with content as `app_use`, `app_install`, or `credit_spent`. |
