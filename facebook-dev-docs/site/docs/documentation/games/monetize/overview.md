---
title: "Community Overlays"
source_url: https://developers.facebook.com/documentation/games/monetize/overview
---

# Community Overlays

Updated: Mar 3, 2026

Community Overlays are in-game social surfaces

This guide covers what community overlays are, how they work, how to integrate them into your game, and best practices for using them to drive engagement and retention.

## What Are Community Overlays?

A community overlay is a visual element within your game that shows activity from the broader player community or from the player’s friends. Think of it as a social feed embedded in your game’s UI -- a persistent reminder that other people are playing, competing, and achieving things in the same game.

Examples of community overlay content:

* “Sarah just scored 3,200 points!”
* “Mike reached Level 15 for the first time!”
* “12 friends are playing right now”
* “Alex just beat the weekly high score!”
* “New record: 4,500 points by a player in Brazil!”
* “Your friend Jamie is online now”

Community overlays serve several important purposes:

### Social Presence

Even in a single-player game, community overlays make the player feel like they are part of something larger. Seeing other players’ activity creates a sense of shared experience and belonging.

### Competitive Motivation

When a player sees “Sarah just scored 3,200” and their own best is 2,900, they have an immediate, personal motivation to improve. Community overlays create competitive pressure without requiring the player to explicitly open a leaderboard or challenge screen.

### Social Proof

A game that shows constant activity feels alive and popular. This is especially important during early sessions when a new player is deciding whether to invest time in the game. Seeing other players’ activity signals that the game is worth playing.

### Re-Engagement Triggers

Community overlays can surface events that prompt action: “Your friend just passed your score,” “A new tournament is starting,” or “You have 3 unanswered challenges.” These triggers can redirect a player toward social features they might otherwise not visit.

## How Community Overlays Work

Community overlays combine data from several sources:

* **Leaderboard data:** Recent score submissions from the player’s friends or global players.
* **Connected player data:** Activity from the player’s Facebook friends who also play the game.
* **Game events:** In-game events like level completions, achievements, and milestones.
* **Real-time activity:** Information about who is currently playing or has recently played.

Your game retrieves this data using the existing Instant Games SDK APIs (leaderboards, connected players) and any additional data from your own backend. You then render the overlay as part of your game’s UI.

## Integrating Community Overlays

### Step 1: Gather Community Data

Use the SDK’s existing APIs to collect the data you want to display.

```
```
async function gatherCommunityData() {  
  const communityEvents = [];  
  
  try {  
    // Get friend leaderboard entries for recent scores  
    const leaderboard = await FBInstant.getLeaderboardAsync('main_score');  
    const friendEntries = await leaderboard.getConnectedPlayerEntriesAsync(20, 0);  
  
    friendEntries.forEach(entry => {  
      communityEvents.push({  
        type: 'score',  
        playerName: entry.getPlayer().getName(),  
        playerPhoto: entry.getPlayer().getPhoto(),  
        score: entry.getScore(),  
        timestamp: entry.getTimestamp(),  
      });  
    });  
  } catch (error) {  
    console.error('Failed to load leaderboard data:', error);  
  }  
  
  try {  
    // Get connected players for activity information  
    const connectedPlayers = await FBInstant.player.getConnectedPlayersAsync();  
  
    communityEvents.push({  
      type: 'social_proof',  
      message: `${connectedPlayers.length} of your friends play this game`,  
      playerCount: connectedPlayers.length,  
    });  
  } catch (error) {  
    console.error('Failed to load connected players:', error);  
  }  
  
  // Sort events by timestamp (most recent first)  
  communityEvents.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));  
  
  return communityEvents;  
}
```
```

### Step 2: Design the Overlay UI

Community overlays should be visible but not intrusive. They typically appear as:

* **A scrolling ticker** at the top or bottom of the screen
* **A side panel** that can be expanded or collapsed
* **Toast notifications** that appear briefly and fade away
* **A feed** on the main menu or loading screen

