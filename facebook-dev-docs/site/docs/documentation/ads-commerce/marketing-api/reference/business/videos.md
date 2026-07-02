---
title: "Business Third Party Partner Viewability Requests"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/videos
---

# Business Third Party Partner Viewability Requests

Updated: May 8, 2025

## Reading

Retrieve all existing Viewability reports related to a business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/third_party_partner_viewability_requests HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fthird_party_partner_viewability_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `end_ds` *string* | Required filter for daily request. The ending datestamp for a time range of reports. Return reports where start\_ds <= ds <= end\_ds. |
| `end_ts` *datetime/timestamp* | Required filter for hourly request. The ending unix timestamp for a time range of reports. Return reports where start\_ts <= hour <= end\_ts.   ---   Example:   * end\_ts = 1706774400 |
| `platform` *enum {AUDIENCE\_NETWORK, FACEBOOK, INSTAGRAM}* | Optional filter on platform of the report.   ---   From the set {AUDIENCE\_NETWORK, FACEBOOK, INSTAGRAM, INVALID}.   ---   Valid input example:   * platform=FACEBOOK   Invalid input example:   * platform='FACEBOOK' * platform=['FACEBOOK'. 'INSTAGRAM'] |
| `start_ds` *string* | Required filter for daily request. The starting datestamp for a time range of reports. Return reports where start\_ds <= ds <= end\_ds. |
| `start_ts` *datetime/timestamp* | Required filter for hourly request. The staring unix timestamp for a time range of reports. Return reports where start\_ts <= hour <= end\_ts.  Example:   * start\_ts = 1704096000 |
| `type` *enum {DISPLAY\_EVENT, IMPRESSION, VIDEO\_EVENT}* | Optional filter on metrics type of the report.   ---   From the set {DISPLAY\_EVENT, IMPRESSION, INVALID, VIDEO\_EVENT}.   ---   Valid input example:   * type=DISPLAY\_EVENT   Invalid input example:   * type='DISPLAY\_EVENT' * type=['DISPLAY\_EVENT'. 'FULL\_VIEW'] |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [ThirdPartyPartnerViewabilityRequest](https://developers.facebook.com/docs/graph-api/reference/third-party-partner-viewability-request) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 2500 | Error parsing graph query |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
