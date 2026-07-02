---
title: "Business Initiated Audience Sharing Requests"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/initiated_sharing_agreements
---

# Business Initiated Audience Sharing Requests

Updated: Aug 28, 2019

## Reading

These are the audience sharing requests which were initiated by this business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/initiated_audience_sharing_requests HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Finitiated_audience_sharing_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `recipient_id` *numeric string* | the id of the recipient business |
| `request_status` *enum {APPROVE, DECLINE, IN\_PROGRESS, EXPIRED, PENDING, PENDING\_INTEGRITY\_REVIEW, PENDING\_EMAIL\_VERIFICATION, CANCELED, MMA\_DIRECT\_ASSETS\_PENDING, MMA\_DIRECT\_ASSETS\_APPROVED, MMA\_DIRECT\_ASSETS\_DECLINED, MMA\_DIRECT\_ASSETS\_EXPIRED}* | the status of the sharing request |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of BusinessAssetSharingAgreement nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `custom_audiences` *list<BusinessAssetSharingAgreementSharedAudienceResponseShape>* | Pending custom audiences for sharing agreement    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 104 | Incorrect signature |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
