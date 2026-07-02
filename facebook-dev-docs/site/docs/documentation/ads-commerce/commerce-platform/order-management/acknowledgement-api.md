---
title: "Order API Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api
---

# Order API Reference

Updated: Feb 9, 2026

Use this API to list orders, retrieve details about an order or products. In this section:

* [List Orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#get_orders)
* [Get Order Details](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#get_order_details)
* [List Order Items](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#get_order_items)
* [Get Product Details](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#get_product)

## Fields

When you query the Order API, by default it will return a set of fields: `id`, `order_status`, `created` and `last_updated`.

However, you can specify which fields you want returned by using the `fields` parameter and listing each field. This overrides the defaults and returns only the fields you specify, and the ID of the object, which is always returned.

All fields marked as non-default should explicitly be added to the fields parameter in the request.

For example, if you wanted to get all orders and only see the fields: `id`, `buyer_details`, `channel`, `merchant_order_id`, `order_status` you would make the following call:

```
curl -X GET -G \
  -d 'fields="id,buyer_details,channel,merchant_order_id,order_status"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>/commerce_orders
```

This query would return the following response:

```
{
  "data": [
    {
      "id": "368508827392800",
      "buyer_details": {
        "name": "John Smith",
        "email": "n8miblde3i@marketplace.facebook.com",
        "email_remarketing_option": false
      },
      "channel": "facebook",
      "order_status": {
        "state": "CREATED"
      }
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUkxqeHRvVTN0OXpSWWE4X3FwVkRtUkxobkYtWlVGN0FQbVpVZAFE4VEpzOTFvNzhpcGV2QzhxX25ZAWkE2YWNVdkZA6UWprY3JhTmRrOGpiZA3ZA3MnEtU01n",
      "after": "QVFIUkxqeHRvVTN0OXpSWWE4X3FwVkRtUkxobkYtWlVGN0FQbVpVZAFE4VEpzOTFvNzhpcGV2QzhxX25ZAWkE2YWNVdkZA6UWprY3JhTmRrOGpiZA3ZA3MnEtU01n"
    }
  }
}
```

To find out more information on fields and how to use them, check out to [Graph API](https://developers.facebook.com/docs/graph-api/using-graph-api#fields) documentation on this topic.

## List Orders

List all the commerce orders associated with a Shop. **By default** this endpoint returns orders in `CREATED` state unless state parameter is specified. The response only returns **default fields**, unless you request additional fields explicitly. Refer to the samples for more information.

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>/commerce_orders
```

### Request

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `updated_before` | `string` | Optional | Returns orders for which the status changed before this date in unix timestamp. |
| `updated_after` | `string` | Optional | Returns orders for which the status changed after this date in unix timestamp. |
| `state` | `vector` of [`order_state`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#order_state) | Optional | Comma-separated list of order states to filter on. When you specify two or more states behavior is OR. Defaults to `CREATED` if not specified. |
| `filters` | `vector` of [`filter_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#order_filter) | Optional | List of Comma-separated line item filters to fetch orders. When you specify two or more filters behavior is AND. Example fetch orders with filters `no_shipments` AND `no_cancellations` |

### `order_state`

| State | Description |
| --- | --- |
| `FB_PROCESSING` | Facebook is still processing this order. This order may not advance to the `CREATED` state if canceled by buyer or Facebook for fraud. See [best practices](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/orders#read-orders) on handling orders in this state. |
| `CREATED` | Facebook has finalized the order, the seller needs to acknowledge the order to be able to act on the order. The seller can [get](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#get_orders) the orders and [acknowledge](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api). |
| `IN_PROGRESS` | Order is [acknowledged](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api) and moved into your order management service. This state indicates that seller has to yet ship some or all items related to order. |
| `COMPLETED` | All items present in the order are shipped and/or cancelled. |

### `order_filter`

| Filter | Description |
| --- | --- |
| `no_shipments` | Get orders with line items that are not shipped yet. |
| `has_cancellations` | Get orders with line items that are canceled. |
| `no_cancellations` | Get orders that don’t have any canceled line items. |
| `has_refunds` | Get orders with line items that have refunds. |
| `no_refunds` | Get orders that have no refunds. |

### Response

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | `array` of [`order`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#order) | Returns only default order fields. Additional data can be queried by passing in as fields. |

### `order` object

| Attribute | Type | Description | Default |
| --- | --- | --- | --- |
| `id` | `string` | Unique ID representing the order. **Although numerical, treat Order IDs as strings, as Order ID length and structure is subject to change.** | Yes |
| `order_status` | [`order_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#order_status) |  | Yes |
| `created` | `string` | Order’s creation datetime in [ISO 8601 format⁠](https://en.wikipedia.org/wiki/ISO_8601). | Yes |
| `last_updated` | `string` | Order’s latest update datetime in [ISO 8601 format⁠](https://en.wikipedia.org/wiki/ISO_8601). | Yes |
| `items` | [`items object`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#item) | Items edge. Contains list of items purchased in this order | No |
| `ship_by_date` | `string` | The expected date the order is to be shipped by. Date format ‘Y-m-d’ | No |
| `merchant_order_id` | `string` | Unique ID representing the order in merchants Order Management System | No |
| `channel` | `string` | Facebook or Instagram | No |
| `selected_shipping_option` | [`selected_shipping_option`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#selected_shipping_option) | This field is available for backward compatibility. Integrations should read the [item](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#item) level `selected_shipping_option` | No |
| `shipping_address` | [`shipping_address`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#shipping_address) |  | No |
| `estimated_payment_details` | [`estimated_payment_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#estimated_payment_details) |  | No |
| `buyer_details` | [`buyer_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#buyer_details) |  | No |

### `order_status` object

| Attribute | Type | Description |
| --- | --- | --- |
| `state` | [`order_state`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#order_state) |  |

### `selected_shipping_option` object

| Attribute | Type | Description |
| --- | --- | --- |
| `name` | `string` | Human readable name of the shipping option. |
| `price` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Shipping cost. |
| `calculated_tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Shipping tax amount. This amount is updated as the order is fulfilled, you can do additional API calls to [update this amount](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/ship-fulfillment#update-estimated-taxes). |
| `estimated_shipping_time` | [`estimated_shipping_time`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#estimated_shipping_time) | Estimated shipping time |

### `shipping_address` object

| Attribute | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name on the shipping label. |
| `street1` | `string` |  |
| `street2` | `string` |  |
| `city` | `string` |  |
| `state` | `string` | Two-letter state abbreviation e.g. “NY” |
| `postal_code` | `string` |  |
| `country` | `string` |  |

### `estimated_payment_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `subtotal` | [`subtotal_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#subtotal_details) | Sum of cost of items and shipping. |
| `tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Tax amount for the order. |
| `total_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Total amount for the order. |
| `tax_remitted` | `bool` | `true` if taxes are collected by Facebook. |
| `facebook_paid_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Total paid by Facebook-funded incentive. |
| `buyer_paid_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Total paid by the buyer. |

### `subtotal_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `items` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Sum of cost of products items in this order. |
| `shipping` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Shipping cost for the order. |

### `currency_amount` object

| Attribute | Type | Description |
| --- | --- | --- |
| `amount` | `string` | Amount in decimal format, eg. “5.5”. |
| `currency` | `string` | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase, e.g. USD. |

### `estimated_shipping_time` object

| Attribute | Type | Description |
| --- | --- | --- |
| `min_days` | `Number` | Expected minimum number of days in shipping |
| `max_days` | `Number` | Expected maximum number of days in shipping |

### `buyer_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the customer |
| `email` | `string` | Email address of the customer. For fulfillment purposes only, unless `email_remarketing_option` is set to `true` |
| `email_remarketing_option` | `boolean` | Customer’s marketing opt-in status. **Do not** use email address for marketing purposes if set to **false**. |

### Sample Request (default fields)

* Get Orders with status `CREATED` and filters with `no shipments AND no cancellations` with **default** fields in the response.

```
curl -X GET -G \
  -d 'fields="estimated_payment_details"' \
  -d 'updated_after=1529718360' \
  -d 'state="CREATED"' \
  -d 'filters="no_shipments,no_cancellations"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>/commerce_orders
```

### Sample Response (default fields)

```
```
{  
  "data": [  
    {  
      "id": "335211597203390",  
      "order_status": {  
        "state": "CREATED"  
      },  
      "created": "2019-01-14T19:17:31+00:00",  
      "last_updated": "2019-01-14T19:47:35+00:00"  
    },  
    {  
      "id": "2247696628885631",  
      "order_status": {  
        "state": "CREATED"  
      },  
      "created": "2019-01-11T22:56:04+00:00",  
      "last_updated": "2019-01-11T23:26:18+00:00"  
    },  
    {  
      "id": "64000005580968",  
      "order_status": {  
        "state": "CREATED"  
      },  
      "created": "2018-09-27T04:25:57+00:00",  
      "last_updated": "2018-09-27T04:26:14+00:00"  
    },  
    // ... 25 more orders if present  
  ],  
  "paging": {  
    "cursors": {  
      "before": "--sanitized_key--",  
      "after": "--sanitized_key--"  
    },  
    "next": "https://graph.facebook.com/vX.X/<cms-id>/commerce_orders?access_token=--sanitized_key--&pretty=0&limit=25&after=--sanitized_key--"  
  }  
}
```
```

### Sample Request to fetch orders between two dates (default fields)

* Get Orders between dates by using updated\_after and updated\_before

```
curl -X GET -G \
  -d 'updated_before=1565728779' \
  -d 'updated_after=1565555979' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>/commerce_orders
```

### Sample Response

```
```
 {  
  "data": [  
    {  
      "id": "1299096923600598",  
      "order_status": {  
        "state": "CREATED"  
      },  
      "created": "2019-08-12T20:45:32+00:00",  
      "last_updated": "2019-08-12T20:45:42+00:00"  
    },  
    {  
      "id": "388309381882686",  
      "order_status": {  
        "state": "CREATED"  
      },  
      "created": "2019-08-12T19:52:46+00:00",  
      "last_updated": "2019-08-12T19:52:56+00:00"  
    },  
    {  
      "id": "366654374253443",  
      "order_status": {  
        "state": "CREATED"  
      },  
      "created": "2019-08-12T19:52:09+00:00",  
      "last_updated": "2019-08-12T19:52:19+00:00"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "--sanitized_key--",  
      "after": "--sanitized_key--"  
    }  
  }  
}
```
```

### Sample Request (multi-item order)

* Get multi-item Orders with additional fields and filters

```
curl -X GET -G \
  -d 'fields="id,order_status,items,channel"' \
  -d 'limit=1' \
  -d 'state="CREATED"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>/commerce_orders
```

### Sample Response (multi-item order)

```
```
{  
  "data": [  
    {  
      "id": "372892946712291",  
      "order_status": {  
        "state": "CREATED"  
      },  
      "items": {  
        "data": [  
          {  
            "id": "372892953378957",  
            "product_id": "2416339625125194",  
            "retailer_id": "FB_product_1237",  
            "quantity": 1,  
            "price_per_unit": {  
              "amount": "0.99",  
              "currency": "USD"  
            }  
          },  
          {  
            "id": "372892943378958",  
            "product_id": "2654057021279988",  
            "retailer_id": "FB_product_1238",  
            "quantity": 1,  
            "price_per_unit": {  
              "amount": "0.99",  
              "currency": "USD"  
            }  
          }  
        ],  
        "paging": {  
          "cursors": {  
            "before": "--sanitized_key--",  
            "after": "--sanitized_key--"  
          }  
        }  
      },  
      "channel": "instagram"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "--sanitized_key--",  
      "after": "--sanitized_key--"  
    }  
  }  
}
```
```

## Get Order Details

Fetch order details for a given Facebook Order ID. The response only returns **default fields**, unless you request additional fields explicitly.

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>
```

### Response

* [`order`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#order) object with default fields

### Sample Request

* Get Order details with additional fields

```
curl -X GET -G \
  -d 'fields="estimated_payment_details"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>
```

### Sample Response

```
```
{  
  "estimated_payment_details": {  
    "subtotal": {  
      "items": {  
        "amount": "2.00",  
        "currency": "USD"  
      },  
      "shipping": {  
        "amount": "0.00",  
        "currency": "USD"  
      }  
    },  
    "tax": {  
      "amount": "0.19",  
      "currency": "USD"  
    },  
    "total_amount": {  
      "amount": "2.19",  
      "currency": "USD"  
    },  
    "tax_remitted": true  
  },  
  "id": "412336950726541"  
}
```
```

## List Order Items

Fetch line items for a given Facebook Order ID. The response only returns **default fields**, unless you request additional fields explicitly.

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/items
```

### Response

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | `array` of [`item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#item) |  |

### `item` object

| Attribute | Type | Description | Default |
| --- | --- | --- | --- |
| `id` | `string` | **Unique ID** representing the item. Multiple quantities of any item will be represented in the quantity field (see below). | Yes |
| `retailer_id` | `string` | ID representing the product in the merchant’s catalog. | Yes |
| `product_name` | `string` | Name of Product. Note that this is not a default field and must be explicitly asked for via a `fields=` query. | No |
| `product_id` | `string` | ID representing the product in the Facebook catalog. | Yes |
| `quantity` | `Number` | Number of items ordered. | Yes |
| `selected_shipping_option` | [`selected_shipping_option`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#selected_shipping_option) | Selected shipping option | No |
| `status` | `string` | Items status breakdown. For example: {“in\_progress”: 0, “fulfilled”: 1, “cancelled”: 1} | No |
| `price_per_unit` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | Unit price for this item. | Yes |
| `tax_details` | [`item_tax_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#item_tax_details) | Tax details for this item. | No |
| `customization` | `string` | Text customization entered by the buyer on an order, if applicable. | No |

### `item_tax_details` Object

| Attribute | Type | Description |
| --- | --- | --- |
| `estimated_tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) | This is total estimated tax for this particular item (all quantities), calculated during order creation by Facebook. **This estimated tax never changes**. |
| `captured_tax` | [`total_tax`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#total_tax) | This represents the original tax collected on items that are fulfilled. **This number will be updated based on shipments fulfilled.** For **Example**: If an order has ten quantity of an item and estimated tax is $2.50 when the first shipment is made with 1 item, then capture\_tax would be $0.25. Then merchant cancels five items and ships four items then capture\_tax would be $1.21 (previous 1 item 0.25+0.24\*4 items). capture\_tax varies based on fulfillments, and price can be different based on fulfillment location. **The capture\_tax amount may differ from the estimated\_tax amount by a few cents.** |

### `total_tax` Object

| Attribute | Type | Description |
| --- | --- | --- |
| `total_tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#currency_amount) |  |

### Sample Request

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/items
```

### Sample Response

```
```
{  
  "data": [  
    {  
      "id": "2082596341811586",  
      "product_id": "1213131231",  
      "retailer_id": "external_product_1234",  
      "quantity": 2,  
      "price_per_unit": {  
        "amount": "20.00",  
        "currency": "USD"  
      }  
  
     "tax_details": {  
                "estimated_tax": {  
                  "amount": "0.30",  
                  "currency": "USD"  
                },  
                "captured_tax": {  
                  "total_tax": {  
                    "amount": "0.30",  
                    "currency": "USD"  
                  }  
               }  
           }  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "--sanitized_key--",  
      "after": "--sanitized_key--"  
    }  
  }  
}
```
```

## Get Product Details

You can fetch additional details about a given product by making the following Graph API call:

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PRODUCT_ID>
```

### Response

| Attribute | Type | Description | Default |
| --- | --- | --- | --- |
| `id` | `string` | ID representing the product. | Yes |
| `retailer_id` | `string` | ID representing the product in the merchant’s catalog. | Yes |
| `name` | `string` |  | Yes |
| `description` | `string` |  | No |
| `brand` | `string` |  | No |
| `gtin` | `string` |  | No |
| `manufacturer_part_number` | `string` |  | No |
| `color` | `string` |  | No |
| `size` | `string` |  | No |
| `gender` | `string` |  | No |
| `additional_variant_attributes` | `array` of `string` |  | No |
| `url` | `string` |  | No |
| `image_url` | `string` |  | No |
| `visibility` | `string` |  | No |
| `availability` | `string` |  | No |
| `inventory` | `Number` | Current inventory level. | No |
