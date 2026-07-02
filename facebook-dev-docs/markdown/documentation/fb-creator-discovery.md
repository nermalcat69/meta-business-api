---
title: "Facebook Creator Discovery API"
source_url: https://developers.facebook.com/documentation/fb-creator-discovery
---

# Facebook Creator Discovery API

Updated: Apr 30, 2026

The Facebook Creator Discovery API offers robust data-driven discovery for Facebook's creator ecosystem to help brands find the right creators for their [partnership ads⁠](https://www.facebook.com/business/help/342728904797642) campaigns. Brands can evaluate creators for partnership ads using authenticated, real-time 1st party data.

## Getting Started

### Prerequisites

* In order to use these APIs, you must ask users to grant permissions to your app, on behalf of the brands they are admins of, using Facebook Login.
* Required permissions:
  * `facebook_creator_marketplace_discovery`
  * `pages_show_list`
* When a brand admin initiates Facebook Login, Meta will check the brands' eligibility for Facebook Creator Discovery. If a brand is eligible but has not yet onboarded, the admin will be prompted to accept the [Facebook Creator Discovery Terms of Service⁠](https://www.facebook.com/legal/Branded-Content-Discovery-Terms-for-Brands) to complete onboarding.

**IMPORTANT**  
  
To request these permissions from all users, your app must be a [Business](https://developers.facebook.com/documentation/development/create-an-app/app-dashboard/app-types#business) type app and both permissions must be approved for [Advanced Access](https://developers.facebook.com/docs/graph-api/overview/access-levels#advanced-access) through the [App Review](https://developers.facebook.com/documentation/resp-plat-initiatives/individual-processes/app-review) process. Permissions with [Standard Access](https://developers.facebook.com/docs/graph-api/overview/access-levels#standard-access) can only be requested from app users who have a role on the requesting app, enabling you to submit the required [App Review](https://developers.facebook.com/documentation/resp-plat-initiatives/individual-processes/app-review) implementation evidence.
  
  
Apps with [Standard Access](https://developers.facebook.com/docs/graph-api/overview/access-levels#standard-access) to the `facebook_creator_marketplace_discovery` permission will only receive simulated (mocked) creator data when making API queries.
To obtain real creator data, you must submit an [App Review](https://developers.facebook.com/documentation/resp-plat-initiatives/individual-processes/app-review) request and receive [Advanced Access](https://developers.facebook.com/docs/graph-api/overview/access-levels#advanced-access) approval for the `facebook_creator_marketplace_discovery` permission.

### Authentication & Access Tokens

* Use a [Page Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#pagetokens) for API calls:

```
curl -i -X GET "https://graph.facebook.com/creator_marketplace/creators/...&access_token={page_access_token}"
```

```
curl -i -X GET "https://graph.facebook.com/creator_marketplace/content/...&access_token={page_access_token}"
```

* To get a [Page Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#pagetokens):

* Authenticate as a User: Log in with Facebook Login and obtain a [User Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens) with the required permissions.
* Request the [Page Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#pagetokens): Use the User Access Token to call the `/me/accounts` endpoint of the Graph API. This will return a list of Pages the user manages, each with its own [Page Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#pagetokens).
* Use the Token: Use the [Page Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#pagetokens) in your Facebook Creator Discovery API requests.
* Leverage the [Graph API Explorer](https://developers.facebook.com/tools/explorer) for testing. Follow the [Get started](https://developers.facebook.com/docs/graph-api/get-started) guide to learn more.

### Rate Limits

The Facebook Creator Discovery API enforces rate limits at both the Facebook account level and the application level.

* **Account-level:** Requests are capped at `2000` per user per rolling one-hour window
* **Application-level:** Requests are capped at `10000` per app per rolling one-hour window

### Pagination

| Parameter | Data Type | Description |
| --- | --- | --- |
| `limit` | integer | The number of results per page.  Default Value: `10`  Maximum Value: `50` |
| `before` | string | Cursor identifier used to fetch results that come before a specific reference point in the data. The value of a cursor identifier can be obtained from a previous successful query response. |
| `after` | string | Cursor identifier used to fetch results that come after a specific reference point in the data. The value of a cursor identifier can be obtained from a previous successful query response. |

## Creators Endpoint

* The Creators endpoint offers insights about creator profile information, content engagement data, and audience demographics.
* For Creators to be discoverable through search, they must have opted-in to data sharing.
* There may be a slight delay between filter values and real-time data.

### Sample Requests

* Retrieve insights about a creator's profile, engagement, and audience:

```
GET /creator_marketplace/creators?creator_id={creator-id}&fields=creator_alias,creator_bio,...
```

* Find creators using flexible filters and search criteria:

```
GET /creator_marketplace/creators?creator_categories={creator_category}&creator_countries={country_code}&query={query}
```

### Parameters

Filter values are not case-sensitive.

| Parameter | Data Type | Description |
| --- | --- | --- |
| `creator_id` | string | The public profile or page id or alias of the creator.  Examples: `Meta` or `100044413150303` |
| `limit` | int | The number of creators per page Default Value: `10` Maximum Value: `50` |
| `query` | string | Free-form semantic text input (keywords/ categories) to help search for Creators whose content is similar to the input query. Accepts single words or even multi word phrases. Responses will be prioritized with creators with recent contents that are relevant to the input.  Examples: `disney`, `basketball shoes`, `tech gadgets`  **Note:** This is a recommended parameter for discovery over `creator_categories` |
| `sort_by` | string | The descending sort order of search results.  **Values:**  `followers`, `relevance` (default)  **Note:** does not apply to semantic search (any search using `?query=..`) since that is sorted by relevance only |
| `creator_categories` | array[string] | The self-selected category of the creator. Supports multiple comma separated categories.  **Note:** While this is not an exhaustive list of creator categories, they cover the vast majority of them.  **Values:**  `digital_creator`, `video_creator`, `artist`, `comedian`, `activity_general`, `entrepreneur`, `personal_blog`, `blogger`, `bands_musicians`, `person`, `athlete`, `gaming_video_creator`, `chef` |
| `creator_interests` | array[string] | The predicted interests of the creator. Allows searching against the hierarchy from top-level interest to subinterest to sub-subinterest (if available).  **Note:** Coverage is currently limited, so not every creator will be filterable by this filter.  **Values:**  see [Available Interests](https://developers.facebook.com/documentation/fb-creator-discovery#available-interests) for valid values |
| `creator_countries` | array[string] | [ISO 3166-1 alpha-2⁠](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the creator. Supports multiple comma separated countries.  **Values:**  `US`, `CA`, `GB`, `AR`, `AU`, `BR`, `DE`, `ES`, `FR`, `ID`, `IL`, `IN`, `JP`, `KR`, `MX`, `NL`, `NZ`, `TR` |
| `major_audience_age_bucket` | string | The age group of most followers.  **Values:**  `18-24`, `25-34`, `35-44`, `45-54`, `55-64`, and `65_and_above` |
| `major_audience_gender` | string | The gender of most followers.  **Values:**  `male` and `female` |
| `major_audience_country` | array[string] | [ISO 3166-1 alpha-2⁠](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of most followers. |
| `follower_count` | JSON | Creator follower count filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |
| `interaction_rate` | JSON | Creator interaction rate filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#creators-metric-search-filters) for more detail. |
| `reach` | JSON | Creator reach filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#creators-metric-search-filters) for more details. |
| `interactions` | JSON | Creator interactions filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#creators-metric-search-filters) for more details. |
| `publishing_activity` | JSON | Creator publishing activity filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#creators-metric-search-filters) for more details. |
| `views` | JSON | Creator views filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#creators-metric-search-filters) for more details. |
| `creator_languages` | array[string] | [ISO 639-1⁠](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code of creator languages.  Examples: `en`, `es` |
| `past_partnerships` | array[string] | Partner(s) tagged by the creator in their posts. This includes organic posts and partnerships ads.  Example: `J.crew Factory`  **Note:** We support partial string matches, e.g. `adida` also returns `adidas`. |
| `has_past_partnerships` | bool | True if the creator has tagged partner pages through organic posts or partnerships ads.  **Values:**  `true`, `false`, `0`, `1` |

#### Metric Search Filters

Format:

```
{min:<number>,max:<number>,time_range:"<string>",breakdown:"<string>"}
```

Sample queries:

```
creator_marketplace/creators?reach={min:1,max:50,time_range:"L28",breakdown:"follower"}
```

```
creator_marketplace/creators?interaction_rate={min:1.5,time_range:"L14"}
```

Please remember to use **quotations ("")** on subparameter values (e.g. `breakdown:"follower"`).

##### Subparameters

| Parameter | Data Type | Description |
| --- | --- | --- |
| `min`  *Optional if max given* | Number (int or float) | The minimum value of the metric to filter for. |
| `max`*Optional if min given* | Number (int or float) | The maximum value of metric to filter for. |
| `time_range`*Optional* | String (see "[Available Lookback and Breakdown Types](https://developers.facebook.com/documentation/fb-creator-discovery#available-lookback-and-breakdown-types)" for available input) | The time range value of metric to filter for. |
| `breakdown`*Optional* | String (see "[Available Lookback and Breakdown Types](https://developers.facebook.com/documentation/fb-creator-discovery#available-lookback-and-breakdown-types)" for available input) | The breakdown value of metric to filter for. |

##### Available Lookback and Breakdown Types

"L" stands for "Last", so anywhere you see **L** followed by a number **x**, it stands for the **last x** days. For example, `L90` is equivalent to "last 90 days".

| Metric | Supported `time_range` (default: `L28`) | Supported `breakdown` |
| --- | --- | --- |
| `reach` | `L1`, `L7`, `L14`, `L28`, `L90`. | `overall`, `follower`, `non_follower` |
| `interactions` | `L1`, `L7`, `L14`, `L28`, `L90`. | `overall`, `follower`, `non_follower` |
| `publishing_activity` | `L1`, `L7`, `L14`, `L28`, `L90`. | `overall`, `follower`, `non_follower` |
| `views` | `L1`, `L7`, `L14`, `L28`, `L90`. | `overall`, `follower`, `non_follower`, `reels`, `videos`, `photos`, `story`, `links`, `multi_photo`, `multi_media`, `live`, `text` |
| `interaction_rate` | `L7`, `L14`, `L28` | `overall` |
| `follower_count` | N/A | N/A |

### Response Fields

By default, all response fields are hidden except for `creator_id` if no fields are specified. To receive additional fields in your response, you must explicitly request them using the `fields=...` parameter.

When querying by `creator_id`, if the creator has been invited but has not yet onboarded to the program, the response may include only a subset of fields.

| Field | Data Type | Description |
| --- | --- | --- |
| `creator_id` | string | Creator's profile id |
| `creator_display_name` | string | Name of profile or page |
| `creator_alias` | string | Creator's alias |
| `creator_bio` | string | Creator's self-provided intro bio on their profile |
| `creator_profile_url` | url | Creator's profile link |
| `creator_profile_image_url` | url | Creator's profile image link  Disclaimer: this url has temporary retention. |
| `creator_cover_photo_url` | url | Creator's profile cover photo link  Disclaimer: this url has temporary retention. |
| `recent_content` | array[Content response] | List of public content made by the creator in `L28` (by default). Time ranges: `L1`, `L7`, `L14`, `L28`, `L90`  Capped at 90 posts or at `limit` if provided. Append `.limit({number})` e.g. `&fields=recent_content.limit(3)` to only fetch 3 most recent posts.  **Note:** Prefer using the Content Insights API and filter by `creator_id`. |
| `creator_follower_count` | number | Creator's follower count |
| `creator_categories` | array[string] | The self-selected category of the creator. Supports multiple comma separated categories.  **Note:** This is not an exhaustive list of categories. While this is not an exhaustive list of creator categories, they cover the vast majority of them.  **Values:**  `digital_creator`, `video_creator`, `artist`, `comedian`, `activity_general`, `entrepreneur`, `personal_blog`, `blogger`, `bands_musicians`, `person`, `athlete`, `gaming_video_creator`, `chef` |
| `creator_interests` | array[string] | Filter creators based on category list input. See the "[Available Interests](https://developers.facebook.com/documentation/fb-creator-discovery#available-interests)" table for supported values. |
| `creator_email` | string | Creator's email, if available. |
| `creator_gender` | string | Creator's gender, if available. |
| `creator_age_bucket` | string | Age bucket of the creator. Respects creator's FB privacy settings; only available if creator is already sharing their birthday and birth year publicly on Facebook. Otherwise, this field will not be included in the response.  **Values:** `18-24`, `25-34`, `35-44`, `45-54`, `55-64`, `65+`, if available  **Note:** Coverage is currently limited, so not every creator will have this field. |
| `creator_country` | string | [ISO 3166-1 alpha-2⁠](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for the country in which the creator is based.  Examples: `US`, `CA` |
| `creator_languages` | array[string] | [ISO 639-1⁠](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code of creator languages.  Examples: `en`, `es` |
| `past_partnerships` | array[string] | Partner(s) tagged by the creator in their posts. This includes organic posts and partnerships ads.  **Note:** Creators can tag brands themselves, which does not necessarily imply brand endorsement. |
| `insights` | JSON, see [Creator Insights Metrics](https://developers.facebook.com/documentation/fb-creator-discovery#creator-insights-metrics) section | Collection of creator-level metrics data |

### Creator Insights Metrics

Insights are included as a field (`insights`) within the Creator endpoint above. This field offers additional customizability with input parameters of its own.

These values are [estimated⁠](https://www.facebook.com/business/help/metrics-labeling) and updated daily. The time zone will be determined by the user's local time zone, or if unavailable, it will default to Pacific Time (Los Angeles).

#### Sample Request

```
GET /creator_marketplace/creators?creator_id={creator-id}&fields=insights.metrics().period().time_range()
```

#### Parameters

| Parameter | Data Type | Description | Defaults (no param input) |
| --- | --- | --- | --- |
| `metrics`*Required* | enum, or comma separated list | List of queryable metrics. See "[Available Metrics](https://developers.facebook.com/documentation/fb-creator-discovery#available-creator-metrics)" table below. | No default. See "[Available Metrics](https://developers.facebook.com/documentation/fb-creator-discovery#available-creator-metrics)" table below. |
| `period` | enum | The interval to break the result into: `day` or `overall`; `day` would mean daily time series. | `overall` |
| `time_range` | enum | Supported time ranges: `L1`, `L7`, `L14`, `L28`, `L90`, `lifetime`. | `L28` is the default, except for followers-metrics which default to `lifetime`. |

#### Response Fields

| Field | Data Type | Description |
| --- | --- | --- |
| `name` | enum | Name of the metric |
| `period` | enum | Period for the metric query. Either `day` or `overall`. Most default to `overall`. |
| `time_range` | enum | Available values: `L1`, `L7`, `L14`, `L28`, `L90`, `lifetime`. |
| `values` | array[JSON] | Array of `value` or `value_with_breakdown` objects, depending on the type of metric. If the query is for `overall` period, then this array is length 1. Otherwise, the length of this field will match time\_range. |
| `value` *(potential field within values)* | number | The actual numeric result for the metric query. Can either represent a total over the time range or a single day's value. |
| `value_with_breakdown` *(potential field within values)* | JSON | A dictionary of breakdown to actual numeric result for that breakdown. Currently only represents a total over the time range. |

#### Available Metrics

| Values for `metrics` field | Supported period(s) | Supported time\_range(s) | Description |
| --- | --- | --- | --- |
| `creator_views` | `overall`, `day` | `L1`, `L7`, `L14`, `L28`, `L90` | The number of times the creator's content was played or displayed for at least 1ms. Content includes reels, videos, posts, stories and ads. |
| `creator_views_by_followers` | `overall` | `L1`, `L7`, `L14`, `L28`, `L90` | The number of times the creator's content was played or displayed. Content includes reels, videos, posts, stories, and ads. Views are presented as a percentage breakdown based on follower status.  Type of follower includes: `follower`, `non_follower`. |
| `creator_views_by_content_type` | `overall` | `L1`, `L7`, `L14`, `L28`, `L90` | The number of times the creator's content was played or displayed for at least 1ms. Content includes reels, videos, posts, stories, and ads. Views are a percentage breakdown by content type.  **Content types:**  `reels`, `videos`, `photos`, `story`, `links`, `multi_photo`, `multi_media`, `live`, `text` |
| `publishing_activity` | `overall`, `day` | `L1`, `L7`, `L14`, `L28`, `L90` | The total number of text, photo reels and stories published by the creator on Facebook in the specified time frame. This includes deleted posts.  **Note:** for the overall period, values are updated once per day. |
| `publishing_activity_by_content_type` | `overall` | `L1`, `L7`, `L14`, `L28`, `L90` | The total number of text, photo reels and stories published by the creator on Facebook in the specified time frame. Displayed as a percentage breakdown of content type, including deleted posts.  Type of content includes: `reels, videos, photos, story, links, multi_photo, multi_media, live, text` |
| `creator_interaction_rate` | `overall` | `L1`, `L7`, `L14`, `L28`, `L90` | Percentage of post net interactions (reactions, shares, comments, saves) divided by post views, averaged across all public content in the selected period. This metric is [estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `creator_reach` | `overall`, `day` | `L1`, `L7`, `L14`, `L28`, `L90` | Counts unique reach from organic, paid, and other sources (e.g., tags, check-ins, profile visits), including boosted content. This metric is estimated. |
| `creator_reach_by_followers` | `overall` | `L1`, `L7`, `L14`, `L28`, `L90` | Percentage breakdown of reach by follower status. Reach is de-duplicated across organic and paid distribution.  Types of follower include: `follower, non_follower` |
| `creator_interactions` | `overall`, `day` | `L1`, `L7`, `L14`, `L28`, `L90` | The number of reactions, saves, comments, shares and replies on this content. Content can include formats such as posts, stories and more. |
| `creator_interactions_by_followers` | `overall` | `L1`, `L7`, `L14`, `L28`, `L90` | Percentage breakdown of interactions by follower status.  Type of follower includes: follower, non\_follower |
| `followers_genders` | `overall` | `lifetime` | The gender distribution of the creator's followers. |
| `followers_age_genders` | `overall` | `lifetime` | The age and gender distribution of the creator's followers.  **Note:** limit to 10 cities by default. |
| `followers_top_countries` | `overall` | `lifetime` | Audience concentration by country. Countries are returned in [ISO 3166-1 alpha-2⁠](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code format.  **Note:** limited to top 10 countries. |
| `followers_top_cities` | `overall` | `lifetime` | Audience concentration by city. |

### Error Codes

| error\_subcode | error\_user\_title | error\_user\_msg |
| --- | --- | --- |
| `3961010` | Could not load creator | The provided creator ID is invalid. |
| `3961015` | Creator not invited | Creator has not been invited yet. |
| `3961014` | Ineligible creator | Creator does not meet the criteria to join this program. |
| `10` | N/A | Data unavailable: Creator is not onboarded to Creator Marketplace insights sharing |
| `3961016` | Invalid metric type | Invalid metrics: check for typos or incorrect endpoint usage. |
| `3961017` | Invalid period type | The requested period type is not supported for one or more of the metric(s) |
| `3961018` | Invalid time range type | The requested time range type is not supported for one or more of the metric(s) |
| `3961019` | Invalid content type | The requested metrics have an unsupported content type. |
| `3961021` | Invalid value | The filter value {value} for {key} is not supported. Please refer to documentation. |
| `3961022` | Min Follower Count Greater Than Max Follower Count | Min follower count is greater than max follower count. Please make sure the min follower count is less than or equal to max follower count. |
| `3961024` | Invalid time range value | The time range value {value} for {key} is not supported. Current supported time range values are {supported\_time\_range\_values}. Please refer to documentation. |
| `3961025` | Invalid min or max value | Invalid input range for {filter\_key}. Please ensure both minimum and maximum values are non-negative and that the minimum value is less than or equal to the maximum value. |

### Examples

*Get creator insights on two metrics*

```
GET /creator_marketplace/creators?creator_id={creator-id}&fields=insights.metrics(creator_reach,creator_interactions)
```

*Get daily time series*

```
GET /creator_marketplace/creators?creator_id={creator-id}&fields=insights.metrics(creator_reach).period(day)
```

*Get overall values with selected time range*

```
GET /creator_marketplace/creators?creator_id={creator-id}&fields=insights.metrics(creator_reach).time_range(L90)
```

*Get 3 most recent content* (**Note:** prefer using the Content Endpoint and filter by `creator_id` and `limit`)

```
GET /creator_marketplace/creators?creator_id={creator-id}&fields=recent_content.limit(3)
```

*Search for all creators in the US and limit 10 per page*

```
GET /creator_marketplace/creators?creator_countries=US&limit=10
```

*Search for creators that are related to Disney (limited to basic fields)*

```
GET /creator_marketplace/creators?fields=creator_display_name,creator_bio,creator_profile_url,creator_follower_count,creator_onboarding_status,creator_categories&query=Disney
```

*Search creators with creator reach of 100-5000 over the past 28 days.*

```
GET /creator_marketplace/creators?reach={min:100,max:5000,time_range:"L28"}
```

*Search creators with a followers percentage on creator reach of 1-50% over the past 14 days.*

```
GET creator_marketplace/creators?reach={min:1,max:50,time_range:"L14",breakdown:"follower"}
```

*Search for creators with a minimum of 100,000 followers*

```
GET /creator_marketplace/creators?follower_count={min:100000}
```

*Search for creators who are producing contents related to "cookies", are from the US or CA, and have a minimum of 100,000 followers and a maximum of 1,000,000 followers.*

```
GET /creator_marketplace/creators?query=cookies&creator_countries=US,CA&follower_count={min:100000,max:1000000}
```

*Search for creators from US, and major audience age in the group 25-34, and major audience gender is female*

```
GET /creator_marketplace/creators?creator_countries=US&major_audience_age_bucket=25-34&major_audience_gender=female
```

### Available Interests

Not all interests are covered, and results may be limited with increased query specificity level.

| Level 1 | Level 2 | Level 3 | Level 4 |
| --- | --- | --- | --- |
| `FASHION_AND_STYLE` |  |  |  |
| ↳ | `FASHION` | `CLOTHING_AND_ACCESSORIES`  `FOOTWEAR` |  |
| ↳ | `BEAUTY` | `HAIR_AND_HAIR_CARE`  `NAILS_AND_NAIL_CARE` | `HAIRSTYLES_AND_TRENDS` |
| `ANIMALS_AND_PETS` |  |  |  |
| ↳ | `ANIMALS` | `MAMMALS`  `BIRDS` |  |
| ↳ | `PETS` | `DOGS`  `CATS` |  |
| `VEHICLES_AND_TRANSPORTATION` |  |  |  |
| ↳ | `GROUND_TRANSPORTATION` | `CARS_AND_TRUCKS` | `CARS`  `CAR_CULTURE_AND_DRIVING` |
| ↳ |  | `AVIATION`  `HEAVY_MACHINERY_VEHICLES`  `MOTORSPORTS`  `VEHICLES_AND_TRANSPORTATION_INDUSTRY` |  |
| `TRAVEL_AND_LEISURE_ACTIVITIES` |  |  |  |
| ↳ | `TRAVEL_DESTINATIONS` | `TRAVEL_AND_TOURISM_IN_THE_AMERICAS`  `TRAVEL_AND_TOURISM_IN_EUROPE` |  |
| ↳ | `VACATION_AND_LEISURE_ACTIVITIES` | `TOURIST_ATTRACTIONS` |  |
| `VISUAL_ARTS_ARCHITECTURE_AND_CRAFTS` | `VISUAL_ARTS`  `CRAFTS` |  |  |
| `FOOD_AND_DRINK` |  |  |  |
| ↳ | `FOODS` | `DESSERTS_AND_SWEETS`  `PRODUCE`  `BAKED_GOODS`  `MEATS_AND_SEAFOOD`  `PREPARED_FOODS_AND_DISHES` | `CAKES` |
| ↳ | `DRINKS` | `NON_ALCOHOLIC_BEVERAGES` | `COFFEE_DRINKS` |
| `SPORTS` |  |  |  |
| ↳ | `COMBAT_SPORTS`  `BASKETBALL`  `FOOTBALL_AMERICAN`  `FOOTBALL_SOCCER`  `FISHING`  `GOLF` | `WRESTLING` |  |
| `PERFORMING_ARTS` | `COMEDY`  `DANCE` | `STAND_UP_COMEDY` |  |
| `HOME_AND_GARDEN` |  |  |  |
| ↳ | `HORTICULTURE_AND_GARDENING`  `HOME_RENOVATION_AND_CONSTRUCTION`  `HOUSEHOLD_MANAGEMENT`  `INTERIOR_DESIGN`  `FURNITURE_APPLIANCES_AND_HOME_FUNISHINGS` | `GARDENING_AND_LANDSCAPING` |  |
| `MUSIC_AND_AUDIO` | `PODCASTS_AND_RADIO`  `MUSICAL_INSTRUMENTS`  `MUSICAL_PERFORMANCES` | `PODCASTS` |  |
| `BUSINESS_FINANCE_AND_ECONOMICS` |  |  |  |
| `GAMES_PUZZLES_AND_PLAY` | `TOYS`  `VIDEO_GAMES` |  |  |
| `TV_AND_MOVIES` | `TV_AND_MOVIES_CELEBRITIES` |  |  |
| `SCIENCE_AND_TECH` | `TECHNOLOGY` |  |  |

## Content Endpoint

* The Content endpoint offers detailed content insights and supports searching for Creator content using various filters and sorting methods.
* For a post to be discoverable it must be a public post.
* Non-Branded Content data is shared with all agencies/brands; Branded Content data is shared only with the sponsor Brand. In this API, Branded Content data is accessible with a page access token from that Brand.
* Applied filters display results only for creators who have consented to data sharing.
* There may be a slight delay between filter values and real-time data.

### Sample Requests

*Retrieve insights about a post*

```
GET /creator_marketplace/content?content_id={content-id}
```

*Find Creator content using flexible filters and search criteria*

```
GET /creator_marketplace/content?creator_id={creator-id}
```

```
GET /creator_marketplace/content?reach={min:min-reach,max:max-reach}&sort_by=reactions&time_range={time-range}&content_type=reels
```

### Parameters

| Parameter | Data Type | Description |
| --- | --- | --- |
| `content_id` | string | ID of the Facebook Content (this is either the numeric ID or encoded string from a URL, both will work)  Example: `https://www.facebook.com/Meta/videos/886117876817680`  `https://www.facebook.com/Meta/posts/pfbid0zKakkLboMfE8tavYn8yfbunmPM9KAFKmmGuZTTFo62RDMDu2tPV9ctUfiXNbsGcal` |
| `creator_id` | array[string] | The public profile or page ID or alias of the content creator. Supports multiple comma-separated IDs.  E.g. `Meta` or `100044413150303` |
| `sort_by` | string | The descending sort order of search results.  **Values:**  `create_time` (default), `clicks`, `comments`, `interactions`, `reach`, `reactions`, `shares`, `views` |
| `start_date` | string | The start date (inclusive) for the publish time of the content you want to retrieve, in YYYY-MM-DD format.  **Note:** invited if `creator_id` filter is set |
| `end_date` | string | The end date (inclusive) for the publish time of the content you want to retrieve, in YYYY-MM-DD format.  **Note:** invited if `creator_id` filter is set |
| `time_range` | string | A preset time range for the query. Use this instead of `start_date`/`end_date` for convenience.  **Values:**  `L1` (today), `L7`, `L14`, `L28`, `L90` |
| `content_type` | string | The type of content to filter by, case-insensitive. If not specified, all content types are included.  **Values:**  `LINKS`, `LIVE`, `PHOTOS`, `REELS`, `TEXT`, `VIDEOS` |
| `views` | JSON | Content views filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |
| `reach` | JSON | Content reach filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |
| `interactions` | JSON | Content interactions filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |
| `reactions` | JSON | Content reactions filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |
| `comments` | JSON | Content comments filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |
| `shares` | JSON | Content shares filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |
| `clicks` | JSON | Content clicks filter with subparameters, see [Metric Search Filters](https://developers.facebook.com/documentation/fb-creator-discovery#content-metric-search-filters) for more details. |

#### Metric Search Filters

Format:

```
{min:<number>,max:<number>}
```

Sample queries:

```
creator_marketplace/content?reach={min:1,max:50}
```

```
creator_marketplace/content?reactions={min:1,max:50}&comments={min:2}
```

##### Subparameters

| Parameter | Data Type | Description |
| --- | --- | --- |
| `min`  *Optional if max given* | Number (int or float) | The minimum value of the metric to filter for. |
| `max`*Optional if min given* | Number (int or float) | The maximum value of metric to filter for. |

### Response Fields

The time zone will be determined by the user's local time zone, or if unavailable, it will default to Pacific Time (Los Angeles).

When querying by `content_id`, if the creator has been invited but has not yet onboarded to the program, the response may include only a subset of fields.

| Field | Data Type | Description |
| --- | --- | --- |
| `content_id` | string | ID of the content, number or encoded string |
| `creator_id` | string | ID of the creator |
| `content_type` | string | The type of the content. Examples: `REELS`, `VIDEOS`, `PHOTOS`, `TEXT`, `LINKS`  **Note:** the pluralization for REELS, VIDEOS, TEXT is intentional. A post can be multimedia. |
| `create_time` | ISO 8601 string | The publish time of the content. Represented as a date time in ISO 8601 format. |
| `tagged_brand` | string | If the content tagged a business partner (sponsor), show the name of the sponsor's Facebook page |
| `content_url` | url | The publicly accessible URL of the content |
| `content_thumbnail_url` | url | URL linking to picture of content thumbnail  Disclaimer: this url has temporary retention. |
| `caption` | string | Creator-generated text in the post. |
| `insights` | JSON, see [Content Insights Metrics](https://developers.facebook.com/documentation/fb-creator-discovery#content-insights-metrics) section | Collection of content-level metrics data |
| `comments` | array[Comment response] | List of comments received on a post ranked by reactions count descending.  **Note:** Comments count are capped at 10 and potential integrity concerns are hidden. "Reactions" include like, love, laugh, etc. |

### Content Insights Metrics

Insights are included as a field (`insights`) within the Content endpoint above. This field offers additional customizability with input parameters of its own.

These values are [estimated⁠](https://www.facebook.com/business/help/metrics-labeling) and updated daily. The time zone will be determined by the user's local time zone, or if unavailable, it will default to Pacific Time (Los Angeles).

#### Parameters

| Parameter | Data Type | Description | Defaults (no param input) |
| --- | --- | --- | --- |
| `metrics`*Required* | enum, or comma separated list | List of queryable metrics. See "[Available Metrics](https://developers.facebook.com/documentation/fb-creator-discovery#available-content-metrics)" table below. | No default. See "[Available Metrics](https://developers.facebook.com/documentation/fb-creator-discovery#available-content-metrics)" table below. |
| `period` | enum | The interval to break the result into: `day` or `overall`; `day` would mean daily time series. | `overall` |
| `time_range` | enum | Supported time ranges: `L1`, `L7`, `L14`, `L28`, `L90`, `lifetime`. | `L28` is the default, except for followers-metrics which default to `lifetime`. |

#### Response Fields

| Field | Data Type | Description |
| --- | --- | --- |
| `name` | enum | Name of the metric |
| `period` | enum | Period for the metric query. Either `day` or `overall`. Most default to `overall`. |
| `time_range` | enum | Available values: `L1`, `L7`, `L14`, `L28`, `L90`, `lifetime`. |
| `values` | array[JSON] | Array of `value` or `value_with_breakdown` objects, depending on the type of metric. If the query is for `overall` period, then this array is length 1. Otherwise, the length of this field will match time\_range. |
| `value` *(potential field within values)* | number | The actual numeric result for the metric query. Can either represent a total over the time range or a single day's value. |
| `value_with_breakdown` *(potential field within values)* | JSON | A dictionary of breakdown to actual numeric result for that breakdown. Currently only represents a total over the time range. |

#### Available Metrics

| Values for `metrics` field | Supported period(s) | Supported time\_range(s) | Description |
| --- | --- | --- | --- |
| `reach` | `overall` | `lifetime` | The number of people who saw this content at least once. Reach is different from impressions, which may include multiple views of your content by the same people. |
| `reach_by_followers_and_non_followers` | `overall` | `lifetime` | Reach: The de-duplicated number of people who saw this content at least once.  Followers: % of followers that have reached this content.  Non-followers: % of non-followers that have reached this content. |
| `views` | `overall` | `lifetime` | The number of times this content was played or displayed for at least 1ms or the number of times the creator's photo or text was on screen. |
| `views_by_followers_and_non_followers` | `overall` | `lifetime` | Views are displayed as a percentage-based breakdown of views by whether the account that saw the content is a follower or not. |
| `views_by_paid_organic` | `overall` | `lifetime` | Views are displayed as a percentage-based breakdown of views by whether the viewer saw the creator's content organically or through ads. |
| `clicks` | `overall` | `lifetime` | The number of clicks on this post. |
| `interactions` | `overall` | `lifetime` | The number of reactions, comments, shares and saves on this post. |
| `reactions` | `overall` | `lifetime` | The number of reactions on this post. |
| `reactions_by_paid_organic` | `overall` | `lifetime` | Displayed as a percentage-based breakdown of reactions by whether the viewer saw the creator's content organically or through ads. |
| `comments` | `overall` | `lifetime` | The number of comments on this post. |
| `comments_by_paid_organic` | `overall` | `lifetime` | Displayed as a percentage-based breakdown of comments by whether the viewer saw the creator's content organically or through ads. |
| `shares` | `overall` | `lifetime` | The number of shares on this post. |
| `shares_by_paid_organic` | `overall` | `lifetime` | Displayed as a percentage-based breakdown of shares by whether the viewer saw the creator's content organically or through ads. |
| `saves` | `overall` | `lifetime` | The number of saves on this post. |
| `saves_by_paid_organic` | `overall` | `lifetime` | Displayed as a percentage-based breakdown of saves by whether the viewer saw the creator's content organically or through ads. |

### Content Comments

Comments are included as a field (`comments`) within the Content endpoint above.

#### Response Fields

| Field | Data Type | Description |
| --- | --- | --- |
| `comment_id` | string | ID of the comment. |
| `comment_text` | string | Text associated by comment body text.  **Note:**  `comment_text` is empty when there is not text included in the comment (i.e. stickers, GIFs, etc). |
| `comment_url` | url | url linking to specified comment on the post.  **Note:** Only post format is supported currently while Reels url will link to the reel itself. |

### Error Codes

| error\_subcode | error\_user\_title | error\_user\_msg |
| --- | --- | --- |
| `3961009` | Could not load content | The provided content ID is invalid or you do not have permission to access it. Please ensure that the content is public. |
| `3961015` | Creator not invited | The creator has not been invited yet. |
| `3961014` | Ineligible creator | The creator does not meet the criteria to join this program. |
| `3961024` | Invalid time range value | The time range value is not supported. |
| `3961025` | Invalid min or max value | Invalid input range for {filter-key}. Please ensure both minimum and maximum values are non-negative and that the minimum value is less than or equal to the maximum value. |
| `3961026` | Content ID filter can't be used with other filter parameters | The `content_id` filter can't be used with other filter parameters. |
| `3961027` | At least one filter is required | At least one filter is required for this query to search for valid results. |
| `3961028` | Invalid time range query | You can't use start/end date filters together with the time range filter. Please refer to documentation. |
| `10` | N/A | Data unavailable: Creator is not onboarded to Creator Marketplace insights sharing |
| `3961016` | Invalid metric type | One or more of the requested metrics are invalid. There may be a typo, or you are trying to request content metrics for the creator endpoint, or vice versa. |
| `3961017` | Invalid period type | The requested period type is not supported for one or more of the metric(s) |
| `3961018` | Invalid time range type | The requested time range type is not supported for one or more of the metric(s) |
| `3961019` | Invalid content type | The requested metrics have an unsupported content type. |

### Examples

*Get multiple metrics insights for a post*

```
GET /creator_marketplace/content?content_id={content-id}&fields=insights.metrics(reach,views,comments_by_paid_organic)
```

*Get comments text for a post*

```
GET creator_marketplace/content?content_id={content-id}&fields=comments.fields(comment_text)
```

*Get views by paid/organic breakdown for a post*

```
GET /creator_marketplace/content?content_id={content-id}&fields=insights.metrics(views_by_paid_organic)
```

*Search for posts from specific creators, with a minimum reach, sorted by reactions, published in the last 7 days and filtered to photo posts only*

```
GET creator_marketplace/content?creator_id={creator-id-1},{creator-id-2}&reach={min:500}&sort_by=reactions&time_range=L7&content_type=PHOTOS
```

*Search for posts sorted by number of comments, published in the last 14 days and return the content url and caption*

```
GET creator_marketplace/content?sort_by=comments&time_range=L14&fields=content_url,caption
```
