---
title: "Finance and Tax"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payments
---

# Finance and Tax

Updated: Jul 11, 2023

Use this guide to learn more about how to get paid, how sales tax is calcuated, and chargebacks.

## Merchant of Record

We collect payments and tax on your behalf, but do not process the payment. We currently use PayPal as our payment processor, and will add additional processors and evaluate our existing processors on a periodic basis. Our payment processors collect and process payments, including sales taxes. **For payment processing purposes, you will be the sub-merchant of record. Our payment processor will be the main merchant of record**.

You are the seller of record and are responsible for maintaining and servicing your product listings, quality of your goods, and finance and tax reporting. With the exception of marketplace facilitator states, you are responsible for collecting and remitting tax in states where you have a tax nexus. We are not the seller of your products.

## Getting Paid

After a customer places an order from your Facebook Shop or Instagram Shopping account and you mark the order as shipped, you'll be paid for the order within 2 to 30 days. We have a standard payout period of 5 days after payment is captured, but the payment hold period can vary depending on various merchant criteria. Our payment processor will pay you out through ACH on a rolling schedule. Payouts will go to a valid bank account that you have linked during set-up.

Your balance and payout history is available at any time in the [Commerce Manager⁠](https://www.facebook.com/commerce_manager). You can create and download cash settlement reports for a given time window manually, or using our [Reporting API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts). These reports have information on transactions like sales, refunds, chargebacks and payouts. You can download a sample cash reconciliation report below.

| Report Type | Link |
| --- | --- |
| Sample Cash Settlement Report | [Download](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.8562-6/69296442_356132365263122_3667216920421072896_n.csv?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=ekq0rFZ1Pa4Q7kNvwGyeFGG&_nc_oc=AdoSYANUoR17QLkGTinlqaYmxq_DLvyBX5Nk6LK1TXx4fT6c5yodiJfMIB5qocKs6mbYw8o1LQvDhtGsfwNnpabP&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=QXwBGQqu8HSFci2qTvTJgw&_nc_ss=7b289&oh=00_AQB83Ehs7tJm8bWo9H1SDriX6hiyNPGvnUohCIRSQhaqEw&oe=6A4C03F6) |

## Sales Tax

If you sell directly on Facebook or Instagram with checkout, your sales may be subject to state and local sales tax under applicable marketplace facilitator laws. Learn about [how we determine sales tax⁠](https://www.facebook.com/business/help/1768310879858675) (Help Center article).

You can create and download tax reports in [Commerce Manager⁠](https://www.facebook.com/commerce_manager) manually, or using our [Reporting API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts). These reports include a detailed tax breakdown for each of your transactions. You can download a sample tax report below.

| Report Type | Link |
| --- | --- |
| Sample Tax Report | [Download](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.8562-6/69362095_1293484987500549_4515618921549660160_n.csv?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=ncq4E0ErKKQQ7kNvwGTm9Bu&_nc_oc=Adq_oJEGkUxnX8txuC1B9qAfmLVhLUvwJjz1n8fsFx3a-W4R6WHGV3Yw_1JM74BDfWihYWB2rLad6djKhv32D_fy&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=QXwBGQqu8HSFci2qTvTJgw&_nc_ss=7b289&oh=00_AQBLCKdQ-6eHjv0PbZgFmF1ZPizwbXjgHdDiRSW47tdmMA&oe=6A4C33AE) |

[Learn more about payouts and financial reporting in our Help Center.⁠](https://www.facebook.com/business/help/2244087555906369)

## Chargeback

You are ultimately responsible for chargebacks and the associated fees that are incurred if the chargeback is decided against you. When a chargeback is received, funds in your account will be placed on hold.

In the event that you do receive a chargeback, you will be notified and will be given an opportunity to dispute the claim. You will have 10 days from the date and time that the chargeback was received to respond to the claim. To dispute the chargeback, you will be asked to provide evidence that the transaction was legitimate and you fulfilled your obligations to the buyer. This may include proof of fulfillment, proof of refund, or other documentation.

If you do not respond or if the chargeback is decided against you, the amount requested in the chargeback along with any related fees will be automatically deducted from your account.

[Learn more about chargeback representment in our Help Center.⁠](https://www.facebook.com/business/help/445031409367739)
