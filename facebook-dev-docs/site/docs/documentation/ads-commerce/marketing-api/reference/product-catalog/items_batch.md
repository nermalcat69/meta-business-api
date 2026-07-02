---
title: "Product Catalog Hotels"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch
---

# Product Catalog Hotels

Updated: Aug 27, 2024

Hotels in a catalog used in Dynamic Ads for Travel. See [Dynamic Ads for Travel, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads).

**When you use this, you can provide [Batch Requests](https://developers.facebook.com/documentation/ads-commerce/marketing-api/asyncrequests) to combine a number of API calls into one HTTP request.**

For example, to get the total number of hotels in a catalog:

```
curl -G \
-d "summary=total_count" \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/hotels
```

To fetch hotels whose name contains "suites":

```
curl -G \
-d 'fields=["hotel_id","name"]' \
-d 'filter={"name":{"i_contains":"suites"}​}' \
-d 'access_token=<ACCESS_TOKEN>'
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/hotels
```

## Reading

Endpoint that returns the hotels from a catalog

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/hotels HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fhotels&version=v25.0)

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

A list of [Hotel](https://developers.facebook.com/docs/marketing-api/reference/hotel) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of hotels returned by the query |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

### Example

Example to create a hotel:

```
curl \
-X POST \
-F "hotel_id=h_157" \
-F "name=Sample Hotel" \
-F "images= [ \
  {'image_url':'http://www.example.com/pic1.jpg', 'tags':['front view']}, \
  {'image_url':'http://www.example.com/pic2.jpg', 'tags':['lobby view']} \
]" \
-F "url=http://www.example.com/samplehotel" \
-F "address={ \
  street_address:'1 Hacker Way', \
  city:'Menlo Park', \
  region:'California', \
  country:'United States', \
  postal_code:'94025', \
  neighborhoods:['Palo Alto','Menlo Park'], \
  latitude:37.484116, \
  longitude:-122.148244 \
}" \
-F "brand=hotel brand" \
-F "description=hotel description" \
-F "guest_ratings= [ \
  {'score':7.8, 'rating_system':'sample_rating', 'number_of_raters':780} \
]" \
-F "star_rating=4" \
-F "loyalty_program=Sample rewards club" \
-F "phone=+351234123456" \
-F "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/hotels
```

### /{product\_catalog\_id}/hotels

You can make a POST request to *hotels* edge from the following paths:

* [/{product\_catalog\_id}/hotels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotels)

When posting to this edge, a [Hotel](https://developers.facebook.com/docs/marketing-api/reference/hotel) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `address` *Object* | The address of the hotel  required  ---   `city` *string* required  `city_id` *string*  `country` *string* required  `latitude` *float* required  `longitude` *float* required  `neighborhoods` *list<string>*  `postal_code` *string*  `region` *string* required  `street_address` *string* required  Show child parameters |
| `applinks` *Object* | App links for native platforms, e.g. Android, IOS and Windows Phone.  ---   `web`  `android`  `ios`  `ipad`  `iphone`  `windows_phone`  Show child parameters |
| `base_price` *int64* | The base price of the hotel |
| `brand` *string* | Hotel brand |
| `currency` *ISO 4217 Currency Code* | **Default value:** `USD`  The currency for base\_price, e.g. USD |
| `description` *string* | Description of the hotel  required |
| `guest_ratings` *list<Object>* | Guest ratings for this hotel.  ---   `score` *float* required  `max_score` *int64* required  `rating_system` *string* required  `number_of_raters` *int64* required  Show child parameters |
| `hotel_id` *string* | A unique identifier for this hotel provided by advertiser. (i.e. from the `id` field in the feed |
| `images` *list<Object>* | Links to hotel images. Please note that carousel format utilizes a square 1:1 aspect ratio images (recommended size - 600x600px) while single hotel ad uses 1.91:1 aspect ratio image(recommended size - 1200x630px). Please provide at least one image.  required  ---   `image_url` *URL* required  `tags` *list<string>*  Show child parameters |
| `name` *string* | Name of the hotel  required |
| `phone` *phone number string* | Hotel's phone number |
| `star_rating` *float* | The star rating of the hotel |
| `url` *URL* | Link to the external site where you can book a hotel room  required |

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

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
