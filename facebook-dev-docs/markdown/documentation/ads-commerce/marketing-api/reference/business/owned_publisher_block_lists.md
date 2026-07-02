---
title: "Business Owned Product Catalogs"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_publisher_block_lists
---

# Business Owned Product Catalogs

Updated: Feb 17, 2025

## Reading

Product catalogs owned by this business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/owned_product_catalogs HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_product_catalogs&version=v25.0)

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

A list of [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 80009 | There have been too many calls to this Catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

## Creating

### /{business\_id}/owned\_product\_catalogs

You can make a POST request to *owned\_product\_catalogs* edge from the following paths:

* [/{business\_id}/owned\_product\_catalogs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_product_catalogs)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `additional_vertical_option` *enum {LOCAL\_DA\_CATALOG, LOCAL\_PRODUCTS}* | Additional catalog configurations that does not introduce either new verticals or subverticals |
| `business_metadata` *JSON object* | business\_metadata  ---   `page_id` *numeric string* page\_id  required  `external_business_id` *string* external\_business\_id  Show child parameters |
| `catalog_segment_filter` *A JSON-encoded rule* | Provide filter for catalog to create a catalog segment. |
| `da_display_settings` *Object* | Dynamic Ads display settings.  ---   `carousel_ad` *Object* required  ---   `transformation_type` *enum{background\_cropping\_and\_padding, background\_padding, none}* required  Show child parameters  `single_ad` *Object* required  ---   `transformation_type` *enum{background\_cropping\_and\_padding, background\_padding, none}* required  Show child parameters  Show child parameters |
| `destination_catalog_settings` *JSON object* | Destination catalog settings.  ---   `generate_items_from_pages` *boolean* **Default value:** `false`  Show child parameters |
| `flight_catalog_settings` *JSON object* | Flight catalog settings.  ---   `generate_items_from_events` *boolean* **Default value:** `false`  Show child parameters |
| `name` *UTF-8 encoded string* | Name of the catalog.  required |
| `parent_catalog_id` *numeric string or integer* | Parent catalog ID. |
| `partner_integration` *JSON object* | Partner integration settings  ---   `external_access_token` *string* External access token  `external_merchant_id` *string* External merchant identifier  Show child parameters |
| `store_catalog_settings` *JSON object* | Store catalog settings.  ---   `page_id` *numeric string* page\_id  required  Show child parameters |
| `vertical` *enum {adoptable\_pets, apps\_and\_software, articles\_and\_publications, commerce, destinations, flights, generic, home\_listings, hotels, local\_service\_businesses, media\_titles, offer\_items, services, offline\_commerce, transactable\_items, vehicles}* | **Default value:** `commerce`  The catalog's industry or vertical, such as `commerce`. |

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
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 804 | Specified object already exists |
| 102 | Session key invalid or no longer valid |
| 200 | Permissions error |
| 2310019 | The business of this catalog is not onboarded to Collaborative Ads |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
