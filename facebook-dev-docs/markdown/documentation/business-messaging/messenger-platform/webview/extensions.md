---
title: "Webview"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/extensions
---

# Webview

Updated: Apr 15, 2026

The Messenger Platform allows you to open a standard webview, where you can load web pages inside Messenger. This lets you offer experiences and features that might be difficult to offer with message bubbles, such as picking products to buy, seats to book, or dates to reserve.

You can open the webview with any of the following:

* The [persistent menu](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu)
* [A URL button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/url) inside a message, including the [generic template](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/generic).

In each of these instances, you can specify how the webview should look and behave.

## Display the webview

### Set webview title

As with any web page, the `<title>` tag sets the text displayed in the title bar for the webview.

```
<html>  
  <head>  
    <title>My Awesome Webview</title>  
  </head>  
   ...  
</html>
```

### Display with Messenger Extensions SDK

The Messenger Extensions JS SDK provides added functionality in the webview, such as information about the thread context, to help you tightly integrate webview experiences with Messenger.

For more information, see [Adding the Messenger Extensions SDK](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/extensions).

If your experience uses the Messenger Extensions, set the `messenger_extensions` parameter to `true` in the menu item or button you are invoking it from.

To display a webpage with the [Messenger Extensions SDK](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/extensions) enabled in the Messenger webview you **must** allowlist the domain, including sub-domain, in the [`whitelisted_domains` property of your bot's Messenger Profile](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api/domain-whitelisting). This ensures that only trusted domains have access to user information available via SDK functions.

For more information on allowlisting domains, see the [`whitelisted_domains` reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api/domain-whitelisting).

## Close the webview

It is a good idea to close the webview after a transaction is complete, especially if actions the user took will result in a message in the thread. You can do this with the Messenger Extensions SDK or by using a redirect URL.

### Close with Messenger Extensions SDK

To close the webview using the Messenger Extensions SDK, call `MessengerExtensions.requestCloseBrowser()`. You can also implement success and error callback functions.

```
MessengerExtensions.requestCloseBrowser(function success() {
  // webview closed
}, function error(err) {
  // an error occurred
});
```

### Close with redirect

You can also close the webview by redirecting the user to a URL with the following format:

`https://www.messenger.com/closeWindow/?image_url=<IMAGE_URL>&display_text=<DISPLAY_TEXT>`

The values set for the `display_text` and `image_url` parameters are displayed briefly until the window closes. This method only closes the webview if you redirect from your URL or Page. Directly opening the URL does not close the browser.

This only works on Android. On iOS, the text and image are displayed, but the browser does not close automatically.

## Best practices

* Use the webview for longer interactions (more than three steps) where people might want to edit their input or otherwise proceed in a non-linear fashion.
* Use it for content that is especially visual.
* Use it for user preferences, or to allow on-demand changes to previous selections.
* Use it in combination with more conversational interactions.
* Configure the height of your webview to match its content and preserve the context of the thread beneath.
* Take advantage of Messenger's webview extensions to bring the thread's context into the webview.
* Don't feel limited to collecting all form information at once. You can capture it piece by piece conversationally, then use a form in the webview for later edits.
* Mix conversational and webview interactions, and keep any given interaction brief. Combine thread and webview interactions for a "Messenger-native" experience.

### Example uses

* A ticket search experience can display an interactive stadium seat map for choosing a seat.
* A travel experience can provide travel preferences — aisle vs. window, inn vs. hotel, dietary needs — accessible from the persistent menu.
* A dental appointment experience can display an interactive calendar for choosing an appointment slot.
* A news publisher can provide a multi-select list of topics to subscribe to.
* A brand can provide personal preferences to customize offers and free gifts.

### Recommended design flow

* People access your webview experience one of two ways: via a button if it is part of a larger conversational flow, or a menu item for ongoing access (for example, preferences) — or both.
* Your experience appears as a layer over the thread — full screen, at 75% height, or at 50% height, depending on your content and use case.
* You may want to send content to the thread during or after the webview interaction.
* When they are done, people can close the webview and return to the thread — or you can close it yourself in response to actions they take (for example, a Save button).
