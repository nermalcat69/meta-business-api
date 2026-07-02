---
title: "Debug"
source_url: https://developers.facebook.com/documentation/threads/tools-and-resources
---

# Debug

Updated: Jun 4, 2025

Retrieve various data about an access token. See [Debug Access Token](https://developers.facebook.com/documentation/threads/troubleshooting/debug-access-token) for more information.

## `GET /debug_token`

### Parameters

| Name | Description |
| --- | --- |
| `access_token`  string | **Required.**  Threads Graph API user access token of a Threads tester. |
| `input_token`  string | **Required.**  The access token to be inspected. |

**Note:** The `access_token` and `input_token` can be associated with different users but must be associated with the same app.

### Fields

| Name | Description |
| --- | --- |
| `data`  object | Data wrapper around the result. |
| `type`  string | Whether the access token is an app access token or user access token. |
| `application`  string | Name of the application this access token is for. |
| `data_access_expires_at`  Unixtime | Timestamp when the app’s access to user data expires. |
| `expires_at`  Unixtime | Timestamp when this access token expires. |
| `is_valid`  Boolean | Whether the access token is still valid or not. |
| `issued_at`  Unixtime | Timestamp when this access token was issued. |
| `scopes`  string[] | List of permissions that the user has granted for the app in this access token. |
| `user_id`  string | The ID of the user this access token is for. |
