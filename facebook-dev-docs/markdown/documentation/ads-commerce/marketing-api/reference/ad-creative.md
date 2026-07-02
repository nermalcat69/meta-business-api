---
title: "Ad Account, Activities"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative
---

# Ad Account, Activities

Updated: Jun 18, 2021

Get information on key updates to an ad account and ad objects associated with it. Please note that this API returns **one week’s data by default**. Information returned includes major account status changes, updates made to budget, campaign, targeting, audiences and so on.

## Reading

Ad Activity

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

| Field | Description |
| --- | --- |
| `actor_id` *numeric string* | Actor ID |
| `actor_name` *string* | Actor Name |
| `application_id` *numeric string* | Application ID |
| `application_name` *string* | Application Name |
| `date_time_in_timezone` *string* | Date/Time string in account timezone |
| `event_time` *datetime* | Timestamp    default |
| `event_type` *enum {ad\_account\_update\_spend\_limit, ad\_account\_reset\_spend\_limit, ad\_account\_remove\_spend\_limit, ad\_account\_set\_business\_information, ad\_account\_update\_status, ad\_account\_add\_user\_to\_role, ad\_account\_remove\_user\_from\_role, add\_images, edit\_images, delete\_images, ad\_account\_update\_audience\_type\_url\_parameter, adaccount\_update\_audience\_segment, create\_adaccount\_agency\_fee, update\_adaccount\_agency\_fee, update\_adaccount\_agency\_fee\_status, ad\_account\_billing\_charge, ad\_account\_billing\_charge\_failed, ad\_account\_billing\_chargeback, ad\_account\_billing\_chargeback\_reversal, ad\_account\_billing\_decline, ad\_account\_billing\_refund, billing\_event, add\_funding\_source, remove\_funding\_source, create\_campaign\_group, update\_campaign\_name, update\_campaign\_run\_status, update\_campaign\_group\_spend\_cap, create\_campaign\_legacy, update\_campaign\_budget, campaign\_ended, update\_campaign\_group\_ad\_scheduling, update\_campaign\_group\_delivery\_type, update\_campaign\_budget\_optimization\_toggling\_status, update\_budget\_flex\_toggle\_status, update\_delivery\_type\_cross\_level\_shift, update\_campaign\_group\_high\_demand\_periods, update\_campaign\_group\_budget\_scheduling\_state, create\_campaign\_group\_agency\_fee, update\_campaign\_group\_agency\_fee, create\_ad\_set, update\_ad\_set\_bidding, update\_ad\_set\_bid\_strategy, update\_ad\_set\_budget, update\_ad\_set\_duration, update\_ad\_set\_run\_status, update\_ad\_set\_name, update\_ad\_set\_optimization\_goal, update\_ad\_set\_target\_spec, update\_ad\_set\_ad\_keywords, update\_ad\_set\_bid\_adjustments, update\_campaign\_ad\_scheduling, update\_campaign\_delivery\_destination, update\_campaign\_delivery\_type, update\_campaign\_schedule, update\_ad\_set\_spend\_cap, update\_ad\_set\_min\_spend\_target, update\_ad\_set\_learning\_stage\_status, update\_campaign\_high\_demand\_periods, update\_campaign\_budget\_scheduling\_state, update\_campaign\_conversion\_goal, update\_campaign\_value\_adjustment\_rule, update\_ad\_set\_value\_rules, update\_ad\_set\_cost\_bidding\_mode, merge\_campaigns, update\_campaign\_budget\_split, create\_ad, ad\_review\_approved, ad\_review\_declined, update\_ad\_creative, edit\_and\_update\_ad\_creative, update\_ad\_bid\_info, update\_ad\_bid\_type, update\_ad\_run\_status, update\_ad\_run\_status\_to\_be\_set\_after\_review, update\_ad\_friendly\_name, update\_ad\_targets\_spec, update\_adgroup\_stop\_delivery, update\_ad\_audience\_persona, first\_delivery\_event, create\_audience, update\_audience, delete\_audience, share\_audience, receive\_audience, unshare\_audience, remove\_shared\_audience, create\_custom\_audience\_appeal, reject\_custom\_audience\_appeal, accept\_custom\_audience\_appeal, apply\_restrictions\_custom\_audience, unknown, account\_spending\_limit\_reached, campaign\_spending\_limit\_reached, lifetime\_budget\_spent, conversion\_event\_updated, funding\_event\_initiated, funding\_event\_successful, update\_ad\_labels, di\_ad\_set\_learning\_stage\_exit}* | Event types by category: ACCOUNT `ad_review_approved`: Ad approved `ad_review_declined`: Ad not approved `ad_account_set_business_information`: Account business information updated `ad_account_update_status`: Account status updated `ad_account_add_user_to_role`: Person added to account `ad_account_remove_user_from_role`: Person removed from account `add_images`: Image added to the library `edit_images`: Image edited in library  AD `ad_review_approved`: Ad approved `ad_review_declined`: Ad not approved `create_ad`: Ad created `update_ad_creative`: Ad updated `update_ad_friendly_name`: Ad name updated `update_ad_run_status`: Ad status updated `update_ad_run_status_to_be_set_after_review`: Updated status of ad after it finishes Ad Review  AD\_KEYWORDS `update_ad_set_ad_keywords`: Ad set audience prioritization updated  AD\_SET `create_ad_set`: Ad set created `update_ad_set_bidding`: Ad set bidding updated `update_ad_set_bid_strategy`: Ad set bid strategy updated `update_ad_set_bid_adjustments`: Ad set bid adjustments updated `update_ad_set_budget`: Ad set budget updated `update_ad_set_duration`: Ad set schedule updated `update_ad_set_name`: Ad set name updated `update_ad_set_run_status`: Ad set status updated `update_ad_set_target_spec`: Ad set targeting updated `update_ad_set_ad_keywords`: Ad set audience prioritization updated  AUDIENCE `create_audience`: Custom audience created `update_audience`: Custom audience updated `delete_audience`: Custom audience deleted `share_audience`: Custom audience shared `receive_audience`: Custom audience received `unshare_audience`: Custom audience unshared `remove_shared_audience`: Shared custom audience removed `update_adgroup_stop_delivery`: Shared audience ad stopped  BID `update_ad_bid_info`: Bid updated `update_ad_bid_type`: Bidding type updated `update_ad_set_bidding`: Ad set bidding updated `update_ad_set_bid_strategy`: Ad set bid strategy updated `update_ad_set_bid_adjustments`: Ad set bid adjustments updated  BUDGET `ad_account_billing_charge`: Account billed `ad_account_billing_chargeback`: Bank refund `ad_account_billing_chargeback_reversal`: Paid (Bank refund cancelled) `ad_account_billing_decline`: Account payment method declined `ad_account_billing_refund`: Account refunded `ad_account_remove_spend_limit`: Spending limit removed `ad_account_reset_spend_limit`: Spending limit reset `ad_account_update_spend_limit`: Spending limit updated `add_funding_source`: Payment method added `billing_event`: Billing Event `funding_event_initiated`: Funding Event Initiated `funding_event_successful`: Money added to balance `remove_funding_source`: Payment method removed `update_ad_set_budget`: Ad set budget updated `update_campaign_budget`: Campaign budget updated `update_campaign_group_spend_cap`: Campaign spending limit updated  CAMPAIGN `create_campaign_legacy`: Campaign created `create_campaign_group`: Campaign created `update_campaign_duration`: Campaign schedule updated `update_campaign_name`: Campaign name updated `update_campaign_run_status`: Campaign status updated  DATE `update_campaign_duration`: Campaign schedule updated `update_ad_set_duration`: Ad set schedule updated  STATUS `ad_account_update_status`: Account status updated `update_ad_run_status`: Ad status updated `update_ad_run_status_to_be_set_after_review`: Updated status of ad after it finishes Ad Review `update_ad_set_run_status`: Ad set status updated `update_campaign_run_status`: Campaign status updated  TARGETING `update_ad_set_target_spec`: Ad set targeting updated `update_ad_targets_spec`: Ad targeting updated    default |
| `extra_data` *string* | JSON encoded extra information |
| `object_id` *numeric string* | Object ID |
| `object_name` *string* | Object Name |
| `object_type` *string* | Object Type |
| `translated_event_type` *string* | Translated event type |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
