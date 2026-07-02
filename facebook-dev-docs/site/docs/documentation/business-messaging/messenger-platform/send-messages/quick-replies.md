---
title: "Persistent menu"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/quick-replies
---

# Persistent menu

Updated: Jun 17, 2026

The persistent menu allows you to create a menu of your business's main features — such as hours of operation, store locations, and products — that is always visible in a person's Messenger conversation with your business.

Set the persistent menu via the `persistent_menu` property of the [Messenger Profile API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api). The menu automatically appears in a thread if the person has been away for a certain period of time and returns.

The persistent menu is not supported when Messenger is accessed via the Facebook Mobile Browser (the in-app browser within the Facebook app).

If [commands](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api/commands) are set, they take priority over the persistent menu.

## Requirements

For the persistent menu to appear, the following must be true:

* The person must be running Messenger v106 or above on iOS or Android.
* The Facebook Page the Messenger bot is subscribed to must be published.
* The Messenger bot must be set to "public" in the app settings.
* The Messenger bot must have the `pages_messaging` permission.
* The Messenger bot must have a [Get Started button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen#set_postback) set.
* You must have the Administrator role for the Page associated with the bot.

## Supported buttons

The persistent menu uses an array of [buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons). The persistent menu supports the following button types:

* `web_url` — [URL button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/url)
* `postback` — [Postback button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/postback)

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `locale` | String | The locale for this menu configuration. At least one object in the `persistent_menu` array must specify `"locale": "default"`. This is the fallback menu if no object matches the user's locale. See [supported locales](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales). |
| `composer_input_disabled` | Boolean | Disables the Messenger composer field if set to `true`. The bot can only be interacted with via the persistent menu, postbacks, buttons, and webviews. Defaults to `false`. |
| `call_to_actions` | Array | An array of top-level `menu_item` objects for the persistent menu. Maximum of 20 items. Required if `composer_input_disabled` is `true`. |

### `menu_item` properties

| Property | Type | Description |
| --- | --- | --- |
| `type` | String | The type of menu item: `web_url` or `postback`. |
| `title` | String | Title to display on the menu item. 30 character limit. |
| `url` | String | URL to open when the button is tapped. Required if type is `web_url`. |
| `payload` | String | Data sent back to your webhook as a `messaging_postbacks` event. Required if type is `postback`. 1000 character limit. |
| `webview_height_ratio` | String | *Optional.* Height of the webview. Valid values: `compact`, `tall`, `full`. |
| `messenger_extensions` | Boolean | *Optional.* Must be `true` if the item type is `web_url` and the [Messenger Extensions SDK](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview) will be used in the webview. |
| `fallback_url` | String | *Optional.* URL to open in the webview for clients that do not support the Messenger Extensions SDK. If not defined, the `url` is used as the fallback. May only be specified if `messenger_extensions` is `true`. |
| `webview_share_button` | String | *Optional.* Set to `hide` to disable sharing in the webview (for sensitive info). |

## Set the persistent menu

To set the persistent menu, send a `POST` request to the [Messenger Profile API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api) to set the `persistent_menu` property. Up to 20 buttons are allowed in the `call_to_actions` array.

```
{
    "persistent_menu": [
        {
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [
                {
                    "type": "postback",
                    "title": "Talk to an agent",
                    "payload": "CARE_HELP"
                },
                {
                    "type": "postback",
                    "title": "Outfit suggestions",
                    "payload": "CURATION"
                },
                {
                    "type": "web_url",
                    "title": "Shop now",
                    "url": "https://www.originalcoastclothing.com/",
                    "webview_height_ratio": "full"
                }
            ]
        }
    ]
}
```

## Disable the composer

Disable the composer to make the persistent menu the only way for a person to interact with your Messenger bot. Disabling the composer is useful if your bot has a very specific purpose or set of options. Set `"composer_input_disabled": true` when you create the persistent menu.

## Localization

You may provide default and localized button text for the persistent menu that is displayed based on a person's locale. Specify a separate object in the `persistent_menu` array for each locale, setting the `locale` property to a [supported locale](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales):

```
{  
  "locale": "default",  
  "call_to_actions": [...]  
},  
{  
  "locale": "zh_CN",  
  "call_to_actions": [...]  
}
```

## User-level menu

You can override the Page-level persistent menu with a user-level setting. This allows your app to dynamically control the buttons on the menu and the visibility of the composer for each user.

To enable or disable the user-level setting, use the `custom_user_settings` endpoint. This endpoint supports POST, GET, and DELETE calls. A `psid` parameter is needed to indicate the user that this override applies to.

The user-level persistent menu updates happen in real time, while Page-level persistent menu updates can take up to 24 hours.

User-level settings are rate limited to 10 calls per user per 10 minutes.

### Set user-level menu

```
curl -X POST "https://graph.facebook.com/<LATEST_API_VERSION>/me/custom_user_settings" \
  -H "Content-Type: application/json" \
  -d '{
    "psid": "<PSID>",
    "persistent_menu": [
      {
        "locale": "default",
        "composer_input_disabled": false,
        "call_to_actions": [
          {
            "type": "postback",
            "title": "Talk to an agent",
            "payload": "CARE_HELP"
          },
          {
            "type": "postback",
            "title": "Outfit suggestions",
            "payload": "CURATION"
          },
          {
            "type": "web_url",
            "title": "Shop now",
            "url": "https://www.example.com/",
            "webview_height_ratio": "full"
          }
        ]
      }
    ]
  }' \
  -F "access_token=<PAGE_ACCESS_TOKEN>"
```

### Get user-level menu

Retrieves the current user and Page-level settings. If there are no user-level settings, only the Page-level settings are returned.

```
curl -X GET "https://graph.facebook.com/<LATEST_API_VERSION>/me/custom_user_settings?psid=<PSID>&access_token=<PAGE_ACCESS_TOKEN>"
```

### Delete user-level menu

Removes the user-level settings, leaving the Page-level menu if set.

```
curl -X DELETE "https://graph.facebook.com/<LATEST_API_VERSION>/me/custom_user_settings?psid=<PSID>&params=[%22persistent_menu%22]&access_token=<PAGE_ACCESS_TOKEN>"
```

## Rate limits

## Rate Limit

Calls to the Messenger Profile API are limited to 10 API calls per 10 minute interval. This rate limit is enforced per Page.

Meta limits user-level menu calls to 10 API calls per user per 10-minute interval and enforces this rate limit per Page.

## Best practices

* Use the menu for entry points into your bot's functionality.
* Be descriptive — your menu lets people know what your bot can do.
* Limit menu items to 5 for the best user experience.
* Do not expect the menu to contain user-specific data. It is the same for everyone who uses your bot, though it can be localized.
* Do not put a "Menu" button in the menu that sends the user a message containing a menu. Put that content directly in the menu.
* Do not put generic actions like "Restart" in the menu.
* Do not use prime menu real estate for secondary info like about, terms of service, or privacy policy.

## Learn more

### Developer Support

* Use the [Meta Status tool⁠](https://metastatus.com/) to check for the status and outages of Meta business products.
* Use the [Meta Developer Support tool](https://developers.facebook.com/support) to report bugs and view reported bugs, get help with Ads or Business Manager, and more.
