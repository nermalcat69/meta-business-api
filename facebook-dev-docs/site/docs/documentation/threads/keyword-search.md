---
title: "Accessibility"
source_url: https://developers.facebook.com/documentation/threads/keyword-search
---

# Accessibility

Updated: Aug 21, 2024

To aid users who are visually impaired, you can use Threads API to set the accessibility label or alt text for each image or video that is attached to your post.

### Limitations

This feature isn't available for text-only posts. It will only work on image, video, and carousel posts.

## Publishing

Alt text can be configured when making a request to the `POST /threads` endpoint to [create a media object](https://developers.facebook.com/documentation/threads/posts#step-1--create-a-threads-media-container). Make sure to include the following parameter with your API request:

* `alt_text` — (For images and videos only.) The accessibility text label or description for an image or video in a Threads post.

### Example Request

```
curl -i -X POST \
  "https://graph.threads.net/v1.0/<THREADS_USER_ID>/threads?media_type=IMAGE&image_url=https://www.example.com/images/bronz-fonz.jpg&text=BronzFonz&access_token=<ACCESS_TOKEN>"
  -d alt_text="Photograph of Bronze Fonz Statue"
```

### Example Response

```
{
  "id": "1234567" // Threads Media Container ID
}
```

The request above creates a Threads post container that, [once published](https://developers.facebook.com/documentation/threads/posts#step-2--publish-a-threads-media-container), will add a custom accessibility label to your media.

## Media Retrieval

The value for alt text can be retrieved when making a request to the `GET /threads` or `GET /{threads_media_id}` endpoint to retrieve media object(s). Make sure to include the following field with your API request:

* `alt_text` — The accessibility text label or description for an image or video in a Threads post.

### Example Request

```
curl -s -X GET \
  "https://graph.threads.net/v1.0/<THREADS_MEDIA_ID>?fields=id,alt_text&access_token=<ACCESS_TOKEN>"
```

### Example Response

```
{
   "id": "12312312312123",
   "alt_text": "Photograph of Bronze Fonz Statue",
}
```
