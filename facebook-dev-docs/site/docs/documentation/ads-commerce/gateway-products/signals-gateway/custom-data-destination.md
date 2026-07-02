---
title: "Data Destination Management"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway/custom-data-destination
---

# Data Destination Management

Updated: Sep 19, 2025

When creating a data pipeline in Signals Gateway, you can create or add data destinations that will receive outbound events from the data pipeline. Data destinations can also be created from the data pipeline details page after the data pipeline is created. Once a data destination is created, you can perform various data destination operations, like creating additional data destinations types, updating or deleting existing destinations, from the data pipeline details page.

## Creating a Data Destination

Click the "+" button in the pipeline details page. If the "+" button is not available or disabled, it means that all supported data destination types have already been added to the data pipeline, and the limit for each data destination type has been reached.

![Data destinations section of the pipeline details page showing No data destination and the + button to add one.](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/473627246_625787650021953_8808880895963960517_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2sgyJ_-3tcEQ7kNvwHXewYO&_nc_oc=AdquAV-bww9haiNQwFM-Z5o4nCYo70WrcN63za7cXIlANQvNvPHmCMfcDjhpboTyGOqowlpFlpAQ1q-I9x84RF51&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQCn5WMAUrOiVtcRs_jen2TZmWPNnj1YpkL0ysaZaj2brw&oe=6A609175)

After clicking the "+" button, you can choose a name for your data destination and follow the provided instructions to complete the data destination creation process.

If you did not enable the Meta Conversions API plugin, the Meta data destination is disabled (as shown in the screenshot below).

![Add data destination dialog, Select data destination step, with the Meta option disabled and Customized connector available.](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/473566614_913796107404857_3371106216831215207_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tlD3cp5NemIQ7kNvwH8JrM3&_nc_oc=Adp9mz3Z4DlCRqsx_OgqhSxM7eCm73VlXiXiUrw7a54ROifqPF1GFtjthJaDvwxb3ia4nsnuW0ZpX9Wbffvi7WpB&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQCGXga1P2bxiDqSBxekXS4ejXRBnZbpRPgQCpTGVT4BKg&oe=6A609210)

If you have enabled the Meta Conversions API plugin, you will be able to create both Meta data destinations and connect to a custom data destination.

![Select data destination step with both Meta (Conversions API) and Customized connector options enabled for selection.](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/473620003_1076483244498436_1481862498128996865_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=IM2T_RRn4fMQ7kNvwGl8zgY&_nc_oc=Adr90F07Db4OiM0-aOaNhZ70DXehsagXgWzpRNAOxR0DKKVSvxQrpW1EPOENaCLjnykBQqamKzbpaSvLLEFGKMQV&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQBS6WktnuOmqCf_eOdSP-mvpOrLq1hI1B5-k8FAnQEifQ&oe=6A6079D2)

To add a custom data destination, follow the step-by-step instructions. There will be a default data destination name during creation, but you can rename it to anything else.

![Set up a custom destination step, Get started, with an editable Custom destination name field and a Continue button.](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/473586785_896607559028570_3115661419526518804_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=HjjV3QkDvlAQ7kNvwGZzyND&_nc_oc=AdqWc7pwaFxwZr2f92AlopNufx9PhZLpDsc6hHnpa4mVXsNLup54-OehpcrvvYB45DtGVsnLWJHwN2Iwbz7UCfhK&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQD_wj-fVDvyAyENjLskzengCm2jM8bmvC3oqLdzVeqkPw&oe=6A607496)

To create a Meta Conversions API data destination, you will connect the Conversions API from the Meta plugin or use the manual connection option.

![Connect to Meta with Conversions API step with Use Facebook Login selected and a Connect button to link Signals Gateway.](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/473546195_9165531663490686_3049980940325362172_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=D4m8NP0m7RMQ7kNvwGAP_wG&_nc_oc=Adr8VIPyIsliTVqelWSqoOe_gJZlrCwTNcWZcP4SiEWJA_4kCVs_2deVhe4SGAb1oz2ndS0UMS58EgFKP-oYu5AI&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQAUlwD8lCvFfV2pIRe8759_oGJkNreMDmSGoY296ibweA&oe=6A60925B)

