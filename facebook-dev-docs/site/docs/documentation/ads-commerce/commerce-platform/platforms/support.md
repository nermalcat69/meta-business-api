---
title: "Marketplace Approval API"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support
---

# Marketplace Approval API

Updated: Dec 4, 2025

You can request Facebook Marketplace approval and then check the status of the request for your sellers.

## Request Marketplace Approval

You can request a shop to be listed on Marketplace by updating the seller’s settings’ `marketplace_approval_requested` to `true`

```
curl -X POST \
  -F 'onsite_commerce_merchant="..."' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<MERCHANT_SETTINGS_ID>
```

```
{
  "onsite_commerce_merchant": {
    "marketplace_approval_requested": "true"
  }
}
```

## Check Setup Status

After a seller request to sell on Marketplace is received by the Facebook Ops team. If all prerequisites met we validate that the seller complies with our seller policies you will be able to sell on Facebook Marketplace. If there are any issues with the request you can use this endpoint to get information about them.

A seller request is going through few statuses before it is fully approved:
![Marketplace seller approval flow: WAITING_FOR_REVIEW to IN_REVIEW to APPROVED, with ON_HOLD branching back to IN_REVIEW](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/585345259_1369493238242660_8521786993503242693_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=h1DvlX949f8Q7kNvwGA0sB1&_nc_oc=AdpHIOMPWRrSnj21QWVYIijQx4MpwfsJTm2AszUAe3YbXO9wclUys4AE59q8pLWx-r6WfFq1c9RrY2Rq-A3bjC4W&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=SwG_tMgJl5SJEpSdwPaupw&_nc_ss=7b289&oh=00_AQDIWKKPfC7HvpR93fRXvjvZDQjAtAP0Tk9Wj7mOjl6QXQ&oe=6A606E6D)

### Check Onboarding Status from Seller Settings

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<MERCHANT_SETTINGS_ID>/?fields=cta,setup_status
```

### Check Onboarding Sstatus from a Page

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/shop_setup_status
```

### Request

No request parameters

### Response

| Attribute | Type | Description |
| --- | --- | --- |
| `shop_setup` | [`shop_setup_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#shop_setup_status) | Status of the Page Shop. |
| `payment_setup` | [`payment_setup_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#payment_setup_status) | Status of the seller payment details. |
| `marketplace_approval_status` | [`marketplace_approval_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#marketplace_approval_status) | Status of seller’s Marketplace approval |
| `deals_setup` | [`deals_setup`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#deals_setup) | Status of seller’s Daily Deals allow list. |
| `marketplace_approval_status_details` | [`marketplace_approval_status_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#marketplace_approval_status) | Details on the seller’s approval status. |

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

### `marketplace_approval_status`

| Value | Description |
| --- | --- |
| `UNDEFINED` | Seller’s application has not been submitted. |
| `IN_REVIEW` | Seller’s application is in review. |
| `APPROVED` | Seller’s is approved for Marketplace listings. |
| `REJECTED` | Seller’s has been rejected for Marketplace listings. |
| `ON_HOLD` | Seller’s is on hold for further review. |

### `deals_setup`

| Value | Description |
| --- | --- |
| `NOT_SETUP` | Seller is not set up on Daily Deals. |
| `SETUP` | Seller is set up on Daily Deals. |
| `UNDER_REVIEW` | Seller is under review. |

### `marketplace_approval_status_details`

| Value | Type | Description |
| --- | --- | --- |
| `issues` | array of [`issue`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#issues) | Array of issues the seller has on Marketplace. |

### `issue`

| Value | Type | Description |
| --- | --- | --- |
| `issue` | [`issue`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#issue) | Coded type of an issue. |
| `severity` | [`severity`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/support#severity) | Severity of an issue. |
| `description` | string | Description of the issue and recommended actions to take. |
| `additional_url` | string | Additional URL. |

### `issue`

| Value | Description |
| --- | --- |
| `FB_PAGE_SHOP_NOT_PUBLISHED` | Seller has not published their Page shop. |
| `ONSITE_CHECKOUT_NOT_ENABLED` | Seller doesn’t support onsite checkout. |
| `FAIL_QUALITY_REVIEW` | Seller fails quality review. |
| `NO_INVENTORY` | Seller does not have any in stock product. |

### `severity`

| Value | Description |
| --- | --- |
| `BLOCKING` | Blocking sellers from being approved for Marketplace. |

### Example API Responses

**1.** Seller has applied for Marketplace, and they are waiting to be reviewed.

```
{
    "cta": "ONSITE_CHECKOUT",
    "setup_status": {
      "data": [
        {
          "shop_setup": "SETUP",
          "payment_setup": "SETUP",
          "marketplace_approval_status": "WAITING_FOR_REVIEW",
          "deals_setup": "NOT_SETUP"
        }
      ]
    }
}
```

**2.** Seller is being reviewed for Marketplace. There is nothing blocking so far, and we are still reviewing the seller.

```
{
  "cta": "ONSITE_CHECKOUT",
  "data": [
    {
      "shop_setup": "SETUP",
      "payment_setup": "SETUP",
      "marketplace_approval_status": "IN_REVIEW",
      "deals_setup": "NOT_SETUP"
    }
  ]
}
```

**3.** We found out some blocking issues after reviewing the seller.

```
{
  "cta": "ONSITE_CHECKOUT",
  "data": [
    {
      "shop_setup": "SETUP",
      "payment_setup": "SETUP",
      "marketplace_approval_status": "ON_HOLD",
      "deals_setup": "NOT_SETUP",
      "marketplace_approval_status_details": {
        "issues": [
          {
            "issue": "no_inventory",
            "description": "Your catalog has no in stock product. Please make sure your catalog has products and at least one product has inventory count greater than 0.",
            "severity": "blocking"
          }
        ]
      }
    }
  ]
}
```

**4.** Seller becomes approved.

```
{
  "cta": "ONSITE_CHECKOUT",
  "data": [
    {
      "shop_setup": "SETUP",
      "payment_setup": "SETUP",
      "marketplace_approval_status": "APPROVED",
      "deals_setup": "NOT_SETUP"
    }
  ]
}
```
