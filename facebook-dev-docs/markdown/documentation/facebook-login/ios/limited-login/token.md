---
title: "Limited Login"
source_url: https://developers.facebook.com/documentation/facebook-login/ios/limited-login/token
---

# Limited Login

Updated: Mar 28, 2024

We have made a change to endpoints for Limited Login; it is now accessible under limited.facebook.com

Facebook Login offers a Limited Login mode. When you use the limited version of Facebook Login, the fact that a person used Facebook Login with the app will not be used to personalize or measure advertising effectiveness.

## How it Works

Limited Login returns an `AuthenticationToken` that wraps an [OpenID Connect⁠](https://openid.net/connect/) token. The ID token cannot be used to request additional data using the Graph API, such as friends, photos, or pages, and it cannot be used to get other tokens, such as [Page](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#pagetokens) or [session info](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens/get-session-info) tokens. Doing so requires the use of classic [Facebook Login](https://developers.facebook.com/documentation/facebook-login/ios) (which does not support Limited Login safeguards).

A successful login populates a global `AuthenticationToken` instance. You can provide a nonce, a string value you choose, for the login attempt that will be included in the returned token for validation. In addition, Limited Login populates a shared profile instance that contains the basic information including app-scoped ID, name, profile picture. Other information can also be included if granted by the user. See [Permissions in Limited Login](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/permissions).

## See Also

* [Facebook Login for iOS](https://developers.facebook.com/documentation/facebook-login/ios)
* [Limited Login for iOS](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/ios)
* [Limited Login for Unity](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/unity)
* [Limited Login OIDC Token](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/token)
* [Validating the Limited Login OIDC Token](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/token/validating)
* [Permissions in Limited Login](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/permissions)
* [Limited Login FAQ](https://developers.facebook.com/documentation/facebook-login/ios/limited-login/faq)
