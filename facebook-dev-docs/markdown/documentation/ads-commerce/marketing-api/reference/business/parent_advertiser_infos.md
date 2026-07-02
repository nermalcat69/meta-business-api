---
title: "Business Pages"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/parent_advertiser_infos
---

# Business Pages

Updated: Jul 25, 2019

## Reading

You can't perform this operation on this endpoint.

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

### /{business\_id}/pages

You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business\_id}/pages](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pages).

#### Parameters

| Parameter | Description |
| --- | --- |
| `page_id` *Page ID* | Page ID.  required |

#### Return Type

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 42001 | This Page can't be removed because it's already linked to an Instagram business profile. To remove this Page from Business Manager, go to Instagram and convert to a personal account or change the Page linked to your business profile. |
| 200 | Permissions error |
| 3996 | The page does not belong to this Business Manager. |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 100 | Invalid parameter |

---
