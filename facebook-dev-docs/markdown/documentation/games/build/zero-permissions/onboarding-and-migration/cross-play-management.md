---
title: "Player Identification Post Migration"
source_url: https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/cross-play-management
---

# Player Identification Post Migration

Updated: Apr 21, 2026

When you migrate from Canvas Games to Instant Games, the player identifiers change. Understanding how these identifiers relate to each other is essential for maintaining a consistent player experience across platforms.

## Understanding Player IDs and ASIDs

Instant Games and Canvas Games use different identifiers for players:

* **Instant Games Player ID** — Returned by `FBInstant.player.getID()`. This is the primary identifier used throughout the Instant Games SDK and should be used for all player identification within your Instant Game. It is unique per player per game.
* **Application-Scoped ID (ASID)** — The identifier used in Canvas Games and other off-platform versions (such as native mobile apps using Facebook Login). The ASID is unique per player per app and is the same identifier your Canvas Game received as the user ID.

These two identifiers are different values for the same player. The Instant Games platform provides APIs to map between them, enabling you to re-identify players across platforms.

## Scenario 1: Player plays the Canvas or native mobile version first, then plays the Instant Game

If a player has already been playing your Canvas Game or native mobile app and then launches the Instant Games version, you can retrieve their ASID from within the Instant Game to match them to their existing account.

Use `FBInstant.player.getASIDAsync()` to retrieve the player’s ASID:

```
```
FBInstant.player.getASIDAsync()  
  .then(function(asid) {  
    // This ASID matches the user ID your Canvas Game  
    // or native mobile app received for this player.  
    // Use it to look up the player's existing account  
    // in your backend and link it to their Instant Games  
    // Player ID.  
    var instantGamesPlayerID = FBInstant.player.getID();  
    linkAccounts(instantGamesPlayerID, asid);  
  });
```
```

This allows you to look up the player in your existing backend using the ASID, retrieve their saved progress and purchases, and associate that data with their Instant Games Player ID going forward.

## Scenario 2: Player plays the Instant Game first, then plays a native mobile version

If a player starts with your Instant Game and later installs your native mobile app (the Canvas version would no longer be available after migration), you can retrieve their Instant Games Player ID from the Graph API.

When the player logs in to your native mobile app with Facebook Login, call the `ids_for_business` endpoint and request the `instant_game_player_id` field:

```
GET /me/ids_for_business?fields=id,app{id,name},instant_game_player_id
```

The response includes the ASID and the Instant Games Player ID for each app owned by your business:

```
```
{  
  "data": [  
    {  
      "id": "67890",  
      "app": {  
        "id": "YOUR_APP_ID",  
        "name": "YOUR_APP_NAME"  
      },  
      "instant_game_player_id": "12345"  
    }  
  ]  
}
```
```

In this response:

* `id` is the ASID for that app.
* `app` is the data related to the app.
* `instant_game_player_id` is the Instant Games Player ID, which matches the value returned by `FBInstant.player.getID()` in the Instant Game.

Use the `instant_game_player_id` to look up the player’s Instant Games data in your backend and link it to their native mobile app account.

> **Note:** The `instant_game_player_id` field requires your app to have the `gaming_crossplay_eligible` capability enabled and an Instant Games product configured. It is not included in the default response fields — you must explicitly request it.
