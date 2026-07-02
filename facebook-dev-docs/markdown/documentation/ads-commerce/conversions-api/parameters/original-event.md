---
title: "App Data Parameters"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/original-event
---

# App Data Parameters

Updated: Oct 2, 2024

Use these parameters to share app data and device information with the Conversions API.

See the [Conversions API for App Events](https://developers.facebook.com/documentation/ads-commerce/conversions-api/app-events) documentation for guidance on integrating app events.

| Parameter | Description |
| --- | --- |
| `advertiser_tracking_enabled`  boolean | **Required for app events**  Use this field to specify ATT permission on an iOS 14.5+ device. Set to `0` for disabled or `1` for enabled. |
| `application_tracking_enabled`  boolean | **Optional**  A person can choose to enable ad tracking on an app level. Your SDK should allow an app developer to put an opt-out setting into their app. Use this field to specify the person’s choice. Use `0` for disabled, `1` for enabled. |
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
