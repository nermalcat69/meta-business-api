---
title: "Template components"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages
---

# Template components

Updated: Jun 24, 2026

Templates are made up of four primary components which you define when you create a template: header, body, footer, and buttons. The components you choose for each of your templates should be based on your business needs. The only required component is the body component.

Some components support variables, whose values you can supply when using the Cloud API to send the template in a template message. If your templates use variables, you must include sample variable values upon template creation.

## Text header

Text headers are optional elements that can be added to the top of template messages. Each template may include only one text header. Do not use Markdown special characters in this component.

Text headers support 1 [parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

### Creation syntax

```
<!-- No parameter syntax -->  
{  
  "type": "header",  
  "format": "text",  
  "text": "<HEADER_TEXT>"  
}  
  
<!-- Named parameter syntax -->  
{  
  "type": "header",  
  "format": "text",  
  "text": "<HEADER_TEXT>",  
  "example": {  
    "header_text_named_params": [  
      {  
        "param_name": "<NAMED_PARAMETER_NAME>",  
        "example": "<PARAMETER_EXAMPLE_VALUE>"  
      }  
    ]  
  }  
}  
  
<!-- Positional parameter syntax -->  
{  
  "type": "header",  
  "format": "text",  
  "text": "<HEADER_TEXT>",  
  "example": {  
    "header_text": [  
      "<PARAMETER_EXAMPLE_VALUE>"  
    ]  
  }  
}
```

### Creation parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<HEADER_TEXT>`  *String* | **Required.**  Header body text string. Supports 1 [parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).  If this string contains a parameter, you must include the `example` property and example parameter value.  Maximum 60 characters. | `Our new sale starts {​{sale_start_date}​}!` |
| `<NAMED_PARAMETER_NAME>`  *String* | **Required if using a named parameter.**  [Named parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#named-parameters) name. | `{​{sale_start_date}​}` |
| `<PARAMETER_EXAMPLE_VALUE>`  *String* | **Required if using a parameter.**  [Parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#parameter-formats) example value. | `December 1st` |

### Creation example

This example uses 1 named parameter.

```
{  
  "type": "HEADER",  
  "format": "TEXT",  
  "text": "Our new sale starts {​{sale_start_date}​}!",  
  "example": {  
    "header_text_named_params": [  
      {  
        "param_name": "sale_start_date",  
        "example": "December 1st"  
      }  
    ]  
  }  
}
```

## Media header

Media headers can be an image, video, gif, or a document such as a PDF. You must upload all media with the [Resumable Upload API](https://developers.facebook.com/docs/graph-api/guides/upload). The syntax for defining a media header is the same for all media types.

Note: Gifs are only available for [Marketing Messages API for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/features). Gifs are mp4 files with a max size of 3.5MB, and WhatsApp displays larger files as video messages.

### Creation syntax

```
{  
  "type": "HEADER",  
  "format": "<FORMAT>",  
  "example": {  
    "header_handle": [  
      "<HEADER_HANDLE>"  
    ]  
  }  
}
```

### Creation parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<FORMAT>` | Indicates media asset type. Set to `IMAGE`, `VIDEO`, `GIF`, or `DOCUMENT`. | `IMAGE` |
| `<HEADER_HANDLE>` | Uploaded media asset handle. Use the [Resumable Upload API](https://developers.facebook.com/docs/graph-api/guides/upload) to generate an asset handle. | `4::aW...` |

### Creation example

```
{  
  "type": "HEADER",  
  "format": "IMAGE",  
  "example": {  
    "header_handle": [  
      "4::aW..."  
    ]  
  }  
}
```

## Location header

Location headers appear as generic maps at the top of the template and are useful for use cases such as order tracking, delivery updates, ride-hailing pickup/dropoff, and locating physical stores. When tapped, the app user's default map app opens and loads the specified location. You specify locations when you send the template.

Location headers can only be used in templates categorized as `UTILITY` or `MARKETING`. Real-time locations are not supported.

### Creation syntax

```
{  
  "type": "header",  
  "format": "location"  
}
```

### Creation parameters

None.

### Creation example

```
{  
  "type": "header",  
  "format": "location"  
}
```

### Send syntax

```
{  
  "type": "header",  
  "parameters": [  
    {  
      "type": "location",  
      "location": {  
        "latitude": "<LOCATION_LATITUDE>",  
        "longitude": "<LOCATION_LONGITUDE>",  
        "name": "<LOCATION_NAME>",  
        "address": "<LOCATION_ADDRESS>"  
      }  
    }  
  ]  
}
```

### Send parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<LOCATION_ADDRESS>` | Location address. | `101 Forest Ave, Palo Alto, CA 94301` |
| `<LOCATION_LATITUDE>` | Location latitude in decimal degrees. | `37.44211676562361` |
| `<LOCATION_LONGITUDE>` | Location longitude in decimal degrees. | `122.16155960083124` |
| `<LOCATION_NAME>` | Location name. | `Philz Coffee` |

### Send example

```
{  
  "type": "header",  
  "parameters": [  
    {  
      "type": "location",  
      "location": {  
        "latitude": "37.44211676562361",  
        "longitude": "-122.16155960083124",  
        "name": "Philz Coffee",  
        "address": "101 Forest Ave, Palo Alto, CA 94301"  
      }  
    }  
  ]  
}
```

## Body

The body component represents the core text of your message template and is a text-only template component. Templates are limited to one body component.

The message text in the body component accepts multiple [parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).

### Creation syntax

```
<!-- No parameters syntax -->  
{  
  "type": "body",  
  "text": "<BODY_TEXT>"  
}  
  
<!-- Named parameters syntax -->  
{  
  "type": "body",  
  "text": "<BODY_TEXT>",  
  "example": {  
    "body_text_named_params": [  
      {  
        "param_name": "<NAMED_PARAMETER_NAME>",  
        "example": "<PARAMETER_EXAMPLE_VALUE>"  
      }  
      <!-- Additional named parameters go here, if using -->  
    ]  
  }  
}  
  
<!-- Positional parameters syntax -->  
{  
  "type": "body",  
  "text": "<BODY_TEXT>",  
  "example": {  
    "body_text": [  
      "<PARAMETER_EXAMPLE_VALUE>"  
      <!-- Additional positional parameters go here, if using -->  
    ]  
  }  
}
```

### Creation parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<BODY_TEXT>`  *String* | **Required.**  Body text string. Supports multiple [parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#parameter-formats).  Maximum of 1024 characters. | `Thank you, {​{first_name}​}! Your order number is {​{order_number}​}.` |
| `<NAMED_PARAMETER_NAME>`  *String* | **Required if using a named parameter.**  [Named parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#named-parameters) name. | `{​{order_number}​}` |
| `<PARAMETER_EXAMPLE_VALUE>`  *String* | **Required if using a parameter.**  [Parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#parameter-formats) example value. | `December 1st` |

### Creation example

```
{  
  "type": "body",  
  "text": "Thank you, {​{first_name}​}! Your order number is {​{order_number}​}.",  
  "example": {  
    "body_text_named_params": [  
      {  
        "param_name": "first_name",  
        "example": "Pablo"  
      },  
      {  
        "param_name": "order_number",  
        "example": "860198-230332"  
      }  
    ]  
  }  
}
```

## Footer

Footers are optional text-only components that appear immediately after the body component. Templates are limited to one footer component.

### Syntax

```
{  
  "type": "FOOTER",  
  "text": "<TEXT>"  
}
```

### Properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<TEXT>` | Text to appear in template footer when sent.  60 characters maximum. | `Use the buttons below to manage your marketing subscriptions` |

### Example

```
{  
  "type": "FOOTER",  
  "text": "Use the buttons below to manage your marketing subscriptions"  
}
```

## Buttons

Buttons are optional interactive components that perform specific actions when tapped.

Templates can have a combination of up to 10 button components in total, although there are limits to individual buttons of the same type as well as combination limits, which are described below. In addition, templates composed of 4 or more buttons, or a quick reply button and one or more buttons of another type, cannot be viewed on WhatsApp desktop clients. WhatsApp users who receive one of these template messages will be prompted to view the message on a phone instead.

Buttons are defined within a single buttons component object, packed into a single `buttons` array. For example, this template uses a voice call button and a URL button:

```
{  
  "type": "BUTTONS",  
  "buttons": [  
    {  
      "type": "VOICE_CALL",  
      "text": "Call"  
    },  
    {  
      "type": "URL",  
      "text": "Shop Now",  
      "url": "https://www.luckyshrub.com/shop/"  
    }  
  ]  
}
```

If a template has more than three buttons, two buttons appear in the delivered message, and WhatsApp replaces the remaining buttons with a **See all options** button. Tapping the **See all options** button reveals the remaining buttons.

![WhatsApp template message showing two buttons and a See all options button, with the expanded All Options panel listing the remaining buttons](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/362692024_651522560374555_6131765669860446689_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-jcL_9J6_N8Q7kNvwFCG9ae&_nc_oc=AdqVpuSQd7KwW6TJzSzL5fstCFCLu7xb3w0-Le3_eveflPI17JjlHJSkkSNhIjqEdBnYsXKiErtxxYDPP2L2N9jA&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=192nGQoCGCAowE1cuvW0gQ&_nc_ss=7b2a8&oh=00_AQD5klBFhzz6f0HE7r6O10Amh-3v9fJSAPmrVU-CncwfTA&oe=6A606F7B)

### Copy code buttons

Copy code buttons copy a text string (defined when the template is sent in a template message) to the device's clipboard when tapped by the app user. Templates are limited to one copy code button.

#### Syntax

```
{  
  "type": "COPY_CODE",  
  "example": "<EXAMPLE>"  
}
```

#### Properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<EXAMPLE>` | String to be copied to the device's clipboard when tapped by the app user.  Maximum 20 characters. | `250FF` |

#### Example

```
{  
  "type": "COPY_CODE",  
  "example": "250FF"  
}
```

### Multi-product message buttons

Multi-product message buttons are special, non-customizable buttons that, when tapped, display up to 30 products from your ecommerce catalog, organized in up to 10 sections, in a single message. See [Multi-Product Message Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/mpm-template-messages).

### One-time password buttons

One-time password buttons are a special type of [URL button](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages#url-buttons) component used with authentication templates. See [Authentication Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates).

### Voice call buttons

Voice call buttons make a WhatsApp call to the business when tapped by the app user. See [Create and send WhatsApp call button template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links/#create-and-send-whatsapp-call-button-template-message) to learn more.

### Phone number buttons

Phone number buttons call the specified business phone number when tapped by the app user. Templates are limited to one phone number button.

#### Syntax

```
{  
  "type": "PHONE_NUMBER",  
  "text": "<TEXT>",  
  "phone_number": "<PHONE_NUMBER>"  
}
```

#### Properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<PHONE_NUMBER>` | Alphanumeric string. Business phone number to be called when the user taps the button.  Note that some countries have special phone numbers that have leading zeros after the country calling code (for example, +55-0-955-585-95436). If you assign one of these numbers to the button, the leading zero will be stripped from the number. If your number will not work without the leading zero, assign an alternate number to the button, or add the number as message body text.  20 characters maximum. | `15550051310` |
| `<TEXT>` | Button label text.  25 characters maximum. | `Call` |

#### Example

```
{  
  "type": "PHONE_NUMBER",  
  "text": "Call",  
  "phone_number": "15550051310"  
}
```

### Quick reply buttons

Quick reply buttons are custom text-only buttons that immediately message you with the specified text string when tapped by the app user. A common use case is a button that allows your customer to easily opt-out of any marketing messages.

Templates are limited to 10 quick reply buttons. If using quick reply buttons with other buttons, buttons must be organized into two groups: quick reply buttons and non-quick reply buttons. If grouped incorrectly, the API will return an error indicating an invalid combination.

Examples of valid groupings:

* Quick Reply, Quick Reply
* Quick Reply, Quick Reply, URL, Phone
* URL, Phone, Quick Reply, Quick Reply

Examples of invalid groupings:

* Quick Reply, URL, Quick Reply
* URL, Quick Reply, URL

When using the API to send a template that has multiple quick reply buttons, you can use the index property to designate the order in which buttons appear in the template message.

#### Syntax

```
{  
  "type": "QUICK_REPLY",  
  "text": "<TEXT>"  
}
```

#### Properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<TEXT>` | Button label text.  25 characters maximum. | `Unsubscribe` |

#### Example

```
{  
  "type": "QUICK_REPLY",  
  "text": "Unsubscribe from Promos"  
}
```

### SPM buttons

Single-product message (SPM) buttons are special, non-customizable buttons that can be mapped to a product in your product catalog. When tapped, they load details about the product, which the button pulls from your catalog. Users can then add the product to their cart and place an order. See [Single-Product Message Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/spm-template-messages) and [Product Card Carousel Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/product-card-carousel-template-messages).

### URL buttons

URL buttons load the specified URL in the device's default web browser when tapped by the app user. Templates are limited to two URL buttons.

#### Syntax

```
{  
  "type": "URL",  
  "text": "<TEXT>",  
  "url": "<URL>",  
  
  # Required if <URL> contains a variable  
  "example": [  
    "<EXAMPLE>"  
  ]  
}
```

#### Properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<EXAMPLE>` | URL of website. Supports 1 variable.  If using a variable, add sample variable property to the end of the URL string. The URL loads in the device's default mobile web browser when the customer taps the button.  2000 characters maximum. | `https://www.luckyshrub.com/shop?promo=summer2023` |
| `<TEXT>` | Button label text. 25 characters maximum. | `Shop Now` |
| `<URL>` | URL of website that loads in the device's default mobile web browser when the button is tapped by the app user.  Supports 1 variable, appended to the end of the URL string.  2000 characters maximum. | `https://www.luckyshrub.com/shop?promo={​{1}​}` |

#### Example

```
{  
  "type": "URL",  
  "text": "Shop Now",  
  "url": "https://www.luckyshrub.com/shop?promo={​{1}​}",  
  "example": [  
    "summer2023"  
  ]  
}
```

#### URL encoding

If your URL button parameter values contain special characters, you must percent-encode them before including them in your send template message request. Unencoded special characters can cause the generated URL to fail validation, resulting in a message send error.

The following characters are common sources of encoding issues:

| Character | Encoded value | Example |
| --- | --- | --- |
| Space | `%20` | `New York` → `New%20York` |
| `:` | `%3A` | `x:key` → `x%3Akey` |
| `|` | `%7C` | `9|DL` → `9%7CDL` |
| `ç` | `%C3%A7` | `Gonçalves` → `Gon%C3%A7alves` |
| `ñ` | `%C3%B1` | `Peña` → `Pe%C3%B1a` |

For example, if your template URL is `https://example.com/order?name={​{customer_name}​}` and the parameter value is `Gonçalves`, you must send the value as `Gon%C3%A7alves`:

```
{  
  "type": "button",  
  "sub_type": "url",  
  "index": "0",  
  "parameters": [  
    {  
      "type": "text",  
      "parameter_name": "customer_name",  
      "text": "Gon%C3%A7alves"  
    }  
  ]  
}
```

## Limited-time offer

Limited-Time Offer components are special components used to create [limited-time offer templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/limited-time-offer-templates).

## Example requests

### Seasonal promotion

An example request to create a marketing template with the following components:

* a text header with a variable and sample value
* a text body with variables and sample values
* a text footer
* two quick-reply buttons

```
curl -L 'https://graph.facebook.com/v25.0/102290129340398/message_templates' \
-H 'Authorization: Bearer EAAJB...' \
-H 'Content-Type: application/json' \
-d '
{
  "name": "seasonal_promotion",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Our {​{1}​} is on!",
      "example": {
        "header_text": [
          "Summer Sale"
        ]
      }
    },
    {
      "type": "BODY",
      "text": "Shop now through {​{1}​} and use code {​{2}​} to get {​{3}​} off of all merchandise.",
      "example": {
        "body_text": [
          [
            "the end of August","25OFF","25%"
          ]
        ]
      }
    },
    {
      "type": "FOOTER",
      "text": "Use the buttons below to manage your marketing subscriptions"
    },
    {
      "type":"BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe from Promos"
        },
        {
          "type":"QUICK_REPLY",
          "text": "Unsubscribe from All"
        }
      ]
    }
  ]
}'
```

### Order confirmation

An example request to create a utility template with the following components:

* a document header with a sample value
* a text body with variables and sample values
* a phone number button
* a URL button

```
curl -L 'https://graph.facebook.com/v16.0/102290129340398/message_templates' \  
-H 'Authorization: Bearer EAAJB...' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "name": "order_confirmation",  
  "language": "en_US",  
  "category": "UTILITY",  
  "components": [  
    {  
      "type": "HEADER",  
      "format": "DOCUMENT",  
      "example": {  
        "header_handle": [  
          "4::YX..."  
        ]  
      }  
    },  
    {  
      "type": "BODY",  
      "text": "Thank you for your order, {​{1}​}! Your order number is {​{2}​}. Tap the PDF linked above to view your receipt. If you have any questions, please use the buttons below to contact support. Thank you for being a customer!",  
      "example": {  
        "body_text": [  
          [  
            "Pablo","860198-230332"  
          ]  
        ]  
      }  
    },  
    {  
      "type": "BUTTONS",  
      "buttons": [  
        {  
          "type": "PHONE_NUMBER",  
          "text": "Call",  
          "phone_number": "15550051310"  
        },  
        {  
          "type": "URL",  
          "text": "Contact Support",  
          "url": "https://www.luckyshrub.com/support"  
        }  
      ]  
    }  
  ]  
}'
```

### Order delivery update

An example request to create a utility template with the following components:

* a location header
* a text body with variables and sample values
* a footer
* a quick reply button

```
curl 'https://graph.facebook.com/v25.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "order_delivery_update",
  "language": "en_US",
  "category": "UTILITY",
  "components": [
    {
      "type": "HEADER",
      "format": "LOCATION"
    },
    {
      "type": "BODY",
      "text": "Good news {​{1}​}! Your order #{​{2}​} is on its way to the location above. Thank you for your order!",
      "example": {
        "body_text": [
          [
            "Mark",
            "566701"
          ]
        ]
      }
    },
    {
      "type": "FOOTER",
      "text": "To stop receiving delivery updates, tap the button below."
    },
    {
      "type":"BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Stop Delivery Updates"
        }
      ]
    }
  ]
}'
```

## Webhooks

Subscribe to the [message\_template\_components\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_components_update) webhook field to be notified of changes to a template's components.
