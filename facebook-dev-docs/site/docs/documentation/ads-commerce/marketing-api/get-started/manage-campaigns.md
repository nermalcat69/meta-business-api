---
title: "Create an ad"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/manage-campaigns
---

# Create an ad

Updated: Jun 24, 2026

To create an ad, combine an existing ad set with an ad creative.

You create the ad by sending a `POST` request to the `/act_<AD_ACCOUNT_ID>/ads` endpoint along with parameters such as the `adset_id` and `creative` details.

**Example API Request:**

```
curl -X POST \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads \
  -F 'name=My Ad' \
  -F 'adset_id=AD_SET_ID' \
  -F 'creative={"creative_id": "<CREATIVE_ID>"}' \
  -F 'status=ACTIVE' \
  -F 'access_token=<ACCESS_TOKEN>'
```

### Required parameters

The ad-creation request requires the following parameters:

| Name | Description |
| --- | --- |
| `adset_id` | The ID of the ad set under which the ad runs. |
| `creative` | Contains the creative ID for the ad. |
| `status` | Set `status` to `ACTIVE` to launch the ad, or to `PAUSED` to keep the ad inactive until you finish setup. |

## Learn more

* [Ad Account Ads Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads)
* [Ad Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)
