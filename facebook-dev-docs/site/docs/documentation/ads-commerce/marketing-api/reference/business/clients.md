---
title: "Business Client Whatsapp Business Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/clients
---

# Business Client Whatsapp Business Accounts

Updated: Nov 22, 2022

## Reading

Get a list of WhatsApp Business Accounts on a Business.

### Example

Requirements

* whatsapp\_business\_management permission
* whatsapp\_business\_messaging permission
* public\_profile permission
* BUSINESS ID (also referred to as BUSINESS MANAGER ID in Business Settings)
* ADMIN SYSTEM USER ACCESS TOKEN for the business

Request

Select language

cURLAndroid SDKObjective-C

---

```
       curl -i -X GET \  
'https://graph.facebook.com/LATEST-VERSION/BUSINESS-ID/client_whatsapp_business_accounts' \  
-H 'Authorization: Bearer USER-ACCESS-TOKEN'
```

Response

```
{
  "data": [
  ]
}
```

Request with Filtering

Select language

cURL

---

```
        curl -i -X GET \  
"https://graph.facebook.com/LATEST-VERSION/BUSINESS-ID/client_whatsapp_business_accounts \  
   ?fields=id,name,ownership_type \  
   &filtering=[{'field':'ownership_type', 'operator': 'IN', 'value': ['SELF', 'CLIENT_OWNED']}]" \  
-H 'Authorization: Bearer USER-ACCESS-TOKEN'
```

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [WhatsAppBusinessAccount](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks` *list<string>* | Tasks that are assignable to users on this asset |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 80008 | There have been too many calls to this WhatsApp Business account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 104 | Incorrect signature |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
