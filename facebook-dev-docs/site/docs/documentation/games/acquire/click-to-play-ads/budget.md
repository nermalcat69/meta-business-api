---
title: "Budget"
source_url: https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/budget
---

# Budget

Updated: Mar 3, 2026

This guide explains how to plan and manage your Click-to-Play (C2P) ad budget, covering recommended starting budgets, budget types, allocation strategies, bid strategies, scaling, and how to measure return on ad spend.

## Recommended starting budgets

If you are running C2P ads for the first time, it is important to start with a budget that is large enough for Facebook's algorithm to learn and optimize, but not so large that you risk significant spend before understanding your game's performance.

### Minimum viable budget

For the algorithm to exit the "learning phase" and begin optimizing effectively, each ad set needs approximately **50 optimization events per week**. This requirement means:

* If you are optimizing for installs and your CPI is approximately $1.00, you need at least $50/week ($7-8/day) per ad set.
* If you are optimizing for an app event (like a purchase) and your cost per event is approximately $10.00, you need at least $500/week ($70-75/day) per ad set.

Below these thresholds, the algorithm does not receive enough signal to optimize effectively, and your campaign will remain in the learning phase with volatile, unpredictable performance.

### Recommended starting budget

For most developers launching their first C2P campaign, consider the following starting budgets:

| Scenario | Daily Budget per Ad Set | Weekly Spend |
| --- | --- | --- |
| **Testing phase** (validating creative and audience) | $20 - $50 | $140 - $350 |
| **Initial scaling** (first proven campaign) | $50 - $200 | $350 - $1,400 |
| **Established campaign** (proven ROAS, scaling up) | $200 - $1,000+ | $1,400 - $7,000+ |

These are guidelines, not rules. Your optimal budget depends on your game's economics (CPI, LTV, ROAS), your target markets, and your overall business goals.

## Daily vs. lifetime budgets

Facebook Ads Manager allows you to set budgets at either the daily or lifetime level.

### Daily budget

A daily budget sets the average amount you are willing to spend per day. Facebook attempts to spend this amount each day, though actual daily spend can vary by up to 25% on any given day because Facebook smooths spending over time to take advantage of high-opportunity moments.

**When to use daily budgets:**

* For ongoing, open-ended campaigns with no fixed end date
* When you want predictable, steady spend
* When you are actively monitoring and adjusting campaigns regularly

### Lifetime budget

A lifetime budget sets the total amount you are willing to spend over the entire duration of the campaign. Facebook distributes this budget across the campaign's lifespan, spending more on days when opportunities are better and less on days when they are worse.

**When to use lifetime budgets:**

* For time-limited campaigns (promotions, seasonal events, test periods)
* When you have a fixed total budget and want Facebook to pace it optimally
* When running A/B tests with a defined test period

**Recommendation:** For most ongoing acquisition campaigns, daily budgets provide more control and predictability. Use lifetime budgets for defined-period tests and promotions.

## Budget allocation strategies

When running multiple campaigns or ad sets, you need a strategy for how to distribute your total budget across them.

### Campaign Budget Optimization (CBO)

With CBO enabled, you set a single budget at the campaign level, and Facebook automatically distributes it across your ad sets based on real-time performance. Ad sets that are performing better receive more budget; ad sets that are underperforming receive less.

**Pros:**

* Reduces manual management — you do not need to constantly rebalance budgets across ad sets.
* The algorithm can react faster to performance changes than manual adjustments.
* Often produces better overall results than manual budget allocation.

**Cons:**

* Less control over how much each individual ad set spends.
* Newer or smaller ad sets may receive very little budget if one ad set dominates.
* Makes it harder to ensure minimum spend on test audiences.

**When to use CBO:** When you have multiple ad sets targeting different audiences and want to let the algorithm find the best opportunities. CBO works best when your ad sets are comparable in audience size and potential.

### Manual ad set budgets

With manual budgets, you set a specific budget for each ad set. Manual budgets give you full control over how much you spend on each audience or market.