You can choose to use the Facebook login tool to preview the business account and Meta Pixel and then select one from the list to create a Meta data destination. Alternatively, you can manually input the Meta Business ID, Dataset ID and Access Token from the Events Manager dataset to connect manually.

![Connect to Meta Manual connection option with fields for Meta Business ID, Dataset ID, and Access Token.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/473566586_592866263468480_6092378813047914706_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3iSBEpawXdMQ7kNvwEus2a5&_nc_oc=Adqzmccq3Su_C56iWF3zhceZ_GdYI9MxKOzb_MxODsSP3IS1Cb_ga6zK32uCZZTumFPgNVhCZvV8ehv2SsuBswKN&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQBPCcf4KSPLMYcpIuieEmiSRyP_KWLZHtqS_yJ0WTUHjw&oe=6A60897C)

## Deleting a Data Destination

To delete a data destination, click the data destination in the Data pipeline details page, then find the **Actions** drop down button on the top right corner, and click **Delete**.

![Data destination details page with the Actions drop-down open showing Disable and Delete options.](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/474006316_1294824741840606_7143277790716957398_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AuvAxBSpA-UQ7kNvwGmbNm2&_nc_oc=AdrPWb0w43stC1bqy5LR8hKKLEQQGsvJZBgFPmUhDsNrriLyWSuPbqlR0rvW2so3YV0MVfre-6eEkejsqrVSjF_g&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQBqEs-8ycBNjNzLtErePfB0Rxvh2bxWyD_lgCO676r4Bg&oe=6A606E2C)

![Disconnect data destination confirmation dialog requiring you to type Disconnect name before clicking Disconnect.](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/473674872_1298925184689012_7729029231462412828_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=pDktWFFqikgQ7kNvwG7DmBx&_nc_oc=AdqyWQB9JF1iAgy2Bf9gVoxJllKlKha-Voq_8HvMktw7M8sb37sXvcrkQM8WZIeTdAZaT604X0jQz1XjaAaXIvRp&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQBbNhOVwmJmTP0VYqnn6YoJ1wyKIlChUzyJ-SjQCS6jcg&oe=6A608EEC)

## Editing a Data Destination

You can update the data destination name, or the configurations.

To update the data destination name, click the data destination, and click the **Edit** sign next to the current name.

![Edit data destination name dialog with a Data destination name text field and Cancel and Save buttons.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/473754187_2313714295665579_5996408625812993883_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fjnOMYEN30kQ7kNvwE9jYqu&_nc_oc=AdpjJwq6Bd8esVMv_zw9Gn12ki_TM2IyLyqOHwzYwDCDur5mdiqanqRe77SsXdD4ZzjpCJ2qOlTneVhlUWESz7cQ&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQD5UNWbXORS3Dhsxl86pDfegO0BWDPeU2j4iCvGdw4tsQ&oe=6A607A36)

To update the configurations of the data destination, click the **Configurations** tab in the data destination details page.

![Configurations tab showing the custom destination endpoint URL, HTTP request method, and authentication method with an Update button.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/473561761_973488848162395_6067681123166275199_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DSN7YB-YGvUQ7kNvwHMTM8h&_nc_oc=AdrrPbVsWggGBgsXkZvMalWY_bdEJXbBxobZwWAdIM1c4cyFrsc7I18qw9AI7RIn3FvG5L4Gw6qapwFNk3CNz1R0&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQBoIeuG6qGT7fc5VPnLRHrV3E-YUyovhnek0GhhbTjUZQ&oe=6A608BD9)

![Update custom destination dialog with destination endpoint URL, POST request method, and authentication method options.](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/474141074_1602957533695469_534396266854155469_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=md2V5fju47gQ7kNvwG7j5g4&_nc_oc=Ado2zppmCcs9vYYek4irpQmmL84Aphcp1ybiiro01M4GKEDmJiCpbDxhc0A4guG_hBBQsjlXrORZUvGhsMttCJ1r&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=8E6hfxqW6VBx3QjGnFE2Xw&_nc_ss=7b289&oh=00_AQA1_UqZvX8q1G7PolHqmAxhhMwOhbaUFk6i_XcmUW6ICg&oe=6A608A2C)
