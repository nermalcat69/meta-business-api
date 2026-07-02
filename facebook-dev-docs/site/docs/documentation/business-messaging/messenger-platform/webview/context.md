---
title: "Manage permissions"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webview/context
---

# Manage permissions

Updated: Apr 22, 2026

When a person starts a conversation with your Messenger bot, they implicitly grant the following permissions:

| Permission | Scope | Description |
| --- | --- | --- |
| `user_profile` | Per user, per bot. | Once granted, the developer may call the [user profile](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/user-profile) API to obtain more information about the user. |
| `user_messaging` | Per user, per bot. | Once granted, the bot may [message the user personally](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/send-api) in a user-to-bot thread. |

There may be other situations where only one (or neither) is granted, such as encountering your bot via a plugin or ad, or encountering a Page shared by a friend from a conversation on Messenger.

## Requesting a Permission

The `askPermission()` method of the Messenger Extensions SDK allows you to request a specific permission from the person that opened the webview. When called, a dialog asking them to grant the requested permission will be displayed.

For a complete list of method parameters, see the [askPermission() Reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/overview).

```
```
MessengerExtensions.askPermission(  
  function(permission_response) {  
    // Person grants or rejects the asked permission.  
    let permissions = permission_response.permissions; // list of all permissions granted  
    let isGranted = permission_response.isGranted;  
  
    if (isGranted) {  
      // User has granted user_profile permission  
    }  
  
  }, function(errorCode, errorMessage) {  
    // Error occurred  
  },  
  "user_profile"  
);
```
```

The method returns the following object to the success callback after the person responds to the request:

```
{
  "isGranted":true,
  "permissions":[
    "user_profile",
    "user_messaging"
  ]
}
```

Note that the success callback is called regardless of whether the person granted or rejected your permission request. To determine if the permission was granted, use the `is_granted` property of the response.

## Retrieving a List of Current Permissions

The `getGrantedPermissions()` method of the Messenger Extensions SDK returns a list of permissions that are currently granted to you by the person that opened the webview.

You might use this information to first display context and set expectations for a given request. It does not produce any visible UI change.

For a complete list of method parameters, see the [getGrantedPermissions() Reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger-extensions-sdk/getGrantedPermissions).

```
```
MessengerExtensions.getGrantedPermissions(function (permissions_response) {  
  let permission = permissions_response.permissions // list of permissions granted  
}, function() {  
  // An error occurred  
});
```
```

The method returns an array of the permissions that are currently granted to you in the `permissions` property of the following object:

```
{
  "permissions":[
    "user_profile",
    "user_messaging"
  ]
}
```
