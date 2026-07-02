---
title: "WhatsApp Cloud API - Calling API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api
---

# WhatsApp Cloud API - Calling API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api/v25.0.openapi.yaml/)

The WhatsApp Business Calling API enables you to initiate and receive calls with users on WhatsApp using voice-over-internet protocol (VoIP).

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/call\_permissions](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api#get-version-phone-number-id-call-permissions) |
| POST | [/{Version}/{Phone-Number-ID}/calls](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api#post-version-phone-number-id-calls) |

---

## GET /{Version}/{Phone-Number-ID}/call\_permissions

Check whether you have permission to call a WhatsApp user and what actions are available. This endpoint returns the current permission status for calling a specific user, along with available actions and their limits.

Permission Status:

* `granted`: You have active permission to call this user - `pending`: A permission request has been sent but not yet approved - `denied`: The user has denied call permissions - `expired`: Previous permission has expired

Available Actions:

* `start_call`: Initiate a new call to this user - `send_call_permission_request`: Send a permission request to this user

Error Handling:

This endpoint may return various error codes including rate limiting errors if too many permission checks are made within a short period.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/call\_permissions

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/call_permissions' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400403500

---

```
{  
  "Granted Permission": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "permission": {  
        "status": "granted",  
        "expiration_time": 1735689600  
      },  
      "actions": [  
        {  
          "action_name": "start_call",  
          "can_perform_action": true,  
          "limits": [  
            {  
              "time_period": "24h",  
              "current_usage": 5,  
              "max_allowed": 100,  
              "limit_expiration_time": 1735689600  
            }  
          ]  
        },  
        {  
          "action_name": "send_call_permission_request",  
          "can_perform_action": false,  
          "limits": ""  
        }  
      ]  
    }  
  },  
  "Pending Permission": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "permission": {  
        "status": "pending"  
      },  
      "actions": [  
        {  
          "action_name": "start_call",  
          "can_perform_action": false  
        },  
        {  
          "action_name": "send_call_permission_request",  
          "can_perform_action": false  
        }  
      ]  
    }  
  },  
  "Denied Permission": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "permission": {  
        "status": "denied"  
      },  
      "actions": [  
        {  
          "action_name": "start_call",  
          "can_perform_action": false  
        },  
        {  
          "action_name": "send_call_permission_request",  
          "can_perform_action": true,  
          "limits": [  
            {  
              "time_period": "24h",  
              "current_usage": 2,  
              "max_allowed": 5,  
              "limit_expiration_time": 1735689600  
            }  
          ]  
        }  
      ]  
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

The API version to use

Phone-Number-IDstring·required

The ID of the phone number registered with your WhatsApp Business Account

Query Parameters

---

user\_wa\_idstring·required

The WhatsApp ID of the user you want to check call permissions for

Responses

---

Check whether you have permission to call a WhatsApp user and what actions are available. This endpoint returns the current permission status for calling a specific user, along with available actions and their limits.

Permission Status:

* `granted`: You have active permission to call this user - `pending`: A permission request has been sent but not yet approved - `denied`: The user has denied call permissions - `expired`: Previous permission has expired

Available Actions:

* `start_call`: Initiate a new call to this user - `send_call_permission_request`: Send a permission request to this user

Error Handling:

This endpoint may return various error codes including rate limiting errors if too many permission checks are made within a short period.

200

Call Permissions Check Success

Content Type: application/json

Schema: CallPermissionCheckResponsePayload

Show child attributes

---

CallPermissionCheckResponsePayload

---

messaging\_productstring·required

Messaging product

---

permissionobject·required

Call permission details

Show child attributes

---

statusOne of "granted", "pending", "denied", "expired"·required

Current permission status for calling this user

---

expiration\_timeinteger (int64)

Unix timestamp when the permission expires (if applicable)

---

actionsarray of object

Available actions and their restrictions

Show child attributes

---

actions[]object

Show child attributes

---

action\_nameOne of "start\_call", "send\_call\_permission\_request"·required

Name of the action

---

can\_perform\_actionboolean·required

Whether the business can perform this action

---

limitsarray of object

Rate limits for this action

Show child attributes

---

limits[]object

Show child attributes

---

time\_periodstring·required

Time period for the limit

---

current\_usageinteger·required

Current usage count

---

max\_allowedinteger·required

Maximum allowed usage

---

limit\_expiration\_timeinteger (int64)

Unix timestamp when the limit resets

400

Bad Request - Invalid request parameters

Content Type: application/json

403

Forbidden - Insufficient permissions

Content Type: application/json

500

Internal Server Error - An unexpected error occurred

Content Type: application/json

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/call_permissions' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400403500

---

```
{  
  "Granted Permission": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "permission": {  
        "status": "granted",  
        "expiration_time": 1735689600  
      },  
      "actions": [  
        {  
          "action_name": "start_call",  
          "can_perform_action": true,  
          "limits": [  
            {  
              "time_period": "24h",  
              "current_usage": 5,  
              "max_allowed": 100,  
              "limit_expiration_time": 1735689600  
            }  
          ]  
        },  
        {  
          "action_name": "send_call_permission_request",  
          "can_perform_action": false,  
          "limits": ""  
        }  
      ]  
    }  
  },  
  "Pending Permission": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "permission": {  
        "status": "pending"  
      },  
      "actions": [  
        {  
          "action_name": "start_call",  
          "can_perform_action": false  
        },  
        {  
          "action_name": "send_call_permission_request",  
          "can_perform_action": false  
        }  
      ]  
    }  
  },  
  "Denied Permission": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "permission": {  
        "status": "denied"  
      },  
      "actions": [  
        {  
          "action_name": "start_call",  
          "can_perform_action": false  
        },  
        {  
          "action_name": "send_call_permission_request",  
          "can_perform_action": true,  
          "limits": [  
            {  
              "time_period": "24h",  
              "current_usage": 2,  
              "max_allowed": 5,  
              "limit_expiration_time": 1735689600  
            }  
          ]  
        }  
      ]  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/calls