```
```
class CommunityOverlay {  
  constructor(containerElement) {  
    this.container = containerElement;  
    this.events = [];  
    this.currentIndex = 0;  
    this.rotationInterval = null;  
  }  
  
  async initialize() {  
    this.events = await gatherCommunityData();  
  
    if (this.events.length > 0) {  
      this.render();  
      this.startRotation();  
    }  
  }  
  
  render() {  
    if (this.events.length === 0) return;  
  
    const event = this.events[this.currentIndex];  
    this.container.innerHTML = '';  
  
    const overlay = document.createElement('div');  
    overlay.className = 'community-overlay-item';  
  
    switch (event.type) {  
      case 'score':  
        overlay.innerHTML = `  
          <img src="${event.playerPhoto}" alt="" class="overlay-avatar" />  
          <span class="overlay-text">  
            <strong>${event.playerName}</strong> scored ${event.score.toLocaleString()} points!  
          </span>  
        `;  
        break;  
  
      case 'social_proof':  
        overlay.innerHTML = `  
          <span class="overlay-icon">👥</span>  
          <span class="overlay-text">${event.message}</span>  
        `;  
        break;  
  
      case 'achievement':  
        overlay.innerHTML = `  
          <img src="${event.playerPhoto}" alt="" class="overlay-avatar" />  
          <span class="overlay-text">  
            <strong>${event.playerName}</strong> ${event.message}  
          </span>  
        `;  
        break;  
    }  
  
    // Add entrance animation  
    overlay.style.animation = 'slideIn 0.5s ease-out';  
    this.container.appendChild(overlay);  
  }  
  
  startRotation() {  
    // Rotate through events every 5 seconds  
    this.rotationInterval = setInterval(() => {  
      this.currentIndex = (this.currentIndex + 1) % this.events.length;  
      this.render();  
    }, 5000);  
  }  
  
  stop() {  
    if (this.rotationInterval) {  
      clearInterval(this.rotationInterval);  
      this.rotationInterval = null;  
    }  
  }  
  
  // Call this to add a new real-time event  
  addEvent(event) {  
    this.events.unshift(event);  
    // Keep the event list manageable  
    if (this.events.length > 50) {  
      this.events = this.events.slice(0, 50);  
    }  
  }  
}
```
```

### Step 3: Display the Overlay at the Right Times

Community overlays are most effective in specific contexts:

```
```
async function showMainMenu() {  
  // Initialize the community overlay on the main menu  
  const overlayContainer = document.getElementById('community-overlay');  
  const overlay = new CommunityOverlay(overlayContainer);  
  await overlay.initialize();  
  
  // The overlay runs in the background while the player is on the main menu  
  // Stop it when the player starts gameplay  
  const playButton = document.getElementById('play-button');  
  playButton.addEventListener('click', () => {  
    overlay.stop();  
    startGameplay();  
  });  
}  
  
async function showPostGameScreen(score) {  
  // Show relevant community activity after a game session  
  const communityData = await gatherCommunityData();  
  
  // Find friends whose scores are close to the player's score  
  const nearbyFriends = communityData.filter(event => {  
    return event.type === 'score' && Math.abs(event.score - score) < 500;  
  });  
  
  if (nearbyFriends.length > 0) {  
    const closest = nearbyFriends[0];  
    showMessage(  
      `You scored ${score.toLocaleString()}. ${closest.playerName} scored ${closest.score.toLocaleString()} -- so close!`  
    );  
  }  
}
```
```

### Step 4: Add Real-Time Updates (Optional)

If your game has a backend server, you can push real-time community events to the overlay using WebSockets or polling.

```
```
class RealTimeCommunityFeed {  
  constructor(overlay, gameId) {  
    this.overlay = overlay;  
    this.gameId = gameId;  
    this.socket = null;  
  }  
  
  connect() {  
    this.socket = new WebSocket(  
      `wss://your-game-server.com/community/${this.gameId}`  
    );  
  
    this.socket.onmessage = (event) => {  
      const data = JSON.parse(event.data);  
      this.overlay.addEvent(data);  
    };  
  
    this.socket.onerror = (error) => {  
      console.error('Community feed error:', error);  
      // Fall back to polling  
      this.startPolling();  
    };  
  }  
  
