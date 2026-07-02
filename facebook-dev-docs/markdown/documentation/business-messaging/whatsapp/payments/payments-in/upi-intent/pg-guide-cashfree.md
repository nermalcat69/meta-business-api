---
title: "Receive UPI payments through WhatsApp (recommended)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree
---

# Receive UPI payments through WhatsApp (recommended)

Updated: May 21, 2026

For businesses working with Billdesk or Zaakpay payment gateways, use the deeper integration with these PGs. Refer to [Payment Gateway Integration Guide](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg)

For businesses working with Razorpay, PayU, or Cashfree payment gateways, use a faster integration path. Refer to [Enhanced Payment Links](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links)

This is the recommended UPI Intent integration. Using the older payment configuration method? [See previous docs](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/) and plan to migrate to dynamic VPA.

Your business can enable customers to pay for their orders using all the UPI apps installed on their devices via WhatsApp. Businesses can send customers invoice (`order_details`) messages, then get notified about payment status updates via webhook notifications from Payment Gateway.

## Overview

Currently, customers browse business catalogs, add products to cart, and send orders in with our set of commerce messaging solutions, which includes [Single Product Message, Multi Product Message, and Product Detail Page](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products).

With the WhatsApp Payments API, businesses can send customers a bill so the customer can complete their order with all the UPI apps.

## How it works

The business must send an `order_details` message for the consumer to initiate payment. This type of message is a new type of interactive message, which always contains the same 4 main components: **header**, **body**, **footer**, and **action**. Inside the **action** component, the business includes all the information needed for the customer to complete their payment.

An order\_details message contains the following fields:

* `upi_intent_link` - Fields that are supplied by your payment gateway and denote where a payment is sent.
* `reference_id` - This is used to track the lifecycle of the order. Payment statuses are published against this ID. This could be order-id or transaction-id used to create the upi-intent at payment gateway.

Once the message is sent, the business waits for a payment or transaction status updates directly from Payment Gateway. Upon receiving payment signal for an order, Business should relay this payment signal to consumer through interactive order status (`order_status`) message.

Updating users about the payment signal is important as this message updates the order details message and order details view for the consumer reflecting the order confirmation from the merchant. This update flow is shown with an example in subsequent sections.

## Purchase flow in app

In the WhatsApp customer app, the purchase flow has the following steps:

* Customer sends an order with selected products to the business, or the business identifies the products that the customer has shown interest to purchase.
* After receiving the order/identifying the product, if a merchant accepts payment methods other than UPI, such as credit cards and payment wallets, then the merchant will send a message to the user to get their preferred payment method for the order.

  ![WhatsApp chat with 'Pay with UPI' and 'Other Payment Option' buttons](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/560448024_1339318301260154_7696319174732839335_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RxAsmY8BxkkQ7kNvwGDVgbF&_nc_oc=AdqNloGKr-TDAvaKoydOVajhVSl6bVnCHQyHLOA9VCr-2LZfWnRnVAH8REdFeJaZOZ025GreoktTuiCgOr_8czC6&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQCRnVR--OeFNfxJG9NGDWuCteYBVcBgxjmE0_xe57WKBQ&oe=6A604568)
* When consumers want to pay using UPI payment method, then merchants should retrieve the UPI payment intent by calling Payment Gateway. Merchant needs to use UPI intent to construct order details messages and send it to the consumer.

  ![Order details message bubble with 'Review and pay' and 'Pay now' buttons](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/561656044_1339317951260189_5557721601792790508_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=26gKfHodVDkQ7kNvwFzZxiY&_nc_oc=Adpx7q4Gpqo4T3j4ig4h8oqh2sAtgZw-bATYA80ZOj7bAqCrGFJDT20Yh5A0sWe5a9ibq1Inerr6Rp4CLjRgxELN&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQBOmsWzTEdyVP7piwJlGTy27cYYHfz3BdYoH76KM6uBvg&oe=6A606041)![Order details screen showing pending order with Continue button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/560512409_1339317934593524_639475970323241623_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=HJx015VbpcgQ7kNvwF1zUbZ&_nc_oc=AdpWDCNJs_O1HjUMSjyr6r2BMLfxCHno5pNFImBw4Pvh_zel-iSCnzkvORnodGxU0n5PRsPP7lUx1yETvEBlhMQd&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQDIvEW3i6HZOkCAPPuMDvI_CQ7xtucAGtSjF-w7bObpMw&oe=6A6052CD)
