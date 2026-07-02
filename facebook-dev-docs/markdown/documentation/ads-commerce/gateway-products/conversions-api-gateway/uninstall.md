---
title: "Conversions API Gateway: Uploading Events"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway/uninstall
---

# Conversions API Gateway: Uploading Events

Updated: Feb 11, 2026

Uploading events to your system allows you to capture events that were not automatically sent through the Meta Pixel to the Conversions API. This feature supports uploading events that are compatible with [Meta servers](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event), including website, offline (such as in-store), app and CRM events.

There are two methods for uploading events: automatic uploads using [Amazon S3 integration⁠](https://aws.amazon.com/s3/), or manually uploading files within the Conversions API Gateway. The automatic method is recommended, as it eliminates the need for human intervention and runs seamlessly in the background without disrupting instance usage.

## Automatic File Uploads

Find the automatic uploads section (shown below) on the Overview page and click the **Set up** button:

![Automatic uploads for events section on the Overview page with a Set up button](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474591115_615719681106545_6624214416702748342_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=7SxGnH6RlLAQ7kNvwFnYu_m&_nc_oc=Adq5IwByLvbCp2MmYmIUrx9qtRKRU-zNoLF6ucLj6jJPR9crWg6FgMeTfQ5_NKaP79nb-OJZMMsA3WhouRHDwaaz&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQCsBMVJstuQ9O3xdhwI-7Wb2GWjNF3G4GnMusiTa7I9BA&oe=6A608931)

You will be redirected to a page that provides information about automatic uploads (shown below). On this page, select the cloud provider, then click **Start Setup** to continue.

![File event data sources page with AWS S3 Bucket and Google Cloud Storage provider options and a Start setup button](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/513226147_904042915232752_4196536209564272641_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6jzc_IJVt7UQ7kNvwH5NU3-&_nc_oc=Adqg-OMvSLk9cECapkzqWbCBjaVocAlhFq9n2mnrD6RT-5sM8RXeMg5OHbz80NYnJ2Ws5k5DGzgpFOf4fNYMvjPR&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQCYWkJOovX3i5oQqrhAnQbN3DUE82-YOKwHat0wszA3Hw&oe=6A6092C2)

### For AWS S3 Bucket

A modal will pop up, with resources and guidance on creating an S3 bucket. Click **Continue** when you’ve finished the set up process:

![Prerequisite step of the Set up automatic file uploads modal with AWS S3 bucket and IAM user setup instructions](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/475409094_2057819541298530_1002506155733033865_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=bkPFMJP8xQ4Q7kNvwEOWD4d&_nc_oc=Adp0epB7miLt8svrXWWnj6x3WT0BNI6sF3cljKDhpiKHYeZHao5J8MddDsXMjJL7SOGjxG2WEquYmBxgGpZxTaDQ&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQAVLga2XbrBfrTrnq0bhy8wg8yMiGDfnYAOsqrI2sjy_w&oe=6A608A91)

Provide the requested information for the S3 and IAM user created in the previous step.

![Connect S3 Bucket step with fields for AccessKey, SecretAccessKey, Bucket name, and Hosting region](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/474952097_619850067123166_1481859281092577258_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mCi2cudvcXQQ7kNvwEUOxKT&_nc_oc=Adp14j6FMIYUeA0RNxNgfC5wrfSiQ4O9gWM7phdGInkmA_5LdWT_wLch3g7RvOyx6icU1LIrMwUDfjVsc4S6xUoR&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQBgCFEE8-GHtmo_kFXwsq8sUqCHEfXCpCqqxtUOlxWbYQ&oe=6A60761D)

When the setup is finished, you’ll be provided with a sample file for reference.

![Confirmation step showing setup complete with a Download .CSV File button for a sample file](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474592528_1000768772099598_1692546674831921155_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=uKkRhlxxO9cQ7kNvwF2IfX5&_nc_oc=AdqzZuVYkPnmIMDW9SfI56Le6T312LHwy1N64Dwa894v89Uvvev6JNcL7gkugAq367MGpC0tYf66hNJKZLRk7nPT&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQBSw668J_nv3AdKmVeNgXdAcKVOJ9ZsAHSJTakiMXQwqA&oe=6A60952B)

### For Google Storage Bucket

You will need to create a service account and generate an access key. Refer to the [official Google Cloud documentation⁠](https://cloud.google.com/iam/docs/keys-create-delete). Make sure your service account has permissions to list files, read files and delete files.

Upload the generated key file and fill in the bucket name here after setup.

![Google Cloud Storage bucket step with a bucket name field and an area to upload the JSON key file](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/513825424_1417916479546559_6173350015550354690_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=q05BXeKhGV8Q7kNvwGW0KkS&_nc_oc=AdoEZvhYhPrRsKcVPGRrEPFhyPGHJIpC2k6amyXwSP8k-QusVJaHc39Ffrj_u82hAuR6HJtrmP7U5YEiwNbyU9N5&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQC-yYnenG0wo4MwITcok7RlMliSvnO473U1zPChkaJBfw&oe=6A60757F)

A confirmation page with the sample file will pop up. You can start delivering files to the bucket. Your gateway instance will automatically pick up, process, then delete the files.

![Confirmation that Google Storage automatic upload setup is complete with a Download .CSV File button](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/513082483_1919278848845745_4426215382845703991_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=I3L-vjEr9boQ7kNvwGai8G0&_nc_oc=AdqPY5veD1fVFknJUjQXJZtA-vxywiYlGSQxSpTkDYP9ZqVHCnPWQPkdaY3E8lMRVQdWLMypOKDEIR7_SZhhFOF1&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQDvWKLrvjsm7d4R9MOvtL6B8ScNIVgZwuTd9o3eTjPAzg&oe=6A608263)

You can now go back to the same setup page from the Overview page to monitor the job run, and to modify connection information by clicking the “...” button.

![Automatic uploads for events section on the Overview page with a Go to settings button](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/475441586_1127299421988924_4977570746402086788_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PDlIW8_iTx8Q7kNvwHuhAM-&_nc_oc=AdobXRUpcSWXoqoLQMuP9H9CsWVltiDRkIXyfVyPSveE11tuB7Pr8_B2CaXaAnNL_oUlYXwMzctjuAy2dc5J6ks7&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQD_KmjBwfwOd63l5FpSTtKLPbJUrc4TTqxfoLahag2pCA&oe=6A607CAC)

![S3 file connection table showing bucket name, AccessKey, and most recent activity for a connected, Enabled source](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/474951624_514293727842969_6441232206785828757_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=IGtVA-HEV7gQ7kNvwGdCyx8&_nc_oc=AdoirakpQs1O_3flV4tEKx-MezMG8Xktk9qUzZoMOEPOZ40aXAMNIITp09OOMjsb6xDGKsnRTMdcfigKRrkmMElo&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQDC52nJcXQzI2KgXAjs0-E_zTY9EDy-et4oh5IEkuLkPw&oe=6A6082DB)

Below is a detailed header definition table to use when formatting your data files. Follow the format closely to help ensure the best results. You can also view this table on the Settings page.

| Key | Description | Required | Default Value |
| --- | --- | --- | --- |
| `DATA_SET_ID` | ID of source this event is sent to | **Yes** | Event will be dropped if ID isn’t provided |
| `EVENT_NAME` | Event name of the record | **Yes** | Purchase |
| `EVENT_TIME` | Date and time when transaction happens, **format** `YYYY-MM-DD HH:mm:ss` | **Yes** | empty |
| `ACTION_SOURCE` | The Meta-defined action source that indicates the type of event. See a list of sources [here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event). | **Yes** | physical\_store |
| `VALUE` | The value of the transaction | **Required for Purchase event** | 0 |
| `CURRENCY` | Currency of the transaction | **Required for Purchase event** | USD |
| `CONTENT_IDS` | The IDs for contents or items with transactions. Supports multi values split by pipe symbol. For example: `id1`|`id2` | No | empty |
| `ORDER_ID` | Transaction id or order id of the record | No, **but recommended** | empty |
| `EMAIL` | Customer’s email | No, **but highly recommended** | empty |
| `PHONE` | Customer’s phone number | No, **but highly recommended** | empty |
| `FIRST_NAME` | Customer’s first name | No, **but highly recommended** | empty |
| `LAST_NAME` | Customer’s last name | No, **but highly recommended** | empty |
| `DOB` | Customer’s date of birth string, **accept YYYYMMDD format**. Example: 1/1/2013 needs to be formatted as `20230101` | No, **but recommended** | empty |
| `COUNTRY` | Customer’s Country  **Use two letter code**. Example: `US` | No, **but recommended** | empty |
| `STATE` | Customer’s state | No, **but recommended** | empty |
| `CITY` | Customer’s city | No, **but recommended** | empty |
| `ZIP` | Customer’s zip code | No, **but recommended** | empty |
| `CLICK_ID` | Identifier associated with user’s link click. (also known as fbc or fbclid) | No, **but recommended** | empty |
| `MAD_ID` | Advertising ID for Apple or Android | No, **but recommended** | empty |
| `EXTERNAL_ID` | Third party user ID | No, **but recommended** | empty |
| `LEAD_ID` | The lead ID from Lead Ads | **Required for Leads event** | empty |
| `custom_data.<data-key>` | Set up this header to send custom data. Replace <data-key> to the actual keys you want to use.  See special note below.\* | No | empty |

\*Automatic uploads can handle top-level custom data, but the feature does not currently support nested objects. The header of the CSV column should be labeled as `custom_data.<data-key>`, where `<data-key>` is the name of the custom data field you wish to send, for example `custom_data.CustomField`

## Manual File Uploads

From the Overview page, select any connected dataset, and hover on the button below and click **Upload data**.

![Dataset row options menu opened from the ... button showing Deactivate pixel, Enable publishing, and Upload data](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/475426545_617424394269361_871288814947055575_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1SFLPS0qD1sQ7kNvwFEIFBz&_nc_oc=AdoAGwHzhd0-rXsDKLjyIHkiuQyoofA3cLRGr7CqBJmbleGOi1aF30z0jHnhGiA4xqbxy6Ky65IIsW8OrSHdUSLl&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQCFZtxmjK3N8HnIP1p2ziLZ-5Y3Xn5To3lPZgQfmKJuSQ&oe=6A609F4D)

![Upload event data dialog with a drag-and-drop CSV upload area and Uploaded events and Excluded events counts at zero](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474951277_1122799809096517_1642472540050575111_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZNfIKXZBZ3MQ7kNvwGWoLX3&_nc_oc=AdoEw0u4uWUEt2saci0R2DYqzSkdI0LQ4kbcRIvKxK0LD97_lEWMi4pbzjbLdX-2SaNswoqrBVbnM1IDUFGa0y9V&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQCOVIBHoT2aWjjvW4mbMrPvGmI2-wpFAtuEXYo9U4iqAA&oe=6A609F0B)

Event data sent to the Conversions API must contain a set of parameters, some mandatory and some optional. The CSV file headers use JSONPath format to define the payload keys. Check the detailed Conversions API payload parameters [here](https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/server-event). Use the template available by clicking the sample file link to format your events data.

Once uploaded, the name of the CSV file will appear and the number of Uploaded or Excluded events will be shown.

![Upload event data dialog after uploading Sheet1.csv showing 9 Uploaded events and 0 Excluded events](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/475413187_9300149510041030_6660260809920536108_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=a6GKlyRu0MgQ7kNvwFXxm5u&_nc_oc=AdrKxIcZ7wLK4rB1Z6GKmO8Vhf19TKZVj-eVAAU-2gsEaCHxPpesDUvyLOV3J3oIkA2iODZzmvORI6oBfwPDCZ1q&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQBkMdppOVeRGYO34IxXtECtws_NiD6Y2oRr2SmOOE2jXA&oe=6A6078B9)

It should take approximately 10 minutes for the events to be sent to the Conversions API and appear in the Events activity section.

![Events activity table listing events such as Purchase and PageView with total received, total sent, and Sending events toggles](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/474590667_920443026537895_8068463740097626510_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9xvPFYEEpkIQ7kNvwFz9I_u&_nc_oc=AdrEBz5Adtp09HugfAyHsq1BEjM7aYD0wZuS3lglbvhmuaeq9bSHtX2G8XUJsD9FNcC-UL4KVdbA4MkPhAUDcykx&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=uP9Ckbj9cylW1QGZXewDPQ&_nc_ss=7b289&oh=00_AQBCHWRa8ikevQKb7-j237gcFPHh0TqvEiwjW-A02prcNQ&oe=6A608C15)

## See Also

* [Conversions API Gateway Overview](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway)
* [Conversions API Gateway Setup Guide](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway/setup)
