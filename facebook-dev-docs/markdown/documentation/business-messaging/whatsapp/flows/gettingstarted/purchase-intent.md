---
title: "Use Case Guide: Capture interest for a personalised Offer"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/gettingstarted/purchase-intent
---

# Use Case Guide: Capture interest for a personalised Offer

Updated: Jun 28, 2026

![WhatsApp Flow screens for a personalised offer: selecting a product, choosing options, viewing shortlisted offers and details](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/651665580_1459945459197437_575182176736124006_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vm0mo4UVBRgQ7kNvwFzBUhS&_nc_oc=AdoVYuJC0tgI05_fucYn7RDl3QHhb_56j4iDi4WLjdWfNeIuf5R1Gvsmgu7NH95pjjqAqtR_HVPY9-nnXsVuDrtd&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=iyR32khoMynYMIyAQlTRpw&_nc_ss=7b289&oh=00_AQCidHDNtW34sdNxWWp-kwlTk0cyH1d19rch50Oq89c3Gw&oe=6A605D85)

## Intro and overview

WhatsApp is improving the way that you communicate with your customers to tailor products and services - enabling customers to select, customise, and signal an intent to purchase- all without leaving WhatsApp or speaking to an agent.

This guide walks you through the entire process to build a Flow for a ‘Personalised Offer’ use case. The templates here can be adapted to suit your use case.

The Flows you build demonstrate how you can:

* Present groups of products for your user to select
* Offer customisation options, such as budget, size, and purpose, to narrow down to a specific product
* Based on their inputs, make recommendations of a list of products, including detailed overview of each product
* Confirm product selection and allow users to proceed with a purchase

This template can be adapted to any product or service that you want to offer to customers. Customers can share their needs and preferences, allowing you to offer the ideal solution. This use case can improve marketing campaign results during large sales events, allowing you to provide a targeted offer for specific products.

## Getting started

To follow this guide, ensure you have:

