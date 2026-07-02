---
title: "Prefetching Mode"
source_url: https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.setSize
---

# Prefetching Mode

Updated: Mar 1, 2018

The method **`FB.Canvas.Prefetcher.setCollectionMode()`** controls how statistics are collected on resources used by your application. This method influences whether those resources are fetched to the browser early; it can also be used to turn off Prefetching completely.

This method takes one of two constants as a parameter:

* `FB.Canvas.Prefetcher.COLLECT_AUTOMATIC` -- use default collection mode
* `FB.Canvas.Prefetcher.COLLECT_MANUAL` -- fully manual

See the [Prefetching](https://developers.facebook.com/documentation/javascript#prefetching) section for an overview of this feature.

## Examples

To completely control which resources are reported to Facebook, for a given page load

```
FB.Canvas.Prefetcher.setCollectionMode(FB.Canvas.Prefetcher.COLLECT_MANUAL);
FB.Canvas.Prefetcher.addStaticResource("http://www.mydomain.com/foo.js");
// ...
```

## Note

It is not necessary to call setCollectionMode to call [addStaticResource](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.Prefetcher.addStaticResource); in automatic mode, Facebook will automatically infer what other resources you are using that are important to fetch early.

You can use the [`staticresources`](https://developers.facebook.com/docs/reference/api/application#staticresources) connection on the Graph API [Application](https://developers.facebook.com/docs/reference/api/application) object to check which usage statistics are being collected.
