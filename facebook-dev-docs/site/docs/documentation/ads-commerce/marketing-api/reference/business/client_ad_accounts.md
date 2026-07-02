---
title: "Business Claim Custom Conversions"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_ad_accounts
---

# Business Claim Custom Conversions

Updated: Aug 20, 2019

## Reading

You can't perform this operation on this endpoint.

## Creating

### /{business\_id}/claim\_custom\_conversions

You can make a POST request to *claim\_custom\_conversions* edge from the following paths:

* [/{business\_id}/claim\_custom\_conversions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/claim_custom_conversions)

When posting to this edge, a [CustomConversion](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `custom_conversion_id` *numeric string* | Custom conversion ID the business claims.  required |

#### Return Type

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
