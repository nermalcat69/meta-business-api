---
title: "Product Catalog Vehicles"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicle_offers
---

# Product Catalog Vehicles

Updated: Aug 27, 2024

## Reading

Retrieve vehicles from a product catalog.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/vehicles HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fvehicles&version=v25.0)

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

A list of [Vehicle](https://developers.facebook.com/docs/marketing-api/reference/vehicle) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of vehicles returned by the query |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

### /{product\_catalog\_id}/vehicles

You can make a POST request to *vehicles* edge from the following paths:

* [/{product\_catalog\_id}/vehicles](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicles)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `address` *JSON object* | address  required  ---   `city` *string* **Default value:** `""` city  `city_id` *string* city\_id  `country` *string* **Default value:** `""` country  `latitude` *float* latitude  `longitude` *float* longitude  `neighborhoods` *array<string>* neighborhoods  `postal_code` *string* **Default value:** `""` postal\_code  `region` *string* **Default value:** `""` region  `street_address` *string* **Default value:** `""` street\_address  Show child parameters |
| `applinks` *Object* | applinks  ---   `web`  `android`  `ios`  `ipad`  `iphone`  `windows_phone`  Show child parameters |
| `availability` *enum {AVAILABLE, NOT\_AVAILABLE, PENDING, UNKNOWN}* | availability |
| `body_style` *enum {CONVERTIBLE, COUPE, CROSSOVER, ESTATE, GRANDTOURER, HATCHBACK, MINIBUS, MINIVAN, MPV, PICKUP, ROADSTER, SALOON, SEDAN, SMALL\_CAR, SPORTSCAR, SUPERCAR, SUPERMINI, SUV, TRUCK, VAN, WAGON, OTHER, NONE}* | body\_style  required |
| `condition` *enum {EXCELLENT, VERY\_GOOD, GOOD, FAIR, POOR, OTHER, NONE}* | condition |
| `currency` *ISO 4217 Currency Code* | currency  required |
| `date_first_on_lot` *string* | date\_first\_on\_lot |
| `dealer_id` *string* | dealer\_id |
| `dealer_name` *string* | dealer\_name |
| `dealer_phone` *string* | dealer\_phone |
| `description` *string* | description  required |
| `drivetrain` *enum {TWO\_WD, FOUR\_WD, AWD, FWD, RWD, OTHER, NONE}* | drivetrain |
| `exterior_color` *string* | exterior\_color  required |
| `fb_page_id` *string* | fb\_page\_id |
| `fuel_type` *enum {DIESEL, ELECTRIC, GASOLINE, FLEX, HYBRID, OTHER, PETROL, PLUGIN\_HYBRID, NONE}* | fuel\_type |
| `images` *list<Object>* | images  required  ---   `image_url` *URL* required  `tags` *list<string>*  Show child parameters |
| `interior_color` *string* | interior\_color |
| `make` *string* | make  required |
| `mileage` *JSON object* | mileage  required  ---   `unit` *enum {KILOMETERS, MILES}* **Default value:** `"MILES"` unit  `value` *int64* **Default value:** `0` value  Show child parameters |
| `model` *string* | model  required |
| `price` *int64* | price  required |
| `state_of_vehicle` *enum {NEW, USED, CPO}* | state\_of\_vehicle  required |
| `title` *string* | title  required |
| `transmission` *enum {AUTOMATIC, MANUAL, OTHER, NONE}* | transmission |
| `trim` *string* | trim |
| `url` *URI* | url  required |
| `vehicle_id` *string* | vehicle\_id  required |
| `vehicle_type` *enum {BOAT, CAR\_TRUCK, COMMERCIAL, MOTORCYCLE, OTHER, POWERSPORT, RV\_CAMPER, TRAILER}* | vehicle\_type |
| `vin` *string* | vin  required |
| `year` *int64* | year  required |

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
| 200 | Permissions error |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
