---
title: "Custom Updates"
source_url: https://developers.facebook.com/documentation/games/retain/notifications/a2u-api
---

# Custom Updates

Updated: Apr 6, 2026

Custom Updates let your game send rich, interactive messages

This guide covers what custom updates are, the different types and strategies available, the SDK API, payload format, customization options, rate limiting policies, and best practices for creating effective updates.

> **Note:** If your game uses Zero Permissions (SDK 8.0), player names and photos are not directly accessible in your game code. To include player data in update images and text, use overlay-enhanced updates with template expressions like ``. See [Custom Updates, Invites, and Shares](https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/custom-updates-invites-shares) for details.

## What Are Custom Updates?

A custom update is a structured message that your game sends to one or more players through the Facebook platform. Unlike generic notifications, custom updates are rich and interactive -- they can include:

* A custom image (screenshot, achievement badge, challenge graphic)
* Personalized text (player names, scores, game-specific context)
* An action button with a call-to-action (“Play Now,” “Beat This Score,” “Accept Challenge”)
* Embedded data that your game can read when the recipient opens the update

Custom updates appear in the conversation thread or context where the game is being played. When a recipient taps on an update, they are taken directly into your game with the embedded data available, allowing you to deep-link them to specific content or actions.

### Common Use Cases

* **Challenges:** “Sarah scored 2,450 points. Can you beat it?” with a “Play Now” button
* **Turn notifications:** “It’s your turn! Mike just made their move.” with a “Take Your Turn” button
* **Achievements:** “Sarah just reached Level 25!” shared with the game group
* **Re-engagement:** “Your daily reward is ready! Come back and claim it.” with a “Claim Reward” button
* **Score updates:** “New high score! Sarah scored 5,000 points on Endless Mode.” shared to the context

## Update Templates

The `template` field in `updateAsync()` is a string identifier that you define in the `fbapp-config.json` file bundled with your game’s assets. Templates serve two purposes:

* **App review:** The `example` text helps reviewers understand what your updates will look like.
* **Analytics:** The template name is logged so you can track the performance of different update types in your analytics.

Templates do not perform any server-side text substitution. The `text` field you pass to `updateAsync()` is displayed to recipients exactly as you provide it, so you must construct personalized text client-side using SDK APIs.

### Defining templates in `fbapp-config.json`

Add a `custom_update_templates` object under `instant_games` in your `fbapp-config.json`. Each key is a template identifier, and the value is an object with a required `example` field:

```
```
{  
  "instant_games": {  
    "custom_update_templates": {  
      "score_challenge": {  
        "example": "Sarah just scored 2,450 points! Can you beat it?"  
      },  
      "turn_notification": {  
        "example": "It's your turn! Mike just made their move."  
      },  
      "daily_reward": {  
        "example": "Your daily reward is ready! Come back and claim it."  
      },  
      "level_complete": {  
        "example": "Sarah just reached Level 25! Can you catch up?"  
      }  
    }  
  }  
}
```
```

**Schema:**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `<template_id>` | `string` (key) | Yes | A unique identifier for the template. This is the value you pass as the `template` field in `updateAsync()`. |
| `example` | `string` | Yes | A human-readable example of what an update using this template looks like. Used for app review. Not displayed to players. |

**Validation rules:**

* The `custom_update_templates` field is optional. If omitted, no error occurs.
* If present, it must be an object. Each value must also be an object containing a string `example` field.
* Invalid entries (missing `example`, wrong types) produce build errors when you upload your game bundle.

### Using templates with `updateAsync()`

When you call `updateAsync()`, set the `template` field to one of the keys you defined in `fbapp-config.json`. The actual message content comes from the `text` field, which you construct yourself:

```
```
await FBInstant.updateAsync({  
  action: 'CUSTOM',  
  template: 'score_challenge',  // Matches a key in fbapp-config.json  
  text: {  
    default: `${FBInstant.player.getName()} scored ${score} points! Can you beat it?`,  
  },  
  image: challengeImage,  
  cta: 'Beat This Score!',  
  strategy: 'IMMEDIATE',  
  notification: 'PUSH',  
  data: { challengeScore: score },  
});
```
```

### Including player names in updates

There is no server-side placeholder substitution for player names. You must retrieve names client-side using SDK APIs and embed them directly in your `text` and `image` content.

