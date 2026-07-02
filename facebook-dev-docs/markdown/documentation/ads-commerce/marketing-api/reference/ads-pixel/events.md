---
title: "Ads Pixel Events"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/events
---

# Ads Pixel Events

Updated: Jan 2, 2024

## Reading

You can't perform this operation on this endpoint.

## Creating

### /{ads\_pixel\_id}/events

You can make a POST request to *events* edge from the following paths:

* [/{ads\_pixel\_id}/events](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/events)

When posting to this edge, no Graph object will be created.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
POST /v25.0/<PIXEL_ID>/events HTTP/1.1
Host: graph.facebook.com

data=%5B%7B%22event_name%22%3A%22PageView%22%2C%22event_time%22%3A1778607673%2C%22user_data%22%3A%7B%22fbc%22%3A%22fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890%22%2C%22fbp%22%3A%22fb.1.1558571054389.1098115397%22%2C%22em%22%3A%22309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd%22%7D%7D%5D
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%3CPIXEL_ID%3E%2Fevents%3Fdata%3D%255B%257B%2522event_name%2522%253A%2522PageView%2522%252C%2522event_time%2522%253A1778607673%252C%2522user_data%2522%253A%257B%2522fbc%2522%253A%2522fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890%2522%252C%2522fbp%2522%253A%2522fb.1.1558571054389.1098115397%2522%252C%2522em%2522%253A%2522309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd%2522%257D%257D%255D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `data` *list<JSON-encoded string>* | data  required |
| `platforms` *array<JSON object>* | platforms  ---   `name` *string* name  required  `type` *string* type  required  `version` *string* version  Show child parameters |
| `progress` *Object* | upload progress for offline events  ---   `start_inclusive` *int64*  `end_exclusive` *int64*  Show child parameters |
| `test_event_code` *string* | Code that is used to identify server test events |

#### Return Type

```
Struct  {
events_received: integer,
messages:  List  [string],
fbtrace_id: string,
} Or  Struct  {
applink_class: string,
applink_url: string,
applink_args: string,
is_fb: bool,
is_paid: bool,
account_id: ad account id,
ad_id: numeric string,
ad_objective_name: string,
adgroup_id: numeric string,
adgroup_name: string,
campaign_id: numeric string,
campaign_name: string,
campaign_group_id: numeric string,
campaign_group_name: string,
click_time: timestamp,
is_mobile_data_terms_signed: bool,
is_external: bool,
is_instagram: bool,
is_view_through: bool,
is_modeled: bool,
is_same_ip: bool,
device_model: string,
os_version: string,
view_time: timestamp,
is_playable_ad: bool,
is_aaa_campaign: bool,
creative_id: numeric string,
engagement_type: enum,
trace_id: string,
fbclid: string,
event_id: string,
vertical: string,
sub_vertical: string,
advertiser_region: string,
additional_touchpoints:  List  [ Struct  {
ad_id: numeric string,
adgroup_id: numeric string,
adgroup_name: string,
campaign_id: numeric string,
campaign_name: string,
campaign_group_id: numeric string,
campaign_group_name: string,
account_id: ad account id,
is_view_through: bool,
click_time: timestamp,
view_time: timestamp,
engagement_type: enum,
is_external: bool,
is_instagram: bool,
publisher_platform: string,
is_aaa_campaign: bool,
creative_id: numeric string,
vertical: string,
sub_vertical: string,
advertiser_region: string,
}],
video_completion_percent: float,
dwell_ms: unsigned int32,
publisher_platform: string,
platform_position: string,
auditing_token: string,
hashed_ad_network_publisher_app_id: string,
} Or  Struct  {
success: bool,
} Or  Struct  {
claims:  List  [ Struct  {
is_fb: bool,
ad_objective_name: string,
ad_id: numeric string,
adgroup_id: numeric string,
adgroup_name: string,
campaign_id: numeric string,
campaign_name: string,
campaign_group_id: numeric string,
campaign_group_name: string,
account_id: ad account id,
touchpoint_type: string,
touchpoint_ts: timestamp,
auditing_token: string,
exp_id: integer,
publisher_platform: string,
publisher_placement: string,
device_platform: string,
device_model: string,
event_id: string,
event_name: string,
advertiser_direct_amm_metadata:  Map  {
string: string},
claim_storage_type: string,
is_modeled: bool,
}],
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
