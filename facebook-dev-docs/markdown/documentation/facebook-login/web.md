---
title: "Troubleshoot"
source_url: https://developers.facebook.com/documentation/facebook-login/web
---

# Troubleshoot

Updated: Feb 27, 2020

The following are commonly encountered problems and solutions for the Facebook Login for Android.

## I get a login dialog error.

I get the native login dialog permissions, but the person is not authenticated. The logcat exception error returned looks like:

```
```
...W/fb4a:fb:OrcaServiceQueue(504): com.facebook.orca.protocol.base.ApiException:  
   remote_app_id does not match stored id
```
```

or,

I see a non-native login dialog that includes an error that looks like:

```
```
...App is Misconfigured for facebook login...
```
```

If you are having trouble with your login dialog, here are some things to try:

* If you don’t have openssl, install it for [Windows⁠](http://www.slproweb.com/products/Win32OpenSSL.html) or [MAC⁠](http://www.openssl.org/source/).
* Be sure you have [signed your Android app⁠](https://developer.android.com/studio/publish/app-signing).

## My key hash is invalid.

If you are having trouble with your key hash, here are some things to try:

* When you add a new key hash to the [App Dashboard](https://developers.facebook.com/apps) be sure to **Save Changes**.
* The password you entered is incorrect. The default Keystore password: “android”.
* Copy and paste the key hash you sent to Facebook to the [App Dashboard](https://developers.facebook.com/apps) and **Save Changes** and make this change to `onCreate()` in your main activity:

  ```
  @Override

  public void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);

       try {
           PackageInfo info = getPackageManager().getPackageInfo(
                             "{your-package-name}",                  //Insert your own package name.
                              PackageManager.GET_SIGNATURES);
           for (Signature signature : info.signatures) {
               MessageDigest md = MessageDigest.getInstance("SHA");
               md.update(signature.toByteArray());
               Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
               }
            } catch (NameNotFoundException e) {

            } catch (NoSuchAlgorithmException e) {

            }
             ...
  ```
* [Generate a new key hash](https://developers.facebook.com/documentation/android/getting-started#create_hash)

## I get a Keytool error.

* If you get a `Command not found` error, add the path to your global `PATH` or go to the folder to run the following command:

  On Windows: `C:\Program Files (x86)\Java\jdk1.6.0\bin`  
  On MAC: `/usr/bin`
* If Keytool could not find your `debug.keystore` location. Check for the correct path. Keytool always ask for a password when it has the correct location.
