---
title: "Data Pipeline Management"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway/data-source-management
---

# Data Pipeline Management

Updated: Feb 2, 2025

Data pipelines represent the flow of data within your Signals Gateway, from receiving data from a data source, to sending it to a selected data destination.

You can manage your data pipelines on the **Data pipeline** page which includes creating, deleting, and updating your pipelines.

There are separate tabs on the **Data pipeline** page, one containing Signals Gateway data pipelines, and another that contains Meta Conversions API data pipelines. You can switch between these two tabs to see all of the data pipelines.

![Data pipelines page on the Signals Gateway data pipeline tab, listing pipelines with data sources and destinations.](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/473621965_516519091442502_8580366968924790334_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=BfpmRJHMqU8Q7kNvwE77RkA&_nc_oc=AdoqEPsFDHifIT59P91RCId90iAxqY6Gn8yP0XIvD8f_cFahPJlHOrGdWPKNhpsTRVCtTUaVhb4dxYriHIx5U2fc&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQD2vB4_Sh_r4gaB_suxUIcyH6D4F8O_Gzpw9lCzZcL87g&oe=6A609AF9)

![Data pipelines page with the Conversions API data pipeline tab selected, listing Conversions API Gateway pipelines.](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/473622802_1518960945463913_8815228012524752381_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kkhi_Rlf8TMQ7kNvwG-zBt0&_nc_oc=AdojB3AcFCRWCDc2keBQlOPSiGLY-6HYfF5jINf5FSN9gilaivPHtumadLbennXrsh5t3h6wEdVJoomYF8LkGVWh&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQCLkSSAFWe3tFiaRvCKSd4UF7SxHaAtrG6CsJgQySAcPA&oe=6A608F49)

## Managing Data Pipelines

This section includes details about creating, deleting and updating a Signals Gateway data pipeline. For creating a Meta Conversions API Gateway data pipeline using a Meta Pixel, refer to the “Connect a Meta Pixel to the Conversions API Gateway” section.

### Creating a Data Pipeline

On the **Data pipeline** page, click the **Create data pipeline** button located in the top-right corner to open the pop-up window that will open the creation process.

![The Create data pipeline button located in the top-right corner of the Data pipeline page.](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/473619165_1562293395165097_2333927043378960390_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=w_43DEur5jQQ7kNvwFcd67t&_nc_oc=Adq4H0HOgFvQW8OQ3pD0cIaHH41wkut272D2pDYyiw74HpDQiVf2c0bypxnGOzmVXUtIEFhmnYoo9VfPT85wYVPw&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQCW3SbECpQ5R0Hqik35ipsLsKLBk_-rj90Wrm4ABMDwog&oe=6A60796C)

You can then choose which data pipeline type to create. In order to create a Signals Gateway pipeline that will send event data to Meta, you need to enable the corresponding plugin, as shown in the screenshot below.

![Pipeline type dialog asking which pipeline to create, with Signals Gateway pipeline selected over Conversions API Gateway pipeline.](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/473620298_1313884593288244_6094285542762003647_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qs8E0Or6s9sQ7kNvwFwApca&_nc_oc=AdrRWSpW-MiVZDilM_XIhq-d0APPCpbztIDZODQ4Mi727-EFUuhaV1S_sJuI40oZSMTRkIWvLr2ih9-lfzm_uWvB&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQBSjkvVq2leJvJ_6C8lmbo8nDA-D1_kwdNc19n4xcwrHw&oe=6A607479)

You can then choose a name for your data pipeline and pick the data sources and data destinations that you would like to send events to, and receive events from the data pipeline. Follow the instructions provided in the pipeline setup screens to complete the process.

During the data pipeline creation process, you will also be able to configure the data sources and data destinations with the step-by-step instructions.

### Deleting a Data Pipeline

To delete a data pipeline, you can first click the data pipeline which you want to remove from the Data pipelines page.

![Data pipeline list with a pipeline name highlighted, showing where to click the pipeline you want to delete.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/473621013_1003477711659292_1416870438370590708_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=31XF2I3CnzcQ7kNvwGiyYlC&_nc_oc=AdoOdqD3fhYTHm3piUmepzOOxXLdXJo0zDRsGv-hwSDWJIgadUrUr7phhKM-hVtYq7u7pV3cbuW8ES1tqs8smQTn&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQAoRFyo3Rfp_DmInljVhBrsCTQxwkYyfNCwFZo23GUuAw&oe=6A606B2D)

Then find the **Actions** drop down button on the top right corner, and click **Delete pipeline**.

![The Actions drop-down expanded in the top-right corner, showing Disable pipeline and Delete pipeline options.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/474079849_969189468428951_4926031534282536896_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zp8adsmVNHUQ7kNvwGAvq8b&_nc_oc=AdpVCGtdydjrX2A0BkUAeuU_p_hNFCvJGGGIphLLqoOlI2zwzFE2uswZ9vOAUhqv_dwKgTJ5T0A2M8rWr_sYVZoB&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQAEtm5YrIL2C9fuq5scSHj6xaTOWPWsBmty0IXH5AxR1g&oe=6A60866C)

Upon clicking the **Delete pipeline** button, a pop-up window will appear to guide you through the deletion process.

![Delete pipeline confirmation dialog warning the action is irreversible, with a field to type the pipeline name to confirm.](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/474068172_1254068829003567_7036955055596880679_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=CXmHmt4L5yYQ7kNvwFeDejp&_nc_oc=Adr5W8hINZ_Xhpb1zf3xA5I9WlByOnH9RapkWDaRhccC5MhBMEX2vAt8o6l293JHaA4Bx1axLLdlhjgm7GNip_BJ&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQAhjHYt-aWTIY-gNOZiRj4kAwCXA2eAM1FRkqsvibUbHg&oe=6A6099A8)

### Editing a Data Pipeline

After creating a data pipeline, users have the ability to make modifications, such as renaming the pipeline or adjusting aspects like data sources, data destinations, and filters associated with the data pipeline. These actions can be performed on the specific details page of each data pipeline.

Update the pipeline name:

![Edit pipeline name dialog with a Pipeline name field and Cancel and Save buttons, opened from the edit icon by the pipeline title.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/473619573_2596160420578340_5995295435961307869_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=J-bD1Qq5haUQ7kNvwFPBSfx&_nc_oc=AdoL4A566TUI9MYMmwdROri1Uq8sq9ykqoltHfBJssgj1f1Uh3lcERwqfzV5rjuDgD5Pyeocgd5jyNlHRMULtgfE&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQAskj4aLcUtlVJdoUUPObshXA1FR_FW7l1bMY30hWmBjQ&oe=6A606EA5)

![Pipeline Overview with Data sources, Processing pipeline filter, and Data destinations, highlighting the add buttons for sources and destinations.](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/473894797_386711434532281_899390943834148467_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=bc-PHMy_M9UQ7kNvwEdmRS-&_nc_oc=Adq0s3eTXxvYL5mSrWjyMNpKUzNDXk3ejRtAYrSqrScI5-jWFloS7T_VChkYjIwggyopiwugxcUmVqlABFMpFmJk&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=RNDXWdCDfne88fiIXB4JYA&_nc_ss=7b289&oh=00_AQD7WUOQ3duE9ZDVS6q7KGj5Au0KfmcRG37L9iMUyXdhNw&oe=6A60901E)
