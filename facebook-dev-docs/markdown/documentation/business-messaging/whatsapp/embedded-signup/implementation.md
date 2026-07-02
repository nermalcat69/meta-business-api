---
title: "App Review"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation
---

# App Review

Updated: Jun 16, 2026

App Review is part of [app development](https://developers.facebook.com/docs/development) that enables us to verify that your app uses our Products and APIs in an approved manner. Meta needs to validate how you intend to use the requested permissions to make sure it is compliant with our requirements and policies.

Businesses first need to develop a prototype of their product so they can demonstrate their use case with a video recording for the App Review submission. To pass App Review, it is important that you ask for only the permissions your app needs; **requesting unnecessary permissions is a common reason for rejection** during App Review.

The following video provides a brief overview of the App Review process:

[![](https://static.xx.fbcdn.net/rsrc.php/v4/yN/r/AAqMW82PqGg.gif)](https://scontent.fdel1-9.fna.fbcdn.net/o1/v/t2/f2/m366/AQObBK9nP1aepTIw1wIffFvCOUQvxQHGlzevbS_GZOc2YYli1qKj4TXxKJYnJ5aZzPMG_5ogrie0qVF4UCpqmQp5WDbwmax4Y-rPDZ32CH9AXg.mp4?_nc_cat=102&_nc_oc=AdqayAmJ1SJTKTn22cRFCokjSOGZUgW5OMaQAIkly3s6DdMfcm2Z3p7SfFenAC6-O9BndDq86M9-CoM6P2nea-Dz&_nc_sid=5e9851&_nc_ht=scontent.fdel1-9.fna.fbcdn.net&_nc_ohc=A-1EZmmOKygQ7kNvwHV17Y3&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMTI4MC5kYXNoX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjoxNTM1NjQyMzEwNjA4MzQyLCJhc3NldF9hZ2VfZGF5cyI6MjQwMiwidmlfdXNlY2FzZV9pZCI6MTAxMjgsImR1cmF0aW9uX3MiOjMzMiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=5d79fd8beef527ac&_nc_vs=HBksFQIYRWZiX2VwaGVtZXJhbC9BRTQ1OTBDM0FBNEExMDEwQzE2Q0M0RjY5QkM1ODg5OV9tdF8xX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBEgAVAhhAZmJfZXBoZW1lcmFsLzc2NDcyODM3RjRGQTlEMTlCQTYzNEY3RkExQkNDQTkxX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACasl-jmkqq6BRUCKAJDMywXQHTHcKPXCj0YGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHARAHUCZaCeAQA&_nc_gid=DznPcRfvsQ4zd1gHK9yQZg&_nc_ss=7b2a8&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQCpCCt3nKeQGR4ayLL-Nz2PQxIB_Mg5Ne9z5FK_dBurew&oe=6A4BF85A&bitrate=340974&tag=dash_h264-basic-gen2_720p)

Business apps are automatically approved for [Standard Access](https://developers.facebook.com/docs/graph-api/overview/access-levels#standard-access) for all Permissions and Features available to the Business app type, so you can test your app while you are in this access level. Make sure your test users have a `developer` or `admin` role in the Meta app being used to implement Embedded Signup. **This means that if you are using the API for yourself as a Direct Developer, you do not need Advanced access or app review.**

**If you are building an app that other businesses will be using, you must request Advanced access for any permissions your app needs.**
You can request [Advanced access](https://developers.facebook.com/docs/graph-api/overview/access-levels#advanced-access) by submitting your app to App Review.

## Permissions

Commonly requested permissions and what to include to get approval for **Advanced access**:

| Permission | Description | What to include in your submission |
| --- | --- | --- |
| [whatsapp\_business\_management](https://developers.facebook.com/docs/permissions#w) | The **whatsapp\_business\_management** permission allows your app to read and/or manage WhatsApp business assets you own or have been granted access to by other businesses through this permission. These business assets include WhatsApp Business Accounts, business phone numbers, message templates, QR codes and their associated messages, and webhook subscriptions.  If your app uses this permission to access WABAs not owned by your business, you must have **Advanced access**. Without it, API calls return error code `200`. | **Written:** Explain how you will use this permission to access the business assets of clients who you have onboarded onto the platform.  **Video:** Record a video of your app, or WhatsApp Manager, being used to create a message template. |
| [whatsapp\_business\_messaging](https://developers.facebook.com/docs/permissions#w) | The **whatsapp\_business\_messaging** permission allows an app to send WhatsApp messages and make calls to a specific phone number, upload and retrieve media from messages, manage and get WhatsApp business profile information, and to register those phone numbers with Meta. | **Written:** Explain what messaging functionality your app offers to clients who you have onboarded onto the platform, and how they perform those functions.  **Video:** Record a video showing your app being used to send a message to a WhatsApp number, and the WhatsApp client (either web or mobile app) receiving and displaying the sent message. If you wish, you can use the **App Dashboard** > **WhatsApp** > **API Setup** panel to generate a cURL request that you can integrate into your app to send the message.  If you are partnering with a Solution Partner and plan to use their API, ask the Solution Partner to share a video with you that you can submit as part of your submission. |
| [whatsapp\_business\_manage\_events](https://developers.facebook.com/docs/permissions#w)  Only request this permission if you are using the [Marketing Messages API for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/overview) with [Conversions API](https://developers.facebook.com/documentation/ads-commerce/conversions-api). | The **whatsapp\_business\_manage\_events** permission allows an app to log events, such as purchase, add-to-cart, leads, and more, on behalf of a WhatsApp Business account administered by an app user. The allowed usage for this permission is to log events on WhatsApp Business accounts and send this activity data to Meta for ads targeting, optimization, and reporting. | This permission is automatically approved if you already have **Advanced access** for `whatsapp_business_messaging` permission. |

The average turnaround time for App Review is about 24 hours. Start the App Review process as soon as possible. You don't need to wait for Embedded Signup to be fully implemented to start this process.

## Reducing chances of App Review rejection

You must request **Advanced access** for the permissions above.

You can request these permissions in a single bulk submission, or as separate submissions. For each permission, an explanation and screen recording specific to the permission being requested is required.

As part of your submission, you must include separate screen recordings that show how your app uses each permission in your submission. The video can be a screen recording directly from your computer, or a recording using a digital camera or camera phone. You will need to attach this file to your App Review submission.

Do not submit a video that includes multiple permissions supporting different use cases. You must submit a different video clip for each permission. Your submission may be rejected if you highlight multiple permissions being used as part of the same video.

Both written descriptions and screen recordings are required for each permission. If you include a screen recording that shows how your app uses a permission, but fail to include a description of how it uses it, your submission will be rejected.

![App Review submission form for whatsapp_business_management with a written description text area and a screen recording upload section](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/496716242_1475889623405133_5410416263043243743_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=TjcrXHX0FmIQ7kNvwEkc52O&_nc_oc=Ado9VUA0bYYp2j9SzV0W4nDMKb_dfB_H3NG_AOim2GrGsgH5x5-B6kFeVblpcn-8CXHIumhREaZQhVvooGQDieZ1&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=DznPcRfvsQ4zd1gHK9yQZg&_nc_ss=7b2a8&oh=00_AQAdWlSL4wimwpkfCN2P4UnGh6uByHti3aZqQ4nLBtjjaw&oe=6A6059DA)

Submissions in draft mode will not be reviewed, so don't forget to **submit your App Review submission!**

![App Review Requests panel listing a current request with Status set to Draft and pending whatsapp_business_messaging and whatsapp_business_management permissions](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/503769387_653066754402874_3122829917621506762_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zi5af1qUSAMQ7kNvwGSnlrA&_nc_oc=AdpKMHfVip6n-fdmERCqWj-KQMNIk-RcJlCZj-XzNyl8fYLDdev016RJ31jBPrFPsY_A5VroCn0mX8RHkr6EhuZu&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=DznPcRfvsQ4zd1gHK9yQZg&_nc_ss=7b2a8&oh=00_AQC2wpvpm8FG1CxSDzYEd8ak3l516ILtlcYoeuhsDcNGng&oe=6A6062D5)

## Examples

This is an example of a screen recording showing your app being used to submit a template for approval. This demonstrates your app using the **whatsapp\_business\_management** permission, which you requested in your App Review submission.

[![](https://scontent.fdel1-6.fna.fbcdn.net/v/t15.5256-10/501566932_506982565743082_5164242712314250245_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b07905&_nc_ohc=g6SHxYmeyMIQ7kNvwGLXTBP&_nc_oc=Adr2s6gyJVA8HVrETLPGo3zlg_DpB_7iZzskZOzyN3oMSU-rTnrIE_pHlOjByTCE2ILfRGYtIkYT--jxiEU85s4v&_nc_zt=23&_nc_ht=scontent.fdel1-6.fna&_nc_gid=DznPcRfvsQ4zd1gHK9yQZg&_nc_ss=7b2a8&oh=00_AQCMPY_8MdwAMnxaSV-J4b1bGjZ_IHKzqlHQGWp5fo0BSg&oe=6A4C046E)](https://scontent.fdel1-9.fna.fbcdn.net/o1/v/t2/f2/m412/AQNsIZfitf9KJ6ncIIO4E033z1mbsPZOI3fCVjEFVzF8cMAJnsbmYEm5ovVHTu2mkNIFxhqzVr99LHYaDgZAD9c.mp4?_nc_cat=109&_nc_oc=AdqZyCUlrDkG-y281qH_EHiyRpnGWZsnY_49emFHANa9cJxQErF4nTRjanSe5QaXKXyuRZAc0T4tC2ZjqEBQgjDv&_nc_sid=5e9851&_nc_ht=scontent.fdel1-9.fna.fbcdn.net&_nc_ohc=7m1oRRuUWWMQ7kNvwGvVH3b&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMTY1Mi5kYXNoX2gyNjQtYmFzaWMtZ2VuMl8xMDgwcCIsInhwdl9hc3NldF9pZCI6MTI0MTg1NDA0NzY1NDY1NSwiYXNzZXRfYWdlX2RheXMiOjM5OCwidmlfdXNlY2FzZV9pZCI6MTA4MjUsImR1cmF0aW9uX3MiOjgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=fa4f481587654c5d&_nc_vs=HBksFQIYNGZiX3Blcm1hbmVudC8yMDY4NTkyOTUwMjk5OTI3XzU2ODUwMjc3Mjc1ODc5NDYwMy5tcDQVAALIARIAFQIYNWZiX3Blcm1hbmVudC8xNzA4OTg0Mzc3MTU4Njc4XzI2NTk3NDQ5MzIwODgxMzQzOTQubXA0FQICyAESACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJv7L_NW13bQEFQIoAkMzLBdAIO6XjU_fOxgaZGFzaF9oMjY0LWJhc2ljLWdlbjJfMTA4MHARAHUCZZKpAQA&_nc_gid=DznPcRfvsQ4zd1gHK9yQZg&_nc_ss=7b2a8&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQCndhhGt-2tcrfw-hiQ-i96UQF-n8JqA97D3ayqaxFd0A&oe=6A4C06E1&bitrate=201930&tag=dash_h264-basic-gen2_1080p)

This is a screenshot from an example screen recording showing your app being used to send and receive a message to and from a WhatsApp user number (right-click and open in a new tab to see a larger version). This demonstrates your app using the **whatsapp\_business\_messaging** permission, which you requested in your App Review submission.

Note that **you cannot submit a screenshot**, you must submit a screen recording.

![Screen recording example showing a message sent from the app desktop interface and delivered in the WhatsApp mobile client](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/501582465_1425064645196941_2695325123378401168_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ySkUarcEMTsQ7kNvwEanwhY&_nc_oc=AdpraELXWx-aN30nHNMis6ijBp24E7-S4gfrSgZ5RL4mlszym3PoMAD7G70a0JbrT3VSKCJ4UTsqFUSzGN0falSQ&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=DznPcRfvsQ4zd1gHK9yQZg&_nc_ss=7b2a8&oh=00_AQDKc0yp8r23Hb0wtol2YJRSasiBZ6fFtvj5WG7LnVP2rw&oe=6A605229)
