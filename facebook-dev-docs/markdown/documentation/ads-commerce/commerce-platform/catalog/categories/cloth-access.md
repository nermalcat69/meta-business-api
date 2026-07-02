---
title: "Product Categories"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/cloth-access
---

# Product Categories

Updated: Jun 26, 2026

Providing high quality information about your products helps customers discover your items and make well-informed purchase decisions.

## When to use product categories

A product category is a taxonomy that describes the specific type of items you sell. For example, **Apparel and Accessories > Clothing > Shirts and Tops**. There are two types of optional categories you can add for items in your catalog: Google product category (GPC) or Facebook product category (FPC).

In general, adding a GPC for each product is recommended. GPC may contribute to improving your ad performance and can be used to:

* Create product sets by filtering categories
* Determine whether items require a size (US only)
* Set up custom return windows per category (US only)

As an alternative, FPC can be used to:

* Determine whether items require a size (US only)
* Override the [tax category⁠](https://www.facebook.com/business/help/1768310879858675) automatically assigned to an item by Meta (US only)

Learn more about [how to add a Google or Facebook product category for items in your catalog⁠](https://www.facebook.com/business/help/526764014610932) (Help Center article).

Product category is only relevant for products (ecommerce), not for other types of catalog inventory.

## Product category taxonomies

To enhance your catalog and help customers discover your items online, enter a [Google product category (GPC)](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/cloth-access#google-prod-cat) or [Facebook product category (FPC)](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/cloth-access#fb-prod-cat) for your items and then add more information specific to each category. FPC and GPC are taxonomies that organize items for sale into categories and subcategories. You can use FPC, GPC, or both. Provide the most specific category possible for each item.

### Google product category

The Google product category (GPC) (`google_product_category`) represents the item according to the [Google’s product taxonomy⁠](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt).

Use the category’s taxonomy path or its category ID number, listed [here⁠](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt?fbclid=IwAR0US1k8zZOLliqA-fOM5pMQn3YcVU8-Vog-GpcYqqCqwMXxyiLt31aUYoo).

Example: `Apparel & Accessories > Clothing > Shirts & Tops` or `212`

---

### Facebook product category

The Facebook product category represents the item according to the Facebook product taxonomy. This taxonomy organizes products for sale into categories and subcategories. For example, **Health and Beauty** > **Beauty** > **Makeup** > **Eye Makeup** > **Mascara**.

To provide a Facebook product category for your items:

* Add the `fb_product_category` field in your data feed file.
* In this field, enter a supported category from the list below. Facebook product categories are available in [multiple languages⁠](https://www.facebook.com/business/help/526764014610932).
* Download the list of categories in your language below; for example, **U.S. English ([Plain text (.txt)⁠](https://www.facebook.com/products/categories/en_US.txt) | [Spreadsheet (.csv)⁠](http://facebook.com/products/categories/en_US.csv))**.

For each category, you can provide either the taxonomy path (such as **Health & Beauty** > **Beauty** > **Makeup** > **Eye Makeup** > **Mascara**) or the category ID number (such as **281**). Category names are not case sensitive.

When you provide a Facebook product category, you can also use additional fields specific to that category to provide more detailed information about your items.

## Tax calculations

Meta automatically assigns a category to each item in your catalog based on its title, description, and other details. Alternatively, you can provide a Facebook product category for each item yourself, which overrides Meta’s automatic category assignment. Tax rates and taxability for specific product categories vary based on state laws.

Learn more about how Meta determines [sales tax⁠](https://www.facebook.com/business/help/1768310879858675) (Help Center article).

## Category-specific fields

Providing more information about your products helps customers discover your products and make purchase decisions.

When using category-specific fields, sellers must provide a category identifier — a Google product category or a Facebook product category.

The recommended category-specific fields are all optional. You can also use additional attributes by category.

| Recommended | Additional |
| --- | --- |
| [Apparel and Accessories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/cloth-access#rec-cloth-access) | [Apparel and Accessories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/cloth-access#add-cloth-access) |
| [Home](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/home#rec-home) | [Home](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/home#add-home) |
| [Jewelry and Watches](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/jewelry#rec-jewelry-watches) | [Jewelry and Watches](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/jewelry#add-jewelry-watches) |
| [Health and Beauty](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/health-beauty#rec-health-beauty) | [Health and Beauty](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/health-beauty#add-health-beauty) |
| [Electronics](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/electronics#rec-electronics) | [Electronics](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/electronics#add-electronics) |
| [Baby Products](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/baby#rec-baby-products) | [Baby Products](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/baby#add-baby-products) |

## Learn more

### Policies and Requirements

* [Purchase Protection policies and requirements⁠](https://www.facebook.com/policies/purchase_protection)

### About Tax

* [Tax calculations](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/cloth-access#tax-calculations)
* [About tax settings in Commerce Manager, Help Center⁠](https://www.facebook.com/business/help/1768310879858675)

### Enhance your catalog

* [Best Practices, Commerce Catalog](https://developers.facebook.com/documentation/ads-commerce/catalog/best-practices)
* [How to Use Catalog Fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields#fields)
* [Supported Fields, Catalog](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#supported-fields)
* [Universal Attributes](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields#universal-basic-attributes)
* [Create a Data Feed File for Catalog Items, Help Center⁠](https://www.facebook.com/business/help/1898524300466211?id=725943027795860)
* [Data Feed Specifications for Catalogs, Help Center⁠](https://www.facebook.com/business/help/120325381656392?id=725943027795860)
* [Checkout on Facebook and Instagram, Help Center⁠](https://www.facebook.com/business/help/2509359009104717)

### Taxonomies and Categories

* [Google’s product taxonomy⁠](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt)
* [Facebook product categories, in multiple languages⁠](https://www.facebook.com/business/help/526764014610932)
* [Google product category for catalog items, Help Center⁠](https://www.facebook.com/business/help/526764014610932)

### About checkout

* [About Checkout on Facebook and Instagram, Business Help Center⁠](https://www.facebook.com/business/help/2509359009104717?id=533228987210412)
