---
title: "Page Messaging Feature Review"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-permissions
---

# Page Messaging Feature Review

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messaging-feature-review/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messaging-feature-review/v26.0.0.openapi.yaml/)

Retrieve the messaging features that are available to a page through feature review.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{page\_id}/messaging\_feature\_review](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-permissions#get-page-id-messaging-feature-review) |

---

## GET /{page\_id}/messaging\_feature\_review

### Request Syntax

**GET** /{page\_id}/messaging\_feature\_review

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messaging_feature_review' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

The page ID to retrieve messaging feature review status for

Query Parameters

---

fieldsstring

Fields selected for return, separated by comma. More details in section 'Fields'(<https://developers.facebook.com/docs/graph-api/overview>). Note only field selection (with nesting) is supported, but not all the features of Field Expansion(<https://developers.facebook.com/docs/graph-api/guides/field-expansion/>), e.g. limit, offset, etc.

Responses

---

200

List of messaging features and their review statuses for the page

Content Type: application/json

Schema: PageMessagingFeatureReviewResponse

Show child attributes

---

PageMessagingFeatureReviewResponse

---

dataarray of PageMessagingFeatureReviewItem·required

List of messaging features and their review statuses for the page

Show child attributes

---

data[]PageMessagingFeatureReviewItem

Show child attributes

---

featurestring·required

The name of the messaging feature

---

statusOne of "approved", "pending", "limited", "rejected"·required

The review status of the feature (approved, pending, limited, or rejected)

400

Bad request

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

403

Forbidden

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messaging_feature_review' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

## Authentication

|
|  |
| **Scheme** | **Type** | **Location** |
| OAuthToken\_\_access\_token | API Key | Query: `access_token` |
| OAuthToken\_\_oauth\_token | API Key | Query: `oauth_token` |
| OAuthToken\_\_Authorization | HTTP Bearer | Header: `Authorization` |

### Usage Examples

OAuthToken\_\_access\_token:

Include `access_token=your-api-key-here` in query parameters

OAuthToken\_\_oauth\_token:

Include `oauth_token=your-api-key-here` in query parameters

OAuthToken\_\_Authorization:

Include `Authorization: Bearer your-token-here` in request headers

### Global Authentication Requirements

All endpoints require:

OAuthToken\_\_access\_token AND OAuthToken\_\_oauth\_token AND OAuthToken\_\_Authorization
