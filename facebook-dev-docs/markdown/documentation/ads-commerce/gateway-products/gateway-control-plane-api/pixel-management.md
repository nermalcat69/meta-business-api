---
title: "Conversions API Gateway and Signals Gateway Control Plane API: Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/pixel-management
---

# Conversions API Gateway and Signals Gateway Control Plane API: Reference

Updated: Jun 18, 2025

Starting from Conversions API Gateway and Signals Gateway v2.2.0, up-to-date versions of the Control Plane API reference docs, including examples with sample data, can be accessed inside your gateway UI. To find these docs:

* Click on **Settings**
* Choose **API accounts**
* Click the **API Reference** link at the top of the API accounts page

## User Management

### Add User With Role

Adds a new user for a provided email address and role name.

#### Schema

```
POST https://{capig_domain}/hub/graphql/

---

mutation useAddUserAccountMutation(
  $addUserWithRoleInput: AddUserWithRoleInput!
) {
  userMutations {
    addUserWithRole(input: $addUserWithRoleInput) {
      userAlreadyExist
      invitationLink
      user {
        id
        email
        status
        roles {
          name
          displayName
        }
        isSelf
        canBeDeleted
        defaultTenantId
      }
    }
  }
}

---

input AddUserWithRoleInput {
    email: String!
    roleName: String!
}
```

#### Fields

`AddUserWithRoleInput`

| Field | Description |
| --- | --- |
| `email` *String* | **Required**  Email of the user |
| `roleName` *String* | **Required**  Role name of the user (See Role format) |

#### Returns

`AddUserResponse`

