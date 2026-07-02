---
title: "Access Token Portability"
source_url: https://developers.facebook.com/documentation/facebook-login/guides/permissions
---

# Access Token Portability

Updated: Jun 30, 2026

This guide explains some common scenarios of portability so you can build your app with the configuration to fit your needs.

## Token Usage with Different App Types

Access tokens are portable. Once you obtain a token, you can use it from any machine. When you combine web interfaces, mobile clients, and servers, you can get a mix of different possible configurations. However, these different configurations come with different advantages and disadvantages in terms of capabilities and security.

| Configuration | Advantages | Disadvantages | Security Notes |
| --- | --- | --- | --- |
| Login and API requests happen in a web client (short term token). | Simple implementation. | No offline posting.  No long term access.  Authenticate often. |  |
| Login and API requests happen in a native mobile or web client (long term token). | Authenticate less often. | No offline posting. |  |
| Login and API requests happen in a web client (long term token after code exchange). | Extra security in certain situations. | Difficult to implement.  No offline posting. | Only useful in specific situations. |
| Login happens in a native mobile or web client.  API requests happen on a Server (with long term token). | Offline posting.  Add security features available with server based calls. | Client must call the server to proxy any calls. | Use [`appsecret_proof`](https://developers.facebook.com/documentation/facebook-login/security) for any calls. |
| Login happens in a native mobile or web client.  API requests happen on a server or in the client. | Offline posting  User-driven posting from client | Difficult to implement | Use [`appsecret_proof`](https://developers.facebook.com/documentation/facebook-login/security) for any calls made from the server. |

## Native or Web Client Login and API requests

This is the simplest configuration where authentication and API requests happen on the client. There are three possible configurations in this model:

* Native or web client authenticates and uses the returned short or long-term token to make calls.
* Web client authenticates and exchanges the short-term token for a long-term token via a server. This token is sent back to the web client where the web client uses it to make API calls.
* Web client authenticates and exchanges the short-term token for a long-term token via a server. The server sends a code to the client. The client exchanges the code for a long-term token and uses it to make API calls. This configuration is rarely used.

### Native or Web Client Flow

![Flow diagram: client requests access via SDK and Login Dialog, user approves, token returns to client, then Graph API calls](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/618801730_1414612827064034_6057814575819049735_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=xexnkk0mFAYQ7kNvwGG4Pjh&_nc_oc=AdoLnAWDY_dFO1ys-u8Sr2hO69EhGExjz-ak_8mHEKLHthCv4VqEwobKoEi6zLrjTXR0jJmy5D7rLriH3eAJ7drA&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=SxDV-7skEtB2FoftRvk1xQ&_nc_ss=7b289&oh=00_AQCOAvcBdhLACtsnBt7vQfx8_K24zEkfX7chPkgc9Y5vig&oe=6A6078DF)

### Web Client Flow with Long Term Token

![Swimlane diagram (Client, Your Server, Facebook): server exchanges short-lived token for a long-lived one, returned to web client for Graph API calls](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/616594121_1414612857064031_4667675334229516733_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=nZU3n0vdCFUQ7kNvwEqHOFt&_nc_oc=AdrYpbeD8hOGdboq8GuV3w7IBA5QmRU8OGGZJsbomdwQ0lOZmQpGo1ShZx93kPbTQvbQb2DlzINe2-8jUKN73ya7&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=SxDV-7skEtB2FoftRvk1xQ&_nc_ss=7b289&oh=00_AQAJ4VZdKpHX8ew7zt_ilZ7TyIUpsztAVkckFd1EAzMxyA&oe=6A60A707)

### Web Client Flow with Code Exchange

![Swimlane diagram of code-exchange flow: server stores long-lived token, generates a code the client exchanges for its own long-lived token to call Graph API](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/615962212_1414612767064040_1450677659586310534_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DX9yu4UEo1UQ7kNvwGkEQbc&_nc_oc=Adri2EIvSa-xlrOX44wjmRPCzXUoTik_r6eSrPYHVGMM5Lki_pfGR3hhUgekC-OboPxvb5Q-UH1xa5dHLxcgZdj6&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=SxDV-7skEtB2FoftRvk1xQ&_nc_ss=7b289&oh=00_AQARVX4X2igj1kDS_mVAH4heulc1AnnCqI4cmxqlygeOng&oe=6A609F05)

## Client Login and Server API Calls

In this common configuration, authentication happens on the client, but all API calls are made by the server on behalf of the client. The server can use the [`appsecret_proof`](https://developers.facebook.com/documentation/facebook-login/security) parameter to further enhance security when making calls.

![Swimlane diagram: client login, server stores the long-lived token and proxies all Graph API calls using appsecret_proof](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/617138262_1414612753730708_6874352529452973118_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qh1pS8ymxpEQ7kNvwE9NTDw&_nc_oc=AdogiVi6DWRyyrs61qPkE1-qL9djl0e1RwfS8NZljLE1asx63n4kKbZng10xxkJKb0IFKJ9ZbMW-qPOkxK05iU1w&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=SxDV-7skEtB2FoftRvk1xQ&_nc_ss=7b289&oh=00_AQAEWK_5xyWti4Jp35BBwP05kKR_ZwzAOw-NwJayeQ0tCA&oe=6A60963E)

## Client Login and Client or Server API Calls

This configuration is a combination of the above approaches.

![Swimlane diagram of hybrid flow: long-lived token returned to both client and server, so Graph API calls come from either using appsecret_proof](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/617073999_1414612747064042_8709371343291088552_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=j24L2oyvIs8Q7kNvwEQk-s0&_nc_oc=AdovzO9-q73f8uB4TmcfML2kBPtgOdaJ9K7EYOYLhfR6Hr2CCJ6AJWD1IBo56ewZ38DTeHg5Qtaoq9lsONfal-iW&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=SxDV-7skEtB2FoftRvk1xQ&_nc_ss=7b289&oh=00_AQClCAPHKwHFXHG13EMXSIgj3BlAQ6OSiS9jqozI7aU3bA&oe=6A607F63)

## Set Access Tokens Using the SDK

There are different ways to specify which access token to use with an API call in our SDKs.

* The Facebook Android SDK [`setCurrentAccessToken` method](https://developers.facebook.com/docs/reference/android/current/class/AccessToken#setCurrentAccessToken) has the `accessToken` parameter.
* The Facebook iOS SDK [`setCurrentAccessToken` method](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAccessToken) has the `token` parameter.
* The Facebook Javascript SDK [`FB.api()` method](https://developers.facebook.com/docs/reference/javascript/FB.api) has the `access_token` parameter.
