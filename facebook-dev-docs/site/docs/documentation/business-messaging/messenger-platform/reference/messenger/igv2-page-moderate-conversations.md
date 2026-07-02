---
title: "Manage custom user settings for a Messenger page"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger/igv2-page-moderate-conversations
---

# Manage custom user settings for a Messenger page

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-user-settings-for-a-messenger-page/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-user-settings-for-a-messenger-page/v26.0.0.openapi.yaml/)

Manage custom user settings, including persistent menus, for a Messenger page.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{page\_id}/custom\_user\_settings](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger/igv2-page-moderate-conversations#get-page-id-custom-user-settings) |
| POST | [/{page\_id}/custom\_user\_settings](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger/igv2-page-moderate-conversations#post-page-id-custom-user-settings) |
| DELETE | [/{page\_id}/custom\_user\_settings](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger/igv2-page-moderate-conversations#delete-page-id-custom-user-settings) |

---

## GET /{page\_id}/custom\_user\_settings

### Request Syntax

**GET** /{page\_id}/custom\_user\_settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/custom_user_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

Business Facebook Page ID

Query Parameters

---

fieldsstring

Fields selected for return, separated by comma. More details in section 'Fields'(<https://developers.facebook.com/docs/graph-api/overview>). Note only field selection (with nesting) is supported, but not all the features of Field Expansion(<https://developers.facebook.com/docs/graph-api/guides/field-expansion/>), e.g. limit, offset, etc.

psidstring·required

Page-scoped user ID

Responses

---

200

Retrieve custom user settings (persistent menus) for a Messenger page

Content Type: application/json

Schema: PageCustomUserSettingsResponse

Show child attributes

---

PageCustomUserSettingsResponse

---

dataarray of PageCustomUserSettingsData·required

Array of custom user settings data

Show child attributes

---

data[]PageCustomUserSettingsData

Show child attributes

---

user\_level\_persistent\_menuarray of PagePersistentMenu

Array of user-level persistent menu configurations

Show child attributes

---

user\_level\_persistent\_menu[]PagePersistentMenu

Show child attributes

---

localestring

Locale for the persistent menu

---

composer\_input\_disabledboolean

Whether the composer input is disabled for this menu

---

call\_to\_actionsarray of PersistentMenuCallToAction

Array of call to action items for the persistent menu

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToAction

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel2

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel2

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel3

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel3

Show child attributes

---

typestring

Type of the call to action (e.g. web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

disabled\_surfacesarray of string

Array of surfaces where the persistent menu is disabled

Show child attributes

---

disabled\_surfaces[]string

---

page\_level\_persistent\_menuarray of PagePersistentMenu

Array of page-level persistent menu configurations

Show child attributes

---

page\_level\_persistent\_menu[]PagePersistentMenu

Show child attributes

---

localestring

Locale for the persistent menu

---

composer\_input\_disabledboolean

Whether the composer input is disabled for this menu

---

call\_to\_actionsarray of PersistentMenuCallToAction

Array of call to action items for the persistent menu

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToAction

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel2

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel2

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel3

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel3

Show child attributes

---

typestring

Type of the call to action (e.g. web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

disabled\_surfacesarray of string

Array of surfaces where the persistent menu is disabled

Show child attributes

---

disabled\_surfaces[]string

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
  --url 'https://graph.facebook.com/v26.0/{page_id}/custom_user_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## POST /{page\_id}/custom\_user\_settings

### Request Syntax

**POST** /{page\_id}/custom\_user\_settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/custom_user_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

Business Facebook Page ID

Query Parameters

---

psidstring

Page-scoped user ID. Alternative to request body — we recommend using the request body for POST requests.

persistent\_menustring

JSON-encoded persistent menu array. Alternative to request body — we recommend using the request body for POST requests.

Request BodyRequired

---

Content Type: application/json

Schema: PageCustomUserSettingsPostRequest

Show child attributes

---

PageCustomUserSettingsPostRequest

---

psidstring

Page-scoped user ID

---

persistent\_menuarray of PagePersistentMenu

Array of persistent menu configurations. Pass null to clear.

Show child attributes

---

persistent\_menu[]PagePersistentMenu

Show child attributes

---

localestring

Locale for the persistent menu

---

composer\_input\_disabledboolean

Whether the composer input is disabled for this menu

---

call\_to\_actionsarray of PersistentMenuCallToAction

Array of call to action items for the persistent menu

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToAction

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel2

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel2

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel3

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel3

Show child attributes

---

typestring

Type of the call to action (e.g. web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

disabled\_surfacesarray of string

Array of surfaces where the persistent menu is disabled

Show child attributes

---

disabled\_surfaces[]string

Content Type: application/x-www-form-urlencoded

Schema: PageCustomUserSettingsPostRequest

Show child attributes

---

PageCustomUserSettingsPostRequest

---

psidstring

Page-scoped user ID

---

persistent\_menuarray of PagePersistentMenu

Array of persistent menu configurations. Pass null to clear.

Show child attributes

---

persistent\_menu[]PagePersistentMenu

Show child attributes

---

localestring

Locale for the persistent menu

---

composer\_input\_disabledboolean

Whether the composer input is disabled for this menu

---

call\_to\_actionsarray of PersistentMenuCallToAction

Array of call to action items for the persistent menu

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToAction

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel2

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel2

Show child attributes

---

typestring

Type of the call to action (e.g. nested, web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

call\_to\_actionsarray of PersistentMenuCallToActionLevel3

Array of nested call to action items

Show child attributes

---

call\_to\_actions[]PersistentMenuCallToActionLevel3

Show child attributes

---

typestring

Type of the call to action (e.g. web\_url, postback)

---

titlestring

Title text of the call to action

---

urlstring

URL for web\_url type actions

---

payloadstring

Payload data for postback type actions

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

webview\_height\_ratioOne of "compact", "tall", "full"

Height ratio of the webview when opened

---

messenger\_extensionsboolean

Whether Messenger extensions are enabled for the webview

---

fallback\_urlstring

Fallback URL for clients that do not support Messenger extensions

---

webview\_share\_buttonOne of "hide", "show"

Whether the share button is shown in the webview

---

disabled\_surfacesarray of string

Array of surfaces where the persistent menu is disabled

Show child attributes

---

disabled\_surfaces[]string

Responses

---

200

Update custom user settings (persistent menus) for a Messenger page

Content Type: application/json

Schema: PageCustomUserSettingsPostResponse

Show child attributes

---

PageCustomUserSettingsPostResponse

---

resultstring

Operation result status

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
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/custom_user_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## DELETE /{page\_id}/custom\_user\_settings

### Request Syntax

**DELETE** /{page\_id}/custom\_user\_settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/custom_user_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

Business Facebook Page ID

Query Parameters

---

psidstring

Page-scoped user ID (alternative to request body)

paramsstring

JSON-encoded array of custom user settings field names to delete (alternative to request body, e.g. ["persistent\_menu"])

Request BodyRequired

---

Alternative to query parameters — we recommend using query parameters for DELETE requests.

Content Type: application/json

Schema: PageCustomUserSettingsDeleteRequest

Show child attributes

---

PageCustomUserSettingsDeleteRequest

---

psidstring

Page-scoped user ID

---

paramsarray of string

Array of custom user settings field names to delete (e.g. ["persistent\_menu"])

Show child attributes

---

params[]string

Content Type: application/x-www-form-urlencoded

Schema: PageCustomUserSettingsDeleteRequest

Show child attributes

---

PageCustomUserSettingsDeleteRequest

---

psidstring

Page-scoped user ID

---

paramsarray of string

Array of custom user settings field names to delete (e.g. ["persistent\_menu"])

Show child attributes

---

params[]string

Responses

---

200

Delete custom user settings (persistent menus) for a Messenger page

Content Type: application/json

Schema: PageCustomUserSettingsDeleteResponse

Show child attributes

---

PageCustomUserSettingsDeleteResponse

---

resultstring

Operation result status

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
curl --request DELETE \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/custom_user_settings' \  
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
