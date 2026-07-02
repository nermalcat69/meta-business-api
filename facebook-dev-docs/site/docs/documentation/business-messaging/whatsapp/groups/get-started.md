---
title: "Groups API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/get-started
---

# Groups API

Updated: Jun 16, 2026

**Eligibility for Groups API**

The Groups API is now open to all businesses with an [Official Business Account (OBA)](https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts).

The Groups API enables you to programmatically create groups for messaging and collaboration.

## How it works

Groups are an invite-only experience where participants join using a group invite link you send them. This invite link provides context about the group, helping the user decide whether they want to join.

![Groups API flow diagram: Create a Group, Webhook Returns Invite Link, then Invite WhatsApp Users](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/583332263_2097826120969757_476207660850437421_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=uNcGykNT7kYQ7kNvwHJM-4Y&_nc_oc=AdoAsEEFePYr0mcJmeUDPLewTcFkqGksijrrzL6ahX6eOt86w9mtgJGAO9aSqDNf-uegEJYw8tFNM3gjsMsTxEUk&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=jOuFb94qoIdQtj3-oejeWQ&_nc_ss=7b2a8&oh=00_AQDHWiyDoGstJ7ZhvxOahlg-TNNCrif81EqnJJaAr-LA8Q&oe=6A60567B)

## Get started

When you are ready to start using the Groups API, see the Get started guide for more information:

[Get Started with Groups API](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/get-started)

## Quick facts

* **Max group participants:** 8
* **Supported message types:** Text, media, text-based templates, and media-based templates
* **Max groups you can create:** 10,000 per business number
* **Max Cloud API businesses per group:** 1

## Analytics

**Performance metrics are not available for message templates used in Groups.**

Create new templates specifically for Groups use instead of repurposing templates used for one-to-one messaging.

## Limits

**Eligibility for Groups API**

To qualify for groups features, your business must be an [Official Business Account (OBA)](https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts).

*Groups are **not available** for [WhatsApp Business app phone numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) and phone numbers onboarded to [Multi-solution Conversations](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations)*.

*The [Calling API](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling) is not supported in groups.*

* **Non-supported message types:**
  * Calling
  * Disappearing messages
  * View-once
  * Auth
  * Commerce messages
  * Interactive messages
* **Non-supported actions:**
  * Admin hide group participant list
  * Edit message
  * Delete message

## Pricing

The Groups API uses [per-message pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing).

[Learn more about Groups API pricing here](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/pricing).

## Features and reference

### Group management features

* [Create and delete group](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#create-group)
* [Groups with join requests enabled](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#groups-with-join-requests)
* [Get and reset group invite link](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#get-and-reset-group-invite-link)
* [Send group invite link template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#send-group-invite-link-template-message)
* [Remove group participants](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#remove-group-participants-endpoint)
* [Get group info](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#get-group-info)
* [Get active groups](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#get-active-groups)
* [Update group settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference#update-group-settings)

[*View Group Management reference*](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference)

### Group messaging features

* [Send group messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#send-group-message)
* [Receive group messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#receive-group-messages)
* [Pin and unpin group message](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging#pin-and-unpin-group-message)

[*View Group Messaging reference*](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/groups-messaging)
