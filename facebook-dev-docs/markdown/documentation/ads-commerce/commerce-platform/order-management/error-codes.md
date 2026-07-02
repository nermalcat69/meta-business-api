---
title: "Associate Shipping Profiles with Products"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/error-codes
---

# Associate Shipping Profiles with Products

Updated: Mar 12, 2021

Use this guide to learn how to use a manual update feed to update the `shipping_profile_reference_id` column for items in your catalog feed. Learn more about the [Shipping Profiles API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api).

## Create an Update Feed to Existing Products

This procedure assumes you have already defined shipping profiles to use on items in your catalog. Learn more about [Shipping Orders with Commerce Manager⁠](https://www.facebook.com/business/help/211403042968780?id=353836851981351&locale=en_US).

* Learn how to [**create shipping profiles in Commerce Manager**.⁠](https://www.facebook.com/business/help/211403042968780?id=353836851981351&locale=en_US)
* Gather a list of IDs of items in your catalog and the Shipping Profile Reference IDs to associate with each item.
* Create a CSV file of the following structure. You can add as many rows as you want.

```
id, shipping_profile_reference_id
product_id_0, example_reference_id_0
product_id_1, example_reference_id_1
product_id_2, example_reference_id_2
product_id_3, example_reference_id_3
product_id_4, example_reference_id_4
```

* Save this CSV file, and upload it to Commerce Manager.

## Update Your Catalog Feed

When you update your catalog feed, it does not overwrite any additional fields, and further scheduled replace feeds does not overwrite this setting.

To manually update your catalog feed, see [Upload Items to a Catalog with a Data Feed File, Business Help Center⁠](https://www.facebook.com/business/help/125074381480892?id=725943027795860)

## Add New Products to Your Current Feed

To add new product to your current feed:

* Add a new column called “shipping\_profile\_reference\_id” to your product feed.
* Add your newly created shipping profiles as a value for this column.
* Work with your PE to learn how to add a new product to your feed.

## Remove a Shipping Profile from an Item

To *undo* setting a shipping profile on an item, set the `shipping_profile_reference_id`’s column value to `-1`.

This removes all shipping profile settings on the item and causes the item to obey your shop’s default shipping profile settings.

## Learn More

* [Shipping Profiles API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api)
* [Shipping Orders with Commerce Manager⁠](https://www.facebook.com/business/help/211403042968780?id=353836851981351&locale=en_US)
* [Create a Commerce Account, Business Help Center⁠](https://www.facebook.com/business/help/842191386156027?id=533228987210412)
* [About Order Fulfillment, Business Help Center⁠](https://www.facebook.com/business/help/1111269182413656?id=454668378692696)
* [Upload Items to a Catalog with a Data Feed File⁠](https://www.facebook.com/business/help/125074381480892?id=725943027795860)
