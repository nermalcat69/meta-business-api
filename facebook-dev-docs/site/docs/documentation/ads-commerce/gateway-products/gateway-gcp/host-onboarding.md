---
title: "Gateway Control Plane API Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding
---

# Gateway Control Plane API Reference

Updated: Feb 6, 2026

## Data Pipelines Objects

### Pipeline

| Field | Description |
| --- | --- |
| `id` *ID* | Unique id of the created gateway data pipeline. |
| `name` *String* | Name of the created gateway data pipeline. Provided in the input parameter. |
| `active` *Boolean* | Data pipeline status. Indicate if the pipeline is active or not. |
| `type` [*PipelineType*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#pipeline-type) | Type of the data pipeline. for example, `GATEWAY_PIPELINE` |
| `dataSources` [*DataSourceShallow*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#data-source) | List of data sources associated with this data pipeline. Expected to be an empty list from the create data pipeline request. |
| `dataDestinations` [*DataDestinationShallow*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#data-destination) | List of data destinations associated with this data pipeline. Expected to be an empty list from the create data pipeline request. |
| `dataFilter` [*DataFilter*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#data-filter) | The data filter contains a list of blocked event types which are associated with this data pipeline. Expected to be an empty list from the create data pipeline request. |

### DataSource

| Field | Description |
| --- | --- |
| `id` *ID* | Unique identifier of the data source. |
| `name` *String* | Name of the data source. |
| `type` [*DataSourceType*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#data-source-type) | Type of the data source. |
| `active` *Boolean* | The status of the data source indicates if it is active or not. |
| `associatedPipelines` [*PipelineBasicInfo*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#pipeline-basic-info) | A list of data pipelines which contain this data source. |

### DataDestination

| Field | Description |
| --- | --- |
| `id` *ID* | Unique identifier of the data destination. |
| `name` *String* | Name of the data destination. |
| `type` [*DataDestinationType*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#data-destination-type) | Type of the data destination. |
| `active` *Boolean* | The status of the data destination indicates if it is active or not. |
| `associatedPipelines` [*PipelineBasicInfo*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#pipeline-basic-info) | A list of data pipelines which contain this data destination. |

### DataFilter

| Field | Description |
| --- | --- |
| `filterStatus` *Boolean* | The status of the data filter indicates if the filter is active or not. |
| `blockedEventTypes`  [*String*] | A list of blocked event type names. The blocked events won’t be processed by the data pipeline. |

### PipelineDestinationFilter

| Field | Description |
| --- | --- |
| `id` *ID* | Unique id of the created gateway data pipeline. |
| `destinationId` *ID* | Unique identifier of the data destination. |
| `destinationFilterStatus` *Boolean* | The status of the pipeline destination filter indicates if the filter is active or not. |
| `destinationFilterBlockedEventTypes`  [*String*] | A list of blocked event type names. The blocked events won’t be processed by the data destination in the specific data pipeline. |

### GatewayPixelConfig

| Field | Description |
| --- | --- |
| `id` *ID* | Unique ID of the created Signals Gateway Pixel. |
| `name` *String* | Name of the Signals Gateway Pixel. |
| `enabledStatus` *Boolean* | The status of the Signals Gateway Pixel indicates if it is active or not. |
| `plugins`  [*String*] | A list of enabled plugins for the Signals Gateway Pixel. |
| `aamFields`  [*String*] | The enabled advanced matching fields. |
| `enableContactDataHash` *Boolean* | Indicate if the data hash is enabled for the Signals Gateway Pixel. |
| `customIntegrityScript` *String* | The custom integrity script applied to the Signals Gateway Pixel. |
| `estRuleGroups`  [*PixelESTRuleGroupConfig*] | A list of event setup rules. |
| `iwlParameters`  [*PixelIWLParametersConfig*] | A list of IWL parameters. |
| `creationSourcePlatform` *String* | The creation source platform of the Signals Gateway Pixel. It can be from Signals Gateway or imported from Meta Pixel. |
| `creationSourceId` *String* | The creation source ID of the Signals Gateway Pixel. It can be the imported Meta Pixel ID. |

### PipelineBasicInfo

| Field | Description |
| --- | --- |
| `id` *ID* | Unique id of the created gateway data pipeline. |
| `name` *String* | Name of the created gateway data pipeline. Provided in the input parameter. |
| `type` *PipelineType* | Type of the data pipeline. for example, `GATEWAY_PIPELINE`. |

### ApiKeyAuth

| Field | Description |
| --- | --- |
| `name` *String* | Name of the API key auth. |
| `value` *String* | Value of the API key auth. |
| `addTo` [*AddAuthTo*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#add-auth-to) | The part of the request to add auth to. |

### BasicAuth

| Field | Description |
| --- | --- |
| `credentials` *String* | Credentials of the basic auth. |

### ClientCredentialsAuth

| Value | Description |
| --- | --- |
| `authEndpoint` *String* | This is the URL of the authorization endpoint that the client will use to obtain an access token. The client will send a request to this endpoint to authenticate and obtain a token. |
| `httpMethod` [*HttpMethodType*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/host-onboarding#http-method-type) | This specifies the HTTP method (for example, `POST`, `GET`, etc.) that the client will use to send the authentication request to the authEndpoint. |
| `clientId` *String* | This is a unique identifier for the client (for example, an application or a service) that is requesting access to the server. The clientId is used to identify the client and is typically provided by the server during the registration process. |
| `clientSecret` *String* | This is a secret key that is associated with the clientId. The clientSecret is used to authenticate the client and is typically kept confidential to prevent unauthorized access. |

### JsonWebTokenAuth

| Field | Description |
| --- | --- |
| `serviceUserAccount` *String* | This is the account name of the service user that is used to authenticate with the server. The service user account is typically a unique identifier for the client. |
| `privateKey` *String* | This is the private key associated with the service user account. The private key is used to sign the JWT token, which is then sent to the server as part of the authentication request. |

### DataSourceType

| Type |
| --- |
| META\_PIXEL |
| ADVERTISER\_HOSTED\_PIXEL |
| FILE\_UPLOAD |
| UNKNOWN |

### DataDestinationType

| Type |
| --- |
| META\_CONVERSIONS\_API |
| CUSTOM\_HTTP\_API |
| AUDIENCE\_STORAGE |
| GOOGLE\_BIGQUERY\_API |
| UNKNOWN |

### PipelineType

| Type |
| --- |
| META\_CAPI\_PIPELINE |
| GATEWAY\_PIPELINE |

### HttpMethodType

| Type |
| --- |
| GET |
| POST |
| PUT |
| UNKNOWN |

### AuthType

| Type |
| --- |
| NONE |
| API\_KEY |
| BASIC |
| CLIENT\_CREDENTIALS |
| JSON\_WEB\_TOKEN |
| UNKNOWN |

### AddAuthTo

| Type |
| --- |
| HEADER |
| QUERY\_PARAM |
| UNKNOWN |
