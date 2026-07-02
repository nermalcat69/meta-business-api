---
title: "Troubleshoot Your Commerce Platform Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution
---

# Troubleshoot Your Commerce Platform Integration

Updated: Dec 9, 2025

To understand the commerce setup for a seller, consider confirming what assets are used:

* [Commerce Merchant Settings](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#CMS-ID)
* [Page and Catalog IDs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#page-catalog-ids)
* [Business ID](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#biz-id)
* [Facebook channel](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#FB-channel)
* [Instagram channel](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#IG-channel)
* [Onsite or offsite](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#onsiteoffsite)
* [Setup status](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#status)

## Get Commerce Merchant Settings ID

CMS-ID is a Commerce Merchant Settings ID for commerce integration.

If you are using a Commerce Manager redirect, this ID should be returned in the redirection parameters. Alternatively, you can ask a seller to provide your ID or pull CMS-ID from the business object.

* A seller can find the CMS-ID by logging into Facebook Commerce Manager and then selecting the commerce account. The seller will be redirected to www.facebook.com/ commerce\_manager/{CMS-ID}.
* Pulling CMS-ID from the business object:

**Sample Request**

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<BUSINESS_ID>/fields=commerce_merchant_settings
```

**Sample Response**

```
{  
  "id": "123456789"  
}
```

If your seller has more than one commerce merchant settings you can query Instagram channel or page name to verify where orders are coming from.

## Get Page, Catalog IDs

You can read a seller's settings by ID. The onsite\_commerce\_merchant field is only returned for Shops configured for onsite Checkout.

**Sample Request**

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>?fields=merchant_page,product_catalogs
```

**Sample Response**

Shop configured for onsite Checkout:

```
{  
  "merchant_page": {  
    "id": "4040",  
    "name": "Checkout Page"  
  },  
  "product_catalogs": {  
    "data": [  
      {  
        "id": "33799",  
        "name": "Products for Checkout"  
      }  
    ]  
  },  
  "id": "1234567890"  
}
```

Shop not configured for onsite Checkout (old Shops API):

```
{  
  "id": "1234567890"  
}
```

Otherwise a relevant error message will be returned.

## Get Business ID

To get a seller business ID, you need to know either the page or catalog IDs from them (you can get these IDs from CMS-ID). Both catalog and page objects have business edge that can provide you information about the business.

**Sample Request**

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>?fields=business
```

**Sample Response**

```
{  
  "business": {  
    "id": "1234567890123",  
    "name": "A merchant business name"  
  },  
  "id": "1234567890"  
}
```

## Facebook Channel

**Sample Request**

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>?fields=facebook_channel
```

**Sample Response**

```
{  
  "facebook_channel": {  
    "pages": {  
      "data": [  
        {  
          "name": "Checkout Page",  
          "id": "4040"  
        }  
      ]  
    }  
  },  
  "id": "123456789890"  
}
```

## Instagram Channel

**Sample Request**

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>?fields=instagram_channel
```

**Sample Response**

```
{  
  "instagram_channel": {  
    "instagram_users": {  
      "data": [  
        {  
          "id": "1234"  
        }  
      ]  
    }  
  },  
  "id": "123456789890"  
}
```

## Onsite or Offsite Configuration

In order to check if a commerce account setup as offsite or onsite use the commerce merchant settings parameter `cta`.

**Sample Request**

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<MERCHANT_SETTINGS_ID>/?fields=cta,setup_status
```

**Sample Response**

```
{
  "cta": "ONSITE_CHECKOUT"

}
```

## Setup Status

There are few statuses that are required to see if the seller is correctly set up.

![Diagram mapping Commerce merchant settings properties (shop_setup_status, facebook_channel, instagram_channel) and Instagram account properties (Instagram Shopping approval) to seller readiness](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/123836529_1638704212984112_3709763509327338336_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=m8vLfodcDr0Q7kNvwHeskxz&_nc_oc=AdpyPfjkXaZwr3jfNSSXt4Xt7blbPIgw_mjpnMZb6J7S9r8Xud2KTXyqwNYftlIvf6OoBd-3YhCQYPS5WeTknU-a&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=lVx7nOPnznt_Nyk3uPFpXw&_nc_ss=7b289&oh=00_AQDQkbcK-C0ziAhHWAEv8BMRNz305X1g0cHtuHDvclG7Ug&oe=6A609172)

* First check that `shop_setup` field must be in `SETUP` state.
* Lack of payment setup is indicated in the `payment_setup` field.
* Shops will not be visible to public unless `review_status` is in `APPROVED` state. See [`review_status_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#review_status_code) for details.
* We recommend checking `facebook_channel` and `instagram_channel` to see that Facebook Shops and Instagram Shopping channels are enabled. For more details see [Facebook channel](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#FB-channel) and [Instagram channel](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#IG-channel).
* Separately to commerce setup seller Instagram account must be approved for the Shopping functionality, otherwise there will be no distribution of the seller products on Instagram and no commerce orders. Instagram Shopping approval status is no part of commerce API.

**Sample Request**

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<MERCHANT_SETTINGS_ID>/?fields=setup_status
```

**Response**

| Attribute | Type | Description |
| --- | --- | --- |
| `shop_setup` | [`shop_setup_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#shop_setup_status) | Status of the Commerce account. |
| `payment_setup` | [`payment_setup_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#payment_setup_status) | Status of the seller payment details. |
| `review_status` | [`review_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#review_status) | Status of Facebook's seller integrity review. |

### `shop_setup_status`

| Value | Description |
| --- | --- |
| `NOT_SETUP` |  |
| `SETUP` |  |
| `UNDER_REVIEW` |  |
| `PENDING_PAGE_APPROVAL` |  |
| `PENDING_TOS_ACCEPTANCE` |  |
| `EXTERNALLY_DISABLED` |  |

### `payment_setup_status`

| Value | Description |
| --- | --- |
| `NOT_SETUP` |  |
| `SETUP` |  |
| `VERIFICATION_NEEDED` |  |
| `UNDER_REVIEW` |  |

### `review_status`

| Attribute | Type | Description |
| --- | --- | --- |
| `status` | [`review_status_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#review_status_code) | Enum representing review status. |
| `reasons` | Array of [`review_status_reason`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution#review_status_reason) | If the review status is `REJECTED`, this contains descriptions of reasons for rejection. |

### `review_status_code`

| Value | Description |
| --- | --- |
| `APPROVED` |  |
| `IN_REVIEW` | Sellers need to wait for the review to complete for their Shops to be visible to public. The process can take up to 28 days. |
| `REJECTED` | Rejected sellers have to delete the CMS and set up with different credentials such as bank account. |
| `INTEGRITY_NOT_CHECKED` | Integrity review was waived |

### `review_status_reason`

| Attribute | Type | Description |
| --- | --- | --- |
| `code` | String | Enum representing rejection reason. Possible values are `UNKNOWN`. |
| `message` | String | Description of rejection reason. |
| `help_url` | String | A link to view more details about the review and rejection. |

**Sample Response**

```
{
  "data": [
    {
      "shop_setup": "SETUP",
      "payment_setup": "SETUP",
      "review_status": {
        "status": "REJECTED",
        "reasons": [
          {
            "code": "UNKNOWN",
            "message": "Your account is not eligible for Facebook Shops at this time.",
            "help_url": "https://www.facebook.com/help/contact/481136396104354"
          }
        ]
      }
    }
  ]
}
```
