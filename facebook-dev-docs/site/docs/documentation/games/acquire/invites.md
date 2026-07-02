---
title: "Discovery"
source_url: https://developers.facebook.com/documentation/games/acquire/invites
---

# Discovery

Updated: Mar 3, 2026

Understanding how players discover your game on Facebook is essential for organic growth.

This guide explains every major discovery surface, how it works, and what you can do to improve your visibility on each one.

## Discovery surfaces

### Gaming Tab

The Gaming Tab is the primary dedicated destination for games within the Facebook app. It is accessible from the main navigation on both mobile and desktop, and it serves as the central hub where players go to browse, search for, and play games.

#### Browsing

When players open the Gaming Tab, they see a curated selection of games organized into various sections. These sections may include:

* **Recently Played** — Games the player has played before, making it easy to return.
* **Popular Games** — Games with high overall engagement across the platform.
* **New Games** — Recently launched titles that are gaining traction.
* **Recommended for You** — Games personalized to the player’s interests and play history.
* **Trending** — Games experiencing a surge in player activity.

**What you can do:**

* Ensure your game’s icon, cover image, and name are polished and professional. These are the first things players see when browsing, and they heavily influence whether a player taps on your game.
* Maintain strong engagement and retention metrics. Games with healthy player bases and good retention are more likely to appear in curated sections.
* Release regular updates and new content. Active games are prioritized in discovery over stale ones.

#### Categories

Games in the Gaming Tab are organized into categories such as Puzzle, Action, Strategy, Card, Word, Sports, and more. Players frequently filter by category when looking for a specific type of game.

**What you can do:**

* Choose the most accurate category for your game when configuring it in the App Dashboard. Selecting the right category ensures your game appears in front of players who are actively looking for that type of experience.
* If your game spans multiple genres, pick the primary category that best represents the core gameplay. Miscategorized games may get initial impressions but will have poor conversion because the audience expectations do not match the experience.

#### Search

Players can search for games by name within the Gaming Tab. Search results are ranked by relevance, popularity, and other signals.

**What you can do:**

* Choose a memorable and distinctive game name that is easy to spell and search for. Avoid overly generic names that will be buried under unrelated results.
* Include relevant keywords in your game’s description. While the exact search algorithm considers multiple signals, a well-written description that naturally includes relevant terms can help your game surface for related searches.

#### Personalized recommendations

Facebook’s recommendation system analyzes each player’s behavior — what games they play, how long they play, what their friends play, and other signals — to surface personalized game suggestions. These recommendations appear in the Gaming Tab and the News Feed.

**What you can do:**

* Build a game that encourages repeat play and strong session engagement. The recommendation system favors games that players return to and spend meaningful time in.
* Integrate social features. When a player’s friends are playing your game, the recommendation system is more likely to suggest it to that player. Social signals like friend activity, shared content, and tournament participation all feed into the recommendation engine.
* Maintain strong Day 1, Day 7, and Day 28 retention rates. Games with healthy retention curves are flagged by the system as high-quality experiences and receive more recommendation impressions.

### News Feed

The Facebook News Feed is one of the highest-traffic surfaces on the platform, and it offers several ways for your game to reach potential players organically.

#### Friend activity

When a player plays your game, achieves a milestone, or participates in a tournament, that activity can appear in their friends’ News Feeds. These stories are powerful because they come with an implicit endorsement — a friend is playing this game, which makes it feel trustworthy and interesting.

**What you can do:**

* Use the Instant Games SDK to create custom updates (`FBInstant.updateAsync`) that post content to the News Feed when meaningful events happen in your game. Focus on moments that interest both the player and their friends. Examples include beating a high score, completing a challenging level, or winning a tournament.
* Avoid posting too frequently or posting low-value updates. The News Feed algorithm penalizes content that users ignore, hide, or report. Quality over quantity is the principle here.

#### Shared content

Players can actively share game content — scores, achievements, screenshots, and custom images — to their News Feed using the Share API (`FBInstant.shareAsync`). When other users see this shared content and tap on it, they are taken directly into your game.

**What you can do:**

