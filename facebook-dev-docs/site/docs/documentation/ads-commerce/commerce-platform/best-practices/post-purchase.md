---
title: "Shipping and Fulfillment"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/post-purchase
---

# Shipping and Fulfillment

Updated: Jun 29, 2026

Use this guide to learn about common uses and best practices for managing shipping profiles and fulfillment orders on your commerce account.

## Set up per-product shipping profiles

If you have special shipping preferences (for example, when shipping to Hawaii or Alaska) or want more flexibility around shipping times, use per-product shipping profiles.

When you first set up Commerce Manager, you set a default shipping profile for the entire commerce account.

Using shipping profiles, you can specify handling time, shipping speed, price, and destination on a per-product item level.

* Create different shipping profiles via [Commerce Manager⁠](https://www.facebook.com/business/help/211403042968780?id=353836851981351) or [API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api).
* Once shipping profiles are created, you need to associate each product item with the corresponding category. You can do so via an update feed upload. Learn how to [associate products with shipping profiles](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles) and upload them to Commerce Manager.

## Set up per-product return policy

By default, all items in your catalog have an automatic return policy of 30 days. [See this Help Center article⁠](https://www.facebook.com/business/help/417898513266638) for more details.

The [Google Product Category (GPC)⁠](https://www.facebook.com/business/help/526764014610932?id=725943027795860) set for a catalog determines these categories. While custom return windows are mapped to a top-level GPC code, products that fall within a subcategory of that GPC code inherit the same custom return windows.

When [fulfilling orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#attach_shipment), you must provide tracking information so that the customer can see tracking status.

The carrier in your tracking information must be one of the supported carriers for Commerce Platform. The following is a list of all [supported carriers](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/carrier-codes) for Commerce Platform.

## Sync tracking and external shipment IDs to the Facebook system

Each [fulfilled shipment](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api) must include one and only one unique tracking number. This requirement means you must:

* Include all items shipped in the same parcel in the same shipment API call.
* Identify your shipment with your fulfillment system ID using `external_shipment_id`.

This requirement also means you won’t be able to:

* Use the same tracking number in two different fulfillment API calls.
* Change items shipped in a parcel.

| Scenario | Recommendation |
| --- | --- |
| Single/Multi-item > single parcel | [One API call](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#attach_shipment) to attach the shipment to the order. |
| Multi-item > multi parcel | [Multiple API calls](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#attach_shipment) to attach each item(s) to the different shipments to the order. |
| Single/Multi-item where tracking information needs to be updated | If you need to update your tracking information after fulfilling it, you can do it by using your `external_shipment_id` and change tracking number, carrier, or shipping method. |
| Multi-item item > single parcel, but API call didn’t include all shipped items (human/system error) | The tracking number should be unique, so you need to make an [API call](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#attach_shipment) to fulfill the remaining shipped items using a new or variant of the tracking number; for example:   * Incomplete shipment tracking number: `ship X` * Tracking number (fulfilling the items shipped by missing the first API call): `ship X-2`   This should be used only to fix a condition your system shouldn’t allow. Be prepared to respond to customer inquiries about bad tracking numbers. |

## Update estimated taxes

The Commerce Platform updates the payment and tax details as you fulfill an order. The estimated taxes at order creation can differ from the actual captured taxes after fulfillment.

You can get the estimated and actual payment and tax details by using this request:

```
curl -X GET -G \
  -d 'fields="estimated_payment_details,items{tax_details},shipments{items{tax}}"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/{order-id}
```

#### Response

```
{
  "estimated_payment_details": {
    "subtotal": {
      "items": {
        "amount": "25.00",
        "currency": "USD"
      },
      "shipping": {
        "amount": "1.00",
        "currency": "USD"
      }
    },
    "tax": {
      "amount": "2.50",
      "currency": "USD"
    },
    "total_amount": {
      "amount": "28.50",
      "currency": "USD"
    },
    "tax_remitted": true
  },
  "items": {
    "data": [
      {
        "id": "2082596341811586",
        "retailer_id": "item_A",
        "quantity": 10,
        "price_per_unit": {
          "amount": "2.50",
          "currency": "USD"
        },
        "tax_details": {
          "estimated_tax": {
            "amount": "2.50",
            "currency": "USD"
          },
          "captured_tax": {
            "total_tax": {
              "amount": "0.25",
              "currency": "USD"
            }
          }
        }
      }
 ]
  },
  "shipments": {
    "data": [
      "items": {
        "data": [
          {
            "id": "2082596341811586",
            "retailer_id": "item_A",
            "quantity": 1,
            "tax": {
              "final_tax": {
                "amount": "0.25",
                "currency": "USD"
              }
            }
          }
        ]
      },
    ]
  }
  "id": "412336950726541"
}
```

| Fields | Description |
| --- | --- |
| `order`/`estimated_payment_details`/ `tax` | Total amount for items, shipment, and taxes, at the time of order creation. These estimated values never change. |
| `item`/`estimated_tax` | Total estimated tax for this particular item (all quantities), calculated during order creation. This estimated tax never changes. |
| `items`/`captured_tax` | When this item is partially or fully fulfilled, `captured_tax` represents final taxes captured for this item, for the quantities that have been shipped as of this moment. |
| `shipments`/`items`/`tax` | When an order has multiple shipments, each shipment corresponds to one payment. Thus, this is the sum of `item`/`captured_tax` included in each shipment. This tax amount never changes, as it was already captured and you can’t change the items in a shipment. |

For example, in the [response](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/post-purchase#response) above, where `retailer_id` is `item_A` and `quantity` is `10`:

| Scenario | Description |
| --- | --- |
| Before any fulfillment | * `order`/`estimated_payment_details`/`tax` = 2.50 USD, the estimated tax for a quantity of 10 of item A in the order. This amount never changes, and is omitted later. * `item`/`estimated_tax` = 2.50 USD (estimated tax for qty 10 of `item A` in the order) * `items`/`captured_tax` = 0 USD (the system has not captured taxes yet) * `shipments`/`items`/`tax` = 0 USD (you have not fulfilled any items) |
| First fulfillment item A, qty 1 | * `item`/`estimated_tax` = 2.50 USD * `items`/`captured_tax` = 0.25 USD (captured taxes for qty 1) * `shipments`/`items`/`tax` = 0.25 USD (captured taxes for qty 1) |
| You cancel item A, qty 5 | * `item`/`estimated_tax` = 2.50 USD * `items`/`captured_tax` = 0.25 USD (captured taxes for qty 1) * `shipments`/`items`/`tax` = 0.25 USD (captured taxes for qty 1) |
| You ship remaining item A, qty 4 | * `item`/`estimated_tax` = 2.50 USD * `items`/`captured_tax` = 1.24 USD (0.25 USD from before + 0.99 USD tax captured during current fulfillment of qty 4) * `shipments`/`items`/`tax` = 1 item with 0.25 USD (captured taxes for qty 1) and another item with 0.99 USD (captured taxes for qty 4) |

The final `captured_tax` can vary from the initial `estimated_tax` slightly (usually by a few cents) even without any cancellations.

The `tax_remitted` field signals whether Facebook collected the tax. Learn more about [Marketplace Facilitator States and Sales Tax⁠](https://tinyurl.com/y3nw9dqe) and [Tax Settings in Commerce Manager⁠](https://tinyurl.com/y3srp8fe).

If you override your tax calculations (see [Use the Tax Override API for DIY tax calculations](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/post-purchase#tax-override-api)), the captured item-level taxes are expected to match your data at fulfillment.

## Automate your financial reconciliation process

In addition to the financial reports that can be generated in [Commerce Manager⁠](https://www.facebook.com/business/help/1103273406531189?id=540542143143969), you can use the [Finance API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting) to obtain financial information for payouts, transactions, and orders.

Consider using this API to automate your monthly financial reconciliation. For a cash reconciliation, pull all payouts for a given time period using the [Payouts](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts) endpoint. This endpoint provides a set of `payout_reference_ids` that you can then use in the [Transactions](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions) endpoint to get all orders and items associated with that payout.

## Use the Tax Override API for DIY tax calculations

Depending on various factors that affect sales tax calculations, a seller can opt-in to use their own tax calculation engines to compute taxes and replace the default tax calculation logic used by Facebook commerce platform.

### Key features

* Seller to pass tax they need Facebook/Instagram to collect when marking the order as shipped.
* For states that are not [Marketplace Facilitator⁠](https://tinyurl.com/y3nw9dqe) states, the seller passes the tax value and is used to collect the taxes.
* For Marketplace Facilitator states, Facebook ignores the tax value passed in by the seller and uses its own calculation to collect and remit taxes.
* Sellers should pass the 10-digit zip code for the origin location when marking the order as shipped (for Marketplace Facilitator and non-Marketplace Facilitator states).
* Buyers are shown an estimated tax amount when placing an order with appropriate reason on why it is estimated. Once the order is shipped, the amount is updated.

To use the [Tax Override API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/tax-override#tax_details), contact your Facebook representative to enable the functionality for you. After your account has been approved, learn more about [tax override](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/tax-override#tax_details).

## Monitor fulfillment accuracy

Shipping and fulfillment performance is one of the categories that affect your [Account Health metrics⁠](https://www.facebook.com/business/learn/lessons/account-health-commerce-manager).

To ensure that your fulfillment accuracy stays below the thresholds, you need to ship your orders on time, have valid tracking numbers and include accurate shipping numbers for tracking.

Use the [Fulfillment API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api) to automate this process so that you stay compliant with our [Commerce Policies⁠](https://m.facebook.com/policies/commerce).

## Align your product shipping profile to your fulfillment system

When using Shipping Profiles and you want to associate your products with non-default shipping profiles, you need to update your [data feed file for catalog items⁠](https://www.facebook.com/business/help/1898524300466211?id=725943027795860) with additional column: `shipping_profile_reference_id`.

To obtain the value for this column, you can use [Shipping Profiles API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#retrieve-shipping-profiles) or manage the [Shipping Profile⁠](https://www.facebook.com/business/help/211403042968780?id=353836851981351) section in Commerce Manager.

To remove a shipping profile from a particular item and use default shipping profile, set the `shipping_profile_reference_id` value to `"-1"`.

## Learn more

### Shipping Orders

* [Shipping Orders with Commerce Manager, Business Help Center⁠](https://www.facebook.com/business/help/211403042968780?id=353836851981351)
* [Shipping Profiles API, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api)
* [Retrieve Shipping Profiles, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#retrieve-shipping-profiles)
* [Associate Shipping Profiles with Products](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/associate-shipping-profiles)
* [Attach a Shipment, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#attach_shipment)
* [Shipping Carrier Codes, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/carrier-codes)
* [Fulfillment API, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api)

### Catalog Items

* [Product Categories, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories)
* [Product Category for Catalog Items, Business Help Center⁠](https://www.facebook.com/business/help/526764014610932?id=725943027795860)
* [Create a Data Feed File for Catalog Items, Business Help Center⁠](https://www.facebook.com/business/help/1898524300466211?id=725943027795860)

### Taxes

* [Tax Override API, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/tax-override)
* Tax Remitted - [Payment, Graph API](https://developers.facebook.com/docs/graph-api/reference/v9.0/payment), [Payments and Promotions, Commerce Platform](https://developers.facebook.com/docs/commerce-platform/reporting/payments-and-promotions0), and [Commerce Order Payment, Reference](https://developers.facebook.com/docs/graph-api/reference/commerce-order-payment).
* [Tax Settings in Commerce Manager, Business Help Center⁠](https://tinyurl.com/y3srp8fe)
* [Tax Codes for sellers using Commerce Manager, Business Help Center⁠](https://tinyurl.com/y3gzc24y)
* [Marketplace Facilitator States and Sales Tax, Business Help Center⁠](https://tinyurl.com/y3nw9dqe)
* [Download Financial and Tax Reports in Commerce Manager, Business Help Center⁠](https://www.facebook.com/business/help/1103273406531189?id=540542143143969)

### Finance

* [Finance Reporting](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting)
* [Payouts, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts)
* [Transactions, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions)
* [View and Understand Account Performance, Facebook for Business⁠](https://www.facebook.com/business/learn/lessons/account-health-commerce-manager)

### Policies

* [Facebook Commerce Policies⁠](https://m.facebook.com/policies/commerce)
