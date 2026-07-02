---
title: "Service messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/address-messages
---

# Service messages

Updated: May 21, 2026

Service messages are free-form messages that you can send to WhatsApp users during a [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/address-messages#customer-service-windows). You send them using the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) (part of the [Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api)). Unlike template messages, service messages do not require pre-approval — you can compose and send them as needed in response to a WhatsApp user’s message or call.

Service messages can only be sent via the Messages API. To message WhatsApp users outside of a customer service window, use template messages instead. See [Marketing messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/overview), [Utility messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/utility-templates/utility-templates), or [Authentication messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates) to learn about template-based messaging.

## Customer service windows

When a WhatsApp user messages you or [calls you](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing#how-calling-changes-the-24-hour-customer-service-window), a 24-hour timer called a customer service window starts. If the user messages or calls you again before the timer expires, the timer resets to 24 hours.

While the window is open, you can send any of the service message types listed below to the user. When the window closes, you can only send pre-approved [template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview).

As a reminder, you can only send messages to WhatsApp users who have [opted in](https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in) to receiving messages from you.

**Known issue:** In rare cases, you may receive a message from a WhatsApp user but be unable to respond within the customer service window.

## Pricing

Service messages are billed under the SERVICE pricing category. See [Pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) for details.

## Message types

You can send the following types of service messages during an open customer service window.

[Address messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/address-messages) allow you to easily request a delivery address from WhatsApp users.

![WhatsApp address message asking the user to provide a delivery address, with a Provide address button](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/441384197_454102407352120_3773045747928009795_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=eJChb2RvgUsQ7kNvwG_CzFn&_nc_oc=AdpUieeUiMxuoFFzdGq1drZiEslqL58UE65kshX-hlUutz0f7PVps7nq3qqW-O3eTxLtqOeDCk6NE8unowSCe4YC&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQC73NrHlZ8P_fP3N1GIvHtAIhXodn9V3eBBytko8IB1lg&oe=6A606FE2)

[Audio messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages) display an audio icon and a link to an audio file. When the WhatsApp user taps the icon, the WhatsApp client loads and plays the audio file.

![WhatsApp audio message with a music icon, download button, and audio playback timeline](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/441333612_1102926104368016_6233568143947105840_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Gif1zor-62oQ7kNvwHonttg&_nc_oc=AdqqSPPOkeG7GF80E_ETFvwArd9cMHIWKJCMkvW4tIORNcMiNuF__qV0CktW1_NsFJsNgIDQ6O2kxS6oZ8CKvny3&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQB6_MNGYodj1WIPpRlfhRwujm2EIyiXyZNlazME4hooGg&oe=6A6073EA)

[Contacts messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contacts-messages) allow you to send rich contact information directly to WhatsApp users, such as names, phone numbers, physical addresses, and email addresses.

![WhatsApp contacts message for Barbara Johnson with Message and Save contact buttons](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/440790666_990559829136435_3259503667945350761_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gx_eriOe0wwQ7kNvwGfEV27&_nc_oc=Adop5gNbfKegBR1QqMxlGkdBtD2Kghqatrpuq3y1iS_tXRtCPb8l76xO0UmRWHIJMor-XQke5vJpZyJBiOwMhSYc&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQCraxOT9tUr3Gmc6Lsn0ORh4MboxUhMZcPqPZmJvMdxpQ&oe=6A605F8E)

[Document messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/document-messages) display a document icon, linked to a document that a WhatsApp user can tap to download.

![WhatsApp document message showing a PDF file named lucky-shrub-invoice.pdf with a download icon and caption](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/440797712_455258680228442_8760882695056096687_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=8w-LJwDZ-u0Q7kNvwEKi-_6&_nc_oc=AdokCecLldY9hMYXjcMvG5HyUf4nRvVNZZOg7BWsD0rxk9S9mLyYurlLnd8EBYI1gg9EuxXn8U5cRalPfEwBPCrm&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQA4hI9DWLqkAx5c0aMCRDWyMMmkqyuwgvEiy-qkS4BGPQ&oe=6A60678E)

[Image messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/image-messages) display a single image and an optional caption.

![WhatsApp image message showing a photo of a succulent being trimmed, with the caption The best succulent ever?](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/439831684_1373893986606126_2007013942518250478_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=iZqOl-H3tjIQ7kNvwF9jJG-&_nc_oc=Adp4lNYiEaPNRp4jYieQ1Cycn4RF9v9kemfiz1RW8ITIrYsWymtzHplvtsE8SF7HF-2KUp-2X_wlsOUtD6lLJolh&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQAn21fAZoM0OybXWd2CcyvwzDxH3sZxiAWenQoaaEmFZA&oe=6A604B4C)

[Interactive CTA URL button messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-cta-url-messages) allow you to map any URL to a button, so you don’t have to include lengthy or obscure raw URLs in the message body.

![WhatsApp interactive CTA URL button message with a Lucky Shrub header image and a See Dates button](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/499710913_741192228581303_6833492513238538123_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1R-MLJOqgYAQ7kNvwGsZR4X&_nc_oc=Ado74MLlfHbRF5_hShMqRGQTCbhYK2_03TR3XcReLUu8JgACdmAQ_J2YOc3ruL6_qV8AOOS4Bv-xwPyXF4WcoCZK&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQC4bO9cLZYVyvvxo0daqofO7jFtBCNvxhImoPYTY9AJbA&oe=6A606E4A)

[Interactive voice call messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links/#send-interactive-message-with-a-whatsapp-call-button) allow you to trigger a WhatsApp call from users.

![WhatsApp chat with the Spruce Business Account showing a welcome message and a Call on WhatsApp button](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/561384673_1339318434593474_5721045063886655968_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=evKw49x2pJEQ7kNvwGeAarw&_nc_oc=AdoUhg_huyl09mL77QqHslD5B4CzLIckPfleDpyDZm7HcNP9a4nZ1g9nXUG5Yl6k5xamDv_xfD7XXTJAYAICZjaF&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQAOXjz2MlK296U9daf9A0PJ_K3oQ4NUfHMBrZu_LhfPLQ&oe=6A607179)

[Interactive Flow messages](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-flow-messages) allow you to send structured messages that are more natural or comfortable for your customers. For example, you can use WhatsApp Flows to book appointments, browse products, collect customer feedback, get new sales leads, or anything else.

For details, see the [WhatsApp Flows](https://developers.facebook.com/docs/whatsapp/flows) documentation.

![WhatsApp Flow form titled Join Now with Name and Email fields, agreement checkboxes, and a Continue button](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/459207270_1257913005205310_7321941208385331189_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=CUasEm19hUYQ7kNvwEDXePY&_nc_oc=AdqIc0lUKClmzEBpTSu9GCAEZ5L60fo850EBvP-sbiI3dCLjjViGylAZGrP0pjYgMww18fjKNGAmyjqUy7so6m7c&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQBMVLMCd29hv1xUgJc-63JBih7VM5AD9-DY-T5SkMA8HQ&oe=6A6074F7)

[Interactive list messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-list-messages) allow you to present WhatsApp users with a list of options to choose from.

![WhatsApp interactive list message titled Choose Shipping Option with a Shipping Options menu button](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/440871648_773297808277279_825530086722343543_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DqFbe_DxE3sQ7kNvwGYCqUu&_nc_oc=Adr1ZhhkjUvDbHt_TNwINVa4NIZfYyVdygUuBoZQTUXVAXO_iPfGQjJrj1d77WgwtZeNpZ7Y3KlL7LadA_AJx9Ue&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQBOtTt8kQ_6znOOXYDQFRrjqNPpZocKjlYoJ10KS-tNWg&oe=6A6072A8)

[Interactive location request messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/location-request-messages) display body text and a send location button. When a WhatsApp user taps the button, a location sharing screen appears which the user can use to share their location.

![WhatsApp location request message asking where to be picked up, with a Send location button](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/440778444_741946064791848_335647298308114961_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=omjYUpXGw7AQ7kNvwHWrSSa&_nc_oc=AdqOnJ_htJu4IiqNXJf748zUa7zR3DVFTGtzQn4tVPd7FD_U9yvIH53BpoKjXr52cOpOx4JT3H5kDTs56FnB0Ttf&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQC4mTei2R9vAXe30k4INRH3fW5JVTaUgfqhz2kIGjEcpA&oe=6A607411)

[Interactive reply buttons](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages) messages allow you to send up to three predefined replies for users to choose from.

![WhatsApp interactive reply buttons message about a gardening workshop with Change and Cancel buttons](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/440770231_408356378658790_997875267478158577_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=U5l4D9WsdpYQ7kNvwHoPdDF&_nc_oc=AdoUq_7-MPH_h6hGSexHD36IAzVCGlhjfrR-XrOoeT6skSax12OysnyA4TfyzCq-EgvSfzWLgYFP4aDRbsaTLlZ-&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQBmmdcyCyEhMkFP0T4TRCYVdtuJXTD-6GaF9EcMSBeY1w&oe=6A604D98)

[Location messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/location-messages) allow you to send a location’s latitude and longitude coordinates to a WhatsApp user.

![WhatsApp location message showing a map with a pin for Philz Coffee and its street address](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/440739359_451301924241746_5496230692221042707_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5eOCTFL_O4oQ7kNvwHzqU1h&_nc_oc=AdpGP6ICevWp_-nNocrZI3SEgClJoJeXZmdFVKSsixl_NgEmNRn6ZrQqkwDyCsrDzeuMNTL126GQSst0CiPVvW3E&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQDyHzBNItuvxy7_koaN0i9vuwEzx4YaWTWmLXrR_tIYVA&oe=6A605614)

[Sticker messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/sticker-messages) display animated or static sticker images in a WhatsApp message.

![WhatsApp sticker message showing a sprouting plant sticker in a chat bubble](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/440786426_1111584576559135_6735562667160992382_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ek0mkHCD3JMQ7kNvwE8x-l0&_nc_oc=Adr3J_mbiEK7yLJARG9ii_XxxdfpQ_A7RiAGSxKINVnn_ZX3tRXVGaLpF8k1EYh4bTnaz2lLhUDRdJQQRc1UYDCc&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQCwRh2In-eY04FNHf4qRBiqwW4novKkNYo-6bMgAG5_kA&oe=6A603FAF)

[Text messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/text-messages) are messages containing only a text body and an optional link preview.

![WhatsApp text message with a Meta Quest 3 link preview and a body containing the product URL](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/440778097_900237625125034_93345957848876145_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qJ8uBiJZWw0Q7kNvwE_kKmh&_nc_oc=Adorva4wWBNKu1maUnjLRp5PU7pdad2YIBkogxRGL0lVI5H3iy--Bgoy9eka6pbFh2EN3eg-A5CPYnORCDHanmxh&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQDTjqms1vr5wjYYFbGwWWQd8RrAt0a53Oh6abu3UEFA2w&oe=6A6046CF)

[Video messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/video-messages) display a thumbnail preview of a video image with an optional caption. When the WhatsApp user taps the preview, it loads the video and displays it to the user.

![WhatsApp video message showing a thumbnail with a play button and the caption A succulent eclipse!](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/441312822_455518227141854_5770420105763186824_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=djLMvs64OtMQ7kNvwHh2fW8&_nc_oc=Adrx8Z5LugzuKHUDsq7mDuXECZG4K_t24R5FXWaKpI5n-Mj9RwHH7oZRtMhwIUSVsogyrroahaIde8mTCAwNJn0M&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQDqnU9lDSABy1iOa9D0p3vz_Zl-I61-nIT7N7zHvysCwQ&oe=6A605FA7)

[Reaction messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/reaction-messages) are emoji-reactions that you can apply to a previous WhatsApp user message that you have received.

![WhatsApp message reading Perfect, thank you! with a smiling face emoji reaction applied below it](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/440758814_464628532577869_3703934471348865877_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=91Diph5CJSEQ7kNvwEmhBS-&_nc_oc=AdooLcEgYs3szvdCOpM4tgUJc0orM06NsN_LzyvbqM3nL0u3zbnOdnixWP23OU54ExXnltVOvyZTAaxuAAxH1xoL&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQC4OOeOlbnuZBmUEfvUi2Qqt5vQa-DIGmUn7NrMD1fjWQ&oe=6A604092)

## Message quality

Your message quality is based on how messages have been received by WhatsApp users over the past seven days and is weighted by recency. It is determined by a combination of user feedback signals like blocks, reports, mutes, archives, and reasons users provide when they block you.

Guidelines for sending high-quality messages:

* Make sure your messages follow the [WhatsApp Business Messaging Policy⁠](https://business.whatsapp.com/policy?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4Gyix9SeTw6091BlLDa8L1G5d_IkKU991tQBUQRCo8ZB1LwdhRduYcZpxAog_aem_FIN9kFgm_K-iiNno_LesBg).
* Only send messages to WhatsApp users who have opted into receiving messages from your business.
* Make the messages highly personalized and useful to users.
* Avoid sending open-ended welcome or introductory messages.
* Avoid sending too many messages per day.
* Optimize your messages for content and length.

Your business phone number’s status, [quality rating⁠](https://www.facebook.com/business/help/896873687365001), and [messaging limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits) are displayed in the [WhatsApp Manager⁠](https://business.facebook.com/wa/manage/home/) > **Account tools** > **Phone numbers** panel.

![WhatsApp Manager Phone numbers panel under Account tools showing status, quality rating, and messaging limit](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/532273545_1018217176902582_4720629988037795374_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=861gdYmrNikQ7kNvwE3YGuj&_nc_oc=AdpLjSGfG3j0mJAB0Vfifadi3l-e746p6g4gAVaFk9cpJk23aaaUsXh39Y1bH1SdSxRPJNPJMn1rJ-6R7rzYN_t7&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQAXG819L8SF31cbpquChte84xjd9-NX23G1ulnzjb_lyA&oe=6A607234)

Numbers with high traffic commonly experience quality changes within short intervals (even within minutes).

## Requests

All send message requests use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages):

```
```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```
```

The post body varies depending on the [type of message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/address-messages#message-types) you want to send, but the payload uses the following common syntax:

```
```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "<RECIPIENT_TYPE>",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "<MESSAGE_TYPE>",  
  "<MESSAGE_TYPE>": {<MESSAGE_CONTENTS>}  
}
```
```

The `type` property value in the post body payload indicates the [type of message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/address-messages#message-types) to send, and a property matching that type must be included that describes the message’s contents.

The `recipient_type` property can be either `individual` for 1:1 messaging, or `group` for group messages.

See the [Groups API documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups) for details.

For example, this is a request to send a [text message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/text-messages) to a WhatsApp user. Note that `type` is set to `text`, and a `text` object follows, which describes the message’s contents:

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "text",
  "text": {
    "preview_url": true,
    "body": "As requested, here'\''s the link to our latest product: https://www.meta.com/quest/quest-3/"
  }
}'
```

If delivered, the message appears like this in the WhatsApp client:

![WhatsApp text message with a Meta Quest 3 link preview and a body containing the product URL](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/440778097_900237625125034_93345957848876145_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qJ8uBiJZWw0Q7kNvwE_kKmh&_nc_oc=Adorva4wWBNKu1maUnjLRp5PU7pdad2YIBkogxRGL0lVI5H3iy--Bgoy9eka6pbFh2EN3eg-A5CPYnORCDHanmxh&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQDTjqms1vr5wjYYFbGwWWQd8RrAt0a53Oh6abu3UEFA2w&oe=6A6046CF)

## Responses

The API returns the following JSON response when it successfully accepts your send message request. This response only indicates that the API successfully **accepted your request** — it does not indicate successful delivery of your message. You receive delivery status via **messages** webhooks instead.

### Response syntax

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "<WHATSAPP_USER_PHONE_NUMBER>",  
      "wa_id": "<WHATSAPP_USER_ID>"  
    }  
  ],  
  "messages": [  
    {  
      "id": "<WHATSAPP_MESSAGE_ID>",  
      "group_id": "<GROUP_ID>", <!-- Only included if messaging a group -->  
      "message_status": "<PACING_STATUS>" <!-- Only included if sending a template -->  
    }  
  ]  
}
```
```

### Response contents

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | The string identifier of a group made using the Groups API.  This field shows when messages are sent, received, or read from a group.  [Learn more about the Groups API](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups) | `Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD` |
| `<PACING_STATUS>`  *String* | Indicates [template pacing](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-pacing) status. The `message_status` property is only included in responses when sending a [template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) that uses a template that is being paced. | `wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user’s WhatsApp phone number. May not match `wa_id` value. | `+16505551234` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user’s WhatsApp ID. May not match `input` value. | `16505551234` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp Message ID. This ID appears in associated **messages** webhooks, such as sent, read, and delivered webhooks. | `wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA` |

## Commerce messages

Commerce messages are interactive messages used in conjunction with a product catalog. See [Share Products With Customers](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products) to see how to use these types of messages.

## Read receipts

You can let a WhatsApp user know you have read their message by [marking it as read](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/mark-message-as-read), which causes two blue check marks (called “read receipts”) to appear below the user’s message:

![WhatsApp message with two blue check marks labeled Read receipt next to the timestamp](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/491643461_603380552708521_8284248965365504291_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=EWzKYi7ugCwQ7kNvwFV_SGN&_nc_oc=Ado3mt1Aap3sSU9nAIUnsV0k3mDlyJUv-IEja3BiZnUYgXqCenI8xtM1nGsNVV_3byZu6dKMLuQLgvjDumy03qlI&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQBT597m09HNO06EZvJcVHlE4bb8hWOVoHJJCBY6RKRl6w&oe=6A6043F0)

## Typing indicators

If it may take you a few seconds or more to respond to a WhatsApp user, you can let them know that you are preparing a response by [displaying a typing indicator](https://developers.facebook.com/documentation/business-messaging/whatsapp/typing-indicators) and read receipts in the WhatsApp client:

![WhatsApp chat showing a Typing indicator with three dots and a Read receipt with blue check marks](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/488360772_654124507349470_2240843625651955811_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JB2PPACQmdkQ7kNvwHsyxTE&_nc_oc=Adr8o-3cYSy-fJKoVipi0G1OawE9Dgr9szAmwY54Wen57tazuNHwp3WtFTy2etP5nw9dHbDK8KAMJ6atJfSiWYV2&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQDZzjsPGEUYQiWIL9ZIXIavReKRvvuW2-XfujOvUdBXGA&oe=6A606A1C)

## Contextual replies

You can send a message to a WhatsApp user as a [contextual reply](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contextual-replies), which quotes a previous message in a contextual bubble:

![WhatsApp contextual reply quoting a previous message in a contextual bubble above the text message reply](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/441349069_1363509007609494_6528221959622289637_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sBFrch8NProQ7kNvwGkW5jo&_nc_oc=Adq-AxReFXhgh5G7R5L3jMrk9ee2OwAWjj-1ouIapGcQCI-0FD7MpThUoD3DeyOzlfPeLBjordA8QN9kTWOLNHzH&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=2veO3lbw27RqIb3K_nGeBA&_nc_ss=7b2a8&oh=00_AQBobvtIMkeHHPTP0kZFP1qEVHwgQriYwPCHrOXeO1DT0w&oe=6A6047EB)

This makes it easier for the user to know which specific message you are replying to.

## Webhooks

Messages sent to WhatsApp users trigger **messages** webhooks, so be sure to subscribe to this topic to receive message status notifications.

## WhatsApp user phone number formats

Plus signs (`+`), hyphens (`-`), parenthesis (`(`,`)`), and spaces are supported in send message requests.

We highly recommend that you include both the plus sign and country calling code when sending a message to a customer. If the plus sign is omitted, your business phone number’s country calling code is prepended to the customer’s phone number. This can result in undelivered or misdelivered messages.

For example, if your business is in India (country calling code `91`) and you send a message to the following customer phone number in various formats:

| Number In Send Message Request | Number Message Delivered To | Outcome |
| --- | --- | --- |
| `+16315551234` | `+16315551234` | Correct number |
| `+1 (631) 555-1234` | `+16315551234` | Correct number |
| `(631) 555-1234` | `+916315551234` | Potentially wrong number |
| `1 (631) 555-1234` | `+9116315551234` | Potentially wrong number |

Note: For Brazil and Mexico, the extra added prefix of the phone number may be modified by the Cloud API. This is a standard behavior of the system and is not considered a bug.

## Media caching

If you are using a link (`link`) to a media asset on your server (as opposed to the ID (`id`) of an asset you have uploaded to the Meta servers), the Cloud API internally caches the asset for 10 minutes. The cached asset is reused in subsequent send message requests if the link in subsequent payloads is the same as the link in the initial payload.

If you don’t want the cached asset reused in a subsequent message within the 10 minute time period, append a random query string to the asset link in the new send message request payload. The Cloud API treats this as a new asset, fetches it from your server, and caches it for 10 minutes.

For example:

* Asset link in first send message request: `https://link.to.media/sample.jpg` — asset fetched, cached for 10 minutes
* Asset link in second send message request: `https://link.to.media/sample.jpg` — cached asset reused
* Asset link in third send message request: `https://link.to.media/sample.jpg?abc123` — asset fetched, cached for 10 minutes

## Delivery sequence of multiple messages

When sending a series of messages, the order in which messages are delivered is not guaranteed to match the order of your API requests. If you need to ensure the sequence of message delivery, confirm receipt of a `delivered` status in a [status messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) webhook before sending the next message in your message sequence.

## Message time-to-live (TTL)

If the Cloud API is unable to deliver a message to a WhatsApp user, it retries delivery for a period of time known as a time-to-live, TTL, or the message validity period.

### Default TTL

* All messages except authentication templates: **30 days**.
* Authentication templates: **10 minutes**

### Customizing TTL for templates

You can customize the default TTL for authentication and utility templates, and for marketing templates sent using the Marketing Messages API for WhatsApp. See [Time-to-live](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/time-to-live) for details.

### When TTL is exceeded: Dropped messages

The platform drops messages that cannot be delivered within the default or customized TTL.

If you do not receive a status messages webhook with `status` set to `delivered` before the TTL is exceeded, assume the message was dropped.

If you send a message that fails (`status` set to `failed`), there could be a minor delay before you receive the webhook, so you may wish to build in a small buffer before assuming the message was dropped.

## Troubleshooting

If you are experiencing problems with message delivery, see [Message Not Delivered](https://developers.facebook.com/documentation/business-messaging/whatsapp/support#message-not-delivered).