  startPolling() {  
    setInterval(async () => {  
      try {  
        const response = await fetch(  
          `https://your-game-server.com/api/community/recent?gameId=${this.gameId}`  
        );  
        const events = await response.json();  
        events.forEach(event => this.overlay.addEvent(event));  
      } catch (error) {  
        console.error('Polling failed:', error);  
      }  
    }, 30000); // Poll every 30 seconds  
  }  
  
  disconnect() {  
    if (this.socket) {  
      this.socket.close();  
    }  
  }  
}
```
```

## Types of Community Overlay Content

### Score Notifications

The most basic and effective overlay content. Show when friends or other players submit new scores.

* “Sarah just scored 3,200 points!”
* “New global record: 12,450 by Alex!”
* “Your friend Mike improved their score to 2,100”

### Achievement Announcements

Celebrate player milestones to create aspirational goals for the viewer.

* “Jamie just reached Level 25!”
* “3 players earned the ‘Speed Demon’ badge today”
* “First player to complete the new challenge: Rachel!”

### Activity Indicators

Show general community activity to create a sense of a living game.

* “47 players are playing right now”
* “1,234 games played today”
* “Your friends played 15 games this week”

### Social Triggers

Surface information that directly motivates the player to take action.

* “Sarah is only 50 points ahead of you!”
* “A new tournament starts in 2 hours”
* “Mike just challenged you -- tap to respond”

### Welcome Messages

For new players, community overlays can provide social proof and a warm welcome.

* “Welcome! You are joining 50,000 players worldwide”
* “3 of your friends are already playing”
* “Tip: Beat your friends’ scores to climb the leaderboard!”

## Best Practices

### Keep It Subtle

Community overlays should enhance the experience, not dominate it. Use small, non-intrusive UI elements that the player can glance at without losing focus on gameplay. The overlay should feel like ambient social information, not a pop-up demanding attention.

### Prioritize Friend Activity

Activity from friends is far more interesting and motivating than activity from strangers. Always prioritize friend-based events (friend scores, friend achievements) over global events. Show global activity only when friend data is not available or to complement friend activity.

### Refresh Data at Natural Points

Do not continuously poll for new data during active gameplay. Refresh community data at natural break points:

* When the player returns to the main menu
* Between levels or rounds
* When the game first loads
* When the player opens a social or leaderboard screen

### Use Animation Sparingly

Animated overlays catch the eye, which is good on the main menu but distracting during gameplay. Consider pausing or minimizing the overlay during active gameplay and expanding it during menus and transition screens.

### Handle Empty States

If the player has no friends playing the game, or if there is no recent community activity, handle this gracefully. Show general game statistics (“1,000 games played today”) or encouraging messages (“Invite friends to see their scores here!”) rather than an empty overlay.

### Respect Performance

Community overlays should not impact game performance. Load community data asynchronously, cache results, and limit the frequency of data refreshes. On lower-end devices, consider disabling or simplifying the overlay to preserve frame rates.

### Make It Actionable

When possible, make overlay items tappable. If the player sees “Sarah just scored 3,200 points!”, tapping on that item could show the leaderboard or offer to challenge Sarah. This turns passive social information into active engagement.

### Test with Different Friend Counts

Test your community overlay with players who have many friends, a few friends, and no friends playing the game. The experience should be valuable in all cases, even if the content differs.

## Next Steps

* **[Play With Friends](https://developers.facebook.com/documentation/games/retain/play-with-friends)** -- Retrieve the connected player data that powers community overlays.
* **[Leaderboards](https://developers.facebook.com/documentation/games/retain/leaderboards)** -- Build the leaderboards that provide score data for overlays.
* **[Building Social Games](https://developers.facebook.com/documentation/games/retain/building-social-games)** -- Understand the strategic principles behind social game design.
* **[Custom Updates](https://developers.facebook.com/documentation/games/retain/custom-updates)** -- Send targeted messages to complement community overlay visibility.
