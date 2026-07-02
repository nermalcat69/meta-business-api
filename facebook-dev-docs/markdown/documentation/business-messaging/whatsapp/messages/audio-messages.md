---
title: "Address Messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages
---

# Address Messages

Updated: Jun 28, 2026

This feature is only available for businesses based in India and their India customers.

Address messages give your users a simpler way to share the shipping address with the business on WhatsApp.

Address messages are interactive messages that contain the four main parts: `header`, `body`, `footer`, and `action`. Inside the action component, the business specifies the name “address\_message” and relevant parameters.

The following table outlines the fields that are supported by the address message.

| Field Name | Display Label | Input Type | Supported Countries | Limitations |
| --- | --- | --- | --- | --- |
| `name` | Name | text | India | None |
| `phone_number` | Phone Number | tel | India | Valid phone numbers only |
| `in_pin_code` | Pin Code | text | India | Max length: 6 |
| `house_number` | Flat/House Number | text | India | None |
| `floor_number` | Floor Number | text | India | None |
| `tower_number` | Tower Number | text | India | None |
| `building_name` | Building/Apartment Name | text | India | None |
| `address` | Address | text | India | None |
| `landmark_area` | Landmark/Area | text | India | None |
| `city` | City | text | India | None |
| `state` | State | text | India | None |

## Sample API call

This is a sample API call for the address message. The `country` attribute is a mandatory field in the action parameters. If the country attribute is not included, there will be a validation error.

```
```
curl -X  POST \  
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<PHONE_NUMBER>",  
  "type": "interactive",  
  "interactive": {  
    "type": "address_message",  
    "body": {  
      "text": "Thanks for your order! Tell us what address you'd like this order delivered to."  
    },  
    "action": {  
      "name": "address_message",  
      "parameters": {  
        "country": "<COUNTRY_ISO_CODE>"  
      }  
    }  
  }  
}'
```
```

## Error handling

If the area code of the phone number for the given country is not correct, businesses will be unable to request the address message from the recipient. For example, businesses will be unable to request an address message from a recipient that has the country as “India” but has a phone number with an area code of “65”.

Once the address message is sent, the business waits for the user to fill in the address and send it back. The [webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview) registered in the [setup process](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview) shares the address the user entered.

## Address message steps

The steps involved in an Address Message are the following:

* Business sends an address message with the action name `address_message` to the user.
* User interacts with the message by clicking on the CTA, which brings up an Address Message screen. The user fills out their address and submits the form.
* After the user submits the address message form, the partner receives a webhook notification, which contains the details of the address the user submitted.

**Sample India Address Message**

![JioMart WhatsApp chat showing catalog and order messages ending with a 'Provide address' button](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/565829166_1339318437926807_3659527486531714210_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-QqRtomOYAgQ7kNvwFS-L7R&_nc_oc=AdpLnQhWo8KNy1YrpLresiWcPVcFJeuPFdlE8aSGlxGJeuiS7YO024Wpl4lCt4O9ffGlzkIWSr6SrQxgUC5KU5Kq&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=wAL1t9jaUrUJnxz-t4sQQQ&_nc_ss=7b2a8&oh=00_AQBwO1AuVna_oE3Z8mbj8HmpF1NdNS78B0P3RPuaPRkayw&oe=6A606773)![WhatsApp 'Provide address' form with name and mobile number prefilled and empty address fields](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/560182401_1339318284593489_3917170764968888761_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=EcMJiuOeOjIQ7kNvwH8zvBe&_nc_oc=AdpFCbLBRWpSPz2iwxXcm0iZaCquf8ii2k1pt3i67JAqxZmQ5bgaTyOOWfOT97hVaHIR2WZcYos0FqvvBuks1pLH&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=wAL1t9jaUrUJnxz-t4sQQQ&_nc_ss=7b2a8&oh=00_AQDSPGJuRHcw9rrfzcGSL_4yKFkvs_QFXShTwDSZnlS3HA&oe=6A604223)![Completed WhatsApp 'Provide address' form with address details filled and an active Send address button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/561656043_1339318467926804_8340276620740620111_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=iJk1sOHVi2cQ7kNvwFgiwE9&_nc_oc=Adqey2tptW596dqUKwnEJzTdiccTmsbGu5XgM6p6w368iPT5R2H0vQ1r-hLzXHh68OYiTg6NIzG7wUbHteDYxuUO&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=wAL1t9jaUrUJnxz-t4sQQQ&_nc_ss=7b2a8&oh=00_AQBs2Q0PSyKllN-hupQNFQx9Le4-_yZDh_m4_5e86vCusQ&oe=6A606653)![JioMart WhatsApp chat showing the submitted address summary in the conversation](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/561778150_1339318131260171_5843569977396603182_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=N7yAgTYWsOYQ7kNvwHKWi-I&_nc_oc=AdrEwGAJBQV1B6yW_4OgG1nwsyjqPzET0K8QxP-KZVn9Ys9vLjP6LhNnBnmaLgQMytyBtC3LcVKFccJMBSi-6JLL&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=wAL1t9jaUrUJnxz-t4sQQQ&_nc_ss=7b2a8&oh=00_AQCdpzrudDRMEe9n84nyg9uslOAmF5X0PVt8BNxplx8TVA&oe=6A606012)

