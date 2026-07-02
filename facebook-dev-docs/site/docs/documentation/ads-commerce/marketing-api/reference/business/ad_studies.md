---
title: "Business Ad Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_studies
---

# Business Ad Accounts

Updated: Jul 26, 2019

## Reading

You can't perform this operation on this endpoint.

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

### /{business\_id}/ad\_accounts

You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business\_id}/ad\_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_accounts).

#### Parameters

| Parameter | Description |
| --- | --- |
| `adaccount_id` *string* | Ad account ID.  required |

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

---
