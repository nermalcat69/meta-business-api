---
title: "Quick Start Guide"
source_url: https://developers.facebook.com/documentation/games/build/zero-permissions/overview
---

# Quick Start Guide

Updated: Jun 28, 2026

This guide walks you through building your first Facebook Instant Game from scratch. By the end, you will have a working game running inside Facebook that displays player information and responds to user interaction.

## Prerequisites

Before you begin, make sure you have the following:

* **HTML5 and JavaScript knowledge** -- Instant Games are web-based, so you need a working understanding of HTML, CSS, and JavaScript. You do not need to be an expert, but you should be comfortable writing basic web pages.
* **A Facebook account** -- You need a personal Facebook account to create and manage apps.
* **A Facebook Developer account** -- Register at [developers.facebook.com](https://developers.facebook.com/). This is free and takes only a few minutes.
* **A text editor or IDE** -- Any editor works. Visual Studio Code, Sublime Text, Atom, or even Notepad will do.
* **A way to create zip files** -- You will bundle your game as a `.zip` file for upload.

No server infrastructure is required. Facebook hosts and serves your game for you.

## Step 1: Create a Facebook app

Before writing any code, you need a Facebook App that will hold your Instant Game configuration.

* Go to [developers.facebook.com/apps](https://developers.facebook.com/apps/).
* Click **Create App**.
* Select the **Gaming** category and click **Next**.
* Enter a display name for your app (for example, "My First Instant Game") and click **Create App**.
* On the app dashboard, find **Instant Games** in the product list and click **Set Up**.
* Under **Web Hosting**, you will see options for uploading your game bundle. Keep this page open -- you will return here later.

## Step 2: Create your game files

Create a new folder on your computer for your game project. Inside it, create two files:

### `index.html`

This is the entry point for your Instant Game. Facebook will load this file when a player starts your game.

```
<!DOCTYPE html>  
<html>  
<head>  
  <meta charset="utf-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">  
  <title>My First Instant Game</title>  
  <style>  
    * {  
      margin: 0;  
      padding: 0;  
      box-sizing: border-box;  
    }  
  
    body {  
      background-color: #1a1a2e;  
      color: #ffffff;  
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;  
      display: flex;  
      justify-content: center;  
      align-items: center;  
      min-height: 100vh;  
      overflow: hidden;  
    }  
  
    #game-container {  
      text-align: center;  
      padding: 20px;  
      max-width: 400px;  
      width: 100%;  
    }  
  
    #score-display {  
      font-size: 64px;  
      font-weight: bold;  
      margin-bottom: 24px;  
      color: #0f3460;  
      text-shadow: 0 0 20px rgba(15, 52, 96, 0.5);  
    }  
  
    #tap-button {  
      background-color: #e94560;  
      color: #ffffff;  
      border: none;  
      border-radius: 50%;  
      width: 120px;  
      height: 120px;  
      font-size: 20px;  
      font-weight: bold;  
      cursor: pointer;  
      transition: transform 0.1s ease, box-shadow 0.1s ease;  
      box-shadow: 0 4px 15px rgba(233, 69, 96, 0.4);  
    }  
  
    #tap-button:active {  
      transform: scale(0.95);  
      box-shadow: 0 2px 8px rgba(233, 69, 96, 0.3);  
    }  
  
    #message {  
      margin-top: 24px;  
      font-size: 14px;  
      color: #aaa;  
    }  
  
    #loading-screen {  
      position: fixed;  
      top: 0;  
      left: 0;  
      width: 100%;  
      height: 100%;  
      background-color: #1a1a2e;  
      display: flex;  
      justify-content: center;  
      align-items: center;  
      flex-direction: column;  
      z-index: 1000;  
    }  
  
    #loading-text {  
      font-size: 18px;  
      color: #e94560;  
    }  
  </style>  
</head>  
<body>  
  <!-- Loading screen shown while the SDK initializes -->  
  <div id="loading-screen">  
    <div id="loading-text">Loading...</div>  
  </div>  
  
  <!-- Main game content (hidden until the game starts) -->  
  <div id="game-container" style="display: none;">  
    <div id="score-display">0</div>  
    <button id="tap-button">TAP!</button>  
    <div id="message">Tap the button as fast as you can!</div>  
  </div>  
  
  <!-- Load the FBInstant SDK -->  
  <script src="https://connect.facebook.net/en_US/fbinstant.8.0.js"></script>  
  
  <!-- Load your game logic -->  
  <script src="game.js"></script>  
</body>  
</html>
```

### `game.js`

This file contains all your game logic and SDK integration.

```
// Game state  
var score = 0;  
  
// Step 1: Initialize the SDK  
// FBInstant.initializeAsync() must be called before using any other SDK functions.  
// It returns a Promise that resolves when the SDK is ready.  
FBInstant.initializeAsync()  
  .then(function() {  
    // Step 2: Report loading progress  
    // While your game assets load, report progress to show the loading bar.  
    // Values range from 0 to 100.  
    FBInstant.setLoadingProgress(50);  
  
    // In a real game, you would load images, sounds, and other assets here.  
    // For this example, we have minimal assets, so we go straight to 100%.  
    FBInstant.setLoadingProgress(100);  
  
    // Step 3: Start the game  
    // startGameAsync() tells Facebook the game is ready to play.  
    // The loading screen will be dismissed and your game content will appear.  
    return FBInstant.startGameAsync();  
  })  
  .then(function() {  
    // The game has started! Initialize the game UI.  
    onGameStart();  
  })  
  .catch(function(error) {  
    // Handle initialization errors.  
    console.error('Failed to initialize Instant Game:', error);  
  });  
  
function onGameStart() {  
  // Step 4: Get the player ID  
  // The FBInstant.player object provides a player-scoped ID.  
  var playerID = FBInstant.player.getID();  
  
  // Hide the loading screen and show the game  
  document.getElementById('loading-screen').style.display = 'none';  
  document.getElementById('game-container').style.display = 'block';  
  
  // Set up the tap button  
  var tapButton = document.getElementById('tap-button');  
  tapButton.addEventListener('click', onTap);  
  
  // Log that the game started successfully  
  console.log('Game started for player:', playerID);  
}  
  
function onTap() {  
  // Increment the score  
  score++;  
  
  // Update the display  
  document.getElementById('score-display').textContent = score;  
  
  // Show milestone messages  
  if (score === 10) {  
    document.getElementById('message').textContent = 'Nice! Keep going!';  
  } else if (score === 50) {  
    document.getElementById('message').textContent = 'You are on fire!';  
  } else if (score === 100) {  
    document.getElementById('message').textContent = 'Incredible! 100 taps!';  
  }  
}
```

## Step 3: Understand the SDK Lifecycle

Every Instant Game follows the same initialization lifecycle. Understanding this flow is essential.

```
Load Page
    |
    v
FBInstant.initializeAsync()     <-- SDK becomes available
    |
    v
FBInstant.setLoadingProgress()  <-- Update the loading bar (0-100)
    |
    v
FBInstant.startGameAsync()      <-- Loading screen dismissed, game begins
    |
    v
Game is now playable
```

### `FBInstant.initializeAsync()`

This must be the first SDK call. It initializes the SDK and resolves when the SDK is ready. You cannot call any other FBInstant methods before this resolves.

```
FBInstant.initializeAsync().then(function() {  
  // SDK is ready. You can now use other FBInstant methods.  
});
```

### `FBInstant.setLoadingProgress(progress)`

Call this while your game assets are loading. The `progress` parameter is a number from 0 to 100 representing the percentage of loading completed. This updates the loading bar that players see.

```
FBInstant.setLoadingProgress(25);  // 25% loaded  
FBInstant.setLoadingProgress(50);  // 50% loaded  
FBInstant.setLoadingProgress(100); // Fully loaded
```

**Tip**: For the best player experience, report progress honestly. If you are loading 10 images, report 10% after each image loads. Do not jump straight from 0 to 100 unless your game truly has nothing to load.

### `FBInstant.startGameAsync()`

Call this after all essential assets are loaded and your game is ready to be displayed. This dismisses Facebook's loading screen and shows your game. The player can now interact with your game.

```
FBInstant.startGameAsync().then(function() {  
  // The loading screen is gone. Show your game!  
});
```

## Step 4: Access player information

Once the SDK is initialized, you can retrieve the current player's ID.

| Method | Returns | Description |
| --- | --- | --- |
| `FBInstant.player.getID()` | `string` or `null` | A unique, player-scoped ID. This ID is unique to your game -- the same player will have a different ID in a different game. |

```
var id = FBInstant.player.getID();       // "1234567890"
```

**Important**: The player ID returned by `getID()` is scoped to your game. You cannot use it to look up the player in other games or on Facebook. This is by design, for player privacy.

### Displaying player names and photos

To display a player's name or profile photo, use **overlay views**. Overlay views are iframes controlled by Meta that render player data securely without exposing it to your game code. You define the layout using XML, and Meta resolves player data at render time.

For a step-by-step guide with code examples, see [Displaying the Current Player's Profile](https://developers.facebook.com/documentation/games/build/zero-permissions/example-game-use-cases#displaying-the-current-player-s-profile).

## Step 5: Create and upload your bundle

Once your game files are ready, you need to package them into a zip file and upload them to Facebook.

### Creating the bundle

* Select all your game files (`index.html`, `game.js`, and any assets like images or sounds).
* Compress them into a `.zip` file.
* **Make sure `index.html` is at the root of the zip file**, not inside a subfolder.

Correct structure:

```
my-game.zip
  ├── index.html      <-- Must be at the root
  ├── game.js
  ├── images/
  │   └── sprite.png
  └── sounds/
      └── click.mp3
```

Incorrect structure (will not work):

```
my-game.zip
  └── my-game/        <-- Do NOT wrap files in a folder
      ├── index.html
      └── game.js
```

**Size limit**: Your zip file can be up to 200 MB, but for best performance, keep the initial bundle under 5 MB. See the [Game Performance](https://developers.facebook.com/documentation/games/build/game-performance) guide for optimization tips.

### Uploading the bundle

* Go to your app in the [Facebook Developer Dashboard](https://developers.facebook.com/apps/).
* Navigate to **Instant Games** > **Web Hosting**.
* Click **Upload Version**.
* Select your `.zip` file and upload it.
* Once the upload finishes, you will see your version listed with a **Stage for Testing** button. Click it.
* After staging, click **Push to Production** when you are ready to make it live.

## Step 6: Test your game

You can test your Instant Game in several ways.

### Testing on desktop

* After staging your build, go to [www.facebook.com/embed/instantgames/YOUR\_APP\_ID/player⁠](https://www.facebook.com/) (replace `YOUR_APP_ID` with your actual app ID).
* You can also find a direct test link in the App Dashboard under **Instant Games** > **Details**.

### Testing on mobile

* Open the **Facebook app** or **Messenger app** on your phone.
* Make sure you are logged in with an account that has a role on the app (Admin, Developer, or Tester).
* Search for your game by name, or use the direct link from the dashboard.
* The game will load inside the Facebook or Messenger app.

### Adding testers

By default, only you can see your staged game. To let others test it:

* Go to your app in the Developer Dashboard.
* Navigate to **Roles** > **Test Users** or **Roles** > **People**.
* Add other Facebook users as Testers or Developers.

### Using the developer console

While testing, you can open the browser developer console (on desktop) to see `console.log` output, network requests, and errors. This is invaluable for debugging.

On mobile, debugging is more difficult. Consider adding an on-screen debug overlay during development, or use remote debugging tools like Chrome DevTools for Android WebView.

## Complete working example

Here is the complete set of files for reference, consolidated into one listing.

**Project structure:**

```
instant-game/
  ├── index.html
  └── game.js
```

The `index.html` and `game.js` files shown in Step 2 above form a complete, working Instant Game. To get it running:

* Create the two files with the code above.
* Zip them together (make sure `index.html` is at the root of the zip).
* Upload the zip to your app's Web Hosting section.
* Stage the build for testing.
* Open the test link on Facebook.

You should see a big red button. Each tap increments the score counter. To add a player profile display with name and photo, see [Example Game Use Cases](https://developers.facebook.com/documentation/games/build/zero-permissions/example-game-use-cases).

## Next steps

Now that you have a working Instant Game, here are some things to explore:

* **[Zero Permissions](https://developers.facebook.com/documentation/games/build/zero-permissions/overview)** -- Learn how to display player names, photos, and friend lists using overlay views.
* **[Compatible Game Engines](https://developers.facebook.com/documentation/games/build/compatible-engines)** -- Use a game engine like Phaser or Construct to build more complex games.
* **[Game Performance](https://developers.facebook.com/documentation/games/build/game-performance)** -- Optimize your game for fast loading and smooth gameplay.
* **Leaderboards** -- Use `FBInstant.getLeaderboardAsync()` to add competitive leaderboards.
* **Context** -- Use `FBInstant.context` to build social and multiplayer experiences.
* **Ads** -- Monetize your game with interstitial and rewarded video ads.
* **In-App Purchases** -- Sell virtual goods using `FBInstant.payments`.

## Troubleshooting

### "FBInstant is not defined"

Make sure you are loading the SDK script before your game script:

```
<script src="https://connect.facebook.net/en_US/fbinstant.8.0.js"></script>  
<script src="game.js"></script>
```

Also, the SDK will only work when your game is loaded inside the Facebook or Messenger environment. It will not work if you open `index.html` directly in your browser.

### The loading screen never goes away

Make sure you are calling both `FBInstant.setLoadingProgress(100)` and `FBInstant.startGameAsync()`. The loading screen will not dismiss until `startGameAsync()` is called.

### My game works on desktop but not on mobile

Mobile devices have less memory and processing power. Check the browser console for errors (use remote debugging), and review the [Game Performance](https://developers.facebook.com/documentation/games/build/game-performance) guide.

### I cannot find my game on Facebook

Make sure:

* Your build has been staged for testing (not just uploaded).
* You are logged in with an account that has a role on the app.
* The app has not been disabled or flagged for policy violations.
