---
title: "Rewarded Ads"
source_url: https://developers.facebook.com/documentation/games/tools/ads-manager
---

# Rewarded Ads

Updated: Mar 3, 2026

Rewarded ads are full-screen video or interactive advertisements that players **choose to watch** in exchange for an in-game reward.

When implemented well, rewarded ads feel less like advertising and more like a game feature. Players actively seek them out, return to your game to watch them, and come to view them as a positive part of the experience.

## Why Rewarded Ads Work

Rewarded ads create a **three-way win**:

* **Players win** because they receive a tangible, valuable reward (extra life, bonus currency, hint, etc.) without spending real money.
* **Developers win** because rewarded ads generate the highest eCPM of any ad format, often 2-5x more than interstitials.
* **Advertisers win** because players are engaged and attentive — they chose to watch the ad and are watching it to completion, resulting in higher brand recall and conversion rates.

This voluntary, value-exchange model means players rarely feel frustrated by rewarded ads. In fact, many players report that they **like** rewarded ads because they provide access to premium-feeling content for free.

## Creating a Rewarded Placement

Set up your rewarded ad placement in Monetization Manager:

* Go to the [Monetization Manager⁠](https://www.facebook.com/audiencenetwork/).
* Select your app.
* Click **Create Placement**.
* Choose **Instant Games** as the platform.
* Select **Rewarded Video** as the ad format.
* Give the placement a descriptive name (e.g., “Extra Life Reward”, “Bonus Currency Reward”, “Continue After Game Over”).
* Save and note the **Placement ID**.

Create separate placements for different reward types. This lets you track which rewards generate the most engagement and revenue.

## SDK Integration

Rewarded ads follow the same **create, preload, show** pattern as interstitial ads, with the critical addition of **granting the reward** after the ad completes.

### Creating a Rewarded Ad Instance

```
```
var rewardedAd = null;  
  
FBInstant.getRewardedVideoAsync('YOUR_PLACEMENT_ID')  
  .then(function (rewarded) {  
    rewardedAd = rewarded;  
    console.log('Rewarded ad instance created.');  
  })  
  .catch(function (error) {  
    console.error('Failed to create rewarded ad instance:', error.code);  
  });
```
```

### Preloading the Ad

```
```
rewardedAd.loadAsync()  
  .then(function () {  
    console.log('Rewarded ad preloaded and ready.');  
  })  
  .catch(function (error) {  
    console.error('Failed to preload rewarded ad:', error.code);  
  });
```
```

### Showing the Ad and Granting the Reward

```
```
rewardedAd.showAsync()  
  .then(function () {  
    // The player watched the entire ad. Grant the reward!  
    grantReward();  
    console.log('Rewarded ad completed. Reward granted.');  
  
    // Preload the next rewarded ad  
    preloadNextRewardedAd();  
  })  
  .catch(function (error) {  
    // The player did not complete the ad (dismissed early, error, etc.)  
    // Do NOT grant the reward.  
    console.error('Rewarded ad not completed:', error.code);  
  });
```
```

**Critical:** Only grant the reward when `showAsync` resolves successfully (in the `.then` handler). If `showAsync` rejects (in the `.catch` handler), the player did not complete the ad and should not receive the reward.

## Complete Integration Example

Here is a full implementation for a common use case: granting an extra life after game over.

```
```
var rewardedAd = null;  
var isRewardedAdReady = false;  
  
// Initialize and preload a rewarded ad  
function preloadRewardedAd() {  
  isRewardedAdReady = false;  
  
  FBInstant.getRewardedVideoAsync('YOUR_PLACEMENT_ID')  
    .then(function (rewarded) {  
      rewardedAd = rewarded;  
      return rewardedAd.loadAsync();  
    })  
    .then(function () {  
      isRewardedAdReady = true;  
      console.log('Rewarded ad is ready.');  
    })  
    .catch(function (error) {  
      isRewardedAdReady = false;  
      handleRewardedAdError(error, 'preload');  
    });  
}  
  
// Show a "Watch ad for extra life" button on the game-over screen  
function showGameOverScreen(score) {  
  displayScore(score);  
  displayRestartButton();  
  
  if (isRewardedAdReady) {  
    // Show the "Watch Ad" button only if an ad is ready  
    displayWatchAdButton('Watch a short video for an Extra Life!');  
  } else {  
    // No ad available - hide the button  
    hideWatchAdButton();  
  }  
}  
  
// Called when the player taps the "Watch Ad" button  
function onWatchAdButtonClicked() {  
  if (!isRewardedAdReady || !rewardedAd) {  
    showMessage('Ad not available right now. Please try again later.');  
    return;  
  }  
  
  isRewardedAdReady = false;  
  
  rewardedAd.showAsync()  
    .then(function () {  
      // SUCCESS: Player watched the full ad. Grant the reward.  
      grantExtraLife();  
      showMessage('You earned an extra life! Keep playing!');  
      resumeGameFromLastPosition();  
  
      // Preload the next rewarded ad  
      preloadRewardedAd();  
    })  
    .catch(function (error) {  
      // FAILURE: Player did not complete the ad. No reward.  
      if (error.code === 'USER_INPUT') {  
        showMessage('You need to watch the full video to earn the reward.');  
      } else {  
        showMessage('Something went wrong. Please try again.');  
      }  
      handleRewardedAdError(error, 'show');  
  
      // Preload for next attempt  
      preloadRewardedAd();  
    });  
}  
  
// Handle errors  
function handleRewardedAdError(error, phase) {  
  switch (error.code) {  
    case 'USER_INPUT':  
      // Player dismissed the ad early - not a technical error  
      console.log('Player dismissed the rewarded ad.');  
      break;  
    case 'ADS_NO_FILL':  
      console.log('No rewarded ad available. Will retry later.');  
      setTimeout(preloadRewardedAd, 30000);  
      break;  
    case 'ADS_FREQUENT_LOAD':  
      console.log('Rewarded ad load too frequent.');  
      setTimeout(preloadRewardedAd, 60000);  
      break;  
    case 'ADS_TOO_MANY_INSTANCES':  
      console.log('Too many rewarded ad instances.');  
      break;  
    default:  
      console.error('Rewarded ad ' + phase + ' error:', error.code, error.message);  
      setTimeout(preloadRewardedAd, 30000);  
  }  
}  
  
// Start preloading during game initialization  
function initializeGame() {  
  FBInstant.startGameAsync().then(function () {  
    preloadRewardedAd();  
    // ... rest of initialization  
  });  
}
```
```

## Common Reward Integrations

Here are eight proven reward patterns that work well in Instant Games, along with implementation guidance for each:

### 1. Extra Lives / Continue After Game Over

The most common and effective rewarded ad pattern. When the player dies or runs out of lives, offer an ad-funded extra life to continue playing.

```
```
function onGameOver() {  
  if (isRewardedAdReady && continuesUsed < MAX_CONTINUES_PER_SESSION) {  
    showContinuePrompt('Watch a video to continue where you left off!');  
  } else {  
    showFinalGameOverScreen();  
  }  
}  
  
function onContinueAccepted() {  
  rewardedAd.showAsync().then(function () {  
    continuesUsed++;  
    playerLives = 1;  
    resumeGameplay();  
    preloadRewardedAd();  
  }).catch(function () {  
    showFinalGameOverScreen();  
    preloadRewardedAd();  
  });  
}
```
```

**Tip:** Limit the number of continues per session (e.g., 2-3) to maintain game challenge and prevent ad fatigue.

### 2. Bonus Currency

Offer a currency bonus (coins, gems, diamonds) for watching an ad. This is especially effective when the player is saving up for an item they want.

```
```
function showBonusCurrencyOffer() {  
  if (isRewardedAdReady) {  
    showPrompt('Watch a video to earn 100 bonus coins!');  
  }  
}  
  
function onBonusCurrencyAccepted() {  
  rewardedAd.showAsync().then(function () {  
    addCoins(100);  
    showMessage('+100 Coins!');  
    preloadRewardedAd();  
  }).catch(function () {  
    preloadRewardedAd();  
  });  
}
```
```

**Tip:** Place this offer near the shop or on screens where the player can see items they want but cannot yet afford.

### 3. Daily Bonus Multiplier

Let the player double (or triple) their daily login bonus by watching an ad. This combines retention mechanics with ad monetization.

```
```
function showDailyBonus() {  
  var baseBonus = calculateDailyBonus(consecutiveLoginDays);  
  showMessage('Daily Bonus: ' + baseBonus + ' coins!');  
  
  if (isRewardedAdReady) {  
    showPrompt('Watch a video to DOUBLE your daily bonus to ' + (baseBonus * 2) + ' coins!');  
  }  
}  
  
function onDoubleAccepted() {  
  rewardedAd.showAsync().then(function () {  
    var doubledBonus = calculateDailyBonus(consecutiveLoginDays) * 2;  
    addCoins(doubledBonus);  
    showMessage('Daily bonus doubled! +' + doubledBonus + ' coins!');  
    preloadRewardedAd();  
  }).catch(function () {  
    var baseBonus = calculateDailyBonus(consecutiveLoginDays);  
    addCoins(baseBonus);  
    preloadRewardedAd();  
  });  
}
```
```

### 4. Unlock Levels or Content

Allow players to unlock the next level, chapter, or content pack by watching an ad instead of paying.

```
```
function onLevelLocked(levelNumber) {  
  if (isRewardedAdReady) {  
    showPrompt('Watch a video to unlock Level ' + levelNumber + '!');  
  } else {  
    showPrompt('Purchase the Level Pack to unlock this level.');  
  }  
}  
  
function onUnlockAccepted(levelNumber) {  
  rewardedAd.showAsync().then(function () {  
    unlockLevel(levelNumber);  
    startLevel(levelNumber);  
    preloadRewardedAd();  
  }).catch(function () {  
    preloadRewardedAd();  
  });  
}
```
```

**Tip:** Consider making ad-unlocked levels temporary (unlocked for 24 hours) so the player needs to watch again or purchase permanently.

### 5. Score Multiplier

Offer the player a score multiplier before starting a level. This encourages ad engagement at the start of gameplay.

```
```
function showPreLevelScreen(levelNumber) {  
  showLevelInfo(levelNumber);  
  
  if (isRewardedAdReady) {  
    showPrompt('Watch a video to start with a 2x score multiplier!');  
  }  
}  
  
function onMultiplierAccepted() {  
  rewardedAd.showAsync().then(function () {  
    scoreMultiplier = 2;  
    showMessage('2x Score Multiplier activated!');  
    startLevel();  
    preloadRewardedAd();  
  }).catch(function () {  
    scoreMultiplier = 1;  
    startLevel();  
    preloadRewardedAd();  
  });  
}
```
```

### 6. Speed Up Timers

For games with wait timers (energy refill, building construction, upgrade completion), let players skip the wait by watching an ad.

```
```
function onTimerActive(remainingSeconds) {  
  showTimer(remainingSeconds);  
  
  if (isRewardedAdReady) {  
    showPrompt('Watch a video to skip the wait!');  
  }  
}  
  
function onSkipTimerAccepted() {  
  rewardedAd.showAsync().then(function () {  
    completeTimerImmediately();  
    showMessage('Timer skipped! Your item is ready.');  
    preloadRewardedAd();  
  }).catch(function () {  
    preloadRewardedAd();  
  });  
}
```
```

### 7. Reveal Hints

In puzzle, trivia, or word games, offer hints in exchange for watching an ad.

```
```
function onHintRequested() {  
  if (hintCredits > 0) {  
    useHintCredit();  
    revealHint();  
  } else if (isRewardedAdReady) {  
    showPrompt('Watch a video to get a free hint!');  
  } else {  
    showPrompt('No hints available. Purchase hint packs in the shop.');  
  }  
}  
  
function onAdHintAccepted() {  
  rewardedAd.showAsync().then(function () {  
    revealHint();  
    showMessage('Hint revealed!');  
    preloadRewardedAd();  
  }).catch(function () {  
    preloadRewardedAd();  
  });  
}
```
```

### 8. Cosmetic Trials

Let players preview or temporarily use a premium cosmetic item (skin, avatar, theme) by watching an ad. This serves as a “try before you buy” mechanic.

```
```
function onCosmeticPreview(cosmeticId) {  
  showCosmeticDetails(cosmeticId);  
  
  if (isRewardedAdReady) {  
    showPrompt('Watch a video to try this skin for 3 games!');  
  }  
}  
  
function onTrialAccepted(cosmeticId) {  
  rewardedAd.showAsync().then(function () {  
    activateTemporaryCosmetic(cosmeticId, 3); // 3 games  
    showMessage('Skin activated for 3 games! Enjoy!');  
    preloadRewardedAd();  
  }).catch(function () {  
    preloadRewardedAd();  
  });  
}
```
```

**Tip:** Temporary cosmetic trials drive IAP conversions. Players who experience a premium skin are more likely to buy it permanently.

## Verifying Ad Completion

The `showAsync` promise is your verification mechanism:

* If `showAsync`**resolves** (`.then`): The player watched the full ad. Grant the reward.
* If `showAsync`**rejects** (`.catch`): The player did not complete the ad. Do not grant the reward.

For most games, this client-side verification is sufficient. However, if you are concerned about client-side tampering (e.g., in competitive games with real-money prizes), consider these additional measures:

* **Server-side validation:** Send a reward claim to your server after the ad completes. Your server can validate the claim by tracking reward frequency and cross-referencing with expected ad impression data.
* **Rate limiting:** Cap the number of rewards a player can earn per day from ads (e.g., maximum 5 extra lives per day, maximum 500 bonus coins per day).

## Preloading Strategy

Rewarded ads are larger (especially video ads) and take longer to preload than other formats. Follow this strategy:

* **Start preloading immediately on game init.** Do not wait until the player needs the ad.
* **Preload the next ad right after showing one.** The player will be in a menu or gameplay for at least 30-60 seconds — plenty of time to preload.
* **Show/hide the reward button based on ad readiness.** Only display the “Watch Ad” button when an ad is actually ready to show. Tapping the button and getting an error is a frustrating experience.
* **Retry on failure.** If preloading fails, retry after a 30-second delay. Do not retry in a tight loop.

```
```
// Show the button only when ad is ready  
function updateRewardButton() {  
  if (isRewardedAdReady) {  
    showWatchAdButton();  
  } else {  
    hideWatchAdButton();  
  }  
}
```
```

## Best Practices

### Make the Reward Valuable

The reward must feel **worth the player’s time**. If the reward is too small (e.g., 5 coins when items cost 500), players will not watch the ad. If the reward is too large (e.g., 1,000 coins when items cost 500), you may undermine your IAP economy. Find the sweet spot where the reward is generous enough to be appealing but not so generous that it replaces purchases entirely.

### Clearly Communicate the Exchange

Before showing the ad, tell the player exactly what they will receive. Use clear, specific language:

* **Good:** “Watch a short video to earn 100 Gold Coins”
* **Good:** “Watch a video for an Extra Life”
* **Bad:** “Watch an ad for a reward” (too vague)
* **Bad:** “Watch ad” (no mention of what the player gets)

### Always Make It Optional

Rewarded ads must **always** be the player’s choice. Never force a player to watch a rewarded ad. There should always be an alternative (close the prompt, use currency instead, or simply not get the reward). The voluntary nature is what makes the format feel fair.

### Limit Daily Rewards

Cap the number of ad-funded rewards per day to prevent:

* **Ad fatigue:** Players who watch too many ads in one day have a worse experience.
* **Economy inflation:** Unlimited free currency from ads can devalue your IAP offerings.
* **Diminishing returns:** Ad eCPM can decrease if the same player watches too many ads.

A common approach is 5-10 rewarded ad opportunities per day, depending on the reward value.

### Place the Offer at the Right Moment

Offer rewards when the player **wants** something, not randomly:

* **After game over** — “Want to continue?” (the player wants to keep playing)
* **When out of currency** — “Need more coins?” (the player wants to buy something)
* **Before a hard level** — “Get a power-up boost?” (the player wants an advantage)
* **During daily login** — “Double your bonus?” (the player wants more free stuff)

### Test and Iterate

* Track which reward placements get the most opt-ins and the highest completion rates.
* A/B test different reward values to find the optimal amount.
* Monitor your IAP revenue alongside rewarded ad usage — make sure ads are complementing purchases, not cannibalizing them.

## Next Steps

* **[Interstitial Ads](https://developers.facebook.com/documentation/games/monetize/in-app-ads/interstitial-ads)** — Add non-optional full-screen ads at natural break points.
* **[Banner Ads](https://developers.facebook.com/documentation/games/monetize/in-app-ads/banner-ads)** — Layer in passive banner revenue on menu screens.
* **[In-App Ads Overview](https://developers.facebook.com/documentation/games/monetize/in-app-ads/overview)** — Return to the ads overview for general guidance.
* **[Monetization Best Practices](https://developers.facebook.com/documentation/games/monetize/best-practices)** — Comprehensive strategic guidance for maximizing your game’s revenue.
* **[In-App Purchases](https://developers.facebook.com/documentation/games/monetize/in-app-purchases)** — Combine rewarded ads with IAP for a hybrid monetization model.