**When to use manual budgets:** When you need guaranteed minimum spend on specific audiences (e.g., you want to ensure a new market gets tested with at least $50/day), or when your ad sets have very different audience sizes and you want to control distribution precisely.

### Portfolio approach

Many experienced advertisers use a portfolio approach:

* **Core campaign (60-70% of budget):** Your best-performing audience and creative combination, running on CBO with a generous budget.
* **Test campaigns (20-30% of budget):** New audiences, new markets, and new creative being tested with manual budgets to ensure they get adequate spend.
* **Remarketing campaign (5-10% of budget):** Re-engaging lapsed players with specific messaging, typically at a lower budget since the audience is smaller.

## Bid strategies

Your bid strategy tells Facebook how to bid for ad impressions. The right bid strategy depends on your goals and your game's economics.

### Highest volume (lowest cost)

This is the default bid strategy. Facebook aims to get you the most optimization events (such as installs and app events) for your budget.

**Pros:**

* Simple — no need to set bid amounts.
* Maximizes volume within your budget.
* Good for learning about your game's CPI and acquisition economics.

**Cons:**

* No cap on how much you pay per event. CPI can vary significantly and may spike.
* Does not optimize for value — all installs are treated equally regardless of player quality.

**Best for:** New campaigns, testing phases, and campaigns where volume is the primary goal.

### Cost cap

Cost cap lets you set a target average cost per optimization event. Facebook will try to get you as many events as possible at or below your target cost.

**Pros:**

* Controls your average CPI, making spend more predictable.
* Protects against cost spikes.

**Cons:**

* May reduce delivery volume if your cost cap is too aggressive.
* The algorithm needs time to learn — performance may be volatile initially.
* If your cap is too low, the campaign may not deliver at all.

**Best for:** Campaigns where you have a clear CPI target based on your LTV and ROAS requirements.

**How to set your cost cap:** Start with a cost cap at or slightly above your current average CPI. If delivery is too low, increase the cap by 10-20%. If CPI is higher than target, decrease the cap gradually.

### Minimum ROAS

Minimum ROAS bidding lets you set a target return on ad spend. Facebook will optimize to achieve at least your specified ROAS (revenue generated per dollar spent on ads).

**Pros:**

* Directly ties ad spend to revenue, ensuring profitability.
* Finds high-value players who are most likely to generate revenue.

**Cons:**

* Requires robust revenue tracking (purchase events must be firing accurately).
* Reduces volume significantly compared to other bid strategies.
* Not suitable for games with low or infrequent IAP revenue.
* Needs a sufficient volume of purchase events (50+ per week) to optimize effectively.

**Best for:** Mature campaigns for games with strong IAP monetization and reliable purchase event tracking.

### Highest value

Highest value bidding tells Facebook to focus on users who are most likely to generate the highest revenue, regardless of volume.

**Pros:**

* Acquires the highest-value players possible within your budget.
* Maximizes total revenue, not just install count.

**Cons:**

* Very low volume — you will get far fewer installs.
* Requires strong revenue tracking.
* Not suitable for games that rely primarily on ad revenue (where revenue is spread across many low-value sessions).

**Best for:** Games with whale-driven IAP monetization models where a small number of high-spending players drive most of the revenue.

## Scaling budgets based on performance

Once you have a campaign that is performing well, the next step is to scale it up to acquire more players. Scaling too aggressively can disrupt the algorithm's optimization, so it is important to scale gradually.

### Scaling guidelines

* **Increase budgets by no more than 20% per day.** Large, sudden budget increases can reset the learning phase and cause performance to become volatile. If you need to double your budget, spread the increase over 4-5 days.
* **Monitor performance after each increase.** Give the algorithm at least 2-3 days to adjust to the new budget before evaluating results. Short-term fluctuations are normal.
* **Watch for diminishing returns.** As you increase spend, CPI will gradually rise because the algorithm has to reach further into the audience to find additional players. Track your incremental CPI (the cost of each additional install above your baseline) and your ROAS at different budget levels.
* **Scale horizontally, not just vertically.** Instead of pouring all additional budget into a single ad set, consider creating new ad sets targeting:

  * New geographic markets
  * New lookalike audience percentages
  * New interest-based audiences
  * New creative variations

  Horizontal scaling gives the algorithm multiple paths to find new players rather than saturating a single audience.

