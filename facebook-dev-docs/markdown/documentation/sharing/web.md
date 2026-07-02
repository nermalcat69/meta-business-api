---
title: "Sharing on Android"
source_url: https://developers.facebook.com/documentation/sharing/web
---

# Sharing on Android

Updated: Jun 30, 2026

After you integrate Facebook Login, Facebook Sharing, or Facebook Gaming, certain App Events are automatically logged and collected for [Events Manager⁠](https://www.facebook.com/events_manager), unless you disable Automatic App Event Logging. We recommend all app developers using Facebook Login, Facebook Sharing, or Facebook Gaming to understand how this functionality works. For details about what information is collected and how to disable Automatic App Event Logging, see [Automatic App Event Logging.⁠](https://www.developers.facebook.com/documentation/app-events/automatic-event-collection-detail)

This guide explains how to enable users of your Android app to share from your app to Facebook. When someone shares from your app, the content that they share appears on their Timeline. Content that your users share to their Timeline can also appear in the Feeds of their friends. Users can also share content from your app to Facebook Messenger.

When you implement sharing, your app should not pre-fill any content to share. Pre-filling content is inconsistent with the [Developer Policies](https://developers.facebook.com/devpolicy/#control).

The following example photos show the sharing dialog in your app on the left and the resulting post in the Facebook app on the right.

![Post to Facebook photo dialog in an app, next to the published photo post in the Facebook app](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/672103290_1484143320110984_9078274116241525512_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=N1w5s-tMhVoQ7kNvwGeamax&_nc_oc=AdqHkjBABQKc4gBFjZWXrxUKGdCrsNidRexbN7c-5MVoANkU9069lRKm37LRavl43HapBGUAwUfxrCNxyI3zizUi&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=Zb3OGuOiy6sqo9L8Lrm96A&_nc_ss=7b289&oh=00_AQB1uEeTk-relXo2zL49Ao8N81D_Slsg-6gLbUT8dsYqSw&oe=6A60897F)

## Getting Started with Sharing

The Sharing SDK for Android is a component of the [Facebook SDK for Android](https://developers.facebook.com/documentation/android).

To use the Facebook Sharing SDK in your project, make it a dependency in Maven.

* In your project, open **your\_app | Gradle Scripts | build.gradle (Project)** and add the following repository to the `buildscript { repositories {}}` section:

  ```
  mavenCentral()
  ```
* In your project, open **your\_app | Gradle Scripts | build.gradle (Module: app)** and add the following compile statement to the `dependencies{}` section:

  ```
  compile 'com.facebook.android:facebook-share:latest.release'
  ```
* Build your project.
* Get your Facebook App ID properly configured and linked to your Android app.
  * If you don’t have a Facebook App ID for your app yet, see [Facebook SDK Quick Start for Android](https://developers.facebook.com/documentation/android/getting-started#quick-start).
  * Find your Facebook App ID on the [Apps](https://developers.facebook.com/apps) page of the developer portal and then see [Add Your Facebook App ID and Client Token](https://developers.facebook.com/documentation/android/getting-started#app_id).
* Generate an Android development key hash and add it to the **Sample Apps** page of your [developer settings](https://developers.facebook.com/settings/developer/sample-app/). For details, see [Create a Development Key Hash](https://developers.facebook.com/documentation/android/getting-started#create_hash) and [Running Sample Apps](https://developers.facebook.com/documentation/android/getting-started#samples).
* Add a `ContentProvider` to your `AndroidManifest.xml` file and set `{APP_ID}` to your app ID:

  ```
  <provider android:authorities="com.facebook.app.FacebookContentProvider{APP_ID}"
      android:name="com.facebook.FacebookContentProvider"
      android:exported="true"/>
  ```
* If your application targets Android 11 or later, add the following queries block to your `AndroidManifest.xml` file to [make the Facebook App visible to your App⁠](https://developer.android.com/training/package-visibility):

  ```
  <queries>
    <provider android:authorities="com.facebook.katana.provider.PlatformProvider" />
  </queries>
  ```
* Add a `Facebook Activity` to your project and include it in your `AndroidManifest.xml` file.

## Modeling Content

Versions 4.0+ of the Facebook SDKs have new models for sharing content. Each type of content people want to share has a class you can use to represent it. After you model the content, add a sharing interface to your app.

### Links

When people share links from your app to Facebook, it includes a `contentURL` with the link to be shared. Build your share content for links into the `ShareLinkContent` model. For a list of all attributes, see [`ShareLinkContent` reference](https://developers.facebook.com/docs/reference/android/current/class/ShareLinkContent).

![Share to Facebook dialog for a link, next to the published post showing the link preview card](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/672167470_1484143300110986_1286404854647138328_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jb6nTmfweEkQ7kNvwEX7HXS&_nc_oc=AdrTNFdfLEdBZ9HKDoyRhvTqOcpH2Gp9Di3QkCupVtXLxXKe6kCP93wKJsK0FBewzz9imB4UAi77rZMMj6pmqGzn&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=Zb3OGuOiy6sqo9L8Lrm96A&_nc_ss=7b289&oh=00_AQAaTtGwoqbMr8K10So3gKVFnobp-imcBfIEpZ9g4onqEQ&oe=6A608521)

Here’s an example of how you can trigger the share:

```
ShareLinkContent content = new ShareLinkContent.Builder()
        .setContentUrl(Uri.parse("https://developers.facebook.com"))
        .build();
```

To preview a link share to Google Play or the App Store, enter your URL into the [Sharing Debugger](https://developers.facebook.com/tools/debug/).

If your app share contains a link to any app on Google Play or the App Store, the description and image included in the share will be ignored. Instead, we will scrape the store directly for that app’s title and image (and if there is no image, the share won’t include one).

### Photos

People can share photos from your app to Facebook with the Share Dialog. In order to share, they must have the native Facebook for Android app installed, version 7.0 or higher.

![Facebook Share Dialog for a photo with a caption, next to the published photo post in the Facebook app](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/674963948_1484143286777654_6609548542894042916_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=N_9rGaeFhagQ7kNvwHYWrgi&_nc_oc=AdrKDSs4Wo_U0icc-hSbUEQiwqG0lXfA18UyTW_exZ4lcHZhglc_fF_5cZrSLp0TTErhl-kg1zQ7tXyIkp-zDb03&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=Zb3OGuOiy6sqo9L8Lrm96A&_nc_ss=7b289&oh=00_AQD8lRD0Q6t-38l_Qx9uEvWib8eovjSKxbZH6Z_GJ9pDmw&oe=6A607C81)

Build your share content for photos into the `SharePhotoContent` model. For a list of all attributes, see [`SharePhotoContent` reference](https://developers.facebook.com/docs/reference/android/current/class/SharePhotoContent).

```
Bitmap image = ...
SharePhoto photo = new SharePhoto.Builder()
        .setBitmap(image)
        .build();
SharePhotoContent content = new SharePhotoContent.Builder()
        .addPhoto(photo)
        .build();
```

### Videos

People using your app can share videos to Facebook with the Share dialog.

Build your share content for videos into the `ShareVideoContent` model. For a list of all attributes, see [`ShareVideoContent` reference](https://developers.facebook.com/docs/reference/android/current/class/ShareVideoContent).

```
Uri videoFileUri = ...
ShareVideo = new ShareVideo.Builder()
        .setLocalUrl(videoUrl)
        .build();
ShareVideoContent content = new ShareVideoContent.Builder()
        .setVideo(video)
        .build();
```

### Multimedia

People can share a combination of photos and videos from your app to Facebook with the Share Dialog. Note the following:

* People need the native Facebook for Android app installed, version 71 or higher.
* People can share a maximum of 6 photos and videos at a time.

Build your multimedia share content with the `ShareMediaContent` model. For a list of all attributes, see [`ShareMediaContent` reference](https://developers.facebook.com/docs/reference/android/current/class/ShareMediaContent).

```
SharePhoto sharePhoto1 = new SharePhoto.Builder()
    .setBitmap(...)
    .build();
SharePhoto sharePhoto2 = new SharePhoto.Builder()
    .setBitmap(...)
    .build();
ShareVideo shareVideo1 = new ShareVideo.Builder()
    .setLocalUrl(...)
    .build();
ShareVideo shareVideo2 = new ShareVideo.Builder()
    .setLocalUrl(...)
    .build();

ShareContent shareContent = new ShareMediaContent.Builder()
    .addMedium(sharePhoto1)
    .addMedium(sharePhoto2)
    .addMedium(shareVideo1)
    .addMedium(shareVideo2)
    .build();

ShareDialog shareDialog = new ShareDialog(...);
shareDialog.show(shareContent, Mode.AUTOMATIC);
```

## Add Sharing Interfaces

After you handle content by building a model, trigger a Facebook sharing interface.

### Buttons

Facebook offers native buttons for Android for triggering sharing.

---

#### Share Button

The Share button will call a [Share dialog](https://developers.facebook.com/documentation/sharing/web#share_dialog). To add a Share button add the following code snippet to your view:

```
ShareButton shareButton = (ShareButton)findViewById(R.id.fb_share_button);
shareButton.setShareContent(content);
```

---

### Share Dialog

The Share dialog switches to the native Facebook for Android app, then returns control to your app after a post is published. Depending on the SDK you’re using, people may need tap the back arrow icon to return to your app. If the Facebook app is not installed, the Share dialog automatically falls back to the web-based dialog.

```
ShareDialog.show(activityOrFragment, content);
```

For example, to show the `ShareDialog` for a link in your activity, create a `ShareDialog` instance in your `onCreate` method:

```
public class MainActivity extends FragmentActivity {
    CallbackManager callbackManager;
    ShareDialog shareDialog;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        callbackManager = CallbackManager.Factory.create();
        shareDialog = new ShareDialog(this);
        // this part is optional
        shareDialog.registerCallback(callbackManager, new FacebookCallback<Sharer.Result>() { ... });
    }
```

Then show the ShareDialog:

```
if (ShareDialog.canShow(ShareLinkContent.class)) {
    ShareLinkContent linkContent = new ShareLinkContent.Builder()
            .setContentUrl(Uri.parse("http://developers.facebook.com/android"))
            .build();
    shareDialog.show(linkContent);
}
```

Finally call the SDK’s `callbackManager` in your `onActivityResult` to handle the response:

```
@Override
protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    callbackManager.onActivityResult(requestCode, resultCode, data);
}
```

If you are using AndroidX activities or fragments, you don’t have to override `onActivityResult`.

### Message Dialog

The Message dialog switches to the native Messenger for Android app, then returns control to your app after a post is published. Depending on the SDK you’re using, people may need tap the back arrow icon to return to your app.

```
MessageDialog.show(activityOrFragment, content);
```

## Hashtags

You can specify a single hashtag to appear with a shared photo, link, or video. This hashtag also appears in the Share dialog, and people have the the opportunity to remove it before publishing.

The following is an example of adding a hashtag to a link share.

```
ShareLinkContent content = new ShareLinkContent.Builder()
        .setContentUrl(Uri.parse("https://developers.facebook.com"))
        .setShareHashtag(new ShareHashtag.Builder()
                .setHashtag("#ConnectTheWorld")
                .build());
        .build();
```

## Advanced Topics

### Built-In Share Fallbacks

In past versions of the Facebook SDK for Android, your app had to check for a native, installed Facebook app before it could open the Share Dialog. If the person didn’t have the app installed, you had to provide your own code to call a fallback dialog.

Now the SDK automatically checks for the native Facebook app. If it isn’t installed, the SDK switches people to their default browser and opens the [Feed Dialog](https://developers.facebook.com/documentation/sharing/reference/feed-dialog).

### App Links

With [App Links](https://developers.facebook.com/documentation/applinks/android) you link back to your app from Facebook posts published from your app. When people click a Facebook post published from your app, it opens your app, and you can even link to specific content within the app.
