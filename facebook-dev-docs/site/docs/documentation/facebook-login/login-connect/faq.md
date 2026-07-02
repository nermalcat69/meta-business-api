---
title: "Login Connect with Messenger FAQ"
source_url: https://developers.facebook.com/documentation/facebook-login/login-connect/faq
---

# Login Connect with Messenger FAQ

Updated: Sep 2, 2021

**When can I use Message Tags?**

You must send one message to the user within 24 hours from the time the user opted in to being contacted by your business on Messenger. You cannot use Message Tags to send the initial message to the user. Once you have started the conversation in Messenger, you can use Message Tags to send messages more than 24 hours after a user’s last message or user-initiated contact only if your message meets one of the approved Message Tags use cases. For more details, see [Message Tags](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/send-api) in the [Messenger Platform](https://developers.facebook.com/documentation/business-messaging/messenger-platform) documentation.

**Do I need to save login\_id in my database?**

If you intend to use `login_id` for `message_tags` related messages after the initial 24 hour window, consider saving the `login_id`.

**How many times can I use login\_id to send messages?**

You must send one message to the user within 24 hours from the time the user opted in to being contacted by your business on Messenger.

**Is the product experience only shown to people who are shown the FB Login dialogue, or also current, logged-in users?**

The product experience can be shown as part of login or to current, logged-in users independent of sign-in/sign-up. You can find more information about permissions in the [documentation](https://developers.facebook.com/documentation/facebook-login/web/permissions)

**After opting in, can users choose to stop receiving messages or change their preferences?**

Users can opt out of messaging at the individual thread level by selecting “Turn off messages.”. They can also [mute⁠](https://www.facebook.com/help/messenger-app/963733803657199/?helpref=related) or [block⁠](https://www.facebook.com/help/messenger-app/3115643275145823/?helpref=related) your business’ messages. You must immediately respect any request to block, discontinue, or otherwise block, discontinue or otherwise opt out of messaging with your business. For more details, see [How do I turn messages from a business on or off in Messenger?⁠](https://www.facebook.com/help/messenger-app/755835711227533) in the Help Center documentation.

**When can I send promotional messages or messages more than 24 hours since the user’s last contact?**

You must send one message to the user within 24 hours from the time the user opted in to being contacted by your business on Messenger. You cannot use Message Tags to send the initial message to the user. Once the conversation with the user has started, you can send promotional messages within 24 hours of a user’s last message. Otherwise, if you’d like to send promotional updates to the user outside the 24 hour messaging window, consider using Sponsored Messages or a One-Time Notification.

**Can I send sponsored messages with login\_id?**

The `login_id` cannot be used to send [Sponsored Messages](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery). If users answer the first message sent with `login_id`, you will receive a PSID and be able to use it to send sponsored messages.

**What template is recommended to help users respond to my message?**

The first message sent to users should familiarize users with the experience you offer in Messenger Platform. Using Quick Replies on the first message generally drives engagement. Also consider using generic templates, media temples or any other [template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/templates) that helps users understand the experience being offered.

**What happens if I have multiple apps connected to a page?**

All the apps will receive the messaging\_optin event containing a valid `login_id`, regardless of HOP configuration. This id can be used by all the apps to send messages.

**What happens if I send a message using the generated login\_id before I receive the opt-in webhook event?**

The login\_id is generated before the authentication flow finishes, so as soon as an app receives the login success callback, they can send a message using the generated `login_id`, even if the Webhook event didn’t arrive.

**Will I get a messaging\_optin event for each successful user login?**

No, the event will only be triggered once for users that accept the permission.

**What can I do to receive the messaging\_optins event multiple times during development?**

Make sure to include `reset_messenger_state=1` on the login flow. This will trigger the event again for users that have a role in the app being tested only. This is only possible using the `FB.login()` method or a manual login URL.

**The mobile SDKs does not support the reset\_messenger\_state parameter, how can I reset the state on mobile?**

You can use a manual login URL that triggers the login flow on any browser. When the Facebook Login popup is opened, the state is reset. You can close the window before logging in and the next time the mobile flow is triggered, the `messaging_optin` event should be sent.

**What does the “Page ID is not valid” error mean?**

For users to be able to test this integration before submitting for App Review, they need to have a role in the app.

**What does the error message “(#100) Param recipient[id] must be a valid ID string (e.g., “123”)” mean?**

For apps to be able to send messages using the received login\_id, they need to have pages\_messaging permission. Observe that when using the `login_id`, the field in the recipient object is named “login\_id” instead of “id”.

## See Also

* [Login Connect with Messenger](https://developers.facebook.com/documentation/facebook-login/login-connect)
