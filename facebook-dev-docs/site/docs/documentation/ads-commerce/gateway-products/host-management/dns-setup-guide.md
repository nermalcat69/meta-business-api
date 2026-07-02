---
title: "Conversions API Gateway or Signals Gateway System Health Information"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/dns-setup-guide
---

# Conversions API Gateway or Signals Gateway System Health Information

Updated: Dec 13, 2025

System Health Information is log data you can choose to send us periodically from your Gateway Products, Conversions API Gateway or Signals Gateway. System Health Information can help improve the setup onboarding flow, facilitate live troubleshooting and issue identification, and improve the product overall.

## How System Health Information Works

System Health Information is an optional feature you can enable during installation by choosing ‘Yes’ in the SystemHealthInformation dropdown list as shown below.

![Specify stack details screen during installation with the SystemHealthInformation dropdown set to Yes.](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/475327507_597099006617448_2333644442544225176_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4HfqE0hWyEgQ7kNvwE3WKvW&_nc_oc=AdorRgdJF-QE_HMbUCAXXYWoCEAfzqDotFCcFyrpb8B9_mzdtTHjrtGLTnkr-e2Vg9mDGsl42AOzQpBeSEBUeoCG&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=3cdM19aENUqdt6LP5Ax-2w&_nc_ss=7b289&oh=00_AQCi80EqW_zmo6gcT9RLVW17Wmrgqz4UbA9TGUsH8pJtEQ&oe=6A607E39)

After installation, System Health Information can be enabled or disabled from the Gateway Product Settings:

* Click **Settings** from the left navigation bar and click **Updates** menu:

![Left navigation Settings menu expanded showing the Updates submenu item selected among options like SMTP configuration and Backups.](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/475291498_1138127974325000_7588509038313304495_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PsMVWxAF5fQQ7kNvwFSFzjy&_nc_oc=AdrkvPbp7ih-yxJXAraG7UcuhvbvLzTR9uGEO7H-wK_ipKUCmTTtiEIMNFedqTn70SmpTdTviL3WBWW0q6PSUnxn&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=3cdM19aENUqdt6LP5Ax-2w&_nc_ss=7b289&oh=00_AQAVO84PhJ50DmWmhjvqfDqMwrKoQTgy9IJsejfbxc1f3Q&oe=6A607DBB)

* System Health Information toggle switch is shown at the bottom of the Updates page as shown in the screenshot below:

![Updates page with the System Health Information toggle switch set to ON, marked Recommended, above the System logs section.](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/475249027_2196689630733291_4314470166288041971_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PXhbqVA2tpcQ7kNvwFhhcmu&_nc_oc=Ado_k06IDNb6jtF0xcNRnfFii55nHGyOxaSzxa1yP0AzMf6MTtYXnKQcj5NhIszIj28TqXYOEbD7BEIKIS35JAqn&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=3cdM19aENUqdt6LP5Ax-2w&_nc_ss=7b289&oh=00_AQAmdPdkD19IkJbHfWJVbuINV8o4DL0RX05xI_UBR_rzhg&oe=6A608CAD)

Use the toggle switch to enable or disable System Health Information as needed.

## Types of System Health Information Data

System Health Information data includes information about your Gateway Products setup such as:

* **System status**: Information about the server statuses such as CPU and memory usages, SSL certificate status, and automatic update status.
* **Installation**: Information about the setup such as the launch time, software version, and domain name.
* **Event status**: Information about the processing of events within the Gateway Products. This may include event statistics such as the number of received, sent, and errored events.
* **Error logs**: Information about errors and failures when running, such as installation errors and event errors.

## See Also

* [Troubleshooting Guide](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway/troubleshooting-guide)
* [Troubleshooting Tools](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway/troubleshooting)
