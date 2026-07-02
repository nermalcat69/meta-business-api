---
title: "Get Started"
source_url: https://developers.facebook.com/documentation/app-ads/deep-linking
---

# Get Started

Updated: Jul 17, 2022

When you first complete app setup, you can only optimize delivery of your ads for `LINK_CLICK` or clicks on the actual ad. For best results, we recommend that you add more events so you can also optimize your ad for installs or other actions such as purchases or D2 or D7 retention (opening the app again two or seven days after installing).

After you verify your SDK is set up correctly, you can add additional app events to your app. By adding more events, you can track or log your app events automatically or when you make specific calls in your app.

For a complete list of the standard app events you can log, see:

* [Automatically Logged Events](https://developers.facebook.com/documentation/app-events/getting-started-app-events-ios#auto-events) (applies to iOS, Android, and Web)
* [Standard Events](https://developers.facebook.com/documentation/app-events/getting-started-app-events-ios#predefined-events) (applies to iOS, Android, and Web)

You can track and measure these app events in two ways:

* **Use our [codeless setup tool⁠](https://www.facebook.com/business/help/1634426896605026)
  in Facebook's Events Manager.** This is a simple tool for setting up events without implementing code. You can interact with app screen elements such as buttons, images, or links to define event names. As people navigate through the app and interact with these UI elements, events are sent to Facebook.

* **Install your app event code manually.** Follow the steps below for your app's platform:
  * [App Events for Android](https://developers.facebook.com/documentation/app-events/getting-started-app-events-android#7--add-app-events)
  * [App Events for iOS](https://developers.facebook.com/documentation/app-events/getting-started-app-events-ios#add-events)
  * [App Events for Web](https://developers.facebook.com/documentation/app-events/getting-started-app-events-web#4--add-app-events)

For more information, regardless of platform, see [App Events API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/app-event-api).

In a few cases, you may want to set up custom App Events, which track special events that are unique to your application. For full details, see [App Events](https://developers.facebook.com/documentation/app-events).

At this point, you can track and measure for any of the app events you implemented. With App Events, you can use `APP_INSTALLS`, `TRAFFIC`, and `CONVERSIONS` as your advertising objectives. You can optimize your ads for people most likely to complete an app event; see [App Event Optimization](https://developers.facebook.com/documentation/app-ads/optimizing-your-app-ad#app-event-optimization).

With this App Event data, you or your measurement partner could also create custom audiences, and you can target ads to these audiences. See [Marketing API, Mobile App Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/mobile-app-custom-audiences) and [Ads Help Center, Custom Audience from your Mobile App⁠](https://www.facebook.com/business/help/1472206006327390).

## Next Steps

* [Add Deep Links to Your App Ad](https://developers.facebook.com/documentation/app-ads/deep-linking)