**Sender name:** Use `FBInstant.player.getName()` to get the current player’s display name.

```
```
const senderName = FBInstant.player.getName();  
  
await FBInstant.updateAsync({  
  action: 'CUSTOM',  
  template: 'score_challenge',  
  text: {  
    default: `${senderName} just scored ${score} points! Think you can beat it?`,  
  },  
  image: generateScoreImage(senderName, score),  
  strategy: 'IMMEDIATE',  
  notification: 'PUSH',  
});
```
```

**Other player names:** Use `FBInstant.context.getPlayersAsync()` to retrieve the names of players in the current context. This returns connected players in the same game context (for example, a Messenger thread).

```
```
async function sendTurnNotification() {  
  const players = await FBInstant.context.getPlayersAsync();  
  const senderName = FBInstant.player.getName();  
  
  // Build a personalized message  
  // Note: you cannot resolve a specific recipient's name server-side.  
  // The text you provide here is what all players in the context will see.  
  await FBInstant.updateAsync({  
    action: 'CUSTOM',  
    template: 'turn_notification',  
    text: {  
      default: `${senderName} just made their move. Your turn!`,  
    },  
    image: generateTurnImage(senderName),  
    cta: 'Take Your Turn',  
    strategy: 'IMMEDIATE',  
    notification: 'PUSH',  
    data: { lastMove: currentMove },  
  });  
}
```
```

**Leaderboard-style updates with multiple player names:**

```
```
async function sendLeaderboardUpdate(topScores) {  
  const senderName = FBInstant.player.getName();  
  const players = await FBInstant.context.getPlayersAsync();  
  
  // Build a leaderboard string from context players  
  const leaderboard = topScores  
    .map((entry, i) => `${i + 1}. ${entry.name}: ${entry.score}`)  
    .join(', ');  
  
  await FBInstant.updateAsync({  
    action: 'CUSTOM',  
    template: 'level_complete',  
    text: {  
      default: `${senderName} just finished Level ${level}! Scores: ${leaderboard}`,  
    },  
    image: generateLeaderboardImage(topScores),  
    cta: 'Play Now',  
    strategy: 'LAST',  
    notification: 'NO_PUSH',  
    data: { level: level },  
  });  
}
```
```

> **Note:** Custom updates are sent to the current game context (for example, the Messenger thread). You cannot target a specific recipient by name. The `text` you provide is displayed to all participants in the context. To address a specific player, include their name in the text using data from `getPlayersAsync()`, but be aware that all context members will see the same message.

## Sending Custom Updates

Use `FBInstant.updateAsync()` to send a custom update. This method accepts a payload object that defines the update’s content and behavior.

### Basic Example

```
```
async function sendScoreUpdate(score) {  
  const senderName = FBInstant.player.getName();  
  
  try {  
    await FBInstant.updateAsync({  
      action: 'CUSTOM',  
      cta: 'Beat My Score!',  
      image: generateScoreImage(senderName, score), // Must be a base64-encoded image  
      text: {  
        default: `${senderName} just scored ${score} points! Think you can beat me?`,  
        localizations: {  
          es_LA: `${senderName} acaba de anotar ${score} puntos! Crees que puedes ganarme?`,  
          pt_BR: `${senderName} acabou de marcar ${score} pontos! Acha que pode me vencer?`,  
        },  
      },  
      template: 'score_challenge',  
      data: {  
        myScore: score,  
        challengeType: 'score_beat',  
      },  
      strategy: 'IMMEDIATE',  
      notification: 'PUSH',  
    });  
    console.log('Update sent successfully!');  
  } catch (error) {  
    console.error('Failed to send update:', error);  
  }  
}
```
```

### Update Payload Format

