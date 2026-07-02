---
title: "Measure Your App Ad"
source_url: https://developers.facebook.com/documentation/app-ads/creating-the-assets
---

# Measure Your App Ad

Updated: Aug 16, 2021

Measuring ad performance only applies for ads with a [promoted object](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#promoted_object) containing the app ID. To obtain an app ID, [register](https://developers.facebook.com/documentation/app-ads) the app on Facebook.

We recommend that all advertisers use Facebook's SDK to measure mobile installs. The developer needs to install the latest SDK and [set up their app](https://developers.facebook.com/documentation/app-ads) to measure the performance of your mobile ads:

* [**Measuring Installs and In-App Conversions**](https://developers.facebook.com/docs/app-ads/measuring/measuring-installs-and-in-app-conversions):
  Use App Events to get detailed insights on the engagement and ROI coming from your mobile ads.
* [**Measuring Using Ads Manager**](https://developers.facebook.com/docs/app-ads/measuring/ads-manager):
  Check Ads Manager's graphical reports to get insights about the performance, audience, and placement of your ads.

However, if your client is currently using a third-party to measure installs or would prefer to work with a third-party (i.e., for lifetime value calculation), we have partnered with companies to provide measurement solutions for mobile app install ads:

* [**Mobile Measurement Partners**⁠](https://www.facebook.com/business/solutions-explorer/measurement/):
  Work with a Facebook Marketing Partner to get deeper insights or measure across several ad networks. [Search for a Measurement Partner.⁠](https://www.facebook.com/business/solutions-explorer/measurement/)

You can confirm that the volume of installs is being correctly reported in the Insights section for your app in the [App Dashboard](https://developers.facebook.com/apps). In addition, in the App Summary Page, there is a time stamp 'Last Mobile Install Reported' for iOS and Android so that you can confirm that an install is being reported.

Please refer to the [stats](https://developers.facebook.com/docs/reference/ads-api/adstatistics), [report stats](https://developers.facebook.com/docs/reference/ads-api/adreportstats), or [conversions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference) documentation for retrieving ad related statistics.
