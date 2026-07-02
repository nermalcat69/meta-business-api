---
title: "Inventory"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/orders
---

# Inventory

Updated: Jun 29, 2026

Use this guide to learn about common uses and relative best practices for managing your product inventory.

## Product catalog

### Update product details

If using scheduled product feed uploads via HTTPS or SFTP in Commerce Manager, be sure that the Facebook crawler is able to pull the latest version of your feed file with all latest changes (product description, prices, and so on).

Do not cache feed files on your server or CDN.

### Enhance product descriptions

The value of the `rich_text_description` field from the product feed is visible on the Instagram PDP (falls back to `description` if `rich_text_description` is not provided). This is the only text field that is rendered on Instagram PDP.

In addition to your regular product description, you may want to append additional details to `rich_text_description`, such as: item size, volume, origin, and so on, to provide customers with more useful information about the product.

### Use one catalog for ads and commerce

If you already have an ecommerce catalog for Advantage+ catalog ads, use the same catalog for both ads and commerce. A catalog can only be connected to one Shop. You can check your catalog eligibility for Shops [About Catalog Eligibility for Facebook Shops, Business Help Center⁠](https://www.facebook.com/business/help/1205792533104321).

Learn more about additional [Best Practices for Using One Catalog, Business Help Center⁠](https://www.facebook.com/business/help/376573243388834).

## Consider a localized catalog

For international inventory, use a localized catalog in addition to a U.S. catalog.

If you have a global handle and sell your products in multiple countries and languages, you can [set up a localized catalog](https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog/localized-catalog-setup) to localize relevant information. Learn how to [create a localized catalog for shopping](https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog/localized-catalog-setup).

Your global audience can view product information in their own country or language (as you specify in your catalog setup). Language is determined by your audience’s phone or app language settings and their country is based on location. For languages and countries that have no override, the audience sees default country and language product information.

Use the same catalog for all your activity across Instagram and Facebook whether it’s commerce or Advantage+ catalog ads.

### Override for onsite checkout

When you’re using a localized catalog override for onsite checkout, you need to follow additional requirements:

* The `inventory` field must be part of your main data feed and cannot be included in the override language or country data feeds.
* Your main data feed must be in **USD** currency. Format the currency as a number, followed by the 3-digit ISO currency code [(ISO 4217 standards)⁠](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency. Use a period (“.”) as the decimal point; for example, `9.99 USD`.

Include only one (1) currency in your catalog so customers don’t see mixed currencies for products in your ads or commerce channels. To add product information and prices that will display for other countries or languages, [upload a country feed or language feed to your catalog⁠](https://www.facebook.com/business/help/2144286692311411?id=725943027795860) instead.

### Remove an override

When you want to remove an override from your catalog, set a new field (`delete`) to `true` for the override rows you want to remove.

### Considerations

* Filtering and sorting is done on the USD currency, so products might be unsorted in other localized currencies.
* Typeahead currently doesn’t support localized product information (Search itself works as expected).
* If you provide a localized product information for a given country and a particular product is missing override for this country, this product is hidden from the user in this country.
* If you don’t provide any localized product information for a given country, all products display default localized information for that country’s audience.

Learn more about [Localized Catalogs](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/localized-catalog).

## Inventory updates

### Use automated feed updates

Use automatic feeds instead of creating products manually in the UI. Feeds are more robust, less error-prone, easier to manage for larger catalogs, and a preferable way to keep your inventory in sync with your shop.

| Advantages |
| --- |
| You can easily manage a large inventory of products.   * Multiple formats of feeds are supported (CSV, Google Sheets, XML), which makes it easy to perform bulk updates of multiple products, managing variants, and product media. * Feeds are designed to be generated programmatically, making it an easy way to automate your inventory. Facebook retains the history of feed updates, which makes it easy to track changes in your inventory. * Using the feed allows you to validate your product data against the rules enforced by Facebook feed ingestion processes. * There are limitations on what fields you can edit by using manual product updates and feeds enable you to fully leverage all Facebook Commerce platform capabilities.   You can update your inventory automatically based on schedule   * Feeds can be updated as frequently as every hour by using a feed mechanism.   You can have multiple feeds updating different parts of catalogs independently on different schedules, if needed   * This simplifies management of your catalog in case you have products updated with different frequencies. * You can leverage your existing feeds solutions for other channels. |

| Disadvantages |
| --- |
| * For very small catalogs (up to 100 SKUs) not updated frequently, feeds create maintenance overhead. * There’s a delay between the feed update and product updates in the shop. |

Learn more about how to [Add Items to a Catalog, Business Help Center⁠](https://www.facebook.com/business/help/384041892421495?id=725943027795860).

### Consider a feed update for inventory updates

With the option to [**replace** your feed⁠](https://www.facebook.com/business/help/1013894008673621?id=725943027795860), your new file completely overwrites the previous file. Alternatively, if you [**update** your feed⁠](https://www.facebook.com/business/help/1013894008673621?id=725943027795860), your new file updates the items in your previous file and adds any new items. No items are deleted unless you mark them for deletion.

If you have a large inventory, update (instead of replacing) for faster feed processing.

If using scheduled product feed uploads via HTTPS or SFTP in Commerce Manager, be sure that the Facebook crawler is able to pull the latest version of your feed file with all latest changes (product description, prices, and so on). Do not cache feed files on your server or CDN.

### Choose a strategy for sending inventory updates

*The minimum scheduled feed updates frequency is hourly*. If you require more frequent inventory updates (for faster-selling inventory):

* Use the [Catalog Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api) or [Direct Feed Upload API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api) on your own cron.
* Implement a stock threshold and set the availability to “out of stock” if the product inventory is less than the threshold value.

If products are marked as “out of stock” on Instagram when they are actually “in stock” on your website, buyers may have negative experiences. When implementing inventory thresholds, make sure they are adequately small to prevent products going out of stock on Instagram. Overselling is possible, so make sure the threshold is not too small.

## Manage product visibility

When uploading product feeds, you can choose specific fields to determine whether a product is visible, whether a person can buy the product through onsite checkout, and on what channels the product is visible. Learn more about [Product Visibility Per Channel](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields/product-visibility-per-channel).

### Using onsite checkout

#### Make your product visible and available to purchase via Shops

* Set the `availability` field to `in stock` and the `inventory` count to greater than `0`.
* If you include the `visibility` field, make sure it is `published` (not `hidden`).
* If you include the `disabled_capabilities` field, make sure `SHOPS` is enabled.

#### Make your product visible in your shop (not available to purchase)

* Set the `inventory` to `0` or `availability` to `out of stock`.
* If you include the `visibility` field, make sure it is `published` (not `hidden`).
* If you include the `disabled_capabilities` field, make sure `SHOPS` is enabled.

#### Hide your product from your shop

You can use the `visibility` field and set it to `hidden`, or use `disabled_capabilities` and block `SHOPS` visibility.

Advantage+ catalog ads do not use the `inventory` field.

* If `availability` is set to `out of stock`, your product is not visible in an ad.
* If `visibility` is set to `hidden` or `staging`, your product is not visible in an ad.
* If the `disabled_capabilities` field includes `DA`, your product is not visible in an ad.

Learn more about [supported catalog fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields).

## Handle catalog validations via error report

When you upload products to your catalog — **manually** (through a one time file upload) or **automated** feed upload — Commerce Manager provides a report with any potential errors and warnings. You can download the report or view it in Commerce Manager.

### View errors for your catalog

* Navigate to [**www.facebook.com/products**](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/www.facebook.com/products) and select your catalog.
* Open the **Catalog** tab and go to **Issues**.

### View errors for individual data feed upload

* Go to the **Catalog** tab > **Data Sources**.
* Select a data feed > expand any of the **Upload Sessions** to see or download a report.

Learn how to [Troubleshoot Data Feed Errors⁠](https://www.facebook.com/business/help/2041876302542944?id=725943027795860).

## Populate commerce-relevant fields

To support your catalog inventory, required fields are available for Advantage+ catalog ads to product tagging to onsite checkout. For example, `id`, `title`, `description`, `price`, `link`, and so on. In addition, there are additional [required fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields) for commerce and Checkout. See the [About catalogs in Commerce Manager⁠](https://www.facebook.com/business/help/890714097648074) Help Center article for more information about catalogs.

When using [category-specific fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#cat-spec-fields), you must provide a category identifier — a [Google Product Category](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#google-prod-cat) or a [Facebook product category](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#fb-prod-cat). If you provide one of these category fields, you can also use [additional fields](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#supported-fields) specific to that category to provide more detailed information about your items.

### Recommendations

* When uploading a catalog for commerce and Checkout specifically, include `availability`, `inventory`, `google_product_category`, `shipping`, and `shipping_weight` along with the other required fields.
* Include all relevant fields, even if they are marked “Optional”. This helps surface relevant products to people.
* When controlling variants, group relevant products with the same `item_group_id`, and include `size` or `color` to differentiate variants.
* If your products have a discounted price, include `sale_price` and `sale_price_effective_date`.

Learn more about [commerce catalog fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields).

### Provide a product category

For a product catalog to be eligible for Checkout on Facebook or Instagram, you must provide at least one of these fields:

* `google_product_category`
* `fb_product_category`

Facebook needs the product category information on each catalog item to calculate taxes when customers check out directly on Facebook or Instagram.

See the full list of [GPC⁠](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt) and [FPC⁠](https://www.facebook.com/products/categories/en_US.txt). For both, you can use the numerical ID or the textual taxonomy string.

Learn more about [product categories for catalog items⁠](https://www.facebook.com/business/help/526764014610932?id=725943027795860).

## Product variants

### Specify product variants

Product variants are variations of the same product in your catalog that differ by size, color, or pattern. A group of variants of the same product for a product group is designated by having the same `item_group_id` field.

Specify unique attributes of each variant using the following fields:

* `size`
* `color`
* `gender`
* `pattern`
* `material`

You can also specify additional attributes using the `additional_variant_attribute` field (example value: `Scent:Fruity,Packaging:Fancy`). For a complete list of fields and formats, see the [supported catalog fields](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#supported-fields).

The attributes you specify are used to show size and color pickers on product detail pages on Facebook and Instagram.

### Provide values for all product variants

Provide values for all product variants, including out of stock variants; otherwise, the **Variants** dropdown may not render on the Instagram PDP.

* Use `sale_price` – Define whether or not the sale price should be added to the feed. In addition to a sale price, you can specify a `sale_price_effective_date`.
* Use `final_sale` status – Define whether or not the final sale information should be added to the feed.

Learn more about [product variants for catalogs⁠](https://www.facebook.com/business/help/2256580051262113?id=725943027795860) and [supported fields for catalogs](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#da-commerce).

## Use `custom_label` to define collections on arbitrary attributes

There are 5 optional custom label fields allowed in the catalog feed file, ranging from `custom_label_0` to `custom_label_4`.

If you need to define a collection of products, and are not able to use other fields, such as `size`, `color`, `price`, and so on, then you can add any custom labels in these custom fields when uploading your feed file, and use them to define your collection.

Custom labels are also used in Advantage+ catalog ads, and you can configure your ad to display the custom label field in your ad. If you use your catalog for both commerce and Advantage+ catalog ads, make sure you use different custom labels if it contains information that you don’t want to show in ads.

## Provide rich media in descriptions

You can provide up to 5,000 characters of rich format text description for an item using HTML tags, in the `rich_text_description` field. If this field is provided, it’s used instead of `description`; however, the `description` field is still required so that it can be used as a fallback if rich text cannot be rendered correctly.

Supported tags include `<b>`, `<i>`, `<em>`, `<strong>`, `<br>`, `<p>`, `<ul>`, and `<li>`. Includes all Header tags (`<h1>` through `<h6>`).

Attributes within tags are not supported.

Learn more about [Inventory, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/inventory).

## Learn more

### Catalog

* [Best Practices for Using One Catalog, Business Help Center⁠](https://www.facebook.com/business/help/376573243388834)
* [Add Items to a Catalog, Business Help Center⁠](https://www.facebook.com/business/help/384041892421495?id=725943027795860)
* [Update a Data Feed for a Catalog⁠](https://www.facebook.com/business/help/1013894008673621?id=725943027795860)
* Catalog Fields - [Commerce](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields) | [Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#da-commerce)
* [Localized Catalogs](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/localized-catalog)
* [Product Visibility Per Channel, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/fields/product-visibility-per-channel)
* [Localized Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog/localized-catalog-setup)

### Inventory

* [Inventory - Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/inventory)
* [Inventory Management on Facebook, Business Help Center⁠](https://www.facebook.com/business/help/725219397896567?id=725943027795860)

### Product categories

* [Product Category for Catalog Items, Business Help Center⁠](https://www.facebook.com/business/help/526764014610932?id=725943027795860)
* [Product Categories - Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories)

### Product variants

* [About Product Variants for Catalogs, Business Help Center⁠](https://www.facebook.com/business/help/2256580051262113?id=725943027795860)
* [Product Variants, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/variants)

### Troubleshooting

* [Troubleshoot Data Feed Errors, Business Help Center⁠](https://www.facebook.com/business/help/2041876302542944?id=725943027795860)
