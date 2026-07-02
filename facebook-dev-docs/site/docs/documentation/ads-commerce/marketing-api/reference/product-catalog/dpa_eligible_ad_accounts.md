---
title: "Product Catalog Diagnostics"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/dpa_eligible_ad_accounts
---

# Product Catalog Diagnostics

Updated: Oct 17, 2024

Learn more about the [Diagnostics API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/diagnostics-api), the detailed insights it provides, and guidance on resolving catalog issues that may be impacting ad performance.

## Reading

ProductCatalogDiagnostics

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/diagnostics HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fdiagnostics&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `affected_channels` *list<enum{marketplace, marketplace\_ads\_deprecated, marketplace\_shops, b2c\_marketplace, c2c\_marketplace, da, daily\_deals\_legacy, daily\_deals, ig\_product\_tagging, offline\_conversions, universal\_checkout, mini\_shops, shops, whatsapp}>* | **Default value:** `Set`  affected\_channels |
| `affected_entities` *list<enum{product\_item, product\_catalog, product\_set, product\_event}>* | **Default value:** `Set`  affected\_entities |
| `affected_features` *list<enum{checkout, augmented\_reality}>* | **Default value:** `Set`  affected\_features |
| `severities` *list<enum{MUST\_FIX, OPPORTUNITY}>* | **Default value:** `Set`  severities |
| `types` *list<enum{AR\_VISIBILITY\_ISSUES, ATTRIBUTES\_INVALID, ATTRIBUTES\_MISSING, CATEGORY, CHECKOUT, DA\_VISIBILITY\_ISSUES, EVENT\_SOURCE\_ISSUES, IMAGE\_QUALITY, LOW\_QUALITY\_TITLE\_AND\_DESCRIPTION, POLICY\_VIOLATION, SHOPS\_VISIBILITY\_ISSUES}>* | **Default value:** `Set`  types |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [ProductCatalogDiagnosticGroup](https://developers.facebook.com/docs/graph-api/reference/product-catalog-diagnostic-group) nodes.

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
