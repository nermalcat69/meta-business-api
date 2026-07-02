---
title: "A Guide to Sharing for Webmasters"
source_url: https://developers.facebook.com/documentation/sharing/webmasters
---

# A Guide to Sharing for Webmasters

Updated: Jun 30, 2026

This document describes how you optimize web-hosted content that people share to Facebook, regardless of whether it's shared from the desktop or mobile web or a mobile app.

This document provides info about:

* **[Open Graph markup](https://developers.facebook.com/documentation/sharing/webmasters#markup)**
* **[Testing Your Markup](https://developers.facebook.com/documentation/sharing/webmasters#testing)**
* **[Test Whether Facebook User-Agent Is Handled Properly](https://developers.facebook.com/documentation/sharing/webmasters#user-agent)**
* **[Media Content Types](https://developers.facebook.com/documentation/sharing/webmasters#media)**

## Open Graph Markup

Most content is shared to Facebook as a URL, so it's important that you mark up your website with Open Graph tags to take control over how your content appears on Facebook. For your website to be shared correctly by our crawler, your server must also use the **gzip** and **deflate** encodings.

Without these Open Graph tags, the [Facebook Crawler](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers) uses internal heuristics to make a best guess about the title, description, and preview image for your content. Designate this info explicitly with Open Graph tags to ensure the highest quality posts on Facebook.

Here's an example of content formatted with Open Graph tags for optimal display on Facebook:

![Facebook Feed post preview of a New York Times article with headline, description, and image from Open Graph tags](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/671761306_1484143283444321_5010292080375569703_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=uUE64p-41WsQ7kNvwEQvf0C&_nc_oc=AdpBdL_-AIIMNsyn9Ei8zp2pXfmnwCPo_olNJ8ejBeL4TNNTM6ZP66t9hhYd-MIzEKbjv73cKGTyXrBRbtEGyUaY&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=6dz1cfP0MXnYJh0j6VTWrg&_nc_ss=7b289&oh=00_AQAdEo9fXCJ78UeqtdKgmgOu2sK3UupcAeNV1jYd9-O0yA&oe=6A60761E)

### Markup Example

For example, here's how to mark up an article, news story or blog post with `og:type="article"` and several additional properties:

```
<meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="When Great Minds Don't Think Alike" />
<meta property="og:description"        content="How much does culture influence creative thinking?" />
<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
```

The properties include descriptive meta-data about the article that we specifically want to present when someone shares the article.

### Basic Tags

These are the most basic meta tags that you should use for all content types:

| Tag | Description |
| --- | --- |
| `og:url` | The [canonical URL](https://developers.facebook.com/documentation/sharing/webmasters/getting-started/versioned-link) for your page. This should be the undecorated URL, without session variables, user identifying parameters, or counters. Likes and Shares for this URL will aggregate at this URL. For example, mobile domain URLs should point to the desktop version of the URL as the canonical URL to aggregate Likes and Shares across different versions of the page. |
| `og:title` | The title of your article without any branding such as your site name. |
| `og:description` | A brief description of the content, usually between 2 and 4 sentences. This will displayed below the title of the post on Facebook. |
| `og:image` | The URL of the image that appears when someone shares the content to Facebook. See [below](https://developers.facebook.com/documentation/sharing/webmasters#images) for more info, and check out our [best practices guide](https://developers.facebook.com/documentation/sharing/best-practices#images) to learn how to specify a high quality preview image. |
| `fb:app_id` | In order to use [Facebook Insights](https://developers.facebook.com/docs/sharing/referral-insights) you must add the app ID to your page. Insights lets you view analytics for traffic to your site from Facebook. Find the app ID in your [App Dashboard](https://developers.facebook.com/apps/redirect/dashboard). |

You may also want to add two additional tags to improve distribution of your content and more engagement:

| Tag | Description |
| --- | --- |
| `og:type` | The type of media of your content. This tag impacts how your content shows up in Feed. If you don't specify a type,the default is `website`. Each URL should be a single object, so multiple `og:type` values are not possible. Find the full list of object types in [Object Types Reference⁠](http://ogp.me/#types) |
| `og:locale` | The locale of the resource. Defaults to `en_US`. You can also use `og:locale:alternate` if you have other available language translations available. Learn about the locales we support in our [documentation on localization](https://developers.facebook.com/documentation/javascript/internationalization#locales). |

The full list of standard object properties is in our [Object Properties Reference](https://developers.facebook.com/docs/sharing/opengraph/object-properties#standard).

## Test Your Markup

To see how your markup appears to the [Facebook Crawler](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers) enter a URL into [Sharing Debugger](https://developers.facebook.com/tools/debug/). It will show which meta tags the crawler scrapes as well as any errors or warnings.

The debugger also triggers a scrape of your page, so if you do have errors in your HTML you can use the debugger to update your content. See [Updating Objects](https://developers.facebook.com/docs/sharing/opengraph/using-objects#update) to learn more.

![Sharing Debugger tool showing a scraped URL with warnings, link preview, and the Open Graph properties the crawler read](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/15323871_1007179786076658_1749334613383184384_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=x8n3T9LeeNwQ7kNvwF70XcX&_nc_oc=AdrMjQyYixt_u4BHMiPjm8v-HBVi8TXhD4CRlM4g7MYEYPQD-m9KwhcEwFX-IHpaibsdS5TTvMrXe0-CPVC8pIA1&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=6dz1cfP0MXnYJh0j6VTWrg&_nc_ss=7b289&oh=00_AQBgSQR_5OQT3EnzlTVs4wIykz4y-_lR37FguIHsR5CY6Q&oe=6A6094E0)

## Test Whether Facebook User-Agent Is Handled Properly

* Open your browser.
* Change the user-agent to match FB user-agent. For more information on changing the user-agent, see [http://osxdaily.com/2013/01/16/change-user-agent-chrome-safari-firefox/⁠](http://osxdaily.com/2013/01/16/change-user-agent-chrome-safari-firefox/):
  * **Develop Menu** > **User-Agent** > **Other**
  * Set user-agent to: `facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)`* Load the problem URL.
  * Set the user-agent to that of a mobile browser, say Safari - iPhone:
      
    **Develop Menu** > **User-Agent** > **Safari — iOS 10 — iPhone**
  * Load the problem URL.
  * If this is a user-agent issue, the page will load correctly in Step 5 but not Step 3.

## Media Content Types

You can add additional markup if your content includes audio, video, or location information. See all standard object properties in our [Object Types Reference](https://developers.facebook.com/docs/reference/opengraph#object-type).

### Video

You can use `og:video` for all content types. This section describes how to use additional tags to optimize the look of videos on Facebook. Facebook supports both mp4 and Flash videos.

Use a secure URL for both the `og:video:url` and `og:video:secure_url` tags to make your video eligible to play in-line in Feed. Note that your video is not guaranteed to play in-line based on a variety of factors.

| Meta tag | Description |
| --- | --- |
| `og:video` | The URL for the video. If you want the video to play in-line in Feed, you should use the https:// URL if possible. |
| `og:video:url` | Equivalent to `og:video` |
| `og:video:secure_url` | Secure URL for the video. Include this even if you set the secure URL in `og:video`. |
| `og:video:type` | MIME type of the video. Either `application/x-shockwave-flash` or `video/mp4`. |
| `og:video:width` | Width of video in pixels. This property is required for videos. |
| `og:video:height` | Height of video in pixels. This property is required for videos. |
| `og:image` | Specify an image for a high quality preview in Feed |

### Images

Use this set of properties for content that contains more than one image. See [Sharing Best Practices](https://developers.facebook.com/documentation/sharing/best-practices#images) for guidance on how best to use `og:image`.

| Meta tag | Description |
| --- | --- |
| `og:image` | URL for the image. To update an image after it's been published, use a new URL for the new image. **Images are cached based on the URL and won't be updated unless the URL changes.** |
| `og:image:url` | Equivalent to `og:image` |
| `og:image:secure_url` | https:// URL for the image |
| `og:image:type` | MIME type of the image. One of `image/jpeg`, `image/gif` or `image/png` |
| `og:image:width` | Width of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared. |
| `og:image:height` | Height of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared. |

### 3D Assets

Please refer to our 3D Posts [Open Graph Sharing document](https://developers.facebook.com/docs/sharing/3d-posts/open-graph-sharing).

## Additional Resources

* [Facebook Crawler](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers)
* [Optimizing Metadata](https://developers.facebook.com/documentation/sharing/webmasters/optimizing)
* [Object Type Reference⁠](http://ogp.me/#types)
* [Sharing Best Practices](https://developers.facebook.com/documentation/sharing/best-practices)
* [Updating Objects](https://developers.facebook.com/docs/sharing/opengraph/using-objects#update)
