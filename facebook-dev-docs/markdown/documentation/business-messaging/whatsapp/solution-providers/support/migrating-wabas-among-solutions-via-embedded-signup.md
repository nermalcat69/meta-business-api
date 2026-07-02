---
title: "Multi-Partner Solution \u2014 Embedded creation"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-embedded-signup
---

# Multi-Partner Solution — Embedded creation

Updated: Jun 16, 2026

[Multi-Partner Solutions](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) (MPS) allow Solution Partners and Tech Providers to jointly manage customer WhatsApp assets in order to provide WhatsApp messaging services to customers.

If you are a Solution Partner, instead of using the app dashboard to create an MPS, you can create one using a snippet of JavaScript and an HTML button which you can embed somewhere on your website. Tech Providers who want to partner with you can use the button to grant your app permission to manage solutions for one or more of their apps, which you can then do using a series of API requests.

## Flow

Tech Providers who visit your website and click the embedded solution creation button will be asked to authenticate, and after doing so, will be presented with an interface that allows them to choose an existing app:

![Log in With Facebook dialog where a Tech Provider chooses which apps to grant the Solution Partner access to, with radio options and an app list.](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/458542138_1146317889773905_7397800002017796139_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=YsEJnpqZ8FAQ7kNvwEOwyzc&_nc_oc=AdriTFxi_B0AgiOLiP8zy9aGHOPsB1evGblxcsAbsxAevpLmN7ehWBqXrKPwtuikYBBpZj9x6Xh5o64cNt7w7r3t&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=wqM9EFleKfhVTKcMvy3Upg&_nc_ss=7b2a8&oh=00_AQAyhIka1GYikqkjgF48fSyjosei2Vx4RocZzZARmZC3Rw&oe=6A6071BC)

After choosing an app, they can review and confirm that they will be granting your app permission to manage their app’s Multi-Partner Solutions.

![Permission review screen confirming the Solution Partner app can create and manage partner solutions for the selected app, with Back and Save buttons.](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/458977093_1267404221307200_5854548995664421217_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zSuhvV66BKcQ7kNvwEosBe8&_nc_oc=Adp3aD-7yBJLqicocpT8aOPr1vMva0ks1t1fJ1oLX8ZASy-REL5sNSjooAGNt3Jl6YFgRqkjdqFIOY1GSgVKnIDF&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=wqM9EFleKfhVTKcMvy3Upg&_nc_ss=7b2a8&oh=00_AQA6Z6OEQvlcJJKbbjZrwAXPtz62Dpygsjyh8Bn3zn5TAA&oe=6A604D6B)

![Confirmation screen stating the Tech Provider has been connected to the Solution Partner app, with a link to Business Integrations and a Got it button.](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/458647670_1843654972790451_9197042182528031487_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NrednbRIrtIQ7kNvwG3KcIL&_nc_oc=Adp1043J3vNIDdwuj0qozObfnHyf7Qk9VfYmOalJqTzZ65dBenOa48GY1zVmeOodhwxw6G8-qAuajjhhIfTnOR-K&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=wqM9EFleKfhVTKcMvy3Upg&_nc_ss=7b2a8&oh=00_AQD8xH1I1_6pxwx1TOYAVGNtTUjRAlTHHgvPoAPjrwCIvg&oe=6A60587B)

Once the Tech Provider dismisses the interface, a user access token will be generated and returned to the flow, where you can capture it. You can then use the token in a series of API calls to get the Tech Provider’s chosen app IDs and create and accept a solution.

## Requirements

