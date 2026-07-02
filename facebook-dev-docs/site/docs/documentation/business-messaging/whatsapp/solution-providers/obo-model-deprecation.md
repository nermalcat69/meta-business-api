---
title: "Support for onboarded clients"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/obo-model-deprecation
---

# Support for onboarded clients

Updated: May 21, 2026

This document is intended to solve common problems encountered by clients who have been onboarded onto the WhatsApp Business Platform by a [partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview).

## Contacting support

If you were onboarded to the WhatsApp Business Platform by a partner and you have [registered](https://developers.facebook.com/async/registration/) as a Meta developer, you can get help by opening a Direct Support ticket using the **Ask a Question** button at:

[https://business.facebook.com/direct-support/⁠](https://business.facebook.com/direct-support/)

See our [Direct Support Information⁠](https://www.facebook.com/business/help/182669425521252) Help Center article for more information about Direct Support.

## Billing and payments

### Billing and payment support

To get support specifically related to billing, payments, and payment methods, open a [Direct Support⁠](https://business.facebook.com/direct-support/) ticket with the following form selections:

* **Topic** — **Dev: Billing, Credit & Pricing**
* **Request Type** — **Credit Card Billing**

If you do not see the **Dev: Billing, Credit & Pricing** topic, please contact your Tech Provider or Tech Partner and ask them to open a ticket for you.

### Add a payment method

If you have been onboarded to the WhatsApp Business Platform by a Tech Provider or Tech Partner, you must add a payment method to your WhatsApp Business account before you can use their app to send and receive messages to WhatsApp users.

See our [Add a credit card to your WhatsApp Business Platform account⁠](https://www.facebook.com/business/help/488291839463771) Help Center article to learn how to add a payment method to your account.

For more information about how pricing works on the WhatsApp Business Platform, see our [About billing for your WhatsApp Business account⁠](https://www.facebook.com/business/help/2225184664363779?id=2129163877102343) Help Center article.

### Switch partners and remove previous line of credit

If your client worked with a partner in the past and still shares the previous credit line, the client may see an error when attempting to switch to a new partner.

* Backup your client's messages.
* Disconnect from WhatsApp Business app.
* Reconnect in WhatsApp Business app.
* Start onboarding process using the [WhatsApp Business app user onboarding](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) flow.

### Transaction support

To get support for a specific transaction:

* access the Meta Business Suite **Billing & payments** panel at [https://business.facebook.com/billing\_hub/⁠](https://business.facebook.com/billing_hub/).
* locate the transaction in either the **Accounts > WhatsApp Business accounts** tab, or the **Payment activity** panel.
* copy the entire transaction ID.
* open a [Direct Support⁠](https://business.facebook.com/direct-support/) ticket and include the transaction ID in the ticket.

![Meta Business Suite Payment activity panel with a Transaction ID callout on a WhatsApp Business account transaction](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/466908269_1627253861482438_5318686688053211395_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=taz-6QtlYUYQ7kNvwEXhwfV&_nc_oc=AdorarFQdSVXrqPT0pcygIjYajHEaX6vzO44O2f0aF0nPayugOz8NlxuzfjEdf53hWeK5KXqSRkFtAq-hmafm1Vz&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=_VixQjN_jE9nqEm6z0AGAg&_nc_ss=7b2a8&oh=00_AQDPp1sBRC0uB_ZXoYL272EHOtwi7VvNSzciYlAv5ISHLA&oe=6A6054B8)

### Payment errors

These are common payment errors you may encounter in the Meta Business Suite. If the proposed possible solutions do not work, please [contact support](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/obo-model-deprecation#contacting-support).

| Error title and description | Possible solution |
| --- | --- |
| ***<CARD\_TYPE> <CARD\_NUMBER> hasn't been verified.***  *We weren't able to complete verification, please try again.* | * Try again, making sure you are correctly entering the one-time-password sent to you by your bank. * Make sure you are able to receive your bank's one-time-password code. * Contact your card's issuing bank and ask if or why your card was blocked. * Try again after a few days. * Try another card. |
| **Couldn't save payment method**  Couldn't save payment method. You've already saved this payment method to the maximum number of ad accounts. Please use a different payment method. | Use an alternative credit card.  Note that the maximum number of accounts sharing a given credit card cannot be increased. There are no exceptions to this limitation. |
| **Request Not Completed**  We noticed something unusual and, for your security, this request couldn't be completed. Please try again later, or visit our Help Center. | * Ask your card's issuing bank if any restrictions have been placed on the card. * Try another card. |
| **Something went wrong**  We couldn't complete your request. Please try again later. | * Try again in a few days. * Try another card. |

## Display names

Once a business phone number's display name is reviewed, clients can change their display name using WhatsApp Manager. Newly edited display names must undergo display name review again.

To edit a display name via WhatsApp Manager:

* Access WhatsApp Manager at [https://business.facebook.com/wa/manage/home/⁠](https://business.facebook.com/wa/manage/home/).
* Navigate to **Account tools** > **Phone numbers**.
* Click the phone number.
* Click the **Profile** tab.
* Under **Display name**, use the **Edit** button to submit a new name.

Editing the display name, as well as the review outcome, triggers a [phone\_number\_name\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_name_update) webhook.

## Unable to send template messages

If you are unable to send template messages, you likely have not added a valid payment method to your account. See our [Add a credit card to your WhatsApp Business Platform account⁠](https://www.facebook.com/business/help/488291839463771) Help Center article to learn how to add a valid payment method.