* When the consumer taps the Pay now/continue button, they are given the option to choose UPI payment apps - WhatsApp or any other UPI payments apps. Consumers may choose any UPI option to pay for the order.

  ![Confirm payment sheet showing recipient UPI ID and Send payment button](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/565098139_1339318224593495_6825114181877692125_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=xpdLa3Lch8YQ7kNvwHL1UcY&_nc_oc=AdpbWOgYgp84h2zaPY7qnPAmyUzRlPOh_RoZl-zKrhGghGODeflu7gGMUjaTMe8hJp1yccQtTXPA7o93qwc22-KB&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQBWjWczdL-64DapylW51gPv_q9X25Dw2z1LRRjZsQ1iqg&oe=6A60512D)![Choose payment method screen listing bank, Google Pay, and PhonePe UPI options](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/561624481_1339317921260192_2024095528920144172_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Qgrdk7YcCe0Q7kNvwGOzLte&_nc_oc=Adp7aovtm5A6iBHegs-E-reYkBj2e2cXLfcZBx8YyMAQWUpzE7adBoTUo7q3wdl0qfFpMazLHM7ocigLU-mLTq66&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQBwv8FwYGxBzFLntxYXcgq58Sa6GVF1ZP9HEyQ1_iVtIw&oe=6A60772A)
* Consumer pays for the order and the payment method is saved for the future and automatically selected for the next payment transaction. Also, one quick note is the order details screen order-status will continue to show “Order pending” until the merchant sends order status interactive message.

  ![Chat showing completed payment receipt while order status stays pending](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/566231819_1339318157926835_1506879346444592490_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=E1NOJTj4LekQ7kNvwHjnNTV&_nc_oc=AdpO-SVfAbmcPDNuXtFA1RZFDwzvf-TaKibLcP_eJrHsUDrXnZlrFH3G415GsJHJiDKwJJy0B0D1eicer5J2-p6A&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQCJpv06KGDN8YdfqpNC0iJ5z454Tf6VJ1-AHaa2BhmjqQ&oe=6A605941)![Order details screen with Payment details row and Continue button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/561256871_1339318141260170_8139516040489296125_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hJNJR3FkKdMQ7kNvwF2dmM9&_nc_oc=AdpYf273-a4u4ydHAJlJJlHeaCBC7dMZZ20cvDYgJ_fkFkdKXMj0GbqPGQv5aZ0AjxwcbKPDFdQCehGbOkgnBVIz&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQCIUYZ5C5msvfnEISKR19ZyFTgD9N2LgzaZB2qip1ZMIg&oe=6A604B25)
* Once the payment is complete, the business receives a notification from Payment Gateway and the merchant needs to send order status updates to the consumer client notifying consumers about the progress to the order, this will update the order details message CTAs and order details screen - order status description.

  ![Chat with completed payment and order complete status message showing receipt number](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/561598657_1339318297926821_8076170086676362480_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mkzk-9dsqKUQ7kNvwG_luEG&_nc_oc=AdoWHruxoo5H35l49nRh9j3Hk_auFiJfielaLZ1UOTu-3ihtBuO5PrA3NMRUfczDgiFy_2_IqtBGoxCM1P1H8KOH&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQA7a-uahEVdpM86hzfNuqsE47Rb8tRgrUJ2eea9Dgyi3w&oe=6A6046A0)![Chat showing order details bubble updated with completed payment receipt](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/561240350_1339318304593487_8250251904722624137_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hJOeuDz-sxQQ7kNvwHzZ74s&_nc_oc=Adod9Qu0YfM9Z_v1LmBo2i2eg7_-xI9PJ9SW_N4JiRdmNabC7WjdmwTA0YpoiV4E96sAfwoJN4H_W6eDo2IKwoKo&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQAqjBQiKPCDFUwNVw4UhL-UJT9i3QWrSArjKUqpzoeQ9A&oe=6A6059F3)![Order summary screen showing 'Order completed' status with green checkmark](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/561088360_1339318144593503_6410973170221153078_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y0mR6Aqkcv4Q7kNvwGLSt4j&_nc_oc=Ado2kgnDpLoajx5tazwvUPNEumkQyzi9p1Kw7u3i8_iQpt2zgxtZDpYxeRwdhZnIsSNXQkupRqe7q2lOisW4ujGA&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQDaknvID8o3HUhDd0WQJ0CFjx6OU68HYHfjNNX46rYJYQ&oe=6A606022)

