---
title: "Coupon and LTO Template"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/changelog
---

# Coupon and LTO Template

Updated: Apr 6, 2026

This document describes how to create coupon code format with optional running timer (LTO).

## How It Works

A coupon template message has some preset elements and a number of optional properties. The **Copy code** button is a preset element that cannot be changed. You need to add a **coupon code** and second button, with default text **Shop now**, that is configurable with your own text and a URL to redirect a person to your store.

![Coupon template card with store image, 2 days left timer, 10% off summer sale title, code 10offsummer, and Copy code button](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/571352926_1471875067217954_7175114048941057158_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wEOQqGHfOosQ7kNvwHPoDij&_nc_oc=AdooohUH2bWMBbJjs8y235O8sv8QY1fc4n_ROiuUJLsTtlPl_lsvpR4Lm4FrngO_fexj5yV_SNY7XQa3jGnd6bw5&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=Yy_IBINFBHJIAYblCe8YSg&_nc_ss=7b289&oh=00_AQCCLUDh6SEwT3FbpCGxrTZLEzt781bLwAuZQbREMNYwsA&oe=6A607B02)

When a person clicks the **Copy code** button, the coupon code is copied and the bottom sheet shows up with the confirmation and second button to redirect to your store.

![Confirmation bottom sheet reading Promo code copied with paste-at-checkout instructions and a blue Shop now button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/571330549_1953236172124865_4953695866972802221_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ONLFJ6HRvh4Q7kNvwG3-W2d&_nc_oc=Adr57zTjlh759ifiJnS6rZ4iHDIjcHBwr5s3U0dhKMQBSsl577nOCW_1PZzdbeJvRzrj9SU9DJoA6jjFNO9vN6zP&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=Yy_IBINFBHJIAYblCe8YSg&_nc_ss=7b289&oh=00_AQDyZwX4jjZWxLwaBUtQ--BBaH7vutI3SljBXpZB5PgCwA&oe=6A607AC7)

## Send a Basic Coupon

In the following example, we are sending a basic coupon message that contains a coupon code.

![Basic coupon card with green tag icon, 10% off summer sale title, code 10offsummer at checkout, and Copy code button](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/570086872_1527196338524384_4222852112258958896_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5CpK3NmiLDsQ7kNvwEQlusM&_nc_oc=AdrGvTq7Ddu7OQB3hD9Tc3V2PZbdD-XW-zBRmxPZT2XIYsoBgenMfK5nAvouiO98zrPyR4Ov6i_j-uPFGYE8buWH&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=Yy_IBINFBHJIAYblCe8YSg&_nc_ss=7b289&oh=00_AQB4uR-bGE1jicI6XWGZH-sXzdXPMUWJZweunFMyQphyNw&oe=6A607A8B)

To send a coupon message, send a `POST` request to the `/PAGE-ID/messages` endpoint with a JSON object with the attachment type set to `template` and payload set with the `template_type` set to `coupon`, `title` set to coupon text, and the `coupon_code` set to the coupon code to send to the person.

In the following code example we have set `title` to “10% off summer sale” , `subtitle` to “Copy code 10offsummer and use at checkout.” , `coupon_code` to “10offsummer” and `coupon_url` to “https://www.myshop.com/”.

The subtitle text, **Terms may apply.**, and **Reveal code** button text are the default text for these coupon message properties.

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"PSID"  
  },  
  "message":{  
    "attachment": {  
      "type": "template",  
      "payload": {  
          "template_type": "coupon",  
          "title":"10% off summer sale",  
          "subtitle": "Copy code 10offsummer and use at checkout."  
          "coupon_code":"10offsummer",  
          "coupon_url":"https://www.myshop.com/",  
      },  
    }  
  }  
}' "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/messages?access_token=PAGE-ACCESS-TOKEN"
```
```

On success, your app receives the following JSON response with the PSID for the recipient and the ID for the message:

```
```
{  
  "recipient_id": "PSID",  
  "message_id": "MESSAGE-ID"  
}
```
```

## Send a Complex Coupon

In the following example, we are sending a more complex coupon message that contains image,title, subtitle, shop now button ,coupon code button and greeting params.

![Coupon template card with store image, 2 days left timer, 10% off summer sale title, code 10offsummer, and Copy code button](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/571352926_1471875067217954_7175114048941057158_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wEOQqGHfOosQ7kNvwHPoDij&_nc_oc=AdooohUH2bWMBbJjs8y235O8sv8QY1fc4n_ROiuUJLsTtlPl_lsvpR4Lm4FrngO_fexj5yV_SNY7XQa3jGnd6bw5&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=Yy_IBINFBHJIAYblCe8YSg&_nc_ss=7b289&oh=00_AQCCLUDh6SEwT3FbpCGxrTZLEzt781bLwAuZQbREMNYwsA&oe=6A607B02)

