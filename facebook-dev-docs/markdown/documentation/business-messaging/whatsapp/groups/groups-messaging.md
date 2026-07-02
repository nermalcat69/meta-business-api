---
title: "Group management"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging
---

# Group management

Updated: May 21, 2026

## Overview

The Groups API gives you simple functions to control groups through their lifecycle.

When you create a new group, an invite link is created for inviting participants to the group.

Since you cannot manually add participants to the group, simply send a message with your invite link to WhatsApp users who you would like to join the group.

## Group management features

* [Create and delete group](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#create-group)
* [Groups with join requests enabled](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#groups-with-join-requests)
* [Get and reset group invite link](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#get-and-reset-group-invite-link)
* [Send group invite link template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#send-group-invite-link-template-message)
* [Remove group participants](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#remove-group-participants)
* [Get group info](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#get-group-info)
* [Get active groups](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#get-active-groups)
* [Update group settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#update-group-settings)

To learn how to message groups, view the [Group Messaging reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging).

## Subscribe to groups metadata webhooks

In order to receive webhook notifications for metadata about your groups, please subscribe to the following webhook fields:

* `group_lifecycle_update`
* `group_participants_update`
* `group_settings_update`
* `group_status_update`

For a full reference of webhooks for the Groups API, please visit our [Webhooks for Groups API reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks).

## Create group

Use this endpoint to create a new group and generate a group invite link.

Once the group is created, you will receive a webhook with an `invite_link` parameter that contains an invite link for the group. You can send this invite link to WhatsApp users interested in joining the group.

Optionally, you can create a group that requires join approval. This means that if a WhatsApp user wants to join your group, you can approve or reject their request.

[Learn more about groups with join requests enabled](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#groups-with-join-requests).

### Request syntax

Create a group with an initial group invite link:

`POST /<BUSINESS_PHONE_NUMBER_ID>/groups`

### Request body

```
{  
  "messaging_product": "whatsapp",  
  "subject": "<GROUP_SUBJECT>",  
  "description": "<GROUP_DESCRIPTION>",  
  "join_approval_mode": "<JOIN_APPROVAL_MODE>"  
}
```

### Request parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required**  Business phone number ID. | `12784358810` |
| `<GROUP_SUBJECT>`  *String* | **Required**  Group subject.  Maximum 128 characters. Whitespace is trimmed. | `New Purchase Inquiry` |
| `<GROUP_DESCRIPTION>`  *String* | **Optional**  Group description.  Maximum 2048 characters. | `Jim, an existing client, would like to learn about new car purchase options for current year models.` |
| `<JOIN_APPROVAL_MODE>`  *String* | **Optional**  Indicates if WhatsApp users who click the invitation link can join the group with or without being approved first.  Values can be:   * `approval_required` — Indicates WhatsApp users must be approved via [join request](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#groups-with-join-requests) before they can access the group. * `auto_approve` — Indicates WhatsApp users can join the group without approval.   If omitted, `join_approval_mode` is set to `auto_approve` by default. | `auto_approve` |

### Webhooks

A `group_lifecycle_update` webhook is triggered.

#### Group create succeed

[View the "Group create succeed" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#group-create-succeed)

#### Group create fail

[View the "Group create fail" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#group-create-fail)

#### User joins group using invite link

[View the "User joins group using invite link" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#user-joined-group-using-invite-link-succeed)

## Groups with join requests

You can create groups that require join request approval. Once enabled, WhatsApp users who click the group invitation link can submit a request to join the group, or cancel a prior request:

When a WhatsApp user joins the group using a join request, a [`group_participants_update` webhook for a user accepting the join request](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#user-accepts-or-cancels-join-request) is triggered. You can also [get a list of open join requests via API](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#get-join-requests). Use the contents of the webhook or API response to approve or reject requests.

### Get join requests

#### Request syntax

`GET /<GROUP_ID>/join_requests`

#### Request parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | **Required.**  Group ID. | `Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD` |

#### Response syntax

Upon success:

```
{  
  "data": [  
    {  
      "join_request_id": "<JOIN_REQUEST_ID>",  
      "wa_id": "<WHATSAPP_USER_ID>",  
      "creation_timestamp": "<JOIN_REQUEST_CREATION_TIMESTAMP">  
    },  
    //Additional join request objects would follow, if any  
  ],  
  "paging": {  
    "cursors": {  
      "before": "<BEFORE_CURSOR>",  
      "after": "<AFTER_CURSOR>"  
    }  
  }  
}
```

#### Response parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<JOIN_REQUEST_ID>`  *String* | Join request ID. | `MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user ID. | `16505551234` |
| `<JOIN_REQUEST_CREATION_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the join request was created. | `1755548877` |
| `<BEFORE_CURSOR>`  *String* | Before cursor. See [Paginated Results](https://developers.facebook.com/docs/graph-api/results). | `eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3NTU1NTM3MDUxNzUwNTQ1MTAifQZDZD` |
| `<AFTER_CURSOR>`  *String* | After cursor. See [Paginated Results](https://developers.facebook.com/docs/graph-api/results). | `eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3NTU1NTM3MDUxNzUwNTQ1MTAifQZDZD` |

### Approve join requests

#### Request syntax

`POST /<GROUP_ID>/join_requests`

#### Request body

```
{  
  "messaging_product": "whatsapp",  
  "join_requests": [  
    "<JOIN_REQUEST_ID>",  
    // Additional join request IDs would go here, if approving in bulk  
  ]  
}
```

#### Request parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | **Required.**  Group ID. | `Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD` |

#### Response syntax

Upon success, the API will respond with the following JSON payload, and WhatsApp users whose join requests were approved will be able to access the group when tapping the invite link.

```
{  
  "messaging_product": "whatsapp",  
  "approved_join_requests": [  
    "<JOIN_REQUEST_ID>",  
    // Additional join request IDs would go here, it approved in bulk  
  ],  
  
  //Only included if unable to approve one or more join requests  
  
  "failed_join_requests": [  
    {  
      "join_request_id": "<JOIN_REQUEST_ID>",  
      "errors": [  
        {  
          "code": "<ERROR_CODE>",  
          "message": "<ERROR_MESSAGE>",  
          "title": "<ERROR_TITLE>",  
          "error_data": {  
            "details": "<ERROR_DETAILS>"  
          }  
        }  
      ]  
    }  
  ],  
  "errors": [  
    {  
      "code": "<ERROR_CODE>",  
      "message": "<ERROR_MESSAGE>",  
      "title": "<ERROR_TITLE>",  
      "error_data": {  
        "details": "<ERROR_DETAILS>"  
      }  
    }  
  ]  
}
```

#### Response parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<JOIN_REQUEST_ID>`  *String* | ID of approved join request, or ID of failed join request, if the request could not be approved. | `MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw` |
| `<ERROR_CODE>`  *Integer* | Error code, if unable to approve. | `131203` |
| `<ERROR_MESSAGE>`  *String* | Error message, if unable to approve. | `(#131203) Recipient has not accepted our new Terms of Service and Privacy Policy.` |
| `<ERROR_TITLE>`  *String* | Error title, if unable to approve. | `Unable to add participant to group` |
| `<ERROR_DETAILS>`  *String* | Error details, if unable to approve. | `Recipient has not accepted our new Terms of Service and Privacy Policy.` |

#### Webhook

A `group_participants_update` webhook is triggered.

[View the "User accepts join request" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#user-accepts-or-cancels-join-request)

### Reject join requests

#### Request syntax

`DELETE /<GROUP_ID>/join_requests`

#### Request body

```
{  
  "messaging_product": "whatsapp",  
  "join_requests": [  
    "<JOIN_REQUEST_ID>",  
    //Additional join request IDs would go here, it rejecting in bulk  
  ]  
}
```

#### Request parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | **Required.**  Group ID. | `Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD` |
| `<JOIN_REQUEST_ID>`  *String* | **Required.**  ID of join request to reject. | `MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw` |

#### Response syntax

Upon success, the API will respond with the following JSON payload, and the WhatsApp user will see the **Request to join** button again when accessing the group invite link.

```
{  
  "messaging_product": "whatsapp",  
  "rejected_join_requests": [  
    "<JOIN_REQUEST_ID>",  
    //Additional join request IDs would go here, it rejecting in bulk  
  ],  
  
  //Only included if unable to reject one or more join requests  
  "failed_join_requests": [  
    {  
      "join_request_id": "<JOIN_REQUEST_ID>",  
      "errors": [  
        {  
          "code": "<ERROR_CODE>",  
          "message": "<ERROR_MESSAGE>",  
          "title": "<ERROR_TITLE>",  
          "error_data": {  
            "details": "<ERROR_DETAILS>"  
          }  
        }  
      ]  
    }  
  ],  
  "errors": [  
    {  
      "code": "<ERROR_CODE>",  
      "message": "<ERROR_MESSAGE>",  
      "title": "<ERROR_TITLE>",  
      "error_data": {  
        "details": "<ERROR_DETAILS>"  
      }  
    }  
  ]  
}
```

#### Response parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<JOIN_REQUEST_ID>`  *String* | ID of rejected join request, or ID of failed join request, if the request could not be rejected. | `MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw` |
| `<ERROR_CODE>`  *Integer* | Error code, if unable to reject. | `131203` |
| `<ERROR_MESSAGE>`  *String* | Error message, if unable to reject. | `(#131203) Recipient has not accepted our new Terms of Service and Privacy Policy.` |
| `<ERROR_TITLE>`  *String* | Error title, if unable to reject. | `Unable to add participant to group` |
| `<ERROR_DETAILS>`  *String* | Error details, if unable to reject. | `Recipient has not accepted our new Terms of Service and Privacy Policy.` |

### Webhook

None.

## Get and reset group invite link

Once an invite link is reset, all previous invite links will become invalid.

An invite link for the group is generated when the group is created. Use these endpoints to get and reset group invite links.

For each endpoint, you will need your group ID in order to get or reset a link for the correct group as follows:

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | **Required**  The ID of the group you want to get or reset an invite link for. | `Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD` |

### Get group invite link

#### Request syntax

`GET /<GROUP_ID>/invite_link`

#### Response body

```
{  
  "messaging_product": "whatsapp",  
  "invite_link": "https://chat.whatsapp.com/<LINK_ID>"  
}
```

Note that `invite_link` always begins with the prefix `https://chat.whatsapp.com/`. The only variable portion is `<LINK_ID>`.

### Reset group invite link

#### Request syntax

`POST /<GROUP_ID>/invite_link`

#### Request body

```
{  
  "messaging_product": "whatsapp",  
}
```

#### Response body

```
{  
  "messaging_product": "whatsapp",  
  "invite_link": "https://chat.whatsapp.com/<LINK_ID>"  
}
```

## Send group invite link template message

[Template Library⁠](https://business.facebook.com/wa/manage/template-library) contains a utility message template for sending group invite links to WhatsApp users. Use these pre-defined templates to send group invitations as utility messages.

**In order to keep the template priced as `utility`, you cannot modify it when you copy it from template library to your WABA.**

To send the template message:

#### Step 1. Add a group invite link template in Template Library to your account templates:

*In WhatsApp Manager*

* Navigate to [Template Library⁠](https://business.facebook.com/wa/manage/template-library)
* On the left, click the **Group invite link** dropdown, then click the **Group invite upon request** checkbox.
* Select the template you want to use, give it a name, and click **Submit**.

*Via the API*

You can query template libraries applicable to group invite links using the request below:

`GET /message_template_library?category=utility&topic=group_invite_link&language=en`

[Read more about finding and adding the template to your WABA via the API](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-library#using-the-api)

Template approval may require up to 24 hours. You'll be able to send messages with this template after its approval.

#### Step 2. Send the template message

* Send the template using the request syntax and body below, substituting your group ID, the name you gave your template, and other applicable values.

When you provide the group ID in the API request, it will be automatically translated into the corresponding group invite link upon message delivery.

### Request syntax

`POST /<BUSINESS_PHONE_NUMBER_ID>/messages`

### Endpoint parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<BUSINESS_PHONE_NUMBER_ID>`  *Integer* | **Required**  Business phone number ID. | `13057863445` |

### Request body

```
curl --location 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/messages?access_token=' \  
      --header 'Content-Type: application/json' \  
      --data '{  
        "messaging_product": "whatsapp",  
        "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
        "type": "template",  
        "template": {  
          "name": "<TEMPLATE_NAME>",  
          "language": {  
            "code": "<TEMPLATE_LANGUAGE>"  
          },  
          "components": [  
            {  
              "type": "body",  
              "parameters": [  
                {  
                  "type": "group_id",  
                  "group_id": "<GROUP_ID>"  
                },  
                {  
                  ...additional parameters  
                }  
              ]  
            }  
          ]  
        }  
      }'
```

[Learn more about Template Library](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-library)

### Webhooks

#### User joins group using invite link

[View the "User joins group using invite link" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#user-joined-group-using-invite-link-succeed)

## Delete group

This endpoint deletes the group and removes all participants, including the business. No request body is required.

### Request syntax

`DELETE /<GROUP_ID>`

### Request properties

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | **Required**  The ID of the group you want to delete. | `Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD` |

### Webhooks

A `group_lifecycle_update` webhook is triggered.

#### Delete group succeed

[View the "Delete group succeed" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#delete-group-succeed)

#### Delete group fails

[View the "Delete group fails" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#delete-group-fails)

## Remove group participants

Use this endpoint to remove participants from the group.

**Note: If a participant is removed from a group, they can no longer join the group via an invite link.**

### Request syntax

`DELETE /<GROUP_ID>/participants`

### Request body

```
{  
  "messaging_product": "whatsapp",  
  "participants": [  
    { "user": "<WHATSAPP_USER_PHONE_NUMBER> or <WHATSAPP_USER_ID>" },  
    { "user": "<WHATSAPP_USER_PHONE_NUMBER> or <WHATSAPP_USER_ID>"" },  
    ...  
  ]  
}
```

### Request properties

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `"participants": []`  *Array* | **Optional**  Specifies an array of phone numbers or WhatsApp IDs of WhatsApp accounts. The business phone number used to create the group is always added to the group as the creator and admin.   * Maximum 8 participants. * The array cannot be empty. | ``` { "user": "+17865347866" }, { "user": "+7669992245" }, ... ``` |

### Webhooks

A `group_participants_update` webhook is triggered.

#### Group participant leaves

[View the "Group participant leaves" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#delete-group-succeed)

## Get group info

Use this endpoint to retrieve metadata about a single group.

**Note:** Specifying no fields in the query parameters will just return the group ID and messaging product.

### Request syntax

`GET /<GROUP_ID>?fields=<FIELDS>`

### Endpoint parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | **Required**  The ID of the group you are querying info from. | `Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD` |
| `<FIELDS>`  *String* | **Optional**  A comma-separated list of fields to return. If no fields are passed in, only the group ID is returned. | `"subject,description,participants,join_approval_mode"`  [Learn more about Graph API fields here](https://developers.facebook.com/docs/graph-api/overview#fields) |

### Available fields

| Field | Description | Sample Return Value |
| --- | --- | --- |
| `join_approval_mode`  *String* | Indicates if WhatsApp users who click the invitation link can join the group with or without being approved first.  Values can be:   * `approval_required` — Indicates WhatsApp users must be approved via [join request](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#groups-with-join-requests) before they can access the group. * `auto_approve` — Indicates WhatsApp users can join the group without approval. | `auto_approve` |
| `subject`  *String* | The subject for the group. | `"Artificial Intelligence Insights"` |
| `description`  *String* | The group description, if set during creation time. | `"Explore AI developments, share knowledge, and discuss the future of artificial intelligence with fellow enthusiasts and experts."` |
| `suspended`  *Boolean* | Returns `true` if the group has been suspended by WhatsApp. | `false` |
| `creation_timestamp`  *Integer* | UNIX timestamp in seconds at which the group was created. | `683731200` |
| `participants`  *List* | A list of objects `{"wa_id": "<WA_ID>"}`, where `<WA_ID>` is a participant in the group being queried. | `[{"wa_id": "2228675309"}, {"wa_id": "7693349922"}]` |
| `total_participant_count`  *Integer* | The total number of participants in the group, excluding your business. | `6` |

### Sample response

```
{  
  "messaging_product": "whatsapp",  
  "id": "<GROUP_ID>",  
  "subject": "<SUBJECT>",  
  "creation_timestamp": "<TIMESTAMP>",  
  "suspended": "<SUSPENDED>",  
  "description": "<DESCRIPTION>",  
  "total_participant_count": "<TOTAL_PARTICIPANT_COUNT>",  
  "participants": [  
    {  
      "wa_id": "<WA_ID>"  
    },  
    {  
      "wa_id": "<WA_ID>"  
    }  
  ],  
  "join_approval_mode": "<JOIN_APPROVAL_MODE>"  
}
```

## Get active groups

Use this endpoint to retrieve a list of active groups for a given business phone number.

### Request syntax

`GET /<BUSINESS_PHONE_NUMBER_ID>/groups`

### Query parameters

```
?limit=<LIMIT>, // Optional  
&after=<AFTER_CURSOR>, // Optional  
&before=<BEFORE_CURSOR> // Optional
```

| Parameter | Description |
| --- | --- |
| `<LIMIT>`  *Optional* | Number of groups to fetch in the request.  Min: 1 | Default: 25 | Max: 1024 |
| `<BEFORE_CURSOR>`  *Optional* | Cursor that points to the beginning of a page of data. Learn more about [Paginated Results in Graph API here](https://developers.facebook.com/docs/graph-api/results) |
| `<AFTER_CURSOR>`  *Optional* | Cursor that points to the end of a page of data. Learn more about [Paginated Results in Graph API here](https://developers.facebook.com/docs/graph-api/results) |

### Response object

```
{  
  "data": {  
    "groups": [  
      {"id": "GROUP_ID", "subject": SUBJECT, "created_at": "TIMESTAMP"},  
      {"id": "GROUP_ID", "subject": SUBJECT, "created_at": "TIMESTAMP"}  
      …  
    ]  
  },  
  "paging": {  
    "cursors": {  
      "after": "MTAxNTExOTQ1MjAwNzI5NDE=",  
      "before": "NDMyNzQyODI3OTQw"  
    },  
    "previous": "https://graph.facebook.com/VERSION/PHONE_NUMBER_ID/groups?limit=10&before=NDMyNzQyODI3OTQw",  
    "next": "https://graph.facebook.com/VERSION/PHONE_NUMBER_ID/groups?limit=25&after=MTAxNTExOTQ1MjAwNzI5NDE="  
  }  
}
```

### Response parameters

| Parameter | Description |
| --- | --- |
| `data[groups]`  *List* | A list of groups, each containing the group ID, group subject, and UNIX timestamp for group creation. |
| `paging`  *Object* | A pagination object.  Learn more about [Paginated Results in Graph API here](https://developers.facebook.com/docs/graph-api/results) |

## Update group settings

Use this webhook to update your group's subject, description, and photo.

### Request syntax

`POST /<GROUP_ID>`

### Request body

```
{  
  "messaging_product": "whatsapp",  
  "subject": "<GROUP_SUBJECT>",  
  "profile_picture_file": "<FILE_PATH>",  
  "description": "<GROUP_DESCRIPTION>"  
}
```

### Request properties

**Note**

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<FILE_PATH>`  *String* | **Optional**  A path to an image file stored in your local directory.  **To upload a file**: Follow the same request structure as the [Upload Media](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) endpoint.  Sample file upload cURL:  ``` curl 'https://graph.facebook.com/v23.0/<GROUP_ID> \           -X POST \           -H 'Authorization: Bearer ...' \           -F 'messaging_product=whatsapp' \           -F 'file=@/media/pictures/square_pic.png' ```  Group profile picture requirement:   * Only support mime type image/jpeg * Maximum size: 5MB * Image should be in square, that is, height = width. * Minimum size: 192 x 192 | `/local/path/file.jpg` |
| `<GROUP_SUBJECT>`  *String* | **Optional**  The new subject for the group.   * Maximum length: 128 characters. * Must not be empty if provided. | `"Watch Enthusiasts"` |
| `<GROUP_DESCRIPTION>`  *String* | **Optional**  The new description for the group.   * Max length: 2048 characters | `"Join our community to discuss the latest timepieces, share watch reviews, and connect with fellow horology enthusiasts."` |

### Webhooks

A `group_settings_update` webhook is triggered.

#### Group settings update succeed

[View the "Group settings update succeed" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#group-settings-update-succeed).

#### Group settings update partial fail

[View the "Group settings update partial fail" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#group-settings-update-partial-fail).

#### Group settings update total fail

[View the "Group settings update total fail" sample webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/webhooks#group-settings-update-total-fail).

## Group message status webhooks

When you send a message to a group, you receive a status **messages** webhook when the message is delivered or read by group participants.

Status webhooks for individual group participants may be aggregated into a single webhook containing multiple `status` objects in the `statuses` array. However, aggregation is not guaranteed. If multiple participants' statuses are generated at approximately the same time, they may be combined into a single webhook. If statuses are generated at different times, you may receive separate webhooks for each participant.

Each webhook only ever references a single message sent to a single group and a single status type (for example, `delivered`). Statuses for different messages, groups, or status types are never combined into a single webhook.

For the full webhook payload reference, see the [status messages webhook reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status).

### Pricing information

Status **messages** webhooks that contain pricing information will have `<CONVERSATION_CATEGORY>` set to one of:

* `group_marketing` — Indicates a group marketing conversation.
* `group_utility` — Indicates a group utility conversation.
* `group_service` — Indicates a group service conversation.