## Integration steps

The steps outlined below assume that the business is about to send order details message to the consumer client.

The following sequence diagram demonstrates the typical integration flow for WA Payments API:
![Sequence diagram of payment flow between User, WhatsApp, Merchant, and Payment Gateway](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/560183089_1339318451260139_9205236297705447401_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=cqSMmmGeSEoQ7kNvwEGcNnv&_nc_oc=Adp9IDSP4ZE2oj8K5949EYlcB9yvnY6dw_Mqdxwbc6_lB_fn8fb1urSNBoEjHRjcN-t4yeVDLbDpgWN6Smgg1Z0l&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQC1I845LJ_ALtWoTO2AavLClT3cwyIQRxrFEJ9B88Kd5A&oe=6A606993)

### Step 1: Get UPI intent from payment gateway

Once the consumer has expressed their interest to purchase an item using UPI payment method, merchant needs to call payment gateway to create a UPI intent, the following is the sample UPI intent link:

```
```
upi://pay?pa=abc@psp&pn=ABC&tr=877376394&  
  am=10.00&cu=INR&mode=00&purpose=00&mc=5399&tn=877376394
```
```

Merchant/Partner could send the entire UPI intent as it is in the `upi_intent_link` type payload. These parameters will be discussed in detail below.

### Step 2: Assemble the interactive object

