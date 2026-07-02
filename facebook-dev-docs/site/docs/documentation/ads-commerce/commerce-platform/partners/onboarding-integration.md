---
title: "Partner Integration Basics"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/onboarding-integration
---

# Partner Integration Basics

Updated: Mar 2, 2026

We encourage you to read this guide thoroughly and to integrate with as many elements of our Commerce APIs as possible, ideally, with all of the ones relevant to your use case.

## Developer Role Scope

As a developer, you most likely fit into one of these categories:

* **Seller:** You're part of an ecommerce company that has its own custom technical stack, and want to integrate with Meta's Commerce APIs to enable a single (or a handful of) Shops to operate on Meta's technologies.
* **Tech Provider/Partner:** You're part of an ecommerce platform company, or a company providing software services to existing ecommerce businesses, but doesn't have a Shop by itself (collectively referred to as a commerce tech provider or partner), and you want to integrate with Meta's Commerce APIs on behalf of the multiple shops supported by your platform.

In both categories, the quality of your integration will have a meaningful impact when your customers interact with products and Shops managed with our Commerce APIs. This guide is specifically focused on helping partner developers who want to:

* Integrate with our Commerce APIs.
* Get an overview and the "big picture" of all the elements that go into building a high-quality integration with Meta's Commerce APIs.
* Learn how the integration can lead to positive business outcomes: find new customers, close more sales, and successfully leverage Meta's ads to drive the same outcomes.

## Buyer Role Considerations

Buyers have a very high bar when it comes to making purchase decisions. They seek rich information about the products they're considering buying. They want a good deal, and expect to find the same discounts and promotions on a Shop as they find on the seller's own website. They need timely updates about an order they've placed with accurate shipping, tracking, and returns information.

Providing all of these elements to Meta is key to improving buyer conversion rates with Shops.

## High-Level Developer Flow

At Meta, we allow third party developers to build systems that integrate with our Instagram and Facebook platforms through a collection of Commerce API endpoints, collectively part of the Graph API. Here we describe the high-level developer flow and the components involved in building a high-quality Commerce API integration.

### Prerequisites

