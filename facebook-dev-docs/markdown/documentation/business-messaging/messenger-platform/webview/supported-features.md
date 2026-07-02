---
title: "Thread context"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/supported-features
---

# Thread context

Updated: Jun 17, 2026

The `getContext()` method, part of the [Messenger Extensions SDK](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/extensions), retrieves additional information about the person and the thread that opened the webview. The `getContext()` method is useful for creating interactive group experiences and games, as well as restricting any content that was intended to be shared only to a certain thread.

To check for its availability on a given client, call [`getSupportedFeatures()`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/supported-features) and check for the `context` property in the response.

## Method

```
MessengerExtensions.getContext(app_id, success, error)
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `app_id` | String | Your app ID. |
| `success` | Function | Success callback function. Receives the `thread_context` object as an argument. |
| `error` | Function | Error callback function. Called if Messenger was unable to retrieve the thread context. |

## Retrieve thread context

Call this function to get the person's PSID, thread ID, and thread type.

```
MessengerExtensions.getContext('<YOUR_APP_ID>',
  function success(thread_context){
    // success
  },
  function error(err){
    // error
  }
);
```

### Response format

The response passed to the success callback is a JavaScript object in the following format:

```
{  
  "thread_type": "GROUP",  
  "tid": "1411911565550430",  
  "psid": "1293479104029354",  
  "signed_request": "5f8i9XXH2hEaykXHKFvu-E5Nr6QRqN002JO7yl-w_9o.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTUwNDA0NjM4MCwicGFnZV9pZCI6NjgyNDk4MTcxOTQzMTY1LCJwc2lkIjoiMTI1NDQ1OTE1NDY4MjkxOSIsInRocmVhZF90eXBlIjoiVVNFUl9UT19QQUdFIiwidGlkIjoiMTI1NDQ1OTE1NDY4MjkxOSJ9"  
}
```

### `thread_context` properties

| Property | Type | Description |
| --- | --- | --- |
| `tid` | String | The ID of the thread the webview was opened from. |
| `thread_type` | String | The type of thread: `USER_TO_PAGE` (user and page), `USER_TO_USER` (two users), or `GROUP` (multiple users). |
| `psid` | String | The page-scoped user ID for the person that opened the webview. |
| `signed_request` | String | A signed request containing the above information. Used to verify the authenticity of the thread context source. See Validating the `signed_request` below. |

## Validate the `signed_request`

In some situations, transmit the information obtained from `getContext()` to your backend and validate it before performing some action like a login or purchase. Validating the `signed_request` ensures that the information really did come from Messenger and was not spoofed.

Messenger base64url encodes the `signed_request` and signs it with an HMAC version of your **App Secret**, based on the OAuth 2.0 spec.

You can validate it with the following 4 steps:

* Split the signed request into two parts delimited by a `'.'` character (e.g. `238fsdfsd.oijdoifjsidf899`)
* Decode the first part — the **encoded signature** — from base64url encoding.
* Decode the second part — the **payload** — from base64url encoding. This can be used on the server side if needed.
* Hash the original payload using HMAC SHA-256 and your app secret and confirm that it is equal to the encoded signature originally passed.
* Validate the `issued_at` timestamp in the payload to ensure the recency of the request.

Decoding the payload will yield an object with the same information as originally returned by `getContext()`, but with the addition of `algorithm`, `issued_at`, and `page_id` fields:

```
{  
  "psid": "1293479104029354",  
  "algorithm": "HMAC-SHA256",  
  "thread_type": "GROUP",  
  "tid": "1411911565550430",  
  "issued_at": 1491351619,  
  "page_id": 167938560376726  
}
```

To avoid accidentally divulging your app secret, this validation should happen on your server and never in client-side code.

## Using thread IDs with global pages

Some businesses use a global page structure with multiple pages associated with one app ID or bot. In this situation, the thread IDs returned by `getContext()` in the chat extension will be different for people in different countries.

Use the following API to resolve the country page-specific thread ID to a global thread ID, and use that global thread ID to maintain state among users accessing the chat extension from their respective regional pages.

Retrieve global thread ID:

```
curl -X GET "https://graph.facebook.com/<LATEST_API_VERSION>/<THREAD_ID>?access_token=<PAGE_ACCESS_TOKEN>"
```

Example response:

```
{"tid":1577059318985661,"global_tid":1577059318985661}
```

If there's no global page, `global_tid` will not be present.
