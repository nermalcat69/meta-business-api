---
title: "Location messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/location-request-messages
---

# Location messages

Updated: May 21, 2026

Location messages allow you to send a location’s latitude and longitude coordinates to a WhatsApp user.

![WhatsApp location message preview with annotated map preview, location name Philz Coffee, and location address](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/440753150_1614554799358194_4095127988263974385_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=MhwFlnMigVYQ7kNvwGolBCh&_nc_oc=Adonc0skug0zGxjJeNFPdAAF3lHKbZmWFb1SxJUlKMf9srOVxB3h1OXktCDbAdk8-exw64JwdJLniYl1k2pR4s5J&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=v2Qhdql2n7f2-wq2_YUFBw&_nc_ss=7b2a8&oh=00_AQDbN4b8badzLn4D15QucsT-m5H-CHO3uUUzBZ-zhLdIXQ&oe=6A604261)

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send a location message to a WhatsApp user.

```
```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "location",  
  "location": {  
    "latitude": "<LOCATION_LATITUDE>",  
    "longitude": "<LOCATION_LONGITUDE>",  
    "name": "<LOCATION_NAME>",  
    "address": "<LOCATION_ADDRESS>"  
  }  
}'
```
```

## Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<LOCATION_ADDRESS>`  *String* | **Optional.**  Location address. | `101 Forest Ave, Palo Alto, CA 94301` |
| `<LOCATION_LATITUDE>`  *String* | **Required.**  Location latitude in decimal degrees. | `37.44216251868683` |
| `<LOCATION_LONGITUDE>`  *String* | **Required.**  Location longitude in decimal degrees. | `-122.16153582049394` |
| `<LOCATION_NAME>`  *String* | **Optional.**  Location name. | `Philz Coffee` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Example request

Example request to send a location message with a name and address.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "location",
  "location": {
    "latitude": "37.44216251868683",
    "longitude": "-122.16153582049394",
    "name": "Philz Coffee",
    "address": "101 Forest Ave, Palo Alto, CA 94301"
  }
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
