---
title: "5: Configure Your Sales Funnel"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/6-follow-up-steps
---

# 5: Configure Your Sales Funnel

Updated: Dec 8, 2025

This guide will walk you through the sales funnel configuration, which will inform the system about your sales funnel and which lead stage to optimize on. You must have admin access to complete this section.

**Step 1**. After connecting to the Conversions API, refer to the Overview tab of your dataset in Events Manager for integration status. A CRM integration widget will now display your integration status and provide guidance throughout the process, including notification when complete.

![Events Manager Overview tab showing CRM setup progress and Connect your CRM status](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/652145009_1459945335864116_8287952946838859308_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qi5DXmwYUocQ7kNvwGacOZb&_nc_oc=AdoGx3nVKtuOpg_bSU2pVU9nnNWOyUiN02rN0GQj5MRyKPisRzG2HmqMwdttw5e91jZpd09YZKNK2FghprsibkQl&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=Bmh-9lEZVwf3p2qKwhgurg&_nc_ss=7b289&oh=00_AQBcQjcHOczW2ZG6X3uSAkVEPlV7Lao5cru_ocrZD26xIA&oe=6A6059CB)

**Step 2**. When your CRM data passes verification checks, you can configure your sales funnel.

**Step 3**. If you share an adequate number of event stages, Meta may use AI to generate a sales funnel for you. You can then review, edit, and confirm the stages to proceed.

**Step 4**. Lead events shared from your CRM will show up as funnel stages in Events Manager. Remove events that don’t belong and arrange the rest to reflect the order of your sales funnel, using two categories.

* *Positive stages*: Events that signify a quality lead, for example, ‘marketing qualified lead’, ‘add to cart’.
* *Other stages*: Events that do not signify a quality lead, for example, test events or events accidentally uploaded from another system.
  * Remove events that indicate a negative lead or do not belong in your sales funnel by clicking the minus (-) button next to each event. These could be leads that received a phone call, but decided to not convert into a sale.

![Configure sales funnel stages screen with AI-generated Positive stages and Other stages lists](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/651760200_1459945259197457_5627207297032411192_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=WfFZ9XZ3RDcQ7kNvwFxdcjr&_nc_oc=Adp-rpdLC0h4sBCSNYiJD-P30oEUxrE0UVW8xzUzf4HDvplM_9OjLkOQu5dth318eNRUMQ9DuNby9KUg1x-Rdl-c&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=Bmh-9lEZVwf3p2qKwhgurg&_nc_ss=7b289&oh=00_AQA23MHhTv2UNkStNU3ejiAMySxhrbBZg66dggpNixJuJw&oe=6A606668)

**Step 5**. In the same step, order your events to reflect the actual order of your sales funnel.

**Step 6**. In the Optimization Target step, select the earliest lead stage you would like to optimize for. This does not need to be the last stage of the funnel. The system will optimize for all down-funnel stages as well.

![Optimization target step recommending which lead stages to optimize for, with conversion rate tips](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/651724485_1459945265864123_8522305889699719774_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=VDYe5rzNqlsQ7kNvwEUDgfq&_nc_oc=AdovBDCW0p7mkd9GPse1q4OiM-eYN-ky3o9twKh3kbJK1SqqrIAbT6tHu4z9TPocLKdtYENjOVtS_b8UaPeiGvlP&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=Bmh-9lEZVwf3p2qKwhgurg&_nc_ss=7b289&oh=00_AQCs79vvihOqgdKE1m4k9a63-jB7ZS6F0OYAPmQOmTHolQ&oe=6A606CC0)

**Note**: The system may adjust and optimize for a different lead stage than the one selected if better performance can be achieved.
