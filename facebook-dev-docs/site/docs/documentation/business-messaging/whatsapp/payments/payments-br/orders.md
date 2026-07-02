---
title: "Orders"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders
---

# Orders

Updated: Jun 30, 2026

Payments API introduces two new types of [interactive messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#interactive-messages): `order_details` and `order_status`. These two message types are the entrypoint to collect payment in WhatsApp.

* Send an `order_details` message to create an order in the buyer’s WhatsApp client app. This message includes the payment settings used to collect payment and can optionally include an `order` object with itemized products, fees, and discounts. Without the `order` object, you can send a simplified order details message with just the total amount and payment settings. The payment settings will vary depending on the integration type ([Pix](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix), [payment links](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-links), [Boleto](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/boleto), [One Click Payments](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/one-click-payments)).
* Send an `order_status` message when you update the order status, either based on the WhatsApp payment status change notification or based on your internal processes. You can also send a simplified status update without the `order` object.

![Order status flow diagram: Pending leads to Shipped, Partially Shipped, or Processing, then to Completed or Canceled](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/565718019_1339318281260156_7557207642198018127_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=VHtEQoEQySoQ7kNvwGr8AF3&_nc_oc=AdpOWGva2mva_h03J3BrydUw-Nub4d3uQD1xe9kAxVh7R8zORlf8htd5vU0wS9PzdlDybJLXkebNivc3VoMUjlzK&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=owR1KblxjNFJLxJPYoyWuw&_nc_ss=7b2a8&oh=00_AQCuy2uTR2pZd4A0tHUepccAl3sLz2e3-5vsMZtM3LALKA&oe=6A606F35)

When attached to an order details message, orders start in `pending` status. When the merchant has fully fulfilled the order and the buyer should not expect any further updates, the order must be marked as `completed`.

## Sending order messages

Both message types contain the same 4 main components of an interactive message: *header*, *body*, *footer*, and *action*. The parameters in the *action* component will vary based on the message type. In addition, both `order_details` and `order_status` messages can optionally include an `order` object containing a list of items, fees, and other details about the order.

Once the interactive message object is assembled, make a POST call to the [messages endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#messages). Remember to set the type to `interactive`.

### Order details example

The following images show how the full and simplified `order_details` messages appear in WhatsApp. The full version includes itemized products, while the simplified version displays only the total amount.

![Full order details message showing itemized products, payment methods, and total amount in a WhatsApp conversation](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/672671792_1482949470230369_3595354703933395831_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5WMl_DaQp1gQ7kNvwFQYiOb&_nc_oc=Ado6QdfhHAhBc0MH2S-flgjU4Rp_inZS3siCPJ3TO_aSyaXNNjS84ryIA1vAMZjnT3hzo43mW2JZxQxG7QK43ESr&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=owR1KblxjNFJLxJPYoyWuw&_nc_ss=7b2a8&oh=00_AQA-aCaHP6BAMYXm0Kyw_CtO_2sOUEQxcYyQi08T2szHpA&oe=6A606E7D)![Simplified order details message showing only the total amount and payment methods in a WhatsApp conversation](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/672671469_1482949480230368_4856741402553535910_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AZ313VmpHA8Q7kNvwFL9vYw&_nc_oc=AdoD-Dm52p-GN5A0UE1q-k6d9AkFj9jum2e4-jhBaXHDdRvk7QJfvUAiwobeurGm6Yf-eevs3xBGJv2A7fDIWOQl&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=owR1KblxjNFJLxJPYoyWuw&_nc_ss=7b2a8&oh=00_AQAvvYaL2dCRxqtPOTKS9q8OFCRCQOhY1m6vqxrRMjALUw&oe=6A60489F)

#### Endpoint

```
POST /{PHONE_NUMBER_ID}/messages
```

#### Request body

```
```
{
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "order_details",
    "body": {
      "text": "Your message content"
    },
    "action": {
      "name": "review_and_pay",
      "parameters": {
        "reference_id": "unique-reference-id",
        "type": "digital-goods",
        "payment_type": "br",
        "payment_settings": [
          {
            "type": "payment_link",
            "payment_link": {
              "uri": "https://my-payment-link-url"
            }
          }
        ],
        "currency": "BRL",
        "total_amount": {
          "value": 50000,
          "offset": 100
        },
        "order": {
          "status": "pending",
          "tax": {
            "value": 0,
            "offset": 100,
            "description": "optional text"
          },
          "items": [
            {
              "retailer_id": "1234567",
              "name": "Cake",
              "amount": {
                "value": 50000,
                "offset": 100
              },
              "quantity": 1
            }
          ],
          "subtotal": {
            "value": 50000,
            "offset": 100
          }
        }
      }
    }
  }
}
```
```

### Simplified order details message

You can send a simplified order details message without the `order` object. The simplified order details message is useful when you don’t need to send itemized product details and only need to collect the total payment amount.

Simplified order details messages do not support an image header. Instead of the thumbnail image, the total payment amount is displayed prominently at the top of the message. If an image is a required part of your use case, consider using the [Payment Request CTA Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-request-cta) solution instead.

#### Endpoint

```
POST /{PHONE_NUMBER_ID}/messages
```

#### Request body

```
```
{
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "order_details",
    "body": {
      "text": "Your message content"
    },
    "action": {
      "name": "review_and_pay",
      "parameters": {
        "reference_id": "unique-reference-id",
        "type": "digital-goods",
        "payment_type": "br",
        "payment_settings": [
          {
            "type": "payment_link",
            "payment_link": {
              "uri": "https://my-payment-link-url"
            }
          }
        ],
        "currency": "BRL",
        "total_amount": {
          "value": 50000,
          "offset": 100
        }
      }
    }
  }
}
```
```

