---
title: "The Persistent Menu"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/private-replies
---

# The Persistent Menu

Updated: Jun 24, 2026

This document shows you how to programmatically add the Persistent Menu to your Instagram messaging experience.

## How it works

The Persistent Menu allows you to create and send a menu of the main features of your business, such as hours of operation, store locations, and products, is always visible in a person’s Messenger conversation with your business.

When a person clicks an item in the menu, Meta sends a `postback` webhook notification to your server with information about which item the person selected and by whom, and the standard messaging window opens. You have 24 hours to respond to the person after the CTA.

![Persistent menu shown at the bottom of an Instagram conversation](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/642829238_1445181504007166_6529618091703762289_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=oZi7AtZkL2UQ7kNvwFk1Bf4&_nc_oc=AdqXP1J-Ln_kuisEiMW6YQO8KBdt0k8nt18e1VudtGs0gSUfW06QJPmZJna2zSrF8ikRj0aDfd_heH_fjoy409Tk&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=NdkR1h-ObTtSeEEucAC7AA&_nc_ss=7b289&oh=00_AQCm7FgCCUJ9SJIMkU_2OCXyO93dq_w31yexMfuZExx4ww&oe=6A607F39)

## Limitations

* A menu is not updated in real time
  * Existing conversations will not see an updated menu unless a person refreshes their inbox; new conversations will see updated menus. Be sure your app can handle deprecated menu items.
* The `composer_input_disabled` parameter is not available
* The `webview_height_ratio` parameter is not available
* You cannot customize a menu based on the recipient’s Page-scoped ID (PSID)

## Requirements

For the persistent menu to appear, the following criteria must be satisfied:

* You are running Messenger API support for Instagram v226 or above on iOS or Android.
* You have set up your Instagram professional account, Page, Developer account, and app to [successfully call Messenger API support for Instagram](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/get-started).

## Supported buttons

The persistent menu is composed of an array of [buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons). The following button types are supported in the persistent menu:

* `web_url`: Specifies the item is a [URL button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons).
* `postback`: Specifies the item is a [postback button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons).

## Setting the persistent menu

To set the persistent menu, send a `POST` request to the [Messenger Profile API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api) to set the `persistent_menu` property.

**Note:** To view recent changes to the persistent menu within the Instagram app, go to the messages inbox and swipe down to refresh.

```
curl -X POST -H "Content-Type: application/json" -d
'{
    "persistent_menu": [
        {
            "locale": "default",
            "call_to_actions": [
                {
                    "type": "postback",
                    "title": "Talk to an agent",
                    "payload": "CARE_HELP"
                },
                {access_token=<ACCESS_TOKEN>
                    "type": "postback",
                    "title": "Outfit suggestions",
                    "payload": "CURATION"
                },
                {
                    "type": "web_url",
                    "title": "Shop now",
                    "url": "https://www.originalcoastclothing.com/"

                }
            ]
        }
    ]
}' "https://graph.facebook.com/v25.0/me/messenger_profile?platform=instagram&access_token=<ACCESS_TOKEN>"
```

## Localization

You may provide default and localized button text for the persistent menu that will be displayed based on a person’s locale.

To do this, specify separate objects in the `persistent_menu` array for each locale by setting the `locale` property to a [supported locale](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales):

```
{
  "locale":"default",
  "call_to_actions":[...]
},
{
  "locale: "zh_CN",
  "call_to_actions":[...]
}
```

## Request examples

### GET request

```
curl -X GET "https://graph.facebook.com/v12.0/me/messenger_profile?fields=persistent_menu&platform=instagram"
```

Result

```
{
    "data": [
      {
        "persistent_menu": [
            {
              "locale": "default",
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
                      "url": "https://www.originalcoastclothing.com/"

                  }
              ]
            }
        ]
      }
  ]
}
```

### DELETE request

```
curl -X DELETE "https://graph.facebook.com/v12.0/me/messenger_profile?fields=["persistent_menu"]&platform=instagram"
```

## Best practices

Just like with buttons, menu items can produce a webview or postback.

✅ Use the menu as entry points for your Page’s main features.

✅ Be descriptive: your menu lets people know what your Page’s features are. The menu instantly lets users know how they can interact with your Page.

✅ Be selective: limit menu items to 5 for best user experience.

❌ Don’t expect the menu to contain user-specific data. The menu can be localized, but will not contain user-specific data.

❌ Don’t put a “Menu” button in the menu that sends the user a message containing a menu. Just put that content directly in the menu — that’s what it’s for!

❌ Don’t put generic actions like “Restart” in the menu.

❌ Don’t use the most prominent menu positions for secondary information like *about*, *terms of service*, *privacy policy*, or *powered by*. These take focus away from the core features of your Page.

### Developer Support

* Use the [Meta Status tool⁠](https://metastatus.com/) to check for the status and outages of Meta business products.
* Use the [Meta Developer Support tool](https://developers.facebook.com/support) to report bugs and view reported bugs, get help with Ads or Business Manager, and more.
