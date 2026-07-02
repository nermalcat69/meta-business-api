---
title: "messaging_game_plays Webhook Event Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_handovers
---

# messaging\_game\_plays Webhook Event Reference

Updated: Aug 26, 2022

This callback occurs after a person played a round of Instant Games. To receive this event, you must subscribe to this callback by selecting the `messaging_game_plays` field when [setting up](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks#setup) your webhook.

```
{
  "sender": {
    "id": "PSID"
  },
  "recipient": {
    "id": "PAGE_ID"
  },
  "timestamp": 1469111400000,
  "game_play": {
    "game_id": "GAME-APP-ID",
    "player_id": "PLAYER-ID",
    "locale": "PLAYER-LOCALE",
    "context_type": "CONTEXT-TYPE:SOLO",
    "context_id": "CONTEXT-ID", # If a Messenger Thread context
    "score": SCORE-NUM, # If a classic score based game
    "payload": "PAYLOAD" # If a rich game
  }
}
```

## Fields

| `sender` Field | Description |
| --- | --- |
| `id` *string* | The Page-scoped ID for the person who sent a message to your business |

| `recipient` Field | Description |
| --- | --- |
| `id` *string* | The ID for your Facebook Page |

| `game_play` Field | Description |
| --- | --- |
| `context_id` *string* | The ID for the social context type if the type is not `SOLO`. This ID is in the Instant Game namespace. |
| `context_type` *string* | The social context of the game; `GROUP`, `SOLO`, `THREAD` |
| `game_id` *string* | The Meta app ID for the game |
| `locale` *string* | The locale for the player |
| `payload` *JSON object* | The JSON encoded object, set using `FBInstant.setSessionData()`. Only available for Rich Games |
| `player_id` *string* | The ID for the player in the Instant Game namespace. |
| `score` *integer* | The best score achieved by this playing during this round of game play. Only available to Classic score based games. |
