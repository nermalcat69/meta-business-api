---
title: "Advantage custom audience"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/flexible-targeting
---

# Advantage custom audience

Updated: Jun 30, 2026

For more information about Advantage custom audience, see [Help Center: About Advantage custom audience⁠](https://www.facebook.com/business/help/414975413946182).

**Note:** Campaigns with supported objectives are enabled by default.

* To opt in, set the `custom_audience` parameter within `targeting_relaxation_types` to `1`.
* To opt out, set the `custom_audience` parameter within `targeting_relaxation_types` to `0`.

If you use the `custom_audience` parameter within `targeting_relaxation_types` for an unsupported objective, the API returns an error.

## Example

```
curl \
  -F "name=relaxation null test" \
  -F "bid_strategy=LOWEST_COST_WITHOUT_CAP" \
  -F "daily_budget=100" \
  -F "billing_event=IMPRESSIONS" \
  -F "campaign_id=<CAMPAIGN_ID>" \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "targeting={'geo_locations': {'countries': ['US', 'GB']}, 'custom_audiences': [{<CUSTOM_AUDIENCE_DATA>}], 'targeting_relaxation_types': {'custom_audience': 1}}" \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```
