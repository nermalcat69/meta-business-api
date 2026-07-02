---
title: "Send Dialog"
source_url: https://developers.facebook.com/documentation/sharing/messenger
---

# Send Dialog

Updated: Jun 30, 2026

With the Send Dialog people can privately send content to specific friends. They’ll have the option to privately share a link as a Facebook message. The Send Dialog does not require any extended permissions.

![Send Dialog with Recipients and Message fields above a shared link preview, plus Close and Send buttons](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/20628681_742958425912197_1298219896043208704_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fCPk1BaY-ZEQ7kNvwGgrGYQ&_nc_oc=AdrSTRy3SzVtVyqApu0CStnbuKPxbAuE8WB2AWX_tcUNGochU2TtHFEbSeKRBdv4g6SeuHPWUoQOCQSN5akybNmK&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=0OTAfNx1kBQKF2I6HTo2uw&_nc_ss=7b289&oh=00_AQD3rB4QQIFD7ZwP-ptuGAkhSr-K8tMwYrrCwV00C31PCw&oe=6A607AE2)

Facebook messages are a channel for person-to-person communication, and not meant for apps to send messages, or encourage people to spam their friends. In general, games on Facebook.com should use requests to communicate in-game status such as its your turn, or inviting people to use an app, or sending messages to multiple people.

You should offer the Send Dialog in situations when someone would otherwise send an email.

## Integration Examples

You can add this dialog to your website with the [Facebook SDK for JavaScript](https://developers.facebook.com/documentation/javascript) and by performing a full redirect to a URL. It is not supported on mobile devices.

### JavaScript

You can load the same Send Dialog URL using the Facebook SDK for JavaScript:

```
FB.ui({
  method: 'send',
  link: 'http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html',
});
```

## URL Redirect

```
http://www.facebook.com/dialog/send?
  app_id=123456789
  &link=http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html
  &redirect_uri=https://www.domain.com/
```

## Parameters

| Parameter | Description |
| --- | --- |
| `app_id` | Your app’s unique identifier. Required. |
| `redirect_uri` | The URL to redirect to after a person clicks a button on the dialog. Required when using URL redirection. |
| `display` | Determines how the dialog is rendered. In nearly all cases, you won’t need to specify this and the default will work best.   * If you use the URL redirect dialog, then this will be a full page display, shown in Facebook.com. This display type is called `page`. * If you are using the Facebook SDK for JavaScript, this will default to a modal `iframe` type for people logged into your app or `async` when using within a game on Facebook.com, and a `popup` window for everyone else. |
| `to` | A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients. |
| `link` | Required parameter. The URL that is being sent in the message. |

---

## Response Data

There is no response data from this dialog.
