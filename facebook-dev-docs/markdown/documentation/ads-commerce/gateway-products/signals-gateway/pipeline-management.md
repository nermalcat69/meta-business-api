---
title: "Signals Gateway: File Upload"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway/pipeline-management
---

# Signals Gateway: File Upload

Updated: Jan 12, 2026

The File Upload feature allows Signals Gateway users to ingest events that are in a CSV file. This feature supports uploading events that are compatible with Meta servers, including website, offline (such as in-store) app and CRM events. There are two methods for uploading events: automatic uploads using S3 integration, or manually uploading files within the Signals Gateway by setup file data source. The automatic method is recommended as it eliminates the need for human intervention and runs seamlessly in the background without disrupting instance usage.

## File Data Source Setup

While creating first party pipeline, choose "File upload" as data source.

![Create a data pipeline dialog, Set up data pipeline step, with File upload selected as the data source](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/475415524_9100249493400922_2580423808784394561_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=xnDJZ2TpJZ4Q7kNvwHakKr2&_nc_oc=Adpq4cqDli_Oa2V4fKTNLWXZL5hQijU9KYSAU6oPo5kLCPZPO_Tz2QI3uZA7s43TCmADKXM_HN91xCIAeD3pN_57&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQBtBCrf8TwvEnnC1eA3iGEtpgBveWnhkQv8AyTDebVVmg&oe=6A60A255)

Add a name for this source:

![Set up Data Upload step with a Data source name field for naming the file data source](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/473581469_951923883549779_574646870650474182_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=QUf9VjkdfRkQ7kNvwFWVeq0&_nc_oc=AdoICBk3U-kJy5hHW5UyZ-1_apILG9w7of-Zzg7RUBroSs2B6bbOz-W7UUW7wBQrpLSHjiENGUa0Qq2jJtrNuqcV&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQCKfrVtWbGD6aLWGyDSSGnxZn0w6C5xeGLYSh-nJh_CeQ&oe=6A606A75)

The file source will then be created:

![Confirmation that the data source was added, with Next steps for automatic or manual file upload](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/473685303_868591805227831_3398818399134635470_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ac6AKvu6EEsQ7kNvwEGjJAE&_nc_oc=AdoKZpIwA7UDLDjwBeC0qSg1UT3FYK6mjDsHNnzn8RqfvvIVs0PLVWTKHOpxMyy4-_JlrTi7I4fqFzrSRbH18zAW&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQBMCfGE9LziTdWfdZSErzjYDuNAlwB9f6qh2FyrQ8lGfQ&oe=6A609266)

After finishing the pipeline creation, you can start using the "File Upload" features manually or further config for automation upload as described below. Events can be viewed by clicking on the File events icon at pipeline detail page:

![File upload data source Event activity tab listing events with inbound counts and last received times](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/473770136_461031487075063_8169747030519603440_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=okWkdcg08UgQ7kNvwGdzXvE&_nc_oc=AdpmrGB2I-IPY3QqMJj-d_8DvwoVEwWDuH9VsMtW5yV1d-0AlAgIEUhhr4xFpLOEZlvUqCbITAKvsN00onr7Hk_o&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQBWrAxQn1ic0UgnHOeKcsuFV0kSEJjLAgQzFfcC1mthwg&oe=6A60939C)

## Automatic File Uploads

To set up automatic uploads, find the setting through **Account settings** -> **Automatic file uploads**.

![Account settings menu expanded with Automatic file uploads, Websites, Data routing, and Advanced matching options](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/473637471_589105773872259_5960912283945317084_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=c6YFSE6xRxgQ7kNvwEFoTrS&_nc_oc=AdoqyeBA2gztwbVlLVyQx1HqwVI1uOyFj4AD8yyWdR8NHjYool-3ICytEpQTMV2uPTjM-Uofhm31dfkPPtM0mIUw&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQB4LSiZYBgyLKYysrueKEN3LLlIqdU7pK1w7DnRjflfYg&oe=6A606A8B)

You will be redirected to the page that provides an overview of automatic uploading (shown below), click **Start setup** to continue.

![Set up automatic uploads for event source files overview page with Before you begin prerequisites and Start setup button](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/473682151_915963477368557_7667206543124114097_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=IK4Dden92RIQ7kNvwE9NFML&_nc_oc=Adpu1sIoaw2lL4E-NBR-4833ZB6kga5qfvQbaghBBx3im_yW6Njz2Y4SIzuo69F_FeJP2Io_yC1LOtqk-IlB1NbX&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQCnVNv-7kFYFF5kJXlgZNkokcu0Wz-DO4TacZ0q24rVwA&oe=6A60972A)

