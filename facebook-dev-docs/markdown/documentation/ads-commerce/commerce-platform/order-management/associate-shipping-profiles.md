---
title: "Shipping Profiles API Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles
---

# Shipping Profiles API Reference

Updated: Feb 10, 2026

Use the **Shipping Profiles API** to manage shipping profiles on your commerce account.

## Retrieve Shipping Profiles

Retrieve the list of shipping profiles from your commerce account.

```
curl -X GET \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{cms-id}/shipping_profiles
```

### Request

| Attribute | Description |
| --- | --- |
| `cms_id`  Type: string | **Required**  Commerce Manager ID for the page that you want to extract orders. To find `{cms-id`}, log in to [Facebook Commerce Manager⁠](https://www.facebook.com/commerce_manager) and then select the page that you want to extract orders. You are then redirected to **www.facebook.com/ commerce\_manager/{cms-id}**. |
| `reference_id`  Type: string | **Optional**  The external reference ID set in your shipping profile. |

**Sample Request**

```
{
 "reference_id": "shipping_profile_1",
}
```

### Response

| Attribute | Description |
| --- | --- |
| `data`  Type: array of [`shipping_profile`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-profile-object) | **Required**  List of shipping profiles. |
| `reference_id`  Type: string | **Optional**  External reference ID set in your shipping profile. |

### `shipping_profile` object

| Attribute | Description | Default |
| --- | --- | --- |
| `id`  Type: string | Unique ID representing shipping profile. | Yes |
| `external_reference_id`  Type: string | Unique external shipment profile ID representing a shipment pro as identified by the seller. Allowed characters are alphanumeric and `_`. | No |
| `address_categories`  Type: array of [`address_category`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#address-category-object) | List of address categories. | Yes |
| `is_default`  Type: boolean | True if this is the default shipping profile. The default shipping profile is used for all product that do not have a shipping profile specified. | No |

### `address_category` object

| Attribute | Description |
| --- | --- |
| `address_types`  Type: array of string | Array of address types allowed in this shipment profile. Accepted values: `STREET`, `PO_BOX`, `APO`, `FPO`, `DPO`. country |
| `country`  Type: string | [Country codes⁠](https://en.wikipedia.org/wiki/ISO_3166-1?fbclid=IwAR12EFmRFuT54DPQUejdHSSvLhFlcgau7PpEtDnm7tN_D9YZwUxyKjiUDuk) where this address category applies. The only country code available today is `US`. |
| `region`  Type: string | [Region where this address category applies. The only region code available today is `NA` (North America). |
| `shipping_options`  Type: array of [`shipping_option`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-option-object) | Shipping options applied for this address category. Max of 3, one for each [`shipping_service_tier`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-service-tier-enum). |
| `blacklisted_states`  Type: array of string | States where this address category are not allowed. |
| `handling_time`  Type: [`handling_time`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#handling-time-object) | Minimum and maximum number of days required by the seller to ship and order. |

### `handling_time` object

| Attribute | Description |
| --- | --- |
| `min_handling_days`  Type: integer | Minimum number of days (`0` to `7`) required by the seller to ship and order. |
| `max_handling_days`  Type: integer | Maximum number of days (`0` to `7`) required by the seller to ship and order. Must be greater than `min_handling_days`. |

### `shipping_options_data` object

| Attribute | Description |
| --- | --- |
| `data`  Type: array of [`shipping_option`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-option-object) | List of shipping options. |

### `shipping_option` object

| Attribute | Description |
| --- | --- |
| `id`  Type: string | Unique ID representing the shipping option. **Although numerical, treat order IDs as strings, as shipping option ID length and structure are subject to change**. |
| `cost`  Type: [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions#currency_amount) | Shipping cost. Format the cost as a number, followed by the 3-digit ISO currency code [(ISO 4217 standards)⁠](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency. |
| `cost_per_additional_item`  Type: [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions#currency_amount) | Additional shipping cost per additional item after the first cost. Format the cost as a number, followed by the 3-digit ISO currency code [(ISO 4217 standards)⁠](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency. |
| `cart_minimum_for_free_shipping`  Type: [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions#currency_amount) | Minimum cart amount for free shipping. |
| `estimated_days_until_arrival`  Type: [`estimated_days_until_arrival`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#estimated-days-until-arrival-object) | Estimated shipping time in days, from 1–7 days. |
| `shipping_service_tier`  Type: [`shipping_service_tier`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-service-tier-enum) | Shipping service tier (`STANDARD`, `RUSH`, `EXPEDITED`). |

### `estimated_days_until_arrival` object

| Attribute | Description |
| --- | --- |
| `min_days_to_arrival`  Type: integer | Expected minimum number of days in shipping. |
| `max_days_to_arrival`  Type: integer | Expected maximum number of days in shipping. Maximum days to arrival must be greater than `min_days_to_arrival`. Total handling and shipping time must be up to 10 days. |

### `shipping_service_tier` enum

| Value | Description |
| --- | --- |
| `STANDARD` | Standard shipping. The slowest shipping option to offer. |
| `EXPEDITED` | Expedited shipping. An intermediate shipping option to offer. |
| `RUSH` | Rush shipping. The fastest shipping option to offer. |

**Sample Response**

```
{
  "data": [
    {
      "address_categories": {
        "data": [
          {
            "address_types": [
              "STREET",
              "PO_BOX",
              "APO",
              "FPO",
              "DPO"
            ],
            "country": "US",
            "region": "NA",
            "shipping_options": {
              "data": [
                {
                  "estimated_days_until_arrival": {
                    "min_days_to_arrival": 6,
                    "max_days_to_arrival": 7
                  },
                  "name": "Standard",
                  "shipping_service_tier": "STANDARD",
                  "id": "966032327147142"
                }
              ],
              "paging": {
                "cursors": {
                  "before": "...",
                  "after": "..."
                }
              }
            },
            "handling_time": {
              "min_handling_days": 3,
              "max_handling_days": 7
             },
            "id": "508833709813209"
          }
        ],
        "paging": {
          "cursors": {
            "before": "...",
            "after": "..."
          }
        }
      },
      "reference_id": "132bcdc6-2bda-43bb-b237-7634d49e96f0",
      "id": "508833703146543"
    }
  ]
}
```

## Create Shipping Profiles

Create new shipping profiles in your commerce account.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{cms-id}/shipping_profiles
```

**Request**

| Attribute | Description |
| --- | --- |
| `cms_id`  Type: string | **Required**  Commerce Manager ID for the page that you want to extract orders. To find `{cms-id`}, log in to [Facebook Commerce Manager⁠](https://www.facebook.com/commerce_manager) and then select the page that you want to extract orders. You are then redirected to **www.facebook.com/ commerce\_manager/{cms-id}**. |
| `reference_id`  Type: string | **Optional**  Unique external shipment profile ID representing a shipment pro as identified by the seller. Allowed characters are alphanumeric and `_`. |
| `shipping_destinations`  Type: [`shipping_destination`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-destinations-object) | **Required**  Groups of address categories and their associated shipping options. |
| `is_default`  Type: array of boolean | True if this is the default shipping profile. The default shipping profile is used for all products that do not have a shipping profile specified. The default value is `False`. |
| `name`  Type: string | Name of your shipping profile. |

### `shipping_destinations` object

| Attribute | Description |
| --- | --- |
| `address_category`  Type: [`address_category`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#address-category-object) | **Required**  Address category. |
| `shipping_options`  Type: array of [`shipping_option`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-option-object) | **Required**  Provides 1–3 [shipping options](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-option-object) (`STANDARD`, `EXPEDITED`, `RUSH`) associated with the address category. |

**Sample Request**

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{cms-id}/shipping_profiles

{
    "shipping_destinations": [
        {
            "shipping_options": [
                {
                    "shipping_tier": "STANDARD",
                    "cost_per_additional_item": {
                        "currency": "USD",
                        "amount": "3.99"
                    },
                    "cost": {
                        "currency": "USD",
                        "amount": "7.99"
                    },
                    "estimated_days_until_arrival": {
                        "min_days_to_arrival": 0,
                        "max_days_to_arrival": 3
                    }
                }
            ],
            "address_category": {
                "country": "US",
                "region": "NA",
                "address_types": [
                    "STREET",
                    "PO_BOX",
                    "APO",
                    "FPO",
                    "DPO"
                ],
                "handling_time": {
                    "max_handling_days": 7,
                    "min_handling_days": 3
                }
            }
        }
    ],
    "reference_id": "my-shipping_profile",
    "name": "My shipping profile"
}
```

**Sample Response**

```
{
    "id": "1176765772724227",
    "shipping_destinations": [
        {
            "address_category_id": "1176765776057560",
            "shipping_option_ids": [
                "352836552771081"
            ]
        }
    ]
}
```

## Delete Shipping Profiles

Delete shipping profiles from your commerce account. You can’t delete the default shipping profile

```
curl -X DELETE \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{shipping-profile-id}
```

**Request**

| Attribute | Description |
| --- | --- |
| `shipping-profile-id`  Type: string | **Required**  Unique ID representing shipping profile. |

**Sample Response**

```
{
    "success": true
}
```

## List Shipping Profile Information from Orders

To set custom shipping options and handling times on individual products, this information must be propagated via the [order management API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management). For example, now the selected shipping and ship by dates are listed at a per-item basis vs. an order level.

### API Changes

The following fields reference the shipping profile information within orders:

* Add the `handling_time` field to the [`selected_shipping_option` object](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#selected_shipping_option)
* Add the `reference_id` field to the [`selected_shipping_option` object](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#selected_shipping_option)
* Add a `selected_shipping_option` node to the [`item` object](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#item).
  Add ship\_by time field to the item object.

### Example API Calls and Responses

The following example displays endpoint(s) being updated:

```
https://graph.facebook.com/{order-id}
https://graph.facebook.com/{order-id}/items
```

**New Response — Example Query**

```
curl -i -X GET \
"https://facebook.com/v3.3/720230338503549?fields=items.limit(10){id,ship_by,selected_shipping_option{name,price,calculated_tax,estimated_shipping_time,handling_time_days,reference_id}}&access_token=<access token sanitized>"
```

**New Response — Example Response**

```
{
 "items": {
   "data": [
     {
       "id": "720230331836883",
       "ship_by": "2020-01-16T13:18:33-08:00",
       "selected_shipping_option": {
         "name": "(0 - 1 Business days)",
         "price": {
           "amount": "0.00",
           "currency": "USD"
         },
         "calculated_tax": {
           "amount": "0.00",
           "currency": "USD"
         },
         "estimated_shipping_time": {
           "min_days": 0,
           "max_days": 1
         },
         "handling_time_days": 3,
         "reference_id": "123456,
       }
     }
   ],
   "paging": {
     "cursors": {
       "before": "QVFIUlZAhQjdRcHZARaUI3WThsa05xRXdrTktIb2ZArMGFsVi1DNElGeENwQUUweUNVYzVHMEtPcmtXclNCZAkRUQjg0SW04THVmTWJrOUdHWnBhR21jeGlHOGR3",
       "after": "QVFIUlZAhQjdRcHZARaUI3WThsa05xRXdrTktIb2ZArMGFsVi1DNElGeENwQUUweUNVYzVHMEtPcmtXclNCZAkRUQjg0SW04THVmTWJrOUdHWnBhR21jeGlHOGR3"
     }
   }
 },
 "id": "720230338503549"
}
```

### Implications

The `selected_shipping_option` will not be populated in the order node, only at the item nodes.

## Manage Shipping Profile Information

Manage the shipping profiles in your commerce account.

```
curl -X PUT \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{shipping-profile-id}/
```

**Request**

| Attribute | Description |
| --- | --- |
| `shipping-profile-id`  Type: string | **Required**  Unique ID representing shipping profile. |
| `reference_id`  Type: string | Unique external shipment profile ID representing a shipment pro as identified by the seller. Allowed characters are alphanumeric and `_`. |
| `shipping_destinations`  Type: array of [`shipping_destinations`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles#shipping-destinations-object) | **Required**  Groups of address categories and their associated shipping options.  Any existing shipping destinations are deleted. |

You can’t update a profile from default to non-default using the `is_default_shipping_profile` field. Instead, you need to set `is_default_shipping_profile` on a new or other existing profile.

**Sample Request**

```
curl -X PUT \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{shipping-profile-id}

{
    "shipping_destinations": [
        {
            "shipping_options": [
                {
                    "shipping_tier": "STANDARD",
                    "cost_per_additional_item": {
                        "currency": "USD",
                        "amount": "3.99"
                    },
                    "cost": {
                        "currency": "USD",
                        "amount": "7.99"
                    },
                    "estimated_days_until_arrival": {
                        "min_days_to_arrival": 0,
                        "max_days_to_arrival": 3
                    }
                }
            ],
            "address_category": {
                "country": "US",
                "region": "NA",
                "address_types": [
                    "STREET",
                    "PO_BOX",
                    "APO",
                    "FPO",
                    "DPO"
                ],
                "handling_time": {
                    "max_handling_days": 7,
                    "min_handling_days": 3
                },
            }
        }
    ],
    "reference_id": "my-shipping_profile",
    "name": "My shipping profile"
}
```

**Sample Response**

```
{
   "success": true
}
```

## Learn More

* [Associate Shipping Profiles with Products](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles)
* [About Shipping Orders, Business Help Center⁠](https://www.facebook.com/business/help/211403042968780)
* [Create a Commerce Account in Commerce Manager, Business Help Center⁠](https://www.facebook.com/business/help/842191386156027)
* [About Order Fulfillment, Business Help Center⁠](https://www.facebook.com/business/help/1111269182413656?id=454668378692696)
