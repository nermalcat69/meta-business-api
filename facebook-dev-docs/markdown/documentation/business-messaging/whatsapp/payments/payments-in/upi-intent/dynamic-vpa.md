---
title: "Onboarding APIs"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent/dynamic-vpa
---

# Onboarding APIs

Updated: May 21, 2026

To receive payments on WhatsApp, you must have a payment configuration linked to the corresponding WhatsApp Business account. Each payment configuration is associated with a unique name. As part of the order\_details message, you can specify the payment configuration to use for a specific checkout.

Onboarding APIs allows you to programmatically perform certain operations:

* Get all payment configurations linked to a WhatsApp Business account.
* Get a specific payment configuration linked to a WhatsApp Business account.
* Create a payment configuration.
* Regenerate payment gateway OAuth link to link payment configuration to a payment gateway.
* Remove a payment configuration.

## Get all payment configurations

Get a list of payment configurations linked to the WhatsApp Business account.

### Request syntax

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configurations
```

### Sample request

```
curl 'https://graph.facebook.com/v16.0/102290129340398/payment_configurations' \  
-H 'Authorization: Bearer EAAJB...'
```

### Sample response

```
{  
  "data": [  
    {  
      "payment_configurations": [  
    {  
      "configuration_name": "test-payment-configuration",  
      "merchant_category_code": {  
        "code": "0000",  
            "description": "Test MCC Code"  
       },  
           "purpose_code": {  
         "code": "00",  
         "description": "Test Purpose Code"  
        },  
        "status": "Active",  
         "provider_mid": "test-payment-gateway-mid",  
        "provider_name": "RazorPay",  
        "created_timestamp": 1720203204,  
        "updated_timestamp": 1721088316  
    },  
          ....  
  ]  
     }  
  ]  
}
```

| Field | Description |
| --- | --- |
| `configuration_name`  string | **Required.**  The name of the payment configuration to be used in the Order Details message. |
| `merchant_category_code`  object | **Required.**  Merchant Category Code:  `code` string   * **Required.** Will be a valid MCC code.   `description` string   * **Required.** MCC code description. |
| `purpose_code`  object | **Required.**  Purpose Code:  `code` string   * **Required.** Will be a valid purpose code.   `description` string   * **Required.** Purpose code description. |
| `status`  string | **Required.**  Status of the payment configuration. Must be one of ["Active", "Needs\_Connecting", "Needs\_Testing"]. |
| `provider_mid`  string | **Optional.**  Payment Gateway Merchant Identification Number (MID). |
| `provider_name`  string | **Optional.**  Payment Gateway Name. Must be one of ["razorpay", "payu", "zaakpay"]. |
| `merchant_vpa`  string | **Optional.**  Merchant UPI handle. |
| `created_timestamp`  integer | **Optional.**  Time when payment configuration was created. |
| `updated_timestamp`  integer | **Optional.**  Time when payment configuration was last updated. |

## Get a specific payment configuration

Get a specific payment configuration linked to the WhatsApp Business account.

### Request syntax

```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration/<CONFIGURATION_NAME>
```

### Sample request

```
curl 'https://graph.facebook.com/v16.0/102290129340398/payment_configuration/test-payment-configuration' \  
-H 'Authorization: Bearer EAAJB...'
```

### Sample response

```
{  
  "data": [  
    {  
      "configuration_name": "test-payment-configuration",  
      "merchant_category_code": {  
        "code": "0000",  
        "description": "Test MCC Code"  
      },  
      "purpose_code": {  
        "code": "00",  
        "description": "Test Purpose Code"  
      },  
      "status": "Active",  
      "provider_mid": "test-payment-gateway-mid",  
      "provider_name": "RazorPay",  
      "created_timestamp": 1720203204,  
      "updated_timestamp": 1721088316  
     }  
  ]  
}
```

| Field | Description |
| --- | --- |
| `configuration_name`  string | **Required.**  The name of the payment configuration to be used in the Order Details message. |
| `merchant_category_code`  object | **Required.**  Merchant Category Code:  `code` string   * **Required.** Will be a valid MCC code.   `description` string   * **Required.** MCC code description. |
| `purpose_code`  object | **Required.**  Purpose Code:  `code` string   * **Required.** Will be a valid purpose code.   `description` string   * **Required.** Purpose code description. |
| `status`  string | **Required.**  Status of the payment configuration. Must be one of ["Active", "Needs\_Connecting", "Needs\_Testing"]. |
| `provider_mid`  string | **Optional.**  Payment Gateway Merchant Identification Number (MID). |
| `provider_name`  string | **Optional.**  Payment Gateway Name. Must be one of ["razorpay", "payu", "zaakpay"]. |
| `merchant_vpa`  string | **Optional.**  Merchant UPI handle. |
| `created_timestamp`  integer | **Optional.**  Time when payment configuration was created. |
| `updated_timestamp`  integer | **Optional.**  Time when payment configuration was last updated. |

## Create a payment configuration

Create a payment configuration.

### Request syntax

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration
```

