---
title: "Template Library"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-archival
---

# Template Library

Updated: May 21, 2026

Template Library makes it faster and easier for businesses to create utility templates for common use cases, like payment reminders, delivery updates — and authentication templates for common identity verification use cases.

These pre-written templates have already been categorized as utility or authentication. Library templates contain fixed content that cannot be edited and parameters you can adapt for business or user-specific information.

You can browse and create templates using Template Library in WhatsApp Manager, or programmatically via the API.

## Creating templates via WhatsApp Manager (WAM)

Follow the instructions below to create templates using the Template Library in [WhatsApp Manager⁠](https://business.facebook.com/wa/manage/template-library).

* In the sidebar of WAM, under **Message Templates**, select **Create Template**.

![WhatsApp Manager sidebar with Create template highlighted under Message templates](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/564050140_1339317901260194_2215442945738675402_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=W2Q6W57hAQcQ7kNvwExiIRL&_nc_oc=AdrSINQxKpU0qXmkNPlQhdbkkhsyrasZ80rsRA9H0taR3oWdFMZmy5Li1qRhae5o82R2C_3vfeLlpgHlikIzwSuX&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=9n2NTCYYEytljQFlLdgdig&_nc_ss=7b2a8&oh=00_AQDV2I6C5TKwek7r-EmPsIfX8gUEtYa4_cRBiF_Enw2OSA&oe=6A60618A)

* Under *Browse the WhatsApp Template Library*, select **Browse Templates**.

![Create template screen with blank template and Browse templates library options](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/560898429_1339318461260138_2068693222637029790_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kvk1f-_tUPYQ7kNvwFJGYZD&_nc_oc=Ado8dxemL7WZWI72WrRsx2pN-w2OF67BZtTUIf17GWHNIz-amhQZCVnw4rD7H3wdpGr3G9RKgMG3ZDb6x9ar7Un3&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=9n2NTCYYEytljQFlLdgdig&_nc_ss=7b2a8&oh=00_AQCfcGJHin1dkCnMmDMApcPRaGCPM1tC7wyC1l-mvPR4RA&oe=6A606562)

* You will now see all currently available templates. Use the search bar to search by topic or use case, or use the dropdown options on the sidebar to filter the results.

Hovering over a template will show you its parameter values.

![Template library grid of utility template cards with category filters and search bar](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/560665283_1339318454593472_1581401886238873208_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=axfKwQUZhO0Q7kNvwEjkFNU&_nc_oc=Adq5XFVeQuBppMUr-cKln7foobNjF3zjnZ9DWoZbVQ0d03_xrk_Ziyez7vr1Obl5M3zP7lb-LQ4kiDozWSN87pT8&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=9n2NTCYYEytljQFlLdgdig&_nc_ss=7b2a8&oh=00_AQCjpH8OgTWjC8g4kc0y7euqLtF_H7-7F6S-NMU0b7h72Q&oe=6A605599)

* To create a template, **select one** by clicking on it. Then, add your template name, select the language, and fill out the button details. Once you have completed these steps, click **Submit**.

Note: If you choose **Customize template**, your template will have to go through review before you are able to send messages.

![Delivery confirmation template detail dialog with name, language, button fields and preview](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/564202977_1339318004593517_4596535304491755062_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=y-GILHhgF50Q7kNvwFhhH-p&_nc_oc=AdpjtQBbtK3LL5MZYyM6TJd2dd4XyqWv1IRAxHcfLuIQnE6ja8CIWnehOiYttthqKuTs4w1F64Iaml6UqQzIxK9K&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=9n2NTCYYEytljQFlLdgdig&_nc_ss=7b2a8&oh=00_AQDvW9kWGhW273yfv06btZRY9ITKPXExytjWkJlFEGJQYA&oe=6A60445C)

## Template parameters and restrictions

When a template contains the value `library_template_name` in the `GET <WABAID>/message_templates?name=<TEMPLATE_NAME>` response, it is a template created from the Template Library and is subject to type checks and restrictions.

![Account setup message preview with sample values addressed to Jim from CS Mutual](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/564078988_1339317931260191_355325833187515070_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=rekdBcYAKM4Q7kNvwGbLm1i&_nc_oc=AdrDN3Q9cqhq1WO1pRTRoIt0w6O0cY2sRjTqRFX72gqh4ZKYGIVsgxqtEt9Xw4mQnWTFmyt9f-92yi7CYPuTaDRD&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=9n2NTCYYEytljQFlLdgdig&_nc_ss=7b2a8&oh=00_AQAYr08xm6EImGVa0wM4yj0sHHTMngAtkvIfuP_zRYJomg&oe=6A605AAA)![Same account setup message preview showing text parameters as green text placeholders](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/560193637_1339318421260142_6827805123941026588_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=evA9yBuRVQwQ7kNvwHnJlkb&_nc_oc=AdpRWODhVSl1lJaEDrWUd5MY5nWReC7SIdaBR63AgANLoXu7kgwsU5h50Ljnfsd_OIQLbp8sDFBhH2ICOv0p_dnc&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=9n2NTCYYEytljQFlLdgdig&_nc_ss=7b2a8&oh=00_AQD5nTJeu9PqqXd37TIbmjNyiYM9pinE8MNybwo6IhTGxA&oe=6A60515E)

Templates in the library contain both fixed content and parameters. The parameters represent spaces in the template where variable information can be inserted, such as names, addresses, and phone numbers.

In the example above, parameters like the name `Jim` or the business name `CS Mutual` can be modified to accept variables like your customer's name and your business's name.

Messages sent using templates from Template Library are subject to parameter checks during send time. Values used in parameters that are outside of the established ranges listed below will cause the message send to fail.

### List of parameters and sample values

All parameters are length restricted. If you receive an error, try again with a shorter value.

| Parameter Type | Description | Sample Value |
| --- | --- | --- |
| `ADDRESS` | A location address.   * Must be a valid address | * `1 Hacker Way, Menlo Park, CA 94025` |
| `TEXT` | Basic text. | * `regarding your order.` * `12 pack of paper towels` * `your request` * `purchase` * `Jasper's Market` |
| `AMOUNT` | A number signifying a quantity.   * May contain a prefix or suffix for monetary values such as USD or RS * May contain decimals (.) and commas (,) * May contain valid currency symbols such as $ and € | * `145` * `USD $375.32` * `€1,376.22 EUR` * `RS 1200` |
| `DATE` | A standard calendar date. | * `2021-04-19` * `13/03/2021` * `5th January 1982` * `08.22.1991` * `January 1st, 2024` * `05 12 2022` |
| `PHONE NUMBER` | A telephone number.   * May contain numbers, spaces, dashes (-), parentheses, and plus symbols (+) | * `+1 4256789900` * `+91-7884-789122` * `+39 87 62232` |
| `EMAIL` | A standard email address.   * Must be a valid email address | * `1hackerway@meta.com` * `yourcustomername@gmail.com` * `abusinessorcustomername@hotmail.com` |
| `NUMBER` | A number.   * Must be a number. * Cannot contain spaces. | * `23444` * `90001234921388904` * `453638` |

## Forms

Forms are only available to accounts who have had their message limits increased.

![Three interactive form template previews each tagged with a Form label](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/561076760_1339318104593507_1250042269511586117_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=WeKh84slujwQ7kNvwHJ0azH&_nc_oc=AdpQgU61NEB8ixFjR1JxLVAkADne-k_rpK01sjY8xKxbCYmzVXvswfpaZNoktoKj8h8UlRQMBB0VpPvVmRA-Am34&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=9n2NTCYYEytljQFlLdgdig&_nc_ss=7b2a8&oh=00_AQBX5ntKqfnKZoBGZM1mpZSg991BlFkiRJKAOJu0EptFdg&oe=6A606510)

Some templates in Template Library are interactive forms that are powered by WhatsApp Flows.

In WhatsApp Manager, you can identify these specific templates by the "Form" label they contain. The current supported use cases are Customer Feedback and Delivery Failure.

### Identifying forms in the request response

When calling the `GET /message_template_library` endpoint, the `type` key in the `buttons` array will show as `"FORMS"`.

```
{  
      "name": "delivery_failed_2_form",  
      "language": "en_US",  
      "category": "UTILITY",  
      "topic": "ORDER_MANAGEMENT",  
      "usecase": "DELIVERY_FAILED",  
      "industry": [  
        "E_COMMERCE"  
      ],  
      "body": "We were unable to deliver order {​{1}​} today.  
  
Please {​{2}​} to schedule another delivery attempt.",  
      "body_params": [  
        "#12345",  
        "try a redelivery"  
      ],  
      "body_param_types": [  
        "TEXT",  
        "TEXT"  
      ],  
      "buttons": [  
        {  
          "type": "FLOW",  
          "text": "Reschedule"  
        }  
      ],  
      "id": "7138055039625658"  
},
```

## Using the API

The Template Library API has two endpoints:

```
// Used to browse available library templates
GET /message_template_library
```

```
// Used when you are ready to create a template from the library.
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

### Searching and filtering available templates

Templates with `Header` parameter types of `Document` only support PDFs.

To browse and filter available templates, use the `message_template_library` endpoint.

Once you find the template you are interested in, note the name as you will use it when creating the template via the `POST` method.

### Request syntax

```
// Get all available templates
GET /message_template_library

// Search for substring
GET /message_template_library?search=<SEARCH_KEY>

// Filter by template topic
GET/message_template_library?topic=<TOPIC>

// Filter by template use case
GET/message_template_library?usecase=<USECASE>

// Filter by template industry
GET/message_template_library?industry=<INDUSTRY>

// Filter by template language
GET/message_template_library?language=<LANGUAGE>

// Search by template name
GET /message_template_library?name=<NAME>
```

### Query string parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<SEARCH_KEY>`  *String* | **Optional.**  A substring you are searching for in the content, name, header, body, or footer of the template. | `payments` |
| `<TOPIC>`  *Enum* | **Optional.**  The topic of the template.   See Template Filters below | `ORDER_MANAGEMENT` |
| `<USECASE>`  *Enum* | **Optional.**  The use case of the template.   See Template Filters below | `SHIPMENT_CONFIRMATION` |
| `<INDUSTRY>`  *Enum* | **Optional.**  The industry of the template.   See Template Filters below | `E_COMMERCE` |
| `<LANGUAGE>`  *Enum* | **Optional.**  The template language locale code.   See [Supported Languages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages) | `en_US` |
| `<NAME>`  *String* | **Optional.**  The name of the template you are searching for in the template library. | `verify_otp_usecase` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/102290129340398/message_templates?search="payments"'
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
{  
      "name": "low_balance_warning_1",  
      "language": "en_US",  
      "category": "UTILITY",  
      "topic": "PAYMENTS",  
      "usecase": "LOW_BALANCE_WARNING",  
      "industry": [  
        "FINANCIAL_SERVICES"  
      ],  
      "header": "Your account balance is low",  
      "body": "Hi {​{1}​},  
This is to notify you that your {​{2}​} in your {​{3}​} account, ending in {​{4}​} is below your pre-set {​{5}​} of {​{6}​}.  
Click the button to deposit more {​{7}​}.  
{​{8}​}",  
      "body_params": [  
        "Jim",  
        "available funds",  
        "CS Mutual checking plus",  
        "1234",  
        "limit",  
        "$75.00",  
        "funds",  
        "CS Mutual"  
      ],  
      "buttons": [  
        {  
          "type": "URL",  
          "text": "Make a deposit",  
          "url": "https://www.example.com/"  
        },  
        {  
          "type": "PHONE_NUMBER",  
          "text": "Call us",  
          "phone_number": "+18005551234"  
        }  
      ],  
      "id": "7147013345418927"  
}
```

### Template filters

There are several templates to choose from in the Template Library. You can use the API to filter them based on a few factors.

**Industry**

* `E_COMMERCE`
* `FINANCIAL_SERVICES`

**Topic**

* `ACCOUNT_UPDATE`
* `CUSTOMER_FEEDBACK`
* `ORDER_MANAGEMENT`
* `PAYMENTS`

**Use case**

* `ACCOUNT_CREATION_CONFIRMATION`
* `AUTO_PAY_REMINDER`
* `DELIVERY_CONFIRMATION`
* `DELIVERY_FAILED`
* `DELIVERY_UPDATE`
* `FEEDBACK_SURVEY`
* `FRAUD_ALERT`
* `LOW_BALANCE_WARNING`
* `ORDER_ACTION_NEEDED`
* `ORDER_CONFIRMATION`
* `ORDER_DELAY`
* `ORDER_OR_TRANSACTION_CANCEL`
* `ORDER_PICK_UP`
* `PAYMENT_ACTION_REQUIRED`
* `PAYMENT_CONFIRMATION`
* `PAYMENT_DUE_REMINDER`
* `PAYMENT_OVERDUE`
* `PAYMENT_REJECT_FAIL`
* `PAYMENT_SCHEDULED`
* `RECEIPT_ATTACHMENT`
* `RETURN_CONFIRMATION`
* `SHIPMENT_CONFIRMATION`
* `STATEMENT_ATTACHMENT`
* `STATEMENT_AVAILABLE`
* `TRANSACTION_ALERT`

## Creating templates

**Note: The modification of rules surrounding body properties for this endpoint is for the explicit purpose of showcasing how to use the endpoint with Template Library.**

To create a new template using the Template Library, call the existing `<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates` endpoint using the body properties below.

### Request syntax

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

### Post body

```
{  
  "name": "<NAME>",  
  "category": "UTILITY",  
  "language": "en_US",  
  "library_template_name": "<LIBRARY_TEMPLATE_NAME>",  
  "library_template_button_inputs": "[  
    {'type': 'URL', 'url': {'base_url' : 'https://www.example.com/{​{1}​}',  
    'url_suffix_example' : 'https://www.example.com/demo'}​},  
    {type: 'PHONE_NUMBER', 'phone_number': '+16315551010'}  
]"  
}
```

### Body properties

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<NAME>`  *String* | **Required.**  The name you are providing for your template.  Maximum 512 characters. | `my_payment_template` |
| `<CATEGORY>`  *Enum* | **Required.**  The template category.  **Must be `UTILITY` for use with Template Library.** | `UTILITY` |
| `<LANGUAGE>`  *Enum* | **Required.**  The template language locale code.   See [Supported Languages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages) | `en_US` |
| `<LIBRARY_TEMPLATE_NAME>`  *String* | **Required.**  The exact name of the Template Library template. | `delivery_update_1` |
| `<LIBRARY_TEMPLATE_BUTTON_INPUTS>`  *Array of objects* | **Optional.**  The website and/or phone number of the business being used in the template.  **Note: For utility templates that have button inputs, this property is *not* optional.** | `"[ {'type': 'URL', 'url': {'base_url' : 'https://www.example.com/{​{1}​}', 'url_suffix_example' : 'https://www.example.com/demo'}​}, {type: 'PHONE_NUMBER', 'phone_number': '+16315551010'} ]"` |

