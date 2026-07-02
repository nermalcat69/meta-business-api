---
title: "One-Click Payments"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement
---

# One-Click Payments

Updated: Jun 30, 2026

This feature is not publicly available yet and is only available for businesses based in Brazil and their Brazilian customers. To enable payments for your businesses, please contact your Solution Partner.

Payments API also enables businesses to collect payments from their customers via WhatsApp using One-Click Payments.

When using this integration, WhatsApp facilitates communication between merchants and buyers. Merchants are responsible for storing payment credentials and integrating with a payment service provider (PSP) to submit these credentials, then complete and confirm the payments.

## Before you start

* Familiarize yourself with the [Orders API](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders). Orders are the entrypoint for collecting payments in WhatsApp.
* You will need an existing integration with a PSP and perform automatic reconciliation when a payment is made.
* You must update the order status as soon as a payment is made.

## Integration steps

The following sequence diagram shows the typical integration with One-Click Payments.

![Sequence diagram of One-Click Payments flow between Buyer, WhatsApp, Merchant, and PSP/Acquirer](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/560189002_1339318344593483_6488145365318201089_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lUiqF6DsQK4Q7kNvwEyMH78&_nc_oc=Adpbl7OwrvyOSwGocu3e2Gxu_cDmQMmwob_qZXOApKubww_7sBVX6wjsOqhf7bHZInuYIXPgOMrBOu5npXXW0-vJ&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=BslXGvg1e_DNWP_0vpn0bw&_nc_ss=7b2a8&oh=00_AQAPTDSg5Q643tEI6MOtbYe3VKWFQIJUgbKeSixb9UsGhg&oe=6A605828)

### 1. Send an order details message

Follow the full integration guide in the [Orders API page](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders).

If One-Click Payments is available on this order, you will need to provide an `offsite_card_pay` object in the `payment_settings` attribute. You can optionally include an `order` object with itemized products, fees, and discounts, or send a simplified message with just the total amount and payment settings.

The following images show how the order details message with One-Click Payments appears in WhatsApp, in both full and simplified versions.

![Full order details message with One-Click Payments showing itemized products, card ending in 1234, and Review payment button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/673815587_1482949453563704_2192854088357669533_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=XqhRKiAzinIQ7kNvwFcbIE1&_nc_oc=AdovymxFsHHQLPzUDcWixEVXi07ffzRQfuEdeVCM1NmAhr64TM0C47AkBFhZhkxCVUH1MBPQesYn_uHaBFuh2PKq&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=BslXGvg1e_DNWP_0vpn0bw&_nc_ss=7b2a8&oh=00_AQBEjBqCBWErgpGIBJNBH0zmEIZovF999T3bnT-OUkhWwQ&oe=6A605FC6)![Simplified order details message with One-Click Payments showing total amount, card ending in 1234, and Review payment button](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/672338884_1482949460230370_3565215131767087588_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=f9xE_SYrXmwQ7kNvwHCQJQI&_nc_oc=AdqzuQjy7BQfwtcoVhXDEIkZZGXKPBfnJb44yQ2tfFGwlBYoFljj3iQUBbWwm66AMNanQNo3p0u6k42QMNtRFGbK&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=BslXGvg1e_DNWP_0vpn0bw&_nc_ss=7b2a8&oh=00_AQDAdDbcPEOePWu5-ISln9QUDc4vx10Mb5-B9p_dNYdkfA&oe=6A6046FA)

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
        "reference_id": "<UNIQUE_REFERENCE_ID>",  
        "type": "digital-goods",  
        "payment_type": "br",  
        "payment_settings": [  
          {  
            "type": "offsite_card_pay",  
            "offsite_card_pay": {  
              "last_four_digits": "5235",  
              "credential_id": "1234567"  
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

You can send a simplified order details message without the `order` object. The simplified payload is useful when you don’t need to send itemized product details and only need to collect the total payment amount.

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
        "reference_id": "<UNIQUE_REFERENCE_ID>",  
        "type": "digital-goods",  
        "payment_type": "br",  
        "payment_settings": [  
          {  
            "type": "offsite_card_pay",  
            "offsite_card_pay": {  
              "last_four_digits": "5235",  
              "credential_id": "1234567"  
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
| `payment_settings` | Optional | [Payment Settings Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement#paymentsettingsobject) | List of payment related configuration objects. |

#### Payment settings

| Field Name | Optional? | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | String | Must be `offsite_card_pay`. |
| `offsite_card_pay` | Required | [Offsite Card Pay Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement#offsitecardpayobject) | Offsite Card Pay object that will be used to render the option to buyers during the checkout flow. |

#### Offsite card pay object

| **Field Name** | **Optional?** | **Type** | **Description** |
| --- | --- | --- | --- |
| `last_four_digits` | Required | String | The last four digits of the card, which will be displayed to the user for confirmation before they accept the payment (by tapping the “Send payment” CTA button). |
| `credential_id` | Required | String | The ID of the credential associated with the card. After the user taps the “Send payment” CTA button, the merchant will receive a webhook from Meta notifying that confirmation from the user. The payload of that webhook will contain this `credential_id`, which the merchant will use to determine the card or credential for payments. |

### 2. Receive the webhook notification

After the WhatsApp user taps “Review payment”, they see the payment confirmation screen shown below.

![One-Click Payments confirmation screen showing card details, total amount, and Send payment button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/672132965_1482949450230371_6445601384729249309_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gG5eZD7RWSkQ7kNvwHJT134&_nc_oc=Ado8cXSNZk2cf7wmMmcOtLWBGmjT4S9pSBCBWZsTkTAQMbmMyFFJVGr6iBREc9wU3sKMmeLKgeXVP4OioOSRZQj5&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=BslXGvg1e_DNWP_0vpn0bw&_nc_ss=7b2a8&oh=00_AQBJLD2N_fOBvk6MDUVw5IwNlSW4zkyJE5pbl1vS1QQ4rQ&oe=6A6063BA)

This webhook confirms the buyer’s intention to make a payment and includes the ID of the credential to use.

#### Webhook notification payload example

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "<WHATSAPP_USER_NAME>"  
                },  
                "wa_id": "<WHATSAPP_USER_ID>"  
              }  
            ],  
            "messages": [  
              {  
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",  
                "id": "<WHATSAPP_MESSAGE_ID>",  
                "timestamp": "<WEBHOOK_SENT_TIMESTAMP>",  
                "from_logical_id": "64244926160970",  
                "type": "interactive",  
                "interactive": {  
                  "type": "payment_method",  
                  "payment_method": {  
                    "payment_method": "offsite_card_pay",  
                    "payment_timestamp": 1726170122,  
                    "reference_id": "pix_test_webhook",  
                    "last_four_digits": "5235",  
                    "credential_id": "1234567"  
                  }  
                }  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```
```

### 3. Send an order status update

After the buyer confirms the payment, you must send an order status update. Follow the integration guide in the [Orders API page](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders).
