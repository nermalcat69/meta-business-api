---
title: "Conversions API Gateway or Signals Gateway: AWS ECS Custom Domain Setup"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-aws-ecs-express/ecs-express-cost-monitoring
---

# Conversions API Gateway or Signals Gateway: AWS ECS Custom Domain Setup

Updated: Jan 23, 2026

## 1: Domain Setup by ACM

### 1.1 Agency domain setup

#### Step 1: Launch Domain Management Page, and select AWS Certificate Manager

![Domain management page recommending AWS Certificate Manager as a custom domain provider with a Select provider button](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/619098587_25737128122645166_5699555899588730303_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ddojY0xRdKUQ7kNvwGf-d4U&_nc_oc=AdrCZI1iBv0eenbFxNrFgPEgv7x0GjC-BhcCQNCUDVrjmzqv0W4RVRJ4qMZ9RMBDRuydrJfVAitDapgvZat4RBjB&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQDu_OMn4wziVJv7q7QKzSGkkDgNMFIVLLdTpgOdZSlFLg&oe=6A6091EB)

#### Step 2: Launch Domain Management Page

![Domain management page with Choose domain step showing fields for primary domain for data routing and primary domain for web access](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474803182_1147474330417163_9129145423184896583_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=xJPNom0_jEEQ7kNvwEalYs2&_nc_oc=AdqvPfq3EW7AT9W_jXg8V6Wr6gC2TahW9dJnThsPHvmd-u9NGOKhCK4bRT54EwzKp0ZLw2sHalI_BO6NLjdJqHQ5&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQDwqQ17AHiJUtucIBjlX3iTzUrwnJaXhh90T-oEEd1YQQ&oe=6A609A4D)

#### Step 3: Choose the data routing domain (required) and web access domain (required), and click 'Continue'

![Confirm domain dialog listing the data routing domain and web access domain with Edit domain and Confirm buttons](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/474951095_1293515691904108_5882973339210842_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AKvULEAtTCYQ7kNvwG8lmao&_nc_oc=Adrlz40Jmw12D2cZAGpaOv-XFTQ1F6WpBwC-z2b1_xZ7ecvGrJC7_2iF4mIT-Iz9coDetMykkEtoOK0fOw7JcJJ6&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQCiB0TtyK3EYBv0swKgkcRk7QxMC2kpMBvJ0MelioSD2Q&oe=6A607A8C)

#### Step 4: Set DNS records in your DNS service (for example, Amazon route 53), and wait for the status to change to Complete.

![Configure DNS step with tables of CNAME records to create for the domain and to validate domain ownership, each showing Waiting status](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/618548651_1414985703581683_7846181733315672970_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sLkJwUrWkC0Q7kNvwFevYCQ&_nc_oc=Adr5qIETtSKDrkTRRlIa9FMMzw16K-VPKrg_SsnW5_wyHwMXPiEGcIWlLiqCV5PSFDQZ0LGF2cLqczoS2WHpRtOG&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQCKCY7CZl969AKv_zJV5ZVTbXkUMHE3-2FH5nT7SBThAA&oe=6A609575)

#### Step 5: Wait until the domains are active.

![Domain management Current domain panel showing the data routing and web access domains both with Active status](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474948157_955072916554158_5999499236934344517_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RHMOQphmkd8Q7kNvwHq_sIW&_nc_oc=AdrAQi4KKCTFo_eY53Y7pqa8id8AASTB4A94gvCAECX60qpe9JMyiKcAdvAw_IHKKulTenMi_6B9Wy25ws4oEheR&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQArBcZrwe8cti_ajqH1qH4mFM4tHtDav39Qj-ILotO1KA&oe=6A608B4A)

### 1.2 Tenant domain setup

For tenants (accounts) that are created by the agency, they can create their own first party domains.

#### Step 1: Launch Data routing Page (Accounts settings - > Data routing).

