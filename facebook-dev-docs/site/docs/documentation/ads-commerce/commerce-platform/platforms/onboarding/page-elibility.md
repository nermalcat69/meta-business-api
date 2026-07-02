---
title: "Business On Behalf Of"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/page-elibility
---

# Business On Behalf Of

Updated: Jan 29, 2020

The **Business On Behalf Of** API allows a partner to:

* Get access to act on behalf of their client
* Create a system user under their client’s Business Manager and fetch its access token

A *system user* is defined as someone who may perform repetitive programmatic tasks, such as updating a product catalog, sending server-to-server events, or updating custom audiences, and so on.

In this scenario, the system user has employee access and can only access assigned (at the time of creation) assets using the admin user’s access token.

The advantage of using a system user vs. a user access token — users can cycle off a business, but system user access tokens don’t expire. In this approach, the client continues to be the owner of their business and allows the partner access to their Business Manager and its assets via a system user. A client has the ability to go to their Business Manager and revoke the system user or remove certain assets access to a partner programmatically.

![Image](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/585887563_1369493204909330_3462383981194584359_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Nr54zsG4jy8Q7kNvwHXmwuC&_nc_oc=Ado0WFjS2o50SFNcu4bIaz4YDXJgUgv9dC6HoVxwQF-9mruLBXTEngXsLQi1704a7TIYP1Fl6nFPxzQNxXARYVla&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=cEIULY_7PvgET-ajaM8AHQ&_nc_ss=7b289&oh=00_AQBlZfFeg0ZISRqkUThs4fDkaYip95H6H1o_w38Kve9pSA&oe=6A609DCC)

## Get Started

Before you start, we recommend that you review these requirements and information:

### Business Manager for Client

If your client has created a commerce account [through Commerce Manager](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/cmredirect#2--redirect-to-commerce-manager), it is already connected to their Business Manager. You can find their Business Manager ID by following [this instruction](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#biz-id).

If there is **no Business Manager** for the client, you **must create one before proceeding.** For instructions, see [Business Manager API](https://developers.facebook.com/docs/marketing-api/business-manager-api).

### App Permissions

* `business_management`

### IDs

* `PARTNER_BM_ID`: ID of the Business Manager of the partner who should own the app.
* `CLIENT_BM_ID`: ID of the Business Manager of the client that owns the Facebook Page connected to the client’s Commerce Account.

### Access Tokens

* `USERS_ACCESS_TOKEN`: The access token of an admin of client’s Business Manager, created with `business_manage` permissions using the app owned by the partner’s Business Manager. This token is generated through [Facebook Login](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/cmredirect#1--set-up-a-facebook-login-flow).
* `PARTNER_BM_ADMIN_SYSTEM_USER_ACCESS_TOKEN`: The access token of the admin system user in the partner’s Business Manager for the app.
* `CLIENT_BM_SU_ACCESS_TOKEN`: The access token of the system user under the client’s Business Manager.
* `CLIENT_BM_SU_PAGE_ACCESS_TOKEN`: The **page** access token of the system user under the client’s Business Manager.

## Recommended Steps

#### Step 1

Create the On Behalf Of relationship between the partner and client’s Business Manager.

This creates an relationship edge between partner’s Business Manager and client’s Business Manager. This enables the partner to be able to create a SU via the API in the next step.

**Access Token Used:** `USERS_ACCESS_TOKEN`

```
curl -i -X POST \
 "https://graph.facebook.com/v25.0/<PARTNER_BM_ID>/managed_businesses?existing_client_business_id=<CLIENT_BM_ID>&access_token=<USERS_ACCESS_TOKEN>"
```

#### Step 2

Fetch the access token of system user under the client’s Business Manager. This installs the app in the client’s Business Manager and creates a system user. By default the name of the system user is **“{Client\_Business\_Manager\_Name} SYSTEM USER**”. A client will be able to see the partners App in their Business Manager as a shared asset. (They will not have any access to the App other than at most as a test user.)

In the `scope` parameter, you should include any permissions you need the system user to have in order to access relevant API endpoints. Refer to individual API references for what permissions are needed to access them.

**Access Token Used:** `PARTNER_BM_ADMIN_SYSTEM_USER_ACCESS_TOKEN`. This access token needs to have the `business_management` permission, and all the permissions included in the `scope` parameters above.

```
curl -i -X POST \
 "https://graph.facebook.com/v25.0/<CLIENT_BM_ID>/access_token?scope=ads_management,pages_read_engagement&app_id=<APP_ID>&access_token=<PARTNER_BM_ADMIN_SYSTEM_USER_ACCESS_TOKEN>&appsecret_proof=<APPSECRET_PROOF>"
```

The `appsecret_proof` parameter is **required**. It is a `sha256` hash of the access token used in the call, using your app secret as the key. Calls to this endpoint without a valid `appsecret_proof` are rejected. For more information, see [Generate the Proof](https://developers.facebook.com/docs/graph-api/guides/secure-requests#generate-the-proof).

The response contains the token for the system user who is linked to the OBO relationships. You do not need to create or use any other system user for the commerce integration.

#### Step 3

Get the ID of the system user.

**Access Token Used:** `CLIENT_BM_SU_ACCESS_TOKEN`

```
curl -i -X GET \
 "https://graph.facebook.com/v25.0/me?access_token=<CLIENT_BM_SU_ACCESS_TOKEN>"
```

#### Step 4

Assign assets (page and catalog) to the system user in the client’s Business Manager.

**Access Token Used:** `USERS_ACCESS_TOKEN`

```
curl -i -X POST \
 "https://graph.facebook.com/v25.0/<ASSET_ID>/assigned_users?user=<SYSTEM_USER_ID>&tasks=MANAGE&access_token=<USERS_ACCESS_TOKEN>"
```

#### Step 5

Store this `CLIENT_BM_SU_ACCESS_TOKEN` in a secure database and use it for accessing APIs that require a user access token, such as [Catalog Management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog).

#### Step 6

Generate a [Page Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens#page-access-tokens) using `CLIENT_BM_SU_ACCESS_TOKEN` by calling:

```
curl -i -X GET \
 "https://graph.facebook.com/v25.0/me/accounts?access_token=<CLIENT_BM_SU_ACCESS_TOKEN>"
```

This request will list all Pages managed by the system user including the matching `access_token`. Example response:

```
```
{  
  "data": [  
    {  
      "access_token": "<access token sanitized>",  
      "category": "Retail Company",  
      "category_list": [  
        {  
          "id": "2239",  
          "name": "Retail Company"  
        }  
      ],  
      "name": "Test_Shop_Page",  
      "id": "<content sanitized>",  
      "tasks": [  
        "ANALYZE",  
        "ADVERTISE",  
        "MODERATE",  
        "CREATE_CONTENT",  
        "MANAGE"  
      ]  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "<content sanitized>",  
      "after": "<content sanitized>"  
    }  
  }  
}
```
```

Copy the `access_token` corresponding to the page linked with client’s Commerce Account, and store it securely. You will use it to access APIs that require a Page Access Token on behalf of the Commerce Account, such as [Order Management](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management) and [Finance Reporting](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting).

## FAQ

How can I delete the On Behalf of relationship to remove the System user under the clients Business Manager assigned to me?

```
curl -i -X DELETE \
 "https://graph.facebook.com/v25.0/<PARTNER_BM_ID>/managed_businesses?existing_client_business_id=<CLIENT_BM_ID>&access_token=<USERS_ACCESS_TOKEN>"
```

If the Client wants to remove the connection and the System User of the Partner, they can do so in the [App view of the Business Manager⁠](https://business.facebook.com/settings/connected-apps).
