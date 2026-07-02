---
title: "Ad Campaign Publisher Delivery Report"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/publisher_delivery_report
---

# Ad Campaign Publisher Delivery Report

Updated: Apr 7, 2025

## Reading

Publisher delivery report for a specified ad set.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-set-id}/publisher_delivery_report HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fpublisher_delivery_report&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `end_date` *datetime* | The end date for the delivery report |
| `name_contains` *string* | What substring the name of publishers returned should contain |
| `platform` *enum {AUDIENCE\_NETWORK, FACEBOOK, INSTAGRAM, MESSENGER, WHATSAPP, WHATSAPP\_STATUS, OCULUS, THREADS, UNKNOWN, HIDDEN\_AAA}* | The platform type of the publisher delivery report requested  required |
| `position` *enum {ALL\_PLACEMENTS, AN\_CLASSIC, FEED, GROUPS, FACEBOOK\_GROUPS\_FEED, INSTAGRAM\_STORIES, MESSENGER\_INBOX, RIGHT\_HAND\_COLUMN, OTHERS, SEARCH, INSTANT\_ARTICLE, INSTREAM\_VIDEO, REWARDED\_VIDEO, SUGGESTED\_VIDEO, MARKETPLACE, FACEBOOK\_STORIES, MESSENGER\_STORIES, STATUS, INSTAGRAM\_EXPLORE, UNKNOWN, VIDEO\_FEEDS, INSTAGRAM\_IGTV, HIDDEN\_AAA, JOBS\_BROWSER, OCULUS\_TWILIGHT\_FEED, STICKERS, INSTAGRAM\_REELS, INSTAGRAM\_SHOP, OCULUS\_VR\_APPS, BIZ\_DISCO\_FEED, OCULUS\_REWARDED\_VIDEO, OCULUS\_TWILIGHT\_FEED\_SPOTLIGHT, OCULUS\_TWILIGHT\_SEARCH, OCULUS\_TWILIGHT\_SEARCH\_NULL\_STATE, FACEBOOK\_REELS, OCULUS\_TWILIGHT\_DEVELOPER\_UPDATE, FACEBOOK\_REELS\_OVERLAY, INSTAGRAM\_REELS\_OVERLAY, INSTAGRAM\_EFFECT\_TRAY, INSTAGRAM\_EXPLORE\_GRID\_HOME, INSTAGRAM\_PROFILE\_FEED, INSTAGRAM\_PROFILE\_REELS, FACEBOOK\_PROFILE\_FEED, INSTAGRAM\_SEARCH, ADS\_ON\_FACEBOOK\_REELS, INSTAGRAM\_LEAD\_GEN\_MULTI\_SUBMIT, WHATSAPP\_MARKETING\_MESSAGES, FACEBOOK\_PROFILE\_REELS, THREADS\_FEED, WHATSAPP\_CHANNEL, FACEBOOK\_NOTIFICATION, MESSENGER\_MARKETING\_MESSAGES, FACEBOOK\_MULTI\_ADS, FACEBOOK\_REELS\_BANNER, FACEBOOK\_REELS\_POSTLOOP, FACEBOOK\_INSTREAM\_BANNER, FACEBOOK\_INSTREAM\_VIDEO, INSTAGRAM\_REELS\_INSTREAM}* | The position of the publisher delivery report requested  required |
| `publisher_status` *enum {ALL, PARTNER, NON\_PARTNER}* | **Default value:** `"ALL"`  An in-stream publisher status to filter |
| `sort_by` *enum {URL\_ASCENDING, URL\_DESCENDING, NAME\_ASCENDING, NAME\_DESCENDING, IMPRESSIONS\_ASCENDING, IMPRESSIONS\_DESCENDING}* | **Default value:** `"IMPRESSIONS_DESCENDING"`  Which category and direction the report is sorted by |
| `start_date` *datetime* | The start date for the delivery report |
| `summary` *boolean* | **Default value:** `true`  summary |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

##### data

A list of [PublisherDeliveryReport](https://developers.facebook.com/docs/marketing-api/reference/publisher-delivery-report) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `end_date` *string* | The end date for the delivery report    default |
| `non_partner_count` *unsigned int32* | Number of rows of non in-stream partner returned    default |
| `start_date` *string* | The start date for the delivery report    default |
| `total_count` *unsigned int32* | Total number of rows in the report    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
