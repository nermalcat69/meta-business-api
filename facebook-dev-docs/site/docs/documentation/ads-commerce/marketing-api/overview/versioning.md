---
title: "Overview"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/overview/versioning
---

# Overview

Updated: Jun 24, 2026

Use the Marketing API to automate advertising across Meta technologies. The API provides functions for ad creation, management, and performance analysis.

You can programmatically generate ad campaigns, ad sets, and individual ads, deploying and adjusting them based on real-time performance data. Automated ad creation also lets businesses reach larger audiences while using fewer resources.

In addition to ad creation, you can:

* Update, pause, or delete ads
* Ensure that campaigns remain aligned with business objectives
* Access detailed insights and analytics to track ad performance and make data-driven decisions to improve outcomes

## How it works

![Diagram showing the Marketing API hierarchy: ad campaigns contain ad sets, which contain ads, which reference ad creatives.](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/585889174_1369493308242653_8187459610088104447_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=nZqzzTpmwH0Q7kNvwHYudHL&_nc_oc=AdrFSRAkhWcHm2bOFlcvdePyJoKq9YyyGcX1QkswkqFVoHomPVrFeL39YWFjOQZXw6sU46PDgRVyfhyBW8VvoZbm&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=ym4KwOh534eX5avzAGx06g&_nc_ss=7b289&oh=00_AQDCF_9XV7hlRJjXBCNf7z1PD4VZZ5N3jg5MNfDIsKxnVw&oe=6A6082B3)

### Ad campaigns

A campaign is the highest-level organizational structure within an ad account and should represent a single objective, for example, to drive Page post engagement. Setting the objective of the campaign enforces validation on any ads you add to that campaign to ensure they also have the correct objective.

### Ad sets

Ad sets are groups of ads that configure the budget and period the ads should run for. The budget, billing, and duration are set at the ad set level and apply to all ads in the set. All ads contained within an ad set should also have the same targeting and optimization goal.

Create an ad set for each target audience with your bid; ads in the set target the same audience with the same bid. Creating one ad set per audience helps control the amount you spend on each audience and determine when the audience will see your ads. It also provides metrics for each audience.

### Ad creatives

Ad creatives contain only the visual elements of the ad, and you can’t change them once they’re created. Each ad account has a creative library to store creatives for reuse in ads.

### Ads

An ad object contains all the information necessary to display an ad on Facebook, Instagram, Messenger, and WhatsApp, including the ad creative. Create multiple ads in each ad set to optimize ad delivery based on different images, links, video, text, or placements.

### Ad components

The following table shows how Marketing API ad components map to ad campaigns, ad sets, and ads.

| Component | Ad Campaign | Ad Set | Ad |
| --- | --- | --- | --- |
| **Objective** | ✓ |  |  |
| **Schedule** |  | ✓ |  |
| **Budget** |  | ✓ |  |
| **Bidding** |  | ✓ |  |
| **Audience** |  | ✓ |  |
| **Ad Creative** |  |  | ✓ |
