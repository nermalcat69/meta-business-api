---
title: "Embedded Posts"
source_url: https://developers.facebook.com/documentation/plugins/page-plugin
---

# Embedded Posts

Updated: Jun 30, 2026

Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page. Only public posts from Facebook Pages and profiles can be embedded.

## Code Generator

href

width

show\_text

Get Code

## Settings

| Setting | Description | Default |
| --- | --- | --- |
| `data-href` | The absolute URL of the post. | `n/a` |
| `data-lazy` | `true` means use the browser's lazy-loading mechanism by setting the `loading="lazy"` iframe attribute. The effect is that the browser does not render the plugin if it's not close to the viewport and might never be seen. Can be one of `true` or `false` (default). | `false` |
| `data-width` | The width of the post. Min. `350` pixel; Max. `750` pixel. Leave empty to use fluid width. | fluid width |
| `data-show-text` | Applied to photo post. Set to `true` to include the text from the Facebook post, if any. | `false` |

## Getting your Code from a Post

### 1. Navigate to your Post

You can get the embed code directly from the post itself. If the post is **public**, click on the icon that appears in the top right corner of the post on Facebook.

**Choose `Embed Post` from the drop down menu:**

![Facebook post dropdown menu with the Embed Post option highlighted](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/666648449_1475396250985691_4987391594712184083_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tcSobKUPmfUQ7kNvwFphww-&_nc_oc=AdrjrRsDu6bXIf0Jnh_nB-bsHHvd6TCrUMbNJ3tg7PHJA0u1sUx6Kk10gnEHsuQq5ABTo-vVsvtjL_UdfPVEsZUS&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=P82jsKPelmmkGcA8L0aoLg&_nc_ss=7b289&oh=00_AQARunJux6sN-KgKq30Z7jIMGPCfskBCi4xoO8OJndR_MQ&oe=6A607604)

**For photo posts select the `Embed Post` button on the bottom right:**

![Facebook photo post page with the Embed Post option in the photo actions list](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/667070983_1475396230985693_7575491108963550704_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZchQj6zODBkQ7kNvwE9Y8PK&_nc_oc=AdoN0gN1QaeqUalcEdah_u1XfD_6Pa-RtypWnbvgjHThgAXj-VHvUCMh9d8UifMHq2DkHIjBf_Bs9cZFpNCM6O6K&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=P82jsKPelmmkGcA8L0aoLg&_nc_ss=7b289&oh=00_AQA9e68XGgBGOzj-JPL_WKMyerF6m8wRAtWMRTgmDBu0aA&oe=6A60A270)

### 2. Copy and Paste Code

You will see a dialog appear with the code to embed your post in it. Copy and paste this code into your web page in the place where you want it to appear.

![Embed this Post dialog showing the code snippet to copy and a live preview of the post](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/12726927_460738097457654_855104592_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkyDNk8-hKoQ7kNvwESJ1cN&_nc_oc=AdoZ5vHK9kHzeMi9w2Y9PPRiFydlyMXWgsuHcpZN8N3tNVXCm4ulJVbN31e1akojtjrvH0w6VA8vX3QcX7CvRwzt&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=P82jsKPelmmkGcA8L0aoLg&_nc_ss=7b289&oh=00_AQBWIEnmNOS73KEHXLeIfKwxMYY1UCzFl5ITa0YqCCG_0Q&oe=6A6074A7)

