---
title: "FB.Init"
source_url: https://developers.facebook.com/documentation/unity/reference/current/FB.LogInWithReadPermissions
---

# FB.Init

Updated: Apr 16, 2026

Sets the state of the Facebook SDK, and initializes all platform-specific data structures and behaviors. This function can only be called once during the lifetime of the object; later calls lead to undefined behavior.

Init() relies on properties that are set in the Unity Editor using the Facebook | Edit settings menu option, as detailed [below](https://developers.facebook.com/documentation/unity/reference/current/FB.LogInWithReadPermissions#properties).

## Parameters

There are two signatures for this function. The first takes most of its parameters from the Facebook settings in the editor:

```
public static void Init(
    InitDelegate onInitComplete = null,
    HideUnityDelegate onHideUnity = null,
    string authResponse = null
)
```

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `onInitComplete` | `InitDelegate` | A function that will be called once all data structures in the SDK are initialized; any code that should synchronize with the player's Facebook session should be in `onInitComplete()`. | `null` |
| `onHideUnity` | `HideUnityDelegate` | A function that will be called when Facebook tries to display HTML content within the boundaries of the Canvas. When called with its sole argument set to `false`, your game should pause and prepare to lose focus. If it's called with its argument set to `true`, your game should prepare to regain focus and resume play. Your game should check whether it is in fullscreen mode when it resumes, and offer the player a chance to go to fullscreen mode if appropriate. | `null` |
| `authResponse` | `string` | *effective in Web Player only, rarely used* A Facebook `auth_response` you have cached to preserve a session, represented in JSON. If an `auth_response` is provided, `FB` will initialize itself using the data from that session, with no additional checks. | `null` |

### Properties set via Facebook | Edit Settings in the Unity Editor

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `appId` | `string` | The Facebook application ID of the initializing app. **Required** |  |
| `cookie` | `bool` | Sets a cookie which your server-side code can use to validate a user's Facebook session | `true` |
| `logging` | `bool` | If `true`, outputs a verbose log to the Javascript console to facilitate debugging. *Effective on Web only.* | `true` |
| `status` | `bool` | If `true`, attempts to initialize the Facebook object with valid session data.\* | `true` |
| `xfbml` | `bool` | If `true`, Facebook will immediately parse any XFBML elements on the Facebook Canvas page hosting the app, like the [page plugin](https://developers.facebook.com/documentation/plugins/page-plugin). *Effective on Web only.* | `false` |

The Web platform can make use of certain platform-specific attributes which other platforms will safely ignore; see the [documentation for the Javascript SDK's `FB.init()`](https://developers.facebook.com/documentation/javascript/reference/FB.init) for details of their function.

**Note:** Init often requires an asynchronous read operation, and any code that depends on its being completed should be synchronized in the `HideUnityDelegate` passed into `Init()`.

## Examples

```
FB.Init();
```

Check out the [SDK Examples](https://developers.facebook.com/documentation/unity/examples#init) for a more complete sample usage of where and when to use `FB.Init` in your Unity application.
