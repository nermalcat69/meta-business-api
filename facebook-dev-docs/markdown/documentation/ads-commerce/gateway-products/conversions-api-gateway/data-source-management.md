---
title: "Monitor Your Conversions API Gateway Setup"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway/data-source-management
---

# Monitor Your Conversions API Gateway Setup

Updated: Feb 2, 2025

## Tools for Monitoring

### Monitoring for a Host Account

#### Check an account’s status

If your system hosts multiple accounts, you can check any account’s connection status in the **Account status** column in the **Overview** section. An Active status indicates that the account’s status is normal. A Deactivated status means the account is deactivated and any pixels connected to this account are not sending events to the Conversions API.

![Manage accounts screen showing the Account status column with Test Client 1 marked Active and Test Client 2 Deactivated.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/457156552_1198778867928772_8826596737965316357_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=nXrIJlkYUSYQ7kNvwGknjOb&_nc_oc=AdrcOFH-JgXtMC4jJ9QhOhu-NAfxl_tSLRS4_u-fJbvJs0BDr2qNoRAWidKHfqA0k7wZDsDMFlrsmlelkgn_kN3Y&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=GgkD3SOGpaViX0Ym8AChEg&_nc_ss=7b289&oh=00_AQDurRxdh03jGyGLqjlRqf2nHxwtFxe-y6n2-W3eZTtuWA&oe=6A60846F)

#### Check resources from Amazon CloudWatch

A host account admin can use AWS CloudWatch to monitor resources and applications in real time by following [the guide⁠](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).

### Monitoring an Account

#### Check event volume in Events Manager (browser events vs. server events)

In Meta Events Manager, select the dataset associated with Meta Pixel that is sending the event you want to monitor. The green line in the chart represents server events (received through the Conversions API), while the blue line represents browser events (received through the Meta Pixel). If the green line follows the blue line (the discrepancy is very small or 0), then your Conversions API Gateway integration is handling events correctly. Check the [Troubleshooting steps](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-multiple-accounts/troubleshooting-guide#troubleshooting-steps-for-the-account--connecting-to-the-gateway) if you do not see the green line.

Clicking on **View details** will show more information about the event. Use the **Event overview** tab to identify issues with the volume of server events sent by the Meta Pixel.

![Events Manager Event Overview tab charting total browser events received against total server events received over the last 28 days.](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/333031841_1168774090489174_830473050382026203_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=N6bf9944XiYQ7kNvwHxDlfI&_nc_oc=AdqKeq4z8wW_LLdx_s2IkS4VKjuTrRrt2UqHC_699UKv9OG7uG6NVVgILG2OImjRUtOvq_s5wD0S42RPaiUrpbX8&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=GgkD3SOGpaViX0Ym8AChEg&_nc_ss=7b289&oh=00_AQAkKAeomjkL_8rL6SOK4_oIG9_cAtkFpgQd3R--ZJLC9A&oe=6A60787E)

#### Check the Event Match Quality (EMQ)

In Meta Events Manager, select the dataset associated with Meta Pixel that is sending the event you want to monitor. The Event Match Quality (EMQ) will then be shown. An EMQ designation of “Good” or “Great” is considered to be optimal. Select **View Details** and then the **Event Matching** tab for more information on the customer information parameters that are received through the server events, and refer to the [Troubleshooting steps](https://developers.facebook.com/documentation/ads-commerce/gateway-products/troubleshooting-guide) on ways of improving EMQ.

![Events Manager Event quality view showing an Event Match Quality score of 6.6/10 with recommendations and shared parameter coverage.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/475755312_3933604320219855_8047919449733439077_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2RN_rsWlLjwQ7kNvwGB5Kgp&_nc_oc=AdqQtbifMW28V-Iq_c-boz6Dz5SQ-k6AGDw3o18AZ0UFEgwEANABcUZbZsQiVH-_tPmVNxNh3g8gtMlEdbrHxn4o&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=GgkD3SOGpaViX0Ym8AChEg&_nc_ss=7b289&oh=00_AQAdtSIREF5eE7HsOukiDsHQmTZ3ihFHC9bA2mzK7E8a4g&oe=6A606AC8)

#### Check event volume in the Gateway UI

In the Conversions API Gateway UI, check the volume of events received from the Meta Pixel (Total Received) and sent to the Conversions API endpoint (**Total sent**). If these two coincide, then the solution is working. As an additional step, check that these volumes coincide with those on Events Manager.

![Conversions API Gateway Overview showing Event activity with Total received and Total sent counts for the PageView event.](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/457315926_495790319734422_5567269818929561604_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mAba0XzivkMQ7kNvwGMalUR&_nc_oc=AdripvujZlYaNqThkh8f4SThk_gv5jkxMH_GTtjFMIPLiMMvSNrYWzR06kbgkyMw2pBH3p_5IwTY4bIXys2sqWOc&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=GgkD3SOGpaViX0Ym8AChEg&_nc_ss=7b289&oh=00_AQDOCkyf21XCcpmoMvVTooMJHhrJ2wLq0A7blh2xDmsWsA&oe=6A609BFD)

#### Check the Meta Pixel connection to the Conversions API Gateway (troubleshooting step)

Verify in your browser’s developer tools that the Meta Pixel is effectively transmitting the user events to the Conversions API Gateway through a successful call to `https://<Conversions API Gateway Endpoint>/events`.

## See Also

* [Conversions API Gateway Overview](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway)
* [Conversions API Gateway Setup Guide](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway/setup)
