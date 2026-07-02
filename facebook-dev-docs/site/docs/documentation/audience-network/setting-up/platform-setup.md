---
title: "Ad Formats for Audience Network"
source_url: https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup
---

# Ad Formats for Audience Network

Updated: Jun 30, 2026

## Banner and medium rectangle ads

Banner ads are the most common type of ad unit and can be placed throughout your app. A banner is a small bar ad that appears at the bottom or top of your content. Banner ads usually measure 320 x 50, Medium Rectangle ads usually measure 300 x 250.

Learn how to [change placements in Monetization Manager⁠](https://business.facebook.com/pub/property/adspace/placement/settings) from Banner to the Medium Rectangle format if these were previously configured as Banner for bidding.

* Avoid placing banner / medium rectangle ads over text, image, and other clickable portions of your app to prevent accidental clicks.
* Only include one ad per page or show one ad at a time if scrolling.
* Avoid placing banner / medium rectangle ads in an area that interrupts the natural flow of the app to prevent accidental clicks.
* Do not edit or modify banner / medium rectangle ads in any way without Facebook’s written approval.

![Shazam](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/697777772_1504775911381058_1505089508867593394_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZrU5siTaQqYQ7kNvwEwSGvS&_nc_oc=AdqT0qGokuIyFIj7slNKOmnsqDsXnKFRAGIWKFp1xRSBQx-Bp1iRcFFB-Y94bu1Vf5oWxINNGFVteWiCTsrir9wu&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=MT5pdwXiJ1v3ATyOUhUU3A&_nc_ss=7b289&oh=00_AQAY6b4n-UW1saQ6xOVmDxzMU-dwM391pE3vywQSy83dtg&oe=6A608A0B)

## Interstitial ads

Interstitial ads are full screen ads that can be effective in catching a user’s attention. Many publishers recommend interstitial ads for pauses in game play or times when there is a natural break in your app’s flow.

* Interstitial ads must not be implemented in such a way that may surprise users or interrupt the natural flow of the app. They should be placed in between natural breaks in the experience of your app. For example, interstitial ads should be shown between levels or stages for gaming apps and are not permitted on placements such as app load, exit pages or in the middle of game play.
* The call-to-action must be shown in a way that when a user clicks on the ad it is intentional.
* Do not edit or modify interstitial ads in any way without Facebook’s written approval.

![Shazam](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/696286765_1504775938047722_1160989051099743135_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=cIQrzVksGHkQ7kNvwGV1rSW&_nc_oc=AdrCTODXTbOAqhGoMmBKyEu8e0s5v76yBgTFk2LDLUOTCKT4UAdBedB9MtrGHSJuARCW-QMLFZU3uKzG9u7zYFjZ&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=MT5pdwXiJ1v3ATyOUhUU3A&_nc_ss=7b289&oh=00_AQCAwXIBNnjbvg_SBPj3ZnMZ9ew-bkzPIeDlxNwUufwA6g&oe=6A60902E)

## Native ads

Native ads give you the control to design the perfect ad units for your app. With our Native Ad API, you can determine the look and feel, size and location of your ads. Because you decide how the ads are formatted, ads can fit seamlessly in your application.

* Clearly mark your native ad as “Sponsored”, “Promoted” or “Ad” to distinguish it from the rest of your content AND include the expandable “AdOptionsView” icon on your native ad by configuring the AdOptionsView control as expandable (see [FBAdOptionsVideo](https://developers.facebook.com/docs/audience-network/reference/ios/classes/fbadoptionsview.html) for iOS or [AdOptionsVideo](https://developers.facebook.com/docs/audience-network/reference/android/com/facebook/ads/adoptionsview.html) for Android)
* Your native ad should include the advertisers’ creative assets in a way where users are encouraged to engage with the ad unit.
* You can scale the campaign image, but do not obscure, cover, distort, or otherwise alter the campaign image.
* Campaign images should be optimized for images with ratios of 1.91:1 to 1:1. Allow for 1.91:1 ratio images if this ratio fits your interface.
* Retain the square image ratio for the app icon or profile image; don’t alter the image.
* Provide enough space to display at least 20 characters of the Advertiser Name. Make sure if the title is longer than 20 characters, that you replace the additional text with an ellipsis.
* Your native ad is required to include the title and Call-to-Action (CTA) provided by the advertiser. It can also include advertisers’ promotional text.
* When creating their ads, advertisers may specify certain CTA strings, such as “Install Now.”
* The CTA text string must be displayed in its entirety on your native ad.
* Do not shorten or alter the CTA text.
* The maximum character length for CTA is 25 characters.
* Clearly separate the CTA text and metadata text from the advertiser’s text.
* If the advertiser provided metadata, such as the app rating and availability or context string, include this in your native ad.

![Phone wireframe showing a native ad highlighted in green blending into an app content grid](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/697253278_1504775941381055_6812338767552805746_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1JGF2ZuXmHMQ7kNvwGnCDAA&_nc_oc=AdqR9cOh757kKV6Kd1H5KMDxJl9Si5acb7gny3CVt2VIkhqp4fMVrDlZSYo5sG2WwMYjIKAkFYE_bNT4W1MgngcF&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=MT5pdwXiJ1v3ATyOUhUU3A&_nc_ss=7b289&oh=00_AQAZbGVl32fDhtXdEleGe4LzlO4GLTi57U0iULr3GeknMg&oe=6A60913E)

## Native banner ads

Native banner ads are compact native ad units that you control the look and feel of, similar to native ads, but in a smaller, banner-like form factor. They blend into your app’s layout while providing a streamlined presentation.

* Clearly mark native banner ads as “Sponsored”, “Promoted”, or “Ad” to distinguish them from regular content.
* Include the required AdChoices icon using the expandable AdOptionsView control.
* Do not edit or modify the advertiser’s creative assets without Facebook’s written approval.

![Native banner ad](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/734384539_1547365880455394_3848735952869774955_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=EaTQSwVjXPIQ7kNvwHeWAGT&_nc_oc=Adp-v8F0OkLP7d0fMy8RR3fCWgM-ocKFZtBWLunWQ4-yENd3B0F2LepsdCsRqn9erbsmBH4LNhi7MGTklFQYiPms&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=MT5pdwXiJ1v3ATyOUhUU3A&_nc_ss=7b289&oh=00_AQDu7l8KDgvA4vcYFdKH8Rm-K3ARe9yDyXiSiHGQp-hAFQ&oe=6A6079D4)

## Rewarded video ads

Rewarded video ads are full-screen video ads that offer users an in-app reward in exchange for watching the video. They are opt-in, so users choose to engage with the ad to receive the reward.

* Place rewarded video ads at natural breaks in your app, such as between game levels or at the end of a session.
* Clearly communicate the reward to the user before they opt in to watch the video.
* Do not interrupt gameplay or force users to watch rewarded video ads.
* Do not edit or modify rewarded video ads in any way without Facebook’s written approval.

![Rewarded video end card](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/735377314_1547365850455397_1911064426220449661_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lu78h7PNwiIQ7kNvwF15BEV&_nc_oc=Adqdv4TfnMWAA12jWZ8a2SlLuJ_NALg_PHpom_4_21ummUgYbxUVp4vWzh6dtw5eeC9INXuii0thrgKoCfLcYS22&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=MT5pdwXiJ1v3ATyOUhUU3A&_nc_ss=7b289&oh=00_AQDuB2Oiah6U-pDUdS7maToeN5Vol62vxVQfj-5ost-kVw&oe=6A608E6E)

## Rewarded interstitial ads

Rewarded interstitial ads are full-screen ads that offer users an in-app reward for engaging with the ad. Unlike rewarded video, users receive the reward automatically upon completion of the ad, without having to opt in.

* Place rewarded interstitial ads at natural transition points in your app, such as between game levels.
* Do not use rewarded interstitial ads in a way that disrupts the user experience or appears at unexpected moments.
* Do not edit or modify rewarded interstitial ads in any way without Facebook’s written approval.

![Rewarded interstitial playable ad](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/734275337_1547365887122060_4698150610634543084_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=GhWXKmRt5DMQ7kNvwG7C9Bm&_nc_oc=AdrFLrUXynouO58aQQqKQ8xKVa79YHkhORjwwWqnL4M4Lqctcn_w5fhGo1MDyUCGqMm-JS2dvl5TgQaedV1qhae1&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=MT5pdwXiJ1v3ATyOUhUU3A&_nc_ss=7b289&oh=00_AQB361Cujxl9PrUh4bSNIH-ay_5RRy9paYe7pujdrwDHaw&oe=6A609058)

## Next steps

Learn how to [set up your ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup).
