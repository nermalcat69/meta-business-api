---
title: "Sharing"
source_url: https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/overview
---

# Sharing

Updated: Mar 26, 2026

Sharing allows your players

Unlike invites, which are directed at specific friends, sharing broadcasts content to a player’s broader social network. This means a single share can reach hundreds of people, including friends-of-friends and followers. Well-designed share content can reach a large audience, generating significant player acquisition at zero cost.

## How sharing works

The sharing flow works as follows:

* **Your game creates share content.** At an appropriate moment (completing a level, achieving a high score, or when the player taps a “Share” button), your game prepares an image and message to share.
* **Your game calls the share API.** The SDK presents a native share dialog where the player can review the content, optionally add their own message, and choose where to share it.
* **The player confirms and shares.** Your game posts the content to the selected destination (News Feed, Messenger, or Stories).
* **Friends see the shared content.** The post appears in the feeds, conversations, or Stories of the player’s friends. It includes the game image, text, and a “Play Now” button.
* **Friends tap to play.** When a friend taps the shared content, your game launches directly. Your game can detect that the player arrived via a share and customize their experience.

> **Note:** If your game uses Zero Permissions (Instant Games SDK 8.0), player names and photos are not directly accessible in your game code. To include player names and photos in share images and text, use overlay-enhanced sharing. See [Custom Updates, Invites, and Shares](https://developers.facebook.com/documentation/games/build/zero-permissions/social-features/custom-updates-invites-shares) for details.

## Share API

The Instant Games SDK provides the `shareAsync` method to trigger the share flow.

### Basic usage

```
```
FBInstant.shareAsync({  
  intent: 'SHARE',  
  image: base64EncodedImage,  
  text: 'I just scored 10,000 points in PuzzleQuest! Can you beat me?',  
  data: {  
    source: 'share',  
    sharer_id: FBInstant.player.getID(),  
    score: 10000,  
  },  
}).then(function() {  
  // Share was posted successfully  
  console.log('Content shared!');  
}).catch(function(error) {  
  // Share was not posted (player cancelled or an error occurred)  
  console.log('Share not posted:', error.code);  
});
```
```

### Parameters

The `shareAsync` method accepts an object with the following properties:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `intent` | `string` | Yes | The intent of the share. Use `'SHARE'` for general sharing, `'REQUEST'` for requesting help from friends, or `'CHALLENGE'` for issuing a challenge. |
| `image` | `string` | Yes | A base64-encoded image to include with the share. This is the primary visual element that will appear in the feed or message. |
| `text` | `string` | Yes | The message text that accompanies the shared content. Keep it concise and engaging. |
| `data` | `object` | No | A custom data payload (JSON-serializable) that will be passed to the game when someone opens the shared content. Use this for tracking and personalization. |

### Share intents

The `intent` parameter affects how the shared content is presented and what actions are available to the recipient:

* **`SHARE`** — General sharing. The content is posted as a standard game post. Best for scores, achievements, and general game content.
* **`REQUEST`** — A request for help. Used in games where players can ask friends for assistance (e.g., sending lives, helping with a level). The recipient sees the post framed as a request they can respond to.
* **`CHALLENGE`** — A competitive challenge. The content is framed as a challenge that the recipient can accept. Best for score challenges, time trials, and head-to-head competitions.

Choose the intent that best matches the context of the share. Challenges tend to have higher engagement rates because they include an implicit call to action (“beat my score”), while general shares work well for showcasing interesting content.

## Creating share content

The quality of your share content directly determines how effective sharing is as an acquisition channel. Compelling share content captures attention in social feeds and makes them want to try your game.

### Images

The share image is the single most important element. People see it first in their feed or conversation, and it determines whether they stop scrolling or keep moving.

**How to create share images:**

```
```
// Example: Generate a share image using a canvas element  
function generateShareImage(playerName, score, level) {  
  const canvas = document.createElement('canvas');  
  canvas.width = 600;  
  canvas.height = 600;  
  const ctx = canvas.getContext('2d');  
  
  // Draw background  
  ctx.fillStyle = '#1a1a2e';  
  ctx.fillRect(0, 0, 600, 600);  
  
  // Draw game logo/branding  
  // ... (draw your game's visual elements)  
  
  // Draw player's achievement  
  ctx.fillStyle = '#ffffff';  
  ctx.font = 'bold 48px Arial';  
  ctx.textAlign = 'center';  
  ctx.fillText(playerName, 300, 250);  
  
  ctx.font = 'bold 72px Arial';  
  ctx.fillStyle = '#ffd700';  
  ctx.fillText(score.toLocaleString() + ' pts', 300, 340);  
  
  ctx.font = '32px Arial';  
  ctx.fillStyle = '#cccccc';  
  ctx.fillText('Level ' + level, 300, 400);  
  
  // Convert to base64  
  return canvas.toDataURL('image/jpeg', 0.9).split(',')[1];  
}
```
```

**Image best practices:**

* **Use a 1:1 (square) aspect ratio.** This displays well across all surfaces (Feed, Messenger, Stories).
* **Keep file size reasonable.** Compress images to keep the base64 string manageable. JPEG at 80-90% quality is usually a good balance.
* **Include your game’s branding.** The image should be instantly recognizable as coming from your game — use your game’s art style, colors, and logo.
* **Feature the player’s accomplishment prominently.** Make the score, achievement, or result the focal point of the image.
* **Make it visually striking.** Use bold colors, contrast, and clean composition. The image competes with everything else in the feed for attention.
* **Avoid excessive text.** Too much text makes the image look cluttered and may trigger Facebook’s text overlay guidelines.

### Text

The share text provides context for the image and gives the recipient a reason to tap.

**Text best practices:**

* **Keep it to one sentence.** Long messages are truncated on most surfaces.
* **Include a specific accomplishment.** “I scored 10,000 points!” is more compelling than “I played PuzzleQuest.”
* **Add a challenge or question.** “Can you beat me?” or “Think you can do better?” motivates the recipient to engage.
* **Avoid generic phrasing.** “Check out this game!” feels like spam. Specific, personal content feels authentic.

## Share templates

You can create reusable share templates for different moments in your game. This ensures consistency and makes it easy to generate high-quality share content throughout your game.

### Score share

```
```
function shareScore(score) {  
  const image = generateScoreImage(  
    FBInstant.player.getName(),  
    score  
  );  
  
  FBInstant.shareAsync({  
    intent: 'CHALLENGE',  
    image: image,  
    text: FBInstant.player.getName() + ' scored ' + score.toLocaleString() + ' points! Think you can beat that?',  
    data: { source: 'score_share', score: score },  
  });  
}
```
```

### Level complete share

```
```
function shareLevelComplete(level, stars) {  
  const image = generateLevelCompleteImage(level, stars);  
  
  FBInstant.shareAsync({  
    intent: 'SHARE',  
    image: image,  
    text: 'Just completed Level ' + level + ' with ' + stars + ' stars in PuzzleQuest!',  
    data: { source: 'level_share', level: level },  
  });  
}
```
```

### Achievement share

```
```
function shareAchievement(achievementName, achievementImage) {  
  const image = generateAchievementImage(  
    FBInstant.player.getName(),  
    achievementName,  
    achievementImage  
  );  
  
  FBInstant.shareAsync({  
    intent: 'SHARE',  
    image: image,  
    text: FBInstant.player.getName() + ' just unlocked "' + achievementName + '"!',  
    data: { source: 'achievement_share', achievement: achievementName },  
  });  
}
```
```

### Challenge share

```
```
function shareChallenge(score, level) {  
  const image = generateChallengeImage(score, level);  
  
  FBInstant.shareAsync({  
    intent: 'CHALLENGE',  
    image: image,  
    text: 'I challenge you to beat my score of ' + score.toLocaleString() + ' on Level ' + level + '!',  
    data: {  
      source: 'challenge_share',  
      challenger_id: FBInstant.player.getID(),  
      challenger_name: FBInstant.player.getName(),  
      target_score: score,  
      target_level: level,  
    },  
  });  
}
```
```

## Tracking share effectiveness

Measuring the effectiveness of your sharing features helps you understand which moments and content types drive the most acquisition.

### Key metrics

* **Shares sent:** Total number of shares initiated by players. Track this by share type (score, level, achievement, challenge) to see which moments generate the most sharing activity.
* **Share completion rate:** The percentage of share dialogs that are confirmed by the player (not cancelled). A low completion rate may indicate that you are prompting at the wrong moments or that the share content is not compelling enough.
* **Click-through rate:** The percentage of people who see the shared content and tap on it. This measures how engaging your share images and text are.
* **Conversion rate:** The percentage of click-throughs that result in a new player session. This measures how well your game converts share-acquired visitors.
* **Viral coefficient (K-factor):** The average number of new players generated by each existing player through sharing. A K-factor above 1.0 means your game is growing virally (each player brings in more than one new player on average).

### Implementation

```
```
// Track share events  
function trackShare(shareType, completed) {  
  logEvent('share_attempted', {  
    type: shareType,  
    completed: completed,  
    player_id: FBInstant.player.getID(),  
  });  
}  
  
// Track when a new player arrives from a share  
const entryData = FBInstant.getEntryPointData();  
if (entryData && entryData.source && entryData.source.includes('share')) {  
  logEvent('share_conversion', {  
    share_type: entryData.source,  
    sharer_id: entryData.sharer_id,  
  });  
}
```
```

## Best practices for designing share-worthy moments

The most effective sharing happens organically — players share because they genuinely want to, not because the game pressured them. Your job is to create moments that are so exciting, funny, impressive, or surprising that players instinctively want to show them to friends.

### Create peak moments

Design your game to produce “peak moments” — intense, emotional high points that naturally make players want to share:

* **Personal bests:** A new high score, a personal record time, or a first-time achievement.
* **Rare events:** Finding a rare item, encountering an unusual outcome, or triggering a special effect.
* **Social milestones:** Beating a friend’s score, winning a tournament, or ranking on a leaderboard.
* **Visual spectacles:** Particularly satisfying combos, chain reactions, or visual effects.
* **Humorous outcomes:** Funny failures, unexpected results, or entertaining bugs that the player wants to show others.

### Time the share prompt correctly

* **Prompt immediately after the peak moment**, while the player is still feeling the emotional high. If you wait too long, the excitement fades.
* **Show the share option, do not force it.** A “Share” button that appears alongside other options (like “Play Again” or “Next Level”) is far more effective than a mandatory share dialog.
* **Include a preview.** Show the player what the share will look like before they confirm. This lets them feel good about what they are sharing and increases completion rates.

### Make sharing feel natural

* **Integrate the share button into your UI** so it feels like a natural part of the game experience, not an intrusive pop-up.
* **Use contextual share prompts.** Instead of a generic “Share” button, use context-specific labels like “Challenge a Friend,” “Show Off Your Score,” or “Share Your Creation.”
* **Limit share prompts.** Do not show a share prompt after every action. Reserve it for genuinely noteworthy moments. Over-prompting leads to prompt fatigue and annoyance.

## Sharing to Stories vs. Feed

Players can share content to two primary surfaces, each with different characteristics:

### Feed sharing

Feed shares appear in the player’s News Feed timeline, visible to all their friends (and potentially friends-of-friends, depending on privacy settings).

**Characteristics:**

* **Broad reach:** A single feed share can be seen by hundreds of people.
* **Persistent:** Feed posts remain visible for an extended period and can continue generating clicks over time.
* **Social proof:** Feed shares include the player’s name and profile picture, providing strong social proof.
* **Best for:** High scores, achievements, and content that the player is proud to display publicly.

### Messenger sharing

Messenger shares are sent directly to a specific friend or group conversation. They are more personal and directed.

**Characteristics:**

* **Targeted reach:** Messenger shares reach a specific person or small group, not a broad audience.
* **Higher engagement rate:** Because the content is delivered directly to a conversation, recipients are more likely to see it and respond.
* **Conversational context:** The share appears in a chat thread, which naturally encourages back-and-forth interaction.
* **Best for:** Challenges, requests for help, turn-based game turns, and content meant for a specific friend.

### Stories sharing

Stories are full-screen, ephemeral posts that disappear after 24 hours. They appear at the top of the Facebook app, making them highly visible.

**Characteristics:**

* **High visibility:** Stories are prominently placed at the top of the app and are frequently viewed.
* **Ephemeral:** Stories disappear after 24 hours, creating a sense of urgency.
* **Full-screen format:** The 9:16 aspect ratio provides a large canvas for visually rich content.
* **Best for:** Real-time achievements, time-limited events, and visually striking content.

**When designing for Stories, use a 9:16 (vertical) aspect ratio** to fill the full screen. Stories content should be visually impactful and easy to understand at a glance, since viewers swipe through Stories quickly.

### Recommendations

* Offer players the choice of where to share, rather than defaulting to one surface. Different players prefer different surfaces, and different content is better suited to different destinations.
* Optimize your share image for the square (1:1) aspect ratio for Feed and Messenger, and consider creating an alternative vertical (9:16) version for Stories if you support Stories sharing.
* Track which sharing surface generates the most conversions for your game and adjust your share prompts and content accordingly.

## Next steps

Sharing works best when combined with other social features. See [Invites](https://developers.facebook.com/documentation/games/acquire/invites) to enable direct friend-to-friend invitations, and explore the [Retain](https://developers.facebook.com/documentation/games/retain/overview) section for features like tournaments and leaderboards that give players more reasons to share.