### Library template button inputs

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `type`  *enum* | The button type  `QUICK_REPLY`, `URL`, `PHONE_NUMBER`, `OTP`, `MPM`, `CATALOG`, `FLOW`, `VOICE_CALL`, `APP`  *Required* | `OTP` |
| `phone_number`  *String* | Phone number for the button.  *Optional* | `"+13057652345"` |
| `url`  *JSON Object* | [View JSON object URL parameters `base_url` and `url_suffix_example` here](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates)  *Optional* |  |
| `zero_tap_terms_accepted`  *boolean* | Whether the zero tap terms were accepted by the user or not.  *Optional* | `TRUE` |
| `otp_type`  *enum* | The OTP type.  `COPY_CODE`, `ONE_TAP`, `ZERO_TAP`  *Optional* | `TRUE` |
| `supported_apps`  *Array of JSON Object* | [View JSON object Supported App parameters `package_name` and `signature_hash` here](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates)  *Optional* |  |

### Library template body inputs

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<LIBRARY_TEMPLATE_BODY_INPUTS>`  *JSON Object* | **Optional.**  Optional data during creation of a template from Template Library. These are optional fields for the button component.  [*Learn how to create templates using Template Library*](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-library) |  |
| `add_contact_number`  *boolean* | Boolean value to add information to the template about contacting business on their phone number.  *Optional* | `TRUE` |
| `add_learn_more_link`  *boolean* | Boolean value to add information to the template about learning more information with a url link.  Not widely available and will be ignored if not available.  *Optional* | `TRUE` |
| `add_security_recommendation`  *boolean* | Boolean value to add information to the template about not sharing authentication codes with anyone.  *Optional* | `TRUE` |
| `add_track_package_link`  *boolean* | Boolean value to add information to the template to track delivery packages.  Not widely available and will be ignored if not available.  *Optional* | `TRUE` |
| `code_expiration_minutes`  *int64* | Integer value to add information to the template on when the code will expire.  *Optional* | `5` |

### Example request

```
curl 'https://graph.facebook.com/v19.0/102290129340398/message_templates'  
-H 'Authorization: Bearer EAAJB...'  
-H 'Content-Type: application/json'  
-d '  
{  
  "name": "my_delivery_update",  
  "language": "en_US",  
  "category": "UTILITY",  
  "library_template_name": "delivery_update_1",  
  "library_template_button_inputs": "[  
    {'type': 'URL', 'url': {'base_url' : 'https://www.example.com/{​{1}​}',  
    'url_suffix_example' : 'https://www.example.com/order_update}​}  
  ]"  
}
```

### Example response

```
{  
  "id": "{hsm-id}",  
  "status": "APPROVED",  
  "category": "UTILITY"  
}
```

## Sending template messages

To learn how to send templated messages, view the [Template fundamentals](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)