![Signals Gateway Data routing page with an Optimize button and a list of what is needed to set up a first-party domain](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/616803446_33294108603565869_8703150830811190093_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dwahVbETNX8Q7kNvwGfOj0C&_nc_oc=AdrB2K1YfonZaqf6ffdWLSRicvBPbQfVmudDL5sfZk4H7EODGFUl323BzAQCPKt_LEtDHV8MgXLD1gSdd4YdLw0q&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQDTvTn9bsC9ol4yftt2qND88YeOsbHBlDXNOdRguWcrWA&oe=6A6073B8)

#### Step 2: Click optimize button, and input the tenant domains.

![Data routing Choose domain step with prefix and root domain fields for setting up a custom Signals Gateway domain](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/617912561_912987184744913_8220514392988382348_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=t6JbJwHdZeMQ7kNvwGPx33l&_nc_oc=Adrx5RVCocWdCqrztSrvRpo90CVJaxsktOJg0YR_cTinQeVsV0nhKO09KgzhfcgKGwUzsopofaS--teRIIUSO8vh&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQCUlbB366cmYbWvhHdMJptUQjUfEtNVx2umwdEIGuJsmA&oe=6A607128)

#### Step 3: Confirm the domain. Set DNS records in your DNS service (for example, Amazon route 53), and wait for the status to change to Complete.

![Configure DNS step with CNAME records to create and to validate domain ownership for the Signals Gateway tenant domain](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/617769250_25719246434383279_1699903581146870711_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zcGuiu7FOQYQ7kNvwHPt_Cb&_nc_oc=AdrjZD5VN4wIeRufAAFAN0ZoOkQTfCY2Vc2Stq0qfWcfT91YFOwvhKSHlUG3oryi8u9Mx_FZYxdpZMMjdvJYU8gX&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQBhosqMFE_-vvZnPLybooShm-pxKZoO9i-0K_gjPVdWOg&oe=6A609931)

#### Step 4: Wait until the domain setup is complete.

![Data routing page showing Optimized status with the tenant Signals Gateway domain set up and active](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/616847430_863437819868643_1058596741823066412_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Qf_56UCBOAQ7kNvwH13AO6&_nc_oc=AdpUPehTGDB5A8G8UqGVe-sWVQpusPqAZFv5hDUaB_-Dz2N_DTmJAtiOQPfjDJ56yNGm-jbq8C9JcyjY-GotiQUi&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQCbRfH1Mhx5UMHhTXM5WUIY4TOj2tNuDlYU2voM5YQjmA&oe=6A608540)

## 2: Domain Setup by Cloudflare

### 2.1 Agency domain setup

#### Step 1: Choose Cloudflare as domain setup option.

![Domain management page showing AWS Certificate Manager and Cloudflare as custom domain provider options, each with a Select provider button](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/618714073_2096773664422167_8680227781753852394_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=oZe2CKIQzZwQ7kNvwEnSGGU&_nc_oc=AdofflT8hSBlstEICHMhYxIxfD-Gy7xBPBBckQRAk86UI4sasZGoT_qObkyowySA80bBxbqovUxt06rR_Lm7XKKp&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQBxcffiK-zqM208XVC-aoBVznfsAagPNZTZQaZjW1z-Fw&oe=6A609EBF)

#### Step 2: Follow the UI instructions to enter token and domain.

![Cloudflare setup Create DNS Records step with a primary data routing and web access domain field and a list of Cloudflare changes that will be made](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/619265193_1379691176615845_2569837396753475903_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=rwdPgoIq51MQ7kNvwGUH-Q4&_nc_oc=AdqggpNpfBFzf9uSf7i5Y6vVntLpwGYpp9iZS8xr24UnWetQfQZJaz52h_DGIESgbSLE3HBUVACK7N49DSnX47U9&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQAHo8uwiySZP_m1w2REgLlWN3IKu3EknNgbCl5aQDMgtw&oe=6A60990B)

