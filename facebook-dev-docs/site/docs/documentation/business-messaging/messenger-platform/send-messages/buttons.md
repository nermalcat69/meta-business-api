---
title: "Sticker API"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons
---

# Sticker API

Updated: Jun 3, 2026

This guide explains how to browse Meta's first-party sticker catalog, search for stickers by keyword, and send stickers through the Messenger Send API.

## Before you start

All Sticker Catalog API endpoints (browse and search) use an **App Access Token** (concatenated `app_id|app_secret`):

```
<APP_ID>|<APP_SECRET>
```

The Send Sticker endpoint uses a **Page Access Token** with `pages_messaging` permission, like all other Send API calls.

## Sticker catalog API

### Browse sticker packs

To get a list of available sticker packs, send a `GET` request to the `/sticker_packs` endpoint.

#### Sample request

```
curl -G 'https://graph.facebook.com/<API_VERSION>/sticker_packs' \  
  -d 'access_token=<APP_ID>|<APP_SECRET>'
```

With locale for translated names and descriptions:

```
curl -G 'https://graph.facebook.com/<API_VERSION>/sticker_packs' \  
  -d 'locale=vi_VN' \  
  -d 'access_token=<APP_ID>|<APP_SECRET>'
```

##### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | string | No | [Supported locale](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales) code (for example, `vi_VN`, `ja_JP`, `ko_KR`). Returns translated pack names and descriptions. Default: `en_US` |

#### Sample response

```
{  
  "data": [  
    {  
      "id": "840909108572865",  
      "name": "Catster",  
      "description": "Let your inner cat do the talking",  
      "preview_image_url": "https://scontent.xx.fbcdn.net/v/t39.1997-6/...",  
      "sticker_count": 21  
    },  
    {  
      "id": "1451975965911353",  
      "name": "FB Marketplace Thanks Stickers",  
      "preview_image_url": "https://scontent.xx.fbcdn.net/v/t39.1997-6/...",  
      "sticker_count": 5  
    },  
    ...  
  ]  
}
```

### Browse stickers in a pack

To get the individual stickers within a specific pack, send a `GET` request to the `/sticker_packs/<STICKER_PACK_ID>/stickers` endpoint.

#### Sample request

```
curl -G 'https://graph.facebook.com/<API_VERSION>/sticker_packs/<STICKER_PACK_ID>/stickers' \  
  -d 'access_token=<APP_ID>|<APP_SECRET>'
```

With locale for translated sticker names:

```
curl -G 'https://graph.facebook.com/<API_VERSION>/sticker_packs/<STICKER_PACK_ID>/stickers' \  
  -d 'locale=ja_JP' \  
  -d 'access_token=<APP_ID>|<APP_SECRET>'
```

##### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | string | No | [Supported locale](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales) code (for example, `vi_VN`, `ja_JP`). Returns translated sticker names. Default: `en_US` |

#### Sample response

```
{  
  "data": [  
    {  
      "id": "842488328414943",  
      "name": "Cat with heart eyes",  
      "image_url": "https://scontent.xx.fbcdn.net/v/t39.1997-6/...",  
      "width": 240,  
      "height": 240,  
      "is_animated": false  
    },  
    {  
      "id": "842488331748276",  
      "name": "Cat waving",  
      "image_url": "https://scontent.xx.fbcdn.net/v/t39.1997-6/...",  
      "width": 240,  
      "height": 240,  
      "is_animated": false  
    },  
    ...  
  ]  
}
```

### Search stickers by keyword

To search for stickers across all packs, send a `GET` request to the `/sticker_search` endpoint with a search query.

#### Sample request

```
curl -G 'https://graph.facebook.com/<API_VERSION>/sticker_search' \  
  -d 'q=love' \  
  -d 'access_token=<APP_ID>|<APP_SECRET>'
```

With locale for non-English search:

```
curl -G 'https://graph.facebook.com/<API_VERSION>/sticker_search' \  
  --data-urlencode 'q=감사' \  
  -d 'locale=ko_KR' \  
  -d 'access_token=<APP_ID>|<APP_SECRET>'
```

##### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `q` | string | Yes | Search query (minimum 2 characters). For example, `love`, `thank you`, `cat` |
| `locale` | string | No | [Supported locale](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales) code (for example, `vi_VN`, `ko_KR`). Searches in the specified language first; falls back to English if no results found. Default: `en_US` |

> **Important:** If your users search in a non-English language, you must pass the `locale` parameter. Without it, the API defaults to `en_US` and only matches English sticker tags — non-English queries will return empty results.

#### Sample response

```
{  
  "data": [  
    {  
      "id": "842488328414943",  
      "name": "Cat with heart eyes",  
      "image_url": "https://scontent.xx.fbcdn.net/v/t39.1997-6/...",  
      "width": 240,  
      "height": 240,  
      "is_animated": false  
    }  
  ]  
}
```

## Send a sticker

To send a sticker in a conversation, send a `POST` request to the `/<PAGE_ID>/messages` endpoint with the `sticker_id` in the message body. This endpoint requires a **Page Access Token** with `pages_messaging` permission.

Stickers can only be sent within the standard messaging window, following the same rules as other Send API message types. Only public, free, first-party stickers can be sent — the same set of stickers returned by the Sticker Catalog API (the `/sticker_packs` and `/sticker_search` endpoints).

In addition to catalog stickers, you can send the thumbs-up (like) sticker using sticker ID `369239263222822`. This sticker is not included in the catalog API but is always available for sending.

### Sample request

```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient": {  
    "id": "<PSID>"  
  },  
  "message": {  
    "sticker_id": 767226160478561  
  }  
}' "https://graph.facebook.com/<API_VERSION>/<PAGE_ID>/messages?access_token=<PAGE_ACCESS_TOKEN>"
```

On success, the API returns the following JSON response:

```
{  
  "recipient_id": "<PAGE_SCOPED_ID>",  
  "message_id": "<MESSAGE_ID>"  
}
```

## Sticker in webhooks

When a sticker is sent (by you or the end user), the webhook payload includes a `sticker` attachment type. During the 90-day transition period, sticker messages are also sent as an `image` attachment for backward compatibility.

### Sample webhook payload

```
{  
  "sender": {  
    "id": "<PSID>"  
  },  
  "recipient": {  
    "id": "<PAGE_ID>"  
  },  
  "message": {  
    "mid": "<MESSAGE_ID>",  
    "attachments": [  
      {  
        "type": "sticker",  
        "payload": {  
          "sticker_id": "842488328414943",  
          "url": "https://scontent.xx.fbcdn.net/v/t39.1997-6/..."  
        }  
      },  
      {  
        "type": "image",  
        "payload": {  
          "url": "https://scontent.xx.fbcdn.net/v/t39.1997-6/..."  
        }  
      }  
    ]  
  }  
}
```

After the 90-day transition period, only the `sticker` attachment type will be sent.

## Notes

* Only free, first-party Meta stickers are available (approximately 105 packs). Avatar stickers, GIFs, custom stickers, and charged packs are not supported.
* The search query must be at least 2 characters long.
* Standard Send API rate limits apply.
