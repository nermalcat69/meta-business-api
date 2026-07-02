---
title: "Gateway Control Plane API Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/data-destinations
---

# Gateway Control Plane API Reference

Updated: Feb 2, 2025

## APIs for Data Sources

### Create a Gateway Data Source

Create a gateway data source in Signals Gateway and return the information of the created information.

#### Schema

```
POST https://{signals_gateway_domain}/capig/graphql/

---

mutation useCreateDataSourceForPipelineMutation(
  $tenantId: ID!
  $id: ID
  $name: String!
  $type: DataSourceType!
  $pipelineId: ID!
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      createDataSourceForPipeline(
        dataSourceId: $id,
        name: $name,
        dataSourceType: $type,
        pipelineId: $pipelineId
      ) {
        id
        name
        type
        active
      }
    }
  }
}

---

tenantId: ID!

---

name: String!

---

dataSourceType: DataSourceType

---

pipelineId: ID

---

dataSourceId: ID
```

#### Input Fields

| Field | Description |
| --- | --- |
| `tenantID` *ID* | **Required**  Unique identifier for the account |
| `name` *String* | **Required**  Name of the gateway data source |
| `dataSourceType` [*DataSourceType*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#data-Source-type) | **Required**  Data source type |
| `pipelineId` *ID* | **Required**  Unique identifier for the data pipeline which contains the data source |
| `dataSourceId` *String* | Optional data source identifier |

#### Returns

DataSource

| Field | Description |
| --- | --- |
| `DataSource` [*DataSource*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#data-source) | The created data source object contains the ID, name, type, status, etc. |

#### Error Codes

| Code | Description |
| --- | --- |
| 401 | Not authorized to view event metrics |
| 500 | Internal server error |

#### Sample Request

Query

```
mutation createDataSourceForPipelineMutation(
  $tenantId: ID!
  $id: ID
  $name: String!
  $type: DataSourceType!
  $pipelineId: ID!
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      createDataSourceForPipeline(dataSourceId: $id, name: $name, dataSourceType: $type, pipelineId: $pipelineId) {
        id
        name
        type
        active
      }
    }
  }
}
```

#### Variables

```
{
  "tenantId": "zilSRUW7",
  "id": null,
  "name": "Signals Gateway Pixel 2JP0NH",
  "type": "ADVERTISER_HOSTED_PIXEL",
  "pipelineId": "sg_v1_pl_91c615ad-eea2-4151-93f7-daf89cd16154"
}
```

#### Sample Response

```
{
    "data": {
        "tenantMutations": {
            "dataSourceMutations": {
                "createDataSourceForPipeline": {
                    "id": "2898835581810297486",
                    "name": "Signals Gateway Pixel 2JP0NH",
                    "type": "ADVERTISER_HOSTED_PIXEL",
                    "active": true
                }
            }
        }
    }
}
```

### Get Data Sources

The query to get all the data sources with the fields corresponding to a unique account.

#### Schema

```
POST https://{signals_gateway_domain}/capig/graphql/

---

query dataSourceTableQuery(
  $tenantId: ID!
) {
  tenantQueries(tenantId: $tenantId) {
    dataSourcesQuery {
      id
      name
      active
      type
      associatedPipelines {
        id
        name
        type
      }
    }
  }
}

---

tenantId: ID!
```

#### Input Fields

| Field | Description |
| --- | --- |
| `tenantId` *ID* | **Required**  Unique identifier for the account |

#### Returns

DataSource list

| Field | Description |
| --- | --- |
| `DataSource` [*[DataSource]*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#data-source) | A list of data source objects contains the ID, name, type, status, etc |

#### Error Codes

| Code | Description |
| --- | --- |
| 401 | Not authorized to view the data routing |
| 500 | Internal server error |

#### Sample Request

Query

```
query dataSourceTableQuery(
  $tenantId: ID!
) {
  tenantQueries(tenantId: $tenantId) {
    dataSourcesQuery {
      id
      name
      active
      type
      associatedPipelines {
        id
        name
        type
      }
    }
  }
}
```

#### Variables

```
{
  "tenantId": "IaoreXfj"
}
```

#### Sample Response

```
{
    "data": {
        "tenantQueries": {
            "dataSourcesQuery": [
                {
                    "id": "1347507641242739748",
                    "name": "First-party App SDK Q2EX6D",
                    "active": true,
                    "type": "ADVERTISER_HOSTED_SDK",
                    "associatedPipelines": [
                        {
                            "id": "sg_v1_pl_1a8c443d-9ace-440e-9eb7-147322344723",
                            "name": "Pipeline V2E9XB",
                            "type": "GATEWAY_PIPELINE"
                        }
                    ]
                },
                {
                    "id": "1369557203321383366",
                    "name": "First-party Pixel KFLU08",
                    "active": true,
                    "type": "ADVERTISER_HOSTED_PIXEL",
                    "associatedPipelines": [
                        {
                            "id": "sg_v1_pl_69816497-e27a-4cea-ac29-6f6014754ce7",
                            "name": "Pipeline E9BHG6",
                            "type": "GATEWAY_PIPELINE"
                        }
                    ]
                },
                {
                    "id": "1493309064652337",
                    "name": "Meta Pixel (1493309064652337)",
                    "active": true,
                    "type": "META_PIXEL",
                    "associatedPipelines": [
                        {
                            "id": "sg_v1_pl_0d10d8d7-ff05-4d1e-9935-6e0f7ff9e15e",
                            "name": "Conversions API Gateway({1493309064652337})",
                            "type": "META_CAPI_PIPELINE"
                        }
                    ]
                }
            ]
        }
    }
}
```

### Update Gateway Data Source

The mutation to update the fields for a gateway data source in the Signals Gateway.

#### Schema

```
POST https://{signals_gateway_domain}/capig/graphql/

---

mutation updateDataSourceMutation(
  $tenantId: ID!
  $input: DataSourceInput!
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      updateDataSource(input: $input) {
        id
        name
        active
      }
    }
  }
}

---

tenantId: ID!

---

id: ID

---

name: String

---

dataSourceType: DataSourceType

---

active: Boolean
```

#### Input Fields

| Field | Description |
| --- | --- |
| `tenantId` *ID* | **Required**  Unique identifier for the account. |
| `id` *ID* | **Required**  Unique identifier for the data source. |
| `name` *String* | The updated name of the gateway data source. |
| `dataSourceType` [*DataSourceType*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#data-Source-type) | Data source type. |
| `active` *Boolean* | The updated status of the gateway pixel indicates if it is active or not. |

#### Returns

DataSource

| Field | Description |
| --- | --- |
| `DataSource` [*DataSource*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#data-source) | The updated data source object contains the ID, name, type, status, etc. |

#### Error Codes

| Code | Description |
| --- | --- |
| 401 | Not authorized to view the data routing |
| 500 | Internal server error |

#### Sample Request

Query

```
mutation useUpdateDataSourceMutation(
  $tenantId: ID!
  $input: DataSourceInput!
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      updateDataSource(input: $input) {
        id
        name
        active
      }
    }
  }
}
```

#### Variables

```
{
  "tenantId": "IaoreXfj",
  "input": {
    "id": "2898835581810297486",
    "name": "Signals Gateway Pixel 2JP0NH",
    "type": "ADVERTISER_HOSTED_PIXEL",
    "active": false
  }
}
```

#### Sample Response

```
{
    "data": {
        "tenantMutations": {
            "dataSourceMutations": {
                "updateDataSource": {
                    "id": "2898835581810297486",
                    "name": "Signals Gateway Pixel 2JP0NH",
                    "active": false
                }
            }
        }
    }
}
```

### Delete Data Source

The mutation to delete an existing data source in the Signals Gateway.

#### Schema

```
POST https://{signals_gateway_domain}/capig/graphql/

---

mutation deleteDataSourceMutation(
  $tenantId: ID!
  $id: ID!
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      deleteDataSource(id: $id)
    }
  }
}

---

tenantId: ID!

---

id: ID!
```

#### Input Fields

| Field | Description |
| --- | --- |
| `tenantId` *ID* | **Required**  Unique identifier for the account |
| `id` *ID* | **Required**  Unique identifier for the data source |

#### Returns

|  |  |
| --- | --- |
| `id` *ID* | Unique identifier for the deleted data source |

#### Error Codes

| Code | Description |
| --- | --- |
| 401 | Not authorized to view the data routing |
| 500 | Internal server error |

#### Sample Request

Query

```
mutation deleteDataSourceMutation(
  $tenantId: ID!
  $id: ID!
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      deleteDataSource(id: $id)
    }
  }
}
```

#### Variables

```
{
  "tenantId": "IaoreXfj",
  "id": "2898835581810297486"
}
```

#### Sample Response

```
{
    "data": {
        "tenantMutations": {
            "dataSourceMutations": {
                "deleteDataSource": "2898835581810297486"
            }
        }
    }
}
```

### Generate Gateway Pixel Data Source Header Code

The request to generate the Gateway Pixel header code snippet that is added to the header section of the advertiser's website.

#### Schema

```
POST https://{signals_gateway_domain}/capig/graphql/

---

mutation generateGatewayPixelHeaderCode (
  $tenantId: ID!
  $dataSourceId: ID!
) {
   tenantMutations(tenantId: $tenantI) {
     dataSourceMutations {
       createGatewayPixelHeaderCode(
         dataSourceId: $dataSourceId
       )
     }
   }
 }

---

tenantId: ID!

---

dataSourceId: ID!
```

#### Input Fields

| Field | Description |
| --- | --- |
| `tenantId` *ID* | **Required**  Unique identifier for the account |
| `dataSourceId` *ID* | **Required**  Unique identifier for the Signals Gateway Pixel |

#### Returns

| Field | Description |
| --- | --- |
| `string` *String* | The Signals Gateway Pixel header code snippet |

#### Error Codes

| Code | Description |
| --- | --- |
| 401 | Not authorized to view the data routing |
| 500 | Internal server error |

#### Sample Request

Query

```
mutation generateGatewayPixelHeaderCode (
  $tenantId: ID!
  $dataSourceId: ID!
) {
   tenantMutations(tenantId: $tenantI) {
     dataSourceMutations {
       createGatewayPixelHeaderCode(
         dataSourceId: $dataSourceId
       )
     }
   }
 }
```

#### Variables

```
{
  "tenantId": "IaoreXfj",
  "dataSourceId": "2898835581810297486"
}
```

#### Sample Response

```
{
 "data": {
   "tenantMutations": {
     "dataSourceMutations": {
       "createGatewayPixelHeaderCode": "<!-- Signals Gateway Pixel Code -->\n<script>\n!function(a,h,e,v,n,t,s)\n  {if(a.cbq)return;n=a.cbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n  if(!a._cbq)a._cbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n  n.queue=[];t=h.createElement(e);t.async=!0;\n  t.src=v;s=h.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t,s)}(window, document,'script',\n  'https://test.com/sdk/2898835581810297486/events.js');\n  cbq('setHost', 'https://LocalHost/');\n  cbq('init', '3779427875530335532');\n  cbq('track', 'PageView');\n</script>\n<!-- End Signals Gateway Pixel Code -->"
     }
   }
 }
}
```

### Update Signals Gateway Pixel Configuration

The mutation to update the fields for a Signals Gateway Pixel.

#### Schema

```
POST https://{signals_gateway_domain}/capig/graphql/

---

mutation gatewayPixelDataSourceConfigMutation(
  $tenantId: ID!
  $id: String!
  $config: GatewayPixelConfigurationInput
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      updateGatewayPixelConfig(pixelId: $id, config: $config) {
        id
        name
        enabledStatus
        plugins
        aamFields
      }
    }
  }
}

---

tenantId: ID!

---

input GatewayPixelConfigurationInput {
  enabledStatus: Boolean
  enableAam: Boolean
  enableFirstPartyCookie: Boolean
  aamFields: [String!]
  enableAutomaticForkMetaPixelEvent: Boolean
  enableContactDataHash: Boolean
  customIntegrityScript: String
}
```

#### Input Fields

| Field | Description |
| --- | --- |
| `tenantId` *ID* | **Required**  Unique identifier for the account |
| `input` [*GatewayPixelConfigurationInput*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#gateway-pixel-config) | The updatable fields for the Signals Gateway Pixel |

#### [GatewayPixelConfigurationInput](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#gateway-pixel-config)

| Field | Description |
| --- | --- |
| `enabledStatus` *Boolean* | The status of the Signals Gateway Pixel indicates if it is active or not. |
| `enableAam` *Boolean* | Indicate if the advanced matching is enabled for the Signals Gateway Pixel. |
| `enableFirstPartyCookie` *Boolean* | Indicate if the first party cookie is enabled for the Signals Gateway Pixel. |
| `aamFields`  [*String*] | The enabled advanced matching fields. |
| `enableAutomaticForkMetaPixelEvent` *Boolean* | Indicate if the automatic fork is enabled for the Signals Gateway Pixel. |
| `enableContactDataHash` *Boolean* | Indicate if the data hash is enabled for the Signals Gateway Pixel. |
| `customIntegrityScript` *String* | The custom integrity script applied to the Signals Gateway Pixel. |

#### Returns

| Field | Description |
| --- | --- |
| `GatewayPixelConfig` [*GatewayPixelConfig*](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-control-plane-api/setup-data-pipelines/objects#gateway-pixel-config) | The Signals Gateway Pixel configuration after the update. |

#### Error Codes

| Code | Description |
| --- | --- |
| 401 | Not authorized to view the data routing |
| 500 | Internal server error |

#### Sample Request

Query

```
mutation gatewayPixelDataSourceConfigMutation(
  $tenantId: ID!
  $id: String!
  $config: GatewayPixelConfigurationInput
) {
  tenantMutations(tenantId: $tenantId) {
    dataSourceMutations {
      updateGatewayPixelConfig(pixelId: $id, config: $config) {
        id
        name
        enabledStatus
        plugins
        aamFields
      }
    }
  }
}
```

#### Variables

```
{
  "tenantId": "IaoreXfj",
  "id": "2898835581810297486",
  "config": {
    "enabledStatus": true,
    "enableAam": true,
    "enableAutomaticForkMetaPixelEvent": false,
    "aamFields": [
      "em",
      "fn",
      "ln",
      "ph",
      "ge",
      "ct",
      "st",
      "zp",
      "country",
      "db",
      "external_id"
    ],
    "enableContactDataHash": true
  }
}
```

#### Sample Response

```
{
    "data": {
        "tenantMutations": {
            "dataSourceMutations": {
                "updateGatewayPixelConfig": {
                    "id": "2898835581810297486",
                    "name": "Signals Gateway Pixel 2JP0NH",
                    "enabledStatus": true,
                    "plugins": [
                        "FIRST_PARTY_COOKIE",
                        "AUTOMATIC_ADVANCED_MATCHING"
                    ],
                    "aamFields": [
                        "em",
                        "fn",
                        "ln",
                        "ph",
                        "ge",
                        "ct",
                        "st",
                        "zp",
                        "country",
                        "db",
                        "external_id"
                    ]
                }
            }
        }
    }
}
```
