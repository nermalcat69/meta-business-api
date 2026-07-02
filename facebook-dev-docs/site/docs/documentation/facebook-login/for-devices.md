---
title: "Business Integration Webhooks"
source_url: https://developers.facebook.com/documentation/facebook-login/for-devices
---

# Business Integration Webhooks

Updated: Sep 29, 2025

Webhooks allow you to receive real-time HTTP notifications of changes to specific objects. For example, we could send you a notification whenever a user removes assets from an app install. This prevents you from having to query our APIs for changes to objects that may or may not have happened, and helps you avoid reaching your rate limit.

Business integration Webhooks are available for the following Business Authorization platforms:

* Meta Business Extension
* Facebook Login for Business
* WhatsApp Embedded Sign On

## Fields

The following are the available business integration Webhook fields that can be subscribed to, under the "Application" topic:

| Field | Trigger | Example |
| --- | --- | --- |
| business\_integration\_install | When a business integration is installed. (Business Integration System User is created) | Client business installs your business application through Facebook Login for Business |
| business\_integration\_uninstall | When a business integration is uninstalled. (Business Integration System User is deleted) | Client business uninstalls your business application through Meta Business Suite |
| business\_integration\_update | When a business asset is either added or removed from a business integration (Business Integration System User gains/loses access to a business asset) | Client business allows your System User to make posts on their Facebook Page |

## Example Responses

### `business_integration_install`

```
{  
  "entry": [  
        {  
            "id":"application_id",  
            "time":123123,  
            "changes": [  
            {  
                "field": "business_integration_install",  
                "value": {  
                    "business_manager_id": "bm_id"  
                    "tp_config_id": "config_id"  
                }  
            }  
        ]  
    }  
  ],  
  "object":"application"  
}
```

### `business_integration_uninstall`

```
{  
  "entry": [  
        {  
            "id":"application_id",  
            "time":123123,  
            "changes": [  
            {  
                "field": "business_integration_uninstall",  
                "value": {  
                    "business_manager_id": "bm_id"  
                }  
            }  
        ]  
    }  
  ],  
  "object":"application"  
}
```

### `business_integration_update`

```
{  
  "entry": [  
        {  
            "id":"application_id",  
            "time":123123,  
            "changes": [  
            {  
                "field": "business_integration_update",  
                "value": {  
                    "business_manager_id": "bm_id"  
                }  
            }  
        ]  
    }  
  ],  
  "object":"application"  
}
```

## Next Steps

To configure Webhooks, refer to the Webhooks [Getting Started](https://developers.facebook.com/docs/graph-api/webhooks/getting-started) page.
