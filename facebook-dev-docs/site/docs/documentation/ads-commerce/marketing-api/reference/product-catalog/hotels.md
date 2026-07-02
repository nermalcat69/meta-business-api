---
title: "Product Catalog Hotel Rooms Batch"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotels
---

# Product Catalog Hotel Rooms Batch

Updated: Jun 28, 2019

## Reading

hotel\_rooms\_batch

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/hotel_rooms_batch HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fhotel_rooms_batch&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `handle` *string* | A unique handle of a batch request.  required |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of ProductCatalogHotelRoomsBatch nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

### /{product\_catalog\_id}/hotel\_rooms\_batch

You can make a POST request to *hotel\_rooms\_batch* edge from the following paths:

* [/{product\_catalog\_id}/hotel\_rooms\_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotel_rooms_batch)

When posting to this edge, a [ProductCatalogHotelRoomsBatch](https://developers.facebook.com/docs/graph-api/reference/product-catalog-hotel-rooms-batch) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `file` *file* | Content of the file to be uploaded |
| `password` *string* | If used url then the password for the file |
| `standard` *enum{google}* | Uploaded file export standard  required |
| `update_only` *boolean* | **Default value:** `false`  If true, rows missing in the file will not be deleted from Facebook database (only new and updated rows are applied) |
| `url` *URL* | The url of the file to be downloaded by our system |
| `username` *string* | If used url then the username for the file |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
handles:  List  [string],
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
