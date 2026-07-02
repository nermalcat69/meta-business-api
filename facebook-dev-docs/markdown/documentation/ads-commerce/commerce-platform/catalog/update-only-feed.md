---
title: "Adding Additional Updates to Your Shopify Feed"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/update-only-feed
---

# Adding Additional Updates to Your Shopify Feed

Updated: Feb 11, 2025

**Note:** At any point if Shopify happens to update any of the fields you’ve included in your update-feed, then the information will be overridden

## Create Your Update Feed File

When creating an update-only feed file, you **must** include the ID column. Any other column after that is optional or dependent on what you want to update. For example, if you only want to add size information and additional images, then the file looks like this:

| ID | Size | additional\_image\_link |
| --- | --- | --- |
| 30494698 | S | https://assets.mmsrg.com/isr/166325/c1/-/ASSET\_MMS\_74275961/fee\_786\_587\_png,https://assets.mmsrg.com/isr/166325/c1/-/ASSET\_MMS\_74275961/fee\_786\_599\_png,https://assets.mmsrg.com/isr/166325/c1/-/ASSET\_MMS\_74275961/fee\_786\_650\_png |
| 30494698 | M | https://assets.mmsrg.com/isr/166325/c1/-/ASSET\_MMS\_74275961/fee\_786\_587\_png,https://assets.mmsrg.com/isr/166325/c1/-/ASSET\_MMS\_74275961/fee\_786\_599\_png,https://assets.mmsrg.com/isr/166325/c1/-/ASSET\_MMS\_74275961/fee\_786\_650\_png |

**Resources**: [Data Feed Specifications⁠](https://www.facebook.com/business/help/120325381656392?id=725943027795860), [Supported Catalog Fields](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#supported-fields), [Recommended Attributes](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/cloth-access#rec-cloth-access)

## Upload Your Update Feed File

* Go to the **Data Sources** section of Commerce Manager.
  
* Under **Data Feeds**, select the Shopify feed that already exists in your catalog.
  
* Go to the feed's **Settings**

* If you want to upload a one-time update feed, select either the file option or URL depending on where your update lives. **Be sure to select 'Update Your Data Feed'** and click **Upload File**.
* If you want to this supplementary update to your catalog to be updated on a scheduled basis, select the **Update Schedule** and follow the flow to include the URL of your feed file.

If you would rather add the update feed via API, you may use the [Feed API guidance.](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api#direct-upload-feed)
