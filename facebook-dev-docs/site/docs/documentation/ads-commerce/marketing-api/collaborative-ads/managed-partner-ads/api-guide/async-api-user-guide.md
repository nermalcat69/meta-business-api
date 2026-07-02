---
title: "Async API User Guide"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/async-api-user-guide
---

# Async API User Guide

Updated: May 21, 2026

Asynchronous computing is a paradigm where the user does not expect the system to execute a workload immediately; instead, the system schedules it for execution sometime in the near future without blocking the latency-critical path of the application. This page gives you guidance and the best practices to follow to retrieve the results of the async API.

## Poll the async session ID for results

### Request

```
curl -G -X GET \
  -d 'fields=id,status,result' \
  -d 'access_token=<ACCESS_TOKEN>' \
  "https://graph.facebook.com/v25.0/<ASYNC_SESSION_ID>"
```

### Response

```
{
  "id": "<ASYNC_SESSION_ID>",
  "status": "enum string",
  "result": "string"
}
```

#### Response parameters

| Name | Description |
| --- | --- |
| `id`  numeric string | The ID of the async request.  Also known as the `ASYNC_SESSION_ID`. |
| `status`  enum string | The status of the async job.  **Values:**   * `UNKNOWN` * `NOT_STARTED` * `IN_PROGRESS` * `COMPLETED` * `FAILED` |
| `result`  string | The result as returned by the async job.  For details, look at the corresponding API call’s success and failure responses. |

## Polling best practices

The polling requests also count towards the overall [API rate limit](https://developers.facebook.com/docs/graph-api/overview/rate-limiting) for your application. Consider using exponential backoff for polling.
