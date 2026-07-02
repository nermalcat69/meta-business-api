---
title: "Step 2: Verify your integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/4-verify-your-data
---

# Step 2: Verify your integration

Updated: Jun 28, 2026

* **Note**: there's usually a 30-minute waiting period for events to show up in Meta Events Manager.
* On the data source overview page, you see the CRM life cycle. It confirms that you have connected your CRM with Zapier and shows the next step.

![CRM life cycle card showing Zapier Conversions API setup 50% complete with 'Connect Your CRM' done](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/651825040_1459945399197443_7233827734433943672_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qe8ArZcz2CkQ7kNvwEiBH-5&_nc_oc=AdrL2M-kiKSza6xAkI25__33idJe3RE0-GdBk5pb4Mb6wJFtAxMlauYDT84QtrbPPEW0LeOTRjh-hIVr8AVLqRRX&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=tn6JaNSUnDUGXWxvJ-0Oeg&_nc_ss=7b289&oh=00_AQCLRFAvvbNJ7nMt1sq0CS0oXEAMQCP6mACo-md3-kdMAw&oe=6A608F80)

* Events typically appear within 30 minutes. Meta displays each event in the **Events** table with the **Conversions API** connection method once your integration sends it.

  ![Events Manager Events table with lead events sent via Server using the Conversions API connection method](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/653837349_1459945342530782_3497676488412173543_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vXFZ5fSv4LkQ7kNvwHLeDtu&_nc_oc=Adplvybw-rVJjFatiT_NM72VKIXhhRkGe-pSgf63y_R1MMqZrvLySh0JXBX7Z5CqMAQcwiPERsqgMvrO4bPxjQYr&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=tn6JaNSUnDUGXWxvJ-0Oeg&_nc_ss=7b289&oh=00_AQB94d0EP1FOf1J1AfoD9ocyQH-VajpAUtQZpDQ4uNXRIA&oe=6A606EB1)
* Open each event sent for the Conversion Leads Optimization in Events Manager and check that they have the custom parameters `lead_event_source` and `event_source` populated. If the event does not have these parameters, the event will not get registered as a conversion leads event.

  ![Active 'salesqualifiedlead' event showing Parameters lead_event_source and event_source populated](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/655008773_1459945242530792_2203175273018917859_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-5yEh1Z5FIsQ7kNvwG7kN-T&_nc_oc=AdrrnUp9zECyiam1eBPlRFE0J70R99vEgAEML1g63pb-UKTOJBuTMZHRKY9EvdlekkiqULeEtUOwBZiWbhDXyuN0&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=tn6JaNSUnDUGXWxvJ-0Oeg&_nc_ss=7b289&oh=00_AQAWc7jrbMRf6XFuk-bT6A1iUfZ7__upqsyPg_ph_GxhHg&oe=6A606814)
* In **Events Detail**, click the **View details** button. In the **Event Quality** tab, you find the Event Match Quality, which shows events' match status. You see which personally identifiable information (PII) Meta receives and the match percentage for each event.

  ![Expanded 'Working - Contacted' Conversions API event with advanced matching activity and a 'View details' button](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/651705043_1459945229197460_7805569165038261688_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=u0OzZcKFD7MQ7kNvwGJGRZ9&_nc_oc=Adr82Xj6PcW4FZmJwoUw482OrXX-lBPSOa1W-hvMLgWW3G8rrFWKZ2hwHWshBg__jw8qniUQR3sQfz4YcDFRJ6f3&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=tn6JaNSUnDUGXWxvJ-0Oeg&_nc_ss=7b289&oh=00_AQCEBKnRHkovRWJJ9SPpaf6eBqBOPPlbjPka7p0zTI5GPg&oe=6A608807)

  ![Event Quality tab for a Lead event showing Event Match Quality score 6.2/10 and PII parameters received](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/651683827_1459945225864127_5691959931486347467_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=LMc8_6ueJeUQ7kNvwGrYjzl&_nc_oc=Adqgzq7UK2_MSibL2DCiX1D_mDjBRtNcge9fC-TcgHujqi2kjfAIdQvyrTczkF-puUNxumCuhcdct0TyD9p3cENI&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=tn6JaNSUnDUGXWxvJ-0Oeg&_nc_ss=7b289&oh=00_AQD-7gTABRQmlHQw-BvKPCliw1u7KWf6WeCO7rpchgrNQw&oe=6A606E14)

  **Note**: CRM quality is measured over a 24-48 hour period. If your scores aren't visible, it may be because no valid events were received during this timeframe or they were discarded due to data policies or regulations.
