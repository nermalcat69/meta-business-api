---
title: "Publisher Delivery Reports API"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/brand-safety-and-suitability/passback-api
---

# Publisher Delivery Reports API

Updated: Jun 30, 2026

Delivery reports provide approximate impressions information at the publisher level and the content level. They give greater transparency into where advertisers' ads appeared.

While we apply brand suitability controls as effectively as possible, we can't guarantee that all content and publishers will be compliant or aligned with advertisers' unique brand suitability standards.

During or after a campaign, delivery reports provide approximate publisher impression information for Facebook Pages (in-stream video ads, overlay, and ads on Reels), Instagram accounts (Ads in Instagram profile feed), and Audience Network apps (rewarded videos and native, banner, and interstitial ads).

Additional documentation you can review and/or share with advertisers:

* [About Delivery Reports | Meta Business Help Center⁠](https://business.facebook.com/business/help/1547244292106324?id=1769156093197771)
* [Review Delivery Reports | Meta Business Help Center⁠](https://business.facebook.com/business/help/602174603449509?id=1769156093197771)

## Permissions

* The app requires the `brand_safety_third_party_partners` capability grant.

## FAQ

Q: How to get a list of ad accounts for a business?

A: [Graph API Reference: Business | Ad Accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_accounts)

Q: How to get a list of campaigns for an ad account?

A: [Graph API Reference: Ad Account | Campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/campaigns)

Q: How to get a list of adsets for a campaign?

A: [Graph API Reference: Campaign | Adsets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adsets)

## Parameters

All Publisher Delivery Report (PDR) APIs support a common set of parameters.

| Fields | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| platform | enum | Y |  | Ads reporting platform type. Accepted values are: `audience_network`, `facebook`, `instagram`. |
| position | enum | Y |  | Ads reporting platform position type. Accepted values are: `instream_video`, `facebook_reels_overlay`, `an_classic`, `rewarded_video`. |
| sort\_by | enum |  |  | Sort the result by a field. If omitted, sort the results by `impressions_descending`. Take in exactly one option.   * impressions\_desc - sort by impressions (most to least) * impressions\_asc - sort by impressions (least to most) * url\_desc - sort by url alphabetically (A-Z), ignoring case * url\_asc - sort by url alphabetically (Z-A), ignoring case * name\_desc - sort by name, alphabetically (A-Z) * name\_asc - sort by name alphabetically (Z-A)   Note: Only supported by `an_classic` and `rewarded_video` placements. |
| name\_contains | string |  |  | Filter results that contain the specified substring in the publisher `name` field.   * takes in exactly one option * must be a string * NOT case-sensitive |
| publisher\_status | enum |  | all | The publisher status. This parameter only applies to the instream\_video placement. Accepted values are: all, partner, non\_partner. If omitted, default to all. |
| start\_date | datetime |  | Earliest date available | The start date for the delivery report in the format: YYYY-MM-DD. If both start\_date and end\_date are omitted, then the default value will be used. Default value = today - 29 days. |
| end\_date | datetime |  | Latest date available | The end date for the delivery report in the format: YYYY-MM-DD. If both start\_date and end\_date are omitted, then the default value will be used. Default value = most recent date available. |
| platform | enum | Y |  | Filter results that contain the specified substring in the publisher name field.   * takes in exactly one option * must be a string * NOT case-sensitive |

### Fields

All Publisher Delivery Report (PDR) APIs support a common set of fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| url | string | Y | The URL of the publisher where the ad appeared. |
| name | string | Y | Vanity name of the publisher where the ad. |
| estimated\_impressions\* | integer | Y | Estimated number of users who have interacted with/viewed this ad |
| content\_types | list(enum) | Y | The list of content types. This field only applies to the `instream_video` placement. Possible values are: `vod`, `live`. |
| status | enum | Y | The publisher status. This field only applies to the instream\_video placement. Possible values are: all, partner, non\_partner. |

\*Estimated\_impressions is listed as an "estimated" number of impressions, due to our backend calculating this number semi-real time. It matches what we ultimately show in our own reporting and ads billing.

## Summary

All Publisher Delivery Report (PDR) APIs support a common set of summary fields.

Takes in only true (for example, summary=true), or multiple of the other options (for example, summary=start\_date,end\_date)
true - returns all of the fields listed below.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| start\_date | datetime | Y | Oldest date from which data was gathered for this report |
| end\_date | datetime | Y | Most recent date from which data was gathered for this report. |
| total\_count | integer | Y | Total number of rows in the report. |
| non\_partner\_count | integer | Y | The total count of non partners. This field only applies to the instream\_video and facebook\_reels\_overlay placement. |

## Permission

The app requires ads\_reads permissions.

All API calls must be made with an access token associated with an Admin access level user of your Meta Business Suite account.

## Get a publisher delivery report

### Get the available date range for the report

**Sample Request**

```
GET /publisher_delivery_report_date_ranges  
?platform=facebook  
&position=instream_video  
&fields=start_date,end_date
```

**Sample Response**

```
{  
  "data": [  
    {  
      "start_date": "2022-10-01",  
      "end_date": "2022-10-28"  
    },  
    {  
      "start_date": "2022-09-28",  
      "end_date": "2022-09-30"  
    },  
  ]  
}
```

**Note:** For instream\_video and facebook\_reels\_overlay placements, there could be at most two non-overlapping available date ranges. The date ranges are sorted in reverse chronological order.

### Get an adset level publisher delivery report

**Permissions**

Requires "View Performance" access to the ad account that contains the ad set.

Get an ad set level publisher delivery report for a specific placement and date range. Replace `ad_set_id` with the ad set ID for the report. And ensure the `start_date` and `end_date` are within the available range from above:

**Sample Request**

```
GET /{ad_set_id}/publisher_delivery_report  
?platform=facebook  
&position=instream_video  
&start_date=2022-07-31  
&end_date=2022-08-31  
&fields=url,name,status,content_types,estimated_impressions  
&summary=true
```

**Sample Response**

```
{  
  "data": [  
    {  
      "url": "www.facebook.com/example1",  
      "name": "Acme",  
      "status": "partner",  
      "content_types": [  
        "vod"  
      ],  
      "estimated_impressions": 4823  
    },  
    {  
      "url": "www.facebook.com/example2",  
      "name": "Widgets",  
      "status": "partner",  
      "content_types": [  
        "vod"  
      ],  
      "estimated_impressions": 4241  
    }  
    ...  
  ],  
  ...  
  "summary": {  
    "total_count": 5168,  
    "non_partner_count": 124,  
    "start_date": "2022-07-31",  
    "end_date": "2022-08-31"  
  }  
}
```

## Error codes

See also [Marketing API | Error Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/error-reference)

| Code | Subcode | Description |
| --- | --- | --- |
| 100 |  | Invalid Parameter |
|  | 2349019 | Invalid Platform And Position Parameter Combination. |
|  | 2349020 | Both Start Date And End Date Required. |
|  | 2349022 | Start Date Out Of Range. |
|  | 2349023 | End Date Out Of Range. |
|  | 2349024 | Start Date Or End Date Out Of Range. |
|  | 2349025 | Start Date Must Be Earlier Than End Date. |
| 200 |  | Permissions error. |
| 80011 |  | There have been too many calls to Brand Safety APIs. Wait a bit and try again. |

`fbtrace_id`: Internal support identifier. When reporting a bug related to a Graph API call, include the fbtrace\_id to help us find log data for debugging

## Limits

**[Page Limits](https://developers.facebook.com/docs/graph-api/results)**

| Placement | Default Page Size | Maximum Page Size |
| --- | --- | --- |
| `an_classic`  `rewarded_video` | 25 | 5000 |
| `instream_video`  `facebook_reels_overlay` | 100 | Not configurable. |

**[Rate Limits](https://developers.facebook.com/docs/graph-api/overview/rate-limiting)**

The following rate limits apply at the product-level, meaning all Publisher List endpoints collectively. Relative quota usage per resource is returned in the `x-business-use-case-usage` response header for every request.

* Maximum call count per hour: 144K calls.

## Additional useful documentation

[Graph API - Overview](https://developers.facebook.com/docs/graph-api/overview)

For a user-friendly, interactive UI, try out [Meta's Graph API Explorer](https://developers.facebook.com/tools/explorer/)

[Marketing API | Best Practices](https://developers.facebook.com/documentation/ads-commerce/marketing-api/best-practices)

[Marketing API | Authorization](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization)

[API Changelog | Developer Doc](https://developers.facebook.com/docs/graph-api/changelog)

[System Users | Developer Doc](https://developers.facebook.com/docs/marketing-api/system-users#generate-token)

[Access Tokens | Developer Doc](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens)
