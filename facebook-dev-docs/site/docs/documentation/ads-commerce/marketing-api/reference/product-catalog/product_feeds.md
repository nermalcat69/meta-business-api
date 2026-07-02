---
title: "Product Catalog Pricing Variables Batch"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_feeds
---

# Product Catalog Pricing Variables Batch

Updated: Jun 28, 2019

Batch upload pricing variables for items in a catalog. Used with Dynamic Ads for Travel, see [Dynamic Ads for Travel, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads). To get status of batch process:

```
curl -G \
-d "handle=<HANDLE>" \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/pricing_variables_batch
```

* If you want to update a specific pricing variable, please make sure you provide a complete set of information in `<Result>`.
* If you want to delete a specific pricing variable, specify the combination **without** providing any price-related info such as `<Baserate>`, `<Tax>`, `<OtherFees>`.

To delete one of the pricing variables for `hotel_1`, with check in 2016-05-01 for 1 night:

In `pricings_data_xml.xml`, provide:

```
<?xml version="1.0" encoding="UTF-8"?>
<Transaction>
  <Result>
    <Property>hotel_1</Property>
    <Checkin>2016-05-01</Checkin>
    <Nights>1</Nights>
  </Result>
</Transaction>
```

then make a HTTP POST to pricing\_variables\_batch:

```
curl \
-X POST \
-F "standard=google" \
-F file=@pricings_data_xml.xml \
-F "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/pricing_variables_batch
```

## Reading

pricing\_variables\_batch

### Example

Update one of the pricing variables for `hotel_1` with check in 2016-05-01 for 3 nights and delete one of the pricing variables for`hotel_2` with check in 2016-05-05 for 1 night:

In `pricings_data_xml.xml`, provide:

```
<?xml version="1.0" encoding="UTF-8"?>
<Transaction>
  <Result>
    <Property>hotel_1</Property>
    <Checkin>2016-05-01</Checkin>
    <Nights>3</Nights>
    <RoomBundle>
      <RoomID>single</RoomID>
      <Baserate currency="USD">189</Baserate>
      <Tax currency="USD">18.64</Tax>
      <OtherFees currency="USD">10.00</OtherFees>
    </RoomBundle>
  </Result>
  <Result>
    <Property>hotel_2</Property>
    <Checkin>2016-05-05</Checkin>
    <Nights>1</Nights>
  </Result>
</Transaction>
```

then make a HTTP POST to pricing\_variables\_batch:

```
curl \
-X POST \
-F "standard=google" \
-F file=@pricings_data_xml.xml \
-F "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/pricing_variables_batch
```

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/pricing_variables_batch HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fpricing_variables_batch&version=v25.0)

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

A list of ProductCatalogPricingVariablesBatch nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

### /{product\_catalog\_id}/pricing\_variables\_batch

You can make a POST request to *pricing\_variables\_batch* edge from the following paths:

* [/{product\_catalog\_id}/pricing\_variables\_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/pricing_variables_batch)

When posting to this edge, a [ProductCatalogPricingVariablesBatch](https://developers.facebook.com/docs/graph-api/reference/product-catalog-pricing-variables-batch) will be created.

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
| 200 | Permissions error |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
