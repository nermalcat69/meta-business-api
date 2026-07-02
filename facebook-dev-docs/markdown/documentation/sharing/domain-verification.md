---
title: "Images in Link Shares"
source_url: https://developers.facebook.com/documentation/sharing/domain-verification
---

# Images in Link Shares

Updated: Jun 30, 2026

## The Open Graph meta-tag

The `og:image` tag can be used to specify the URL of the image that appears when someone shares the content to Facebook. The full list of image properties can be found [here](https://developers.facebook.com/docs/sharing/opengraph/object-properties#image).

## Requirements

* The minimum allowed image dimension is 200 x 200 pixels.
* The size of the image file must not exceed 8 MB.
* Use images that are at least 1200 x 630 pixels for the best display on high resolution devices. At the minimum, you should use images that are 600 x 315 pixels to display link page posts with larger images.

![Facebook Feed link share with a large full-width image, shown when the shared image is at least 600 by 315 pixels](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/672191671_1484143263444323_3754585993090544046_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wds5PDY9NLYQ7kNvwHoT0Hh&_nc_oc=AdriJHTNpbWzNwbtKsX3-cZMG12sJD3-_61yhJSdD8-ur72X9mzdUcwf4w5e46rxqwwHhQj9VUgFTemzZNGITPCd&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=MsDp32SVmM0_FX5CKew-5Q&_nc_ss=7b289&oh=00_AQB5O3bBp0GDIPhKBf4weebwTOj3h5Ya6Dk-Qo5_vJdH7w&oe=6A60A688)

* If your image is smaller than 600 x 315 px, it will still display in the link page post, but the size will be much smaller.

![Facebook Feed link share with a small thumbnail image beside the link, shown when the shared image is smaller than 600 by 315 pixels](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/673966197_1484143280110988_4312042089058901080_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=G2xamP2ahIgQ7kNvwEoBWK5&_nc_oc=AdrjSe_fKM7pil35YiLY58aoVEIvalVCpWvlxYeIVCFUJtFBrhNq_F6RCVNdcN45rMflSlZyV1_l44ElXTHrRBcB&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=MsDp32SVmM0_FX5CKew-5Q&_nc_ss=7b289&oh=00_AQC-V-AaAelCIMeauVWfidsHn6QovSkYDAw_B0G07siKsg&oe=6A6085DC)

* We've also re-designed link page posts so that the aspect ratio for images is the same across desktop and mobile Feed. Try to keep your images as close to 1.91:1 aspect ratio as possible to display the full image in Feed without any cropping.
* Our crawler only accepts **gzip** and **deflate** encodings, so make sure your server uses the right encoding.

## Pre-caching images

When content is shared for the first time, the [Facebook crawler](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers) will scrape and cache the metadata from the URL shared. The crawler has to see an image at least once before it can be rendered. This means that the first person who shares a piece of content won't see a rendered image:

![Like confirmation popup with an empty comment box and no rendered preview image, shown to the first person to share an uncached URL](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/671838361_1484143306777652_34685882123893159_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vWxfTROVjQQQ7kNvwFt83Ul&_nc_oc=AdrInroYcEUSC5KbxhCPqpzLlySec3UMhUN_zipO42K4bpJn-LPnk_r5yL5qiHeb-pifLHN9am12ttIEXSzqPq2i&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=MsDp32SVmM0_FX5CKew-5Q&_nc_ss=7b289&oh=00_AQCw8voKdXuRvFfVWbCBtcFIn-MJLTLIK_BQuQX01cDM8Q&oe=6A6083FD)

There are three ways to avoid this and have images render on the first Like or Share action:

* **Pre-cache the image with the [Sharing Debugger](https://developers.facebook.com/tools/debug):**
  Run the URL through the URL debugger to pre-fetch metadata for the page. This can also be used to update the image for a piece of content.
* **Pre-cache the image using [Graph API](https://developers.facebook.com/docs/sharing/opengraph/using-objects#update)**: Perform a force-scrape of the URL programmatically using the Graph API to pre-fetch metadata for the page . This can also be used to update the image for a piece of content.
* **Use `og:image:width` and `og:image:height` Open Graph tags**:
  Using these tags will specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it.

## Updating images

We cache all images referenced based on each image's URL, so if you replace an image:

* **Use a new URL for the new image** or the image won't be updated
* Don't remove old images, as there maybe existing stories that reference the old image
* Follow the instructions in the section [above](https://developers.facebook.com/documentation/sharing/domain-verification#precaching) to ensure that the new image has been downloaded by our crawler.

Note that updating the image for a URL will not automatically update the preview for old shares. To do this, you must refresh the share as described [here](https://developers.facebook.com/documentation/sharing/webmasters/faq#faq_1131343433556264).

## Troubleshooting

If you have any problems with images not being displayed correctly for a URL, try plugging in the **image URL** in the [Sharing Debugger](https://developers.facebook.com/tools/debug) for any errors. If you think there's an issue on our side, consider [filing a bug report](https://developers.facebook.com/support/bugs/) to us.
