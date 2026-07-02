---
title: "Set Up a Checkout URL"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/enable-subscriptions
---

# Set Up a Checkout URL

Updated: Dec 17, 2025

When customers make a purchase from your shop on Facebook or Instagram, the checkout process takes place on your own website. You’ll need to build a checkout URL that will allow customers to complete their shops purchases seamlessly on your website.

![Shops checkout flow: customer shops on Facebook or Instagram through Product Ads, Product Detail Page, and Cart, then Meta redirects to the seller-configured checkout URL on the seller's website.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/515507015_1245895697030091_7596074378978424260_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wP_cIKso55UQ7kNvwHexNu6&_nc_oc=AdoXlBsAf1DCtB0emnuvXWxBn4zpwHEfBBQStN6Sv42pYa9IncsP0FXZahRsgfWz-_EIcfFU0ZbnJZtSO7SOn8a4&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=bSXP79vrag1fXrXq2ULiIQ&_nc_ss=7b289&oh=00_AQDrT-VBkCEvc057l3POPDw95mf5xw8ln0uaYC6tkBuUGA&oe=6A6091BD)

*Checkout URL receives products from cart.*

## What You Need to Provide

You will need to provide a checkout URL that can receive cart information:

* Product IDs
* Quantities
* Coupons

Once you build your checkout URL, you can test your checkout by adding products and promo codes. Make sure the products you’ve selected appear in your website’s checkout with the right quantity and price, and that your subtotal is accurate. If you’ve added a promo code, make sure it’s been applied. Meta will also automatically review your website’s checkout experience on a periodic basis to ensure it’s working properly.

## How to Build Your Checkout URL

### Step 1. Create a checkout URL endpoint

An endpoint will need to exist on your website that Meta can use to direct users to check out on your website. This may be an existing page or a dedicated one you create for this experience.

Example of an endpoint: https://www.example.com/checkout

### Step 2. Handle products

You will receive a comma-separated list of products in the **products query string parameter**. For each product, the ID and quantity are separated by a colon. Commas (%2C) and colons (%3A) are escaped according to RFC 3986.

Example of how your URL handles products: https://www.example.com/checkout?products=12345%3A3%2C23456%3A1

**Parameter**: products=12345%3A3%2C23456%3A1

**Decoded**: products=12345:3,23456:1

| Product ID in Your Meta Catalog | Quantity |
| --- | --- |
| 12345 | 3 |
| 23456 | 1 |

### Step 3. Handle coupons

You will optionally receive a coupon to be applied in the **coupon query string parameter**. This coupon code should be validated and applied to the cart.

Example of how your URL handles coupons: https://www.example.com/checkout?products=12345%3A3%2C23456%3A1&coupon=SUMMERSALE20

**Parameter**: coupon=SUMMERSALE20

### Step 4. Display checkout

After validating the products, quantities and optional coupon, you can now display the checkout experience to the user.

Additional parameters are provided for tracking conversions (see full [reference here](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/enable-subscriptions#params-full-list)). If you perform a redirect to a different URL, be sure to pass along these parameters to that URL.

## Sample Code

The provided sample code is representative of handling needed to support a compatible checkout URL. You will need to adapt handling to meet your specific needs. Thoroughly test with your catalog to ensure customers have a smooth experience.

Select language

PythonNode.jsC#Ruby

---

```
# views.py  
from django.http import JsonResponse  
from django.views import View  
class CheckoutView(View):  
   def get(self, request):  
       products_param = request.GET.get('products', '')  
       coupon = request.GET.get('coupon', None)  
       # Parse products  
       product_quantities = {}  
       if products_param:  
           for entry in products_param.split(','):  
               try:  
                   product_id, quantity = entry.split(':')  
                   product_quantities[product_id] = int(quantity)  
               except ValueError:  
                   continue  # Skip malformed entries  
       # Build response  
       response_data = {  
           'products': product_quantities,  
           'coupon': coupon if coupon else 'No coupon applied'  
       }  
  
       return JsonResponse(response_data)  
    # urls.py  
from django.urls import path  
from .views import CheckoutView  
urlpatterns = [  
   path('checkout/', CheckoutView.as_view(), name='checkout'),  
]
```

## Testing Your Checkout URL

You will be required to use our checkout validation tool in Commerce Manager to submit your checkout URL for your shop. You will see this tool during onboarding when you first create your shop, or you can find it in your Commerce Manager settings after you have created your shop. We recommend to test following these 3 steps:

### 1. Test on a web browser:

* You can first test your URL on a web browser to ensure that your staging/production URL can properly function.
* Verify that the staging/production URL is accessible and able to parse the necessary parameters (including staging catalog product IDs) correctly.
* Confirm that these parameters generate a cart for checkout on your website in the staging/production environment.

### 2. Next, test in Commerce Manager:

* Once the web browser test is successful, go test your production checkout URL in the validation tool in Commerce Manager.
* You’ll follow steps to validate that catalog products and promo codes will appear accurately in your checkout.
* This step helps simulate the browser experience from mobile devices.
* We recommend using the production URL for this test because you can test with products available in your catalog.

### 3. Finally, test your shop in “preview” mode:

* Submit your checkout URL and publish it on your shop.
* Go to **Commerce Manager settings** > **General** > **Shops on Facebook**, then set your shop on “Preview” mode. Anyone with full admin control of your commerce account can still see a preview of your shop
* Verify that you will be able to select products and add to cart on Facebook and Instagram, and then purchase these products on your website checkout.
* When you’re ready, you can make your shop visible again in your settings.

## Best Practices to Build Your Compatible Checkout URL

### 1. Clear the cart (if needed)

If you store cart information in cookies or local storage, make sure that the cart is cleared on each call to the endpoint so that new items can be added each time. This ensures that your buyers don’t see products previously in their cart. You may add an additional parameter onto the endpoint to do this (for example: https://www.example.com/checkout?clear=true).

### 2. Add products to the cart

The products specified in the products parameter should be added to the cart with the given quantities. Please make sure that the product IDs used in your code are the same product IDs from the catalog. If the products are no longer available or out of stock, inform the user.

### 3. Apply the coupon code

If a coupon code is provided, it should also be applied to the cart. If the coupon code is invalid or expired, inform the user.

### 4. Render the checkout page

After all the required items are added to the cart, display your checkout page. To ensure a frictionless user journey, please confirm that your checkout page:

* Has guest checkout enabled (ideally it does not require signup or a login to checkout)
* Accepts products that match the content IDs in your Meta catalog
* Displays selected products, quantities and final price
* Displays applied discounts and promotions
* Displays the cart subtotal
* Does not require email opt-in again (if offered in shop)
* Includes express payment methods for fast checkout (for example: PayPal, Apple Pay, etc.)

### 5. Test your endpoint and handle errors

Test your endpoint with various product and promotional code combinations. Also consider edge cases listed below and handle them appropriately:

* Product is out of stock or invalid inventory (cart rules)
* UTM parameters will be passed in the URL, so be sure to incorporate any tracking mechanisms that you have on the checkout page to be handled for this use case
* Load time for these endpoints fits your standard SLA practices
* Promotional code is applied automatically and the discount is reflected on the page
* Ensure that the code handles URL decoding properly
* Ensure the experience is mobile-optimized
* Verify that the new endpoint is part of your approved security policies

### 6. UTM behaviors

UTM parameters will be passed in the URL, so be sure to incorporate any tracking mechanisms that you have on the checkout page to be handled for this use case.

If users navigate from the shop to your website (without directly going to your website checkout), we automatically append the following static UTM parameters to the URLs:

* `utm_source=IGShopping`
* `utm_medium=Social`

These parameters are appended for traffic coming from a shop on Instagram or Facebook. They are also added to any parameters you have already set at the product level in your catalog or data feed (for example, `utm_content`).

If you link directly to your website checkout, and users proceed from your shop’s cart to your website, we automatically append the parameter:

* `cart_origin` with a value of either ‘facebook’, ‘instagram’, or ‘meta\_shops’ depending on the source of the checkout.

`cart_origin` is appended in addition to:

* Any parameters you have set in your Checkout URL (for organic traffic); **and**
* Any UTM parameters you have set at the campaign level (for paid traffic).

## Full List of URL Parameters

| Query Parameter | Description | Examples |
| --- | --- | --- |
| `products` | A comma-separated list of products. For each product, the ID and quantity are separated by a colon. Commas (%2C) and colons (%3A) are escaped according to [RFC 3986⁠](https://datatracker.ietf.org/doc/html/rfc3986).  Your web server should provide an API similar to decodeURIComponent to parse these parameters.  Products with comma (,) or colon (:) characters in their ID are not supported. | `products=12345%3A3%2C23456%3A1`  This example cart has the following two products:   * product ID 12345 with quantity 3 and * product ID 23456 with quantity 1 |
| `coupon` | A single, optional coupon code to apply at checkout. This may include an email opt-in promo code. | `coupon=SUMMERSALE20` |
| `fbclid` | A Facebook Click ID - automatically added to all outbound links from Facebook and Instagram. | `fbclid=1234567890abcdef` |
| `cart_origin` | The source app the buyer is using to checkout. Possible values include “facebook”, “instagram”, and “meta\_shops”. These are for Facebook, Instagram and Commerce Manager respectively. | `cart_origin=instagram` |
| `utm_source` | Identifies the traffic source. Included if the originating ad included this parameter. | `utm_source=facebook` |
| `utm_medium` | Specifies the marketing channel or medium. Included if the originating ad included this parameter. | `utm_medium=paid` |
| `utm_campaign` | Identifies ad creative variations or placements. Included if the originating ad included this parameter. | `utm_campaign=2025-spring-sale` |
| `utm_content` | Identifies ad creative variations or placements. Included if the originating ad included this parameter. | `utm_content=carousel` |

## See Also

* [Catalog and Inventory](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog)
