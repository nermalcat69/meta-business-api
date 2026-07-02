---
title: "Shops Ads: Enable Lightweight Buy Online Pick Up in Store (BOPIS) Experience"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-heavyweight-bopis
---

# Shops Ads: Enable Lightweight Buy Online Pick Up in Store (BOPIS) Experience

Updated: Jun 11, 2025

**Note**: Use this document if your business already participated in or completed the development work for the new simplified Shops ads experience feature.

For instructions on enabling the heavyweight BOPIS experience, see [the documentation here](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-heavyweight-bopis).

### About the BOPIS Product (BOPIS Omni Feature)

Shops ads for omni-channel business is designed to provide a seamless shopping experience by showing pick-up in-store options directly within Facebook or Instagram post-ad click.

### BOPIS Product Functionality Overview

* Buyers will discover the ad through the Instagram/Facebook app.
* When a buyer clicks the ad, we will take them to the Instagram/Facebook shop PDP surface for consideration. This surface will:
  * Power recommendations such as bestsellers and frequently bought together products to show different products available in your store.
  * Display all product images, rich descriptions, pricing/discount, and variants for buyers to consider.
* Once the buyer likes the products, they can either add items to cart or check out directly.
  * The buyer will be shown the location of stores nearby.
* When the buyer clicks on checkout, Meta will load the products into the advertiser's website cart and present a payment/checkout page to proceed with the transaction in the in-app browser.
  * The buyer will need to pick the store to pick up the order from.
  * The buyer will need to enter additional information such as pick up time.
* The buyer can complete the checkout in the in-app browser . The checkout experience is the same as someone checking out products on your website using a mobile web browser.

## Required Components

To integrate the BOPIS feature in your shop enabled with checkout experiences for Shops ads, you will need to support two things:

**Estimated effort: 2 days**

* [Store location setup](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-heavyweight-bopis#store-location-setup): this is required to allow customers to see nearby stores location.
* [Product pick-up eligibility](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-heavyweight-bopis#pick-up-eligibility): this is required to identify if a product is eligible for pick-up or not.

| Component | Advertiser Status | Integration Level of Effort |
| --- | --- | --- |
| Store location setup | Adding stores in Business Manager | **1 Day** |
| Product pick-up eligibility | Pick up details | **1 Day** |

## 1. Store Location Setup

To take advantage of the lightweight Shops Ads offsite integration, the easiest way to add stores is in Business Manager.

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

## 2. Product Pick-Up Eligibility

### Option 1: Using Commerce Manager Product feed

* Access the Commerce Manager:
  * Go to [business.facebook.com](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/www.business.facebook.com) and log in with your business account credentials.
  * Click on the **Commerce** tab from the top navigation menu.
* Select the Catalog:
  * In the Commerce Manager, click on the **Catalogs** tab from the left-hand menu.
  * Select the catalog you want to add a data field to from the list of available catalogs.
* Navigate to the Data Sources Tab:
  * Within the selected catalog, click on the **Data Sources** tab from the top navigation menu.
  * This will take you to the page where you can manage data feeds and other data sources for your catalog.
* Add a New Data Feed:
  * Click on the **Add Items** button and select "Data Feed" as the upload method.
  * Choose the type of data feed you want to create (for example, Google Sheets, CSV file, etc.).
  * Follow the prompts to set up your data feed, including scheduling updates if desired.
* Map the Data Field:
  * Once your data feed is created, you'll need to map the new data field to an existing attribute in your catalog.
  * Click on the **Mapping** tab within the data feed settings.
  * Select the attribute you want to map the new data field to from the dropdown menu.
  * Enter the exact name of the column header from your data feed that corresponds to this attribute.
    * **IMPORTANT**: You need to add a new field named `product_delivery_methods` with accepted values ["shipping", "local\_pickup"] per product, in your product feed.
* Save Changes:
  * After mapping the data field, click **Save** to apply the changes.
  * Your new data field should now be added to your seller's catalog and ready for use in product listings.

### Option 2: Using Manual Upload

This option can be used if you have a fixed set of products/SKUs eligible for pick-up in store.

* You need to provide us with the list of products/SKUs that are eligible for pick-up.

## See Also

* [Shops Ads: Enable Heavyweight BOPIS Experience](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-heavyweight-bopis)
