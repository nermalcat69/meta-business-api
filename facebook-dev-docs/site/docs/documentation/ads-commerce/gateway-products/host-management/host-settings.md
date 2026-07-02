---
title: "Conversions API Gateway and Signals Gateway: Manage Domain Allow-Lists and Block-Lists for an Account"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/host-settings
---

# Conversions API Gateway and Signals Gateway: Manage Domain Allow-Lists and Block-Lists for an Account

Updated: Feb 2, 2025

Gateway products, Conversions API Gateway and Signals Gateway, automatically identify the websites (domains) on which connected pixels fire, and provide a mechanism to block the pixel from sending the events to the Gateway when fired on selected websites.

Select **Websites** on the menu under Gateway Products to access this feature. The Permitted websites section lists all websites (domains) that have sent events to the Gateway, that is, websites that the Pixels connected have fired on.

![Permitted Websites section listing a website with Total Events Received and Total Events Published columns and a See All button.](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/475157806_1276591456978937_691629549010586976_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=eahG5GrQ4qoQ7kNvwHaSSGm&_nc_oc=AdpwQWc3sEz5ctPXoCpwe9kd_jHEm0mCFbWAuq0jlLQbrLv8grBisMncDtj7WBrt9kxTlZ6xmK8JsyVjaHjFBeAU&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=3vX4zqgkeuWhOimMZDW2qA&_nc_ss=7b289&oh=00_AQAqbrJPswY-LaPoG4fyhDAxeThHDD3WE_wgkKSnuJyFdg&oe=6A606F3A)

Click on **See all** to view the full list of website.

![Permitted Websites dialog showing the full list of websites with event counts and a Block button next to each URL.](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/475152208_921980783063856_9211073977433125875_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fqI8YPVwRS0Q7kNvwGJcDSY&_nc_oc=AdqFXu8Y_F3QVmxydtqMryKuas_bH7nUWIEaR8xIaxMSfmA31PjwYNF603ZrKXi-TiKNUBmmhguqR_X0-YvSSPbi&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=3vX4zqgkeuWhOimMZDW2qA&_nc_ss=7b289&oh=00_AQB-2AnvFXGXuo0I-eQ5wPOsFVFzXH5GWYMvuantgxCG4w&oe=6A609250)

To prevent the Gateway from receiving events from a specific website, click the **Block** button next to the website URL. The website will be transferred to the Blocked websites list, as shown below:

![Blocked Websites section listing a blocked website with an Unblock button and an Add button.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/475140194_484007358078347_3131737768214662490_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=MsCS7rLLFfYQ7kNvwFZHEoD&_nc_oc=AdoH0Lf3_LXz5E-zqserUVb1TGgyUUe_qU3TZO-HNQB3ym-HpC1B3BydS-oTqhCZmiXeBbIWLqK67fKKcQ_l33il&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=3vX4zqgkeuWhOimMZDW2qA&_nc_ss=7b289&oh=00_AQDqXwuusu_z02ld2kNxkz3N79nn6x_gPQ37GQszNpzbtA&oe=6A606FCA)

To add a custom domain to the Blocked websites list, click on the **Add** button and enter the domain to be blocked.

![Block website dialog with an Enter website domain field for adding a domain to block, plus Cancel and Block buttons.](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/475694476_640141671873421_1925165837356720095_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vMiB42tpmLgQ7kNvwFRMEEw&_nc_oc=AdqJEbqURQYd0SvlmP93txBBzcQugAsaC8ys5vR2pWI0UvEHng6Pc-qUuBJCoRKoNfc6_IjtS7XK_zxGWF1t13V3&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=3vX4zqgkeuWhOimMZDW2qA&_nc_ss=7b289&oh=00_AQALZFzjHMEbq0U_ncSh10pRYlZK6NEihVIqWN_P_Ql1kA&oe=6A6096EF)

Click on **Block**; the entered domain will appear in the Blocked websites list. When you set a domain to "blocked", events received by your Gateway Product instance from that domain won't be sent from your instance to the associated data destination.

## See Also

* [Gateway Products Overview](https://developers.facebook.com/documentation/ads-commerce/gateway-products)
