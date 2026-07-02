---
title: "App Review"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/support-resources
---

# App Review

Updated: Mar 24, 2026

Once you have finished building your Messenger app, you must submit it to Meta for review and approval before it can be made publicly available to everyone on Messenger. To make this process as smooth as possible, take some time to review the resources below, which will walk you through everything you need to know to successfully publish your Messenger experience.

### Requirements

Before you submit your app, do the following:

* Ensure your app abides by the [Platform policies](https://developers.facebook.com/policy#messengerplatform).
* Ensure your app follows the [Community Standards⁠](https://www.facebook.com/communitystandards).
* Publish the Facebook Page associated with your app.
* Ensure your webhook is functioning as expected and returning a `200 OK` response to webhook events within 20 seconds.
* If your app has gated functionality or content, provide a way for the Meta review team to access and test it. For example, if a feature requires a user to log in to your service, be sure to provide a username and password in the submission notes. Another common practice is to provide a trigger phrase that reviewers can send to your app that will allow them to start normally gated flows.

## Pre-launch checklist

Launching your Messenger app is a big deal. To make the review and approval process as smooth as possible, take some time to review the pre-launch checklist before you submit your app for review. Most of the things listed are not required, but they are all things you should consider before submitting your app.

### Best practices

You can build a Messenger app in many ways. Be sure to follow the [Best practices guide](https://developers.facebook.com/documentation/business-messaging/messenger-platform/introduction/general-best-practices) to create a great Messenger experience.

### Integrate core platform features

The Messenger Platform offers many ways for you to create unique experiences in Messenger. Before you submit your Messenger app, identify if any of the following core features are missing from your app, and if so, consider including them:

* [Message templates](https://developers.facebook.com/documentation/business-messaging/messenger-platform/introduction/conversation-components#send_messages): Templates offer a great way to structure messages, and offer a much richer conversation than plain text.
* [Persistent Menu](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu): There are a lot of ways to use the persistent menu, such as providing navigation or calling out key features. You can even make it the sole way of interacting with your app. It is also a great way to allow people to recover and restart conversation flows if an unexpected error occurs.
* [Quick Replies](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/quick-replies): Asking a person to reply with plain text can make it difficult for your app to anticipate and properly respond to their message. Quick replies allow you to limit the possible responses when needed to create a more seamless experience.
* [Messenger Webview](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview): Some features can be difficult to offer inside a conversation. The Messenger Platform supports a full webview so your Messenger app can present complex user interfaces when needed.

### Update your notification settings

Once your Messenger app is in production, lots of unexpected things can occur. Make sure you know what is happening with your app by updating the following notification settings:

* Email notifications: Check that your [email notification settings⁠](https://www.facebook.com/settings?tab=notifications&section=email) are correct. If your email address is incorrect, you will miss important updates about your Messenger app. You should select “All notifications, except the ones you unsubscribe from”.
* Policy enforcement events: Subscribe your app to receive [`messaging_policy_enforcement` webhook events](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_policy_enforcement). You receive notifications here if your Messenger app violates a [Platform policy](https://developers.facebook.com/devpolicy#messengerplatform).

### Ensure people can onboard smoothly

Your onboarding flow has a huge impact on whether a person on Messenger will choose to interact with your Messenger app. To ensure the best experience for people who are new to your app, take advantage of these key features of the [welcome screen](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen):

* [Get Started Button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/introduction/conversation-components#get_started_button): Ensure your app sends a brief welcome message when it receives the `messaging_postbacks` event from the get started button. This message should introduce newcomers to your Messenger app and outline the features it has to offer.
* [Greeting text](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen#set_greeting): The greeting text is your first opportunity to present what your app has to offer and establish the style and ‘voice’ of your brand. You should also take advantage of the personalization template strings to engage the person by name.

### Test your Messenger app

Make sure your Messenger app works as expected. Test your features, make sure there is a fallback for edge cases like unexpected message content.

Here is a short list of things you should test for before making your Messenger app publicly available:

* Responsiveness: Does your app respond quickly? Are you taking advantage of features like [sender actions](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/sender-actions) to signal when there may be a delay? Is your app able to handle all user input, including random inputs gracefully? Messenger is a conversational format, so keep in mind expectations differ from other types of apps. Keep your average response time under one minute.
* Error and failure states: When your Messenger app receives an unexpected input, does it fail gracefully? If it fails, are people able to recover or restart the experience?
* Conversation flows: Is there a clear path for interacting with your app from start to finish? Do you offer enough guidance and context along the way for a person to know their options at any given point?
* Scale: Does your infrastructure scale? Is your webhook able to handle unexpected spikes in webhook events?

### Drive people to your Page

The Messenger Platform provides lots of ways for people to discover your experience. Use the Platform’s [discovery and re-engagement features](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery) to get your app in front of a lot of people on Messenger. Here are some options available to you:

* [Click to Messenger ads](https://developers.facebook.com/docs/messenger-platform/discovery/ads): Gain exposure for your app in Facebook, Instagram, and Messenger with ads that open new conversations with your Messenger app.
* [m.me Link](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/m-me-links): A shortened URL that redirects users to your Messenger. You can use it on your website, email newsletters, and even add a `ref` parameter to add context into the conversation.

## Next steps

When you are ready to release your app to the public, you must submit it for review. This review process ensures your Messenger app abides by the [Messenger Platform policies](https://developers.facebook.com/devpolicy#messengerplatform) and functions as expected before it is made available to everyone on Messenger.

### Submit your Messenger app

To submit your app for review, visit the [App Review documentation](https://developers.facebook.com/docs/resp-plat-initiatives/app-review).
