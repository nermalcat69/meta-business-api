---
title: "Conversions API Gateway and Signals Gateway: Domain Setup in GCP"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-aws-eks
---

# Conversions API Gateway and Signals Gateway: Domain Setup in GCP

Updated: Apr 30, 2026

When you set up your Conversions API Gateway or Signals Gateway, a data routing domain will be automatically generated during your setup process. Creating a custom domain for your Gateway Product will let you route event data to your account directly from a server, which may help improve measurement performance.

Follow the steps below to set up a custom domain for a Gateway Product setup that hosts multiple accounts.

## Domain Setup Option Selection

After connecting a Meta business portfolio, you will be directed to the Domain management page, or you can navigate to the page using the left sidebar under Settings.

![Domain management page showing the choice between GCP Load Balancer and Cloudflare custom domain providers](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/485989379_1107530217747935_546896954017402801_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ITl7QrEQKBEQ7kNvwFfGfDQ&_nc_oc=AdqOc0EGUBLp74vEHn2PLZbLMP53CMK9aqtcVwzYpPB1U9W0Jjmv-oZDPBdc8M9RGIKi82Whs5VZt-iU9coIJOU5&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQCK9RGEY5SJuNppjx6hzq5ggohtbATrW3YP7j9RklsHDA&oe=6A609A22)

On this page, you can choose whether to use GCP Load Balancer or Cloudflare.

If you anticipate fewer than 13 domains will be set up on your Gateway Product account, we recommend GCP Load Balancer.

If you anticipate supporting more domains, Cloudflare has the capacity to support more domains.

If you are unsure, we recommended that you select GCP Load Balancer. Once you choose GCP Load Balancer, you will not be able to select Cloudflare as a provider.

### Option A: Set Up Domain Using GCP Load Balancer

Choose the GCP Load Balancer method. Then enter a domain.

![Choose domain step with prefix and root domain fields to enter your custom Conversions API Gateway domain](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/485613182_3677319302559350_3963131420326201396_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=eopGYrEjwvIQ7kNvwFenDJu&_nc_oc=AdpuApODf0evhJHEXOI5kraEkw53zf1nlix0I6IRUrjYDPmQT43-Ao4p2YF4YsyuFWKM2GdFf6DtZcs_PU1tY6s8&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQBjwPsuEnthMfC9hteXz9i-ea0p8ZYmbKzAGXdJbt_z4A&oe=6A6073A6)

Click **Continue**. Make sure you have control of the domains, then **Confirm** the domain.

![Confirm Conversions API Gateway dialog listing domain requirements with Edit domain and Confirm buttons](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/485834850_1195312471990388_5407786393206177137_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=BasFkwbAmZgQ7kNvwFWooPA&_nc_oc=Adrw6i8GhIzGCZkP4edrOegz9-_TiXPaT9lfeabdXQC4TaH9WTIZtnd3ntotV0Zdb6v8xfJNAPZyDb1fAGXWT3CN&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQBSg4YMcQitSoq1llJPOnqbIe3f_k3x4ZAl56x87CLaaQ&oe=6A608FA5)

Follow the instructions on the next page to set up your DNS records:

![Configure DNS step showing A and AAAA records to create for verifying ownership and routing, both with Waiting status](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/485617376_522112387284456_4829753741797615792_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=J9ITyT0I4lMQ7kNvwE43YqB&_nc_oc=AdpQ83-q1d2i8MgmDI0edqErhMWVG0E7C--s8U_tWdqKjgPmeUJJPX68LcmALAVNoTi_0Ot1XTT3OMpI5V-LRM6z&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQBpctgkyuihW2RzQNqCM0M5Dc0rlCtMucYGuW0kqIyanQ&oe=6A60A13F)

Set DNS records in your DNS service (for example, Amazon route 53), and wait for the status to change to **Complete**.

When the domain becomes active, you will see the below screen.

![Domain management Active products view showing GCP Load Balancer with an active Data routing domain](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/485371140_1400038811431309_2373520033101466588_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PcrecxrgUpcQ7kNvwFlDw7S&_nc_oc=AdqOdN5wlQS4Q425fXZyqGkNRdRK83BB91uCueLQZlDClLXdzVjgrYkqYlN1hX4nDnCFma8M3Qiw1L-TwBj_hNVh&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQAA7i68-YP9jBFbIFetFJZHztEVQApbraYcUxsaxG2dNQ&oe=6A6080F0)

### Option B: Set Up Domain Using Cloudflare

Choose the Cloudflare method

Navigate to the Domain Management page. Review the instructions and requirements, then click the **Get started** button at the bottom of the page. In order to complete the setup process, you'll need:

* A Cloudflare account with admin access.
* Admin access for your cloud platform account.
* 30 minutes to complete the process.

![Cloudflare setup intro page describing the data routing flow, prerequisites, and benefits with a Get Started button](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/486010759_674734918559655_3638732759097622571_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6jNx48c00f0Q7kNvwF6xhNc&_nc_oc=AdoUNmFPhPW7Q_uWd3tsxFRBusUWqhZM5YDZzyaOj85cg5kxCK4M-5xTKofQ00nV1cAOnxivYQUbWhwwd6RoFNrA&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQBJ61Dh7_HEi2N9cg2akGy4uQE3ocOfau43Fqn6Yf0yHA&oe=6A606C58)

