---
title: "Metrics for Bidding with Mediation"
source_url: https://developers.facebook.com/documentation/audience-network/ad-formats
---

# Metrics for Bidding with Mediation

Updated: Jul 29, 2024

## Performance Metric Definitions for Audience Network

### Estimated Revenue

Estimated revenue is calculated by adding up the revenue from all advertisers who have paid to advertise on your properties.

There may be a slight difference in your estimated revenue and your final review. This can happen for a number of reasons:

* Ads are refunded to the advertiser after they're displayed, because of policy violations or other traffic issues.
* Estimated revenue is based on Pacific Time (UTC-8). However, payout is based on ads shown in local time. Therefore, some ads shown on the final day of the month will be counted in the next month.
* Ads shown at the end of the month may be tracked in the following month. For example, someone clicks on an ad on the 30th, but the conversion is not tracked until the following month.

### Ad Requests

The number of times Audience Network receives a request for an ad.

This is counted when Audience Network receives an initial request for an ad from a placement. The request can come from either your app, website or mediation platform. Not all requests will get filled, for example if you have a high CPM target that can't be met for a particular request.

### Filled

This is counted when Audience Network returns an ad in response to an ad request.

Not all filled ads will result in an impression, for example if you cache an ad from Audience Network and it never displays on screen. It's common for other networks to count a filled ad as what Audience Network calls an impression, even if the ad is never displayed on screen.

### No fills

The number of times Audience Network did not return an ad in response to an ad request.

No fills is calculated by subtracting the number of filled from ad requests.

### Fill Rate

The number of ads that Audience Network returns compared to the number of ads requested.

Fill rate is calculated as filled divided by ad requests.

### Impressions

An impression is counted as the number of times an instance of an ad is on screen for the first time. For example, if an ad is on screen and someone scrolls down and then scrolls back up to the same ad, that counts as one impression. If an ad is on screen for someone 2 different times in a day, that counts as 2 impressions.

This method of counting video impressions differs from industry standards for video ads. Except for ads on Audience Network, impressions are counted the same way for ads that contain either images or video. This means that a video doesn't need to start playing for the impression to be counted.

Impressions aren't counted if they come from invalid traffic we detect such as from non-human sources (such as a bot), or occur as a result of Facebook delivering more impressions than the advertiser budgeted for.

Not all filled ads will be displayed on screen. For example, if you cache ads to reduce loading time, a user might close your app before they see some of the cached ads.

Note: Many ad servers and mediation platforms may count impressions differently to Audience Network. For interstitial or reward formats, we may show 2 ads without increasing the ad duration. This may show up as one impression to match the number of ad requests.

In other cases, some platforms count an impression when an ad is filled but not necessarily displayed on screen. In other platforms, an impression is only counted when at least 50% of the ad is in the viewable area of the screen for one second or longer.

### Impression rate (formerly show rate)

The number of impressions compared to the number of filled ads.

Impression rate is calculated as impressions divided by filled.

### Clicks

The number of clicks on your ads.

Clicks are one way to measure the interest that your ad generates among your audience. Digital advertisers have always considered click-through rate as a measure of success for an online advertising campaign.

The metric counts clicks in the ad container that lead to select destinations or experiences, such as links to an app store or website.

### CTR (Click Through Rate)

The number of clicks compared to the number of impressions.

Click through rate is calculated as clicks divided by impressions.

### eCPM (Effective Cost per Thousand Impressions)

The revenue you have earned per 1,000 impressions.

eCPM is calculated as estimated revenue divided by impressions multiplied by 1,000.

eCPM is an 'effective' cost per 1,000 impressions because not all Facebook advertisers choose to pay per impression. For example, some advertisers will pay per click or 10-second video view. Audience Network calculates your revenue from all advertiser payment options (impressions and otherwise), and presents this as eCPM.

## Bidding Performance Metrics Definitions for Audience Network

Learn about bidding metrics in Monetization Manager and how they're calculated. The following metric definitions specifically refer to bidding performance on Audience Network.

### Bid responses

Bid responses are the number of times Audience Network responded to bid requests over a given period.

Use bid responses to calculate bid response rates and identify auctions where Audience Network didn't participate. You can also compare the number of bid responses reported in Monetization Manager with in-house or third-party reporting to identify discrepancies that may point to an integration issue.

### Bid response rate

Bid response rate is the percentage of bid responses out of the total number of bid requests.

Use bid response rate to identify auctions where Audience Network didn't participate. A low bid response rate may indicate a poor integration or a low percentage of overlap between publishers and people who use Facebook.

To show targeted ads, Audience Network needs to match each person to their Facebook profile. Without this match, Audience Network can't fulfill a bid request.

### No response bids

The number of times Audience Network didn't respond to bid requests over a given period.

No response bids is calculated by subtracting the number of bid responses from bid requests. Some reasons we may not respond to bid requests include: there is no Facebook profile found, the app wasn't downloaded from Google Play Store or App Store, we couldn't find a relevant ad.

### Win rate

Win rate is the percentage of times Audience Network was the highest bidder in an auction out of the total number of bid responses.

Use win rate to evaluate the competitiveness of Audience Network versus other demand sources. If you use bidding, you should look at win rate rather than fill rate to evaluate competitiveness.
