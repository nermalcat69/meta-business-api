---
title: "Business profiles"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names
---

# Business profiles

Updated: Jun 30, 2026

Your business phone number’s profile displays additional information such as address, website, and description. You can add this information when you register your phone number. You can also update the profile later via WhatsApp Manager or the API.

![Screenshot of a WhatsApp business profile displaying company information](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/507476070_1379105613180336_7510619276605653298_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=INURczQph-QQ7kNvwHiT5yz&_nc_oc=AdqwX6icnGcCbT-t_iym3cix6uEBIx8bvUKWn6Z5J693JbMlz5_vkS3frT9hbCT5G0bS6SszW98CA_jYxHJ2nPEX&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=NavInLPST44RBI80xN0Heg&_nc_ss=7b2a8&oh=00_AQCSLdf8qkWcLkJHU9zb7EavR7pLcHbsW7a4XSzA7UZTlg&oe=6A6062DD)

## View or update your profile in WhatsApp Manager

To view or update your business profile via WhatsApp Manager:

* Navigate to [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/) > **Account tools** > **Phone numbers**.
* Select your business phone number.
* Click the **Profile** tab to view your current profile.
* Use the form to set new profile values.

## Get your profile via the API

Before you call the API, make sure you have a business phone number ID and a [system user access token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens) with the [required permissions](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions).

Use the [WhatsApp Business Profile API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#get-version-phone-number-id-whatsapp-business-profile) to get specific business profile fields:

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

Upon success:

```
```
{  
  "data": [  
    {  
      "about": "Succulent specialists!",  
      "address": "1 Hacker Way, Menlo Park, CA 94025",  
      "description": "At Lucky Shrub, we specialize in providing a...",  
      "email": "lucky@luckyshrub.com",  
      "profile_picture_url": "https://pps.whatsapp.net/v/t61.24...",  
      "websites": [  
        "https://www.luckyshrub.com/"  
      ],  
      "vertical": "RETAIL",  
      "messaging_product": "whatsapp"  
    }  
  ]  
}
```
```

## Update your profile via the API

Use the [WhatsApp Business Profile API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#post-version-phone-number-id-whatsapp-business-profile) to update specific business profile fields:

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/whatsapp_business_profile' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
--data-raw '
{
  "about": "Succulent specialists!",
  "address": "1 Hacker Way, Menlo Park, CA 94025",
  "description": "At Lucky Shrub, we specialize in providing a diverse range of high-quality succulents to suit your needs. From rare and exotic varieties to timeless classics, our collection has something for everyone.",
  "email": "lucky@luckyshrub.com",
  "messaging_product": "whatsapp",
  "profile_picture_handle": "4::aW...",
  "websites": "[\n  \"https://www.luckyshrub.com\"\n]"
}'
```

### Example response

Upon success:

```
```
{  
  "success": true  
}
```
```

### Field notes

These notes describe behavior for specific writable fields in the WhatsApp Business Profile API.

* The `vertical` field can be updated via POST. The `WhatsAppVertical` enum defines the valid values (excluding `UNDEFINED` and `NOT_A_BIZ`). You can also change this value using [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/).
* The `address` field accepts freeform text (maximum 256 characters) and does not validate against any geographic database.
