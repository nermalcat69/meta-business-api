---
title: "Automating Seller Tasks"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/concepts/architecture
---

# Automating Seller Tasks

Updated: Dec 29, 2020

As noted in the [Seller’s Journey](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/concepts/user-experience#seller-journey), when selling directly on Facebook or Instagram, a seller can manage accounts, orders, reporting, and [customer communications](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication) in Commerce Manager. Among these tasks, [order management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management) and [financial reporting](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting) can be automated by building an API integration with Facebook’s [Commerce API](https://developers.facebook.com/docs/commerce-api).

This diagram illustrates these tasks and the data exchanged via a typical API integration.

![Swimlane diagram across Seller and Facebook / Instagram and Buyer lanes mapping Setup, Ongoing Operations, and Reporting tasks to exchanged data like Settings, Product Catalog, Order, Shipment, and Reports](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/61300144_481497329289696_3945140053667217408_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=8X3u7YWBWUUQ7kNvwEtJRpG&_nc_oc=Ado8Chy91P43UySS-g5TUfxwgOOAaKM5ZvCYtCYwyBt5rKCWg7GgIigB1kCzuD4Jv6czJIN02WY86HpnR2F-DA8C&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=V_H_wIWItiAbkhAUTAGGjQ&_nc_ss=7b289&oh=00_AQCucDr-FI_pjCpUk-Xu2I9PAZ-1x46GoruYLxOgAMTYGA&oe=6A608A2D)

## Order and Payment

When an order is placed on your Facebook or Instagram shop, Facebook authorizes payment using a payment processor, and makes the order details available to the seller. The seller is then responsible for shipping the order and provides Facebook with shipping information. After the order is marked as shipped by the seller, Facebook captures the payment and pays out to the seller on a rolling schedule.

The following diagram describes this process.

![Order and payment flow between User, Facebook / Instagram, Merchant, and Payment Processor numbered 1-6: Place Order, Authorize Payment, Fetch Order, Ship Order, Mark as Shipped, Capture Payment](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/61203016_2033779553412139_8267954083663446016_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4q8Vh68sA8sQ7kNvwFE5brB&_nc_oc=AdrfRLM7qFy4Qdqhbc9T5fy5YIx30YQ0oAmB_nox2YX7obov5Yi6glgXKBsdNq7igdyd5nwZQfGGMJUPtR86Km9U&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=V_H_wIWItiAbkhAUTAGGjQ&_nc_ss=7b289&oh=00_AQAHBmtY75NKx6lIYejuBjfzIGt2DXwuzmp7HG0hb1bVww&oe=6A60A0E1)

## Learn More

* [Catalog and Inventory](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog)
* [Order Management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management)
* [Finance Reporting](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting)
* [Customer Communication](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/communication)
* [Best Practices](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices)
