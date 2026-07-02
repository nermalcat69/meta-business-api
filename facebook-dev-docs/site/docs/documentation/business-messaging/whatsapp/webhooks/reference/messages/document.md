---
title: "Contacts messages webhook reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/document
---

# Contacts messages webhook reference

Updated: Jun 17, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account **messages** webhook for messages containing one or more contacts.

## Triggers

* A WhatsApp user sends one or more contacts to a business.
* A WhatsApp user sends one or more contacts to a business via a Click to WhatsApp ad.

## Syntax

Many contact properties may be omitted if the WhatsApp user chooses not to share them or if their device prevents sharing.

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "<WHATSAPP_USER_PROFILE_NAME>"  
                },  
                "wa_id": "<WHATSAPP_USER_ID>",  
                "identity_key_hash": "<IDENTITY_KEY_HASH>" <!-- only included if identity change check enabled -->  
              }  
            ],  
            "messages": [  
              {  
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",  
                "id": "<WHATSAPP_MESSAGE_ID>",  
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",  
                "type": "contacts",  
                "contacts": [  
                  {  
                    "addresses": [  
                      {  
                        "city": "<CONTACT_CITY>",  
                        "country": "<CONTACT_COUNTRY>",  
                        "country_code": "<CONTACT_COUNTRY_CODE>",  
                        "state": "<CONTACT_STATE>",  
                        "street": "<CONTACT_STREET>",  
                        "type": "<CONTACT_ADDRESS_TYPE>",  
                        "zip": "<CONTACT_ZIP>"  
                      }  
                    ],  
                    "birthday": "<CONTACT_BIRTHDAY>",  
                    "emails": [  
                      {  
                        "email": "<CONTACT_EMAIL>",  
                        "type": "<CONTACT_EMAIL_TYPE>"  
                      }  
                    ],  
                    "name": {  
                      "formatted_name": "<CONTACT_FORMATTED_NAME>",  
                      "first_name": "<CONTACT_FIRST_NAME>",  
                      "last_name": "<CONTACT_LAST_NAME>",  
                      "middle_name": "<CONTACT_MIDDLE_NAME>",  
                      "suffix": "<CONTACT_NAME_SUFFIX>",  
                      "prefix": "<CONTACT_NAME_PREFIX>"  
                    },  
                    "org": {  
                      "company": "<CONTACT_ORG_COMPANY>",  
                      "department": "<CONTACT_ORG_DEPARTMENT>",  
                      "title": "<CONTACT_ORG_TITLE>"  
                    },  
                    "phones": [  
                      {  
                        "phone": "<CONTACT_PHONE>",  
                        "wa_id": "<CONTACT_WHATSAPP_PHONE_NUMBER>",  
                        "type": "<CONTACT_PHONE_TYPE>"  
                      }  
                    ],  
                    "urls": [  
                      {  
                        "url": "<CONTACT_URL>",  
                        "type": "<CONTACT_URL_TYPE>"  
                      }  
                    ]  
                  }  
                ],  
  
                <!-- only included if message sent via a Click to WhatsApp ad -->  
                "referral": {  
                  "source_url": "<AD_URL>",  
                  "source_id": "<AD_ID>",  
                  "source_type": "ad",  
                  "body": "<AD_PRIMARY_TEXT>",  
                  "headline": "<AD_HEADLINE>",  
                  "media_type": "<AD_MEDIA_TYPE>",  
                  "image_url": "<AD_IMAGE_URL>",  
                  "video_url": "<AD_VIDEO_URL>",  
                  "thumbnail_url": "<AD_VIDEO_THUMBNAIL>",  
                  "ctwa_clid": "<AD_CLICK_ID>",  
                  "welcome_message": {  
                    "text": "<AD_GREETING_TEXT>"  
                  }  
                }  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<AD_CLICK_ID>`  *String* | Click to WhatsApp ad click ID.  The `ctwa_clid` property is omitted entirely for messages originating from an ad in WhatsApp Status ([WhatsApp Status ad placements⁠](https://www.facebook.com/business/help/1074444721456755)). | `Aff-n8ZTODiE79d22KtAwQKj9e_mIEOOj27vDVwFjN80dp4_0NiNhEgpGo0AHemvuSoifXaytfTzcchptiErTKCqTrJ5nW1h7IHYeYymGb5K5J5iTROpBhWAGaIAeUzHL50` |
| `<AD_GREETING_TEXT>`  *String* | Click to WhatsApp ad greeting text. | `Hi there! Let us know how we can help!` |
| `<AD_HEADLINE>`  *String* | Click to WhatsApp ad headline. | `Chat with us` |
| `<AD_ID>`  *String* | Click to WhatsApp ad ID. | `120226305854810726` |
| `<AD_IMAGE_URL>`  *String* | Click to WhatsApp ad image URL. Only included if the ad is an image ad. | `https://scontent.xx.fbcdn.net/v/t45.1...` |
| `<AD_MEDIA_TYPE>`  *String* | Click to WhatsApp ad media type. Values can be:  `image` — Indicates an image ad.  `video` — Indicates a video ad. | `image` |
| `<AD_PRIMARY_TEXT>`  *String* | Click to WhatsApp ad primary text. | `Summer succulents are here!` |
| `<AD_URL>`  *String* | Click to WhatsApp ad URL. | `https://fb.me/3cr4Wqqkv` |
| `<AD_VIDEO_THUMBNAIL>`  *String* | Click to WhatsApp ad video thumbnail URL. Only included if ad is a video ad. | `https://scontent.xx.fbcdn.net/v/t45.3...` |
| `<AD_VIDEO_URL>`  *String* | Click to WhatsApp ad video URL. Only included if ad is a video ad. | `https://scontent.xx.fbcdn.net/v/t45.2...` |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>`  *String* | Business display phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | Business phone number ID. | `106540352242922` |
| `<CONTACT_ADDRESS_TYPE>`  *String* | The type of address, such as home or work. | `Home` |
| `<CONTACT_BIRTHDAY>`  *String* | The contact's birthday. | `1999-01-23` |
| `<CONTACT_CITY>`  *String* | City mentioned in the contact address. | `Menlo Park` |
| `<CONTACT_COUNTRY_CODE>`  *String* | ISO country code on the contact address. | `US` |
| `<CONTACT_COUNTRY>`  *String* | Country mentioned in the contact address. | `United States` |
| `<CONTACT_EMAIL_TYPE>`  *String* | Type of email, such as personal or work. | `Personal` |
| `<CONTACT_EMAIL>`  *String* | Email address of the contact. | `bjohson@socialtsunami.com` |
| `<CONTACT_FIRST_NAME>`  *String* | Contact's first name. | `Barbara` |
| `<CONTACT_FORMATTED_NAME>`  *String* | Contact's formatted name. | `Barbara J. Johnson` |
| `<CONTACT_LAST_NAME>`  *String* | Contact's last name. | `Johnson` |
| `<CONTACT_MIDDLE_NAME>`  *String* | Contact's middle name. | `Joana` |
| `<CONTACT_NAME_PREFIX>`  *String* | Contact's name prefix. | `Dr.` |
| `<CONTACT_NAME_SUFFIX>`  *String* | Contact's name suffix. | `Esq.` |
| `<CONTACT_ORG_COMPANY>`  *String* | Name of the company where the contact works. | `Social Tsunami` |
| `<CONTACT_ORG_DEPARTMENT>`  *String* | Name of the department where the contact works. | `Engineering` |
| `<CONTACT_ORG_TITLE>`  *String* | Contact's job title. | `Software Engineer` |
| `<CONTACT_PHONE_TYPE>`  *String* | Type of phone number. For example, cell, mobile, main, iPhone, home, or work. | `CELL` |
| `<CONTACT_PHONE>`  *String* | Contact's phone number. | `+14125550829` |
| `<CONTACT_STATE>`  *String* | State mentioned in the contact address. | `CA` |
| `<CONTACT_STREET>`  *String* | Street mentioned in the contact address. | `1 Hacker Way` |
| `<CONTACT_URL_TYPE>`  *String* | Type of website. For example, company, work, personal, Facebook Page, or Instagram. | `Company` |
| `<CONTACT_URL>`  *String* | Website URL associated with the contact or their company. | `socialtsunami.com` |
| `<CONTACT_WHATSAPP_PHONE_NUMBER>`  *String* | Contact's WhatsApp number. | `14125550829` |
| `<CONTACT_ZIP>`  *String* | Zip code in the contact address. | `94025` |
| `<IDENTITY_KEY_HASH>`  *String* | Identity key hash. Only included if you have enabled the [identity change check](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) feature. | `DF2lS5v2W6x=` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *String* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user ID. Note that a WhatsApp user's ID and phone number may not always match. | `16505551234` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user phone number. This is the same value returned by the API as the `input` value when sending a message to a WhatsApp user. Note that a WhatsApp user's phone number and ID may not always match. | `+16505551234` |
| `<WHATSAPP_USER_PROFILE_NAME>`  *String* | WhatsApp user's name as it appears in their profile in the WhatsApp client. | `Sheena Nelson` |

## Example

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "Sheena Nelson"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",  
                "timestamp": "1744344496",  
                "type": "contacts",  
                "contacts": [  
                  {  
                    "name": {  
                      "first_name": "Barbara",  
                      "last_name": "Johnson",  
                      "formatted_name": "Barbara J. Johnson"  
                    },  
                    "org": {  
                      "company": "Social Tsunami"  
                    },  
                    "phones": [  
                      {  
                        "phone": "+1 (415) 555-0829",  
                        "wa_id": "14125550829",  
                        "type": "MOBILE"  
                      }  
                    ]  
                  }  
                ]  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```
