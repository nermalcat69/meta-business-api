---
title: "Business Managed Partner Ads Funding Source Details"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_partner_businesses
---

# Business Managed Partner Ads Funding Source Details

Updated: Apr 10, 2025

## Reading

BusinessManagedPartnerAdsFundingSourceDetails

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/managed_partner_ads_funding_source_details HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fmanaged_partner_ads_funding_source_details&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `year_quarter` *string* | year\_quarter |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of FundingSourceDetailsCoupon nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
