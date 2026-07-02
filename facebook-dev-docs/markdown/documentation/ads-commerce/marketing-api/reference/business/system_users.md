---
title: "Business System User Access Tokens"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_users
---

# Business System User Access Tokens

Updated: May 28, 2025

## Reading

You can't perform this operation on this endpoint.

## Creating

### /{business\_id}/system\_user\_access\_tokens

You can make a POST request to *system\_user\_access\_tokens* edge from the following paths:

* [/{business\_id}/system\_user\_access\_tokens](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_user_access_tokens)

When posting to this edge, no Graph object will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `asset` *array<int64>* | asset |
| `fetch_only` *boolean* | fetch\_only |
| `scope` *List<Permission>* | scope |
| `set_token_expires_in_60_days` *boolean* | set\_token\_expires\_in\_60\_days |
| `system_user_id` *int64* | system\_user\_id |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
access_token: string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 3962 | Provided permission is not valid. Check your spelling and syntax. |
| 452 | Session key invalid. This could be because the session key has an incorrect format, or because the user has revoked this session |
| 200 | Permissions error |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
