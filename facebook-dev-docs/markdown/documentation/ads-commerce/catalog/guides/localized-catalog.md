---
title: "Metadata Tags"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/guides/localized-catalog
---

# Metadata Tags

Updated: Sep 17, 2020

You can optionally set metadata tags in your product feed files. Setting these tags enables Facebook to attribute catalogs using this feed to your app. Once a catalog is attributed to your app, you don’t need to include the metadata tags in subsequent feed uploads to that catalog.

Include the following elements as space-delimited comments at the top of TSV/CSV (tab-separated and comma-separated) feeds or inside a `metadata` tag in your XML feeds:

* `ref_application_id` — Your Facebook app ID
* `ref_asset_id` - ID that uniquely identifies this feed in your system

## Feed formats

| Feed Format | Description |
| --- | --- |
| CSV | Sample CSV Feed file with reference information inside the metadata tag.[Download (Right-Click > Save Link As)](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.8562-6/48568332_2279458838955160_3512851659749326848_n.csv?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=vfpxPL3P6uAQ7kNvwFdEX5z&_nc_oc=AdrTVuHmPVf9ku69HWel1tpHWwkg0uE2sj-JWCtYahgvvNTKX2JeAYWA9K0xfX2xCfOZoHqHH8m9JfbgWLy_hLbN&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=NgQ9APmd18TTzOXkpeOLPQ&_nc_ss=7b289&oh=00_AQBNPrCEjVT2Wp3UxFoFv5gMFU0QzCZeyjg3C0M7-xnfCw&oe=6A4C0042) |
| TSV | Sample TSV Feed file with reference information inside the metadata tag. [Download (Right-Click > Save Link As)](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.8562-6/48545963_1001287720060315_4746467383575576576_n.tsv?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=4KZlBlYngdAQ7kNvwHD6CTx&_nc_oc=Adru3lO3fAdwNmSDHC8vn6b8ZDSki-RVz0AkV-yO76rI9h0ZIeyI49m-Khg0OJp-ANFUwrUY8F0EowAMoQpWwKYF&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=NgQ9APmd18TTzOXkpeOLPQ&_nc_ss=7b289&oh=00_AQBnyc0NvHTZUv3_zGk2TGChRf9o9euxHW5A-0w4Xr8xRA&oe=6A4C3231) |
| RSS XML | Sample RSS XML Feed file with reference information inside the metadata tag. [Download (Right-Click > Save Link As)](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.8562-6/48625428_293593984617997_8019480020747550720_n.xml?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=AW1GqQbnqsEQ7kNvwHlf_cR&_nc_oc=Adpwr0dHjcKjHHRiru8Hb4DckPX0VV11pFgDlBvkdSURoGXCawquGAp4Xf-m3hKnYKQRiG-1CTRVaMFZ4L--XoLU&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=NgQ9APmd18TTzOXkpeOLPQ&_nc_ss=7b289&oh=00_AQAQzS4egf4qXw4J12CpHyHtfC5IKoVu1yVVmTUuQY3_tQ&oe=6A4C3262) |
| ATOM XML | Sample Atom XML Feed file with reference information inside the metadata tag. [Download (Right-Click > Save Link As)](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.8562-6/43523807_2159129834409914_8786398993258119168_n.xml?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=Q2PGkOzPX8wQ7kNvwGYWhSE&_nc_oc=AdpeDYZLElpPiliqwfjjeUvIUbEX3q5ZKph5nUk0UXrFdrI2qO5aZ0uaX_hvDZDkO2Ejba8tcCVLnAzUz8MX1vMs&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=NgQ9APmd18TTzOXkpeOLPQ&_nc_ss=7b289&oh=00_AQAV8Of9WSp9jq7l2YAPG1cDJ5-_PQi9A2Hj-RePvhwuaw&oe=6A4C2022) |

#### Example - TSV feed format

```
# ref_application_id <YOUR_APP_ID>
# ref_asset_id <YOUR_ASSET_ID>
id  title  ios_url  ios_app_store_id  ios_app_name  android_url  android_package  android_app_name  windows_phone_url  windows_phone_app_id  windows_phone_app_name  description  google_product_category  product_type  link  image_link  condition  availability  price  sale_price  sale_price_effective_date  gtin  brand  mpn  item_group_id  gender  age_group  color  size  shipping  custom_label_0
DB_1  Dog Bowl In Blue  example-ios://electronic/db_1  123  Electronic Example iOS  example-android://electronic/db_1  com.electronic.example  Electronic Example Android  example-windows://electronic/db_1  64ec0d1b-5b3b-4c77-a86b-5e12d465edc0  Electronic Example Windows  Solid plastic Dog Bowl in marine blue color  Animals > Pet Supplies  Bowls & Dining > Food & Water Bowls  http://www.example.com/bowls/db-1.html  https://www.facebook.com/images/product_image_template.png?id=1  new  in stock  9.99 GBP        Example    DB_GROUP_1          UK::Standard:9.95 GBP  "Made in Waterford, IE"
...
```

#### Example - RSS XML feed format

```
...
<?xml version="1.0"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <metadata>
      <ref_application_id><YOUR_APP_ID></ref_application_id>
      <ref_asset_id><YOUR_ASSET_ID></ref_asset_id>
    </metadata>
  </channel>
</rss>
...
```

#### Example - ATOM XML feed format

```
...
<?xml version="1.0"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <feed>
    <metadata>
      <ref_application_id><YOUR_APP_ID></ref_application_id>
      <ref_asset_id><YOUR_ASSET_ID></ref_asset_id>
    </metadata>
  </feed>
</rss>
...
```
