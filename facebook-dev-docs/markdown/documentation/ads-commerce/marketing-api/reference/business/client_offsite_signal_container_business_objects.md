---
title: "Business Client Objects"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_offsite_signal_container_business_objects
---

# Business Client Objects

Updated: May 21, 2019

## Reading

All client objects of the business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/client_objects HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_objects&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `owner_biz_id` *Business ID* | if present filter on owner business of the objects |
| `type` *enum {page, profile-plus, ad-account, ad-draft-workspace, product-catalog, app, pixel, system-user, brand, user, project, instagram-account, instagram-account-v2, funding-source, legal-entity, legacy-login, business\_request, example-cat, monetization-property, grp-plan, credit-partition, payout-method, ad-study, saved-audience, shared-audience, shared-platform-audience, event-source-group, offline-event-set, ad-image, photo, block-list, finance, ip, credit-partition-config, video-asset, business-unit, page-locations, ad-account-creation-request, reseller\_vetting\_oe\_request, registered-trademark, custom-conversion, leads-access, spaco-ds-data-collection, owned-domain, whatsapp-business-account, whatsapp-business-presence, business-resource-group, hotel-price-fetcher-pull-config, news-page, place\_page\_set, business-locations-wrapper, sliced-event-source-group, business-creative-asset, business-creative-folder, business-image, business-video, ads-event-source, seller-profile, bank, credit\_card, receipt, credential\_share\_request, advanced-analytics-instance, signal\_segment, business\_loyalty\_program, events-dataset, cloud\_playable\_asset, creator-seller-profile, caipt-asset, business-franchise-config, events-dataset-and-pixel, events-dataset-new, offsite-email-account, creator-marketplace-brand-profile, signals-event-name, business-payout-account, unknown, messaging\_dataset, instagram\_business\_asset, nme\_business\_subscription\_asset, mv4b-billable-account, marketplace-partner-billable-account, business-person, content-block-list, whatsapp\_marketing-message-subscriber-pool, biz-ai-billable-account, threads-account, whatsapp-account, messenger-marketing-message-subscriber-pool}* | type of objects to be returned  required |

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

A list of BusinessObject nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks` *list<string>* | Tasks that are assignable to users on this asset |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

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
