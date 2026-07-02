---
title: "User Profile API"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks
---

# User Profile API

Updated: Apr 1, 2026

The User Profile API allows you to use an Instagram Scoped ID (IGSID) to retrieve customer profile information. You can use this information to create a personalized experience for people interacting with your business.

## User consent

**User consent is required to access the user profile.** A person sets user consent only when they send a message to your business, or click icebreakers or persistent menu. If a person comments on a post or comment but has not sent a message to a business, your app receives an error, **User consent is required to access the user profile.**

### Requirements

You need:

* The `instagram_basic` permission
* The `instagram_manage_messages` permission
* The `pages_manage_metadata` permission
* The `pages_read_engagement` permission
* The `pages_show_list` permission
* A Page access token requested by a person who can perform the `MODERATE` task on the Page

### Limitations

If a customer has blocked your business, you can’t view their information.

## User profile fields

The following profile fields are available for all Graph API versions.

| Field Name | Description |
| --- | --- |
| `name`  *string* | The customer’s name (can be null if name not set) |
| `profile_pic`  *url* | The URL for the customer’s profile picture (can be null if profile pic not set). The URL expires after a few days. |
| `is_verified_user`  *boolean* | Verification status for the customer |
| `follower_count`  *int* | Follower count for the customer |
| `is_user_follow_business`  *boolean* | Indicates whether the customer follows the business or not |
| `is_business_follow_user`  *boolean* | Indicates whether the business follows the customer or not |
| `username`  *string* | The username for the customer’s Instagram account |

### Sample request

To get a customer’s profile information, send a `GET` request to the Instagram Scoped ID node for the customer and include the fields you want to view.

*Formatted for readability.*

```
curl -X GET "https://graph.facebook.com/v25.0/<INSTAGRAM_SCOPED_USER_ID>
  ?fields=name,username,profile_pic,follower_count,is_user_follow_business,is_business_follow_user
  &access_token=<PAGE_ACCESS_TOKEN>"
```

On success, your app receives the following JSON response:

```
```
{  
  "name": "Peter Chang",  
  "username": "peter_chang_live",  
  "profile_pic": "https://fbcdn-profile-...",  
  "follower_count": 1234  
  "is_user_follow_business": false,  
  "is_business_follow_user": true,  
}
```
```

### Developer Support

* Use the [Meta Status tool⁠](https://metastatus.com/) to check for the status and outages of Meta business products.
* Use the [Meta Developer Support tool](https://developers.facebook.com/support) to report bugs and view reported bugs, get help with Ads or Business Manager, and more.
