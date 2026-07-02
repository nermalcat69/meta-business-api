---
title: "User Profile API"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/custom-labels
---

# User Profile API

Updated: Mar 18, 2026

The User Profile API allows you to use a Page-scoped ID (PSID) to retrieve user profile information that can be used to personalize the experience of people interacting with your Messenger.

## Requirements

* To retrieve a user’s profile information, you need to have Advanced Access for the [Business Asset User Profile Access](https://developers.facebook.com/docs/graph-api/changelog/version8.0#baupa) feature. Some fields require [additional permissions](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/custom-labels#fields) for access.

## Limitations

Though a PSID may be valid, in some cases it may not be able to be used to retrieve a person’s profile information. For example, PSIDs associated with Instant Games Pages are not accessible via the User Profile API.

### User Opt-in

The following events will authorize your Messenger bot to access a person’s profile information:

* The person starts the conversation via [a welcome screen](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen) and tapped the “Get Started” button.
* The person starts the conversation by clicking a “Send to Messenger” button.
* The person starts the conversation by sending a message.
* The person starts the conversation by accepting a Page’s message request.
* Your Messenger bot uses the [`askPermission()` function](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/permissions) of the Messenger Extensions SDK in the webview to ask for the `user_profile` permission.
* For [Business apps](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types#business), the [Business Asset User Profile Access](https://developers.facebook.com/docs/apps/features-reference#business-asset-user-profile-access) feature is additionally required, and can be applied for via [App Review](https://developers.facebook.com/docs/app-review).

Some entry points allow apps to initiate a conversation without granting the app authorization to access the person’s public profile. In those cases, the app will be granted permission to access the person’s profile after the person replied to the initial message. Notable situations where a person may initiate a conversation with the app, but not authorize profile permission include the following:

* Conversations started via the [Checkbox Plugin](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery) where the person did not respond on Messenger.
* Interactions with [Ads that Click to Messenger](https://developers.facebook.com/docs/messenger-platform/guides/ads) before the person has replied on Messenger

### Profile Unavailable

Currently, the User Profile API does not support retrieving profile information for Messenger accounts that were created using a phone number.

In this case, the API will return the error code `2018218` along with the message ‘No profile available for this user.’

## Available Profile Fields

Apps that have received [App Review approval](https://developers.facebook.com/docs/app-review) for the required feature and permission may retrieve the following fields for users who have made this information public and have opted-in to your Page.

| Field Name | Description | Feature or Permission Required for Access |
| --- | --- | --- |
| `id` | The user’s PSID | [Business Asset User Profile Access](https://developers.facebook.com/docs/apps/features-reference/business-asset-user-profile-access) feature |
| `name` | The user’s first and last name | [Business Asset User Profile Access](https://developers.facebook.com/docs/apps/features-reference/business-asset-user-profile-access) feature |
| `first_name` | First name | [Business Asset User Profile Access](https://developers.facebook.com/docs/apps/features-reference/business-asset-user-profile-access) feature |
| `last_name` | Last name | [Business Asset User Profile Access](https://developers.facebook.com/docs/apps/features-reference/business-asset-user-profile-access) feature |
| `profile_pic` | URL to the Profile picture. The URL will expire. | [Business Asset User Profile Access](https://developers.facebook.com/docs/apps/features-reference/business-asset-user-profile-access) feature |
| `locale` | Locale of the user on Facebook. For supported locale codes, see [Supported Locales](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales). | [`pages_user_locale` permission](https://developers.facebook.com/docs/permissions/reference/pages_user_locale) |
| `timezone` | Timezone, number relative to GMT | [`pages_user_timezone` permission](https://developers.facebook.com/docs/permissions/reference/pages_user_timezone) |
| `gender` | Gender | [`pages_user_gender` permission](https://developers.facebook.com/docs/permissions/reference/pages_user_gender) |

### Requesting feature access to user fields for the Page

* Go to *Page Settings > Advanced Messaging*
* Under ‘Info About People’ select the field and click the ‘Request’ button.

![Advanced Messaging 'Info About People' panel with Request buttons for Gender, Language Locale and Time Zone fields](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/643415636_1445181484007168_6804452790169085642_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=k8JWjl329IMQ7kNvwFT9xho&_nc_oc=AdrwAJWUh4abs0RndG0h-KO17k_hAU1lh32htJZTQgg_pnh9Thkhl9aZzsZmysBYfRsDM1_P3JnLSGSwP9GyQQfu&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=-q47YC0sJf_UWfG24ggGkg&_nc_ss=7b289&oh=00_AQAqZaoG7w-uJl_tlAGLbqTC4WYWTJXWj6Gj3AUdmeIiag&oe=6A606A07)

## Retrieving a Person’s Profile

To use the User Profile API, send a `GET` request with the [profile fields](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/custom-labels#fields) you want for the person:

```
```
curl -X GET "https://graph.facebook.com/<PSID>?fields=first_name,last_name,profile_pic&access_token=<PAGE_ACCESS_TOKEN>"
```
```

If the app is able to access the person’s profile, the User Profile API will return a JSON string with the requested fields from the person’s profile.

```
```
{  
  "first_name": "Peter",  
  "last_name": "Chang",  
  "profile_pic": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p200x200/13055603_10105219398495383_8237637584159975445_n.jpg?oh=1d241d4b6d4dac50eaf9bb73288ea192&oe=57AF5C03&__gda__=1470213755_ab17c8c8e3a0a447fed3f272fa2179ce",  
  "locale": "en_US",  
  "timezone": -7,  
  "gender": "male",  
}
```
```

If the app is unable to access the person’s profile, an empty object is returned.

## See Also

* [Messenger Platform Error Codes](https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes)
