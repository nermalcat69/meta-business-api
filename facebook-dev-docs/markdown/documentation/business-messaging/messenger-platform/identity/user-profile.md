---
title: "Account Linking"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile
---

# Account Linking

Updated: Jul 1, 2025

When a user starts a conversation with your business, you may want to identify him or her as a customer who already has an account with your business. To help with this, we have created a secured protocol to link and unlink the Messenger user identity with your business user identity.

![Three Messenger screens showing the account linking flow: Log In button, Please log in page, then Account Linking Success](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/13591491_1736723439929599_1019255953_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vbuTvONuC9cQ7kNvwG99Wdr&_nc_oc=Adq88WWXWxFdluGaX1dEmOgDqPShn7YH3LOT2frvjP_Q8b8yk6i3mfh5P337fJtuap-dUKEUaLqY4GJ9-bT9_rLQ&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=UmUQi96G9mv27ebZ8M9q-Q&_nc_ss=7b289&oh=00_AQDCx7-wMtj8cCs9DORQiKAKY2xSEzDgxkZtqk9-cISiPA&oe=6A6071D6)

Account Linking allows you to invite users to log-in using your own authentication flow, and to receive a Messenger page-scoped ID (PSID) upon completion. You can then provide a more secure, personalized and relevant experience to users.

Use the [`getContext()`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/context) function in Messenger Extensions to securely get your app user's Page-scoped ID. Bots can then use that to link the user's account or personalize the experience.

### Limitations

Account Linking is only supported on iOS and Android Messenger apps.

Account Linking can only be started via [Log In buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons). It cannot be started from a [persistent menu](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu), a [URL buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons), or an already-opened webview flow.

## Linking Process

The Account Linking flow follows few simple steps.

* Register a callback URL using [Log In Button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons).
* Messenger Platform invokes the registered URL when a user starts the account linking flow. The `redirect_uri` and `account_linking_token` parameters are appended to your registered callback.
* Once linking is complete, redirect users to the location provided by `redirect_uri` and append a `authorization_code` parameter (defined by you) to confirm linking.
* Optionally retrieve the user's page-scoped ID (PSID) using the [account linking endpoint](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile#endpoint). This step should only be used in special cases when you need the user's PSID as part of the linking process.

Account Unlinking can be initiated:

* By the user when tapping a [Log Out button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) sent by the developer
* By the business using the [Account Unlink endpoint](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile#unlink)

## Set your account linking URL

Before using account linking, you must set the `account_linking_url` property in your bot's [Messenger Profile](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api). You must have the Administrator role for the Page associated with the bot.

```
{  
  "account_linking_url": "<YOUR_ACCOUNT_LINKING_URL>"  
}
```

## Callback

Your account linking URL is invoked by the Messenger Platform when a user triggers account linking. The `redirect_uri` and `account_linking_token` parameters are appended to the URL callback.

```
<yourAccountLinkingUrl>
  ?account_linking_token=ACCOUNT_LINKING_TOKEN
  &redirect_uri=CALLBACK_URL
```

If **account linking is successful**, you need to complete the flow by redirecting the browser to the URL specified in the `redirect_uri` parameter and appending an `authorization_code` parameter defined by you. Note that the URL may already contain parameters, so you should append the authorization code accordingly:

```
<redirect_uri>
  &authorization_code=AUTHORIZATION_CODE
```

If **account linking failed**, redirect the browser to the `redirect_uri` passed to you as a parameter but do not append the `authorization_code`.

### Parameters

| Parameter Name | Description |
| --- | --- |
| `redirect_uri` | Redirect URI which will be added by Messenger, you must redirect the browser to this location at the end of the authentication flow. It may contain URL encoded parameters. |
| `account_linking_token` | Short-lived token passed by Messenger which you need to pass back as part of the redirect scheme. This token is only valid for 5 minutes, it is encrypted and unique per user.  You can call the [PSID retrieval endpoint](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile#endpoint) with this token to fetch the corresponding PSID. |
| `authorization_code` | Code provided by you to confirm a successful linking. Messenger Platform will pass back this code along with the user's PSID as the [Account Linking webhook event](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_account_linking). Failing to pass this parameter will cause the linking process to abort. |

## Webhook event

A successful linking flow triggers the [Account Linking event](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_account_linking) to deliver the user's page-scoped ID (PSID).

You must register to the [account linking callback](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_account_linking) event. Not acknowledging this webhook event will cause the linking process to abort.

## PSID retrieval endpoint

In certain cases you need to retrieve the user page-scoped ID (PSID) during the linking flow. To help with this situation we are providing a PSID retrieval endpoint allowing you to fetch the user's PSID given a valid and unexpired `account_linking_token`.

### Request

```
curl -X GET "https://graph.facebook.com/v2.6/me?access_token=PAGE_ACCESS_TOKEN \
      &fields=recipient \
      &account_linking_token=ACCOUNT_LINKING_TOKEN"
```

### Response

```
{
  "id": "PAGE_ID",
  "recipient": "PSID"
}
```

## Account Unlink Endpoint

In certain cases you need to unlink the user page-scoped ID (PSID) programmatically from your backend. To help with this situation we are providing a PSID unlinking endpoint allowing you to unlink the user's account given a valid PSID.

### Request

```
curl -X POST -H "Content-Type: application/json" -d '{
   "psid":"PSID"
}' "https://graph.facebook.com/v2.6/me/unlink_accounts?access_token=PAGE_ACCESS_TOKEN"
```

### Response

```
{
  "result": "unlink account success"
}
```

## Best Practices

✅ Use Account Linking when you have a user account system that extends beyond Messenger.

✅ Let people create an account from within Messenger, so it's available elsewhere.

✅ Prompt for login when it's contextually relevant—that is, when your bot user can see the benefit of doing it.

✅ Consider how your bot should behave if a user declines login.

✅ Provide clear confirmation and a friendly welcome after login.

❌ Don't use Account Linking if people will *only* interact with you via Messenger. You can store account information via thread ID.

❌ Don't require Account Linking right away if you can avoid it; let people get a sense for your bot first.

### Recommended Design Flow

* Prompt for login with a message that includes our Account Linking button.
* Show your login page (including a Create Account option) in the Account Linking webview. Ensure it looks good and works well on mobile screens.
* After successful login, display a confirmation message in the webview. Users will need to dismiss it themselves afterward.
* Follow up with a friendly thank-you and/or next steps in the thread, including a Log Out option.
