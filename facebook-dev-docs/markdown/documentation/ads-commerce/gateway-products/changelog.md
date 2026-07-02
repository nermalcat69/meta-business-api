---
title: "Conversions API Gateway and Signals Gateway: Uninstall Guide"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/changelog
---

# Conversions API Gateway and Signals Gateway: Uninstall Guide

Updated: Apr 30, 2026

Follow the steps below to uninstall the Conversions API Gateway or Signals Gateway.

## Amazon Web Services

1. Navigate to the installed CloudFormation stack for the Conversions API Gateway or Signals Gateway.

2. Press the **Delete** button (in the top navigation bar) to begin and follow the prompts to complete the uninstall process.

![AWS CloudFormation Stack info page for the Conversions API Gateway stack, status CREATE_COMPLETE, with Delete button in the top bar](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/474490239_1647558829175470_3430946133839142938_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JCpC0Gt4IAEQ7kNvwHz7tmn&_nc_oc=AdoJHZUPgQCCELQczmU52y11yBSd_6iOV7a4Q3lDtUnYwIccbXN5pxTDktFXoItUMm3iCzeid65NhlWEgiX-Dxay&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=8Z3bUlhlewZCx2ILLS2yQQ&_nc_ss=7b289&oh=00_AQDtlR0ntG94QzXc3mqbpTSevwWnLg5f0nkslldlIUHlBw&oe=6A606FB8)

![AWS CloudFormation Delete stack confirmation dialog warning the action cannot be undone, with Cancel and Delete buttons](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/474159753_8987587064692278_3131442280866122365_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=U58Ov0RWtAcQ7kNvwENQ9_U&_nc_oc=AdoKl7YtSTGj5whHBvWWTtjJ9RlFUHCOQSHXZLaUbr9VoCUx1LuR0bEj6V6t5y9j0K6SupOwcvLm4DLci9Bx6vhs&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=8Z3bUlhlewZCx2ILLS2yQQ&_nc_ss=7b289&oh=00_AQCZ-sR5p0P_nkcEdQJ_Qfc-vOkQ5i8GCcyHW7TbqYapDg&oe=6A6075D6)

![AWS CloudFormation Stack info page for the Conversions API Gateway stack showing status DELETE_IN_PROGRESS, User Initiated](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/474615043_3030544727116390_1732902140378423978_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=CZ5QalSURJYQ7kNvwHTDZMa&_nc_oc=AdpgmLXaDzntCC_d4Ly8UzZhQC7cDT32mvuEd6LaJeAesIJJW67TnyEq3aa3HDe26Wxe2z7wSbhzlmkHQTrUl-fw&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=8Z3bUlhlewZCx2ILLS2yQQ&_nc_ss=7b289&oh=00_AQCEkAxFT6_tmcIC5MTD37fsYERmtPR6hktf_Wj14olr_g&oe=6A60774C)

## Google Cloud Platform

1. Open the installation [Cloud Shell link⁠](https://ssh.cloud.google.com/cloudshell/editor?cloudshell_tutorial=tutorial.md&cloudshell_image=gcr.io%2Fcloudbridge-prod%2Fcapig-cloudshell%2Fcloudshell-install%3Alatest).

2. Run command: `bash <(curl -sL
  
https://storage.googleapis.com/capig-prod-public-release/uninstall-cloudrun.sh)` in the Cloud Shell terminal.

3. The current Gateway installations in your account will be listed. Select the one you want to delete.

![Cloud Shell terminal listing current Gateway installations in the project and prompting to enter the number of the installation to delete](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/473382578_3914072902245289_2360877550352148040_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lEKP9Fb2JecQ7kNvwH8ZrEF&_nc_oc=AdpdbU1iCfRCFjNq0xa29qc-Pc4XK46kaoEyUe7EWSy2YM98SMnA37-xV34scDwDrbT4--_ZgfYilHQMZcRmJOQw&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=8Z3bUlhlewZCx2ILLS2yQQ&_nc_ss=7b289&oh=00_AQDlmYSledx7ml9NXg4EiI0eKagM43HoNV4kiUtZhVcbrA&oe=6A6088A8)

4. Confirm the selection by typing in the installation name when prompted.

5. In the end, you will be asked whether you want to keep the storage bucket or not. The storage bucket stores backup files and related installation configuration.

You are required to delete the CNAME record associated with the instance and all CNAME records for each account created during the Data Routing setup process.
