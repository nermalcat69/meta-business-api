---
title: "Search for a Page"
source_url: https://developers.facebook.com/documentation/pages-api/error-codes
---

# Search for a Page

Updated: Apr 17, 2026

This guide explains how to get information about Facebook Pages including names, locations, and more. Find Pages to [@Mention](https://developers.facebook.com/documentation/pages-api/comments-mentions), Page locations, and tag a Page to show [branded content⁠](https://www.facebook.com/business/help/788160621327601).

## Before You Start

You will need:

* A [User access token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#usertokens) and the [app secret](https://developers.facebook.com/documentation/facebook-login/security#appsecret) if the app user is logged into Facebook.
* An [App access token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens) with the [Page Public Metadata Access](https://developers.facebook.com/docs/apps/features-reference#page-public-metadata-access) feature if the app user is not logged into Facebook and is searching for public Page information.
* An [App access token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens) with the [Page Public Content Access](https://developers.facebook.com/docs/apps/features-reference#page-public-content-access) feature if the app user is not logged into Facebook and is searching Pages to conduct competitve analysis.

### Sample Request

```
curl -i -X GET \
  "https://graph.facebook.com/pages/search?q=Facebook
  &fields=id,name,location,link
  &access_token={access-token}"
```

Returns a list of [Pages](https://developers.facebook.com/docs/graph-api/reference/page) that meet the query's criteria. Set the `q` parameter value to a keyword or search term (e.g. `q=Facebook`). Use the `fields` parameter to list any [fields](https://developers.facebook.com/documentation/pages-api/error-codes#fields) you want included with each Page returned in the response.

### Sample Response

```
{
  "data": [
    {
      "id": "309968765748101",
      "name": "Facebook HQ",
      "location": {
        "city": "Menlo Park",
        "country": "United States",
        "latitude": 37.483183,
        "longitude": -122.149999,
        "state": "CA",
        "street": "1 Hacker Way",
        "zip": "94025"
      },
      "link": "https://www.facebook.com/Facebook-HQ-166793820034304/"
    },
    {
      "id": "194776097220801",
      "name": "Facebook Seattle",
      "location": {
        "city": "Seattle",
        "country": "United States",
        "latitude": 47.628293260721,
        "longitude": -122.34263420105,
        "state": "WA",
        "street": "1101 Dexter Ave N",
        "zip": "98109"
      },
      "link": "https://www.facebook.com/fbseattle/"
    },
    ...
  ]
}
```

## Fields

| Field Name | Description |
| --- | --- |
| `id` *int* | The ID of the Facebook Page. |
| `is_eligible_for_branded_content` *boolean* | Display whether the Facebook Page is eligible to post [branded content⁠](https://www.facebook.com/business/help/788160621327601?id=1912903575666924). |
| `is_unclaimed` *boolean* | Display whether [a Facebook Page that was automatically generated has been claimed⁠](https://business.facebook.com/help/168172433243582) by the business it represents, `is_unclaimed=false`, or not, `is_unclaimed=true`. |
| `link` *uri* | The link to the Facebook Page. |
| `location` *array* | The physical location of the business represented by the Facebook Page, if applicable. |
| ↳ `city` *string* | The city where the business represented by the Facebook Page is located. |
| ↳ `country` *string* | The country where the business represented by the Facebook Page is located. |
| ↳ `latitude` *float* | The latitude of the business represented by the Facebook Page. |
| ↳ `longitude` *float* | The longitude of the business represented by the Facebook Page. |
| ↳ `state` *string* | The state where the business represented by the Facebook Page is located. |
| ↳ `street` *string* | The street on which the business represented by the Facebook Page is located. |
| ↳ `zip` *int* | The postal code of the business represented by the Facebook Page. |
| `name` *string* | The name of the Facebook Page. |
| `verification_status` *string* | The [verification status of the Facebook Page⁠](https://www.facebook.com/help/1288173394636262) that represents a business, `blue_verified` or `not_verified`. |

## Limitations

* The `GET /search?type=place` endpoint is deprecated in v8.0+ and in all versions on Nov. 2, 2020.
* This endpoint does not return a Page's profile picture. Please see the [Page Reference](https://developers.facebook.com/docs/graph-api/reference/page/picture) for information on getting a Page's profile picture.
* Alias-based searches are not strongly supported and might not return pages that have a low fan following.

## Learn More

* [Branded Content Guide](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/branded-content)
* [Getting Started Guide](https://developers.facebook.com/documentation/pages-api)
* [@Mention Guide](https://developers.facebook.com/documentation/pages-api/comments-mentions)
* [Page Locations Reference Doc](https://developers.facebook.com/docs/graph-api/reference/page/locations)
* [Page Reference Doc](https://developers.facebook.com/docs/graph-api/reference/page)
* [Rate Limit Guide](https://developers.facebook.com/docs/graph-api/overview/rate-limiting)
