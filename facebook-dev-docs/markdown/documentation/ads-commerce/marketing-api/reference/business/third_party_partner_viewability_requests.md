---
title: "Business Third Party Partner Panel Requests"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/third_party_partner_viewability_requests
---

# Business Third Party Partner Panel Requests

Updated: Jun 9, 2023

## Reading

Retrieve all existing panel study requests related to a business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/third_party_partner_panel_requests HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fthird_party_partner_panel_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `country` *array<string>* | Optional filter on the request country.   ---   From a valid ISO2 country codes (2-letter).  Can enter a single country or an array of countries. The array filter is a set contains, e.g. if a business has a request with country 'US', a request with country 'GB', and has filter country=['US', 'GB'], then both requests will be returned.   ---   Valid input examples:   * country=US * country=['US', 'GB']   Invalid input examples:   * country='US' * country=[US, GB] |
| `description` *string* | Optional filter on the request description.   ---   This is a case-insensitive, substring search on the field.  Ex: Suppose we have 3 requests with descriptions of:   * "my test study #1" * "my test study #2" * "my test study #3".   Then both of the following filters will return all 3 requests:   * description=test study * description='test study' |
| `end_time` *JSON object* | Optional filter on the request end time (unix-timestamp).   ---   For comparisons (comp => function):   * 'EQ' => 'equals' * 'GT => 'greater than' * 'GEQ' => 'greater than or equals' * 'LT' => 'less than' * 'LEQ' => 'less than or equals'   end\_time={'comp': [comp], 'ts': [ts]}  Ex: end\_time={'comp': 'GEQ', 'ts': 1684972800} which is end\_time <= 1684972800   ---   For comp 'BW' => 'between'  end\_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}  Ex: end\_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599} which is 1684972800 <= end\_time <= 1685145599  ---   `comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}* comp  required  `ts` *datetime/timestamp* ts  required  `ts2` *datetime/timestamp* ts2  Show child parameters |
| `owner_instance_id` *array<numeric string>* | Optional filter on the request owner instance ID.   ---   From a valid instance ID.  Can enter a single instance ID or an array of instance ID. The array filter is a set contains, e.g. if a business has a request with instance ID 1234, a request with instance ID 5678, and has filter owner\_instance\_id =[1234, 5678], then both requests will be returned.   ---   Valid input examples:   * owner\_instance\_id=1234 * owner\_instance\_id=[1234, 5678] * owner\_instance\_id=['1234', '5678']   Invalid input examples:   * owner\_instance\_id='1234' |
| `owner_panel_id` *array<numeric string>* | Optional filter on the request owner panel ID.   ---   From a valid panel ID.  Can enter a single panel ID or an array of panel ID. The array filter is a set contains, e.g. if a business has a request with panel ID 4321, a request with panel ID 8765, and has filter owner\_panel\_id =[4321, 8765], then both requests will be returned.  If this filter is used in conjunction with owner\_panel\_name, it will filter out panels based on the union of the owner\_panel\_id's and owner\_panel\_name's, e.g. for a panel (id, name), if a business has a request with panel (4321, 'alpha') and a request with panel (8765, 'omega'), and has filters owner\_panel\_id=4321 and owner\_panel\_name='omega', then both requests will be returned.   ---   Valid input examples:   * owner\_panel\_id=4321 * owner\_panel\_id=[4321, 8765] * owner\_panel\_id=['4321', '8765']   Invalid input examples:   * owner\_panel\_id='4321' |
| `owner_panel_name` *array<string>* | Optional filter on the request owner panel name.   ---   This is a case-insensitive, substring search on the field.  Ex: Suppose we have 3 panels with descriptions of:   * "my test panel 1" * "my test panel 2" * "my test panel 3".   Then the following filters will both return all 3 requests:   * owner\_panel\_name=test panel * owner\_panel\_name='test panel'  ---   Can enter a single panel name or an array of panel names. The array filter is a set contains,, e.g. if a business has a request with panel name 'alpha', a request with panel name 'omega', and has filter owner\_panel\_name =['alpha', 'omega'], then both requests will be returned.  If this filter is used in conjunction with owner\_panel\_name, it will filter out panels based on the union of the owner\_panel\_id's and owner\_panel\_name's, e.g. for a panel (id, name), if a business has a request with panel (4321, 'alpha') and a request with panel (8765, 'omega'), and has filters owner\_panel\_id=4321 and owner\_panel\_name='omega', then both requests will be returned.   ---   Valid input examples:   * owner\_panel\_name=test panel 1 * owner\_panel\_name='test panel 1' * owner\_panel\_name=['test panel 1', 'test panel 2']   Invalid input examples:   * owner\_panel\_name=[test panel 1, test panel 2] |
| `start_time` *JSON object* | Optional filter on the request start time (unix-timestamp).   ---   For comparisons (comp => function):   * 'EQ' => 'equals' * 'GT => 'greater than' * 'GEQ' => 'greater than or equals' * 'LT' => 'less than' * 'LEQ' => 'less than or equals'   start\_time={'comp': [comp], 'ts': [ts]}  Ex: start\_time={'comp': 'GEQ', 'ts': 1684972800} which is start\_time <= 1684972800   ---   For comp 'BW' => 'between'  start\_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}  Ex: start\_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599} which is 1684972800 <= start\_time <= 1685145599  ---   `comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}* comp  required  `ts` *datetime/timestamp* ts  required  `ts2` *datetime/timestamp* ts2  Show child parameters |
| `status` *array<enum {CREATED, FAILURE, IN\_PROGRESS, SCHEDULED, SUCCESS}>* | Optional filter on the request status.   ---   From the set { CREATED, FAILURE, IN\_PROGRESS, SCHEDULED, SUCCESS }  Can enter a single study type or an array of statuses. The array filter is a set contains, e.g. if a business has a request with 'CREATED', a request with 'SUCCESS', and has filter status=['CREATED', 'SUCCESS'], then both requests will be returned.   ---   Valid input examples:   * status=CREATED * status=['CREATED', 'SUCCESS']   Invalid input examples:   * country='CREATED' * country=[CREATED, SUCCESS] |
| `study_type` *array<enum {BRAND\_LIFT, PANEL\_SALES\_ATTRIBUTION, REACH}>* | Optional filter on the request study type.   ---   From the set { BRAND\_LIFT, PANEL\_SALES\_ATTRIBUTION, REACH }  Can enter a single study type or an array of study types. The array filter is a set contains, e.g. if a business has a request with study type 'BRAND\_LIFT', a request with study type 'REACH', and has filter study\_type=['BRAND\_LIFT', 'REACH'], then both requests will be returned.   ---   Valid input examples:   * study\_type=BRAND\_LIFT * study\_type=['BRAND\_LIFT', 'REACH']   Invalid input examples:   * study\_type='BRAND\_LIFT' * study\_type=[BRAND\_LIFT, REACH] |
| `submitted_time` *JSON object* | Optional filter on the request submission time (unix-timestamp).   ---   For comparisons (comp => function):   * 'EQ' => 'equals' * 'GT => 'greater than' * 'GEQ' => 'greater than or equals' * 'LT' => 'less than' * 'LEQ' => 'less than or equals'   submitted\_time={'comp': [comp], 'ts': [ts]}  Ex: submitted\_time={'comp': 'GEQ', 'ts': 1684972800} which is submitted\_time <= 1684972800   ---   For comp 'b/w' => 'between'  submitted\_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}  Ex: submitted\_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599} which is 1684972800 <= submitted\_time <= 1685145599  ---   `comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}* comp  required  `ts` *datetime/timestamp* ts  required  `ts2` *datetime/timestamp* ts2  Show child parameters |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [ThirdPartyPartnerPanelRequest](https://developers.facebook.com/docs/graph-api/reference/third-party-partner-panel-request) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