In the following code example we have configured a greeting using the `coupon_pre_message`, `title`, `subtitle`, the disclaimer that applies to this coupon, the second button with my store’s URL and “Shop now” text, an image from my store, and additional information to be sent in the webhook notification when a person clicks the **Copy code** button.

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"PSID"  
  },  
  "message":{  
    "attachment": {  
      "type": "template",  
      "payload": {  
          "template_type": "coupon",  
          "title":"10% off summer sale 🎁",  
          "subtitle":"Use code 10offsummer at checkout.",  
          "coupon_code":"10offsummer",  
          "coupon_url":"https://www.myshop.com/",  
          "coupon_url_button_title":"Shop now",  
          "coupon_pre_message":"We have a new summer sale coming up",  
          "image_url": "https://www.myshop.com/sale-image.png",  
          "payload":"The coupon for 10% off everything that expires 2022-10-1",  
      },  
    }  
  }  
}' "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/messages?access_token=PAGE-ACCESS-TOKEN"
```
```

## Send a Coupon Code With LTO

In the following example, we are sending a coupon code with LTO format by passing expire time in the API params.

In the following code example we have configured LTO format by passing `expire_time` in the API spec.

When expire\_time is passed we show running timer to the user

![Series of coupon cards with an LTO countdown timer changing from 2 days left to Last day to Xx hours left as the offer expires](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/574338968_815364864570432_2959479086333167233_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=UcxwBkYx550Q7kNvwEJN2lN&_nc_oc=AdpYmbCQrfEVs_i3wGXGlYJmCIK0nJInT8x8XmhqZGzuWjVu92zJUV9rxwOwfl3FdWPNkulhFUYkK2dsfji-Ouzl&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=Yy_IBINFBHJIAYblCe8YSg&_nc_ss=7b289&oh=00_AQD6qw43BHadYJ-XKk1UTSLDlx5TMiLz5upbq57lN8rW3A&oe=6A606974)

### Request example

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"PSID"  
  },  
  "message":{  
    "attachment": {  
      "type": "template",  
      "payload": {  
          "template_type": "coupon",  
          "title":"10% off summer sale 🎁",  
          "subtitle":"Use code 10offsummer at checkout.",  
          "coupon_code":"10offsummer",  
          "coupon_url":"https://www.myshop.com/",  
          "coupon_url_button_title":"Shop now",  
          "expire_time" :"2025-10-25 16:00:00",  
          "coupon_pre_message":"We have a new summer sale coming up",  
          "image_url": "https://www.myshop.com/sale-image.png",  
          "payload":"The coupon for 10% off everything that expires 2022-10-1",  
      },  
    }  
  }  
}' "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/messages?access_token=PAGE-ACCESS-TOKEN"
```
```

## Expired Coupon Code

When a coupon code is sent with an `expire_time`, we display the expired state format once the coupon code has expired.

In the expired state we don’t show coupon code CTA and only show URL CTA (if added) to redirect a person to your store with default title and body.

## Reference

| Property | Description |
| --- | --- |
| `recipient` *object* | **Required.** Object containing information about the person receiving the coupon message |
| `id` *string* | The Page-scoped ID (PSID) for the person receiving the coupon message |
| `comment_id` *string* | Send a Private Reply that contains a coupon template to a person who commented on a post on the Facebook Page |
| `notification_message_token` *string* | Send Marketing Messages that contain a coupon template to a person |
| `post_id` *string* | Send a Private Reply that contains a coupon template to a person who published a visitor post on the Facebook Page |
| `user_ref` *string* | Send a Checkbox plugin that contains a coupon template |
| `message` *object* | **Required.** Contains the attachment object |
| `attachment` *object* | **Required.** Contains the type of message and payload. |
| `type` *enum {`template`}* | **Required.** Message type, set to `coupon` |
| `payload` *object* | **Required.** Contains the message coupon details |
| `template_type` *enum {`coupon`}* | **Required.** Set to `coupon` |
| `title` *string* | **Required.** Title to display in the message. 80 character limit. |
| `subtitle` *string* | Subtitle to display in the message. 80 character limit. |
| `coupon_code` *string* | **Required**. Coupon Code for person to copy and apply. |
| `expire_time` *string* | **optional** Expire time to show Limited Time Offer (Timer) to the user. |
| `coupon_pre_message` *string* | The message sent before the coupon message |
| `coupon_url` *string* | **Required**. The coupon URL that allows person to redirect to the website to apply the coupon. |
| `coupon_url_button_title` *string* | The text for the button that allows a person to click to the coupon URL |
| `image_url` *string* | The URL for the image displayed in the coupon message |
| `payload` *string* | Additional information to be included in the webhook notification |
