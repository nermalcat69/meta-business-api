---
title: "Post Purchase"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/test-plan
---

# Post Purchase

Updated: Jun 29, 2026

Use this guide to learn more about common uses for a post-purchase customer experience.

## Enforce refund and cancellation synchronization with Facebook

You can use either the [Refund Order API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_order) or [Cancel Order API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order) to process refunds and cancellations.

### Refund API process

* A customer can initiate a return request in the app and you have the option to email them a shipping label.
* Once they ship the product to you and you receive it, you need to issue a call to the [Refund Order API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_order) to refund the order and give the customer their money back.

In this API call, you also have the option to refund customers for shipping labels if it's part of your policy to refund shipping fees.

### Cancellation API process

If an item goes out of stock before you can fulfill it, you need to issue a call to the [Cancellation API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order). This triggers an email to the customer notifying them that their order has been canceled.

## Verify your email server accepts emails from Facebook IP addresses

Facebook/Instagram communicates with you when you make a sale, a customer has questions, or a dispute claim or chargeback is filed against you. Facebook/Instagram then sends the email to the customer support email you set up in Commerce Manager (**General** tab in "Customer Service" card).

### Integrate third-party customer support platforms

To manage customer communications, define how order transactional emails will be suppressed in your ecommerce platform or order management system (OMS), as Instagram sends transactional updates to the buyers on your behalf.

* Ensure that your email server is configured to accept emails from the @support.facebook.com or @shopping.instagram.com domain.

Your email administrator must allowlist these email origin servers' IP addresses to ensure that your organization does not reject Facebook or Instagram Shopping emails:

* 66.220.144.128/25 (66.220.144.128-66.220.144.254)
* 66.220.155.128/25 (66.220.155.128-66.220.155.254)
* 69.171.232.128/25 (69.171.232.128-69.171.232.254)
* 69.63.178.128/25 (69.63.178.128-69.63.178.254)
* 69.63.184.0/25 (69.63.184.0-69.63.184.126)

