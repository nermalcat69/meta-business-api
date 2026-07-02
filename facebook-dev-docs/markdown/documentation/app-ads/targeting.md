---
title: "Understand Facebook App Ads Referral URLs"
source_url: https://developers.facebook.com/documentation/app-ads/targeting
---

# Understand Facebook App Ads Referral URLs

Updated: Nov 5, 2021

The Facebook Referral URL contains secured campaign metadata about the Facebook ad that directly led to an app install from the Google Play Store. Integration with Google Play Install Referrer provides this campaign metadata. This campaign metadata is encrypted and can be decrypted using a decryption key provided for each app.

The following [ad campaign metadata](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#fields) will be provided via Install Referrer:

* Ad Account ID
* Adgroup ID
* Adgroup Name

* Ad ID
* Ad Objective Name
* Ad Campaign Group ID

* Ad Campaign Group Name
* Ad Campaign ID
* Ad Campaign Name

**Note:** The metadata returned is subject to change.

## Before You Start

You need the following:

* A live Facebook Android ad campaign
* A [Google Play Console account⁠](https://support.google.com/googleplay/android-developer/answer/9859062?hl=en&ref_topic=3450769)

## Implementation

### Step 1: Get the Decryption Key

In the App Dashboard under **Basic > Settings** for your app, scroll down to the **Android** section. Copy the **Install Referrer Decryption Key** for use in Step 3.

![](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/248890969_2987092494847431_4032109750337904341_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DqIVU7zILVsQ7kNvwFc16Cf&_nc_oc=AdotodC0suDnofzEVnwDOMpWqBbIDICtkD1uJN5qPrOHennI6X6yT_1oyNLG_6TsvzEK-yC_O02Dq8Tp8Jg07Hb4&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=WN7IrV1isO9-yPBy91ZWrQ&_nc_ss=7b289&oh=00_AQCgKjvpwqWasXrTkWdXjEzAfoDZ1Xz4QtV5dELYgdCBPg&oe=6A607279)

#### Example Key

```
2575590594a9cd809e5bfacf397f8c1ac730dbc38a3e137ecd1ab66591c8c3c9M
```

### Step 2. Set up the Google Play Install Referrer API

Visit [Google's Developer Documentation Guide for Install Referral API⁠](https://developer.android.com/google/play/installreferrer) for the Google Play Store Install Referrer API setup instructions.

The Google Play Install Referrer API returns encrypted data for your app. Because Facebook already provides data in the referrer for some ads, this new encrypted ads data has been appended to the `utm_content` parameter `source` field.

#### Example Encrytped Referrer Data

```
referrer = {  
 utm_content: {  
   source: {  
       "data": "afe56cf6228c6ea8c79da49186e718e92a579824596ae1d0d4d20d7793dca797bd4034ccf467bfae5c79a3981e7a2968c41949237e2b2db678c1c3d39c9ae564c5cafd52f2b77a3dc77bf1bae063114d0283b97417487207735da31ddc1531d5645a9c3e602c195a0ebf69c272aa5fda3a2d781cb47e117310164715a54c7a5a032740584e2789a7b4e596034c16425139a77e507c492b629c848573c714a03a2e7d25b9459b95842332b460f3682d19c35dbc7d53e3a51e0497ff6a6cbb367e760debc4194ae097498108df7b95eac2fa9bac4320077b510be3b7b823248bfe02ae501d9fe4ba179c7de6733c92bf89d523df9e31238ef497b9db719484cbab7531dbf6c5ea5a8087f95d59f5e4f89050e0f1dc03e464168ad76a64cca64b79",  
       "nonce": "b7203c6a6fb633d16e9cf5c1",  
   },  
   ...  
 },  
 ...  
}
```

**Note:** Parameters outside of the encrypted campaign metadata, such as `utm_source`, are not guaranteed to be included and should not be used as an indication of installs from Facebook.

### Step 3. Decrypt Your Data

The data is encrypted with [AES-GCM⁠](https://pycryptodome.readthedocs.io/en/latest/src/cipher/aes.html) 256bit symmetric key using [LibSodium⁠](https://libsodium.gitbook.io/doc/secret-key_cryptography/aead/aes-256-gcm), a standard open-source encryption framework. The encrypted cipher and nonce in this case are HEX-strings, so a hex-to-binary conversion is required before decrypting them.

#### Example Decryption with PHP

```
php> $key = "2575590594a9cd809e5bfacf397f8c1ac730dbc38a3e137ecd1ab66591c8c3c9"  
php> $cipher = "afe56cf6228c6ea8c79da49186e718e92a579824596ae1d0d4d20d7793dca797bd4034ccf467bfae5c79a3981e7a2968c41949237e2b2db678c1c3d39c9ae564c5cafd52f2b77a3dc77bf1bae063114d0283b97417487207735da31ddc1531d5645a9c3e602c195a0ebf69c272aa5fda3a2d781cb47e117310164715a54c7a5a032740584e2789a7b4e596034c16425139a77e507c492b629c848573c714a03a2e7d25b9459b95842332b460f3682d19c35dbc7d53e3a51e0497ff6a6cbb367e760debc4194ae097498108df7b95eac2fa9bac4320077b510be3b7b823248bfe02ae501d9fe4ba179c7de6733c92bf89d523df9e31238ef497b9db719484cbab7531dbf6c5ea5a8087f95d59f5e4f89050e0f1dc03e464168ad76a64cca64b79";  
php> $nonce = "b7203c6a6fb633d16e9cf5c1";  
php> $result = PHP\sodium_crypto_aead_aes256gcm_decrypt(PHP\sodium_hex2bin($cipher), '', PHP\sodium_hex2bin($nonce), PHP\sodium_hex2bin($key));  
php> echo $result;     // This has the 16 byte tag trimmed  
{  
   "ad_id":"{ad-id}",  
   "adgroup_id":"{ad-group-id}",  
   "adgroup_name":"{ad-group-name}",  
   "campaign_id":"{campaign-id}",  
   "campaign_name":"{campaign-name",  
   "campaign_group_id":"{campaign-group-id}",  
   "campaign_group_name":"{campaign-group-name}",  
   "account_id":"{account-id}",  
   "ad_objective_name":"APP_INSTALLS",  
}
```

**Note:** The decrypted payload will include a 16 byte tag at the end. This is a tag added automatically by libSodium's AES-GCM encryption, and it can be ignored or trimmed.

## Work with a Mobile Measurement Partner or Service Provider

If you are working with a Facebook Mobile Measurement Partner (MMP) or a service provider for reporting and analysis, you can either provide your partner with the decrypted data or the decryption key. If you provide your partner with the decryption key, they can then use the steps in this guide to decrypt the data on your behalf.

## Additional Resources

* [Google Developer Guide for Install Referrer⁠](https://developer.android.com/google/play/installreferrer)
* [Google Technical Reference for Install Referrer API⁠](https://developer.android.com/google/play/installreferrer/igetinstallreferrerservice)
* [Google Install Referrer Library⁠](https://developer.android.com/google/play/installreferrer/library)
* [Libsodium AES256-GCM Documentation – Secret-key Cryptography⁠](https://libsodium.gitbook.io/doc/secret-key_cryptography/aead/aes-256-gcm)
* [The Python AES-GCM encryption/decryption algorithm for Libsodium⁠](https://pycryptodome.readthedocs.io/en/latest/src/cipher/aes.html)