Use this endpoint to initiate, accept, reject, or terminate WhatsApp calls.

For initiating or managing a call:

Send a POST request with the appropriate action (connect, pre\_accept, accept, reject, terminate).

For terminating a call:

Send a POST request with action "terminate" and the call\_id.

Note: Response with error code 138006 indicates a lack of a call request permission for this business number from the WhatsApp user.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/calls

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/calls' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "to": "14085551234",  
  "action": "connect",  
  "session": {  
    "sdp_type": "offer",  
    "sdp": "v=0\no=- 3626166318745852955 2 IN IP4 127.0.0.1\ns=-\nt=0 0\na=group:BUNDLE 0\na=extmap-allow-mixed\na=msid-semantic: WMS d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\nc=IN IP4 0.0.0.0\na=rtcp:9 IN IP4 0.0.0.0\na=ice-ufrag:4g1c\na=ice-pwd:qY/Bb+jQzg5ICn6X4fhJQetk\na=ice-options:trickle\na=fingerprint:sha-256 35:47:24:24:9F:93:C4:3E:DB:37:7F:BB:ED:F8:20:B5:AD:AC:DC:35:C2:7D:67:EE:6C:35:54:DF:A6:00:5C:4A\na=setup:actpass\na=mid:0\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\na=sendrecv\na=msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\na=rtcp-mux\na=rtpmap:111 opus/48000/2\na=rtcp-fb:111 transport-cc\na=fmtp:111 minptime=10;useinbandfec=1\na=rtpmap:63 red/48000/2\na=fmtp:63 111/111\na=rtpmap:9 G722/8000\na=rtpmap:0 PCMU/8000\na=rtpmap:8 PCMA/8000\na=rtpmap:110 telephone-event/48000\na=rtpmap:126 telephone-event/8000\na=ssrc:2220762577 cname:w/zwpg3jXNiTFTdZ\na=ssrc:2220762577 msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\n"  
  },  
  "biz_opaque_callback_data": "0fS5cePMok"  
}'
```

Select status code

200

---

```
{  
  "Connect Call Response": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "calls": [  
        {  
          "id": "wacid.ABGGFjFVU2AfAgo6V"  
        }  
      ]  
    }  
  },  
  "Terminate Call Response": {  
    "value": {  
      "success": true  
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

The API version to use

Phone-Number-IDstring·required

The ID of the phone number registered with your WhatsApp Business Account

Request BodyOptional

---

Content Type: application/json

Schema: Must be one of: CallRequestPayload, CallTerminateRequestPayload

Show child attributes

---

Must be one of: CallRequestPayload, CallTerminateRequestPayload

---

CallRequestPayload

Show child attributes

---

messaging\_productstring·required

Messaging product

---

tostring·required

The number being called (callee)

---

actionOne of "accept", "connect", "media\_update", "pre\_accept", "reject", "terminate"·required

The action being taken on the given call ID

---

sessionobject

Contains the session description protocol (SDP) type and description language

Show child attributes

---

sdp\_typeOne of "offer", "answer"·required

SDP type - "offer" for connect action, "answer" for accept action

---

sdpstring·required

The SDP info of the device on the other end of the call. The SDP must be compliant with RFC 8866

---

biz\_opaque\_callback\_datastring

An arbitrary string you can pass in that is useful for tracking and logging purposes. Any app subscribed to the "calls" webhook field on your WhatsApp Business Account can receive this string, as it is included in the calls object within the subsequent Call Terminate Webhook payload. Cloud API does not process this field. Maximum 512 characters

---

CallTerminateRequestPayload

Show child attributes

---

messaging\_productstring·required

Messaging product

---

call\_idstring·required

The WhatsApp call ID

---

action"terminate"·required

Action to terminate the call

Responses

---

Use this endpoint to initiate, accept, reject, or terminate WhatsApp calls.

For initiating or managing a call:

Send a POST request with the appropriate action (connect, pre\_accept, accept, reject, terminate).

For terminating a call:

Send a POST request with action "terminate" and the call\_id.

Note: Response with error code 138006 indicates a lack of a call request permission for this business number from the WhatsApp user.

200

Call Management Success

Content Type: application/json

Schema: Must be one of: CallResponsePayload, CallTerminateResponsePayload

Show child attributes

---

Must be one of: CallResponsePayload, CallTerminateResponsePayload

---

CallResponsePayload

Show child attributes

---

messaging\_productstring

---

callsarray of object

Show child attributes

---

calls[]object

Show child attributes

---

idstring

---

CallTerminateResponsePayload

Show child attributes

---

successboolean

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/calls' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "to": "14085551234",  
  "action": "connect",  
  "session": {  
    "sdp_type": "offer",  
    "sdp": "v=0\no=- 3626166318745852955 2 IN IP4 127.0.0.1\ns=-\nt=0 0\na=group:BUNDLE 0\na=extmap-allow-mixed\na=msid-semantic: WMS d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\nc=IN IP4 0.0.0.0\na=rtcp:9 IN IP4 0.0.0.0\na=ice-ufrag:4g1c\na=ice-pwd:qY/Bb+jQzg5ICn6X4fhJQetk\na=ice-options:trickle\na=fingerprint:sha-256 35:47:24:24:9F:93:C4:3E:DB:37:7F:BB:ED:F8:20:B5:AD:AC:DC:35:C2:7D:67:EE:6C:35:54:DF:A6:00:5C:4A\na=setup:actpass\na=mid:0\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\na=sendrecv\na=msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\na=rtcp-mux\na=rtpmap:111 opus/48000/2\na=rtcp-fb:111 transport-cc\na=fmtp:111 minptime=10;useinbandfec=1\na=rtpmap:63 red/48000/2\na=fmtp:63 111/111\na=rtpmap:9 G722/8000\na=rtpmap:0 PCMU/8000\na=rtpmap:8 PCMA/8000\na=rtpmap:110 telephone-event/48000\na=rtpmap:126 telephone-event/8000\na=ssrc:2220762577 cname:w/zwpg3jXNiTFTdZ\na=ssrc:2220762577 msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\n"  
  },  
  "biz_opaque_callback_data": "0fS5cePMok"  
}'
```

Select status code

200

---

```
{  
  "Connect Call Response": {  
    "value": {  
      "messaging_product": "whatsapp",  
      "calls": [  
        {  
          "id": "wacid.ABGGFjFVU2AfAgo6V"  
        }  
      ]  
    }  
  },  
  "Terminate Call Response": {  
    "value": {  
      "success": true  
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
