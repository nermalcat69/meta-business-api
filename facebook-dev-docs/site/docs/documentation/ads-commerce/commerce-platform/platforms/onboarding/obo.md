---
title: "Onboarding via Redirect"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/obo
---

# Onboarding via Redirect

Updated: Dec 9, 2025

Platform partners can use the Facebook Commerce Manager to onboard sellers by utilizing a redirect URI to send sellers back to the platform after onboarding, along with a Commerce Merchant Settings (CMS) ID for the seller.

Use the setup steps outlined in this guide to onboard sellers.

## Step 1. Set Up a Facebook Login Flow

When implementing [Facebook Login](https://developers.facebook.com/documentation/facebook-login), be sure to request the following App Permissions:

* [`business_management`](https://developers.facebook.com/docs/permissions/reference/business_management)
* [`pages_read_engagement`](https://developers.facebook.com/docs/permissions/reference/pages_read_engagement)
* [`catalog_management`](https://developers.facebook.com/docs/permissions/reference/catalog_management)

If you were granted access to the Commerce API **after Oct 20, 2020**, you need to also request these permissions:

* [`commerce_manage_accounts`](https://developers.facebook.com/docs/permissions/reference/commerce_manage_accounts)
* [`commerce_account_manage_orders`](https://developers.facebook.com/docs/permissions/reference/commerce_account_manage_orders) or [`commerce_account_read_orders`](https://developers.facebook.com/docs/permissions/reference/commerce_account_read_orders)
* [`commerce_account_read_reports`](https://developers.facebook.com/docs/permissions/reference/commerce_account_read_reports) to access the [Finance Reporting API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting)

See [Permissions, Reference](https://developers.facebook.com/docs/permissions/reference) for more information.

## Step 2. Find Authorized Pages and Commerce Accounts

* With the access token returned from [**Facebook Login**](https://developers.facebook.com/documentation/facebook-login), make the following call to get a list of pages that the seller has authorized your app to access:

```
curl -X GET -G \
-d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/me/accounts?fields=access_token,name,id,tasks
```

* Using the `id` of the page, find the associated business ID, Commerce Merchant Setting ID, and catalog IDs by making the following call:

```
```
curl -X GET -G \  
-d 'access_token=<ACCESS_TOKEN>' \  
https://graph.facebook.com/<PAGE_ID>/?fields=business,commerce_merchant_settings{id,display_name,product_catalogs}
```
```

If the seller wants to set up using one of the existing pages and Commerce accounts, skip the next step and go to [Step 4](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/obo#authenticateCMS).

## Step 3. Redirect to Commerce Manager

If the seller wants to set up using a new Commerce account, you need to direct them to Commerce Manager to create one.

* Redirect seller to the URL as shown in the [example](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/obo#redirect_example) below.
* Provide a `redirect_url` parameter and your `app_id` so Commerce Manager can send the seller back after setup is complete.
* Commerce Manager attaches the ID of the newly created `CommerceMerchantSettings` object in the `cms_id` parameter when redirecting back to your platform.

If you get permission errors, it’s likely that the seller did not grant you access to the correct page or the new Commerce account. You can explain it and [re-request permission](https://developers.facebook.com/documentation/facebook-login/web/permissions#re-asking-declined-permissions).

| Attribute | Description |
| --- | --- |
| `app_id`  Type: string | **Required**  Platform Partner App ID |
| `redirect_url`  Type: string | **Required**  URL that Facebook redirects the seller to after onboarding is complete.  The `redirect_url` must match the base domain in your app. You can manage the base domain for your app via the Facebook App Dashboard under **Settings** > **Basic**.  A base domain should include the core domain and your top-level domain (for example, `facebook.com`, `myshops.com`, and so on). |

#### Example Redirect URL to Commerce Manager

```
https://www.facebook.com/commerce_manager/onboarding?app_id=12345&redirect_url=https://www.example.com/
```

#### Redirect URL for Seller

```
https://www.example.com/?cms_id=112358
```

#### Example Experience

![Commerce Manager 'Where would you like to sell?' page with arrows on the app_id and redirect_url URL parameters](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/585890591_1369493484909302_8695028758259327452_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=yad5m3XCiwkQ7kNvwFGrsNI&_nc_oc=AdpdlnukQj7R_zJ0y-pbpQnU_OGUcrIWcRibQEk3a7D1zJ6ea6at47BS6vt2eg5tWIA0shdEf8ZnJGWowL7XY_Fi&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=lzlufCu1icBuVKiYC-YjLw&_nc_ss=7b289&oh=00_AQB_EXpOV6hyIM4S9Gqd1kB9y5jD3jczS5fO0-3aiAu0Mw&oe=6A607227)  
![Commerce Manager setup complete page with a dialog confirming the new shop and a 'Done' button to return to the platform](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/583335744_1369493181575999_5269645785678722302_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=EXZ4AhUK6I8Q7kNvwEbj6a3&_nc_oc=AdqwGUjF67RlpY_3_nHqNJONz2j9suGFye6WoJXG2lWDOBk3noNOJW0oStw0-fTCLAnVbenj6NP5bxr_Jr2Q3aK_&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=lzlufCu1icBuVKiYC-YjLw&_nc_ss=7b289&oh=00_AQBFtD3_tHzl7IUae2U1CpGaIzaokAPK4WYKvz1ZNEhE-w&oe=6A606E52)

## Step 4. Authenticate Commerce Merchant Settings

Platform partners must establish ownership with seller shops to perform order management operations. After authenticating Commerce Merchant Settings (CMS), your app will have permissions to retrieve and modify orders.

### Register Your App ID for a CMS Object

#### POST Request

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<COMMERCE_MERCHANT_SETTINGS_ID>/order_management_apps
```

#### Response

On success, your app receives the following:

```
{
  "success": true
}
```

If a CMS has already been registered by another app, it cannot be registered again. To unregister, contact your Facebook partnership liason. When an app is already registered:

```
{
  "error":
    {
       "message": "Fatal",
       "type": "OAuthException",
       "code": -1,
       "error_subcode": 2361126,
       "is_transient": false,
       "error_user_title": "Shop Already Has Authorized Order Management App",
       "error_user_msg": "Shop has already authorized an Application to manage its orders. Contact Facebook if you need to de-authorize the existing Application.",
       "fbtrace_id": "BzNm1CrkMKz"
    }
}
```

### Get Catalog and Page ID from CMS

Retrieve the seller’s catalog ID and Facebook Page ID from the CMS object and save it for using with catalog API. Learn more about [retrieving additional metadata from a CMS](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting).

#### GET Request

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<COMMERCE_MERCHANT_SETTINGS_ID>?fields=product_catalogs,merchant_page
```

#### Response

```
{
  "product_catalogs": {
    "data": [
      {
        "id": "10455456806199",
        "name": "Some ECommerce Platform Catalog"
      }
    ]
  },
  "merchant_page": {
    "id": "455786458954555",
    "name": "Merchant Shop"
  },
  "id": "38545478524704"
}
```

Learn more about [product catalogs and inventory syncing](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/overview).

### Establish an OBO System User Relationship

The Business On Behalf Of API allows platforms to create a system user and use the system user’s access token that exists inside the seller’s Business Manager. It also allows access to your sellers’ business assets, such as catalogs and pages.

[Learn more about the Business On Behalf Of API.](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/obo)

## Step 5. Manage Orders

After a seller has been successfully onboarded and their inventory has been uploaded to a catalog on Facebook, their products are ready to be purchased by consumers. You can use the [Order Management API](https://developers.facebook.com/docs/commerce-platform/order-management/overview) to move orders from the Facebook Commerce Platform into your service and manage their lifecycle.

## Learn More

* [Permissions, Reference](https://developers.facebook.com/docs/permissions/reference)
* [Finance Reporting API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting)
* [Facebook Login](https://developers.facebook.com/documentation/facebook-login)
* [Product catalogs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/overview)
* [Business On Behalf Of API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/obo)