The payload object passed to `updateAsync()` has the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The type of update. Use `'CUSTOM'` for custom updates. Other values include `'LEADERBOARD'` for leaderboard updates. |
| `cta` | `string` | No | The text displayed on the action button (call-to-action). For example, `'Play Now'`, `'Beat My Score!'`, or `'Accept Challenge'`. If omitted, a default CTA may be used. |
| `image` | `string` | Yes | A base64-encoded image string that serves as the visual content of the update. The image should be a data URI (e.g., `'data:image/png;base64,...'`). Recommended size is 1200x628 pixels. |
| `text` | `object` | Yes | The text content of the update. Must include a `default` key with the text string. Can optionally include a `localizations` object for translated versions. |
| `template` | `string` | Yes | A string identifier for this update type, matching a key in the `custom_update_templates` object in your `fbapp-config.json`. Used for analytics tracking. |
| `data` | `object` | No | A JSON-serializable object containing custom data. This data is available to your game when the recipient opens the update, allowing you to deep-link to specific content. Maximum size is 1000 characters when serialized. |
| `strategy` | `string` | No | Determines when the update is delivered. See the Strategy section below. |
| `notification` | `string` | No | Controls whether a push notification is sent. See the Notification section below. |

### Strategy Options

The `strategy` field controls how the update is delivered:

| Value | Description |
| --- | --- |
| `'IMMEDIATE'` | The update is sent immediately and appears in the conversation thread right away. Use this for time-sensitive updates like challenges or turn notifications. |
| `'LAST'` | Only the most recent update with this strategy is shown. If multiple `LAST` updates are sent, only the newest one is visible. Use this for status updates where only the latest state matters (e.g., current score). |
| `'IMMEDIATE_CLEAR'` | The update is sent immediately. When the recipient opens the game, this update and all previous `IMMEDIATE_CLEAR` updates are removed from the conversation. Use this for transient information that becomes irrelevant once the player opens the game. |

### Notification Options

The `notification` field controls push notification behavior:

| Value | Description |
| --- | --- |
| `'NO_PUSH'` | No push notification is sent. The update appears in the conversation but does not alert the recipient’s device. Use this when the player is likely already engaged or when the update is low-priority. |
| `'PUSH'` | A push notification is sent to the recipient’s device. Use this for important, actionable updates like challenges, turn notifications, or time-sensitive events. |

## Image Customization

The `image` field is one of the most important parts of your custom update. A compelling, visually clear image dramatically increases the likelihood that a recipient will tap on the update.

### Image Requirements

* **Format:** Base64-encoded data URI (e.g., `'data:image/png;base64,...'` or `'data:image/jpeg;base64,...'`)
* **Recommended size:** 1200 x 628 pixels (the standard Open Graph image size)
* **Maximum file size:** Keep images under 300 KB for fast loading
* **Content:** The image should clearly communicate the update’s purpose -- a score, a challenge, an achievement, or a game moment

### Generating Images Dynamically

Many games generate update images dynamically using an HTML5 canvas. Use `FBInstant.player.getName()` and `FBInstant.player.getPhoto()` to include the sender’s name and photo in the image.

```
```
function generateChallengeImage(playerName, score) {  
  const canvas = document.createElement('canvas');  
  canvas.width = 1200;  
  canvas.height = 628;  
  const ctx = canvas.getContext('2d');  
  
  // Draw background  
  ctx.fillStyle = '#1a1a2e';  
  ctx.fillRect(0, 0, canvas.width, canvas.height);  
  
  // Draw title  
  ctx.fillStyle = '#ffffff';  
  ctx.font = 'bold 48px Arial';  
  ctx.textAlign = 'center';  
  ctx.fillText('Challenge!', canvas.width / 2, 200);  
  
  // Draw score  
  ctx.font = 'bold 96px Arial';  
  ctx.fillStyle = '#e94560';  
  ctx.fillText(score.toLocaleString(), canvas.width / 2, 350);  
  
  // Draw sender name  
  ctx.font = '36px Arial';  
  ctx.fillStyle = '#cccccc';  
  ctx.fillText(`${playerName} dares you to beat this score!`, canvas.width / 2, 460);  
  
  return canvas.toDataURL('image/png');  
}  
  
// Usage:  
const senderName = FBInstant.player.getName();  
const image = generateChallengeImage(senderName, 2450);
```
```

## Reading Update Data on Launch

When a player taps on a custom update and enters your game, you can retrieve the embedded data from the update using `FBInstant.getEntryPointData()`. This allows you to deep-link the player to the appropriate screen or action.

