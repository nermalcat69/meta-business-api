---
title: "Business Event Source Groups"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/extendedcredits
---

# Business Event Source Groups

Updated: Jul 26, 2019

## Reading

Get event source groups owned by this business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/event_source_groups HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fevent_source_groups&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

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

A list of EventSourceGroup nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 200 | Permissions error |
| 100 | Invalid parameter |

## Creating

### /{business\_id}/event\_source\_groups

You can make a POST request to *event\_source\_groups* edge from the following paths:

* [/{business\_id}/event\_source\_groups](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/event_source_groups)

When posting to this edge, an [EventSourceGroup](https://developers.facebook.com/docs/graph-api/reference/event-source-group) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `event_sources` *list<numeric string or integer>* | Event sources associated with this event source group, such as IDs for pixels.  required |
| `name` *UTF-8 encoded string* | Name of the event source group.  required |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
