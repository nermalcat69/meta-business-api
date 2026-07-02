---
title: "Order Lifecycle"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api
---

# Order Lifecycle

Updated: Feb 9, 2026

After a seller has been successfully onboarded and their inventory has been uploaded to Facebook, their products are ready to be purchased by consumers. The Order Management API can be used to move orders from the Commerce Platform into your service and manage their lifecycle.

This section describes the different order states, transitions, and operations:

* [Order State](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#order_state)
* [State Transitions](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#state_transitions)
* [Purchase Flow](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#purchase)
* [Acknowledgement Flow](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#acknowledgement)
* [Shipment Flow](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#shipment)
* [Cancellation Flow](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#cancellation)
* [Refund Flow](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#refund)

## Order State

Orders exist in multiple states.

| State | Description |
| --- | --- |
| `FB_PROCESSING` | Facebook is still processing this order. There is no action needed or possible on this order. This order may not advance to the `CREATED` state. `FB_PROCESSING` orders are for informative reasons only (i.e. to confirm to buyers that the order was placed. Buyers may choose to cancel the order during this state). |
| `CREATED` | Facebook has finalized the order, the seller needs to acknowledge the order to be able to act on the order. The seller can [get](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_orders) the orders and [Acknowledge](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledge_order). |
| `IN_PROGRESS` | Order is [acknowledged](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledge_order) and moved into your order management service. This state indicates that seller has to yet ship some or all items related to order. |
| `COMPLETED` | All items present in the order are [shipped](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#attach_shipment) and/or [cancelled](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order). |

## State Transitions

![State transition flowchart of an order: FB_PROCESSING to CREATED to IN_PROGRESS, looping until all items are Shipped or Cancelled, then Completed](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/67256974_672290873216174_4296512122721927168_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kw6RiViWfpkQ7kNvwHeamYK&_nc_oc=AdqV1qF6mmJDrgnSFZgz3PUq4vwSYj7MPUEUtOtlnsCg1Puz0iwacYnHTD1c-YVVR6hphuuEcMHvhlDQm5LLORlp&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=XGjSEI6wspn7wFiOOq8quA&_nc_ss=7b289&oh=00_AQDFr_v93ZMcm5Zya6Cg-F7F2MgvKT4DU-hdt-f8YGcljQ&oe=6A609A5A)

## Purchase Flow

All orders start in the `FB_PROCESSING` state. You may not take any action on orders in this state until the order has been fully processed. After the order has been successfully processed, the order is moved to the [`CREATED`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#order_state) state.

![Purchase Flow sequence diagram across Customer, Facebook, Commerce Platform, and Payment Processor: add to cart, checkout, shipping options, tax, Authorize Payment, Order Created](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/67244411_709003789518121_3014069986609070080_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NkC0rIoz05oQ7kNvwGsunOK&_nc_oc=Adpz07YgqUmoSkFjCSAxWSIkSGHhZ8K7vd4NMGCn7hJeB7EHzqh-fULXsbZ872J6-0WLqpr-7hc3xisma8QNdEUd&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=XGjSEI6wspn7wFiOOq8quA&_nc_ss=7b289&oh=00_AQCvkz4e9CuKlC5k-K00cL3nFIkLPXqnhUfInnghy8_MCA&oe=6A607023)

## Acknowledgement Flow

You can [list orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_orders) available from Facebook and move `CREATED` orders into your order management and fulfillment service by [acknowledging them](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledge_order). Acknowledged orders move to the [`IN_PROGRESS`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#order_state) state, they are then ready to be fulfilled by the seller.

![Acknowledgement Flow sequence diagram: Facebook order Created, Commerce Platform returns Orders List, Merchant registers order, Acknowledge Order moves it to In Progress](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/43074687_2122768404434821_2343160803227598848_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=UTQg_xO18HUQ7kNvwHbn4UP&_nc_oc=AdryCkCIh6ajTSjS2miwzY32mbQ74dYOT2yI3DpofLrR_Bxn7BHp3ZpQjXUjgycma4I-I3he8c1IreuTIMzq2y0p&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=XGjSEI6wspn7wFiOOq8quA&_nc_ss=7b289&oh=00_AQCrKQQECTdTTnmJVx2x1UcQ9nF7cNAGFASeSZSc-E0Csw&oe=6A609D4B)

## Shipment Flow

Sellers can [initiate a shipment](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#attach_shipment) on orders in a [`IN_PROGRESS`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#order_state) state. Once the shipment is confirmed with a tracking number, Facebook will pay out to the seller directly.

![Shipment Flow sequence diagram: Merchant processes and ships items, shipment attached via Commerce Platform, Facebook captures payment, Customer notified Items Shipped](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/67247321_1400031480138250_3090652414592679936_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zzky_w5bBp0Q7kNvwEcgrN7&_nc_oc=AdpwNuEUP-oBBJoyc73xRziOAVksEBoiIQXTWfcvWTAqFXjKfUQyuxEU3lHSGQXaF46YprrAkfqmpK-QjvwgmGWN&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=XGjSEI6wspn7wFiOOq8quA&_nc_ss=7b289&oh=00_AQCdxfO12nxMBIhLH-hDhJlvQ228okROO_83SOvYh3_eyg&oe=6A608CC4)

## Cancellation Flow

Sellers can [initiate a cancellation](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order) on orders that are in an [`IN_PROGRESS`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#order_state) state.

![Cancellation Flow sequence diagram: Merchant cancels Order/Items, relayed through Commerce Platform to Facebook, ending with Customer notified Order/Items Cancelled](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/67207646_481770465917390_8615928236586565632_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wYHNHzonfugQ7kNvwEvTP97&_nc_oc=AdojqIV50QAQawb5O_jLWKU0_-gGPPyWFGolejpYnLj-zSgMkOGwEW9RGqmvtCo0Xz-zqKgmb5aa-PDCt-vpvUbg&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=XGjSEI6wspn7wFiOOq8quA&_nc_ss=7b289&oh=00_AQB0Vp8D82JfW6Em12SsQHSww1mVOxVE1HMZ0TlK_Ma34w&oe=6A6078F1)

## Refund Flow

Sellers can [initiate a refund](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_order) on orders in a [`COMPLETED`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#order_state) state.

![Refund Flow sequence diagram: Merchant refunds shipped Order/Items via Commerce Platform to Facebook, ending with Customer notified Order/Items Refunded](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/67291920_490040745136253_6800600205159825408_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2PVONqtoNm4Q7kNvwGsKYTV&_nc_oc=Adpk9BlfSWOwPLxh--DWBv2Rfkmj117Nd88ItX82qiDEXs6_HP6E5SLOB3hwSYQzayMEQt6ctFBb8Sz-5ilBWY7h&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=XGjSEI6wspn7wFiOOq8quA&_nc_ss=7b289&oh=00_AQCwuw2t_o_cSH5fy_dgpn_uZs2simQ5CYsAv53h2X8Y1Q&oe=6A607621)
