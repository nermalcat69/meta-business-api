---
title: "Migrate an existing WhatsApp number to a business account"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-connected-client-businesses
---

# Migrate an existing WhatsApp number to a business account

Updated: Jun 16, 2026

To use an existing WhatsApp Messenger phone number with Cloud API, you must first delete your WhatsApp Messenger account.

To use an existing WhatsApp Business app phone number with Cloud API, you must either delete your account, or onboard to the platform [using a partner⁠](https://business.facebook.com/messaging/partner-showcase) who supports [business app number onboarding](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users). **Remember to back up your chat history from the WhatsApp Business App. These are guides on how to do so for [Android⁠](https://faq.whatsapp.com/744445782709185/?helpref=faq_content&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5yJrHcf9LlmmAA61e4Qqdo5DlmeDKylGVE5Amw4jFy8eZODo5p6JlDFBThdA_aem_JML49oDurRCuYk4IF_35FQ) or [iOS⁠](https://faq.whatsapp.com/180225246548988/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7GhB_XgcYsMt-Avc1YGJ41Fy7gFBKcLKSc42jIJfGn9OPclNUvBSjQGuEW_A_aem_R6oiqBs6qlmMwuvdB8xTBQ).**

If you delete your WhatsApp Business app phone number and then register it for use with Cloud API using the steps below, your existing messaging history will be lost, and you will be unable to use that number with the WhatsApp Business app again, unless you deregister the number from Cloud API. If you onboard via a partner who supports business app number onboarding, you will be able to use both the WhatsApp Business app and the partner’s app concurrently, and your messaging history will be preserved.

## Deleting a WhatsApp Messenger or WhatsApp Business app account

* Open WhatsApp Messenger or WhatsApp Business app on your Android or iPhone.
* Navigate to **Settings > Account**.
* Select **Delete my account.** Messages sent to this phone number will be queued in the meantime.
* Follow the steps to delete the WhatsApp account for that phone number. **It may take up to 3 minutes for the disconnected number to become available.**

![WhatsApp Settings screen on Android with the Account option highlighted in the menu list](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/53155930_1040983749443056_7137221020057862144_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=L23fEobYmeMQ7kNvwHlGv7O&_nc_oc=Ado0gsxJ400NHK4RtDDGNcI9JHAgxJKD5bd3bRQg4Ex59_52hmcpFO8lpWxwfJEndP5SMUh9wNRuRtSPt12arao6&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=O6k4ZDRfzMGrDxIo_1wYAQ&_nc_ss=7b2a8&oh=00_AQBcNxYd6s7BydqMWJH6ct6R6z8RkYBPHOeVGmvy3CyFAQ&oe=6A605DC1)

*Account Settings*

![WhatsApp Account settings screen with the Delete my account option highlighted at the bottom of the list](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/53231721_413403332756635_1839237629032267776_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=0ZHOZH5E2rQQ7kNvwG0VC6e&_nc_oc=AdpqnEYPKLnFVm-XcFVkJeVipoScr6n5CuNSPfQKY7vGZk9XVnkrr5W1czSgx9xefqH4KauNZ1XYf6t0skq3jMeM&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=O6k4ZDRfzMGrDxIo_1wYAQ&_nc_ss=7b2a8&oh=00_AQDAPxo_vE_RIk7D5k7T03Bb9y2v1OqmcnDau3qqkC0kXw&oe=6A60751A)

*Delete My Account*

![WhatsApp Delete my account screen with country code, phone number field, and a Delete My Account button](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/53128269_407915336420893_2688327795590823936_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=t5nLUng5AbgQ7kNvwFwvLGK&_nc_oc=AdqZKqUTHEvTCELBfKvB6oSFx2My3Zus0hiqsfU6pTx1-nkjydQwnD2xlsO8GQm0yXvS7IzwedcT3Ju5wUeNc1ff&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=O6k4ZDRfzMGrDxIo_1wYAQ&_nc_ss=7b2a8&oh=00_AQD3gCJwj3moOgWmBjH_psddkMafPUOeX4-q625mzyi6rQ&oe=6A605B7F)

*Deletion Steps*

Once the number is available, follow the instructions to [Add a Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started).
