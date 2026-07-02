---
title: "Monetization Manager"
source_url: https://developers.facebook.com/documentation/games/support/overview
---

# Monetization Manager

Updated: Mar 3, 2026

Monetization Manager is the tool for managing Audience Network ad placements within your Instant Game and tracking the revenue they generate.

## What Is Monetization Manager?

Monetization Manager lets you:

* Create and configure ad placements for your Instant Game
* Monitor ad revenue, impressions, fill rate, and eCPM in real time
* Analyze placement-level performance to identify optimization opportunities
* Manage ad placement settings without changing your game code

Audience Network delivers ads from Facebook's advertiser base into your game. Monetization Manager is the dashboard where you control how those ads are configured and how they perform.

## How to Access Monetization Manager

* Go to the [Facebook App Dashboard](https://developers.facebook.com/apps/).
* Select your Instant Games app.
* In the left navigation, look for **Monetization Manager** under the Audience Network section.

Alternatively, you can access Monetization Manager directly at [business.facebook.com/pub/home⁠](https://business.facebook.com/pub/home).

You must have admin or developer access to the app to view and manage monetization settings.

## Creating and Managing Ad Placements

Ad placements define where ads appear within your game. Each placement has a unique ID that you reference in your game code when requesting an ad.

### Supported Ad Formats

Monetization Manager supports the following ad formats for Instant Games:

* **Interstitial Ads**: Full-screen ads displayed at natural transition points in your game (e.g., between levels, after a game over screen).
* **Rewarded Videos**: Full-screen video ads that players choose to watch in exchange for an in-game reward (e.g., extra lives, bonus currency, power-ups).
* **Banner Ads**: Smaller ads displayed at the top or bottom of the game screen.

### Creating a New Placement

* In Monetization Manager, click **Create Placement**.
* Select the ad format (interstitial, rewarded video, or banner).
* Give the placement a descriptive name (e.g., "Between Levels Interstitial" or "Extra Life Rewarded Video").
* Configure placement settings such as refresh intervals and capping.
* Save the placement and note the **Placement ID**.

Use the Placement ID in your game code with the Instant Games SDK to request and display ads at the appropriate moments.

### Managing Existing Placements

From the Monetization Manager dashboard, you can:

* **Enable or disable** individual placements without modifying game code.
* **Rename** placements for better organization.
* **Archive** placements that are no longer in use.
* **View per-placement performance** to compare how different placements perform.

## Viewing Performance Metrics

Monetization Manager provides a detailed performance dashboard with the following key metrics:

### Key Metrics

| Metric | Description |
| --- | --- |
| **Revenue** | Total ad revenue earned over the selected time period. |
| **eCPM** | Effective cost per mille (thousand impressions). Higher eCPM means you earn more per impression. |
| **Fill Rate** | The percentage of ad requests that were successfully filled with an ad. A 100% fill rate means every request returned an ad. |
| **Impressions** | The total number of ads shown to players. |
| **Requests** | The total number of times your game requested an ad. |
| **Clicks** | The number of times players clicked on an ad. |
| **CTR** | Click-through rate. The percentage of impressions that resulted in a click. |

### Reading the Dashboard

* Use the **date range selector** to view performance over specific time periods.
* **Break down by placement** to see which ad placements are performing best.
* **Compare time periods** to identify trends and the impact of changes you have made.
* **Export data** for offline analysis or reporting.

## Optimizing Ad Placements

### Maximize Fill Rate

A low fill rate means that ad requests are going unfilled, and you are missing out on revenue. To improve fill rate:

* **Ensure your game is available in regions with strong advertiser demand.** Fill rates tend to be higher in North America, Western Europe, and other markets with large advertising ecosystems.
* **Avoid requesting ads too frequently.** If you request ads faster than the network can fill them, your fill rate will drop. Space out requests appropriately.
* **Pre-load ads.** Use the SDK's preloading functions to request ads in advance, so they are ready to display when the player reaches a natural break point.
* **Check for SDK errors.** If your ad request code has issues, requests may fail before reaching the ad network. Review your integration for errors.

### Maximize eCPM

Higher eCPM means more revenue per impression. To improve eCPM:

* **Use rewarded video ads.** These typically have the highest eCPM because players choose to watch them and are more engaged.
* **Place ads at natural transition points.** Ads shown at logical break points (between levels, after a game over) feel less intrusive and perform better.
* **Avoid oversaturating players with ads.** Showing too many ads per session can reduce engagement and eCPM over time.

### Maximize Revenue

Revenue is a function of impressions and eCPM. To maximize total revenue:

* **Balance ad frequency with player experience.** More ads mean more impressions, but too many ads will drive players away, reducing both retention and long-term revenue.
* **Implement rewarded video as a core game mechanic.** When players actively seek out rewarded videos for in-game benefits, you earn revenue while improving the player experience.
* **Monitor retention alongside revenue.** If you see a spike in revenue but a drop in retention, you may be showing too many ads.

## Troubleshooting Low Fill Rates

If you are experiencing consistently low fill rates, consider the following:

* **Geographic distribution**: Check where your players are located. Some regions have lower advertiser demand, which results in lower fill rates.
* **Ad request timing**: Make sure you are preloading ads well before you need to display them. Requesting an ad and immediately trying to show it may not leave enough time for the network to fill the request.
* **Placement configuration**: Verify that your placement IDs are correct and that placements are enabled in Monetization Manager.
* **SDK version**: Ensure you are using the latest version of the Instant Games SDK, which includes the most up-to-date Audience Network integration.
* **App review status**: Your app must be approved and in compliance with Facebook's policies to receive ads. Check for any policy violations in the App Dashboard.
* **Test mode**: If you are testing in development mode, fill rates may be artificially low. Test with live ads (on a limited basis) to get accurate fill rate data.

## Related Resources

* [Monetize Section](https://developers.facebook.com/documentation/games/monetize) - Learn about the different monetization strategies for Instant Games.
* [ROAS Measurement](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/roas-measurement/overview) - See how ad revenue contributes to your overall return on ad spend.
* [Gaming Insights](https://developers.facebook.com/documentation/games/tools/gaming-insights) - Understand player behavior to inform your monetization strategy.
