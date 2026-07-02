---
title: "How to Find the Meta Lead ID"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/faq
---

# How to Find the Meta Lead ID

Updated: Mar 27, 2025

The `lead_id` is a mandatory field used in the Conversion Leads CRM integration which uploads events back to Meta to help optimize for higher quality leads, as detailed in the [payload specification](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration). It is a unique 15-17 digit number assigned to leads generated on Meta and may be presented in different fields depending on how you download the lead. This section will provide some examples of where the Meta Lead ID may be located for common lead download methods, so you can store it in your CRM and later use it to upload events back to Meta.

The Meta Lead ID must be mapped to a field in your CRM before you can use it to upload events back to Meta.

## Webhook or Graph API bulk read

The Meta Lead ID is stored in the `id` field of the lead node if you download leads using a Webhook or the Graph API.

![Graph API lead node JSON response with the id field highlighted](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/653706474_1459945352530781_9086246010073190676_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4S_sYt5FDQkQ7kNvwE8_38t&_nc_oc=AdqcCflqHdW4cjpZ4tnVGQOKbdQ00Zu5-Un2IzlRb4NSy5-dxts_3zjPWRe9USZ-7xttukt3ugTCDTtd_qWmzGT9&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQBikNgsBpytLvs2b9-CEZVnhRHewYBxaxrvR41ufuTrGA&oe=6A6071E8)

You may also obtain the Meta Lead ID from the `leadgen_id` field in the leadgen Webhook response.

![Leadgen webhook payload array with the leadgen_id values highlighted](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/653707438_1459945345864115_2665751899977398467_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=CPgD2D-MyoEQ7kNvwGM29FY&_nc_oc=AdpaWYntXnkQjKhu8reIGx1iDsykXeYDcFCKErrLqg8pGTdgHADHxWHoL66ImfrukhHCHs6pTVjezy_gss0dLv6q&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQBbC1gpsjMgade7Tt2HLrtTx4GrWIOrA97yztrCLwa8ug&oe=6A60683E)

