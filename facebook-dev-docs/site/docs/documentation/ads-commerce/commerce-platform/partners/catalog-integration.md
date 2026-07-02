---
title: "Onboarding Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/catalog-integration
---

# Onboarding Integration

Updated: Jun 8, 2026

Onboarding to Shops is a necessary step to enable sellers to integrate into Meta Commerce. Seamless onboarding ensures that the seller’s products are up-to-date, order information is properly synchronized, easy to reconcile on a quarterly or annual basis, and banking and payout information are set up properly for timely payouts and reporting.

As a third-party platform/solutions provider:

* You will need to onboard your sellers onto Meta Commerce using Facebook Business Extension (FBE). This typically entails implementing a login flow where your third-party website or mobile application prompts the seller to enter their Facebook or Instagram credentials. Depending on the nature of the integration you’re building, the seller also selects Meta assets that your app needs to access, such as Instagram accounts or product catalogs. At the end of this flow, an access token is generated for you to store and use when making API calls on behalf of that seller. This token can be used to create a system user within the business’ system. This is a more permanent solution to having programmatic capabilities in a business’ system without the worry of user churn.
* You will need the access token for each shop (i.e. seller you support) that is selling on Facebook and Instagram channels.

## Requirements

You are required to [integrate with the Meta Business Extension (FBE)](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/catalog-integration#req-1) to meet our Shops [integration quality bar](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/overview#int-qual-bar) by enabling sellers to:

* Easily discover the Meta integration in the platform
* Connect their 3P account to Meta assets (Business Manager, existing catalog where applicable, existing Pixel where applicable, Pages, Instagram Handles)
* Set up and edit their onsite Shop settings (Return Settings, Legal Info, Bank Account info, Tax Info)
* Link additional assets (Pages, Instagram Handles) to the shop
* Edit their settings
* Offboard

## Before You Start

* Integrate your verified business into [MBE](https://developers.facebook.com/docs/facebook-business-extension/fbe).
* Add FBE to your app and gain access to the [MBE Developer Panel](https://developers.facebook.com/docs/facebook-business-extension/fbe2/guides/developer-panel). View this [diagram](https://developers.facebook.com/docs/facebook-business-extension/fbe/get-started/commerce-onboarding#onboarding-flow-partner) to understand the MBE flow for Commerce.
* Follow the [MBE setup steps](https://developers.facebook.com/docs/facebook-business-extension/fbe2/get-started) and then submit your integration for MBE Integration Review. This includes enabling the [MBE feature management experience](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/business-configurations#feature-mgmt-view) within your platform so businesses can change their features or even [uninstall their MBE setup](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/uninstall#uninstall-fbe).

## Requirement 1: Integrate with the Facebook Business Extension

The [Meta Business Extension (FBE)](https://developers.facebook.com/docs/facebook-business-extension/fbe) is a popup-based, Meta-owned interface that lives on third-party sites as a plugin and simplifies the overall integration process with Meta. FBE allows businesses to easily set up the Meta Pixel, Catalog, and Shops. It helps businesses connect their products and services with Facebook and Instagram channels on your platform. Once connected, you can help them utilize a large suite of powerful features.

In short, the separation of responsibilities in an MBE-based integration is as outlined below:

* **Owned by Meta**: Interface, authentication, connection and a surface, MBE Management view ([MBE Feature Management View](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/business-configurations#feature-mgmt-view)) to view connected assets, manage installed features, and status of commerce integrations
* **Owned by Partner**: Set up of Pixel, inventory upload to Meta catalog via API

Once set up, any of your businesses can start an FBE onboarding flow either with existing assets or by having the option to create new ones, or a combination of both.

### Step 1: Add Entry Points to FBE to Your App

Create entry points to FBE where the user selects, manages, or creates their assets (e.g. business, catalog, shops, pixel, etc.). These entry points can take one of these forms:

* **[Business Login](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/docs/facebook-business-extension/fbe/get-started/business-login)** (aka Facebook Login) – Allows businesses to initiate their connection from your platform using a button placed on your site.
* **[Business Apps](https://developers.facebook.com/docs/facebook-business-extension/fbe/get-started/business-apps)** – Allows businesses to initiate their connection from a Meta Surface. To enable this flow and have your app listed on Meta’s Business Apps, you must provide a custom authentication UI on your site. This UI must allow the user to select their business and then redirect them back to the Meta flow with the selected information.

#### Example

```
https://facebook.com/dialog/oauth?
client_id=<FB_APP_ID>
&display=page
&redirect_uri="https://partner-site.com/redirectlanding"
&response_type=token
&scope=manage_business_extension
//   additionally use catalog_management or ads_management
//   &scope=manage_business_extension,catalog_management,ads_management
&extras={
  "setup": {
    "external_business_id": "foo-123",
    "timezone": "America/Los_Angeles",
    "currency": "USD",
    "domain": "https://example-shop.partner-site.com/",
    "channel": "ECOMMERCE",
    "business_vertical": "ECOMMERCE"
  },
  "business_config": {
    "business": {
      "name": "Foo Business"
    },
    "catalog_feed_scheduled": {
      "enabled": true,
      "feed_url": "https://partner-site.com/feed-url"
    },
    "page_cta": {
      "enabled": true,
      "cta_button_text": "Shop Now",
      "cta_button_url": "https://partner-site.com/foo-business",
      "below_button_text": "Powered by FBE Partner"
    },
    "ig_cta": {
      "enabled": true,
      "cta_button_text": "Shop Now",
      "cta_button_url": "https://partner-site.com/foo-business"
    },
    "messenger_menu": {
      "enabled": true,
      "cta_button_text": "Shop Now",
      "cta_button_url": "https://partner-site.com/foo-business"
    }
  },
  "repeat": false
}
```

Depending on your setup of choice, you can get business’ access token for later steps in multiple ways:

* **Business Login** – As with a normal Facebook Login, the end of this flow returns an access\_token, which you use to get more assets (e.g. Pixel ID, page ID, and Instagram Business ID)
* **Business Apps** – via [Webhooks](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/catalog-integration#fbe-install-webhooks).

### Step 2: Set Up FBE\_install Webhooks

Webhooks are **required for all partners which want to be listed in the App Store**. If you don’t plan to have your app in the app store, then you can choose to ignore this section or revisit it later. Meta fires webhook events each time one of your businesses installs, modifies, or uninstalls FBE. Each time a webhook event is received, it’s expected that your app will consume this event and understand what assets the business has modified, added, or removed from their connection with your app. Your app’s behavior should update based on the most current connected assets. **We highly recommend that you implement and test your subscription to our webhook**.

To set up a webhook:

* Create an endpoint on a secure server that can properly process requests from Meta.
* In the App Dashboard, configure your FBE webhooks description:

* In the **FBE** section > **Webhooks** tab, type your app's **callback URL**.
* Enter a verification token and then validate your endpoint.

After setup, the `fbe_install` webhook is automatically subscribed.

For more detailed steps, see [Webhook](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/get-features#webhook).

### Notifications

Upon receiving a webhook notification of an install, you need to:

* Store the access token (and its type) and record the assets that your app has been granted access to.
* Enable a set of features based on what assets have been granted.
* If a required asset for a specific feature is missing, disable that feature only. For example, if your app has been granted access to a catalog, but not a pixel, only implement the catalog-powered feature, not the pixel-powered feature.
* Inform the user with an update how your app is behaving based on what assets they have access to.

Upon receiving an update on an existing installation, you need to:

* Update the access token and record of assets that have been granted to you.
* Update the set of features your app will be enabled for the seller based on the assets that have been granted to the platform.
* Inform the user with an update how your app is behaving based on what assets they have access to.

Upon receiving an uninstall notification, you need to:

* Disable features that your app implements for the seller.
* Inform the seller about the change to their configuration.

### Step 3: Fetch Asset Details with the Returned Token

You can get information about businesses connected to your platform through FBE via [one (or both) of the two following methods](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/get-features#gather-ids-for-api-endpoints-and-business-configurations):

* **Webhook**—**Required** for all partners that want to be listed in the App Store. With a webhook setup, the details of businesses onboarding or editing via FBE will be received via the **webhook payload** from the webhook setup in [Step 2](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/catalog-integration#fbe-install-webhooks).
* **MBE Installs API endpoint**—**Recommended** for self-hosted businesses. For any business that has installed MBE, you can query their basic installation information using the `fbe_installs` endpoint. Using a business’ access token and external business ID, you can call the MBE Installs API endpoint for [detailed information about their setup](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/get-features#fbe-installation-api).

You must set up at least one of these methods. It’s needed to get a business’ asset IDs to properly configure the relevant features for the business.

#### Example: FBE Installs API Call

```
curl -i -X GET \   "https://graph.facebook.com/<version>/fbe_business/fbe_installs?fbe_external_business_id=<external business id>&access_token=<access token sanitized>"
```

### Step 4: Fetch the System User Token

After a user installs FBE, the extension generates an employee [system user](https://developers.facebook.com/docs/marketing-api/system-users) on the client’s Business Manager. Note that this system user is no longer visible in Business Manager, but exists on the backend. Naming for this new system user follows the schema `{App Name} System User (FBE)`.

That system user token and API access is not associated with a single person. This is extremely useful in case employees leave companies or deactivate their profiles. If you receive a user access token through a webhook or the Business Login after a FBE install, you can use that same token to get the Business Manager’s system user access token.

To do that, make the following API call:

```
curl -X POST \
  -F 'app_id={app_id}' \
  -F 'scope=ads_management,catalog_management,manage_business_extension' \
  -F 'access_token={user_access_token}' \
  -F 'fbe_external_business_id={fbe_external_business_id}' \
  -F 'appsecret_proof={appsecret_proof}' \
https://graph.facebook.com/<API_VERSION>/<client_business_manager_id>/access_token
```

The `appsecret_proof` parameter is **required**. It is a `sha256` hash of the access token used in the call, using your app secret as the key. Calls to this endpoint without a valid `appsecret_proof` are rejected. For more information, see [Generate the Proof](https://developers.facebook.com/docs/graph-api/guides/secure-requests#generate-the-proof).

For the `scope` field, use the `manage_business_extension` permission. Depending on your use case (see [Step 5](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/catalog-integration#mgmt-view-setup)), the [`ads_management`](https://developers.facebook.com/docs/permissions/reference/ads_management), [`catalog_management`](https://developers.facebook.com/docs/permissions/reference/catalog_management), [`pages_read_engagement`](https://developers.facebook.com/docs/permissions/reference/pages_read_engagement), [`business_management`](https://developers.facebook.com/docs/permissions/reference/business_management), [`instagram_basic`](https://developers.facebook.com/docs/permissions/reference/instagram_basic), and `manage_business_extension` permissions will likely also be needed.

* If your app needs to read and manage the Ads account of a business, request the [`ads_management`](https://developers.facebook.com/docs/permissions/reference/ads_management) permission. With this permission, you have the ability to create ads campaigns, fetch ad metrics, build ad management tools, and more.
* If your app needs to create, read, update, or delete business-owned product catalogs that a business is an admin of, you should request the [`catalog_management`](https://developers.facebook.com/docs/permissions/reference/catalog_management) permission. We recommend this permission for all apps. This enables your app to build commerce-related, dynamic ads, and inventory management solutions.

### Step 5: Set Up Management View

To allow businesses to further configure features (beyond what was specified in installation), you can direct businesses to our [MBE Feature Management View](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/business-configurations#feature-mgmt-view) from your platform. You can use the JavaScript SDK or URL to add an entry point to launch the MBE Management View. Both methods need to display a button to click, which launches the MBE Management View window.

### Step 6: Add an Entry Point to Uninstall MBE

Your platform should add an entrypoint (e.g. button) for businesses to uninstall MBE. We recommend doing this by making a `DELETE` request to the proper endpoint.

Example: Call to our Deletion Endpoint

```
curl -X DELETE \
"https://graph.facebook.com/v<API_VERSION>/fbe_business/fbe_installs?fbe_external_business_id=<FBE_EXTERNAL_BUSINESS_ID>&access_token=<ACCESS_TOKEN>"
```

If you have implemented an `fbe_install` webhook, you will receive events when the user [uninstalls MBE](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/uninstall#uninstall-facebook-business-extension).

## Learn More

* [Meta Business Extension (MBE)](https://developers.facebook.com/docs/facebook-business-extension/fbe)
* [MBE setup steps](https://developers.facebook.com/docs/facebook-business-extension/fbe2/get-started)
* [MBE Developer Panel](https://developers.facebook.com/docs/facebook-business-extension/fbe2/guides/developer-panel)
* [Uninstall FBE](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/uninstall#uninstall-facebook-business-extension)
* [Webhooks](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/catalog-integration#fbe-install-webhooks)
