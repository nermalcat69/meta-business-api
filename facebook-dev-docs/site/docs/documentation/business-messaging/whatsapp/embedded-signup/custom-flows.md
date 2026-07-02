---
title: "Embedded Signup default flow"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/custom-flows
---

# Embedded Signup default flow

Updated: Jun 28, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This document describes the default screens that the Embedded Signup Cloud API flow presents to your business customers as they navigate the flow. If you inject [pre-filled data](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data), you can pre-fill some of these screens. You can also bypass many of them entirely. Pre-filling data reduces the likelihood of errors and makes it much easier for your business customers to onboard onto the platform. This document describes the UI flow for the latest version, v4.

## Screens

### Authentication screen

This screen authenticates business customers using their Facebook or Meta Business Suite credentials.

![Facebook Login for Business authentication screen prompting the business customer to continue as their Facebook account](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/530819633_636229419515187_227138492125594706_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=uLVl9TnJbwQQ7kNvwFQz_jv&_nc_oc=AdpC9L42f0z-H55p8GPJQUvRKKjhq16b7Ie8Ze-G6p0iM784cHYJe5665pstjyz-VyexkIlwo1HGyZmNun8rmh-g&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQDx7JNq4wfRtCyhuTAk3MIwwd-dXo9UKAs4NFddXO0c0A&oe=6A603F14)

### Authorization screen

This screen describes the data the business customer permits your app to access.

![Embedded Signup authorization screen listing what the business customer will be able to do after connecting their account](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/531995822_1112262264200439_63249353490863536_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gvTdCMZBz98Q7kNvwH_eBHN&_nc_oc=AdqJMJEk87X2ZgnGgBCnQMpsfa8DT9tZcxiiT03oITk_ow8xgzAs-yFktmxoNYjdk8ODPD2UyyrJ4O5nb8nl2Mhx&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQD2gIL3s8BiZgLs4Jbg-ExadgrGp3JWEpB7fSlv91y_OA&oe=6A6050C0)

### Business asset selection screen

This screen gives business customers the option to select existing business assets such as a Meta business portfolio and WhatsApp Business account.

Business customers also have the option to create new assets if they have not reached their portfolio limit.

![Business asset selection screen with dropdowns to select or create a business portfolio and WhatsApp Business account](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/532045601_1897587967686145_847324094190786110_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1dXPGLKiGbkQ7kNvwF4j502&_nc_oc=Adrofngt3fq8MoYc8pUqWJ61wnwTzwuPrM3cXFk010f-QX1OZyQmGp_YiFxXalg1o7DeBUmxPoSwwj1W1GMoie9s&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQDakDv_ezCiG6PTMZuGsUui3WkgUA4vsdo4muoiKAsQxA&oe=6A604EAE)

### Business asset creation screen

This screen gives business customers the option to select existing business assets such as a Meta business portfolio and WhatsApp Business account.

Business customers also have the option to create new assets if they have not reached their portfolio limit.

![Business asset creation screen with fields for business display name, email address, category, country, and website](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/530852550_1105248814823575_6797431386886245236_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=s1wRxFVfDWwQ7kNvwH7kkXm&_nc_oc=Ado7lGood26WLaECsYAytb5ZiDx_7brkipgm6Djie9dW8mcoO_R_atdTTJaQCAx8Lj2w2CRPXwLiAg0q3mWCNAX6&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQBmFPq8VUeLnPLA4Cq2HVsK3CUx51jbJI_RB9tjb6OLkg&oe=6A604BC3)

### Phone number addition screen

This screen allows the business customer to enter a new business phone number to associate with their WhatsApp Business account.

The phone number addition screen also allows the business customer to choose how they wish to receive their verification code, which they will need to provide on the phone number verification screen.

If you are providing phone numbers to your business customers, you will have to deliver these codes to them, or provide pre-verified numbers instead.

![Phone number addition screen with options to add a WhatsApp number and choose text message or phone call verification](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/579214248_1544901606717694_7187028527222587188_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=LbGc5-JZbMAQ7kNvwGdqLtU&_nc_oc=AdpqopI7xmQkSdHiSPVIAOntXM2c_JJ0JOm5-PL0JZLGPIKGH6qbC1RAEgGi7B9FdwSm3X_QhTO0d5o6-kxf4nAM&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQAM8BzRdaAY7oqNXFB2jm94lpmlL_uSIBvm6BTQENaFvQ&oe=6A60633E)

### Phone number verification screen

This screen allows the business customer to verify ownership of the business phone number they entered on the phone number addition screen.

![Permissions review screen summarizing WhatsApp Accounts and Ad Accounts access the app requests within the business portfolio](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/557624038_1991414544970922_7818680630707794930_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3fUTVHOz1bAQ7kNvwF8UWNU&_nc_oc=AdqX2REEG16CPAmdcagzT8OkNmxIDx7x8UTwmfSp7AN0Pp6J3A-J3Cz2mB5-6v5-VZvwzGzDOiUHxQvW-QOxzTQI&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQAIZus11jFpwA0-Hg9jio00HdyRBAN9MouY7nnOGfZjMg&oe=6A604AA0)

### Permissions review screen

This screen provides a summary of the permissions the business customer grants to your app.

![Phone number verification screen with a US phone number field and text message or phone call verification options](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/530797839_1261352201871305_6011316801343038234_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ev4WzMJLjSUQ7kNvwFHbUrf&_nc_oc=Adp1D1xKb8f2XzrKPeaKFpzR9636bK7jlhYmQXtt54FeYWWAkkmbyKIhC23ozjwB9tgfdmsHqFyQ8Cw2dFOcOuTo&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQComj6SEuhGLDF1loMyVIIncxymkhcC1pnl_tj1XWjQ0g&oe=6A606AE9)

### Success screen

This screen indicates that Meta successfully created and associated all of the business customer’s assets (business portfolio, WhatsApp Business account (WABA), phone number display profile, and business phone number).

When the business customer clicks **Finish**, Embedded Signup triggers a message event containing the business customer’s WABA ID and business phone number ID, which you must then use to onboard the business customer to the platform.

![Success screen confirming the business customer account is connected, with a Finish button to complete Embedded Signup](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/532564823_655188414258906_330922092450163709_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=jCm9kDT4D_gQ7kNvwFh252O&_nc_oc=AdqjVUrGvm0jQ87VGGHWdP2as8lpuI8e0vGIdeloEqPnaPUBQ0YYRc_ZcIOkrJPKGXFgntOErfevKDKRANPzkfUy&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=Ne0mfExgUF7KeuC4D-S3iA&_nc_ss=7b2a8&oh=00_AQAavOQCAjqojNyrO3sICq6ETbCowf9PoWk8N5EUDbUkvw&oe=6A60626C)
