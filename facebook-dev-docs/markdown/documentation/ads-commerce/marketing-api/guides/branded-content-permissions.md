---
title: "Create Branded Content"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/branded-content-permissions
---

# Create Branded Content

Updated: Jun 30, 2026

Creators, celebrities, and media companies can share branded content on Facebook. Branded content posts are any content that features or is influenced by a brand partner for an exchange of value.

See [About branded content on Facebook, Instagram, and Threads⁠](https://www.facebook.com/business/help/788160621327601/) for more information.

## Before you begin

You will need to:

* Comply with Meta's [Branded Content Policy⁠](https://www.facebook.com/policies/brandedcontent) and [Ads Policy⁠](https://www.facebook.com/policies/ads/restricted_content).
* Have a verified Facebook Page or Profile.
* Use the Marketing API or Ads Manager to create branded content posts.
* Tag your brand partner in the posts using the branded content tool or Marketing API.
  * If the branded content tool is not available for your Page, [submit an application⁠](https://www.facebook.com/help/contact/1865970047013799) for access.

## Create a Page post

Make a `POST` call to the `/{page-id}/feed` endpoint to create a post on your Page. The `sponsor_id`, `share_status`, and `message` fields are required.

You can allow brand partners to directly boost your posts by using `direct_share_status=1` to grant permission to a brand partner. Otherwise, set `direct_share_status=0`.

### Example request

```
curl -X POST \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "message=Check out some beautiful products in this grocery store" \
  -F "direct_share_status=1" \
"https://graph.facebook.com/v25.0/<PAGE_ID>/feed"
```

### Example response

```
{  
  "id":"<POST_ID>"  
}
```

## Post photos

You can add photos to your post with the `/{page-id}/photos` endpoint. The `sponsor_id`, `share_status`, and the `message` fields are required.

Specify a `url` field to link to an existing photo. You can also upload the photo as an attachment to the post.

See [Page Photos](https://developers.facebook.com/docs/graph-api/reference/page/photos) for more information.

### Example request

```
curl -X POST \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "message=Check out some beautiful products in this grocery store" \
  -F "direct_share_status=1" \
  -F "url=<PHOTO_URL>"
"https://graph.facebook.com/v25.0/<PAGE_ID>/feed"
```

### Example response

```
{  
  "id":"<POST_ID>"  
}
```

## Post a Video

Posting a video with branded content requires several steps:

* Make a call specifying you want to upload a video.
* Use the returned video object ID to upload the video.
* Complete the video transfer by setting the share status. Make sure to provide a `sponsor_id` for the video, which adds branded content to the story.

See [Uploading Videos](https://developers.facebook.com/docs/graph-api/video-uploads) for more information.

### Example request

```
curl -X POST \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "upload_phase=finish" \
  -F "upload_session_id=<SESSION_ID>" \
  -F "sponsor_id=<BRAND_ID>" \
  -F "direct_share_status=1" \
"https://graph-video.facebook.com/v25.0/<PAGE_ID>/videos"
```

### Example response

```
{  
  "success":true  
}
```

## Live Video

To create branded live video:

* Create a live video object.
* Update the live video object and add a `sponsor_id`.
* Start your live video stream.

To learn more about creating and managing live video streams, see [Live Video API](https://developers.facebook.com/docs/live-video-api).

You can query the list of live videos for a Page and use the video ID to update the `sponsor_id`, or you can use the ID returned when you first create your live video.

## Updating branded content

Changes to post content with a brand ID on the web or on mobile devices are not supported. However, you can use the Marketing API to update a post to include or change a sponsor by changing the value of the `sponsor_id` field on a post object.

To add a sponsor to a post, make a `POST` call to the `/{page-post-id}` endpoint and specify a `sponsor_id`. To change the sponsor on a post, pass in a new `sponsor_id` value.

You can allow or prohibit a brand partner directly boosting a post by providing the `sponsor_id` and a change to the `direct_share_status` field.

### Example request

```
curl -X POST \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "sponsor_id=<BRAND_ID>"
  -F "direct_share_status=1" \
"https://graph.facebook.com/v25.0/<PAGE_POST_ID>"
```

### Example response

```
{  
  "success":true  
}
```

## Comments moderation

You can moderate comments on branded content posts using the `/{comment-id}` endpoint's `is_hidden` parameter. The `is_hidden` parameter lets you moderate comments even when the post was created by another Page, without needing the creator to take action.

**Note:** This is only available for comments on Page posts.

To hide a comment, send a `POST` request to the `/{comment-id}` endpoint with `is_hidden` set to `true`. Setting `is_hidden` to `false` will unhide the comment.

See the [Comment API reference](https://developers.facebook.com/docs/graph-api/reference/comment) for more information.

### Example request

```
curl -X POST \
  -F "access_token=<ACCESS_TOKEN>" \
  -F "is_hidden=true" \
"https://graph.facebook.com/v25.0/<COMMENT_ID>"
```

### Example response

```
{  
  "success":true  
}
```
