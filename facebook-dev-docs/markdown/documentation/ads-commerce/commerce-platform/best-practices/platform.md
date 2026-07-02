---
title: "Plan your integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/platform
---

# Plan your integration

Updated: Jun 29, 2026

Use this guide to learn about concepts and common use cases for planning your commerce integration. For platform-partner-specific integrations, see [Commerce Integration for Platform Partners](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/platform).

Manage your business assets, such as your developer app, catalog, Page, shop, and Instagram account, under one Meta Business Suite. For example, if you have an agency working on your catalog, you can still grant them access to work with the catalog on your behalf.

## Security

Follow security best practices when working with [system users](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser) and [access tokens](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens). The [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) tool helps you see token details such as expiration, type, and app ID.

System users and access tokens are used for authentication of your servers or software making API calls to assets owned or managed by a [Meta Business Suite⁠](https://business.facebook.com/).

### Manage system user access token permissions

Multiple [permissions](https://developers.facebook.com/docs/facebook-login/permissions#overview) are available for system users when generating an access token. Example permissions are: `ads_management`, `business_management`, `manage_notifications`, `pages_read_engagement`, and more.

Each permission allows your app to read or write information, or perform certain actions. You should restrict the access token permission scope by only assigning permissions that are required. For example, only two permissions are typically required for Instagram Shopping integration: `manage_pages` for Order Management API and `ads_management` for Catalog API (optional).

Once the system user has this permission, the system user access token can be used to retrieve the Page access token.

### Manage system user tasks

A system user can have these task access levels for an asset such as a Page, ad account, or product catalog: `['MANAGE']`, `['CREATE_CONTENT']`, `['MODERATE']`, `['ADVERTISE']`, and `['ANALYZE']`.

The access type can be specified in the Meta Business Suite settings.

You should restrict the Page access type to `['CREATE_CONTENT']` for the Instagram Shopping integration.

### Admin system users vs system users

System users represent servers or software making API calls to assets owned or managed by a Meta Business Suite. The easiest, quickest way to create a system user is in the Meta Business Suite tool.

There are two types of system users: `admin system user` and `system user`. An `admin system user` can create `system users`, assign permissions, and more. A `system user` can only access the assets they have permission for.

Give `system users` access to assets and use `system users` for most API calls. You should limit using `admin system user` for administrative actions such as assigning permission. Since it has the most permissions, you should carefully safeguard the admin system user token.

Learn more about [system users](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser).

### Safeguard access tokens

Carefully safeguard the product system user and Page access tokens. Store them in a secure location and do not share them with anyone in plaintext.

You should not use a test Page access token to call the API for a production Page. You can create two system users: one for test and one for production.

Your app has a certain [access level](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization). This determines how many system users you can create for the Meta Business Suite that owns your app:

| Level | System Users | Admin System Users |
| --- | --- | --- |
| Development | 1 | 1 |
| Basic | 3 | 1 |
| Standard | 10 | 1 |

### Rotate access tokens

Rotate system user access tokens periodically.

You may invalidate all access tokens of a system user by sending a `DELETE` request to the endpoint:

```
curl -X DELETE -G \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<APP_SCOPED_SYSTEM_USER_ID>/access_tokens
```

## Manage test accounts, access tokens, and app review

* Begin your integration development with a test commerce account. A *test account* allows you to create a Facebook shop only visible to your team, place test orders, and use the API to manage those orders, without the additional setup required for a real account.
* Once you have built out the basic functionality, submit your app for [App Review](https://developers.facebook.com/docs/commerce-platform/setup/app-review). After App Review approves your app for commerce related permissions, your app can then be used to make API calls against a real commerce account.
* Set your Facebook or Instagram Shops in "Staging" mode in Commerce Manager where they are only visible to admins.
* Test your integration and buyer experience (end-to-end) before publishing those Shops.

Whether you are using a test account or real account, use a system user to generate access tokens for API calls; such tokens never expire. Treat these tokens as your password and store them securely.

## Use the Graph API Explorer to test requests

The [Graph API Explorer](https://developers.facebook.com/tools/explorer/) is a helpful tool to perform Graph API queries and explore request fields and responses.

## Use the API Upgrade Tool to change the version your app is using

The [API Upgrade Tool](https://developers.facebook.com/docs/graph-api/advanced/api-upgrade-tool) shows the API calls from your app that may be affected by changes in newer versions of the API. You will be able to quickly see which changes you need to make to upgrade from your current version to a newer version.

## Learn more

* [Graph API Explorer Guide](https://developers.facebook.com/docs/graph-api/explorer)
* [Using the Graph API](https://developers.facebook.com/docs/graph-api/using-graph-api)
* [App Review, Commerce Platform](https://developers.facebook.com/docs/commerce-platform/setup/app-review)
