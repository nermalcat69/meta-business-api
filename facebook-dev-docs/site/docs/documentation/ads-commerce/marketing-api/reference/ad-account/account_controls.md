---
title: "Ad Account Aaa Compatible Ad Objects"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/account_controls
---

# Ad Account Aaa Compatible Ad Objects

Updated: Sep 16, 2022

## Reading

AdAccountAAACompatibleAdObjects

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-account-id}/aaa_compatible_ad_objects HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Faaa_compatible_ad_objects&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `adgroup_ids` *array<numeric string>* | Array of ID of adgroups that need the A+A eligibility check to duplicated to Advantage+ App Ads |
| `campaign_group_ids` *array<numeric string>* | Array of ID of campaign groups that need the A+A eligibility check to duplicated to Advantage+ App Ads |
| `campaign_ids` *array<numeric string>* | Array of ID of campaigns that need the A+A eligibility check to duplicated to Advantage+ App Ads |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdAccountAAACompatibleAdObjects nodes.

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
