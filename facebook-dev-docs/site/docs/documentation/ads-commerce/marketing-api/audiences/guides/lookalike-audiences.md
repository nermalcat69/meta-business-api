---
title: "Audience Rules"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences
---

# Audience Rules

Updated: Jun 16, 2026

Audience rules determine whether someone is added to your custom audience. The rules are applied on either the referrer URL or specific events and data.

Provide your rules as JSON-encoded strings structured like so:

* One [audience rule](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#audience-rules-syntax) contains two [rule sets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#rule_set_syntax).
* Each [rule set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#rule_set_syntax) can contain an [inclusion or exclusion rule](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#inclusion-exclusion).
* Each [inclusion or exclusion rule](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#inclusion-exclusion) can contain [filters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#filter) and [aggregation functions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#aggregate).
* Each filter contains a [filter set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#filter-set).

Use audience rules for different types of custom audiences, including [Website Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences), [Mobile App Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/mobile-app-custom-audiences), and [Offline Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/offline-custom-audiences). For Engagement Audience Rules, see [Engagement Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/engagement-custom-audiences#rules).

### Limitations

* Each audience can specify up to 10 rules in the audience rule. This includes the number of `rules` in `inclusions` or `exclusions`.
* Each rule can specify up to 100 filters, known as *leaf nodes*.

## Audience rules syntax

To define an audience rule, use the following structure:

```
rule: {
   "inclusions": <RULE_SET>,
   "exclusions": <RULE_SET>,
}
```

#### Available fields

| Name | Description |
| --- | --- |
| `inclusions`  type: String | **Required.**  Rule Set JSON string that defines the inclusion. See [Rule Set Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#rule_set_syntax). |
| `exclusions`  type: String | **Required.**  Rule set JSON string that defines the exclusion. See [Rule Set Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#rule_set_syntax). |

## Rule set syntax

For each rule set, follow this structure:

```
{
  "operator" : <BOOLEAN_OPERATOR>,
  "rules" : <JSON_RULE>,
}
```

#### Available fields

| Name | Description |
| --- | --- |
| `operator`  type: string | **Required.**  `and` or `or`. |
| `rules`  type: string | **Required.**  JSON string of rules (array of rules). See [Inclusion And Exclusion Rule Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#inclusion-exclusion). |

## Inclusion and exclusion rule syntax

For each inclusion or exclusion rule, follow this structure:

```
{
  "event_sources" : <EVENT_SOURCE_DEFINITION>,
  "retention_seconds" : <SECONDS>,
  "filter" : <FILTER>,
  "aggregation" : <AGGREGATION>,
}
```

`aggregation` and `retention_seconds` are editable fields. However, editing `aggregation` and `retention_seconds` does not flush the audience. People who only match the old rule/aggregation continue to be in the audience until they expire.

#### Available fields

| Name | Description |
| --- | --- |
| `event_sources`  type: String | **Required.**  JSON object containing the `id` and `type`.   * For [Website Custom Audiences using Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences), set `id` to your Pixel's ID and `type` to `'pixel'`. * For [Mobile App Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/mobile-app-custom-audiences), set `id` to your app ID and `type` to `app`.   More event sources can be added to `type` using a comma-delimited list `"store_visits,pixel,app"`. |
| `retention_seconds`  type: Integer | **Required.**  Integer (in seconds) for the retention window of the audience, should be less than `retention_days`. Min=1; Max=365 days |
| `filter`  type: String | **Required.**  JSON string of the filter rules. See [Filters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#filter). |
| `aggregation`  type: Integer | **Optional.**  JSON string of the aggregation functions. See [Aggregate Functions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#aggregate). |

## Filters

Filtration follows this general format:

```
"filter" : {
  "operator": <BOOLEAN_OPERATOR>,
  "filters": <FILTER_SET>,
  }
```

#### Available fields

| Name | Description |
| --- | --- |
| `operator`  type: string | **Required.**  `and` or `or` |
| `filters`  type: string | **Required.**  Array of JSON objects of filter rules. See [Filter Set Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#filter-set). |

## Filter set syntax

```
{
    "field": <FIELD>,
    "operator": <COMPARISON_OPERATOR>,
    "value": <VALUE>,
}
```

#### Available fields

| Name | Description |
| --- | --- |
| `field`  type: String | **Required.**   * For [Website Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences), use `'event'` if the filter is to specify an event. Parameters that match events sent by pixel (for example, `'ViewContent'`, `'Purchase'`). * For [Mobile App Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/mobile-app-custom-audiences), Use `'event'` if the filter is to specify an event. Parameters that match App events sent by app; for example, "\_appVersion", "\_value", and so on. |
| `operator`  type: String | **Required.**   * `=` * `!=` * `>=` * `>` * `<=` * `<` * `i_contains` * `i_not_contains` * `contains` * `not_contains` * `is_any` * `is_not_any` * `i_is_any` * `i_is_not_any` * `i_starts_with` * `starts_with` * `regex_match`   If `field` set to `event`, must use `=`. |
| `value`  type: String | **Required.**  If the `field` attribute is set to `"event"`, the `value` must be set to an event name. Use the App Event API to see app events and parameters reported by the app. |

## Aggregate functions

Create custom audiences based on the frequency and intensity of behavior using the `aggregation` in the audience rule field. In the aggregation field, define an aggregate function, for example:

```
"aggregation" : {
  "type":"count",
  "operator":">",
  "value":1
}
```

#### Available fields

| Name | Description |
| --- | --- |
| `type`  type: String | **Required.**  The aggregation function type.   * For Website Custom Audiences, the following functions are available: `'count'`, `'sum'`, `'avg'`, `'min'`, `'max'`, `'time_spent'`, and `'last_event_time_field'`. * For Mobile App Custom Audiences, the following functions are available: `"count"`,`"sum"`, `"avg"`, `"min"`, and `"max"`. |
| `config` | Required by certain types of aggregation functions. |
| `method`  type: String | **Optional.**  `"absolute"`, meaning add people that logged events in specified range, or `"percentile"`, meaning add people from a specified percentile range. If you select `percentile`, the operator should only be `in_range` and `not_in_range`. |
| `field`  type: String | **Required. Unless type is `count`.**  The parameter on which the aggregation function is applied. |
| `operator`  type: String | **Required.**  `=`, `!=`, `>=`, `>`, `<=`, `<`, `in_range`, `not_in_range` |
| `value`  type: String | **Required.**  Expected value of the parameter. |

#### Comparison operators

| Operator | Description |
| --- | --- |
| `>` or `gt` | True if event's parameter value greater than specified value. |
| `>=` or `gte` | True if event's parameter value greater than or equal to specified value. |
| `<` or `lt` | True if event's parameter value less than specified value. |
| `<=` or `lte` | True if event's parameter value less than or equal to specified value. |
| `=` or `eq` | True if event's parameter value equal to specified value. Note: This is equivalent to not specifying an operator at all; that is, "'x' : { 'eq' : 'y' }" is the same as "'x' : 'y' }. |
| `!=` or `neq` | True if event's parameter value not equal to specified value. |
| `contains` | True if event's parameter value, as string, contains specified string. Value of "shoe12345" fulfills 'contains' if specified value 'shoe'. |
| `not_contains` | True if event's parameter value, as string, does not contain specified string. Value "shoe12345" fulfills 'not\_contains' if specified value is 'purse'. |
| `i_contains` | Contains, case-insensitive |
| `i_not_contains` | Not contains, case-insensitive |
| `is_any` | True if event's parameter value matches any strings in given array. |
| `is_not_any` | True if event's parameter value matches no strings in specified array. |
| `i_is_any` | 'is\_any', case-insensitive. |
| `i_is_not_any` | 'is\_not\_any', case-insensitive |
| `starts_with` | True if the event's parameter value starts with the given string |
| `i_starts_with` | "starts\_with", case-insensitive |
| `regex_match` | Matches a regular expression such as "example\.com.\*purchase$". The full PCRE grammar is supported |

## Examples

### Website Custom Audiences

Match all referring URLs containing the string shoes in the last 30 days:

```
{
    "inclusions": {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "type": "pixel",
                        "id": "<PIXEL_ID>",
                    }
                ],
                "retention_seconds": 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "url",
                            "operator": "i_contains",
                            "value": "shoes"
                        }
                    ]
                },
            }
        ]
    }
}
```

Match `ViewContent` events where item price is greater than or equal to USD 100 in the last 30 days. Consider using this rule for the following event:

```
_fbq.push([ 'track', 'ViewContent', { productId: 1234, category: 'Men > Shoes', price: 199 } ]);
```

```
{
    "inclusions": {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "type": "pixel",
                        "id": "<PIXEL_ID>"
                    }
                ],
                "retention_seconds": 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "event",
                            "operator": "eq",
                            "value": "ViewContent"
                        },
                        {
                            "operator": "or",
                            "filters": [
                                {
                                    "field": "price",
                                    "operator": ">=",
                                    "value": "100"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
}
```

### Mobile App Custom Audiences

See [Mobile App Custom Audiences, Example Custom Audience Rules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/mobile-app-custom-audiences#example_rules).

## Operators and data or events

Rules have the following operators and data or events:

| Operators | The type of filter |
| --- | --- |
| `i_contains` | Contains substring, case insensitive |
| `i_not_contains` | Does not contain substring, case insensitive |
| `contains` | Contains substring, case sensitive |
| `not_contains` | Does not contain substring, case sensitive |
| `eq` | Equal to, case sensitive |
| `neq` | Not equal to, case sensitive |
| `lt` | Less than, numeric fields only |
| `lte` | Less than or equal to, numeric fields only |
| `gt` | Greater than, numeric fields only |
| `gte` | Greater than or equal to, numeric fields only |
| `regex_match` | Matches a regular expression such as `\"example\\.com.*purchase$\"`. The full PCRE grammar is supported |

| Data | Data being filtered |
| --- | --- |
| `url` | Fully escaped URL of the site visited |
| `domain` | Domain of site visited |
| `path` | Path of site visited, excluding domain |
| `event` | Name of pixel `event`, such as `'ViewContent'` |
| `device_type` | Device that accessed site:  `desktop`  `mobile_android_phone`  `mobile_android_tablet`  `mobile_ipad`  `mobile_ipod`  `mobile_iphone`  `mobile_tablet`  `mobile_windows_phone` |
| *any `customData` field* | Any field added to `customData` for pixel fires, such as `productId`, `category`, `price` |

Provide each rule as a JSON-encoded string.
