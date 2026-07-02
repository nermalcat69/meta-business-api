---
title: "Resource Prefetching"
source_url: https://developers.facebook.com/documentation/javascript/reference/FB.ui
---

# Resource Prefetching

Updated: Mar 1, 2018

With method **`FB.Canvas.Prefetcher.addStaticResource()`** you can inform the Facebook Canvas system that the current page uses a static resource, for example a JavaScript file. Adding static resources via this method can help the resource to be prefetched to the browser to improve performance.

## Example

```
FB.Canvas.Prefetcher.addStaticResource("http://www.mydomain.com/foo.js");
```

## Usage Scenarios

* **Resource not referenced from the DOM.** By default, your application's DOM for is traversed for `object`, `link`, and `script` tags that reference Flash, Javascript, and CSS files. If your static resource is one of these types, but is not referenced from the DOM, you can call this function to schedule it for prefetching.
* **Multiple page loads.** If users commonly go through two page loads in your app, but only the second page load uses the resource, you may want to schedule the resource for prefetching in every page load to make sure that it gets fetched in the first page load, thus making the second load faster.

The resource must properly return the following HTTP headers when requested by the client (if the headers are specified at all):

* **Content-Type** - Currently supported content types are `application/x-shockwave-flash`, `application/x-compress`, `text/css`, `application/javascript`, and `application/x-javascript`. If the content is not one of these types, the resource will be ignored.
* **Content-Length** - Only the largest resources will be prefetched; if the size of the resource is not specified, it will be assumed to be 1K, which is unlikely to be large enough to be prefetched.
* **Cache-Control** - if this is set to `no-cache`, `no-store`, or `private`, the resource will be ignored.
* **Vary** - if this is set, the resource will be ignored.
* **Expires/Last-Modified** - if there is too short a time between these two values, if only one is specified, or there is too short a time between the current time and one of these values, then the resource will be ignored.

You can use the [`staticresources`](https://developers.facebook.com/docs/graph-api/reference/app/staticresources) connection on the Graph API [Application](https://developers.facebook.com/docs/reference/api/application) object to verify that resources you are adding are getting counted.
