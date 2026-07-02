---
title: "Business Agencies"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/an_placements
---

# Business Agencies

Updated: Jan 21, 2025

## Reading

List all businesses that have access to your business’s assets.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/agencies HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fagencies&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

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

A list of [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `adaccount_permissions` *list<AdAccountPermission>* | Adaccount\_permissions    default |
| `application_permissions` *list<AppPermission>* | Application\_permissions    default |
| `page_permissions` *list<PagePermission>* | Page\_permissions    default |
| `productcatalog_permissions` *list<ProductCatalogPermission>* | Productcatalog\_permissions    default |
| `shared_ca_count` *int32* | Shared\_ca\_count    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of businesses. |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

### /{business\_id}/agencies

You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business\_id}/agencies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/agencies).

#### Parameters

| Parameter | Description |
| --- | --- |
| `business` *numeric string or integer* | The agency's business.  required |

#### Return Type

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---