```
```
async function handleEntryPoint() {  
  await FBInstant.initializeAsync();  
  
  const entryPointData = FBInstant.getEntryPointData();  
  
  if (entryPointData) {  
    console.log('Entered from a custom update:', entryPointData);  
  
    if (entryPointData.challengeType === 'score_beat') {  
      // Player entered from a score challenge  
      showChallengeScreen(entryPointData.myScore, entryPointData.challengerId);  
    } else if (entryPointData.giftType === 'daily_reward') {  
      // Player entered from a reward notification  
      showRewardScreen();  
    }  
  } else {  
    // Player entered normally (not from an update)  
    showMainMenu();  
  }  
  
  await FBInstant.startGameAsync();  
}
```
```

## Localization

Custom updates support localization through the `text.localizations` object. Providing translations for your most common player locales ensures that your updates feel native and personal regardless of the recipient’s language.

```
```
const senderName = FBInstant.player.getName();  
  
await FBInstant.updateAsync({  
  action: 'CUSTOM',  
  cta: 'Play Now',  
  image: challengeImage,  
  text: {  
    default: `${senderName} challenged you! Can you score higher?`,  
    localizations: {  
      en_US: `${senderName} challenged you! Can you score higher?`,  
      es_LA: `${senderName} te ha retado! Puedes superar su puntaje?`,  
      pt_BR: `${senderName} te desafiou! Consegue fazer mais pontos?`,  
      fr_FR: `${senderName} vous a defie! Pouvez-vous faire mieux?`,  
      de_DE: `${senderName} hat dich herausgefordert! Kannst du mehr Punkte erzielen?`,  
      ja_JP: `${senderName}があなたに挑戦しました！もっと高いスコアを出せますか？`,  
    },  
  },  
  template: 'friend_challenge',  
  data: { challengeScore: score },  
  strategy: 'IMMEDIATE',  
  notification: 'PUSH',  
});
```
```

## Rate Limiting and Policies

Facebook enforces rate limits on custom updates to protect players from spam and ensure a positive experience. Understanding these limits is important for designing your update strategy.

### Rate Limit Guidelines

* **Per-player limits:** There is a maximum number of custom updates that can be sent to a single player within a given time window. If you exceed this limit, `updateAsync()` will reject with an error.
* **Per-context limits:** Updates sent within a single context (e.g., a Messenger thread) are also subject to limits.
* **Push notification limits:** Updates with `notification: 'PUSH'` are subject to stricter limits than those with `notification: 'NO_PUSH'`. Use push notifications judiciously.
* **Aggregate limits:** Your app has an overall daily limit on the total number of updates that can be sent across all players.

### Content Policies

