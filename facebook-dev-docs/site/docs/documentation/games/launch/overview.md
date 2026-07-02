---
title: "Frequently Asked Questions"
source_url: https://developers.facebook.com/documentation/games/launch/overview
---

# Frequently Asked Questions

Updated: Jun 28, 2026

This page answers the most common questions developers ask about building, testing, launching, and monetizing Instant Games on Facebook. Questions are organized by topic for easy browsing. If your question is not answered here, see the [Get Support](https://developers.facebook.com/documentation/games/support/overview) section for additional help channels.

---

## General

### What are Instant Games?

Instant Games are lightweight, HTML5-based games that run directly inside the Facebook app (iOS and Android) and on the web at [facebook.com/gaming⁠](https://www.facebook.com/gaming). Players can discover and play Instant Games instantly, with no app store download or installation required. See [What Are Instant Games?](https://developers.facebook.com/documentation/games/overview/what-are-instant-games) for a comprehensive overview.

### What technologies can I use to build an Instant Game?

Instant Games are built using standard web technologies: HTML5, JavaScript, and CSS. You can use any JavaScript game framework or engine that outputs HTML5, including Phaser, PixiJS, Three.js, Cocos2d-JS, Unity (WebGL export), Construct 3, PlayCanvas, and many others. Your game integrates with the Facebook platform through the **Instant Games SDK** (`FBInstant`), which is a JavaScript library loaded via a script tag.

### What platforms do Instant Games run on?

Instant Games run on:

* **Facebook app on iOS** (iPhone and iPad).
* **Facebook app on Android** (phones and tablets).
* **Facebook.com on desktop web browsers** (Chrome, Firefox, Safari, Edge).
* **Facebook Messenger** (iOS and Android) -- for games launched from Messenger threads or Rooms.
* **Facebook Gaming app** (Android) -- for games launched from the Gaming tab.

Your game should work across all of these surfaces. Test on multiple platforms to ensure a consistent experience.

### Is there a cost to publish an Instant Game?

No. There is no fee to create a Facebook Developer account, register an app, or publish an Instant Game. Facebook takes a revenue share from in-app purchases (the current rate is 30%, consistent with industry-standard platform fees), but there is no upfront cost to publish.

### Do I need to be an approved partner to publish a game?

Yes. You must be accepted into the Approved Partner Program before your game can go live on Instant Games. See the [Approved Partner Program guide](https://developers.facebook.com/documentation/games/launch/approved-partner-program) for application steps and requirements.

### What types of games work best on the platform?

Games that work best tend to have these characteristics:

* **Simple core mechanics** that are easy to learn and play in short sessions (2-5 minutes).
* **Social features** like leaderboards, challenges, and tournaments that leverage Facebook’s social graph.
* **Broad appeal** across demographics and geographies.
* **Replay value** through procedural content, progressive difficulty, or competitive elements.

Popular genres include match-3 puzzles, word games, card games, endless runners, trivia, casual strategy, and sports games. However, more complex genres like RPGs and simulation games can also succeed if they are well-optimized and socially integrated.

### Can I port my existing mobile game to Instant Games?

Yes, many successful Instant Games started as native mobile games. If your game is already built with an HTML5-capable engine, the port requires three main steps. Integrate the Instant Games SDK, optimize your bundle size and load time, and adapt your UI for the Instant Games container. If your game is built natively (Swift, Kotlin, C++), you would need to rebuild it using web technologies or use a game engine with WebGL export capability (such as Unity).

### Is there a maximum number of games I can publish?

There is no hard limit on the number of Instant Games a single developer or organization can publish. Each game requires its own Facebook App and must pass the review process independently.

---

## Building and Development

### What is the maximum bundle size for an Instant Game?

The maximum total bundle size is **200 MB**. However, smaller bundles provide a significantly better player experience. Keep your initial bundle under **5 MB** and lazy-load additional assets after the game has started. See [Game Performance](https://developers.facebook.com/documentation/games/build/game-performance) for optimization strategies.

### How do I handle the game lifecycle (loading, starting, pausing)?

The Instant Games SDK manages the lifecycle through several key methods:

* Call `FBInstant.initializeAsync()` to initialize the SDK.
* Load your game assets and call `FBInstant.setLoadingProgress(percentage)` to update the loading bar.
* Call `FBInstant.startGameAsync()` when your game is ready to be displayed.
* Use `FBInstant.onPause(callback)` to handle pause events (when the player switches away from the game).
* Call `FBInstant.quit()` to exit the game.

See the [SDK Reference](https://developers.facebook.com/documentation/games/sdk-reference) for complete API details.

### How do I save and load player progress?

Use the player data APIs:

* **Save:**`FBInstant.player.setDataAsync({ key: value })` to persist data.
* **Load:**`FBInstant.player.getDataAsync(['key1', 'key2'])` to retrieve data.
* **Flush:**`FBInstant.player.flushDataAsync()` to immediately persist pending writes.

Player data is stored on Facebook’s servers and persists across sessions, devices, and platforms. The total size of player data is limited to 1 MB per player.

### Can I use a backend server with my Instant Game?

Yes. The game client runs in the player’s browser, but you can use your own backend server for features like real-time multiplayer, server-side validation, custom leaderboards, and analytics. Your game client can communicate with your server using standard web APIs (`fetch`, `XMLHttpRequest`, WebSockets). Use `FBInstant.player.getSignedPlayerInfoAsync()` to authenticate requests from the game client to your server.

### What game engines are compatible with Instant Games?

Any game engine that can output HTML5/WebGL content can be used. Popular choices include:

* **Phaser** (2 and 3)
* **PixiJS**
* **Three.js**
* **Cocos2d-JS / Cocos Creator**
* **Unity** (WebGL export)
* **Construct 3**
* **PlayCanvas**
* **GDevelop**
* **Defold**

Each engine has its own process for exporting to HTML5. After export, you integrate the Instant Games SDK and package your game as a bundle.

### How do I localize my game for different languages?

Use `FBInstant.getLocale()` to detect the player’s language and region. This returns a locale string like `"en_US"`, `"ja_JP"`, or `"pt_BR"`. Load the appropriate language files based on this locale. The platform does not provide automatic translation -- you are responsible for creating and managing your own localized content.

### Are there restrictions on what my game can do?

Yes. Instant Games run in a sandboxed environment with certain restrictions:

* You cannot access the player’s device filesystem, camera, microphone, or other hardware features (except haptic feedback via the SDK).
* You cannot navigate the player away from the game to external URLs (use `FBInstant.shareAsync()` or `FBInstant.updateAsync()` for sharing).
* You must use the Instant Games SDK for all Facebook platform interactions (authentication, social features, payments).
* Your game must comply with Facebook’s [Platform Policies](https://developers.facebook.com/policy/) and [Community Standards⁠](https://www.facebook.com/communitystandards/).
* Games with real-money gambling, explicit content, or content that violates Facebook policies will be rejected.

### How do I handle different screen sizes and orientations?

Instant Games can be played on a wide range of screen sizes, from small phones to large desktop monitors. Best practices:

* Use a responsive or adaptive layout that adjusts to the available viewport.
* Use `window.innerWidth` and `window.innerHeight` to detect the available space.
* Listen for the `resize` event to handle orientation changes and viewport size changes.
* Test on multiple screen sizes, including small phones (320px wide) and tablets.
* Design critical UI elements to be tappable on mobile (minimum 44x44 pixels).

---

## Testing and debugging

### How do I test my game during development?

There are several ways to test your Instant Game:

* **Local testing:** You can develop and test your game locally in a web browser using a local development server. The Instant Games SDK will not be available locally, so you will need to mock the SDK calls or use the SDK’s test mode.
* **Upload to App Dashboard:** Upload your game bundle to the [App Dashboard](https://developers.facebook.com/apps/) and use the “Share to Messenger” or “Play” button to test it on a real device. Only users listed as administrators, developers, or testers on your app can access the game before it is published.
* **Embedded player:** The App Dashboard includes an embedded player that lets you preview your game in a simulated mobile environment directly in your browser.

### How do I debug issues in my game?

* **Desktop browser:** Use Chrome DevTools (or your browser’s developer tools) to inspect the game, view console logs, debug JavaScript, and profile performance.
* **Android:** Enable USB debugging on your Android device, connect it to your computer, and use Chrome’s `chrome://inspect` to remotely debug the game running in the Facebook app.
* **iOS:** Use Safari’s Web Inspector to remotely debug the game running in the Facebook app on an iOS device. You will need a Mac and a USB connection.
* **Console logging:** Use `console.log()`, `console.warn()`, and `console.error()` in your game code. Logs are visible in the remote debugging tools described above.

### Why does my game work locally but not on Facebook?

Common reasons include:

* **Missing SDK calls:** Your game must call `FBInstant.initializeAsync()` and `FBInstant.startGameAsync()` in the correct order. Without these calls, the game will hang on the loading screen.
* **CORS issues:** If your game makes requests to your own backend server, ensure your server sends proper CORS headers.
* **Mixed content:** All resources must be loaded over HTTPS. The webview blocks HTTP resources.
* **Unsupported APIs:** Some browser APIs may not be available in the Facebook app’s webview. Use `FBInstant.getSupportedAPIs()` to check feature availability.
* **Bundle structure:** The bundle must be a valid ZIP file with `index.html` at the root.

### How do I add test users to my app?

In the [App Dashboard](https://developers.facebook.com/apps/), go to your app’s “Roles” section. You can add Facebook users as administrators, developers, or testers. Testers can access your game before it is published, but they cannot modify app settings.

### Can I use analytics tools with my Instant Game?

Yes. You can use `FBInstant.logEvent()` to log custom analytics events that appear in the App Dashboard’s analytics section. You can also integrate third-party analytics services (Google Analytics, Amplitude, Mixpanel, and so on) by including their JavaScript SDKs in your game bundle. Note that some analytics SDKs may use cookies or local storage, which may have limited availability in the game’s webview.

### My game is stuck on the loading screen. What is wrong?

This is usually caused by one of the following:

* **Not calling `FBInstant.startGameAsync()`:** The platform waits for `FBInstant.startGameAsync()` to hide the loading screen. Make sure your code calls `FBInstant.startGameAsync()` after initialization and asset loading.
* **An unhandled error during initialization:** If your loading code throws an error before `startGameAsync()` is called, the game will hang. Add error handling around your initialization logic.
* **Assets failing to load:** If an asset (image, sound, data file) fails to load and your code waits for it indefinitely, the game will never reach `startGameAsync()`. Use timeouts and error handling for all asset loads.
* **SDK not loaded:** Ensure the SDK script tag is included in your HTML file and loads before your game code.

---

## Launch and review

### How do I submit my game for review?

* Create a Facebook App in the [App Dashboard](https://developers.facebook.com/apps/).
* Add the “Instant Games” product to your app.
* Upload your game bundle in the “Web Hosting” section.
* Configure your app settings (display name, icon, category, and so on).
* Submit your app for review by clicking the “Submit for Review” button.

Your game will be reviewed by the Facebook team for quality, policy compliance, and functionality. See the [Quality Guidelines](https://developers.facebook.com/documentation/games/launch/reviews/quality-guidelines) for detailed requirements.

### How long does the review process take?

Review times vary, but most games are reviewed within **5-7 business days**. Complex games or games that require additional scrutiny may take longer. If your game is rejected, you will receive specific feedback about what needs to be fixed. After making changes, you can resubmit.

### What are the most common reasons for review rejection?

The most common rejection reasons are:

* **No tutorial or poor onboarding.** Every game must have a clear, functional tutorial.
* **Missing UI elements.** Games must include a pause button, volume/mute control, and back navigation.
* **Excessive or poorly timed ads.** Ads must not interrupt active gameplay or appear too frequently.
* **Poor performance.** Games that crash, lag, or have excessively long load times may be rejected.
* **Low-quality assets.** Game icons, screenshots, and cover images must meet the [Asset Design Guidelines](https://developers.facebook.com/documentation/games/launch/reviews/asset-design-guidelines).
* **Policy violations.** Content that violates Facebook’s Platform Policies (explicit content, misleading claims, and so on).
* **Broken functionality.** Features that do not work correctly, dead buttons, or error screens visible to the player.
* **Copycat or clone games.** Games that closely copy existing well-known games without adding meaningful originality.

### Can I update my game after it is published?

Yes. You can upload a new game bundle at any time through the App Dashboard. Updates are typically available to players within minutes after upload. Minor updates (bug fixes, content additions, balance changes) do not require re-review. Significant changes (new monetization, new social features, major UI overhauls) may trigger a re-review.

### Can I unpublish or remove my game?

Yes. You can unpublish your game at any time from the App Dashboard. Unpublishing removes it from discovery surfaces, but players who have existing shortcuts or bookmarks may still see it temporarily. You can republish the game later by submitting it for review again.

---

## Monetization

### What monetization options are available?

Instant Games support two primary revenue streams:

* **In-App Purchases (IAP):** Sell virtual goods, currency packs, premium content, or subscriptions directly within your game. Facebook processes payments and handles receipts.
* **In-App Advertising (IAA):** Display ads within your game using the Facebook Audience Network. Supported ad formats include rewarded video ads, interstitial ads, and banner ads.

Most successful games use a hybrid approach combining both IAP and IAA.

### How does revenue sharing work for in-app purchases?

Facebook takes a **30% revenue share** on in-app purchases, which is consistent with industry-standard platform fees (Apple App Store, Google Play Store). You receive 70% of the purchase price. Facebook processes and disburses payments.

### Are in-app purchases available on iOS?

**Yes.** In-App Purchases are supported on iOS, Android, and the web. On iOS, purchases are processed through Apple’s billing system. No additional code changes are required — if your game already supports IAP, it works on iOS automatically.

As a best practice, always check for payment API availability before displaying purchase UI, since there may be edge cases where payments are temporarily unavailable on a particular client or device:

```
```
const paymentsAvailable = FBInstant.getSupportedAPIs().includes('payments.purchaseAsync');  
  
if (paymentsAvailable) {  
  showPurchaseOptions();  
} else {  
  hidePurchaseOptions();  
}
```
```

### How do I set up products for in-app purchases?

Configure your products in the [App Dashboard](https://developers.facebook.com/apps/) under your app’s “Instant Games” > “In-App Purchases” section. For each product, you define:

* **Product ID:** A unique string identifier used in your game code.
* **Product name:** The display name shown to the player.
* **Product type:** Whether the product is `Consumable` or `Non-consumable`.
* **Price:** The price in USD (Facebook handles currency conversion for other regions).

After configuring products, use `FBInstant.payments.getCatalogAsync()` to retrieve them in your game.

### How do ads work in Instant Games?

Instant Games use the **Facebook Audience Network** for ad serving. You create ad placements in the App Dashboard, then load and display ads using the Audience Network SDK. Supported ad formats:

* **Rewarded video ads:** Full-screen video ads that the player chooses to watch in exchange for an in-game reward (extra life, bonus currency, and so on). These have the highest eCPM and player acceptance.
* **Interstitial ads:** Full-screen ads shown at natural transition points (between levels, after game over). Show these no more than once every 30 seconds.
* **Banner ads:** Small ads displayed at the top or bottom of the screen during non-gameplay moments (menus, loading screens, results screens).

### How much can I earn from ads?

Ad revenue depends on many factors, including your game’s audience (geography, demographics), ad placement frequency, ad format mix, and overall engagement. eCPMs (earnings per thousand impressions) vary by country and ad format. Rewarded video ads typically generate the highest eCPMs, followed by interstitials, then banners. Exact revenue figures are specific to each game and market.

### When and how do I get paid?

Revenue from both IAP and advertising is tracked in the App Dashboard. Facebook disburses payments according to its standard payout schedule. You must set up a valid payment account in your developer settings to receive payments. Details on payout thresholds, schedules, and supported payment methods are available in the App Dashboard under “Monetization” > “Payouts.”

---

## Social features

### How do leaderboards work?

Leaderboards are ranked lists of player scores. You create leaderboards in the App Dashboard and interact with them via the SDK. Key features:

* **Global leaderboards:** Show the top scores across all players.
* **Friends leaderboards:** Show scores from friends who also play your game, using `leaderboard.getConnectedPlayerEntriesAsync()`.
* **Contextual leaderboards:** Scoped to a specific context (e.g., a Messenger thread).
* **Automatic rank calculation:** The platform handles ranking. You just submit scores.

See the [SDK Reference](https://developers.facebook.com/documentation/games/sdk-reference) for leaderboard API details.

### How do tournaments work?

Tournaments are time-limited competitive events. You create a tournament with a title, score format, sort order, and end time. Players can join, submit scores, and share the tournament with friends. Tournaments are surfaced in the Facebook app, driving organic engagement and re-engagement.

### How do I send game updates to players?

Use `FBInstant.updateAsync()` to send custom updates to the current game context (e.g., a Messenger thread). Updates can include text, images, and call-to-action buttons. You can also use `FBInstant.shareAsync()` to let the player share content to their feed or other conversations.

**Important:** Updates are subject to rate limits and platform policies. Do not send excessive or spam-like updates, as this can result in your game being penalized or removed.

### How do I find out which friends play my game?

Use `FBInstant.player.getConnectedPlayersAsync()` to get a list of the current player’s friends who have also played your game. This returns an array of `ConnectedPlayer` objects with each friend’s ID, name, and photo.

### What is a game context?

A “context” represents the social setting in which the game is being played. Context types include:

* **SOLO:** The player is playing alone.
* **THREAD:** The game was launched from a Messenger conversation.
* **GROUP:** The game was launched from a Facebook Group.
* **ROOM:** The game was launched from a Messenger Room (video call). See [Rooms Co-Play](https://developers.facebook.com/documentation/games/build/rooms-coplay).

You can read the context type with `FBInstant.context.getType()` and the context ID with `FBInstant.context.getID()`. Use context information to tailor the game experience -- for example, showing a multiplayer mode in a THREAD context and a solo mode in a SOLO context.

### Can players chat while playing?

Players in a Messenger thread or Room can use the existing Messenger chat or video call features alongside the game. There is no in-game chat API provided by the Instant Games SDK. If you need in-game chat, you would need to implement it yourself using your own backend.

### How do I invite players to my game?

You can use several mechanisms to attract new players:

* **`FBInstant.shareAsync()`:** Opens a share dialog for the player to send a game update to their feed or conversations.
* **`FBInstant.updateAsync()`:** Sends an update to the current context (Messenger thread or Room).
* **`FBInstant.context.chooseAsync()`:** Lets the player choose a friend or conversation to play with.
* **Tournaments:** Tournament share functionality naturally invites friends to join and compete.

---

## Performance

### What is a good target load time?

Aim for your game to be playable within **3 seconds** of the player tapping on it. Every additional second of load time significantly increases the drop-off rate. The top-performing Instant Games load in under 2 seconds.

### How do I reduce my game’s load time?

Key strategies:

* **Minimize initial bundle size.** Keep the initial bundle under 5 MB. Defer non-critical assets.
* **Use progressive loading.** Load critical gameplay assets first, then load additional content in the background.
* **Compress aggressively.** Use texture compression, minified JavaScript, and compressed audio (OGG/MP3 instead of WAV).
* **Report progress.** Call `FBInstant.setLoadingProgress()` to give the player visual feedback during loading.
* **Audit dependencies.** Remove unused JavaScript libraries, images, and data files from your bundle.
* **Use asset CDNs.** For large games, load non-essential assets from your own CDN after the game starts rather than bundling them.

See [Game Performance](https://developers.facebook.com/documentation/games/build/game-performance) for a comprehensive optimization guide.

### My game lags on older Android phones. What can I do?

Older Android phones have limited CPU, GPU, and memory. Optimization strategies include:

* **Reduce draw calls.** Batch rendering operations. Use sprite sheets instead of individual images.
* **Limit particle effects.** Reduce or disable particle systems on low-end devices.
* **Use simpler shaders.** Avoid complex WebGL shaders that stress the GPU.
* **Reduce canvas resolution.** Render at a lower resolution and scale up, rather than rendering at native resolution.
* **Profile your code.** Use Chrome DevTools’ Performance panel (via remote debugging) to identify bottlenecks.
* **Test on real devices.** Emulators do not accurately reflect real-world performance.

### How much memory can my game use?

There is no fixed memory limit published for Instant Games, but the practical limit depends on the player’s device. On low-end Android phones, available memory may be as low as 512 MB total for the entire app (including the Facebook app itself). On iOS, memory limits vary by device model.

If your game exceeds available memory, the operating system may terminate the Facebook app (and your game with it). Monitor your memory usage and optimize by:

* Unloading unused assets when they are no longer needed.
* Using compressed texture formats.
* Avoiding creating large arrays or objects unnecessarily.
* Disposing of game objects and event listeners when they are no longer needed.

### Does my game need to support offline play?

No, Instant Games require an internet connection. The platform does not support offline play. However, you should handle temporary network interruptions gracefully -- show a “connection lost” message rather than crashing, and attempt to reconnect.

### What audio formats should I use?

Use compressed audio formats for the best balance of quality and file size:

* **MP3:** Widely supported, good compression, suitable for music and long audio clips.
* **OGG (Vorbis):** Good quality and compression. Supported on most platforms except older iOS Safari versions.
* **AAC (M4A):** Good quality, well-supported on iOS.

Avoid uncompressed formats like WAV -- they significantly increase bundle size without a perceptible quality improvement in the context of a mobile game.

---

## Account and support

### How do I create a Facebook Developer account?

Go to [developers.facebook.com](https://developers.facebook.com/) and sign in with your Facebook account. Follow the prompts to register as a developer. You will need to verify your identity and agree to the Facebook Platform Terms.

### How do I report a bug in the Instant Games platform or SDK?

Report bugs through the [Facebook Developer Support](https://developers.facebook.com/support/) portal. When reporting a bug:

* Include the SDK version you are using.
* Describe the expected behavior and the actual behavior.
* Provide steps to reproduce the issue.
* Include relevant error messages, console logs, and screenshots.
* Specify the platform (iOS, Android, and Web) and device model where the issue occurs.

### I am an approved partner. How do I get dedicated support?

Approved partners have access to dedicated support channels provided during the onboarding process. Contact your partner manager or use the partner support portal. If you have lost access to these channels, contact [Facebook Developer Support](https://developers.facebook.com/support/) and mention your approved partner status.

### How do I transfer ownership of my game to another developer?

App ownership can be transferred through the [App Dashboard](https://developers.facebook.com/apps/). Go to your app’s “Roles” section, add the new owner as an administrator, and then use the “Transfer” option in the app settings. Both the current owner and the new owner must have valid Facebook Developer accounts.

### My game was rejected. What should I do?

When your game is rejected, you will receive a message explaining the specific reasons for rejection. Carefully review each point, make the necessary changes, and resubmit. Common steps:

* Read the rejection feedback thoroughly.
* Review the [Quality Guidelines](https://developers.facebook.com/documentation/games/launch/reviews/quality-guidelines) for the relevant requirements.
* Make the required changes to your game.
* Test the changes on multiple platforms and devices.
* Upload the updated bundle and resubmit for review.

If you believe the rejection was a mistake, you can appeal through the [Developer Support](https://developers.facebook.com/support/) portal.

### How do I delete my game entirely?

You can delete your Facebook App from the [App Dashboard](https://developers.facebook.com/apps/) under the app’s settings. Deleting an app is permanent and cannot be undone. All associated data, analytics, player data, and configurations will be lost. Consider unpublishing the game instead of deleting it if you might want to restore it in the future.

### Where can I find other Instant Games developers?

* **[Facebook Gaming Developer Community⁠](https://www.facebook.com/groups/games.developers/)** -- A Facebook Group where developers share tips, ask questions, and connect with the community.
* **[Stack Overflow⁠](https://stackoverflow.com/questions/tagged/facebook-instant-games)** -- Ask and answer technical questions tagged with `facebook-instant-games`.
* **[Facebook Developer Blog](https://developers.facebook.com/blog/)** -- Announcements, feature launches, and platform updates.

### How do I stay updated on platform changes?

* Subscribe to the [Facebook Gaming Developer Blog](https://developers.facebook.com/blog/) for announcements.
* Join the [Facebook Gaming Developer Community⁠](https://www.facebook.com/groups/games.developers/) group on Facebook.
* Monitor the [Platform Changelog](https://developers.facebook.com/docs/games/changelog/) for SDK updates and breaking changes.
* Check the App Dashboard for notifications about your specific apps.

---

## Still have questions?

If your question is not answered here, try these resources:

* **[SDK Reference](https://developers.facebook.com/documentation/games/sdk-reference)** -- Complete API documentation for the Instant Games SDK.
* **[Best Practices](https://developers.facebook.com/documentation/games/overview/best-practices)** -- Recommendations for building, launching, and growing your game.
* **[Get Support](https://developers.facebook.com/documentation/games/support/overview)** -- Contact the Facebook Developer Support team.
* **[Developer Community⁠](https://www.facebook.com/groups/games.developers/)** -- Connect with other Instant Games developers.