* Facebook Login for Business must be [configured on your app](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#step-2--create-a-facebook-login-for-business-configuration), with **Valid OAuth Redirect URIs** and **Allowed Domains for the JavaScript SDK** set. You should already have set these values when configuring Embedded Signup.
* Your app must undergo App Review and be approved for advanced access for the **manage\_app\_solution** permission.

## Embedded creation button

### Step 1: Grant permission to app

Access the Meta Business Suite and use your system user to grant your app the **manage\_app\_solution** permission.

* Log into [business.facebook.com⁠](https://business.facebook.com/).
* Use the business portfolio dropdown menu on the left to locate your business portfolio and click the gear icon (for settings).
* Navigate to **Users** > **System Users**.
* Click the system user who has business asset access on your app and WhatsApp Business account.
* Click the **Generate token** button.
* Select your app.
* Set an expiration date for the token.
* Select the **manage\_app\_solution** permission.
* Generate a token.

Use this token when accepting any Multi-Partner Solutions you create for your partners (see below).

### Step 2: Add embedded button code

Add the following code to your website or portal, or wherever you plan on directing Tech Providers who will be working with you as part of an MPS. Be sure to replace `<SOLUTION_PARTNER_APP_ID>` with your app ID.

```
<!-- Load JavaScript SDK asynchronously -->
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>

<script>
  // Configure JavaScript SDK
  window.fbAsyncInit = function() {
    FB.init({
      appId: "<SOLUTION_PARTNER_APP_ID>", // Replace with your app ID
      cookie: true,
      xfbml: true,
      version: "v20.0"
    });
  };

  // Launch MPS creation flow
  function launchSolutionCreationFlow() {
    FB.login(
      function (response) {
        if (response.authResponse) {
          const accessToken = response.authResponse.accessToken;
          console.log(accessToken); // Replace with your code that captures access token
        } else {
          console.log("User failed to authorize"); // Replace with your code that logs auth failure
        }
      },
      {
        scope: "manage_app_solution"
      }
    );
  }
</script>

<button onclick="launchSolutionCreationFlow()" style="background-color: #1877f2; border: 0; border-radius: 4px; color: #fff; cursor: pointer; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; height: 40px; padding: 0 24px;">Launch Solution Creation</button>
```

Direct prospective Tech Provider partners to this location and instruct them to complete the flow. Let them know that completing the flow does not create the solution (it requires some API calls on your part) and that you’ll provide them with the solution ID once it has been created.

## Solution creation

### Step 1: Capture user token

Anytime a Tech Provider uses the embedded solution creation button and completes the flow, the flow returns an `authResponse` object (`response.authResponse`) that has an `accessToken` property:

```
```
{  
  status: "connected",  
  authResponse: {  
    accessToken: "<USER_ACCESS_TOKEN>",  
    expiresIn:"<TOKEN_EXPIRATION_TIMESTAMP>",  
    reauthorize_required_in:"<SECONDS_UNTIL_REAUTH_REQUIRED>",  
    signedRequest:"<SIGNED_PARAMETER>",  
    userID:"<USER_ID>"  
  }  
}
```
```

Capture the `accessToken` property value. This is the Tech Provider’s user access token, which you will need next.

### Step 2: Get app details

Use the Tech Provider’s user access token and the [Assigned Applications API](https://developers.facebook.com/docs/graph-api/reference/user/assigned_applications) to get a list of app IDs that the Tech Provider selected when they completed the flow.

#### Example request

```
```
curl 'https://graph.facebook.com/v20.0/me/application_details' \  
-H 'Authorization: Bearer EAAJB'
```
```

#### Example response

Example response of a Tech Provider who selected a single app in the flow.

```
```
{  
  "data": [  
    {  
      "link": "www.mediamonsoon.com",  
      "name": "media_monsoon_prod",  
      "id": "634974688087057"  
    }  
  ]  
}
```
```

Each object in the response describes an app the Tech Provider selected when completing the flow. Capture the `id` property value of each app for the next step.

### Step 3: Create a solution for Tech Provider

Use the Tech Provider’s access token and an app ID from the previous step to make a request to the [Solution Creation API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/solution-creation-api#post-version-application-id-whatsapp-business-solution).

Repeat this request for each app ID returned in the previous step.

#### Request syntax

```
POST /<APP_ID>/whatsapp_business_solution
```

```
```
{  
  "owner_permissions": ["MESSAGING"],  
  "partner_app_id": "<SOLUTION_PARTNER_APP_ID>",  
  "partner_permissions": ["MESSAGING"],  
  "solution_name": "<SOLUTION_NAME>"  
}
```
```

* `<SOLUTION_PARTNER_APP_ID>` — Your app ID.
* `<SOLUTION_NAME>` — Name to give the solution. This name will appear in the App Dashboard for both you and the Tech Provider, so the name should be unique and distinguishable from other solutions you or the Tech Provider may later initiate or accept.

#### Response

Upon success, the API will create a solution and associate your app and the Tech Provider’s app to it.

```
```
{  
  "solution_id": "<SOLUTION_ID>"  
}
```
```

Capture the `solution_id` value. This is the solution ID, which you will need in the next step.

### Step 4: Accept the solution

Use your system user access token from the [Grant Permission to App](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-embedded-signup#step-1-grant-permission-to-app) step and the solution ID to make a request to the [Solution Accept API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-accept-api#post-version-solution-id-accept) for any solutions you have created for Tech Providers.

#### Example request

```
```
curl -X POST 'https://graph.facebook.com/v20.0/795033096057724/accept' \  
-H 'Authorization: Bearer EAAAT...
```
```

#### Example response

Upon success:

```
```
{  
  "success": true  
}
```
```

Once you have accepted the solution, inform the Tech Provider that the solution has been created successfully, and provide them with any solution IDs you have created and accepted.
