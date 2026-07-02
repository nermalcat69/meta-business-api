---
title: "Multi-product messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/mpm-template-messages
---

# Multi-product messages

Updated: Jun 26, 2026

Multi-product messages are interactive messages that display up to 30 products from your catalog, organized into sections. Within WhatsApp, customers can browse products, view details, add items to a cart, and send an order.

*Multi-Product message example:*

*Menu triggered when user clicks on Start Shopping:*

![Multi-Product message example](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/561539953_1339318271260157_5511864003041128459_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Oi5Mwkg6u4oQ7kNvwF_XWjS&_nc_oc=AdoNXowoTKfmLhrwiQdGYtauRijt-__LesW85cGtjKphnCXcifIeUe97ltD0Tte2AfsgipswzXSk6tJhK4gshxnR&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=ao8_l3Dkq4eJqud6apdRlg&_nc_ss=7b2a8&oh=00_AQA1mPVtEH5I9xyUPFsno-cqjRGL7JLxliTE2pt40EO5cg&oe=6A606249)

![Shopping menu triggered by Start Shopping button](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/560927761_1339318294593488_1812605316660293832_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=m3hlqRyFsDMQ7kNvwFOv5lx&_nc_oc=AdoOYTHIZMiU7WdO_nDJYkJAYTBYnesjUvoeEjnWrWpag0kQnAICpCIrWR4w1F9tDUOm9y3yWh433coloDwWcs6s&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=ao8_l3Dkq4eJqud6apdRlg&_nc_ss=7b2a8&oh=00_AQAb1ZV2ynY_8lk59N5dSkZRClpg9_-8jcAIdY20a8XiIw&oe=6A605297)

## Overview

Customers who receive Multi-Product Messages can perform three main actions:

* View products: Customers can see a list of products. Whenever a customer clicks on a specific item, the product's latest info is fetched and the product displays in a Product Detail Page (PDP) format. Currently, PDPs only support product images — any videos or GIFs added to the product won't be displayed in the PDP.
* Add products to a cart: Whenever a user adds a product to the shopping cart, the item's latest info is fetched. If there has been a state change on any of the items, a dialog saying "One or more items in your cart have been updated" is displayed. See [Product updates](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products#product-updates) for more information. A cart persists in a chat thread between you and your customer until the cart is sent to you — see [Shopping cart experience](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products#shopping-cart-experience) for details.
* Send a shopping cart to you: After adding all needed items, customers can send their cart to you. After that, you can define the next steps, such as requesting delivery info or giving payment options.

If your customer has multiple devices linked to their account, Multi-Product Messages are synced between devices. However, the shopping cart is local to each specific device. See [Shopping cart experience](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products#shopping-cart-experience) for details.

Currently, Multi-Product Messages can be received on the following platforms:

* iOS: 2.21.100
* Android: 2.21.9.15
* Web: The web client supports this feature.

If the customer's app version does not support Multi-Product Messages, they instead receive a message explaining that delivery failed because they are using an outdated version of WhatsApp. You also receive a webhook notification indicating the message was unable to be delivered due to the customer using an outdated version of WhatsApp.

## Expected behavior

Multi-Product Messages can be:

* Forwarded by one user to another.
* Reopened by a user within the same chat thread.

Multi-Product Messages cannot be:

* Sent as notifications. They can only be sent as part of existing chat threads.

## Use cases

Multi-Product Messages are best for guiding customers to a specific subset of your inventory, such as:

* Shopping in a conversational way. For example, using search functionality to allow customers to type a shopping list and send back a Multi-Product Message in response.
* Navigating to a specific category. For example, fitness apparel.
* Personalized offers or recommendations.
* Re-ordering previously ordered items. For example, a user can re-order their regular take-out order of less than 30 items.

Multi-Product Messages can also be used as part of a human agent flow. However, you need to build the tooling to allow the human agent to generate a Multi-Product Message in thread.

### Why you should use them

Multi-product messages support simple, personalized user experiences by guiding the customer to a subset of items most relevant to them, rather than browsing your full inventory.

#### Simple and efficient

Combining the features with navigation tools like Natural Language Processing (NLP), text search or List Messages and Reply Buttons to get to what the customer is looking for fast.

#### Personal

Populated dynamically so can be personalized to the customer or situation. For example, you can show a Multi-Product Message of a customer's most frequently ordered items.

#### Business outcomes

Lets customers add items to a cart and send an order directly from the message. During testing, businesses had an average 7% conversion of multi-product messages sent to carts received.

#### No templates

Interactive messages do not require templates or pre-approvals. Interactive messages are generated in real-time and reflect the latest item details, pricing, and stock levels from your inventory.

## Send a multi-product message

Before sending product messages, follow the get started best suited for your needs:

* [Direct developers](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started)
* [Partners](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview)

All API calls mentioned in this guide must be authenticated with an access token. You can authenticate your API calls with the access token generated in the **App Dashboard** > **WhatsApp** > **API Setup** panel. If you are a partner, you must authenticate with an access token with the [whatsapp\_business\_messaging](https://developers.facebook.com/docs/permissions/reference/whatsapp_business_messaging) permission.

### Step 1: Assemble the interactive object

To send a Multi-Product Message, assemble an `interactive` object of type `product_list` with the following components:

| Required Components | Optional Components |
| --- | --- |
| * Header Object — Header's type must be set to text. Remember to add a text object with the desired content. * Body Object * Action Object — Must include catalog\_id and sections.   * Sections must be an array of objects describing each section using title and product\_items.     * Each section's product\_items value must be an array describing each product in the section using product\_retailer\_id and the product's stock keeping unit (SKU) number. | * Footer Object |

See [Messages, Interactive Object](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) for full information. By the end of the process, the interactive object should look something like this:

```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "PHONE_NUMBER",  
  "type": "interactive",  
  "interactive": {  
    "type": "product_list",  
    "header":{  
      "type": "text",  
      "text": "HEADER_CONTENT"  
    },  
    "body": {  
      "text": "BODY_CONTENT"  
    },  
    "footer": {  
      "text": "FOOTER_CONTENT"  
    },  
    "action": {  
      "catalog_id": "CATALOG_ID",  
      "sections": [  
        {  
          "title": "SECTION_TITLE",  
          "product_items": [  
            { "product_retailer_id": "PRODUCT-SKU" },  
            { "product_retailer_id": "PRODUCT-SKU" }  
            ...  
          ]  
  
        },  
        {  
          "title": "SECTION_TITLE",  
          "product_items": [  
            { "product_retailer_id": "PRODUCT-SKU" },  
            { "product_retailer_id": "PRODUCT-SKU" }  
            ...  
          ]  
        }  
      ]  
    }  
  }  
}
```

#### Missing items

If none of the items provided in the API call matches a product from your product catalog, the API returns an error message and does not send the Multi-Product Message to the user.

At least one item from the products list must match an item from your product catalog. In this case:

* The API sends the message successfully
* The API drops items without a match
* You receive an error message asking for a catalog update

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
{  
  "messaging_product": "whatsapp",  
  "contacts": [{  
      "input": "PHONE_NUMBER",  
      "wa_id": "WHATSAPP_ID"  
    }],  
  "messages": [{  
      "id": "wamid.ID"  
    }]  
}
```
