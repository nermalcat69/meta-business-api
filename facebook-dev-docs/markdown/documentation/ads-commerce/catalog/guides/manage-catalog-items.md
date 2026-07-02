---
title: "Catalog Item Types"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items
---

# Catalog Item Types

Updated: Jun 26, 2026

There are multiple types of catalog items that correspond to different types of objects that can be advertised and/or sold on Meta technologies. Depending on the value of a catalog's [vertical field](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog#fields), there are some restrictions as to which item types can or cannot be created.

For example, you cannot add an item of type `HOTEL` to a catalog with vertical=`commerce`. The table below summarizes the possible options.

| Item Type | Catalog Vertical | Relevant API Endpoints |
| --- | --- | --- |
| DESTINATION | destinations | [destination](https://developers.facebook.com/docs/graph-api/reference/destination)  [catalog/destinations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/destinations)  [product-set/destinations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set/destinations) |
| FLIGHT | flights | [flight](https://developers.facebook.com/docs/graph-api/reference/flight)  [catalog/flights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/flights)  [product-set/flights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set/flights) |
| HOME\_LISTING | `home_listings` | [home listing](https://developers.facebook.com/docs/graph-api/reference/home-listing)  [catalog/home\_listings](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/home_listings)  [product-set/home\_listings](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set/home_listings) |
| HOTEL | hotels | [hotel](https://developers.facebook.com/docs/graph-api/reference/hotel)  [catalog/hotels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotels)  [product-set/hotels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set/hotels) |
| HOTEL\_ROOM | hotels | [hotel room](https://developers.facebook.com/docs/graph-api/reference/hotel-room)  [hotel/hotel\_rooms](https://developers.facebook.com/docs/marketing-api/reference/hotel/hotel_rooms) |
| PRODUCT\_ITEM | commerce | [product item](https://developers.facebook.com/docs/marketing-api/reference/product-item)  [catalog/products](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/products)  [product-set/products](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set/products)  [product\_group/products](https://developers.facebook.com/docs/marketing-api/reference/product-group/products) |
| STORE\_PRODUCT\_ITEM | commerce |  |
| VEHICLE | vehicles | [vehicle](https://developers.facebook.com/docs/marketing-api/reference/vehicle)  [catalog/vehicles](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicles)  [product-set/vehicles](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set/vehicles) |
| VEHICLE\_OFFER | `vehicle_offers` | [catalog/vehicle\_offers](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicle_offers)  [product-set/vehicle\_offers](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set/vehicle_offers) |
