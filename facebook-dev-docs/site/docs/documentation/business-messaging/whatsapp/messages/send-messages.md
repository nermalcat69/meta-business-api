---
title: "Template previews"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages
---

# Template previews

Updated: Jun 24, 2026

You can generate previews of authentication template text in various languages that include or exclude the security recommendation string and code expiration string using the [Message Template Previews API](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_template_previews#Reading).

### Request syntax

```
```
GET /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_template_previews  
  ?category=AUTHENTICATION,  
  &language=<LANGUAGE>, // Optional  
  &add_security_recommendation=<ADD_SECURITY_RECOMMENDATION>, // Optional  
  &code_expiration_minutes=<CODE_EXPIRATION_MINUTES>, // Optional  
  &button_types=<BUTTON_TYPES> // Optional
```
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<LANGUAGE>`  *Comma-separated list* | **Optional.**  Comma-separated list of [language and locale codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages) of language versions you want returned.  If omitted, the API returns all supported language versions. | `en_US,es_ES` |
| `<ADD_SECURITY_RECOMMENDATION>`  *Boolean* | **Optional.**  Set to `true` if you want the security recommendation body string included in the response.  If omitted, the API omits the security recommendation string. | `true` |
| `<CODE_EXPIRATION_MINUTES>`  *Int64* | **Optional.**  Set to an integer if you want the code expiration footer string included in the response.  If omitted, the API omits the code expiration footer string.  Value indicates number of minutes until code expires.  Minimum `1`, maximum `90`. | `10` |
| `<BUTTON_TYPES>`  *Comma-separated list of strings* | **Required.**  Comma-separated list of strings indicating button type.  If included, the response includes the button text for each button.  For authentication templates, this value must be `OTP`. | `OTP` |

### Example request

```
```
curl 'https://graph.facebook.com/v17.0/102290129340398/message_template_previews?category=AUTHENTICATION&languages=en_US,es_ES&add_security_recommendation=true&code_expiration_minutes=10&button_types=OTP' \  
-H 'Authorization: Bearer EAAJB...'
```
```

### Example response

```
```
{  
  "data": [  
    {  
      "body": "*{{1}}* is your verification code. For your security, do not share this code.",  
      "buttons": [  
        {  
          "autofill_text": "Autofill",  
          "text": "Copy code"  
        }  
      ],  
      "footer": "This code expires in 10 minutes.",  
      "language": "en_US"  
    },  
    {  
      "body": "Tu código de verificación es *{{1}}*. Por tu seguridad, no lo compartas.",  
      "buttons": [  
        {  
          "autofill_text": "Autocompletar",  
          "text": "Copiar código"  
        }  
      ],  
      "footer": "Este código caduca en 10 minutos.",  
      "language": "es_ES"  
    }  
  ]  
}
```
```
