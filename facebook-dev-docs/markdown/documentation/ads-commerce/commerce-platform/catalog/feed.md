---
title: "Quantity to Sell"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/feed
---

# Quantity to Sell

Updated: Apr 26, 2024

The `quantity_to_sell_on_facebook` field in your catalog represents the stock level for each product available to sell on your Facebook Shop or Instagram Shopping account. This value is reflected in the Product Details Page (PDP) and helps buyers understand how many items are available. Keeping it accurate and up-to-date is instrumental to the experience, as it dictates when your products are out-of-stock or can lead to overselling if incorrect.

**NOTE:** The `quantity_to_sell_on_facebook` field is replacing the `inventory` field, which is being deprecated. While we will support the old field name in the near term, we recommend that you use the new name. See [Supported Fields for Products - Advantage+ Catalog Ads & Commerce](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#da-commerce)  for more about this update.

**Note**: An item without quantity to sell setup cannot be tagged or purchased. However, you still can use it for Advantage+ catalog ads without checkout.

## Quantity to Sell Fluctuation

The `quantity_to_sell_on_facebook` field is dynamic, which means that its value fluctuates as people buy products from your Facebook Shop or Instagram Shopping account. Whenever a user places an order, the quantity level of the corresponding products is decremented.

The Commerce Platform automatically increment this value or re-stocks the product in case of user-initiated cancellations.
In the case of seller-initiated cancellations, you can re-stock a product at cancellation time and increment the corresponding quantity level by setting the [`restock_items`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#order_cancel_reason) field of the [cancellations API endpoint](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order).

The value that you provide via catalog uploads or other techniques (see [Quantity Update Strategies](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/feed#strategies) for more information) is considered the source of truth, and is always used to overwrite the value cached on our backend.

![Flowchart of order cancellation paths showing how Quantity to Sell and Available quantity change when an item is restocked or not](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/241324143_198625142256156_2208628452132693078_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=x8GTYmSocwcQ7kNvwHsUCMz&_nc_oc=AdoNl9j1o3KBjW7OgR1JhqwcCunKH-SPRS2HAPHFuLH7Rw0vf0gDjIrhzRT8k6QKhN4DcYzKekWpEX5ewg8dr3DG&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=BI9fudqk1V7A_0oNASyLFA&_nc_ss=7b289&oh=00_AQDE6vTSUKxunmfiqhjeaIFqHTBVN5aL_ezbKL-ZxD1C5g&oe=6A6084FE)

We keep the following types of quantity counts on our end:

* The *quantity to sell* is the value that you provide via product catalog uploads or other techniques (see [Quantity Update Strategies](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/feed#strategies) for more information).
* The *available quantity* is the value that customers can purchase and it takes into consideration unconfirmed orders.

To learn more about these quantity types, see [Product Life Cycle](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/feed#products-life-cycle).

## Out-of-Stock Products

As people purchase products on your Facebook Shop or Instagram Shopping account, the quantity value is decremented. When this value reaches `0`, we mark the product as 'Out-of-Stock' and restrict anyone from purchasing additional units. You should do a best-effort attempt at restocking your products regularly as 'Out-of-Stock' products negatively affect the user experience and your brand perception.

If a buyer finds an Out-of-Stock product, we try our best to switch the Product Details page to a variant that has units 'In-Stock' based on the quantity value of the product's variant in your catalog.

![Mobile Product Details page for a training shoe with a Select Size panel listing sizes marked Out of Stock or In Stock](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/66018740_1122484737949257_3754940583764819968_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fv6gp_9PqXQQ7kNvwFolyPx&_nc_oc=Adp9yMAQqqTCr1sahGNXmfu2QR6aS16HSSD4dfIOVZ_VfRShtDqJx5Lx2imSnBc0nyRhgIWhf_AQWlCzRulY8WVz&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=BI9fudqk1V7A_0oNASyLFA&_nc_ss=7b289&oh=00_AQAt1VOATuP6bxaXloMCoXPs83JG_ZFlIvbQDGNR5Y-bvg&oe=6A60714C)

## Discontinued Products

When a product is discontinued, you may be tempted to simply delete it from your catalog. **We don't recommend this.**

Deleting products from your catalog may cause undesirable effects, such as product tags and images disappearing. **We strongly recommend that you only delete products after a significant time has passed (months)**.

Instead of deleting products, you should set the `visibility` field of a discontinued product to `staging`. This ensures that the Commerce Platform can link your product back to a known entity and manage different situations gracefully.

## Product Life Cycle

Every time you update quantity, we update the quantity to sell. This number does not correspond to the number of items available for customer purchase. We track incoming orders (which may be in different states) and subtract unconfirmed orders to calculate a final available quantity. This number may not be exposed outside of our platform.

**Available** Quantity = **Quantity to Sell** - **Unconfirmed Orders**.

![Sequence diagram across Customer, Available quantity, Orders, Quantity to Sell, and Partner showing an order decrementing Available quantity from 5 to 4](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/241347675_1004398786804118_7627019903712795583_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mnJYqMluwQQQ7kNvwHwIdTQ&_nc_oc=AdofvIu3cIO-fpEgaTvfSLU9F-G-LCOBqgOVSLwpwFH2K_Y9YtFPyfvOsBtLczZVvJ4UH12qOy4xNOOP7Z3tIBeJ&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=BI9fudqk1V7A_0oNASyLFA&_nc_ss=7b289&oh=00_AQC4kaHMDPVOAgORHMVm7gX4R9vsxc-bqrVDpv30ZcG1pA&oe=6A6078A9)

After orders are acknowledged, there is a 30 minute buffer to allow you to process orders and update quantity numbers (via the catalog) before we remove those acknowledged orders from our counter.

![Sequence diagram showing the 30 minute buffer after confirmed orders before acknowledged orders are removed and Available quantity reconciles to Quantity to Sell](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/241223797_1270399520071725_6192409294451237234_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=l-86lo55pgwQ7kNvwEhk2AZ&_nc_oc=AdoY2w9vGeeRPmAQPVGcRgfS1UB_S1tqFCU0V8QlWtEQpvnF2uVKmXQdggeaBIFT2Pw7f_rUMsf0LIHBm8Ntu9xs&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=BI9fudqk1V7A_0oNASyLFA&_nc_ss=7b289&oh=00_AQD9eyvzQoW3XvYZg_gG4TYJiVZzd1rflVyIiHgSJEO1fA&oe=6A607009)

## Over-selling

To scale the Commerce Platform to thousands of merchants, we've made a conscious decision to not support synchronous quantity management. As a consequence, we don't support making atomic purchase transactions coupled with decrementing stock levels in **your warehouse**. If your quantity to sell is shared across multiple channels, you may unexpectedly over-sell products on Facebook or Instagram. This could happen for fast-selling products available in limited quantity.

When you cannot fulfill orders due to over-selling situations, you should initiate a [cancellation⁠](https://www.facebook.com/business/help/2184004921867702) and set the `reason_code` to `OUT_OF_STOCK`.

If you are frequently faced with over-selling, you can process orders at a more frequent basis, and adjust the quantity level of your products accordingly.

## Quantity Integration Strategy

You can update quantity in a different way depending on the type of integration you are doing:

* Via Commerce Manager UI (small product set, testing, and so on)
* A feed with scheduled or manual upload
* Using the Feed API
* Using the Items Batch API

## Quantity Update Strategies

Because of the asynchronous nature of distributed systems, the quantity value in your product catalog may go out-of-sync, regardless how fast you update your quantity levels. Below are some techniques that you may want to consider, to minimize race-conditions.

### Pre-allocated Quantity

The most effective way to avoid over-selling is to pre-allocate quantity to your Facebook Shop or Instagram Shopping channels. Dedicating quantity for each of your sales channels guarantees that sales happening on any individual channel do not interfere with each other. This strategy can be applied to part or the totality of your catalog.

### Slow-Selling Products

For products that sell at a normal pace, or those with deep quantity, the risk of over-selling is relatively low. In this situation, you can keep your catalog update strategy simple:

* Configure a scheduled feed for daily/hourly updates. This feed should contain all fields, including the most up-to-date `quantity_to_sell_on_facebook` value.

### Fast-Selling Products

For fast-selling products, with shallow or very dynamic quantity, you may want to update volatile fields such as `quantity_to_sell_on_facebook` in a more timely basis. You can use the Items Batch API for this purpose. Here's a general strategy that you can follow:

* Configure a scheduled feed for daily/hourly updates. This feed should contain all mandatory catalog fields, and omit volatile fields such as `quantity_to_sell_on_facebook`. The purpose of this feed is to update fields that are more static in nature, and defer the updates of volatile fields using the Items Batch API.
* Use the **Items Batch API** to update volatile fields such as `quantity_to_sell_on_facebook` when the value changes in your backend, or at a fixed frequency. It is important that the fields updated using this technique are not included in your feed for consistency reasons.

Here's an example of updates using the Items Batch API:

```
curl \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "access_token": "<ACCESS_TOKEN>",
    "item_type": "PRODUCT_ITEM",
    "requests": [
      {
        "method": "UPDATE",
        "data": {
          "id":"SKU1234567",
          "quantity_to_sell_on_facebook": "1337",
        }
      }
    ]
  }' \
  https://graph.facebook.com/v9.0/<CATALOG_ID>/items_batch
```

Items Batch API requests are asynchronous. You should check for the request status and its result to make sure that all your updates are successful. See the [Items Batch API documentation](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/batch-api) for more information.

If you are managing a small number of products, you can also update each product individually using the Graph API directly in lieu of the Items Batch API. Because of Graph API rate-limiting and throttling, this approach is only applicable to a small number of products. The exact number of products you can update using this approach depends on the quota applied to your Facebook app, a good rule of thumb is that you should use the Items Batch API if you are updating more than a dozen products at a time.

To update specific fields inside a product, you can make the following API call:

```
curl \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "access_token": "<ACCESS_TOKEN>",
    "quantity_to_sell_on_facebook": "1337"
  }' \
  https://graph.facebook.com/v9.0/<FACEBOOK_PRODUCT_ID>
```

If using the Graph API, use a Facebook product ID. If using the Items Batch API, use your own ID, also known as the `retailer_id`.

### Quantity Thresholds

Another common technique to mitigate against over-selling is to take a cautious approach to quantity allocation. For example, when a particular item is close to running Out-of-Stock, as identified in your warehouse, you can set the quantity level in your catalog to zero. This is effectively an optimization for under-selling, but can help if over-selling is a concern.

If you know how fast each of your products sell, you can partition them into different buckets and apply a different threshold for each bucket depending on its selling profile. Fast selling products will typically need a higher threshold value, while slow selling products can probably use a lower threshold value for being marked Out-of-Stock.
