---
title: "Conversions API for App Events"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/offline-events
---

# Conversions API for App Events

Updated: Aug 25, 2025

The Conversions API enables advertisers to send web, app, physical store and business messaging events to Meta through a single endpoint rather than across multiple sources. This consolidation reduces the number of integrations an advertiser's tech stack must maintain and brings web, app, physical store, and business messaging events into Meta Events Manager through a single dataset.

This documentation provides guidance for integrating app events to the Conversions API.

## Prerequisites

### 1. Dataset

App events sent through the Conversions API must be associated with a dataset.

Datasets allow advertisers to connect and manage event data from web, app, store and business messaging event sources to the Conversions API. Datasets may show event data from any of these integrations that you choose to set up:

* Meta Pixel (website events)
* App Events API (app events, including Facebook SDK for iOS or Android, mobile measurement partners (MMPs))
* Offline Conversions API (Meta's legacy API for offline events)
* Messaging Events API (messaging events)

Datasets enable you to view all customer activities from a single interface. They also allow you to reduce the effort to build and maintain multiple API integrations.

In Events Manager, advertisers have different [options⁠](https://www.facebook.com/business/help/5270377362999582?id=490360542427371) to create a dataset depending on their starting point. Or you can [create a brand new dataset⁠](https://www.facebook.com/business/help/5818684664831465?id=490360542427371) in Events Manager by linking during offline event set creation or through an existing mobile app or during messaging event set creation information. Note that linking a dataset to an application is required before sending mobile app events to the Conversions API and only one application can be linked to a dataset. See more [details⁠](https://www.facebook.com/business/help/768703235046938?locale=en_US) and instructions [here⁠](https://www.facebook.com/business/help/750785952855662?id=490360542427371).

You can make the `GET` call to [https://graph.facebook.com/v16.0/{ads-pixel-id}/is\_consolidated\_container](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel) to detect if the advertiser's dataset is consolidated and thus eligible for passing app events via the Conversions API.

### 2. Permissions

* To implement a direct integration as an advertiser, please follow the instructions [here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/get-started#integration-methods) for prerequisites and permissions.
* To implement a partner platform integration, please follow the instructions [here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/end-to-end-implementation#integration-as-a-platform) for prerequisites and permissions.

## Configuration

### Sending app events to the Conversions API

**a. Linking dataset ID and app ID**

In Events Manager, there are two ways to link your app with a dataset:

* Select the **Data Sources** tab, find your app's **Setting** tab and perform the linking.
* Select the **Data Sources** tab, in the **Overview** tab of your app, use the **Link to dataset** button in the **All Activity** section.

Once you complete the linking, the dataset includes the connected app.

![Events Manager Settings tab for the Mini-App Demo app, showing the Linking section with a Link button to tie a mobile app ID to a dataset ID](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/325341809_579175036986617_3350700945589157027_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RLoUGPHyHboQ7kNvwHU4sHu&_nc_oc=AdowINFmNzqgBF19DurIPp1qa0LhUKdXM67Aa9lYk6dYnGJSyOOrgw0doLBOa_2NAWBW0xRE8Dt9oN5pH_6gs_3G&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=YlK1D_pxuTgzYX64GSrBMA&_nc_ss=7b289&oh=00_AQA4WvyFeIeZ62cEP_53RUzT-8SxOD1uMebnw28rFFJRwg&oe=6A60A132)

**b. Required fields**

You can refer [here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters) to the current set of parameters that can be sent over the Conversions API. For sending app events, the following [`server_event` fields](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event) can be shared in the payload:

* The parameter `action_source` must contain the value `app` for app events.
* The `event_id` is required for the deduplication setup case.
* [`app_data` fields](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/app-data)
* [`user_data` fields](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/customer-information-parameters)
* [`custom_data` fields](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/custom-data)

### App data fields

| Parameter | Description |
| --- | --- |
| `advertiser_tracking_enabled`  boolean | **Required for app events**  Use this field to specify ATT permission on an iOS 14.5+ device. Set to `0` for disabled or `1` for enabled. |
| `application_tracking_enabled`  boolean | **Optional**  A person can choose to enable ad tracking on an app level. Your SDK should allow an app developer to put an opt-out setting into their app. Use this field to specify the person's choice. Use `0` for disabled, `1` for enabled. |
| `extinfo`  object  Expand the row to view the full list of `extinfo` values. | **Required for app events**  Extended device information, such as screen width and height. This parameter is an array. Separate the values with commas. When using `extinfo`, **all values are required and must be in the order indexed below**. If a value is missing, fill with an empty string as a placeholder.  Note:   * `version` must be `a2` for Android * `version` must be `i2` for iOS |
| ↳ `0`  string | **Required**  extinfo version  Example: `i2` |
| ↳ `1`  string | app package name  Example: `com.facebook.sdk.samples.hellofacebook` |
| ↳ `2`  string | short version (int or string)  Example: `1.0` |
| ↳ `3`  string | long version  Example: `1.0 long` |
| ↳ `4`  string | **Required**  OS version  Example: `13.4.1` |
| ↳ `5`  string | device model name  Example: `iPhone5,1` |
| ↳ `6`  string | locale  Example: `En_US` |
| ↳ `7`  string | timezone abbreviation  Example: `PDT` |
| ↳ `8`  string | carrier  Example: `AT&T` |
| ↳ `9`  string | screen width  Example: `320` |
| ↳ `10`  string | screen height  Example: `568` |
| ↳ `11`  string | screen density  Example: `2` |
| ↳ `12`  string | CPU cores  Example: `2` |
| ↳ `13`  string | external storage size in GB  Example: `13` |
| ↳ `14`  string | free space on external storage in GB  Example: `8` |
| ↳ `15`  string | device timezone  Example: `USA/New York` |
| `campaign_ids`  string | **Optional**  An encrypted string and non-user metadata appended to the outbound URL (for example, `ad_destination_url`) or deep link (for App Aggregated Event Measurement) when a user clicked on a link from Facebook.  Graph API definition: Parameter passed via the deep link for Mobile App Engagement campaigns. |
| `install_referrer`  string | **Optional**  Third party install referrer, currently available for Android only, see [here for more⁠](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns). |
| `installer_package`  string | **Optional**  Used internally by the Android SDKs. |
| `url_schemes`  array | **Optional**  Used internally by the iOS and Android SDKs. |
| `vendor_id`  string | **Optional**  Vendor ID. |
| `windows_attribution_id`  string | **Optional**  Attribution token used for Windows 10. |

### Customer information parameters

| Parameter | Description |
| --- | --- |
| `anon_id`  string | **Do not hash.**  Your install ID. This field represents unique application installation instances. |
| `client_ip_address`  string | **Do not hash.**  The IP address of the browser corresponding to the event must be a valid IPV4 or IPV6 address. IPV6 is preferable over IPV4 for IPV6-enabled users. The `client_ip_address` user data parameter must never be hashed.  No spaces should be included. Always provide the real IP address to ensure accurate event reporting. **Note:** This information is automatically added to events sent through the browser, but it must be manually configured for events sent through the server.   ---   **Example:** *IPV4:* 168.212.226.204 *IPV6:* 2001:0db8:85a3:0000:0000:8a2e:0370:7334 |
| `madid`  string | **Do not hash.**  Your mobile advertiser ID, the advertising ID from an Android device or the Advertising Identifier (IDFA) from an Apple device. |

### Custom data

| Parameter | Description |
| --- | --- |
| `description`  string | **Optional.**  String, event description, custom. |
| `level`  string | **Optional.**  String, Level of a game, custom. |
| `max_rating_value` | **Optional.**  Long, Upper bounds of a rating scale, for example 5 on a 5 star scale, custom. |
| `success`  boolean | **Optional.** `1` for yes, `0` for no, custom. |

In summary, the app events shared using the Conversions API **will require** the following data parameters:

* [`action_source`](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event#action-source): Must be set to 'app'. (By using the Conversions API, you agree that the `action_source` parameter is accurate to the best of your knowledge)
* `event_id`: Required for the deduplication setup, see details in the **Set up deduplication for multiple channels** section.
* [`advertiser_tracking_enabled`](https://developers.facebook.com/docs/graph-api/reference/application/activities)
* [`extinfo`](https://developers.facebook.com/docs/graph-api/reference/application/activities)

The following parameter is **optional**:

* [`application_tracking_enabled`](https://developers.facebook.com/docs/graph-api/reference/application/activities)

Below is an example of `extinfo`. Make sure all the sub parameters below are filled and in sequential order. If anything is missing, use an empty string as a placeholder.

| Subparameter Name | Required | Data Type | Example |
| --- | --- | --- | --- |
| extinfo version | Yes | string | `i2` (version must be **a2** for Android, must be **i2** for iOS) |
| app package name | No | string | `com.facebook.sdk.samples.hellofacebook` |
| short version | No | string | `1.0` |
| long version | No | string | `1.0 long` |
| os version | Yes | string | `13.4.1` |
| device model name | No | string | `iPhone5,1` |
| locale | No | string | `En_US` |
| timezone abbr | No | string | `PDT` |
| carrier | No | string | `AT&T` |
| screen width | No | string | `320` |
| screen height | No | string | `568` |
| screen density | No | string | `2` |
| cpu core | No | string | `2` |
| external storage size | No | string | `13` |
| free space in external storage size | No | string | `8` |
| device time zone | No | string | `USA/New York` |

**c. Set Up Deduplication for Multiple Channels**

The deduplication mechanism will be required to remove duplicate event traffic between the Conversions API integration and all other existing integrations you have with app events including SDK, MMPs, and App Events API.

For app events, Meta [applies the same deduplication functionality](https://developers.facebook.com/documentation/ads-commerce/conversions-api/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/#event-id-and-event-name--recommended-) that exists for web events. The logic leverages the field `event_id` and `event_name` based deduplication (Conversions API and SDK / App Events API events that carry the same `event_id`). The `event_id` parameter is an identifier that can uniquely distinguish between similar events. Inaccurate event IDs may cause your conversion to be wrongly deduplicated, further impacting conversion reporting and campaign performance.

You can refer to the following developer documentation to implement the deduplication setup:

* [How to set up app events](https://developers.facebook.com/docs/app-events/overview)
* [Example of deduplication setup](https://developers.facebook.com/docs/app-events/best-practices/ecom-and-retail)

Here is an example of how to log a custom event. To do so, pass the name of the event as an AppEvents.Name in iOS SDK:

```
AppEvents.shared.logEvent(.achievedLevel, parameters: [AppEvents.ParameterName(rawValue: "event_id"): "123"])
```

For app install events, there is already a deduplication mechanism that makes sure only one install is attributed in the last 90-day window. Meta keeps the first event and drops the later ones regardless of the action source they are from. There is no requirement for implementing deduplication for app events related to install events.

**d. Sending Events**

To send new events, make a `POST` request to the Conversions API from this path: `https://graph.facebook.com/{API_VERSION}/{DATASET_ID}/events?access_token={TOKEN}`

When you post to this edge, Meta creates new app server events. For more details, please refer to the following [developer document](https://developers.facebook.com/documentation/ads-commerce/conversions-api/using-the-api).

Here is an example of how the parameters fit into the overall schema of a **Purchase** event payload:

```
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1684389752,
      "action_source": "app",
      "user_data": {
        "client_ip_address": "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        "em": [
          "30a79640dfd8293d4f4965ec11821f640ca77979ca0a6b365f06372f81a3f602"
        ],
        "ph": [
          "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b",
          "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
        ],
        "madid": "38400000-8cf0-11bd-b23e-10b96e40000d",
        "anon_id": "12345340-1234-3456-1234-123456789012"
      },
      "custom_data": {
        "currency": "USD",
        "value": "142.52"
      },
      "app_data": {
        "advertiser_tracking_enabled": 1,
        "application_tracking_enabled": 1,
        "campaign_ids": "abcd1234",
        "extinfo": [
          "a2",
          "com.some.app",
          "771",
          "Version 7.7.1",
          "10.1.1",
          "OnePlus6",
          "en_US",
          "GMT-1",
          "TMobile",
          "1920",
          "1080",
          "2.00",
          "2",
          "128",
          "8",
          "USA/New York"
        ]
      }
    }
  ]
}
```

Here is an example of how the parameters fit into the overall schema of an **Install** event payload:

```
{
  "data": [
    {
      "event_name": "MobileAppInstall",
      "event_time": 1684389252,
      "action_source": "app",
      "user_data": {
        "client_ip_address": "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        "madid": "38400000-8cf0-11bd-b23e-10b96e40000d",
        "anon_id": "12345340-1234-3456-1234-123456789012"
      },
      "app_data": {
        "advertiser_tracking_enabled": 1,
        "application_tracking_enabled": 1,
        "extinfo": [
          "a2",
          "com.some.app",
          "771",
          "Version 7.7.1",
          "10.1.1",
          "OnePlus6",
          "en_US",
          "GMT-1",
          "TMobile",
          "1920",
          "1080",
          "2.00",
          "2",
          "128",
          "8",
          "USA/New York"
        ]
      }
    }
  ]
}
```

## Troubleshooting

You can use the [Payload Helper tool](https://developers.facebook.com/documentation/ads-commerce/conversions-api/payload-helper) to generate payload data:

* Choose the `app` action source for app events
* Fill info for the events that will be sent to Meta
* This will generate event payload, which can be used as a template for your Conversions API integration

Use the [Test Events tool⁠](https://www.facebook.com/business/help/2040882565969969?id=1205376682832142) in Events Manager for testing.

## See also

* [Conversions API Overview](https://developers.facebook.com/documentation/ads-commerce/conversions-api)
* [Using the Conversions API](https://developers.facebook.com/documentation/ads-commerce/conversions-api/using-the-api)
* [Conversions API Parameters](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters)
* [Best Practices](https://developers.facebook.com/documentation/ads-commerce/conversions-api/best-practices)
