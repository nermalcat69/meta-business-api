---
title: "How to Specify 3D Assets for Link Sharing"
source_url: https://developers.facebook.com/documentation/sharing/webmasters/faq
---

# How to Specify 3D Assets for Link Sharing

Updated: May 14, 2018

## Overview

Using HTML meta tags, you can specify 3D assets to be displayed when a link is shared on Facebook. The process is similar to specifying a flat image.

## Step-by-Step Instructions

* Collect the link details: **link title**, **3D asset URL**. For details regarding supported formats and limitations, see [3D Asset Requirements](https://developers.facebook.com/docs/sharing/3d-posts/asset-requirements).
* Modify the HTML response header for your URL to include the following meta tags. Replace the content attributes with your information.

```
<meta property="og:type" content="threed.asset" />
<meta property="og:asset" content="your_3d_asset_url" />
<meta property="og:title" content="your_link_title" />
```

* Open the **Sharing Debugger** to verify that your server is returning the correct metadata to Facebook for sharing.   
    

  [Open the Sharing Debugger](https://developers.facebook.com/tools/debug/sharing)

## Remarks

For more information on working with 3D images, see [3D Posts](https://developers.facebook.com/docs/sharing/3d-posts).

For additional getting started guides, see [Getting Started](https://developers.facebook.com/documentation/sharing/webmasters/getting-started).
