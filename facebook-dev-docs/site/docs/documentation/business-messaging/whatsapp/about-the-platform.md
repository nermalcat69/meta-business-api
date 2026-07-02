---
title: "WhatsApp Business Platform"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform
---

What’s next for business messaging and AI? Watch the Conversations keynote.

[**Watch now**⁠](https://www.facebook.com/MetaforDevelopers/videos/1033573362435484/C26-EN-M4D-web-website_m4d-Website-Global-doc-whatsapp--)

# WhatsApp Business Platform

Drive revenue growth, boost efficiency, and deliver exceptional customer experiences with the WhatsApp Business Platform—our enterprise-grade APIs for messaging and calling.

[Get started](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started/)

## Demo the API

Preview an interactive experience showing how Jasper’s Market (our demo retail business) connects with customers using the WhatsApp Business Platform.

Demo retail business![](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.8562-6/547429620_764982376167016_715228206216507834_n.png?stp=dst-webp&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9a942e&_nc_ohc=Y1rkyr2xeMAQ7kNvwHKGEHZ&_nc_oc=Adp2Gk2k5GWcJEkl5K9kyZIlqmZlNzTbcKcr_rVDtGGhClMg_zWacFynsJJHenF9S19-xOyhk1O9SDKhanmtItkD&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=5M18qvVIu-SkGy5cxYGNuw&_nc_ss=7b2a8&oh=00_AQDS3TtK6T2n2xGPhzMQit2Szl0bijjXEEbuEqPtPiymFA&oe=6A4C003E)

Try the demo

[Download the sample app](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started#download-the-sample-app)

Select language

PythonJavaScriptcURL

---

```
import requests  
  
url = "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages"  
headers = {  
    "Authorization": "Bearer <ACCESS_TOKEN>",  
    "Content-Type": "application/json",  
}  
data = {  
    "messaging_product": "whatsapp",  
    "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
    "type": "template",  
    "template": {  
        "name": "hello_world",  
        "language": {"code": "en_US"},  
    }  
}  
                    
response = requests.post(url, headers=headers, json=data, timeout=30)  
print(response.json())  
  
```

## Essentials

Start building conversational experiences that delight your customers

About the platform

Learn more about the key components of the platform and how things work together.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform)

Messaging

Learn about the different message types and how to send them.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages)

Pricing

Learn how pricing on the WhatsApp Business Platform works.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)

Templates

Learn how to create and manage template messages.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)

Webhooks

Learn what webhooks are and how they are a core component of Business Messaging.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview)

Authentication and authorization

Learn how access controls and permissions work on the platform.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#authentication-and-authorization)

## About the APIs

Learn about the APIs that are part of the WhatsApp Business Platform

Cloud API

Send and receive WhatsApp messages, make WhatsApp calls, and more from your business phone number.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api)

Marketing Messages API for WhatsApp

Access new features not available on Cloud API and get automatic optimizations, so high engagement messages can reach more customers.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/overview)

Business Management API

Programmatically manage your WhatsApp business account and its assets.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#business-management-api)

## New releases

Explore our newest features and launches

WhatsApp API Calling

Seamless, secure, and personalized voice calling natively within WhatsApp chat to drive superior business outcomes.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling)

Groups API

Drive sales and solve customer problems with groups on the WhatsApp Business Platform.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups)

API solutions for WhatsApp Business app users

Use both the WhatsApp Business app and API with the same phone number to simplify onboarding and unlock new features to scale your business.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users)

## Partner resources

Build WhatsApp solutions for your business customers.

Become a Tech Provider

Follow this guide to onboard as a WhatsApp Tech Provider so that you can start providing messaging services to your clients.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/get-started-for-tech-providers)

Onboard customers

Learn how to build Embedded Signup; a flow to onboard customers directly from your website.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview)

MM API for WhatsApp Partner Guide

Learn how to integrate with MM API for WhatsApp and onboard your customers to send marketing messages with optimizations.

[Learn more](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers)

![](https://lookaside.fbsbx.com/elementpath/media/?media_id=1822211262016548&version=1781033968&transcode_extension=webp)

## Not a developer?

View the Partner Showcase to find a partner tailored to fit your business needs.

[Find a partner](https://business.facebook.com/messaging/partner-showcase)
