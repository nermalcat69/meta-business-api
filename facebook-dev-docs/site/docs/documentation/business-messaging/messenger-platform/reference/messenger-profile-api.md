---
title: "The Welcome Screen"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api
---

# The Welcome Screen

Updated: Mar 30, 2026

This document shows you how to create a welcome screen for your Messenger experience. The welcome screen displays the name for your business' Facebook Page, the profile picture and cover photo from your Facebook Page, the time it usually takes for your business to respond to messages, and a **Get Started** button. When a person clicks the Get Started button, a message Get Started will be posted into the conversation, and your app can send the person messages.

## How It Works

When a person clicks the Get Started button in your Messenger experience, a webhook notification will be sent to you. You can use this notification to send an initial welcome message such as a text or set of quick replies.

### Before You Start

This guide assumes you have read the [Messenger Platform Overview](https://developers.facebook.com/documentation/business-messaging/messenger-platform/overview) and implemented the needed components such as a Facebook Page for your business (or test Page), registered as a Meta developer, and created a Meta business app ID with the Messenger product.

You will need:

* A Page access token requested from a person who can perform the `MESSAGING` task on the Page
* The `pages_messaging` permission
* To subscribe to the `messaging_postbacks` webhook event

### Limitations

For apps with Standard Access, the welcome screen will only be visible to people with role on the app.

![Messenger welcome screen for 'Peter's Apparel' with Page profile, reply time, and Get Started button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/653704240_1459945519197431_8930728314856002237_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3z61xfjEibQQ7kNvwGc2TDY&_nc_oc=Adp0I6q3GDzAlQivJiB2sYGIOpIBSPZsMHLCtygb4ivnVOFM4cz1n1nRNGi4k39W4CzIfNGBLrVAeAFpesCIaHgJ&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=AfFBFVRkqIMovrZEuDMoKg&_nc_ss=7b289&oh=00_AQC-5hwHYs9WpEuEeNKHRY5Uu80Svz2_BfZc9jNMOG3B_w&oe=6A605B85)

## Commands

If your Page uses [Commands](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api/commands), the welcome screen shows the list of commands supported by the messaging experience, making it easy for people to understand what actions the Messenger experience can be asked to perform.

![Messenger welcome screen for 'Zoomture' showing a '4 commands' pill above the Get started button](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/653710000_1459945722530744_312385238764697406_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=b6A7F2_umo4Q7kNvwE2lReC&_nc_oc=Adr05Wdfn5QZXWGk6lwd5TxU5xVurj7PEWBEldceiOCFfUnZMUle08_8lYGcIRQ93d91XKc3PhbZwZ0Pr1uZhxSs&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=AfFBFVRkqIMovrZEuDMoKg&_nc_ss=7b289&oh=00_AQAeksd6qd09UiWvThUz2ExBaygyHVMyVhNPcAEF-hv8Kg&oe=6A605915)

![Messenger 'Zoomture' welcome screen with the Commands list showing flights, hotels, currency, and weather](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/653702269_1459945705864079_3980967042273362612_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9K3IGjmZPIgQ7kNvwEUS6X6&_nc_oc=Adore8CJN2dhEW9z2O6nEa3EXEvOc0H3FI2PCdduSffRUQ-rGyrYeP0Vczf6JI6uqtt3N-Ox9gS6i88K6OZuSLSb&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=AfFBFVRkqIMovrZEuDMoKg&_nc_ss=7b289&oh=00_AQBgwFacofHjzOzN6a7rf4NKO8DQCI0ygoP9wBp6KLQafQ&oe=6A60536B)

## Implement the Get Started Button

To set the postback payload, send a `POST` request to the [Messenger Profile API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-profile-api):

```
curl -X POST -H "Content-Type: application/json" -d '{  
  "get_started": {"payload": "<postback_payload>"}  
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=<PAGE_ACCESS_TOKEN>"
```

For complete details, see the [`get_started` property reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen).

The Get Started Button feature is not supported when Messenger is accessed via the Facebook Mobile Browser (the in-app browser within the Facebook app).

### Best Practices

* **Do** communicate next steps to encourage a response in your welcome message. You can use buttons to add structure to your message and call out specific actions people can take.
* **Do** share basic commands in your welcome message. Communicate which keywords or terms people can use to ask for help, get updates, etc., so they find what they want more quickly.
* **Do** change your onboarding experience when your bot experience changes. Revisit your welcome message as you update your capabilities to make sure they're still relevant.
* **Don't** be too generic. Try addressing people by name to make the message feel personal and treating it as an opportunity to teach them how to use and control the experience.

## See Also

* [Messenger Profile API](https://developers.facebook.com/docs/graph-api/reference/page/messenger_profile)
