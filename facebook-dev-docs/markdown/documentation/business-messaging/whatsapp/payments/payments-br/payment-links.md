---
title: "Offsite Pix payments"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-links
---

# Offsite Pix payments

Updated: Jun 30, 2026

The Payments API enables businesses to collect payments from their customers via WhatsApp using dynamic Pix codes.

When using this integration, WhatsApp only facilitates the communication between merchants and buyers. Merchants are responsible for integrating with a bank or PSP in order to generate dynamic Pix codes, and confirm their payment.

## Before you start

* Familiarize yourself with the [Orders API](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders). Orders are the entrypoint for collecting payments in WhatsApp.
* You need an existing integration with a bank or PSP to generate dynamic Pix codes and do automatic reconciliation when a payment is made. You must be able to update the order status as soon as a payment is made.

## Integration steps

The following sequence diagram shows the typical integration with Pix.

![Sequence diagram of WhatsApp Pix payment flow between PSP/Bank, Merchant, WhatsApp, Buyer, and Buyer's Bank](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/559928787_1339318127926838_2798974158408097525_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=SgQrA4pnQIcQ7kNvwFoHZYe&_nc_oc=AdpnutG23jnqTbt2xn141bTZwhNFXeZAXpXAGrbHhA-nQx1cry4zadas-R7iXixLWNCpFEK9hPX_QmB_gKGuUvZf&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=MhTr2nGoH5gvT6lGHIQ1GA&_nc_ss=7b2a8&oh=00_AQCfNQyS5Gh6hoMPuu3GaHTERV_7tHENsTrFVogeoXbBNw&oe=6A605DAD)

### 1. Send an order details message

Follow the full integration guide in the [Orders API page](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders).

If Pix is available on this order, provide a `pix_dynamic_code` to the `payment_settings` attribute. You can optionally include an `order` object with itemized products, fees, and discounts, or send a simplified message with just the total amount and payment settings.

The following images show how the order details message with Pix appears in WhatsApp, in both full and simplified versions.

![Full order details message with Pix payment showing itemized products and Copy Pix code button](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/672383950_1482949490230367_8421252382529780742_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Irp5vIEpXgoQ7kNvwE5bzsA&_nc_oc=AdqV7hjxsEP9sk_JTv_HMtAAGo5txXyBQQoU_1H78gNqa2hlX2xLHhSVpSYvwIc2xZiQH-nZew0hehN2FiWYfalL&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=MhTr2nGoH5gvT6lGHIQ1GA&_nc_ss=7b2a8&oh=00_AQD9LZhPeC-a5EIP_KD8Y7rjWRPodVIZ3l7TToRz4OQnOA&oe=6A607671)![Simplified order details message with Pix payment showing total amount and Copy Pix code button](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/672670425_1482949493563700_8054150270835736863_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PWrgDQo2Q7AQ7kNvwHgMN2o&_nc_oc=Adr6fpnmqXhvgdeq1_jfiAphYMLwKEZu1pBKnk0DVdVu-gZUvU1OseSGPAJKYoswzv3ss4VIppZAhP-9D630K2wc&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=MhTr2nGoH5gvT6lGHIQ1GA&_nc_ss=7b2a8&oh=00_AQCQhCM6xNsKKic6nPbRoPwnC16d_u7Ab5RRNEQkYpAu6A&oe=6A606C85)

#### Endpoint

```
```
POST /{PHONE_NUMBER_ID}/messages
```
```

#### Payload example

```
```
{  
  "recipient_type": "individual",  
  "to": "<PHONE_NUMBER>",  
  "type": "interactive",  
  "interactive": {  
    "type": "order_details",  
    "body": {  
      "text": "Your message content"  
    },  
    "action": {  
      "name": "review_and_pay",  
      "parameters": {  
        "reference_id": "unique-reference-id",  
        "type": "digital-goods",  
        "payment_type": "br",  
        "payment_settings": [  
          {  
            "type": "pix_dynamic_code",  
            "pix_dynamic_code": {  
              "code": "00020101021226700014br.gov.bcb.pix2548pix.example.com...",  
              "merchant_name": "Account holder name",  
              "key": "39580525000189",  
              "key_type": "CNPJ"  
            }  
          }  
        ],  
        "currency": "BRL",  
        "total_amount": {  
          "value": 50000,  
          "offset": 100  
        },  
        "order": {  
          "status": "pending",  
          "tax": {  
            "value": 0,  
            "offset": 100,  
            "description": "optional text"  
          },  
          "items": [  
            {  
              "retailer_id": "1234567",  
              "name": "Cake",  
              "amount": {  
                "value": 50000,  
                "offset": 100  
              },  
              "quantity": 1  
            }  
          ],  
          "subtotal": {  
            "value": 50000,  
            "offset": 100  
          }  
        }  
      }  
    }  
  }  
}
```
```

#### Simplified payload example

You can send a simplified order details message without the `order` object. This is useful when you don’t need to send itemized product details and only need to collect the total payment amount.

```
```
{  
  "recipient_type": "individual",  
  "to": "<PHONE_NUMBER>",  
  "type": "interactive",  
  "interactive": {  
    "type": "order_details",  
    "body": {  
      "text": "Your message content"  
    },  
    "action": {  
      "name": "review_and_pay",  
      "parameters": {  
        "reference_id": "unique-reference-id",  
        "type": "digital-goods",  
        "payment_type": "br",  
        "payment_settings": [  
          {  
            "type": "pix_dynamic_code",  
            "pix_dynamic_code": {  
              "code": "00020101021226700014br.gov.bcb.pix2548pix.example.com...",  
              "merchant_name": "Account holder name",  
              "key": "39580525000189",  
              "key_type": "CNPJ"  
            }  
          }  
        ],  
        "currency": "BRL",  
        "total_amount": {  
          "value": 50000,  
          "offset": 100  
        }  
      }  
    }  
  }  
}
```
```

#### Parameters object

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| `payment_settings` | Optional | [Payment Settings Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-links#paymentsettingsobject) | List of payment related configuration objects. |

#### Payment settings

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | String | Must be `pix_dynamic_code`. |
| `pix_dynamic_code` | Required | [Dynamic Pix Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-links#dynamicpixobject) | Dynamic Pix Code object that will be used to render the option to buyers during the checkout flow. |

#### Dynamic Pix code object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| `code` | Required | String | The dynamic Pix code which will be copied by the buyer. |
| `merchant_name` | Required | String | Account holder name. Displayed in-app for the buyer for informational purposes. |
| `key` | Required | String | Pix key. Displayed in-app for the buyer for informational purposes. |
| `key_type` | Required | String | Pix key type. One of `CPF`, `CNPJ`, `EMAIL`, `PHONE` or `EVP`. |

### 2. Send an order status update

Once the payment is confirmed, you must send an order status update. Follow the integration guide in the [Orders API page](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders).
