---
title: "Maintaining Data Access"
source_url: https://developers.facebook.com/documentation/development/support
---

# Maintaining Data Access

Updated: Mar 25, 2024

This document lists policies and procedures that can affect your app’s ability to access Facebook data. If your app is in danger of losing access to Facebook data (or has already lost access to it) you will receive an **urgent** developer notification in your [alerts inbox](https://developers.facebook.com/documentation/development/create-an-app/app-dashboard#alerts). You may also receive a corresponding email notification, depending on how you have configured your [developer settings](https://developers.facebook.com/documentation/development/create-an-app/developer-settings).

[![](https://scontent.fdel27-2.fna.fbcdn.net/v/t15.5256-10/427834956_933676655088936_5378503930359298207_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=eedc80&_nc_ohc=0RDyJ9goW5EQ7kNvwFWKzpd&_nc_oc=AdoaI0WDcmKcKNqdow-32xWK0TTObiNE555c0NZjGMNT3DyAZLe4WLavYu4YiOzFNI25K0IxNLAv6xBKRMZBGTa9&_nc_zt=23&_nc_ht=scontent.fdel27-2.fna&_nc_gid=t279SRREZkAfhl9iOwNtPA&_nc_ss=7b289&oh=00_AQC0Q0rSSFUbLKrIVBcIQUVdNy1Cmkvu_YyN6RbWmSPH8g&oe=6A4C22E9)](https://video.fdel27-5.fna.fbcdn.net/o1/v/t2/f2/m266/AQP_NUg3w6Z78KsPw_LwGiOYQacjJ-Y2RfucGXqi_BJXH0El1AJO_CoFUJtpnQa7_wvIqeBkMoe_kFv7uPQUDSUMpsOjwXq8Ph8.mp4?strext=1&_nc_cat=105&_nc_oc=Adp1OAXtMjwGNa0hd33T8YxJ63p-1YGFRC-yoHdQxqsn2VsuOASyil28s8p2OjSbXclbcgJhy6aX1yVP7pu-6xra&_nc_sid=8bf8fe&_nc_ht=video.fdel27-5.fna.fbcdn.net&_nc_ohc=nMWSuij9jjMQ7kNvwEVoMWq&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMTkyMC5jb21wcmVzc2VkX3NvdXJjZSIsInhwdl9hc3NldF9pZCI6MjgxODc0NTMxNDcwNjgxLCJhc3NldF9hZ2VfZGF5cyI6ODQ4LCJ2aV91c2VjYXNlX2lkIjoxMDEyOCwiZHVyYXRpb25fcyI6MzM5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=t279SRREZkAfhl9iOwNtPA&_nc_ss=7b289&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQBRUI5d8Km-rJjbw2MJ-3l2hpqxLwAnchzBwI94jXuPZg&oe=6A483431&bitrate=959817&tag=compressed_source)

Find more video resources from [Data Protocol⁠](https://app.dataprotocol.com/channels/meta).

## Inactive Apps

An app may be deemed inactive if it satisfies the following conditions:

* no app users have logged into the app in the last 90 days
* the app has made no calls to either the Graph API or Marketing API in the last 90 days
* the app has received no webhook notifications in the last 90 days

Once an app has been deemed inactive, all access tokens associated with the app will be invalidated and the app will be prevented from accessing the Graph API and Marketing API until access is restored.

### Restoring Access

Admins of an inactive app who load the app in the App Dashboard will be given the option to restore the app. Restoring an app will:

* automatically upgrade it to the latest version of the Graph API and Marketing API
* re-enable webhooks notifications and upgrade them to the latest version

Old access tokens will still be invalid so new ones must be generated. Also, any permissions that were removed from the app due to disuse while it was inactive must be re-approved through the App Review process.

## Data Protection Assessment

Data Protection Assessment is a requirement for apps accessing advanced permissions that is designed to assess how developers use, share and protect Platform Data as described in the [Facebook Platform Terms](https://developers.facebook.com/terms). When enrolled, an administrator of the app will need to complete a questionnaire based on their app’s access to Platform Data.

Learn more about [Data Protection Assessment.](https://developers.facebook.com/documentation/resp-plat-initiatives/individual-processes/data-protection-assessment)

## Data Use Checkup

Data Use Checkup is an annual requirement whereby you, or another app admin, must certify that your app still accesses our APIs and uses our products and data in compliance with our [Platform Terms](https://developers.facebook.com/terms) and [Developer Policies](https://developers.facebook.com/devpolicy).

Learn more about [Data Use Checkup](https://developers.facebook.com/documentation/resp-plat-initiatives/individual-processes/data-use-checkup).

## Product Use Checkup

If you have added any [products](https://developers.facebook.com/documentation/development/create-an-app/app-dashboard#products-2) that require Product Use Certification, you must annually recertify as part of the [Data Use Checkup](https://developers.facebook.com/documentation/resp-plat-initiatives/individual-processes/data-use-checkup) process.

## Terms and Policies Violations

If you violate our [terms](https://developers.facebook.com/terms), [policies](https://developers.facebook.com/devpolicy), or allowed usages for individual [permissions](https://developers.facebook.com/docs/permissions/reference) and [features](https://developers.facebook.com/docs/apps/features-reference), your app will be [enforced](https://developers.facebook.com/documentation/development/terms-and-policies/enforcement) upon. Enforcement actions can range from limiting your app’s ability to access our APIs to revocation of individual permissions and features. You can find a list of our terms and policies in our [Terms and Policies](https://developers.facebook.com/documentation/development/terms-and-policies) documentation, as well as more information about enforcement actions and the appeals process.
