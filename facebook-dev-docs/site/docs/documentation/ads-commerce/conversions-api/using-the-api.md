---
title: "Get Started"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/using-the-api
---

# Get Started

Updated: Jun 28, 2026

**Ads Management Standard Access is now Marketing API Access Tier**

**No code changes are needed.**

Tier labels have been updated: "Standard Access" is now **Limited Access**, and "Advanced Access" is now **Full Access**. The revised qualification threshold for Full Access has been reduced from 1,500 to **500 Marketing API calls** in the past 15 days. The underlying permission identifier remains the same, and existing access levels are preserved automatically. Learn more in the [Marketing API Access Tier documentation](https://developers.facebook.com/docs/features-reference#marketing-api-access-tier).

This page describes the process of implementing the Conversions API and details implementation prerequisites. If you are a third-party partner offering Conversions API functionalities for advertisers, there are [different requirements](https://developers.facebook.com/documentation/ads-commerce/conversions-api/set-up-conversions-api-as-a-platform) to get started.

If your business has a firewall for outbound requests, see [Crawler IPs and User Agents](https://developers.facebook.com/docs/sharing/webmasters/crawler#identify) to get Facebook's IP addresses. Be aware that the list of addresses changes often.

Web, app, and physical store events shared using the Conversions API require specific parameters. The list of [required parameters is available here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters).

## Process overview

The process of setting up a Conversions API integration consists of the following high-level steps:

* Choosing the integration method that is right for you.
* Completing the necessary prerequisites for that implementation method.
* Implementing using that integration method.
* Verifying your setup and adhering to best practices that help improve ad performance.

## Integration methods

There are several methods for integrating with the Conversions API, and they vary by level of effort, cost, and the features they enable. See [this article⁠](https://www.facebook.com/business/help/433493041367251?id=818859032317965) for an overview of Conversions API setup options.

The primary focus of this developer documentation is building direct integrations.

## Requirements

### Pixel ID

You must obtain a [Pixel ID⁠](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) to use the Conversions API. If you've already set up a Pixel for your website, use the same Pixel ID for your browser and server events.

### Meta Business Suite

You also need a [Meta Business Suite⁠](https://business.facebook.com/) to use the API. Meta Business Suite helps advertisers integrate Facebook marketing efforts across their business and with external partners. If you don't have a Meta Business Suite yet, see the Help Center article on [how to Create a Meta Business Suite⁠](https://www.facebook.com/business/help/1710077379203657).

### Access token

To use the Conversions API, you need an access token. There are two ways of getting your access token:

* Using Events Manager (Recommended)
* Using your own app

#### Using Events Manager (recommended)

To use the Conversions API, you need to generate an access token. Pass the access token as a parameter in each API call. Inside Events Manager, follow these steps:

**Step 1** - Choose the Pixel you want to implement.

**Step 2** - Select the Settings tab.

![Events Manager Pixel header tab bar with the Settings tab selected, next to Overview, Test Events, Diagnostics, History, and Implementations.](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/256580685_927677734830755_2094553860769734043_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KOLO62zvT4sQ7kNvwEwyxv4&_nc_oc=AdoUWaWyLxJn1DuGxFUuTu3YTxGfaa-O68NbOmC_gSV9xjPlwyLe1GMsPdca8D-5R3zaVSqaI-aAvTWAyNhsN9AS&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=0RMGPKyDReXBpIzvhmYIvQ&_nc_ss=7b289&oh=00_AQDY5IWoMzcfwfvp4U8A-Ov_ttYLjIsJxN3RoKitsZLpDQ&oe=6A6083FF)

**Step 3** - Find the Conversions API section and click on the **Generate access token** link under Set up manually, and follow the instructions pop-up:

**Note**: The Generate access token link is only visible to users with developer privileges for the business. The link is hidden from other users.

![Events Manager Settings page Conversions API section with the Generate access token link highlighted under Set up direct integration.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/590086877_1236076635017652_6418235756617021850_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zrVZ4PwTMzIQ7kNvwGeZajd&_nc_oc=Adp8eGlDTe42eAIoN3yxCMgVeLfQYRTYrcgOA3jev6HuteP14ir-VZwvp8k8K4-rJtIY1zjUD_9OtWiaMccVfhTy&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=0RMGPKyDReXBpIzvhmYIvQ&_nc_ss=7b289&oh=00_AQASucxeZB8whJf69qErRzwUON_ohInppZ-2lXB9L5dJuA&oe=6A608DDF)

Once you have your token, click on the **Manage Integrations** button in the Overview tab in Events Manager. In the pop-up screen, click the **Manage** button next to Conversions API. Clicking Manage automatically creates a Conversions API app and Conversions API system user for you. *There is no need to go through App Review or request any permissions*.

![Events Manager Integrations pop-up showing Conversions API In Progress with its Manage button and the Manage Integrations button highlighted.](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/256525579_1605874206422638_8242489354165474255_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=bENmKTsnfAQQ7kNvwFXai_O&_nc_oc=Ado31TR2eRx8cr2L03wsu6quCah2btfNh9IPjtCpIXlE-j1YkMQwl8KZxur1pcJoSCoT93lSfoUZs5YC_22EnzOJ&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=0RMGPKyDReXBpIzvhmYIvQ&_nc_ss=7b289&oh=00_AQAmMLRSCBnup_BE733hfRyYp-RyR1otb6dgMQfZKXlb3g&oe=6A607B42)

#### Using your own app

If you already have your own [app](https://developers.facebook.com/docs/apps) and your own [system user](https://developers.facebook.com/docs/marketing-api/system-users/create-retrieve-update), you can generate your token inside [Meta Business Suite⁠](https://business.facebook.com/). To do that:

**Step 1** - Go to your Business' **Settings**.

**Step 2** - Assign a Pixel to your system user (you also have an option to create a new system user at this stage).

**Step 3** - Select the assigned system user and click **Generate Token**.

*Your app does not need to go through App Review. You do not need to request any permissions*.

Access tokens generated under the Conversions API settings tab in Events Manager are no longer restricted to using the newest Graph API version that was available at the time of token generation. [Starting with v12.0](https://developers.facebook.com/docs/graph-api/changelog/version12.0#conversions-api), newly created access tokens can be used with all available Graph API versions.

## Resources

* Business Help Center: [About Meta Business Suite⁠](https://www.facebook.com/business/help/113163272211510)
* Business Help Center: [About Meta Pixel⁠](https://www.facebook.com/business/help/742478679120153)
* Meta Blueprint: [Get Started With the Conversions API⁠](https://www.facebookblueprint.com/student/path/219713-get-started-with-the-conversions-api?content_id=QxA0x02819tjqUN)