Choose a Cloudflare setup method. We recommended that you select the option to register a new domain and use it with Cloudflare. Choose the option you'd like to select.

![Choose a Cloudflare setup method screen with three options: register a new domain, use an existing Cloudflare account, or use a domain from another provider](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/485642817_980516060855929_4410391120381008420_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jx8Ucf3yi6YQ7kNvwFds6oN&_nc_oc=AdpiDtZ--O-Z7P2lWlffw_ExfMfn_gNz6Wn3HsKtGcQTjIB3G7vmY6IA16FI2OjKKPzl5Gh9vRSW1DIZYzLuVkP6&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQAAkXMldCfpan2g8Is8XL6F7qS211zRs9JP2x5bo95XCw&oe=6A607FFC)

### Option 1: Register a new domain and use it with Cloudflare

Select this method if you need to set up a new Cloudflare account and a new domain for custom data routing.

![Register a new domain with Cloudflare instructions: create an account, add a payment method, and add a domain to Cloudflare](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/485728909_1024522673060948_4134588789012764107_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Medm9gE57OwQ7kNvwFNjz9s&_nc_oc=AdptGbUAnlGaR8cjoqxRLJ3SOBuNmVh7abYC3hX-3zEK8ucPc7DdbKjDaaqXZez3xBHqwT-Cx6E5hWL4WDzOhPrN&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQDwuEDNy1NXfkjA0SeyIQdwYTA_EB5n5cUuTK3qq8JnKw&oe=6A608A15)

### Option 2: Use an existing Cloudflare account

![Use an existing Cloudflare account instructions: log in, add a payment method, and add a domain to Cloudflare](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/485756288_2326375024414473_5575774756153271736_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=E7TUb1nDbWAQ7kNvwHuR7hs&_nc_oc=AdracXpILi-L65evrzVN5XJ6hHv8Ggxel6McVEDnStqK0Ls5XRqC0yPltvJIh0SZeuRXMOtmEUdUNNX5wvdOvflv&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQDJbLf45ov54wqmDyFgjdSp6KdYns3q3VuJR15GgIdbig&oe=6A6085B6)

### Option 3: Use an existing domain

![Use an existing Cloudflare account steps: log in with administrator access, select a domain, and enable Cloudflare for SaaS](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/372992685_178373838606710_6295708038089786970_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_hn8LvSX5fsQ7kNvwHfQXP1&_nc_oc=AdqGvAtcZB32tb3V_3hysu61ONoe-YQocvWnjxuHn4AI0giYrblJCFkYuPyBnPCNACJiabxj3_BVxtQmZMkYOnpk&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQDkCQDpEliYTwHmytwYHnPz18Kmar-BqfxjEhnDCcTfEQ&oe=6A609D2D)

### Use a domain from another provider with Cloudflare.

Select this method if you have a domain registered with another provider (such as Godaddy or AWS Route 53) and want to use it with Cloudflare.

![Use a domain from another provider on Cloudflare instructions: create an account, add a payment method, and add a domain with another registrar](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/373553191_2025045221177783_6321911626782296088_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=0GdFfpKxlEoQ7kNvwF4WXmO&_nc_oc=Adq06qfQmn4l-Rb54SRdLVnoJEqGYQYJxng7E-XkPUZUG_qUluP3uMRK960NldB3BNj0OPSUXzj2cNMKdtAHo7se&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQA9RFkHtOuw4yKZ8xg1e0bNAFD6-aneh1Y6WVX5K0phyA&oe=6A608271)

On the next page, you'll find instructions for how to proceed on Cloudflare, depending on your selected setup method.

Next you will start the Cloudflare setup process.

![Cloudflare setup steps for an existing account: log in, add a payment method, and add a domain via the Register a new domain with Cloudflare banner](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/485617376_2325172181198789_2975804344462945388_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=99z38Rs_kTIQ7kNvwGCrEmW&_nc_oc=Adqb1mc1AJq6J_zRF4xE0SXn27Gsd0J4K8qbaMPDBeSZOAB_kfp12Nasg-jzV1yUSsjdoPM6Z1wbn1l2Lf2zy-qs&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQAbnHz4inWEnaJ6NNBJwv5--L8i6Fb6CiU4i868G-0zsQ&oe=6A608CC3)

![Continued Cloudflare setup steps: select a domain, enable Cloudflare for SaaS, enable additional settings, and generate an API token with the listed permissions](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/485739831_1157105679247781_9002295650866388008_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=02yK0Az6jHQQ7kNvwGDWmz1&_nc_oc=Ado8KQTND3COcRrPdOPh-TqulUheC6sv4N-8Pz3zOXulGU3POCtFvrtUjYs3nyBqSmjZwmt9X50ZGq1tqmsl3xRx&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQAc06H9D1k3ABR0tOrdtnCkopkOTjECPskHPAHb1e_oMA&oe=6A6072AF)

