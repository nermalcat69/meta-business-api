---
title: "Assign Permissions to the Admin System User"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/generate-access-token-system-user
---

# Assign Permissions to the Admin System User

Updated: Jun 21, 2026

The admin system user created in the [previous step](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/create-system-user) can create new users, add accounts, assign permissions, and access all assets belonging to the business. To perform these actions, the admin system user needs the following permissions:

* [Finance editor](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/generate-access-token-system-user#finance-editor-permission)
* [Manage app](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/generate-access-token-system-user#manage-app-permission)
* [Manage catalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/generate-access-token-system-user#manage-catalog-permission)

## Before you begin

Before you assign permissions, make sure you have completed this step:

* [Create an Admin System User](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/create-system-user)

## Permissions

### Finance editor permission

* Go to the [Business Settings⁠](https://business.facebook.com/settings).
* Under **Users**, click **System Users**.
* Select the admin system user, and click the **Edit** button.
* Select **Finance editor** for the finance role.
* Click **Update system user**.

### Manage app permission

* Go to the [Business Settings⁠](https://business.facebook.com/settings).
* Under **Users**, click **System Users**.
* Select the admin system user, and click the **Add assets** button.
* Select **Apps** as the asset type in the **Assign Assets** dialog.
* Select your app, then select the **Manage App** setting.
* Click **Save changes**.

### Manage catalog permission

* Go to the [Business Settings⁠](https://business.facebook.com/settings).
* Under **Users**, click **System Users**.
* Select the admin system user, and click the **Add assets** button.
* Select **Catalogs** as the asset type in the **Assign Assets** dialog.
* Select your parent catalog, then select the **Manage Catalog** setting.
* Click **Save changes**.

## See more

* [Business Help Center: Add System Users to Your Meta Business Suite⁠](https://www.facebook.com/business/help/503306463479099?id=2190812977867143)
* [Developer Documentation: System Users in Meta Business Suite](https://developers.facebook.com/docs/marketing-api/system-users)