### Sample request

#### Payment gateway type configuration

```
curl -X  POST \  
'https://graph.facebook.com/v15.0/102290129340398/payment_configuration' \  
-H 'Authorization: Bearer EAAJB...' \  
-H 'Content-Type: application/json' \  
-d '{  
       "configuration_name": "test-payment-configuration",  
       "purpose_code": "00",  
       "merchant_category_code": "0000",  
       "provider_name": "razorpay",  
       "redirect_url": "https://test-redirect-url.com"  
    }'
```

#### UPI VPA type configuration

```
curl -X  POST \  
'https://graph.facebook.com/v15.0/102290129340398/payment_configuration' \  
-H 'Authorization: Bearer EAAJB...' \  
-H 'Content-Type: application/json' \  
-d '{  
       "configuration_name": "test-payment-configuration",  
       "purpose_code": "00",  
       "merchant_category_code": "0000",  
       "provider_name": "upi_vpa",  
       "merchant_vpa": "test-upi-merchant-vpa@test"  
    }'
```

| Field | Description |
| --- | --- |
| `configuration_name`  string | **Required.**  The name of the payment configuration to be used in the Order Details message. |
| `merchant_category_code`  string | **Optional.**  Merchant Category Code. |
| `purpose_code`  object | **Optional.**  Purpose Code. |
| `provider_name`  string | **Required.**  Provider name of the payment configuration. Must be one of ["upi\_vpa", "razorpay", "payu", "zaakpay"]. |
| `merchant_vpa`  string | **Optional.**  Merchant UPI handle. |
| `redirect_url`  URI | **Optional.**  The url which merchant will be redirected to after successfully linking a payment configuration. |

### Sample response

#### Payment gateway type configuration

```
{  
  "oauth_url": "https://www.facebook.com/payment/onboarding/init/",  
  "expiration": 1721687287,  
  "success": true  
}
```

#### UPI VPA type configuration

```
{  
  "success": true  
}
```

| Field | Description |
| --- | --- |
| `oauth_url`  string | **Optional.**  OAuth url to be used to link payment configuration to the payment gateway |
| `expiration`  integer | **Optional.**  Expiration time of the OAuth url. |
| `success`  boolean | **Required.**  Boolean flag to denote if payment configuration creation was successful or not. |

## Link or update data endpoint

The following section explains how to link, update, and delete data endpoint to enable coupons, shipping address and real-time inventory offered by [Checkout Button Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/checkout-button-templates#enabling_coupons_inventory).

### Request syntax

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration/<CONFIGURATION_NAME>
```

### Sample request

#### Payment gateway type configuration

```
curl -X  POST \  
'https://graph.facebook.com/v15.0/102290129340398/payment_configuration/test-payment-configuration' \  
-H 'Authorization: Bearer EAAJB...' \  
-H 'Content-Type: application/json' \  
-d '{  
       "data_endpoint_url": "https://test-data-endpoint-url.com"  
    }'
```

| Field | Description |
| --- | --- |
| `data-endpoint-url`  URI | **Optional.**  The URL endpoint that the WhatsApp client sends a secure HTTPS request to for data exchange purposes in [Checkout Button Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/checkout-button-templates#enabling_coupons_inventory) offering. |

## Regenerate payment configuration OAuth link

Regenerate OAuth link of payment gateway type payment configuration.

### Request syntax

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/generate_payment_configuration_oauth_link
```

