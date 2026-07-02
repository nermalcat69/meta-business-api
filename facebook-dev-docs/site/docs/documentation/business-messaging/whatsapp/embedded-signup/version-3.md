---
title: "Version 4"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-3
---

# Version 4

Updated: Jun 28, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

Release date: October 8, 2025. This page is updated as additional products become supported.

To upgrade to the v4 experience, you need to create a new [Facebook Login for Business Configuration](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation/#step-2-create-a-facebook-login-for-business-configuration), and select your desired products. Selecting the products will automatically set you to v4.

See [screenshots](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4#using-the-facebook-login-for-business-configuration-to-get-started-with-v4) below.

## Overview of v4 changes

* Simplified onboarding experience for businesses:
  * You can onboard businesses to more business messaging in a single flow ([see supported products](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4#supported-products)).
  * Asset selection, business information, and permissions are each consolidated onto a single page.
  * Asset admins can share assets from other business portfolios.
  * The flow auto-links phone numbers to Facebook Pages when onboarding to ads that click to WhatsApp via the Marketing API.
  * Value proposition and Terms of Service are clearly presented.
* The [Facebook Login for Business Configuration](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4#using-the-facebook-login-for-business-configuration-to-get-started-with-v4) is used to define which products to add into your onboarding flow.

## Learn more

* [v4 - Cloud API flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow)

## Supported products

v4 supports additional business messaging products, enabling businesses to set up and manage multiple communication channels from a single platform:

* **Conversions API (WhatsApp, Instagram, Messenger)**: Track and optimize messaging interactions by selecting the messaging platform you want to monitor, enabling enhanced measurement and optimization.
* **Click to WhatsApp Ads (CTWA)**: Create ads that direct users to initiate WhatsApp conversations with your business.
* **Click to Messenger Ads (CTM)**: Run advertising campaigns that start conversations with users on Facebook Messenger.
* **Click to Direct Ads (CTD)**: Launch Instagram ad campaigns that drive users to direct messaging conversations on Instagram Direct.

## All other supported products

v4 continues to support existing business messaging products, allowing businesses to manage their established communication channels.

* **Cloud API**: Integrate and manage WhatsApp messaging at scale, enabling businesses to send and receive messages, automate workflows, and access advanced messaging features.
* **Marketing Messages API for WhatsApp**: Use this API to manage optimized marketing messaging, providing tools for message analytics, and enhanced customer engagement.
* **WhatsApp Business app user onboarding**: Onboarding WhatsApp Business app users continues to be supported through the [`feature_type` parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#step-2--customize-embedded-signup).
* **Partner-led Business Verification (PLBV) support**: [PLBV](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) enables partners to verify businesses after onboarding via Embedded Signup. If you are considering this option, ensure you are an approved Select Solution or Premier Solution Partner, and [approved for access⁠](https://www.facebook.com/business/help/1091073752691122).
* **Automatic Events API**: [Automatic Events API](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api) notifies your application about key events that occur through Click-to-WhatsApp ads.

## Use the Facebook Login for Business Configuration to get started with v4

v4 enables you to easily set up and change which products you want to include in your onboarding flow:

Step 1: Navigate to [App Dashboard](https://developers.facebook.com/apps) > **Facebook Login for Business** > **Configurations** to create a new configuration.

Step 2: Select **Embedded Signup** as the login variation.

![Create a Configuration wizard on the Login variation step with WhatsApp Embedded Signup selected](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/588554056_1899889040926861_7735493385836726995_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=iuDWdNTufxEQ7kNvwG7CdKc&_nc_oc=Adp239MPCSLYKXAfd1-kKJaOoT3IUipQWi4VvgelOAZ8MtOoxwDKk6fLXPuHMdNHYWNrwtDWoWu9ADq5GefoakGS&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=TohxGFIlHrtN5mQbaM513Q&_nc_ss=7b2a8&oh=00_AQCAK8_o7w0AU9a0UisXdVxURchpsGDeCUTLuLFMwtRN3g&oe=6A6045B6)

Step 3: Select which products you want to include in your onboarding flow. Selecting more than one product is optional.

![Create a Configuration Products step with Cloud API, Marketing Messages, Click to WhatsApp Ads, and Conversions API selected](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/589045267_1817285795585343_2603642295217157227_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vG0UnKeEHtIQ7kNvwGKsgaV&_nc_oc=AdqiFl5KGa3yV9lg_XHhSey_X7nR651RPe_tC7nRyYtSFgp5rGZ06Zqrof99HMyANcCWhpEPp4PayWhwHj9t1HKn&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=TohxGFIlHrtN5mQbaM513Q&_nc_ss=7b2a8&oh=00_AQAwJUnaJsgfRPMEHso-thVtaGZXhsbdEKwWMyw3YKlfcA&oe=6A605E3D)

Step 4: Copy the configuration id to use inside the Facebook Login SDK.

![Configuration successfully created dialog showing the Configuration ID with a Copy button](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/588573995_1434645688667306_4273697828818050269_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=jDbW5LVne-cQ7kNvwHnUsax&_nc_oc=AdqO-XaAwAVwpoqmGBv_TcMkGgCUChjuIHBZw49nKED0yeG--VEekihNqqqj_4_-uDcjswgK1CLH8Am1yH_Crxdx&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=TohxGFIlHrtN5mQbaM513Q&_nc_ss=7b2a8&oh=00_AQDQ2kbvmxTJlMzsPTRxHLv-Pz3SprpcDOIHM0TcknQjVg&oe=6A606F84)

## Required assets and permissions

When you select products for v4, the flow automatically selects all necessary permissions and assets. You will need advanced access for all permissions automatically selected in the flow. If needed, you can select additional assets and permissions. The table below is a reference on what assets and permissions you need depending on what product you would like to offer.

| Product | Required assets | Required permissions (Advanced Access) |
| --- | --- | --- |
| [Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api) | WhatsApp Business accounts | whatsapp\_business\_management  whatsapp\_business\_messaging |
| [Click to WhatsApp (CTWA on Marketing API)](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-whatsapp) | WhatsApp Business accounts  Facebook Pages  Ad accounts | ads\_read  ads\_management  pages\_manage\_ads  pages\_read\_engagement  pages\_show\_list |
| [Click to Messenger (CTM on MAPI)](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-messenger) | Facebook Pages  Ad accounts | ads\_management  pages\_manage\_ads  pages\_read\_engagement  pages\_show\_list |
| [Click to Instagram (CTD on MAPI)](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-instagram) | Facebook Pages  Ad accounts  Instagram accounts | ads\_management  pages\_manage\_ads  pages\_read\_engagement  pages\_show\_list |
| [Marketing Messages API for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/overview) | WhatsApp Business accounts | whatsapp\_business\_management  whatsapp\_business\_messaging |
| [Conversions API for CTWA](https://developers.facebook.com/documentation/ads-commerce/conversions-api/business-messaging#ads-that-click-to-whatsapp) | WhatsApp Business accounts  Pixels | whatsapp\_business\_manage\_events |
| [Conversions API for CTM](https://developers.facebook.com/documentation/ads-commerce/conversions-api/business-messaging#ads-that-click-to-messenger) | Facebook Pages  Ad accounts  Pixels | page\_events |
| [Conversions API for CTD](https://developers.facebook.com/documentation/ads-commerce/conversions-api/business-messaging#ads-that-click-to-instagram-direct) | Facebook Pages  Ad accounts  Instagram accounts  Pixels | instagram\_manage\_events |
