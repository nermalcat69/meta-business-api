---
title: "Clothing, Shoes & Accessories"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/home
---

# Clothing, Shoes & Accessories

Updated: Jun 26, 2026

This category supports clothing, shoes, and footwear, and clothing accessories. See also [**additional supported attributes**](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/home#add-cloth-access).

For Google Product Category mapping, see [Apparel & Accessories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/google-product-category-to-facebook-product-category#apparel---accessories).

## Recommended attributes

Include these attributes to enrich your product details page (PDP) and help buyers during purchase consideration. Provide all recommended attributes to improve the buyer experience.

| Attribute and Type | Categories (Note, for some attributes, all sub-categories do not apply. ) | Description |
| --- | --- | --- |
| `material`  *string* | Clothing & Accessories, Sporting Goods | Primary material(s) of your item. Sample values: `Cotton`, `Linen`, `Cashmere`, `Silk`.  Provide this attribute for all products where a color, size, or material variation exists |
| `size`  *string* | Clothing & Accessories, Sporting Goods | Size as it appears on the label. Includes generic sizes, such as `Small` and `One Size`. Includes numeric sizes, such as `2`, `4`. Sample values: `Small`, `Medium`, `Large`, `2`, `4`, `6`, `One Size`. |
| `height`  *string* | Boots | Height of the product. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `5 in`, `2 ft`, `2.5 ft`. |
| `length`  *string* | Socks, Socks & Tights, Casual shirts, Dress shirts, Sporting Goods | Length of the product. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `5 in`, `2 ft`, `2.5 ft`. |
| `width`  *string* | Belts, Ties, Men's shoes, Women's shoes, Sporting Goods | Width of the product. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `5 in`, `2 ft`, `2.5 ft`. |
| `pattern`  *string* | Women's clothing, Men's clothing, Boys' Accessories, Unisex Accessories & Clothing, Shoes | Recurring design, pattern, or motif on your item. Sample values: `Plaid`, `Polka Dot`, `Gingham`, `Chevron`. |

## Additional attributes

This category also supports additional attributes for **[Clothing](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/home#add-clothing)**, **[Shoes & Footwear](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/home#add-shoes-footwear)**, **[Clothing Accessories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/home#add-clothing-access)**.

For Google Product Category mapping, see [Apparel & Accessories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories/google-product-category-to-facebook-product-category#apparel---accessories).

### Clothing

| Attribute and Type | Description |
| --- | --- |
| `activity`  *list of strings* | Particular activity for which your item is intended. Multiple values accepted. Sample values: `Tennis`, `Soccer`, `Hiking`, `Running`, `Yoga`, `Basketball`. |
| `bra_band_size`  *integer* | Band size of the bra. Sample values: `32`, `34`, `36`. |
| `bra_cup_size`  *string* | Cup size of the bra. Sample values: `A`, `B`, `DD`, `F`. |
| `character`  *string* | Particular character, person, or entity that the item represents or is associated with. Sample values: `Chewbacca`, `Spongebob`. |
| `chest_size`  *string* | Numeric size of the chest measurement for the item. Does not include generic size; for example, Small. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `47 cm`, `16.9 in`, `50 cm`, `19.7 in`. |
| `closure`  *string* | Type of fastener used to close your item. Sample values: `Zipper`, `Button`, `Snap`, `Drawstring`. |
| `clothing_size_type`  *string* | General grouping of different sizes based on age and gender. Sample values: `Big & Tall`, `Regular`, `Big Boys`, `Big Girls`, `Full Size`, `Little Boys`, `Little Girls`, `Petite`, `Plus`, `Maternity`, `Baby Boy`, `Baby Girls`, `Toddler Boys`, `Toddler Girls`. |
| `collar_style`  *string* | Style of collar on your item. Sample values: `Banded`, `Cutaway`, `Clifford`, `Tuxedo`. |
| `denim_features`  *list of strings* | Features, embellishments, and finishes, specific to jeans. Sample values: `Distressed`, `Wrinkled`, `Ripped`, `Embroidered`, `Raw Hem`.   * To provide multiple values using a single feed `denim_features` field, the acceptable input format is `'Distressed', 'Wrinkled', 'Ripped', 'Embroidered', 'Raw Hem'`. |
| `inseam`  *string* | Numeric size of the inseam for items, such as pants, jeans, and leggings. Does not include generic sizes, such as `Small`. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `30 in`, `34 in`, `80 cm`, `86 cm`. |
| `is_costume`  *boolean* | Indicates if the item is intended to be worn as a costume. Sample values: `Yes`, `No`. |
| `is_outfit_set`  *boolean* | Indicates if the product has 2 or more different items that come as part of a matching or outfit set, such as "matching shirt and pants" or "bra and underwear set". Sample values: `Yes`, `No`. |
| `jean_wash`  *string* | Post-process wash treatment that may alter color or texture of denim products. Sample values: `Acid Wash`, `Dark Wash`, `Vintage Wash`. |
| `neckline`  *string* | Neckline or neck style of the item. Sample values: `Crew Neck`, `Sweetheart`, `V-Neck`, `Boat Neck`, `Turtleneck`. |
| `pant_fit`  *string* | General fit style of pants. Also applies to jeans. Sample values: `Relaxed`, `Slim`, `Curvy`, `Cigarette`, `Boyfriend`. |
| `sheerness`  *string* | Amount of sheerness or opacity of an item. Typically used for hosiery items. Sample values: `Opaque`, `Sheer`, `Semi-Opaque`, `Semi-Sheer`, `Ultra Sheer`. |
| `size_system`  *string* | Size system used by your item; usually corresponds to the country. Sample values: `US`, `UK`, `EU`, `DE`, `FR`, `CN`, `IT`, `BR`, `MEX`, `AU`. |
| `skirt_length`  *string* | Numeric length value of skirts from waist to bottom. Does not include style values, such as `Maxi`. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `35`, `86 cm`, `44 in`, `140 cm`. |
| `sleeve_length`  *string* | Numeric length of shirt sleeves. Does not include shirt style, such as `3/4 Sleeve`. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `25 in`, `63 cm`, `29 in`, `73 cm`. |
| `sleeve_length_style`  *string* | Style of sleeve length. Does not include sleeve styles. See `sleeve_style` attribute. Sample values: `3/4 Sleeve`, `Long Sleeve`, `Short Sleeve`, `Sleeveless`. |
| `sleeve_style`  *string* | Style of sleeves. Does not include sleeve length styles. See `sleeve_length_style` attribute. Sample values: `Flutter`, `Rolled`, `Puffed`. |
| `sock_rise`  *string* | Height style of socks. Sample values: `Ankle`, `Crew`, `Knee High`, `Mid Calf`, `No Show`, `Over the Knee`, `Thigh High`. |
| `sport`  *list of strings* | Particular sport or activity for which your item is intended. Multiple values accepted. Sample values: `Tennis`, `Soccer`, `Hiking`, `Running`, `Yoga`, `Basketball`.   * To provide multiple values using a single feed `occasion` field, the acceptable input format is `'Tennis', 'Soccer', 'Hiking', 'Running', 'Yoga', 'Basketball'`. |
| `sports_league`  *string* | Particular sports league that your item represents or is associated with. Sample values: `NFL`, `NBA`, `NASCAR`. |
| `sports_team`  *string* | Particular sports team that your item represents or is associated with. Sample values: `Golden State Warriors`, `San Francisco Giants`. |
| `standard_features`  *list of strings* | Standard features related to the item. Sample values: `Waterproof`, `Water Resistant`.   * To provide multiple values using a single feed `standard_features` field, the acceptable input format is `'Water Resistant', 'Waterproof'`.   **Note**: The value inputs listed for `standard_features` are not sample values. They are the only inputs that are accepted. |
| `theme`  *string* | Particular subject, theme, or idea that your item represents or is associated with. Sample values: `Space`, `Super Heroes`, `Automobiles`. |
| `upper_body_strap_configuration`  *string* | Strap style for items, such as tops, bras, and swimsuits. Sample values: `Racerback`, `Halter`, `Strapless`. |
| `waist_rise`  *string* | Height where the waistline of the item lies on the body. Sample values: `Ultra High`, `Mid`, `Low`. |
| `waist_style`  *string* | Style of the waist for the item. Can apply to pants or dresses. Sample values: `Banded`, `Dropped`, `Empire`, `Paper Bag`. |

---

### Shoes & Footwear

| Attribute and Type | Description |
| --- | --- |
| `character`  *string* | Particular character, person, or entity that the item represents or is associated with. Sample values: `Chewbacca`, `Spongebob`. |
| `closure`  *string* | Type of fastener used to close your item. Sample values: `Zipper`, `Button`, `Snap`, `Drawstring`. |
| `fabric_care_instructions`  *list of strings* | Specific care instructions for how the fabric of your item should be cleaned. Instructions are on the item label. Sample values: `Dry Clean Only`, `Machine Washable`, `Do Not Iron`, `Hand Wash`.   * To provide multiple values using a single feed `fabric_care_instructions` field, the acceptable input format is `'Dry Clean Only', 'Machine Washable', 'Do Not Iron', 'Hand Wash'`. |
| `heel_height`  *string* | Numeric height of the heel on the shoes. The first part is the number. The second part is one of the accepted units: mm, cm, m, in, ft. Sample values: `0.5 in`, `2 in`, `7 cm`, `11 cm`. |
| `heel_style`  *string* | Style of heel on the shoes. Sample values: `Wedge`, `Block`, `Stiletto`, `Kitten`. |
| `shoe_type`  *string* | Type of shoes. Sample values: `Flats`, `Boots`, `Heels`, `Sandals`, `Slippers`, `Athletic Shoes`, `Fashion Sneakers`. |
| `shoe_width`  *string* | Width of shoes. Sample values: `A`, `B`, `EE`, `Narrow`, `Wide`. |
| `size_system`  *string* | Size system used by your item, usually corresponds to country. Sample values: `US`, `UK`, `EU`,`DE`, `FR`, `JP`, `CN`, `IT`, `BR`, `MEX`, `AU`. |
| `sport`  *list of strings* | Particular sport or activity for which your item is intended. Multiple values accepted. Sample values: `Tennis`, `Soccer`, `Hiking`, `Running`, `Yoga`, `Basketball`.   * To provide multiple values using a single feed `occasion` field, the acceptable input format is `'Tennis', 'Soccer', 'Hiking', 'Running', 'Yoga', 'Basketball'`. |
| `sports_league`  *string* | Particular sports league that your item represents or is associated with. Sample values: `NFL`, `NBA`, `NASCAR`. |
| `sports_team`  *string* | Particular sports team that your item represents or is associated with. Sample values: `Golden State Warriors`, `San Francisco Giants`. |
| `standard_features`  *list of strings* | Standard features related to the item. Sample values: `Orthopedic`, `Waterproof`, `Water Resistant`.   * To provide multiple values using a single feed `standard_features` field, the acceptable input format is `'Waterproof', 'Water Resistant', 'Orthopedic'`.   **Note**: The value inputs listed for `standard_features` are not sample values. They are the only inputs that are accepted. |

---

### Clothing Accessories

| Attribute and Type | Description |
| --- | --- |
| `character`  *string* | Particular character, person, or entity that the item represents or is associated with. Sample values: `Chewbacca`, `Spongebob`. |
| `closure`  *string* | Type of fastener used to close your item. Sample values: `Zipper`, `Button`, `Snap`, `Drawstring`. |
| `fabric_care_instructions`  *list of strings* | Specific care instructions for how the fabric of your item should be cleaned. Instructions are on the item label. Sample values: `Dry Clean Only`, `Machine Washable`, `Do Not Iron`, `Hand Wash`.   * To provide multiple values using a single feed `fabric_care_instructions` field, the acceptable input format is `'Dry Clean Only', 'Machine Washable', 'Do Not Iron', 'Hand Wash'`. |
| `is_costume`  *boolean* | Indicates if the item is intended to be worn as a costume. Sample values: `Yes`, `No`. |
| `size_system`  *string* | Size system used by your item, usually corresponds to country. Sample values: `US`, `UK`, `EU`, `DE`, `FR`, `JP`, `CN`, `IT`, `BR`, `MEX`, `AU`. |
| `sport`  *list of strings* | Particular sport or activity for which your item is intended. Multiple values accepted. Sample values: `Tennis`, `Soccer`, `Hiking`, `Running`, `Yoga`, `Basketball`.   * To provide multiple values using a single feed `occasion` field, the acceptable input format is `'Tennis', 'Soccer', 'Hiking', 'Running', 'Yoga', 'Basketball'`. |
| `sports_league`  *string* | Particular sports league that your item represents or is associated with. Sample values: `NFL`, `NBA`, `NASCAR`. |
| `sports_team`  *string* | Particular sports team that your item represents or is associated with. Sample values: `Golden State Warriors`, `San Francisco Giants`. |
| `standard_features`  *list of strings* | Standard features related to the item. Sample values: `Waterproof`, `Water Resistant`.   * To provide multiple values using a single feed `standard_features` field, the acceptable input format is `'Waterproof', 'Water Resistant'`.   **Note**: The value inputs listed for `standard_features` are not sample values. They are the only inputs that are accepted. |
| `sunglasses_lens_color`  *string* | Color of sunglasses lenses. Sample values: `Beige`, `Black`, `Blue`, `Bronze`, `Brown`, `Gold`, `Gray`, `Green`, `Multi-Color`, `Orange`, `Pink`, `Purple`, `Red`, `Silver`, `White`, `Yellow`. |
| `sunglasses_lens_technology`  *list of strings* | Technology or treatment of sunglass lenses. Multiple values accepted. Sample values: `Anti-Reflective`, `Gradient`, `Polarized`, `Photochromatic`.   * To provide multiple values using a single feed `sunglasses_lens_technology` field, the acceptable input format is `'Anti-Reflective', 'Gradient', 'Polarized', 'Photochromatic'`. |
| `sunglasses_width`  *string* | Width of the sunglasses frame. Sample values: `Narrow`, `Medium`, `Wide`. |
| `theme`  *string* | Particular subject, theme, or idea that your item represents or is associated with. Sample values: `Space`, `Super Heroes`, `Automobiles`. |
| `tie_width`  *string* | Width of tie. Sample values: `Classic`, `Skinny`, `Wide`. |

## Learn more

* [Home Decor and Furniture, Product Categories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#product-categories/home)
* [Jewelry and Watches, Product Categories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#product-categories/jewelry)
* [Health and Beauty, Product Categories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#product-categories/health-beauty)
* [Baby and Kids Products, Product Categories](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/categories#product-categories/baby-products)
