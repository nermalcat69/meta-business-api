---
title: "Inventory"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api
---

# Inventory

Updated: Aug 18, 2020

**Note**: This field has been replaced with the [Quantity to Sell](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/quantity-to-sell)  field.

The `inventory` field in your Product Catalog represents the stock level for each product available to sell on your Facebook Shop or Instagram Shopping account. This value is reflected in the Product Details Page (PDP) and helps buyers understand how many items are available. Keeping it accurate and up-to-date is instrumental to the experience, as it dictates when your products are out-of-stock or can lead to overselling if incorrect.

**NOTE:** The `inventory` field is being deprecated and replaced with a new [`quantity_to_sell_on_facebook`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/quantity-to-sell) field. While we will support the old field name for the near term, we recommend that you use the new name. See [Supported Fields for Products - Advantage+ Catalog Ads & Commerce](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#da-commerce)  for more about this update.

**Note**: An item without inventory setup cannot be tagged or purchased. However, you still can use it for Advantage+ catalog ads without checkout.

## Inventory Fluctuation

The `inventory` field is dynamic, which means that its value fluctuates as people buy products from your Facebook Shop or Instagram Shopping account. Whenever a user places an order, the inventory level of the corresponding products is decremented.

The Commerce Platform automatically increment this value or re-stocks the product in case of user-initiated cancellations.
In the case of seller-initiated cancellations, you can re-stock a product at cancellation time and increment the corresponding inventory level, by setting the [`restock_items`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#order_cancel_reason) field of the [cancellations API endpoint](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order).

The value that you provide through product catalog uploads or other techniques (see [Inventory Update Strategies](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#strategies) for more information) is considered the source of truth, and is always used to overwrite the value cached on our backend.

![Image](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/585906467_1369493254909325_6593935544371617697_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gphp2eTrzSQQ7kNvwFayggy&_nc_oc=AdqLUf9Ie0hyQG4ubyklaLjEWsA3T1rRdVLBef3T9zVa-XgklWvd_YoF1_7IPRB_AMZUyxophD8Tq-4f3TBOzTwq&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=jEwmTXh8YuHv-jzBRjYFsQ&_nc_ss=7b289&oh=00_AQDhiC2KMBwvHVEZWE3wxA2iv2Xih3sUVl7cF3Q6tIWXWA&oe=6A6076EF)

We keep the following types of inventory counts on our end:

* The *provided inventory* is the value that you provide through product catalog uploads or other techniques (see [Inventory Update Strategies](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#strategies) for more information).
* The *available inventory* is the value that customers can purchase and it takes under consideration not processed orders.

Learn more about these inventory types; see [Product Life Cycle](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#products-life-cycle).

## Out-Of-Stock Products

As people purchase products on your Facebook Shop or Instagram Shopping account, the `inventory` value is decremented. When this value reaches `0`, we mark the product as ‘Out-Of-Stock’ and restrict anyone from purchasing additional units. You should do a best-effort attempt at restocking your products regularly as ‘Out-Of-Stock’ products negatively affect the user experience and your brand perception.

If a buyer finds an Out-Of-Stock product, we try our best to switch the Product Details page to a variant that has units ‘In-Stock’ based on the `inventory` value of the product’s variant in your product catalog.

![](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/66018740_1122484737949257_3754940583764819968_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fv6gp_9PqXQQ7kNvwFolyPx&_nc_oc=Adp9yMAQqqTCr1sahGNXmfu2QR6aS16HSSD4dfIOVZ_VfRShtDqJx5Lx2imSnBc0nyRhgIWhf_AQWlCzRulY8WVz&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=jEwmTXh8YuHv-jzBRjYFsQ&_nc_ss=7b289&oh=00_AQAwYaEnYGrWgmdncfZi-k2gXnnv_5NGiCK80vXPC5S1jw&oe=6A60714C)

## Discontinued Products

When a product is discontinued, you may be tempted to simply delete it from your product catalog. **We don’t recommend this.**

Deleting products from your catalog may cause undesirable effects, such as product tags and images disappearing. **We strongly recommend that you only delete products after a significant time has passed (months)**.

Instead of deleting products, you should set the `visibility` field of a discontinued product to `staging`. This ensures that the Commerce Platform can link your product back to a known entity and manage different situations gracefully.

## Product Life Cycle

Every time you update inventory, we update the provided inventory. This number does not correspond to the number of items available for customer purchase. We track incoming orders (which may be in different states) and subtract unacknowledged orders to calculate a final available inventory. This number may not be exposed outside of our platform.

**Available** Inventory = **Provided** Inventory - **Not Acknowledged Orders**.

![Image](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/584583406_1369493318242652_1617372906041265298_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zv3mEcFbwc4Q7kNvwEG1ub-&_nc_oc=Adq6B9I4KiiPkzIqF5GMk3XXOvD3VvUCeSKAdverxbQ9n6ALI7Cv6-DK9g2ChAIM9z6aI3Q5zraV_fEN4oNtBZ5Z&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=jEwmTXh8YuHv-jzBRjYFsQ&_nc_ss=7b289&oh=00_AQCDbtcqS7M2nwuuPAz7sIDaf2c8Ak3YqGuY5gdNgVjP1g&oe=6A607C1C)

After orders are acknowledged, there is a 30 minute buffer to allow you to process orders and update inventory numbers (through the catalog) before we remove those acknowledged orders from our counter.

![Image](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/585496978_1369493331575984_4018477625849742415_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=24dfAldzPzoQ7kNvwGuGb-4&_nc_oc=Adrq86JvaMyhYvt1iYUUTwfgnUTz2mU_SBP7RitcyeCYvuzFUuPA7ep89McmG9v1LJAvOeWwzC5EuhBUg8NLq27F&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=jEwmTXh8YuHv-jzBRjYFsQ&_nc_ss=7b289&oh=00_AQBzF6k4n65dJmJRKldvRUFQTNMigOyPWCT-jr1MhfacrA&oe=6A60964D)

## Over-selling

To scale the Commerce Platform to thousands of merchants, we’ve made a conscious decision to not support synchronous inventory management. As a consequence, we don’t support making atomic purchase transactions coupled with decrementing stock levels in **your warehouse**. If your inventory is shared across multiple channels, you may unexpectedly over-sell products on Facebook or Instagram. This could happen for fast-selling products available in limited quantity.

When you cannot fulfill orders due to over-selling situations, you should initiate a [cancellation⁠](https://www.facebook.com/business/help/2184004921867702) and set the `reason_code` to `OUT_OF_STOCK`.

If you are frequently faced with over-selling, you can process orders at a more frequent basis, and adjust the inventory level of your products accordingly.

## Inventory Integration Strategy

You can update inventory in a different way depending on the type of integration you are doing:

* By using the Commerce Manager UI (small product set, testing, and so on)
* A feed with scheduled or manual upload
* Using the Feed API
* Using the Batch API

## Inventory Update Strategies

Because of the asynchronous nature of distributed systems, the `inventory` value in your product catalog may go out-of-sync, regardless how fast you update your inventory levels. Below are some techniques that you may want to consider, to minimize race-conditions.

### Pre-allocated Inventory

The most effective way to avoid over-selling is to pre-allocate inventory to your Facebook Shop or Instagram Shopping channels. Dedicating inventory for each of your sales channel guarantees that sales happening on any individual channel do not interfere with each other. This strategy can be applied to part or the totality of your product catalog.

### Slow-Selling Products

For products that sell at a normal pace, or those with deep inventory, the risk of over-selling is relatively low. In this situation, you can keep your product catalog update strategy simple:

* Configure a scheduled feed for daily/hourly updates. This feed should contain all fields, including the most up-to-date `inventory` value.

### Fast-Selling Products

For fast-selling products, with shallow or very dynamic inventory, you may want to update volatile fields such as `inventory` in a more timely basis. You can use the Real-Time Batch API for this purpose. Here’s a general strategy that you can follow:

* Configure a scheduled feed for daily/hourly updates. This feed should contain all mandatory Product Catalog fields, and omit volatile fields such as `inventory`. The purpose of this feed is to update fields that are more static in nature, and defer the updates of volatile fields using the Real-Time API.
* Use the **Real-Time Batch API** to update volatile fields such as `inventory` when the value changes in your backend, or at a fixed frequency. It is important that the fields updated using this technique are not included in your feed for consistency reasons.

Here’s an example of updates using the Real-Time Batch API:

```
curl \
  -d @body.json \
  -H "Content-Type: application/json"
  {
    "access_token": "<ACCESS_TOKEN>",
    "item_type": "PRODUCT_ITEM",
    "requests": [
      {
        "method": "UPDATE",
        "retailer_id": "SKU1234567",
        "data": {
          "inventory": "1337",
        }
      }
    ]
  } https://graph.facebook.com/<CATALOG_ID/batch
```

Batch API requests are asynchronous. You should check for the request status and its result to make sure that all your updates are successful. See the [Batch API documentation](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/batch-api) for more information.

If you are managing a small number of products, you can also update each product individually using the Graph API directly in lieu of the Real-Time Batch API. Because of Graph API rate-limiting and throttling, this approach is only applicable to a small number of products. The exact number of products you can update using this approach depends on the quota applied to your Facebook app, a good rule of thumb is that you should use the Real-Time Batch API if you are updating more than a dozen of products at a time.

To update specific fields inside a product, you can make the following API call:

```
curl -d "inventory=1337" -X POST
https://graph.facebook.com/<FACEBOOK_PRODUCT_ID>
access_token: PAGE_ACCESS_TOKEN
```

If using the Graph API, use a Facebook product ID. If using the batch API, use your own ID, a.k.a. the `retailer_id`.

### Inventory Thresholds

Another common technique to mitigate against over-selling is to take a cautious approach to inventory allocation. For example, when a particular item is close to running Out-Of-Stock as identified in your warehouse, you can set the inventory level in your Product Catalog to zero. This is effectively an optimization for under-selling, but can help if over-selling is a concern.

If you know how fast each of your products sell, you can partition them into different buckets and apply a different threshold for each bucket depending on its selling profile. Fast selling products will typically need a higher threshold value, while slow selling products can probably use a lower threshold value for being marked Out-Of-Stock.