![Cloudflare token setup with a permissions table for the API token and a field to copy and validate the token](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/616846692_4133277276888048_5014915861034992654_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=K4paX2bSQcQQ7kNvwHsuWsG&_nc_oc=AdqysVvD0iEhg2mR6Fg_uyX72Lz-PfOhFIsEu1mdtzAHykkEsq25abZW_mSH-n7YztZnml93yGyWu0KRO4rhWt9a&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQA6L8T8Mt8F3sMVSE-VfRSYuRuV0HLZjW1fxm4rXLuWvQ&oe=6A609DE0)

#### Step 3: Follow the UI instructions to enter token and domain.

![Domain management Choose domain step showing the domain being set up in the background with progress items such as Set encryption mode and Create certificate](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/619076703_2389345018179281_413410103104418603_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=iGq9yYcXUd8Q7kNvwGsIm0d&_nc_oc=AdobL76_XG4pdq_g8ELKWRa0NQwzjyXIb5ROkP5VUnnHtNuWyO7KKxP_RpKGc78KcJcE086iwx_V9cwXeH0xdf4x&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQAfjbeKyhjy8MpPbvjxmqa_6xQE0Wd4LpQIGhmpm1MdGA&oe=6A607742)

![Domain management Active products panel showing Cloudflare connected for web access and data routing with a Refresh Token button](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/619383264_1383012749973499_1529926802575736847_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kYiRKkHNvFIQ7kNvwGYO5e_&_nc_oc=Adr0XtEQff9tCgGA6rP06jP5rSqCnmpFbEwEpyQoN7nc03Qt12YRjyihWMrGS2I54umBP05R-92B9tTiELfSd32h&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQAq7V9Y8lQ6yT45gatmpIV8I6ICRs128Y8KRBKnB4Ye7Q&oe=6A6092C8)

### 2.2 Tenant domain setup

For tenants (accounts) that are created by the agency, they can create their own first party domains.

#### Step 1: Launch Data routing Page (Accounts settings - > Data routing).

![Signals Gateway Data routing page with an Optimize button and a list of what is needed to set up a first-party domain](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/616803446_33294108603565869_8703150830811190093_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dwahVbETNX8Q7kNvwGfOj0C&_nc_oc=AdrB2K1YfonZaqf6ffdWLSRicvBPbQfVmudDL5sfZk4H7EODGFUl323BzAQCPKt_LEtDHV8MgXLD1gSdd4YdLw0q&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQDTvTn9bsC9ol4yftt2qND88YeOsbHBlDXNOdRguWcrWA&oe=6A6073B8)

#### Step 2: Set DNS records in your DNS service (for example, Amazon route 53) with a CNAME record of the tenant domain to the agency domain, and then input the tenant domain in the website.

![Configure domain name system dialog instructing to create a CNAME record directing the subdomain to the target domain, with subdomain and root domain fields](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/618119758_1623257255476090_5152831336231893645_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=uLjaSIyJCCIQ7kNvwHBZTnr&_nc_oc=AdrMXQDWE1ZUFghhPtLqy5bZnPOJNY1VRqAp6jgyfHN65qLEWS_U_2ur3yIsz7_UIpq-ScHnRfql-_C7HqQ6fn2A&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQCUYRJbEAZfgoaXBrkahPZcfj3l34vMxAbV8iCsrs3yoA&oe=6A608378)

#### Step 3: Wait until the domain setup is complete.

![Data routing page showing Optimized status with the tenant Signals Gateway domain routing data directly to the account](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/619253065_748987997824478_9160609275245565851_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4K8rWPJo6SsQ7kNvwErhf-O&_nc_oc=Adobk83P--7Jr7nccxaLKCfEEO_USGGOKkt2jk1w_J4ez4D2t5p-3BE3dCgOePYLy91qJBGiMGrmXAzBjL4GF_gl&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=4ASu2s-pF9-YrTOA9jwQlA&_nc_ss=7b289&oh=00_AQAhsQy7yp2G5SAn5_bMFLjARED5dGBjtiPTgncXCB3G1w&oe=6A608357)
