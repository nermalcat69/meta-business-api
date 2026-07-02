---
title: "Attribution Model"
source_url: https://developers.facebook.com/documentation/games/retain/overview
---

# Attribution Model

Updated: Mar 24, 2026

ROAS Measurement uses a multi-stage attribution model to connect your ad spend to the revenue your acquired players generate. This page explains how installs are attributed, how revenue is calculated, and how the tool handles scenarios where a player interacts with multiple campaigns.

Understanding the attribution model will help you interpret your ROAS data correctly, compare it with other measurement tools, and make better decisions about your acquisition strategy.

> **Note:** ROAS Measurement is currently in **beta**. The attribution methodology described here may be refined as the product evolves. See [Limitations of the Beta](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/roas-measurement/overview#limitations-of-the-beta) for details.

---

## How attribution works

ROAS Measurement attributes revenue to your campaigns in two stages:

### Stage 1: Attribute players to your ads

When a player interacts with one of your ads and then plays your game, ROAS Measurement attributes that player to your campaign. ROAS Measurement recognizes three types of interactions (called “touchpoints”):

* **Ad click** — The player clicked your ad and started playing.
* **Ad impression** — The player saw your ad and later started playing.
* **Social invite** — A player who was directly acquired through your ad invited a friend, and that friend started playing.

Players acquired through ad clicks and impressions are called **direct installs**. Players who come through invites from direct installs are called **social installs**.

#### Attribution windows

The tool uses the following attribution windows to determine whether a play event should be credited to an ad:

| Window | Description |
| --- | --- |
| 1-day click-through | Player clicked the ad and played within 1 day (default) |
| 7-day click-through | Player clicked the ad and played within 7 days |
| 1-day view-through | Player saw the ad (without clicking) and played within 1 day |

Attribution windows are fixed during the beta and may not exactly match the windows configured in your Ads Manager campaigns.

#### Last-touch attribution

If a player interacts with multiple ads before playing, the conversion is attributed to the **most recent touchpoint**. Clicks always take priority over impressions. For example, if a player sees Ad A on Monday and clicks Ad B on Tuesday before playing, the install is attributed to Ad B.

### Stage 2: Attribute revenue to attributed players

After Stage 1 attributes a player to a campaign, ROAS Measurement tracks all revenue that player generates for up to **180 days** after the ad impression date. Revenue includes:

* **In-app advertising revenue (IAA)** — Revenue earned when the player views ads in your game through Audience Network.
* **In-app purchase revenue (IAP)** — Revenue earned when the player makes purchases in your game.

This 180-day revenue window is significantly longer than the attribution windows used in Ads Manager, which means ROAS Measurement counts revenue that players generate weeks or months after install, beyond the range of shorter attribution windows.

---

## Cohorts and time frames

### What is a cohort?

A cohort is a group of players who were acquired through a specific ad set on a specific date. Cohorts are defined by:

* **Ad set** — The ad set the player was attributed to.
* **Impression date** — The date the player saw or clicked the ad.

Each combination of ad set and impression date forms a distinct cohort. ROAS Measurement tracks and reports revenue at the cohort level.

### Day-X ROAS

ROAS Measurement reports metrics using Day-X notation, where X represents the number of days since the cohort’s impression date:

* **Day-0 ROAS** measures revenue generated on the impression date only.
* **Day-7 ROAS** measures cumulative revenue from the impression date through 7 days later.
* **Day-30 ROAS** measures cumulative revenue through 30 days later.

Day-X metrics let you track how player value accumulates over time and compare cohorts at the same stage of maturity.

> **Note:** Day-X is calculated using calendar dates in Pacific Time, not timestamps. If a player sees your ad at 11:00 PM and makes a purchase at 1:00 AM the next morning, that purchase falls into Day-1, not Day-0.

---

## How de-duplication works

### Same player, same ad set, same day

If the same player interacts with the same ad set multiple times on the same day, ROAS Measurement counts them as a **single install**. ROAS Measurement keeps the earliest interaction and attributes all revenue from that player once for that day. There is no double-counting within a single cohort.

### Same player, different days or different ad sets

If a player interacts with your ads on **different days** or through **different ad sets**, they may appear in **multiple cohorts**. In this case, ROAS Measurement attributes the player’s revenue to each cohort they belong to.

**Example:** A player clicks Ad Set A on March 1 and clicks Ad Set B on March 8. They spend $10 on March 15. That $10 appears in the revenue for both the March 1 cohort and the March 8 cohort.

#### What this means for you

* **Per-cohort metrics are accurate** for evaluating individual cohort performance. Each cohort correctly reflects the revenue generated by its attributed players.
* **Summing revenue across cohorts may overstate total revenue** because the same player’s revenue can appear in more than one cohort. If you need a deduplicated total, do not sum the revenue column across all cohorts or date ranges.
* **Use per-impression-date views** for the most granular analysis. The summary view aggregates across cohorts and may include overlap.

### Returning players

If a player previously played your game and then sees a new ad and starts playing again, they can be re-attributed as a new install under the new campaign:

* Revenue generated after the new attribution is tracked in the new cohort.
* Revenue from the player’s original period of play remains with the original cohort (if still within the data retention window).
* If the original cohort is old enough to have aged out of the data retention window, the player appears only in the new cohort with no overlap.

---

## How revenue is calculated

### In-app purchase revenue (IAP)

IAP revenue is calculated from purchase transaction events. The amounts reported are **estimated net revenue** — after platform fees and excluding tax. Because fee structures vary, these are estimates and may differ slightly from your own accounting.

### In-app advertising revenue (IAA)

IAA revenue is calculated from Audience Network ad impression events in your game. Revenue for each impression is determined by the ad’s pricing model:

| Pricing Model | How Revenue Is Calculated |
| --- | --- |
| Price-target ads | Based on the price target value set for the ad placement |
| Standard (waterfall) ads | Based on the capped price and publisher payout rate |

> **Note:** IAA revenue calculations may not capture all demand sources equally. If you notice that your IAA revenue in ROAS Measurement is lower than expected compared to your Monetization Manager reports, this may be due to differences in how revenue is recorded across pricing models.

### LTV and kLTV

Revenue is aggregated into lifetime value metrics:

| Metric | Formula |
| --- | --- |
| **LTV** | IAA revenue + IAP revenue per player, accumulated over the attribution window |
| **kLTV** | LTV + revenue from social installs attributed to the campaign |
| **ROAS** | LTV / ad spend |
| **kROAS** | kLTV / ad spend (always >= ROAS) |

---

## Differences from Ads Manager

ROAS Measurement and Ads Manager are built on independent measurement systems. The following differences are expected and by design:

| Factor | ROAS Measurement | Ads Manager |
| --- | --- | --- |
| **Scope** | Instant Games (onsite) only | Onsite and offsite (including native app installs) |
| **Revenue types** | IAA + IAP (net, estimated) | IAP only (gross) |
| **IAA included** | Yes | No |
| **Attribution window (revenue)** | Up to 180 days | Typically 1-day or 7-day |
| **Time calculation** | Calendar dates (discrete daily buckets) | Timestamps (continuous) |
| **Timezone** | Fixed to Pacific Time | Configurable per ad account |
| **Data latency** | Up to 48 hours | Near real-time |
| **Returning players** | Counted as new installs | Excluded if played within last 90 days |
| **Cross-platform** | Instant Games sessions only | May include native app conversions if same app ID |

Because of these differences, you should **not** expect ROAS Measurement numbers to match Ads Manager exactly. Both tools provide valuable but different perspectives on campaign performance:

* **Use Ads Manager** for real-time campaign management, bid optimization, and budget pacing.
* **Use ROAS Measurement** for long-term profitability analysis, understanding viral value (kROAS), and evaluating the full revenue picture including IAA.

---

## Best practices for accurate analysis

* **Analyze cohorts individually.** Compare cohorts at the same Day-X maturity for fair comparisons. Avoid summing revenue across cohorts to estimate total revenue.
* **Use kROAS for profitability decisions.** If your game has strong social mechanics, kROAS gives you a more complete picture of campaign value than ROAS alone.
* **Wait for data to mature.** Recent cohorts will have incomplete revenue data. Allow at least 7-14 days before drawing conclusions about a cohort’s performance.
* **Cross-reference with Monetization Manager.** If your IAA numbers seem low, compare with your Monetization Manager reports to understand the full picture of your ad revenue.
* **Account for timezone differences.** ROAS Measurement uses Pacific Time. If your player base is concentrated in a different timezone, Day-0 metrics may appear smaller or larger than expected.
* **Factor in data latency.** Metrics may be delayed by up to 48 hours. Do not compare very recent ROAS Measurement data with real-time Ads Manager data.

---

## Related resources

* [ROAS Measurement Dashboard](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/roas-measurement/overview) — Overview of the dashboard, metrics definitions, and optimization guidance.
* [Ads Manager⁠](https://www.facebook.com/business/tools/ads-manager) — Create and manage the campaigns that ROAS Measurement tracks.
* [Monetization Manager](https://developers.facebook.com/documentation/games/monetize) — Manage the ad placements that contribute to your IAA revenue.
* [Click-to-Play Ads](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads) — Learn about the ad format built for Instant Games acquisition.
* [Gaming Insights](https://developers.facebook.com/documentation/games/tools) — Dive deeper into player engagement and retention data.
