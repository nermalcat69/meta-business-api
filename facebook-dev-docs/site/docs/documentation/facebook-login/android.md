---
title: "Limited Login FAQ"
source_url: https://developers.facebook.com/documentation/facebook-login/android
---

# Limited Login FAQ

Updated: Feb 28, 2025

**My login access token is Invalid and/or I can't check the expiration date of my access token after upgrading the iOS SDK to v17.0.0.0.**

In response to [the upcoming changes to ATT enforcement⁠](https://developer.apple.com/news/?id=3d8a9yyh), we made changes to the iOS SDK and the SDK no longer provides valid user access tokens in scenarios where the user opts out of ATT. The access token validation or Graph API requests may throw errors like OAuthException - "Invalid OAuth access token - Cannot parse access token". Our recommendation is that users integrate Limited Login following the official documentation:

* [Limited Login for iOS](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/ios)
* [Limited Login for Unity](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/unity)

**I am using FB Login for Business, and login is not working after upgrading the iOS SDK to v17.0.0.0.**

When users opt out of ATT, all Facebook Login traffic will be performed on the Limited Login domain. Limited Login **does not** support business permissions. Our recommendation is that developers integrate Limited Login following [the official documentation](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/ios). See limited login supported permissions in [this document](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/permissions).

**I don't get redirected to the FB app to log into Facebook when logging into my application; a browser is shown instead asking me to log in.**

When users opt out of ATT, all Facebook Login traffic will be performed on the limited login domain via the in-app browser. Limited Login **does not** support fast app switch (that is, redirecting to fb app to login). See limitations section of the [Limited Login for iOS](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/ios) document.

**How can I validate a Limited Login authentication token after integrating Limited Login?**

Please see the official documentation, [Validating the Limited Login OIDC Token](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/token/validating).

**Friends information is not returned with the user\_friends permission approved while using Limited Login.**

Please see key considerations for user\_friends with Limited Login in the [Permissions in Limited Login](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/permissions#key-considerations-user-friends) document.

**Is there a possibility that Meta would release the privacy manifest with a minor update instead of a major one?**

We made changes both to the iOS SDK and our core login systems to support the privacy manifest requirements based on the upcoming [App Transparency Tracking enforcement⁠](https://developer.apple.com/news/?id=3d8a9yyh) so that iOS users who have opted out of ATT are able to use FBLogin. As a result, we do not plan to release the privacy manifest as part of a minor update.

**What happens when you perform a Limited Login?**

This will authenticate your user and populate a shared instance of an authentication token. The additional information from the authentication call will be used to populate the shared User Profile instance with basic fields.

**What happens when you make a graph request after a limited login?**

A graph request will fail because there is no access token. To get an access token, either reuse the classic login method (defaults tracking to enabled), or call `FBSDKLoginManager` `logInFromViewController:configuration:completion:` with a configuration that specifies that tracking is enabled. Be aware that when you do this, users are tracked.

**What if you want to make graph requests after a limited login?**

To access the Graph API, you need an access token. Either reuse the classic login method (defaults tracking to enabled), or call `FBSDKLoginManager` `logInFromViewController:configuration:completion:` with a configuration that specifies that tracking is enabled. This will allow you obtain an access token that can be used for Graph API calls. Be aware that when you do this, users are tracked. Be aware that Limited Login safeguards are not supported in this context.

**If I use Limited Login to request user\_friends, how can I ensure that Limited Login safeguards are maintained for the data that I receive?**

When you use Limited Login to request `user_friends` from a user, we provide you with a list of app scoped IDs (ASIDs) associated with the friends of the authorizing user, if the friends have also granted your app the `user_friends` permission. Depending on how you have implemented Limited Login, some of the ASIDs on this list may represent other users that have connected to your app using Limited Login. To ensure that Limited Login safeguards are maintained for such users, do not make Graph API calls using their ASIDs. Instead, continue to rely on Limited Login for these users.

**Is there any change to using the login button?**

Yes. There are two added public properties:

* `loginTracking`, which can be used to get or set the desired tracking preference to use for login attempts. It defaults to `.enabled`.
* `nonce`, which can be used to get or set an optional nonce to use for login attempts. A valid nonce must be a non-empty string without whitespace. Note: An invalid nonce will not be set. Instead, default unique nonces will be used for login attempts.

**Are there any changes to logout?**

No change from the user perspective. Under the hood it will set the current `AuthenticationToken`, `AccessToken`, and `Profile` to nil.

**Is Limited Login available for tvOS SDK?**

Limited Login is not available for tvOS at this time.

**What will happen to my existing, logged-in users?**

There is no impact to existing logged in users from adopting Limited Login in your app. If you would like to take advantage of Limited Login safeguards for existing, logged-in users, you must log them out by so they can log back in with Limited Login.

**Is Limited Login mode a cross-device setting?**

No. The Limited Login flag is device-specific.

**How can I reconcile or de-duplicate users with different token types across devices?**

You can reconcile users by email and/or [ASID](https://developers.facebook.com/docs/pages/support).

**Will I lose access to fb\_login\_id (aka ASID) in Limited Login mode?**

No. `fb_login_id` is still present in Limited Login mode. It is the user access token (separate entity) which is swapped for an OIDC token in Limited Login mode.

**Is Limited Login mode available for business permissions?**

Limited Login mode only supports basic profile (name and picture) and email permissions. If your app requires [business permissions](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types#business), you cannot use Limited Login to request them. However, your users can grant business permissions In Classic Login in the following ways:

* Logging into your app via web.
* Logging into your app via iOS in Classic Login mode.
* Logging into your app via Android.

**Can I map users in Limited Login mode across different apps belonging to my business?**

Yes, but this will require the use of an app access token to request the `token_for_business` field on the User node. Limited Login safeguards are not supported in this context. For apps that are associated with your business by means of Business Manager, you can use the app-scoped ID (ASID) included in the OIDC token returned after a successful login to get a unique string for a user. Using your app's app access token, request the `token_for_business` field on the [`User`](https://developers.facebook.com/docs/graph-api/reference/user) node and pass in the user's app-scoped ID. This call returns a string which is the same for this user across all the apps managed by the same Business Manager.

```
GET /ASID?fields=token_for_business
```

This returns the values.

```
{
  "id": "1234567890"
  "token_for_business": "weg23ro87gfewblwjef"
}
```

Usage notes:

* The person being queried must have logged into this app.
* If the owning business changes, the value of `token_for_business` will also change
* If you request the `token_for_business` field and the app is not associated with a Business Manager, the call returns an error.
* The value returned by `token_for_business` is a token, not an ID - it cannot be used directly against the Graph API to access a person's information. You should still store the ID in your database.

## See Also

* [Limited Login](https://developers.facebook.com/documentation/facebook-login/ios/limited-login)
* [Limited Login for iOS](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/ios)
* [Limited Login for Unity](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/unity)
* [Limited Login OIDC Token](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/token)
