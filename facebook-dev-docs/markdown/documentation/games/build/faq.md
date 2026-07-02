---
title: "FAQ"
source_url: https://developers.facebook.com/documentation/games/build/faq
---

# FAQ

Updated: Mar 25, 2026

## Player Onboarding

### How do players enter a Zero Permissions game? Is there a consent screen?

Under Zero Permissions, Meta does not share user data that requires explicit consent. The first time a player opens any Instant Game, they complete a one-time setup where they choose their profile type and visibility settings. After that, players enter games immediately — there is no per-game login or consent dialog.

### What player data can my game access?

Your game receives a game-scoped player ID from `FBInstant.player.getID()` and can access the context ID from `FBInstant.context.getID()`. These identifiers support progress tracking, matchmaking, and context-based gameplay.

Player names and profile pictures are **not directly accessible** to your game code. To display this information, use [overlay views](https://developers.facebook.com/documentation/games/build/zero-permissions/overlay-view-components), which render player data in a Meta-controlled iframe.

### Can my game request consent to access player names and photos directly?

No. The Zero Permissions model does not support requesting consent for direct access to identifying information. All player-visible data (names, photos) must be displayed through overlay views. This is a fundamental privacy design decision, not a limitation that can be opted out of.

## Overlay Views

### What are overlay views?

Overlay views are Meta-controlled iframes embedded in your game's UI. You define the layout using XML, and Meta renders the content — including player names, photos, and other profile data — securely inside the iframe. Your game positions the iframe but never receives the actual player data.

See [Overlay View Components](https://developers.facebook.com/documentation/games/build/zero-permissions/overlay-view-components) for the full XML syntax reference.

### How do I display a friend's name and photo in my game?

* Call `FBInstant.player.getConnectedPlayersAsync()` to get a list of friend player IDs.
* Create an overlay view that references those IDs using template expressions like `].name}​}` and `].photo}​}`.
* Attach the overlay iframe to a DOM element in your game.

See [Connected Players](https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/connected-players) for complete implementation examples.

### Can I display players who are not friends with the current player?

Yes. Overlay views can render any player's information by referencing their player ID with `].photo}​}` and `].name}​}`. The target player does not need to be connected to or share a context with the current player.

This is how you build custom leaderboards or matchmaking UIs. See [Arbitrary Player Rendering](https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/arbitrary-player) for details.

### How do I build a leaderboard with player names and photos?

The built-in Global Leaderboards API is deprecated for Zero Permissions games. Instead, implement leaderboards using your own backend server:

* Submit scores from your game client to your server (verify identity with `getSignedPlayerInfoAsync()`).
* Fetch ranked entries from your server, which returns player IDs and scores.
* Pass the player IDs to an overlay view, which renders names and photos using `]}​}`.

See [Global Leaderboards](https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/global-leaderboards) for the full implementation guide.

## Social Features

### How do in-game friend lists work under Zero Permissions?

You retrieve friend player IDs using `FBInstant.player.getConnectedPlayersAsync()`, then render friend information using overlay views. You have several architectural options:

* **Single overlay with a `For` loop** — One iframe renders the entire list.
* **Individual overlays per row** — One iframe per friend, mixed with your own UI elements.
* **Custom player list** — Pass filtered/sorted player IDs as data to a single overlay.

See [Example Game Use Cases](https://developers.facebook.com/documentation/games/build/zero-permissions/example-game-use-cases) for complete implementations of each approach.

### How do I handle complex leaderboards or matchmaking with non-connected players?

Use overlay views to render arbitrary player profiles given their player IDs. Fetch ranked data or matchmaking results from your own backend, then pass the player IDs to an overlay with a `For` loop, or create individual overlay iframes per player for more layout control.

See [Arbitrary Player Rendering](https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/arbitrary-player).

## Migration

### Can I test Zero Permissions without affecting my live game?

Yes. You can mark your game as Zero Permissions and upload a separate test bundle without impacting your current production bundle. You control the rollout completely:

* Upload a Zero Permissions-compatible bundle to the Web Hosting page.
* Toggle the NEZP environment to test the bundle yourself.
* When ready, use the rollout percentage control to gradually migrate production users.

No production traffic shifts until you explicitly set a rollout percentage. See [App Onboarding and Migration](https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/overview) for the full process.

### What user data must I delete when migrating to Zero Permissions?

You must delete any copies of personally identifiable information that your game previously obtained from Facebook, including:

* Player names
* Player profile pictures
* Friend names
* Friend profile pictures

You **may keep** player IDs and gameplay data (scores, progress, purchases). You have a 14-day window after migration begins to complete the deletion.

See the [Data Deletion section](https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/overview#confirm-data-deletion) of the migration guide for details.

### Why don't I need advanced permissions after migrating?

Previously, gaming apps needed advanced permissions like `gaming_profile`, `gaming_user_picture`, and `user_friends` to access social features. Under Zero Permissions, those social play experiences are handled by Meta through overlay views — your game never directly accesses the underlying data. Since there is no direct data access, there are no permissions to request.

The only permission you need is **Instant Games Zero Permissions Access**, which you request through App Review.

### Do player IDs change when I migrate?

No. The game-scoped player ID from `FBInstant.player.getID()` remains the same for each player after migration. Player progress keyed by this ID is preserved.

However, if you previously used App-Scoped User IDs (ASIDs) from Facebook Login, note that new Zero Permissions-only users will not have ASIDs. Use the game-scoped player ID as your primary identifier going forward.

## Technical

### Does Zero Permissions work on all platforms?

Zero Permissions games run on Facebook (web and mobile app) and Messenger. For Messenger Calls specifically, see the [Messenger Calls section](https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/overview#network-enabled-zero-permissions-for-messenger-calls) in the migration guide for platform version requirements.

### Can I use images from my CDN in overlay views?

No. Overlay views can only load images from your game bundle (relative paths), player photo template expressions, or base64 data URLs passed via `initialData`. External CDN URLs are not supported.

To work around this, fetch the image in your game's JavaScript, convert it to base64, and pass it as a data parameter. See the [Image component reference](https://developers.facebook.com/documentation/games/build/zero-permissions/components#allowed-image-sources) for details.

### Are overlay images cached between updates?

No. Every call to `updateAsync()` triggers a full re-render, and all images are re-fetched — even if their source has not changed. To minimize this overhead:

* Throttle updates to meaningful state changes.
* Separate static overlays (large, infrequently updated) from dynamic overlays (small, frequently updated).
* Reuse overlays with `updateAsync()` + `showAsync()` instead of creating new ones. `dismissAsync()` only hides the overlay — it does not free memory.

### Can I use `position: absolute` in overlay views?

There is a known issue where `position: absolute` can cause rendering problems in overlay views. Use `position: relative` with flexbox layouts as a workaround.

### Where can I find sample code?

A repository of sample overlay view XMLs and integration code is available on GitHub: [fbsamples/fbinstant-nezp-samples⁠](https://github.com/fbsamples/fbinstant-nezp-samples).

For Unity developers, the [Unity Plugin⁠](https://github.com/facebook/meta_instant_games_unity_plugin) provides C# wrappers, editor tools, and a demo scene. See the [Unity Plugin documentation](https://developers.facebook.com/documentation/games/sdk-reference/unity-plugin).

## Next Steps

* **[Zero Permissions Overview](https://developers.facebook.com/documentation/games/build/zero-permissions/overview)** — Full introduction to Zero Permissions.
* **[App Onboarding and Migration](https://developers.facebook.com/documentation/games/build/zero-permissions/onboarding-and-migration/overview)** — Step-by-step setup for new and existing apps.
* **[Overlay Preview Tool](https://developers.facebook.com/documentation/games/build/zero-permissions/overlay-preview-tool)** — Build and test overlay views interactively.
* **[API Reference](https://developers.facebook.com/documentation/games/build/zero-permissions/api-reference)** — Complete SDK v8.0 reference.
