---
title: "Business Partner Center Export Files"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/partner_relationships
---

# Business Partner Center Export Files

Updated: Mar 30, 2025

## Reading

PartnerCenterExportFiles

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/partner_center_export_files HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpartner_center_export_files&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `report_ds` *ISO 8601 Date* | report\_ds |
| `report_type` *enum {REVENUE, DISABLED\_AD\_ACCOUNTS, PROMOTABLE\_OBJECTS\_CONSISTENCY\_VIOLATION\_AD\_ACCOUNTS, AEM\_OPPORTUNITIES, RESELLER\_PARTITION\_CREDIT\_ACCOUNTS\_DAILY\_SUMMARY, RESELLER\_PARTITION\_CREDIT\_ACCOUNTS\_DAILY\_STATUS\_SUMMARY, CAPI\_OPPORTUNITIES, RESELLER\_REBATE\_PRODUCT\_ADOPTION\_REPORT\_QTD, RESELLER\_REBATE\_PRODUCT\_ADOPTION\_REPORT\_1D, RESELLER\_REBATE\_PRODUCT\_ADOPTION\_REPORT\_7D, DISAPPROVED\_ADS\_1D, DISAPPROVED\_ADS\_7D, DISAPPROVED\_ADS\_QTD, DISABLED\_AD\_ACCOUNTS\_1D, DISABLED\_AD\_ACCOUNTS\_7D, DISABLED\_AD\_ACCOUNTS\_QTD}* | report\_type  required |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

##### data

A list of PartnerCenterExportFile nodes.

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
