---
title: "Data Routing Configuration for Hosted Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/account-management/manage-allow-block-lists
---

# Data Routing Configuration for Hosted Accounts

Updated: Feb 2, 2025

When connected, a web pixel sends events to the Conversions API Gateway or Signals Gateway using a domain proper to this communication, ideally the same as the page where the pixel fires (that is, first-party communication). For example, if the pixel fires on advertiser.com, ideally the Conversions API Gateway or Signals Gateway will be reachable by the pixel on gateway.advertiser.com.

The data routing functionality allows you to define the subdomain for the pixel to communicate with the Gateway Products, Conversions API Gateway or Signals Gateway.

To configure, select the **Data routing** menu in the Gateway Products UI.

![Data Routing screen with an Optimize button and a Before you begin checklist for adding a subdomain through the DNS provider.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/457059282_741626914721763_2066418780122011989_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=HlSbh3d5MUAQ7kNvwF4mLDe&_nc_oc=Adqskz0G3r8OpSgo5yeXhsqMypaSzlNeCalopMBfDJNkgBefcF58S4D_XpLViJqTxiFLHST4XDP-QMxJAKhA-b-y&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=ZByDFAD7kbHLn-pqTBGMbg&_nc_ss=7b289&oh=00_AQCuz_1zLLSa6jGznXb12dTJ2EQyg8xMFwrI7cevGUeDdg&oe=6A607F57)

Click on **Optimize** to modify the subdomain that the pixel uses to communicate with and send event data to the Gateway Products.

Define the subdomain that the pixel should use to communicate with the Gateway Products. It is recommended that the subdomain be based on the same domain as the website firing the pixel.

Create the **CNAME** records on the DNS provider account managing the new domain. The page will auto-refresh about 30 minutes after setting up the DNS records. The new subdomain will be configured and data routing will show as Optimized.

![DNS provider record editor creating a CNAME record named gateway aliasing gateway.advertiser.com to host.website.com.](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/457183702_2880607168757996_3903683141828673311_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=HrqTJXfuwSUQ7kNvwGQWTQN&_nc_oc=AdrUfZUuf_FsNY9zwVLc9tpHsyeNtE5fDsEyxTarlUu1bEJY0-LKv3YqfIzPvP5JxHAhwL6aXH_go-I0icdrkKIH&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=ZByDFAD7kbHLn-pqTBGMbg&_nc_ss=7b289&oh=00_AQB8NXdJ5Wta0pt6-8XHv8t8nU0nJAN-UdCcMsc_iv7FNg&oe=6A607818)

Click **Finish** and refresh the page. The new subdomain is configured and data routing status should show that it is **Optimized**.

![Data Routing screen showing an Optimized status with the Conversions API Gateway domain and a Change button.](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/457185681_439945298360617_5065427858542177252_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kHjN-9_rH5wQ7kNvwEUkss1&_nc_oc=Adr7glCi_2YtxjJ4YQ8PRgQ2kcimWJBZ-LgTmWm673atBIbihIuMcbFZSEcpyBvl68HlJuhloGAgWbymYXtoAqPy&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=ZByDFAD7kbHLn-pqTBGMbg&_nc_ss=7b289&oh=00_AQBEIEr8sAW5Ucu_9G-Hhvbv1geCxMY8yJJ6MpauhBHX9w&oe=6A608E3F)

The subdomain can be easily modified by clicking the **Change** button and following the same procedure outlined above. A new CNAME record will need to be created.
