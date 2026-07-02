---
title: "Onboarding Integration for MBE"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/fbe
---

# Onboarding Integration for MBE

Updated: Jun 8, 2026

The [Meta Business Extension (FBE)](https://developers.facebook.com/docs/marketing-api/fbe/fbe2) is a click-through popup interface available to approved partners that allows a Facebook user to create and connect business assets (for example, Business Manager, Facebook Page, product catalog, and so on) and set up ads and product shops on different surfaces (Facebook/Instagram).

The onboarding process includes:

* Creation of the commerce account
* Asset creation/selection
* Distribution channel setup
* Initial inventory synchronization setup
* Default product collections setup

In this context, onboarding is the creation or selection of assets, commerce account creation, and distribution channel setup.

## Before You Start

* You can set up Facebook Shops without anything at hand, except an eligible Instagram account. This means that any of your sellers can start an MBE flow without an existing catalog, Business Manager, ads account, and so on. Sellers can create all required assets within the MBE flow.
* To use Instagram Shopping, the account must satisfy our [requirements⁠](https://help.instagram.com/1627591223954487).
* You can perform your setup via the MBE click-through popup UI. This UI allows sellers to create and select assets and select product and distribution channels.

## How it Works

The MBE product contains a [click-through installation](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/reference), [FBE management view](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/guides/business-configurations?hc_location=ufi#feature-mgmt-view), and [FBE API set](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/guides/get-features#fbe-installation-api).

The MBE flow is outlined in the next steps.

## Step 1: Initiate the MBE Click-Through Popup

Initiate the [MBE click-through popup](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/reference) to complete the MBE install. Sellers can select assets and select products they want to work with (ads, offsite, Facebook Shops, Instagram, and so on). MBE clicks through a popup redirect seller into your surface after a successful installation.

![MBE 'Open Your Shop' popup with Facebook Shop, Instagram Shop, and Facebook Ads channels all selected](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/586564846_1369493284909322_6565285432874542913_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RUQIfiMeDOUQ7kNvwFrR2ki&_nc_oc=AdrhtePD35JOzEyQEavCzuuT-Go-zPa_NVlUPUobsjvvi5jWo0hOk6R9fJelvyKNgmjPeDSycKtRtuGprUbaO1yH&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=miWvbBlKF4shG7yVcuAJaA&_nc_ss=7b289&oh=00_AQBHm7T86QK1WCjoropJvYj8X8FFwoI9OJoVn4ESxwoVrQ&oe=6A60995E)

**Example Response — Redirect After Onboarding**

```
{
 "client_id": <client id>,
 "display": "page",
 "extras": {
   "business_config": {
     "business": {
       "name": "<business name>"
     }
   },
   "repeat": false,
   "setup": {
     "business_vertical": "ECOMMERCE",
     "channel": "COMMERCE",
     "currency": "USD",
     "domain": "<seller domain>",
     "external_business_id": "<business id in your system>",
     "pixel_id": "<prefilled id if exist in your system>",
     "timezone": "America/New_York"
   }
 },
 "redirect_uri": "<url to redirect after onboarding is complete>",
 "response_type": "code",
 "scope": "manage_pages,publish_pages,business_management,ads_management,instagram_basic,manage_business_extension"
}
```

## Step 2: Pull Asset IDs, User Tokens, Instagram Shopping Status

After successfully installing, you can pull asset IDs, user tokens, and Instagram shopping status. [Learn more](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/reference)**Example Request**

```
 curl -i -X GET \
"https://graph.facebook.com/<version>/fbe_business/fbe_installs?fbe_external_business_id=<external business id>&access_token=<access token sanitized>"
```

**Example Response**

```
 {
  "data": [
    {
      "business_manager_id": "0123456789",
      "commerce_merchant_settings_id": "0987654321",
      "onsite_eligible": true,
      "pixel_id": "000111",
      "profiles": [
        "000111222"
      ],
      "ad_account_id": "000111222333",
      "catalog_id": "123456789",
      "pages": [
        "1234567890"
      ],
      "instagram_profiles": [
        "000111333"
      ],
      "ig_shop": {
        "status": "NOT_SUBMITTED"
      }
    }
  ]
}
```

## Step 3: Get System User Token Access

Get the [system user token access](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/guides/get-features#get-system-user-token-with-the-api/) to get a Page token for the commerce account.

**Example Request**

```
curl -X POST \
  -F 'app_id={app_id}' \
  -F 'scope=ads_management,catalog_management,manage_business_extension' \
  -F 'access_token={user_access_token}' \
  -F 'fbe_external_business_id={fbe_external_business_id}' \
  -F 'appsecret_proof={appsecret_proof}' \
  https://graph.facebook.com/<API_VERSION>/<client_business_manager_id>/access_token
```

The `appsecret_proof` parameter is **required**. It is a `sha256` hash of the access token used in the call, using your app secret as the key. Calls to this endpoint without a valid `appsecret_proof` are rejected. For more information, see [Generate the Proof](https://developers.facebook.com/docs/graph-api/guides/secure-requests#generate-the-proof).

**Example Response**

```
{
  "access_token": "<system user token>"
}
```

## Step 4: Review Commerce Account Details

Review commerce account details using the `merchant_settings_id` and [Commerce API status](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#status/).

**Example Request**

```
curl -X GET -G \
 -d 'access_token=<ACCESS_TOKEN>' \
 https://graph.facebook.com/{merchant-settings-id}/?fields=setup_status
```

**Example Response**

```
 {
  "data": [
    {
      "shop_setup": "SETUP",
      "payment_setup": "SETUP",
      "review_status": {
        "status": "REJECTED",
        "reasons": [
          {
            "code": "UNKNOWN",
            "message": "Your account is not eligible for Facebook Shops at this time.",
            "help_url": "https://www.facebook.com/help/contact/481136396104354"
          }
        ]
      }
    }
  ]
}
```

## Step 5: Monitor Commerce Account Status Changes

Use our [commerce webhook](https://developers.facebook.com/docs/commerce-platform/order-management/webhooks) to monitor commerce account status changes. For example, to see if sellers enable new channels, make changes to Checkout on Facebook/Instagram to Checkout on another website or vice versa, complete the setup, pass our integrity review, and so on.

To change the commerce setup for sellers, direct them to the [MBE management view](https://developers.facebook.com/docs/marketing-api/fbe/fbe2/guides/business-configurations?hc_location=ufi#feature-mgmt-view/).

**Example Launch Link**

```
https://www.facebook.com/facebook_business_extension/management/?app_id=<your app id>&external_business_id=<external business id>&tab=commerc
```

## Learn More

* [Commerce Integration for Platform Partners](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/platform)
* [Meta Business Extension](https://developers.facebook.com/docs/marketing-api/fbe)
