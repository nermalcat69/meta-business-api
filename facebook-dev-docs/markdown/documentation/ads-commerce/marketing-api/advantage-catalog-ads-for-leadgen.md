---
title: "Testing and Troubleshooting"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads-for-leadgen
---

# Testing and Troubleshooting

Updated: Sep 10, 2025

Use this API to create and delete test leads.

## Using the testing tool

You can use [this tool](https://developers.facebook.com/tools/lead-ads-testing) to create and delete test leads for your forms; **however, you cannot use the tool in developer mode**.

![Lead Ads Testing Tool with Choose a page and Choose a form drop-downs and Create a test lead, Delete lead, and Preview form buttons](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/593536293_1378922783966372_8025584219527530072_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=IIf6LvIdfY8Q7kNvwGXk7xi&_nc_oc=AdrpZ_t5K_KrDcuRnHivJ95BVmN8n9cij8qfKldnop6bJy7JytrBisPRkIfHlcSLSfekcG6oRtPg1bIirU1G3ktr&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQC8Spke_apCyVbepHlob-F_PsUgQH5olKFe4nO1u2E5ag&oe=6A605B74)

You can create one test lead per form. You'll need to delete an existing lead in order to create a new one.

## Debug real-time update integration

Use this tool to test if your integration with Facebook's Webhooks is successful. Here are the steps to use this tool to debug your integration.

The leads created using this tool are organic leads that are not associated with any ad. Only one lead can be created per form. Therefore, to re-create a lead for the same form, click **Delete Lead** to first delete, then lead, and then re-create it.

* Go to the [**testing tool**](https://developers.facebook.com/tools/lead-ads-testing).
  

![Lead Ads Testing Tool with Page and Form drop-downs, Create lead and Delete lead buttons, and a Webhook subscription table of App IDs and subscribed fields](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/590533993_1378922847299699_9015309520562620231_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=h440sGbGxFwQ7kNvwE0wJie&_nc_oc=AdolaF0lRUryB09M-rW6O1MMC-hMw-lkKiM1n7NzIUnCJkD4JtQdaMVBeWVHTqPD4wu8POQvWG9binO4H1Q2-ZK5&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQA4rAuhiiDwjukj_eupYI3YWitF256U6woQ15Hplx-Srw&oe=6A60768E)

The drop-down lists all the pages you have advertiser access to.
  
  
* Select a page from the drop-down.
  
* In the **Form** drop-down, select a form to use for creating a lead.
  

![Form drop-down expanded in the Lead Ads Testing Tool showing a list of available forms to select for creating a lead](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/593783144_1378922820633035_2704741403685442415_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=VqxJknzLquwQ7kNvwEFUWfH&_nc_oc=AdoF2baAFisECd-Mqt_BvZOtExYd0mYxKnOt5-UYYf28RhXQq04RplSU2vZPjr5-eMONIoAzcB1hzHRihlQAClu_&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQAgfDFBgMOlNnaOmJpSDzme26TvgNwIM2HtQ5xEY7RJVg&oe=6A6056FA)

* Click **Create Lead** to create a lead. By default, the lead that gets created has dummy data within it.
  
* Click **Preview Form** to customize the data being sent.
  

![Lead Ads Testing Tool with the Preview form link highlighted next to the selected Page and Form, above the Create lead and Delete lead buttons](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/594525521_1378922787299705_5895183796828991648_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_Z8dt73s0twQ7kNvwG2lDQn&_nc_oc=AdrFVfEZNnB1X0bazdqKXicjGanv2FLR5OFWzrjInS2KUQ9W3nSbW7E_qN9Wqvkamli0DVcTNaL4VcLwzcFrQelo&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQBqXK8wBJ_q1pRm3t0lNKDvRTwTaiv_Lmyh6mVlQNCpbg&oe=6A606B50)

* Enter the desired data on the form level to create a lead with custom content.
  

![Form preview dialog with editable Full Name and Email fields and Cancel and Next buttons for entering custom lead data](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/593337970_1378922887299695_432998279614537782_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=o234cH_HXloQ7kNvwG7BON1&_nc_oc=AdrNB0O2MuKbYjeSmWjQGMvaPoNQEYGJxC_z-mJrp937_EShUxQC5ICtLMoHQ-DR8WtrFUtnKj2xRPaCrXCan_IX&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQBp3fBZiD8Je6TN0BDI8pfUUm57WwWBR9vVDGdJjHlWEg&oe=6A60896C)

* Once the lead is created, the **Track Status** button appears.
  

![Lead Ads Testing Tool showing a confirmation that the test lead has been sent and a Track status button below the Webhook subscription table](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/590434748_1378922823966368_4126391969658048259_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=viZUruTo03UQ7kNvwEjMarE&_nc_oc=Adp-cr3TWZhvy2MR1RzCSCZORG1FIEV01qNEh0UOXtfjRBrHnpXXhTkzox_ABvgdUPydzYBgc109JIZkm5Jz5ISa&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQDble8rXrwroAAMij1oZ7Q1Yh-PZmgNjlAyJu6RUBs8zQ&oe=6A6079A2)

* Click **Track Status**, to see the status of the leads. It takes a few seconds for the RTU to be fired to your endpoint. Until then, you see the RTU in **pending** status. Click **Track Status** again until you see the status change.
  

![Realtime update status table with Status column showing pending for each row, with columns for Realtime Update ID, App ID, Subscribed Field, HTTP Code, Payload, and Error Code](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/592375432_1378922817299702_8972427690744377899_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ILcEm9UJX84Q7kNvwGsen2u&_nc_oc=AdrO9Z3BebLB3RDq5NnGhyD3I1wVSoBncm2VTRoVqyVo61jyga2txgBMJPaqEZ-g8kQTIpFmJtYKAnMogRnhjvGJ&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQD6w0AiVcBTKQPFtb5sva4emyliWrjMUMfVQeGfbvFiyg&oe=6A605FEC)

Once the lead is pushed to your endpoint, the status field changes. If the RTU was fired successfully, the status changes to **success**.
  
  

![Realtime update status table with Status showing success and HTTP Code 200 for each row, with the Payload column populated with the data sent to the endpoint](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/591937131_1378922763966374_3375667458441551906_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dqO1TA0BhL8Q7kNvwHWlSlR&_nc_oc=AdoNVh43EnIkFWITasZ3X9S1O67uUnfVKJs-JYcYLjx5VzL40ULEXRdMtYuniJfz1MqbtQ8uGWQk1SDg3b7LgG9m&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=I0oSY96TEYjvUEl-Rym14w&_nc_ss=7b289&oh=00_AQDtz8GL-nVMWGRL0QO-KBDh9m7eMAhPyfgnKRZi5s0Fjg&oe=6A60543C)

For the success cases, you also see the payload in the table. The payload shown here is a copy of what Facebook sends to your endpoint, so you should see the content and handle the JSON.
If there was an issue during sending the RTU, then the status changes to **failed**. In such cases, the `error\_code` column gives details about the reason for the failure.

### Lead testing

You can test your leads via the Test button after you [setup Webhooks for your app](https://developers.facebook.com/docs/graph-api/webhooks/getting-started). The button is inside the Webhooks dashboard for the app.

## Create test leads

You can create a test lead by making a `POST` request to `/{FORM_ID}/test_leads`.

For this request to succeed, the following requirements must be met:

* You should not have existing test leads for the specified Lead Ad form.
* You must have a [page role](https://developers.facebook.com/docs/graph-api/reference/page/roles) of `Advertiser` or above on the page under which the form was created.
* You need to use the Page access token in your API call.

```
curl \
  -F "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/API_VERSION/FORM_ID/test_leads"
```

You can customize the test lead content by passing the following parameters:

* `field_data`: A vector parameter with `name` and `values` pairs.
* `custom_disclaimer_responses`: A vector parameter with `checkbox_key` and `is_checked` pairs.

```
curl \
  -F "field_data=[{'name': 'favorite_color?', 'values': ['yellow']}, {'name': 'email', 'values': ['test@test.com']}]" \
  -F "custom_disclaimer_responses=[{'checkbox_key': 'my_checkbox', 'is_checked': true}]" \
  -F "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/API_VERSION/FORM_ID/test_leads"
```

The leads created from the above calls are fake leads and are therefore not associated with any ads.

## Read test leads

You can read the test leads associated with a Lead Ads form by making a `GET` call to the `{FORM_ID}/test_leads` endpoint.

```
curl \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/API_VERSION/FORM_ID/test_leads"
```

## Delete test leads

If you are testing your integration, to delete a lead so that you can resubmit, make the following API call:

```
curl -X DELETE \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/<API_VERSION>/<LEAD_ID>"
```

Only the owner of the lead can delete the lead.
