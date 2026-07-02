---
title: "API Integration Setup"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/app-dashboard
---

# API Integration Setup

Updated: Jun 28, 2026

Using the Commerce API, you can integrate your Commerce account with your inventory and order management system programmatically to [manage products and inventory](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog) and [orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management).

## Requirements

* You must be an admin of your [Meta Business Suite⁠](https://www.facebook.com/business/help/113163272211510?id=180505742745347).
* Before you complete the [App Review](https://developers.facebook.com/docs/commerce-platform/setup/app-review), your app can only access test commerce accounts.

## Step 1: Create a developer app

Go to [Meta for Developers](https://developers.facebook.com/apps) and click **My Apps** > **Create App**. You can also use an existing app.

## Step 2: Create a system user

Use access tokens backed by a [system user](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser) to access the Commerce API. An access token obtained from a typical user can be invalidated after a period of time, or if that user changes their Facebook password.

* If you’ve not done so already, [add your app to your Meta Business Suite⁠](https://www.facebook.com/business/help/2199735813629697?id=420299598837059).
* [Add system users to your Meta Business Suite⁠](https://www.facebook.com/business/help/503306463479099?id=2190812977867143). You can also use an existing system user in your business.

## Step 3: Assign assets

[Assign your system user admin access⁠](https://www.facebook.com/business/help/325571851329683?id=2190812977867143) to the following assets in your Meta Business Suite:

* The app you use for the Commerce API
* The test commerce account you created
* The Facebook Page backing your test commerce account
* The catalog connected to your test commerce account

You can only use the system user’s access token to access assets assigned to the system user. Once you set up your production commerce account, make sure that you also assign the system user to the relevant assets.

## Step 4: Generate a system user access token

* On the **Meta Business Suite** > **System User** page, click **Add Assets** and assign the system user as an admin of your app.
* Click **Generate Token** to generate an access token.
* Request the following permissions when you generate the access token:
  * `catalog_management` if you plan to use API to manage catalogs
  * `business_management` if you plan to use API to manage business assets
  * `commerce_manage_accounts` or `commerce_account_read_settings`
  * `commerce_account_manage_orders` or `commerce_account_read_orders`
  * `commerce_account_read_reports` to access the [Finance Reporting API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting)
* Use the [Access Token Debugger tool](https://developers.facebook.com/tools/debug/accesstoken/) to verify that your access token has the required permissions.

### Page access token

Before your app is approved by [App Review](https://developers.facebook.com/docs/commerce-platform/setup/app-review), your app can only access a test commerce account, so make sure you generate a Page access token for the Facebook Page backing your test commerce account.

## Step 5: Connect your app to a commerce account

By default, your shop is configured to automatically move new orders to the `IN_PROGRESS` state. To enable order acknowledgment, you must first [associate your shop with your app](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#order_management_apps). Use this one-time operation if you are planning to fulfill orders using the Order Management API, and it will leave new orders in the `CREATED` state until you acknowledge them.

## Step 6: Start building

* Place test orders on your shop using the [App Dashboard](https://developers.facebook.com/apps/).
* Begin managing your orders placed in your test commerce account using the [Order Management API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management).
* Once you demonstrate your integration on a test account, submit your app for [App Review](https://developers.facebook.com/docs/commerce-platform/setup/app-review) to manage a real commerce account.
* If you are a platform that builds integration for your sellers, you need to build an onboarding flow that automates steps [2](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/app-dashboard#create_system_user) to [5](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/app-dashboard#create_pat) so that you can make API calls on the seller’s behalf. Learn more about [Platform Integration](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms) and [Seller Onboarding](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding).
