---
title: "Orders"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/ship-fulfillment
---

# Orders

Updated: Jun 29, 2026

Use this guide to learn more about common uses and related best practices for managing your orders.

## Manage orders

### Assume orders are prepaid

Facebook works with payment processors (such as PayPal) who act as [merchant of record⁠](https://www.facebook.com/business/help/281745012544354?id=533228987210412).

The merchant of record is responsible for any outstanding credits or debits from your buyer payment credentials. This means that at any time, no order payment details will be available in your ecommerce system. Your order management system should assume that acknowledged orders are prepaid by the seller and process them accordingly in your back office. Most order management systems have a payment flow to support prepaid orders.

Prepaid orders may behave differently in your order management system. As such, follow these recommendations:

* Consider not processing these orders against your payment fraud service, as you won’t have access to the payment credentials.
* Consider what will be stored as a payment method name (example: ‘Paid on Instagram’) in your systems and on order invoices.
* Differentiate orders placed in different channels (Instagram and Facebook).

Orders that can’t be cleared from buyer risk/sanctions potentially remain for a longer time in the `FB_PROCESSING` state and cannot be acknowledged. These orders can be [canceled](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api) after 24 hours.

### Acknowledge orders in bulk

You can acknowledge orders **individually** or in **batches**.

If you expect a high volume of orders, acknowledge them in batches. If you acknowledge them individually, you might exceed our Page [rate limits](https://developers.facebook.com/docs/graph-api/overview/rate-limiting). If you go over the rate limits, your API calls will be throttled.

To process orders in batches, use our [bulk acknowledgement method](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledge_orders).

### Payment method

No order payment details will be available in your ecommerce system or order management system (OMS). Consider which payment method to use (example: `pre-paid order`) and what payment method name (example: `Paid on Instagram`) will be displayed in your systems and on order invoices.

### Order pull schedule

Consider how often new orders are pulled from the API. A typical frequency is every 5-15 minutes.

### Order workflow

Decide when to create orders in your system and manage state accordingly. Orders typically flow through the following workflow:

* Create an order in a `PENDING` state in your ecommerce platform or OMS.
* Send an acknowledgment request to Facebook and attach your internal order ID.
* Upon successful acknowledgment, you can move the order into `PROCESSING` state in your system.

Do not attempt to move state on an order without successful acknowledgement.

### Store Facebook order number

Facebook orders are of variant length. Use an appropriate data type in your ecommerce platform, OMS, and any other downstream order fulfillment system. The recommended data type is string (varchar).

### Strategy for order updates

Implement a retry and error handling strategy for order updates.

### Prevent order duplicates

To avoid duplicates, ensure that an order with the given Facebook ID does not exist in your system before creating a new order. As a best practice, use a secondary lookup column for Facebook IDs.

### Use a self-serve shop UI to manage orders

Define whether a self-serve shop UI will be used to manage orders.

### Suppress order transactional emails

Define how order transactional emails will be suppressed in your ecommerce platform or OMS, as Instagram will be sending transactional updates to the buyers on your behalf.

### Handle marketing opt-in

Define how to handle marketing opt-in flag and integrate with your customer relationship management (CRM) system. Customers should not receive any marketing emails unless explicitly opted-in.

## Read orders in preprocessing state to lock inventory

Inventory can change very quickly, especially for highly sought items. To ensure that buyers have a good checkout experience, allocate inventory early to avoid overselling, which can lead to canceled orders.

When an order is first created, it is in the `FB_PROCESSING` state. Between the `FB_PROCESSING` to `CREATED` state, it can generally take up to 30 minutes to complete the transition and inventory can change during this period.

You can pull the order details during `FB_PROCESSING` to lock the inventory first. The buyer information is not shared during this state, but product details are available. Sellers can [request for such information](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#sample-request--multi-item-order-) and reserve the products in their order management system early to avoid overselling.

![Order state flowchart from FB_PROCESSING to CREATED, IN_PROGRESS, then Completed once all items ship or cancel](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/585894133_1369493514909299_3836614970668386208_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sgEJ7N0s7TsQ7kNvwF2CY8h&_nc_oc=AdqnuqFS4GmvOTYrfvR_mLkoLcS_bFB4U4BFXRmZK-Wlhod5ticYNSy2JM5VQwjV4jkhn9qN1z5rOugglaVSmyog&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=KRc3ZXjaic_DPAUCwWPsaw&_nc_ss=7b289&oh=00_AQCkXmDk8Fz7VQRFJvyUQYG9J5Wd8o8uAxdIdW3ptul0iA&oe=6A60959C)

## Enforce global idempotency key uniqueness

Distributed systems require methods to confirm completed and retry methods for uncompleted transactions without side effects. The [idempotency key](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#idempotency-key) is the identifier used to provide this capability in the Commerce Platform.

Requests that change the state of your shop require an idempotency key. Examples of such requests are acknowledge/fulfill an order, send a refund, and any other `POST`/`PUT`/`DELETE` request. This key should be a globally unique identifier, a simple way to achieve this uniqueness is using a version 4, pseudo-random identifier (see [RFC 4122⁠](https://tools.ietf.org/html/rfc4122.html)) and supported by most programming languages:

* Python: [uuid.uuid4⁠](https://docs.python.org/3/library/uuid.html#uuid.uuid4)
* .NET: [Guid.NewGuid⁠](https://tinyurl.com/y3grvxpz)
* Java: [java.util.uuid.randomUUID⁠](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html#randomUUID--)

By not using a globally unique identifier as your idempotency key, you can expect the following side effects:

* Multiple identical requests using the same `idempotency_key` have the same effect as making a single request; for example, they will not be executed again and will return exactly the same response as the original request.
* Multiple different requests using the same `idempotency_key` will throw an error.

For more information, see [Design with Fault Tolerance](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/ship-fulfillment#fault-tolerance).

## Enforce `merchant_order_reference` immutability

When acknowledging orders, you have the option to add the `merchant_order_reference` field, which represents the order ID in your order management system.

In some order management systems, this ID may change as the order transitions from the created to a fulfilled state. You should enforce either:

* This ID is unique and immutable.
* You map your internal ID to a unique and immutable ID.

## Design with fault tolerance

Distributed systems require methods to confirm completed and retry methods for uncompleted transactions without side effects.

The Commerce Platform acts as an idempotent receiver where messages have the same effect whether it is received once or multiple times if they share the [idempotency key](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#idempotency-key). This means that a message can safely be resent without causing any problems even if the Commerce Platform receives duplicates of the same message.

![Sequence diagram of Requestor sending a Request then a Request resend to Commerce Platform, which returns one Response](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/586440219_1369493268242657_8327529608249166176_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=G-yDcLfL4HkQ7kNvwGVSGdQ&_nc_oc=AdohajWrtZhLu1-RNkCFlgkhRCO7QAvPRobvpx3KgT1DkjMZZ42XwP-Xf41BYeVcgr2rpCRj2hkNfyjCcprkE_eE&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=KRc3ZXjaic_DPAUCwWPsaw&_nc_ss=7b289&oh=00_AQBxMmNQx_F1ea7D0fZaeLjyy3cVBINbYLj_bZaK6EZauA&oe=6A60842D)

For example, a message can receive a timeout, be lost, or a failure in the Requestor-side may happen before it can store the response. In these examples, the Requestor cannot distinguish this scenario from one where the message got lost and can only resend the message. On the other hand, the Commerce Platform may receive the same request which was already processed before.

To address these challenges, the system consuming the Commerce Platform should make use of the idempotency key, where each new request should use a globally unique identifier and any retry requests should use the same idempotency key used in the original request. See [Enforce Global Idempotency Key](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/ship-fulfillment#enforce-idempotency) uniqueness.

### Design considerations

* Use a max retry count to avoid flooding the Commerce Platform with failing requests. Not doing so may cause your application to eventually hit the rate limit for your application and be blocked to send new requests. After a message hits the max retry count, it could trigger a notification to your operations team to review the Requestor’s and Commerce Platform’s health.
* Use an exponential backoff where retry attempts have a waiting time and timeout increasing by a factor; for example, requests have a 10-second timeout the first attempt, and a 20-second timeout in the next attempt. The first retry happens 10 minutes after the original request; the second retry happens 20 minutes later.
* Use a circuit-break behavior where if a given rate of messages fails when calling the Commerce Platform, it will trigger a notification to your operations team. Queue these messages for future processing as the health of the Requestor and/or Commerce Platform are restored.
* If your application is subscribing to webhooks, prepare your application to handle duplicate messages sent by the Commerce Platform.

Given the payload in the following example, your application should use the `id` field to validate if the message was processed before (for example, likely the idempotency key). You can also use the `time` field to track when the webhook notification was first sent.

**Example**

```
```
{  
   entry:[  
      {  
         id: 1942543229149327, // unique webhook id  
         time: 1566839325, // time when this webhook notification was first sent  
         changes:[  
            {  
              // suppressed for readability  
            }  
         ]  
      }  
   ]  
}
```
```

## Handle text as Unicode

All text exposed by the Commerce Platform is [Unicode⁠](https://home.unicode.org/).

Some legacy systems may not have full Unicode support. Some examples can include legacy systems that are able to only handle ASCII characters or locale specific encodings (for example, [ISO/IEC 8859-1⁠](https://en.wikipedia.org/wiki/ISO/IEC_8859-1), supporting only Latin characters).

To provide the best buyer experience, you should handle these fields as Unicode. Failing to do so could result in interacting with the buyer using a name they had not consented to.

If this is not possible, the best alternative is to use the equivalent library in your dev environment to `PHP/*nix` [`iconv`⁠](https://www.php.net/manual/en/function.iconv.php), which transliterates strings to the desired target encoding:

```
<?php
//some German
$utf8_sentence = 'Weiß, Goldmann, Göbel, Weiss, Göthe, Goethe und Götz';

//US
setlocale(LC_ALL, 'en_US');

//transliterate
$trans_sentence = iconv('UTF-8', 'ASCII//TRANSLIT', $utf8_sentence);

//gives [Weiss, Goldmann, Gobel, Weiss, Gothe, Goethe und Gotz]
//which is our original string flattened into 7-bit ASCII as
//an English speaker would do it (ie. simply remove the umlauts)
echo $trans_sentence . PHP_EOL;

?>
```

Learn more about [Order Management, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management).

## Manually process orders from Commerce Manager

If you’re an API seller who has lost access to your API connection and want to manually process the orders from Commerce Manager, you need to first delete the existing API connection using the `DELETE` request to the `https://graph.facebook.com/{cms-id}/order_management_apps` endpoint.

**Example**

```
```
{  
   "error": {  
      "message": "(#803) Some of the aliases you requested do not exist: {cms-id}",  
      "type": "OAuthException",  
      "code": 803,  
      "fbtrace_id": "AXDusJwgK_--o5FnIZkGBu8"  
   }  
}
```
```

## Learn more

* [Order API Reference, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#sample-request--multi-item-order)
* [Order Management, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management)
* [Acknowledge Multiple Orders, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledge_orders)
* [Idempotency Key](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#idempotency-key)
* [Rate Limits, Graph API](https://developers.facebook.com/docs/graph-api/overview/rate-limiting)
* [RFC 4122, A Universally Unique IDentifier (UUID) URN Namespace⁠](https://tools.ietf.org/html/rfc4122.html)
* [Merchant of Record for Sellers, Business Help Center⁠](https://www.facebook.com/business/help/281745012544354?id=533228987210412)
* [Cancellation and Refund API, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api)
