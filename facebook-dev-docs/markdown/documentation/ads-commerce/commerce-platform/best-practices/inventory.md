---
title: "Commerce Integration for Platform Partners"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/inventory
---

# Commerce Integration for Platform Partners

Updated: Jun 29, 2026

Use this guide to learn about the comprehensive Facebook Commerce Integration process for platform partners who support sellers through onboarding and placing their first order.

## Meta Business Extension (MBE) common use cases

### Missing Instagram account

If you don’t have an Instagram account, but want to sell on Instagram, your account must satisfy our [requirements⁠](https://help.instagram.com/1627591223954487). Unless sellers have an eligible account before starting MBE, they cannot onboard into Instagram Shopping. You can, however, add an Instagram channel later via the [MBE management view](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/guides/business-configurations?hc_location=ufi#feature-mgmt-view), after the Instagram account is fully compliant with our [Seller Access policies⁠](https://help.instagram.com/1627591223954487). Learn more about [Instagram Shopping prerequisites⁠](https://help.instagram.com/1627591223954487).

### Check seller status for onsite or offsite commerce

* Pull the commerce account ID (`merchant_settings_id`) from the [MBE installation details](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/reference).
* Use the [Commerce API status information](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#status) `cta` field.

### Check seller’s setup

To check if a seller set up a Facebook Shop or Instagram account:

* Pull the commerce account ID (`merchant_settings_id`) from the [MBE installation details](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/reference).
* Use the [commerce merchant settings API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#FB-channel) `facebook_channel` field to see if sellers enabled Facebook channel. If the request does not return a channel ID, the channel is not enabled.
* Use [commerce merchant settings API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#IG-channel) `instagram_channel` field to see if sellers enabled the Instagram channel. If the request does not return a channel ID, the channel is not enabled.

### Verify seller setup

* Validate that the setup status is enabled: Check that `shop_setup` is `SETUP` in the [commerce merchant settings API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/distribution/MPApprovalAPI#setupstatus).
* Validate that integrity status is enabled. Use our [commerce webhook](https://developers.facebook.com/docs/commerce-platform/order-management/webhooks) to monitor commerce account status changes. For example, to see if sellers enable new channels, make changes Checkout on Facebook/Instagram to Checkout on another website or vice versa, complete the setup, pass our integrity review, and so on.
* Validate that Instagram Shopping is approved if a seller selected Instagram Shopping channel: Check that the status is `APPROVED` in the [MBE installation details](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/reference) API.

### Change an integration

To change an integration if a seller’s setup changes, take these actions:

| MBE Management Actions | Platform Actions |
| --- | --- |
| Add or remove distribution channel | Shop changes in UI |
| Offsite upgraded to onsite | Shop changes in UI. When Shop is fully set up, start listening for orders. |
| Onsite downgrade to offsite | Shop changes in UI. Pull orders for another hour. Fulfill/cancel/refund orders for another 30 days. |
| Delete Shop | Shop changes in UI. Stop listening for orders 60 minutes after the event. |

### Get help with MBE setup

Both MBE click-through and [MBE management view](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/guides/business-configurations?hc_location=ufi#feature-mgmt-view) have visible Help Center links and “Get help” forms that are directed to Meta support teams. For any issues with setup, ask sellers to use these links to get help with installation.

### Re-onboard sellers

To re-onboard sellers from another platform or from self-serve:

* The seller must request to disconnect from another platform support to avoid conflicts when updating product, orders, or settings.
* After the seller has disconnected from another third-party platform, they can go through the same MBE click-through flow to configure the setup and grant you permissions to manage the commerce account.

### Disconnect or delete an integration

To **disconnect** your integration from the seller setup, it is enough to uninstall MBE. That would not change the commerce account details, except removing permission for your platform to manage the seller commerce account.

To **delete** the integration, the seller can use [MBE management view](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/guides/business-configurations?hc_location=ufi#feature-mgmt-view)**Delete** functionality.

## Commerce merchant settings

During the onboarding process using MBE, sellers follow a series of steps to select and create assets (such as Page, catalog, business, and so on), input payment details for payouts, set shipping preferences, and so on.

Once onboarding steps are complete, a Commerce Merchant Settings (CMS) account is created. This CMS is used to fetch all the details required, such as page ID, catalog ID, and so on.

## Catalog integration

As a platform partner, you must upload all the products of a seller to Facebook to help build shops.
Use these guidelines to integrate your catalog successfully. Learn more about our best practices for a [commerce catalog](https://developers.facebook.com/documentation/ads-commerce/catalog/best-practices) and best practices for [managing your inventory](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/inventory).

### Create a seller’s catalog for a seller by platform

During the onboarding process, the seller selects or creates a catalog. You can fetch the catalog ID from the page ID or CMS ID:

#### From the page ID

```
curl -i -X GET \
"https://graph.facebook.com/v8.0/{PAGE_ID}/?fields=business%2Ccommerce_merchant_settings%7Bid%2Cdisplay_name%2Cproduct_catalogs%7D&access_token={PAGE_ACCESS_TOKEN}"
```

Try in Meta’s Graph Explorer:

```
https://developers.facebook.com/tools/explorer/919711228210423/?session_id=681722656061937
```

#### From the CMS ID

```
curl -i -X GET \
"https://graph.facebook.com/v7.0/{CMS_ID}/product_catalogs?access_token={USER_ACCESS_TOKEN}"
```

Try in Meta’s Graph Explorer:

```
https://developers.facebook.com/tools/explorer/919711228210423/?session_id=456720969002069
```

### Upload products to Facebook

There are multiple ways to populate your catalog. The most common approach is to list all your products and attributes into a flat file using one of the supported formats (CSV, TSV, RSS XML, ATOM XML), and upload it as a catalog feed. Learn more about how to [upload your inventory](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api).

#### Display the status of product uploads to sellers

Learn how to [handle product feed upload errors](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#errors).

#### Update products to Facebook

There are two modes of updates depending on use case:

* **Scheduled feed update**: Sync products every 15 minutes with all updates. This approach helps sync any new products added, updates made to a product by adding images, descriptions, and so on. Learn how to [perform a one-time direct upload](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#direct-upload-feed).
* **Real-time update**: For frequent updates, such as inventory or price, use the [batch API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/batch-api) to prevent overselling.

#### Adopt an inventory allocation strategy for high-demand products and product launches

To protect your sellers from overselling, provide inventory specific to Facebook/Instagram, and not combining with other channels, such as websites. Sellers should have an option to allocate inventory per channel if they choose to.
Learn more about [best practices](https://developers.facebook.com/documentation/ads-commerce/commerce-platform).

#### Integrate fields in the seller’s catalog

Catalog fields are instrumental to the quality of the experience for customers buying products on your Facebook shop or Instagram Shopping channels. Learn more about how to [use catalog fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields#fields), the [universal basic attributes](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields#universal-basic-attributes), and the [supported feed formats](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields#supported-feed-formats). See also [category-specific fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#cat-spec-fields) and [supported catalog fields](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#supported-fields).

## Order management integration

After a seller has been successfully onboarded and their inventory has been uploaded to Facebook, their products are ready to be purchased by consumers. Learn more about [order management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management).

#### Frequency to sync orders

[Read orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_orders) every 5 minutes and acknowledge them. Once you acknowledge and create an order in your platform, immediately update us with the [`merchant_order_reference`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#request-2) via the [Acknowledgement API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledgement-api-reference).

#### Inventory recommendation

If your inventory is zero (0) when you sync an order, acknowledge the order and have negative inventory for the seller to take action on your platform.
If you don’t support negative inventory, issue a [`cancel_order` request](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order) for these orders.

#### Sync canceled orders from Facebook

If a seller doesn’t ship the product within a specified service-level agreement (SLA), Facebook cancels the orders automatically. Sync these orders immediately to prevent sellers from accidentally shipping these orders. Once an order is canceled by Facebook, no further action can be taken on orders, such as shipping.

Learn more about best practices for [orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/orders), [shipping and fulfillment](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/ship-fulfillment), and [post-purchase customer experience](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/post-purchase).

## Learn more

* [Platform Integration](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms)
* [Order Management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management)
* [Order Management, Integration Guide](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/integration)
* [Catalog and Inventory](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog)
