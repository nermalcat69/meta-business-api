---
title: "Product Variants"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/collections
---

# Product Variants

Updated: May 5, 2023

Product variants are created by adding multiple products grouped by the same `item_group_id` field. This field typically corresponds to the parent SKU, although you can use any other ID to group variants together.

All variants for a given product `item_group_id` **must have populated every variant field** (for example, size, color, gender, and pattern). For custom variants, you can use the `additional_variant_attribute` field.

Make sure the `item_group_id` has the same value across all sizes and colors, and that images and external links match the color of the item.

![Facebook Shop product page for 'Facebook T-Shirt (Unisex)' showing blue and small variant dropdowns and a Checkout button](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/61583222_379534799351878_8410462704862494720_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=30-p5wLuWpcQ7kNvwHEvtGa&_nc_oc=Adqe8mKvk481VHy62JH_rsVGIptfhEiwpxyBIxDFCHMrQ4bIzENgVr2QwdKmT9zpoS6C_CO8mj9F7h5djYK-yYra&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=ux0QRPQ8QkZdtRg5UpeTlQ&_nc_ss=7b289&oh=00_AQATeapsobqX2XToZ_EJdWu1W5p5uwI7y3Pt6KxjMfF_KQ&oe=6A6089B4)

**Incorrect** — "CoolShirt123" is sent as a parent SKU and the color field is not populated. Because each line item in the field spec needs to be its own product, this is an incorrect way of setting up products.

| ID | Name | Color | Price | item\_group\_id |
| --- | --- | --- | --- | --- |
| CoolShirt123 | Cool shirt (parent) |  | $9.99 | CoolShirt123 |
| CoolShirt123\_red | Cool Shirt - Red | red | $9.99 | CoolShirt123 |
| CoolShirt123\_blue | Cool Shirt - Blue | blue | $9.99 | CoolShirt123 |

**Correct** — This example shows the correct way to set up products. The name of the product and the `item_group_id` fields match (so that the name does not change when variants are selected, but images do). Both of the items below would roll into one "virtual" parent item.

| ID | Name | Color | Price | item\_group\_id |
| --- | --- | --- | --- | --- |
| CoolShirt123\_red | Cool Shirt | red | $9.99 | CoolShirt123 |
| CoolShirt123\_blue | Cool Shirt | blue | $9.99 | CoolShirt123 |

For details about the fields, see [Reference](https://developers.facebook.com/documentation/ads-commerce/catalog/reference).

## Product Group Variants Example

You can specify variants for a product in the form of a product group. An example of variants is a tee-shirt with 3 sizes (S, M, L) and 4 colors (Red, Yellow, Blue, Green). In this case, we can create a product group (with retailer id as tee-shirt and 12 individual products consisting of the variant options (S+Red, M+Red, L+Red, S+Yellow, M+Yellow, L+Yellow, S+Blue, M+Blue, L+Blue, S+Green, M+Green, L+Green).

Include these columns for the product\_group in the product feed. The other required columns are excluded from this example for simplicity's sake, but you need to specify them in the actual feed file.

| ID | item\_group\_id | Size | Color |
| --- | --- | --- | --- |
| tee-shirt-S-Red | tee-shirt | S | Red |
| tee-shirt-M-Red | tee-shirt | M | Red |
| tee-shirt-L-Red | tee-shirt | L | Red |
| tee-shirt-S-Yellow | tee-shirt | S | Yellow |
| tee-shirt-M-Yellow | tee-shirt | M | Yellow |
| tee-shirt-L-Yellow | tee-shirt | L | Yellow |
| tee-shirt-S-Blue | tee-shirt | S | Blue |
| tee-shirt-M-Blue | tee-shirt | M | Blue |
| tee-shirt-L-Blue | tee-shirt | L | Blue |
| tee-shirt-S-Green | tee-shirt | S | Green |
| tee-shirt-M-Green | tee-shirt | M | Green |
| tee-shirt-L-Green | tee-shirt | L | Green |
