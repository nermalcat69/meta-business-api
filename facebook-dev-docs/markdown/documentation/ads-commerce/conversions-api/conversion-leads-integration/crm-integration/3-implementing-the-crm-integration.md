---
title: "2: Getting Started With the CRM Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/3-implementing-the-crm-integration
---

# 2: Getting Started With the CRM Integration

Updated: Feb 6, 2026

This guide covers:

* [Creating a new Lead Ads campaign](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/3-implementing-the-crm-integration#step-1-create-a-lead-ads-campaign-optional)
* [Creating a new Meta CRM Pixel or converting an existing Pixel](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/3-implementing-the-crm-integration#step-2-create-a-meta-crm-pixel)
* [Choosing an integration method](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/3-implementing-the-crm-integration#step-3-choose-an-integration-method)

## Step 1: Create a Lead Ads campaign (optional)

This section is optional if you already have existing Lead Ads campaigns. Note that the optimization goal cannot be changed on published campaigns, but you can duplicate existing campaigns, then change the optimization goal.

* Log into your business [Ads Manager⁠](https://www.facebook.com/adsmanager/manage/campaigns) account. (Conversion Leads performance goal is not available through personal ad accounts nor through Lightweight Interfaces.)
  
* Click the **+ Create** button to create a new campaign. Under the **Choose a Campaign Objective** window, choose **Leads**, and click **Continue**.
  
* In the ad set level settings, within the **Conversion location**, select **Instant forms**.
  
* Under **Optimization and delivery** for the ad set, click on the **Edit** button for **Optimization for ad delivery** and choose the **Conversion Leads** goal in the drop-down. The Conversions API for CRM integration is not a requirement to begin running campaigns with the Conversion Leads performance goal, however you will see better results if it is fully integrated.

## Step 2: Create a Meta CRM dataset

This section will walk you through creating a Meta Pixel for your CRM.

**Note:** You will need to have admin access to create or convert a Pixel.

* In [Events Manager⁠](https://www.facebook.com/events_manager2/list), click **Connect Data Sources** to connect a new data source.
  
* Select **CRM**, then click **Connect**.
  
* You may either create a completely new dataset or convert an existing dataset. Your decision will depend on how you want to organize your events and manage ad account access to the datasets. Create a new dataset so the CRM events do not overlap with existing dataset events in Events Manager, which will make troubleshooting easier.
    
    
  If you convert an existing dataset, give the CRM events a different name rather than reusing existing event names, which could cause confusion between the different types of events. Converting an existing web dataset will not affect other events uploaded to it. A CRM dataset lets Meta know that CRM events will be uploaded to it and adds the Conversion Leads Optimization integration workflow to the dataset.
  * **To create a new dataset:** Click on the **Create New Dataset** link, and name the dataset accordingly.
  * **To convert a dataset:** Select the existing dataset you would like to upload CRM events into. Converting an existing web dataset will not affect other events being uploaded to it.
* Double check that the icon for your CRM dataset has updated. If it did not, repeat this step.

**Note:** The integration is Pixel-based. Do not switch completed integrations to a different Pixel.

![Events Manager left navigation with 'Connect Data Sources' option highlighted](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/651743471_1459945359197447_364062364092200302_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ToY1QZUEMJoQ7kNvwEI8UpF&_nc_oc=AdpXU1Z7k-Xm_Bk8N_uoF408MnXpi1_OTNRCLCM2sMfMpU7v-lr7MpCEHUScnChdmNmps7uh4VUogyQkWfnq6HZI&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=wRKQpRFtsRwQQgoEL2T-iA&_nc_ss=7b289&oh=00_AQARGUYMfr_tjOL6XUbPbKYqG0chkfVsCmqa9oxc5pupgQ&oe=6A607462)

![Connect a new data source dialog with the CRM data source type selected](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/653050255_1459945212530795_4102635663282177987_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dQY2hLZAaxYQ7kNvwFo94wv&_nc_oc=AdqlGBV1HrlrqB-kSTBGSVRRjYV_-8-FsBwODSRVElagGaBuS1G2hQ0FQLqt19Bds9l9Dq06CXxxqB9JuNH25xxx&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=wRKQpRFtsRwQQgoEL2T-iA&_nc_ss=7b289&oh=00_AQAcuMrsTyVdNwA59RyrE2L5lG9U5UjfGWl3QJNvo1oCtA&oe=6A606A1E)

## Step 3: Choose an integration method

You will have a choice to complete the set up using the manual integration or a partner integration. A manual integration is a great choice for businesses that have developer resources available, access to their server codebase, and need the ability to customize their configuration. Alternatively, businesses that need a simpler CRM integration may use one of the available partner integrations.

* Enter your CRM in the search box.
  * If your CRM is supported by a partner integration you can choose the **Use a partner** option and follow the directions in that workflow.
    * Select your preferred partner.
    * Click **Open instructions** for the respective partner to get directions for that workflow.
    * Click **Go to partner** to proceed to the partner and begin the integration.
      

    ![Select a partner tab showing Zapier as a recommended CRM connection](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/652294570_1459945185864131_8265866300993431409_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=MfpKeJV6mhQQ7kNvwHO98gr&_nc_oc=Adp9G-t5Ot5_yK_W_KHxujhrsQ47nX7egrp2b3ne9uk5r1b517Ux8joR1dG5p9e9YE904tsVEJZiOm2QgyC0YjMe&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=wRKQpRFtsRwQQgoEL2T-iA&_nc_ss=7b289&oh=00_AQCNmxKw8omCa7gt8ds0S-BCB6H95v_L_Fh-2Dka0BYCzQ&oe=6A60900F)
  * Otherwise, proceed by choosing the **Manual code** option or the **Invite a developer** option, and click **Continue**.**Note:** You will need Business Manager admin access to complete the integration.
