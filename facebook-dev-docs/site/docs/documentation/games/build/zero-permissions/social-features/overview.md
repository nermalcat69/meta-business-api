---
title: "Cross-play management"
source_url: https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/overview
---

# Cross-play management

Updated: Apr 21, 2026

If your game exists on multiple platforms — for example, as both an Instant Game and a native mobile app or Canvas Game — your players may have separate identities on each platform. The cross-play management tool in the App Dashboard lets you link these apps together so you can identify the same player across platforms and provide a seamless experience.

Once you link your apps, you can use `FBInstant.player.getAssociatedAppsASIDAsync()` in your Instant Game to retrieve the player's Application-Scoped IDs (ASIDs) for each linked app. This allows you to look up their existing account on your backend and merge their progress.

On the native app side, you can use the `ids_for_business` endpoint with the `instant_game_player_id` field to retrieve the player's Instant Games Player ID. See [Player Identification Post Migration](https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/player-identification-post-migration) for details on using `ids_for_business`.

## Prerequisites

Before you begin, make sure the following are in place:

* Your Instant Game and off-platform apps are registered under the same [Business](https://developers.facebook.com/docs/apps/business-manager) in the App Dashboard.
* You are an **administrator** or **developer** of the apps you want to link. Testers cannot access the cross-play management tool.
* Your Instant Game has the Instant Games product configured.

## Who can use this tool

The cross-play management card is visible in the App Dashboard for:

* Canvas Games with an added Instant Game product
* Canvas Games without an added Instant Game product
* Instant Games that already have associated apps

The card is **not** visible for Instant Games that have no associated apps and no Canvas Game history.

## Link your apps

### Step 1: Open the App Dashboard

Go to the [App Dashboard](https://developers.facebook.com/apps/) and select your Instant Game app.

### Step 2: Navigate to Audience Details

In the left sidebar, go to **Use Cases** > **Audience Details**. You will see the **Cross-play Management** card.

For applications using the canvas product, you will see the **Cross-play Management** card in the **Instant Games** > **Audience Details** section.

For applications using the older developer console, you will see the **Cross-play Management** card in the **Gaming Services** > **Audience Details** section.

### Step 3: Add linked apps

Click the card to begin linking apps. A dropdown will appear showing all apps in your business portfolio that are eligible to be linked.

> **Note:** If your app does not have a business assigned, you will see a warning: "You do not have a business ID assigned to this application." Assign a business to your app in the App Dashboard before proceeding.

Select one or more apps from the dropdown. Only apps that are not already linked to another Instant Game will appear.

### Step 4: Review and accept the attestation

After selecting your apps, an attestation form will appear. You must confirm that:

* The selected off-platform apps are the **same game** as your Instant Game.
* All listed apps are owned and operated by the same developer or business entity.
* You understand that Meta will enable sharing of the Instant Game player identifier (ASID) with each linked app through the `ids_for_business` API, solely for the purpose of allowing players to continue their game progress across platforms.
* You understand that these mappings **cannot be changed or undone** through this interface.

Check the agreement checkbox and click **Submit**.

### Step 5: Verify your linked apps

After submission, the card will display a list of all linked apps along with the attestation date. You can return to this page at any time to view your linked apps.

> **Important:** Once an app is linked, it cannot be removed through this interface. Make sure the apps you select are correct before submitting.

## Retrieve player identifiers across platforms

After linking your apps, you can use `FBInstant.player.getAssociatedAppsASIDAsync()` in your Instant Game to retrieve the player's ASIDs for each linked off-platform app.

```
FBInstant.player.getAssociatedAppsASIDAsync()  
  .then(function(associatedASIDs) {  
    // associatedASIDs is an array of objects:  
    // [{appID: '123', asid: 'abc'}, {appID: '456', asid: 'xyz'}]  
    associatedASIDs.forEach(function(entry) {  
      // Use entry.appID and entry.asid to match the player  
      // to their account in your backend for that app.  
      console.log(entry.appID, entry.asid);  
    });  
  });
```

If the player has no linked apps, the API returns an empty array.

On the native app side, you can use the `ids_for_business` endpoint with the `instant_game_player_id` field to retrieve the player's Instant Games Player ID. See [Player Identification Post Migration](https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/player-identification-post-migration) for details on using `ids_for_business`.

## Troubleshooting

| Issue | Solution |
| --- | --- |
| Cross-play management card is not visible | Verify that your app is a Canvas Game or an Instant Game with associated apps. Testers cannot access this tool — you must be an administrator or developer. |
| "No business ID assigned" warning | Assign a business to your app in the App Dashboard under **Settings** > **Basic**. |
| No apps appear in the dropdown | All apps in your business portfolio may already be linked. You can only link apps that you have admin or developer access to and that are not already associated with another Instant Game. |
| `getAssociatedAppsASIDAsync()` returns an empty array | Verify that you have linked apps in the cross-play management tool and that the player has played the linked app. |