To send an `order_details` message, businesses must assemble an [interactive object](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#interactive-object) of type `order_details` with the following components:

| Object | Description |
| --- | --- |
| `type`  object | **Required.**  Must be “order\_details”. |
| `header`  object | **Optional.**  Header content displayed on top of a message. If a header is not provided, the API uses an image of the first available product as the header |
| `body`  object | **Required.**  An object with the body of the message. The object contains the following field:  `text` string   * **Required** if `body` is present. The content of the message. Emojis and markdown are supported. Maximum length is 1024 characters |
| `footer`  object | **Optional.**  An object with the footer of the message. The object contains the following fields:  `text` string   * **Required** if `footer` is present. The footer content. Emojis, markdown, and links are supported. Maximum length is 60 characters |
| `action`  object | **Required.**  An action object you want the user to perform after reading the message. This action object contains the following fields:  `name` string   * **Required**. Must be “review\_and\_pay”   `parameters` object   * See [Parameters Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree#paramobject) for information |

#### Parameters object

| Object | Description |
| --- | --- |
| `reference_id`  string | **Required.**  Unique identifier for the order or invoice provided by the business. It is case sensitive and cannot be an empty string and can only contain English letters, numbers, underscores, dashes, or dots, and should not exceed 35 characters.  The reference\_id must be unique for each order\_details message for a given business. If there is a need to send multiple order\_details messages for the same order, it is recommended to include a sequence number in the reference\_id (for example, “BM345A-12”) to ensure reference\_id uniqueness. |
| `type`  object | **Required.**  The type of goods being paid for in this order. Current supported options are `digital-goods` and `physical-goods` |
| `beneficiaries`  array | **Required for shipped physical-goods.**  An array of beneficiaries for this order. A beneficiary is an intended recipient for shipping the physical goods in the order. It contains the following fields:  Beneficiary information isn’t shown to users but is needed for legal and compliance reasons.  `name` string   * **Required.** Name of the individual or business receiving the physical goods. Cannot exceed 200 characters   `address_line1` string   * **Required.** Shipping address (Door/Tower Number, Street Name, and so on). Cannot exceed 100 characters   `address_line2` string   * **Optional.** Shipping address (Landmark, Area, and so on). Cannot exceed 100 characters   `city` string   * **Required.** Name of the city.   `state` string   * **Required.** Name of the state.   `country` string   * **Required.** Must be “India”.   `postal_code` string   * **Required.** 6-digit zip code of shipping address. |
| `currency` | **Required.**  The currency for this order. Currently the only supported value is `INR`. |
| `total_amount`  object | **Required.**  The `total_amount` object contains the following fields:  `offset` integer   * **Required.** Must be `100` for `INR`.   `value` integer   * **Required.** Positive integer representing the amount value multiplied by offset. For example, ₹12.34 has value 1234.   `total_amount.value` must be equal to `order.subtotal.value` + `order.tax.value` + `order.shipping.value` - `order.discount.value`. |
| `payment_settings`  object | **Required.**  See [Payment Settings object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree#paymentsettingsobject) for more information. |
| `order`  object | **Required.**  See [order object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree#ordobject) for more information. |

#### Payment settings object

You can pass UPI intent as it is or parse the UPI intent parameters and pass them in a json structure. Both formats are supported, so following are the two variants of payments settings objects:

##### Payment settings object for UPI intent link

| Object | Description |
| --- | --- |
| `type`  string | **Required.**  Must be set to **“upi\_intent\_link”** |
| `upi_intent_link`  object | **Required.**  An object that describes payment account information:  `link` string   * **Required.** The UPI intent that is generated from Payment gateway.   The UPI intent only supports the following “`&`” separated attributes- pa, pn, mc, purpose, and tr   Example: `upi://pay?pa=merchant_vpa&pn=Merchant_Name&mc=merchant_category_code&purpose=purpose_code&tr=pg_generated_id` |

#### Order object

| Object | Description |
| --- | --- |
| `status`  string | **Required.**  Only supported value in the `order_details` message is `pending`.  In an `order_status` message, `status` can be: `pending`, `captured`, or `failed`. |
| `type`  string | **Optional.**  Only supported value is `quick_pay`. When this field is passed in, the “Review and Pay” button is hidden and only the “Pay Now” button is shown in the order details bubble. |
| `items`  object | **Required.**  An object with the list of items for this order, containing the following fields:  `retailer_id` string   * **Optional.** Content ID for an item in the order from your catalog.   `name` string   * **Required.** The item’s name to be displayed to the user. Cannot exceed 60 characters   `image` object   * **Optional.** Custom image for the item to be displayed to the user. See [item image object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree#item_image_object) for information   Using this image field will limit the items array to a maximum of 10 items and this cannot be used with `retailer_id` or `catalog_id`.  `amount` amount object with value and offset -- refer total amount field above   * **Required.** The price per item   `sale_amount` amount object   * **Optional.** The discounted price per item. This should be less than the original amount. If included, this field is used to calculate the subtotal amount   `quantity` integer   * **Required.** The number of items in this order, this field cannot be decimal, has to be integer.   `country_of_origin` string   * **Required** if `catalog_id` is not present. The country of origin of the product   `importer_name` string   * **Required** if `catalog_id` is not present. Name of the importer company   `importer_address` string   * **Required** if `catalog_id` is not present. Address of importer company |
| `subtotal`  object | **Required.**  The value **must be equal** to sum of `order.amount.value` \* `order.amount.quantity`. Refer to `total_amount` description for explanation of `offset` and `value` fields  The following fields are part of the `subtotal` object:  `offset` integer   * **Required.** Must be `100` for `INR`   `value` integer   * **Required.** Positive integer representing the amount value multiplied by offset. For example, ₹12.34 has value 1234 |
| `tax`  object | **Required.**  The tax information for this order which contains the following fields:  `offset` integer   * **Required.** Must be `100` for `INR`   `value` integer   * **Required.** Positive integer representing the amount value multiplied by offset. For example, ₹12.34 has value 1234   `description` string   * **Optional.** Max character limit is 60 characters |
| `shipping`  object | **Optional.**  The shipping cost of the order. The object contains the following fields:  `offset` integer   * **Required.** Must be `100` for `INR`   `value` integer   * **Required.** Positive integer representing the amount value multiplied by offset. For example, ₹12.34 has value 1234   `description` string   * **Optional.** Max character limit is 60 characters |
| `discount`  object | **Optional.**  The discount for the order. The object contains the following fields:  `offset` integer   * **Required.** Must be `100` for `INR`   `value` integer   * **Required.** Positive integer representing the amount value multiplied by offset. For example, ₹12.34 has value 1234   `description` string   * **Optional.** Max character limit is 60 characters   `discount_program_name` string   * **Optional.** Text used for defining incentivized orders. If order is incentivized, the merchant needs to define this information. Max character limit is 60 characters |
| `catalog_id`  object | **Optional.**  Unique identifier of the Facebook catalog being used by the business.  If you do not provide this field, you must provide the following fields inside the items object: `country_of_origin`, `importer_name`, and `importer_address` |
| `expiration`  object | **Optional.**  Expiration for that order. Business must define the following fields inside this object:  `timestamp` string – UTC timestamp in seconds of time when order should expire. Minimum threshold is 300 seconds  `description` string – Text explanation for expiration. Max character limit is 120 characters |

#### Item image object

| Object | Description |
| --- | --- |
| `link` string | **Required.** A link to the image that will be shown to the user. Must be an `image/jpeg` or `image/png` and 8-bit, RGB, or RGBA. Follows same requirements as image in [media](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#supported-media-types) |

By the end, the interactive object should look something like this for a merchant upi intent type catalog-based integration:

```
```
{  
  "interactive": {  
    "type": "order_details",  
    "header": {  
      "type": "image",  
      "image": {  
        "link": "your-media-url-link"  
      }  
    },  
    "body": {  
      "text": "your-text-body-content"  
    },  
    "footer": {  
      "text": "your-text-footer-content"  
    },  
    "action": {  
      "name": "review_and_pay",  
      "parameters": {  
        "reference_id": "reference-id-value",  
        "type": "digital-goods",  
        "payment_settings": [  
          {  
            "type": "upi_intent_link",  
            "upi_intent_link": {  
              "link": "upi://pay?pa=merchant_vpa&pn=merchant%20Name&mc=mc_code&purpose=purpose_code&tr=transaction_record"  
            }  
          }  
        ],  
        "currency": "INR",  
        "total_amount": {  
          "value": 21000,  
          "offset": 100  
        },  
        "order": {  
          "status": "pending",  
          "expiration": {  
            "timestamp": "utc_timestamp_in_seconds",  
            "description": "cancellation-explanation"  
          },  
          "items": [  
            {  
              "name": "Product name, for example bread",  
              "amount": {  
                "value": 10000,  
                "offset": 100  
              },  
              "quantity": 1,  
              "sale_amount": {  
                "value": 100,  
                "offset": 100  
              },  
              "country_of_origin": "country-of-origin",  
              "importer_name": "name-of-importer-business",  
              "importer_address": {  
                "address_line1": "B8/733 nand nagri",  
                "address_line2": "police station",  
                "city": "East Delhi",  
                "zone_code": "DL",  
                "postal_code": "110093",  
                "country_code": "IN"  
              }  
            },  
            {  
              "name": "Product name, for example bread",  
              "amount": {  
                "value": 10000,  
                "offset": 100  
              },  
              "quantity": 1,  
              "sale_amount": {  
                "value": 100,  
                "offset": 100  
              },  
              "country_of_origin": "country-of-origin",  
              "importer_name": "name-of-importer-business",  
              "importer_address": {  
                "address_line1": "B8/733 nand nagri",  
                "address_line2": "police station",  
                "city": "East Delhi",  
                "zone_code": "DL",  
                "postal_code": "110093",  
                "country_code": "IN"  
              }  
            }  
          ],  
          "subtotal": {  
            "value": 20000,  
            "offset": 100  
          },  
          "tax": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text"  
          },  
          "shipping": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text"  
          },  
          "discount": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text",  
            "discount_program_name": "optional_text"  
          }  
        }  
      }  
    }  
  }  
}
```
```

### Step 3: Add common message parameters

Once the interactive object is complete, append the other parameters that make a message: `recipient_type`, `to`, and `type`. Remember to set the `type` to `interactive`.

```
```
{  
   "messaging_product": "whatsapp",  
   "recipient_type": "individual",  
   "to": "PHONE_NUMBER",  
   "type": "interactive",  
   "interactive": {  
     // interactive object here  
   }  
 }
```
```

These are [parameters common to all message types](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#requests).

### Step 4: Make a POST call to messages endpoint

Make a POST call to the [`/[PHONE_NUMBER_ID]/messages`](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) endpoint with the `JSON` object you have assembled. If your message is sent successfully, you get the following response:

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [ {  
      "input": "[PHONE_NUMBER_ID]",  
      "wa_id": "[PHONE-NUMBER_ID]"  
  } ],  
  "messages": [ {  
      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA"  
  } ]  
}
```
```

#### Errors

###### WhatsApp Payments Terms of Service acceptance pending

If you see the following error, accept the WhatsApp Payments terms of service using the link provided in the error message before trying again.

```
```
{  
  "error": {  
    "message": "(#134011) WhatsApp Payments terms of service has not been accepted",  
    "type": "OAuthException",  
    "code": 134011,  
    "error_data": {  
      "messaging_product": "whatsapp",  
      "details": "WhatsApp Payments Terms of Service acceptance pending for this WhatsApp Business Account.  
Please use the following link to accept terms of service before using Business APIs: https://fb.me/12345"  
    }  
  }  
}
```
```

For all other errors that can be returned and guidance on how to handle them, see [WhatsApp Cloud API, Error Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Step 5: Consumer pays for the order

Consumers can pay using WhatsApp payment method or using any UPI supported app that is installed on the device.

### Step 6: Get notified about transaction status updates from payment gateway

Businesses receive updates to the invoice via payment gateway webhooks, when the status of the user-initiated transaction changes. The unique identifier reference-id passed in `order_details` message can be used to map the transaction to the consumer invoice or interactive order details message.

Please refer to our PG integration guide for the exact payment signals. [Cashfree](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-cashfree) and [CCAvenue](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/pg-guide-ccavenue).

### Step 7: Update order status

Upon receiving transaction signals from payment gateway through webhook, the business must update the order status to keep the user up to date. The following order status values are supported:

![Order status diagram: Pending to Shipped, Partially Shipped, or Processing, then Completed or Canceled](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/565718019_1339318281260156_7557207642198018127_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=VHtEQoEQySoQ7kNvwGr8AF3&_nc_oc=AdpOWGva2mva_h03J3BrydUw-Nub4d3uQD1xe9kAxVh7R8zORlf8htd5vU0wS9PzdlDybJLXkebNivc3VoMUjlzK&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=HhzWA99tpyZF5DYoeXHRDQ&_nc_ss=7b2a8&oh=00_AQCSKQTBGT6Cb3THA8IubsxDIL0eQktu-tSIkR29b9YUxA&oe=6A606F35)

| Value | Description |
| --- | --- |
| `pending` | User has not successfully paid yet |
| `processing` | User payment authorized, merchant/partner is fulfilling the order, performing service, and so on. |
| `partially-shipped` | A portion of the products in the order have been shipped by the merchant |
| `shipped` | All the products in the order have been shipped by the merchant |
| `completed` | The order is completed and no further action is expected from the user or the partner/merchant |
| `canceled` | The partner/merchant would like to cancel the `order_details` message for the order/invoice. The status update will fail if there is already a `successful` or `pending` payment for this `order_details` message |

Typically businesses update the `order_status` using either the WhatsApp payment status change notifications or their own internal processes. To update `order_status`, the partner sends a `order_status` message to the user.

```
```
{  
  "recipient_type": "individual",  
  "to": "whatsapp-id",  
  "type": "interactive",  
  "interactive": {  
    "type": "order_status",  
    "body": {  
      "text": "your-text-body-content"  
    },  
    "action": {  
      "name": "review_order",  
      "parameters": {  
        "reference_id": "reference-id-value",  
        "order": {  
          "status": "processing | partially_shipped | shipped | completed | canceled",  
          "description": "optional-text"  
        }  
      }  
    }  
  }  
}
```
```

The following table describes the returned values:

| Value | Description |
| --- | --- |
| `reference_id` | The ID provided by the partner in the `order_details` message |
| `status` | The new order `status` |
| `description` | Optional text for sharing status related information in `order_details`. Could be useful while sending cancellation. Max character limit is 120 characters |

Merchant should always post this order-status message to the consumer after receiving transaction updates for an order. As the `order_details` message and order details screen experience is tied to the order status updates.

## Security considerations

Businesses should comply with local security and regulatory requirements in India. They should not rely solely on the status of the transaction provided in the webhook and must use payment lookup API to retrieve the statuses directly from WhatsApp. Businesses must always sanitize/validate the data in the API responses or webhooks to protect against SSRF attacks.

## Checklist for integrated merchants

* Ensure that an `order_status` message is sent to consumer informing them about updates to an order after receiving transaction updates for an order.
* Ensure the merchant is verified and WABA contact is marked with a verified check.
* Verify the WABA is mapped to appropriate merchant initiated messaging tier (1k, 10k, and 100k per day)
* Merchant should list the customer support information in the profile screen in case the consumer wants to report any issues.
