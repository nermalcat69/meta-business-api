---
title: "Receipt template"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates/structured-information-template
---

# Receipt template

Updated: Jun 17, 2026

The receipt template allows you to send an order confirmation as a structured message. The template may include an order summary, payment details, and shipping information.

## Request URI

```
https://graph.facebook.com/v25.0/me/messages?access_token={PAGE_ACCESS_TOKEN}
```

## Payload properties

| Property | Type | Description |
| --- | --- | --- |
| `template_type` | String | Must be `receipt`. |
| `sharable` | Boolean | *Optional.* Set to `true` to enable the native share button in Messenger for the template message. Defaults to `false`. |
| `recipient_name` | String | The recipient’s name. |
| `merchant_name` | String | *Optional.* The merchant’s name. If present, the `merchant_name` value is shown as logo text. |
| `order_number` | String | The order number. Must be unique. |
| `currency` | String | The currency of the payment. |
| `payment_method` | String | The payment method used. Provide enough information for the end user to identify which payment method and account they used. This can be a custom string, such as “Visa 1234”. |
| `timestamp` | String | *Optional.* Timestamp of the order in seconds. |
| `elements` | Array | *Optional.* Array of a maximum of 100 `element` objects that describe items in the order. Sort order of the elements is not guaranteed. |
| `address` | Object | *Optional.* The shipping address of the order. See `address` properties below. |
| `summary` | Object | The payment summary. See `summary` properties below. |
| `adjustments` | Array | *Optional.* An array of `adjustment` objects that describe payment adjustments, such as discounts. |

### `address` properties

| Property | Type | Description |
| --- | --- | --- |
| `street_1` | String | The street address, line 1. |
| `street_2` | String | *Optional.* The street address, line 2. |
| `city` | String | The city name of the address. |
| `postal_code` | String | The postal code of the address. |
| `state` | String | The state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses. |
| `country` | String | The two-letter country abbreviation of the address. |

### `summary` properties

The property values of the `summary` object should be valid, well-formatted decimal numbers, using `.` (dot) as the decimal separator. Most currencies only accept up to 2 decimal places.

| Property | Type | Description |
| --- | --- | --- |
| `subtotal` | Number | *Optional.* The sub-total of the order. |
| `shipping_cost` | Number | *Optional.* The shipping cost of the order. |
| `total_tax` | Number | *Optional.* The tax of the order. |
| `total_cost` | Number | The total cost of the order, including sub-total, shipping, and tax. |

### `adjustment` properties

| Property | Type | Description |
| --- | --- | --- |
| `name` | String | Required if the `adjustments` array is set. Name of the adjustment. |
| `amount` | Number | Required if the `adjustments` array is set. The amount of the adjustment. |

### `element` properties

| Property | Type | Description |
| --- | --- | --- |
| `title` | String | The name to display for the item. |
| `subtitle` | String | *Optional.* The subtitle for the item, usually a brief item description. |
| `quantity` | Number | *Optional.* The quantity of the item purchased. |
| `price` | Number | The price of the item. For free items, `0` is allowed. |
| `currency` | String | *Optional.* The currency of the item price. |
| `image_url` | String | *Optional.* The URL of an image to be displayed with the item. |

## Sample request

```
curl -X POST -H "Content-Type: application/json" -d '{
  "recipient":{
    "id":"<PSID>"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"receipt",
        "recipient_name":"Stephane Crozatier",
        "order_number":"12345678902",
        "currency":"USD",
        "payment_method":"Visa 2345",
        "order_url":"http://originalcoastclothing.com/order?order_id=123456",
        "timestamp":"1428444852",
        "address":{
          "street_1":"1 Hacker Way",
          "street_2":"",
          "city":"Menlo Park",
          "postal_code":"94025",
          "state":"CA",
          "country":"US"
        },
        "summary":{
          "subtotal":75.00,
          "shipping_cost":4.95,
          "total_tax":6.19,
          "total_cost":56.14
        },
        "adjustments":[
          {
            "name":"New Customer Discount",
            "amount":20
          },
          {
            "name":"$10 Off Coupon",
            "amount":10
          }
        ],
        "elements":[
          {
            "title":"Classic White T-Shirt",
            "subtitle":"100% Soft and Luxurious Cotton",
            "quantity":2,
            "price":50,
            "currency":"USD",
            "image_url":"http://originalcoastclothing.com/img/whiteshirt.png"
          },
          {
            "title":"Classic Gray T-Shirt",
            "subtitle":"100% Soft and Luxurious Cotton",
            "quantity":1,
            "price":25,
            "currency":"USD",
            "image_url":"http://originalcoastclothing.com/img/grayshirt.png"
          }
        ]
      }
    }
  }
}' "https://graph.facebook.com/v25.0/me/messages?access_token=<PAGE_ACCESS_TOKEN>"
```

## Sample response

```
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}
```

## Best practices

* Continue to keep people informed. After the receipt is delivered, send timely updates that contain shipping and delivery confirmation.
* Do not use the receipt template to communicate info unrelated to purchases. It should only be used to confirm a previous transaction.
