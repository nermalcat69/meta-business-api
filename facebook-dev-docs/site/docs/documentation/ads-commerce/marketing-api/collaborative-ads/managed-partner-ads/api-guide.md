---
title: "Managed Partner Ads: Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide
---

# Managed Partner Ads: Integration

Updated: May 5, 2026

**Ads Management Standard Access is now Marketing API Access Tier**

**No code changes are needed.**

Tier labels have been updated: "Standard Access" is now **Limited Access**, and "Advanced Access" is now **Full Access**. The revised qualification threshold for Full Access has been reduced from 1,500 to **500 Marketing API calls** in the past 15 days. The underlying permission identifier remains the same, and existing access levels are preserved automatically. Learn more in the [Marketing API Access Tier documentation](https://developers.facebook.com/docs/features-reference#marketing-api-access-tier).

## Overview

There are three main steps involved in the overall Managed Partner Ads integration process, as outlined below. This section provides an overview to help you understand and plan your work accordingly.

![Three-step Managed Partner Ads integration flow: Preparation, Integration, and Launch, connected by arrows](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/256298452_419778669681607_7294871274636799422_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=H-TW_FtVKUsQ7kNvwHLFtLS&_nc_oc=Adqi66i22WqPOnfJ_bcAu11-MHnDTbHu1wdRirwnTv8Bd970FyyoHKVNL_UHn-DrcV9gxVCeryHN3juYiA40QdR_&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQABZs9mzyGvBpuJeSCOzb5ZPPvpVjRDjmcZu0d5G92QUA&oe=6A607DDF)

The end-goal is to set up an automated process to onboard your sellers and build an interface for sellers to engage with. Through this service, Meta ads are run and operated.

![Diagram of sellers flowing into a marketplace-built seller interface using MPA and Marketing APIs, through the marketplace Business Manager, to Facebook ads run on behalf of sellers](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/256196421_273798274683743_5368498048290587075_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DvjloruKwkYQ7kNvwEQKuEp&_nc_oc=AdqhxVohAGKLrKreYKwKAkqMvE6ahxptcUX_5dnGC7M6HkxCm1aTt_A_vaN5915zQYeaoEi4f5qDPTimvk13fThp&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQAy22dL_dkxz1Z1C1Dcm9AwAig4ZrNj9_dj_u7kUJq6bA&oe=6A606A89)

## Step 1: Preparation

* Onboard into [Collaborative Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads#step-1--onboard-into-collaborative-ads). To start this process, click **Become a Retail Partner** in the [Collaborative Ads Retailer Directory⁠](https://www.facebook.com/collaborative_ads/retailer_directory/).
* Own the following assets:
  * Your marketplace [Business Manager](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads#business-manager) — If you don't have one, see the [Create a Business Manager⁠](https://www.facebook.com/business/help/1710077379203657) to learn how to create it.
  * A registered Meta app — This is used to interact with the Marketing API, which the Managed Partner Ads API is built upon.
    * Your app must have the `business_management` and `ads_management` permissions.
    * Ensure your app has [Marketing API Access Tier](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization) for higher rate limiting.
    * Pass the [App Review](https://developers.facebook.com/docs/app-review) process.
  * A marketplace access token (user token) — Follow the instructions found in [Add Systems Users to Your Business Manager⁠](https://www.facebook.com/business/help/503306463479099?id=2190812977867143) to generate the token.
  * At least 20,000 unique sellers in your catalog with each seller having a unique ID (Vendor ID) associated with them.

Each seller must have a unique ID associated with them. This is referred to as the Vendor ID and is used to automatically create a Catalog Segment when onboarding a seller.

## Step 2: Integration

You are now ready to start integrating your platform with the Managed Partner Ads APIs.

In order to create a Minimum Viable Product (MVP) for your sellers, the following 4 modules will need to be built or setup:

* **[Build] Seller Onboarding** — This is a process that you as a marketplace will create in order to allow sellers to sign-up for the service you provide using Managed Partner Ads. During your pilot phase of testing Managed Partner Ads, you may utilise our **seller onboarding tool** in order to quickly assess the performance of using Managed Partner Ads. This should be a temporary process and you should be creating your own process once you are ready to start offering Managed Partner Ads to your sellers. *Please contact your Meta representative for access to this tool.*
* **[Setup] Default Template for campaigns** — This is a standard template that you create for all your sellers to run campaigns. This can be created in the Collaboration Center and must be set up before any sellers can run a campaign. The template will use Catalog Sales as the objective with two ad sets (prospecting and retargeting) using the carousel format. The following parameters can be configured:
  * Budget allocation
  * Ad creative primary text
  * URL

  ![Campaign Template structure showing two required ad set components, Prospecting and Retargeting, each containing an ad component](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/258544933_764724078261278_7064284177217714110_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=rwps_4djeYAQ7kNvwHaH3aR&_nc_oc=AdrdILziLkJmdYFyexinWUjyZ_J4WkYUZaBFN7-RlnK29_CqeODUJTb85A81UNf9wwrAZaYk1PZ5GAVZJg7bvrcC&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQDC1atAoy2dUS3WBZHNigNcdvLWC_i7qyUu6g7-CEzpKA&oe=6A6068F6)

  Both default templates and custom templates are supported. More information can be found in the [Types of Templates](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/reference#types-of-template) section.
* **[Build] Seller Ad Campaigns** — This is a custom interface you provide your sellers in order to create, manage and display reports for campaigns. See the API section under [Partner Ads Management](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/mpa-ads) to understand how to build this.
* **[Build] Billing** — This should be integrated with your own existing billing infrastructure and should be provided as part of the Managed Partner Ads service and allow sellers to view/manage their finances with respect to the campaigns being run. Meta will send an invoice to the marketplace every billing cycle for payment settlement between Meta and the marketplace. The default invoice setting is 1 invoice to 1 seller.

  To consolidate invoices, you can [create an invoice group⁠](https://www.facebook.com/business/help/545451859299492?id=2356205651275420) and add ad accounts into the group up to 3 days before the invoice is sent. This can be achieved using our [Business Management API](https://developers.facebook.com/docs/marketing-api/2tier-bm-solution/guides/invoice-group) to manage invoice groups (add/update/delete).

Marketplaces are expected to provide services to sellers using a dedicated, self-contained and built platform that utilises the Managed Partner Ads APIs. This allows the marketplace to control and manage all aspects of the seller ads ecosystem, even though the ads appear offsite on Meta.

### APIs overview and UI mock

#### Marketplace Managed Partner Ads API Overview

The **Marketplace (parent)** access token must be used to make the following calls

![Marketplace Business Manager access token diagram branching to Seller Business Metadata, Lookup Seller Business, Seller Business Assets, and Seller Business Configuration API calls with their GET and POST outputs](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/256288601_904935240130594_7243671456671881980_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=EojAsmrre-8Q7kNvwGiVvv5&_nc_oc=Adq3C6y9X97uFCJ6cRSDzscNUIX4_MY0wup9tm4V-tQMTVSN5mhn1_DJL1FlvnABjHVN_J-uSvFGF5I6qRIRib0M&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQBADarzELS3l-fwEOTVvzLvEtEKclhP5qT47g521bqvdQ&oe=6A6078BE)

#### Seller Managed Partner Ads API Overview

The **seller (child)** access token must be used to make the following calls

![Seller Business Manager access token diagram branching to Create Ad campaign, Update Ad campaign, and Review performance via the Insights API, with their POST and GET fields](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/255912816_1313700529067388_3075498392557850881_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-Sf2Pqk4kx4Q7kNvwGEDnHw&_nc_oc=Adq-EcQSMa_HqnMohiQtLo7imjZ4-3bhKaEiNzLjTKBgQ_yJ2xEn-2PnBJmdba3LyHMdUHzImlrX3KSaSoRF_DDa&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQAd_wH3-Tr8dUlzhGJ9yNTNW5MuQKSGXbyG_P1GTkyDAQ&oe=6A606AEC)

#### Seller onboarding and lookup

To onboard and search for existing sellers, use the [Seller Eligibility API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller/eligibility), [Lookup Seller Business API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/reference#lookup-seller-business), [Seller Business Creation API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/api-guide/seller/onboarding) and [Seller Business Configuration API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/reference#update-seller-business-configuration-api).

An example flow chart of the seller onboarding and lookup flow:

![Flow chart for seller onboarding and lookup: new sellers go through the Seller Eligibility and Seller Business Creation APIs, while existing sellers are found via the Lookup Seller Business API and updated through the Assets and Configuration APIs](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/255953784_749550566442402_4946707475358499637_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=D0V8udwPSBkQ7kNvwFWt9Hl&_nc_oc=AdrLbyxk1CIWfsZDOhsQ5He48tRwh6ZmnOOrjWSO1dxNWade87RgyaSaXatx_aFc5mUyuSoIlw2clzBFlARTVJcJ&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQDVeDOmUuiuupHFgU0sE8ibyNwAtGFWCdqj1MEUQWgC_Q&oe=6A606A2D)

In addition, you will also be using other Meta Graph APIs for campaign management and invoicing. For full technical details on our APIs, please refer to the [Managed Partner Ads API Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads/managed-partner-ads/reference).

### Example: User Interfaces for Sellers

As a marketplace, you are expected to use the Managed Partner Ads APIs to create an interface for your sellers to engage with as part of your service offering. The below mockups are some examples and for illustration purposes ONLY.

* **Seller registration** — This is where the seller will express interest in onboarding onto Managed Partner Ads. Please note, the Facebook page URL refers to the Seller's Identity Page and is compulsory for integrity check purposes.

  ![Mockup of a seller portal Application to join Facebook ads dialog with Seller name and Facebook page url fields and Cancel and Submit buttons](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/251482813_257105872925954_1786520238521893631_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZvPznDyj_3AQ7kNvwFM01G2&_nc_oc=AdpOvn3vDP1G6NbR0wwmIvBmhEuBBpXN-QRU6sIVuCzQiuc3a5amgNlyveNQsWnqOWwh4tm7TvC7lvwsAi2nTMoV&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQCxz5YGS5ZtMGNN3YcypIi2OpKSGW_ycrnpAMifWSEkYw&oe=6A608D8A)
* **Ad creation** — A custom interface built by the marketplace using the Managed Partner Ads APIs to allow sellers to run Meta ad campaigns.

  ![Mockup of a seller portal New campaign creation dialog with campaign name, target country, budget, and start and end date fields and a Create button](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/252289792_1501620746866793_6544360564830232767_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=MObaTuN9jQUQ7kNvwGE5dYv&_nc_oc=AdpAs8F-kAUUj0_0t8uY2oNnUtUPXVV9H-w70UqvsMF4-YHu4awc_y20sG2fqH3B_8OELM63DClK4HTJRg7IseGE&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQCMjfuofvdyQeSM2eHNcXMBSQBUZ7fZTuNey70ZeUs04g&oe=6A607E8D)
* **Ad update** — Modify existing ad campaigns.

  ![Mockup of a seller portal Campaign update dialog showing editable target country, budget, and end date fields and an Update button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/252295682_575972357005791_4271357802141223131_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=snM_4aRk1WoQ7kNvwGBx5Kg&_nc_oc=AdqcWIVNjl9U9RyRWqFR3auWw9TPdSC5EoTBkqAmR7eCgZMQmusX4WgOpdtNTHg6bNQEnjqvch7EoCALjQuw2XCu&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQCCT2daSFILTfcERonCEjyu-aX2BQ2u5uTEw8fIWgBq8A&oe=6A606F02)
* **Ad performance viewing** — Review performance of ad campaigns.

  ![Mockup of a seller portal Campaign performance screen with a pie chart and a metrics table listing purchase value, purchases, and spending](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/252247568_278990874124294_7306437536319628345_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZFw8kKZkvV4Q7kNvwGViZyM&_nc_oc=AdqRUfGJ4RWhF_TfYGpSWh2nQqGkT-ct4ZVfzSEuUIvnj1gUDmN2ZkbNl36OHB2CcLRbdZ18J9rdZFHuYRLuWZkE&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=63yBIqvf-nDlx_tBsijxhA&_nc_ss=7b289&oh=00_AQATDlPAJamhZOysQ2WPxCh6LXLjhMCHypyaWB4tZS-d3g&oe=6A605991)

### Managed Sellers Dashboard

As a marketplace, you can access a list of your managed sellers to view details of the campaigns you are running on their behalf by going to **Business Manager** > **Collaboration Center** > **Partnerships** > **Managed partners**. This will allow you to:

* View a dashboard of all managed sellers, including business information.
* See an overview of campaign delivery, credit, catalog segment, ad account, page and business account issues.

If you have use cases in addition to the ones in the Collaboration Center, you may want to consider developing an internal admin portal for your business operations team.

## Step 3: Launch

Before launching, please ensure that your Meta app has passed our [App Review](https://developers.facebook.com/docs/app-review) process.

You are now all set to launch your Managed Partner Ads solution. You may consider rolling it out to **eligible sellers** in batches and devise communication plans accordingly.

* Ensure eligible sellers are aware of the Managed Partner Ads solution.
* Provide a channel to receive feedback on the seller interface, including any feature requests and bug reports.
* Monitor seller activity on Collaboration Center through Seller Dashboard or build your own monitoring tool for your own needs using Marketing API.
* Keep track of your sellers' campaign performance, build automated systems to detect problems and make changes for further optimization of delivery and performance.
* Test different creatives, targeting and optimization options, understand what works/what does not for which seller.

When your solution starts delivering value and can scale, start rolling it out to more sellers gradually, promote it in different channels and scale the number of sellers in your platform and their overall investment through Managed Partner Ads.
