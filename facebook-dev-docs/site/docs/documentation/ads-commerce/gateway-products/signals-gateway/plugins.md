---
title: "Solving Issues Using the Diagnostics Tab"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway/plugins
---

# Solving Issues Using the Diagnostics Tab

Updated: Feb 2, 2025

The diagnostics tab within the data source / destination details modal is a place for users to check issues in their Signals Gateway inbound and outbound setups. The diagnostic tab has been enabled for Signals Gateway Pixels, Signals Gateway SDKs, and Meta Conversions API destination.

There are three entry points to the diagnostic tab:

### 1. From the data pipeline details page

If the source or destination has diagnostics, a warning / error icon is shown in the corresponding graph node, in place of the event count.

![Data pipeline details page showing warning and error diagnostic icons on a data source node and a Meta DataSet destination node](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/473803176_1842155806600154_1342253983813063991_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Dgh52FVJyNQQ7kNvwEoIjzf&_nc_oc=AdpOCBAvwvhe9Rb9rGC-nyOrAwPZpr6rt9wBs5DoPRiGgBJekj4QF6_UNEhnuiVopIechDIYlRpBlnWRC4TQleul&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=xaOGEvye04vaPguVUH-9fw&_nc_ss=7b289&oh=00_AQAHruMtKmPIK-VPjPYfPSRQ1Eo-gh4kM1-zlGLllIxcvw&oe=6A6073AE)

### 2. From the data source or destination list page

If the source or destination has diagnostics, a warning / error icon is shown in the corresponding table row.

![Data destinations list page with an error diagnostic icon in the row for a Meta DataSet Conversions API destination](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/474105276_1267321144487751_5725998510315564713_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lutt7JfyPRUQ7kNvwG7r2Pl&_nc_oc=Ado-eA8y-nybRypuafZMoPUjSzgYHS_3WloKrMsfcEY2wun86AYkUoI9FRdJYCYjadU-FptU52l6FOA_At3AX4oy&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=xaOGEvye04vaPguVUH-9fw&_nc_ss=7b289&oh=00_AQB4aUjXFIRKi_4MbASa0DagWYyJy6WtzPRYxcXJYzW5Yg&oe=6A609AB9)

![Data sources list page with a warning diagnostic icon in the row for an SDK data source named SDK with issues](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/473800662_627589296464096_73956255768848948_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=McK-B1B8WjkQ7kNvwGU-lGp&_nc_oc=AdrWxgIr8v0CKEznA4DS4s_NjYyxE-wYyu2VePu2oBZ2iyiUJ_tPd9USByGesQkuZr9V6PdC3fNJqGboKGm5XOGl&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=xaOGEvye04vaPguVUH-9fw&_nc_ss=7b289&oh=00_AQBKUNICLsXM2W7Jsbkf2s1IAq1A3vIO_5QIqAk1kw2k8A&oe=6A6070BE)

### 3. From the Message Center, as mentioned above

For all entry points, clicking the warning / error icon opens the diagnostic tab of the data source / destination details modal. In the diagnostic tab, users can search, sort, and filter the diagnostics.

![Data source details modal open to the Diagnostics tab, listing two pixel issues with searchable, sortable, filterable columns](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/473812363_1319732582497250_7469311299269411337_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3hLhhhls_34Q7kNvwFx8t_Q&_nc_oc=AdpZD34I9EzWJAV6xu4O7cxHsjQhtbO1TwamnhJY3Xsk6T_Mp9E4qHpLFHiQtMFIVnJLoev0NAMCaOvJM2xEmTSR&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=xaOGEvye04vaPguVUH-9fw&_nc_ss=7b289&oh=00_AQChp3mgo98_1hHTBQY0-MS4QZbd8dizF6loUOsvtuFf_A&oe=6A6086E9)

Clicking the "..." button and then **See details** brings up the issue details modal, where users can see instructions on how to resolve the issue, and click on CTA to fix the issue (if available).

![Diagnostics tab for a Signals Gateway Pixel showing one issue, Pixel is not sending events, with Subject, Asset, Description and Last detected columns](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/473814369_1655337388733223_1448402432223096423_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dvT03_Uon6AQ7kNvwFd1lAH&_nc_oc=AdoBG2NOi18xzmUh892I6tBrEeAVoe-hcvYF0gqTJhlN2Bc6FZ676wSQxjWyqsyX-ncuVPoqNFKFlLcpB79KY7UG&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=xaOGEvye04vaPguVUH-9fw&_nc_ss=7b289&oh=00_AQCaN-YetqRw5899CNu3uCORso-8jgG8gDUlweNNbyNFfw&oe=6A6079F8)
