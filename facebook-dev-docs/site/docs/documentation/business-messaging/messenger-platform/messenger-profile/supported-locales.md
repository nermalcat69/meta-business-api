---
title: "commands Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales
---

# commands Reference

Updated: Jan 11, 2024

Commands are tappable keywords that a user can invoke at any time to perform specific actions within the Messenger experience. Users can invoke multiple commands in a single message. For example, if your travel assistant supports commands such as **flights** and **hotels**, a message from a user might be, "Help me book **flights** and **hotels** to Mexico for the last week of December." Messenger automatically highlights the commands in the composer as the user taps them. These commands then trigger a [webhook](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messages) to send the list of commands invoked by the user. Only the command name(s) will be sent to your app via webhook. Your app can then use the webhook as confirmation of the user's intent to run a command, and parse the message text appropriately.

![Messenger Commands menu listing flights, hotels, currency, and weather above the composer](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/643444790_1445181547340495_1812315071955543768_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RIP_W-w9OgMQ7kNvwFZyTIN&_nc_oc=Adp29_gqf5h8q-dvGEAazd1mU1xTQTPoCIkm8DAn-1rrDPJtY39PDlSiO5fWTOZYXHa_OWYFAhOTQ-6AVdOT8qv-&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=ZLvo22fdTQ8oscI7BcYA3w&_nc_ss=7b289&oh=00_AQA7sxuRsF4zeU4e5yakZebH1u3UTbz3YMLxzHdPsxglRw&oe=6A606F8C)

![Typing a slash in the Messenger composer shows the command list with keyboard open](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/642846692_1445181514007165_8330696329476061990_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=OzJE2Ut19DwQ7kNvwEnV4kr&_nc_oc=AdpvirAqmdLviaVKFemVe6e14d9PS9q9EvBtSx1qdkfRLqMXgCU2lMgYzHpzY0ux-KdtFdDRQEhWbxe76W9G7ad7&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=ZLvo22fdTQ8oscI7BcYA3w&_nc_ss=7b289&oh=00_AQDzEcR6inJZgKmSzNHkemy6FFVXXTJ1pGIeWPXTKDcCAA&oe=6A607EC4)

![Popover bubble above the composer showing the 'flights' command as the user types Flig](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/641350442_1445181420673841_4742531359156181903_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=SUnZK7PMVgkQ7kNvwEggVfm&_nc_oc=Adr89Oo6wI3Fe9qvo5aAcPPLDdjU5m_-1YPuadUdKEz8y8e08bWl86ndVzd_WS0txfioCqRd8tJbAC2502M6hx79&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=ZLvo22fdTQ8oscI7BcYA3w&_nc_ss=7b289&oh=00_AQB1Tsybyu7wx5F33YrAG8DF0qDEwgMDCHbnv6vrrgTEZA&oe=6A605911)

Users can invoke commands in three ways, as seen in the screenshots above:

* From the Commands menu, which is a static menu accessed by tapping a hamburger menu icon next to the composer
* By typing a forward slash or @ in the composer
* From a "popover" above the composer, which is a bubble with a single command that will show up when the user types a word that is also a command supported by your Messenger experience

The Commands menu appears automatically when you set up Commands. No further action is needed on your part.

A key difference between Commands and the Persistent Menu is that tapping a Persistent Menu item sends the keyword to the thread, whereas tapping a Command sends the command to the composer, allowing the user to add additional context.

## `commands` Format

```
"commands": [  
  {  
    "locale": "default",  
    "commands": [  
      {  
        "name": "flights",  
        "description": "Find real-time flights and fares"  
      },  
      {  
        "name": "hotels",  
        "description": "Find real-time hotel rooms and rates"  
      },  
      {  
        "name": "currency",  
        "description": "Find real-time currency exchange rates"  
      },  
      {  
        "name": "weather",  
        "description": "Find real-time weather reports and forecasts"  
      }  
    ]  
  }  
]
```

## Localization

You may provide default and localized commands, to be displayed based on the user's locale. To do this, specify a separate object in the `commands` array for each locale. To specify the locale for each object, set the `locale` property to a [supported locale](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales):

```
"commands": [  
  {  
    "locale": "default",  
    "commands": [...]  
  },  
  {  
    "locale": "zh_CN",  
    "commands": [...]  
  }  
]
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `locale` | String | Locale of the `commands` array. The corresponding array of commands will be displayed when the user's locale matches the provided locale.   You must at least specify commands for the default locale, which will be displayed if no provided locale matches the user's locale.   See the [list of supported locales](https://developers.facebook.com/documentation/business-messaging/messenger-platform/messenger-profile/supported-locales) |
| `commands` | Array<`command`> | An array of commands to display to users in the provided locale.   The array should contain a minimum of 1 and a maximum of 100 commands. |

### `command` object

| Property | Type | Description |
| --- | --- | --- |
| `name` | String | The name of the command. Keep it short and easy for users to remember. The command should not begin with a `/` (slash character).   Minimum of 1 and maximum of 32 characters. |
| `description` | String | Description of the command. Use the description to educate users about what the command does and how to use it.   Minimum of 1 and maximum of 64 characters. |

## Example API calls

### Example GET request

```
curl -X GET "https://graph.facebook.com/v25.0/me/messenger_profile?fields=commands&access_token=<PAGE_ACCESS_TOKEN>"
```

### Example response

```
{  
  "data": [  
    {  
      "commands": [  
        {  
          "locale": "default",  
          "commands": [  
            {  
              "name": "flights",  
              "description": "Find real-time flights and fares"  
            },  
            {  
              "name": "hotels",  
              "description": "Find real-time hotel rooms and rates"  
            },  
            {  
              "name": "currency",  
              "description": "Find real-time currency exchange rates"  
            },  
            {  
              "name": "weather",  
              "description": "Find real-time weather reports and forecasts"  
            }  
          ]  
        }  
      ]  
    }  
  ]  
}
```

### Example POST request

The following POST request could be used to set or update commands.

```
curl -X POST -H "Content-Type: application/json" -d '{
    "commands": [
        {
            "locale": "default",
            "commands": [
                {
                    "name": "flights",
                    "description": "Find real-time flights and fares"
                },
                {
                    "name": "hotels",
                    "description": "Find real-time hotel rooms and rates"
                },
                {
                    "name": "currency",
                    "description": "Find real-time currency exchange rates"
                },
                {
                    "name": "weather",
                    "description": "Find real-time weather reports and forecasts"
                }
            ]
        }
    ]
}' "https://graph.facebook.com/v25.0/me/messenger_profile?access_token=<PAGE_ACCESS_TOKEN>"
```

### Example response

```
{  
    "result": "success"  
}
```

## Rate Limit

Calls to the Messenger Profile API are limited to 10 API calls per 10 minutes interval. This rate limit is enforced per Page.
