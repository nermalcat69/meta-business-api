---
title: "Product Template"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product
---

# Product Template

Updated: Jan 8, 2022

Product template is only available on Graph API v8.0+

![Messenger product template card showing a brown travel bag photo with title 'Travel Bag' and price '$49.90'](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/641352279_1445181600673823_1203756503381479998_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ykFlbft_PKkQ7kNvwF4hPk-&_nc_oc=AdpWPj6IUZsOvNAW_YoCn1kf2HhwvcZHkrKPRgsHfT6BLNJ6tQ2lciP5ZnVB1PRcGTvSmZTxNoQ9a-TRooIS37wT&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=NbIY5sq2U1F_EWQu47_gEw&_nc_ss=7b289&oh=00_AQDcn8bZzO0Srr0PcfBJK-GbelKfUSl-r1vhmhA-Lm58Aw&oe=6A605A1C)

The product template is a structured message that can be used to render products that have been uploaded to a [catalog⁠](https://www.facebook.com/business/help/1275400645914358). Product details (image, title, price) will automatically be pulled from the product catalog.

### Contents

* [Template Payload](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product#payload)
* [Sending a Carousel of Product Templates](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product#carousel)
* [Example Request](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product#example_request)
* [Example Response](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product#example_response)

## Template Payload

```
"payload": {
  "template_type":"product",
  "elements":[
     {
        "id":<PRODUCT_ID>
      },
    ]
  }
```

`product_ids` can be obtained via [Catalog API](https://developers.facebook.com/documentation/ads-commerce/catalog) or via [Facebook Commerce Manager⁠](https://www.facebook.com/business/help/2371372636254534?id=533228987210412). Product template only supports `product_ids` owned by the same page.

## Sending a Carousel of Product Templates

The Messenger Platform supports the sending of a horizontally scrollable carousel of product templates.

To create a scrollable carousel, include up to 10 products in the `elements` array of the `payload`.

```
"payload": {
  "template_type":"product",
  "elements":[
    {
        "id":<PRODUCT_ID_1>
    },
    {
        "id":<PRODUCT_ID_2>
    }
    ...
  ]
}
```

## Example Request

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"<PSID>"  
  },  
  "message":{  
    "attachment":{  
      "type":"template",  
        "payload": {  
          "template_type": "product",  
          "elements": [  
            {  
              "id": "<PRODUCT_ID_1>"  
            },  
            {  
              "id": "<PRODUCT_ID_2>"  
            }  
         ]  
      }  
    }  
  }  
}' "https://graph.facebook.com/v8.0/me/messages?access_token=<PAGE_ACCESS_TOKEN>"
```
```

## Example Response

```
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}
```

## Error Codes

| Code | Subcode | Message |
| --- | --- | --- |
| `100` | `2018320` | Invalid product id. See [Product Template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product) |
| `100` | `2018328` | Product template is not supported below version 8. Use api version 8 or higher to use product templates. See [Product Template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/product) |

For other errors returned by the Send API, see [error code](https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes)
