---
title: "Accept Payments via Payment Links"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links
---

# Accept Payments via Payment Links

Updated: May 21, 2026

This feature is not publicly available yet. Please reach out to whatsappindia-bizpayments-support@meta.com to know more.

Your businesses can enable customers to pay for their orders by bringing in all the payment methods supported on your platform to WhatsApp. Businesses can send customers invoice(`order_details`) messages, then get notified about payment status updates via webhook notifications from Payment Gateway.

## Overview

Currently, customers browse business catalogs, add products to cart, and send orders in with the set of commerce messaging solutions, which includes [Single Product Message, Multi Product Message, and Product Detail Page](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products).

With the WhatsApp Messaging API, businesses can send customers a bill to complete the order with one of the supported payment instrument.

## How it works

The business must send an `order_details` message for the consumer to initiate payment. This type of message is a new type of interactive message, which always contains the same 4 main components: **header**, **body**, **footer**, and **action**. Inside the **action** component, the business includes all the information needed for the customer to complete their payment.

Each `order_details` message contains a unique `reference_id` provided by the business, and that unique number is used throughout the flow to track the order. This `reference_id` is used to generate the payment link from Payment Gateway.

Once the message is sent, the business waits for a payment or transaction status updates directly from Payment Gateway. Upon receiving payment signal for an order, business should relay this payment signal to consumer client through interactive order status(`order_status`) message.

Updating user about the payment signal is important as this message updates the order details message and order details view for the consumer reflecting the order confirmation from merchant. This is shown with an example in subsequent sections.

## Purchase flow in app

In the WhatsApp customer app, the purchase flow has the following steps:

* Customer sends an order with selected products to the business or business identifies the products that the customer has shown interest to purchase.
* After receiving the order or identifying the product, if a business accepts payment methods other than UPI, such as credit cards and payment wallets, then business will send a message to the user to get their preferred payment method for the order.

  ![WhatsApp chat asking the customer to choose 'Pay with UPI' or 'Other Payment Option'](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/565092551_1339318041260180_6100091283875651354_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ROyzWJkDG1UQ7kNvwHrto6t&_nc_oc=AdpTfidFKajeP_0d97GV_p4XnbNQYUYkxvooa8YRyL6gCX65GkDXleVBtP4uWtggvJ0ceyC6aAje3ijnfXQ_Zpv0&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQAtY3GMPIzil2IhAswCWNJYWLvUdKqYNMCGQpXCb1ezBQ&oe=6A6043BE)
* When consumers want to pay using other payment method option, the business should generate the payment link by calling Payment Gateway by providing the unique "reference-id" and other information like amount and validity, then business can use the generated payment link to construct the order details message and send to the consumer.

  ![WhatsApp order details message for an electricity bill with 'Review and pay' and 'Pay now' buttons](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/560743135_1339318431260141_4647602383513770880_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=FZwQuCT9v04Q7kNvwFL22Vd&_nc_oc=Adq0f9ytaznvmdXpBnUi_OAILZqTj9zCyKa3hYDTuC4km0D7HIryMF5vbX_oMVvhdENajnE9rcnOsCeBhI17OP5R&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQDPuPoH79RztH2khfHR03To4pPJKti4UJCLfFkuAQYhpQ&oe=6A606E62)![Order details screen showing pending electricity bill of 10 rupees with a Continue button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/565660275_1339317854593532_4612206710255341597_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y3t5R0ZQ_V8Q7kNvwFe4kKA&_nc_oc=AdqU3XoCWhudonHOEu2-LDqFwM88igQ3dMZm54ytVQoVYRQZiSnYN30Ho_mdcini8KXQXfy5P-s2FbGZIT9yqr5i&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQAfucVphGBhtlqsDWvjRbSeg-bbKXfduncYk6fwZHeoHA&oe=6A605122)
