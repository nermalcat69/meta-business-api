---
title: "Audience Network Overview"
source_url: https://developers.facebook.com/documentation/audience-network/bidding-integration
---

# Audience Network Overview

Updated: Jun 9, 2026

Audience Network lets publishers monetize their Android, iOS, and Unity apps with ads from Facebook advertisers. It supports multiple ad formats and offers bidding-based mediation to maximize revenue.

This documentation is intended for publishers. If you're an advertiser, see the [Audience Network business site⁠](https://www.facebook.com/business/marketing/audience-network).

## Quick start

This assumes that you already have a published app that you want to add Audience Network as a mediation partner. If you don't, start with the Platform Setup for [Android](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/get-started), [iOS](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/get-started), or [Unity](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/unity/get-started).

* Go to [Platform Setup](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup) to add the SDK to your app.
* Complete [Ad Setup](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup) to implement the desired ads. For iOS, make sure to also follow [ATE Flag](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/advertising-tracking-enabled), and [SKAdNetwork](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/SKAdNetwork) instructions.
* Configure [Audience Network](https://developers.facebook.com/documentation/audience-network/bidding/partner-mediation/audience-network-setup) in Monetization Manager to obtain the ad **Placement IDs**.
* Perform [testing](https://developers.facebook.com/documentation/audience-network/setting-up/testing) to make sure your ads are running.
* Publish an update to your app with Audience Network in production. Make sure both your app Audience Network code and your app ads are not in test mode.

## New to Audience Network?

Check out our [Tutorial videos](https://developers.facebook.com/docs/audience-network/overview/videos) and [Terminology](https://developers.facebook.com/docs/audience-network/overview/terminology) guide to learn the basics.

Then set up your implementation:

* [Platform setup](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup) — integration guidance for Android, iOS, and Unity.
* [Audience Network](https://developers.facebook.com/documentation/audience-network/bidding/partner-mediation/audience-network-setup) — configure Audience Network after you obtain an app link.
* [Ad setup](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup) — available ad formats and app configuration.
* [Testing your implementation](https://developers.facebook.com/documentation/audience-network/setting-up/testing) — verify your integration before going live.

## Bidding

Learn how bidding works with our [Bidding Overview](https://developers.facebook.com/documentation/audience-network/bidding/overview), then explore your options:

* [Bidding with Partner Mediation](https://developers.facebook.com/documentation/audience-network/bidding/partner-mediation) — integrate Audience Network through a supported mediation partner.
* [Bidding Metrics](https://developers.facebook.com/documentation/audience-network/bidding/metrics) — key metrics for monitoring bidding performance.

> **Note:** [Bidding with In-house Mediation](https://developers.facebook.com/docs/audience-network/bidding/in-house-mediation) is in closed beta and not yet publicly available.

## Optimization

If you're already up and running, use these tools and best practices to get the most from your implementation:

* [Best practices](https://developers.facebook.com/documentation/audience-network/optimization/best-practices) — recommendations for ad layouts and audio.
* [Audience Network Policy](https://developers.facebook.com/documentation/audience-network/optimization/best-practices#policy) — compliance requirements for publishers.
* [Reporting API v2](https://developers.facebook.com/documentation/audience-network/optimization/report-api/guide-v2) (recommended) — sync `GET` requests with multiple parameters for downloading performance data.
* [Reporting API v1](https://developers.facebook.com/documentation/audience-network/optimization/report-api/guide-v2) (legacy) — automate performance data downloads for your Business and Properties.
* [AIR API](https://developers.facebook.com/documentation/audience-network/optimization/api/air-api) — aggregated impression performance data.

## Help and Support

* [FAQs](https://developers.facebook.com/documentation/audience-network/support) — answers to common questions.
* [Troubleshooting](https://developers.facebook.com/documentation/audience-network/support/troubleshoot-an) — diagnose and resolve integration issues.
* [Developer Checklists](https://developers.facebook.com/documentation/audience-network/support/checklists) — step-by-step verification for your implementation.
