---
title: "Threads API Troubleshooting"
source_url: https://developers.facebook.com/documentation/threads/troubleshooting/debug-access-token
---

# Threads API Troubleshooting

Updated: Jul 14, 2025

## Publishing Does Not Return a Media ID

If you are able to create a container for a video but the `POST /{threads-user-id}/threads_publish` endpoint does not return the published media ID, then you can get the container’s publishing status by querying the `GET /{threads-container-id}` endpoint. This endpoint will return one of the following:

* `EXPIRED` — The container was not published within 24 hours and has expired.
* `ERROR` — The container failed to complete the publishing process.
* `FINISHED` — The container and its media object are ready to be published.
* `IN_PROGRESS` — The container is still in the publishing process.
* `PUBLISHED` — The container’s media object has been published.

In case of error the endpoint will return one of the following error messages:

* `FAILED_DOWNLOADING_VIDEO`
* `FAILED_PROCESSING_AUDIO`
* `FAILED_PROCESSING_VIDEO`
* `INVALID_ASPEC_RATIO`
* `INVALID_BIT_RATE`
* `INVALID_DURATION`
* `INVALID_FRAME_RATE`
* `INVALID_AUDIO_CHANNELS`
* `INVALID_AUDIO_CHANNEL_LAYOUT`
* `UNKNOWN`

We recommend querying a container’s status once per minute, for no more than 5 minutes.

#### Example Request

```
```
curl -s -X GET \  
"https://graph.threads.net/v1.0/<MEDIA_CONTAINER_ID>?fields=status,error_message&access_token=<THREADS_ACCESS_TOKEN>"
```
```

#### Example Response

```
```
{  
  "status": "FINISHED",  
  "id": "17889615691921648"  
}
```
```

#### Example Response (in case of error)

```
```
{  
  "status": "ERROR",  
  "id": "17889615691921648",  
  "error_message": "FAILED_DOWNLOADING_VIDEO"  
}
```
```

## Retrieve Quota Limits

To validate that a user has not exhausted their API quota limits for publishing, reply publishing, deleting, and location search, they can make a call to the
`GET {threads-user-id}/threads_publishing_limit` endpoint. This will return a user’s current Threads API usage total.

#### Example Request

```
```
curl -s -X GET  
"https://graph.threads.net/v1.0/<THREADS_USER_ID>/threads_publishing_limit?fields=quota_usage,config,reply_quota_usage,reply_config,delete_quota_usage,delete_config,location_search_quota_usage,location_search_config&access_token=<THREADS_ACCESS_TOKEN>"
```
```

#### Example Response

```
```
{  
  "data": [  
    {  
      "quota_usage": 0,  
      "config": {  
        "quota_total": 250,  
        "quota_duration": 86400  
      },  
      "reply_quota_usage": 0,  
      "reply_config": {  
        "quota_total": 1000,  
        "quota_duration": 86400  
      },  
      "delete_quota_usage": 0,  
      "delete_config": {  
        "quota_total": 100,  
        "quota_duration": 86400  
      },  
      "location_search_quota_usage": 0,  
      "location_search_config": {  
        "quota_total": 500,  
        "quota_duration": 86400  
      }  
    }  
  ]  
}
```
```
