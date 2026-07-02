---
title: "Error Codes"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting
---

# Error Codes

Updated: Feb 16, 2025

The Facebook Graph API will output error codes attached to API responses. Catch these error codes and take action accordingly.

| Code | Error Message | Action | Category |
| --- | --- | --- | --- |
| 1818111 | Cannot Ship Order: Orders in state ‘cancelled’ cannot be shipped. | Self explanatory | Order Management |
| 1818105 | Cannot Refund Order: Orders in state ‘cancelled’ cannot be refunded. | Do not attempt to refund orders that are already cancelled | Order Management |
| 1818015 | Order already shipped: Payment has already been captured for this order and it can no longer be canceled or marked as shipped | Catch error, stop shipping | Order Management |
| 1818050 | Order Already Shipped: This order can’t be canceled since it’s already marked as shipped. To refund this order, go to Past Orders. | Order has shipped so it cannot be cancelled. Refund it instead. | Order Management |
| 1818107 | Order not charged: This order has not been charged. There is nothing to refund. | Double check why you’re trying to refund this order; Payment was not captured on it. Catch error, do not continue | Order Management |
| 1818048 / 1818049 | Order Already Canceled: This order has already been canceled. | Catch error, stop trying to cancel | Order Management |
| 1818214 | Order is already fulfilled,cancelled or refunded. | Catch error, stop trying to cancel | Order Management |
| 1818215 | Selected Order items are already fulfilled,cancelled or refunded. | Catch error, stop trying to cancel | Order Management |
| 2361076 | Refund Unavailable: This order can’t be refunded until the customer’s payment method has been charged. Please wait a few minutes and try again. | Contact support | Order Management |
| 2382021 | Invalid ‘retailer\_id’ for Item in Refund Request: We’re unable to find the corresponding product in the refund request. Please make sure that the ‘retailer\_id’ field has a valid value. | Make sure you’re passing in a retailer\_id if it’s an item-based request | Order Management |
| 2361091 | Refund Item Tax Higher Than Charged Amount: The tax amount ‘$X’ you are trying to refund for the item is higher than what the buyer was initially charged of that has not yet been refunded, ‘$Y’ . | Double check dollar values on refund | Order Management |
| 2361050 | Concurrent Order Modification: Multiple requests are attempting to modify this order at the same time. Only one request can modify an order at a time. | Serialize your API calls and reduce the rate of your requests | Order Management |
| 2361084 | Missing or invalid shipment origin postal code: Missing or invalid shipment origin postal code. | Self explanatory | Order Management |
| 2361086 | Provided Tax Amount is Too High: The amount of tax provided is higher than the tax amount authed of ‘$X’ set at order creation, and cannot be charged while fulfilling the order. | Self explanatory | Order Management |
| 2382030 | Cannot Refund Order: The total requested refund cannot be $0. | Self explanatory | Order Management |
| 2382023 | Cannot Refund Order: The requested refund for <PRODUCT\_NAME> ‘$X USD’ is greater than the current charged amount of ‘$Y USD’. | Self explanatory; Double check dollar values | Order Management |
| 2361081 | Pending Action. | **Retry this request.** This error comes when we try to perform updates on order while its being updated by other parallel request. | Order Management |
| 2361009 | Order cannot be acknowledged. | Order cannot be acknowledged, order has already been either cancelled, shipped or refunded. Do not attempt to acknowledge orders that are not in CREATED state. | Order Management |
| 2382045 | Duplicate fulfillment details provided: Order already has a fulfillment with these fulfillment tracking details. | You cannot use the same tracking number multiple times for multiple shipments. Each shipment requires a unique tracking number. | Order Management |
| 2361357 / 2382322 | Shipment must have at-least one item. | Self explanatory | Order Management |
| 2382319 / 2382323 | Item Has Already Been Refunded. | Self explanatory | Order Management |
| 2382021 / 2382324 | Invalid ‘retailer\_id’ for Item in Refund Request. | We’re unable to find the corresponding product in the refund request. Please make sure that the ‘retailer\_id’ field has a valid value. | Order Management |
| 2382030 / 2382325 | Cannot Refund Order | The total requested refund cannot be $0. | Order Management |
| 2382022 / 2382326 | Cannot Refund Order | The requested shipping refund amount is greater than the current charged amount. | Order Management |
| 2382052 | Cannot Update Disabled CMS | Failed to update CMS because it has been disabled | Onboarding |
| 2361163 | Instagram User Already Onboarded To Another Commerce Account | Instagram user {username} is already onboarded to another Commerce Account. Please select a different Instagram user or deactivate the shop first. | Onboarding |
