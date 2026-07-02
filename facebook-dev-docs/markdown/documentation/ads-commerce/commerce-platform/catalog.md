---
title: "Shops Ads: Enable Heavyweight Buy Online Pick Up in Store (BOPIS) Experience"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog
---

# Shops Ads: Enable Heavyweight Buy Online Pick Up in Store (BOPIS) Experience

Updated: Dec 5, 2025

**Note**: Use this document if your business already participated in or completed the development work for the new simplified Shops ads experience feature.

For instructions on enabling the lightweight BOPIS experience, see [the documentation here](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-lightweight-bopis).

### About the BOPIS Product (BOPIS Omni Feature)

Shops ads for omni-channel business is designed to provide a seamless shopping experience by showing pick-up in-store options directly within Facebook or Instagram post-ad click.

### BOPIS Product Functionality Overview

* Buyers will discover the ad through the Instagram/Facebook app.
* When a buyer clicks the ad, we will take them to the Instagram/Facebook shop PDP surface for consideration. This surface will:
  * Power recommendations such as bestsellers and frequently bought together products to show different products available in your store.
  * Display all product images, rich descriptions, pricing/discount, and variants for buyers to consider.
* Once the buyer likes the products, they can either add items to cart or check out directly.
  * The buyer will be shown the location of stores nearby.
  * The buyer will be able to select the pick-up store.
* When the buyer clicks on checkout, Meta will load the products into the advertiser’s website cart and present a payment/checkout page to proceed with the transaction in the in-app browser.
  * The store picked by the buyer in the step above will be shown on the checkout/cart page.
  * The buyer will need to enter additional information such as pick-up time, etc.
* The buyer can complete the checkout in the in-app browser. The checkout experience is the same as someone checking out products on your website using a mobile web browser.

## Required Components

To integrate the BOPIS feature in your shop enabled with checkout experiences for Shops ads, you will need to support two things:

**Estimated effort: 2 weeks**