### Order status example

The following images show how the `order_status` message appears in WhatsApp after the payment is confirmed, for both the full and simplified versions.

![Full order details message with paid status in a WhatsApp conversation](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/671831234_1482949466897036_4859858914316070498_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_dtirr4zN6kQ7kNvwFbfUWe&_nc_oc=Adq2e8QiiLrU8OFKMuYyPe6IHLkKJM9dw6I3Tc-6zMDjo3t_gGCUcR4qdImKf7MsZSrQBPlHyuRHyJUCXqQzttkY&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=owR1KblxjNFJLxJPYoyWuw&_nc_ss=7b2a8&oh=00_AQCy-J3pGye6oV8ydcpzsgkr98aRFVRRRpdR-1uZZ5FtvA&oe=6A606C02)![Simplified order details message with paid status in a WhatsApp conversation](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/672031825_1482949476897035_4475141346611238505_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lPhFdcy45VYQ7kNvwEhAl6q&_nc_oc=AdprIdI9QLcQCEcNFCwYP1u8SajBCNXsyabwCtCmKbZrPmqlqRlGKMHz8VHTitXgcgxkzBPari2pW8NGhuTD3hN-&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=owR1KblxjNFJLxJPYoyWuw&_nc_ss=7b2a8&oh=00_AQDOxpPPx1xOq3vvwbCa1ns5qE6_C-wZ5JydIXNPm1MK9g&oe=6A6063E4)

#### Endpoint

```
POST /{PHONE_NUMBER_ID}/messages
```

#### Request body

```
```
{
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "order_status",
    "body": {
      "text": "your-mandatory-text-body-content"
    },
    "footer": {
      "text": "your-optional-text-footer-content"
    },
    "action": {
      "name": "review_order",
      "parameters": {
        "reference_id": "unique-reference-id",
        "order": {
          "status": "processing"
        },
        "payment": {
          "status": "captured",
          "timestamp": 1722445231
        }
      }
    }
  }
}
```
```

### Simplified order status example

#### Endpoint

```
POST /{PHONE_NUMBER_ID}/messages
```

#### Request body

```
```
{
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER>",
  "type": "interactive",
  "interactive": {
    "type": "order_status",
    "body": {
      "text": "your-mandatory-text-body-content"
    },
    "footer": {
      "text": "your-optional-text-footer-content"
    },
    "action": {
      "name": "review_order",
      "parameters": {
        "reference_id": "unique-reference-id",
        "payment": {
          "status": "captured",
          "timestamp": 1722445231
        }
      }
    }
  }
}
```
```

