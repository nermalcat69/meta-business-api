---
title: "Checkout button templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview
---

# Checkout button templates

Updated: May 21, 2026

Checkout button templates are marketing templates that can showcase one or more products along with corresponding checkout buttons that WhatsApp users can use to make purchases without leaving the WhatsApp client.

![WhatsApp chat from Lucky Shrub showing a back-in-stock product message with Buy now checkout button and Stop quick-reply button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/461864193_1053025166222560_1984323495828319066_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5JfUnsUgar4Q7kNvwGenhaW&_nc_oc=Adri9oeT4QPd7elOMgL17J8F0SIETlLDqoSNhWXTiw9mTTy7XyvXRZENZSFedUZIuV473p8Si_o5rNyRqi1crDKT&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQB4eGi8UiY74OQ94e8jBB5wEW9BIJYNeLWzH1VzlRj5IA&oe=6A60723C)

## Single products

Checkout button templates can show a single product image or video header, along with message body text, message footer, a single checkout button, and up to 9 quick-reply buttons.

![Checkout button template message with callouts labeling the image header, message body, message footer, checkout button, and quick-reply button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/461716389_980926930508984_4731907095777942335_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KEFuMnJPB4sQ7kNvwGQfE17&_nc_oc=AdrVRXr8LY2h-2Owr7BNfDNHroORBuGO1uu9TJpk4zr7h1_q5S0bffqvXJm9cEWlcMd9uXNZ_RcisAtQw9zgnAOv&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQDd6_O9kLd9Shhud7OJL6tqbIZ7MfaNQxaslGBz_qZ0hw&oe=6A605237)

WhatsApp users who tap the button will see details of the order:

![Order details screen with callouts labeling reference ID, item name, quantity, prices, subtotal, discount, shipping, tax, total amount, and expiration](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/461898315_2387340868275631_829544685895208004_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vSIZtbFUcAwQ7kNvwFPVDDO&_nc_oc=AdqOni1wWsc2TTBsPLTg5BmyhYGKnThhxrH66-GE15Vzwtt0i3dzFSBJG6cK7fIkf8VeqMIll88ZlNAH_Ud_gbUJ&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQC8rxxKMtZUlzVdLrLWlj5Cj35_YnD6u-2bqvcKfHEOkA&oe=6A60458B)

Users can proceed by selecting shipping information provided by you (if you know their information and supplied it in the send message payload)...

![Provide address screen with a saved address for Nidhi Tripathi previously shared with Lucky Shrub, plus an Add an address option](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/461872330_923861569791765_2740463248926355079_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4DQcF8ivtdYQ7kNvwEfdBuz&_nc_oc=Adp-mqD93xRI7kj8txlG0OcTGIfb6UjMeiND9qhG7ttic7BPNUJ3GqHhAIUmj-Muz4tM58SJo8KUHYiFeE-saVGz&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQA_zLAXGthW5rBMMJj4OBOrLxKvGaJz2P2NGZpsG9tRcw&oe=6A606D6A)

... or can add their own shipping information:

![Provide address form with empty Contact Details and Address Details fields for the user to enter a new shipping address](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/461774395_433815155940531_3266765354702751375_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ijl0ERZbN5kQ7kNvwFrOucN&_nc_oc=Adq4V0GU0Ka3xTAk4jYXJxQnKS9cegaq7K_l6WZx_Ss1EvLrRgsH3ywrM6CaYtUQPYnmt2V-ChvV6fzBS_EtV0NI&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQCNGPri3B_6BTci76znYFNv41HitF9q9C9pmYpwMh7xnw&oe=6A604819)

## Enabling coupons, real-time inventory, and pricing updates

Enabling coupons, real-time inventory and pricing updates is currently in beta and only available to India businesses and WhatsApp users with an India country calling code. Please reach out to whatsappindia-bizpayments-support@meta.com to know more.

To enable coupons, real-time inventory and pricing updates, you can set up a checkout endpoint that can exchange data in real time to update the order on the WhatsApp client. It enables businesses to receive the shipping address and offers coupons based on the order and allows users to apply the coupon. It also enables businesses to validate inventory and serviceability on the order before the user completes the checkout.