* If you're using a third-party platform for customer support (such as Zendesk), ensure that:
  * You preserve the recipient address (for example, `5oguv2ft0e@shopping.instagram.com`).
  * You preserve the Facebook order ID to the reply subject line and body.
  * Your support agent can look up the order details using the Facebook order ID or the `merchant_order_reference` (see [Enforce `merchant_order_reference` immutability](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/orders#merchant-order-ref)).
* You have different queues for different customer communications events (customer inquiries, claims, and chargebacks).

Learn more about [email deliverability](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication) to find more details on how your server should handle emails coming from the platform.

## Insights

To understand the performance of Facebook and Instagram Commerce, insights are a critical piece to help sellers make data-driven decisions. See [Get Insights in Commerce Manager⁠](https://www.facebook.com/business/help/713927982072352?id=1077620002609475).

Several types of Insights Reports are available to help sellers understand how their products and channels are performing:

* Catalog insights to show how the inventory is performing
* Audience insights to show the demographics of the buyers and visitors
* Performance insights to show the traffic and sales breakdown by channels (Facebook vs Instagram)
* Product-tagged content insights to show the attribution of the contents with 28-day click-through, 1-day view-through attribution window with ads preferred
* Discovery insights to show Facebook/Instagram entry points from where visitors discover a Shop

These reports are also downloadable as CSV files for sellers to consume the data internally in addition to the Commerce Manager UI. Sellers can take this data and then combine with what they are using internally (Excel and other analytics software) to inform their commerce strategy on Facebook and Instagram.

## Customer service and returns flow

Customer service requests can be initiated within Instagram and relayed to you via email, or a customer can be directed to your website via URL that you provide.

Define how the customer service team will trigger a refund:

* Via an automated process integrated directly to your OMS
* Manually, via the Facebook shop UI

## FAQs

**Q. Who manages consumer returns?**

A. In the case of returns, the customer can initiate the return from the Instagram surface, but this is routed directly to you to respond to the customer on how they should return and to provide a return label.

**Q: How does the customer initiate a return and what does it look like in the UI?**

A: The customer is able to select Return Item in the Order Details page to initiate a return. There are two ways in which customers can initiate a return. Business handles returns: Navigating from the Order Detail Page to Returns, the customer can learn about how to return their order through the business's website. By going through this return flow, the return communication between customer and business is handled outside of Instagram. The delivered status will change to refunded when the business marks it in their order management system. Return request in Instagram: This allows the customer to initiate a return request that gets sent to the business. The business must respond to the customer via email relay within 2 days. The customer and business can communicate via email relay and work out the return process. Instagram displays a note with the business's delivered status on the Order Details screen that they started a return.

**Q: As a business am I still charged for payment processing with returns?**

A: No. You will not be charged for payment processing for returns.

**Q: What happens when an item a customer purchases is out of stock?**

A: If the item shows as out of stock in the inventory, Instagram won't allow a sale. If the inventory count is inaccurate and the item is not available from the business anymore, the business can cancel the order within the Order Management UI or their OMS.

**Q. Do I need to provide a return label for the customer with every purchase?**

A. In the event of a return, it's up to the business and customer to determine how to ensure the item is shipped back.

**Q. How will I protect myself from refund abuse? What type of documentation do I need to provide to prove my case?**

A. Ensure you are responding quickly and attempt to resolve any customer inquiries in a timely manner and use shipping services that offer tracking and delivery confirmation. In your communications with the customer please state clearly why you believe you are not at fault and provide any supporting evidence to the customer that could substantiate your claim. Meta will also be closely monitoring customer refund requests and purchase activity for suspicious behavior.

**Q: How do refunds work?**

A: When a business receives a return or wants to offer a refund to a customer for any reason, the business initiates the refunds through their OMS or the Facebook Order Management page. This is reflected in the payments dashboard above.

**Q: What happens when there is a refund processed after the payout period?**

A: When a refund is processed after a transaction has been deposited into a business account, Instagram immediately refunds the customer the full refund amount. If there are funds in the business account from other transactions, Instagram reduces the balance in the account by the full refund amount. If there are no funds in the account or if the funds are inadequate, Instagram uses funds from future sales to recover the refund amount.

**Q: Customer data is vital for my business. Will I have access to customer data like email and phone number to use in my CRM? At what cadence will this data be shared?**

A. Instagram shares transaction information, email, and address once a customer purchases from you. Meta terms explicitly state that you cannot use this for remarketing purposes, and only to fulfill the transaction similar to how you would treat a guest checkout. However, Instagram Shopping is built as a brand-first environment, and many of the businesses on Instagram offer loyalty benefits and have strong connections with the consumer. A consumer opt-in experience is being built for the launch. This opt-in would sit as part of the purchase flow, would also display the link to your privacy policy, and is being explored to tie a benefit such as free shipping, 10% off your first order, and so on as part of onboarding. The opt-in would be one-time in that a consumer who has opted in would not have to opt in again. Full account-linking capabilities are not available at launch and there is no two-way sync - For example, consumers cannot use your points shopping on Instagram, and different tiers of members cannot be distinguished, nor can an existing customer be recognized during the purchase experience. The opt-in means that the purchase email the consumer has entered in checkout is flagged as usable by your CRM, marketing, and loyalty activities.

**Q: How do I retarget people who didn't purchase or people who have purchased?**

A: Instagram has a suite of products for businesses - both free and paid - designed to work in complementary ways to help people shop on Instagram. Shopping is an organic feature that serves as a mobile storefront for businesses and lets them include products in their content. With paid, businesses can use brand and direct response ads to reach a targeted audience at a defined moment in time to achieve a specific outcome like raising awareness or driving sales to supplement their organic presence.

**Q. Will you share data from my customers with other brands?**

A. No, Instagram does not share direct data on customers from businesses with other businesses. Instagram follows the same data policy as the other brands, products, and services within Meta technologies.

## Learn more

* [Cancellation and Refund API Reference](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api)
* [Refund Order API, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_order)
* [Cancel Order API, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order)
* [Email Deliverability, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication)
* [Get Insights in Commerce Manager, Business Help Center⁠](https://www.facebook.com/business/help/713927982072352?id=1077620002609475)
* [About Post Purchase Support, Business Help Center⁠](https://www.facebook.com/business/help/2245396562244345?id=353836851981351)