### Message response

For either type, if your message is sent successfully, you will get the following response:

```
```
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "[PHONE_NUMBER_ID]",
      "wa_id": "[PHONE-NUMBER_ID]"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA"
    }
  ]
}
```
```

For all errors that can be returned and guidance on how to handle them, see [Cloud API Errors Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

## Full API reference

### Order details

To send an order\_details message, businesses must assemble an interactive object of type order\_details with the following components:

#### Interactive object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| type | Required | String | Must be `order_details`. |
| header | Optional | Object | Thumbnail image for order details message. It has the following fields:   * `type`: Must be `image`. * `image`: See [Image Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#imageobject).   If the header is not present, the API finds the first product with an image and uses the product image for the thumbnail image. |
| body | Required | Object | An object with the body of the message. The object contains the following field:   * `text` string: The content of the message. Emojis and markdown are supported. Maximum length is 1024 characters. |
| footer | Optional | Object | An object with the footer of the message. The object contains the following field:   * `text` string: **Required** if footer is present. The footer content. Emojis, markdown, and links are supported. Maximum length is 60 characters. |
| action | Required | Action Object | See [Action Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#actionobject) below. |

#### Image object

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| link | Required | String | Url of the image. |

#### Action object

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| name | Required | String | Must be `review_and_pay`. |
| parameters | Required | Parameters Object | See [Parameters Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#paramsobject). |

#### Parameters object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| reference\_id | Required | String | Unique identifier for the order or invoice provided by the business. This cannot be an empty string and can only contain English letters, numbers, underscores, dashes, or dots, and should not exceed 60 characters.  The reference\_id must be unique for each order\_details message for the same business. If the partner would like to send multiple order\_details messages for the same order, invoice, and so on, include a sequence number in the reference\_id to ensure reference\_id uniqueness. |
| type | Required | String | Must be one of `digital-goods` or `physical-goods`. |
| `payment_type` | Required | String | Must be `br`. |
| `payment_settings` | Optional | [Payment Settings Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#paymentsettingsobject) | List of payment related configuration objects. |
| currency | Required | String | ISO 4217 currency code for the order. Must be `BRL` (Brazilian Real). |
| `total_amount` | Required | Amount Object | See [Amount Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#amountobject).  `total_amount.value` must be equal to `order.subtotal.value` + `order.tax.value` + `order.shipping.value` - `order.discount.value` |
| order | Optional | Order Object | See [Order Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#orderobject). |

#### Payment settings

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | String | One of `pix_dynamic_code`, `payment_link`, `boleto`. |
| One of the following objects: `pix_dynamic_code`, `payment_link`, `boleto`. | Required | Object | Payment instructions that the buyer sees during checkout. |

#### Order object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| status | Required | String | Status of the order. Only supported value here is `pending`. |
| catalog\_id | Optional | String | Unique identifier of the Facebook catalog being used by the business. |
| expiration | Optional | Expiration Object | Expiration for that order. The CTA for payment will be disabled after expiry on the user end. See [Expiration Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#expirationobject). |
| items | Required | List of Item Objects | List must have at least one item. See [Item Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#itemobject). |
| subtotal | Required | Amount Object | See [Amount Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#amountobject).  The value **must be equal** to sum of (`item.amount.value` or `item.sale_amount.value`) \* `item.quantity`.  The following fields are part of the `subtotal` object:  `offset` string   * **Required.** Must be `100` for `BRL`.   `value` string   * **Required.** Positive integer representing the amount value multiplied by offset. For example, S$12.34 has value 1234. |
| tax | Required | Amount With Description Object | The tax information for this order. Even though the object is required, the amount can be zero. When the amount is zero, the client does not render the tax line. See [Amount With Description Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#amountdescriptionobject). |
| shipping | Optional | Amount With Description Object | See [Amount Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#amountdescriptionobject). |
| discount | Optional | Discount Object | The discount for the order. See [Discount object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#discountobject). |

#### Expiration object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| timestamp | Required | String | UTC time in seconds. Minimum threshold is 300 seconds. |
| description | Required | String | Text explanation for when the order will expire. Max character limit is 120 characters. |

#### Item object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| `retailer_id` | Required | String | Content ID for an item in the order from your catalog. |
| name | Required | String | The item’s name to be displayed to the user. Cannot exceed 60 characters. |
| amount | Required | Amount Object | The price per item. See [Amount Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#amountobject). |
| quantity | Required | Integer | Number of items in this order. |
| sale\_amount | Optional | Amount Object | The discounted price per item. This should be less than the original amount. If included, this field is used to calculate the subtotal amount. See [Amount Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#amountobject). |

#### Discount object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| value | Required | Integer | Positive integer representing the amount value multiplied by offset. For example, 12.34 BRL has value 1234. |
| offset | Required | Integer | Must be `100` for `BRL`. |
| description | Optional | String | Max character limit is 60 characters. |
| `discount_program_name` | Optional | String | Text used for defining incentivized orders. If order is incentivized, the merchant needs to define this information. Max character limit is 60 characters. |

#### Amount object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| value | Required | Integer | Positive integer representing the amount value multiplied by offset. For example, 12.34 BRL has value 1234. |
| offset | Required | Integer | Must be `100` for `BRL`. |

#### Amount object (with description)

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| value | Required | Integer | Positive integer representing the amount value multiplied by offset. For example, 12.34 BRL has value 1234. |
| offset | Required | Integer | Must be `100` for `BRL`. |
| description | Optional | String | Max character limit is 60 characters. |

### Order status

To send an order\_status message, businesses must assemble an interactive object of type order\_status with the following components:

#### Interactive object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| type | Required | String | Must be `order_status`. |
| header | Optional | Object | Optional object for the message’s header for the message. |
| body | Required | Object | An object with the body of the message. The object contains the following field:   * `text` string: The content of the message. Emojis and markdown are supported. Maximum length is 1024 characters. |
| footer | Optional | Object | An object with the footer of the message. The object contains the following field:   * `text` string: **Required** if footer is present. The footer content. Emojis, markdown, and links are supported. Maximum length is 60 characters. |
| action | Required | Action Object | See [Action Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#statusactionobject) below. |

#### Action object

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| name | Required | String | Must be `review_order`. |
| parameters | Required | Parameters Object | See [Parameters Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#statusparamsobject). |

#### Parameters object

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| reference\_id | Required | String | The unique ID provided in the `order_details` message. |
| order | Optional | Order Object | See [Order Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#statusorderobject). |
| payment | Optional | Payment Object | See [Payment Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#statuspaymentobject). |

#### Order object

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| status | Required | String | The new order status. [See supported order status](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#orderstatussupported). |
| description | Optional | String | Optional text for sharing status related information in order-details page. Could be useful while sending cancellation. Length should not exceed 120 characters. |

#### Payment object

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| status | Required | String | The new payment status. [See supported payment status](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#paymentstatussupported). |
| timestamp | Optional | Integer | Optional epoch timestamp in seconds. |

#### Supported order status

The following order status values are supported:

| Value | Description |
| --- | --- |
| `pending` | Order is pending / not processed yet. |
| `processing` | Merchant/partner is fulfilling the order, performing service, and so on. |
| `partially_shipped` | The merchant has shipped part of the products in the order. |
| `shipped` | All the products in order have been shipped by the merchant. |
| `completed` | The order is completed and no further action is expected from the user or the partner/merchant. |
| `canceled` | The partner/merchant would like to cancel the order\_details message for the order/invoice. The status update will fail if there is already a successful or pending payment for this order\_details message. |

#### Supported payment status

The following payment status values are supported:

| Value | Description |
| --- | --- |
| `pending` | Payment is pending. |
| `captured` | Payment was successfully captured. Receiving this payment status will update the order bubble to include the “paid” label (with green checkmark). |
| `failed` | Payment failed. |

## Errors and statuses

These are the relevant errors for the WhatsApp Payments API:

| Error Code | Description |
| --- | --- |
| `2040 - Message is not supported` | The message you are trying to send cannot be received by this user |
| `2046 - Order status invalid transition` | The order status cannot be updated from the existing value to the new one |
| `2047 - Order cancellation failure` | The order could not be cancelled |

For a comprehensive list with detailed descriptions of error codes and HTTP status codes, please refer to our [Error Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) document.
