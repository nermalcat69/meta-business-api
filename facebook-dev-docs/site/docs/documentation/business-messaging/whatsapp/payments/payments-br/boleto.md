---
title: "Payment links"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/boleto
---

# Payment links

Updated: May 21, 2026

Payments API also enables businesses to collect payments from their customers via WhatsApp using Payment Links.

When using this integration, WhatsApp only facilitates the communication between merchants and buyers. Merchants are responsible for integrating with a PSP from which they can generate Payment Links, and confirm their payment.

## Before you start

* Familiarize yourself with the [Orders API](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders). Orders are the entry point for collecting payments in WhatsApp.
* You need an existing integration with a PSP to generate Payment Links and do automatic reconciliation when a payment is made.
* You must update the order status as soon as a payment is made.

## Integration steps

The following sequence diagram shows the typical integration with Payment Links.

![Sequence diagram of Payment Links flow between User, WhatsApp, Browser, Business, and Payment Gateway](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/560047558_1339318174593500_8182680878959019679_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=jhq_DtaDTI4Q7kNvwHPSMZt&_nc_oc=Adq0dfN7N6U0klYmb_s8n7TVEb42nQy5BhG4wBDhCXzfDvPMgGPi63QczDWk7bXWuKWxYa807XpawwoAghzxDSWE&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=_bixuZB_UbdpBtBW6T2EDA&_nc_ss=7b2a8&oh=00_AQA3HC6hlZbjHryxG99DGrraDT6HHUslCQ6cPLJwRLTYDA&oe=6A604F72)

### 1. Send an order details message

Follow the full integration guide in the [Orders API page](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders).

If Payment Link payment is available on this order, provide a `payment_link` in the `payment_settings` attribute. You can optionally include an `order` object with itemized products, fees, and discounts, or send a simplified message with just the total amount and payment settings.

The following images show how the order details message with Payment Links appears in WhatsApp, in both full and simplified versions.

![Full order details message with Payment Link showing itemized products and Open payment link button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/672159259_1482949483563701_4921268168995059725_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=TWlfrUchinkQ7kNvwFI9v0S&_nc_oc=AdoFdKoIwfRZuIRuevGXQ5NYtIMX74l3TnPYXCkA8FDgh86gUxN3HycQbVBviauAOe1IN0oMR3zl5FuIh_MyZ_7W&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=_bixuZB_UbdpBtBW6T2EDA&_nc_ss=7b2a8&oh=00_AQDAw7UtmjCmU53vVlAKtuWydZrGRLV_m8tumJlpNXGIjg&oe=6A604072)![Simplified order details message with Payment Link showing total amount and Open payment link button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/671847286_1482949486897034_2098909345778483921_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_MWwfd5qchYQ7kNvwGAwMic&_nc_oc=Adqxvko_meN05wh-zJcnNQs9C-6fNDzQrRAveEVI9Z6CY8JNO0FPp9WZpVvZly1pVSfHTkz1zNZcaGXXVx2i4p0E&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=_bixuZB_UbdpBtBW6T2EDA&_nc_ss=7b2a8&oh=00_AQBlNvJ_8IIRCacUpoyLoLLsOpRj0yuAnyu8EDLdm_VVQQ&oe=6A6048D1)

#### Endpoint

```
POST /{PHONE_NUMBER_ID}/messages
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
            "type": "payment_link",  
            "payment_link": {  
              "uri": "https://my-payment-link-url"  
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

You can send a simplified order details message without the `order` object. Sending a simplified order details message is useful when you don’t need to send itemized product details and only need to collect the total payment amount.

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
            "type": "payment_link",  
            "payment_link": {  
              "uri": "https://my-payment-link-url"  
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
| `payment_settings` | Optional | [Payment Settings Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/boleto#paymentsettingsobject) | List of payment related configuration objects. |

#### Payment settings

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | String | Must be `payment_link`. |
| `payment_link` | Required | [Payment Link Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/boleto#paymentlinkobject) | Payment Link object that WhatsApp uses to render the option to buyers during the checkout flow. |

#### Payment link object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| `uri` | Required | String | The Payment Link’s `uri` that the web browser opens when the user taps the Payment Link CTA button. |

### 2. Send an order status update

Once the payment is confirmed, you must send an order status update. Follow the integration guide in the [Orders API page](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders).
