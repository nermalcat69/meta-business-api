---
title: "Sharing on Facebook"
source_url: https://developers.facebook.com/documentation/sharing/ios
---

# Sharing on Facebook

Updated: Jun 30, 2026

After you integrate Facebook Login, Facebook Sharing, or Facebook Gaming, certain App Events are automatically logged and collected for [Events Manager⁠](https://www.facebook.com/events_manager), unless you disable Automatic App Event Logging. We recommend all app developers using Facebook Login, Facebook Sharing, or Facebook Gaming to understand how this functionality works. For details about what information is collected and how to disable Automatic App Event Logging, see [Automatic App Event Logging.⁠](https://www.developers.facebook.com/documentation/app-events/automatic-event-collection-detail)

Sharing is a simple way of letting people bring content from your website or mobile app to Facebook. Sharing is triggered when someone clicks a [social plugin](https://developers.facebook.com/documentation/plugins) like the Share or Send button. This launches the corresponding Share or Message dialog. You can also choose to design your own button to launch one of these dialogs.

This document describes:

* The **[types of content](https://developers.facebook.com/documentation/sharing/ios#content)** people can share to Facebook
* **[Ways to share](https://developers.facebook.com/documentation/sharing/ios#methods)** content from your app
* How to **[optimize your content](https://developers.facebook.com/documentation/sharing/ios#optimize)** for sharing

## The Sharing Ecosystem

Sharing on Facebook depends on a few core components:

**URLs**: In most cases, including sharing from mobile apps, your content is shared on Facebook as a link, whether it's an article, image, video, or something else

**The Facebook Crawler**: When someone shares your content, our crawler will scrape the page to render a preview on Facebook

**Open Graph Tags**: Adding Open Graph meta tags to the `<head>` of your web page HTML will provide the crawler with structured info like a title, description, and thumbnail image for the content

**Sharing Interfaces**: There are a few different end-user experiences you can choose from to let people share from your website or app to Facebook. Here's an overview of how it works:

| Button Trigger | Sharing Interface Launched | Publishing Behavior |
| --- | --- | --- |
| Blue Facebook Share button that triggers the Share dialog  **[Share button](https://developers.facebook.com/documentation/plugins/share-button)** | **Web:** [Share dialog](https://developers.facebook.com/documentation/sharing/ios#share)  **Mobile:** Fast-app switch to native Share dialog | Appears in Timeline and Activity Log.  May appear in Feed. |
| Blue Send to Messenger button that launches the Message dialog**[Send to Messenger button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery)** | **Web:** [Message dialog](https://developers.facebook.com/documentation/sharing/ios#message)  **Mobile:** Fast-app switch to native Message dialog | Sent as a Facebook message |
| Custom Button | Can launch:  Share dialog  Message dialog | Follows the publishing behavior of the Share dialog. |

## Content Types

People can share the following kinds of content to Facebook:

* **Links** - Most content is a URL which references an HTML page. To provide the most relevant information, you should mark up your page with Facebook-specific meta tags. See [A Guide to Sharing for Webmasters](https://developers.facebook.com/documentation/sharing/webmasters).
* **Photos** - Directly upload one or more user-generated photos.
* **Videos** - Directly upload a user-generated video.
* **Multimedia** - Directly upload a combination of photos and videos.
* **[Open Graph Stories](https://developers.facebook.com/docs/sharing/opengraph)** - Use Open Graph actions and objects to create rich stories through a strongly-typed API.

### App Links

You can link back to your app from the content people share in Feed. [App Links](https://developers.facebook.com/documentation/applinks/overview) launch your app from shared content. You can even link to a specific context within your app.

### Hashtags

You can associate a hashtag with a shared link, photo, or video.

## Ways to Share

We want to make it as easy and as flexible as possible for people to share content from your app with the audience they want. With these options, you can first choose the sharing experience for people using your app, and then choose an implementation method.

### Buttons

When you want the simplest sharing integration with Facebook, you should use buttons that trigger our [dialogs](https://developers.facebook.com/documentation/sharing/ios#dialogs). The Facebook SDKs provide buttons that you can use. None of these options requires you to implement Facebook Login.

![Facebook Like, Share, and Send to Messenger social plugin buttons](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/673782511_1484143296777653_1057875890571460374_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Dl55FenhfqgQ7kNvwHxa_h2&_nc_oc=AdqWaJy0VDhd5OWCu6ETg7n08Bvt93jVwIZjKF4TFW6v1o6e46LAWhVEIl9pnxmV4XFu91LZcwoTf0Sxd_u3W0UU&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=mqNWKWL4FSjsnK0g8xh9Yg&_nc_ss=7b289&oh=00_AQC8cUBDxCYGPrUubXmSwPIqeySwdmmsiu4KCghtOkmdEg&oe=6A60A6D3)

#### Web

You can use [Social Plugins](https://developers.facebook.com/documentation/plugins) such as the Like, Share and Send buttons. These are available for desktop and mobile web.

#### Mobile

We also have native Like, Share, and Send buttons for [iOS](https://developers.facebook.com/documentation/sharing/ios#buttons) and [Android](https://developers.facebook.com/documentation/sharing/android#buttons).

#### Custom

You can also create your own custom button to trigger a Like, Share, or Send, across all platforms.

### Native Dialogs

When you use native Facebook dialogs you can enable sharing without adding Facebook Login. Like our native buttons, they offer out-of-the-box implementation.

#### Share Dialog

The Share Dialog is an easy way to let people share content without requiring them to log into your app or grant any permissions. It works on Web, Android, and iOS.

![Share dialog previewing a shared link on Web, iOS, and Android](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/673989050_1484143276777655_1887471214663635800_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=pS6c4iUoV3MQ7kNvwHQfbwU&_nc_oc=AdoJOv1TqbGuIladdHZAVoD3L0UAOsM3ThjhF4dNw5aoWdifGvCLgFrlEqxNrYJefin_AlwskKrI2cSVy7lNdIMm&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=mqNWKWL4FSjsnK0g8xh9Yg&_nc_ss=7b289&oh=00_AQBQTJuiO_I8xvLFJBx59TMhOLb9s6QXHYlShQrYFIVx8A&oe=6A607E01)

On mobile, when someone shares with the Share Dialog, the dialog makes a fast app-switch to the Facebook app on their device. We also have a web dialog as a fallback if someone doesn't have the native Facebook app installed.

#### Message Dialog

Use the Message dialog to let people privately share content to Messenger. Like the Share dialog, it's a native sharing component that doesn't require you to implement Facebook Login.

The Message dialog enables people to share links, images and Open Graph stories. On mobile, someone must have the native Messenger app installed.

### Sharing to Stories

You can use Android implicit intents and iOS custom URL schemes to pass photos, videos, and stickers to the Facebook app. The Facebook app will receive this content and load it in the Story Composer so the User can publish it to their Facebook Stories.

![Facebook Stories composer showing shared content with a music sticker](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/31741492_822647327931412_2825487507469107200_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=UEtKWCBjzPYQ7kNvwEGrpQ5&_nc_oc=AdpB4qs_1EmMqiMGQtA9_ohucHHpmmMenteuQrQJErfGQjYhpLl-vgy7NRuAnvr0MFmTIu0eDGPkb34E11F2qK8L&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=mqNWKWL4FSjsnK0g8xh9Yg&_nc_ss=7b289&oh=00_AQD6HRuh7XRSu61VFNhdD_0Bz5o5WehoKtcCIfTVNlcSsQ&oe=6A6079E9)

## Optimizing Your Content

### Markup

It's important to mark up your website's HTML with Open Graph tags to manage how your content appears on Facebook. Without these tags, the Facebook crawler will do its best to identify content such as title, description, and image for your content.

Optimize your content for sharing to Facebook by adding Open Graph tags to the `<head>` of your page's HTML. These tags describe the content shared. This includes content type such as image, video, or article and any additional attributes.

Learn about tags you should include with your content in [Markup for Sharing](https://developers.facebook.com/documentation/sharing/webmasters#markup).

### Updating URLs

If you move content to a new URL, the Likes, Shares, and Comments on that original URL won't automatically migrate. To continue aggregating these actions at a new URL, you should point the Facebook crawler to the old page that represents the canonical URL for your content. Learn how in [this doc for webmasters](https://developers.facebook.com/documentation/sharing/webmasters/getting-started/versioned-link).
