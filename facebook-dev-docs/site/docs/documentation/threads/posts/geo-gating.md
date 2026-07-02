---
title: "Text Attachments"
source_url: https://developers.facebook.com/documentation/threads/posts/geo-gating
---

# Text Attachments

Updated: Dec 15, 2025

You can create posts with text attachments using the Threads API. Text attachments allow you to share long-form writing in a post or a reply with up to 10,000 characters and a link. They can also include emojis and style formatting.

### Limitations

* Text attachments can only be attached to text-only posts.
* Text attachments cannot be attached to a post that has a poll.
* If there is already a [link attachment](https://developers.facebook.com/documentation/threads/posts#links) in the main post, a link attachment cannot be added in the text attachment.
* The number of links is restricted to 5 or less.

Starting December 22, 2025, Threads posts containing more than 5 links will fail to post during the media creation step (`POST /{threads-user-id}/threads`) with the error code: `THREADS_API__LINK_LIMIT_EXCEEDED`.

How links are counted:

* All unique URLs found in the `text` field are counted as links.
* If the `link_attachment_url` field under the `text_attachment` field contains a URL that is different from all URLs in the `text` field, it is counted as an additional link.
* If the `link_attachment_url` field under the `text_attachment` field is the same as any URL in the `text` field, it is only counted once, rather than twice.

Examples:

* If the `text` field contains only www.facebook.com, and the `link_attachment_url` is also www.facebook.com, this counts as 1 link.
* If the `text` field contains www.instagram.com and www.threads.com, and the `link_attachment_url` is www.facebook.com, this counts as 3 links.
* If the `text` field contains www.example.com, www.example.com, and www.test.com, and the `link_attachment_url` is www.test.com, this counts as 2 links (www.example.com and www.test.com are each counted once).

If you receive this error, reduce the number of unique links in your post to 5 or less.

## Create a Post with a Text Attachment

### Step 1: Create a Threads media container

You can add a text attachment to a post by making a request to the `POST /{threads-user-id}/threads` endpoint to create a media container with the `text_attachment` JSON object.

#### Parameters

| Name | Description |
| --- | --- |
| `plaintext`  string | **Required.**  The text of the text attachment with a maximum of 10K characters. |
| `link_attachment_url`  URL | **Optional.**  The URL of a link to include in the text attachment. |
| `text_with_styling_info`  string | **Optional.**  The styling info be applied to the text and where it should appear.  **Values:** `offset`, `length`, `styling_info`  **Note:** The text styling info ranges within the `text_with_styling_info` field should not overlap.  Available text styles:   * Bold * Italic * Highlight * Underline * Strikethrough |

#### Example request

```
curl -i -X POST \  
  -d "media_type=TEXT" \  
  -d "text=<TEXT>" \  
  -d "access_token=<ACCESS_TOKEN>" \  
  -d "text_attachment=  
    {  
      "plaintext": "Lengthy plain text for the text attachment.",  
      "link_attachment_url": "<LINK_URL>",  
      "text_with_styling_info":[  
        {  
          "offset": 0,  
          "length": 7,  
          "styling_info":["bold","italic"]  
        },  
        {  
          "offset": 7,  
          "length": 10,  
          "styling_info":["highlight"]  
        }]  
    }" \  
"https://graph.threads.net/v1.0/<THREADS_USER_ID>/threads"
```

#### Example response

```
{  
  "id": "<THREADS_MEDIA_CONTAINER_ID>"  
}
```

### Step 2: Publish the media container

You can [publish](https://developers.facebook.com/documentation/threads/posts#step-2--publish-a-threads-media-container) using the returned Threads media container ID to create your Threads post with a text attachment.

## Retrieve Posts with Text Attachments

Make a request to the `GET /{threads-user-id}/threads` or `GET /{threads-media-id}` endpoint with the `text_attachment` field to retrieve any media object(s) with text attachments.

### Parameters

| Name | Description |
| --- | --- |
| `text_attachment` | The text attachment for the post. |

### Example request

```
curl -i -X GET \  
  -d "access_token=<ACCESS_TOKEN>" \  
  -d "fields=id,text_attachment" \  
"https://graph.threads.net/v1.0/<THREADS_MEDIA_ID>
```

### Example response

```
{  
  "id": "<THREADS_MEDIA_ID>",  
  "text_attachment": {  
    "plaintext": "Lengthy plaintext for the text attachment.",  
    "link_attachment_url": "<LINK_URL>",  
    "text_with_styling_info": [  
      {  
        "offset": 0,  
        "length": 7,  
        "styling_info":["bold","italic"]  
      },  
      {  
        "offset": 7,  
        "length": 10,  
        "styling_info":["highlight"]  
      }]  
  }  
}
```

## Learn More

* [Posts](https://developers.facebook.com/documentation/threads/posts)
* [Retrieve User Posts](https://developers.facebook.com/documentation/threads/retrieve-and-discover-posts/retrieve-posts)
