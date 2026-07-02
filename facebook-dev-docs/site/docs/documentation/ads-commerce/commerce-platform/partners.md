---
title: "Seller Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners
---

# Seller Integration

Updated: Jun 16, 2025

**NOTE**: This document will be deprecated on **September 4, 2025**. On that date, Shops checkout will no longer be available on Facebook and Instagram. Buyers will instead be sent to sellers' own websites for checkout.

Use this guide to set up a Commerce Platform integration project for sellers who want to sell on Facebook and Instagram, and manage orders via the [Commerce API](https://developers.facebook.com/docs/commerce-api).

The [Commerce API](https://developers.facebook.com/docs/commerce-api) is in a closed, invite-only Beta program. Please work with your Facebook representative to get access if you have been invited to the program.

Fill out and submit the following form to request API testing access: [Commerce Test Account Access Form⁠](https://fb.workplace.com/help/contact/210039548465674)

To learn how to set up an ecommerce platform, see [Platform Integration](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms).

We recommend that you also read our [Best Practices](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices) to help you make the most effective use of the Commerce platform as you design your integration.

## Before You Begin

Before you begin the integration setup:

* Read through our [Concepts](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/concepts) to understand an overview of the user experience, how payments work, and what kind of data is exchanged between your business and the Commerce Platform.
* Review the [out of scope](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners#outofscope) features as you build your integration.
* If you're building a solution for managing commerce on behalf of many sellers, learn more about [platform integrations](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms).

### Out of Scope

Learn more about what's considered unavailable/out of scope as you set up your integration:

* **Integration with payments** – Facebook does not provide payment tokens or credentials as part of this integration. Facebook issues payments directly to seller bank accounts and will pay out every few days.
* **Tax calculation** — Tax amounts are determined by Facebook based on the order destination, [Google product category](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#google-prod-cat), Nexus, and [other information⁠](https://www.facebook.com/business/help/1768310879858675?id=540542143143969).
* **Shipment notifications to customers**. After an order has been shipped, you provide a tracking number and a carrier name to Facebook. Facebook then notifies customers with shipment and delivery updates.
* **Billing addresses** – Facebook/Instagram does not collect customer billing addresses.
* **Customer phone numbers** – Facebook/Instagram does not collect customer phone numbers.

## Step 1: Set Up a Test Environment

* Follow the [Setup](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/setup-checkout-url) guide to set up a test commerce account. Use this account to develop your [catalog integration](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners#catalog) and [order management integration](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners#order_management).
* When you can demonstrate how your App utilizes the Commerce API, submit it for [App Review](https://developers.facebook.com/docs/commerce-platform/setup/app-review).

Before your app is approved via an App Review, your app can only use the API to access test commerce accounts. Once approved, it can then access real, production commerce accounts.

## Step 2: Implement Product Feed, Product, and Inventory Updates

Your test commerce account comes with a test [product catalog](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/overview).

* Set up a [product feed](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api) to periodically update it using a CSV or XML file.
* Make sure that [all required fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields) are added to your product feed. Learn more about [catalogs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog).
* Update [Inventory](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/inventory) at a regular cadence. Facebook stores the inventory count provided and decrement it when customers place orders, until the inventory is updated via feed or API again. Products are marked as "out of stock" when inventory drops to zero.
* Implement the Batch API to keep Facebook's perception of inventory up to date to avoid overselling.

## Step 3: Set Up Order Management Integration

* Place test orders on the Facebook Page connected to your test commerce accounts and use the [Order Management API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management) to pull orders into your ecommerce platform or order management system.
  
* Send order updates to Facebook when the order is processed, using the following operations: **acknowledge**, **mark as shipped**, **cancel**, or **refund**. Facebook then sends email and in-app notifications as order statuses are updated.

The Order Management integration is unidirectional. Facebook does not make API calls to your systems.

Orders can be managed via Facebook's Commerce Manager manually, but the orders may not reflect directly into your ecommerce platform or order management system without an integration. Managing orders both in Commerce Manager and via an API integration could lead to inconsistency; be sure to give permissions to your commerce account only to trained personnel.

## Step 4: Submit Your App for App Review

After you can perform the routine tasks on orders via API in your test commerce account, submit your App for [App Review](https://developers.facebook.com/docs/commerce-platform/setup/app-review).

* Provide a detailed description of how your app uses the requested permissions, how it adds value for a person using your app, and why it's necessary for app functionality.
* Using your test integration and your test commerce account, provide a detailed step-by-step video walkthrough of how your app will use the requested permissions so a Facebook reviewer can confirm it is used correctly and does not violate our policies.

## Step 5: Set Up a Production Environment

* While developing your integration using the test account,
  [set up a production commerce account⁠](https://www.facebook.com/business/help/842191386156027?id=533228987210412) on your existing business's primary Facebook page (which should be connected to your primary Instagram profile, if you have any).
  You can set it up for Facebook or Instagram, and later add additional channels.
* Set your sales channel's visibility to **Staging** initially, so that only your team can make purchases.
* Continue to work on your catalog and order management integration. Use [Best Practices](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices) as a reference for desigining various components of your integration.
* Before going live, connect your production ecommerce systems and test order fulfillment with real shipped physical orders placed by your QA team.

## Step 6: Establish a Cash Reconciliation Process

* Place some actual orders in your production Facebook or Instagram Shop and receive payouts.
* Generate and download your [financial and tax reports⁠](https://www.facebook.com/business/help/1103273406531189?id=540542143143969) in Commerce Manager.
* Define how these reports are distributed to your finance team and have them establish tax and cash reconciliation reporting processes.
* Evaluate whether manual reporting is sufficient or if you need to use our [Finance Report API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting) to automate reports delivery and create custom reports.

## Step 7: Onboard Customer Service

[Customer service](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication) is an integral part of the post-purchase customer experience. After placing an order on Facebook or Instagram, a customer can request help with their order from your customer service team; for example, when their order is late or missing, when the order is damaged, or not as described or if they have another question.

When setting up a commerce account, provide a customer service email address. This email address will receive general questions and return and cancellation requests. Make sure that your customer service team is equipped to handle these requests within 2 business days. If your team is not responsive, a customer may open a [Purchase Protection⁠](https://www.facebook.com/policies/purchase_protection) request with Facebook.

Make sure your customer service team can receive emails from Instagram sent from `@support.facebook.com`, `@support.instagram.com`, and `@shopping.instagram.com`. You may need to allow list these email domains. Learn more about [email usage guidelines](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication#email-usage-guidelines).

## Step 8: Set Up End-to-End Testing

Prior to launch, the checkout experience is only visible to people who have a role on your Facebook Page.

You QA team can place orders via Facebook or Instagram checkout and validate that shipments are flowing through properly.

Prior to end-to-end testing, test individual components (for example, catalog, order management) in isolation as soon as each component is ready.

## Step 9: Go Live

Before you can go live, you must ensure the following:

* Full [end-to-end testing](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners#testing) is completed against test scenarios, including those with shipping physical orders and validating returns
* All teams notified and confirmed readiness
* All test orders are canceled or refunded in the production commerce account

When you're ready to launch, in Commerce Manager, set your sales channels' visibility to **Published**. After launch, you should start receiving orders from real customers.

## Learn More

* [Best Practices](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices)
* [Order Management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management)
* [Customer Communication](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication)
* [Finance Report API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting)
