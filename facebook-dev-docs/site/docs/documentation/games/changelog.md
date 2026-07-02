---
title: "Cross Play"
source_url: https://developers.facebook.com/documentation/games/changelog
---

# Cross Play

Updated: Mar 3, 2026

> **ARCHIVED** -- Cross Play has been archived and is no longer actively supported.

## What was Cross Play?

Cross Play was a framework that allowed games to work across multiple Facebook gaming platforms -- Instant Games, Cloud Games, and native (mobile/PC) platforms -- with a unified player identity. It provided a single identity system so that a player’s progress, social connections, and game state could persist regardless of which platform the player used.

With Cross Play, a developer could build a game that ran as an Instant Game on mobile, as a Cloud Game for high-fidelity streaming, and as a native app, all sharing the same player account, progress, and social graph.

## How Cross Play worked

### Unified player identity

At the core of Cross Play was a unified identity system. When a player logged in on any supported platform, Cross Play ensured that:

* The player was recognized as the same person across all platforms.
* Game progress (levels, achievements, virtual currency) was synchronized.
* Social features (friends, leaderboards, challenges) worked consistently regardless of platform.

### Platform abstraction

Cross Play provided an abstraction layer that handled platform-specific differences:

* **Authentication**: A single login flow that worked across Instant Games (web-based), Cloud Games (streamed), and native apps.
* **Social graph**: Consistent access to the player’s gaming friends across all platforms.
* **Entitlements**: Virtual goods and purchases made on one platform could be accessible on others.
* **Leaderboards and achievements**: Shared across all platform versions of the game.

### Developer integration

Developers integrated Cross Play by:

* Registering their game for multiple platforms in the Facebook App Dashboard.
* Using the Cross Play SDK alongside the platform-specific SDKs (Instant Games SDK, Cloud Games SDK, or Facebook SDK for native apps).
* Implementing server-side synchronization for game state and progress.
* Handling platform-specific differences in input, rendering, and capabilities through their own game code.

## Why was Cross Play archived?

Cross Play was archived primarily because the platforms it was designed to bridge are no longer all active:

* **Cloud Games were discontinued**: With the wind-down of the Cloud Games program, one of the three legs of the Cross Play framework was removed.
* **Platform consolidation**: As Facebook focused its gaming efforts on Instant Games, the need for a cross-platform identity framework diminished.
* **Simplified architecture**: Maintaining a cross-platform abstraction layer added complexity for both Facebook and developers. With a single primary platform (Instant Games), this complexity was no longer justified.

## Historical overview

* **2019-2020**: Cross Play was introduced alongside the Cloud Games program to provide a unified gaming experience across Facebook’s multiple gaming platforms.
* **2020-2021**: A limited number of developers integrated Cross Play to offer their games on multiple Facebook gaming platforms simultaneously.
* **2022**: Following the discontinuation of Cloud Games, Cross Play was archived.

## Current alternatives

For developers who need cross-platform functionality today:

* **Instant Games** supports both mobile and desktop web experiences through a single HTML5 build. Players can access the same game on their phone or computer through Facebook.
* **Server-side player accounts**: Developers can implement their own server-side account system to synchronize player progress across different game clients (for example, an Instant Game and a native mobile app), independent of any Facebook framework.

## Related resources

* [Instant Games Overview](https://developers.facebook.com/documentation/games/overview) - Learn about the current gaming platform.
* [Cloud Games (Archived)](https://developers.facebook.com/documentation/games/archive/cloud-games) - Historical documentation on Cloud Games.
* [Facebook Login for Gaming (Archived)](https://developers.facebook.com/documentation/games/archive/facebook-login-for-gaming) - Historical documentation on the gaming-specific login flow.
