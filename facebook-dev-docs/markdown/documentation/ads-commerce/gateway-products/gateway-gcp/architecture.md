---
title: "Conversions API Gateway and Signals Gateway: Create an Instance From Events Manager"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/architecture
---

# Conversions API Gateway and Signals Gateway: Create an Instance From Events Manager

Updated: Apr 30, 2026

Follow the steps below to set up a Conversions API Gateway or Signals Gateway instance from Events Manager.

## Installation From Events Manager

To install the instance, follow these instructions for your Gateway Product type:

* [Conversions API Gateway](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway/setup)
* [Signals Gateway](https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway/setup)

In the step to select cloud provider, please select Google Cloud Platform.

![Set up your Signals Gateway dialog comparing Amazon Web Services and Google Cloud Platform cloud providers by product, cost, and setup process](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/686201772_1701108260882825_8684300198541373421_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ehjY_YX777YQ7kNvwGa7Tqj&_nc_oc=AdrqUE9OSx1LYK7fW8WrZ8l0DcZmW_u53xiRWvTzssVkCGPnJtSIEL-ek_W82KWQHetjsp2pTLB_h39NhQopj_Zc&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQBTWRcB2nIKlO6h5qUVhafdJnYHWvymtIzlv-3FLZfj0A&oe=6A60846F)

* Next, select a region to install the instance.

![Set up your Conversions API Gateway dialog on the Select a region step with a hosting region dropdown set to US Central (Iowa)](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/480941054_9637945242929189_4101652325647999084_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=TTjooO0pyggQ7kNvwGPWj6R&_nc_oc=Adrmr9FPod2ur56VqgQQu-MgyvCMVTrg-S6UKTtgg7l0Ta5vd3EEXrUPyccEdp7Th-pKptj44MgvLrXUJO5W2HPW&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQCwcvFVk6xD4_0pmzwJ63HVEtlJ_6buOKdS00Dt-OtqWw&oe=6A6085BD)

* Follow the set up guide to the final step, as shown here:

![Cloud setup step showing four-part setup instructions to install Conversions API Gateway on Google Cloud Platform, including launching Cloud Shell and copying the install command](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/486867875_1365962017771811_7952408039409839316_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=oHljKz1CmP0Q7kNvwHVF3pV&_nc_oc=AdrZrKTGJNffpR7VWtO_0YlOuhPnlwxN_5eJROzI0p8XM4DmcQB02et4W2dOXi0v8h9wz7Hp-aIzv4XdoRzN5lxk&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQD4hxxmhI1hEJamvT8bRkTQJsSomnJkUbl9NnHmdQkJ4w&oe=6A608C05)

* Open the Cloud Shell by clicking on the ‘Open Google Cloud Platform’ button. You will be asked to confirm to open the Cloud Shell session as shown below. Click Confirm to open the Cloud Shell session.

![Open in Cloud Shell confirmation dialog noting the session runs the official Google cloudshell image in Ephemeral mode, with Cancel and Confirm options](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/485659781_1192395102486539_6213839925066220866_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3UzSbZT3EqEQ7kNvwEKcbtd&_nc_oc=AdotaOhSreb-h9XDEeWG5mDsoRlI6Uhu4UiZATVQMPrJUBambNCf9mKnPzMqymJjh3saGNJWHW-j4RmbQKM7c-32&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQAc_W4bDsLeVrskFjv1jzetrrxRkD_P_LLKMYT4lXt6zw&oe=6A609718)

* Click the **Copy** button to copy the installation command and then paste into the Cloud Shell terminal. Press Enter after the command to start the installation. If you see the following message prompting you to authorize the Cloud Shell, click **Authorize** to continue.

![Authorize Cloud Shell prompt asking permission to use credentials for the gcloud CLI command, with Reject and Authorize options](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/485729503_668329268909766_5009611458241254169_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=s_9GVUKQB10Q7kNvwHpFmpz&_nc_oc=AdrY9ruj76N3xBDQHgZ1zUy1IHbOTlX8Rnlw3nHth1ynwOgJV9dvqUGQAxgJ-hoxd_I3qRJv0Jt6MymsxGVCk8SB&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQBa8a2VWHId1Vv8Je2SQ6gyHkHLt38Dq56YKMZ7fOdDnA&oe=6A6079F2)