* **No spam.** Do not send updates that are repetitive, irrelevant, or not driven by genuine gameplay events. Updates should always be the result of a player action.
* **No misleading content.** Update text and images must accurately represent the game content. Do not use clickbait or deceptive messaging.
* **No prohibited content.** Updates must comply with Facebook’s [Platform Policies](https://developers.facebook.com/policy/) and [Community Standards⁠](https://www.facebook.com/communitystandards/).
* **Player-initiated.** Updates should be the result of an action the player took (e.g., completing a level, achieving a high score). Do not send updates automatically without a player trigger.

### Handling Rate Limit Errors

```
```
async function sendUpdateSafely(payload) {  
  try {  
    await FBInstant.updateAsync(payload);  
    console.log('Update sent successfully');  
    return true;  
  } catch (error) {  
    if (error.code === 'RATE_LIMITED') {  
      console.warn('Rate limited. Update not sent.');  
      // Optionally queue the update for later  
      return false;  
    }  
    console.error('Update failed:', error);  
    return false;  
  }  
}
```
```

## Best Practices

### Make Updates Actionable

Every update should give the recipient a clear reason to open the game. “I played your game” is not actionable. “I just beat your high score -- can you take it back?” gives the recipient a specific, personal motivation to act.

### Use High-Quality Images

The image is the first thing a player sees. Invest time in creating visually appealing, informative images that stand out in a conversation thread. Include relevant game data (scores, levels, achievements) directly in the image.

### Personalize the Text

Use the player’s name and specific game data in your update text. Personalized messages feel like they were written for the recipient, not generated by a bot. The difference between “Come play!” and “Mike, Sarah just passed your score of 2,100 -- are you going to let that stand?” is enormous. Use `FBInstant.player.getName()` for the sender’s name and `FBInstant.context.getPlayersAsync()` for other players in the context. See [Including player names in updates](https://developers.facebook.com/documentation/games/retain/notifications/a2u-api#including-player-names-in-updates) for code examples.

### Time Updates to Gameplay Moments

Send updates immediately after meaningful gameplay events -- a new high score, a completed level, a tournament result. These are the moments when the sender is most excited and the content is most relevant.

### Use the Right Strategy

Choose the appropriate `strategy` value for each type of update:

* Use `IMMEDIATE` for time-sensitive, one-off events (challenges, turn notifications)
* Use `LAST` for status updates where only the current state matters (current score, current level)
* Use `IMMEDIATE_CLEAR` for transient information (game invitations, temporary offers)

### Use Push Notifications Sparingly

Reserve `notification: 'PUSH'` for updates that truly deserve to interrupt the recipient’s day -- a direct challenge from a friend, a turn notification in an active game, or a time-sensitive tournament. Overusing push notifications will cause players to mute your game.

### Include Meaningful Data

Use the `data` field to pass context that your game can use when the recipient opens the update. This allows you to create deep-linked experiences -- jumping directly to a challenge, showing a specific leaderboard, or displaying a reward.

### Test Across Surfaces

Custom updates may appear differently on different platforms (iOS, Android, web) and in different conversation types (1:1, group, game context). Test your updates across all surfaces to ensure they look good and function correctly everywhere.

### Provide a Fallback Experience

If a player opens your game from an update but the entry point data is missing or invalid (e.g., the challenge has expired), provide a graceful fallback. Show the main menu or a relevant screen rather than an error message.

## Complete Code Example

Here is a complete example that demonstrates sending a challenge update after a gameplay session and handling the incoming challenge on the other end:

```
```
// --- Sending a challenge ---  
  
async function onGameOver(finalScore) {  
  // Show the player's score  
  showScoreScreen(finalScore);  
  
  // Generate a challenge image  
  const challengeImage = generateChallengeImage(  
    FBInstant.player.getName(),  
    finalScore  
  );  
  
  // Offer to send a challenge  
  const shouldChallenge = await showChallengePrompt();  
  
  if (shouldChallenge) {  
    try {  
      await FBInstant.updateAsync({  
        action: 'CUSTOM',  
        cta: 'Beat This Score!',  
        image: challengeImage,  
        text: {  
          default: `${FBInstant.player.getName()} scored ${finalScore.toLocaleString()} points! Can you beat it?`,  
        },  
        template: 'score_challenge',  
        data: {  
          challengeScore: finalScore,  
          challengerId: FBInstant.player.getID(),  
          challengerName: FBInstant.player.getName(),  
        },  
        strategy: 'IMMEDIATE',  
        notification: 'PUSH',  
      });  
      showMessage('Challenge sent!');  
    } catch (error) {  
      if (error.code === 'RATE_LIMITED') {  
        showMessage('You have sent too many challenges recently. Try again later.');  
      } else if (error.code === 'SAME_CONTEXT') {  
        showMessage('Could not send challenge in this context.');  
      } else {  
        console.error('Challenge failed:', error);  
      }  
    }  
  }  
}  
  
// --- Receiving a challenge ---  
  
async function initializeGame() {  
  await FBInstant.initializeAsync();  
  FBInstant.setLoadingProgress(100);  
  await FBInstant.startGameAsync();  
  
  const entryData = FBInstant.getEntryPointData();  
  
  if (entryData && entryData.challengeScore !== undefined) {  
    // Player entered from a challenge  
    showMessage(  
      `${entryData.challengerName} scored ${entryData.challengeScore.toLocaleString()} points. Beat that!`  
    );  
    startGameWithTarget(entryData.challengeScore);  
  } else {  
    // Normal game start  
    startNormalGame();  
  }  
}  
  
initializeGame();
```
```

## Next Steps

* **[Play With Friends](https://developers.facebook.com/documentation/games/retain/play-with-friends)** -- Learn how to retrieve and display connected friends.
* **[Leaderboards](https://developers.facebook.com/documentation/games/retain/leaderboards)** -- Build competitive leaderboards for your game.
* **[Notifications Overview](https://developers.facebook.com/documentation/games/retain/notifications/overview)** -- Explore other notification channels for re-engaging players outside the game.
* **[Building Social Games](https://developers.facebook.com/documentation/games/retain/building-social-games)** -- Understand the strategic principles behind social game design.
