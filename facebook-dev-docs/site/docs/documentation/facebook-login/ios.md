---
title: "Testing a Login Flow"
source_url: https://developers.facebook.com/documentation/facebook-login/ios
---

# Testing a Login Flow

Updated: Jun 30, 2026

It's important to test and verify that your Facebook Login flow works well under a variety of conditions. To test your Login flow, first create a separate Facebook user account:

* Create a new test user account with Facebook
* Log into Facebook with your test user credentials

## Common Test Cases

Before you test each use case below, make sure you remove your app from your test user's Facebook account using [app settings⁠](https://www.facebook.com/settings?tab=applications).

![Facebook App Settings page showing the Apps you use list where you remove an app before testing](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/615826268_1414612733730710_192701951504523760_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=YbLDkvpmvBQQ7kNvwF19ATY&_nc_oc=AdoiEf88JDC_NDYLBxvQAQTOjIviIeMXkRQ91gxotQPRJF8AAMeSk-IDYBbNWtiKiFdhPqOiDyJvqVewBuenoWzP&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=wUOmvZy0dDRYlfeQ5liSJw&_nc_ss=7b289&oh=00_AQCK_Dkj7FyOaEX4d22hC3hhggpEqA9M0_dWZKbwuAZeGg&oe=6A607BCD)

![Facebook Login read-permissions dialog granting public profile, email, and likes with a Continue as Billy button](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/16179951_141359083037439_3885858252168101888_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=jB2osSGr1KwQ7kNvwH_O7Hy&_nc_oc=Adqh_I0Jj4pan7ANTWEjQJTpr1ncK-toaA00RKKlgrYkvooLMKJdq8kndmwCVq_grbP_cfpFpTEMGrBPjaLFLL5a&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=wUOmvZy0dDRYlfeQ5liSJw&_nc_ss=7b289&oh=00_AQBB4GDHtuZSI9koOqNiy4W3kb5jKbJTcIxSAQEtGIcNCw&oe=6A607E83)

![Facebook Login write-permissions dialog asking to post to Facebook with a Friends audience selector and OK button](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/16344795_1855913284684189_271619779112992768_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=BC3hycpaE30Q7kNvwGl9xa-&_nc_oc=AdpHC9g-B4B94Z9PacldjZPKNCWiq8HbaX3ThNSdgv2AZywmhZd_AYne0Bn6XKtK0qAwXqfb1zJBwGYs74hEv_WI&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=wUOmvZy0dDRYlfeQ5liSJw&_nc_ss=7b289&oh=00_AQDJUECgdU3KsYWcUG5e1o3QM19vEwnWGE2-v4Ix-pZCug&oe=6A607DDC)

#### 1. Someone new to your app logs in with Facebook

