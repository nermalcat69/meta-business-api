---
title: "Business China Business Onboarding Attributions"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/claim_custom_conversions
---

# Business China Business Onboarding Attributions

Updated: Jan 27, 2026

## Reading

You can’t perform this operation on this endpoint.

## Creating

### /{business\_id}/china\_business\_onboarding\_attributions

You can make a POST request to *china\_business\_onboarding\_attributions* edge from the following paths:

* [/{business\_id}/china\_business\_onboarding\_attributions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/china_business_onboarding_attributions)

When posting to this edge, a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `advertiser_identifier` *string* | [Optional] Advertiser identifiers used to analyze the customer acquisition lifecycle |
| `csi` *string* | [Optional] Meta generated tracking id |
| `update_token_id` *numeric string* | [Optional] ID for the OE Token to be updated. Providing this ID value will result in updating the existing OE Token instead of creating a new OE Token |
| `utm` *string* | [Optional] Marketing campaign name |

#### Return Type

```
Struct  {
id: numeric string,
link_with_id: string,
utm: string,
csi: string,
advertiser_identifier: string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
