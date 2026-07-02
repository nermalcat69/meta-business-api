---
title: "Custom Labels for Customers"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/built-in-nlp
---

# Custom Labels for Customers

Updated: Mar 18, 2026

This guide shows you how to programmatically create and manage custom labels for your customers.

## How It Works

The Custom Labels API allows your business to create, update and delete labels for the business’ messaging experience and the business’ Facebook Page Inbox for people who interact with your business. You can create custom labels, such as VIP or Platinum Status, to filter your customers for promotional messaging or lead generation among other things.

After you create a label using the API, v12.0 or higher, you associate the label with a specific Page-scoped ID (PSID) to assign the label to the customer You can update your label, assign it or remove it from a specific person, or delete the label.

### Labels for Lead Generations

Messages you receive from lead generation ad campaigns for Messenger are assigned one of the following labels:

* Lead Complete – All questions have been answered and leads received the Thank You note
* Lead Disqualified – The lead replied with a disqualifying answer
* Lead in Progress – Questions are in the process of being answered
* Lead Incomplete – No response has been received from the customer after 48 hours

#### Recommendations

We recommend filtering messages by **Lead Complete** to show only the most relevant conversations to the Social Care or live agent teams who follow up with leads.

### Webhooks Notifications

A webhooks notification is sent to your server when a person’s label has been updated. This update can be when a label is assigned to a person or removed for a person.

### Limitations

* v12.0 or higher is required
* The Page admin for the business' Facebook Page must accept our
  [Page Contact Terms](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy)

### Before You Start

This guide assumes you have read the [Messenger Platform Overview](https://developers.facebook.com/documentation/business-messaging/messenger-platform/overview) and implemented the needed components for sending and receiving messages and notifications.

* The Page ID for the Facebook Page for which you are managing custom labels
* The `pages_me`, `pages_manage_metadata`, and `pages_show_list` permissions
* A Page access token requested from a person who can perform the `MESSAGING` task on the Page
* The Page-scoped ID for the customer if you are assigning, updating, or deleting a label for the customer

## Create a Label

To create a custom label, send a `POST` request to the `/PAGE-ID/custom_labels` endpoint with the `page_label_name` parameter set to the name for your label.

#### Sample API Request

*Formatted for readability.*

```
```
curl -i -X POST "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/custom_labels  
    ?page_label_name=CUSTOM-LABEL-NAME  
    &access_token=PAGE-ACCESS-TOKEN"
```
```

On success, you will receive the following JSON response with the ID for the custom label:

```
```
{  
  "id": CUSTOM-LABEL-ID  
}
```
```

### Get Details for a Label

To get details for a label, send a `GET` request to the `CUSTOM-LABEL-ID/custom_labels` endpoint with the `page_label_name` field.

#### Sample API Request

*Formatted for readability.*

```
```
curl -X GET "https://graph.facebook.com/LATEST-API-VERSION/CUSTOM-LABEL-ID/custom_labels  
    ?fields=page_label_name  
    &access_token=PAGE-ACCESS-TOKEN"
```
```

On success, you will receive the following JSON response with the name and associated ID for the custom label:

```
```
{  
  "page_label_name":"CUSTOM-LABEL-NAME",  
  "id":"CUSTOM-LABEL-ID"  
}
```
```

### Get a List of Your Labels

To get a list of all your custom labels for a Page, send a `GET` request to the `/PAGE-ID/custom_labels` endpoint with the `page_label_name`.

#### Sample API Request

*Formatted for readability.*

```
```
curl -X GET "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/custom_labels  
    ?fields=page_label_name  
    &access_token=PAGE-ACCESS-TOKEN"
```
```

On success, you will receive the following JSON response with a list of label names and associated label IDs:

```
```
{  
  "data": [  
    {  
      "page_label_name": "CUSTOM-LABEL-A",  
      "id": "CUSTOM-LABEL-A-ID"  
    },  
    {  
      "page_label_name": "CUSTOM-LABEL-B",  
      "id": "CUSTOM-LABEL-B-ID"  
    }  
  ]  
}
```
```

## Assign a Label to a Customer

To assign a label to a customer, send a `POST` request to the `/CUSTOM-LABEL-ID/label` endpoint with the `user` parameter set to the PSID for the customer.

#### Sample API Request

```
```
curl -i -X POST "https://graph.facebook.com/LATEST-API-VERSION/CUSTOM-LABEL-ID/label  
    ?user=PSID  
    &access_token=PAGE-ACCESS-TOKEN"
```
```

On success, you will receive the following JSON response with `success` set to `true`:

```
```
{  
  "success": true  
}
```
```

### Get Labels for a Person

To get a list of labels assigned to a specific person, send a `GET` request to the `/PSID/custom_labels` endpoint with the `page_label_name` field.

#### Sample API Request

*Formatted for readability.*

```
```
curl -X GET "https://graph.facebook.com/LATEST-API-VERSION/PSID/custom_labels  
    ?fields=page_label_name  
    &access_token=PAGE-ACCESS-TOKEN"
```
```

Currently, the Messenger Platform does not support getting labels for Messenger accounts that were created using a phone number instead of a Facebook account.

On success, you will receive the following JSON response with a list of label names and associated label IDs:

```
```
{  
  "data": [  
    {  
      "page_label_name": "CUSTOM-LABEL-A",  
      "id": "CUSTOM-LABEL-A-ID"  
    },  
    {  
      "page_label_name": "CUSTOM-LABEL-B",  
      "id": "CUSTOM-LABEL-B-ID"  
    }  
  ]  
}
```
```

### Remove a Label from a Person

To remove a label currently associated with a person, send a `DELETE` request to the `/CUSTOM-LABEL-ID/label` endpoint, with the `user` parameter set to that person’s PSID.

#### Sample API Request

*Formatted for readability.*

```
```
curl -i -X DELETE "https://graph.facebook.com/LATEST-API-VERSION/CUSTOM-LABEL-ID/label  
    ?user=PSID  
    &access_token=PAGE-ACCESS-TOKEN"
```
```

On success, you will receive the following JSON response with `success` set to `true`:

```
```
{  
  "success": true  
}
```
```

## Deleting a Label

To delete a label, send a `DELETE` request to the `/CUSTOM-LABEL-ID` endpoint:

#### Sample API Request

*Formatted for readability.*

```
```
curl -i -X DELETE "https://graph.facebook.com/LATEST-API-VERSION/CUSTOM-LABEL-ID  
    ?access_token=PAGE-ACCESS-TOKEN"
```
```

On success, you will receive the following JSON response with `success` set to `true`:

```
```
{  
  "success": true  
}
```
```

## `inbox_labels` Webhooks

When you subscribe to the `inbox_labels` webhook field, a webhook notification will be sent to your server when there is an update to a label for a person. The webhook notification will contain the Page ID, the PSID for the person, the change that triggered the webhook, and the label name and ID.

#### Sample Webhook Notification

```
 {
   "object":"page",
   "entry":[
      {
         "id": "PAGE-ID",
         "time":UNIX-TIMESTAMP,
         "changes":[
            {
               "value":{
                  "user":{
                     "id":"PSID"
                  },
                  "action":"SPECIFIC-CHANGE",
                  "label":{
                     "id": "LABEL-ID",
                     "page_label_name":"LABEL-NAME"
                  }
               },
               "field":"inbox_labels"
            }
         ]
      }
   ]
}
```

## See Also
