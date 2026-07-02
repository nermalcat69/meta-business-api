---
title: "Conversation Components"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas
---

# Conversation Components

Updated: Oct 13, 2020

Conversations are a lot more than simple text messages when you are building a bot on the Messenger Platform. In addition to text, the Platform allows you to send rich-media, like audio, video, and images, and provides a set of structured messaging options in the form of message templates, quick replies, buttons and more. This is intended to be an overview of the components that are available for you to create your Messenger experience in-conversation.

In addition to these conversation components, the Messenger Platform supports a full webview that allows you to enrich your in-conversation Messenger experience by extending it to the web. For more information on using the webview, see [Webview](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview).

### Available Conversation Components

* [Text Messages](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#text_messages)
* [Assets & Attachments](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#attachments)
* [Message Templates](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#templates)
* [Quick Replies](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#quick_replies)
* [Sender Actions](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#sender_actions)
* [Welcome Screen](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#welcome_screen)
* [Persistent Menu](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#persistent_menu)

## Text Messages

![Three Messenger text message bubbles showing subscription, order confirmation, and weather forecast replies](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/13503471_1613963512265939_694041731_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=cDKa4sCJZt8Q7kNvwECPmQM&_nc_oc=AdpK8ykp6Xbh_1NFrSaw0yMkvqP9RQz4_xoC1SB_E2yH6HZlytZI_X90PC7D9moGiZkWk5Nrs-7FFh5EIDiQg7BB&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=7v6n6uaLUfoe1bshaYp1NA&_nc_ss=7b289&oh=00_AQAvn9HLoFBBIdjE4vO-NuQOk7svBdKdas1HptD8zmkt9Q&oe=6A606D77)

Simple text is the foundation of any experience on Messenger, and is one of the most important tools at your disposal if you goal is to create a conversational experience. Try processing text messages with the Messenger Platform's [built-in natural language processing (NLP)](https://developers.facebook.com/documentation/business-messaging/messenger-platform/built-in-nlp) feature to handle all kinds of interactions with simple text.

[Sending Text →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages#sending_text)

## Assets & Attachments

In addition to text, the Messenger Platform allows you to send rich media assets as standalone messages or attached to structured [message templates](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/personas#templates). Supported asset types included the following:

* Audio
* Video
* Images
* Files

Assets may be sent from a URL or your file system. For assets you intend to send multiple times, you may upload them in advance with the [Attachment Upload API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/attachment-upload-api) or upload them the first time they are sent with the [Send API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/saving-assets#send_api) to eliminate the time and bandwidth overhead of uploading with each send. Saved assets are sent with an `attachment_id` that is assigned when they are uploaded.

[Saving Assets →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/saving-assets)[Sending Attachments →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages#sending_attachments)

## Message Templates

![A Messenger button template listing three options beside a generic template showing a t-shirt with View Item and Bookmark Item buttons](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/14235537_178238889274354_2098325353_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=jZxAjjTC95MQ7kNvwGi-5ii&_nc_oc=Ado7E4swfmIvgNyLu3nzVz8s7Va1k9uxH606VLijhyFpwI6NGIu7CdULmUle_2nxKcD6ux28Xsj8HCQoN8fv2hWs&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=7v6n6uaLUfoe1bshaYp1NA&_nc_ss=7b289&oh=00_AQCa0RQLoBa99tWuKxsdcnKG6C8lbur4vIDVJNpoSY6j3w&oe=6A608112)

Message templates are structured message types intended to support different use cases, and are useful for presenting information in-conversation that would be difficult to render or sloppy-looking with simple text. Templates also support [buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) that extend their functionality.

The following message templates are available:

* [Generic template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates#generic)
* [Button template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates#button)
* [Receipt template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates#receipt)
* [Airline templates](https://developers.facebook.com/docs/messenger-platform/send-messages/template/airline)
* [Media Template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates#media)

Message templates also support a set of buttons that add functionality, such as opening the webview, sending a postback to your webhook, sharing content, and more.

[Sending Message Templates →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates)[Using Buttons →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons)

## Quick Replies

![Two Messenger Quick Reply sets: 'Pick a size' with Small Medium Large and 'Pick a color' with Red Green above the composer](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/653704888_1459945669197416_1856728963803525854_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sCJ-CLbf4_cQ7kNvwH4lagl&_nc_oc=AdoBsZimZaXEmTsjuc2xqKnSJvUnqN4XEPc_6BrqdxlaChN_vB9DpgWQtmcDEiTELCGN0z_yVPbSwW37k_ljduNK&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=7v6n6uaLUfoe1bshaYp1NA&_nc_ss=7b289&oh=00_AQB4zb2kTvTdzPPR2O3Mj322tMzdsWMWRZF7h9_Zg26kGQ&oe=6A606A9E)

Quick Replies allow you present a preset set of options to the message recipient, which appear prominently above the composer. When a quick reply is tapped, the set is replaced with a single text message that is sent to your webhook. You may also add an image to a Quick Reply.

[Sending Quick Replies →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/quick-replies)

## Sender Actions

![A Messenger conversation with the Peter's Hats business showing the typing indicator from the sender action in-conversation](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/13480169_570751053131489_689799179_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=YjEbSHCHl30Q7kNvwG4lFOl&_nc_oc=AdoA97KzS5x3194aNhHbypm-MaMXtjrQtTiBwRwyoJ420JgOIqk5nl2dZaoskeT9edVX5u9S37XKQh758fASslvR&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=7v6n6uaLUfoe1bshaYp1NA&_nc_ss=7b289&oh=00_AQDQh2HAg6z8LtnJd3jByg7F4lImgPmAwo-yAfMUEkY8JA&oe=6A6087A4)

An important aspect of creating a Messenger bot is setting expectations. Sender actions are an important tool for accomplishing this that gives you the ability to programmatically control the standard Messenger typing, and read receipt indicators in-conversation. For example, when you begin processing a message, you might set the read receipt indicator so the person interacting with your bot knows their message has been seen, then you might set the typing indicator to show them that a response is in-progress.

[Using Sender Actions →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/sender-actions)

## Welcome Screen

![Messenger welcome screen for Peter's Apparel with a Get Started button, then a greeting with T-Shirts Pants Hats quick replies](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/641631633_1445181510673832_8753613653176897326_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q-5Eex41VVoQ7kNvwECQPaD&_nc_oc=Adp0ndxgFLzF4x7NAFxMRxd-Q1lnDWu1SDXcUhk4MRvEAPq-V2VgapFzQPzKsL4dcHCLHYRWp6LpKuAeZTZr9g99&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=7v6n6uaLUfoe1bshaYp1NA&_nc_ss=7b289&oh=00_AQBRJoQDWIyHDSe7PQqtP9YoLjfnP1J66-f2qdSt9tXWFg&oe=6A608034)

The welcome screen is the first thing people see when they start a new conversation with your Messenger bot, and includes the name, description, profile picture and cover photo from your Facebook Page. You may also set optional [greeting text](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api/greeting) for the welcome screen, which can be used to introduce the purpose of your bot.

A conversation with your bot begins when the [get started button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen) is tapped.

[Configuring the Welcome Screen →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen)

## Persistent Menu

![Messenger persistent menu listing Talk to an agent, Outfit suggestions, and Shop now above the message composer](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/641632137_1445181560673827_7485593691845895443_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=peVRE0U-8Z0Q7kNvwGyVocL&_nc_oc=AdptmKqLtl_X5t0ZeMp0Kf4gCHoe-CKSKJndcDMd4ouSaCD8Irj6Dlfnh5C6fxOB9ebWnDSJjJo71gpYrDriyYv5&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=7v6n6uaLUfoe1bshaYp1NA&_nc_ss=7b289&oh=00_AQBacCA5m2lMcIjiWPszEn7ykZ5UKm0tXeoJHkFhsErqWw&oe=6A6071D6)

The persistent menu is an always-on user interface element that helps people discover and more easily access your bot's functionality throughout the conversation. This menu should contain top-level actions that a person can enact at any point. You may also optionally make the persistent menu the only way to interact with your bot by disabling the composer.

[Setting the Persistent Menu →](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu)
