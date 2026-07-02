---
title: "Conversions API Gateway and Signals Gateway: Advertising Agencies And Partners"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/create-instance-from-events-manager
---

# Conversions API Gateway and Signals Gateway: Advertising Agencies And Partners

Updated: Apr 30, 2026

Follow the steps below to set up a Conversions API Gateway or Signals Gateway instance for advertising agencies and partners from Google Cloud Platform (GCP) Cloud Shell.

## Installation from Cloud Shell

* Log in to your Google Cloud Platform (GCP) console using an administrator account.
* Open an ephemeral Cloud Shell session using [this link⁠](https://shell.cloud.google.com/?cloudshell_image=gcr.io%2Fcloudshell-images%2Fcloudshell%3Alatest&ephemeral=true).

![Open in Cloud Shell dialog showing the official Google-maintained gcr.io/cloudshell-images/cloudshell image, with Cancel and Confirm buttons.](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/485659781_1192395102486539_6213839925066220866_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3UzSbZT3EqEQ7kNvwEKcbtd&_nc_oc=AdotaOhSreb-h9XDEeWG5mDsoRlI6Uhu4UiZATVQMPrJUBambNCf9mKnPzMqymJjh3saGNJWHW-j4RmbQKM7c-32&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=qf951NMuTqzfrXmPbfaWfg&_nc_ss=7b289&oh=00_AQB_YM2cYdH9BKD8nEJHVj6_A7Kt5gFtFcZJRfJO6fWOWQ&oe=6A609718)

* Click **Confirm** to open the Cloud Shell session. Then in the Cloud Shell terminal, type in either of the following commands to start the installation:

**Conversions API Gateway installation command**:

`bash <(curl -sL https://storage.googleapis.com/capig-prod-public-release/install-cloudrun.sh)`

**Signals Gateway installation command**:

`bash <(curl -sL https://storage.googleapis.com/sgw-prod-public-release/install-cloudrun.sh)`

Press **Enter** after the command to start the installation. If you see the following message prompting you to authorize the Cloud Shell, click **Authorize** to continue.

![Authorize Cloud Shell dialog requesting permission to use your credentials for the gcloud CLI command, with Reject and Authorize buttons.](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/485729503_668329268909766_5009611458241254169_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=s_9GVUKQB10Q7kNvwHpFmpz&_nc_oc=AdrY9ruj76N3xBDQHgZ1zUy1IHbOTlX8Rnlw3nHth1ynwOgJV9dvqUGQAxgJ-hoxd_I3qRJv0Jt6MymsxGVCk8SB&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=qf951NMuTqzfrXmPbfaWfg&_nc_ss=7b289&oh=00_AQCcWEWoGNXKZNJiGacPIM_UpVp1CC8fuiMV2DOmvoI1Bw&oe=6A6079F2)

Once the installation starts, you will see the following installation guide.

![Cloud Shell terminal showing the Conversions API Gateway installation wizard listing existing Google Cloud projects and prompting for the project ID to use.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/684931141_1518998296677614_1660101793350888808_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fHfYFzcN4RgQ7kNvwFUQFN1&_nc_oc=Adp_A0jJWzKGivns4h-HDpeGpTbMazuTT9ibMHkFycYw2lrmf9X1wfNII7SndK2SEhOZkURAdlfXPvQ5of6fwZ36&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=qf951NMuTqzfrXmPbfaWfg&_nc_ss=7b289&oh=00_AQDdICHCPXs2T0CioBKPdG0ZvyGYH-vwPU4TwmwBWfaIOg&oe=6A608A0F)

* Follow the installation guide and input the required information, such as the GCP project to use, and the GCP region to use for the installation. After the required information is entered, the installation will start (see image below). A link to installation progress/Cloud Build logs is provided at the bottom of the screen.

![Cloud Shell terminal confirming health monitoring, then preparing and starting the installation with a Cloud Build log link to check the installation result.](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/683839536_4312354928911310_3854831638679592762_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=C4YTed3h3MkQ7kNvwFxpNCq&_nc_oc=Adp05cjUC_MuUnWNUADZ3WSQLjvRjuPDliap4NeJqte2hGNQ8IyZ5ZT_RnH-vU9UszhFe9uoV61b8n647jVqe4-B&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=qf951NMuTqzfrXmPbfaWfg&_nc_ss=7b289&oh=00_AQDEWds8pzN1r0ecxXHcaoMHRBDXDn5JJJ-mLCBn3R2GMA&oe=6A60A1BF)

* The installation process usually takes less than 10 minutes to complete. When the installation finishes, the summary section of the Cloud Build logs displays your instance onboarding guide link.

![Successful Cloud Build summary with completed Build Summary, installation, cleanup, and summary steps, plus a link to the instance onboarding guide.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/684222912_799610616292656_5578192526577127135_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=VQsz-XckhqEQ7kNvwHetudY&_nc_oc=Adr-FM946gk1d0kVyIGYXeNDUF9ihsgz4qn8PPxdd4ff5Y0ts2eoDPR35R_FPdSa_AGeKuTA2HYuHOnpm5YZyR0k&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=qf951NMuTqzfrXmPbfaWfg&_nc_ss=7b289&oh=00_AQD26HNAI2awLkkfMtSfzWMvNVO3ey3zOegXTbPZ_RY2hQ&oe=6A60984B)

* Click the link to open the new instance and to create an admin account.

![Create admin account form with Email, New Password, and Re-type new password fields and a Create Account button.](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/485373849_625326307056279_8620577554995053893_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=8rhCsAGW9UoQ7kNvwG_BjXF&_nc_oc=AdqcxskVqhNK6FM_5km8yb9dFkrTTjmuTSTsAtRteLqNLmHBkBvLbEVfXmUYfA75rYF7qHMMhAof1d_PE4Y4lmbT&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=qf951NMuTqzfrXmPbfaWfg&_nc_ss=7b289&oh=00_AQDtkfWBYmdm3IirQ89xfG3ouqEAeAI_gr4LMILoCla6MA&oe=6A609FFF)

You can then log in to Conversions API Gateway or Signals Gateway to continue domain setup.

![Log in form with Email and Password fields, a Log in button, and a Forgot password link for Conversions API Gateway or Signals Gateway.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/485729794_950429813837107_1391185360631182757_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=pWgCwyZZvV4Q7kNvwHMijQD&_nc_oc=AdrfTH9yWAHas8yn1nfEfDXFqRy59YH55GQymfs-C27yoc4aFb91_V-x0kubjFwzW3iOwUF94xPC_rxma2G6Y--L&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=qf951NMuTqzfrXmPbfaWfg&_nc_ss=7b289&oh=00_AQBkabwkwdmRCcFXEMdXeKAyvRuLZ6VN_Ftmk94Se5CGsA&oe=6A608CC0)

## See Also

* [Conversions API Gateway and Signals Gateway: GCP Architecture](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/architecture)
* [Conversions API Gateway and Signals Gateway: Create a Custom Domain for GCP](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/set-up-domain)
