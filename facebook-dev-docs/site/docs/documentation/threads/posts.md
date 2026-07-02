---
title: "App Access Tokens"
source_url: https://developers.facebook.com/documentation/threads/posts
---

# App Access Tokens

Updated: Apr 4, 2025

App access tokens are used to make requests to the Threads API on behalf of an app rather than a user. Certain APIs require app access tokens instead of user access tokens, such as the [oEmbed API](https://developers.facebook.com/documentation/threads/tools-and-resources/embed-a-threads-post).

## Generating an app access token

To generate an app access token, you need:

* Your Threads app ID
* Your Threads app secret

### Example request

```
curl -X GET https://graph.threads.net/oauth/access_token  
  ?client_id=<APP_ID>  
  &client_secret=<APP_SECRET>  
  &grant_type=client_credentials
```

### Example response

```
{  
  "access_token": "TH|<APP_ID>|<ACCESS_TOKEN>",  
  "token_type": "bearer"  
}
```

This call will return an app access token that can be used in place of a user access token to make API calls as noted above.

**Note:** Because this request uses your app secret, it must never be made in client-side code or in an app binary that could be decompiled. It is important that your app secret is never shared with anyone. Therefore, this API call should only be made using server-side code.

## Alternate method

There is another method to make calls to the Threads API on behalf of an app which doesn't require using a generated app access token. You can just pass your app ID and app secret as the `access_token` parameter when you make a call.

### Example request

```
curl -X GET https://graph.threads.net/<API_ENDPOINT>  
  ?access_tokens=TH|<APP_ID>|<APP_SECRET>&...
```

The choice to use a generated access token or this method depends on where you hide your app secret.
