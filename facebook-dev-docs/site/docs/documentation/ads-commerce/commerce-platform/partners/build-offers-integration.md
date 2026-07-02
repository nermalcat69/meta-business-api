---
title: "Catalog Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/build-offers-integration
---

# Catalog Integration

Updated: Feb 9, 2026

## Overview

Before buyers can purchase items, the product information needs to be uploaded into a product catalog (aka catalog). A catalog is a container of information about the seller's products and where you can upload their inventory. If a seller advertises with Facebook Advantage+ catalog ads (formally known as Dynamic Ads), they will already have a catalog and must be upgrading that existing catalog for commerce.

## Why does the integration matter?

The freshness, coverage, and completeness of the catalog are instrumental to the quality of the experience for customers buying products on the Facebook Shop or Instagram Shopping channels. This has a direct impact on the performance of ads and organic sales from your sellers and advertisers.

Near real-time inventory and pricing updates help ensure that the buyers are protected against oversell and price disparity, respectively. This can otherwise result in increased cancellations, refunds, customer service traffic, and more importantly, erosion of buyer trust. Combined, these can lead to poor quality of shops, lower Product Detail Page (PDP) conversions and consequently degraded performance of the associated Shop ads.

## Requirements

You are required to do the following to meet our Shops [integration quality bar](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/overview#int-qual-bar):

[**Requirement 1**](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/build-offers-integration#sync-catalog-to-meta): Synchronize the catalog to Meta and handle errors:

* Use a scalable synchronization mechanism for non-volatile fields (full catalog sync at minimum every 24 hours and delta sync every 1 hour).
* Synchronize high volatility field (inventory and pricing) updates in near real-time (at least every 15 mins).

[**Requirement 2**](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/build-offers-integration#req2-surface-diagnostics): Surface diagnostics with a clear Call-To-Action (CTA).

[**Requirement 3**](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/build-offers-integration#meta-pixel-signals): Enable sellers to set up and send back ads signals via the Meta Pixel.

To enhance your Shops integration, we strongly encourage you to also [synchronize the product set collection](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/build-offers-integration#sync-prod-set-collection) and [enable sellers to set up and send back ads signals](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/build-offers-integration#ads-signal-capi) via the [Conversions API](https://developers.facebook.com/documentation/ads-commerce/conversions-api) (CAPI) to enhance your Shops integration.

## Before You Start

Your app must have the [catalog\_management](https://developers.facebook.com/docs/permissions/reference/catalog_management) permission.

## Requirement 1: Synchronize the Catalog to Meta

### Step 1: Determine if Seller is Upgrading Existing Ads Catalog or Creating a New Shops Catalog

We recommend upgrading the seller's existing Ads catalog (if any) to be used for commerce as it helps avoid discrepancies and gets the benefit of both offsite (from Seller surfaces, such as website and app) and onsite (on Meta surfaces, such as Instagram and Facebook apps) signals, effectively improving their ads and sales performance.

To determine this:

* Set up and listen to the [onboarding webhook](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/onboarding-integration#fbe-install-webhooks) to fetch the ID for the connected catalog asset.
* Check your catalog management system to see if this is an existing catalog recorded in your system.
* Call the catalog API endpoint with the catalog ID obtained earlier, requesting for the `commerce_merchant_settings` object. Check the `cta` field of the `commerce_merchant_settings` object to determine whether this catalog is associated with an onsite shop (in this case, marked as `ONSITE_CHECKOUT`).

**Sample Request**

```
curl -X GET -G \  
  -d 'fields=commerce_merchant_settings.fields(id,cta)' \  
  -d 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/<API_VERSION>/{catalog-id}
```

**Sample Response**

```
{  
  "commerce_merchant_settings": {  
      "id": "2214103588714027",  
      "cta": "ONSITE_CHECKOUT",  
  },  
  "id": "1181538518900034"  
}
```

For more details, see the [Product Catalog API reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog#fields).

### Step 2: Add Catalog Fields

If the seller is upgrading an existing Ads catalog, ensure you add any missing mandatory fields for commerce. Alternatively, if this is a new Commerce catalog, add all the mandatory fields for commerce.

We highly encourage you to add other fields marked as optional to the catalog, as they improve buyer UX by providing more product information and allow fine-tuning how items are displayed. Notable examples include a link to a product video, target age group, a rich text description, or custom labels.

On top of the mandatory fields for commerce, the optional fields that make the most impact on buyer UX are:

* Add `price` and `quantity_to_sell_on_facebook`
* Add either `fb_product_category` or `google_product_category`, or both, to make your products more discoverable and enable correct tax calculations for checkout, if applicable
* Add `additional_image_link` to provide multiple high quality images
* Add `size` for apparel sellers
* Add `sale_price` and `sale_price_effective_date`, if applicable
* Add category-specific attributes such as `gender`, `age_group`, `material`, `pattern`, and so on
* Add `rich_text_description` if description is over 200 characters
* Also add `video`, if available

You can find a comprehensive list of both [required and optional catalog fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields) with respective examples.

### Step 3: Handle Variants

Variants represent product SKUs (units of stock). If selling clothing and accessories, the seller is likely to keep stock in sizes and colors. Some other categories also keep stock in other variants, such as capacity, style, and so on. For existing catalogs, you can find out if it has variants by looking at the records of the existing feeds and seeing if they represent SKUs.

**Example: Feed without Variants**

| ID | Title | Item\_Group\_ID | Price | Quantity\_to\_sell\_on\_Facebook |
| --- | --- | --- | --- | --- |
| 10024 | Winter Coat | WinterCoats | $299 | 40 |
| 10025 | Winter Pants | SnowCoats | $159 | 10 |

**Example: Feed with Variants**

| ID | Title | Item\_Group\_ID | Size | Color | Price | Quantity \_to\_sell\_on\_Facebook |
| --- | --- | --- | --- | --- | --- | --- |
| 10024\_1\_000 | Winter Coat | WinterCoats | S | Black | $299 | 4 |
| 10024\_2\_000 | Winter Coat | WinterCoats | M | Black | $299 | 12 |
| 10024\_3\_000 | Winter Coat | WinterCoats | L | Black | $299 | 0 |
| 10024\_1\_00F | Winter Coat | WinterCoats | S | Blue | $299 | 6 |
| 10024\_2\_00F | Winter Coat | WinterCoats | M | Blue | $299 | 17 |
| 10024\_3\_00F | Winter Coat | WinterCoats | L | Blue | $299 | 0 |
| 10025\_1\_F00 | Snow Pants | SnowPants | S | Red | $159 | 2 |
| 10025\_2\_F00 | Snow Pants | SnowPants | M | Red | $159 | 5 |
| 10025\_3\_F00 | Snow Pants | SnowPants | L | Red | $159 | 3 |

There are 3 possible scenarios to handle:

**Scenario 1:** There is no existing feed or the existing feed (for Ads) doesn't have variants; the new feed doesn't have any applicable variants either. No special variant handling is required in this case.

**Scenario 2:** There is no existing feed or the existing feed (for Ads) already has variants; the new feed has applicable variants. No special variant handling is required in this case, except for ensuring that the variants are ingested.

**Scenario 3:** The existing feed doesn't have variants while the new feed has applicable variants. In this case, you cannot simply replace the existing feed without variants with the new feed with variants as depicted in the examples above. Doing so will cause your item with ID 10024 to be deleted from the catalog. This will negatively impact the seller's existing ads catalog performance, as we will need to rebuild product ranking for the new IDs (10024\_1\_000, 10024\_2\_000, etc.), which can take several days to weeks, depending on the nature of the seller's Facebook pixel. Instead, the recommended approach here is to:

* Populate the new catalog with variants (aka child products) – use the child IDs.
* Populate the fields upon which the products vary (e.g. size, color).
* Populate the `item_group_id` field to appropriately group the products together.
* Populate the `previous_id` field to associate the variants with the original product in Meta's systems.

**Example: Feed Before Variants**

| ID | Title | Item\_Group\_ID | Size | Color | Price | Quantity \_to\_sell\_ on\_Facebook | Previous ID |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10024\_1\_000 | Winter Coat |  |  |  | $299 | 4 |  |
| 10024\_2\_000 | Winter Coat |  |  |  | $299 | 12 |

**Example: Feed After Adding Variants**

| ID | Title | Item\_Group\_ID | Size | Color | Price | Quantity\_ to\_sell\_on\_ Facebook | Previous ID |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10024\_1\_000 | Winter Coat | WinterCoats | S | Black | $299 | 4 | 10024 |
| 10024\_2\_000 | Winter Coat | WinterCoats | M | Black | $299 | 12 | 10024 |
| 10024\_3\_000 | Winter Coat | WinterCoats | L | Black | $299 | 0 | 10024 |
| 10024\_1\_00F | Winter Coat | WinterCoats | S | Blue | $299 | 6 | 10024 |
| 10024\_2\_00F | Winter Coat | WinterCoats | M | Blue | $299 | 17 | 10024 |
| 10024\_3\_00F | Winter Coat | WinterCoats | L | Blue | $299 | 0 | 10024 |
| 10025\_1\_F00 | Snow Pants | SnowPants | S | Red | $159 | 2 | 10025 |
| 10025\_2\_F00 | Snow Pants | SnowPants | M | Red | $159 | 5 | 10025 |
| 10025\_3\_F00 | Snow Pants | SnowPants | L | Red | $159 | 3 | 10025 |

### Step 4: Determine and Integrate with the Appropriate Ingestion Method

There are multiple factors to consider in deciding which ingestion methods to use. Read on for guidelines on which factors to consider and best practices associated with each. Ultimately, the ingestion method(s) used depend on your use-cases, but this section describes some best practices that can help you decide what is the best approach for you.

### Decision Factors

There are two main factors to take into account; catalog size and update frequency. The following table summarizes the recommended general setup:

| Catalog / Feed Size | Less than 1 Hour Updates | Hourly Updates | Daily Updates |
| --- | --- | --- | --- |
| Less than 1 million items / Less than 1 GB feed size | N primary replace feeds / hour AND N update feeds / 15 minutes *OR* Batch API | N primary replace feeds / hour | N primary replace feeds / day |
| More than 1 million items / Less than 1 GB feed size | 1 primary replace feeds / hour AND 1 update feeds / 15 minutes *OR* Batch API | 1 primary replace feed / hour | 1 primary replace feeds / day |

You can have various options to decide your setup but make sure the biggest size and most frequently updated catalogs are covered as per above recommendations.

### Primary Feed

A feed is a set of items uploaded or fetched from a given source. Depending on the number of items and feed size, you can either have a single feed to represent all of the items in your catalog (see below for more details on this). You need to upload feed files on a regular basis to keep your catalog up to date. In general, feed uploads can be of 2 types: replace feed and update-only feed.

### Primary Replace Feed Upload

A feed upload that contains all up to date product information, including new items, and deletions, see the **[feed-api](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#feed-api-reference)** for more details on how to reflect new products and product deletes in your feeds. All catalogs should have a periodic primary replace feed uploads. Ensure that replace feed uploads for the same product do not overlap in time. The per-line length limit is less than or equal to 5 MB (5,242,880 characters).

The primary replace feed file should contain a 'snapshot' view of your catalog as accurate as possible at the time of upload. This is important to avoid catalog drift if there are any transient issues with updates or Batch API calls.

Any item not present in the replace feed file will be deleted from the catalog.

### Update Feed Upload

A feed upload that updates existing products, is used as a delta sync of primary the feed. It can be used to update highly volatile fields like `quantity_to_sell_on_facebook`, `pricing`, `availability`, etc. As with replace feed uploads, ensure that update feeds upload for the same product do not overlap in time. The same per-line length limits apply (less than or equal to 5 MB) for update feed upload.

No deletes are possible in update feeds uploads but creating new products is allowed. Just make sure they are present in the next run of your primary replace feed upload.

It is recommended to use Batch API if your frequency of updates is high, as it will help keeping volatile fields up-to-date with low latency. This will deliver optimal buyer experience.

If you plan to use update feeds with a higher frequency than 1h, you have to use the One-Time Direct upload functionality. Remember you cannot have update feed uploads for the same products overlapping in time.

### Batch API

A set of [Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api) calls that contain high frequency product field updates, most importantly highly volatile fields like quantity\_to\_sell\_on\_facebook, pricing, availability, etc. One request can take a maximum of 5,000 products only. Similarly than in the feed case, ensure that Batch API calls containing the same product do not overlap in time.

Batch API calls can create, update or delete products, but you should ensure inserts are also present in your primary replace feed to avoid catalog drift over time. To delete products created in a Batch API call without catalog drift, make sure that they are present in at least one subsequent primary replace feed upload before taking any delete action. See the following diagram to illustrate a catalog drift scenario caused by a network outage (Case B):

![Case A and Case B timelines showing how a lost Batch API update from a network glitch causes catalog drift for product Id016](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/586229838_1369493151576002_7696897744052230771_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=yQdABg2rDBEQ7kNvwHu_l9O&_nc_oc=Adrh00oq_ufmog5opP_pikhQmeUsjwavf0COa4TDiHRor4HBiNMsIi32_R5Lr1rABA1vvZ1sYJqNlqGYvd7MIK8v&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=aAZXoY2WyD_pZgqPULqWMA&_nc_ss=7b289&oh=00_AQAshJ5-tRqvEEYEdU24R3OzweCtwDOB7emKEJqGy6SRXQ&oe=6A60730E)

So to avoid edge cases like the above Case B, it is recommended to not do product item creation in Batch API.

Use the `/items_batch` endpoint as it supports the latest features.

Batch API is an async API so the request returns immediately. However, time to process a Batch API call is usually ~2 minutes, so bear that in mind to avoid any overlaps.

Bear in mind that a given Batch API call must have all updates for a given product combined into a single update within that batch, as there are no guarantees of order of execution within a single batch.

**Item Deletes**

If an item goes out of stock, update the availability field to out of stock. Immediate item deletion is not necessary and not recommended, as item learnings are vital for ads performance.

If deletion is needed (for instance, after 3 months of the item no longer being sold), it is best to delete an item using the same ingestion method used to create it.

**Large catalog or high volume update considerations**

When processing large catalogs of >1M or with feed sizes of >1GB it is important to break up feeds and Batch API calls into manageable chunks. To avoid race conditions and ownership issues, it is essential to avoid simultaneous updates of the same products, and sequence the different feed schedules and API calls. The following diagram illustrates this concept:

![Timeline of even and odd feed chunks showing replace and update feeds sequenced so same-chunk products never overlap](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/587191605_1369493094909341_6427052158303127460_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=bzA-P2xUPqEQ7kNvwFpnxob&_nc_oc=AdrgJJxOfPKhDyS3edTRoeIKEY_oT8uSLL8QQxLSXsfSR70oT9rjFkq3BKqqAFUtdPOxH-reRJvdjmSJo0e4FZxF&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=aAZXoY2WyD_pZgqPULqWMA&_nc_ss=7b289&oh=00_AQC4ff8SyPTpZL1jhH6y_DuoJzRZ7kyWdAYZePCI4bU61w&oe=6A606F4A)

In this example, we have two chunks (or shards) distributed by even and odd id numbering, so while simultaneous replace feed or updates (also applies to Batch API) can happen between even and odd chunks, we are making sure any replaces or updates of the same chunk do not overlap in time.

You can use whatever chunking or sharding mechanism suits your use cases, but ensure products always fall within the same chunk.

While you can do simultaneous scheduling of feeds and Batch API calls, be mindful of rate limiting as chunking does not increase rate limits in any way.

In general, consider the balance between implementation complexity, size of catalog, frequency and size of updates and latency. The combination of primary replace feeds, update feeds, Batch API and chunking provide a flexible set of tools to find the optimal setup.

Value flapping
Be careful to avoid any value flapping between updates using any of the update methods described in this guide, hence it is important to ensure your primary replace feed contains the most up to date view of your catalog and your update feed uploads or Batch API calls are in sync with that view.

Value flapping impacts buyer user experience. In practice, value flapping means that depending on when they visit a PDP, they will see different values on some fields after refreshing or revisiting the page, which lowers buyer trust.

Learn more about the different ingestion methods:

* [Direct Upload](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#direct-upload-feed)
* [Feed API Reference](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#feed-api-reference)
* [Catalog Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api)

### Step 5: Check the Upload Status

If using the [Feed API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api), you can use the value in the returned `id` field to track the status for that particular feed upload session. Learn more about how to [check the upload status](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api) when using the feed ingestion mechanism.

If using the [Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api), you can use the `check_batch_request_status` endpoint to check the status of a given Batch API session. The session is referenced by its handle (returned when POSTing a Batch API request) and it returns a `status` field, which contains details on the status of the processing of the batch session.

The Batch API is asynchronous; this endpoint lets you check the status of the data processing once the request has been made. Learn more about the [Check Batch Request Status](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/get-batch-request), including all the possible values of the `status` field.

### Step 6: Surface Ingestion Errors to Sellers with a Clear CTA

Whether the product items are uploaded using the [Feed API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api) or the [Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api), an entire upload or an individual product item record can be lost in transport or rejected because of issues. The status and rejection reasons can be monitored asynchronously, after each upload session. Barring integration-related failures, these need to be surfaced to the sellers so they can be fixed, as they are typically issues related to missing or incorrect fields (for instance, the primary image missing, or the description is too long, etc.). Issues are reported both in the form of blocking errors and non-blocking warnings (especially on fields that are optional, but recommended).

## Requirement 2: Surface Diagnostics with a Clear CTA

After basic ingestion checks the item is persisted on the Meta side and receives `item_id`. When we receive catalog updates (whether via a feed update, or individual item updates via the [Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api)), we run async validation logic on each item to identify any issues with them. The issues we identify range from those that block displaying the item entirely (e.g. integrity policy violations), to missing attributes that can impact conversion. The goal is to communicate these to the seller (or support, who is helping the seller) to rectify them.

We run this logic regularly, even after a seller has taken steps to rectify, because the problems can occur dynamically (e.g. an image link may break at any time). Therefore, it's important for sellers to check back regularly on the health of their catalog.

Because quite a few products can be labeled with an issue, and there can be multiple issues that come up, we set a "priority" field, to help sellers prioritize addressing them. Priorities are decided based on both the issue type (the severity level) and the item (the importance level). Meta commits to keeping high and medium priority issues as actionable as possible. To properly support this experience, we recommend polling our diagnostics API hourly to become aware of any issues, then surfacing them to the sellers. At a high-level, we recommend exposing these errors on these types of views on the partner surface:

* **Item-view:** Depicting granular, item-level errors
* **Summary-view:** Drawing attention to top errors and any associated items

### Step 1: Address Fatal Ingestion Errors

Right after ingestion, call [Prioduct Feed Upload Errors](https://developers.facebook.com/docs/marketing-api/reference/product-feed-upload/errors)/[Batch Request Status](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status) to discover fatal ingestion errors and warnings. Sellers have limited ability to fix fatal errors and we recommend monitoring and fixing them on a platform-integration level.

**Feed Fatals:** For feed uploads, call the [feed upload error API](https://developers.facebook.com/docs/marketing-api/reference/product-feed-upload/errors) to discover fatal ingestion errors and warnings for both the entire feed and particular lines of the feed that couldn't be ingested. This API returns both Fatals and warnings. Set the `error_priority` field to `HIGH` for filtering fatal errors.

**Sample Request (Feed Fatals)**

```
curl -X GET -G \  
  -d 'access_token=<ACCESS_TOKEN>' \  
'https://graph.facebook.com/<API_VERSION>/{upload-id}/errors?error_priority=HIGH'
```

**Sample Response (Feed Fatals)**

```
{  
  "data": [  
    {  
      "id" : 1510567479166488,  
      "summary" : "Group Mismatch for Property: shipping.",  
      "description" : "Property shipping must have the same value for all items in the same group.",  
      "severity" : "fatal",  
      "row_number" : 10,  
      "column_number" : 5  
    },  
    ...  
  ]  
}
```

See [Feeds diagnostics](https://developers.facebook.com/docs/marketing-api/reference/product-feed-upload/errors) for more details.

**Batch API Status:** Batch request status API returns the fatal errors and warnings for batch API upload sessions. Since Batch API is an async call, status of batch API call can be fetched using the handle returned in Batch API response.

**Sample Request (Batch API Fatals)**

```
curl -X GET -G \  
  -d 'access_token=<ACCESS_TOKEN>' \ 'https://graph.facebook.com/<API_VERSION>/{product-catalog-id}/check_batch_request_status?handle={handle}&error_priority=HIGH'
```

**Sample Response (Batch API Fatals and Warnings)**

```
{  
  "data": [  
    {  
      "handle": "abc",  
      "status": "finished",  
      "errors_total_count": 2,  
      "errors": [  
        {  
          "line": 2,  
          "id": "retailed_id_1",  
          "message": "URL Incorrectly Formatted: The provided URL is formatted incorrectly. If multiple links are included in one field, separate them using a comma. Specifying username and password in the URL is not supported."  
        },  
        {  
          "line": 1,  
          "id": "retailed_id_2",  
          "message": "A required field is missing: Products need to have availability listed to run in ads. Include the current availability for each product in your data feed file and upload it again. You can only add the supported values \"in stock\", \"out of stock\", \"preorder\", \"available for order\", \"discontinued\", \"pending\" in US English under the \"availability\" column."  
        },  
      ],  
      "warnings": [  
        {  
          "line": 2,  
          "id": "retailed_id_3",  
          "message": "These fields have missing information: Make items easier to discover by providing google_product_category information."  
        },  
        ...  
      ],  
      "ids_of_invalid_requests": [  
      ]  
    }  
  ]  
}
```

See [Batch API diagnostics](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status) for more details.

### Step 2: Retrieve List of All Supported Error Types

The list of all possible error types with descriptions can be retrieved from the `catalog_all_errors` API. This can subsequently be used for filtering and sorting the errors.

**Sample Request**

```
curl -X GET -G \  
  -d 'access_token=<ACCESS_TOKEN>' \  
'https://graph.facebook.com/<API_VERSION>/catalog_all_errors?locale=en_US'
```

**Sample Response**

```
{  
  "all": [{  
      "error_type": "IMAGE_RESOLUTION_LOW",  
      "error_priority": "HIGH",  
      "title": "Missing or invalid images",  
      "description": "The main image of this item cannot be displayed. Images must be in JPEG or PNG format, less than 8 MB and at least 500 x 500 pixels. <a href="https://www.facebook.com/business/help/686259348512056?id=725943027795860">See all product image specifications</a>.",  
      "call_to_action": "After you've made changes, save the image under a different link (URL) and provide the new link. Check that the link begins with http:// or https:// and isn't broken. Make sure that it doesn't block Meta from accessing the image.",  
      },  
      ...  
    ]  
}
```

### Step 3: Retrieve Catalog-Level Errors

To have a catalog-level diagnostics view, use product search API with `error_priority` and `error_type` filters. This returns a paginated list of product items with given `error_priority` and `error_type`.

For surfacing top errors in a summary view:

* At a regular interval, call the [product search](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/products) API to get a list of items filtered by `error_priority` and `error_type`.
* Display errors and appropriate calls to action on each item.
* Update this view as the seller addresses the errors in the catalog (using event-based updates and the [Batch API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status)).

**Sample Request**

```
curl -X GET -G \  
  -d 'access_token=<ACCESS_TOKEN>' \  
'https://graph.facebook.com/<API_VERSION>/{catalog_id}/products?fields=id,errors&error_priority={HIGH}[&error_type={error_type}]'
```

**Sample Response**

```
{  
    "data": [{,  
      "id": "4405565689470921",  
      "errors": [  
        {  
          "error_type": "IMAGE_RESOLUTION_LOW",  
          "error_priority": "HIGH",  
          "title": "Missing or invalid images",  
          "description": "The main image of this item cannot be displayed. Images must be in JPEG or PNG format, less than 8 MB and at least 500 x 500 pixels. <a href="https://www.facebook.com/business/help/686259348512056?id=725943027795860">See all product image specifications</a>.",  
          "call_to_action": "After you've made changes, save the image under a different link (URL) and provide the new link. Check that the link begins with http:// or https:// and isn't broken. Make sure that it doesn't block Meta from accessing the image.",  
        },  
        ...  
      ]},  
    ...  
    ],  
    "paging": {},  
    "summary": {}  
}
```

### Step 4: Retrieve Granular Item-Level Errors

Call the item-level diagnostics API to determine the list of products affected by any issues, including detailed descriptions and fix steps recommendations. You can use optional parameters (`issue_type` or `severity`) to filter errors.

For surfacing errors on each item:

* On demand, when the seller looks at an item, call the [product item](https://developers.facebook.com/docs/marketing-api/reference/product-item) API to get a list of all items and any associated non-fatal errors.
* Display errors and appropriate calls to action on each item.
* Update this view as the seller addresses the issues in the catalog (using event-based updates and the [Batch API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status)).

**Sample Request**

```
curl -X GET -G \  
  -d 'access_token=<ACCESS_TOKEN>' \  
 'https://graph.facebook.com/<API_VERSION>/{item_id}?fields=errors'
```

**Sample Response**

```
{  
  "errors": [{  
          "error_type": "IMAGE_RESOLUTION_LOW",  
          "error_priority": "HIGH",  
          "title": "Missing or invalid images",  
          "description": "The main image of this item cannot be displayed. Images must be in JPEG or PNG format, less than 8 MB and at least 500 x 500 pixels. <a href="https://www.facebook.com/business/help/686259348512056?id=725943027795860">See all product image specifications</a>.",  
          "call_to_action": "After you've made changes, save the image under a different link (URL) and provide the new link. Check that the link begins with http:// or https:// and isn't broken. Make sure that it doesn't block Meta from accessing the image.",  
        },  
    ...  
  ],  
  "id": "4405565689470921"  
}
```

## Requirement 3: Enable Sellers to Set Up and Send Back Ads Signal via the Meta Pixel

Conversion tracking refers to the seller tracking visitor activity on the seller's website. Examples of visitor activities include a user viewing a product, adding it to cart or purchasing it. This is typically accomplished by the sellers using the [Meta Pixel](https://developers.facebook.com/docs/meta-pixel). Tracked conversions are used to measure the effectiveness of seller ads, to define custom audiences for ad targeting, for ads campaigns, and to analyze the effectiveness of conversion funnels.

Because Shops Ads can direct buyers to a merchant website or Meta's onsite shop, to set up effective ads campaigns, sellers need to leverage the commerce signals from both their onsite shop and their website (via the Meta Pixel).

As a third-party partner, you need to enable the seller to provide their Pixel information during their Meta shop setup. By using FBE for seller onboarding, you will get this for free. To check whether the seller's catalog is associated with a pixel, you can call the `catalog_id/external_event_sources` [API endpoint](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog).

## Enhancement 1: Synchronize Product Set Collection

A [product set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets) is a subgroup of items in a catalog. A product set can be used in ads and/or published as a product set collection on the seller's shop to help customers find the right set of products.

If you upgraded your ads catalog where you had existing product sets, you can update your product sets with collection metadata and publish them to your shop to be visible there.

### Step 1: Create a New Product Set Collection

Synchronize creations of a product set with collection metadata that matches specific product IDs:

**Sample Request**

```
curl -0 -X POST \  
 -H 'Content-Type: application/json; charset=utf-8' \  
https://graph.facebook.com/<API_VERSION>/{product-catalog-id}/product_sets?access_token=<ACCESS_TOKEN> \  
--data-binary @- << EOF  
{  
  "name": "Best Sellers",  
  "filter": "{  
'retailer_id': {'is_any': ['pid1', 'pid2']}  
}",  
  "metadata":  
"{  
'cover_image_url':'https://foo.com/image.jpg',  
'external_url':'https://foo.com/best-sellers',  
'description':'Our best selling products'  
}"  
}  
EOF
```

**Sample Response**

```
{  
  "id": "<PRODUCT_SET_ID>"  
}
```

In case of an unsuccessful response, you would receive an error response with error details. An error doesn't necessarily mean that a product set collection was not created, e.g. if there is an error in fetching a cover image URL; the product set might still be created. To check what product sets collections you've already created and their current state:

```
GET /<API_VERSION>/<PRODUCT_CATALOG_ID>/product_sets
```

### Step 2: Update or Publish a Product Set Collection

Synchronize updates to an existing product set with collection metadata and publish to shops:

**Sample Request**

```
curl -0 -X POST \  
 -H 'Content-Type: application/json; charset=utf-8' \  
https://graph.facebook.com/<API_VERSION>/{product-set-id}?access_token=<ACCESS_TOKEN> \  
--data-binary @- << EOF  
{  
  "name": "Updated Best Sellers",  
  "publish_to_shops": [  
    {  
      "shop_id": "<SHOP_ID>"  
    }  
  ]  
}  
EOF
```

**Sample Response**

```
{  
  "id": "<PRODUCT_SET_ID>"  
}
```

In addition, you can also synchronize deletions of a `ProductSet` by making a `DELETE` request to `/{product_set_id}`. By default, a product set cannot be deleted while it's being used in an active ad, shop collection, or other usages. To override this behavior, include `allow_live_product_set_deletion=true` in your request.

Learn more about [product set-related API operations](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/collections).

**Sample Request**

```
curl -X DELETE \  
  -d 'access_token=<ACCESS_TOKEN>' \  
https://graph.facebook.com/<API_VERSION>/{product-set-id}
```

**Sample Response**

```
{  
  "success": true  
}
```

## Enhancement 2: Enable Sellers to Set Up and Send Back Ads Signal via CAPI

For optimal ad performance and signal resilience, we recommend that you work with your sellers to implement the Conversions API (CAPI) alongside their Meta Pixel and follow other [best practices](https://developers.facebook.com/documentation/ads-commerce/conversions-api/best-practices).

Learn how to [set up the Conversions API as a platform](https://developers.facebook.com/documentation/ads-commerce/conversions-api/set-up-conversions-api-as-a-platform).

## Learn More

* [product set-related API operations](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/collections)
* [Promotions retrieval](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions)
* [Commerce Manager⁠](https://www.facebook.com/business/help/431787070873394)
* [Direct Upload](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#direct-upload-feed)
* [Feed API Reference](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#feed-api-reference)
* [Catalog Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api)
