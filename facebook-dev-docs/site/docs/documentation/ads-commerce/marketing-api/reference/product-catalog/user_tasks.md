---
title: "Product Catalog Vehicle Offers"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/user_tasks
---

# Product Catalog Vehicle Offers

Updated: Aug 27, 2024

## Reading

ProductCatalogVehicleOffers.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/vehicle_offers HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fvehicle_offers&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination` *boolean* | bulk\_pagination |
| `filter` *A JSON-encoded rule* | filter |

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

A list of VehicleOffer nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | total\_count |

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
