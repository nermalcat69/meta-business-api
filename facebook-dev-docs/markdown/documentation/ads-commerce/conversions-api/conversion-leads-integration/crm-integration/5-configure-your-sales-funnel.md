---
title: "4: Verify Your Data"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/5-configure-your-sales-funnel
---

# 4: Verify Your Data

Updated: Dec 8, 2025

There are two phases of data validation:

* **Connect your CRM** phase
* **Configure your sales funnel** phase

## Connect your CRM phase

* After connecting to the Conversions API, refer to the Overview tab of your dataset in Meta Events Manager for integration status.

  ![CRM setup card showing 20% done with 'Connect your CRM' step active and a 'View reports' button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/651239697_1459945285864121_4256073422128708592_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=K8rcv9VOxDoQ7kNvwF66sfk&_nc_oc=AdouWYuA2W7Gf3o-kUG5yFYBISC5db_PJs91qFXLCwqKOFafneKRZFRIl91iEsPT7CLTVGgpSa8KEiygGVqYLLjY&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=JcDyiPVp2dQm3JAUZswFMA&_nc_ss=7b289&oh=00_AQBtD_f-y602ghvIVGuB3VbNkSm-imsBxgpIqu0faBtrBQ&oe=6A608917)
  
* Send at least one valid event from your integration. An event is valid when it has a proper payload, is sent through your CRM using the Conversions API, and can be attributed to a lead.

## Configure your sales funnel phase

By configuring your funnel, you enable Meta to analyze and optimize your funnel's performance, ultimately driving better results for your lead campaigns. To achieve this, the data shared with Meta must meet some requirements.

* After sending all events, refer to the Overview tab of your dataset in Events Manager for integration status. You will be able to configure your funnel. Configuring your funnel helps Meta understand the data sent and perform deep analysis based on the fulfilment of the data requirements. Please refer to the [Configure your sales funnel](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/5-configure-your-sales-funnel) document to learn more.

  ![CRM setup card at 50% done with 'Connect your CRM' marked 'Events firing properly' and 'Configure sales funnel' active](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/652869969_1459945299197453_301774844493082206_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=pj7NleJ62bIQ7kNvwGpwEcS&_nc_oc=AdqGIYG9QOOtNHUL_FpJ8Dd61CJuTvmSNuEopPgVvbRCP7wlfmMjwJTtRUEevcq3hiaObeSVNFyTY3bdAzWXZbmK&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=JcDyiPVp2dQm3JAUZswFMA&_nc_ss=7b289&oh=00_AQAgUDfR8_UdbbsCI-qWGrOqsr9Enn1sNApBI050sowQng&oe=6A607705)
  
* The data sent to Meta must satisfy these requirements:
  * Maintain a running lead campaign generating 200 leads per month.
  * Your Lead Coverage is at least 60%. Lead Coverage is defined as the percentage of leads that have matching events uploaded to Meta. The best way to increase your Lead Coverage is to include the Meta Lead ID in your payload and upload the raw lead event that represents all leads generated on Meta and downloaded into your CRM. You may view your current Lead Coverage by clicking the **View Reports** button in the **Settings** tab of your CRM pixel.

    ![CRM setup at 100% done with event activity chart and a tooltip listing lead and lead coverage requirements](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/653700424_1459945275864122_7876196427228960078_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=7AT7BdBKLr0Q7kNvwHRQ_yN&_nc_oc=AdoIgzKYZjUwb5n0RNCxWy6_VJkriKb3TX84tI8Q1NLADfzWfQstVxuXyZ0Ff4NGno5c29aWjvSZ9DGFStdWz68Y&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=JcDyiPVp2dQm3JAUZswFMA&_nc_ss=7b289&oh=00_AQAwJIVH8pRf-h7fpUqFxwMVVf5z--BAoMSMQADQOllJug&oe=6A608B7E)
  * Data has all the required parameters and is in the correct format. Refer to the Payload Specification section for more details.
**Note**: If the system detects any errors in your integration, you will see them in the **Settings** tab of your CRM pixel. You can also find errors listed in the **Diagnostics** tab along with instructions on how to fix them.
