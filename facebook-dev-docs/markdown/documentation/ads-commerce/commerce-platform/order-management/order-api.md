---
title: "Using the API"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api
---

# Using the API

Updated: Dec 16, 2020

This section covers the basics of the Order Management API and important concepts that you need to know before you start development.

This API is in a closed invite-only Beta program. Please work with your Facebook representative to get access if you have been invited to the program.

## Graph API Version

Use the latest Graph API Version found [here](https://developers.facebook.com/docs/graph-api/changelog). Requests to endpoints should start with `https://graph.facebook.com/{api-version}/`.

## Access Token

The Order Management API relies on a [Page Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens) to act as the Facebook Page. The Page role behind the token must be `EDITOR` or above. Learn more about [page settings⁠](https://www.facebook.com/help/1206330326045914/).

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

## Pagination

The `GET` endpoints that return one or many items support pagination. Use cursor-based pagination for retrieving orders and order items. The default max limit of orders per page is 25.

**Paging sizes may vary, and you may not get the same number of orders back per page**. [Read more about cursor-based pagination here](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

## Merchant Order Reference

While acknowledging orders you can pass a `merchant_order_reference` which represents the unique order ID from your Order Management System. This order ID is displayed on the receipt, along with all customer communication. It can be used by your support staff to retrieve orders when dealing with customer requests.

If your Order Management System does not support concepts of external orders and you can't ingest Facebook or Instagram order IDs, you **should** pass a `merchant_order_reference` when acknowledging orders. Otherwise your support staff won't be able to help with customer requests.

## Idempotency Key

**Idempotency** ensures that the same `POST` request can be made repeatedly while producing the same result. This allows developers to implement a retry logic in case of failures without having to worry about side effects.

* All `POST` requests must include an `idempotency_key` parameter which is a **required field** in the request payload
* Every `POST` request should provide a unique `idempotency_key`. This value is used to determine if the given request is a retry of an older request or a new request in itself
* Multiple **identical** requests using the same `idempotency_key` have the same effect as making a single request
* Multiple **different** requests using the same `idempotency_key` will throw an error
* **DO NOT REUSE** `idempotency_key` values for requests which are not retries of a previous call
* The `idempotency_key` can be any alphanumeric string up to 100 characters long. It can be customized based on your use case, but to avoid any unexpected issues we recommend using a [UUID⁠](https://en.wikipedia.org/wiki/Universally_unique_identifier) generated string.
