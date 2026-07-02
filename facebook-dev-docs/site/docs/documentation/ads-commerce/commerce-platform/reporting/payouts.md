---
title: "Finance Reporting"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts
---

# Finance Reporting

Updated: Apr 29, 2024

In addition to the reports that can be generated in [Commerce Manager⁠](https://www.facebook.com/business/help/1103273406531189) we also provide a Finance API which can be used to obtain financial information for payouts, transactions and orders.

We provide the following three endpoints:

* [Payouts](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts) - get all payouts for a given time period
* [Transactions](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions) - get all transactions and orders that are associated with a given payout
* [Order Payments and Promotions](https://developers.facebook.com/docs/commerce-platform/reporting/payments-and-promotions) - get the payments and promotions for a particular order

Using the above endpoints you can recreate the Commerce Manager reports or develop your own automated reports.

For an example cash reconciliation, simply pull all payouts for a given time period using the [Payouts](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts) endpoint. This will give you a set of `payout_reference_ids` which you can then use in the [Transactions](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions) endpoint to get all orders and items associated with that payout.

## Additional resources

For additional resources check out the [Payouts and Financial Reporting⁠](https://www.facebook.com/business/help/2244087555906369) help center or follow the quick links below.

* [About Payouts and Taxes in Commerce Manager⁠](https://www.facebook.com/business/help/2244087555906369)
* [About Financial Reports and Tax Forms in Commerce Manager⁠](https://www.facebook.com/business/help/1103273406531189)
* [About Tax Settings in Commerce Manager⁠](https://www.facebook.com/business/help/1768310879858675)
* [Reconcile Cash Settlement Reports⁠](https://www.facebook.com/business/help/622689828234730)
* [Reconcile Sales Tax Reports⁠](https://www.facebook.com/business/help/1175016129348053)
* [Reconcile Reimbursement Reports⁠](https://www.facebook.com/business/help/2433181170262311)
* [About Marketplace Facilitator States and Sales Tax⁠](https://www.facebook.com/business/help/225860631518504)
* [About the Form 1099-K from Facebook⁠](https://www.facebook.com/business/help/386355878599620)
* [About the Form 1099-MISC from Facebook⁠](https://www.facebook.com/business/help/970063599855691)
* [About the Form 1099-K IRS Reporting Threshold⁠](https://www.facebook.com/business/help/2448118181883047)
* [About the Form 1099-K from Facebook for Residents of Vermont and Massachusetts⁠](https://www.facebook.com/business/help/2185765711740347)
* [About the IRS Definition of a US Person for Forms 1099-K and 1099-MISC⁠](https://www.facebook.com/business/help/288827755110798)
* [About State Tax Registration Numbers⁠](https://www.facebook.com/business/help/1768310879858675)
