---
title: "Shop API"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/commerce-merchant-settings
---

# Shop API

Updated: Oct 21, 2022

Use this API to obtain information about the shop and associated sales business channels.

Learn how to [create a collection in Commerce Manager⁠](https://www.facebook.com/business/help/2658959294372394?id=1077620002609475) in the Business Help Center.

## GET (Read API)

Information about `fb_sales_channel` and `ig_sales_channel` such as status and `fb_page` or `ig_user` can be obtained using **GET**. Based on how a shop is configured, only defined sales channels appear in the output.

| Field | Description |
| --- | --- |
| `fb_sales_channel` | Shows information about the Facebook shop sales channel. |
| `ig_sales_channel` | Shows information about the Instagram shop sales channel. |

**`fb_sales_channel` Fields**

| Field | Description |
| --- | --- |
| `status` | Shows status of the FB Shop Sales channel. Possible values: `ENABLED`, `DISABLED`, `STAGING` |
| `fb_page` | Shows information about the associated Facebook page. |

**`ig_sales_channel` Fields**

| Field | Description |
| --- | --- |
| `status` | Shows status of the Instagram Shop Sales channel. Possible values: `ENABLED`, `DISABLED`, `STAGING` |
| `ig_user` | Shows information about the associated Instagram user. |

**Sample Request**

```
```
curl -G \  
-d "access_token=<ACCESS_TOKEN>" \  
https://graph.facebook.com/<API_VERSION>/<SHOP_ID>
```
```

**Sample Response**

```
```
{  
"fb_sales_channel": {  
"status": "<ENABLED/DISABLED/STAGING>",  
"fb_page": {  
"name": "<example_fb_page>"  
}  
},  
"ig_sales_channel": {  
"status": "<ENABLED/DISABLED/STAGING>",  
"ig_user": {  
"username": "<example_ig_user>"  
}  
},  
"id": "<shop_id>"  
}
```
```