Setting up the checkout endpoint consists of the following steps and it’s the same method that [WhatsApp Flows endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint#implementing-endpoint-for-flows) uses to share the data with WhatsApp clients.

* Create a key pair and upload and sign the public key using the [Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/cloud-api/reference/whatsapp-business-encryption#set-business-public-key).
* [Setup the endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#setup_the_endpoint)
* [Implement Payload Encryption/Decryption](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#implement_encryption_decryption)
* [Link the checkout endpoint with payment configuration](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#link_checkout_endpoint)
* [Implement checkout endpoint logic](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#implement_checkout_logic)

### Set up the endpoint

WhatsApp client makes an HTTPS request to exchange the data with the business endpoint. You should make sure the endpoint is configured properly to accept the request and link the endpoint url with the [payment configuration](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#link-your-payment-account):

```
```
https://business.com/checkout
```
```

Your server must be enabled to receive and process `POST` requests, use `HTTPS` and have a valid TLS/SSL certificate installed. This certificate does not have to be used in payload encryption/decryption.

### Implement encryption/decryption

The body of each request contains the encrypted payload and has the following form:

#### Sample endpoint request syntax

```
```
{  
  encrypted_flow_data: "<ENCRYPTED_FLOW_DATA>",  
  encrypted_aes_key: "<ENCRYPTED_AES_KEY>",  
  initial_vector: "<INITIAL_VECTOR>"  
}
```
```

| Parameter | Description |
| --- | --- |
| `encrypted_flow_data` string | **Required.** The encrypted request payload. |
| `encrypted_aes_key` string | **Required.** The encrypted 128-bit AES key. |
| `initial_vector` string | **Required.** The 128-bit initialization vector. |

After processing the decrypted request, create a response and encrypt it before sending it back to the WhatsApp client. Encrypt the payload using the AES key received in the request and send it back as a Base64 string.

You can refer to examples of how to [decrypt and encrypt](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint#request-decryption-and-encryption).

If a request cannot be decrypted, the endpoint should return HTTP 421 response status code (see [Business Endpoint Error Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/reference/error-codes#endpoint_error_codes) for more details).

#### Sample endpoint response

```
```
curl -i -H "Content-Type: application/json" -X POST -d '{  
"encrypted_flow_data":"4Wor0bpfvrNqnkH+XQZLn3HnU2Zi7hG\\/UHjISS93Fzn9J7youssaLeXlNUH",  
"encrypted_aes_key":"ufA0fXD1Wz...",  
"initial_vector":"G\\/1rq1naEOMR4TJHFvIs\\/Q==."  
}' 'https://business.com/checkout'  
  
HTTP/2 200  
content-type: text/plain  
content-length: 232  
date: Wed, 06 Jul 2022 14:03:03 GMT  
  
yZcJQaH3AqfzKgjn64vAcASaJrOMN27S6CESyU68WN/cDCP6abskoMa/pPjszXGKyyh/23lw84HW6ZilMfU6KL3j5AWwOx6GWNwtq8Aj7gz/Y7R+LccmJWxKo2UccMu5xJlduIFlFlOS1gAnOwKrk8wpuprsi4jAOspw3xO2uh3J883aC/csu/MhRPiYCaGGy/tTNvVDmb2Gw1WXFmpvLsZ/SBrgG0cDQJjQzpTO
```
```

### Link the checkout endpoint with payment configuration

The business should have payment gateway based [payment configuration](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#link-your-payment-account) and reach out to whatsappindia-bizpayments-support@meta.com to enable the WhatsApp Business account for checkout endpoint linking with payment configuration.

Prior to linking the checkout endpoint, you should create a [payment configuration](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#link-your-payment-account) and link with the payment gateway account. Use the linked payment configuration only with checkout button template integration.

You can achieve the endpoint linking with payment configuration by following [Onboarding API’s - Link data endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis#link-or-update-data-endpoint)

### Implement checkout endpoint logic

WhatsApp checkout endpoint integration inherits the ‘data\_exchange’ similar to Flows and supports a set of subactions based on the user interaction and passes the relevant information in each of these actions to allow businesses to provide user specific coupons and enable businesses to update the pricing information accordingly.

| Sub Action | Method | Description |
| --- | --- | --- |
| `get_coupons` | Request | When users click on a savings offer CTA, WhatsApp passes [order parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) excluding the [payment settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). It also passes the `user phone number` as an input parameter.  ```  ``` {   "input":   {     "user_id": "user_phone_number"   } } ``` ```  Refer [get coupons request](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#get_coupon_request) example to understand the order and input parameters |
|  | Response | Checkout endpoint expected to pass the list of coupon information, such as code, id and description.  ```  ``` {   "coupons":     [         {             "code": "coupon_code",             "id": "coupon_id",             "description": "coupon_description"         }     ]  } ``` ```  Refer [get coupons response](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#get_coupon_response) example to understand the expected response. |
| `apply_coupon` | Request | When users select or enter a coupon, WhatsApp passes [order parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) excluding the [payment settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). It also passes the `user phone number` and information about the coupon to be applied as an input parameter.  ```  ``` {   "input":   {     "user_id": "user_phone_number",     "coupon":     {       "code": "WELCOME70"     }   } } ``` ```  Refer [apply coupon request](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#apply_coupon_request) example to understand the order and input parameters |
|  | Response | Checkout endpoint expected to update the item and order pricing in [order parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) and attach the coupon with the order  Refer to [apply coupon response](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#apply_coupon_response) example to understand the expected response. |
| `remove_coupon` | Request | When users try to remove an applied coupon, WhatsApp passes [order parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) excluding the [payment settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). It also passes the `user phone number` as an input parameter.  ```  ``` {   "input":   {     "user_id": "user_phone_number"   } } ``` ```  Refer [remove coupon request](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#remove_coupon_request) example to understand the expected response. |
|  | Response | Checkout endpoint expected to update the item and order pricing in [order parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) and remove the coupon attached with the order.  Refer [remove coupon response](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#remove_coupon_response) example to understand the expected response. |
| `apply_shipping` | Request | When users try to submit a shipping address, WhatsApp passes [order parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject) excluding the [payment settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paymentsettingsobject). It also passes the `user phone number` and shipping information as an input parameter.  ```  ``` {   "input":   {     "user_id": "user_phone_number"   } } ``` ```  Refer to the [apply shipping request](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#apply_shipping_request) example to understand the expected response. |
|  | Response | Checkout endpoint expected to update the item and shipping pricing in [order parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#paramobject).  Refer to the [apply shipping response](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#apply_shipping_response) example to understand the expected response. |

A [checkout endpoint example⁠](https://github.com/WhatsApp/WhatsApp-Checkout-Button-Template-Endpoint?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR411Hm3OQVk-IA1keJrs53DkMRDRVxRjwIu80MbBYBBS6H0ddKC2EIL2cffqg_aem_W_yAGUjdbVVZHjTRqiV9YQ) in Node.js is available that you can clone (remix) on Glitch to create your own endpoint and quickly prototype your checkout logic. Follow the instructions in the [README.md⁠](https://github.com/WhatsApp/WhatsApp-Checkout-Button-Template-Endpoint/blob/main/README.md?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5BDBNis-WtphCB_DUQostqjZvI4stmKVZInwoZUV-S6pj0Kb0sJbazp0vo8A_aem_vvUuXnnpV8HeG1VtjjNAcQ) file to get started. Using Glitch is entirely optional. You can clone the example code from Glitch and run it in any environment you prefer.

Upon completing the above steps, when business sends the checkout template with the linked payment configuration, WhatsApp enables the coupons, real-time inventory and pricing updates and allows users to apply coupons and share shipping addresses.

When enabled, the `Apply a savings offer` will appear in the order summary screen.

![Order details screen with an 'Apply a savings offer' option above the subtotal, discount, shipping, and tax breakdown](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/566208922_1339318471260137_8031940610378006006_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1ULIJr-FWcQQ7kNvwF8IfaR&_nc_oc=AdpISx8Wf3-72XDH6ORTIWOM8uNvi60qaWAh90ZEtCOoOoxBFHUUZsrsAnFHTpo3hizvv646yn5RBhdfBgrX4NfM&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQCkPGnSLjFgjnhjCALA3CrEQv49ExNSvKljSybOJ288hQ&oe=6A605060)

User can click on `Apply a savings offer` to explore the coupons, at this point WhatsApp makes `get_coupons` request to fetch the list of coupons based on the passed order and `user phone number` information.

![Savings offers screen with an offer code field and available coupons TRYNEW10, NEWEYE15, and WELCOME50](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/560013461_1339318424593475_5113635030322783543_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=e9PTpUmcR98Q7kNvwHornqC&_nc_oc=Adq2VEwY3dA48gpV4kMEjt7tCppqc1Lq6HT-NxRCH9hRxHhutsufrl0XNpJsFr9K6ZxH9mixs25Lf5UZd2J5RE4O&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQBSIS4-nEBTB7IFLNfw4T57vZaXqBL1xbE6TuOLaR1WZg&oe=6A60496B)

When the user tries to apply a coupon, WhatsApp makes `apply_coupon` and allow businesses to update the order or item pricing based on the selected coupon.

![Order details screen showing the WELCOME50 coupon applied with the resulting savings on the Lucky Shrub order](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/560498579_1339318444593473_8466127193448601632_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=uYHNk1ZDnIMQ7kNvwEmEEoy&_nc_oc=AdqDNqCjOcXnOQ82Bbm0DZhxLjkxeMnVaJGOk8MvSPakGop57xsrRfUYAaF-one9arONhwOTO1PwOJr6UrIvXyDS&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQB27kKaqCWy3Ap_T9OjhtubbRfjDp6U86VvATQrIATq8Q&oe=6A605F79)

Similar to coupons, user can share the shipping address by clicking on `Add shipping address` and select the addresses saved with the businesses or add new address. WhatsApp makes `apply_shipping` request when user tries to submit the address and allow businesses to check inventory and logistics based on the address provided.

![Order details screen with an 'Add shipping address' option and a discount already applied to the Lucky Shrub order](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/561725167_1339318187926832_1852627850653076539_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1ty7EbV-_rsQ7kNvwEogK3u&_nc_oc=Adr8hRjkPqeQeQPhOPg0spdToagyskGligAW8VXque_EmiyYw2KkArdZPvVXGO97HuMlsfyl09c0G0Kr_xEv35UU&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQDcLW0XSBF9qBNRMcUjqdSrCmgMzA8VVcs6vEpWPNNfrw&oe=6A604E12)![Provide address screen listing two saved addresses shared with Lucky Shrub plus an 'Add an address' option](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/560467967_1339318057926845_5662577297785116122_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=uY8cluIfdNIQ7kNvwFICzG1&_nc_oc=AdpWz2rIvAPSZP_DkfQdvvvr48YV226rCL_MWAuVoghsSSRD9uCIGShZ8fRgMkvmO_v0LUiRCajcrywAqsDvAfD4&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQB_Mw60R2Zeb_rScZ8PaGqLSHBiAjVQ7Q4xVkDa-h8g-A&oe=6A604A64)

Users can then continue to place the order using their preferred payment method set up in the WhatsApp client:

![Confirm payment screen for the Lucky Shrub order showing the total and a Pay with Google Pay button using UPI](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/461783140_456335920794267_694558377704466245_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fUMW2LVvv8YQ7kNvwHfry2C&_nc_oc=AdqAN_JcNLqjHhqNvFSGuuekJ9shC1sOBsgqp1YZojWSd5oL_XqoL-nYdoSci8cjyH9_TEZ-qIWnHPsQUQqEdKVA&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=s_IFkxhIGXLdPdPWY28xCQ&_nc_ss=7b2a8&oh=00_AQC2MMmXOpHT1ArK3fiv7fasRQY6zid1H8n150MIS-Ykdg&oe=6A60455D)

Once the order is processed, a [payment webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg#step-2--receive-webhook-about-transaction-status) is triggered.

## Multiple products

You can create a [media card carousel template](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) that showcases up to 10 products in a card carousel, each with their own checkout button. To do this, simply create a media card carousel template as you normally would, but replace one of the buttons with a [checkout button](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#checkout-buttons), and make sure that it is the first button in the card.

Checkout buttons in media card carousel templates trigger the same order and payment flow as checkout buttons in templates that showcase a single product.

## Checkout buttons

Each checkout button in a template must correspond to a single product. Checkout buttons, when creating a template, must have the following non-customizable syntax:

```
```
{  
  "type": "order_details",  
  "text": "Buy now"  
}
```
```

Note that this is simply a button definition. The actual details about the product that maps to this button are included when you [send the template](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#send-a-checkout-button-template) in a template message. For example:

```
```
{  
  "type": "button",  
  "sub_type": "order_details",  
  "index": 0,  
  "parameters": [  
    {  
      "type": "action",  
      "action": {  
        "order_details": {  
          "reference_id": "abc.123_xyz-1",  
          "type": "physical-goods",  
          "currency": "INR",  
          "payment_settings": [  
            {  
              "type": "payment_gateway",  
              "payment_gateway": {  
                "type": "razorpay",  
                "configuration_name": "prod-razor-pay-config-05"  
              }  
            }  
          ],  
          "shipping_info": {  
            "country": "IN",  
            "addresses": [  
              {  
                "name": "Nidhi Tripathi",  
                "phone_number": "919000090000",  
                "address": "Bandra Kurla Complex",  
                "city": "Mumbai",  
                "state": "Maharastra",  
                "in_pin_code": "400051",  
                "house_number": "12",  
                "tower_number": "5",  
                "building_name": "One BKC",  
                "landmark_area": "Near BKC Circle"  
              }  
            ]  
          },  
          "order": {  
            "items": [  
              {  
                "amount": {  
                  "offset": 100,  
                  "value": 200000  
                },  
                "sale_amount": {  
                  "offset": 100,  
                  "value": 150000  
                },  
                "name": "Blue Elf Aloe",  
                "quantity": 1,  
                "country_of_origin": "India",  
                "importer_name": "Lucky Shrub Imports and Exports",  
                "importer_address": {  
                  "address_line1": "One BKC",  
                  "address_line2": "Bandra Kurla Complex",  
                  "city": "Mumbai",  
                  "zone_code": "MH",  
                  "postal_code": "400051",  
                  "country_code": "IN"  
                }  
              }  
            ],  
            "subtotal": {  
              "offset": 100,  
              "value": 150000  
            },  
            "shipping": {  
              "offset": 100,  
              "value": 20000  
            },  
            "tax": {  
              "offset": 100,  
              "value": 10000  
            },  
            "discount": {  
              "offset": 100,  
              "value": 15000,  
              "description": "Additional 10% off"  
            },  
            "status": "pending",  
            "expiration": {  
              "timestamp": "1726627150"  
            }  
          },  
          "total_amount": {  
            "offset": 100,  
            "value": 165000  
          }  
        }  
      }  
    }  
  ]  
}
```
```

If you are sending a [media card carousel template](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) (which can have two or more products), each checkout button must be defined in the template, and the item details that map to each button must be included when sending the template.

## Creating checkout button templates

Use the [**POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/message\_templates**](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) endpoint to create a template that uses a checkout button.

### Request syntax

```
```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```
```

### Post body

The post body below is for a checkout button template that shows a single button. See the [Media Card Carousel Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) document to see carousel template post body syntax.

```
```
{  
  "name": "<TEMPLATE_NAME>",  
  "language": "<TEMPLATE_LANGUAGE>",  
  "category": "marketing",  
  "components": [  
    {  
      "type": "header",  
      "format": "<MESSAGE_HEADER_FORMAT>",  
      "example": {  
        "header_handle": [  
          "<MESSAGE_HEADER_ASSET_HANDLE>"  
        ]  
      }  
    },  
    {  
      "type": "body",  
      "text": "<MESSAGE_BODY_TEXT>",  
      "example": {  
        "body_text": [  
          [  
            "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>",  
            "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>"  
          ]  
        ]  
      }  
    },  
  
    /* Footer component is optional */  
    {  
      "type": "footer",  
      "text": "<MESSAGE_FOOTER_TEXT>"  
    },  
  
    {  
      "type": "buttons",  
      "buttons": [  
        {  
          "type": "order_details",  
          "text": "Buy now"  
        },  
  
        /* Quick-reply buttons are optional; up to 9 permitted */  
        {  
          "type": "quick_reply",  
          "text": "<QUICK_REPLY_BUTTON_LABEL_TEXT>"  
        }  
      ]  
    }  
  ]  
}
```
```

### Post body parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<MESSAGE_BODY_TEXT>`  *String* | **Required.**  Message body text. Supports variables.  Maximum 1024 characters. | `Hi {{1}}! The {{2}} is back in stock! Order now before it's gone!` |
| `<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>`  *String* | **Required if message body text string uses variables.**  Message body text example variable string(s). Number of strings must match the number of variable placeholders in the message body text string.  If message body text uses a single variable, `body_text` value can be a string, otherwise it must be an array containing an array of strings. | `Pablo` |
| `<MESSAGE_FOOTER_TEXT>`  *String* | **Required if using a message footer.**  Message footer text string.  60 characters maximum. | `Tap 'Stop' below to stop back-in-stock reminders.` |
| `<MESSAGE_HEADER_ASSET_HANDLE>`  *String* | **Required if using a non-text media header.**  Uploaded media asset handle. Use the [Resumable Upload API](https://developers.facebook.com/docs/graph-api/guides/upload) to generate an asset handle.  Media assets are automatically cropped to a wide ratio based on the WhatsApp user’s device. | `4::anBlZw==:ARa525ZJ1g0J-8egeiRvb4Z4r9RSi9qeKF7-wXsUiaDFsll5CKbu5H7h_9mTW0TDfA8LEGHC4bAeXtJJiVQADMp5Ooe2huQlhpBxMadJiu3qVg:e:1724535430:634974688087057:100089620928913:ARaQoFQMm6BlbI3MYo4` |
| `<MESSAGE_HEADER_FORMAT>`  *String* | **Required.**  Message header format. Value can be `image` or `video`. | `image` |
| `<QUICK_REPLY_BUTTON_LABEL_TEXT>`  *String* | **Required if using a quick-reply button.**  Quick-reply button label text.  Maximum 25 characters. | `Stop` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `item_back_in_stock_v1` |

### Example request

This example request creates a checkout button template with a single image message header, message body text that uses two variables, a footer, a single checkout button, and a quick-reply button.

```
curl 'https://graph.facebook.com/v25.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "item_back_in_stock_v1",
  "language": "en_US",
  "category": "marketing",
  "components": [
    {
      "type": "header",
      "format": "image",
      "example": {
        "header_handle": [
          "3:NDU..."
        ]
      }
    },
    {
      "type": "body",
      "text": "Hi {{1}}! The {{2}} is back in stock! Order now before it\'s gone!",
      "example": {
        "body_text": [
          [
            "Pablo",
            "Blue Elf Aloe"
          ]
        ]
      }
    },
    {
      "type": "footer",
      "text": "Tap \'Stop\' below to stop back-in-stock reminders."
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "order_details",
          "text": "Buy now"
        },
        {
          "type": "quick_reply",
          "text": "Stop"
        }
      ]
    }
  ]
}'
```

## Send a checkout button template

Once your checkout button template or carousel template has been approved, you can send it in a template message.

### Request syntax

Use the [**POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/messages**](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) endpoint to send an approved checkout button template or carousel template to a WhatsApp user.

```
```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```
```

### Post body

This post body syntax is for a checkout button template. See [Sending Media Card Carousel Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) for media card carousel template post body payload syntax.

```
```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "template",  
  "template": {  
    "name": "<TEMPLATE_NAME>",  
    "language": {  
      "policy": "deterministic",  
      "code": "<TEMPLATE_LANGUAGE>"  
    },  
    "components": [  
      {  
        "type": "header",  
        "parameters": [  
          {  
            "type": "<MESSAGE_HEADER_FORMAT>",  
            "<MESSAGE_HEADER_FORMAT>": {  
              "id": "<MESSAGE_HEADER_ASSET_ID>"  
            }  
          }  
        ]  
      },  
      {  
        "type": "body",  
        "parameters": [  
          {  
            <MESSAGE_BODY_TEXT_VARIABLE>  
          },  
          {  
            <MESSAGE_BODY_TEXT_VARIABLE>  
          }  
        ]  
      },  
      {  
        "type": "button",  
        "sub_type": "order_details",  
        "index": 0,  
        "parameters": [  
          {  
            "type": "action",  
            "action": {  
              "order_details": {  
                "reference_id": "<REFERENCE_ID>",  
                "currency": "INR",  
                "type": "<PRODUCT_TYPE>",  
                "payment_settings": [  
                  {  
                    "type": "payment_gateway",  
                    "payment_gateway": {  
                      "type": "<PAYMENT_GATEWAY_NAME>",  
                      "configuration_name": "<PAYMENT_GATEWAY_CONFIGURATION_NAME>"  
                    }  
                  }  
                ],  
  
                /* "shipping_info" required for physical-goods type, else omit */  
                "shipping_info": {  
                  "country": "IN",  
                  "addresses": [  
  
                    /* object required if you know recipient's address, otherwise omit (i.e., set "addresses" to an empty array) */  
                    {  
                      "name": "<SHIPPING_INFO_NAME>",  
                      "phone_number": "<SHIPPING_INFO_PHONE_NUMBER>",  
                      "address": "<SHIPPING_INFO_ADDRESS>",  
                      "city": "<SHIPPING_INFO_CITY>",  
                      "state": "<SHIPPING_INFO_STATE>",  
                      "in_pin_code": "<SHIPPING_INFO_INDIA_PIN>",  
                      "landmark_area": "<SHIPPING_INFO_LANDMARK_AREA>",  
                      "house_number": "<SHIPPING_INFO_HOUSE_NUMBER>",  
                      "tower_number": "<SHIPPING_INFO_TOWER_NUMBER>",  
                      "building_name": "<SHIPPING_INFO_BUILDING_NAME>"  
                    }  
  
                  ]  
                },  
  
                "order": {  
                  "items": [  
                    {  
                      "amount": {  
                        "offset": 100,  
                        "value": <ITEM_PRICE>  
                      },  
  
                      /* "sale_amount" optional */  
                      "sale_amount": {  
                        "offset": 100,  
                        "value": <SALE_PRICE>  
                      },  
  
                      "name": "<ITEM_NAME>",  
                      "quantity": <ITEM_QUANTITY>,  
                      "country_of_origin": "<ITEM_COUNTRY_OF_ORIGIN>",  
                      "importer_name": "<IMPORTER_NAME>",  
                      "importer_address": {  
                        "address_line1": "<IMPORTER_ADDRESS_LINE_1>",  
                        "address_line2": "<IMPORTER_ADDRESS_LINE_2>",  
                        "city": "<IMPORTER_CITY>",  
                        "zone_code": "<IMPORTER_ZONE_CODE>",  
                        "postal_code": "<IMPORTER_POSTAL_CODE>",  
                        "country_code": "IN"  
                      }  
                    }  
                  ],  
                  "subtotal": {  
                    "offset": 100,  
                    "value": <SUBTOTAL_AMOUNT>  
                  }  
                  "shipping": {  
                    "offset": 100,  
                    "value": <SHIPPING_AMOUNT>  
                  },  
                  "tax": {  
                    "offset": 100,  
                    "value": <TAX_AMOUNT>,  
                    "description": "<TAX_DESCRIPTION>"  
                  },  
  
                  /* "discount" optional */  
                  "discount": {  
                    "offset": 100,  
                    "value": <DISCOUNT_AMOUNT>,  
                    "description": "<DISCOUNT_DESCRIPTION>"  
                  },  
                  "status": "pending",  
  
                  /* "expiration" optional */  
                  "expiration": {  
                    "timestamp": "<EXPIRATION_TIMESTAMP>"  
                  }  
                },  
                "total_amount": {  
                  "offset": 100,  
                  "value": <TOTAL_AMOUNT>  
                }  
              }  
            }  
          }  
        ]  
      }  
    ]  
  }  
}
```
```

### Post body parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<DISCOUNT_AMOUNT>`  *Integer* | **Required if using a discount.**  Discount amount, multiplied by discount.offset value.  For example, to represent a discount of ₹2, the value would be `200`.  Discount amount applies to the order subtotal. | `15000` |
| `<DISCOUNT_DESCRIPTION>`  *String* | **Optional.**  Discount description.  Maximum 60 characters. | `Additional 10% off` |
| `<EXPIRATION_TIMESTAMP>`  *String* | **Required if using an order expiration.**  UTC timestamp indicating when we should disable the **Buy now** button. The timestamp will be used to generate a text string that appears at the bottom of the **Order details** window. For example:  *This order expires on September 30, 2024 at 12:00 PM.*  WhatsApp users who view the message after this time will be unable to purchase the item using the checkout button.  Values must represent a UTC time at least 300 seconds from when the send message request is sent to us. | `1726692927` |
| `<IMPORTER_ADDRESS_LINE_1>`  *String* | **Required.**  Importer address, line 1 (door, tower, number, street, etc.).  Maximum 100 characters. | `One BKC` |
| `<IMPORTER_ADDRESS_LINE_2>`  *String* | **Optional.**  Importer address, line 2 (landmark, area, etc.).  Maximum 100 characters. | `Bandra Kurla Complex` |
| `<IMPORTER_CITY>`  *String* | **Required.**  Importer city.  Maximum 120 characters. | `Mumbai` |
| `<IMPORTER_NAME>`  *String* | **Required.**  Importer name.  Maximum 200 characters. | `Lucky Shrub Imports and Exports` |
| `<IMPORTER_POSTAL_CODE>`  *String* | **Required.**  Importer 6-digit postal index number.  Maximum 6 digits. | `400051` |
| `<IMPORTER_ZONE_CODE>`  *String* | **Required.**  Importer two-letter zone code. | `MH` |
| `<ITEM_COUNTRY_OF_ORIGIN>`  *String* | **Required.**  Item’s country of origin.  Maximum 100 characters. | `India` |
| `<ITEM_NAME>`  *String* | **Required.**  Item name.  Maximum 60 characters. | `Blue Elf Aloe` |
| `<ITEM_PRICE>`  *Integer* | **Required.**  Individual item price (price per item), multiplied by amount.offset value.  For example, to represent an item price of ₹12.99, the value would be `1299`. | `200000` |
| `<ITEM_QUANTITY>`  *Integer* | **Required.**  Number of items in order, if order is placed.  Maximum 100 integers. | `1` |
| `<MESSAGE_BODY_TEXT_VARIABLE>`  *Object* | **Required if template message body text uses variables, otherwise omit.**  Object describing a message variable. If the template uses multiple variables, you must define an object for each variable.  Supports `text`, `currency`, and `date_time` types. See [Messages Parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#parameter-object).  There is no maximum character limit on this value, but it does count against the message body text limit of 1024 characters. | ``` { "type":"text", "text": "Nidhi" } ``` |
| `<MESSAGE_HEADER_ASSET_ID>`  *String* | **Required.**  Header asset’s uploaded media asset ID. Use the [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>/media**](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) endpoint to generate an asset ID. | `1558081531584829` |
| `<MESSAGE_HEADER_FORMAT>`  *String* | **Required.**  Indicates header type and a matching property name.  Note that the `<MESSAGE_HEADER_FORMAT>` placeholder appears twice in the post body example above, as it serves as a placeholder for the type property’s value and its matching property name.  Value can be `image` or `video`. | `image` |
| `<PAYMENT_GATEWAY_CONFIGURATION_NAME>`  *String* | **Required.**  Configuration name of payment gateway you have [configured](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis) on your WhatsApp Business Account. | `prod-razor-pay-config-05` |
| `<PAYMENT_GATEWAY_NAME>`  *String* | **Required.**  Name of payment gateway you have [configured](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis) on your WhatsApp Business Account.  Values can be:   * `razorpay` * `payu` * `zaakpay` | `razorpay` |
| `<PRODUCT_TYPE>`  *String* | **Required.**  Product type. Value can be `digital-goods` or `physical-goods`. | `digital-goods` |
| `<QUICK_REPLY_BUTTON_PAYLOAD>`  *String* | **Optional.**  Value to be included in messages webhooks (`messages.button.payload`) when the button is tapped. | `opt-out` |
| `<REFERENCE_ID>`  *String* | **Required.**  Your unique order or invoice reference ID. Case-sensitive. Cannot be empty. Will be preceded by a hash (#) symbol in the checkout flow.  Value must be unique for each checkout button template message. If sending a carousel template, each checkout button must have a unique reference ID.  If you need to send multiple messages for the same order/invoice, it is recommended to append a sequence number to the value (for example, -1).  Values can only contain English letters, numbers, underscores, dashes, or dots.  Maximum 35 characters. | `abc.123_xyz-1` |
| `<SALE_PRICE>`  *Integer* | **Required if using a sale amount.**  Sale price, multiplied by `sale.offset` value.  For example, to represent a sale price of ₹10, the value would be `1000`. | `150000` |
| `<SHIPPING_AMOUNT>`  *Integer* | **Required.**  Order shipping cost, multiplied by `shipping.offset` value.  For example, to represent a shipping cost of ₹.99, the value would be `99`. | `20000` |
| `<SHIPPING_INFO_ADDRESS>`  *String* | **Required if you know the recipient’s shipping information.**  Product recipient’s address.  Maximum 512 characters. | `Bandra Kurla Complex` |
| `<SHIPPING_INFO_BUILDING_NAME>`  *String* | **Optional.**  Product recipient’s building name.  Maximum 128 characters. | `One BKC` |
| `<SHIPPING_INFO_CITY>`  *String* | **Required if you know the recipient’s shipping information.**  Full name of product recipient’s city.  Maximum 100 characters. | `Mumbai` |
| `<SHIPPING_INFO_FLOOR_NUMBER>`  *String* | **Optional.**  Product recipient’s floor number.  Maximum 10 characters. | `2` |
| `<SHIPPING_INFO_HOUSE_NUMBER>`  *String* | **Optional.**  Product recipient’s house number.  Maximum 8 characters. | `12` |
| `<SHIPPING_INFO_INDIA_PIN>`  *String* | **Required if you know the recipient’s shipping information.**  Product recipient’s postal index number.  Maximum 6 characters. | `400051` |
| `<SHIPPING_INFO_LANDMARK_AREA>`  *String* | **Optional.**  Product recipient’s landmark area.  Maximum 128 characters. | `Near BKC Circle` |
| `<SHIPPING_INFO_NAME>`  *String* | **Required if you know the recipient’s shipping information.**  Product recipient’s full name.  Maximum 256 characters. | `Nidhi Tripathi` |
| `<SHIPPING_INFO_PHONE_NUMBER>`  *String* | **Required if you know the recipient’s shipping information.**  Product recipient’s WhatsApp phone number.  Maximum 12 characters. | `919000090000` |
| `<SHIPPING_INFO_STATE>`  *String* | **Required if you know the recipient’s shipping information.**  Full name of product recipient’s state.  Maximum 100 characters. | `Maharastra` |
| `<SHIPPING_INFO_TOWER_NUMBER>`  *String* | **Optional.**  Product recipient’s tower number.  Maximum 8 characters. | `2` |
| `<SUBTOTAL_AMOUNT>`  *Integer* | **Required.**  Order subtotal. Calculate by multiplying `<ITEM_PRICE>` by `<ITEM_QUANTITY>` by `subtotal.offset`.  For example, if the template is for placing a single order containing 2 items priced at ₹12.99, the value would be `2598`. | `150000` |
| `<TAX_AMOUNT>`  *Integer* | **Required.**  Tax amount, multiplied by `tax.offset`.  For example, to represent a tax amount of ₹5, the value would be `500`. | `10000` |
| `<TAX_DESCRIPTION>`  *String* | **Optional.**  Tax description.  Maximum 60 characters. | `Sales tax` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `item_back_in_stock_v1` |
| `<TOTAL_AMOUNT>`  *Integer* | **Required.**  Total amount of order, multiplied by `total_amount.offset` value.  For example, to represent a total amount of ₹18, value be `1800`.  Must be a sum of:   * `order.subtotal.value` * `order.shipping.value` * `order.tax.value`   Minus:   * `order.discount.value` | `165000` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "template",
  "template": {
    "name": "item_back_in_stock_v2",
    "language": {
      "policy": "deterministic",
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "image",
            "image": {
              "id": "1558081531584829"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Nidhi"
          },
          {
            "type": "text",
            "text": "Blue Elf Aloe"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "order_details",
        "index": 0,
        "parameters": [
          {
            "type": "action",
            "action": {
              "order_details": {
                "reference_id": "abc.123_xyz-1",
                "type": "physical-goods",
                "currency": "INR",
                "payment_settings": [
                  {
                    "type": "payment_gateway",
                    "payment_gateway": {
                      "type": "razorpay",
                      "configuration_name": "prod-razor-pay-config-05"
                    }
                  }
                ],
                "shipping_info": {
                  "country": "IN",
                  "addresses": [
                    {
                      "name": "Nidhi Tripathi",
                      "phone_number": "919000090000",
                      "address": "Bandra Kurla Complex",
                      "city": "Mumbai",
                      "state": "Maharastra",
                      "in_pin_code": "400051",
                      "house_number": "12",
                      "tower_number": "5",
                      "building_name": "One BKC",
                      "landmark_area": "Near BKC Circle"
                    }
                  ]
                },
                "order": {
                  "items": [
                    {
                      "amount": {
                        "offset": 100,
                        "value": 200000
                      },
                      "sale_amount": {
                        "offset": 100,
                        "value": 150000
                      },
                      "name": "Blue Elf Aloe",
                      "quantity": 1,
                      "country_of_origin": "India",
                      "importer_name": "Lucky Shrub Imports and Exports",
                      "importer_address": {
                        "address_line1": "One BKC",
                        "address_line2": "Bandra Kurla Complex",
                        "city": "Mumbai",
                        "zone_code": "MH",
                        "postal_code": "400051",
                        "country_code": "IN"
                      }
                    }
                  ],
                  "subtotal": {
                    "offset": 100,
                    "value": 150000
                  },
                  "shipping": {
                    "offset": 100,
                    "value": 20000
                  },
                  "tax": {
                    "offset": 100,
                    "value": 10000
                  },
                  "discount": {
                    "offset": 100,
                    "value": 15000,
                    "description": "Additional 10% off"
                  },
                  "status": "pending",
                  "expiration": {
                    "timestamp": "1726627150"
                  }
                },
                "total_amount": {
                  "offset": 100,
                  "value": 165000
                }
              }
            }
          }
        ]
      }
    ]
  }
}'
```

The following sample request and responses are only supported with [Enabling coupons, realtime inventory and pricing updates](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview#enabling_coupons_inventory) feature and it is currently in beta and only available to India businesses and WhatsApp users with an India country calling code. Please reach out to whatsappindia-bizpayments-support@meta.com to know more.

### Get coupons - endpoint sample request

```
```
      {  
    "data":  
    {  
        "order_details":  
        {  
            "reference_id": "abc.123_xyz-1",  
            "type": "physical-goods",  
            "currency": "INR",  
            "shipping_info":  
            {  
                "country": "IN",  
                "addresses":  
                [  
                    {  
                        "name": "Nidhi Tripathi",  
                        "phone_number": "919000090000",  
                        "address": "Bandra Kurla Complex",  
                        "city": "Mumbai",  
                        "state": "Maharastra",  
                        "in_pin_code": "400051",  
                        "house_number": "12",  
                        "tower_number": "5",  
                        "building_name": "One BKC",  
                        "landmark_area": "Near BKC Circle"  
                    }  
                ]  
            },  
            "order":  
            {  
                "items":  
                [  
                    {  
                        "amount":  
                        {  
                            "offset": 100,  
                            "value": 200000  
                        },  
                        "sale_amount":  
                        {  
                            "offset": 100,  
                            "value": 150000  
                        },  
                        "name": "Blue Elf Aloe",  
                        "quantity": 1,  
                        "country_of_origin": "India",  
                        "importer_name": "Lucky Shrub Imports and Exports",  
                        "importer_address":  
                        {  
                            "address_line1": "One BKC",  
                            "address_line2": "Bandra Kurla Complex",  
                            "city": "Mumbai",  
                            "zone_code": "MH",  
                            "postal_code": "400051",  
                            "country_code": "IN"  
                        }  
                    }  
                ],  
                "subtotal":  
                {  
                    "offset": 100,  
                    "value": 150000  
                },  
                "shipping":  
                {  
                    "offset": 100,  
                    "value": 20000  
                },  
                "tax":  
                {  
                    "offset": 100,  
                    "value": 10000  
                },  
                "discount":  
                {  
                    "offset": 100,  
                    "value": 15000,  
                    "description": "Additional 10% off"  
                },  
                "status": "pending",  
                "expiration":  
                {  
                    "timestamp": "1726627150",  
                    "description": "order expires in 5 min"  
                }  
            },  
            "total_amount":  
            {  
                "offset": 100,  
                "value": 165000  
            }  
        },  
        "input":  
        {  
            "user_id": "919000090000"  
        }  
    },  
    "action": "data_exchange",  
    "sub_action": "get_coupons",  
    "version": "1.0"  
}
```
```

### Get coupons - endpoint sample response

```
```
      {  
    "version": "1.0",  
    "sub_action": "get_coupons",  
    "data":  
    {  
        "coupons":  
        [  
            {  
                "description": "Save R20 on the order",  
                "code": "TRYNEW20",  
                "id": "try_new_20_id"  
            },  
            {  
                "description": "Save R30 on the order",  
                "code": "TRYNEW30",  
                "id": "try_new_30_id"  
            },  
            {  
                "description": "Save R50 on the order",  
                "code": "TRYNEW50",  
                "id": "try_new50_id"  
            }  
        ]  
    }  
}
```
```

### Apply coupon - endpoint sample request

```
```
      {  
    "data":  
    {  
        "order_details":  
        {  
            "reference_id": "abc.123_xyz-1",  
            "type": "physical-goods",  
            "currency": "INR",  
            "shipping_info":  
            {  
                "country": "IN",  
                "addresses":  
                [  
                    {  
                        "name": "Nidhi Tripathi",  
                        "phone_number": "919000090000",  
                        "address": "Bandra Kurla Complex",  
                        "city": "Mumbai",  
                        "state": "Maharastra",  
                        "in_pin_code": "400051",  
                        "house_number": "12",  
                        "tower_number": "5",  
                        "building_name": "One BKC",  
                        "landmark_area": "Near BKC Circle"  
                    }  
                ]  
            },  
            "order":  
            {  
                "items":  
                [  
                    {  
                        "amount":  
                        {  
                            "offset": 100,  
                            "value": 200000  
                        },  
                        "sale_amount":  
                        {  
                            "offset": 100,  
                            "value": 150000  
                        },  
                        "name": "Blue Elf Aloe",  
                        "quantity": 1,  
                        "country_of_origin": "India",  
                        "importer_name": "Lucky Shrub Imports and Exports",  
                        "importer_address":  
                        {  
                            "address_line1": "One BKC",  
                            "address_line2": "Bandra Kurla Complex",  
                            "city": "Mumbai",  
                            "zone_code": "MH",  
                            "postal_code": "400051",  
                            "country_code": "IN"  
                        }  
                    }  
                ],  
                "subtotal":  
                {  
                    "offset": 100,  
                    "value": 150000  
                },  
                "shipping":  
                {  
                    "offset": 100,  
                    "value": 20000  
                },  
                "tax":  
                {  
                    "offset": 100,  
                    "value": 10000  
                },  
                "discount":  
                {  
                    "offset": 100,  
                    "value": 15000,  
                    "description": "Additional 10% off"  
                },  
                "status": "pending",  
                "expiration":  
                {  
                    "timestamp": "1726627150",  
                    "description": "order expires in 5 min"  
                }  
            },  
            "total_amount":  
            {  
                "offset": 100,  
                "value": 165000  
            }  
        },  
        "input":  
        {  
            "user_id": "919000090000",  
            "coupon":  
            {  
                "code": "TRYNEW10"  
            }  
        }  
    },  
    "action": "data_exchange",  
    "sub_action": "apply_coupon",  
    "version": "1.0"  
}
```
```

### Apply coupon - endpoint sample response

```
```
      {  
    "sub_action": "apply_coupon",  
    "version": "1.0",  
    "data":  
    {  
        "order_details":  
        {  
            "reference_id": "abc.123_xyz-1",  
            "type": "physical-goods",  
            "currency": "INR",  
            "shipping_info":  
            {  
                "country": "IN",  
                "addresses":  
                [  
                    {  
                        "name": "Nidhi Tripathi",  
                        "phone_number": "919000090000",  
                        "address": "Bandra Kurla Complex",  
                        "city": "Mumbai",  
                        "state": "Maharastra",  
                        "in_pin_code": "400051",  
                        "house_number": "12",  
                        "tower_number": "5",  
                        "building_name": "One BKC",  
                        "landmark_area": "Near BKC Circle"  
                    }  
                ]  
            },  
            "order":  
            {  
                "items":  
                [  
                    {  
                        "amount":  
                        {  
                            "offset": 100,  
                            "value": 200000  
                        },  
                        "sale_amount":  
                        {  
                            "offset": 100,  
                            "value": 150000  
                        },  
                        "name": "Blue Elf Aloe",  
                        "quantity": 1,  
                        "country_of_origin": "India",  
                        "importer_name": "Lucky Shrub Imports and Exports",  
                        "importer_address":  
                        {  
                            "address_line1": "One BKC",  
                            "address_line2": "Bandra Kurla Complex",  
                            "city": "Mumbai",  
                            "zone_code": "MH",  
                            "postal_code": "400051",  
                            "country_code": "IN"  
                        }  
                    }  
                ],  
                "subtotal":  
                {  
                    "offset": 100,  
                    "value": 150000  
                },  
                "shipping":  
                {  
                    "offset": 100,  
                    "value": 20000  
                },  
                "tax":  
                {  
                    "offset": 100,  
                    "value": 10000  
                },  
                "discount":  
                {  
                    "offset": 100,  
                    "value": 15000,  
                    "description": "Additional 10% off"  
                },  
                "status": "pending",  
                "expiration":  
                {  
                    "timestamp": "1726627150",  
                    "description": "order expires in 5 min"  
                }  
            },  
            "coupon":  
            {  
                "code": "TRYNEW10",  
                "discount":  
                {  
                    "value": 16500,  
                    "offset": 100  
                }  
            },  
            "total_amount":  
            {  
                "offset": 100,  
                "value": 148500  
            }  
        }  
    }  
}
```
```

### Remove coupon - endpoint sample request

```
```
      {  
    "data":  
    {  
        "order_details":  
        {  
            "reference_id": "abc.123_xyz-1",  
            "type": "physical-goods",  
            "currency": "INR",  
            "shipping_info":  
            {  
                "country": "IN",  
                "addresses":  
                [  
                    {  
                        "name": "Nidhi Tripathi",  
                        "phone_number": "919000090000",  
                        "address": "Bandra Kurla Complex",  
                        "city": "Mumbai",  
                        "state": "Maharastra",  
                        "in_pin_code": "400051",  
                        "house_number": "12",  
                        "tower_number": "5",  
                        "building_name": "One BKC",  
                        "landmark_area": "Near BKC Circle"  
                    }  
                ]  
            },  
            "order":  
            {  
                "items":  
                [  
                    {  
                        "amount":  
                        {  
                            "offset": 100,  
                            "value": 200000  
                        },  
                        "sale_amount":  
                        {  
                            "offset": 100,  
                            "value": 150000  
                        },  
                        "name": "Blue Elf Aloe",  
                        "quantity": 1,  
                        "country_of_origin": "India",  
                        "importer_name": "Lucky Shrub Imports and Exports",  
                        "importer_address":  
                        {  
                            "address_line1": "One BKC",  
                            "address_line2": "Bandra Kurla Complex",  
                            "city": "Mumbai",  
                            "zone_code": "MH",  
                            "postal_code": "400051",  
                            "country_code": "IN"  
                        }  
                    }  
                ],  
                "subtotal":  
                {  
                    "offset": 100,  
                    "value": 150000  
                },  
                "shipping":  
                {  
                    "offset": 100,  
                    "value": 20000  
                },  
                "tax":  
                {  
                    "offset": 100,  
                    "value": 10000  
                },  
                "discount":  
                {  
                    "offset": 100,  
                    "value": 15000,  
                    "description": "Additional 10% off"  
                },  
                "status": "pending",  
                "expiration":  
                {  
                    "timestamp": "1726627150",  
                    "description": "order expires in 5 min"  
                }  
            },  
            "coupon":  
            {  
                "code": "TRYNEW10",  
                "discount":  
                {  
                    "value": 16500,  
                    "offset": 100  
                }  
            },  
            "total_amount":  
            {  
                "offset": 100,  
                "value": 148500  
            }  
        },  
        "input":  
        {  
            "user_id": "919000090000"  
        }  
    },  
    "action": "data_exchange",  
    "sub_action": "remove_coupon",  
    "version": "1.0"  
}
```
```

### Remove coupon - endpoint sample response

```
```
      {  
    "sub_action": "remove_coupon",  
    "version": "1.0",  
    "data":  
    {  
        "order_details":  
        {  
            "reference_id": "abc.123_xyz-1",  
            "type": "physical-goods",  
            "currency": "INR",  
            "shipping_info":  
            {  
                "country": "IN",  
                "addresses":  
                [  
                    {  
                        "name": "Nidhi Tripathi",  
                        "phone_number": "919000090000",  
                        "address": "Bandra Kurla Complex",  
                        "city": "Mumbai",  
                        "state": "Maharastra",  
                        "in_pin_code": "400051",  
                        "house_number": "12",  
                        "tower_number": "5",  
                        "building_name": "One BKC",  
                        "landmark_area": "Near BKC Circle"  
                    }  
                ]  
            },  
            "order":  
            {  
                "items":  
                [  
                    {  
                        "amount":  
                        {  
                            "offset": 100,  
                            "value": 200000  
                        },  
                        "sale_amount":  
                        {  
                            "offset": 100,  
                            "value": 150000  
                        },  
                        "name": "Blue Elf Aloe",  
                        "quantity": 1,  
                        "country_of_origin": "India",  
                        "importer_name": "Lucky Shrub Imports and Exports",  
                        "importer_address":  
                        {  
                            "address_line1": "One BKC",  
                            "address_line2": "Bandra Kurla Complex",  
                            "city": "Mumbai",  
                            "zone_code": "MH",  
                            "postal_code": "400051",  
                            "country_code": "IN"  
                        }  
                    }  
                ],  
                "subtotal":  
                {  
                    "offset": 100,  
                    "value": 150000  
                },  
                "shipping":  
                {  
                    "offset": 100,  
                    "value": 20000  
                },  
                "tax":  
                {  
                    "offset": 100,  
                    "value": 10000  
                },  
                "discount":  
                {  
                    "offset": 100,  
                    "value": 15000,  
                    "description": "Additional 10% off"  
                },  
                "status": "pending",  
                "expiration":  
                {  
                    "timestamp": "1726627150",  
                    "description": "order expires in 5 min"  
                }  
            },  
            "total_amount":  
            {  
                "offset": 100,  
                "value": 165000  
            }  
        }  
    }  
}
```
```

### Apply shipping - endpoint sample request

```
```
      {  
    "data":  
    {  
        "order_details":  
        {  
            "reference_id": "abc.123_xyz-1",  
            "type": "physical-goods",  
            "currency": "INR",  
            "shipping_info":  
            {  
                "country": "IN",  
                "addresses":  
                [  
                    {  
                        "name": "Nidhi Tripathi",  
                        "phone_number": "919000090000",  
                        "address": "Bandra Kurla Complex",  
                        "city": "Mumbai",  
                        "state": "Maharastra",  
                        "in_pin_code": "400051",  
                        "house_number": "12",  
                        "tower_number": "5",  
                        "building_name": "One BKC",  
                        "landmark_area": "Near BKC Circle"  
                    }  
                ]  
            },  
            "order":  
            {  
                "items":  
                [  
                    {  
                        "amount":  
                        {  
                            "offset": 100,  
                            "value": 200000  
                        },  
                        "sale_amount":  
                        {  
                            "offset": 100,  
                            "value": 150000  
                        },  
                        "name": "Blue Elf Aloe",  
                        "quantity": 1,  
                        "country_of_origin": "India",  
                        "importer_name": "Lucky Shrub Imports and Exports",  
                        "importer_address":  
                        {  
                            "address_line1": "One BKC",  
                            "address_line2": "Bandra Kurla Complex",  
                            "city": "Mumbai",  
                            "zone_code": "MH",  
                            "postal_code": "400051",  
                            "country_code": "IN"  
                        }  
                    }  
                ],  
                "subtotal":  
                {  
                    "offset": 100,  
                    "value": 150000  
                },  
                "shipping":  
                {  
                    "offset": 100,  
                    "value": 20000  
                },  
                "tax":  
                {  
                    "offset": 100,  
                    "value": 10000  
                },  
                "discount":  
                {  
                    "offset": 100,  
                    "value": 15000,  
                    "description": "Additional 10% off"  
                },  
                "status": "pending",  
                "expiration":  
                {  
                    "timestamp": "1726627150",  
                    "description": "order expires in 5 min"  
                }  
            },  
            "coupon":  
            {  
                "code": "TRYNEW10",  
                "discount":  
                {  
                    "value": 16500,  
                    "offset": 100  
                }  
            },  
            "total_amount":  
            {  
                "offset": 100,  
                "value": 148500  
            }  
        },  
        "input":  
        {  
            "user_id": "919000090000",  
            "selected_address":  
            {  
                "name": "Nidhi Tripathi",  
                "phone_number": "919000090000",  
                "address": "Bandra Kurla Complex",  
                "city": "Mumbai",  
                "state": "Maharastra",  
                "in_pin_code": "400051",  
                "house_number": "12",  
                "tower_number": "5",  
                "building_name": "One BKC",  
                "landmark_area": "Near BKC Circle"  
            }  
        }  
    },  
    "action": "data_exchange",  
    "sub_action": "apply_shipping",  
    "version": "1.0"  
}
```
```

### Apply shipping - endpoint sample response

```
```
      {  
    "sub_action": "apply_shipping",  
    "version": "1.0",  
    "data":  
    {  
        "order_details":  
        {  
            "reference_id": "abc.123_xyz-1",  
            "type": "physical-goods",  
            "currency": "INR",  
            "shipping_info":  
            {  
                "country": "IN",  
                "addresses":  
                [  
                    {  
                        "name": "Nidhi Tripathi",  
                        "phone_number": "919000090000",  
                        "address": "Bandra Kurla Complex",  
                        "city": "Mumbai",  
                        "state": "Maharastra",  
                        "in_pin_code": "400051",  
                        "house_number": "12",  
                        "tower_number": "5",  
                        "building_name": "One BKC",  
                        "landmark_area": "Near BKC Circle"  
                    }  
                ],  
                "selected_address":  
                {  
                    "name": "Nidhi Tripathi",  
                    "phone_number": "919000090000",  
                    "address": "Bandra Kurla Complex",  
                    "city": "Mumbai",  
                    "state": "Maharastra",  
                    "in_pin_code": "400051",  
                    "house_number": "12",  
                    "tower_number": "5",  
                    "building_name": "One BKC",  
                    "landmark_area": "Near BKC Circle"  
                }  
            },  
            "order":  
            {  
                "items":  
                [  
                    {  
                        "amount":  
                        {  
                            "offset": 100,  
                            "value": 200000  
                        },  
                        "sale_amount":  
                        {  
                            "offset": 100,  
                            "value": 150000  
                        },  
                        "name": "Blue Elf Aloe",  
                        "quantity": 1,  
                        "country_of_origin": "India",  
                        "importer_name": "Lucky Shrub Imports and Exports",  
                        "importer_address":  
                        {  
                            "address_line1": "One BKC",  
                            "address_line2": "Bandra Kurla Complex",  
                            "city": "Mumbai",  
                            "zone_code": "MH",  
                            "postal_code": "400051",  
                            "country_code": "IN"  
                        }  
                    }  
                ],  
                "subtotal":  
                {  
                    "offset": 100,  
                    "value": 150000  
                },  
                "shipping":  
                {  
                    "offset": 100,  
                    "value": 40000  
                },  
                "tax":  
                {  
                    "offset": 100,  
                    "value": 10000  
                },  
                "discount":  
                {  
                    "offset": 100,  
                    "value": 15000,  
                    "description": "Additional 10% off"  
                },  
                "status": "pending",  
                "expiration":  
                {  
                    "timestamp": "1726627150",  
                    "description": "order expires in 5 min"  
                }  
            },  
            "coupon":  
            {  
                "code": "TRYNEW10",  
                "discount":  
                {  
                    "value": 16500,  
                    "offset": 100  
                }  
            },  
            "total_amount":  
            {  
                "offset": 100,  
                "value": 168500  
            }  
        }  
    }  
}
```
```
