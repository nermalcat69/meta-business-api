---
title: "Conversions API Gateway and Signals Gateway Control Plane API"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/account-management
---

# Conversions API Gateway and Signals Gateway Control Plane API

Updated: Feb 10, 2026

## Partner Integration

### Overview

Conversions API Gateway and Signals Gateway control plane API is a set of GraphQL APIs exposed from the Gateway instance. It allows developers to programmatically manage accounts, data sources and other configurations of a "Gateway Products" Conversions API Gateway or Signals Gateway instance. Partners can integrate the API to build into their advertiser-facing UI and offer their advertisers a seamless onboarding and management flow.

Potential use cases:

* Advertisers onboard to Gateway Products using the partner's UI and perform follow-up actions through the Gateway Product admin settings. This requires partial integration of the control plane API.
* Advertisers perform all actions on the partner's UI, including onboarding to Gateway Products and follow-up actions. It can be a good use case for partners who do not want to expose the Gateway Products UI but still want to provide a Gateway Products as a service for the advertisers. This requires full integration of the control plane API.

Refer to the section below for more details on integration steps.

## Integration Guide

Depending on the use case, there can be two integration paths (as shown in the diagram below):

* **Partial integration** of control plane API. This does not require authentication from advertisers.
* **Full integration** with control plane API. This requires authentication from advertisers either using [Meta Business Extension (MBE)](https://developers.facebook.com/docs/meta-business-extension) or manual generation of tokens.

![Three-stage integration diagram: Stage 1 Prerequisites branches to Partial integration (Stage 3) or Full integration via Stage 2 Authentication](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/474155316_1509688453034120_8234984583148262568_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=rlmUCbK8Df0Q7kNvwETypRu&_nc_oc=AdqIkrQYDWpwbzWRjPBPc2E-n30QjSfKBs03b9-sGOLXLDGzS9GfUhifSd0IuzekkQquQOdfeF8Ew_q2zk9tQ_ai&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQBbuooi9jnfpSa04oTI_NOl9vTBUR3QqyF_z3XpWD5RTQ&oe=6A608EBF)

## Prerequisites

For both integration paths, the partner needs to first complete the steps below:

### **Step 1**: [Onboard as a host of Conversions API Gateway instance](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-aws-eks)

### **Step 2**: Generate API account name and API secret key

Go to:

```
https://<Gateway Products Endpoint>/hub/
```

Navigate to the **Host settings** tab, select the **Manage API accounts** page, and click the **Add API account** button.

![Manage API accounts page under Host settings showing an empty No API account state with the Add API account button](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/473814866_937263281841090_8179208532172736555_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9Rb0tIcVUIoQ7kNvwENPin6&_nc_oc=Adpf-1SUgzaRV7Rs43Q-wx4Tq_-8fjDl4t5TNNeMZNpFfuoL2xO6JsSoPEZSYoJH7PTW-xkhGzpjS2YDRYjQB2eK&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQBNqJjmoiWAkE8oe55ACC3bq3zy2QdKjqrbAg-iMXdK4w&oe=6A608196)

Re-enter your password. Click **Continue**.

![Create a new secret key dialog at the Enter password step with a password field and Continue button](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/474059543_644925434597312_5303802848128277865_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ppxtJrxVcLQQ7kNvwEJiAJp&_nc_oc=Adq7eMvpf3cq2rLLkt7CE60inGqVIN8z1jZ8Fh6M-IrIwJQstwVq6O30r6upS1dt-dgENk7o--yu_bBhhPfbW5_B&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQBZujqbX6U65RjkHDAcrroCjMxiA2MGQX80m54FRaEzFQ&oe=6A60833A)

Enter the name of the API account. Click **Continue**.

The account name can only consist of letters and numbers, and cannot contain spaces. The maximum length is 20.

![Create a new secret key dialog at the Add API account name step with an API account name field and Continue button](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/474322830_1057371176161173_7657459244640579009_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2cZRPXI9nQgQ7kNvwEFoLOA&_nc_oc=Adqio0A29bMeBJP4h1MQDHluH7FUP4Xy_kVsFK7pSuTPlzWf7-xA1jY8Zcy0XlwsOsSPqW6lLIoM5yrsPa1dsAD1&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQB7TyZH957B77haJqDBOTeeCW7KhMFeHpUhn8-44VER6g&oe=6A609632)

Copy and save the generated secret key. You will not be able to view it again.

![Create a new secret key dialog at the Generate secret key step showing the generated API secret key with a Copy button](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/474148739_2041086379693626_6925113833124726706_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=BJ0RFN5vBJwQ7kNvwHOlcTb&_nc_oc=AdobfJzxk8f1B2c1TRS6-qqK1G_YT4_zRDYVBrKT7u36gMo_rhINWaswDuZw1BODhdUWBWUtKY4hDFf_OFOQs1bR&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQAdR3MZKCokVcKCogdnCHst8fLQfG31kPA5ETDwSAGYGw&oe=6A606EA3)

To remove an API account, click Delete API account. Kindly note that the action is not reversible and can potentially cause disruptions to any advertiser's applications or services using the API.

![Manage API accounts page listing the TestClient1 API account with a Delete API account button](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/474039778_4083692535284230_3930329005111351168_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dc_tZZ8-HfwQ7kNvwElCw07&_nc_oc=Adrsi6VRw2TaLiZFVB1SeBDn1EoMHH4fFQroqC5JHHdUp34Wg26KOvfmYSksQYCXY12swChksU6MJ3mriYynOrq-&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQCVKBTt89H9AVyFCTHiIA8oHAtMjJc0bynwfkwRORZRkg&oe=6A606D67)

## Partial Integration

A use case based on partial integration:

* The advertiser opts in for Gateway Product service using the partner's UI.
* Partner generates an invitation link which can be used by the advertiser to set up a password and complete Gateway Product account creation.
* The advertiser uses functionalities on Gateway Product UI to perform actions such as data source management as well as account user, domain and routing management.
* Partner retrieves the advertiser's account usage and bills accordingly.

A high-level user flow may look like below:

![Partial integration flow: advertiser opts in for Gateway service in Partner's UI, clicks invitation link to set up password in Gateway UI, then manages data sources and account users](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/474029243_1334100241076332_2177273355996159701_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PZYzG33gS_8Q7kNvwFPsoJh&_nc_oc=Adrg3rEeNphTLxlxMq9_WKYQCUPJd6Vpd70ElJlCkvfCqpPq9O48wdA96KvQRbpycXwbMicxQZqrlhLpYh9l3f0N&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQBaccRUdnUAWzr0uBASVbY7ucMuJPs6ApHo4aF_oLMF7w&oe=6A6077B4)

To achieve the above, the partner can integrate a subset of control plane API, including:

* Get API Access Token
* Create Account for advertisers
* Get Account Usage, for example, for billing purposes

## Full Integration for Conversions API Gateway Example

A use case based on full integration:

* The advertiser opts in for Gateway Product service using the partner's UI.
* Partner onboards the advertiser's Gateway Product account and receives permission to manage the account; the advertiser authorizes the partner using the Meta Business Extension (MBE) or manual token generation.
* The advertiser can perform data source management as well as account user, domain and routing management in the partner's UI.
* Partner retrieves the advertiser's account usage and bills accordingly.

A high-level user flow may look like below:

![Full integration flow: advertiser opts in for Gateway service, then authorizes the partner via MBE (Option 1) or manual token generation in Advertiser's EM (Option 2), then manages data sources and account users](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474230763_1275981963705984_4214667397004674414_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gvKWhunHr3gQ7kNvwFMGpJe&_nc_oc=AdpHl_OiDnrWEOcCs241D0pO6oikg2V6xk55U0HMHRg8hTKi4ZsoQPbYQFnKswzQ2NTz6IplEpfB2muTZQZmXY9F&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=A7ljCHS0lT5u5qLhPsTkig&_nc_ss=7b289&oh=00_AQCrrCAacVBiqjL_6WzdZCRTpJ6CA16fm0cYM-uHBz1c1w&oe=6A608563)

For this integration path, partners need to request authorization and get system user access tokens via authentication in order to send events on behalf of the advertisers.

## Authentication

Partners have the following two authentication options for Meta Pixels not managed by them:

#### Option 1 - Meta Business Extension (MBE)

Before you start, you'll need to:

Complete [all the requirements](https://developers.facebook.com/docs/facebook-business-extension/fbe/get-started/pixel-capi-onboarding#before-you-start) for implementing MBE.

MBE provides an endpoint to retrieve system user access tokens created in the advertiser's Business Manager. Partners may follow up to [Step 4 of the MBE integration guide](https://developers.facebook.com/docs/facebook-business-extension/fbe/get-started#integration-setup). Ensure that you:

Ensure that you:

* Set the value of the [channel parameter](https://developers.facebook.com/docs/facebook-business-extension/fbe/get-started/pixel-capi-onboarding#setup) in setup configuration object as `CONVERSIONS_API_GATEWAY_ADVERTISER`.
* Are able to receive the webhook response at the completion of onboarding.
* Use the access token returned via MBE and convert it into a system user access token by [making an additional API call](https://developers.facebook.com/docs/facebook-business-extension/fbe/guides/get-features#get-system-user-token-via-api).
* Save a copy of `external_business_id`, `pixel_id`, `business_id` and system user access token in your system.

#### Option 2 - Client System User Access Token

With this option, partners may have the advertisers:

* Manually create a system user access token via the Conversions API inside Settings in Meta Events Manager (EM).
* Share `pixel_id`, `business_id` and system user access token with the partner and save a copy of it.

## Integration

Partners can integrate the complete set of control plane API.

## Get API Access Token

Provide the API account name and API secret key obtained in [Step 2 of the prerequisites](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/account-management#pre-reqs) to get a short-lived access token for making subsequent control plane API calls. Note that the token expires in 10 hours and will need to be obtained again by calling this API.

**Sample Request**

```
curl -X POST \
-F 'client_id={client_id}' \
-F 'client_secret={client_secret}' \
-F 'grant_type=client_credentials' \
'https://<capig_domain>/clients/token'
```

**Sample Response**

```
{
    "token": <token>
}
```

**Available Parameters**

| Field | Description |
| --- | --- |
| `client_id`  type: string | **Required**  API account name obtained in [Step 2 of prerequisites](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/account-management#step-2-prereq). |
| `client_secret`  type: string | **Required**  API secret key obtained in [Step 2 of prerequisites](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/account-management#step-2-prereq). |

## See Also

* [Control Plane API: Data Pipeline and Signals Gateway Pixel](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines)
* [Meta Business Extension (MBE)](https://developers.facebook.com/docs/meta-business-extension)
* [Meta Pixel](https://developers.facebook.com/docs/meta-pixel)
