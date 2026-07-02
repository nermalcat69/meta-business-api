---
title: "FB.LogInWithPublishPermissions"
source_url: https://developers.facebook.com/documentation/unity/downloads
---

# FB.LogInWithPublishPermissions

Updated: May 18, 2018

Prompts the user to authorize your application for publish permissions using the [Login Dialog](https://developers.facebook.com/documentation/facebook-login) appropriate to the platform. If the user is already logged in and has authorized your application, checks whether all [permissions](https://developers.facebook.com/docs/facebook-login/permissions) in the `permissions` parameter have been granted, and if not, prompts the user for any that are newly requested.

People are sensitive about granting publish permissions, so you should only ask for publish permissions once a person is ready to post something from your app and **not** during the initial login.

In the Unity Editor, a stub function is called, which will prompt you to provide an access token from the [Access Token Tool](https://developers.facebook.com/tools/accesstoken). Please note that this token will not necessarily contain the permissions you specified in FB.Login. To change this token's permissions, please use the [Graph API Explorer](https://developers.facebook.com/tools/explorer).

## Parameters

```
public static void LogInWithPublishPermissions(
    IEnumerable<string> permissions = null,
    FacebookDelegate<ILoginResult> callback = null
)
```

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `permissions` | `IEnumerable<string>` | A list of Facebook permissions requested from the user | empty list |
| `callback` | `FacebookDelegate <ILoginResult>` | A delegate that will be called with the result of the Login Dialog. A platform-independent representation is available from the properties [`FB.UserId`](https://developers.facebook.com/documentation/unity/downloads#UserId), [`AccessToken`](https://developers.facebook.com/documentation/unity/downloads#AccessToken), and via the boolean [`FB.IsLoggedIn`](https://developers.facebook.com/documentation/unity/downloads#IsLoggedIn). | `null` |

## Examples

```
FB.LogInWithPublishPermissions (
    new List<string>(){"publish_to_groups"},
    AuthCallback
);
```

Check out [SDK Examples](https://developers.facebook.com/documentation/unity/examples#login) for more complete sample usage of `FB.LogInWithPublishPermissions`.

## Best Practices

You should check which permissions the user has actually granted your app - you may not have all of the permissions you asked for in the `permissions` parameter, as the user may have authorized the app for some but not others. Users can also revoke permissions via their Privacy settings, outside the app. When designing, take the dynamic nature of permissions into account. To find out which permissions you have at any given time, you can read the `/user/permissions` Graph API endpoint, or you can use the [AccessToken](https://developers.facebook.com/documentation/unity/reference/current/Properties#AccessToken) convenience class like below.

```
using System.Linq;
using Facebook.Unity;

if (AccessToken.CurrentAccessToken.Permissions.Contains("publish_to_groups")) {
    Debug.Log("have publish actions");
} else {
    Debug.Log("no publish actions");
}
```

Please use the [Facebook Login Checklist](https://developers.facebook.com/documentation/facebook-login/best-practices) to make sure you're providing users with a consistent, pleasant experience. Also, see our [Login documentation](https://developers.facebook.com/documentation/facebook-login) to learn how authentication and authorization work in the broader context of Facebook.

Generally, you will get the best uptake of Facebook login among your users if you make the login control a prominent element on the first screen they should interact with. You may also wish to incentivize users to log in or upsell them to grant key permissions; for example, we find that `"email"` is important for communicating with users having trouble accessing your game, but some users are reluctant to grant it. Building a reputation for responsible use of the permissions you ask for, and offering a token in-game reward, can help.
