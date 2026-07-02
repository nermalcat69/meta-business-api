---
title: "Moderate Conversations API for Instagram"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/user-profile
---

# Moderate Conversations API for Instagram

Updated: Jun 24, 2026

This guide explains how to use the Moderate Conversations API to:

* Block a user
* Unblock a user
* Move a conversation to spam in the Meta Business Suite Inbox

## Before you start

This guide assumes you have read the [Messenger Platform Overview](https://developers.facebook.com/documentation/business-messaging/messenger-platform/overview) and implemented the needed components for sending and receiving messages and notifications.

You will need:

* The ID for the Facebook Page linked to your Instagram Professional account
* The Instagram-scoped ID for the customer you want to apply the action to
* A Page access token requested from a person who can perform the MESSAGE task on the Facebook Page linked to your Instagram Professional account
* `instagram_manage_messages`, `instagram_basic`, and `business_management` permissions. **Advanced Access** is required to use this API for conversations involving your business and people who **do not** have a role on your messaging app, your Facebook page, or your business
* A conversation must exist between the user and Instagram business before any of the actions provided by this API can be used

### Limitations

* Up to 10 IDs can be provided in each request
* Up to 2 actions can be specified in each request. `unblock_user` cannot be included in the same request as `block_user`
* You cannot block an Instagram user that is linked, through accounts center, to your Instagram business account

### Request parameters

#### `user_ids`

| Property | Description |
| --- | --- |
| `id` *string* | Instagram-scoped ID for the person you want to apply the action to |

#### Actions

| Action | Description |
| --- | --- |
| `block_user` | Blocks user and Instagram business interactions on Instagram.  Prevents a user from messaging the Instagram business and prevents the business from messaging the user. The user will not be able to find the business’s profile, posts, or stories on Instagram. |
| `unblock_user` | Unblocks user and Instagram business interactions on Instagram.  Allows the user and business to message each other again. The user will be able to view and interact with the business’s content on Instagram. |
| `move_to_spam` | Marks the conversation as spam and moves the conversation to the spam folder in Meta Business Suite inbox. |

## Block a user

To block messaging with a user, send a `POST` request to the `/<PAGE_ID>/moderate_conversations` endpoint with the Instagram-scoped ID for the user and the `block_user` action.

#### Sample request

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "user_ids":[  
    {  
        "id": "<IGSID>"  
    }  
  ],  
  "actions": [  
    "block_user"  
  ]  
}' "https://graph.facebook.com/v22.0/<PAGE_ID>/moderate_conversations?access_token=<PAGE_ACCESS_TOKEN>"
```
```

On success, your app will receive the following JSON response with the `success` field set to `true`. On failure, the `success` field will be set to `false`.

```
```
"success": "true"
```
```

## Unblock a user

To unblock a user, send a `POST` request to the `/<PAGE_ID>/moderate_conversations` endpoint with the Instagram-scoped ID for the user and the `unblock_user` action.

#### Sample request

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "user_ids":[  
    {  
        "id":"<IGSID>"  
    }  
  ],  
  "actions": [  
    "unblock_user"  
  ]  
}' "https://graph.facebook.com/v22.0/<PAGE_ID>/moderate_conversations?access_token=<PAGE_ACCESS_TOKEN>"
```
```

On success, your app will receive the following JSON response with the `success` field set to `true`. On failure, the `success` field will be set to `false`.

```
```
"success": "true"
```
```

## Move conversation to spam

To mark a conversation as spam and move it to the spam folder in the Meta Business Suite inbox, send a `POST` request to `/<PAGE_ID>/moderate_conversations` with the Instagram-scoped ID for the user and the `move_to_spam` action.

#### Sample request

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "user_ids":[  
    {  
        "id":"<IGSID>"  
    }  
  ],  
  "actions": [  
    "move_to_spam"  
  ]  
}' "https://graph.facebook.com/v22.0/<PAGE_ID>/moderate_conversations?access_token=<PAGE_ACCESS_TOKEN>"
```
```

On success, your app will receive the following JSON response with the `success` field set to `true`. On failure, the `success` field will be set to `false`.

```
```
"success": "true"
```
```

## Perform multiple actions for multiple users

If you would like to perform multiple actions at once for a set of users, send a `POST` request to `/<PAGE_ID>/moderate_conversations` with the Instagram-scoped IDs for the users and a list of the actions that should be applied to the users.

#### Sample request

Block two users and move the conversations to spam.

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "user_ids":[  
    {  
        "id":"<IGSID>"  
    },  
    {  
        "id":"<IGSID>"  
    }  
  ],  
  "actions": [  
    "block_user",  
    "move_to_spam"  
  ]  
}' "https://graph.facebook.com/v22.0/<PAGE_ID>/moderate_conversations?access_token=<PAGE_ACCESS_TOKEN>"
```
```

On success, your app will receive the following JSON response with the `success` field set to `true`. On failure, the `success` field will be set to `false`.

```
```
"success": "true"
```
```

## Error codes

If you encounter any of the following errors while trying to complete the request for multiple users, you can retry the request with one user at a time.

| Error Code | Message |
| --- | --- |
| `100` | Invalid parameter  The provided user ids or actions may be invalid  The user ID is not a valid PSID or IGSID  Invalid actions |
| `1` | Failed to block Instagram user  Failed to unblock Instagram user  Instagram Direct thread not found between business and consumer  Unexpected error: Failed to move Instagram thread to spam folder |
