---
title: "Getting Started"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/sample-experience
---

# Getting Started

Updated: Apr 1, 2026

This document explains how to successfully call Messenger API support for Instagram (also known as Instagram Messaging API in our Developer Policies) with your app and get Instagram professional account messages.

**Note:** If your app users don’t have a Facebook Page linked to their Instagram professional account, learn more about building an app with [the Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram/platform/instagram-api).

## Before you start

You will need access to the following:

* An Instagram [professional account⁠](https://www.facebook.com/help/instagram/138925576505882)
* A Facebook Page connected to that [account](https://developers.facebook.com/docs/instagram-api/overview#pages)
* A Meta Developer account that can perform the [`MODERATE` task](https://developers.facebook.com/docs/instagram-api/overview#tasks) on that Page
* A [Meta App](https://developers.facebook.com/docs/apps#register) created with the Facebook Login Use Case and with Basic settings configured

If you are a developer who is new to the Messenger Platform:

* Follow the step-by-step guide detailed below on how to generate Page access token, webhooks setup.
* Learn about the various [platform features](https://developers.facebook.com/docs/messenger-platform/instagram/features) and adopt those that suit your needs.

Developers with prior experience on the Messenger Platform

* Access token and webhooks concepts are similar. Messenger API support for Instagram will require `instagram_manage_messages` in the Page access token and Instagram topic webhooks subscribed.
* Most of the features are similar to Messenger API. Review the details on feature list and adopt those that suit your needs.

### Login flow

You can use Facebook Login for Business or Business Login for Instagram to ask your app users for the needed permissions.

The
[Business Login for Instagram](https://developers.facebook.com/docs/instagram/business-login-for-instagram) flow allows a person to complete the following during the login flow:

* convert their Instagram account to an Instagram professional account
* create a Facebook Page for their business
* connect that Page to their Instagram professional account

To implement Business Login for Instagram, visit our
[Business Login for Instagram guide](https://developers.facebook.com/docs/instagram/business-login-for-instagram) then return to this guide.

## 1. Get a user access token

Make sure you are signed into your Facebook Developer account, then access your app and trigger the Facebook Login modal. Remember, your Facebook Developer account must be able to perform [Tasks](https://developers.facebook.com/docs/pages-api/overview#tasks) with at least “Moderate” level access on the [Facebook Page](https://developers.facebook.com/docs/pages-api/overview) connected to the Instagram account you want to query.

Once you have triggered the modal, click OK to grant your app the `instagram_basic`, `instagram_manage_messages`, and `pages_manage_metadata` permissions.

The API should return a User access token. Capture the token so your app can use it in the next few queries. If you are using the Graph API Explorer, it will be captured automatically and displayed in the Access Token field for reference:

![Graph API Explorer with the captured User access token shown in the Access Token field](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/142020930_4059362647408614_1740112770862669549_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5vsWgceBiE0Q7kNvwHJlP0K&_nc_oc=AdoXhPFLD3r61qzw8SIEfWiusyV4E9T0AdX8MKLiy3TFnc20KvOQGbDwMMx_HdvhCYiSnKFfnfmsZihO4ysF-aQm&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=7493LUMAq7jD-ECPpgBtvA&_nc_ss=7b289&oh=00_AQCn2e_PZyxrGWe1w67P3m9FY_sImixbvrJqCXInqILC1w&oe=6A606F44)

## 2. Get the user’s Pages

Query the `GET /me/accounts` endpoint (this translates to `GET /{user-id}/accounts`, which performs a GET on the Facebook [User](https://developers.facebook.com/docs/graph-api/reference/user) node, based on your access token).

```
curl -i -X GET \
 "https://graph.facebook.com/v9.0/me/accounts?access_token={access-token}"
```

This should return a collection of Facebook Pages that the current Facebook User can perform the `MANAGE`, `CREATE_CONTENT`, `MODERATE`, or `ADVERTISE` tasks on:

```
```
{  
  "data": [  
    {  
      "access_token": "EAAJjmJ...",  
      "category": "App Page",  
      "category_list": [  
        {  
          "id": "2301",  
          "name": "App Page"  
        }  
      ],  
      "name": "Metricsaurus",  
      "id": "134895793791914",  // capture the Page ID  
      "tasks": [  
        "ANALYZE",  
        "ADVERTISE",  
        "MODERATE",  
        "CREATE_CONTENT",  
        "MANAGE"  
      ]  
    }  
  ]  
}
```
```

Capture the ID of the Facebook Page that’s connected to the Instagram account that you want to query. Keep in mind that your app users may be able to perform tasks on multiple pages, so you eventually will have to introduce logic that can determine the correct Page ID to capture (or devise a UI where your app users can identify the correct Page for you).

## 3. Get the Page access token

In order to perform various Instagram Messaging API calls, you will need to use the associated Page access token (PAT) of the relevant Instagram professional account that has been previously granted via Facebook login flow.

Send a `GET` request to the `/{page-id}` endpoint using your User access token. For example:

```
curl -i -X GET "https://graph.facebook.com/{page-id}?
  fields=access_token&
  access_token={user-access-token}"
```

On success, your app gets this response:

```
```
{  
  "access_token":"{page-access-token}",  
  "id":"{page-id}"  
}
```
```

* If you used a short-lived User access token, the Page access token is valid for only 1 hour.
* If you used a long-lived User access token, the Page access token has no expiration date.

To generate a long-lived Page access token, you can follow the guide [here](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens/get-long-lived#get-a-long-lived-page-access-token).

## 3a. Get the Page access token via the Instagram Developer Dashboard tool

Meta is rolling out this tool to all developers over the coming weeks. If you don’t see the settings under the App Dashboard, you can leverage Step 1-5 above to generate Page Access Tokens.

Optionally, if you own the assets (Instagram account and Facebook Page) that you want to onboard to Messenger API support for Instagram, you can leverage the Instagram setup tool under the Developer App Dashboard to allow you to easily setup Page access tokens and Webhooks. You can find the tool under Developer app dashboard → Messenger → Instagram Settings. Existing way of configuring tokens and webhook will still work, but this tool will give you an easier way to setup your environment.

![App Dashboard Instagram Settings page with an Access Tokens panel listing a Page and a Generate Token button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/196275801_927883678049780_255440934045349593_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RPPcceS9q-IQ7kNvwHN1FAM&_nc_oc=AdqBIsOXJLLgPUiDduJv0uNwf7hd8NNdJ-7Xd40fHm19YH8y2AN5l2ko_pYUdGiqgkQ4c9L4pY05Ihzvd-J5KuW0&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=7493LUMAq7jD-ECPpgBtvA&_nc_ss=7b289&oh=00_AQBAl1a6JWF8pgiE5D7U9UVs4D6FgVi8WVrFzWKFiHYsCg&oe=6A606487)

## 4. Enable message control connected tools settings

In order to manage Instagram messages via API, Instagram professional accounts will need to enable the connected tools toggle under message controls settings. This setting can be found by going to:

**Instagram Settings > Messages and story replies >Message controls > Connected Tools > toggle Allow Access to Messages**

## 5. Get the Instagram professional account’s Inbox Objects

Use the Page ID you captured and the Page access token (PAT) to query the `GET /{page-id}/conversations?platform=instagram` endpoint:

```
curl -i -X GET \
 "https://graph.facebook.com/v9.0/17841405822304914/conversations?platform=instagram&access_token={access-token}"
```

This should return the IDs of all the thread objects on the Instagram user:

```
```
{  
  "data": [  
    {  
      "id": "aWdfZAG06MTpJR01lc3NhZA2VUaHJlYWQ6OTAwMTAxNDYyOTkyODI6MzQwMjgyMzY2ODQxNzEwMzAwOTQ5MTI4MTM2MDk5MDc1MzYyOTgx"  
    },  
    {  
      "id": "aWdfZAG06MTpJR01lc3NhZA2VUaHJlYWQ6OTAwMTAxNDYyOTkyODI6MzQwMjgyMzY2ODQxNzEwMzAwOTQ5MTI4MTYzMzQ2MzE5NjM1NDcy"  
    },  
    {  
      "id": "aWdfZAG06MTpJR01lc3NhZA2VUaHJlYWQ6OTAwMTAxNDYyOTkyODI6MzQwMjgyMzY2ODQxNzEwMzAwOTQ5MTI4MTk3MTY0NjI2NzAyMjMw"  
    },  
    {  
      "id": "aWdfZAG06MTpJR01lc3NhZA2VUaHJlYWQ6OTAwMTAxNDYyOTkyODI6MzQwMjgyMzY2ODQxNzEwMzAwOTQ5MTI4MzkzNDI5MDYzMzkyNjU0"  
    }  
}
```
```

If you can perform this final query successfully, you should be able to perform queries using any of the Messenger API support for Instagram endpoints - just refer to our various guides and references to learn what each endpoint can do and what permission they require.

## Next steps

* [Develop your app further](https://developers.facebook.com/docs/messenger-platform/instagram/features) so it can successfully use any other endpoints it needs, and keep track of the permissions each endpoint requires
* Complete the [webhook setup](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks) so it can receive real time notifications whenever a user sends a message to the Instagram professional account.
* Complete the [App Review](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review) process and request approval for all permissions your app will need so your app users can grant them while your app is in production.

### Developer Support

* Use the [Meta Status tool⁠](https://metastatus.com/) to check for the status and outages of Meta business products.
* Use the [Meta Developer Support tool](https://developers.facebook.com/support) to report bugs and view reported bugs, get help with Ads or Business Manager, and more.
