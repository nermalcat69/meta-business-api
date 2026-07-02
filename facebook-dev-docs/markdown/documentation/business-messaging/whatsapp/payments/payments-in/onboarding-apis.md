---
title: "Payments API \u2014 India"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/onboarding-apis
---

# Payments API — India

Updated: May 21, 2026

The Payments API enables you to accept payments from your customers through all UPI apps installed on their devices and other payment methods such as cards, NetBanking, and wallets via WhatsApp.

You can send invoice (`order_details`) messages to your customers, then get notified about payment status updates through webhook notifications from the payment gateway.

## Compare the integration models

The integration model you use depends on your payment gateway. The two models differ in the following ways:

* **[UPI Intent Mode](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/upi-intent)**: You can use this mode with any payment gateway that supports UPI Intent generation.
* **[Payment Gateway Deep Integration Mode](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg)**: Currently supported for Razorpay, PayU, Billdesk, and Zaakpay only.

| User experience | UPI Intent Mode | Payment Gateway Deep Integration Mode |
| --- | --- | --- |
| **Native support for "Other payment methods"**  For example: NetBanking, cards, wallets | ❌  Alternative: Send payment links | ✅ |
| **Native support for UPI Intent** | ✅ | ✅ |
| **Native Payment Status Notification** | ❌ | ✅ |

| Integration features | UPI Intent Mode | Payment Gateway Deep Integration Mode |
| --- | --- | --- |
| **Refunds from WhatsApp APIs** | ❌ | ✅ |
| **Payment Status from WhatsApp webhooks** | ❌ | ✅ |

## Prerequisites for integration

* **Essential Payments APIs are available at SP/TP**
* **Access to merchant order trigger APIs / CSVs** needed to trigger an order. (for example, amount, goods, or service details)
* **Access to payment posting APIs** needed to close an order (for example, ticket generation APIs to create tickets once payment is received)

### Full payment gateway deep integration mode

* **Find out payment gateway account owner**: This authorizes linking the account to Meta Business Suite.

### UPI Intent mode

* **Find out VPA IDs, MCC, and PC** for your business from the merchant's payment gateway.
* **Access to payment gateway API docs**:
* UPI Intent S2S calls
* Webhook configuration for payment status

## Example use cases and features needed

| Use case | Essential feature set |
| --- | --- |
| **Buying Tickets**  For example: Metro, bus, event tickets | * Order Details Message * Payment Status Webhook/API * Order Status Message * Refund |
| **Payment Reminders**  For example: Bill payments, subscription renewals, insurance renewals | * Order Details Template * Payment Status Webhook/API * Order Status Message * Refund |

## Support

* In case you run into an issue, reach out to [direct support⁠](https://business.facebook.com/direct-support/). Make sure to choose the correct case type: **"WaBiz: Business Payments API"** so you get a faster resolution.
* [Sign up for office hours⁠](https://outlook.office365.com/owa/calendar/WhatsappBusinessPaymentsIndiaOfficeHourse@meta.com/bookings/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4UQ_4RWjyK5cyb-80o5sdB4D2az3WEaGX9cKZfrGb3TntBtDXAFpih-rhZWg_aem_yIIVrXZkiojzUvd3lqmPhQ). *Make sure to write down your issues in the form provided.*
