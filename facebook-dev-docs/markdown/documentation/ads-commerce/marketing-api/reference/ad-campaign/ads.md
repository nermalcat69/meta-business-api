---
title: "Ad Campaign Ads"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/ads
---

# Ad Campaign Ads

Updated: Jul 13, 2020

## Reading

The ads under this ad set.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
GET /v25.0/<AD_SET_ID>/ads?fields=name%2Cid HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CAD_SET_ID%3E%2Fads%3Ffields%3Dname%252Cid&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset` *enum{today, yesterday, this\_month, last\_month, this\_quarter, maximum, data\_maximum, last\_3d, last\_7d, last\_14d, last\_28d, last\_30d, last\_90d, last\_week\_mon\_sun, last\_week\_sun\_sat, last\_quarter, last\_year, this\_week\_mon\_today, this\_week\_sun\_today, this\_year}* | Date ranges container for benchmarking comparison |
| `effective_status` *list<string>* | Filter ads by effective status. When unset, defaults to not return deleted or archived ads. |
| `time_range` *{‘since’:YYYY-MM-DD,’until’:YYYY-MM-DD}* | Date range used to aggregate insights metrics  ---   `since` *datetime* A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.  `until` *datetime* A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.  Show child parameters |
| `updated_since` *integer* | filter by updated time |

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

A list of [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `insights` *Edge<AdsInsights>* | Analytics summary for all objects |
| `total_count` *unsigned int32* | Total number of objects    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 2500 | Error parsing graph query |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
