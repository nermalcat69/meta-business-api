---
title: "Customizing the default flow"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data
---

# Customizing the default flow

Updated: Jun 28, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This document provides an overview of the ways you can customize Embedded Signup’s default flow. You can use these options to present different versions of the flow to your business customers.

## Onboard WhatsApp Business app users

You can configure Embedded Signup to [allow business customers to onboard using their existing WhatsApp Business app account and phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users):

![Embedded Signup Select your setup screen with options to connect an existing WhatsApp Business app account or start with a new phone number](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/477341352_1809983926468415_3794578338113490554_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gA-IMLYP8AsQ7kNvwEOifF1&_nc_oc=AdrVpNDsF_I7UpAVxicHVUnXmtvX-YqEw1Kn8_usmc10mcwWzF7YlmL1mRfcqKqv69sBBwQ3Vf9D_YUM7fehRMJP&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=JAM5MDgBVlinBYQyG_rSYw&_nc_ss=7b2a8&oh=00_AQCEO_9T2ByGey5JEKlD1CfEXT-cgeaYhaBBXjsjO_JK9A&oe=6A60485B)

After a business customer completes onboarding with this option, they can use your app to message WhatsApp users at scale. They can also continue to send messages on a one-to-one basis using the WhatsApp Business app.

## Pre-filling screens

You can pre-fill many of Embedded Signup’s default flow screens with a business customer’s business data. [Pre-filling screens](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data) can reduce the amount of input and interaction your business customers need, and shorten the flow.

![Embedded Signup Review your business details screen with pre-filled business name, phone number, email, website, and country fields](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/465727373_1573223883300812_8312998736298536563_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9LZo1Ya_7yMQ7kNvwGs2eKq&_nc_oc=AdoDYy_olFrvnIvEN5DEbYnFQ2HBhz82UpuIP2rdV_xbVrZvEpR7NaEs13OdskqZGEHpnO0w3NuUEhE41YAve0Xr&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=JAM5MDgBVlinBYQyG_rSYw&_nc_ss=7b2a8&oh=00_AQCb3vEU6o7mXfacei63f7C-z1E_Br2-xBJ3PszorVXNmw&oe=6A604687)

## Bypassing phone number addition and verification

You can customize Embedded Signup to entirely [skip the phone number addition and verification screens](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition). Skipping these screens can be useful if you don’t want business customers to have to enter a phone number, retrieve the verification code, and verify it.

![Embedded Signup Add a phone number for WhatsApp screen with a phone number field and Text message or Phone call verification options](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/464076811_858112679765152_5952854678961541773_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hzwA6NBd8YQQ7kNvwFs2Bly&_nc_oc=AdomcWYVjAkUACy7bJ87ueZyRp-WCt8mHIVA73U_rrxpK-KLm95Xqe2lUJD4v0640A8LCOAafriIhYnkQTPlr0hF&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=JAM5MDgBVlinBYQyG_rSYw&_nc_ss=7b2a8&oh=00_AQDb3LMp0lz5bY07VMIvcN1tuajvApqVjaUoupyOjFQEsA&oe=6A60758E)

![Embedded Signup Verify your phone number screen with a six-digit verification code entry and a Code sent successfully confirmation](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/464106774_850690680604728_8102449662662242044_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2K06pWzRxmkQ7kNvwFNoAow&_nc_oc=AdpUtkm1a7AqlfblsTY_qXXx0BZIAlfkzHsKDp-sMLrLR8HARORCakMpvThVlS12hjd4sDOLy-OnqUKmg5BjdK5b&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=JAM5MDgBVlinBYQyG_rSYw&_nc_ss=7b2a8&oh=00_AQB-rhlM-3rht4vz6VNiHCRmotTq4cWGPVqZxHejFqcqBg&oe=6A606507)

## App-only install

By default, Embedded Signup returns tokens that your app can use to access assets owned by business customers onboarded through the flow. [App-only install](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/app-only-install) is a way to configure Embedded Signup so that only business tokens can access those assets. This does not affect the flow itself, only which tokens your app must use.
