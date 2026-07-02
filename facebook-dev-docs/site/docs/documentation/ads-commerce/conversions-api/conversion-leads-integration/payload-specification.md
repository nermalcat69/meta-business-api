---
title: "6: Follow-up Steps"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/payload-specification
---

# 6: Follow-up Steps

Updated: Dec 8, 2025

This guide covers:

* [Allowing the system time to analyze and train on the data](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/payload-specification#funnel-analysis-and-learning-period)
* [Sharing the Meta Pixel with your ad accounts](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/payload-specification#share-the-pixel-with-your-ad-accounts)

## Funnel analysis and learning period

**Congratulations!** You have completed the main steps of the Conversions API for CRM integration and the next steps will be handled by the system. There is no more work on your end unless the system finds an issue with the data. Do not change pixels after this step. Changing pixels will start a new integration and restart the training process.

### Funnel analysis

After the funnel configuration is complete, the system will analyze your data again to determine if it matches with your indicated funnel. The length of this process will depend on the length of your lead conversion window. If it normally takes 14 days for a lead to convert, then you need at least that many days of good data uploaded. Remember, your conversion event must occur within 28 days of lead generation and have a conversion rate between 1-40%.

Check the diagnostics tab in Events Manager to find errors and instructions on how to fix them. Confirming that your data is fitting the requirements you just reviewed is a good place to start.

![Events Manager Diagnostics tab showing active CRM integration issue 'Lead coverage below threshold'](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/653706207_1459945339197449_671956088852579854_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=npmktRTyC8QQ7kNvwGZkJ4i&_nc_oc=AdqggCQtjXCOndg_GYY4Ou6u0_m3jUOMd6MDQ6YYmK99XMnAwpCxxPUrQgYL7vk8ePHjYcecImZ73o0-mrWk8OXa&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=8CoHmr2sH9T2Mmz8uevRlw&_nc_ss=7b289&oh=00_AQAw-Cu-GoS54yrZhNQwPuRamxd1M9QNF1f-RJdePdwcBg&oe=6A606F8B)

### Learning phase

Once your integration is complete and passed the funnel analysis, there is a 2-4 week learning phase before the model finishes training with your data. You may enable the Conversion Leads optimization in the Optimization and Delivery menu of [Ads Manager⁠](https://www.facebook.com/adsmanager/manage/campaigns) during this period, but you may not see the full performance gains until after the training period. If you observe subpar performance with the Conversion Leads, it is recommended that you wait for the Learning phase to finish before enabling the optimization.

Upon successful completion of the integration, a confirmation modal will appear to notify you that the process is complete.

![Events Manager confirmation modal with balloons reading 'Congratulations, your CRM integration is complete'](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/653706491_1459945362530780_7268147425259848090_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=rnXarJKKxlMQ7kNvwFWTyKP&_nc_oc=AdqWrRFPyMUnJBz0YIZH9nwn328do22nbsg-c3a0sW4OSmahnw33oN5vQTJA6ULclaZEviPLT-N2sOTTSqT8Lucy&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=8CoHmr2sH9T2Mmz8uevRlw&_nc_ss=7b289&oh=00_AQBvDITwv0D0QG2jGaTeEUuMX6Z4El7p3E-dfRfySoMx_g&oe=6A60900D)

## Share the pixel with your ad accounts

* Ensure that your ad accounts will have access to the Pixel when running a Conversion Leads campaign.
  Under the **Settings** tab in [Events Manager⁠](https://www.facebook.com/events_manager2), click on the **Share With an Ad Account** button. This will bring you to your Business Settings. This can also be accessed directly in [Meta Business Suite⁠](https://business.facebook.com/).
  
* Select Add Assets under the Connected Assets tab for your Pixel to add any ad accounts you want to have access to the Pixel.
