---
title: "Contacts messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/document-messages
---

# Contacts messages

Updated: May 21, 2026

Contacts messages allow you to send rich contact information directly to WhatsApp users, such as names, phone numbers, physical addresses, and email addresses.

![Annotated contacts message diagram labeling the formatted name Barbara Johnson, profile arrow, Message button, and Save contact button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/441381765_2668119610015051_1596469393832242771_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dlFsjvj68woQ7kNvwEJGGvr&_nc_oc=AdobOA01GJWyt6OBxlq1f-q5DXT2lSyzdqygDsuarVfOZzTMX1Y5ccGrkmcK1L_fuej-hPXgzzwAtF0BM_dvG6Lv&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=8LWTDEhq0vjcR-e8JA-J1g&_nc_ss=7b2a8&oh=00_AQB7coaBhJbnwmsg_NNyK8l7QjbbCPVXXluCYeVKcqntTw&oe=6A605FB2)

When a WhatsApp user taps the message’s profile arrow, it displays the contact’s information in a profile view:

![Contact profile view for Dr. Barbara Joana Johnson Esq., showing job title, company, phone numbers, emails, and address](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/441391825_1516000578987481_5920245070887074504_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hciEbGvxSyQQ7kNvwGLK2FO&_nc_oc=AdplOrR8uhmVWVqVKt43JsejkEya30xf72pYcZQA0Tqh1Ez5WnOGkBa7dg59Axjk2ebTZ5KpCg2Aka4XT1yRvCOY&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=8LWTDEhq0vjcR-e8JA-J1g&_nc_ss=7b2a8&oh=00_AQAhyaE48xoKg-KdUKSc8xg0RO-Tsm-VSLxwDeCNq7uenA&oe=6A605C67)

Each message can include information for up to 257 contacts, although it is recommended to send fewer for usability and negative feedback reasons.

A contact’s metadata (for example, addresses, birthdays, emails) may not be supported by the recipient, especially on their primary device. Refer to this [documentation⁠](https://faq.whatsapp.com/378279804439436/?cms_platform=android&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR71KdJILwN4hWgqf_F3lofWYA30zDvZe_Iv-VQc-RYr-mI3sPpiDNd1n-202w_aem_sxVB9-IHuH8oj4lGJW_wJw) for the definitions of primary and linked devices.

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send a contacts message to a WhatsApp user.

```
```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "contacts",  
  "contacts": [  
    {  
      "addresses": [  
        {  
          "street": "<STREET_NUMBER_AND_NAME>",  
          "city": "<CITY>",  
          "state": "<STATE_CODE>",  
          "zip": "<ZIP_CODE>",  
          "country": "<COUNTRY_NAME>",  
          "country_code": "<COUNTRY_CODE>",  
          "type": "<ADDRESS_TYPE>"  
        }  
        <!-- Additional addresses objects go here, if using -->  
      ],  
      "birthday": "<BIRTHDAY>",  
      "emails": [  
        {  
          "email": "<EMAIL_ADDRESS>",  
          "type": "<EMAIL_TYPE>"  
        }  
        <!-- Additional emails objects go here, if using -->  
      ],  
      "name": {  
        "formatted_name": "<FULL_NAME>",  
        "first_name": "<FIRST_NAME>",  
        "last_name": "<LAST_NAME>",  
        "middle_name": "<MIDDLE_NAME>",  
        "suffix": "<SUFFIX>",  
        "prefix": "<PREFIX>"  
      },  
      "org": {  
        "company": "<COMPANY_OR_ORG_NAME>",  
        "department": "<DEPARTMENT_NAME>",  
        "title": "<JOB_TITLE>"  
      },  
      "phones": [  
        {  
          "phone": "<PHONE_NUMBER>",  
          "type": "<PHONE_NUMBER_TYPE>",  
          "wa_id": "<WHATSAPP_USER_ID>"  
        }  
        <!-- Additional phones objects go here, if using -->  
      ],  
      "urls": [  
        {  
          "url": "<WEBSITE_URL>",  
          "type": "<WEBSITE_TYPE>"  
        }  
        <!-- Additional URLs go here, if using -->  
      ]  
    }  
  ]  
}'
```
```

## Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<ADDRESS_TYPE>`  *String* | **Optional.**  Type of address, such as home or work. | `Home` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BIRTHDAY>`  *String* | **Optional.**  Contact’s birthday. Must be in `YYYY-MM-DD` format. | `1999-01-23` |
| `<CITY>`  *String* | **Optional.**  City where the contact resides. | `Menlo Park` |
| `<COMPANY_OR_ORG_NAME>`  *String* | **Optional.**  Name of the company where the contact works. | `Lucky Shrub` |
| `<COUNTRY_CODE>`  *String* | **Optional.**  ISO two-letter country code. | `US` |
| `<COUNTRY_NAME>`  *String* | **Optional.**  Country name. | `United States` |
| `<DEPARTMENT_NAME>`  *String* | **Optional.**  Department within the company. | `Legal` |
| `<EMAIL_ADDRESS>`  *String* | **Optional.**  Email address of the contact. | `bjohnson@luckyshrub.com` |
| `<EMAIL_TYPE>`  *String* | **Optional.**  Type of email, such as personal or work. | `Work` |
| `<FIRST_NAME>`  *String* | **Optional.**  Contact’s first name. | `Barbara` |
| `<FORMATTED_NAME>`  *String* | **Required.**  Contact’s formatted name. This will appear in the message alongside the profile arrow button. | `Barbara J. Johnson` |
| `<JOB_TITLE>`  *String* | **Optional.**  Contact’s job title. | `Lead Counsel` |
| `<LAST_NAME>`  *String* | **Optional.**  Contact’s last name. | `Johnson` |
| `<MIDDLE_NAME>`  *String* | **Optional.**  Contact’s middle name. | `Joana` |
| `<PHONE_NUMBER>`  *String* | **Optional.**  WhatsApp user phone number. | `+16505559999` |
| `<PHONE_NUMBER_TYPE>`  *String* | **Optional.**  Type of phone number, such as cell, mobile, main, iPhone, home, or work. | `Home` |
| `<PREFIX>`  *String* | **Optional.**  Prefix for the contact’s name, such as Mr., Ms., Dr., etc. | `Dr.` |
| `<STATE_CODE>`  *String* | **Optional.**  Two-letter state code. | `CA` |
| `<STREET_NUMBER_AND_NAME>`  *String* | **Optional.**  Street address of the contact. | `1 Lucky Shrub Way` |
| `<SUFFIX>`  *String* | **Optional.**  Suffix for the contact’s name, if applicable. | `Esq.` |
| `<WEBSITE_TYPE>`  *String* | **Optional.**  Type of website, such as company, work, personal, Facebook Page, or Instagram. | `Company` |
| `<WEBSITE_URL>`  *String* | **Optional.**  Website URL associated with the contact or their company. | `https://www.luckyshrub.com` |
| `<WHATSAPP_USER_ID>`  *String* | **Optional.**  WhatsApp user ID. If omitted, the message will display an Invite to WhatsApp button instead of the standard buttons.  See [Button Behavior](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/document-messages#button-behavior) below. | `19175559999` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |
| `<ZIP_CODE>`  *String* | **Optional.**  Postal or ZIP code. | `94025` |

## Button behavior

If you include the contact’s WhatsApp ID in the message (via the `wa_id` property), the message will include a **Message** and a **Save contact** button:

![Contacts message for Barbara Johnson with a Message button and a Save contact button below the contact name](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/441399296_815661620463689_7258599973025915055_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fxlzYR74ZpAQ7kNvwGZRC5s&_nc_oc=Adp9L7V24EahHf0W1I-wrSTKyVMisQEcrPAjyF_6yATv0-2aVIbd5IXaYa8YAjT4nEpUlmzotdOYPzoDPyWfNSQE&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=8LWTDEhq0vjcR-e8JA-J1g&_nc_ss=7b2a8&oh=00_AQA8kr75ABk5UQ4WyYwZfRycVky5HKtW0uoBkt_sit3rVw&oe=6A60662A)

If the WhatsApp user taps the **Message** button, it will open a new message with the contact. If the user taps the **Save contact** button, they will be given the option to save the contact as a new contact, or to update an existing contact.

If you omit the `wa_id` property, both buttons will be replaced with an **Invite to WhatsApp** button:

![Contacts message for Barbara Johnson with a single Invite to WhatsApp button below the contact name](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/441366594_855962089669296_5557083162637364924_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wbiqbTCQvtYQ7kNvwFHL1OT&_nc_oc=Adqg5l0zWFL78fFjCZJBQRM-vSs_beBWqWQNPMp1EBDtR3mXaAGFUSOvv8kaj3BdqiTIYNhto_2oo18xC9jKOJrx&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=8LWTDEhq0vjcR-e8JA-J1g&_nc_ss=7b2a8&oh=00_AQAzsxNgCu5Ax8LcOSOPLdr8XDng6rjtalyQYekXic2PaA&oe=6A604C17)

## Example request

Example request to send a contacts message with two physical addresses, two email addresses, two phone numbers, and two website URLs.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "to": "+16505551234",
  "type": "contacts",
  "contacts": [
    {
      "addresses": [
        {
          "street": "1 Lucky Shrub Way",
          "city": "Menlo Park",
          "state": "CA",
          "zip": "94025",
          "country": "United States",
          "country_code": "US",
          "type": "Office"
        },
        {
          "street": "1 Hacker Way",
          "city": "Menlo Park",
          "state": "CA",
          "zip": "94025",
          "country": "United States",
          "country_code": "US",
          "type": "Pop-Up"
        }
      ],
      "birthday": "1999-01-23",
      "emails": [
        {
          "email": "bjohnson@luckyshrub.com",
          "type": "Work"
        },
        {
          "email": "bjohnson@luckyshrubplants.com",
          "type": "Work (old)"
        }
      ],
      "name": {
        "formatted_name": "Barbara J. Johnson",
        "first_name": "Barbara",
        "last_name": "Johnson",
        "middle_name": "Joana",
        "suffix": "Esq.",
        "prefix": "Dr."
      },
      "org": {
        "company": "Lucky Shrub",
        "department": "Legal",
        "title": "Lead Counsel"
      },
      "phones": [
        {
          "phone": "+16505559999",
          "type": "Landline"
        },
        {
          "phone": "+19175559999",
          "type": "Mobile",
          "wa_id": "19175559999"
        }
      ],
      "urls": [
        {
          "url": "https://www.luckyshrub.com",
          "type": "Company"
        },
        {
          "url": "https://www.facebook.com/luckyshrubplants",
          "type": "Company (FB)"
        }
      ]
    }
  ]
}'
```

## Example response

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "+16505551234",  
      "wa_id": "16505551234"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"  
    }  
  ]  
}
```
```
