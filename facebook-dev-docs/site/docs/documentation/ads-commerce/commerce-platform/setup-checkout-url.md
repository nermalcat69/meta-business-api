---
title: "Automate Ratings and Reviews Seller Analysis"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/setup-checkout-url
---

# Automate Ratings and Reviews Seller Analysis

Updated: Mar 22, 2023

This document is intended for partners who wish to automate the analysis of the seller lists sent to Meta.

## `Store List`

| Element | Description |
| --- | --- |
| `stores`  Type: Array<store> | **Required**  A list of store objects. |

## `Store`

| Element | Description |
| --- | --- |
| `storeDomain`  Type: string | **Required**  Store’s website  Example: `[https://www.facebook.com, www.facebook.com or facebook.com]`. |
| `storeName`  Type: string | **Required**  Store name or company name |
| `storeID`  Type: string | **Required**  Store ID |
| `isInEligiblePlan`  Type: boolean | **Optional**  Whether or not the seller is part of an eligible plan or tier that includes Meta syndication. |

### Sample Data

```
{
  "stores": [
    {
      "storeDomain": "facebook.com",
      "storeName": "facebook",
      "storeID": "VCXI2623D",
      "isInEligiblePlan": true
    },
    {
      "storeDomain": "instagram.com",
      "storeName": "instagram",
      "storeID": "SK32S4OW2",
      "isInEligiblePlan": false
    }
  ]
}
```

### Return Data

| Element | Description |
| --- | --- |
| `isStoreMatched`  Type: boolean | **Required**  If store is Matched on Meta side |
| `isStoreEligible`  Type: boolean | **Required**  If store is Meta eligible seller |
| `optInStatus`  Type: boolean | **Required**  If store has opted in to data sharing from Meta surface |

```
{
  "stores": [
    {
      "storeDomain": "facebook.com",
      "storeName": "facebook",
      "storeID": "VCXI2623D",
      "isInEligiblePlan": true,
      "isStoreMatched": true,
      "isStoreEligible": true,
      "optInStatus": true
    },
    {
      "storeDomain": "instagram.com",
      "storeName": "instagram",
      "storeID": "SK32S4OW2",
      "isInEligiblePlan": false,
      "isStoreMatched": false,
      "isStoreEligible": false,
      "optInStatus": false
    }
  ]
}
```

## Integration Configuration

Integration will happen using the same file transfer process that currently handles Ratings & Reviews feed transfer. Please create a directory adjacent to your Ratings & Review feed directory.

| Config | Description |
| --- | --- |
| Directory | **Required**  New directory where Seller List lives. Report will be shared in the same directory |
| File Name | **Required**  Name of Seller List JSON file |

## See Also

* [Product Feed Review Schema](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema)