* Once the installation starts, you will see the following installation guide.

![Cloud Shell terminal showing the Conversions API Gateway installation wizard listing existing Google Cloud projects and prompting for the project ID to use](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/684931141_1518998296677614_1660101793350888808_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fHfYFzcN4RgQ7kNvwFUQFN1&_nc_oc=Adp_A0jJWzKGivns4h-HDpeGpTbMazuTT9ibMHkFycYw2lrmf9X1wfNII7SndK2SEhOZkURAdlfXPvQ5of6fwZ36&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQCeA20qVO_F_7y9mtjKJhi_Jd8wlXOze_FBuDsvRQwIOA&oe=6A608A0F)

* Follow the installation guide and input the required information, such as the GCP project to use, and the GCP region to use for the installation. After the required information is entered, the installation will start (see image below). A link to installation progress / cloud build logs is provided at the bottom of the screen.

![Cloud Shell terminal showing installation started with a Cloud Build logs link for the installation result and a warning not to sign out of the GCP account](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/683839536_4312354928911310_3854831638679592762_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=C4YTed3h3MkQ7kNvwFxpNCq&_nc_oc=Adp05cjUC_MuUnWNUADZ3WSQLjvRjuPDliap4NeJqte2hGNQ8IyZ5ZT_RnH-vU9UszhFe9uoV61b8n647jVqe4-B&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQBmcwAPHIzsIeHFR1SPDl9Wc06i3BRhKkwLFRY1gRV8lw&oe=6A60A1BF)

* The installation process usually takes less than 10 minutes to complete. When the installation is completed, the summary section of cloud build logs shows the instance onboarding guide link.

![Successful Cloud Build summary section with build steps and a Build log linking to the instance onboarding guide to complete setup](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/684222912_799610616292656_5578192526577127135_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=VQsz-XckhqEQ7kNvwHetudY&_nc_oc=Adr-FM946gk1d0kVyIGYXeNDUF9ihsgz4qn8PPxdd4ff5Y0ts2eoDPR35R_FPdSa_AGeKuTA2HYuHOnpm5YZyR0k&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQBvbkbxitHx8M5VaeSQwcoO7oWxvmozwNXEBg9A39_K4g&oe=6A60984B)

* Click the link to open the new instance and to create an admin account.

![Create admin account screen with Email, New Password, and Re-type new password fields and a Create Account button](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/485373849_625326307056279_8620577554995053893_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=8rhCsAGW9UoQ7kNvwG_BjXF&_nc_oc=AdqcxskVqhNK6FM_5km8yb9dFkrTTjmuTSTsAtRteLqNLmHBkBvLbEVfXmUYfA75rYF7qHMMhAof1d_PE4Y4lmbT&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQDpL-NFCEXoH1KZ5NkcBX0XtJ-g7P4vO0ToIFKGneKe1w&oe=6A609FFF)

* You can then log in to Conversions API Gateway or Signals Gateway to continue domain setup.

![Log in screen with Email and Password fields, a Log in button, and a Forgot password link to access the Gateway instance](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/485729794_950429813837107_1391185360631182757_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=pWgCwyZZvV4Q7kNvwHMijQD&_nc_oc=AdrfTH9yWAHas8yn1nfEfDXFqRy59YH55GQymfs-C27yoc4aFb91_V-x0kubjFwzW3iOwUF94xPC_rxma2G6Y--L&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=s7j6k64F415VCSQtmk55ug&_nc_ss=7b289&oh=00_AQB31boj-_HbPa_8sM3WBKBjcBm7avtzTbexZU-2wlhMiA&oe=6A608CC0)

## See Also

* [Conversions API Gateway and Signals Gateway: GCP Architecture](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/architecture)
* [Conversions API Gateway and Signals Gateway: Create a Custom Domain for GCP](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/set-up-domain)
