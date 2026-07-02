---
title: "Customer Communication"
source_url: https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/ads-cli-overview
---

# Customer Communication

Updated: Jun 16, 2025

**NOTE**: This document will be deprecated on **September 4, 2025**. On that date, Shops checkout will no longer be available on Facebook and Instagram. Buyers will instead be sent to sellers' own websites for checkout.

This guide describes customer communication and service, a focal part of the post-purchase customer journey. It also provides information on the mail servers used to send emails so that you can ensure these emails are deliverable.

## Customer Service

Buyers can contact you [via email](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/ads-cli-overview#transactional_order_emails) to get help with their orders. They initiate this support flow by tapping the "Get Help" option in their order details. They can provide additional information to better qualify their request, and attach a photo. This information will be forwarded to the customer support contact email address registered in your shop set-up. You must respond to this email within 2 business days.

The customer support email is associated with a Facebook or Instagram domain, not with the buyer's personal email address. Customer support emails are relayed through our systems, as we need to be able to monitor communications between buyers and seller to offer [Purchase Protection](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/ads-cli-overview#purchase-protection).

### Purchase Protection

If an item meets Facebook's eligibility requirements for Purchase Protection, buyers see a "Covered by purchase protection" notification in the Product Detail page for the item.

#### Resolve Issues

* Customers should try to resolve issues with you first, by initiating a customer support request.
* If they can't resolve the issue with you directly, they can file a claim with Facebook or Instagram.
* We will review the claim to determine whether it qualifies for Purchase Protection, and issue a refund for the full purchase price of the item and shipping costs if the claim is approved.

Read our [Purchase Protection policy⁠](https://www.facebook.com/policies/purchase_protection) to learn more.

### Customer Service & Claims

From Facebook or Instagram app, a customer can request order cancellation or return, reach out for help if their order is late or missing, damage or not as described, or it they have another question. These inquires will be directed to you through the customer service contact email address you provided in [Commerce Manager⁠](https://www.facebook.com/commerce_manager/).

As much as possible, we will connect the customer directly to your customer service team. We only get involved in disputes if you cannot reach a resolution directly with the customer or if the customer doesn't recognize their purchase.

To follow our [Seller Policies⁠](https://www.facebook.com/legal/merchant_policies), you must respond to customer inquiries quickly and attempt to resolve issues within 2 business days.

While we maintain an internal record to monitor the service quality of sellers, it's your responsibility to keep track of customer service requests.

---

### Case Emails

A new support case is created when a customer requests help from the Facebook or Instagram app with one of the following reasons:

* My order is late or missing
* My order is damaged or not as described
* I have another question

Once the request is submitted, your customer service team will receive a case email. For example, an Instagram **case** email format:

```
From: Instagram Support <case++{unique case number}@support.instagram.com>  
To: {customer service contact email address}  
Subject: Message from {instagram username}
```

---

### Claim Emails

If the customer service team is not responding to the customer's case email within 2 business days, the customer can follow up and request help from Facebook/Instagram. This will create a new order claim that will generate a new request to both Facebook/Instagram and your customer service teams.

A new claim is also created if a customer requests help with the following reason: "I didn't make this order".

For example, an Instagram **claim** email format:

```
From: Instagram <no-reply@shopping.instagram.com>  
To: {customer service contact email address}  
Subject: A claim has been opened for order #{order number}
```

Your customer service team will receive an email when a new claim is created. Facebook/Instagram will be reviewing the claim and will contact you if needed. You don't have to respond to the claim email unless you requested by Facebook/Instagram support associate.

## Email Usage Guidelines

Unless the buyer has opted-in to share their email address with you for marketing purposes, you are required to restrict the use this email address for the purpose of fulfilling orders and providing customer service only.

### Order Email Deliverability

Customers receive order updates via app notifications and via emails.

Facebook or Instagram sends customer communication emails and transactional order emails in the following events:

* Order confirmation
* Shipping confirmation
* Delivery confirmation
* Order cancellation
* Return complete confirmation

Although emails are sent by Facebook or Instagram, we feature your business prominently to make the seller visible.

In addition to emails above, we may also notify a customer via email if their order shipment is delayed.

We recommend that you suppress respective transactional order emails on your end to keep the experience consistent for all customers within our platform.

The order emails are sent to customers from:

* `Facebook <commerce-no-reply@support.facebook.com>`
* `Instagram <no-reply@shopping.instagram.com>`

All order emails contain a Facebook/Instagram order number in the email body. Your internal order number can be also added to order emails (except order confirmation) and displayed right below the Facebook/Instagram order number. For your internal order number to be displayed, you must provide it with the order acknowledgment API call in the `merchant_order_reference` field.

It is essential that emails sent by Facebook or Instagram are not blocked by your organization's email infrastructure. This ensures that your team can handle the messages from your customers.

If you're not receiving emails from Facebook/Instagram, check that you haven't changed your email notifications settings. If the issue persists, you should contact your IT department. They will likely be able to perform a check of the controls described in this guide.

---

### Check Email Client Spam Filters

Even if your mail host accepts emails, it's still possible that email clients (such as Microsoft Outlook) will mark an email as "Spam" or "Junk". In this case, a person must check their Spam or Junk folder to find the email.

Both Facebook and seller order numbers are added to an initial case email your customer service team receives.

Make sure your team can look up an order by the order number from the first email in the thread before contacting the customer requesting their order number.

If possible, your email administrator should centrally push a rule to all email clients adding the following domains as Safe Senders. Make sure your Customer Service can receive emails from the following domains:

* `@support.facebook.com`
* `@commerce.facebook.com`
* `@support.instagram.com`
* `@shopping.instagram.com`

[Add the domains to the allow list](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication) on your end if necessary.

**IMPORTANT**

If an anti-spoof policy is not in place, emails are rejected, which can cause a seller to be unable to respond to buyer return requests and questions. We support Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting & Conformance (DMARC) anti-spoof policies. As a partner, you must implement at least one of these policies.

---

### Email Servers

Your email administrator must add these email origin servers' IP addresses to your allow list to ensure that your organization does not reject Facebook or Instagram Shopping emails.

```
66.220.144.128/25 (66.220.144.128-66.220.144.254)  
66.220.155.128/25 (66.220.155.128-66.220.155.254)  
69.171.232.128/25 (69.171.232.128-69.171.232.254)  
69.63.178.128/25 (69.63.178.128-69.63.178.254)  
69.63.184.0/25 (69.63.184.0-69.63.184.126)
```

---

### Verify Email Origin and DKIM

To prove that emails coming from these domains actually originate from Facebook, we use the industry standard technology [DomainKeys Identified Mail⁠](http://www.dkim.org/?fbclid=IwAR30mRIa29He35u71WZuCovlrQEnfUQArxcm4Ra2MtmTgvp7Mux711cnVAI) (DKIM).
Your email administrator should configure your mail host to verify the DKIM record of all emails to ensure that you do not accept spoofed emails.

---

### Configure Microsoft Exchange

With Microsoft Exchange, you can add our email domains to your allow list using the `Set-MailboxJunkEmailConfiguration` Powershell cmdlet.

## Cancellations & Returns

A customer can only cancel an order within 30 minutes of their purchase in the Facebook or Instagram app. If it's too late to cancel the order, a customer may request a return within 30 days of the purchase, where available. Sellers can cancel customer's order after 30 minutes of the purchase, assuming the order has not been marked as shipped.

Per [our returns policy⁠](https://www.facebook.com/business/help/612828795802804), sellers must accept returns for a minimum of 30 days (except for "final sale" items). The return period can be specified in your Commerce Manager settings. The return policy for a product is visible to a customer on the order confirmation.

## Edge Cases

### Re-Ship / Exchange

If a customer claims they didn't receive their shipment or if their items were damaged on delivery you can choose to re-ship the order as a replacement. The re-ship scenario is not yet supported by Facebook Commerce Platform. It's your responsibility to notify the customer via email and communicate with them.

### In-Store Returns

You can allow your customers to return items they ordered in-store. The refund still must be issued by Facebook because Facebook captured the payment. You still need to send a refund API request or refund using the self-serve Commerce Manager UI.

## Sample Emails

Below you can see example email correspondence between the customers, the partner and our platform during various stages of order fulfillment.

### **Order Confirmed Email**

![Instagram order confirmation email with 'Thanks For Your Order', item details, price summary, and delivery information](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/586175432_1369493374909313_846862922236389241_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=TqVsQRiJKckQ7kNvwFef0Fb&_nc_oc=Adoq_UQTNLEJ0wk-wzR0JFEfOL7aT4wwIIDrI2VIgBr9RQcRmSropamht16Q_RFhWthXGwK1w4CLzvdlUNiunmpb&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=_0iC2W3ozizoXc3LsnazrA&_nc_ss=7b289&oh=00_AQCsJMuKMElt-ULgGqJ9DzISejVaK6Gr2IeBXYiWW8QhcQ&oe=6A607B80)

### **Order Shipped Email**

![Instagram 'Your Order Was Shipped' email showing item, quantity, order number, and delivery information](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/584683441_1369493084909342_2055296466691497278_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mJ7Dczkf-JEQ7kNvwFUxBEl&_nc_oc=Adr7JZRvHkL2Sqmuog5f1UV9HpuP40F7RSiBTvgy6RkxXhRyJcTT5TPbuCi0qIGFdvvCQlfvDfJ4AALEDBJBm_n0&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=_0iC2W3ozizoXc3LsnazrA&_nc_ss=7b289&oh=00_AQBChEePqEWmbUEHlSx42Qbrn4A16Y_rd1veyqr5QfLkOA&oe=6A607E37)

### Customer Support Question via the App

![Instagram customer support email forwarding a buyer question with order details to the seller for a 2-day reply](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/585888504_1369493121576005_3616252482782198204_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=t2Xq2nrjqL0Q7kNvwGiSSaT&_nc_oc=AdrHiEq6yAdsdYyjIl2K06fnJ14hRPh__fS0ZjeUZ9n3WIWpFkjbIY4Ck2CNLBWX14TP8IHQuZDT1bt2WeIozEBn&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=_0iC2W3ozizoXc3LsnazrA&_nc_ss=7b289&oh=00_AQBhwxYYMPL8vSzXd8ub3VdodBbZLmcCzsM-sddzqH8PAw&oe=6A607310)

## FAQs

#### Q: Can we connect our support systems with yours or is everything through Instagram? Through email?

A. During the setup of your Commerce Manager, you will input a customer service email address that customers can reach you at for any issues pertaining to their order. We ask that you respond to customer support inquiries through this email.

#### Q. Where can customers look up their orders?

A. The customer can look up order status in the Instagram app. There will be a tab from the navigation bar where orders will be listed with most updated status. For each order, we ask that you send a tracking number from which we pull tracking events to display to the consumer once they click into detail.

#### Q. What type of customer support does Instagram provide?

A. We will direct the customer to you for customer support. The customer can cancel an order, return an order, contact your business to solve an issue, and initiate a purchase protection claim (dispute) from the Instagram app. These will be directed to you through the customer support email that you provide as part of onboarding. As much as possible, we will connect the customer directly to your support team. We only get involved in disputes if you cannot reach a resolution directly with the customer.

#### Q. How do you prevent against customer fraud?

A. We closely monitor incoming purchases and have the ability to outright block or pend transactions we consider suspicious for further review. This occurs prior to the order being sent to the business for fulfillment. Facebook runs various risk and fraud checks across the FB family of apps, and we have run payments risk & operations across a wide array of products such as donations, Oculus, and games. In chargeback scenarios, we will facilitate representment between the you and the processor. Businesses will be protected against chargebacks classified as unauthorized. Businesses will however continue to be responsible for all not as described or not received.

#### Q. What are the Facebook's policies is the businesses agreeing to when signing up for this channel?

* [Commerce Product Seller Agreement⁠](https://www.facebook.com/legal/commerce_product_merchant_agreement)
* [Commerce Policy⁠](https://www.facebook.com/policies/commerce)
* [Purchase Protection Policy⁠](https://www.facebook.com/policies/purchase_protection)

## Learn More

* [Post-Purchase Support⁠](https://www.facebook.com/business/help/2245396562244345)
* [Respond to Chargebacks⁠](https://www.facebook.com/business/help/445031409367739)
* [Disputes and Claim Decisions⁠](https://www.facebook.com/business/help/1167434420087941)
* [Return Requirements for Sales⁠](https://www.facebook.com/business/help/612828795802804)
* [Settings and Requirements⁠](https://www.facebook.com/business/help/211403042968780)
* [Refund Orders⁠](https://www.facebook.com/business/help/330352440895436)
* [Purchase Protection Applies⁠](https://www.facebook.com/business/help/1977864565842385)
* [About Purchase Protection⁠](https://www.facebook.com/business/help/312018032897901)
