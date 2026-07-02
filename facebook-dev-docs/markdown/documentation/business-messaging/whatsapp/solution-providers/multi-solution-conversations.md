---
title: "Adding a WABA to a Multi-Partner Solution"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations
---

# Adding a WABA to a Multi-Partner Solution

Updated: May 21, 2026

If you are a Solution Partner and are part of an active [multi-partner solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions), you can designate a WABA as *eligible* for the solution (the "destination solution"). This sends a Meta Business Suite request to the client who owns the WABA. The client can then use the Meta Business Suite to accept and confirm the request.

Confirmation associates the WABA with the destination solution, thereby granting permissions (already defined on the destination solution) to any Tech Providers who are part of it.

If you're unsure of the WABA's ownership model, request the `ownership_type` field on the WABA ID. A value of `ON_BEHALF_OF` indicates you own the WABA, while `CLIENT_OWNED` indicates that your client owns the WABA.

## Requirements

* The WABA must have been onboarded by you.
* The WABA cannot already be part of an existing active solution.
* The destination solution must be in an active state.

## Step 1: Designate the WABA as solution eligible

Use the [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint to tag the business customer's WABA for migration. This generates a [migration intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), which indicates your intent to migrate the WABA.

### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \  
-d '  
{  
  "solution_id": "<DESTINATION_MULTI-PARTNER_SOLUTION_ID>"  
}'
```

### Response

Upon success:

```
{  
  "id": "<MIGRATION_INTENT_ID>"  
}
```

In addition, Meta sends a confirmation request to the client who owns the WABA.

## Step 2: Instruct the client to confirm

Instruct your client to use the Meta Business Suite to accept and confirm the solution partner access request.

You can send the client the following instructions:

* *Go to [https://business.facebook.com/settings/requests/⁠](https://business.facebook.com/settings/requests/) and log into your account.*
* *If you have multiple business portfolios, you will be presented with all of them. Click the portfolio that contains your WABA.*
* *In the Received tab, locate the request and complete the flow.*

![Meta Business Suite Settings page showing the Requests section with the Received tab selected and an empty Received state](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/462915752_507468075535116_983106198479012193_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wIfvEN_IljkQ7kNvwGqcpLQ&_nc_oc=AdrJr0eg7UpfyMGukYzcFCigg4SAEfbW6uiHju_BDV8EVH829AlwUG6oxgHrv_l95DNrVpEi2xBxntmQQ_DXb49i&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=-0MULOEmRh-aJu2MFqtR8A&_nc_ss=7b2a8&oh=00_AQBTddBiKLjr4bx5GT_C0wwNpoeNYX-bLsFYs8jYpLn4VQ&oe=6A60552A)

Note that if your client does not complete this step within 90 days, acceptance and confirmation will happen automatically.
