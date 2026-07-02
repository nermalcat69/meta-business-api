---
title: "Advantage Detailed Targeting"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-expansion/advantage-lookalike
---

# Advantage Detailed Targeting

Updated: Jun 30, 2026

For more information about Advantage detailed targeting, see [Help Center: About Advantage detailed targeting⁠](https://www.facebook.com/business/help/128066880933676).

**Note:** Advantage detailed targeting is off by default for campaigns with supported objectives. Opt in to enable it.

* To opt in, set the `targeting_optimization` parameter to `expansion_all`.
* To opt out, set the `targeting_optimization` parameter to `none`.

If you use the `targeting_optimization` parameter for an unsupported objective, the API returns an error.

### Example

The following request creates an ad set that opts in to Advantage detailed targeting by setting `targeting_optimization` to `expansion_all`.

```
curl \
  -F "name=relaxation null test" \
  -F "promoted_object={'application_id': '<APP_ID>', 'object_store_url': 'https://itunes.apple.com/app/id1111111'}" \
  -F "is_autobid=true" \
  -F "daily_budget=100" \
  -F "billing_event=LINK_CLICKS" \
  -F "campaign_id=<CAMPAIGN_ID>" \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "targeting={'geo_locations': {'countries': ['US', 'GB']}, 'user_os': ['iOS'], 'user_device': ['iPad', 'iPhone', 'iPod'], 'targeting_optimization': 'expansion_all'}" \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

## Reach estimates with Advantage detailed targeting

**Note:** When you set `targeting_optimization` to `expansion_all`, reach estimates from the Reach Estimate API may differ from the reach estimates displayed in Ads Manager. With expansion enabled, the API estimates the full expanded audience that Meta delivers to, which includes users beyond your specified targeting criteria.
