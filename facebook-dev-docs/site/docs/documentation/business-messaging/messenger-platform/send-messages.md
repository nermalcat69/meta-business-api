---
title: "Welcome message flows"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages
---

# Welcome message flows

Updated: Mar 15, 2026

When creating ads that Click to Messenger or Click to Instagram Direct, you can connect a message flow from a messaging partner app. A message flow can include text, images, emoji, buttons, and other message types supported by the [Messenger Send API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/send-api) or [Instagram Messaging API](https://developers.facebook.com/docs/messenger-platform/instagram).

This guide explains how to manage welcome message flows via the API endpoint.

## Requirements

You will need:

* A [Page access token](https://developers.facebook.com/docs/pages/overview#tokens) requested by a person who can perform the [`MESSAGING` task](https://developers.facebook.com/docs/pages/overview#tasks) on the Page
* The [`pages_messaging` permission](https://developers.facebook.com/docs/permissions/reference/pages_messaging)

If setting `eligible_platforms` to include `instagram`, your app will also need:

* The [`instagram_basic` permission](https://developers.facebook.com/docs/permissions/reference/instagram_basic)
* The [`instagram_manage_messages` permission](https://developers.facebook.com/docs/permissions/reference/instagram_manage_messages)

## Create a new flow

To create a new welcome message flow, send a `POST` request to the `graph.facebook.com/v25.0/PAGE_ID/welcome_message_flows` endpoint.

### Sample request

```
curl -X POST \
-F 'welcome_message_flow=[
   {"message":
      {
       "text":"This is a welcome message authored in a 3P tool",
       "quick_replies":[
           {
             "content_type":"text",
             "title":"Quick reply 1",
             "payload":"Payload 1"
           },
           {
             "content_type":"text",
             "title":"Quick reply 2",
             "payload":"Payload 2"
           },
           {
             "content_type":"text",
             "title":"Quick reply 3",
             "payload":"Payload 3"
           }
        ]
      }
    }
  ]' \
-F 'eligible_platforms=["messenger"]' \
-F 'name="Driver sign up"' \
"https://graph.facebook.com/v25.0/<PAGE_ID>/welcome_message_flows?access_token=<ACCESS-TOKEN>"
```

In response, your app will receive a flow ID.

```
```
{"flow_id":"123456789"}
```
```

### Parameters

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `name` | string | yes | Name of the flow |
| `welcome_message_flow` | JSON | yes | The welcome message JSON that will be sent upon clicking the ad |
| `eligible_platforms` | Array of strings | yes | The platforms that the welcome message can be shown on (`["instagram", "messenger"]`)  ***Note:** Each Welcome Message will be validated against the platform(s) specified and will only be accepted if the message type in the welcome message is supported on the specified platform(s).* |

## Update an existing flow

To update an existing flow, send a `POST` request to the `graph.facebook.com/v14.0/PAGE_ID/welcome_message_flows` endpoint with:

* the `flow_id` parameter set to the ID of the flow being updated
* optionally, the other parameters (`name`, `welcome_message`, `platforms`) that need to be updated

A flow that is currently connected to an advertisement cannot be updated. Check the `is_used_in_ad` field to determine whether a flow is connected to an advertisement.

### Sample request

```
```
curl -X POST\  
-F 'flow_id="123456789"'\  
-F 'eligible_platforms=["messenger", "instagram"]' \  
-F 'name="Driver sign up - updated"' \  
"https://graph.facebook.com/v14.0/{PAGE-ID}/welcome_message_flows?access_token={ACCESS-TOKEN}"
```
```

In response, your app will receive a success message or the appropriate error message.

```
```
{"success":true}
```
```

### Parameters

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `flow_id` | string | yes | The identifier of the flow to update |
| `name` | string | no | Name of the flow |
| `welcome_message_flow` | JSON | no | The welcome message that will be sent upon clicking the ad |
| `eligible_platforms` | Array of strings | no | The platforms that the flow can be applied to (`["instagram", "messenger"]`) |

To make an update, at least one of the three optional parameters must be provided.

## Read

### Get a list of flows

To get a list of flows for the page, send a `GET` request to `graph.facebook.com/v14.0/PAGE-ID/welcome_message_flows`

#### Sample request

```
```
curl -X GET \  
"https://graph.facebook.com/v14.0/{PAGE-ID}/welcome_message_flows?access_token={ACCESS-TOKEN}"
```
```

On success, your app will receive a list of flows created for that particular app.

```
```
[  
  {  
    "id":"123456789",  
    "name":"Driver Sign up",  
    "welcome_message":"<JSON String>",  
    "eligible_platforms": ["instagram", "messenger"],  
    "last_update_time":"2023-09-01T05:20:38+0000",  
    "is_used_in_ad": false // indicates whether or not a flow is used in an ad  
  },  
  {  
    "id":"4362",  
    "name":"Basic Triage",  
    "welcome_message":"<JSON String>",  
    "eligible_platforms": ["instagram"],  
    "last_update_time":"2023-08-25T08:21:48+0000",  
    "is_used_in_ad": true  
  },  
  {  
    "id":"234564",  
    "name":"Appointment Schedule",  
    "welcome_message":"<JSON String>",  
    "eligible_platforms": ["messenger"],  
    "last_update_time":"2023-08-20T07:43:00+0000",  
    "is_used_in_ad": true  
  }  
  ...  
  ...  
  ...,  
  {  
    "id":"6987565",  
    "name":"Car Leads",  
    "welcome_message":"<JSON String>",  
    "eligible_platforms": ["instagram", "messenger"],  
    "last_update_time":"2023-07-21T05:21:48+0000",  
    "is_used_in_ad": false  
  },  
]
```
```

### Get a specific flow

To get a specific flow, send a `GET` request to `graph.facebook.com/v14.0/PAGE-ID/welcome_message_flows` with the `flow_id` parameter set to the `flow_id` being queried.

#### Sample request

```
```
curl -X GET \  
-F 'flow_id="123456789"'  
"https://graph.facebook.com/v14.0/{PAGE-ID}/welcome_message_flows?access_token={ACCESS-TOKEN}"
```
```

On success, your app will receive the flow in JSON format.

```
```
[  
  {  
    "id":"123456789",  
    "name":"Driver Sign up",  
    "welcome_message":"<JSON String>",  
    "eligible_platforms": ["instagram", "messenger"],  
    "last_update_time":"2023-09-01T05:20:38+0000",  
    "is_used_in_ad": false  
  },  
]
```
```

#### Parameters

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `flow_id` | string | no | The identifier of the flow to fetch |
| `limit` | int | no | Maximum number of flows to fetch |

## Delete

To delete a flow, send a `DELETE` request to `graph.facebook.com/v14.0/PAGE-ID/welcome_message_flows` with the `flow_id` parameter set to the ID of the flow that is being deleted.

A flow that is currently connected to an advertisement cannot be deleted. Check the `is_used_in_ad` field to determine whether a flow is connected to an advertisement.

### Sample request

```
```
curl -X DELETE \  
-F 'flow_id="1234567890"'  
"https://graph.facebook.com/v14.0/{PAGE-ID}/welcome_message_flows?access_token={ACCESS-TOKEN}"
```
```

In response, your app will receive a success message or the appropriate error message.

```
```
{"success":true}
```
```

### Parameters

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `flow_id` | string | yes | The identifier of the flow to delete |

## Ads Manager experience

Once welcome message flows have been successfully submitted over the API, they will show up in Ads Manager for messaging destinations within the Engagement and Sales objectives. The flows will show up in the Partner App option within the Message Template section of the Ad Creative.

### Example use

In the Message Template section of the Ad Creative, select Partner App.

![Message template panel in Ads Manager with 'Partner app' option selected and a 'Select flow' button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/642810699_1445181620673821_9064167414171522750_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lISQPYKfhawQ7kNvwH8bNhJ&_nc_oc=AdrfCyQ2LZ6hdZsA9Hiz1NHs2HXxcEV0DylnUpXr7VQozBFTBPZBNJwVUF1c2NaL87GzGjwJ8HhqRRXO72Z-KyTv&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=O3jmswtvbcPCYstI0ON5Gg&_nc_ss=7b289&oh=00_AQC5XsjGrWnzR3-qcghCY9IYVMMpKjAvm0oBnrKgj4sL1g&oe=6A605872)

Select the appropriate messaging Partner App.

![Partner app dialog with the 'Partner app' dropdown open listing apps, beside a Messenger chat view preview](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/643365635_1445181374007179_3373605531625520350_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mQg4ngkkSNoQ7kNvwF7iEt9&_nc_oc=Adq8zm8AyFMaQ8r70RRpKoDHvyQk5x4xL2sdSKdkK1NqntUy1HpsxtSaodzIpn-y5iEfe4UqedLIKz6z5Urcwvmk&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=O3jmswtvbcPCYstI0ON5Gg&_nc_ss=7b289&oh=00_AQDNYjpoBiyBwdwux5Sc-aeEkpfwWq7DBS1XbMXr0UUE1Q&oe=6A606927)

Select the Welcome Message Flow that you submitted via the API.

![Partner app dialog with the 'Message flow' dropdown open showing 'Driver sign up' and 'Basic triage' flows](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/642787941_1445181677340482_4974191698556784172_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dfl78fZocuAQ7kNvwFfQe3I&_nc_oc=AdpO8Qq3qDLdIS08SWWKALZ7W8Z5H2PgCNSkcfq0vKpURa_uP39crphtCQn2piMObsF-uAygPHnuP7sLqFmilVgX&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=O3jmswtvbcPCYstI0ON5Gg&_nc_ss=7b289&oh=00_AQCjb4bdj-qqxq-AezaI5QU6MK1v2LSFfIv1Il3Tbn15Bg&oe=6A60667B)

Preview your message flow.

![Partner app dialog showing a Messenger chat view preview of the welcome message with three reply buttons](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/641496932_1445181597340490_1653095472374780192_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=poy2u2RTDNcQ7kNvwGfeHci&_nc_oc=AdokoP5UoBOS04IN3VjgGq90cgrfWlv5FYJpOO_ed2omT4HcjWwpUriMmPjY8-Pkc4hSmyZ1kF9B6ROUobTDs62I&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=O3jmswtvbcPCYstI0ON5Gg&_nc_ss=7b289&oh=00_AQDyDX2et-5bCtemyepp9i87PpZ33jWULoerAK7JVe5vtQ&oe=6A60646B)

## Marketing API Experience

Once welcome message flows have been successfully submitted over the API, the flow ID can be used to configure ads through the marketing API.

In the ad creative, the flow ID can be set as follows:

```
```
{  
  "name": "creative",  
  "object_story_spec": {...},  
  "asset_feed_spec": {  
    "additional_data": {  
      "partner_app_welcome_message_flow_id": "<FLOW_ID_RETURNED_FROM_POST_REQUEST>"  
    }  
  }  
}
```
```

For more information about messaging ads, please refer to [Messaging Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads) in the Marketing API documentation.
