---
title: "Insights"
source_url: https://developers.facebook.com/documentation/threads/reference/debug
---

# Insights

Updated: Nov 8, 2024

The Threads insights endpoints allow you to retrieve insights for Threads media objects and users. See [Threads Insights API](https://developers.facebook.com/documentation/threads/insights) for more information.

## `GET /{threads-media-id}/insights`

Retrieve insights for a Threads media object. See [Media Insights](https://developers.facebook.com/documentation/threads/insights#media-insights) for more information.

### Parameters

| Name | Description |
| --- | --- |
| `access_token`  string | **Required.**  Threads Graph API user access token. |
| `threads-media-id`  string | **Required.**  The path parameter of the Threads media identifier. |
| `metric`  string | **Required.**  A comma-separated list of the metrics to be returned. Must be at least one of the metric values. **Values:** `views`, `likes`, `replies`, `reposts`, `quotes`, `shares` |

---

## `GET /{threads-user-id}/threads_insights`

Retrieve insights for a Threads user object. See [User Insights](https://developers.facebook.com/documentation/threads/insights#user-insights) for more information.

### Parameters

| Name | Description |
| --- | --- |
| `access_token`  string | **Required.**  Threads Graph API user access token. |
| `threads-user-id`  string | **Required.**  The path parameter of the Threads user identifier. |
| `since` | **Optional.**  Used in conjunction with the `until` parameter to define a range. If you omit `since` and `until`, it defaults to a 2-day range: yesterday through today. **Format:** Unix Timestamp |
| `until` | **Optional.**  Used in conjunction with the `since` parameter to define a range. If you omit `since` and `until`, it defaults to a 2-day range: yesterday through today. **Format:** Unix Timestamp |
| `metric`  string | **Required.**  A comma-separated list of the metrics to be returned. Must be at least one of the metric values. **Values:** `views`, `likes`, `replies`, `reposts`, `quotes`, `clicks`, `followers_count`, `follower_demographics` **Note:** `follower_demographics` is not compatible with the `since` and `until` parameters. |