* Go to your app and tap on the `Log in with Facebook` button
* Tap OK to accept the read permissions
* Click OK again to accept write permissions if applicable
* Go to [app settings⁠](https://www.facebook.com/settings?tab=applications) and verify that the granted permissions are there

#### 2. Someone logs in with Facebook after previously logging in via a non-Facebook flow with the same email address

* Go to your app and login using your email address
* Log out of your app and tap on the "Log in with Facebook" button
* Tap OK to accept the read permissions (and OK again to accept write permissions where applicable)
* Go to [app settings⁠](https://www.facebook.com/settings?tab=applications) on Facebook and verify that the granted permissions are there

#### 3. Someone who has logged into your app with Facebook in the past logs back in

* Go back to your app and tap on the "Log in with Facebook" button
* Tap OK to accept the read permissions (and OK again to accept write permissions where applicable)
* Uninstall then re-install your app
* Open your app and tap on the "Log in with Facebook" button
* Verify that you can log in without seeing any permission dialogs

#### 4. Someone cancels log in with Facebook and tries to log in again

* Go to your app and tap on the "Log in with Facebook" button
* Verify that the read permissions are shown and tap "Cancel"
* Open your app and tap on the "Log in with Facebook" button
* Verify that the read permissions are shown again

#### 5. Someone removes your app from Facebook via app settings and revisits your app. Your app should detect this and prompt the person to log back in.

* Go to your app and tap on the "Log in with Facebook" button
* Tap OK to accept the read permissions (and OK again to accept write permissions where applicable)
* Go to [app settings⁠](https://www.facebook.com/settings?tab=applications) on Facebook and remove your app
* Repeat steps 1-2 and verify that Facebook Login works

#### 6. Someone changes the Facebook password after logging in with Facebook to your app

In this case, your token will be invalid and you should notify users that their Facebook session has expired and ask them to log in again.

* Change your Facebook password and select "Log me out of other devices"
* Go to your app and tap on the "Log in with Facebook" button
* Tap OK to accept the read permissions (and OK again to accept write permissions where applicable)
* Go to app settings on Facebook and verify that the granted permissions are there

#### 7. Someone disabled Facebook platform via app settings and logs in to your app

In this case, you should make sure your app detects the error so that it can notify users and redirect them to the non-iOS integrated version of Facebook Login.

* Turn off platform for your test user via [app settings⁠](https://www.facebook.com/settings?tab=applications)
* Go to your app and tap on the "Log in with Facebook" button
* Tap OK to accept the read permissions (and OK again to accept write permissions where applicable)
* Verify that platform is now turned on and the app is added to your test user profile with correct privacy

#### 8. Someone revisits your app when your app token has expired.

Please read our guide on [handling token expiration](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#extending)

#### 9. For games that want to sync their status across multiple devices, test your syncing state

* Login with Facebook on your app and play your app's game until you reach a certain level X
* Login with Facebook on a different device via the same or different operating systems, and test that level X remains

## Additional use cases that you should test on iOS

#### 1. Someone logs into your app when the Facebook app is installed and iOS Facebook integration is enabled

If someone clicks "Cancel" in response to your Facebook Login read permissions request, he / she will need to go into the iOS system settings to re-enable Login for your app.

In cases where people have previously denied Facebook permissions via iOS integrated login, your app should use conventional fast app switch login for future permissions requests. In terms of SDK calls, don't use FBSessionLoginBehaviorUseSystemAccountIfPresent as the FBSessionLoginBehavior in this case. See [FBSession](https://developers.facebook.com/docs/reference/ios/3.24/class/FBSessionTokenCachingStrategy) for versions 3.24 and older of the SDK and [FBSDKAccessToken currentAccessToken](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAccessToken) and [FBSDKLoginManager](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKLoginManager) for newer versions.

#### 2. Someone logs into your app when the Facebook app is not installed and iOS Facebook integration is not enabled

* Go to your app and tap on the "Log in with Facebook" button
* Verify that the mobile web Facebook Login screen appears and log in

![Mobile web Facebook Login screen on iPhone with a Continue as Carpus button for the Rell app](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/16344918_169764566844281_1286387342747107328_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=o3TGqXt_J7YQ7kNvwFuhb9U&_nc_oc=AdoRkwlrY-EHdxTONNHufzZ3XDDKRxHOLazCo85ojJw5ACJF-BG4AhWw45qd_PqOCl9Wh7iWMCCdcenC82KSrKyq&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=wUOmvZy0dDRYlfeQ5liSJw&_nc_ss=7b289&oh=00_AQCCTcH5FjLZQ6MvccH6YrdI-C-haOCfSgchRigOmLsG4Q&oe=6A608375)

* Tap OK to accept the read permissions (and OK again to accept write permissions where applicable)
* Go to [app settings⁠](https://www.facebook.com/settings?tab=applications) on Facebook and verify that the granted permissions are there

#### 3. Someone logs in to your app when the Facebook app is not installed and iOS Facebook integration is enabled

* Go to your app and tap on the "Log in with Facebook" button
* Tap OK to accept the read permissions (and OK again to accept write permissions where applicable)
* Go to [app settings⁠](https://www.facebook.com/settings?tab=applications) on Facebook and verify that the granted permissions are there

## Test Users

In your app settings (under "Roles", i.e., `https://developers.facebook.com/apps/{YOUR_APP_ID}/roles/test-users/`), you can create [test user accounts](https://developers.facebook.com/docs/apps/test-users) to verify your Facebook integration without worrying about spamming.

In the iOS SDK, the class `FBSDKTestUsersManager` (in `FBSDKCoreKit`) can be used to easily fetch access tokens for those test users so that you can write automated integration tests. Note this class requires your app secret and you should ensure the app secret is not included in your released app.