### Sample request

```
curl -X  POST \  
'https://graph.facebook.com/v15.0/102290129340398/generate_payment_configuration_oauth_link' \  
-H 'Authorization: Bearer EAAJB...' \  
-H 'Content-Type: application/json' \  
-d '{  
       "configuration_name": "test-payment-configuration",  
       "redirect_url": "https://test-redirect-url.com"  
    }'
```

| Field | Description |
| --- | --- |
| `configuration_name`  string | **Required.**  The name of the payment configuration to be used in the Order Details message. |
| `redirect_url`  URI | **Optional.**  The url which merchant will be redirected to after successfully linking a payment configuration. |

### Sample response

```
{  
  "oauth_url": "https://www.facebook.com/payment/onboarding/init/",  
  "expiration": 1721687287  
}
```

| Field | Description |
| --- | --- |
| `oauth_url`  string | **Optional.**  OAuth url to be used to link payment configuration to the payment gateway |
| `expiration`  integer | **Optional.**  Expiration time of the OAuth url. |

## Remove a payment configuration

Remove a payment configuration.

### Request syntax

```
DELETE /<WHATSAPP_BUSINESS_ACCOUNT_ID>/payment_configuration
```

| Field | Description |
| --- | --- |
| `configuration_name`  string | **Required.**  The name of the payment configuration to be used in the Order Details message. |

### Sample request

```
curl -X  DELETE \  
'https://graph.facebook.com/v15.0/102290129340398/payment_configuration' \  
-H 'Authorization: Bearer EAAJB...' \  
-H 'Content-Type: application/json' \  
-d '{  
       "configuration_name": "test-payment-configuration"  
    }'
```

### Sample response

```
{  
  "success": true  
}
```

| Field | Description |
| --- | --- |
| `success`  boolean | **Required.**  Boolean flag to denote if payment configuration removal was successful or not. |

## Payment Configuration Webhook

Businesses receive updates via WhatsApp webhooks when the status of the payment configuration changes.

To receive webhook, Businesses must subscribe to "payment\_configuration\_update" event for their respective application.

Webhook contains the following fields:

| Field | Description |
| --- | --- |
| `configuration_name`  string | **Required.**  The name of the payment configuration to be used in the Order Details message. |
| `provider_name`  string | **Required.**  Provider name of the payment configuration. Must be one of ["razorpay", "payu", "zaakpay"]. |
| `provider_mid`  string | **Required.**  Payment gateway account merchant ID. |
| `status`  string | **Required.**  Status of the payment configuration. Must be one of ["Active", "Needs\_Connecting", "Needs\_Testing"]. |
| `created_timestamp`  integer | **Required.**  Time when payment configuration was created. |
| `updated_timestamp`  integer | **Required.**  Time when payment configuration was last updated. |

### Sample payment configuration webhook

```
{  
  "entry": [  
    {  
      "id": "0",  
      "time": 1725499886,  
      "changes": [  
        {  
          "field": "payment_configuration_update",  
          "value": {  
            "configuration_name": "test-payment-configuration",  
            "provider_name": "razorpay",  
            "provider_mid": "test-provider-mid",  
            "status": "Needs Testing",  
            "created_timestamp": 123457678,  
            "updated_timestamp": 123457678  
          }  
        }  
      ]  
    }  
  ],  
  "object": "whatsapp_business_account"  
}
```

### Errors

#### WhatsApp Payments terms of service acceptance pending

If you see the following error, accept the WhatsApp Payments terms of service using the link provided in the error message before trying again.

```
{  
  "error": {  
    "message": "(#131005) Access denied",  
    "type": "OAuthException",  
    "code": 131005,  
    "error_data": {  
      "messaging_product": "whatsapp",  
      "details": "WhatsApp Payments Terms of Service acceptance pending for this WhatsApp Business Account.  
Please use the following link to accept terms of service before using Business APIs: https://fb.me/12345"  
    }  
  }  
}
```

For all other errors that can be returned and guidance on how to handle them, see [WhatsApp Cloud API, Error Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).