* Completed [prerequisites](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/gettingstarted#prerequisites) for building Flows.
* A [Glitch⁠](https://glitch.com/signup) account

## Flows JSON template

Flow JSON

{

"version": "7.3",

"data\_api\_version": "3.0",

"routing\_model": {

"PRODUCT\_SELECTOR": [

"OPTIONS"

],

"OPTIONS": [

"OFFER"

],

"OFFER": [

"PRODUCT\_DETAIL"

]

},

"screens": [

{

"id": "PRODUCT\_SELECTOR",

"title": "Black Friday Deals",

"data": {

"products": {

"type": "array",

"items": {

"type": "object",

"properties": {

"id": {

"type": "string"

},

"title": {

"type": "string"

}

}

},

"\_\_example\_\_": [

{

"id": "0\_mobile\_phones",

"title": "Mobile phones"

},

{

"id": "1\_eBook\_readers",

Enter to Rename, ⇧Enter to Preview

Preview

Run

Settings

​

Select screen

PRODUCT\_SELECTOR

​

![](https://static.xx.fbcdn.net/rsrc.php/yP/r/Ei8b9RGc2VT.svg "Profile picture")

---

Preview Flow

# Black Friday Deals

Black Friday Deals

# Black Friday Deals

Black Friday Deals

# 

What would you like to buy now

* # 

  Mobile phones
* # 

  eBook readers
* # 

  Cameras

# 

Continue

# 

Managed by the business. Learn more [Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/gettingstarted/purchase-intent)

### Create new flow from a template

* In the [Flows section of WhatsApp Manager⁠](https://business.facebook.com/wa/manage/flows/) click on the **Create Flow** button in the top right corner.
* In the Create page, fill in the details for the pre-approved loan Flow:
  * **Name** - Type *Personalised offer*, or choose another name you like.
  * **Categories** - Select *Lead generation*.
  * **Template** - Choose *Capture interest for a personalised offer*. You can further customize the template to suit your use case.
* Click **Create** to create Flow.

You can preview the Flow on the right of the Builder UI.

The Flow remains in the draft state as you edit it. You can share it with your team for testing purposes only. To share it with a large audience, you’ll need to publish it. However, you can’t edit the Flow once you [publish](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/gettingstarted/purchase-intent#publishing). Since you will still need to add the endpoint URL for this Flow, leave it as a draft for now and proceed to the next step, where you’ll configure the demo backend endpoint.

**See also**

* [Flow JSON Overview](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)

## Configure demo backend on Glitch

WhatsApp Flows lets you connect to an external endpoint. This endpoint can provide dynamic data for your Flow and control routing. The endpoint also receives user-submitted responses from the Flow.

For testing purposes, this template uses Glitch to host the endpoint. Using Glitch is entirely optional, and not required to use Flows. You can [clone the endpoint code from GitHub⁠](https://github.com/WhatsApp/WhatsApp-Flows-Tools/tree/main/examples/endpoint/nodejs/personalised-offer) and run it in any environment you prefer.

### 1. Remix (fork) Glitch endpoint

Access the [endpoint code in Glitch⁠](https://glitch.com/edit/#!/whatsapp-flows-personalised-offer) and remix it to get your unique domain. To remix it, click **Remix** at the top of the page. A unique domain will appear as a placeholder in the input element on the right side of the Glitch page.

### 2. Setup encryption key

Private key helps decrypt the messages received. The passphrase will be used to verify the private key. Along with the private key, you also need its corresponding public key, which you’ll upload later. Never use the private keys for your production accounts here. Create a temporary private key for testing on Glitch, and then replace it with your production key in your own infrastructure.

* Generate the public-private key pair by running the command below in the Glitch terminal. Replace `YOUR_PASSPHRASE` with your designated passphrase. Access the Glitch terminal by clicking the **TERMINAL** tab at the bottom of the page, and run the following command:
  `node src/keyGenerator.js YOUR_PASSPHRASE`
* Copy the passphrase and private key and paste them to the .env file. Click on the file labeled **.env** on the left sidebar, then click on **✏️ Plain text** on top. *Do not edit it directly from the UI, as it will break your key formatting.*
* After you set the environment variables, copy the public key that you generated and [upload the public key](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/whatsapp-business-encryption#set-business-public-key) via the Graph API.

### 3. Set endpoint URI

Once you set up encryption keys, you can proceed with setting Endpoint URI for your flow.

* At the top right of the Glitch page, click on **Share** and copy the **Live Site** URL from the displayed modal.
* Head to the [Flow Builder⁠](https://business.facebook.com/wa/manage/flows/) and in the Flow Builder click on the **three dot** menu in top right corner of the screen. Select **Setup** under the **Endpoint** section.
* A popup will appear, allowing you to configure the endpoint URI, business phone number, and app on Meta for Developers. Save the Live Site URL copied from the Glitch into the first step of modal.

After making the necessary configurations, perform a health check from the last step of the modal. You should be able to get a successful response (if you get an error please check the details and the provided resolution advice).

### 4. Set app secret (optional)

Signature verification uses the app secret. It helps you check whether a request is coming via WhatsApp and, therefore, is safe to process. You’ll add it to the **.env** file.

To access your app secret, select your App from the [dashboard in the Meta for Developers](https://developers.facebook.com/apps/). In the left navigation pane under **App settings**, choose **Basic**. Click **Show** under **App secret** and copy the secret. Then, return to Glitch, open the .env file, and create a variable named APP\_SECRET with the value of the secret you copied.

Now you have completed all the required steps to be able to test flow with the provided endpoint.

**See also**

* [Detailed code walk through](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/gettingstarted/purchase-intent#overview-of-demo-backend) for demo backend
* [Implementing endpoint for Flows](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint) for full details on how to build production endpoint

## Testing and debugging

### Debug flow using the interactive preview

After you complete the configurations, toggle the interactive preview in the WhatsApp Builder UI to test the Flow.

* Trigger the interactive preview by clicking on settings menu in the **Preview** section of the Flow Builder and enabling **Interactive mode** toggle.
* In the modal that appears, select the phone number, enter any string as **Flow token** and choose the **Request data** option under **Request data on the first screen**. This sends a request to the endpoint to retrieve data for the first screen.

Now, click on **Actions** tab at the bottom of the code editor in Builder. You’ll see an `init` action in the list. Click on it to see the details and you will see the decrypted request sent to the endpoint. There will also be decrypted response received from endpoint with the initial data payload.

Return to **Preview** and proceed to change tenure by selecting an option from the Tenure dropdown. Back in **Actions** tab notice how the tenure is set to selected new tenure and the action has changed to `data_exchange`.

Keep testing out the Flow and observe the data changes in the **Actions** tab. Similar logs will be generated when users interact with the Flow from their mobile devices.

You can also see decrypted request and responses logged in the Glitch LOGS tab at the bottom of the Glitch screen.

### Send draft flow to your device

Before you publish your flow you can also send it and test it on an actual device. To send draft flow to your device, follow [instructions here](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/testingdebugging#send-draft-flow-to-your-device).

**See also**

* [Flow Testing and debugging guide](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/testingdebugging)

## Publishing

When you first created your Flow, it entered the Draft state.
And as you edited and saved the modified Flow JSON content, it remained in the Draft state.
You are able to send the Flow while it’s in the Draft state, but only for testing purposes. If you want to send the Flow to a larger audience, you’ll need to Publish the Flow.

You can publish your Flow once you have ensured that:

* All validation errors and [publishing checks](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/healthmonitoring#publishing-checks) have been resolved.
* The Flow meets the [design principles](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/bestpractices) of WhatsApp Flows
* The Flow complies with [WhatsApp Terms of Service⁠](https://www.whatsapp.com/legal/terms-of-service/?lang=en), the [WhatsApp Business Messaging Policy⁠](https://faq.whatsapp.com/933578044281252) and, if applicable, the [WhatsApp Commerce Policy⁠](https://www.whatsapp.com/legal/commerce-policy/?lang=en)

Remember, once a Flow has been published it can no longer be modified.
See [Flow Status Lifecycle](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/lifecycle) for more information on the different Flow states.

To publish your Flow, open the **three dot** menu to the right of the **Save** button and click **Publish**. Once published, the Flow can be sent to anyone!

## Sending

You can send your WhatsApp Flow as:

* **[Template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow#templatemessages)** - these do not require a 24-hour customer service window to be open between you and the message recipient before the message can be sent.
* **[Interactive Flow messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow#userinitiated)** - these can only be sent to a user when a customer service window is open between you and the user.

[Learn more about sending your Flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow)

## Receiving flow response

Upon flow completion a response message will be sent to the WhatsApp chat. You will receive it in the same way as you receive all other messages from the user - via message webhook.

[Learn more about how to setup messaging webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/receiveflowresponse)

## Monitoring

Flow monitoring is only applicable to Flows with endpoint.

After your Flow is published and being sent to the customers, it is important to monitor your Flow’s health and address any problems as they are discovered by WhatsApp.

There are multiple ways how you can monitor your flows:

* Metrics Dashboard in WhatsApp Account Manager
  * Navigate to [Flow section of WhatsApp Account Manager⁠](https://business.facebook.com/wa/manage/flows/) and click on any published flow with the endpoint. You will be presented with a Details page with a Performance Metrics Dashboard.
* Metrics API
  * All the data presented in the Details page is also available to be queried through [Flows Metrics API](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/metrics_api).
* Quality Webhooks
  * You should also [subscribe to Flows Quality Webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowswebhooks#subscribe-to-webhooks) to be updated in real time about the statuses and performance of your business’ Flows.

See [Flow Health and Monitoring](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/healthmonitoring) overview for more information.

## Next steps

Now that you have successfully completed this guide, learn more about what you can do with this Flows in our [Guides](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides) and [Reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/reference) sections.

## Overview of demo backend

There are four JavaScript files in the [Glitch example src directory⁠](https://glitch.com/edit/#!/whatsapp-flows-personalised-offer): `encryption.js`, `flow.js`, `keyGenerator.js`, and `server.js`. The entry file is `server.js`, so let’s look at it first.

### server.js

The `server.js` file starts by configuring the Express application to use the express.json middleware to parse incoming JSON requests. Then, it loads the environment variables needed for the endpoint.

```
```
const { APP_SECRET, PRIVATE_KEY, PASSPHRASE, PORT = "3000" } = process.env;
```
```

The `server.js` file also contains a POST endpoint that performs different steps:

Checks that the private key is present:

```
```
if (!PRIVATE_KEY) {  
  throw new Error('Private key is empty. Please check your env variable "PRIVATE_KEY".');  
}
```
```

Validates the request signature using the isRequestSignatureValid function found at the bottom of the file:

```
```
if(!isRequestSignatureValid(req)) {  
// Return status code 432 if request signature does not match.  
// To learn more about return error codes visit: /documentation/business-messaging/whatsapp/flows/reference/error-codes#endpoint_error_codes  
  return res.status(432).send();  
}
```
```

Decrypts incoming messages using the decryptRequest function found in the encryption.js file:

```
```
let decryptedRequest = null;  
try {  
  decryptedRequest = decryptRequest(req.body, PRIVATE_KEY, PASSPHRASE);  
} catch (err) {  
  console.error(err);  
  if (err instanceof FlowEndpointException) {  
    return res.status(err.statusCode).send();  
  }  
  return res.status(500).send();  
}  
  
const { aesKeyBuffer, initialVectorBuffer, decryptedBody } = decryptedRequest;  
console.log("💬 Decrypted Request:", decryptedBody);
```
```

Decides what Flow screen to display to the user. You’ll look at the getNextScreen function in detail later.

```
```
const screenResponse = await getNextScreen(decryptedBody);  
console.log("👉 Response to Encrypt:", screenResponse);
```
```

Encrypts the response to be sent to the user:

```
```
res.send(encryptResponse(screenResponse, aesKeyBuffer, initialVectorBuffer));
```
```

### encryption.js

This file contains the logic that encrypts and decrypts the messages you exchange for security purposes. See [Code examples](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint#code-examples) section of Endpoint implementation guide for encryption examples in other languages.

### keyGenerator.js

This file helps generate the private and public keys, as you saw earlier.

### flow.js

This file houses the logic for handling the Flow. It starts with an object assigned the name `SCREEN_RESPONSES`. The object contains screen IDs with their corresponding details, such as the preset data used in the data exchanges. This object is generated from Flow Builder under **“...” > Endpoint > Snippets > Responses**. In the same object, you also have another ID, `SUCCESS`, that is sent back to the client device when the Flow is successfully completed. This closes the Flow.

The `getNextScreen` function contains the logic that guides the endpoint on what Flow data to display to the user. It starts by extracting the necessary data from the decrypted message.

```
```
const { screen, data, version, action, flow_token } = decryptedBody;
```
```

WhatsApp Flows endpoints usually receive three types of requests:

* A [data\_exchange](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint#data_exchange_request) request signified by a `data_exchange` action
* An [error notification](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint#error_notification_request) request signified by a `data.error` element
* A [health check](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint#health_check_request) request signified by a `ping` action

#### Health check and Error handler

The function handles the health check and error notifications using if statements and responds accordingly, as shown in the snippet below:

```
```
// handle health check request  
if (action === "ping") {  
    return {  
        version,  
        data: {  
            status: "active",  
        },  
    };  
}  
  
// handle error notification  
if (data?.error) {  
    console.warn("Received client error:", data);  
    return {  
        version,  
        data: {  
            acknowledged: true,  
        },  
    };  
}
```
```

#### INIT handler

When a user clicks the Flow’s call to action (CTA) button, a request with `INIT` action is sent to the endpoint. This action returns the initial offer data and pre-sets the radio buttons on the PRODUCT\_SELECTOR screen.

```
```
// handle initial request when opening the flow and display PRODUCT_SELECTOR screen  
if (action === "INIT") {  
  return {  
    ...SCREEN_RESPONSES.PRODUCT_SELECTOR  
  };  
}
```
```

#### Data-exchange handlers

For `data_exchange` actions, a switch case structure is used to determine what data to send back based on the screen ID and other request data.

For the first screen with ID `PRODUCT_SELECTOR`, the endpoint parses the selected `product_type` and, based on that, sets variables for the `OPTIONS` screen. The `phone_use_case` boolean controls whether the phone related questions are shown on the `OPTIONS` screen.

```
```
case "PRODUCT_SELECTOR":  
  const product_type = data.product_selection.split('_').pop().slice(0, -1);  
  return {  
    ...SCREEN_RESPONSES.OPTIONS,  
    data: {  
      // copy initial screen data then override specific fields  
      ...SCREEN_RESPONSES.OPTIONS.data,  
      phone_use_case: data.product_selection === SCREEN_RESPONSES.PRODUCT_SELECTOR.data.products[0].id,  
      cta_label: "View " + product_type + "s",  
      screen_heading: "Let's find the perfect " + product_type + " offer for you",  
      selected_product: product_type,  
    },  
  };
```
```

When processing `OPTIONS` screen response, you should return personalised offer based on the users inputs.

```
```
case "OPTIONS":  
  // TODO here process user selected preferences and return customised offer  
  return {  
    ...SCREEN_RESPONSES.OFFER,  
    data: {  
      // copy initial screen data then override specific fields  
      ...SCREEN_RESPONSES.OFFER.data,  
      offer_label: "Here are 4 shortlisted " + data.selected_product + "s",  
      selected_product: data.selected_product,  
    },  
  };
```
```

In the response for the `OFFER` screen, the endpoint receives the user’s selected device and returns the appropriate device details in the response.

```
```
case "OFFER":  
  // TODO return details of selected device  
  return {  
    ...SCREEN_RESPONSES.PRODUCT_DETAIL,  
    data: {  
      // copy initial screen data then override specific fields  
      ...SCREEN_RESPONSES.PRODUCT_DETAIL.data,  
      product_name: SCREEN_RESPONSES.OFFER.data.shortlisted_devices  
          .filter((a) => a.id === data.device)  
          .map((a) => a.title)[0],  
      selected_device: data.device,  
    },  
  };
```
```

After the `SUMMARY` screen is submitted from the client, a success response is sent to the client device to mark the Flow as complete.
