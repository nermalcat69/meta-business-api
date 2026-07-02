---
title: "WhatsApp Cloud API - Settings API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/verify-code-api
---

# WhatsApp Cloud API - Settings API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api/v23.0.openapi.yaml/)

The Settings API allows you to configure various features and settings

for your WhatsApp Business Account phone numbers. You can manage calling

settings, user identity change settings, payload encryption, and data

storage configurations.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/verify-code-api#get-version-phone-number-id-settings) |
| POST | [/{Version}/{Phone-Number-ID}/settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/verify-code-api#post-version-phone-number-id-settings) |

---

## GET /{Version}/{Phone-Number-ID}/settings

Retrieve current settings for a WhatsApp Business phone number.

Returns calling settings, payload encryption settings, and data

storage configurations.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400403

---

```
{  
  "Basic settings response": {  
    "value": {  
      "calling": {  
        "status": "enabled",  
        "call_icon_visibility": "visible",  
        "ip_addresses": {  
          "default": [  
            "157.240.0.1",  
            "157.240.0.2"  
          ]  
        },  
        "callback_permission_status": "enabled",  
        "video": {  
          "status": "enabled"  
        }  
      },  
      "payload_encryption": {  
        "status": "disabled"  
      },  
      "storage_configuration": {  
        "status": "default"  
      }  
    }  
  },  
  "Settings with SIP and encryption": {  
    "value": {  
      "calling": {  
        "status": "enabled",  
        "call_icon_visibility": "visible",  
        "ip_addresses": {  
          "default": [  
            "157.240.0.1",  
            "157.240.0.2"  
          ]  
        },  
        "callback_permission_status": "enabled",  
        "srtp_key_exchange_protocol": "DTLS-SRTP",  
        "sip": {  
          "status": "enabled",  
          "servers": [  
            {  
              "app_id": "12345",  
              "hostname": "sip.whatsapp.com",  
              "port": 5060  
            }  
          ]  
        },  
        "video": {  
          "status": "enabled"  
        }  
      },  
      "payload_encryption": {  
        "status": "enabled",  
        "client_encryption_key_fingerprint": "SHA256:abcd1234...",  
        "cloud_encryption_key": "eyJhbGc..."  
      },  
      "storage_configuration": {  
        "status": "in_country_storage_enabled",  
        "data_localization_region": "us"  
      }  
    }  
  }  
}
```

Header Parameters

---

User-Agentstring

The user agent string identifying the client software making the request.

Authorizationstring·required

Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·required

Media type of the request body

Path Parameters

---

Versionstring·required

Phone-Number-IDstring·required

Query Parameters

---

include\_sip\_credentialsboolean

Include SIP credentials in the response (requires additional permissions)

Responses

---

Retrieve current settings for a WhatsApp Business phone number.

Returns calling settings, payload encryption settings, and data

storage configurations.

200

Current phone number settings retrieved successfully

Content Type: application/json

Schema: PhoneNumberSettingsResponse

Show child attributes

---

PhoneNumberSettingsResponse

---

callingCallingSettingsResponse·required

Show child attributes

---

statusOne of "enabled", "disabled"·required

Current calling feature status

---

call\_icon\_visibilityOne of "visible", "hidden"·required

Current call icon visibility setting

---

ip\_addressesobject·required

Show child attributes

---

defaultarray of string·required

Default IP addresses for calling

Show child attributes

---

default[]string

---

callback\_permission\_statusOne of "enabled", "disabled"·required

Callback permission status

---

srtp\_key\_exchange\_protocolOne of "DTLS-SRTP", "SDES-SRTP"

SRTP key exchange protocol (optional)

---

call\_hoursCallHoursSettings

Show child attributes

---

statusOne of "enabled", "disabled"·required

Call hours feature status

---

timezonestring

Timezone for call hours

---

day\_of\_week\_startstring

Start day of the week

---

call\_iconsCallIconsSettings

Show child attributes

---

restrict\_to\_user\_countriesarray of string

List of countries where call icons are restricted

Show child attributes

---

restrict\_to\_user\_countries[]string

---

sipSipSettingsResponse

Show child attributes

---

statusOne of "enabled", "disabled"·required

SIP calling status

---

serversarray of SipServerInfo

SIP server configuration

Show child attributes

---

servers[]SipServerInfo

Show child attributes

---

app\_idstring·required

Application ID for SIP server

---

hostnamestring·required

SIP server hostname

---

portinteger

SIP server port (optional)

---

passwordstring

SIP password (only included when include\_sip\_credentials=true)

---

videoVideoSettingsResponse

Show child attributes

---

statusOne of "enabled", "disabled"·required

Video calling status

---

audioAudioSettingsResponse

Show child attributes

---

statusOne of "enabled", "disabled"

Audio calling status

---

restrictionsCallingRestrictionsResponse

Show child attributes

---

restrictionsarray of object

Show child attributes

---

restrictions[]object

Show child attributes

---

typestring

Type of restriction

---

expirationinteger (int64)

Expiration timestamp for the restriction

---

payload\_encryptionPayloadEncryptionSettingsResponse

Show child attributes

---

statusOne of "enabled", "disabled"·required

Payload encryption status

---

client\_encryption\_key\_fingerprintstring

Client encryption key fingerprint (when encryption is enabled)

---

cloud\_encryption\_keystring

Cloud encryption key (when encryption is enabled)

---

storage\_configurationStorageConfigurationSettingsResponse·required

Show child attributes

---

statusOne of "default", "in\_country\_storage\_enabled"·required

Data storage configuration status

---

data\_localization\_regionstring

Data localization region (when in-country storage is enabled)

400

Bad Request - Invalid request parameters

Content Type: application/json

403

Forbidden - Template not approved or insufficient permissions

Content Type: application/json

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400403

---

```
{  
  "Basic settings response": {  
    "value": {  
      "calling": {  
        "status": "enabled",  
        "call_icon_visibility": "visible",  
        "ip_addresses": {  
          "default": [  
            "157.240.0.1",  
            "157.240.0.2"  
          ]  
        },  
        "callback_permission_status": "enabled",  
        "video": {  
          "status": "enabled"  
        }  
      },  
      "payload_encryption": {  
        "status": "disabled"  
      },  
      "storage_configuration": {  
        "status": "default"  
      }  
    }  
  },  
  "Settings with SIP and encryption": {  
    "value": {  
      "calling": {  
        "status": "enabled",  
        "call_icon_visibility": "visible",  
        "ip_addresses": {  
          "default": [  
            "157.240.0.1",  
            "157.240.0.2"  
          ]  
        },  
        "callback_permission_status": "enabled",  
        "srtp_key_exchange_protocol": "DTLS-SRTP",  
        "sip": {  
          "status": "enabled",  
          "servers": [  
            {  
              "app_id": "12345",  
              "hostname": "sip.whatsapp.com",  
              "port": 5060  
            }  
          ]  
        },  
        "video": {  
          "status": "enabled"  
        }  
      },  
      "payload_encryption": {  
        "status": "enabled",  
        "client_encryption_key_fingerprint": "SHA256:abcd1234...",  
        "cloud_encryption_key": "eyJhbGc..."  
      },  
      "storage_configuration": {  
        "status": "in_country_storage_enabled",  
        "data_localization_region": "us"  
      }  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/settings

Update various settings for a WhatsApp Business phone number.

You can configure calling settings, user identity change settings,

payload encryption, and data storage configurations.

Only one feature setting can be specified per request.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "calling": {  
    "status": "enabled",  
    "call_icon_visibility": "visible",  
    "video": {  
      "status": "enabled"  
    }  
  }  
}'
```

Select status code

200400403

---

```
{  
  "Settings updated successfully": {  
    "value": {  
      "success": true  
    }  
  }  
}
```

Header Parameters

---

User-Agentstring

The user agent string identifying the client software making the request.

Authorizationstring·required

Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·required

Media type of the request body

Path Parameters

---

Versionstring·required

Phone-Number-IDstring·required

Request BodyOptional

---

Content Type: application/json

Schema: Must be one of: CallingSettingsRequest, UserIdentityChangeSettingsRequest, PayloadEncryptionSettingsRequest, StorageConfigurationSettingsRequest

Show child attributes

---

Must be one of: CallingSettingsRequest, UserIdentityChangeSettingsRequest, PayloadEncryptionSettingsRequest, StorageConfigurationSettingsRequest

---

CallingSettingsRequest

Show child attributes

---

callingCallingSettings·required

Show child attributes

---

statusOne of "enabled", "disabled"·required

Enable or disable calling feature

---

call\_icon\_visibilityOne of "visible", "hidden"

Control visibility of the call icon

---

videoVideoSettings

Show child attributes

---

statusOne of "enabled", "disabled"·required

Enable or disable video calling

---

sipSipSettings

Show child attributes

---

statusOne of "enabled", "disabled"·required

Enable or disable SIP calling

---

srtp\_key\_exchange\_protocolOne of "DTLS-SRTP", "SDES-SRTP"

SRTP key exchange protocol

---

UserIdentityChangeSettingsRequest

Show child attributes

---

user\_identity\_changeUserIdentityChangeSettings·required

Show child attributes

---

enabledboolean·required

Enable or disable user identity change notifications

---

PayloadEncryptionSettingsRequest

Show child attributes

---

payload\_encryptionPayloadEncryptionSettings·required

Show child attributes

---

statusOne of "enabled", "disabled"·required

Enable or disable payload encryption

---

client\_encryption\_keystring

Base64-encoded public key for payload encryption

(required when enabling encryption)

---

StorageConfigurationSettingsRequest

Show child attributes

---

storage\_configurationStorageConfigurationSettings·required

Show child attributes

---

enabledboolean·required

Enable or disable custom storage configuration

---

regionstring

Data storage region

Responses

---

Update various settings for a WhatsApp Business phone number.

You can configure calling settings, user identity change settings,

payload encryption, and data storage configurations.

Only one feature setting can be specified per request.

200

Settings updated successfully

Content Type: application/json

Schema: object

Show child attributes

---

successboolean

400

Bad Request - Invalid request parameters

Content Type: application/json

403

Forbidden - Template not approved or insufficient permissions

Content Type: application/json

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "calling": {  
    "status": "enabled",  
    "call_icon_visibility": "visible",  
    "video": {  
      "status": "enabled"  
    }  
  }  
}'
```

Select status code

200400403

---

```
{  
  "Settings updated successfully": {  
    "value": {  
      "success": true  
    }  
  }  
}
```

## Authentication

|
|  |
| **Scheme** | **Type** | **Location** |
| bearerAuth | HTTP Bearer | Header: `Authorization` |

### Usage Examples

bearerAuth:

Include `Authorization: Bearer your-token-here` in request headers

### Global Authentication Requirements

All endpoints require:

bearerAuth
