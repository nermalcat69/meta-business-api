---
title: "Single-product messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/spm-template-messages
---

# Single-product messages

Updated: May 21, 2026

Single-product messages are interactive messages that display a single product from your catalog, allowing WhatsApp users to view product details, add the item to a cart, and send an order — all within WhatsApp.

*Single-product message example:*

*Product detail page example:*

![Single-Product message example](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/562349137_1339318264593491_6364230190870639769_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=oas8-Vg-ZdQQ7kNvwGwhfl5&_nc_oc=AdqArnkPPyVCckzpJTAFlgIRP-TQBJB6UV7cOnW7ehp2ALSEbHAAv7Er1fJEccXrjQiyUD3NuqQdRc06OQBMS_Q-&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=cETRk8OnwXoENjb2cWDUsg&_nc_ss=7b2a8&oh=00_AQDpXPqQENlguX3OhjQiY8la-tzKXK_0wj3yh7or_IiTew&oe=6A607411)

![Product Detail Page example](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/561725167_1339318251260159_1382680862902739848_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=8FXzs0px6nEQ7kNvwHW0r-B&_nc_oc=AdoPEX3yyJNLArdu7bLu9lJsrfStnr4db7zUgjcIRdB4SjT-dOAngnmSQhekswkH-EoM88J9tEvy0MuykBkurA4x&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=cETRk8OnwXoENjb2cWDUsg&_nc_ss=7b2a8&oh=00_AQAVTawc6Ff0632H7pQS8vRl4xU32AG5e6YcsGumPEskZw&oe=6A604D4A)

## Overview

WhatsApp users who receive single-product messages can perform three main actions:

* View the product: Whenever a customer clicks on the item, the product’s latest info is fetched and the product displays in a Product Detail Page (PDP) format. Currently, PDPs only support product images — any videos or GIFs added to the product won’t be displayed in the PDP.
* Add the product to a cart: Whenever a user adds a product to the shopping cart, the item’s latest info is fetched. If there has been a state change, a dialog saying “One or more items in your cart have been updated” is displayed — see [Product updates](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products#product-updates) for more information. A cart persists in a chat thread between you and your customer until the cart is sent to you — see [Shopping cart experience](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products#shopping-cart-experience) for details.
* Send a shopping cart to you: After adding items, customers can send their cart to you. After that, you can define the next steps, such as requesting delivery info or giving payment options.

If your customer has multiple devices linked to their account, single-product messages are synced between devices. However, the shopping cart is local to each specific device. See [Shopping cart experience](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products#shopping-cart-experience) for details.

Currently, single-product messages can be received on the following platforms:

* iOS: 2.21.210
* Android: 2.21.19
* Web: The web client supports this feature.

If the customer’s app version does not support single-product messages, they instead receive a message explaining that they were unable to receive a message because they are using an outdated version of WhatsApp. You also receive a webhook notification indicating the message was unable to be delivered due to the customer using an outdated version of WhatsApp.

## Expected behavior

Single-product messages can be:

* Forwarded by one user to another.
* Reopened by a user within the same chat thread.

Single-product messages cannot be:

* Sent as notifications. They can only be sent as part of existing chat threads.

## Use cases

Single-product messages are best for guiding WhatsApp users to one specific item from your inventory, offering quick responses from a limited set of options, such as:

* Responding to a customer’s specific request.
* Providing a recommendation.
* Reordering a previous item.

Single-product messages can also be used as part of a human agent flow. However, you need to build the tooling to allow the human agent to generate a single-product message in thread.

### Why you should use them

Single-product messages work best for user experiences that are simple and personalized, where it’s a better experience to guide the customer to a specific item most relevant to them, rather than browsing your full inventory.

#### No templates

Interactive messages do not require templates or pre-approvals. They are generated in real-time and always reflect the latest item details, pricing, and stock levels from your inventory.

## Send a single-product message

Before sending product messages, follow the get started best suited for your needs:

* [Direct developers](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started)
* [Partners](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview)

All API calls mentioned in this guide must be authenticated with an access token. You can authenticate your API calls with the access token generated in the **App Dashboard** > **WhatsApp** > **API Setup** panel. If you are a partner, you must authenticate with an access token with the [whatsapp\_business\_messaging](https://developers.facebook.com/docs/permissions/reference/whatsapp_business_messaging) permission.

### Step 1: Assemble the interactive object

To send a single-product message, assemble an `interactive` object of type `product` with the following components:

| Required components | Optional components |
| --- | --- |
| * Action object — Must include both catalog\_id and product\_retailer\_id. | * Body object * Footer object |

See [Messages, Interactive Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) for full information. By the end of the process, the interactive object should look something like this:

```
```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "PHONE_NUMBER",  
  "type": "interactive",  
  "interactive": {  
    "type": "product",  
    "body": {  
      "text": "BODY_TEXT"  
    },  
    "footer": {  
      "text": "FOOTER_TEXT"  
    },  
    "action": {  
      "catalog_id": "CATALOG_ID",  
      "product_retailer_id": "ID_TEST_ITEM_1"  
    }  
  }  
}
```
```

If none of the items provided in the API call matches a product from your product catalog, an error message is sent and the single-product message is not sent to the user.

### Step 2: Add common message parameters

Once the interactive object is complete, append the other parameters that make a message: `recipient_type`, `to`, `messaging_product`, and `type`. Remember to set the `type` to `interactive`.

```
curl -X  POST https://graph.facebook.com/v25.0/FROM_PHONE_NUMBER/messages \
 -H 'Authorization: Bearer ACCESS_TOKEN' \
 - d '{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "PHONE_NUMBER",
  "type": "interactive",
  "interactive": {
  // INTERACTIVE OBJECT GOES HERE
}'
```

For all available parameters, see [Reference, Messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api).

### Step 3: Send the message

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send the JSON object you have assembled in steps 1 and 2. If your message is sent successfully, you get the following response:

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [{  
      "input": "PHONE_NUMBER",  
      "wa_id": "WHATSAPP_ID"  
    }],  
  "messages": [{  
      "id": "wamid.ID"  
    }]  
}
```
```
