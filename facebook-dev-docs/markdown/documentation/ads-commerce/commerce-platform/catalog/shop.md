---
title: "Product Set Collection API"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/shop
---

# Product Set Collection API

Updated: Apr 28, 2026

You can use this API to create collections used in Shops and add metadata to a product set, such as a cover image and description. Such product sets are then ready to be used as collections in Commerce Manager to customize your Facebook or Instagram Shop (otherwise, Collections are manually created). You can also directly publish such ready product sets by providing the shop IDs. Shop IDs can be obtained from using Commerce APIs.

Learn more how to [Create a Collection in Commerce Manager, Business Help Center⁠](https://www.facebook.com/business/help/2658959294372394?id=1077620002609475).

## POST (Create/Update API)

Creating and updating [product sets](https://developers.facebook.com/docs/graph-api/reference/product-set) remains the same. However, there are a few new optional fields to note:

| Field | Description |
| --- | --- |
| `metadata` | **Optional**.  Parent parameter for metadata block for collections. |
| `publish_to_shops` | **Optional**.  Parameter to provide shop\_id(s) to directly create/update product set and publish to shops. |

#### Metadata Fields

| Field | Description |
| --- | --- |
| `cover_image_url` | **Optional**.  URL of the cover image for the collection. |
| `description` | **Optional**.  Customer-facing description for the [product set](https://developers.facebook.com/docs/graph-api/reference/product-set). |
| `external_url` | **Optional**.  URL of the collection. This URL is not shown to consumers, but serves as a default when creating ads that promote your product set. |

#### Publish to Shops Fields

The field `publish_to_shops` accepts an empty array or array with the parameters shown in the example below. If and empty array is provided, the given product set will be unpublished from all shops (if published earlier).

| Field | Description |
| --- | --- |
| `shop_id` | shop\_id is expected here and can be obtained using [Commerce APIs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/commerce-merchant-settings). |

**Example** — Payload

```
{
    "name": "Best sellers",
    "filter": {
      "retailer_id": {
        "is_any": [
          "pid1",
          "pid2"
        ]
      }
    },
    "metadata": {
      "cover_image_url": "https://foo.com/image.jpg" (https://foo.com/image.jpg%E2%80%9D),
      "external_url": "https://foo.com/best-sellers",
      "description":"Our best selling products"
    }
  "publish_to_shops": [{"shop_id": "shop_id1"}, {"shop_id": "shop_id2"}]
}
```

### Create a Product Set

Create a product set with Collection metadata that matches specific product IDs:

```
curl \
  -F "name=Best Sellers" \
  -F "filter={'retailer_id': {'is_any': ['pid1', 'pid2']}​}"
  -F "metadata={'cover_image_url':'https://foo.com/image.jpg', 'external_url':'https://foo.com/best-sellers', 'description':'Our best selling products'}" \
  -F "access_token=<ACCESS_TOKEN>" \
  https://graph.facebook.com/API_VERSION/PRODUCT_CATALOG_ID/product_sets
```

### Update a Product Set

Update an existing product set with Collection metadata and publish to shops:

```
curl \
  -F "name=Updated Best Sellers" \
  -F "metadata={'cover_image_url':'https://foo.com/image_updated.jpg', 'external_url':'https://foo.com/best-sellers-updated', 'description':'Our updated best selling products'}" \
  -F "publish_to_shops=[{'shop_id':'shop_id1'}, {'shop_id':'shop_id2'}]"
  -F "access_token=<ACCESS_TOKEN>" \
  https://graph.facebook.com/API_VERSION/PRODUCT_SET_ID
```

## GET (Read API)

On the `GET` node, the `live_metadata` field returns metadata that is published and live on a particular product set, while the `latest_metadata` field returns the metadata that was last sent to the API. These fields may differ if, for example, an image was changed upon update and was rejected for integrity reasons.

All fields are non-default fields and should be explicitly called in the Graph API as field parameters.

| Field | Description |
| --- | --- |
| `latest_metadata` | Latest metadata information that was sent. May not be the same as `live_metadata` (for example, if `review_status` is `REJECTED`). |
| `live_metadata` | Current, live metadata for this product set. |

#### Metadata Fields

| Field | Description |
| --- | --- |
| `cover_image_url` | URL of the customer-facing cover image for the product set. |
| `description` | Customer-facing description for the product set. |
| `external_url` | URL of the collection. This URL is not shown to consumers, but serves as a default when creating ads that promote your product set. |
| `integrity_review_status` | Integrity review status. Can be one of `APPROVED`, `REJECTED`, `PENDING`. |

**Example** — Read a product set to see what metadata is live:

```
curl -G \
  -d "access_token=<ACCESS_TOKEN>" \
  https://graph.facebook.com/<API_VERSION>/<PRODUCT_SET_ID>/?fields=id,name,latest_metadata{cover_image_url, description, review_status},live_metadata{cover_image_url, description, review_status}
```

**Response**:

```
{
    "id": 1234567890,
    "name": "Best sellers",
    "latest_metadata": {
        "cover_image_url": "https://foo.com/some_new_image.jpg" (https://foo.com/image.jpg%E2%80%9D),
        "description":"Our best selling products",
        "integrity_review_status": "REJECTED"
    },
    "live_metadata": {
        "cover_image_url": "https://foo.com/some_good_image.jpg",
        "description":"Our best selling products",
        "integrity_review_status": "APPROVED"
    }
}
```

## FAQ

#### Q: What is the minimum, acceptable aspect ratio for a cover image?

**A**: Images must be at least 600x600 (although edit cropping is unavailable at this ratio). If uploading 800x800 or larger, a square aspect ratio is selected as default. For best results, we recommend an aspect ratio of 1080x1080.

#### Q: What is the maximum filesize for a cover image?

**A**: The maximum file size is 8 MB.

#### Q: What file formats are supported for cover images?

**A**: JPG and PNG are supported.

#### Q: Are there length restrictions on description?

**A**: There is no minimum length for description. The maximum length is 200 characters.

#### Q: How do I unpublish a Collection (product set) from Shops?

**A**: You can use Update API and remove the `shop_id` field from `publish_to_shop` list where it was previously published. If empty array ([]) is provided, product set would be unpublished from all the shops.

## Learn More

* [Create a Collection in Commerce Manager, Business Help Center⁠](https://www.facebook.com/business/help/2658959294372394?id=1077620002609475)
* [Product Sets, MAPI Reference](https://developers.facebook.com/docs/graph-api/reference/product-set)
