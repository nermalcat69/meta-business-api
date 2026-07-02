---
title: "Validate the Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema
---

# Validate the Integration

Updated: Dec 2, 2020

In order to verify the status of the integration there you need to make sure that the setup is correct.

## Requirements

* App ID for OMS integration, app ID for catalog integration is it is different from OMS app ID.
* Test commerce merchant settings (CMS) ID that was used for implementation which is mimicking a merchant setup and belongs to another business manager then the platform business manager that has the OMS app.
* Test catalog ID that is linked to test CMS ID.

## API Verification

There are few steps to verify each stage of the integration: onboarding, catalog setup, order management and finance reconciliation.

## Onboarding

There are two ways to onboard new partner: manual or via commerce manager redirect with OBO.

### Common checks are

* Test CMS is fully onboarded to Facebook shop.
* Admin of the Facebook shop can see the shop with products.
* Test CMS is linked to the platform app for OMS: when placing orders the order status is “Pending acknowledgment” and not transition into “Pending”.

Specific check for each path are

### Manual Onboarding

* OMS App is added to test CMS business manager and have permissions to manage catalog and page.

### CM + OBO:

* Facebook login permission is implemented.
* OBO calls were executed for CMS: OBO between BMs is set up, the system user is created in merchant BM, it has required assets, the token to manage the catalog and orders was generated.
* Platform UI to start redirect flow is implemented.

## Catalog

There are three options how to work with catalog and inventory: scheduled feeds, Feed API and Batch API. Common check for all of them:

* Check that the test catalog has more than zero valid products that are shoppable from Facebook shop by the page admin. Pixel is attached to the test catalog.

### Scheduled Feed

* Test catalog has at least one feed setup with a schedule that is regularly executed.

### Feed API

* Feed API calls are successful.
* Error report or diagnostic report is pulled via end point.

### Batch API

* Both Batch API calls are implemented

## Order Management

* Pull/webhook for new orders: you receive new test orders from our API for selected test shops.
* Ship: after the call order is marked as shipped and tracking number is provided in order details in UI or API. .
* Cancel: after the call order items are marked as cancelled in UI or API.
* Refund: after the refund call order is marked as refunded in UI or API and money returned to the customer account.

## Payouts

Finance payout endpoint is pulled regularly to see new payout information for the reconciliation.

## End-to-end Flow

To validate that seller experience is correct, for a test account and first onboarded seller follow [the seller test checklist](https://developers.facebook.com/docs/commerce-platform/project-guide/test-plan).
