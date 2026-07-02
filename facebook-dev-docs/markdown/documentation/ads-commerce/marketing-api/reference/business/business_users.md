---
title: "Business Business Invoices"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_users
---

# Business Business Invoices

Updated: Aug 19, 2025

## Reading

The monthly invoices sent to the bill-to legal entities associated to a business.

Returns /docs/marketing-api/reference/omega-customer-trx

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/business_invoices HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fbusiness_invoices&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `end_date` *string* | **Default value:** `"2026-05-12"`  End date for querying invoices by their billing period timestamp.  The billing period timestamp of an invoice is the first day of the month for which we're invoicing (i.e. a June 2021 invoice will have billing period of May 1st, 2021 = 2021-05-01).  Expected date format: YYYY-MM-DD.  Note: end\_date is exclusive. |
| `invoice_id` *string* | Corresponds to the invoice number (i.e. the "invoice\_id" field on the OmegaCustomerTrx node) for a particular invoice/credit memo.  Used to query for a single invoice. If set, all other filter parameters are ignored. |
| `issue_end_date` *string* | **Default value:** `"2026-05-12"`  End date for querying invoices by the date in which they're issued.  Expected date format: YYYY-MM-DD.  Note: issue\_end\_date is exclusive. |
| `issue_start_date` *string* | Start date for querying invoices by the date in which they're issued.  Expected date format: YYYY-MM-DD.  Note: issue\_start\_date is inclusive. Also, this parameter must be set in order to query by the issue date. |
| `root_id` *int64* | Corresponds to the id (i.e. the "id" field on the OmegaCustomerTrx node) for a particular invoice/credit memo.  Used to query for a single invoice. If set, all other filter parameters are ignored. |
| `start_date` *string* | **Default value:** `"First day of 6 months ago"`  Start date for querying invoices by their billing period timestamp.  The billing period timestamp of an invoice is the first day of the month for which we're invoicing (i.e. a June 2021 invoice will have billing period of May 1st, 2021 = 2021-05-01).  Expected date format: YYYY-MM-DD.  Note: start\_date is exclusive. Also, start\_date and end\_date have a default value, so if no parameters are set, invoices are queried by the billing period |
| `type` *enum {INV, CM, DM, PRO\_FORMA}* | Used to query invoices by their type, which can be 'INV': Invoice or 'CM': Credit Memo. |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

##### data

A list of [OmegaCustomerTrx](https://developers.facebook.com/docs/marketing-api/reference/omega-customer-trx) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of invoices. To have this field returned, you must include the summary=true parameter and value in your request. |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 104 | Incorrect signature |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
