---
title: "Catalog: Supported Products and Services"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/get-started/integrate-via-meta-sdk
---

# Catalog: Supported Products and Services

Updated: May 29, 2026

We are introducing new API endpoints designed to enable the adoption of new industries (business verticals). This expansion enables you to manage items across a broader range of categories, such as Media Titles, while maintaining a familiar integration experience.

## Overview

The Catalog APIs have long supported non-commerce verticals such as [Hotels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/catalog) and [Flights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/catalog), offering the same level of API support as for commerce items. To further expand catalog coverage, the following verticals are now available:

* **Media Titles** — movies, TV shows, music, and other streaming content
* **Apps and Software** — mobile apps, desktop software, and games
* **Articles and Publications** — ebooks, audiobooks, magazines, newspapers, and other written content
* **Professional Services** — local and online services such as consulting, coaching, repair, and wellness
* **Activities** — concerts, sporting events, guided tours, and other bookable activities

If you have previously integrated with the Catalog API for other verticals, the experience is very similar. Existing endpoints have been extended with new values for item types and verticals to support these categories.

## Key Changes

These are the most important changes to know about when starting your integration:

* **New vertical options when [creating Catalogs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_product_catalogs).** When creating catalogs through the API, new `vertical` values are available for these verticals, such as `media_titles`, `apps_and_software`, `articles_and_publications`, `services`, and `activities`. Use these values to create catalogs for the corresponding vertical.
* **New feed type options when [creating Feeds](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed#Creating).** When creating feeds through the API, new feed type values are available, such as `MEDIA_TITLE`, `APP_AND_SOFTWARE`, `ARTICLE_AND_PUBLICATION`, `SERVICE`, and `ACTIVITY`. Use these values to create feeds for the corresponding vertical.
* **New item type options for [Batch API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch).** When managing items through the Batch API, new `item_type` values are available, such as `MEDIA_TITLE`, `APP_AND_SOFTWARE`, `ARTICLE_AND_PUBLICATION`, `SERVICE`, and `ACTIVITY`. Structure your data object following the [fields supported for your chosen item type](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch#supported-fields).
* **New attributes for [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set) filters.** Some vertical-specific attributes can be used to create product sets. For example, for media titles, you can filter by `award`, `director`, and more. For professional services, you can filter by `service_category`, `has_certification`, and more. For activities, you can filter by `activity_category`, `activity_date`, and more. For a complete list of filterable fields, see the guides below for the vertical you are integrating with.

In addition to these changes on existing endpoints, new edges are available for each vertical to enable reading items from a **Catalog**, **Product Set**, and **Feed**. For example, see [reading your media titles](https://developers.facebook.com/documentation/ads-commerce/catalog/get-started/integrate-via-meta-sdk#mt-reading).

## Create a Catalog

A catalog is a container for your inventory. To use the Catalog API, make sure you have the appropriate Marketing API Access Level and that you have accepted the Terms of Service by creating your first catalog through [Business Manager⁠](https://business.facebook.com/).

To create a catalog, set `vertical` as required. For example, to create a media titles catalog, set vertical to `media_titles`:

```
curl -X POST \
  -F 'name="Test catalog"' \
  -F 'vertical="media_titles"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/{business-id}/owned_product_catalogs
```

## Upload Items Using the API

Once you have created the catalog, upload your items. See the following reference documents for all available upload methods:

* [Media Titles reference](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles#creating)
* [Apps and Software reference](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software#creating)
* [Articles and Publications reference](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications#creating)
* [Professional Services reference](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services#creating)
* [Activities reference](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/activities#creating)

Use the Catalog API to create a feed object for every feed you want to upload. Both scheduled and direct uploads are supported.

For scheduled uploads, specify a `schedule` when you create the feed. For direct uploads, omit the schedule.

**Scheduled feed example:**

```
curl -X POST \
  -F 'name="Test feed"' \
  -F 'schedule={
       "interval": "DAILY",
       "url": "http://www.example.com/sample_feed.csv",
       "hour": "22"
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/product_feeds
```

The response returns the feed ID:

```
{
  "id": "<PRODUCT_FEED_ID>"
}
```

**Direct upload example:**

Once you have created the feed (with or without a schedule), you can perform a one-time upload using the `PRODUCT_FEED_ID`:

```
curl \
  -F "url=http://www.example.com/sample_feed.csv" \
  -F "access_token=<ACCESS_TOKEN>" \
  https://graph.facebook.com/<API_VERSION>/<PRODUCT_FEED_ID>/uploads
```

#### Supported feed formats

Below are sample CSV files for each business vertical:

[Media Titles CSV sample](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.8562-6/654822269_1589688818958212_7026789340094725068_n.csv?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=WlhhTCAZNtoQ7kNvwHdvL7N&_nc_oc=AdqbRACMgrzXV8jgo63am4-LtgTBsPv-wVSmriUMea3-BTo2vx2WkLi9mnNxvosL7luRKWGUC4yggWXlVsOTjfhc&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=9PDXJkD9Vb7ABVWivuJZjA&_nc_ss=7b289&oh=00_AQC5eTMD_pQUTC27gMA-zrbROgqEJzCxqnv4MhNKKObc7g&oe=6A4C14B7) [Apps and Software CSV sample](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.8562-6/653922543_1239626204512600_4221663658926953050_n.csv?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=Ml5gAs41aFQQ7kNvwHSjqg6&_nc_oc=AdrC5IbhW4SsAocxqzge2DrbFXA9JkRfWzSv7c-k8yLXWy5HWzLS_nbbmFedQAWndRwsEJ92POkUzAtxsI0Bs8_4&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=9PDXJkD9Vb7ABVWivuJZjA&_nc_ss=7b289&oh=00_AQC1ARMCWlUcc34N2oCb5fU9iHE817b0qpKogKFZo0Ao6w&oe=6A4C243C) [Articles and Publications CSV sample](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.8562-6/671304975_2417315618780146_3241465555291036349_n.csv?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=IvrCFuBZLj8Q7kNvwFjk72y&_nc_oc=Adqt5008vCdMe5uxpfddEr252RewTP5dmnBuZKKifo8Hisqy_4pcYNKEUQmJuvaUrWLo7soMwvNUe9ppE11sEkDP&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=9PDXJkD9Vb7ABVWivuJZjA&_nc_ss=7b289&oh=00_AQBc2TeiwxCyVteJG7AC5vkRRVMWcHKGtSmqWFqWEqeW_Q&oe=6A4C19DD) [Professional Services CSV sample](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.8562-6/674973714_959620193218259_1493605923640147969_n.csv?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=mfOuKswziR4Q7kNvwH0ocbV&_nc_oc=Ado83mo5Bh4k1pJeOxp0yaPXVU-tEli9cXYnKNtkQqcfYaZbdnlxZ-zxz0F4QPz50zRChEV-YMCvnZjF6ZXr1sp0&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=9PDXJkD9Vb7ABVWivuJZjA&_nc_ss=7b289&oh=00_AQD-bG5iR6ziDDw5tJndvM-FvsHLrjKIP8XT-5UmiLo4Pw&oe=6A4C0FC2) 

**Note**:

* The first row in the CSV file must list the field names in the order values will be provided. Subsequent rows supply the corresponding values for each item.
* Fields containing whitespace or commas should be enclosed in double quotes.
* Nested or multi-value fields such as `image` can be represented using JSON-encoded values or by a set of flattened plain-text columns labeled using JSON-path syntax, such as `image[0].url`, `image[0].tag[0]`, `image[0].tag[1]`. Both conventions can be used interchangeably in the same file.

## Filter Items Into Sets

A set is a subset of the items in your catalog. Product sets are defined by filters applied to the catalog. You can use each business vertical’s edge to list items that belong to a specific product set. See the following links for full reference documentation for each edge:

* [Product Set Media Titles edge](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles/product-set-edge)
* [Apps and Software edge](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software/product-set-edge)
* [Articles and Publications edge](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications/product-set-edge)
* [Professional Services edge](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services/product-set-edge)
* [Activities edge](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/activities/product-set-edge)

### Filter Media Titles Into Sets

You can create a set containing only movies or only items from a specific director. You can also create a set without any filters, in which case it will contain all items in your catalog.

The following fields are available as product set filters:

| Field | Description |
| --- | --- |
| `awards` | Filter by notable awards or nominations. |
| `brand` | Filter by streaming service or platform name. |
| `cast` | Filter by actors in the production. |
| `currency` | Filter by ISO 4217 currency code. |
| `custom_label_0` through `custom_label_4` | Filter by custom label values. |
| `description` | Filter by item description text. |
| `director` | Filter by director of the production. |
| `featuring` | Filter by featured artists or key individuals in the production. |
| `genre` | Filter by media genre such as action, comedy, or drama. |
| `media_category` | Filter by content category: `Movie`, `Music`, `TV Show`, or `Other`. |
| `name` | Filter by the title of the media item. |
| `price_amount` | Filter by the numeric price amount. |
| `production_company` | Filter by production company or studio. |
| `release_date` | Filter by release date (`YYYY-MM-DD` format). |
| `release_date_time` | Filter by release date and time. |
| `retailer_id` | Filter by the retailer-provided unique identifier. |
| `tags` | Filter by product organization tags. |

For the full list of filter operators, see [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set).

### Read Your Media Titles

To read media titles in your catalog, use any of the following endpoints:

* [Catalog media titles](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles/catalog-edge) — list all media titles in a catalog
* [Product set media titles](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles/product-set-edge) — list media titles in a specific product set
* [Feed media titles](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles/feed-edge) — list media titles from a specific feed
* [Media title details](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles#reading) — read details for an individual media title

### Filter Apps and Software Into Sets

You can create a set containing only games or only items from a specific developer. You can also create a set without any filters, in which case it contains all items in your catalog.

The following fields are available as product set filters:

| Field | Description |
| --- | --- |
| `app_category` | Filter by application type: `Games`, `Productivity`, `Social`, `Entertainment`, `Education`, `Utilities`, `Lifestyle`, `Health & Fitness`, `Business`, or `Other`. |
| `app_subcategory` | Filter by application subcategory such as arcade game. |
| `brand` | Filter by publisher name. |
| `content_rating` | Filter by official content rating. |
| `currency` | Filter by ISO 4217 currency code. |
| `custom_label_0` through `custom_label_4` | Filter by custom label values. |
| `description` | Filter by item description text. |
| `developer` | Filter by the developer of the app or software. |
| `genre` | Filter by genre or style such as action or puzzle. |
| `name` | Filter by the name of the app or software. |
| `price_amount` | Filter by the numeric price amount. |
| `retailer_id` | Filter by the retailer-provided unique identifier. |
| `tags` | Filter by product organization tags. |

For the full list of filter operators, see [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set).

### Read Your Apps and Software Items

To read apps and software items in your catalog, use any of the following endpoints:

* [Catalog apps and software](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software/catalog-edge) — list all apps and software in a catalog
* [Product set apps and software](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software/product-set-edge) — list apps and software in a specific product set
* [Feed apps and software](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software/feed-edge) — list apps and software from a specific feed
* [Apps and software details](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software#reading) — read details for an individual app or software item

### Filter Articles and Publications Into Sets

You can create a set containing only ebooks or only items from a specific author. You can also create a set without any filters, in which case it contains all items in your catalog.

The following fields are available as product set filters:

| Field | Description |
| --- | --- |
| `author` | Filter by the author(s) of the article or publication. |
| `awards` | Filter by notable awards or nominations. |
| `brand` | Filter by publishing entity or platform name. |
| `content_rating` | Filter by official content rating. |
| `currency` | Filter by ISO 4217 currency code. |
| `custom_label_0` through `custom_label_4` | Filter by custom label values. |
| `date_published` | Filter by publication date (`YYYY-MM-DD` format). |
| `description` | Filter by item description text. |
| `genre` | Filter by genre such as mystery, biography, or science fiction. |
| `in_language` | Filter by content language (ISO language codes). |
| `name` | Filter by the title of the article or publication. |
| `price_amount` | Filter by the numeric price amount. |
| `publication_category` | Filter by publication format: `Article`, `Ebook`, `Audiobook`, `Blogpost`, `Book`, `Magazine`, `Newspaper`, `Report`, `Whitepaper`, `Journal`, `Newsletter`, or `Other`. |
| `retailer_id` | Filter by the retailer-provided unique identifier. |
| `tags` | Filter by product organization tags. |

For the full list of filter operators, see [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set).

### Read Your Articles and Publications Items

To read articles and publications in your catalog, use any of the following endpoints:

* [Catalog articles and publications](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications/catalog-edge) — list all articles and publications in a catalog
* [Product set articles and publications](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications/product-set-edge) — list articles and publications in a specific product set
* [Feed articles and publications](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications/feed-edge) — list articles and publications from a specific feed
* [Articles and publications details](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications#reading) — read details for an individual article or publication

### Filter Professional Services Into Sets

You can create a set containing only services in a specific category or only certified providers. You can also create a set without any filters, in which case it contains all items in your catalog.

The following fields are available as product set filters:

| Field | Description |
| --- | --- |
| `award` | Filter by notable awards or recognitions. |
| `brand` | Filter by service provider or business name. |
| `currency` | Filter by ISO 4217 currency code. |
| `custom_label_0` through `custom_label_4` | Filter by custom label values. |
| `description` | Filter by item description text. |
| `has_certification` | Filter by professional certifications held. |
| `name` | Filter by the name of the service. |
| `price_amount` | Filter by the numeric price amount. |
| `retailer_id` | Filter by the retailer-provided unique identifier. |
| `service_category` | Filter by the type of service offered. |
| `tags` | Filter by product organization tags. |

For the full list of filter operators, see [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set).

### Read Your Professional Services Items

To read professional services in your catalog, use any of the following endpoints:

* [Catalog professional services](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services/catalog-edge) — list all professional services in a catalog
* [Product set professional services](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services/product-set-edge) — list professional services in a specific product set
* [Feed professional services](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services/feed-edge) — list professional services from a specific feed
* [Professional services details](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services#reading) — read details for an individual service

### Filter Activities Into Sets

You can create a set containing only concerts or only activities from a specific performer. You can also create a set without any filters, in which case it contains all items in your catalog.

The following fields are available as product set filters:

| Field | Description |
| --- | --- |
| activity\_category | Filter by activity type, such as concert, sporting event, or guided tour. |
| activity\_sub\_category | Filter by a more specific categorization, such as football or basketball for sporting events. |
| activity\_date | Filter by scheduled date of the activity. |
| brand | Filter by activity provider, organizer, or seller. |
| currency | Filter by ISO 4217 currency code. |
| custom\_label\_0 through custom\_label\_4 | Filter by custom label values. |
| description | Filter by item description text. |
| in\_language | Filter by language of the content or performance (ISO language codes). |
| location\_name | Filter by venue or location name. |
| name | Filter by the title of the activity. |
| performer | Filter by performers at the event, such as a musician or actor. |
| price\_amount | Filter by the numeric price amount. |
| retailer\_id | Filter by the retailer-provided unique identifier. |
| tags | Filter by product organization tags. |

For the full list of filter operators, see [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set).

### Read Your Activities Items

To read activities in your catalog, use any of the following endpoints:

* [Catalog activities](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/activities/catalog-edge) — list all activities in a catalog
* [Product set activities](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/activities/product-set-edge) — list activities in a specific product set
* [Feed activities](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/activities/feed-edge) — list activities from a specific feed
* [Activity details](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/activities#reading) — read details for an individual activity

## Related Topics

* [Manage Catalog Items](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items)
* [Catalog Item Types](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/catalog-item-types)
* [Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api)