A modal will pop up, which provides resources and guidance on creating an S3 bucket with ease. Click **Continue** when you've finished set up process:

![Set up automatic file uploads modal, Prerequisite step, with S3 bucket and IAM user setup instructions](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/473411730_610646568220163_443867287305617705_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2ISou03FfB0Q7kNvwGrI_yj&_nc_oc=AdrkZzQXC-NcxpH-iIULvoa7qg8x_vBpnkcBgAIUvQziEa2g69r1tQk0ZO2MKVm2wAMMqZBgJUmAkYeAWNF6auzz&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQC6YFk7PZeGiE9nNJlTIqdWrWhOAf0OglnqxsvIYmcAJg&oe=6A6076BA)

Provide necessary information for S3 and IAM user created in previous step:

![Connect S3 bucket step with fields for AccessKey, SecretAccessKey, Bucket name, and Hosting region](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/473658617_518240490637329_1027695159464776243_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=CYP9j_S-CZ4Q7kNvwHrktXf&_nc_oc=AdqRYyD40RmV9gqW-kmrtZBkCBl2DB8WgJYiAuPVb2lwy6GgLS0SGLT5UzbKqFz5dlMlyshn6QqR0E20nEzKyxmj&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQD6dXQ1ij-_iyekyYvuguon7PGgXtspK7rtJLUhId2FsA&oe=6A608751)

When the setup is finished, you'll be provided with a sample file for reference.

![Confirmation step showing automatic uploads are set up, with a Download .CSV File button for a sample file](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/473759117_1263652691532247_1440408809805406379_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6_nZLRvNZw0Q7kNvwF_OSAR&_nc_oc=AdoRGYfSuCE3SC5h3u1RJLJLdbrgY5LDkdCcqTjwOytr2pY31IjlJADMAlTDK5YNGGDNzwQQ8UqcMZBctKTfhav5&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQCwzQMrlyXZT9oktkUtGaFUPYFYRbYW_NZvBiwRaFblrw&oe=6A6097F0)

Now you can go back to the same setup page from the Overview page to monitor the job run, and to modify connection information by clicking the "..." button.

![Automatic uploads for events section with a Go to settings button](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/473593465_1248010266296594_7066971625953973802_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4-qt94rDK8cQ7kNvwHi2svm&_nc_oc=AdpRJKOXwSwd_C4rBREUtDbNxQOjRaoRel2y6b8Ba5Tbawh83UAy7lEdgy18JgnA0YE0O75uMUhKMVadX0oFFRJh&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQAN67szloEZLUPhbcKKCp9XYngfdBo4Gfi-4CaHjO5ubA&oe=6A607DCD)

![File event data sources S3 file connection table showing a Bucket Name, AccessKey, and Most recent activity status of NotStarted](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/473661029_621445333632011_6249540001152919563_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mDpW1H3O6GkQ7kNvwGmoB3e&_nc_oc=AdrVh3XJqFHXKsHasgnMNX8DJRVVhryoAPlgYW-xqPmMx3KCITPXkpAFjep8Gl2YDax1W2FfwI6-sB0KP_XaJ8pX&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQCEunh_PQclCpWXx_LTBz3RfEL8qYNMogwj7bbDCc1J7Q&oe=6A6072C7)

Below is a detailed header definition table to use when formatting your data files. Follow the format closely to help ensure the best results. You can also view this table on the **Settings** page.

| Key | Description | Required | Default Value |
| --- | --- | --- | --- |
| `DATA_SET_ID` | ID of Signals Gateway file data source. | **Yes** | Event will be dropped if an ID is not included. |
| `EVENT_NAME` | Event name of the record | **Yes** | Purchase |
| `EVENT_TIME` | Date and time when transaction happens, **formatted as** "YYYY-MM-DD HH:mm:ss" | **Yes** | empty |
| `ACTION_SOURCE` | The Meta defined action source indicates what type of the event is. See a list of sources [here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event). | **Yes** | physical\_store |
| `VALUE` | The value of the transaction. | **Required for Purchase event** | 0 |
| `CURRENCY` | currency of the transaction. | **Required for Purchase event** | USD |
| `CONTENT_IDS` | The IDs for contents or items with transaction. Support multi values split by pipe symbol, for example ID1|ID2. | No | empty |
| `ORDER_ID` | The transaction ID or order ID for the record. | No, **but recommended** | empty |
| `EMAIL` | Customer's email | No, **but recommended** | empty |
| `PHONE` | Customer's phone number | No, **but recommended** | empty |
| `LAST_NAME` | Customer's last name | No, **but recommended** | empty |
| `FIRST_NAME` | Customer's first name | No, **but recommended** | empty |
| `DOB` | Customer's date of birth strin. We **accept** YYYYMMDD format.   Example: 1/1/2013 should be formatted as 20230101 | No, **but recommended** | empty |
| `COUNTRY` | Customer's country  **Use two letter code. For example, US** | No, **but recommended** | empty |
| `STATE` | Customer's state | No, **but recommended** | empty |
| `CITY` | Customer's city | No, **but recommended** | empty |
| `ZIP` | Customer's zip code | No, **but recommended** | empty |
| `CLICK_ID` | Identifier associated with User's link click. (Also known as fbc or fbclid) | No, **but recommended** | empty |
| `MAD_ID` | Advertising ID for Apple or Android | No, **but recommended** | empty |
| `EXTERNAL_ID` | Third party user ID | No, **but recommended** | empty |
| `LEAD_ID` | The lead ID from your Lead Ads | No, **but recommended** | empty |
| `custom_data.<data-key>` | Setup this header to send custom data. Replace <data-key> to the actual keys you want to use. See special note below.﹡ | No | empty |

