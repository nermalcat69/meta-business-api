---
title: "Business Role Request Assigned Owned Assets"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user
---

# Business Role Request Assigned Owned Assets

Updated: May 21, 2019

## Reading

List of owned assets assigned to this role invitation.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-role-request-id}/assigned_owned_assets HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-role-request-id%7D%2Fassigned_owned_assets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `asset_type` *enum {PAGE, PROFILE\_PLUS, AD\_ACCOUNT, AD\_DRAFT\_WORKSPACE, PRODUCT\_CATALOG, APP, PIXEL, SYSTEM\_USER, BRAND, USER, PROJECT, INSTAGRAM\_ACCOUNT, INSTAGRAM\_ACCOUNT\_V2, FUNDING\_SOURCE, LEGAL\_ENTITY, LEGACY\_LOGIN, BUSINESS\_REQUEST, EXAMPLE\_CAT, MONETIZATION\_PROPERTY, GRP\_PLAN, CREDIT\_PARTITION, PAYOUT\_ACCOUNT, AD\_STUDY, SAVED\_AUDIENCE, CUSTOM\_AUDIENCE, PLATFORM\_CUSTOM\_AUDIENCE, EVENT\_SOURCE\_GROUP, OFFLINE\_CONVERSION\_DATA\_SET, AD\_IMAGE, PHOTO, BLOCK\_LIST, FINANCE, IP, CREDIT\_PARTITION\_CONFIG, VIDEO\_ASSET, BUSINESS\_UNIT, PAGE\_FOR\_LOCATIONS, AD\_ACCOUNT\_CREATION\_REQUEST, RESELLER\_VETTING\_OE\_REQUEST, REGISTERED\_TRADEMARK, CUSTOM\_CONVERSION, LEADS\_ACCESS, SPACO\_DS\_DATA\_COLLECTION, OWNED\_DOMAIN, WHATSAPP\_BUSINESS\_ACCOUNT, WHATSAPP\_BUSINESS\_PRESENCE, BUSINESS\_RESOURCE\_GROUP, HOTEL\_PRICE\_FETCHER\_PULL\_CONFIG, NEWS\_PAGE, PLACE\_PAGE\_SET, BUSINESS\_LOCATIONS\_WRAPPER, SLICED\_EVENT\_SOURCE\_GROUP, BUSINESS\_CREATIVE\_ASSET, BUSINESS\_CREATIVE\_FOLDER, BUSINESS\_IMAGE, BUSINESS\_VIDEO, ADS\_EVENT\_SOURCE, SELLER\_PROFILE, BANK, CREDIT\_CARD, RECEIPT, CREDENTIAL\_SHARE\_REQUEST, ADVANCED\_ANALYTICS\_INSTANCE, SIGNAL\_SEGMENT, BUSINESS\_LOYALTY\_PROGRAM, EVENTS\_DATASET, CLOUD\_PLAYABLE\_ASSET, CREATOR\_SELLER\_PROFILE, CAIPT\_ASSET, BUSINESS\_FRANCHISE\_CONFIG, EVENTS\_DATASET\_AND\_PIXEL, EVENTS\_DATASET\_NEW, OFFSITE\_EMAIL\_ACCOUNT, CREATOR\_MARKETPLACE\_BRAND\_PROFILE, SIGNALS\_EVENT\_NAME, BUSINESS\_PAYOUT\_ACCOUNT, UNKNOWN, MESSAGING\_DATASET, INSTAGRAM\_BUSINESS\_ASSET, NME\_BUSINESS\_SUBSCRIPTION\_ASSET, MV4B\_BILLABLE\_ACCOUNT, MARKETPLACE\_PARTNER\_BILLABLE\_ACCOUNT, BUSINESS\_PERSON, CONTENT\_BLOCK\_LIST, WHATSAPP\_MARKETING\_MESSAGE\_SUBSCRIBER\_POOL, BIZ\_AI\_BILLABLE\_ACCOUNT, THREADS\_ACCOUNT, WHATSAPP\_ACCOUNT, MESSENGER\_MARKETING\_MESSAGE\_SUBSCRIBER\_POOL}* | Business asset type to be filtered on  required |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"summary": {}
}
```

##### data

A list of BusinessObject nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_roles` *list<string>* | Roles that are assignable on this object |
| `permitted_tasks` *list<string>* | Tasks that are assignable on this object |
| `role` *string* | The role the user is assigned    default |

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | Total number of objects on this edge    default |

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