### When to increase spend

Increase your budget when:

* Your campaign has been stable for at least 5-7 days
* CPI is at or below your target
* ROAS is positive (you are generating more revenue than you are spending)
* The ad set is spending its full daily budget consistently (indicating demand for your ads)
* You have tested and validated your creative

### When to decrease spend

Decrease your budget (or pause the campaign) when:

* CPI has risen significantly above your target and is not coming back down
* ROAS has turned negative and is trending downward
* Retention metrics for ad-acquired players are declining
* Creative fatigue is setting in (CTR is dropping, frequency is rising)
* You have exhausted your target audience (frequency is above 3-4)

## Measuring ROI

To determine whether your C2P ad spend is generating a positive return, you need to track and compare two key numbers:

### Revenue from ad-acquired players

Track the total revenue generated by players who were acquired through your C2P campaigns. This includes:

* **IAP revenue:** Purchases made by ad-acquired players
* **Ad revenue:** Revenue from in-game ads shown to ad-acquired players (rewarded video, interstitial, banner)

Use Facebook's attribution tools and your own analytics to attribute revenue to specific campaigns, ad sets, and ads.

### ROAS calculation

ROAS (Return on Ad Spend) is calculated as:

```
ROAS = Revenue from Ad-Acquired Players / Ad Spend
```

A ROAS of 1.0 means you are breaking even (generating $1 in revenue for every $1 spent on ads). A ROAS above 1.0 means you are profitable. The target ROAS varies by game and business model:

| ROAS | Interpretation |
| --- | --- |
| Below 0.5 | Significantly unprofitable — review targeting, creative, and game monetization |
| 0.5 - 0.8 | Below breakeven — optimize campaigns or improve monetization |
| 0.8 - 1.0 | Near breakeven — may be acceptable if LTV is still growing |
| 1.0 - 1.5 | Profitable — continue and consider scaling |
| Above 1.5 | Highly profitable — scale aggressively |

**Important:** ROAS should be measured over a time window that captures most of a player's lifetime value. For most Instant Games, measuring Day 7 or Day 14 ROAS gives a reasonable early signal, but Day 30 or Day 60 ROAS provides a more complete picture. Use predictive LTV models if you need to make scaling decisions before enough time has passed for full LTV to materialize.

### Tracking ROAS over time

Monitor your ROAS at multiple time horizons:

* **Day 0 ROAS:** Revenue generated on the day of install. Useful as a very early signal but not representative of full value.
* **Day 7 ROAS:** A good early indicator of campaign health. If Day 7 ROAS is very low, the campaign may not become profitable.
* **Day 14 and Day 30 ROAS:** More reliable indicators of true campaign performance. Most games see the majority of their LTV materialize within 30 days.
* **Day 60+ ROAS:** For games with long player lifecycles, tracking ROAS over 60 or 90 days provides the most complete picture.

See the [ROAS Measurement](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/roas-measurement) tools documentation for details on setting up and using Facebook's measurement tools.

## Budget planning template

Here is a simple framework for planning your C2P budget:

* **Estimate your game's LTV** (average revenue per player over 30 or 60 days).
* **Set your target ROAS** (e.g., 1.2x, meaning you want $1.20 in revenue for every $1.00 spent).
* **Calculate your target CPI:**`Target CPI = LTV / Target ROAS`. For example, if your LTV is $0.60 and your target ROAS is 1.2, your target CPI is $0.50.
* **Set your daily budget** based on how many installs per day you want: `Daily Budget = Target Daily Installs x Target CPI`. For example, if you want 200 installs per day at $0.50 CPI, your daily budget is $100.
* **Start at 50-70% of your target daily budget** to give the algorithm time to learn, then scale up gradually.

## Next steps

With your budget planned, see [Setup](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/setup) to create your campaign, [Targeting](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/targeting) to define your audience, and [Creative](https://developers.facebook.com/documentation/games/acquire/click-to-play-ads/creative) to prepare your ad creative.
