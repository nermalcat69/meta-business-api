---
title: "Conversions API Gateway and Signals Gateway Control Plane API: Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines
---

# Conversions API Gateway and Signals Gateway Control Plane API: Reference

Updated: Jun 18, 2025

Starting from Conversions API Gateway and Signals Gateway v2.2.0, up-to-date versions of the Control Plane API reference docs, including examples with sample data, can be accessed inside your gateway UI. To find these docs:

* Click on **Settings**
* Choose **API accounts**
* Click the **API Reference** link at the top of the API accounts page

## Objects

### Tenant

| Field | Description |
| --- | --- |
| `id` *String* | Unique identifier of the account |
| `name` *String* | Name of the account |
| `status` *Int* | Account status can have 3 values indicating its state:  | Value | Description | | --- | --- | | 0 | Active | | 1 | Pending Configuration | | 2 | Deactivated | |
| `canPartnerManage` *Boolean* | This flag indicates whether a partner can manage this account |
| `users` [*User*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#user) | List of users in the account |
| `availableRoles` [*Role*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#role) | Available roles for the account |
| `canEditTenantSettingsInUI` *Boolean* | This flag indicates whether user can modify account settings like Pixels, domains, and so on. |
| `canViewTenantInUI` *Boolean* | Ths flag indicates whether the user can actually view the account detail in UI. |
| `canEditTenantUsersInUI` *Boolean* | This flag indicates whether a user can add/remove users in account user list, or change their permissions. |
| `tenantUsage` *TenantUsage* | Tenant Usage info. |

### User

| Field | Description |
| --- | --- |
| `id` *String* | Unique identifier of the user |
| `email` *String* | User’s email address |
| `status` *Int* | User status can have 3 values indicating its state:  | Value | Description | | --- | --- | | 0 | Deactivated | | 1 | Activated | | 2 | Pending | |
| `roles` [*Role*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#role) | List of roles of the user |
| `tenants` [*Tenant*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#tenant) | Accounts to which the user belongs |
| `isSelf`  Boolean | This indicates whether the logged in user is the same user (would be always false with api). |
| `canBeDeleted` *Boolean* | This indicates that the user is the only admin of one/more of the accounts, so it can’t be deleted. |
| `userExpiry` *String* | Expiration date for temporary user, in the format of date string “yyyy-mm-dd”. |

### Role

| Field | Description |
| --- | --- |
| `name` *String* | Full name of the role.   Roles can be for agency (partner) users or advertisers (account) users.   Role name follows the following format:  For partner: **agency-[ROLE-ACTION]**  For advertisers: **advertiser-[ROLE-ACTION]-[tenantId]** **[ROLE-ACTION]** -- This describes the responsibility of the role. It can have one of the 3 values:   * admin * user * view   **[tenantId]** - The id of the account whose roles are being assigned to users |
| `displayName` *String* | This is the **[ROLE-ACTION]** of the role |
| `tenantName` *String* | Name of the tenant/account. |

### UserType

| Value | Description |
| --- | --- |
| AGENCY | This is for partners/host |
| ADVERTISER | This is for tenant/account. |

### SignalConfig

| Field | Description |
| --- | --- |
| `id` *ID* | Unique identifier of the format `SignalConfig:<pixel id>` |
| `connectionId` *String* | The Meta Pixel ID |
| `connectionStatus` [*ConnectionStatus*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#connection-status) | Connection status of the Meta Pixel |

### ConnectionStatus

| Field | Description |
| --- | --- |
| `id` *ID* | Unique identifier of the Meta Pixel connection `ConnectionStatus:<pixel id>` |
| `connected` *Boolean* | Indicates whether Meta Pixel ID and access token are present. |
| `active` *Boolean* | Indicating whether Meta Pixel is active or not. |
| `eventBridgeActive` *Boolean* | Indicating whether Event Bridge is active for the Meta Pixel. |
| `publishingEnabled` *Boolean* | Indicating whether events can be published. |
| `accessKey` *String* | Access Key for Event Bridge |
| `apiErrorCode` *String* | Last error code from publishing to the Meta Conversions API. Value will be of the format `<error code>.<error subcode>`. [(Reference)](https://developers.facebook.com/docs/graph-api/guides/error-handling) |
| `pixelID` *String* | The unique identifier of the Meta Pixel |
| `pixelName` *String* | Name of the Meta Pixel |
| `accessTokenAvailable` *Boolean* | Access token to publish to the Conversions API present or not |
| `totalEventsPublished` *Float* | Total events published |
| `lastPublished` *Float* | Timestamp of last event published |
| `totalEventsReceived` *Float* | Total events received |
| `lastReceived` *Float* | Timestamp of last event received |

### IngressDomain

| Field | Description |
| --- | --- |
| `id` *ID* | Unique ID for the ingress |
| `tenantName` *String* | Name of the account |
| `ingress` *String* | Advertiser domain |
| `enhancementTenantIngressVerifiedResult` [*EnhancementTenantIngressVerifiedResult*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#enhancement-tenant-ingress) | [See below](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#enhancement-tenant-ingress) |
| `cnameResolveSuccess` *Boolean* | Advertiser domain’s CName is verified |

### EnhancementTenantIngressVerifiedResult

| Field | Description |
| --- | --- |
| `id` *ID* | Unique ID for the form `<tenantId>:tenantIngressVerified` |
| `tenantIngressVerified` *Boolean* | Boolean indicating valid domain for enhancement features |

### EventFilter

| Field | Description |
| --- | --- |
| `eventName` *String* | Name of the event |
| `pixelId` *String* | The Pixel that the filter applies to. It is null if the filter is applied to all the Pixels. |
| `filterState` [*EventFilterState*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#event-filter-state) | State of the event filter |

### EventFilterState

| Value |
| --- |
| PUBLISH |
| DROP |
| MIXED |

### DomainFilter

| Field | Description |
| --- | --- |
| `eventName` *String* | Name of the domain |
| `pixelId` *String* | The Pixel that the filter applies to. It is null if the filter is applied to all the Pixels. |
| `filterState` [*DomainFilterState*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines#domain-filter-state) | State of the event filter |

### DomainFilterState

| Value |
| --- |
| PUBLISH |
| DROP |
| MIXED |

### EventTrafficSummary

| Field | Description |
| --- | --- |
| `id` *ID* | Identifier for EventTrafficSummary - always EventTrafficSummary:incoming |
| `eventNamesCount` *Int* | Count of the event names received |
| `eventsCount` *Int* | Total events received |

### ConversionsApiPublishSummary

| Field | Description |
| --- | --- |
| `id` *ID* | Identifier for ConversionsApiPublishSummary - always ConversionsApiPublishSummary:global |
| `eventNamesCount` *Int* | Count of the event names sent |
| `eventsCount` *Int* | Total events sent |
| `publishSuccessRate` *Float* | Success rate of publishing events |

### EventActivity

| Field | Description |
| --- | --- |
| `id` *ID* | Identifier for EventActivity of the format - EventActivity:`<event name>` |
| `name` *String* | Event name |
| `receivedCount` *Int* | Total events received |
| `publishedCount` *Int* | Total events published |
| `lastUpdated` *String* | Last updated time |

### DomainActivity

| Field | Description |
| --- | --- |
| `id` *ID* | Unique identifier for DomainActivity of the format - DomainActivity:`<domain name>` |
| `domainName` *String* | Domain name |
| `receivedCount` *Int* | Total events received |
| `publishedCount` *Int* | Total events published |

### TenantUsage

| Field | Description |
| --- | --- |
| `totalPixels` *Int* | Total pixels in the account |
| `totalActivePixels` *Int* | Total active pixels in the account |
| `totalInactivePixels` *Int* | Total inactive pixels in the account |
| `tenantUsageByTraffic` *TenantUsageByTraffic* | Tenant usage by traffic |
| `pixelIds` *String* | List of associated pixel ids |

### TenantUsageByTraffic

| Field | Description |
| --- | --- |
| `totalEventsReceived` *Long* | Total events received for a Tenant for a duration |
| `totalPixelsWithTraffic` *Int* | Total number of pixels with traffic for a duration |
| `publishError` *Boolean* | Error publishing to CAPI for a duration |
| `durationInHours` *Int* | The duration |
| `lastUpdatedAt` *String* | Last updated at |
