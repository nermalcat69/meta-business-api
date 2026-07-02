---
title: "Advantage lookalike"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-expansion/advantage-custom-audience
---

# Advantage lookalike

Updated: Jun 30, 2026

For more information about Advantage lookalike, see [Help Center: About Advantage lookalike⁠](https://www.facebook.com/business/help/1212225059146059).

**Note:** Meta enables campaigns with supported objectives by default.

* To opt in, set the `lookalike` parameter within `targeting_relaxation_types` to `1`.
* To opt out, set the `lookalike` parameter within `targeting_relaxation_types` to `0`.

If you use the `lookalike` parameter within `targeting_relaxation_types` for an unsupported objective, you receive an error.

## Example: opt in to Advantage lookalike

The following request creates an ad set that opts in to Advantage lookalike by setting the `lookalike` parameter within `targeting_relaxation_types` to `1`.

```
curl \
  -F "name=relaxation null test" \
  -F "promoted_object={'application_id': '<APP_ID>', 'object_store_url': 'https://itunes.apple.com/app/<ID>'}" \
  -F "is_autobid=true" \
  -F "daily_budget=100" \
  -F "billing_event=LINK_CLICKS" \
  -F "campaign_id=<CAMPAIGN_ID>" \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "targeting={'geo_locations': {'countries': ['US', 'GB']}, 'user_os': ['iOS'],   'user_device': ['iPad', 'iPhone', 'iPod'], 'custom_audiences': [{<LOOKALIKE_DATA>}],  'targeting_relaxation_types': {'lookalike': 1}}" \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```