For technical details please refer to the section [Add Code Manually](https://developers.facebook.com/documentation/plugins/page-plugin#add-code-manually)

## Add Code Manually

Besides the [Code Generator](https://developers.facebook.com/documentation/plugins/page-plugin#code-generator), you can also embed the code manually.

### 1. Get Post URL

First you need to **[get the URL of a post](https://developers.facebook.com/documentation/plugins/page-plugin#how-to-get-a-posts-url)** you wish to share. The post **must** be public, which is indicated by the gray world icon, right next the post's publishing time:
![Public Post Icon](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/696231022_1504775958047720_9006595395638684863_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=YKVNgyJrzh8Q7kNvwEHMzqc&_nc_oc=Adp8Ms5VXQbfXaWDVhK_uRH7Skg0bsXvurQVDZ9kvnqSTvGYMlS6YsDWfwCr164IXMT9-4EDqmsc2RQyCH3MvfHq&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=P82jsKPelmmkGcA8L0aoLg&_nc_ss=7b289&oh=00_AQAovg2tVqJH1uL3AtYbCqGfjhGvYpQTg6k-nAdrvl-U2g&oe=6A60A20C)

For testing you can use this **example URL**:

```
"https://www.facebook.com/20531316728/posts/10154009990506729/"
```

### 2. Load JavaScript SDK

To use the Embedded Posts Plugin, or any other Social Plugin, you need to add the [Facebook JavaScript SDK](https://developers.facebook.com/documentation/javascript) to your website. You need to load the SDK only once on a page, ideally right after the opening `<body>` tag:

```
<div id="fb-root"></div>
<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
```

You can find more help on implementing the JavaScript SDK in the [JavaScript SDK - Quickstart](https://developers.facebook.com/documentation/javascript/quickstart).

### 3. Place Embedded Post Tag

Next place the Embedded Post tag at any place of your website. Replace `{your-post-url}` with your posts' URL.

```
<div class="fb-post" data-href="{your-post-url}"></div>
```

### 4. Testing

Once you completed these steps you're able to test your Embedded Post. A completed integration will look like something like this:

```
<html>
  <title>My Website</title>
<body>
  <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
  <div class="fb-post"
      data-href="https://www.facebook.com/20531316728/posts/10154009990506729/"
      data-width="500"></div>
</body>
</html>
```

The result of our test example is shown in the screenshot below.

![Rendered embedded Facebook post as it appears on a website after integration](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/12679489_1117425714966840_1476571871_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lYRR0kMmE7IQ7kNvwH73fdF&_nc_oc=AdoL5zwSh7ZBP-ZdwGLrxs8e-x0iJTVr7381IQT8tUhQ9fMh4b70mhrAV04kFB0dvBKwWmdRFMvyk-Rrfq4icLrt&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=P82jsKPelmmkGcA8L0aoLg&_nc_ss=7b289&oh=00_AQAnX07gt-3hQyo1oo157KuuI-CgOVxEA-Xfd4nzX9nBJg&oe=6A607ECA)

### 5. Customizing

Follow the instructions further down this page to adjust size, language and other settings.

## Getting a post's URL

There may be scenarios in which your embed code is created by a CMS and you just need the raw post URL. There are two ways to get a post's URL:

* Copy the URL of the permalink from your **browser's address bar**.
* Right-click the post's **publishing time** and copy the link address.

Both methods are highlighted in red in the screenshot below.

![A Facebook post with its permalink URL shown in the browser address bar and publishing time](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/662464185_1475396260985690_5868501031986640755_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KFr3KdUJdiIQ7kNvwETqQyV&_nc_oc=Adq7FqXdkICnzJbTCsu98cEI5TxLrV66YS5vPFm547roGSsjntCViN10_PKev_USLGAvo4v6Bi1574sEshggGBEu&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=P82jsKPelmmkGcA8L0aoLg&_nc_ss=7b289&oh=00_AQDA2Po0NI_Lt9iMc45JYLg4Vj8EHgbym-lttMqc7SkoTg&oe=6A608BB1)

### Via Graph API

If you wish to automatically integrate embedded posts into your website, you probably use the Graph API to aggregate posts. For example you may use the [Page Feed API endpoint](https://developers.facebook.com/docs/graph-api/reference/page/feed) and the `fields` parameter `permalink_url`.

The response to your request to `/{page-id}/feed?fields=permalink_url` will send you a response like this:

```
{
  "data": [
    {
      "id": "1234567890_3456789012",
      "permalink_url": "https://www.facebook.com/1234567890/posts/3456789012"
    }
  ]
}
```

## Layout on Desktop

You can adjust the width of Embedded Posts on desktop via the `data-width` attribute in the Embed Post tag as shown in the example below. Chose a value between `350` and `750` pixels.

Do not use CSS style tags to adjust the size of a plugin. It may result into display errors.

```
<!-- WRONG! -->
<style type="text/css">
.fb-post {
  width: 500px;
}
</style>
<div
  class="fb-post"
  data-href="{your-post-url}">
</div>

<!-- CORRECT -->
<div
  class="fb-post"
  data-width="500"
  data-href="{your-post-url}">
</div>
```

---

## Layout on Mobile Web

On mobile web, Embedded Posts automatically scale to the width of the container.

## WordPress

If you are already using the Facebook SDK for JavaScript in your WordPress site you can use the Embedded Posts plugin by simply adding the `fb-post` tag to your WordPress post:

```
<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="500"></div>
```

If you are not using the Facebook SDK for JavaScript and embed a Post via the copy&paste snippet, which you can get from each Facebook post, the Embedded Posts plugin will most likely not render as WordPress will convert all `&` chars to `#038;` and break the plugin.

Instead use the following code to add the plugin:

```
<script>
  window.fbAsyncInit = function() {
    FB.init({
      xfbml      : true,
      version    : 'v25.0'
    });
  };
</script>
<script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>

<div
  class="fb-post"
  data-href="https://www.facebook.com/20531316728/posts/10154009990506729/"
  data-width="500"></div>
```

A new, easy WordPress integration will be released in the near future.

## FAQ

**How do I display Social Plugins in different languages?**

If you are using the HTML5 or XFBML versions, you should include the language code when you instantiate the library.

When you load the SDK, change the value of `js.src` to use your locale. Replace `en_US` with your locale, e.g., `fr_FR` for French (France):

```
// Example 1:
'https://connect.facebook.net/fr_FR/sdk.js';

// Example 2:
js.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.6";
```

Supported locales are referenced in the [Facebook Locales XML file⁠](http://www.facebook.com/translations/FacebookLocales.xml).

You may need to adjust the width of a Social Plugin to accommodate different languages. Find more information on our [Localization & Translation](https://developers.facebook.com/documentation/javascript/internationalization) page.

**What do people see in Embedded Posts?**

The embedded post will show any media attached to it, as well as the number of likes, shares, and comments that the post has. Embedding posts will let people using your web site see the same rich information that is shown on Facebook.com, and they will enable people to follow or like content authors or Pages directly from the embed.

**What happens if someone deletes a post or changes a post's audience selector?**

The following message will display in place of the embedded post:

![](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/13311284_226484464404139_781153082_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4avhJkWqNjEQ7kNvwFNXUe_&_nc_oc=AdqfGlK4deefNwY3vnRe-GvSQdm9BwBjNBoJnbOVFhqkzYafpPtI6ZfaF4PMEVauhvzzST0Ac249brl5RYJsCpZ3&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=P82jsKPelmmkGcA8L0aoLg&_nc_ss=7b289&oh=00_AQDzJ6FGgd6V57FuUdYXCrFV44r--o9kNZ9atb86qBKgxA&oe=6A607B4D)
