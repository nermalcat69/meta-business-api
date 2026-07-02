---
title: "Ad Account Account Controls"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/active_adrules
---

# Ad Account Account Controls

Updated: Apr 24, 2024

## Reading

Get default fields on an [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) node associated with this [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account). Refer to the [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) reference for a list of these fields and their descriptions.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-account-id}/account_controls HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Faccount_controls&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

### /act\_{ad\_account\_id}/account\_controls

You can make a POST request to *account\_controls* edge from the following paths:

* [/act\_{ad\_account\_id}/account\_controls](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/account_controls)

When posting to this edge, an [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `audience_controls` *JSON or object-like arrays* | audience\_controls  required  ---   `age_min` *int64*  `geo_locations` *JSON or object-like arrays*  `excluded_geo_locations` *JSON or object-like arrays*  `exclusions` *JSON or object-like arrays*  Show child parameters |
| `placement_controls` *JSON or object-like arrays* | This field contains another field called placement\_exclusion that provides information on which placements need to be excluded while targeting. All the other placements will be included. Each placement is denoted by a string that concatenates the publisher platform of the placement and a position inside the publisher platform, separated by an underscore. What is provided as parameter is a list of placements. For e.g. If we want to exclude the rewarded videos position from the audience network publisher platform, we provide the field as follows: { "placement\_controls": { "placement\_exclusions": ["audience\_network\_rewarded\_video"] } } Only a few placements are allowed to be excluded: audience\_network\_classic (native, banner & interstitial positions of audience network) audience\_network\_rewarded\_video (rewarded videos of audience network) audience\_network\_instream\_video (instream videos of audience network) facebook\_marketplace (marketplace section inside facebook) facebook\_rhc (right hand column inside facebook)  ---   `placement_exclusions` *array<enum {AUDIENCE\_NETWORK\_CLASSIC, AUDIENCE\_NETWORK\_REWARDED\_VIDEO, AUDIENCE\_NETWORK\_INSTREAM\_VIDEO, FACEBOOK\_MARKETPLACE, FACEBOOK\_RIGHT\_HAND\_COLUMN}>*  `campaign_ids_to_set_ap` *array<numeric string>*  Show child parameters |

#### Return Type

```
Struct  {
id: string,
success: bool,
error_code: string,
error_message: string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2641 | Your ad includes or excludes locations that are currently restricted |
| 200 | Permissions error |

---

## Updating

Use the [`POST /act_<AD_ACCOUNT_ID>/account_controls`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/active_adrules#Creating) endpoint to update the [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) associated with this [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account).

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
