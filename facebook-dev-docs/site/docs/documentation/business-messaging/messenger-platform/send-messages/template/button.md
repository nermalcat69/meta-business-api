---
title: "Message Templates"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/button
---

# Message Templates

Updated: Jun 30, 2026

![Messenger media template card with a runway video, 'Summer formal fashion show' title, and 'Apply coupon' and 'Visit us' buttons](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/653709044_1459945712530745_8920098130391271130_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fiWiOVx1SOQQ7kNvwHEext2&_nc_oc=AdqLSUAEu2ZLUtFJCcyg7We8RMvR6ztTt0SsZSzyGRKbWz8uF0RG_J-Ft0GJmYEDnPkn3tjtiM4L_SqbA3TYcEk_&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=8tWIMyDsTIJM6tx3iAPlqw&_nc_ss=7b289&oh=00_AQA7euzZDsN9Ld_9dZ09q_Iz1C5UZTyAu63yZtGdvFH6Qw&oe=6A607288)![Messenger generic template card showing a man in a blue suit, 'Summer collection 2019', and 'Shop this look' and 'Another look' buttons](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/651905094_1459945655864084_7491184152236363977_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=GDcp3D2fVk4Q7kNvwFdEhd1&_nc_oc=Adr9_3Dynk3E9uSacsTzKby77scVqhU8sVPW0tKxDD-Ib4TalYgsFBi_U4S3m4FJlZ8618sCsqVTvtSIWC07z00R&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=8tWIMyDsTIJM6tx3iAPlqw&_nc_ss=7b289&oh=00_AQCeoCCrNDSpFY2Z0JVuEkNztkmCteD2_LLPrM-ICJnHUg&oe=6A60773F)![Messenger carousel of template cards, the first showing a woman on a beach with 'Personal Style Consultation' and a 'Schedule now' button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/653709911_1459945609197422_5713478735784336329_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=F2206Id-qA8Q7kNvwFpHnTB&_nc_oc=AdqVp72_C2rwPQ-eahaVIqjE59d9N13Mf4L0EU-Lv_Og3GdsJplgFfw9Rhu68BSnsc_1AOGM3X9FxdRrEFJstJfF&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=8tWIMyDsTIJM6tx3iAPlqw&_nc_ss=7b289&oh=00_AQAY7sMJeSO381zm5lFXvaFsJSY_XxaVU1B9PH5lTm29uQ&oe=6A606DB3)

Message templates let you combine buttons, images, lists, and more alongside text in a single message, going beyond what standard text messages support. Use templates for many purposes, such as displaying product information, asking the message recipient to choose from a predetermined set of options, and showing search results.

## Available templates

The following templates are available for sending structured messages:

| Template | Description | Use case |
| --- | --- | --- |
| [Button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/button) | Text message with up to three attached buttons. | Offer the recipient predefined response options or actions to take. |
| [Generic](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/generic) | Structured message with a title, subtitle, image, and up to three buttons. Supports a `default_action` URL. | Display product cards, search results, or content previews. |
| [Media](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/media) | Send images, GIFs, or video as a structured message with a button. Videos and GIFs are playable in the conversation. | Share rich media with an optional call-to-action. |
| [Receipt](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/receipt) | Order confirmation with order summary, payment details, and shipping information. | Send purchase confirmations and order receipts. |
| [Product](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product) | Renders products from your [catalog⁠](https://www.facebook.com/business/help/1275400645914358). Product details (image, title, price) are pulled automatically. | Showcase products from your catalog in a conversation. |
| [Coupon](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/coupon) | Send a coupon or discount offer in a structured format. | Deliver promotional offers or discount codes. |
| [Customer Feedback](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates/customer-feedback-template) | Native feedback survey template for measuring customer experience. Supports rating scales and free-text responses. | Collect customer satisfaction data after a support interaction. |
| [Image Grid](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/image-grid) | Grid of 2 to 6 images in a single message, each with an optional tap action, plus an optional title, subtitle, and up to three buttons. | Showcase product variants, a photo gallery, or a small set of related items. |
| [Utility Messaging](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/utility-messages) | Pre-approved template for order updates, account notifications, and appointment reminders with personalized details and call-to-action buttons. | Send transactional updates such as shipping status, appointment reminders, or account alerts. |
| [Structured Information](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates/structured-information-template) | Collect customer information, such as shipping details, within a conversation. | Gather structured details, for example shipping information, from the recipient. |

## Choosing a template

Use this guide to select the right template for your use case:

* **Presenting options or actions** → [Button template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/button)
* **Displaying a product, article, or content card** → [Generic template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/generic)
* **Sharing an image, GIF, or video** → [Media template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/media)
* **Confirming a purchase or order** → [Receipt template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/receipt)
* **Showcasing catalog products** → [Product template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product)
* **Sending a promotional offer** → [Coupon template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/coupon)
* **Collecting feedback after an interaction** → [Customer Feedback template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates/customer-feedback-template)
* **Showing a gallery or set of related images** → [Image Grid template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/image-grid)
* **Sending transactional updates (orders, appointments, accounts)** → [Utility Messaging template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/utility-messages)

## Send a message template

To send a message template, send a `POST` request to the `/<PAGE_ID>/messages` endpoint with the recipient’s Page-scoped ID, the `messaging_type`, and the message attachment containing the template type and payload with details about the specific template, such as title, images, and buttons.

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"<PSID>"  
  },  
  "messaging_type":"RESPONSE",  
  "message":{  
    "attachment":{  
      "type":"template",  
      "payload":{  
        "template_type":"<TEMPLATE_TYPE>",  
        "elements":[  
          {  
            "title":"<TEMPLATE_TITLE>",  
            ...  
          }  
        ]  
      }  
    }  
  }  
}' "https://graph.facebook.com/<API_VERSION>/<PAGE_ID>/messages?access_token=<PAGE_ACCESS_TOKEN>"
```
```

The body of the request follows a standard format for all template types, with the `message.attachment.payload` property containing the type and content details that are specific to each template type.

## Using buttons

Most message templates allow you to incorporate one or more [buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) as part of the template. These buttons allow you to offer the message recipient actions they can take in response to the template.

The button types you can use vary by template. See the specific template reference documentation for more information.

For more on button types available in the Messenger Platform, see [Buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons).