| Field | Description |
| --- | --- |
| `userAlreadyExist` *Boolean* | Indicates whether the user already exist |
| `invitationLink` *String* | Link to invite the user |
| `user` [*User*](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/objects#user) | User Object |

#### Error Codes

| Code | Description |
| --- | --- |
| 400 | Invalid input provided |
| 401 | Not authorized to add user |
| 404 | Role name not found or incorrect |
| 409 | User already exists in the account |
| 500 | Internal server error |

#### Sample Request

Mutation

```
mutation useAddUserAccountMutation(
 $addUserWithRoleInput: AddUserWithRoleInput!
) {
 userMutations {
   addUserWithRole(input: $addUserWithRoleInput) {
     userAlreadyExist
     invitationLink
     user {
       id
       email
       status
       roles {
         name
         displayName
       }
     }
   }
 }
}
```

Variables

```
{
   "addUserWithRoleInput": {
           "email": "tempUser1@testaccount.com",
           "roleName": "advertiser-manage-wW58k7FQ"
       }
}
```

#### Sample Response

```
{
   "data": {
       "userMutations": {
           "addUserWithRole": {
               "userAlreadyExist": false,
               "invitationLink": "http://localhost:8443/auth/verify/?token=0MGaMI_FRDe80OAgrSSdZw&et=inv&email=tempUser1@testaccount.com",
               "user": {
                   "id": "97a9753d-a469-4f23-8aa7-748e4cf86877",
                   "email": "tempuser1@testaccount.com",
                   "status": 2,
                   "roles": [
                       {
                           "name": "advertiser-manage-wW58k7FQ",
                           "displayName": "manage"
                       }
                   ]
               }
           }
       }
   }
}
```

### Change User Roles

Allow adding and revoking of user roles.

#### Schema

```
POST https://{capig_domain}/hub/graphql/

---

mutation UserAccessChangeMutation(
  $changeRoleForUserInput: ChangeRoleForUserInput!
) {
  userMutations {
    changeRoleForUser(input: $changeRoleForUserInput) {
      user {
        id
        email
        status
        roles {
          name
          displayName
        }
        isSelf
        canBeDeleted
        defaultTenantId
      }
    }
  }
}

---

input ChangeRoleForUserInput {
    userId: String!
    roleToRevoke: String
    roleToAdd: String
}
```

#### Fields

`ChangeRoleForUserInput`

| Field | Description |
| --- | --- |
| `userId` *String* | **Required**  Unique identifier of the user |
| `roleToRevoke` *String* | **Optional**  Role name to remove for the user (See Role format) |
| `roleToAdd` *String* | **Optional**  Role name to add for the user (See Role format)  A user can have only one set of permissions per advertiser/partner account. |

#### Returns

`ChangeRoleForUserResponse`

| Field | Description |
| --- | --- |
| `user` [*User*](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/objects#user) | User Object |

#### Error Codes

| Code | Description |
| --- | --- |
| 400 | Invalid input provided |
| 401 | Not authorized to revoke/add user |
| 404 | UserId/role name not found or incorrect |
| 500 | Internal server error |

#### Sample Request

Mutation

```
mutation UserAccessChangeMutation(
 $changeRoleForUserInput: ChangeRoleForUserInput!
) {
 userMutations {
   changeRoleForUser(input: $changeRoleForUserInput) {
     user {
       id
       email
       roles {
         name
         displayName
       }
     }
   }
 }
}
```

Variables

```
{
   "changeRoleForUserInput": {
           "userId": "97a9753d-a469-4f23-8aa7-748e4cf86877",
           "roleToRevoke": "advertiser-admin-wW58k7FQ",
           "roleToAdd": "agency-admin"
       }
}
```

#### Sample Response

```
{
   "data": {
       "userMutations": {
           "changeRoleForUser": {
               "user": {
                   "id": "97a9753d-a469-4f23-8aa7-748e4cf86877",
                   "email": "tempuser1@testaccount.com",
                   "roles": [
                       {
                           "name": "agency-admin",
                           "displayName": "admin"
                       }
                   ]
               }
           }
       }
   }
}
```

### Generate and Send Invitation

Generates invitation link for new users. Also, if the [SMTP feature](https://developers.facebook.com/docs/marketing-api/conversions-api/guides/gateway-multiple-accounts/host-onboarding/set-up-smtp) is enabled, then an email will be sent to the provided email address else just the output is returned.

#### Schema

```
POST https://{capig_domain}/hub/graphql/

---

mutation ActivateElementMutation(
  $sendInvitationInput: SendInvitationInput!
) {
  userMutations {
    sendInvitation(input: $sendInvitationInput)
  }
}

---

input SendInvitationInput {
    email: String!
    tenantId: String
    userType: UserType!
}
```

#### Fields

`SendInvitationInput`

| Field | Description |
| --- | --- |
| `email` *String* | **Required**  Email of the user |
| `tenantId` *String* | **Optional**  Unique identifier of the account. (For partner users, this should be null) |
| `userType` [*UserType*](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/objects#user-type) | **Required**  Type of user |

#### Returns

|  |  |
| --- | --- |
| String | Invitation link for the user |

#### Error Codes

| Code | Description |
| --- | --- |
| 400 | Invalid input provided |
| 401 | The user is not authorized to send invitation |
| 404 | Unable to find user for the `tenantId` provided |
| 500 | Internal server error |

#### Sample Request

Mutation

```
mutation ActivateElementMutation(
 $sendInvitationInput: SendInvitationInput!
) {
 userMutations {
   sendInvitation(input: $sendInvitationInput)
 }
}
```

Variables

```
{
   "sendInvitationInput": {
           "email": "tempuser1@testaccount.com",
           "tenantId": "wW58k7FQ",
           "userType": "ADVERTISER"
   }

}
```

#### Sample Response

```
"data": {
       "userMutations": {
           "sendInvitation": "http://localhost:8443/auth/verify/?token=uo3hMrl1QEeUtx5PXRoUvg&et=inv&email=tempuser1@testaccount.com"
       }
   }
```

## See Also

* [Conversions API Gateway for Multiple Accounts Control Plane API](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api)
* [Control Plane API: Reference](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference)
* [Control Plane API Reference: Account Management](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/account-management)
* [Control Plane API Reference: Pixel Management](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/pixel-management)
* [Control Plane API Reference: Account Data Routing Configuration](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/account-data-routing)
* [Control Plane API Reference: Account Event Metrics](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/account-event-metrics)
* [Control Plane API Reference: Objects](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/gateway-control-plane-api/reference/objects)
