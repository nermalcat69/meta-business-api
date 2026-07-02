---
title: "Messaging Feature Review API"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy
---

# Messaging Feature Review API

Updated: Jun 17, 2026

The Messaging Feature Review API allows you to programmatically check the feature submission status of Page-level Platform features.

## Permissions

A Page access token with `pages_messaging` permission is required to interact with this endpoint.

## Supported features

The Messaging Feature Review API may be queried for submission status of the following features:

* [Subscription messaging](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy#subscription_messaging)
* [Gender user field](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile)
* [Locale user field](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile)
* [`time_zone` user field](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile)

## Sample request

```
curl -i -X GET "https://graph.facebook.com/<LATEST_API_VERSION>/me/messaging_feature_review?access_token=<PAGE_ACCESS_TOKEN>"
```

## Sample response

```
```
{  
  "data": [  
    {  
      "feature": "subscription_messaging",  
      "status": "rejected"  
    },  
    {  
      "feature": "gender",  
      "status": "pending"  
    },  
    {  
      "feature": "locale",  
      "status": "limited"  
    },  
    {  
      "feature": "time_zone",  
      "status": "approved"  
    }  
  ]  
}
```
```

## Response properties

| Property | Type | Description |
| --- | --- | --- |
| `data` | Array | An array of all submitted feature submission requests. If no request has been submitted, the array is empty. |
| `feature` | String | The name of the feature. |
| `status` | String | The current status of the feature review: `PENDING` (submitted and pending review), `REJECTED` (review has been rejected), `APPROVED` (review has been approved), `LIMITED` (feature access has been revoked by the policy enforcement team — check your [Page Support Inbox](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy#notifications) for details). |
