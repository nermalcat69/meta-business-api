---
title: "Business Initiated Sharing Agreements"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_accounts
---

# Business Initiated Sharing Agreements

Updated: Aug 11, 2025

This endpoint was reintroduced in May 2020. Previously, `/initiated_sharing_agreements` had been deprecated with the launch of [Graph API V6.0](https://developers.facebook.com/docs/graph-api/changelog/2020-02-03-endpoint-deprecations#business).

## Reading

Assets sharing agreements initiated by this business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/initiated_sharing_agreements HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Finitiated_sharing_agreements&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `receiving_business_id` *numeric string or integer* | ReceivingBusinessId |
| `request_status` *enum {APPROVE, DECLINE, IN\_PROGRESS, EXPIRED, PENDING, PENDING\_INTEGRITY\_REVIEW, PENDING\_EMAIL\_VERIFICATION, CANCELED, MMA\_DIRECT\_ASSETS\_PENDING, MMA\_DIRECT\_ASSETS\_APPROVED, MMA\_DIRECT\_ASSETS\_DECLINED, MMA\_DIRECT\_ASSETS\_EXPIRED}* | RequestStatus |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of BusinessAgreement nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
