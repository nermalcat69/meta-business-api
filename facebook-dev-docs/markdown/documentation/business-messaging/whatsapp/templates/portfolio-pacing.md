---
title: "Template pausing"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/portfolio-pacing
---

# Template pausing

Updated: Jun 17, 2026

If a message template reaches the lowest quality rating (a status of **Active - Low quality** in WhatsApp Manager, or a `quality_score` of `RED` via API), it will automatically be paused for a period of time to protect the quality rating of phone numbers that have used the template. Pausing durations are as follows:

* 1st Instance: Paused for 3 hours
* 2nd Instance: Paused for 6 hours
* 3rd Instance: Disabled

When a message template is paused (status of **Paused**) it can't be sent to customers, so you should halt any automated messaging campaigns that rely on that template. Although you won't be charged for attempting to send a paused message template to a customer, and the attempt won't count against your messaging limit, the API will reject these attempts anyway. You should only resume these campaigns when the template's status has been set to Active again.

You may wish to edit a paused template if you feel that editing its content will reduce the amount of negative feedback it may receive and increase user engagement. Keep in mind, however, that once you edit a message template and resubmit it for approval, its status will change to In Review and it can't be sent to customers again until it has been re-approved and its status set to Active.

You may also wish to make changes to your business logic, such as targeting and delivery parameters, if you feel it is contributing to negative feedback or low engagement.

Pausing will initially not impact the business phone number from which the message template was sent. Other high quality message templates can continue to be sent from the phone number. However, if a business consistently sends message templates that reach a Low quality status, the phone number may eventually be impacted.

## Pause notifications

When a message template has been paused you will be notified by WhatsApp Manager notification, email, and a [message\_template\_status\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update) webhook will be triggered.

### Unpausing

A template will unpause on its own after satisfying the pause duration outlined above. Once unpaused, the template's status will be set to **Active** and you may begin sending it to customers again. If you didn't halt any automated messaging campaigns that relied on a paused template, they should start working again. However, it is recommended that you halt any campaigns that rely on a template that has been paused until it is unpaused, because the APIs will reject your requests anyway.

The template's [quality rating](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality) will also be reset to a value based on the most recent customer feedback the template has received.

Similar to pause notifications, you will be notified by WhatsApp Manager notification, email, and webhook once the template's status has been set to Active.

Applies to businesses in Brazil, Colombia, and Singapore, starting September 12, 2023. Applies to all businesses starting October 12, 2023.

With the introduction of Template Pacing, you can now unpause any paused template through:

* The API by making a POST request to `/{whats_app_message_template_id}/unpause`
* WhatsApp Manager by clicking the **manually unpause it** link highlighted in the screenshots below.

Note that templates paused during Template Pacing must be manually unpaused (API or WhatsApp Manager) before they can be used again.

![WhatsApp Manager Edit template screen for a paused template, with an arrow pointing to the manually unpause it link](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/554797102_3175363515964237_8084410644890844296_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q8Ftf2Z46TUQ7kNvwFNDdKE&_nc_oc=AdoMlMIybk97pHuPVxoCxBz30FuS7R2k8AF3vMnrucnBSiqb5pUQZnu6U-2ZNKXqwMnCBVSptGYh-1VZeyjgYLGE&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=f9dx45XpHSNgY0vStBpd4A&_nc_ss=7b2a8&oh=00_AQBpbBmib_JJ_JolVZ5HdNpWF-3TDtm6-5dTXA_KuI27Yg&oe=6A606398)

![WhatsApp Manager Message Template Unpaused confirmation dialog stating the template can be used to send messages again, with a Done button](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/554106571_1492926028278417_4141428697407616298_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ok0JM21K4ccQ7kNvwHZ4ACa&_nc_oc=AdoUSkxwQ4OBMvY_BDxTOTSQqsd6fdEMs4zMbZ5CpfAQq8IzzFqTShyb8dVejoTzWl-M2wv1k6CfYuRiVO_2cv-n&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=f9dx45XpHSNgY0vStBpd4A&_nc_ss=7b2a8&oh=00_AQCPYeVwxG4coYaDalp8ZdEC1eiau2HOBSgT0VHV19WkrA&oe=6A607391)

### Appeals

If your submission is rejected you may file an appeal. Note that appeals must include a sample. If an approved template has become disabled, you may also edit it and resubmit it for approval.

In the WhatsApp Manager:

* Mouseover the suitcase icon (**Account tools**) and click **Message templates**.
* If you have multiple WhatsApp Business Accounts, use the dropdown menu in the top-right corner to select the account whose templates you want to manage.
* Find the message template that you would like to edit and click it.
* Edit the template's contents.
* Click the **Add Sample** button and add sample variable values and images.
* Click **Submit**.

The appeal will be reviewed and a decision made within 24 hours.
