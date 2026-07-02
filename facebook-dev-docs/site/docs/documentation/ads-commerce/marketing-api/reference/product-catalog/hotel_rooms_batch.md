---
title: "Product Catalog Home Listings"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotel_rooms_batch
---

# Product Catalog Home Listings

Updated: Mar 19, 2025

## Reading

Endpoint that return the home listings that were added to the catalog

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/home_listings HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fhome_listings&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination` *boolean* | Used for iterating over the edge in large chunks |
| `filter` *A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge |

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

A list of [HomeListing](https://developers.facebook.com/docs/marketing-api/reference/home-listing) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of home listings returned by the query |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

### /{product\_catalog\_id}/home\_listings

You can make a POST request to *home\_listings* edge from the following paths:

* [/{product\_catalog\_id}/home\_listings](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/home_listings)

When posting to this edge, a [HomeListing](https://developers.facebook.com/docs/marketing-api/reference/home-listing) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `address` *Object* | The address of the home listing  required  ---   `city` *string* required  `country` *string* required  `latitude` *float* required  `longitude` *float* required  `neighborhoods` *list<string>*  `postal_code` *string*  `region` *string* required  `street_address` *string* required  Show child parameters |
| `availability` *string* | The availability of the home listing  required |
| `currency` *ISO 4217 Currency Code* | Currency for the listing  required |
| `description` *string* | Description of the home listing |
| `home_listing_id` *string* | ID of the home listing  required |
| `images` *list<Object>* | Links to home listing images. Please note that carousel format utilizes a square 1:1 aspect ratio images (recommended size - 600x600px) while single hotel ad uses 1.91:1 aspect ratio image(recommended size - 1200x630px). Please provide at least one image.  required  ---   `image_url` *URL* required  `tags` *list<string>*  Show child parameters |
| `listing_type` *string* | Listing type of the property |
| `name` *string* | Name of the home listing  required |
| `num_baths` *float* | Number of baths for the home listing |
| `num_beds` *float* | Number of beds for the home listing |
| `num_units` *float* | Number of units for the home listing |
| `price` *float* | The price for this home listing  required |
| `property_type` *string* | Property type of the home listing |
| `url` *URL* | Link to the external site where you can view the listing  required |
| `year_built` *int64* | Year built  required |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 10800 | Duplicate retailer\_id when attempting to create a store collection |
| 100 | Invalid parameter |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