* Design share-worthy moments into your game. Think about what would make a player want to show something to their friends: an impressive score, a funny outcome, a beautiful creation, or a competitive challenge.
* Generate visually compelling share images. The image is the most important element of a shared post — it determines whether someone scrolling through their feed will stop and pay attention. See [Sharing](https://developers.facebook.com/documentation/games/acquire/sharing) for detailed guidance.

#### Viral posts

Occasionally, game content goes viral on the platform — a particularly entertaining clip, an impressive achievement, or a clever challenge can spread far beyond a player’s immediate friend circle. While you cannot manufacture virality, you can create the conditions for it.

**What you can do:**

* Build moments into your game that are inherently surprising, funny, or impressive. Games with emergent gameplay moments — unexpected outcomes that make players laugh or gasp — naturally generate more shares.
* Make sharing effortless. If a player has to navigate through multiple menus to share something, they will not bother. Surface the share prompt at exactly the right moment, when the player is most excited about what just happened.

### Messenger

Messenger is a significant discovery surface, especially for casual and social games. Many players first encounter Instant Games through Messenger conversations.

#### Game messages

Players can send game-related messages to friends directly through Messenger. These messages can include game invitations, challenges, turn-based game updates, and score comparisons. When a recipient taps on a game message, they are taken directly into the game within Messenger.

**What you can do:**

* Integrate turn-based or challenge mechanics that naturally generate Messenger activity. Games that create back-and-forth interactions between friends (such as word games, trivia, or puzzle challenges) thrive on Messenger because each turn creates a new touchpoint with the other player.
* Use `FBInstant.context` APIs to detect when your game is being played in a Messenger context and tailor the experience accordingly. For example, you might show a two-player mode or a friend challenge screen.

#### Challenges

The challenge mechanic allows a player to challenge a friend to beat their score or complete a task. The challenge is delivered through Messenger, and when the friend opens it, they are dropped directly into the game with the challenge context loaded.

**What you can do:**

* Implement the `FBInstant.updateAsync` method with `action: 'CUSTOM'` and a challenge `template` to create compelling challenge experiences. Pass the challenger’s score in the `data` field and a personalized message in the `text` field, and set a `cta` such as `'Accept Challenge'` to motivate the recipient to play. See [Custom Updates](https://developers.facebook.com/documentation/games/retain/custom-updates) for the full payload format.
* Make the challenge experience feel personal and competitive. Show the challenger’s name, photo, and score prominently so the recipient feels motivated to beat them.

### Notifications

Facebook notifications provide a way to re-engage players and to surface your game to new players through social signals.

#### Tournament invites

When a player creates or participates in a tournament, their friends can receive notifications inviting them to join. Tournaments are a powerful discovery mechanism because they combine social proof (a friend is playing) with a compelling call to action (join the competition).

**What you can do:**

* Implement tournaments using the Instant Games SDK (`FBInstant.tournament` APIs). Create regular, time-limited tournaments that give players a reason to invite friends and compete.
* Design tournament themes around events, seasons, or milestones to keep them feeling fresh.

#### Friend activity notifications

Players may receive notifications when their friends achieve milestones, beat their scores, or perform other notable actions in your game.

**What you can do:**

* Use custom updates and context-aware messaging to trigger meaningful notifications. Focus on notifications that the recipient will find relevant and engaging — for example, “Your friend just beat your high score in [Game Name]! Can you take it back?”
* Respect notification frequency limits. Sending too many notifications will cause players to mute your game, which permanently cuts off this channel.

### Facebook Search

Players can discover games by searching on Facebook’s main search bar, not just within the Gaming Tab. When a player searches for a game-related term (a game name, a genre, or even a general query like “puzzle game”), your game can appear in the results.

**What you can do:**

* Optimize your game’s name and description for search relevance. Use clear, descriptive language that includes the terms players are likely to search for.
* Build a Facebook Page for your game (see below) and keep it active. Facebook Search considers Page activity, follower count, and engagement when ranking results.

### Game Pages

Every Instant Game can have an associated Facebook Page. The Game Page serves as your game’s home on Facebook — a place where players can learn about the game, see updates, join a community, and launch the game directly.

**What you can do:**

* Create and maintain an active Facebook Page for your game. Post regular updates, respond to player comments, and share content that keeps your community engaged.
* Use the Page to announce new features, events, and tournaments. Players who follow your Page will see these updates in their News Feed, which drives re-engagement and can attract new players through social sharing.
* Add a “Play Game” call-to-action button to your Page so visitors can launch your game directly from the Page.
* Encourage players to follow your Page by prompting them at appropriate moments in your game (for example, after completing a tutorial or achieving a milestone).

## Asset optimization for discovery

Regardless of which discovery surface brings a player to your game, the visual assets and metadata you provide are what determine whether that player actually taps “Play.” Optimizing these assets is one of the highest-impact actions you can take for organic acquisition.

### Game icon

Your game icon appears in the Gaming Tab, search results, notifications, Messenger, and almost every other surface where your game is displayed. It is the single most important visual asset for discovery.

**Best practices:**

* Use a simple, bold design that is legible at small sizes. The icon is often displayed at 50x50 pixels or smaller. Intricate details will be lost.
* Choose vibrant colors that stand out against both light and dark backgrounds.
* Avoid text in the icon. It will be too small to read in most contexts, and it does not localize well.
* Show a single recognizable element (a character, an object, a symbol) rather than a busy scene.
* Test your icon at multiple sizes to ensure it looks good on all surfaces.

### Cover image

The cover image (also called the banner image or hero image) appears in the Gaming Tab when your game is featured or when a player views your game’s detail page. It provides a larger canvas to showcase your game’s visual identity.

**Best practices:**

* Use a high-resolution image that represents the core experience of your game.
* Show gameplay or game characters in action — static logos are less engaging.
* Include your game’s name in the image, but do not rely on it as the only way to identify the game (the name is also displayed as text).
* Follow the required dimensions specified in the App Dashboard to avoid cropping issues.

### Game name

Your game’s name appears on every discovery surface. It should be distinctive, memorable, and easy to spell.

**Best practices:**

* Keep the name short (ideally 2-3 words). Long names get truncated on many surfaces.
* Choose a name that hints at the gameplay or genre without being generic.
* Avoid names that are too similar to existing popular games, as this can cause confusion and hurt your search ranking.
* Test the name with people who have never seen your game to see if it sparks curiosity.

### Description

Your game’s description appears on the game detail page and may be used by search and recommendation algorithms.

**Best practices:**

* Lead with the most compelling sentence. Many players will only read the first line.
* Clearly communicate what the game is and why it is fun. Avoid vague marketing language.
* Include relevant keywords naturally (the genre, the type of gameplay, the social features).
* Keep it concise — 2-3 short paragraphs at most.

### Video preview

Some discovery surfaces support video previews that autoplay as players browse. A well-made video preview can significantly increase your click-through rate.

**Best practices:**

* Show actual gameplay, not just cinematics or logos.
* Capture attention in the first 2-3 seconds. Players scrolling through a feed will only pause if something catches their eye immediately.
* Keep the video short (15-30 seconds is ideal).
* Design the video to work without sound, since most users browse with sound off. Use visual storytelling and on-screen text.

## Measuring discovery

To understand which discovery surfaces are driving players to your game, use the analytics tools available in the App Dashboard and the [Instant Games Analytics](https://developers.facebook.com/documentation/games/tools/gaming-insights) page. Key metrics to monitor include:

* **Entry points** — Where players are coming from when they launch your game (such as the Gaming Tab, News Feed, Messenger, and Notifications).
* **Impressions** — How often your game is displayed on each surface.
* **Click-through rate (CTR)** — The percentage of impressions that result in a player launching your game.
* **Conversion rate** — The percentage of players who play beyond the initial session.

By tracking these metrics over time, you can identify which surfaces are most effective for your game and focus your optimization efforts accordingly. Once you know which surfaces drive the most players, use the next steps to extend your reach.

## Next steps

Once you have optimized your organic discovery presence, consider adding paid acquisition through [Click-to-Play Ads](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/overview) to accelerate growth. To amplify organic discovery through player-driven channels, see [Invites](https://developers.facebook.com/documentation/games/acquire/invites) and [Sharing](https://developers.facebook.com/documentation/games/acquire/sharing).