* When the consumer taps the Pay now/continue button, consumer will be redirected to the payment link within specially designed In-App browser to present with the list of supported payment options such as credit card, debit card, wallet, or UPI apps. Consumers can choose any one of the payment option to pay for the order.

  The following is a sample payment link redirect within In-App Browser accepting various payment methods like credit, debit, wallet, and UPI apps.

  ![Razorpay in-app browser payment request for 10 rupees with a 'Proceed to pay' button](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/564160491_1339318417926809_8923443632387956339_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ULQSa7AHbnsQ7kNvwG1BLnf&_nc_oc=AdrIUlCX7VWTEx7iXRG06Mwi4ZLIPwyotwPysl19cW89iBwT7I2kgBqthCikqfFuo_XznMy9ACk_Xa2Q3z5cwwoY&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQABeOawV_cMyseBLOEbLArp6Q9wzkw3rqZslXwktYmUdA&oe=6A60705C)![Razorpay payment options listing card, UPI apps, netbanking, and wallet with a 'Pay Now' button](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/561772090_1339318161260168_2471127466153480453_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JhyGIW9bWX8Q7kNvwFHW0qK&_nc_oc=Adr0hG_suYjpu69l_L689goptkIc3svoS75N7Jz7Zrlwkxoshac6OMuz2-kZGKKsezLgZe9-2NaGxoZ4wy5ytFDJ&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQDoQrMSEzUEr7UTd5HD4ggczPlQ_Y_5CSNihOsMX_3C8g&oe=6A604FAC)
* Once the payment is complete, the business will receive a notification from Payment Gateway and the business needs to send order status updates to the consumer client notifying consumers about the progress on their order, this will update the order details message CTAs, Order details screen and Order status. The order status should contain the matching "reference-id" of order details.

  ![WhatsApp chat showing the order status updated to payment completed with reference number](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/561528290_1339318227926828_5203165586545314384_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=T8zR4NMs9zMQ7kNvwG2_4qK&_nc_oc=AdoUjzkFK-yQwYtv2n5PwksQSKuIHXWt-24ziLp-VdvMKvxmHluqG5meyMLQLdxuBtNoVOQsXXWyndhxnJFKLPH9&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQCXgzHsls2y1NEs0qO7ITenpV3Lpf1szg8FNN5Rm_blHw&oe=6A607108)![Order summary screen showing 'Order completed' status for the electricity bill with reference number](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/564584803_1339318121260172_4660237707662893676_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=nznLMxCT2cEQ7kNvwFUoZCF&_nc_oc=AdqXyrK-dK-RdUr75uIYOmpl67czLqSBSrVp30RAy3Gh4dG2hFI3_vHqcboJleSqIp6sTrSCl4IjIoKwIVgpN3sr&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQAtImYO5PFs5mYYTJMs_XVxv91kQgrGRElWYPDFz6McyQ&oe=6A606BB4)

## Integration steps

The steps outlined below assume that the business is about to send order details message to consumer client.

The following sequence diagram demonstrates the typical integration flow for WA Payments API:
![Sequence diagram of the payments flow between User, WhatsApp, In-App Browser, Business, and Payment Gateway](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/564616717_1339318061260178_2911403093938616620_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=0bg_pgYamWIQ7kNvwFP9iSq&_nc_oc=AdqKs6CCZ9YfLL1kHCyolHlqB4XLsq-GtYhS8JUZAoGYoYlzE5kh-Ez0I02gD0Kt7QpLeg_4I0DxdrsJjWlxlKdm&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQDC-A-oUJpBdOPu7cptZ0Nc7PfFEVLMdU4SFRg2NnCtfQ&oe=6A606189)

### Step 1: Get payment link from payment gateway

Once the consumer has expressed their interest to purchase an item using payment link. Business needs to call payment gateway with necessary information like reference-id, amount, and validity to generate the payment link. Following is a sample payment link:

```
https://rzp.io/i/rNiAagU8y
```

Business needs to use the same reference-id, amount, and expiration in invoice(`order_details`) interactive message.

### Step 2: Assemble the interactive object

To send an `order_details` message, businesses must assemble an [interactive object](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) of type `order_details` with the following components:

