---
title: "User Management for Hosted Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/set-up-smtp
---

# User Management for Hosted Accounts

Updated: Feb 2, 2025

Users on hosted accounts can have one of the three roles/permissions described below:

|  |  |
| --- | --- |
| **Admin** | Admin users can manage all users and permissions for their account, add, remove and update pixels, and view all applications associated with their account. |
| **Standard** | Standard users can make changes to their assigned data sources. |
| **View Only** | View only users can view data sources and associated data, and some applications, but cannot make changes. |

Every account must have at least one admin user added when the account is created. You can then add standard or view only users, or run the account with only an admin user.

The account administrator can manage the account users from the **Users** menu under **Account settings**.

![Users list under Account settings showing each user's status, accounts and permissions, with an Invite a new user button](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/456724251_867610058135924_7700545853314167650_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zvkhhdF05RQQ7kNvwHpCgJi&_nc_oc=AdpujYNUEiYzETMbklAIU3tWS5W3JYXWREgyKOUPS8vkV0c-y3EjuJTtlyqdABgYTMGdFZc641Qzpo6vA4hK9Tvb&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=XIe5OhVhqm_UipxcQve4KA&_nc_ss=7b289&oh=00_AQCGKvgGGrEY8EmDwpsY3VoCRYBKH2wasbXuTkFG86km4g&oe=6A607034)

## Add a New User to an Account

To add a new user to an account, click on **Invite a new user**, provide the user email, select the desired role/permission and click **Continue**.

![Add a new user dialog with a New user email field and options to choose a Host account user or Individual user type](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/456859558_1289225188724407_3957552813685111519_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hHQq6EN_1kwQ7kNvwHs23vt&_nc_oc=Adruyv_SrfhTDpYyUNr9zVKymgp5oaOHCUb3SRXhLUjDaSxAp-osr2foWYV8eSEGuRSX5-y6K6p4lAhAI5nBZuZ6&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=XIe5OhVhqm_UipxcQve4KA&_nc_ss=7b289&oh=00_AQCE217J6Stwh58WVypoZ4_J8n4CqNGzAXuWULCmmvZMRg&oe=6A60765E)

If the host's [SMTP is configured](https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/set-up-smtp), an invitation link will be sent to the user email address provided. An invitation link is also available to copy and send to the future host user.

If SMTP is not configured, copy the link generated and send it to the user to accept the invitation and create their host account. Finalize by clicking on **Done**.

![Add a new user dialog showing the invitation link that expires in 24 hours with a Copy link button and Done button](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/456557720_869832464538850_1784821768773064826_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=UvM0AIzMeJUQ7kNvwFmqs2r&_nc_oc=AdrlkFK2YBNCZpvBjboKA9NINIQisYQidpVXApMB86gwAxKKuEByUdEBpdZs3xBtAbfgmvO_zGN7ZdpSSyBJ9X8w&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=XIe5OhVhqm_UipxcQve4KA&_nc_ss=7b289&oh=00_AQCqYN9nYp6A9MwZ8BBzTe5PdKF9Wf3yB7FUPpdZjcoQnA&oe=6A6098E8)

If the Invitation link for a user is lost, create a new one by clicking on the **Edit** button next to the user's email and then click the **Generate invite link**.

![Edit user dialog with the user email, a Generate invite link button, Host: Admin permissions, and Revoke and Done buttons](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/475441233_1665706790989622_7126200183054587197_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fDSuSE5fZW8Q7kNvwH8yQub&_nc_oc=AdqsVJfgrJTbM3drKh-zc1vGJ2J3mK_83qmz9GnKtORzXHLGijeHsqmo-IQdfoi7Wlwol_x5fq335liljPmM3MWy&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=XIe5OhVhqm_UipxcQve4KA&_nc_ss=7b289&oh=00_AQBrj6rZYR0itu3f3UzybraU7LiDZ0rXBrsS_zTxirWpcw&oe=6A606DE0)

Click **Copy link** and send the invitation link to the new user.

![Edit user dialog showing the generated invite link in the Invite link field with a Copy link button](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/475442886_643600101338274_4201654712351544654_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=otj_V6AAW94Q7kNvwHWzwE5&_nc_oc=Adpez06Z3FufUvveU6qedJDpwJztEqLdgycRNYTbMsMRbXbQe6etOAK14UM4S70yA69jnhZQocP9W71NmNes0Jwg&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=XIe5OhVhqm_UipxcQve4KA&_nc_ss=7b289&oh=00_AQBcAtbBX8aNTjQJ5FttA5LYs5q-e9THt_4CURcEdHA1nA&oe=6A60967D)

## Change a User's Permissions in a Hosted Account

To change a user's role and permissions, click the **Edit** button for that user, then click on **Edit** in the Access section. Choose one of the three roles (Admin, Standard or View only) and confirm by clicking on **Save change**.

![Edit user dialog Permissions section with Host account user and Individual user role options and Cancel and Save buttons](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/475223330_2323306691387173_5555830745227961517_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=81CTLrQg4wUQ7kNvwF8VwHE&_nc_oc=Adp3sAReGDa2tcFXo1JVrLRLWgYgUO4GKqny8IaS1lWhp5tNjyQwYJA_ewYuWsnQeN41LJW7K9GkgZBexs5N-kqy&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=XIe5OhVhqm_UipxcQve4KA&_nc_ss=7b289&oh=00_AQAJE_ZiyOWbgxuBUFc1O-SumpBwVlaOTith1xNJDHOAlg&oe=6A607DD3)

## Reset a User's Password

To reset a user's password, start by clicking on the **Edit** button for that user.

Click the **Reset** button in the Password section. Copy the link generated and send it to the user to reset their password.

## Remove a User from an Account

To remove a user from the account, click on the **Edit** button of that user and then select **Revoke**:

## Delete an Account

An account admin or standard user can delete an account by following [these steps](https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/account-management/onboarding-and-offboarding-accounts).

## Manage User Permissions

The host users will be able to see and, if they have admin permissions, manage the users of the accounts that have delegated user management. The accounts that have delegated user management to the host will appear in the drop-down selector.
Onboarding and Offboarding Unmanaged Hosted Accounts

## See Also

* [Conversions API Gateway Overview](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway)
* [Conversions API Gateway and Signals Gateway: Set Up SMTP Configuration](https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/set-up-smtp)
* [Onboarding and Offboarding Unmanaged Hosted Accounts](https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/account-management/onboarding-and-offboarding-accounts)
