---
title: "Sharing from the Messenger Webview"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/sharing
---

# Sharing from the Messenger Webview

Updated: Oct 12, 2022

Sharing is an important part of the Messenger experience, so we made it easy to enable the people your bot interacts with to share the pages you display in the Messenger webview. This creates a great opportunity for your bot to gain exposure.

## Default Sharing

Webviews, by default, now allow the user to share pages from your bot into conversations in Messenger.

When the link is shared, the resulting bubble will include an attribution that will allow the recipient to try your bot.

![Shared Messenger bubble with bot attribution showing the Peter's Hats bot name, icon, and a tappable chevron](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/15585568_1816763991940606_8458336514877685760_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hjV5F5UAVjAQ7kNvwEVOGYJ&_nc_oc=AdoxDvEEcCRdXi_e_w7gGKUl3EaaV-MIwIcRBJTC5HFzbWgKhMSC82XII3f3w1ucOx_-8KR71iod4tHmIBh3XAkw&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=pKxqgFpVtz7-H7D1xM-gFA&_nc_ss=7b289&oh=00_AQAwXF2m0yvtiVxBev3EIYW3l93xD0crCCOIP_DyCGuIOg&oe=6A6055DE)

To control the contents of the message bubble that results when a user decides to share your page in this way, we suggest setting [Open Graph meta tags⁠](http://ogp.me/) for the page.

To more closely control the bubble, or to create a custom call-to-action for the recipient to tap, try [Customized Sharing](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/sharing) in Messenger Extensions, discussed below.

### Disabling Default Sharing

There may be cases where you do not wish to allow the user to share from the webview (for instance when it is showing sensitive information or a web app that only works for bot users).

For this reason, there is now a `webview_share_button` attribute for both menu items and URL buttons. Set it to `hide` to disable sharing functionality in the webview. You may wish to use this if the webview is showing sensitive information.

Note that this attribute only hides the visible share button in the webview chrome.

## Customized Sharing

Users can already share from the webview if they like a piece of content from your bot.

But you may wish to customize the experience more. For instance, you might want to control the formatting of the resulting bubble and give the recipient a specific call to action (e.g. “Buy”, “Play). Or you may wish to direct the recipient into some specific flow (e.g. filling out an RSVP or taking a survey) that’s hosted at a different URL than the one the sender is seeing.

Messages sent from the [share button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) can also be customized in a similar fashion via the `share_contents` attribute.

**Policy Reminder**
Messages shared via these APIs are subject to [Platform Terms](https://developers.facebook.com/terms) and [Developer Policies](https://developers.facebook.com/devpolicy). Bots may not incentivize sharing or lead users to share in a deceptive manner.

## Best Practices

✅
If your bot shares pieces of content or links that are not particularly tailored for Messenger, it’s best to leave the default sharing button on.

✅
If you use customized sharing features in the webview, it’s best to turn the default webview share button off, as the resulting bubble may be less effective than the one you would generate.

❌
In accordance with [Platform Policy](https://developers.facebook.com/devpolicy/#control), don’t incentivize the user to share or block functionality unnecessarily.

❌
In the webview, don’t open the share flow without user action.
