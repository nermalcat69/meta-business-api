---
title: "Notification Best Practices"
source_url: https://developers.facebook.com/documentation/games/retain/tournaments
---

# Notification Best Practices

Updated: Apr 1, 2026

This guide consolidates best practices across all Instant Games notification channels: [A2U API](https://developers.facebook.com/documentation/games/retain/notifications/a2u-api), [Notification Service](https://developers.facebook.com/documentation/games/retain/notifications/notification-service), and [Game Updates via Messenger](https://developers.facebook.com/documentation/games/retain/notifications/game-updates-messenger). Use it as a single reference for building an effective, player-friendly notification strategy.

For content formatting and quality criteria, see the [Notification Guidelines](https://developers.facebook.com/documentation/games/retain/notifications/notification-guidelines).

## General Principles

These best practices apply to every notification channel.

### Send Only When There Is a Reason

Every notification should have a clear, specific reason for being sent. If you cannot articulate why a particular player should receive a particular notification at a particular time, do not send it. “Come play our game” is never a good reason. “Your friend just beat your score” is.

### Make Every Notification Actionable

Every notification should give the player a clear, compelling reason to open your game. Weak: “Come back and play!” Strong: “Your daily reward is ready to claim!” or “Sarah just beat your high score -- can you take it back?” Strong notifications promise something specific.

### Personalize Content

Use the player’s name, their friends’ names, specific scores, level numbers, and game-state information to make notifications feel personal and relevant. Generic messages are easy to ignore. Personalized messages feel like they were sent just for the player.

* For A2U notifications, use the `@[{player_id}]` token for player names
* For Messenger messages, use game-state data from your backend to insert names, scores, and context
* For Notification Service, use personalization tokens in your message templates

### Respect Frequency

No matter which channel you use, do not over-notify. Players who feel spammed will mute or block your game, which is far worse than missing a re-engagement opportunity.

* No more than 1-2 notifications per day per player across all channels
* Fewer is usually better -- focus on quality over quantity
* Monitor opt-out rates as a signal that you are sending too many or too few relevant notifications
* Even for highly engaged players, limit notifications to 1-2 per day at most; for less engaged players, even fewer
* Track opt-out rates per notification type and reduce frequency for types with high opt-out rates

### Time Notifications Wisely

Send notifications at times when the player is most likely to be available. If you have data on when a player typically plays (e.g., from session timestamps), send notifications shortly before their usual play time. Avoid sending notifications in the middle of the night (respect time zones). A notification that arrives at the right moment feels helpful. A notification that arrives at 3 AM feels like spam.

### Provide Value

The best notifications are ones the player is glad they received. “Your energy is full” is valuable because it means the player can play without waiting. “A new tournament started” is valuable because it is a time-limited opportunity. “Come play our game” provides no specific value.

### Use Deep Links

Always include meaningful deep link data in your notifications. When a player taps a “Your energy is full” notification, they should land on the gameplay screen ready to play, not on the main menu where they have to navigate to start playing.

### Localize Your Messages

If your game has a global audience, localize notification messages to the player’s language. Notifications in the player’s language feel more personal and are more likely to be acted upon.

## Targeting and Segmentation

Not all players should receive the same notifications. Segment your player base and send targeted notifications.

### By Activity Level

* **Active players (played today):** Notify about new tournaments, limited-time events, or friend activity
* **Recently lapsed (2-3 days inactive):** “Your daily streak is about to reset!” or “Your energy is full”
* **Lapsed (7+ days inactive):** “We miss you! Here is a special comeback bonus”
* **Long gone (30+ days inactive):** Do not notify -- these players are unlikely to return from a notification alone

### By Game State

* Players stuck on a difficult level: “New power-ups available to help you past Level 12!”
* Players with expiring resources: “Your 3 bonus lives expire in 2 hours”
* Players approaching a milestone: “You are 50 points away from the weekly leaderboard top 10!”

### By Social Context

* Friends who beat each other’s scores: “Sarah just scored 2,450 and passed you!”
* Friends who joined a tournament: “Mike just joined the Weekend Challenge. Join now!”
* Friends who started playing: “Your friend Alex started playing! Say hello.”

## Testing and Optimization

### A/B Test Your Messages

Different message formats, tones, and triggers perform differently. Run A/B tests on:

* Message text (short vs. long, formal vs. casual)
* Timing (morning vs. evening, immediate vs. delayed)
* Trigger events (score beat vs. daily reward vs. tournament start)
* Call-to-action phrasing

### Monitor and Adapt

Track these metrics for all notification channels and use them to continuously refine your strategy:

* **Delivery rate:** What percentage of notifications are successfully delivered?
* **Click-through rate:** What percentage of delivered notifications result in the player opening the game?
* **Opt-out rate:** What percentage of players opt out after receiving notifications?
* **Return rate:** Of players who click through, how many play a session?
* **Block rate (Messenger):** Are players blocking or muting your bot?

### Test End-to-End

Test the complete notification flow: scheduling, delivery, tap-through, and in-game handling. Make sure deep linking works correctly and the in-game experience matches what the notification promised.

### Implement a Cooling-Off Period

After a player opts out and then opts back in (or after a policy warning), implement a cooling-off period where you send fewer, higher-quality notifications. Gradually increase frequency only if engagement remains positive.

## Channel-Specific Best Practices

### A2U API

These practices are specific to the [A2U (App-to-User) API](https://developers.facebook.com/documentation/games/retain/notifications/a2u-api).

* **Personalize aggressively.** Use the `@[{player_id}]` token, friends’ names, specific scores, level numbers, and any game-specific data.
* **Handle errors and rate limits gracefully.** Implement backoff logic and spread sends over time to avoid throttling.
* **Track per-player limits.** Facebook enforces per-player and per-app daily limits. Respect these to avoid notifications being rejected.
* **Mark opted-out players.** When you receive an opt-out error (error code 200), immediately remove the player from your notification list.
* **Time opt-in requests carefully.** Do not ask on first launch. Request opt-in after the player has had a positive experience (e.g., after completing first levels, achieving a personal best, or when explaining notification value).

### Notification Service

These practices are specific to the [Notification Service](https://developers.facebook.com/documentation/games/retain/notifications/notification-service).

* **Start simple.** Begin with one or two notification types (e.g., idle player reminder, daily reward) and measure effectiveness before adding more.
* **Cancel when no longer relevant.** If you scheduled an “energy full” notification and the player comes back early, cancel it. Receiving a notification for something that is no longer true erodes player trust.
* **Schedule at natural game moments.** Schedule notifications at the end of a game session or when a time-based mechanic starts, so the notification is tied to a specific event the player experienced.
* **Cancel and reschedule on session start.** A common pattern is to cancel pending notifications at the start of each session, then schedule new ones as the session ends.
* **Respect player preferences.** Consider offering in-game notification preferences (e.g., “Notify me about: friend activity, tournaments, daily rewards”) and honor those choices.

### Game Updates via Messenger

These practices are specific to [Game Updates via Messenger](https://developers.facebook.com/documentation/games/retain/notifications/game-updates-messenger).

* **Be conversational, not robotic.** Messenger is a conversational medium. Use casual language, acknowledge the player by name, and vary your messaging.
* **Respect the 24-hour window.** Send your most important messages within 24 hours of the player’s last interaction. For messages outside this window, use approved message tags like `GAME_EVENT`.
* **Use rich templates.** A message with an image and a “Play Now” button is far more engaging than plain text. Visual content stands out in the Messenger inbox.
* **Provide an opt-out path.** Always give players a way to stop receiving messages. Respond to “stop” or “unsubscribe” keywords.
* **Test with real accounts.** Test accounts cannot receive bot messages. Use real Facebook accounts added as testers or administrators for development testing.

## Using Multiple Channels

Many successful games use more than one notification channel. For example:

* **A2U API** for targeted, behavior-driven re-engagement (e.g., “Your friend just beat your score”)
* **Game Updates via Messenger** for rich, interactive content (e.g., daily challenge with a preview image and “Play Now” button)
* **Notification Service** for scheduled reminders (e.g., “Your daily reward is ready”)

When using multiple channels, coordinate across them to avoid overwhelming players. The combined total should still stay within 1-2 notifications per day per player.

## Next Steps

* **[Notification Guidelines](https://developers.facebook.com/documentation/games/retain/notifications/notification-guidelines)** -- Content formatting and quality criteria for notification messages.
* **[Notifications Overview](https://developers.facebook.com/documentation/games/retain/notifications/overview)** -- Compare all notification channels and their use cases.
* **[A2U API](https://developers.facebook.com/documentation/games/retain/notifications/a2u-api)** -- Detailed guide to the App-to-User notification API.
* **[Notification Service](https://developers.facebook.com/documentation/games/retain/notifications/notification-service)** -- Using the Notification Service for scheduled notifications.
* **[Game Updates via Messenger](https://developers.facebook.com/documentation/games/retain/notifications/game-updates-messenger)** -- Setting up and using Messenger bots for game updates.
