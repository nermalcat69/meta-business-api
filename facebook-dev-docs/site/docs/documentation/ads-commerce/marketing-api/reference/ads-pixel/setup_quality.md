---
title: "Ads Pixel Setup Quality"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/setup_quality
---

# Ads Pixel Setup Quality

Updated: Aug 25, 2021

## Reading

Setup Quality exposes feedback on the given Pixel's Conversions API setup based on computed aggregated metrics, which is calculated based on previous events sent by the calling Partner.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/setup_quality HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fsetup_quality&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `agent_name` *string* | The platform identifier used for when sending events on behalf of a client. See /documentation/ads-commerce/conversions-api/set-up-conversions-api-as-a-platform#attribute-events-to-your-platform-using-partner-agent for details. |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsPixelCAPIIntegrationQuality nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