* [Store location setup](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog#store-loc-set-up): This is required to allow customers to see nearby stores location.
* [Location inventory setup feed](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog#location-inventory): This is required to correctly map products inventory to stores to allow buyers to pick the ideal pick-up location.

| Component | Advertiser Status | Integration Level of Effort | Stakeholders |
| --- | --- | --- | --- |
| Store Location Setup | Adding stores in Business Manager | **1 Day** | Marketing Team, Feed Partner |
| Creating Local Inventory Catalog for Shops: A Step-by-Step Guide | Pick-up details | **1-2 Weeks** | eComm Team/Feed Partner |
| Checkout Process Integration | Additional field for BOPIS | **1 Day** | eCommTeam |

## 1. Store Location Setup

### Time estimate: 1 Day

You need to set up your store locations by following the steps mentioned in the [Help Center article⁠](https://www.facebook.com/business/help/293042287781370).

o take advantage of the lightweight Shops Ads offsite integration, the easiest way to add stores is in Business Manager.

* Go to [Business Manager⁠](https://business.facebook.com/) and select your business.
* Click on the **All tools** icon in the top left.
* Below the Manage business section, click **Store locations**.
* Click **+ Add stores**.
* Click **Next**.
* Select **Add manually** and click **Next**.
* Fill out the fields below Add a store.
* Click **Save** when you have completed all the fields.

You need to set up your store locations by following the steps mentioned in the [Help Center article⁠](https://www.facebook.com/business/help/293042287781370).

There is also an option to add a feed that can be managed dynamically with [these instructions⁠](https://www.facebook.com/business/help/224119578024377).

## 2. Creating a Local Inventory Catalog: A Step-by-Step Guide

### Time Estimate: 1-2 weeks

#### Prerequisites

* You have a Meta Business Account and a catalog set up

You need to set up your store locations by following the steps mentioned in the [Help Center article⁠](https://www.facebook.com/business/help/293042287781370).

There is also an option to add a feed that can be managed dynamically with [these instructions⁠](https://www.facebook.com/business/help/224119578024377).

### Step 1: Prepare Your Local Inventory Feed

* Ensure your local inventory feed is in the correct format (CSV or XML).
* Verify that your feed includes the required columns:
  * `retailer_item_id` (unique identifier for each item. **This ID should be the same as the one from your shops catalog**)
  * `store_code` (unique identifier for each store location. This should match the store code for the store locations you set up previously)
  * `quantity` (available quantity for each item at the store)

![Local inventory feed field reference: required fields store_code, retailer_item_id, Price and optional fields Quantity, Availability, sale_price, sale_price_effective_date](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/504803260_560535450213201_7509120931253320297_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=yqxC7JFiHNEQ7kNvwGmHUNN&_nc_oc=AdqBudI4x4gC7pACaw8kBG_hqHI5yrktT_VXRcORtd8g9Mnz9lLeemlptNEwosrKLAtYGx8W3wRTFjPmnS62fXSz&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=rO4QWMVKRVUNicx7XPpidA&_nc_ss=7b289&oh=00_AQDLlmTMx30n9hWtjwhWOqUF8f9vL3XBzK9TzmTHhHJK0A&oe=6A607132)

### Step 2: Creating a Local Inventory Catalog

* Creating a new local catalog or updating a pre-existing catalog (separate from your Shop catalog)
  * Go to your Commerce Manager Business Asset page
  * Under the “Catalog” section, click the **+** icon to create a new catalog.
  * Under the “Catalog Type” section, select **Local products or services**, then click next
  * Select **Ecommerce - local products** as your catalog type, then select **Store Location** as the location type
  * In the “Configure settings -> Connect your catalog to a Page” field, select the shop you set up locations for in the previous step. Then click **Create** to create the catalog
* Uploading main feed
  * You can enter the catalog detail page from the previous creation flow or selecting the catalog in your commerce manager main page
  * Go to the data source tab and upload **the feed you used to set up your Shops catalog** as the main feed
* Uploading local inventory feed
  * Once you have uploaded the main feed, click on the “Data sources” tab again, now a section named “Local inventory feeds” should appear.
  * Click on **Add new feed** in the Local inventory feeds section.
  * Upload the local inventory feed you prepared in Step 1.

### Step 3: Associate Your Local Inventory Catalog with Store Locations

* Click on the **Settings** tab on the left column
* Navigate to the Catalog tab, connect your store location page to the catalog under the “Stores” section

### Verification and Troubleshooting

* Verify that your local inventory feed is correctly uploaded and associated with your store locations.
* Check for any errors or warnings in your feed upload report.
* Use Meta’s debugging tools to troubleshoot any issues.

By following these steps, you should be able to successfully create a catalog with local inventory feed.

This option can be used if you have a fixed set of products/SKUs eligible for pick-up in store.

* You need to provide us with the list of products/SKUs that are eligible for pick-up.

## 3. Checkout Process Integration

### Time Estimate: 1-2 weeks

To correctly process orders from your Facebook and Instagram Shops, you will need to process the [checkout URL](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/setup-checkout-url) that will be redirected to your e-commerce site.

Example checkout URL for items with pickup information:

```
https://www.example.com/custom/checkout?products=123:3,124:2,125:1&products_json={"123":{"store_code":"1"},124":{"store_code":"2"}}
```

#### Query Parameters

* `products_json`: An optional JSON structure that contains the `store_code` information for every product in the order.

### Additional Java Script BOPIS Code Snippet

```
/**
 * This method is to extract the order and store code from the query
 * for product and in-store mapping in an order.
 * @param {query} parsed URL query.
 * @return {product_store} Object of product ID and store code.
 * */
function processCheckout(query) {
  const searchData = JSON.parse(query.products_json);
  const product_store = Object.keys(searchData).map(productId => ({
        product: productId,
        store_code: searchData[productId].store_code,
      }));
  return product_store;
}
```

## See Also

* [Shops Ads: Enable Lightweight BOPIS Experience](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-lightweight-bopis)
* [Set Up a Checkout URL](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/setup-checkout-url)
