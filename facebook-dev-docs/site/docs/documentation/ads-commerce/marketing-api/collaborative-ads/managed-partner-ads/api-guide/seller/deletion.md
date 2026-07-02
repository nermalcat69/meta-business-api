---
title: "Onboard a Seller"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller/deletion
---

# Onboard a Seller

Updated: Jun 21, 2026

This page has guidance on how to onboard a seller into managed partner ads (MPA) using the Seller Business Creation API.

First, verify a seller is eligible for MPA using the [Seller Eligibility API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller/eligibility). Then use the Seller Business Creation API to onboard the seller.

Calling the Seller Business Creation API using an eligible seller’s `vendor_id` automatically performs the following actions:

* Creates a [child](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller#terminology) Business Manager, a Facebook Page, and an ad account for the seller
* Shares a line of credit
* Sets up the seller’s catalog segment with `vendor_id=<child_business_external_id>` as the filter

Once you **onboard a seller** into MPA, the seller is considered a **managed partner**.

## Before you begin

Before you onboard a seller, make sure you have completed these steps:

* [Create an Admin System User](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/create-system-user)
* [Assign Permissions to the Admin System User](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/assign-permissions-to-system-user)
* [Generate an Access Token for the Admin System User](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/prerequisites/generate-access-token-system-user)
* [Check Seller Eligibility](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller/eligibility)

## Required permissions

To call the Seller Business Creation API, you will need the following permissions:

* Business Admin
* Catalog Admin
* Manage Credit
* App Developer

## Seller business creation API call

### Request

```
curl \
-F 'access_token=<ACCESS_TOKEN>' \
-F 'asyncbatch=[
{
"method": "POST",
"relative_url": "<MARKETPLACE_BM_ID>/managed_partner_businesses",
"name": "<ASYNC_SESSION_NAME>",
"body": "child_business_external_id=<VENDOR_ID>&line_of_credit_id=<LINE_OF_CREDIT_ID>&credit_limit=<CREDIT_LIMIT>&partition_type=<PARTITION_TYPE>&catalog_id=<PARENT_CATALOG_ID>&ad_account_currency=<AD_ACCOUNT_CURRENCY>&seller_targeting_countries=['COUNTRY_CODE1','COUNTRY_CODE2']&timezone_id=<TIMEZONE_ID>&name=<BUSINESS_MANAGER_NAME>&seller_external_website_url=<SELLER_EXTERNAL_WEBSITE_URL>&partner_facebook_page_url=<PARTNER_FACEBOOK_PAGE_&page_profile_image_url=<PROFILE_PIC_URL>&vertical=<VERTICAL>&partner_registration_countries=<PARTNER_REGISTRATION_COUNTRY>"
}
]' \
"https://graph.facebook.com/v25.0"
```

The API call returns a response immediately with an `ASYNC_SESSION_ID`. While processing, poll the `ASYNC_SESSION_ID` until it reaches a terminal state `[COMPLETED|FAILED]`.

### Parameters

| Name | Description |
| --- | --- |
| `ad_account_currency`  string | **Required.**  The currency of the ad account to be created for the seller.  The string input should be currency abbreviation. See [Accepted currencies for monthly invoicing⁠](https://www.facebook.com/business/help/2780175265550591). |
| `catalog_id`  numeric string | **Required.**  The ID of the marketplace’s catalog, referred to as a **parent catalog**.  During onboarding, MPA filters this catalog using `vendor_id=<child_business_external_id>` to create a catalog segment for a seller. |
| `child_business_external_id`  string | **Required.**  Each marketplace should pass a **unique ID** for each seller. The name of the field on the marketplace side is `vendor_id`.  This field is used to create the catalog segment with filter `vendor_id = <child_business_external_id>`. |
| `credit_limit`  numeric string | **Required.**  The maximum amount of credit to be shared with a seller from the main line\_of\_credit\_id.  You should only set it if the `partition_type` value is set to `FIXED`  **Condition:** Available credit in `line_of_credit_id` >= requested `credit_limit`. |
| `partition_type`  enum string | **Required.**  Set to one of the following values:   * `FIXED` * `AUTH`   **Default value:** `FIXED`  Fixed partition or unrestricted credit partition. The system **ignores** the value set for the `credit_limit` parameter if the `partition_type` value is set to `AUTH` |
| `line_of_credit_id`  numeric string | **Required.**  The ID of the main line of credit from which you may share credit with a seller. **Conditions:**   * Pass params `credit_limit` and `ad_account_currency`. * Cannot pass `no_ad_account` |
| `marketplace_bm_id`  string | **Required.**  The marketplace’s Meta Business Suite ID.  See [Find your Business ID in Meta Business Manager⁠](https://www.facebook.com/business/help/1181250022022158?id=180505742745347) for more information. |
| `name`  string | **Required.**  The unique Meta Business Suite name created for the seller. |
| `skip_partner_page_creation`  bool | **Optional.**  Set to `true` to skip page creation for the seller.  **Default value:** `false` |
| `page_name`  string | **Optional.**  The name to assign to the page created for the seller.  **Skip** setting this parameter when `skip_partner_page_creation` is set to `true`.  **Condition:** Page name must meet [Facebook’s page name requirements⁠](https://www.facebook.com/help/519912414718764/?helpref=uf_share).  **Default value:** Partner’s Facebook page name configured during Managed Partner Ads API onboarding in the Collaboration Center. |
| `page_profile_image_url`  string | **Optional**  The URL from which to fetch the image for the seller’s page profile picture.  **Skip** setting this parameter when `skip_partner_page_creation` is set to `true`.  **Conditions:**   * Image dimension >= 180 \* 180 pixel * Image size < 1MB   **Default value:** Partner’s Facebook page profile picture configured during Managed Partner Ads API onboarding in the Collaboration Center. |
| `seller_external_website_url`  string | **Required.**  The seller’s website URL. |
| `seller_targeting_countries`  list<string> | **Required.**  The array of strings containing seller’s targeting countries.  The value is the country code instead of the country name. During ad creation, the country code is used as the default targeting country in the ad sets. Refer to [Country Codes⁠](https://www.facebook.com/business/help/2144286692311411?id=725943027795860). |
| `partner_facebook_page_url`  string | **Optional.**  The seller’s Facebook Page URL. |
| `partner_registration_countries`  string | **Required.**  The seller’s business registration country.  The value is the country code instead of the country name. Refer to [Country Codes⁠](https://www.facebook.com/business/help/2144286692311411?id=725943027795860). |
| `timezone_id`  numeric string | **Required.**  Timezone ID of the business/ad account.  Refer to [Timezone IDs](https://developers.facebook.com/docs/marketing-api/reference/ad-account/timezone-ids). |
| `vertical`  enum string | **Required.**  Set to one of the following values:   * `ADVERTISING` * `AUTOMOTIVE` * `CONSUMER_PACKAGED_GOODS` * `ECOMMERCE` * `EDUCATION` * `ENERGY_AND_UTILITIES` * `ENTERTAINMENT_AND_MEDIA` * `FINANCIAL_SERVICES` * `GAMING` * `GOVERNMENT_AND_POLITICS` * `MARKETING` * `ORGANIZATIONS_AND_ASSOCIATIONS` * `PROFESSIONAL_SERVICES` * `RETAIL` * `TECHNOLOGY` * `TELECOM` * `TRAVEL` * `OTHER` |

### Response

```
{
  "async_sessions": [
    {
      "id": "<ASYNC_SESSION_ID>",
      "name": "<ASYNC_SESSION_NAME>"
    }
  ]
}
```

Use the `ASYNC_SESSION_ID` to get the corresponding ID of a seller onboarded to managed partner ads.

See [How to Poll Async Session for Response](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/async-api-user-guide) for more information.

#### Success response

If the status is `COMPLETED`, polling the async session returns data that looks like:

```
{
  "result": "{\"id\":\"<NEWLY_CREATED_MANAGED_PARTNER_BM_ID>\"}",
  "status": "COMPLETED",
  "id": "<ASYNC_SESSION_ID>"
}
```

#### Failed response

If the status is `FAILED`, the resulting data of polling async session will look like:

Show Failure Response

### Error codes

Requests made to seller onboarding API can result in several different error responses. See [How to handle an error](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/error-handling-guide) for more information.

| Error Code | Error Subcode | Error Message |
| --- | --- | --- |
| 1800000 | 2310114 | Complete the managed partner ads onboarding process in Collaboration Center |
| 1800001 | 2310118 | The vendor ID {vendor\_id} is already in use. Enter a unique vendor ID that is not used anywhere else. |
| 1800002 | 2310138 | The business name {invalid\_business\_name} is not a valid name. Consider using {suggested\_business\_name} instead. Business names must meet Facebook’s business name requirements. |
| 1800002 | 2310139 | The business name {invalid\_business\_name} is not a valid name. Business names must meet Facebook’s business name requirements. |
| 1800003 | 2310133 | Enter a valid registration country code for this partner’s business |
| 1800004 | 2310127 | Remove or update the following invalid country codes listed for the partner’s registration countries: [{invalid\_registration\_country\_codes}] |
| 1800006 | 2310141 | Remove or update the following invalid country codes you entered: [{invalid\_targeting\_country\_codes}] |
| 1800100 | 2310117 | The catalog ID you entered {catalog\_id} cannot be used to create a catalog segment. You can go to the Commerce Manager to find the correct catalog ID number that contains this partner’s items. Retry onboarding the partner with the correct catalog ID. |
| 1800101 | 2310116 | Your business {business\_id} does not manage the catalog ID you entered {catalog\_id}. Enter a catalog ID that your business manages. |
| 1800102 | 2310115 | Check the catalog ID you entered {catalog\_id}. If it’s the correct ID and you need access to this catalog, ask someone with full control to go to Business settings in Business Manager to give you access. Once assigned, retry onboarding the partner. |
| 1800200 | 2310119 | Enter a line of credit ID you will use to share credit with partners |
| 1800201 | 2310144 | The line of credit ID you entered {line\_of\_credit\_id} is not an invoicing account or credit line ID. Enter the line of credit ID associated with Business ID {marketplace\_business\_id}. This should be the line of credit your business uses to share credit with partners. |
| 1800202 | 2310122 | Check the line of credit ID you entered {line\_of\_credit\_id}. If it’s the correct ID and you need access, ask someone with full control to go to Business settings in Business Manager to give you access to manage finance. Retry onboarding the partner once you have access to manage finance. |
| 1800203 | 2310123 | Your business {business\_id} does not manage the line of credit entered {line\_of\_credit\_id}. Provide an invoicing account or line of credit ID managed by your business. |
| 1800204 | 2310120 | Enter the currency for the ad account. This cannot be changed later. |
| 1800205 | 2310145 | The line of credit ID {line\_of\_credit\_id} does not support the currency entered {ad\_account\_currency}. Update the partner’s ad account currency to one the credit line supports. |
| 1800206 | 2310121 | Enter a credit limit amount greater than 0 |
| 1800207 | 2310143 | The credit limit you entered ${credit\_limit} is more than the available credit balance of ${available\_credit}. Either decrease the assigned credit limit or use a different line of credit ID with a higher balance. |
| 1800305 | 2310149 | Enter an image URL for the partner’s profile picture. The image should be 180 x 180 pixels or larger and less than 1 MB. |
| 1800306 | 2310150 | Images should be 180 x 180 pixels or larger and less than 1 MB. Check the image size and the URL {page\_profile\_image\_url} and try again or enter a new image URL. |
| 1800306 | 2310151 | Check the link {page\_profile\_image\_url} or enter a new one |
| 1800307 | 2310148 | The system timed out trying to process the image URL {page\_profile\_image\_url}. Check the image URL, retry the request or enter a new image URL. |
| 1800311 | 2310181 | The page name {invalid\_page\_name} is not a valid name. Consider using {suggested\_page\_name} instead. Page names must meet Facebook’s page name requirements. |
| 1800311 | 2310182 | The page name {invalid\_page\_name} is not a valid name. Page names must meet Facebook’s page name requirements. |

## See more

* [Check Seller Eligibility](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller/eligibility)
* [Seller Management](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller)
* [How to Poll Async Session for Response](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/async-api-user-guide)
* [Error Handling Guide](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/error-handling-guide)
