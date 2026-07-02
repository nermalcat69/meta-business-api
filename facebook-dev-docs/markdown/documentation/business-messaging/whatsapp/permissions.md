---
title: "Access Tokens Guide"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions
---

# Access Tokens Guide

Updated: Jun 30, 2026

The platform supports the following access token types. The type you use depends on who uses your application, and whether you are a [partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview).

* If you are a **direct developer**, meaning only you or your business accesses your own data, use a [System User access token](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#system-user-access-tokens).
* If you are a **Tech Provider**, use a [Business Integration System User access token](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#business-integration-system-user-access-tokens).
* If you are a **solution partner**, use [System User access tokens](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#system-user-access-tokens) to share your line of credit with newly onboarded customers, and [Business Integration System User access tokens](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#business-integration-system-user-access-tokens) for everything else.

## System user access tokens

System user access tokens (“system tokens”) represent you, your business, organization, or people within your business or organization. The main advantage of these tokens is that they are long-lived and can represent automated services within your business that don’t require any user input.

System tokens rely on system users. Most endpoints check if the user identified by the token has access to the queried resource. If the user doesn’t have access to the resource, the system rejects the request with [error code `200`](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) (not to be confused with HTTP status code `200`).

System users can be [admins](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#admin-system-users) or [employees](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#employee-system-users).

### Admin system users

By default, admin system users have full access to all WhatsApp Business Accounts (WABAs) and their assets owned by or shared with you or your business portfolio.

Admin system users are useful if your app needs access to all of the business portfolio’s assets, without having to manually grant business asset access to each asset whenever it is created, or shared with your business portfolio.

You can override an admin system user’s default business asset access by granting partial access on a per-WABA basis. See [Business Asset Access](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#business-asset-access) to learn how to set and override access.

### Employee system users

Employee system users must be granted access to individual WABAs that are owned by, or shared with, your business portfolio. If your app only needs access to a few WABAs that you own, an employee system user should be sufficient.

Once created, you must grant **Partial** or **Full**[business asset access](https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions#business-asset-access) to each WABA that the system user needs to access.

### Generate system user access tokens

To generate a system token, access the [**Business settings**⁠](https://business.facebook.com/settings/) panel and then click **System Users**:

![Business settings panel showing System Users option](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/465045103_469826065488878_468932947489962332_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DXJmDUEM34UQ7kNvwEWnszF&_nc_oc=Adovrl2xlZGJD3v2wN8lzY6MOt1O3EIbitEG4Y1ZHsGmFDdkJnaTL2YkupqBW18ZAyZzF7CB0sfmzuGIm1Ks23Ms&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=2rm6nr0dYltsZL-unxUuzg&_nc_ss=7b2a8&oh=00_AQBbrMnh_e_W1kQqwXXaVPTJfmpFLXWuPn46lgULyBJNtw&oe=6A6059BE)

Click the **+Add** button, and in the **Create system user** window that appears, enter a system user name and assign it an **Admin** or **Employee** role:

![Create system user dialog with name field and role selector](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/465150702_510049308508353_7881035250572985544_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JRmdHZ81740Q7kNvwEvNOGf&_nc_oc=AdpXBfqwDZe12USNKnFVH7wv3eyhVDyBjecU2T8pg-vBQbr8RLdJ09tV2p7Yl76U7z6u0hlHBDwh_cZuvXcHbI5i&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=2rm6nr0dYltsZL-unxUuzg&_nc_ss=7b2a8&oh=00_AQAikU-iFWxv8e5e_DShJhMI0ZrycuNmndIvlSK1nwo45A&oe=6A60604E)

Once you create the admin system user, it appears in the list of system users. Click the system user’s name to display the asset assignment overlay:

![System users list showing asset assignment overlay](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/465056956_862633796067178_7287331611550335065_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fwl7ZqYzkf4Q7kNvwGulOBi&_nc_oc=AdqfHibmhQlqI-0zMjhVPZTD7hl8r7K-12NtVg73rJftmAz3-0PSZzK2Ph3coxy9a6jm3ukps0B5yFutBru68UcY&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=2rm6nr0dYltsZL-unxUuzg&_nc_ss=7b2a8&oh=00_AQD72bwre6B1eOs6buBrquuqTI5-6BMc-mnyAJbh4lVpNg&oe=6A6068D6)

Click the **Assign assets** button to display the **Select assets and assign permissions** window:

![Select assets and assign permissions dialog](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/465238023_523683013888319_4402098107854849013_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=frptPZLU_zUQ7kNvwHzHMUL&_nc_oc=AdqrPCOaNcA3a3GpNmm9-bLUl7p2qLByR9N84FuRmLwcKveGEpHmXfAHsw9oZfPF72nmufxPDABKpk9zPQvFJbh8&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=2rm6nr0dYltsZL-unxUuzg&_nc_ss=7b2a8&oh=00_AQAyVS-d6CJE1tVj7u3MOJ_8PhqF_ldExUkoro-4FXA52w&oe=6A6041BF)

Select your app and grant your system user the **Manage app** permission, then click the **Assign assets** button to confirm and dismiss the window.

Back in the **System Users** panel, reload the page to confirm that your system user has been granted **Full control** of your app. Granting the permissions may take a few minutes, so reload the page if your app doesn’t appear as an assigned asset. Once the asset has been assigned, it should look like this:

![System user with full control of app displayed](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/465048557_1084025226566535_5772232306997286547_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zdfBOO84IUIQ7kNvwHoQDbX&_nc_oc=Ado4_hGEUA7WbPjGXlP1dzEWowraXTBBQozfjj6r6qXtU7yvObf6jzxx8NE6m5f3nOJs4yu5Z-5fFRYUev6LIwAq&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=2rm6nr0dYltsZL-unxUuzg&_nc_ss=7b2a8&oh=00_AQDF16ymnHI59-Q0flu_bCywrF8Ye6fjGKugOUwoRle81g&oe=6A606F58)

Once you see that your system user has been granted full control of your app, in the asset assignment overlay, click the **Generate token** button. In the window that appears, select your app, choose a token expiration preference, and assign your app these three Graph API permissions:

* `business_management`
* `whatsapp_business_management`
* `whatsapp_business_messaging`

You can search for `business` to find these permissions quickly:

![Token generation dialog showing business permissions search](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/465115001_533379429601225_2797461055613545929_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y3WnnqrP590Q7kNvwHzMEHm&_nc_oc=AdqbfSZmdvQDgOYOhOSzinSn8HYC8mC-oFBQ5LnOkMxeCOptKWb_hq3RN-m1zdjQaMEXtqzJWmPISKUDkMV5qymF&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=2rm6nr0dYltsZL-unxUuzg&_nc_ss=7b2a8&oh=00_AQDs1KtL2dfG8XmFyDxGSwTL-7giBK3ThVRH3wWS-dKGzg&oe=6A604DD9)

Click the **Generate token** button and copy the token when it appears.

## Business integration system user access tokens

Business Integration System User access tokens (“business tokens”) are scoped to individual onboarded customers and should be used by Tech Providers and solution partners when accessing onboarded customer data.

These tokens are useful for apps that perform programmatic, automated actions on customer WABAs, without having to rely on input from an app user, or requiring future re-authentication.

To generate a Business Integration System User access token, you must implement Embedded Signup (configured with Facebook Login for Businesses) and exchange the code returned to you when a customer completes the flow.

See [Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview) and [Business Integration System User access tokens](https://developers.facebook.com/documentation/facebook-login/facebook-login-for-business#business-integration-system-user-access-tokens) to learn more about these tokens and how to generate them.

## User access tokens

Although User access tokens are supported and can be used by all app developers, you typically only use them when you first use the App Dashboard to [send your first test message](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started). As you develop your app, however, you switch to a System User access token (and eventually a Business Integration System User access token, if you are a Tech Provider or a partner). This is because user access tokens expire quickly, so you have to keep generating a new one every few hours.

There are several ways to generate a User access token:

* Access the **App Dashboard** > **WhatsApp** > **API setup** panel. This panel always generates a new User access token whenever you visit it. The token is automatically scoped to your user, since you are signed into your developer account when you access the panel.
* Use [Graph API Explorer](https://developers.facebook.com/tools/explorer).
* Implement [Facebook Login](https://developers.facebook.com/documentation/facebook-login).

## Use tokens in requests

When making API requests, include your token in an authorization request header, preceded by `Bearer`. For example:

```
curl 'https://graph.facebook.com/v25.0/102290129340398/message_templates' \
-H 'Authorization: Bearer EAAJB...'
```

## Token format

Access tokens are opaque strings. A full token looks like this:

```
EAAJBsbCmS80BO4hZBf5xYKFaFW7kVMNxAWzIInZB7q1PuZCLiEqKh3gZDZD
```

Tokens can vary in length, and their internal structure and characteristics can change over time. Do not parse, decode, or make assumptions about the format of an access token — treat it as an opaque string. Use a variable-length data type without a specific maximum size to store access tokens.

## Business asset access

After creating a system user, you must set business asset access levels. Many endpoints require the system user whose token is included in API requests to have either **Partial** or **Full** business asset access to the WABA being queried (or its assets). If the system user doesn’t have this access, these endpoints return [error code `200`](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) (not to be confused with HTTP status code `200`).

If you set a system user’s business asset access on a WABA to **Partial** access, you can further restrict access to certain assets or actions on the WABA. For example, if you have a large business and want a certain department to only have read access to a WABA’s template and business phone number data, you could create a system user for that department and set granular access to view only for that data.

To set business asset access on a WABA, follow these steps:

* Sign into [Meta Business Suite⁠](https://business.facebook.com/).
* Locate your business portfolio in the dropdown menu at the top of the page and click its **Settings** (gear) icon.
* Navigate to **Accounts** > **WhatsApp Accounts**.
* Select the appropriate WABA.
* Select the **WhatsApp Account Access** tab.
* Click the **+Add people** button.
* Select the appropriate system user and assign appropriate access levels on the WABA.

![WhatsApp Account Access tab with Add people button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/458274092_845026414442989_6944264004016403962_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=CLIGL5O2aLIQ7kNvwEQ7zWz&_nc_oc=AdpqaWC6eA6ARn9nQ8athFE3rGsCg8THSFAEg5Cjcy6IVJSZ7j57Dlbu5E9yA_P3Y2NeU859vd-HGpC05bXRXXyb&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=2rm6nr0dYltsZL-unxUuzg&_nc_ss=7b2a8&oh=00_AQAdvzHyVHZ92hrrsroAuwQeuGKupCwUpAVpldcYigN1RA&oe=6A606C2E)