Follow the instructions in the Gateway Product UI to set up Cloudflare.

The admin can now add host users to the Gateway instance or create advertiser accounts.

![Host Manage Accounts page with an empty accounts table showing No Data and an Add account button](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/485843303_652548904083146_8561210853766751609_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=HWsHHsvK-KcQ7kNvwFd7zoY&_nc_oc=AdqeI-bMYFUUVFopunWK42C3i8N5xyB_avrQGTT3fpDT3SbY-2fLrSy061GHQ-a-F5vQN9Cj1wGemtPKpIBVq-m6&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQAS_5Qc9CmM-252BGzOpCHTkFJ7AkNR_K0G-R5vhA1vhQ&oe=6A6096CF)

## First Party Domain Setup

**Step 1**: Go to Data Routing Section under Gateway Product

![Data routing section under Conversions API Gateway showing the Optimize data routing to improve performance panel with an Optimize button](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/485907799_666971539137077_7853347576629931518_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4-uLcGYq7fcQ7kNvwGvW_z1&_nc_oc=AdoDMQiC_crqm_Ctu_Xjg_5D_d_Ma3shBF2TorAyNewzKSwjsqX02Lo9sOUe4M6psOxJ6_RckW0RCE77vhSeYYQb&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQCORyfUJsQG-ZqJXv3lavumfAS_hm3pCASmfF2VxH5NEA&oe=6A609FC5)

**Step 2**: Click on Optimize. (*Note: This button is only available if you have set up your agency domain*)

![Data routing Choose domain step with empty prefix and root domain fields for setting up a first-party Conversions API Gateway domain](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/486140050_2886818981493876_6463223204782104376_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AkoKnZHyricQ7kNvwEyMPd_&_nc_oc=Ado6n9EMDPrGUmQUXVFzaZg33cWWkyUSCvS65g5AOMieJwp_5LalGamSFNunB6UNW6FM2f9A8BYG_5_xnS7tWOtz&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQA6aGgqtcfWquT1LcWMbZ0B0m1gqbwMNAvoKrjlvVvNQQ&oe=6A60783D)

**Step 3**: Enter the domain name and click **Continue**:

![Choose domain step with prefix testprefix and root domain mybusiness.com entered, showing the resulting Conversions API Gateway domain and a Continue button](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/486327233_9472820689428206_4841146957843874845_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6UQZGTa9nR0Q7kNvwHJurYC&_nc_oc=AdohTUg0PhoIAxxjM142GOn0pzbXgdh1pFEGlTr6Ubc8GArQrcQByoAfZ4AYvRXc6DpcTk9t-ZK-_vw4T8WnY1lT&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQDyYa26LFuLltIQvdqWkd98UB8INfvO0efn2JYxe98L0Q&oe=6A607400)

**Step 4**: Click **Confirm**

![Confirm Conversions API Gateway dialog showing the web address testprefix.mybusiness.com with Edit domain and Confirm buttons](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/486184911_1011952130305558_347292288759010775_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=84miH9_jsKcQ7kNvwE0liun&_nc_oc=Adqku_L5oaUrkVRmDTdwgg4wyyexYeIkstIf7O-qPo5fcuqUHWjcKlwCte0PcAaCubF14MpBe-aLWdwJBwfc85Y9&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQBc54LdfMAx8afdKcqa5R2Dj5NrwekJGnXru0ti2y4cGQ&oe=6A60849C)

**Step 5**: Setup CNAME record from the first-party domain to the agency domain

![Configure DNS step showing one CNAME record for testprefix.mybusiness.com with a Waiting status to verify ownership and route traffic](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/485624119_666420772735967_56873590054070641_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=7EeD893sUmoQ7kNvwEcbNL2&_nc_oc=AdpAhUSNVv8tPG2lglM3C6G6WrDGygcRcf8uelMNvWYzB7WiLdAVe6FxSbO9fJT20W5XDVywneHDXmijuFqwXmxP&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQAUVA3gyjE2mC_UUrm-xhUM4qisbLXRU9QDjHI3XpydOw&oe=6A6075CE)

**Step 6**: Once the CNAME record is verified, domain setup is complete

![Data routing page showing an Optimized status confirming the first-party Conversions API Gateway domain is set up, with a Change button](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/485931830_1032282482083354_2491323184615481295_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fBBAlCvhzVEQ7kNvwHpQas2&_nc_oc=AdqFKcjwD2nAl_GlC56fg7LVywR8S2kEBErtPF5B4WioDXqB8YgJlMygYmro16DDf5sYYFQcqw6pUv9T8NKV3HXX&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=keFALnvfAprpLnKnWk75_g&_nc_ss=7b289&oh=00_AQCt_qh8hJ_eA1jfnwwZH5ut0HLp_8M-ZhTi7y5aDIrmBA&oe=6A608881)

## See Also

* [Conversions API Gateway and Signals Gateway: Create an Instance for GCP](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/create-instance-agencies-partners)
* [Conversions API Gateway and Signals Gateway: GCP Architecture](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/architecture)
