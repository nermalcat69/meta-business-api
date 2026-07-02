---
title: "Call Audio CTA"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/calling/jsintegration
---

# Call Audio CTA

Updated: Mar 16, 2026

## Call audio CTA for generic and button template

You can use the Call-To-Action (CTA) button type `audio_call` in the Messenger API. This button type provides a new entry point for users to initiate calls with businesses by clicking the `audio_call` button directly from a button in the generic and button templates.
This `audio_call` CTA button offers enhanced customization compared to the existing call prompt template.

### Generic template

You can send this `audio_call` button using a generic template.

![Messenger generic template card with a 'View Website' and 'Call Now' audio_call CTA button in a business chat](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/652116943_1459945622530754_7316797061330323292_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=XNxYDGSTekYQ7kNvwGDKYpZ&_nc_oc=Ado42-EEZS-RufmjPwA9GaweoYIGpdgxVmyske_T2LFsDU3yOO1QO10hPXRSeZS3rm_YsFKPhB66ezO7vVwJqNVS&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=G2nF4fp1jBa202sIK911MQ&_nc_ss=7b289&oh=00_AQDIg9gOzqNtu9od-QO89WCgp9EtBXh_7zMZeqihRk51Pw&oe=6A607D29)

| Property | Description |
| --- | --- |
| `Page-ID`  *string* | This is the Page ID connected to the app |
| `recipient`  *string* | The Page-scoped ID of the consumer to whom the message template is requested |
| `message`  *JSON* | The body of the message |
| `attachment`  *JSON* | The XMA attachment as part of the message |
| `type`  *string* | The type of the attachment; in this case `template` |
| `payload`  *JSON* | The payload of the attachment |
| `template_type`  *string* | The type of the template, in this case `generic` |
| `elements`  *JSON* | The elements that will be used in the template |
| `buttons`  *JSON* | The buttons CTA that will be used in the template.  **type**: the type of the button CTA, in this case “audio\_call”  **title (required)**: the title of the button CTA  **expires\_in\_days (default 7)**: [how long the button is clickable](https://developers.facebook.com/documentation/business-messaging/messenger-platform/calling/callsettings). The default value is 7 and cannot exceed 7 days. |

```
```
POST /<PAGE_ID>/messages  
{  
  "recipient": {  
    "id": "<PSID>"  
  },  
  "message": {  
    "attachment": {  
      "type": "template",  
      "payload": {  
        "template_type": "generic",  
        "elements": [  
          {  
            "title": "Contact Support!",  
            "buttons": [  
              {  
                "type": "audio_call",  
                "title": "Call Now",  
                "expires_in_days": 5  
              }  
            ]  
          }  
        ]  
      }  
    }  
  }  
}
```
```

### Example response

| Property | Description |
| --- | --- |
| `id`  *string* | The Page-scoped ID of the user to whom the opt-in is requested |
| `message_id`  *string* | The external-facing message ID (mid) of the message sent |

```
```
{  
  "recipient": {  
    "id": <PSID>,  
    "message_id": <mid>,  
  }  
}
```
```

### Error response

The following errors can happen:

* Invalid page-id or psid
* The business Page hasn’t enabled the audio calling
* Permissions/Authorization errors
* The `expires_in_days` is set above 7
* Message is sent outside of allowed window

For more details on these errors, see the [Messenger Platform error codes reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes).

### Button template

You can send this `audio_call` button using a button template.

| Property | Description |
| --- | --- |
| `Page-ID`  *string* | This is the Page ID connected to the app |
| `recipient`  *string* | The Page-scoped ID of the consumer to whom the message template is requested |
| `message`  *JSON* | The body of the message |
| `attachment`  *JSON* | The XMA attachment as part of the message |
| `type`  *string* | The type of the attachment; in this case `template` |
| `payload`  *JSON* | The payload of the attachment |
| `template_type`  *string* | The type of the template, in this case `button` |
| `elements`  *JSON* | The elements that will be used in the template |
| `buttons`  *JSON* | The buttons CTA that will be used in the template.  **type**: the type of the button CTA, in this case “audio\_call”  **title (required)**: the title of the button CTA  **expires\_in\_days (default 7)**: [how long the button is clickable](https://developers.facebook.com/documentation/business-messaging/messenger-platform/calling/callsettings). The default value is 7 and cannot exceed 7 days. |

```
```
POST /<PAGE_ID>/messages  
{  
  "recipient": {  
    "id": "<PSID>"  
  },  
  "message": {  
    "attachment": {  
      "type": "template",  
      "payload": {  
        "template_type": "button",  
        "text": "Contact Support!",  
        "buttons": [  
          {  
            "type": "audio_call",  
            "title": "Call Now",  
            "expires_in_days": 5  
          }  
        ]  
      }  
    }  
  }  
}
```
```

### Example response

| Property | Description |
| --- | --- |
| `id`  *string* | The Page-scoped ID of the user to whom the opt-in is requested |
| `message_id`  *string* | The external-facing message ID (mid) of the message sent |

### Error response

The following errors can happen:

* Invalid page-id or psid
* The business Page hasn’t enabled the audio calling
* Permissions/Authorization errors
* The `expires_in_days` is set above 7
* Message is sent outside of allowed window

For more details on these errors, see the [Messenger Platform error codes reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes).