The following sequence diagram shows a typical integration flow for an address message.

![Sequence diagram of the address message API flow between Partner, WhatsApp, User, and User Interactions](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/564006097_1339318367926814_6312454230710951737_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NEQJEGRmKXUQ7kNvwFgSauO&_nc_oc=Adq3hWOp5uJ1B15mC8FU1ssl6biYlCLbGMIMB2SNBoNWg0qlQH86yy7nFX3LDQ4v2JiNRpaRob5ccWllWBrp_gJg&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=wAL1t9jaUrUJnxz-t4sQQQ&_nc_ss=7b2a8&oh=00_AQBgdacqJUXJQ4NFIw62diFqDswZ0vGqSv-isvcJ2-IieA&oe=6A604E53)

## Additional action parameters

The business can pass additional attributes such as `values`, `validation_errors`, or `saved_addresses` as part of the interactive action parameters. You can find information on each of their usage below.

| Action Parameter | Usage |
| --- | --- |
| `values` | Businesses prefill this for address fields (for example, prefilling the city address field with “India”) |
| `saved_addresses` | Businesses can pass in saved addresses previously associated with the user.    For users, they are presented with the option to choose the saved address instead of manually filling it in |
| `validation_errors` | Businesses can throw errors in the address fields and WhatsApp will prevent the user from submitting the address until all issues are resolved. |

### Send an address message to a user

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an end-to-end encrypted address message to the user:

```
```
curl -X  POST \  
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<PHONE_NUMBER>",  
  "type": "interactive",  
  "interactive": {  
    "type": "address_message",  
    "body": {  
      "text": "Thanks for your order! Tell us what address you'd like this order delivered to."  
    },  
    "action": {  
      "name": "address_message",  
      "parameters": "JSON Payload"  
    }  
  }  
}'
```
```

To send an address message without any saved addresses, WhatsApp will prompt the user or business with an address form to enter a new address.

```
```
curl -X  POST \  
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "+91xxxxxxxxxx",  
  "type": "interactive",  
  "interactive": {  
    "type": "address_message",  
    "body": {  
      "text": "Thanks for your order! Tell us what address you'd like this order delivered to."  
    },  
    "action": {  
      "name": "address_message",  
      "parameters": {  
        "country": "IN",  
        "values": {  
          "name": "<CUSTOMER_NAME>",  
          "phone_number": "+91xxxxxxxxxx"  
        }  
      }  
    }  
  }  
}'
```
```

To send an address message with saved addresses, WhatsApp will prompt the user or business with an option to select among the saved addresses or add an address option. Users can ignore the saved address and enter a new address.

```
```
curl -X  POST \  
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "91xxxxxxxxxx",  
  "type": "interactive",  
  "interactive": {  
    "type": "address_message",  
    "body": {  
      "text": "Thanks for your order! Tell us what address you'd like this order delivered to."  
    },  
    "action": {  
      "name": "address_message",  
      "parameters": {  
        "country": "IN",  
        "saved_addresses": [  
          {  
            "id": "address1",  
            "value": {  
              "name": "<CUSTOMER_NAME>",  
              "phone_number": "+91xxxxxxxxxx",  
              "in_pin_code": "400063",  
              "floor_number": "8",  
              "building_name": "",  
              "address": "Wing A, Cello Triumph,IB Patel Rd",  
              "landmark_area": "Goregaon",  
              "city": "Mumbai"  
            }  
          }  
        ]  
      }  
    }  
  }  
}'
```
```

## Check your response

A successful response includes a `messages` object with an ID for the newly created message.

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "<PHONE_NUMBER>",  
      "wa_id": "<WHATSAPP_ID>"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.ID"  
    }  
  ]  
}
```
```

