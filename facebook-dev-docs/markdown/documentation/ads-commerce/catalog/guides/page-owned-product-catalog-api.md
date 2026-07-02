---
title: "Product Ratings and Reviews API"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/guides/page-owned-product-catalog-api
---

# Product Ratings and Reviews API

Updated: Apr 3, 2026

Using this API, you can provide customer reviews of the products in your [product catalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) to enable merchandising your products on Facebook and Instagram. If your products are displayed on Meta technologies, the uploaded customer reviews will be displayed together, helping you to build trust with customers.

## Step 1: Create a Product Ratings and Reviews Feed

To create a new ratings and reviews feed, make a `POST` request to the [/{product\_catalog\_id}/product\_feeds](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed#Creating) edge and set `feed_type` to `PRODUCT_RATINGS_AND_REVIEWS`. When posting to this edge, a product feed of type `PRODUCT_RATINGS_AND_REVIEWS` is created for the catalog specified in the `product_catalog_id` field.

### Request

```
curl -X POST \
  -F 'name="NAME_OF_THE_FEED"' \
  -F 'feed_type="product_ratings_and_reviews"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{PRODUCT_CATALOG_ID}/product_feed
```

### Response:

```
```
{  
    "id": "{PRODUCT_FEED_ID}",  
}
```
```

#### Note:

Please remember this `PRODUCT_FEED_ID`, which will be used in the next step.

## Step 2: Upload Reviews Data File to Ratings and Reviews Feed

Once the feed is created, you can upload your product reviews data file using a `POST` request to the [`/{product_feed_id}/uploads`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed/uploads#Creating) edge. The file has to be a CSV file, and the schema is defined [here](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv)

### Request:

**Example** — The review data file is hosted on a public location

```
curl -X POST \
  -F 'url="http://www.example.com/reviews_of_catalog_123.csv"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{PRODUCT_FEED_ID}/uploads
```

**Example** — Uploading review data files directly from the local machine. The path to the file needs to be changed according to your use case.

```
curl -X POST \
  -F 'file=@reviews_of_catalog_123.csv;type=text/csv' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{PRODUCT_FEED_ID}/uploads
```

### Response:

```
```
{  
    "id": "{UPLOAD_SESSION_ID}",  
}
```
```

### Data file

* The data file has to be a CSV format file
* The data file has to follow the schema defined here: [Product Review Feed Schema](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv)
* The file size has to be less than 100 MB.

### Troubleshooting

Please remember the `UPLOAD_SESSION_ID` and provide it to your Meta representative for trouble shooting.
