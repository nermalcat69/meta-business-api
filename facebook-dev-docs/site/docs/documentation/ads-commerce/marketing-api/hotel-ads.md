---
title: "Travel Ads - Audience Management"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads
---

# Travel Ads - Audience Management

Updated: Jun 24, 2026

This guide assumes you have a catalog with your travel inventory ready, and have set up the required travel events on your website and/or in your mobile app, and have associated your catalog with your event sources.

**As of September 20, 2018, Meta will not support `subtype` after v3.0 of Marketing API for custom audiences for websites, apps, engagement custom audiences, and audiences from offline conversion data.** The one exception is that `subtype` will still be supported for engagement custom audiences for video.

Create a travel audience in two steps:

* [Step 1: Create a Travel Event Source Group](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#create-esg)
* [Step 2: Create Travel Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#create-audience)

## Step 1: Create and share a travel event source group

Besides associating your event sources with your catalog, you must also create an event source group. Event source groups are used to fill audiences.

```
curl \
  -F 'name=My Travel Company Events' \
  -F 'event_sources=["<PIXEL_ID>","<APP_ID>"]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<BUSINESS_ID>/event_source_groups
```

You must then share this event source group out to any ad accounts that wish to create an audience backed by it. To share the event source group, make an `HTTP POST` call:

```
curl \
  -F 'accounts=["<ACCOUNT_ID_WITHOUT_ACT>"]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<EVENT_SOURCE_GROUP_ID>/shared_accounts
```

## Step 2: Create travel audiences

At this point you should have your user signal (for example, pixel, or app events) set up and associated with an [event source group](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#create-esg) and your travel catalog(s).

To target people who have shown explicit travel intent, you must create a dynamic travel audience of people who you would like to serve the ad to. You can include and exclude people based on their travel intent signals. You can also apply additional rule-based filters on top of the events like with Website Custom Audiences. The `flight_set_id` field is required for a dynamic flight audience. For hotel and destination audiences, you are not required to specify a `hotel_set_id` or `destination_set_id`.

To set up a new travel audience, make an `HTTP POST` to `/act_<AD_ACCOUNT_ID>/customaudiences`.

### Audience parameters

| Field and Type | Description |
| --- | --- |
| `claim_objective`  Type: `enum {TRAVEL}` | **Required**.  The objective of the audience.  Must be set to `TRAVEL`. |
| `content_type`  Type: `enum {HOTEL, FLIGHT, DESTINATION}` | **Required**.  Specify the type of signal that should be used to build this audience.  Must be set to `HOTEL`, `FLIGHT` or `DESTINATION`. |
| `event_sources`  Type: `json string` | An array of `id` and `type` pairs. The `id` field takes a single event source id, and the `type` field is either a pixel, app, or `offline_events`. For example:  ``` "event_sources": [  {  "type": "pixel",  "id": "562030684179932"  },  {  "type": "app",  "id": "562030684179934"  } ] ```  Required if you do not provide `event_source_group`. If you do provide, do not also provide `event_source_group`. |
| `event_source_group`  Type: `id` | Specify the event source group whose events will back the audience. Required if you don't provide `event_sources`. |
| `inclusions`  Type: `object[]` | **Required**.  An array of JSON objects listing each intent signal that would make an Accounts Center account eligible for this audience. See [**Inclusion Object Parameters**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#inclusion-object) table below. |
| `description`  Type: `string` | A further description of the audience. |
| `exclusions`  Type: `object[]` | An array of JSON objects listing each intent signal that would exclude an eligible Accounts Center account from this audience. See [**Exclusion Object Parameters**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#exclusion-object) table below. |
| `rule`  Type: `object` | A classical [audience rule](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences#audiencerules) to be applied to the event stream before any `inclusions` and `exclusions` are processed. Use any of the classical parameters, and see [**Rule Object Travel Parameters**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#rule-object) table below for travel ads-specific parameters. |

#### Inclusion object parameters

| Field Name and Type | Description |
| --- | --- |
| `event`  Type: `enum {Search, ViewContent, InitiateCheckout, Purchase}` | **Required**.  The event name of a signal you want to consider for inclusion.  Example: `{"event": "Search", …}` |
| `retention`  Type: `object` | **Required**.  The minimum/maximum amount of time since the event was received for it to be considered for purposes of inclusion. The retention window must be at least 4 hours.  See [**Retention Object Parameters**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#retention-object) table below.  Example: `{…, "retention": {"min_seconds": 0, "max_seconds": 259200}, …}` |
| `booking_window`  Type: `object` | Booking window is the time in seconds between the user's check-in date and the current time. You specify a range and only people whose booking window is within this range are included. Negative booking windows are also supported, allowing you to include people whose check-in date has passed.  See [**Booking Window Object Parameters**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#booking_window-object) table below.  Examples:   * `{"booking_window": {"min_seconds": 0, "max_seconds": 259200}​}` * `{"booking_window": {"max_seconds": 0}​}` |
| `count`  Type: `JSON` operators | The number of times that the event has been fired. You can use both equality and numeric comparison operators here.  Examples: `{…"count": {"lte": 3}, …}` |

#### Retention object parameters

| Field Name and Type | Description |
| --- | --- |
| `max_seconds`  Type: `int` | **Required**.  The maximum amount of time (in seconds) since the event was received.  Example: `259200` |
| `min_seconds`  Type: `int` | The minimum amount of time (in seconds) since the event was received.  Example: `0` |

#### Booking window object parameters

| Field Name and Type | Description |
| --- | --- |
| `min_seconds`  Type: `int` | **Required**.  The minimum amount of time (in seconds) between current date and the desired check-in date of the user.  Example: `172800` |
| `max_seconds`  Type: `int` | **Required**.  The maximum amount of time (in seconds) between current date and the desired check-in date.  Example: `604800` |

#### Exclusion object parameters

| Field Name and Type | Description |
| --- | --- |
| `event`  Type: `enum { Search, ViewContent, InitiateCheckout, Purchase }` | **Required**.  The event name of a signal you want to consider for exclusion.  Example: `{"event": "Search", …}` |
| `retention`  Type: `object` | **Required**.  The minimum/maximum amount of time since the event was received for it to be considered for purposes of exclusion. The retention window must be at least 4 hours.  See [**Retention Object Parameters**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads#retention-object) table below.  Example: `{…, "retention": {"min_seconds": 0, "max_seconds": 259200}, …}` |

#### Rule object travel parameters

Just as with the classical parameter, each parameter here can be used with any of the standard `JSON`[operators](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences#audiencerules).

| Field Name and Type | Description |
| --- | --- |
| `hotel_set_id`  Type: `int` | Matches only those events when at least one `content_id` exists in the specified `hotel_set_id`.  Only for travel audiences with `content_type` set to `HOTEL`.  Example: `{…, "hotel_set_id": {"eq": 123456789}, …}` |
| `destination_set_id`  Type: `int` | Matches only those events when at least one `content_id` exists in the specified `destination_set_id`.  Only for travel audiences with `content_type` set to `DESTINATION`.  Example: `{…, "destination_set_id": {"eq": 123456789}, …}` |
| `flight_set_id`  Type: `int` | Required for flight ads.  Matches only those events when the route (`origin_airport` to `destination_airport`) exists in the specified `flight_set_id`.  Only for travel audiences with `content_type` set to `FLIGHT`.  Example: `{…, "flight_set_id": {"eq": 123456789}, …}` |
| `length_of_stay`  Type: `int` | Number of nights spent during the trip.  Example: `{… "length_of_stay": {"eq": 1}, …}` |
| `number_of_weekends`  Type: `int` | Number of weekends between the start and end date.  Example: `{…, "number_of_weekends": {"gte": 5}, …}` |
| `num_travelers`  Type: `int` | Total number of travelers.   * For a `content_type` of `HOTEL` or `DESTINATION` this is `num_adults` + `num_children` * For a `content_type` of `FLIGHT`, this also includes `num_infants`   Example: `{…, "num_travelers": {"gt": 1}, …}` |
| Date fields:  [Hotel ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/events#parameter-details)   * `checkin_date` * `checkout_date`   [Flight ads](https://developers.facebook.com/docs/marketing-api/dynamic-ads-for-flights/events#parameter-details)   * `departing_departure_date` * `departing_arrival_date` * `returning_departure_date` * `returning_arrival_date`   [Destination ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/destination-ads/events#parameter-details)   * `travel_start` * `travel_end`   Type: `string` | Use relevant date fields based on `content_type`.  Example: `{"checkin_date": {"gte": "2016-09-01"}​}` |
| `itinerary_contains_date`  Type: `string` | Trip contains a specific date.  Example: `{"itinerary_contains_date": {"eq": "2016-12-25"}​}` |

### Code samples

Single travelers who have searched at least 3 times in the last 5 days but haven't booked yet:

```
curl \
  -F 'name=Travel Audience' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=TRAVEL' \
  -F 'content_type=HOTEL' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'rule={"num_travelers":{"eq":1}​}' \
  -F 'inclusions=[
    {
      "event": "Search",
      "count": {"gt":3},
      "retention": {"min_seconds":0,"max_seconds":432000}
    }
  ]' \
  -F 'exclusions=[{"event":"Purchase","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

People who viewed or started booking a hotel in a hotel set in the last 2 days but never completed their booking:

```
curl \
  -F 'name=Travel Audience' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=TRAVEL' \
  -F 'content_type=HOTEL' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'rule={"hotel_set_id":{"eq":"<HOTEL_SET_ID>"}​}' \
  -F 'inclusions=[
    {"event":"ViewContent","retention":{"min_seconds":0,"max_seconds":172800}​},
    {
      "event": "InitiateCheckout",
      "retention": {"min_seconds":0,"max_seconds":172800}
    }
  ]' \
  -F 'exclusions=[{"event":"Purchase","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

People who have initiated checkout or purchased the flight tickets in the last 5 days and their flight booking window is between 2 to 7 days:

```
curl \
  -F 'name=Travel Audience' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=TRAVEL' \
  -F 'content_type=FLIGHT' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'inclusions=[
    {
      "event": "InitiateCheckout",
      "retention": {"min_seconds":0,"max_seconds":432000},
      "booking_window": {"min_seconds":172800,"max_seconds":604800}
    },
    {
      "event": "Purchase",
      "retention": {"min_seconds":0,"max_seconds":432000},
      "booking_window": {"min_seconds":172800,"max_seconds":604800}
    }
  ]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

People who have searched hotels in 'New York City' more than 3 times in the past 2 days but haven't booked yet:

```
curl \
  -F 'name=Travel Audience' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=TRAVEL' \
  -F 'content_type=HOTEL' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'rule={"destination":{"i_contains":"New York City"}​}' \
  -F 'inclusions=[
    {
      "event": "Search",
      "count": {"gt":3},
      "retention": {"min_seconds":0,"max_seconds":172800}
    }
  ]' \
  -F 'exclusions=[{"event":"Purchase","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

People who have searched hotels between specific `checkin_date` and `checkout_date` in the past 2 days but haven't booked yet:

```
curl \
  -F 'name=Travel Audience' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=TRAVEL' \
  -F 'content_type=HOTEL' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'rule={
    "and": [
      {"checkin_date":{"gte":"2018-02-02"}​},
      {"checkout_date":{"lte":"2018-02-05"}​}
    ]
  }' \
  -F 'inclusions=[{"event":"Search","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'exclusions=[{"event":"Purchase","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

People who have searched hotel stays containing a specific date (such as Christmas) in the past 2 days but haven't booked yet:

```
curl \
  -F 'name=Travel Audience' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=TRAVEL' \
  -F 'content_type=HOTEL' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'rule={"itinerary_contains_date":{"eq":"2018-12-25"}​}' \
  -F 'inclusions=[{"event":"Search","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'exclusions=[{"event":"Purchase","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

People who create an audience for one-way flights:

```
curl \
  -F 'name=Travel Audience' \
  -F 'claim_objective=TRAVEL' \
  -F 'content_type=FLIGHT' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'rule={"and":[{"returning_departure_date":{"exists":false]}​}' \
  -F 'inclusions=[
    {
      "event": "Search",
      "count": {"gt":3},
      "retention": {"min_seconds":0,"max_seconds":432000}
    }
  ]' \
  -F 'exclusions=[{"event":"Purchase","retention":{"min_seconds":0,"max_seconds":172800}​}]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

Once you have created your audience(s), they can then be added to the targeting spec in your **travel ads** campaign.