An unsuccessful response contains an error message. See [Error and Status Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) for more information.

## Send an address message with validation errors

Re-send the address message to the user in the case of a validation error on the business server. The business should send back the set of values previously entered by the user, along with the respective validation errors for each invalid field, as shown in the sample payloads below.

```
```
curl -X  POST \  
'https://graph.facebook.com/<API_VERSION>/<FROM_PHONE_NUMBER_ID>/messages' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d  
'{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "91xxxxxxxxxx",  
  "type": "interactive",  
  "interactive": {  
    "type": "address_message",  
    "body": {  
      "text": "Thanks for your order! Tell us what address you'd like this order delivered to."  
    },  
    "action": {  
      "name": "address_message",  
      "parameters": {  
          "country": "IN",  
          "values": {  
             "name": "CUSTOMER_NAME",  
             "phone_number": "+91xxxxxxxxxx",  
             "in_pin_code": "666666",  
             "address": "Some other location",  
             "city": "Delhi"  
          },  
          "validation_errors": {  
             "in_pin_code": "We could not locate this pin code."  
          }  
       }  
    }  
  }  
}'
```
```

## Receive notifications for address submissions

Businesses will receive address submission notifications through [webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview), such as the one shown below.

```
```
{  
  "messages": [  
    {  
      "id": "gBGGFlAwCWFvAgmrzrKijase8yA",  
      "from": "<PHONE_NUMBER>",  
      "interactive": {  
        "type": "interactive",  
        "action": "address_message",  
        "nfm_reply": {  
          "name": "address_message",  
          "response_json": "<response_json from client>",  
          "body": "<body text from client>"  
        },  
        "timestamp": "1670394125"  
      }  
    }  
  ]  
}
```
```

The webhook notification has the following values.

| Field Name | Type | Description |
| --- | --- | --- |
| `interactive` | Object | Holds the response from the client |
| `type` | String | Would be `nfm_reply` indicating it is a Native Flow Response (NFM) from the client |
| `nfm_reply` | Object | Holds the data received from the client |
| `response_json` | String | The values of the address fields filled by the user in JSON format that are always present |
| `body` (Optional) | String | Body text from client, what the user sees |
| `name` (Optional) | String | Would be `address_message` indicating the type of NFM action response from the client |

An address message reply as an NFM response type for an India address message request is shown below.

```
```
{  
  "messages": [  
    {  
      "context": {  
        "from": "FROM_PHONE_NUMBER_ID",  
        "id": "wamid.HBgLMTIwNjU1NTAxMDcVAgARGBI3NjNFN0U5QzMzNDlCQjY0M0QA"  
      },  
      "from": "<PHONE_NUMBER>",  
      "id": "wamid.HBgLMTIwNjU1NTAxMDcVAgASGCA5RDhBNENEMEQ3RENEOEEzMEI0RUExRDczN0I1NThFQwA=",  
      "timestamp": "1671498855",  
      "type": "interactive",  
      "interactive": {  
        "type": "nfm_reply",  
        "nfm_reply": {  
          "response_json": "{\"saved_address_id\":\"address1\",\"values\":{\"in_pin_code\":\"400063\",\"building_name\":\"\",\"landmark_area\":\"Goregaon\",\"address\":\"Wing A, Cello Triumph, IB Patel Rd\",\"city\":\"Mumbai\",\"name\":\"CUSTOMER_NAME\",\"phone_number\":\"+91xxxxxxxxxx\",\"floor_number\":\"8\"}}",  
          "body": "CUSTOMER_NAME\n +91xxxxxxxxxx\n 400063, Goregaon, Wing A, Cello Triumph,IB Patel Rd, Mumbai, 8",  
          "name": "address_message"  
        }  
      }  
    }  
  ]  
}
```
```

## Feature not supported

In the case where the client does not support `address_message`, WhatsApp silently drops the messages and sends an error message back to the business in a webhook. The webhook notification that would be sent back is shown below:

```
```
{  
  "statuses": [  
    {  
      "errors": [  
        {  
          "code": 1026,  
          "href": "/docs/whatsapp/api/errors",  
          "title": "Receiver Incapable"  
        }  
      ],  
      "id": "gBGGFlAwCWFvAgkyHMGKnRu4JeA",  
      "message": {  
        "recipient_id": "+91xxxxxxxxxx"  
      },  
      "recipient_id": "91xxxxxxxxxx",  
      "status": "failed",  
      "timestamp": "1670394125",  
      "type": "message"  
    }  
  ]  
}
```
```
