---
title: "Commerce Merchant Settings Shops"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/quantity-to-sell
---

# Commerce Merchant Settings Shops

Updated: Oct 21, 2022

Use this API to obtain information about one or more shops associated with a commerce merchant account.

Learn how to [create a collection in Commerce Manager⁠](https://www.facebook.com/business/help/2658959294372394?id=1077620002609475) in the Business Help Center.

## GET (Read API)

Information about `fb_sales_channel` and `ig_sales_channel` such as `status`, `fb_page` or `ig_user` can be obtained using **GET**. Based on how a shop is configured, only configured sales channels appear in the output.

**Sample Request**

```
```
curl -G \  
-d 'fields=["id"]' \  
-d 'access_token=<ACCESS_TOKEN>'  
https://graph.facebook.com/<API_VERSION>/<COMMERCE_MERCHANT_SETTINGS_ID>/shops
```
```

**Sample Response**

```
```
"data": [  
  {  
   "id": "283382596466157"  
 }  
  ....  
],  
"paging": {  
 "cursors": {  
    "before": "<before_cursor>",  
    "after": "<after_cursor>"  
  }  
}}
```
```

## Reading

You can use `filter` to show only shops that match certain fields.

**Filter Field**

| Field Name | Description | Type | Required? |
| --- | --- | --- | --- |
| `filter` | See description [here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set#Creating). | JSON string | No |

**Fields**

Reading from this edge will return a JSON-formatted result:

```
```
{  
"data": [],  
"paging":{}  
}
```
```

**data**

A list of Shop nodes.

**paging**

For more details about pagination, see the [Graph API documentation](https://developers.facebook.com/docs/graph-api/overview#paging).
