---
title: "Test Plan"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication
---

# Test Plan

Updated: Jun 26, 2026

This test plan is for blackbox user acceptance testing.
To test the checkout experience on Instagram make sure to install the latest Instagram app on iOS or Android.

## 1. Facebook page and shop

As a Facebook user, visit the seller's Facebook page where the shop for Instagram was set up. The **Shop** tab should not be visible in the page's left navigation menu.

You must not be an administrator of the page; otherwise, you will see the shop even though it was unpublished.

## 2. Instagram PDP

As an Instagram user, open a PDP on Instagram.

* Open a PDP of the same SKU on the seller's website. Compare product details on IG with product details on the website:

* name, price, description (note: description on IG may not have all product details on the website's PDP. additional information may be added to the IG description field, such as product dimensions and country of origin) should match.
* variant names should match (if applicable).
* stock status for each variant should match (note: IG inventory updates strategy may not be real-time, discrepancies are possible but should be kept to a minimum).
* if a product is on sale on the website, it should also have a sale price on Instagram, with the regular price in strikethrough.

2.2 Product description text should be well formatted (no extra spacing, punctuation is correct) and informative (may contain information such as item size, volume, and origin).

2.3. Tap on "Shipping and Returns". You should see the "This item is covered with Purchase Protection" copy if the item's category is eligible for Purchase Protection.

2.4. For a final sale item, under "Shipping and Returns" you should see the following copy "This {seller display name} item can't be returned".

## 3. Instagram checkout

As an Instagram user:

* Select a product, tap **Checkout on Instagram**, proceed to checkout.
* Verify the checkout page displays the shipping options configured in the shop settings.

## 4. Marketing

As Instagram user:

* Select a product, tap **Checkout on Instagram**, proceed to checkout. Marketing opt-in should be visible on the Instagram checkout page (note: you should not previously opt-in).
* Place an order, do not opt-in in receiving marketing content in checkout. Monitor email inbox for a few days. You should not receive any marketing emails from the business.
* Place an order, opt-in in receiving marketing content in checkout. Monitor email inbox for a few days. You should start receiving marketing emails from the business.

## 5. Order fulfillment

As Instagram user:

* Place an order in Instagram app, receive an order confirmation email from Instagram. Order confirmation email should contain the seller order ID.
* Place an order on Instagram. Monitor your email inbox. The following transactional emails should be received from Instagram, not from your business:

* order confirmation
* shipping confirmation
* delivery confirmation
* order cancellation
* return complete confirmation

* Place an order on Instagram. After placing the order, the order status on IG should be updated to "Shipped" within 3 business days or within the handling time you specified on the product through its [shipping settings⁠](https://www.facebook.com/business/help/211403042968780?id=353836851981351).
* Once the order is shipped, the tracking number should be visible in order details on Instagram. Check you have transaction on your card/PayPal that is used for purchase.
* You should be able to look up the shipment using a carrier's tracking service with the order tracking number attached in order details on Instagram.
* Place an order for each shipping option and validate each order is delivered within a promised timeframe for each option.
* Once the order is delivered to you, validate the order invoice to make sure the payment method name is valid; order totals match with totals in the IG app; product name, description, image matches with the seller website.
* Place an order with a two-line shipping address. When the order is delivered, verify the address on the invoice – it should contain the line two.
* Place an order with a non-free shipping option. Once the item is delivered to you, return it and receive a refund. The shipping amount (including shipping tax) should not be refunded.
* If your business supports in-store returns for Instagram orders, return the Instagram order in store and receive a refund.
* Place an order with multiple items. Verify all items are delivered.

## 6. Customer service

As Instagram user:

* Initiate a help request in Instagram app. Receive a response email from the Customer Service team within 2 business days.
* Initiate an order return request in Instagram. Receive a response email from the Customer Service team within 2 business days. If the Customer Service team attached a return label (as a PDF or image file) in the response email, verify that the attached file can be opened for printing.
* For a multi-item order, return one item. Receive a refund for that returned item.

As a customer service associate:

Receive a help request email from an Instagram customer. The email should contain both Instagram and seller order IDs.

## 7. Reporting

As a finance associate:

* Generate and download a tax report in the shop UI.
* Generate and download a cash reconciliation report in the shop UI.
