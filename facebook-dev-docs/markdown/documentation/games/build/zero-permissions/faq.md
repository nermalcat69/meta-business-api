---
title: "Notifications"
source_url: https://developers.facebook.com/documentation/games/build/zero-permissions/faq
---

# Notifications

Updated: Mar 25, 2026

Notifications let you reach players outside of active game sessions — to bring them back for a new challenge, notify them that it is their turn, or re-engage lapsed players. Under Zero Permissions, the notification system uses **player IDs** (instead of App-Scoped User IDs) and **app access tokens** (instead of user access tokens), making it simpler and more consistent with the rest of the SDK.

## How Notifications Are Delivered

Notifications can reach players through three channels. Facebook automatically filters notifications to prevent spam — not every notification you send will be delivered to every channel.

| Channel | Description |
| --- | --- |
| **Messenger bot message** | Delivered as a bot message if your game has a configured bot and the player has subscribed to it. |
| **Facebook Jewel** | Appears in the Facebook notification bell (the “jewel” icon in the top navigation). |
| **Gaming Tab** | Appears in the Facebook Gaming Tab notification area. |

![Messenger bot notification](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/655811940_1465974388594544_8601201898754809413_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wYk0_oOHaQUQ7kNvwGJsjP7&_nc_oc=AdpMoKJDdGLRSp8Q_aJ5GPMkUQsE0_xW0JLdSMEfxPj1v59qGY040na1sJrI2lDX0y9Ng5ltmOMLDNQ7ATvQBGR0&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=e4rDptUypR8y5sj4YINDkw&_nc_ss=7b289&oh=00_AQCkkR-UWGU5nsa3YQIGP1KrC8EyWFLHQolGh6sbdnHKWw&oe=6A6076D1)![Facebook Jewel notification](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/655973094_1465974408594542_5758783850702550237_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cy9IZHgKbAgQ7kNvwGZ3XUB&_nc_oc=AdoqrwGJG9X8tmTreCR7d4yjWjsriUhiOoWI_mSjjQTjlzqqeUTAgMyb1ohSkwSIP5B03R7RZPE_vu_QpAAhdPMw&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=e4rDptUypR8y5sj4YINDkw&_nc_ss=7b289&oh=00_AQDxeDoNGRNrYTIGRZY_9VVHh83Mq61wtig0V4fJ03wMNQ&oe=6A6083FE)![Gaming Tab notification](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/657674994_1465974405261209_4347021933097550602_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=QGR75u_xJrAQ7kNvwF2bV61&_nc_oc=Adpg1mrpwdiIVikPVqyNrJHVxTotmfq1Rifzgiw5ckVs8UEjywg_-L7kAVk9ss2vioEWLWYogTJbGtJ6oo4yb48s&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=e4rDptUypR8y5sj4YINDkw&_nc_ss=7b289&oh=00_AQBAo2vyZxypEVeEvLWmVSAytl89GzrS5N4e1fxicgOqKA&oe=6A608A65)

## Sending Notifications

All notification APIs use the Gaming Domain Graph API at `graph.fb.gg` with an app access token. Request bodies must be JSON-formatted.

### Send a Notification

**Endpoint:**`POST graph.fb.gg/{app_id}/notifications`

**Headers:**

```
Content-Type: application/json
```

**Query parameter:**`access_token={app_access_token}`

**Body parameters:**

| Parameter | Required | Description |
| --- | --- | --- |
| `player_id` | Yes | The player’s game-scoped ID (from `FBInstant.player.getID()`). |
| `message` | Yes | Content object with `title`, `body`, and optional `media_url`. |
| `label` | No | A label to group similar notification types. Used for filtering when cancelling. |
| `payload` | No | Custom data attached to the game URL. When the player taps the notification, this data is accessible in the launched game session. |
| `schedule_interval` | No | Delay in seconds before delivery. Range: 300–2,592,000 (5 minutes to 30 days). Maximum 5 pending scheduled notifications per recipient. |
| `bot_message_payload_elements` | No | Advanced bot message XMA configuration for richer Messenger bot messages. |

**Example request:**

```
curl -X POST "https://graph.fb.gg/{app_id}/notifications?access_token={app_access_token}" \
  -H "Content-Type: application/json" \
  -d '{
    "player_id": "8504197016307157",
    "message": {
      "title": "Your turn!",
      "body": "Your opponent just played. Come back and take your turn!",
      "media_url": "https://example.com/images/notification.png"
    },
    "label": "turn_reminder",
    "payload": "{\"contextID\": \"abc123\"}"
  }'
```

### Schedule a Notification

To send a notification with a delay, include the `schedule_interval` parameter:

```
```
{  
  "player_id": "8504197016307157",  
  "message": {  
    "title": "We miss you!",  
    "body": "Your daily challenge is waiting. Come back and play!"  
  },  
  "label": "daily_challenge",  
  "schedule_interval": 86400  
}
```
```

This schedules the notification for delivery 24 hours (86,400 seconds) later. You can have at most 5 pending scheduled notifications per recipient.

### Cancel Scheduled Notifications

**Endpoint:**`POST graph.fb.gg/{app_id}/notifications_cancel_all`

| Parameter | Required | Description |
| --- | --- | --- |
| `player_id` | Yes | The player whose scheduled notifications should be cancelled. |
| `label` | No | If provided, only cancels notifications with this label. If omitted, cancels all pending scheduled notifications for the player. |

**Example — cancel all scheduled notifications for a player:**

```
curl -X POST "https://graph.fb.gg/{app_id}/notifications_cancel_all?access_token={app_access_token}" \
  -H "Content-Type: application/json" \
  -d '{
    "player_id": "8504197016307157"
  }'
```

**Example — cancel only turn reminders:**

```
```
{  
  "player_id": "8504197016307157",  
  "label": "turn_reminder"  
}
```
```

## Setting Up Bot Messages (Optional)

To enable richer notifications through Messenger bot messages:

* Create a game bot on the [App Dashboard](https://developers.facebook.com/apps/).
* Request `pages_messaging` permissions through App Review.
* Players subscribe to your bot via `FBInstant.player.subscribeBotAsync()` in your game.

A webhook is no longer required for bot message delivery. Once the bot is configured and a player is subscribed, notifications automatically include bot messages in Messenger.

## Migration from Existing Notification APIs

If you previously used the App-to-User Notifications Graph API with App-Scoped User IDs:

* **Existing APIs continue to work** for players who have App-Scoped User IDs.
* **New Zero Permissions-only users** do not have App-Scoped User IDs, so the existing API cannot reach them.
* **Recommendation:** Migrate to the new `graph.fb.gg` endpoint with player IDs to ensure you can notify all users, regardless of when they started playing.

## Next Steps

* **[Custom Updates, Invites, and Shares](https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/custom-updates-invites-shares)** — In-session sharing and updates via the SDK.
* **[API Reference](https://developers.facebook.com/documentation/games/build/zero-permissions/api-reference)** — Full SDK reference including bot subscription methods.
* **[App Onboarding and Migration](https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/overview)** — Setup guide for configuring your app.
