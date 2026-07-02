---
title: "Accounts and Assets"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/get-started
---

# Accounts and Assets

Updated: Jun 16, 2025

**NOTE**: This document will be deprecated on **September 4, 2025**. On that date, Shops checkout will no longer be available on Facebook and Instagram. Buyers will instead be sent to sellers' own websites for checkout.

When you set up a Shop in Commerce Manager, Facebook creates or connects a few accounts and assets together to form your commerce presence. We recommend to learn and understand their roles and relationships to build a successful commerce integration.

## Assets and Functions

| Asset | Function |
| --- | --- |
| **Business** | Main account that represents your business with Facebook. Your business owns all of the assets described below that collectively form your commerce presence. |
| **Commerce Account** | Represents your commerce settings and hosts data about your commerce activities. |
| **Facebook Page** | A commerce account is backed by one Facebook Page owned under the same business. The Facebook Page can also be activated as a sales channel. |
| **Instagram Account** | A commerce account can be connected to a number of Instagram accounts owned under the same business. The Instagram accounts can be activated as sales channels. |
| **Catalog** | A commerce account is connected to a catalog owned under the same business. The catalog contains product listings used in your shops. Removing the catalog from your business will delete your commerce account. You can find the IDs of these assets in Business Manager and Commerce Manager. You can also retrieve the IDs and troubleshoot the setup via the API. |

![Diagram of a Business owning two Commerce Accounts, each connected to a Page, Product Catalog, and Instagram Accounts](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/651724009_1459945282530788_5607738426331390039_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tNPIp3AhTQQQ7kNvwFSEVDl&_nc_oc=Ado38_c0l382EQxa9WVWgC0e_J3JqfoXCJF7QyOTnhPHYlcCJE17bgvKw1LD9qJkJXJTiBaJqbKL0Fuie1HeAnh3&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=1JvWqoLZFpOza9VkK2WrMg&_nc_ss=7b289&oh=00_AQAQET5uTwQ6sGEDa3K2BlB4CkdAXHG9UXw2Qt_LJ4rBqw&oe=6A6098AA)

In the diagram:

* The shaded assets and connections power a functional commerce account.

Your business (blue connections) must own the Facebook Page, Catalog, and (optionally) Instagram accounts prior to creating the Commerce Account in Commerce Manager.

* Your Commerce Account will be connected to those assets during the setup in Commerce Manager (orange connections).
* The Commerce Account is, in turn, also owned by the business.

These connections must hold for your Commerce Account to work properly.
