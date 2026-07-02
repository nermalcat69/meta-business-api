---
title: "Page Plugin"
source_url: https://developers.facebook.com/documentation/plugins/restrictions
---

# Page Plugin

Updated: Jun 30, 2026

The Page plugin lets you easily embed and promote any public Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site. You can use the Page plugin for any Page that is not restricted, for example, by country or age.

![Facebook Page plugin showing the Facebook Page cover photo, like count, and Like Page and Share buttons](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/662488886_1475396274319022_174459665600234060_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5O7LvHFTwBEQ7kNvwGScovn&_nc_oc=AdqC77PxFLGNMen8yg00rvZRYNZUwwxBgAMRb2yD08_0W9bhuVdUbaMvWfr8TTHtuN8Uz2yCaBLR5b9O8HCEXphk&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQBGpXZwUEHbzceCM1oWFR992oAhugdjGt8JKLQe2Rgcbg&oe=6A60A9FD)

Related Topics: [Social Plugins FAQs](https://developers.facebook.com/docs/plugins/faqs) | [Other Social Plugins](https://developers.facebook.com/documentation/plugins)

href

tabs

width

height

small\_header

adapt\_container\_width

hide\_cover

show\_facepile

Get Code

## Settings

In addition to the settings above, you can also change the following:

| Setting | HTML5 Attribute | Description | Default |
| --- | --- | --- | --- |
| `href` | `data-href` | The URL of the Facebook Page | None |
| `width` | `data-width` | The pixel width of the plugin. Min. is `180` & Max. is `500` | `340` |
| `height` | `data-height` | The pixel height of the plugin. Min. is `70` | `500` |
| `tabs` | `data-tabs` | Tabs to render i.e. `timeline`, `events`, `messages`. Use a comma-separated list to add multiple tabs, i.e. `timeline, events`. | `timeline` |
| `hide_cover` | `data-hide-cover` | Hide cover photo in the header | `false` |
| `show_facepile` | `data-show-facepile` | Show profile photos when friends like this | `true` |
| `hide_cta` | `data-hide-cta` | Hide the custom call to action button (if available) | `false` |
| `small_header` | `data-small-header` | Use the small header instead | `false` |
| `adapt_container_width` | `data-adapt-container-width` | Try to fit inside the container width | `true` |
| `lazy` | `data-lazy` | `true` means use the browser's lazy-loading mechanism by setting the `loading="lazy"` iframe attribute. The effect is that the browser does not render the plugin if it's not close to the viewport and might never be seen. Can be one of `true` or `false` (default). | `false` |

---

#### Deprecated Attributes

* The attribute `data-show-posts` is deprecated. Please use the attribute `tabs`/`data-tabs` and use the value `timeline` to show posts from the Page's timeline.

## Adding the Page Plugin to a Website

The standard configuration of the Page plugin includes only the header and a cover photo. This size is ideal for promoting your Page in a small space, such as the top of a sidebar.

![Standard Page plugin configuration with only the header and cover photo, ideal for a small space like a sidebar](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/662686459_1475396267652356_7905710832338855663_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NuUQ0Gda_eoQ7kNvwHtNhkx&_nc_oc=Adp0zm8lr0gx_QgiEYFN-vIhSruvelCRNo9FdSvBhPZjziFDtQ8UGR4B0v7wQrFy9-yNwoC5mpRH4BRDezN2jh2W&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQB0yC1ym-aOA_lbB_ew7tZfxoivfnzkU-ztHb23QRfVJw&oe=6A607698)

```
<div class="fb-page"
data-href="https://www.facebook.com/facebook"
data-width="380"
data-hide-cover="false"
data-show-facepile="false"></div>
```

## Call to Action

If your page has a custom call to action button, it will be shown instead of the default call to action which is a Share button.

If the width of the plugin is less than 280px, the default Share button will be shown to prevent design misalignment in different translations.

## Page Tabs: Timeline, Events & Messages

You can now have **timeline**, **events** and **messages** tabs on the plugin:

* **Timeline Tab**: Will show the most recent posts of your Facebook Page timeline.
* **Events Tab**: People can follow your page events and subscribe to events from the plugin.
* **Messages Tab**: People can message your page directly from your website. People need to be logged in to use this feature.

#### Enabling Messaging on your Page

To **enable messaging** on your Facebook page go to your Page `Settings`. In the row `Messages` check *Allow people to contact my Page privately by showing the Message button* (Direct Link: `https://www.facebook.com/{your-page-name}/settings/?tab=settings&section=messages&view`).

### Adding Multiple Tabs

Use a comma-separated list within the `data-tabs` attribute to add multiple tabs:

```
<div class="fb-page"
data-tabs="timeline,events,messages"
data-href="https://www.facebook.com/YoloBookStore"
data-width="380"
data-hide-cover="false"></div>
```

![Page plugin with the Timeline tab showing recent posts and the Events tab showing an event to subscribe to](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/666019574_1475396247652358_8906671115271645506_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=WZX9uzjaPRQQ7kNvwHpgNam&_nc_oc=AdpgSCtbwHfHGV-klzaSt_0pACtL9grEpXud_-TQxNmwZjWOwxT4ajDf_SLv0b29q2fJw1PMNHyWPu9RD57Y99sM&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQAKEalkUw6OY_wAyFtKeL3wfGQdNmDyli6V-jfDbGIE0g&oe=6A607637)

![Page plugin Messages tab showing the compose message box and the confirmation screen after a message is sent](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/662741208_1475396244319025_3348841911550017704_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hnC1NP4zONsQ7kNvwHICMvH&_nc_oc=AdqvWnWxXz6xHCde3t-angTcEnT0PxJpJu42nTJMp1fPApZ2rYbZ3PVdYtAUMQuUDz4kX5hxul_loOa8P8jpAgZ3&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQCLD61Rgk0yATxG6D2T-_FnboHU0-2NTrlg3bJyydKx4g&oe=6A607E48)

### Single Tab

You can also just add a single tab showing either the `timeline`, `events` or `messages`:

```
<div class="fb-page"
data-tabs="events"
data-href="https://www.facebook.com/YoloBookStore"
data-width="380"></div>
```

![Page plugin with a single Events tab showing an upcoming event to subscribe to](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/664767981_1475396264319023_4543349600268446937_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vGZrK7bNcQYQ7kNvwFJOVb0&_nc_oc=AdrkhR9jjM0Unm5To6lakGSVvGmUErZm6kd2KhwHuVvMko0qZqWZEuIVh7QAyTNkb4AD7ZLR-_b5ZpEtdqRT_8SU&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQCmiCgstfkoWxMf5LQh6X-YQrribYh2U8hESuqEwWnvJg&oe=6A60A506)

## Adaptive Width

![Page plugin sizing itself to fit its parent container width, marked by dashed container-width boundaries](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/663119203_1475396257652357_7221528557774532368_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z-k2ofuHTQAQ7kNvwEPuScn&_nc_oc=AdqEJNrHKsMLmRdbr1WexhIv0inIzMcxWECeTkQhU8gPLPbcuInnoYQ2k9LOVt91w_rpIz2RMIxpd-LYXdDotRhw&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQBbnZ0bRM7JPRJJ3SlSDMqOW4S7tnWEOoqOn-f3LpAYGA&oe=6A60A0F1)

The plugin will by default adapt to the `width` of its parent container **on page load** (min. `180px` / max. `500px`), useful for changing layout:

```
<div style="width: 190px;">
<!-- Page plugin's width will be 190px -->
<div class="fb-page" data-href="{url}" data-width="420"></div>
</div>
```

If the `width` of the parent element is bigger than the Page plugin's `width` it will maintain the value defined in `data-width`:

```
<div style="width: 600px;">
<!-- Page plugin's width will be 500px -->
<div class="fb-page" data-href="{url}" data-width="500"></div>
</div>
```

The plugin will never be smaller than `180px`:

```
<div style="width: 100px;">
<!-- Page plugin's width will be 180px -->
<div class="fb-page" data-href="{url}" data-width="320"></div>
</div>
```

Adaptive width can be switched off by unchecking **Adapt to plugin container width** and the plugin will rendered at the specified width irrespective of the parent container.

### No Dynamic Resizing

The Page plugin works with responsive, fluid and static layouts. You can use media queries or other methods to set the `width` of the parent element, yet:

* The plugin will determine its `width` **on page load**
* It will **not** react changes to the [box model⁠](http://www.w3schools.com/css/css_boxmodel.asp) **after page load**.

If you want to adjust the plugin's `width` on window resize, you manually need to rerender the plugin.

## Show Friend's Faces

Show who likes your Page with real people's profile images rather than just a number. People visting your Page will see a count of friends that like the Page as well as their profile photos.

This option can be activated by checking `Show Friend's Faces` in the configurator.

![Page plugin with Show Friend's Faces enabled, displaying friends' profile photos below the like count](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/665934946_1475396224319027_3429322795887469047_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ll19i1hB4IQQ7kNvwHPW4LK&_nc_oc=AdoAUZVLym7oAH6L6Kses-WyfyF_grfqH7RIu45Xx2klEM307eyr58iNFz3zd3VrEJqTxGi4M9liJcBNZbGtsw_s&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQBtG18QRNeGGJkq7y4NFv1T-A-2qbfY56gI4fhHhQ0S7A&oe=6A6083EE)

```
<div class="fb-page"
data-href="https://www.facebook.com/imdb"
data-width="340"
data-hide-cover="false"
data-show-facepile="true"></div>
```

## Privacy Restricted Pages

Facebook Pages with privacy restrictions cannot be embedded.

## Changing the Language

You can change the language of the Page plugin plugin by loading a localized version of the Facebook JavaScript SDK. When you load the SDK, change the value of `js.src` to use your locale. Replace `en_US` with your locale, e.g., `ru_RU` for Russian (Russia):

![Page plugin localized to Russian, with the like count and buttons displayed in Russian text](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/662399264_1475396237652359_6440736411471595167_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5XlluLvv6CsQ7kNvwG6QMaC&_nc_oc=AdrT_KwWHLoIiXjzQb0oywbR5hmPTB4H0oYMGEmiEN18BLydC6WEzmLzJxHEeM5RF0j-Qiq17NN13WVBjspQLP61&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=hXKNrUeVFzmBKwALUEd6Cw&_nc_ss=7b289&oh=00_AQArdgL5J3hClVgAubW6n7zihwjeKVz8nxJp-z5BsjTP4A&oe=6A6086C2)

*Example*

```
js.src = "https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5";
```

Supported locales are referenced in the [Facebook Locales XML file⁠](http://www.facebook.com/translations/FacebookLocales.xml).
You may need to adjust the width of a Social Plugin to accommodate different languages. You may find more information on our [Localization & Translation](https://developers.facebook.com/documentation/javascript/internationalization) page.
