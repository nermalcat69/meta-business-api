---
title: "Mark messages as read"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contextual-replies
---

# Mark messages as read

Updated: Jun 28, 2026

When you receive a **message** webhook indicating an [incoming message](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages#incoming-messages), you can use the `message.id` value to mark the message as read.

![WhatsApp conversation showing blue double checkmarks indicating the message has been read](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/491643461_603380552708521_8284248965365504291_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=EWzKYi7ugCwQ7kNvwFV_SGN&_nc_oc=Ado3mt1Aap3sSU9nAIUnsV0k3mDlyJUv-IEja3BiZnUYgXqCenI8xtM1nGsNVV_3byZu6dKMLuQLgvjDumy03qlI&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=-1QIJVp54_83Jv4buk2BFw&_nc_ss=7b2a8&oh=00_AQCvk4b0vDzPhgnuQDXVn5nxcxxxdHwgTIikfcYpuTDAsQ&oe=6A6043F0)

Mark incoming messages as read within 30 days of receipt. When you mark a message as read, the API also marks earlier messages in the conversation as read.

If you mark a message as read with an invalid message ID, the API returns error code `131009` (“Parameter value is not valid”). Provide a valid `wamid` from a received message as the `message_id`.

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to mark a message as read.

```
```
curl -X POST \  
'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages'  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "status": "read",  
  "message_id": "<WHATSAPP_MESSAGE_ID>"  
}'
```
```

## Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | **Required.**  WhatsApp message ID. This ID is assigned to the `messages.id` property in **received message** [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages) webhooks. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDQjZCMzlEQUE4OTJBMTE4RTUA` |

## Response

A successful mark-as-read request returns the following response:

```
```
{  
  "success": true  
}
```
```

## Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "status": "read",
  "message_id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDQjZCMzlEQUE4OTJBMTE4RTUA"
}'
```

## Example response

A successful mark-as-read request returns:

```
```
{  
  "success": true  
}
```
```
