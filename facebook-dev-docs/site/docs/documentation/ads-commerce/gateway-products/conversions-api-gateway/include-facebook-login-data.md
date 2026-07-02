---
title: "Conversions API Gateway: Enhance Events With Additional Available User Data"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway/include-facebook-login-data
---

# Conversions API Gateway: Enhance Events With Additional Available User Data

Updated: May 13, 2025

Enabling this feature enhances events on the Conversions API Gateway using additional available user data from a Meta Pixel installed on your website. When you enable this feature, your Conversions API Gateway instance can set, update, and send a browser cookie with more complete user data from your Meta Pixel, to help you better match your events to Meta users.

## How to Use the Feature

* Log in to your Conversions API Gateway using admin permissions, hosted on your subdomain.

**Note**: You can also launch your Conversions API Gateway instance in the Meta Events Manager Setting Tab. Look for the Conversions API Gateway section and select **Launch**.

* Log in to your Conversions API Gateway Admin UI.
* In the Overview Page, go to the Enhance events card.
* Enable or disable the Enhance events with advanced matching data feature using the toggle button (it will be ‘off’ by default).

![Conversions API Gateway Overview page Enhance events card with the 'Enhance events with additional available user data' toggle set to off](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/496440653_3964934547109828_9074246627742296667_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9papCfE-TPwQ7kNvwHs67CI&_nc_oc=AdqnuP2XqWLt1fh-QBisK3YmSC8QiCISELvg_KYgHseV0UXwmqk-txolzJAOySkRXJ-aG20BDGUFnFV0Ps-3F777&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=xbHFmCf8BD0wt-ENt7vd4A&_nc_ss=7b289&oh=00_AQA_AebIeB4HCxhgXt09lpDPhiFIzyU6pTZ3qsRwChZyvg&oe=6A6070A9)

### Possible Additional User Data

In addition to user data that you provide manually, the following information will also be collected to enhance events, if available: email, name, phone number, city, state, gender, zip\_code.

## Troubleshooting

### Issue 1: Event volumes in the Gateway UI do not correspond to the numbers in another platform, for example, Ads Manager or advertiser’s database.

* [Check the volumes in the Gateway UI](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway/monitoring) to ensure the published events are the same as the received. Also check that the event volumes are aligned with the Events Manager for the same type of events.
* The events shown in the Conversions API Gateway are both organic and from ads. Hence when making comparisons between Gateway UI/Events Manager vs. Ads Manager, it would be good to take into consideration how the events are made, that is organically or via ads.
* The advertiser might have multiple campaigns and ad accounts and may need to aggregate everything to match the Gateway events count.
* When making the comparisons, ensure that the same timeframe is applied across all the platforms.
