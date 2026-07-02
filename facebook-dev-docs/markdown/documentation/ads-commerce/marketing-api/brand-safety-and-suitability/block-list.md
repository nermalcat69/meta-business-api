---
title: "Brand safety and suitability partner setup"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/brand-safety-and-suitability/block-list
---

# Brand safety and suitability partner setup

Updated: Jun 30, 2026

**Ads Management Standard Access is now Marketing API Access Tier**

**No code changes are needed.**

Tier labels have been updated: “Standard Access” is now **Limited Access**, and “Advanced Access” is now **Full Access**. The revised qualification threshold for Full Access has been reduced from 1,500 to **500 Marketing API calls** in the past 15 days. The underlying permission identifier remains the same, and existing access levels are preserved automatically. Learn more in the [Marketing API Access Tier documentation](https://developers.facebook.com/docs/features-reference#marketing-api-access-tier).

The purpose of this page is to provide an overview of the initial setup steps required for program participation. The main elements it addresses include:

* Setting up a **Business** and **Meta Business Suite**
* Creating and obtaining access to Ad Accounts
* Creating an **App** to access Meta’s API
* Providing documentation for **Brand Safety and Suitability**

**Business and Meta Business Suite**

Meta Business Suite is the main tool you use to coordinate your company’s operations with Meta. It helps you manage your Business, and acts as a container for key Meta objects like Ad Accounts, Apps, and so on.

## Create a business

The following pages contain overview information, steps to create a Business and Meta Business Suite, as well as API developer documentation:

* Create a Meta Business Suite
* Business Overview
* About Meta Business Suite
* About Business Account Roles and Permissions
* Meta Business Suite API (Developer Documentation)

## Extending coworker access

A Business may be created by an individual but should be extended to relevant company personnel. See [Add People to Your Meta Business Suite⁠](https://business.facebook.com/business/help/2169003770027706?helpref=faq_content) and [About Meta Business Suite Roles and Permissions⁠](https://business.facebook.com/business/help/442345745885606) for more information.

Invitees receive an email containing a link that prompts them to sign into their personal Facebook accounts.

Note that personal Facebook accounts are required to use Meta Business Suite — but coworkers do not see each other’s Facebook accounts and are not required to be friends on Facebook.

Note also that many Meta Business Partner functions require Admin access.

## Before you start

To leverage Meta’s Marketing API (required for program participation), you need to set up a [Meta Developer account](https://developers.facebook.com/docs/development) and [create a Meta App](https://developers.facebook.com/docs/development/create-an-app).

### Create an app

* Go to [developers.facebook.com](https://developers.facebook.com/).
* Log in with your personal Facebook account. (This step should enable Developer access for your Facebook account.)
* Once logged in, select My Apps and click on Create App.
* In the subsequent screen, ensure that the App is linked to your Business; choose a relevant name and contact email, and describe the purpose of the App, before clicking Create.

### Extend coworker access

* Go to Business Settings.
* Click Accounts and click Apps.
* Select your App and click Add People.
* Assign relevant coworkers to either App Developer or Manage App (admin) roles.

Note that coworkers must be added to your Business prior to becoming available for selection in the above flow.

### Business Verification

Business Verification is a process that allows us to verify your identity as a business entity. Apps that request advanced access for permissions and apps that allow other Businesses to access their own data must be connected to a Business that has completed [Business Verification](https://developers.facebook.com/docs/development/release/business-verification).

Learn more about [Business Verification](https://developers.facebook.com/docs/development/release/business-verification).

See blog post - [Developer Platform will now require Business Verification for Advanced Access](https://developers.facebook.com/blog/post/2023/02/01/developer-platform-requiring-business-verification-for-advanced-access/)

## Submitting for App Review

Before submitting an App for review, it is important to understand the following:

* Meta has [multiple layers of security and permissioning as well as processes](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization#standard) to ensure Meta’s data (whether it be our users or our advertisers) is protected, all of which are handled by various privacy and security teams who keep our developer documentation up to date.
* Some of these measures are at an overall business level, such as the [third party assessment⁠](https://about.meta.com/privacy-progress/) and [business verification⁠](https://www.facebook.com/business/help/2058515294227817?id=180505742745347). Other processes occur as the partner begins to try and access more sensitive data such as ads insights and publisher info. These include but are not limited to the Brand Safety and Suitability capability grants, App [permissions and features](https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types#available-permissions) to access specific types of data, [App review](https://developers.facebook.com/docs/app-review), [data use checkup](https://developers.facebook.com/docs/development/maintaining-data-access/data-use-checkup), [data protection assessment](https://developers.facebook.com/docs/development/maintaining-data-access/data-protection-assessment) and [data handling questions](https://developers.facebook.com/docs/development/release/data-handling-questions).
  In addition, an advertiser must explicitly consent to you [pulling their data⁠](https://business.facebook.com/business/help/915885887059947?id=420299598837059).

All app permissions and access are documented throughout the developer documentation. As you develop your integration:

* Anytime a document lists “permission”, “feature” or “access”, follow the instructions within the Developer Documentation to apply for that access.
* When making an API call, if you get an error that says “permission”, go to the Developer Documentation, search for “permission” and ensure that you have all of the permissions listed within that document for that product.

For example, if you search the [Block List documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/brand-safety-and-suitability/block-list), you will see it provides thorough documentation regarding the different types of permissions (View Performance, [`ads_read`](https://developers.facebook.com/docs/permissions), [`ads_management`](https://developers.facebook.com/docs/permissions), and [Marketing API Access Tier](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization#standard)) and links to further documentation on each. Each of these permissions and features are used to ensure data security across a number of our API integrations, including programs outside of Brand Safety and Suitability, and the applications are reviewed by our security and privacy teams.

Our security and privacy teams will be reviewing your App. These teams are purposefully kept separate from the sales, partnerships, and product teams. Therefore, they are not familiar with Meta’s Ads products or each use case and their aim is to protect user and advertiser data.

In your App review submission, you need to clearly outline the following:

* Which functionality of your app requires this permission?
* How will the permission enhance your app’s functionality? How will the permission enhance how the integration works? Submit specific details on why the permission/access is needed, including:

a. Detailed description of how you will be using the permission specifically using the wording for the permission outlined in the documentation. For example, using the ads\_read permission to create and apply [block lists⁠](https://www.facebook.com/business/help/255483958155378?id=1769156093197771) as well as access ad performance data for your advertisers’ campaigns and provide them a dashboard on the [brand safety and suitability⁠](https://www.facebook.com/business/help/1559334364175848?id=1769156093197771) of their ad.

* Make it clear that your end users are advertisers and you as the partner are providing them reporting on their ads performance. How will the permission enhance the end user’s experience?

a. What the end product of using that data will be. For example providing a description of [block lists⁠](https://www.facebook.com/business/help/255483958155378?id=1769156093197771) and [brand safety and suitability⁠](https://www.facebook.com/business/help/1559334364175848?id=1769156093197771) and linking to Meta owned documentation so the security and privacy teams can understand this is an approved Meta use case.

See [Server-to-Server App Sample Submission](https://developers.facebook.com/docs/app-review/resources/sample-submissions/server-to-server)

## Accessing client Ad Accounts

You need to obtain access to the relevant Ad Accounts your client wants included for Brand Safety and Suitability. This is achieved by your client, and their third-parties, sharing all relevant Ad Accounts to your Meta Business Suite. Ask the client to go to the Ad Account in their own Business Settings and click Assign Partner. Provide them with your Business ID and ask for View Performance access, so that they can complete the Assign Partner flow. See [Add ad accounts in Meta Business Suite⁠](https://business.facebook.com/business/help/915885887059947?id=420299598837059). At this point, the Client Ad Account should be visible in Business Settings.

## Additional info

* [Verify your business in Business settings⁠](https://www.facebook.com/business/help/2058515294227817?id=180505742745347)
* [Add System Users to Your Meta Business Suite⁠](https://www.facebook.com/business/help/503306463479099?id=2190812977867143)
* In order to communicate effectively with clients, visit [About the structure⁠](https://www.facebook.com/business/help/706063442820839?helpref=page_content) of Facebook Ads to learn about Ad Accounts’ underlying ad objects (Campaign, Ad Set, and Ad).
* [Graph API Reference: Business | Ad Accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_accounts)
* [Ad Account | Developer Doc](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account)
* [Ad Account, Insights | Developer Doc](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/insights)
* [Graph API Reference: Ad Account | Campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/campaigns)
* [Ad Set | Developer Doc](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)
* [Ad Set Insights | Developer Doc](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/insights)
* [Graph API Reference: Campaign | Ad Sets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adsets)
