---
title: "Catalogs overview"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/upload-inventory
---

# Catalogs overview

Updated: Jun 18, 2026

WhatsApp catalogs let businesses showcase products and services directly within customer conversations. Instead of redirecting customers to external websites or apps, catalogs let customers browse products within the chat — customers can view products, explore options, and place orders without leaving WhatsApp.

## What is a catalog

A catalog is a structured inventory of products or services that you upload to Meta and connect to your WhatsApp Business account (WABA). Each catalog item includes details like name, description, price, images, and availability. Once connected, this inventory becomes the foundation for all commerce interactions on WhatsApp.

Catalogs support two categories of items:

* **Products**: Physical or digital goods with attributes like price, SKU, and images.
* **Services**: Offerings such as appointments, consultations, or subscriptions.

## How catalog commerce works

WhatsApp catalog commerce involves four stages:

* **Inventory upload** — You upload your product data to Meta through the [Commerce API](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/upload-inventory) or the [Meta Commerce Manager⁠](https://business.facebook.com/commerce/). This creates the catalog that powers all downstream interactions.
* **Commerce configuration** — You configure commerce settings for your business phone number, including whether to enable cart functionality and catalog visibility. See [Set commerce settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/set-commerce-settings) for details.
* **Product sharing** — You share products with customers using different message types — catalog messages, single-product messages, multi-product messages, or carousel formats. See [Share products](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products) for all available formats.
* **Customer responses** — Customers browse products, ask questions, and submit orders. You receive these interactions as [webhook notifications](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/receive-responses) containing order details and product inquiries.

## Key capabilities

### Product sharing formats

WhatsApp supports several message formats for sharing catalog products, each suited to different use cases:

* **Catalog messages** display a thumbnail of your full catalog, inviting customers to browse all available products.
* **Single product messages** highlight one specific product with its image, price, and description.
* **Multi-product messages** present a curated selection of up to 30 products organized into sections.
* **Product carousel messages** show products in a horizontally scrollable card format.

### Shopping cart

When cart functionality is enabled, customers can add multiple products to a cart while browsing your catalog and submit a single order. The cart persists across the conversation, allowing customers to continue browsing and adding items before checking out.

A shopping cart:

* Is unique to a customer/business chat thread on a specific device: Only one cart is created per chat thread between you and a customer, and carts do not persist across multiple devices. Once a cart is sent, the customer can open another cart with you and start the process again.
* Has no expiration date: The cart persists in the chat thread until it is sent to you. Once sent, the cart is cleared.

Customers can add up to 99 units of each single catalog item to a shopping cart, but there is no limit on the number of distinct items that can be added to a cart.

Once a cart has been sent, no edits can be made. Customers can send a new cart if they need new items or would like to change their order. You cannot send carts to customers.

![Shopping cart experience example](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/561408347_1339318044593513_2061068222102028456_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JKEMcqlrYDMQ7kNvwEhvdtp&_nc_oc=AdqOJ9zy0sQPSH02cBSMKGIQaEgfbB0KNzhGLAlTMRhQyfxOOpNrSxPc5OX8Qb4wRpcFrZOg5V6jX5NPenLxrgkO&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=83ORsRDvGtPGE1aOqyIlCg&_nc_ss=7b2a8&oh=00_AQDtbDftr7CJBGasSLq2gewVLfbvhVmGF87I7ciM0BTzZw&oe=6A605146)

![Expected behavior when item state changes in shopping cart](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/560133096_1339318051260179_4704152617818003366_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=w4uvB4C6nYAQ7kNvwGmt2yG&_nc_oc=AdpetrbyOUjTac52OngFPpt37rQiY2aiweueuC9fkl5ocdu2MoUDdjtUmXBLUkEMIlVJWIeXe4I9VrN1KMiGuSfA&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=83ORsRDvGtPGE1aOqyIlCg&_nc_ss=7b2a8&oh=00_AQBqkcDsYF3ZetRQdT-R-GUE-a4VoO8NJReaEf2k1w1mAw&oe=6A607297)

*Shopping cart experience example and expected behavior for item state change.*

## Policies

Never send messages that violate the Commerce and Business Policies. Additionally, multi-product, and single-product messages are subject to the existing enforcement and data sharing rules for product catalogs:

* **India compliance**: Businesses based in India must [comply with all online selling laws⁠](https://www.facebook.com/help/1104628230079278). Use the [Business Compliance API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-compliance-information-api) to retrieve compliance details for a business phone number.
* **Rejection at product catalog level**: WhatsApp automatically reviews items added to a catalog connected to a WABA. If a policy-violating item is added, the product is flagged and the business is directed to the WhatsApp Commerce Policies.
* **Reporting options at the product catalog level**: Users can report a specific product they receive through a message. If a user reports a product, it is reviewed for violations.

Businesses can appeal for disapproved items directly in the [Meta Commerce Manager⁠](https://business.facebook.com/commerce/).

## Limitations

Unlike product messages sent via the WhatsApp Business app, messages sent via the Cloud API currently do not display a shopping cart icon in the chat thread header.

## Product updates

To update an item, change its properties in your catalog. Depending on the updated property, this is how messages that showcase that product are handled:

| Updated Property | Update Process |
| --- | --- |
| Product’s price, title, description, and image. | * You send a product message containing product A. * You update product A’s properties in your catalog. * The screens that display that product are updated as soon as the customer client learns about the change from the server. |
| Availability change | * You send a customer a product message containing product B. * You sell all units of product B available. Then, you update your catalog saying that product B is no longer available. * If a customer has already added product B to a cart, the item will be removed from the cart. The shopping cart displays a dialog saying “One or more items in your cart have been updated”. * If a customer has not added product B to the cart, the product message now shows the item as unavailable. |
