---
title: "Get supported features"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity
---

# Get supported features

Updated: Apr 22, 2026

Features of the Messenger Extensions SDK available in the webview vary depending on what version of the Messenger bot the webview is opened in. For this reason, it is important to check that the feature you are using is available when the webview is opened.

To do this. you can call `getSupportedFeatures()` to get an array of features that are supported on the current client. If a feature you depend on is not available, you can use this opportunity to fail gracefully with a message telling the user to upgrade.

## Supported Features

The following Messenger Extensions SDK features are available in the webview:

| Feature | Description |
| --- | --- |
| `payments` | Whether [payments](https://developers.facebook.com/docs/messenger-platform/complete-guide/payments) is supported on this client. |
| `sharing_broadcast` | Using [`beginShareFlow()` to open a broadcast flow](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/sharing) will work on this client. |
| `sharing_direct` | Using [`beginShareFlow()` to share to the current thread](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/sharing) will work on this client. |
| `sharing_open_graph` | Sharing [open graph messages](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/generic) is available. |
| `context` | [`getContext()`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/context) is available in the webview. |

## Example Request

For a complete list of method parameters, see the [getSupportedFeatures() Reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-extensions-sdk/getSupportedFeatures).

```
MessengerExtensions.getSupportedFeatures(function success(result) {
  let features = result.supported_features;
}, function error(err) {
  // error retrieving supported features
});
```

## Example Response

`getSupportedFeatures()` will return an array containing the featured supported in the current webview to the success callback. For details on the returned array values, see [Features](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity#features_list) below.

```
```
{  
  "supported_features":[  
    "payments",  
    "context",  
    "sharing_broadcast",  
    "sharing_direct",  
    "sharing_open_graph"  
  ]  
}
```
```