﹡Automatic uploads can handle top-level custom data, but the feature does not currently support nested objects. The header of the CSV column should be labeled as "custom\_data.<data-key>", where <data-key> is the name of the custom data field you wish to send, for example "custom\_data.CustomField".

**Test Automatic Upload**: To verify the S3 integration, upload some sample files to the connected S3 bucket and check if the job finished successfully. For non-App Runner instances, you can trigger an instant job by clicking the refresh button on the settings page; otherwise, the job will run automatically in an hour.

![File event data sources S3 file connection table showing a connection with a failed Most recent activity status and a refresh button](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/473634182_1152913092908629_5333032160927059842_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1pHh7gBmUkQQ7kNvwE_a1tv&_nc_oc=AdrNOSdBGCuoI_lID8bax1D6BAUSWptRx1B5vfj5_Woy742rNZaD9GWkn_pQ5J13sZZJLITI0w-ktCHZ8SXNeBq5&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQCMljSfVODiLXxRvJ9xUvH6VeKQzZxdTFSNn9Au6JFSAA&oe=6A6082F3)

## Manual File Uploads

Click the file event data source from Pipeline to start using the manually upload feature.

![Pipeline Overview showing the flow from a File upload data source through Pipeline filter processing to a Meta Dataset destination](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/473664961_949774646759238_1388832181898531148_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=R4uubc6irMEQ7kNvwGabDXc&_nc_oc=Ado1KkqAhxyFi7Ke1DtSUIG3808pfkKwUmdd1cukn-CZ-ScnY82Wub4RMCl6nOKl_-RTle1Ofcs6aQzo6LamGvbE&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQCEe10sZh5MWBAt6Vm-un4xMZXT9ytNCspsYbmyx-ECvg&oe=6A609F16)

Then locate the action menu from the popup modal and click **Upload event data**.

![File upload data source modal with the Actions menu open showing Upload event data, Disable, and Remove options](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/473642378_535217096206996_8346570489168611624_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=IXuumKpYLjMQ7kNvwHBlkKj&_nc_oc=Adp0dvqHWRb__rYEwr24ybihSSftiLVrX8g3SK4bCU-ub1HfJUsQisu9EU219ArhqXnq1cUlIpEOegYr0xRsIFYf&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQBwA-IN2BonIVQKdNyMGHZutk_k3L8hQI3KCsRozrjkjw&oe=6A609871)

![Upload event data modal with a drag-and-drop area for a CSV file and Uploaded events and Excluded events counts](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474105096_624395186617122_5145365763860682027_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tyFdaSQ1ymgQ7kNvwGW5Fz6&_nc_oc=Adr0QYPVrkorRL_uxvoflV_lUvWg3QXAOjAM6PamDzrmIjo6VxYSypF7bJH7Tc3zr1mlfgQ_fF0VdiP2yrVSrOPQ&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=MN60d9IlUAKPiwH0H2dMfw&_nc_ss=7b289&oh=00_AQCGzE7-pljgtklk0Mzkay7RKAbyFzGzWSD0CYjkUcNsUg&oe=6A608299)

Event data manually uploaded to a data source must contain a set of parameters, some mandatory and some optional. The CSV file headers use JSONPath format to define the payload keys Check the detailed payload [parameters here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event). Use the template available by clicking the sample file link to format your events data.

Once uploaded, the name of the CSV file will appear and the number of Uploaded or Excluded events will be shown.

## See Also

* [Signals Gateway Overview](https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway)
* [Signals Gateway Setup Guide](https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway/setup)
