---
title: "Signals Gateway: Enhance Events with Advanced Matching Data"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway-pipeline/include-facebook-login-data
---

# Signals Gateway: Enhance Events with Advanced Matching Data

Updated: Feb 2, 2025

You can enhance events with advanced matching data using Signals Gateway. When you enable this feature, your Signals Gateway can set, update, and send a browser cookie with data source advanced matching data. This can help you enhance your events to achieve better user matching.

## How to Use This Feature

* Go to your Signals Gateway Admin UI page, which is hosted on your subdomain

**Note**: You can also launch your Signals Gateway instance in the Meta Events Manager Settings tab. Look for the Signals Gateway section and select **Launch**.

* Log in to your Signals Gateway using admin credentials.
* In the side navigation, hover over **Account settings** and select the **Advanced matching** menu item.
* Enable the toggle button for **Enhance events with advanced matching data** setting (By default, it will be set to'Off').

![Signals Gateway Advanced matching settings page with the 'Enhance events with advanced matching data' toggle set to On](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/473367466_8598541013585103_3667687273988610770_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=8rLifUNrgRQQ7kNvwEL1by8&_nc_oc=Adp6URHvT0wmaATdLsdFT9UE7IcDDcvRw17Bj75XbHSoDzBZHE2NVZog4JQIVkBvIkuAxqvi0N73bn64R3-1AgV1&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=1vun353gzv9Wc1eUl0n1Lg&_nc_ss=7b289&oh=00_AQDAduYySrzKzdJ1NlEsDzYRsOzF83mEkckyMyMFae-LBw&oe=6A607088)

## Troubleshooting

### Low EMQ for Conversion API Gateway data Pipeline or Conversion API destinations

For the Event Match Quality (EMQ) shown in the Meta's Events Manager, we recommend aiming for "Good" or "Great". These steps may help you improve EMQ for your Signals Gateway's Meta Destination.

* Enable Enhance events with advanced matching data in the Signals Gateway UI.
* For Signals Gateway's Conversion API Gateway data pipeline, you can enable [Automatic Advanced Matching⁠](https://www.facebook.com/business/help/1993001664341800?id=1205376682832142) in Events Manager. If the EMQ still appears to be not optimal, you can implement [Manual Advanced Matching](https://developers.facebook.com/docs/meta-pixel/advanced/advanced-matching).
* For Signals Gateway data pipeline, you can enable the "data enhancement" feature for your Signals Gateway pixels.
* Wait 1-2 days for the EMQ to be updated in Events Manager

## See Also

* [Automatic Advanced Matching⁠](https://www.facebook.com/business/help/1993001664341800?id=1205376682832142)
* [Manual Advanced Matching](https://developers.facebook.com/docs/meta-pixel/advanced/advanced-matching)