* You must have a business setup and [verified](https://developers.facebook.com/docs/development/release/business-verification) on Meta
* Required commerce contracts must be signed, including the Tech Provider Amendment and [Supplemental Terms](https://developers.facebook.com/terms?helpref=hc_fnav)
* You must be familiar with the concepts of [Graph API](https://developers.facebook.com/docs/graph-api/overview), which is the primary way for reading from and writing data to the Meta commerce platform

### Step 1: Create a Developer App

To make requests to these Graph API endpoints, you first need to [create an app](https://developers.facebook.com/apps/create/) in the [Meta for Developers](https://developers.facebook.com/) portal. In this context, an app represents a collection of capabilities that your third-party software is granted access to on Meta's systems. Every API call you make to Meta's systems is associated with this app and your capabilities determine which API calls your software has access to. This app is associated with your business entity on Meta. Meta's data model is designed such that all of the assets you create to run your business on Meta are owned by this business entity object. This same business entity object that owns your app can also own your Facebook Page, Instagram account, ad account, and product catalog.

### Step 2: Create Access Token (Using Test Account)

As part of the app approval process, you need to provide an access token with each call when making API calls. This access token allows your app to access Meta's platforms on behalf of a user. Access tokens are the equivalent of digital keys that keep a user logged in to Facebook so they don't need to re-enter their password every time your third-party software needs to access Meta's platforms on behalf of that user.

As a partner developer who wants to build a commerce integration where you'll manage multiple shops, you'll be required to store multiple access tokens—one for each shop you support that's selling on Facebook and Instagram channels.

To begin, [create a test commerce account](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/get-started), associating the assets and generating a corresponding access token to be used for developing the commerce API integration.

We recommend using access tokens backed by a [system](https://developers.facebook.com/docs/marketing-api/system-users) user to access the Commerce API as access tokens obtained from a typical user can be invalidated after a period of time, or if that user changes their Facebook password. System users represent servers or software making API calls to assets owned or managed by a [Business Manager](https://developers.facebook.com/docs/business-manager-api). For step-by-step instructions, refer to the [API integration setup](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/api-setup).

### Step 3: Build Commerce API Integrations (Using Test Account)

Begin integrating with the [catalog](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/catalog-integration), [order management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/order-integration), and [promotions (offers)](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/build-offers-integration) APIs in parallel using the test commerce account created in step 2:
Integrate with the catalog APIs to set up and operate a high-quality, up-to-date catalog that powers the purchase experience and influences the buying decisions.
Integrate with the order management APIs to manage the life cycle of the orders placed by buyers on Facebook and Instagram channels.
Integrate with the promotion APIs to synchronize different types of promotions and handle purchases and refunds in the presence of promotions.

Learn how to [integrate with these APIs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/onboarding-integration#int-qual-bar) to meet our Shops quality bar.

### Step 4: Submit App for Review

App Review is an integral part of the [App Development](https://developers.facebook.com/docs/development) process. You initiate an app review by requesting individual permissions and describing how the requested permissions will be used by your app to power the businesses you support. This process enables us to verify that your app uses our products and APIs in an approved manner. Learn more about the [App Review process](https://developers.facebook.com/docs/commerce-platform/setup/app-review).

### Step 5: Implement Flow for Onboarding Sellers onto Meta Commerce

Implement the best path for onboarding your sellers onto Meta Commerce. At the end of this flow, an access token is generated for each seller you support, which you need to store and use when making API calls on behalf of that seller.

Learn detailed instructions on how to [create an ideal onboarding integration](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/onboarding-integration) that meets our Shops quality bar.

### Step 6: Refine Commerce API Integration (Using Production Account)

Refine your integration to handle the different edge case scenarios and to gracefully handle failures. Understand and adopt the recommended integration best practices outlined in the [best practices guide](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/platform). Finally, test your integration with real orders.

![Chevron flow of six commerce integration stages: onboarding, catalog, order, finance, surface distribution, scale and support](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/653706491_1459945309197452_688570635567837202_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=axSTxcXwT44Q7kNvwFcUT5o&_nc_oc=Ado6cL6fZFZNkk0qxia6gB8gQlQFovbE-8BrWc7Z2CMmHDi6aXK2cMs_EEh6b7hOj57Wmf9Ex1KcMZ0w9aJuyQek&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=1RzaU1hha3wHdm_KaC5aag&_nc_ss=7b289&oh=00_AQB5Sl-cgG-VibvJ7dX0mUsa1hOMPSDrMUFtRBmDrhuuEQ&oe=6A607420)

## Integration Quality Bar

The table below lists the seller Jobs To be Done (JTBDs) grouped by different categories, their priority (0 being the highest), whether they are Meta-specific or applicable to other channels, the associated Meta Commerce integration quality bar requirements and potential enhancements.

| Category | Seller's Jobs To Be Done (JTBDs) | Priority | Multichannel / Meta-specific | Quality Bar: Min Requirement | Quality Bar: Enhancements |
| --- | --- | --- | --- | --- | --- |
| **Onboard and Manage Shops** | Onboard onto Shops | 0 | Meta-specific | Third party must use [MBE](https://developers.facebook.com/docs/facebook-business-extension/fbe) |  |
|  | View and resolve issues with Shop (including BI issues) | 0 |  |  |  |
|  | View insights and recommendations for Shop | 1 | Meta-specific | N/A |  |
|  | Customize Shop's look and feel | 2 | Meta-specific | N/A |  |
|  | Respond/communicate with Meta buyers | 0 | Both (many sellers prefer using Messenger/IGDM/WhatsApp to respond to customers, while others will rely on 3P tools for customer comms) | N/A |  |
| **Manage Catalog** | Add/remove/edit products to maintain a rich, fresh catalog | 0 | Multichannel | Third party must synchronize product catalog to Meta and handle errors Use a scalable synchronization mechanism for non-volatile fields (full catalog sync every 24 hours and delta sync every 1 hour) Synchronize high volatility field (inventory and pricing) updates in near real-time (at least every 15 mins) | Third party should synchronize product set collection to Meta |
|  | View and resolve product issues specific to Meta (eg BI flags) | 0 | Multichannel (though the actual issue resolution can be on a Meta surface, such as BI appeal) | 3P must surface diagnostics with clear Call-To-Action (CTA) to sellers |  |
|  | Review and use Community Content (UGC) | 1 | Meta-specific | N/A |  |
| **Merchandise / Run Shop Ads** | Run Shop Ads | 0 | Meta-specific | Third party must have sellers setup and send back ads signal via Pixel | Third party should have sellers setup and send back ads signal via CAPI |
|  | View performance and analytics (ads) | 0 | Multichannel | N/A |  |
|  | View performance and analytics (organic sales) | 1 | Both (while there are tools that can aggregate high-level metrics, deeper organic sales metrics we provide via CM today) | N/A |  |
|  | Run promotions (offers) | 0 | Multichannel | Third party must process orders (fulfillment, cancellations, refunds) with associated Meta-funded discounts and the following standard Seller-funded discounts: Discounts allocated to individual items in an order Discounts allocated across items in an order (potentially with remainders) Free shipping discounts Buy X Get Y style discounts  If 3P is the source of truth for discounts: 3P must synchronize standard discounts to Meta using the Offers API (currently a gated capability) Else: 3P must surface Commerce Manager redirect link to sellers to synchronize all standard discounts to Meta |  |
|  | Make organic, product-tagged posts | 2 | Meta-specific | N/A |  |
| **Manage Payments** | Manage payment details for onsite checkout | 0 | Meta-specific | Third party must use [MBE](https://developers.facebook.com/docs/facebook-business-extension/fbe). |  |
|  | Get paid/process refund payments | 0 | Multi-channel |  | Third party should expose the financial reports obtained from Meta |
|  | Get paid/process refund payments | 0 | Multi-channel |  |  |
|  | Handle chargebacks | 0 | Both |  |  |
|  | Generate tax reports and reconcile sales | 0 | Multi-channel |  |  |
| **Process and Fulfill Orders** | Manage orders as they come in | 0 | Multi-channel | Third party must receive and ack coming from Meta to OMS |  |
|  | Fulfill orders | 0 | Multi-channel | Third party must synchronize order states (fulfill, cancel, refund) from OMS to Meta |  |
|  | Handle buyer and seller initiated returns and refunds | 0 | Multi-channel | 3P must synchronize order states (fulfill, cancel, refund) from OMS to Meta | 3P should process buyer-initiated returns through Meta |