| Object | Description |
| --- | --- |
| `type`  object | **Required.**  Must be "order\_details". |
| `header`  object | **Optional.**  Header content displayed on top of a message. If a header is not provided, the API uses an image of the first available product as the header |
| `body`  object | **Required.**  An object with the body of the message. The object contains the following field:  `text` string   * **Required** if `body` is present. The content of the message. Emojis and markdown are supported. Maximum length is 1024 characters |
| `footer`  object | **Optional.**  An object with the footer of the message. The object contains the following fields:  `text` string   * **Required** if `footer` is present. The footer content. Emojis, markdown, and links are supported. Maximum length is 60 characters |
| `action`  object | **Required.**  An action object you want the user to perform after reading the message. This action object contains the following fields:  `name` string   * **Required**. Must be "review\_and\_pay"   `parameters` object   * See [Parameters Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links#paramobject) for information |

#### Parameters object

| Object | Description |
| --- | --- |
| `reference_id`  string | **Required.**  Unique identifier for the order or invoice provided by the business. It is case sensitive and cannot be an empty string and can only contain English letters, numbers, underscores, dashes, or dots, and should not exceed 35 characters.  The `reference_id` must be unique for each `order_details` message for the same business. If the partner would like to send multiple order\_details messages for the same order, invoice, and so on, it is recommended to include a sequence number in the `reference_id` (for example, <order-or-invoice-id>-<sequence-number>) to ensure `reference_id` uniqueness. |
| `type`  object | **Required.**  The type of goods being paid for in this order. Current supported options are `digital-goods` and `physical-goods` |
| `beneficiaries`  array | **Required for shipped physical-goods.**  An array of beneficiaries for this order. A beneficiary is an intended recipient for shipping the physical goods in the order. It contains the following fields:  Beneficiary information isn't shown to users but is needed for legal and compliance reasons.  `name` string   * **Required.** Name of the individual or business receiving the physical goods. Cannot exceed 200 characters   `address_line1` string   * **Required.** Shipping address (Door/Tower Number, Street Name, and so on). Cannot exceed 100 characters   `address_line2` string   * **Optional.** Shipping address (Landmark, Area, and so on). Cannot exceed 100 characters   `city` string   * **Required.** Name of the city.   `state` string   * **Required.** Name of the state.   `country` string   * **Required.** Must be "India".   `postal_code` string   * **Required.** 6-digit zipcode of shipping address. |
| `payment_type` | **Required.**  Must be "upi". |
| `payment_settings` | **Required.** See [Payment Settings Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links#payment_settings) for more details. |
| `currency` | **Required.**  The currency for this order. Currently the only supported value is `INR`. |
| `total_amount`  object | **Required.**  The `total_amount` object contains the following fields:  `offset` integer   * **Required.** Must be `100` for `INR`.   `value` integer   * **Required.** Positive integer representing the amount value multiplied by offset. For example, ₹12.34 has value 1234.   `total_amount.value` must be equal to `order.subtotal.value` + `order.tax.value` + `order.shipping.value` - `order.discount.value`. |
| `order`  object | **Required.**  See [order object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links#ordobject) for more information. |

#### Payment Setting Object

| Object | Description |
| --- | --- |
| `type` string | **Required.** Must be `payment_link`. |
| `payment_link` object | **Required.** Refer [Payment Link Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links#payment_link) for more information. |

#### Payment link object

| Object | Description |
| --- | --- |
| `uri` string | **Required.** A valid payment link generated through payment gateway.  Generated payment links domains needs to be enabled to accept payments. Please reach out to whatsappindia-bizpayments-support@meta.com to know more. |
| `success_url` string | **Optional.** The flow terminated with success status, when success\_url is hit. |
| `cancel_url` string | **Optional.** The flow ends with failure, when the cancel\_url is triggered. |

#### Order object

| Object | Description |
| --- | --- |
| `status`  string | **Required.**  Only supported value in the `order_details` message is `pending`.  In an `order_status` message, `status` can be: `pending`, `captured`, or `failed`. |
| `type`  string | **Optional.**  Only supported value is `quick_pay`. When this field is passed in, the API hides the "Review and Pay" button and only shows the "Pay Now" button in the order details bubble. |
| `items`  object | **Required.**  An object with the list of items for this order, containing the following fields:  `retailer_id` string   * **Optional.** Content ID for an item in the order from your catalog.   `name` string   * **Required.** The item's name to be displayed to the user. Cannot exceed 60 characters   `image` object   * **Optional.** Custom image for the item to be displayed to the user. See [item image object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/enhanced-payment-links#item_image_object) for information   Using this image field will limit the items array to a maximum of 10 items and this cannot be used with `retailer_id` or `catalog_id`.  `amount` amount object with value and offset -- refer total amount field above   * **Required.** The price per item   `sale_amount` amount object   * **Optional.** The discounted price per item. This should be less than the original amount. If included, this field is used to calculate the subtotal amount   `quantity` integer   * **Required.** The number of items in this order, this field cannot be decimal has to be integer.   `country_of_origin` string   * **Required** if `catalog_id` is not present. The country of origin of the product   `importer_name` string   * **Required** if `catalog_id` is not present. Name of the importer company   `importer_adress` string   * **Required** if `catalog_id` is not present. Address of importer company |
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

The `parameters` value is a stringified JSON object.

By the end, the interactive object should look something like this for a catalog-based integration:

```
{  
  "interactive": {  
    "type": "order_details",  
    "header": {  
      "type": "image",  
      "image": {  
        "link": "http(s)://the-url",  
        "provider": {  
          "name": "provider-name"  
        }  
      }  
    },  
    "body": {  
      "text": "your-text-body-content"  
    },  
    "footer": {  
      "text": "your-text-footer-content"  
    },  
    "action": {  
      "name": "review_and_pay",  
      "parameters": {  
        "reference_id": "reference-id-value",  
        "type": "digital-goods",  
        "payment_type": "upi",  
        "payment_settings": [  
          {  
            "type": "payment_link",  
            "payment_link": {  
              "uri": "https://the-payment-link"  
            }  
          }  
        ],  
        "currency": "INR",  
        "total_amount": {  
          "value": 21000,  
          "offset": 100  
        },  
        "order": {  
          "status": "pending",  
          "catalog_id": "the-catalog_id",  
          "expiration": {  
            "timestamp": "utc_timestamp_in_seconds",  
            "description": "cancellation-explanation"  
          },  
          "items": [  
            {  
              "retailer_id": "1234567",  
              "name": "Product name, for example bread",  
              "amount": {  
                "value": 10000,  
                "offset": 100  
              },  
              "quantity": 1,  
              "sale_amount": {  
                "value": 100,  
                "offset": 100  
              }  
            }  
          ],  
          "subtotal": {  
            "value": 20000,  
            "offset": 100  
          },  
          "tax": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text"  
          },  
          "shipping": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text"  
          },  
          "discount": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text",  
            "discount_program_name": "optional_text"  
          }  
        }  
      }  
    }  
  }  
}
```

The `parameters` value is a stringified JSON object.

For a non-catalog based integration i.e. when catalog-id is not present, an example payload looks as follows:

```
{  
  "interactive": {  
    "type": "order_details",  
    "header": {  
      "type": "image",  
      "image": {  
        "id": "your-media-id"  
      }  
    },  
    "body": {  
      "text": "your-text-body-content"  
    },  
    "footer": {  
      "text": "your-text-footer-content"  
    },  
    "action": {  
      "name": "review_and_pay",  
      "parameters": {  
        "reference_id": "reference-id-value",  
        "type": "digital-goods",  
        "payment_type": "upi",  
        "payment_settings": [  
          {  
            "type": "payment_link",  
            "payment_link": {  
              "uri": "https://the-payment-link"  
            }  
          }  
        ],  
        "currency": "INR",  
        "total_amount": {  
          "value": 21000,  
          "offset": 100  
        },  
        "order": {  
          "status": "pending",  
          "expiration": {  
            "timestamp": "utc_timestamp_in_seconds",  
            "description": "cancellation-explanation"  
          },  
          "items": [  
            {  
              "name": "Product name, for example bread",  
              "amount": {  
                "value": 10000,  
                "offset": 100  
              },  
              "quantity": 1,  
              "sale_amount": {  
                "value": 100,  
                "offset": 100  
              },  
              "country_of_origin": "country-of-origin",  
              "importer_name": "name-of-importer-business",  
              "importer_address": {  
                "address_line1": "B8/733 nand nagri",  
                "address_line2": "police station",  
                "city": "East Delhi",  
                "zone_code": "DL",  
                "postal_code": "110093",  
                "country_code": "IN"  
              }  
            },  
            {  
              "name": "Product name, for example bread",  
              "amount": {  
                "value": 10000,  
                "offset": 100  
              },  
              "quantity": 1,  
              "sale_amount": {  
                "value": 100,  
                "offset": 100  
              },  
              "country_of_origin": "country-of-origin",  
              "importer_name": "name-of-importer-business",  
              "importer_address": {  
                "address_line1": "B8/733 nand nagri",  
                "address_line2": "police station",  
                "city": "East Delhi",  
                "zone_code": "DL",  
                "postal_code": "110093",  
                "country_code": "IN"  
              }  
            }  
          ],  
          "subtotal": {  
            "value": 20000,  
            "offset": 100  
          },  
          "tax": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text"  
          },  
          "shipping": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text"  
          },  
          "discount": {  
            "value": 1000,  
            "offset": 100,  
            "description": "optional_text",  
            "discount_program_name": "optional_text"  
          }  
        }  
      }  
    }  
  }  
}
```

### Step 3: Add common message parameters

Once the interactive object is complete, append the other parameters that make a message: `recipient_type`, `to`, and `type`. Remember to set the `type` to `interactive`.

```
{  
   "messaging_product": "whatsapp",  
   "recipient_type": "individual",  
   "to": "PHONE_NUMBER",  
   "type": "interactive",  
   "interactive": {  
     // interactive object here  
   }  
 }
```

These are [parameters common to all message types](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#requests).

### Step 4: Make a POST call to messages endpoint

Make a POST call to the [`/[PHONE_NUMBER_ID]/messages`](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) endpoint with the `JSON` object you have assembled. If your message is sent successfully, you get the following response:

```
{  
  "messaging_product": "whatsapp",  
  "contacts": [ {  
      "input": "[PHONE_NUMBER_ID]",  
      "wa_id": "[PHONE-NUMBER_ID]"  
  } ],  
  "messages": [ {  
      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA"  
  } ]  
}
```

#### Errors

###### WhatsApp Payments terms of service acceptance pending

If you see the following error, accept the WhatsApp Payments terms of service using the link provided in the error message before trying again.

```
{  
  "error": {  
    "message": "(#134011) WhatsApp Payments terms of service has not been accepted",  
    "type": "OAuthException",  
    "code": 134011,  
    "error_data": {  
      "messaging_product": "whatsapp",  
      "details": "WhatsApp Payments Terms of Service acceptance pending for this WhatsApp Business Account.  
Please use the following link to accept terms of service before using Business APIs: https://fb.me/12345"  
    }  
  }  
}
```

For all other errors that can be returned and guidance on how to handle them, see [WhatsApp Cloud API, Error Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Step 5: Consumer pays for the order

Consumers can pay using WhatsApp payment method or using any UPI supported app that is installed on the device.

### Step 6: Get notified about transaction status updates from payment gateway

Businesses receive updates to the invoice via payment gateway webhooks, when the status of the user-initiated transaction changes. The unique identifier reference-id passed in `order_details` message can be used to map the transaction to the consumer invoice or interactive order details message.

### Step 7: Update order status

Upon receiving transaction signals from payment gateway through webhook, the business must update the order status to keep the user up to date. The following order status values are supported:

![Order status flow diagram: Pending leads to Shipped, Partially Shipped or Processing, then Completed or Canceled](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/565718019_1339318281260156_7557207642198018127_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=VHtEQoEQySoQ7kNvwGr8AF3&_nc_oc=AdpOWGva2mva_h03J3BrydUw-Nub4d3uQD1xe9kAxVh7R8zORlf8htd5vU0wS9PzdlDybJLXkebNivc3VoMUjlzK&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=XUm6JBOZPML8X6xfEQKQig&_nc_ss=7b2a8&oh=00_AQBuRJzuU07Ki1yr25kqOCZslcGC44uqSOWSQdM2Rf536g&oe=6A606F35)

| Value | Description |
| --- | --- |
| `pending` | User has not successfully paid yet |
| `processing` | User payment authorized, merchant/partner is fulfilling the order, performing service, and so on |
| `partially-shipped` | A portion of the products in the order have been shipped by the merchant |
| `shipped` | All the products in the order have been shipped by the merchant |
| `completed` | The order is completed and no further action is expected from the user or the partner/merchant |
| `canceled` | The partner/merchant would like to cancel the `order_details` message for the order/invoice. The status update will fail if there is already a `successful` or `pending` payment for this `order_details` message |

Typically businesses update the `order_status` using either the WhatsApp payment status change notifications or their own internal processes. To update `order_status`, the partner sends an `order_status` message to the user.

```
{  
  "recipient_type": "individual",  
  "to": "whatsapp-id",  
  "type": "interactive",  
  "interactive": {  
    "type": "order_status",  
    "body": {  
      "text": "your-text-body-content"  
    },  
    "action": {  
      "name": "review_order",  
      "parameters": {  
        "reference_id": "reference-id-value",  
        "order": {  
          "status": "processing | partially_shipped | shipped | completed | canceled",  
          "description": "optional-text"  
        }  
      }  
    }  
  }  
}
```

The following table describes the returned values:

| Value | Description |
| --- | --- |
| `reference_id` | The ID provided by the partner in the `order_details` message |
| `status` | The new order `status` |
| `description` | Optional text for sharing status related information in `order_details`. Could be useful while sending cancellation. Max character limit is 120 characters |

Merchant should always post this order-status message to consumer after receiving transaction updates for an order. As the order\_details message and order details screen experience is tied to the order status updates.

### Step 8: Reconcile payments

Businesses should use their bank statements to reconcile the payments using the `reference_id` provided in the `order_details` messages.

## Checklist for integrated merchants

* Ensure that `order_status` message is sent to consumer informing them about updates to an order after receiving transaction updates for an order.
* Ensure the merchant is verified and WABA contact is marked with a verified check.
* Verify the WABA is mapped to appropriate merchant initiated messaging tier (1k, 10k, and 100k per day).
* Merchant should list the customer support information in the profile screen in case consumer wants to report any issues.