Refer to the [Webhooks CRM Integration guide](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads/quickstart/webhooks-integration) and [Bulk Read developers guide](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads/retrieving#bulk-read) for more information on these integrations.

## Partner integrations

### Zapier

The Meta Lead ID will be stored in the **id** field when downloading leads using Zapier's Facebook Lead Ads trigger app. You will be able to see the Meta Lead ID first in a test trigger where Zapier pulls in a lead from Meta.

![Zapier Facebook Lead Ads test trigger result with the id field highlighted](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/651821893_1459945329197450_5381514566017344384_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=p-IgCA7RS44Q7kNvwH3mA2Z&_nc_oc=Adq9h19_VpqKhGCeAVlEeTRy9IdNUiyqwbhTQJiztKhYcxnjLmcbVaX71dkw5Jc_oechGMpjtjNj9Tgfs8aY-t3z&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQCvRy7SkVfU338luovXSaUcw7YoQPRAlfB567ji63tH3Q&oe=6A608760)

In the Zapier action app, store the Meta Lead ID by mapping it to the standard Lead ID field in your CRM or a custom field if it does not exist.

![Zapier Create Record in Salesforce action mapping lead_id to a Lead object](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/651917625_1459945349197448_6645869439933401331_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ikLRxRm-V2cQ7kNvwFxnoI0&_nc_oc=AdqC08cByxslXwJI6utkd6FNPuk83UF5N_LPzAmNedtVXleny6YXVU2dgMGYuTOVYyHzTJM71s5iJJ0GY23gskTV&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQDrc9nbmNYQQVGVZDC1SHU78QVX0dBRqY4pq7WIywLEUw&oe=6A606C02)

### LeadsBridge

The Meta Lead ID will be stored in the **id** field when downloading leads using LeadsBridge's Facebook Lead Ads app. In the **Fields Mapping** section, store the Meta Lead ID by mapping it to the standard Lead ID field in your CRM or a custom field if it does not exist.

![LeadsBridge Facebook to Salesforce field mapping with Lead ID mapped to id](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/653473737_1459945235864126_5108390485232099148_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=q00jKMMFm-oQ7kNvwHBIvD0&_nc_oc=AdpDfgSviOiuB7UvaU9X-wm5Zxejt3tyjQtzRfs1BVQgF9VokMGtGh07Am43rs9L9zWiZHvmvsEOLqnuUpAtbmIQ&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQCAMTrIJLuAkxvbmMB2FvKzjtCYKScDnAZph8Tv64Wu4w&oe=6A608624)

### Make (Integromat)

The Meta Lead ID will be stored in the **Lead ID** field when downloading leads using Make's Facebook Lead Ads scenario. In the **Properties** section, store the Meta Lead ID by mapping it to the standard Lead ID field in your CRM or a custom field if it does not exist.

![Make CRM module mapping panel with Lead ID selected from Facebook Lead Ads fields](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/652455312_1459945215864128_5676126213379310171_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=43eWwCxENMQQ7kNvwHvmcIR&_nc_oc=AdqKGMsRJJh1KQIv-GDwooCalSgM-4iS7T98KTT3PAr5LaM68dC4pjQC0pm5hEfqaI94V-DiT2KAcRVyQMLxh6dJ&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQBD1usrWsehnfAossHf7hNrv6A5cuoAXf_nXzbF-cVyOA&oe=6A607347)

## Direct CRM integrations

### Salesforce - Leads Capture

The Meta Lead ID will be stored in the **Lead ID** field when downloading leads using the [Salesforce Advertising Studio's Lead Capture feature⁠](https://help.salesforce.com/s/articleView?id=sf.mc_ads_lead_capture). In the **Configure Fields** section, store the Meta Lead ID by mapping it to a custom field you created for it.

![Salesforce Lead Capture Configure Fields screen mapping Lead ID to lead_id](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/651795117_1459945419197441_8888185355101117998_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AyV83Ce6tdIQ7kNvwFV1G7F&_nc_oc=Adq9gLAoq5D2qISsJbNgBsFI3MbpX2FOJ53yvPj1RP9bnzpzWFpAoM2W09GbjbWJp9mf19IUwLVeqO69Hap8ufrK&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQDv_6D24Vi33ICN2P-cwMTyVFm7Qp1yecBwLHT7z44_lQ&oe=6A607529)

### Hubspot - Lead Sync

Hubspot's [Lead Sync⁠](https://knowledge.hubspot.com/ads/sync-leads-from-your-facebook-page-or-linkedin-ads-account-to-hubspot) integration does not store the Meta Lead ID. Download your leads using a Webhook or a partner integration so that you can upload events for Conversion Leads. Alternatively, you can sync your events using Hubspot's [Lifecycle Stage Sync⁠](https://knowledge.hubspot.com/ads/create-and-sync-crm-lifecycle-events-with-your-google-ads-or-facebook-ad-accounts) (Professional and Enterprise only).

### Zoho CRM - Social

Zoho CRM's [Social integration⁠](https://www.zoho.com/social/facebook/facebook-lead-generation.html) does not store the Meta Lead ID. Download your leads using a Webhook or a partner integration so that you can upload events for Conversion Leads.

### Microsoft Dynamics 365

Microsoft Dynamics 365 does not support a leads integration. Download your leads using a Webhook or a partner integration so that you can upload events for Conversion Leads.

## Manual file download

The Meta Lead ID will be the first column of the file labeled **id** in the `.csv` file when you manually download your leads from Ads Manager or Business Suite. You may need to strip the leading label before using it as a match key.

![Downloaded leads spreadsheet showing id in the first column with created_time and ad_id](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/651665580_1459945325864117_1832810380978343323_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vcMcgsZEnjwQ7kNvwFA6a_K&_nc_oc=AdrScCRSbnyZEuEWkJr0dWfM8tpht472Xc-b7d_RiS58d-uWbPtmIN-y2dnY09n5GGqauixHE7eHqzbqM2-jzU75&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=79BQYvXKiD3EPDnadmJpXg&_nc_ss=7b289&oh=00_AQA8Msgh3ngwGt1I6AUvaFbXCYxoIpSwZymgZMe5l0uhpA&oe=6A60650B)

**Note:** This method of downloading leads is not recommended for use in integrations.
