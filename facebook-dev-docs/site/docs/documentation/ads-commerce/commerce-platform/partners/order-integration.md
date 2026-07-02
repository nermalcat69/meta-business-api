---
title: "Build Offers Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/order-integration
---

# Build Offers Integration

Updated: Oct 25, 2024

Shops Ads can direct buyers either to a merchant website or Meta's in-app shopping experience. Therefore, it's important that pricing and promotions are synchronized to be consistent across both destinations. Promotions that are visible only on a merchant's website can create a confusing experience for buyers, and lead to lost purchases or reduced return on Ad spend (ROAS) for buyers who shop in-app on Facebook and Instagram.

Offers are a valuable tool for encouraging buyers to transact. You can use them to acquire new customers, re-engage previous buyers, sell through unwanted inventory, and more. On the whole, sellers who merchandise offers on Meta Shops see more transactions and a higher average order value than sellers who don't run offers. Offers are broadly classified into Meta-funded and seller-funded offers.

In addition to supporting Meta-funded offers, we currently support the following types of seller-funded offers:

* Offers allocated to individual items in an order
* Offers allocated across items in an order (potentially with remainders)
* Free shipping offers
* 'Buy X, Get Y'-style offers

## Requirements

You are required to do the following to meet the Shops [integration quality bar](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/overview#int-qual-bar):

* **[Requirement 1](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/order-integration#proc-orders-ass-offs):** Process orders (fulfillment, cancellation, refunds) associated with all Meta supported offer types.
* **[Requirement 2](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/order-integration#surface-cm-redirect-link):** If the third party is **not** the source of truth for offers, surface Commerce Manager redirect link to sellers to synchronize standard offers to Meta
* **[Requirement 3](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/order-integration#sync-stan-offers):** If the third-party **is** the source of truth for offers, synchronize standard offers to Meta using APIs

## Before You Start

Your app must have the following permissions:

* [`catalog_management`](https://developers.facebook.com/docs/permissions/reference/catalog_management)
* [`commerce_account_read_orders`](https://developers.facebook.com/docs/permissions/reference/commerce_account_read_orders)

Order-level offers and Buy X Get Y style offers are gated capabilities and must be explicitly requested.

## Requirement 1: Process Orders with Associated Offers and Discounts

One of the key ways that determines how a seller manages orders with applied offers is based on whether any discounts were applied to each unit of an item, or whether it was distributed across items in the order at creation time.

* **Item-level offers are applied to each unit of an item**. If this offer is applied to a line item, the total discount amount on the item is the quantity times discount amount. If an item had 3 units, and the discount originally was 5 USD per item, the `promotion_details` for that line item will have an `applied_amount` of 15 USD. However, because each unit was given the same discount amount, in the commerce system, the unit price of the item has been reduced. Values returned for line items with item level offers already incorporate the discount. If you want to read the pre-discounted value, you must add back the discount value returned in the promotion details. In addition to item-level offers associated with specific line items, any offer on shipping options also behave in this way.
* **Order-level offers are allocated across line items and units**. If an order has an order-level offer of 1 USD, and a line item with a quantity of 3, that 1 USD needs to be distributed across each unit. Because these distributions are not specific to any one unit, and may not divide evenly by the quantity of a line item, the discount is not already incorporated into unit prices on the order. Instead, promotion amounts on any one line item are dynamically broken down into sub-allocations at specific events in the order life cycle; specifically, fulfillment and cancellation.

At a high level, the application of an order-level offer is as follows:

* An order-level discount value is computed for a set of line items in the order.
* At order creation time, the discount value is allocated across those line items according to their relative values. This is then recorded as a `promotion_details` object attached to each discounted line item.
* At the time of cancellation and fulfillment, these distributions are broken down into further sub-allocations. These are recorded and can be retrieved through payment, refund, or cancellation response objects.

To create and use order-level offers, you need to request this gated capability once you have added support for the required workflows for processing orders with this discount type applied.

### Step 1: Fetch and Store Order Offer Details from Meta into OMS

When an order is placed that has had offers applied to it, these offers are represented as discount allocations either to line items, or to shipping options on the order. Information about these allocations can be retrieved as `promotion_details` objects through either the line item or the shipping option data objects.

These are static values and reference the applications of offers at order creation time.

These applied discount allocations can be linked to the seller's original offer via the `retailer_id` field which returns the original offer's `retailer_id`. The allocation also returns a Meta generated id in the `promotion_id` field.

In addition to `promotion_details` obtainable off the shipping option and line item objects, the order object itself also returns a list of all `promotion_details` objects associated with the order. In this response, the `promotion_details` that reference a common original offer are aggregated and the `applied_amount` field in the `promotion_details` object contains the sum of the applied amounts in each of the aggregated promotion details.

**Sample Request**

```
curl -X GET -G \
  -d 'fields=quantity,price_per_unit,promotion_details' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<ORDER_ID>/items
```

**Sample Response**

```
{
  "data":
    [
        {
            "id": "853960929343471" // line item id
            "quantity": 2,
            "price_per_unit":
            {
                "amount": "0.78",
                "currency": "USD"
            },
            "promotion_details":
            {
                "data":
                [
                    {
                        "promotion_id": "7989772254396791",
                        "campaign_name": "$1.01 off your order",
                        "coupon_code": "order",
                        "applied_amount":
                        {
                            "amount": "0.54",
                            "currency": "USD"
                        },
                        "sponsor": "merchant",
                        "applied_after_tax": false,
                        "retailer_id": "1.01 off order",
                        "target_granularity": "order_level"
                    }
                ]
            },
        },
        ...
    ],
}
```

### Step 2: Handle Order Fulfillment

When calling the fulfillment endpoint, no special consideration is required to handle any recorded offers on the order. Any amount associated with a fulfillment is computed based primarily on the quantity provided to that fulfillment call. These computations will account for any discounts that might be relevant to that line item or shipping option.

As mentioned above, item-level offers effectively create a new unit price, and so their usage in computations is straightforward. They are included in a base calculation of unit price \* quantity.

For order-level offers, any uneven distribution of discounts on a line item will be accounted for and attempt to ensure that the allocated discount is as close to the expected unrounded value as possible, for cumulative number of units fulfilled or canceled. For example, let us consider a line item with a quantity of 3 and a discount of 1 USD, where each unit is fulfilled separately. The expected discount after 1 item is 33.3 cents, which is rounded to 33 cents. This is allocated to the first fulfillment.
After 2 fulfillments, the expected discount is 66.7 cents, which is rounded to 66 cents. We allocate 33 cents to the second fulfillment as the difference between the previous allocations and the new expected value (66–33). Finally, on the last fulfillment, the allocation is the expected 100 cents minus the 66 cents allocated so far, which equals 34 cents.

These order-level allocations are recorded on the payment objects for the order, which get created with each fulfillment.

Item-level offers are not currently represented as explicit allocations.

**Sample Request**

```
curl -X GET -G \
  -d 'fields=items{id,promotion_allocations,quantity}' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<ORDER_ID>/payments
```

**Sample Response**

```
{
  "data": [
    {
      "total_amount": {
        "amount": "1.50",
        "currency": "USD"
      },
      "items": {
        "data": [
          {
            "id": "853960926010138",
            "promotion_allocations": [
              {
                "promotion_id": "7989772254396792",
                "allocation_amount": {
                  "amount": "0.47",
                  "currency": "USD"
                }
              }
            ]
          },
          {
            "id": "853960929343471",
            "promotion_allocations": [
              {
                "promotion_id": "7989772254396792",
                "allocation_amount": {
                  "amount": "0.27",
                  "currency": "USD"
                }
              }
            ]
          }
        ]
      },
      "id": "857336032339294"
    }
  ]
...
}
```

### Step 3: Handle Order Cancellation

Similar to fulfillment, you call the cancellation endpoint in response to a seller initiating cancellation with an arbitrary item quantity. For each cancellation, we perform the same computations as fulfillment to allocate a portion of the discount to that cancellation. A discount allocated to a cancellation is no longer available to the buyer. Order-level allocations are recorded on the cancellation objects for the order, which get created with each fulfillment.

**Sample Request**

```
curl -X GET -G \
  -d 'fields=items{id,promotion_allocations,quantity} \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<ORDER_ID>/cancellations
```

**Sample Response**

```
{
  "data": [
    {
      "id": "857407612332136"
      "items": {
        "data": [
          {
            "id": "853960929343471",
            "promotion_allocations": [
              {
                "promotion_id": "7989772254396791",
                "allocation_amount": {
                  "amount": "0.27",
                  "currency": "USD"
                }
              }
            ],
            "quantity": 1
          }
        ]
      },
    }
  ],

...
}
```

### Step 4: Handle Order Refund

Refund differs from cancellation or fulfillment in that in a non-discounted scenario, you can provide either a quantity to refund, or a refund amount per line item. We currently support refund amount inputs for orders with order-level offers, but don't currently support quantity based inputs.

In the case of providing a refund amount, a value is passed through directly as the pre-tax refund amount to the buyer. It's not modified by the existence of any order-level discounts. In this scenario, you need to determine what the refund amount should be based on the presence of any order-level discounts.

There are endpoints we provide that can help a user determine a refund amount:

* The `amount_available_for_refund` field on the line item object provides the current amount remaining that can be refunded for the line item. This value reflects the current state of any fulfillments and refunds, and effectively captures the amount paid by the buyer so far, less any previous refunds. This computation accounts for order level discounts.

**Sample Request**

```
curl -X GET -G \
  -d 'fields=amount_available_for_refund' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<ORDER_ID>/items
```

**Sample Response**

```
{
    "data": [
    {
      "amount_available_for_refund": {
        "amount": "0.51",
        "currency": "USD"
      },
      "id": "853960929343471"
    },
    {
      "amount_available_for_refund": {
        "amount": "0.85",
        "currency": "USD"
      },
      "id": "853960926010138"
    }
  ],
...
}
```

* Use the recorded allocations that were created at fulfillment and returned on the payment objects. These can be deducted from the subtotal values on the payment objects to determine the specific amount charged to the buyer (and therefore available to refund).

For example, when considering promotions, the current refundable amount for a line item can be computed as the (Price Per Unit) x (Quantity Fulfilled) - (Sum of Fulfilled Order Level Promotions) - (Total Refunded Amount for Line Item).

### Step 5: Enable and Support Special Casing for 'Buy X, Get Y'-Style Offers

A noteworthy detail for Buy X Get Y (BXGY) offers is that an order with a BXGY offer applied can have multiple line items for the same product. For example, a "buy one get one free" offer can result in two line items, one with an item at full price, and one with an item that is free. This is represented by an item-level discount on the free item (see above for description on how item level discounts affect pricing details).

Historically, API users have provided a retailer id to identify which line item to act on in order management flows for cancellation, fulfillment, and refund. This retailer ID is an ID associated with the product. Because we no longer can uniquely identify a line item based on retailer ID when multiple line items are for the same product, we have added an additional input parameter (`item_id`) that must be used for line items with BXGY offers applied. This parameter can be read off the line item API response as the `id` field. You may persist that `id` field and call order management endpoints by providing that persisted value as the `item_id`.

Going forward, the `retailer_id` field should not be provided.

To create and use 'Buy X Get Y'-style offers, you need to request this gated capability. When this capability is added to the integration, using the `retailer_id` parameter will result in the request failing.

**Sample Request**

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
  -F 'cancel_reason={
     "reason_code": "OUT_OF_STOCK",
      "reason_description": "Ran out of item"
    }' \
  -F 'restock_items=true' \
  -F 'items=[
      {
        "item_id": "595229202097276",
        "quantity": 1
      }
    ]' \
  -F 'idempotency_key=123456' \
  https://graph.facebook.com/<ORDER_ID>/cancellations
```

**Sample Response**

```
{
  "success": true
}
```

### Step 6: Handle Special Casing for Meta-Funded Offers

Meta occasionally runs promotions where we fund a portion of an order. From the buyer's perspective, these appear in the form of discounts that get applied after tax is computed (the tax amount is not reduced by the presence of a meta funded offer).

A Meta funded offer can be identified through the sponsor attribute set to `facebook` on the `promotion_details` object.

Meta-funded offers share the same overall pattern as seller-funded order-level offers described above for checkout and fulfillment in terms of computing allocated amounts. However, there are key differences in the fulfillment and refund flows to ensure that the seller receives the full value of their order:

* In the fulfillment flow, after an allocation for a fulfillment item is computed, we deduct the discount value from the post-tax line item subtotal for that fulfillment. Simultaneously, Meta initiates a separate transaction for a payment from Meta to the seller for that same discount value. At a high level, the total that the seller receives for the fulfillment should be the same as if the discount had not been applied. More granularly, the seller receives the total amount through two payments.
* For refunds on items with applied Meta funded offers, Meta attempts to proportionally distribute a refund amount to a portion being refunded to the buyer, and a portion being refunded back to Meta (sometimes referred to as a clawback). This distribution is done in the same proportion as the relative amounts that were paid by the buyer and Meta when the item was fulfilled. Similar to fulfillments, this distribution has no effect on the total amount refunded.
* The information for these offers is returned through the same API endpoints that return allocations for seller funded offers. Because these offers should generally affect the amounts that the seller receives or refunds, these can be considered to be used primarily for reference purposes, and should not typically be required in custom calculations for order management purposes.

Learn more about [promotions retrieval](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions).

## Requirement 2: Surface Commerce Manager Redirect Link to Sellers to Synchronize Standard Offers to Meta

Discounts need to be synchronized between the seller's systems and Meta. If you're not the source of truth, you need to surface a redirect link to Commerce Manager enabling sellers to set up offer sync directly with Meta. While creating these offers in [Commerce Manager⁠](https://www.facebook.com/business/help/431787070873394) can be helpful for one-off use-cases and evaluation purposes, we don't recommend this as a long-term solution for keeping offers on the seller's website in sync with offers visible on Meta applications. In the near future, Meta will provide sellers with a UI flow in Commerce Manager to set up recurring offer syncing and monitor the health of these recurring syncs.

Alternatively, sellers can set up recurring offer syncs through the Offers API similar to the setup outlined in the section below.

## Requirement 3: Synchronize Standard Offers to Meta via APIs

Third-party partners that act as the source of truth for offers, **must** leverage the Offers API to set up recurring syncs of seller's offers to Meta.

We recommend that you prioritize the offer types most commonly used by their sellers and clearly indicate to sellers if any offers will not be eligible for syncing.

This is currently a gated capability. If you're interested in trying this, please contact your Meta representative.

### Step 1: Create and Update Discounts Using the Offer APIs

The [Offers API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/offers-api) allows sellers to upload offer data to a specific product catalog. This data can only be uploaded to a catalog associated with a Meta Shop. Just like with products, offers are uploaded to a catalog by creating a "data feed" file and leveraging the [Catalog Feed API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed).

Data feed files can be in any supported format (CSV, TSV, RSS XML, ATOM XML, or [Google Sheets⁠](https://www.facebook.com/business/help/1898524300466211), where each "row" represents an individual offer and each "column" specifies that offer's configuration.

For a complete list of supported fields, how to map offers from your own systems to the Meta offers feed file format, and more information about how Meta offers are configured, see the [Offers API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/offers-api).

Once you've created a Meta offer feed file, one-time or recurring syncs of the file can be configured by making a `POST` request to the `/{product_catalog_id}/product_feeds` edge and setting the `feed_type` to `OFFER`.

**Sample Request**

```
curl -X POST \
  -F 'name="Offer Feed"' \
  -F 'schedule={
       "feed_type": "OFFER",
       "interval": "DAILY",
       "url": "http://www.example.com/offer_feed.csv",
       "hour": "22"
     }' \
 -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v15.0/{product-catalog-id}/product_feeds
```

Once an offer feed is created, manual syncs can also be triggered by making a `POST` request to the `/{offer_feed_id}/uploads` edge.

For more details on working with catalog data feeds, see the [Product Feed documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed#Creating).

### Step 2: Specify Offer Visibility on Meta Channel

For partners using the [Offers API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/offers-api), it's important to properly specify how buyers will discover an offer. In large part, this is controlled by the `application_type` field of an offer. When this field is set to either `SALE` or `AUTOMATIC_AT_CHECKOUT`, the offer is visible to all buyers and displays automatically across the buyer journey within Facebook and Instagram.

For offers with associated coupon codes, the `application_type` should be `BUYER_APPLIED`. By default, these offers are not visibly displayed to buyers on shopping surfaces. This can be useful if, for instance, a seller wants to directly email a buyer a code to enter in Meta checkout, but doesn't want to share that code with other buyers. However, in many cases, the coupon codes that a seller provides to Meta are intended to be broadly merchandised to buyers, such as a holiday promo code already displayed in a banner atop a merchant's website. For these scenarios, you should set the `public_coupon_code` field to convey the seller's intent and opt into visible merchandising of those codes on Meta. Learn more about the [Offers API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/offers-api).

## Learn More

* [Promotions retrieval](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions)
* [Commerce Manager⁠](https://www.facebook.com/business/help/431787070873394)
* [Offers API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/offers-api)
* [Catalog Feed API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed)
