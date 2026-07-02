---
title: "Page Eligibility for Commerce"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting
---

# Page Eligibility for Commerce

Updated: Feb 5, 2021

Use the `commerce_eligiblity` API to enable platform partners to check the commerce eligibility for a given page for both offsite and onsite shops.

```
GET https://graph.facebook.com/vX.X/{pageID}/?fields=commerce_eligibility
GET https://graph.facebook.com/vX.X/{pageID}/commerce_eligibility
```

#### Sample Endpoint Response: List data (if any) accepted via `GET`

```
{
  "offsite": {
    "is_elibile": true,
  },
  "onsite": {
    "is_elibile": true,
  }
}
```

#### Endpoint Response: List data (if any) accepted via `GET`

```
{
  "offsite": {
    "is_elibile": false,
    "reasons": [
      {
        "code": "VIEWER_IS_NOT_PAGE_ADMIN",
        "message": "The Page cannot be used because you are not a Page admin.",
      },
    ],
  },
  "onsite": {
    "is_elibile": false,
    "reasons": [
      {
        "code": "VIEWER_IS_NOT_PAGE_ADMIN",
        "message": "The Page cannot be used because you are not a Page admin.",
      },
    ],
  }
}
```

#### Response Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| `offsite` | [`CommerceEligibilityWithReasonsObject`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#CEWRO) | Eligibility for offsite shops |
| `onsite` | [`CommerceEligibilityWithReasonsObject`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#COEIRWHM) | Eligibility for onsite shops |

## Objects

### CommerceEligibilityWithReasonsObject Object

| Attribute | Type | Description |
| --- | --- | --- |
| `is_eligible` | boolean | Determines if the page is eligible |
| `reasons` | `vec<CommerceOnboardingExternalIneligibilityReasonWithHelpMessage>` | Ineligibility reasons if the page is not eligible |

### CommerceOnboardingExternalIneligibilityReasonWithHelpMessage Object

| Attribute | Type | Description |
| --- | --- | --- |
| `code` | [`CommerceOnboardingExternalIneligibilityReason`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding/troubleshooting#COEIR) | Code for the ineligibility reason |
| `message` | string | Message explaining the reason code |
| `help_url` | string | Optional help page URL when applicable |

### CommerceOnboardingExternalIneligibilityReason enum

| Value | Description |
| --- | --- |
| `UNKNOWN` | This Page is not currently eligible for Facebook Shops. |
| `PAGE_ALREADY_ASSOCIATED_WITH_ONBOARDED_CMS` | This Facebook Page already has a Shop. |
| `VIEWER_IS_NOT_PAGE_ADMIN` | The Page cannot be used because you are not a Page admin. |
| `VIEWER_IS_NOT_BUSINESS_ADMIN` | The Page cannot be used because you are not an admin of the Business that owns the Page. |
| `PAGE_ADDRESS_NOT_SUPPORTED_FOR_SHOPS` | Facebook Shops are currently not available in your region. |
| `PAGE_ADDRESS_NOT_SUPPORTED_FOR_SHOPS_ONSITE` | Checkout on Facebook or Instagram is currently not available in your region. |
