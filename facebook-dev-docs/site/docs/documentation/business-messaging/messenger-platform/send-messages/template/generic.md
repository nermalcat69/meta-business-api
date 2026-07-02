---
title: "Customer Feedback Template"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/generic
---

# Customer Feedback Template

Updated: Mar 23, 2026

This functionality is in development. Meta can change or remove this functionality at any time.

Messenger helps brands build lasting relationships through conversation. Whether you are talking to a loyal customer or someone brand new, Messenger lets businesses help customers with their pre and post purchase inquiries. Every interaction is an opportunity for the businesses to delight the customer. And, businesses now have more robust tools such as Customer Feedback Template to measure the experience they provide to their customers. With Customer Feedback Template businesses can:

* **Increase response rates** for your customer feedback surveys with Messenger's native customer feedback template.
* **Aggregate customer satisfaction ratings across channels easily** with built-in Messenger templates such as Customer Satisfaction (CSAT), Net Promoter Score (NPS) and Customer Effort Score (CES) surveys.
* **Reduce biases and inconsistency** in survey scores with optimized UX.

CSATCESNPS![Animated Messenger thread showing the CSAT Customer Feedback Template flow from Rate Experience to Complete](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/192379282_159923619437508_6420384473285754162_n.gif?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6ACq_spolsAQ7kNvwHmsxxi&_nc_oc=AdoLPdBcz6QuUMNKDNNhNDU3DF-81B-hgpYraUvSs8p2D4deyJxJ8N_irTKbM_vOelgIDTIqu_xRn7YiTxQ6yigI&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQCKYTZsZdkM9vRf6xkqKKCabUZtpuGLpg-kNYU6PXUO1Q&oe=6A606877)![Animated Messenger thread showing the CES Customer Feedback Template flow with a 1 to 7 effort rating bottom sheet](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/192394645_784940269049775_2246604535870055803_n.gif?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=W5vOOrWGb3UQ7kNvwFAWkA_&_nc_oc=AdqqlfvQ2se2oBl9KZ24GyfOkbbbbCTfIo3kKp8tJgQZ4IANLyg2NyHdyFUKOU2U55CELIXg-qkzw3WfSZ_rCWh0&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQBzWlKWGrSsRgTsz8HRSjzUtynnvauIWzfKeJ26pHHWEA&oe=6A607AEA)![Animated Messenger thread showing the NPS Customer Feedback Template flow with a 0 to 10 recommendation rating bottom sheet](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/192703940_158265832933445_2830539281971663398_n.gif?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=5AxPYMPB5JgQ7kNvwGxUHR-&_nc_oc=Adpohl5Y17sxIBmiGRXR_BgxmsHCfsXcWWeV7k1EYhBv83u6rnuQEh-B_6DXLYL9-SZ6THYcPAvxfobyHeTufdBX&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQCGBsqIKUm01x5JErfqBnaNc1OH81zlmjL9UGgSZrf0KQ&oe=6A60622C)

### Use case details:

**Allowed:**

* Post purchase feedback collection via NPS
* Post customer service conversation feedback collection via CSAT and CES

**Not allowed:**

* User research survey unrelated to a preceding interaction
* Promotional survey, any survey wording or content that are promotional in nature

## Flow Walkthrough

![Flow experience diagram of six Messenger screens showing the Customer Feedback template flow from template to submission](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/643889203_1445181520673831_2129008959093999483_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3_INUrscVM0Q7kNvwGsoIAR&_nc_oc=AdoHH-vvN4krlNPAhBy2BmmDrCCTTJPUtoq4fpMx5ZXNbSEkF0UmMQh-eGMJ3VaWR4Rk9iIA471lMMFGAOnoOg7i&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQCefrg4s39sNf8_ghxQgFzu8Ai4d7UVRp9Ca0nnXo8N7w&oe=6A606BF6)
A typical flow using the Customer Feedback template is shown above:

* After a case has been completed the Customer Feedback template is triggered into the thread via the Send API (detailed in sections below). The template will have a title, disclaimer and a button to start the rating flow.
* Tapping the button will trigger the bottom sheet to pop up which will have the configured scoring components.
* A customer selects a score and can provide additional text if the business has configured the free-form text input (detailed in sections below). Once the scores are selected the Submit button pops up.
* Customer completes feedback and taps the Submit button.
* Feedback is sent to the business via the configured web-hook URL.
* The bottom sheet collapses and the template in the thread will have the button replaced with Complete. An admin text will show that the feedback has been shared with the business.
* Note: As long as the Submit button is not tapped, the customer can collapse and come back to give feedback provided the template has not expired (an expiry can be set for the template, detailed in sections below)

Details of the template and its setup is provided in the following sections.

## Score Types

We support the most commonly used scoring standards in the industry which include CSAT, NPS, CES as well as Free Form inputs.

Below are the various scoring options and their nomenclature for our API calls.

```
Score Type: CSAT
    type: "csat "
    default_title: "How would you rate your experience with <business>?"
    options: "one_to_five", "five_stars" (default if no option set), "five_emojis"
    payload: "1", "2", "3", "4", "5"

Score Type: NPS
    type: "nps"
    default_title: "How likely are you to recommend <business> to a friend?"
    options: "zero_to_ten" (also default if no option set)
    payload: "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"

Score Type: CES
    type: "ces"
    defaut_title: "Overall, how easy was it to solve your problem today?"
    options: "one_to_seven" (also default if no option set)
    payload: "1", "2", "3", "4", "5", "6", "7"
```

**CSAT(Customer Satisfaction Score)** will be able to support views with 1 to 5, 5 stars or 5 emojis, default if none is provided would be **"five\_stars"**. You can provide your own custom title for the question, if none is provided, the **default\_title** will be chosen. Note: default\_titles will be translated and localized to the locale of the user. Custom titles will not be translated, you would have to perform the translation yourselves if needed.

Selecting a score in any of the view formats will translate to a numeric score from 1 to 5 which will be the value that would be sent to your web-hook. That is what the payload fields show above. An example CSAT view using five\_stars is shown below.

![CSAT five_stars view asking how would you rate your experience, with Negative to Positive star selectors](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/104114593_540263709976958_4941858584795044930_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=P4gaMeCnQ8sQ7kNvwFhXNKr&_nc_oc=AdoksygfQYCczkn72V7m3tQs2j3T5RQxpeHbPIjWIMTEgjfHhgxoKKG_GhIHnT1thJp-r4WFNb_PmDyLLxOB6L4v&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQC89M1IQb4pXY83h6ctmMZNb0R7dqi4bg53AwG2kEQkTg&oe=6A605F11)

**NPS(Net Promoter Score)** will be able to support views with numbers from 0 to 10, default if none is provided would be **"zero\_to\_ten"**.. You can provide your own custom title for the question, if none is provided, the **default\_title** will be chosen. Note: default\_titles will be translated and localized to the locale of the user. Custom titles will not be translated, you would have to perform the translation yourselves if needed.

Selecting a score will translate to a numeric score from 0 to 10, which will be the value that would be sent to your web-hook. An example NPS view is shown below.

![NPS view asking how likely you are to recommend the business, with a 0 to 10 score selector from Unlikely to Likely](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/103631685_656826515174329_6652044623311997817_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=b66ocIyyuDQQ7kNvwFgD2Lb&_nc_oc=Adq_AqVN-vwvfM2rxIO3sxhQUAxntJ4M1AdjTj4jIZl08t0-oGaDko9F6g1N6oD1Bstu7uslE3GL67loCpEIqq39&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQCY2obflMRZX0tpDVQs72pBAWAei3y6uoY9-_ZPpy8nHA&oe=6A60820B)

**CES(Customer Effort Score)** will be able to support views with numbers from 1 to 7, default if none is provided would be **"one\_to\_seven"**. You can provide your own custom title for the question, if none is provided, the **default\_title** will be chosen. Note: default\_titles will be translated and localized to the locale of the user. Custom titles will not be translated, you would have to perform the translation yourselves if needed.
Selecting a score will translate to a numeric score from 1 to 7, which will be the value that would be sent to your web-hook. An example CES view is shown below.

![CES view asking how easy it was to solve your problem, with a 1 to 7 score selector from Difficult to Easy](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/102468843_552125318756128_3061439580152725875_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=HzlRKBykLvYQ7kNvwFT6AqF&_nc_oc=AdoK_MAIDzv4L0QbEwdU-of0IOZR4PT3MzbMi4VdNhea-uZPVYqLqOkpJ4H6SzWhazGvTea7XHmWzIH3sP0a5b-I&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQBAMQ_EjkQErVZpAJNz0P739qfqam8tD0bfIzr1SlSTVA&oe=6A605581)

**Optional Free Form Input Field**: To each of the score types you can also attach an additional free-form input. This input can be optionally set and can be used if you need text feedback in addition to the score a customer selects. Please note, a customer can choose to submit a score without providing text feedback. **Also, the form input has a character limit of 400**. Below is an example for a CSAT score type with five\_stars and the additional free-from input.

![CSAT five_stars view with an optional free-form input field labeled Give additional feedback below the star rating](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/103264941_339812680321966_5268255617441433079_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=P4-NnZt4_ckQ7kNvwFoUErm&_nc_oc=AdoJ4SGOR-hu6IPe8-CS0HF8wEGAW-sYzmpkRmiATO3Td41lMS-yzdhPSKA5yjE3eZp5l-cXBWAEdBnGYLWjhvJy&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQDGS7ZFpfKJyrySSiFy5QrY1BBa6EFwet8aqwzPnMEm7g&oe=6A605D1C)

## Score Labels

For each of the scoring options you can also set the score labels to clearly define the level of the lowest value and the highest value in the template. The values that you can use are below. Please note, some values are default for certain score options, provided in parentheses below. For e.g. if no score label for CSAT is provided, it will take neg\_pos as the default. You could also choose "none" if you would like to not show any labels at all.

```
"neg_pos" = Negative - Positive (default value for CSAT)
"hard_easy" = Hard - Easy (default value for CES)
"dis_sat" = Very Dissatisfied - Very Satisfied
"unlike_like" = Very Unlikely - Very Likely (default value for NPS)
"poor_great" = Poor - Great
"none" = ""
```

For eg. a CSAT five\_stars score option with *neg\_pos* set would show the Negative and Positive indicators as below.

![CSAT five_stars view with the neg_pos score labels Negative and Positive highlighted above the star selectors](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/103782756_396685794556196_3062528507879611930_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AxQ-otGURNQQ7kNvwFj1xLK&_nc_oc=AdrJP1SBEeJ1hltDQUD3H5b25PHfuKVUzptj1qmX2FWhaiM3l3TqZbLOMVHhVTq3zb3txZ24hVadSLWWIOzOuBon&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQC0LqJYo_tdJ4e2VV9jMKjwm2ZYT_rVl5r_-aL2_ujuUw&oe=6A6084B8)

## 24 hour restriction

The standard messaging window for sending the template to a user is 24 hours after the user's last message. We encourage you to send the template within the 24 hour window for better customer experience and response rates. We also recognize that sometimes surveys will need to be sent outside this window. For that, you can use the [message-tag](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/send-api#sending): **CUSTOMER\_FEEDBACK** while sending the template. This tag allows you to send the template within 7 days after the user's last message.
Please note, the tag can only be used with the customer feedback template. Use in any other form is prohibited and will fail.

## API details:

### Sending a template to the thread:

With the specific nomenclature out of the way, let us now look at the API that can be used to send the Customer Satisfaction Template to a thread.

A call should be made to the Send API with the following POST structure. Example values filled in:

```
  curl -X POST -H "Content-Type: application/json" -d '{
  "recipient": {
    "id": "<PSID>"
  },
  "message": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "customer_feedback",
        "title": "Rate your experience with Original Coast Clothing.", // Business needs to define.
        "subtitle": "Let Original Coast Clothing know how they are doing by answering two questions", // Business needs to define.
        "button_title": "Rate Experience", // Business needs to define.
        "feedback_screens": [{
          "questions":[{
            "id": "hauydmns8", // Unique id for question that business sets
            "type": "csat",
            "title": "How would you rate your experience with Original Coast Clothing?", // Optional. If business does not define, we show standard text. Standard text based on question type ("csat", "nps", "ces" >>> "text")
            "score_label": "neg_pos", // Optional
            "score_option": "five_stars", // Optional
            "follow_up": // Optional. Inherits the title and id from the previous question on the same page.  Only free-from input is allowed. No other title will show.
            {
              "type": "free_form",
              "placeholder": "Give additional feedback" // Optional
            }
          }]
        }],
        "business_privacy":
        {
            "url": "https://www.example.com"
         },
        "expires_in_days" : 3 // Optional, default 1 day, business defines 1-7 days
      }
    }
  }
}' "https://graph.facebook.com/v7.0/me/messages?access_token=<PAGE_ACCESS_TOKEN>"
```

### API Properties:

| Property | Type | Description |
| --- | --- | --- |
| `id` | String | *Required*. The `PSID` of the customer. |
| `attachment.type` | String | *Required*. Must be "template". |
| `template_type` | String | *Required*. Must be "customer\_feedback". |
| `title` | String | *Required*. Defines the main title of the template that gets sent to the thread with the button to open the feedback form. **Max 65 chars allowed. No URLs.** |
| `subtitle` | String | *Required*. Defines the sub-title of the template that gets sent to the thread with the button to open the feedback form. **Max 80 chars allowed. No URLs.** |
| `button_title` | String | *Required*. Defines the button title for the button that will open the feedback form. **Max 20 chars allowed. No URLs.** |
| `feedback_screens` | Array<`Objects`> | *Required*. This is an array of objects. Each object represents 1 page. Please note we only support one page and one question per page right now. If multiple pages or multiple questions per page are set, we will throw an error back. |
| `questions` | Array<`question`> | *Required*. Each page may have up to 1 questions. This is an array of objects. Each object represents 1 question. |
| `question.id` | String | *Required*. Alphanumeric. Maximum 80 characters. Must be unique throughout the entire form. You shall use these as the unique identifiers of the questions which would be sent back in the response to help you tie context back to your system. Ids should be alpha numeric and can contain any number of underscores(\_) for e.g. banjkkl\_\_2345 is a valid id, abnj-4567 is not a valid id due to the "-". |
| `question.type` | String | *Required*. The type of the question. Currently supported values include: "csat", "nps", "ces", "free\_form. Please check Score Types section above for more details. |
| `question.title` | String | *Optional*. You can provide your own custom title for the question, if none is provided, the default\_title will be chosen. Please check Score Types section above for more details. Note: default\_titles will be translated and localized to the locale of the user. Custom titles will not be translated, you would have to perform the translation yourselves if needed. **Min 5 chars and Max 85 chars allowed. No URLs.** |
| `question.score_label` | String | *Optional*. Field to define the level labels for low and high values. Please check Score Level Indicators section above for details. Values include 'neg\_pos', 'hard\_easy', 'dis\_sat', 'unlike\_like','poor\_great' |
| `question.score_option` | String | *Optional*. Field to define the score selector views. For e.g. values include '1\_to\_5', 'five\_stars', 'five\_emojis' for csat type. Please check Score Types section above for more details. |
| `question.follow_up` | `Object` | *Optional*. Object to set a free form input. Inherits the title and id from the previous question on the same page. Only free-from input is allowed. |
| `question.follow_up.type` | String | *Required*. Set value as 'free\_form'. |
| `question.follow_up.placeholder` | String | *Optional*. Placeholder to be shown inside the free form text input. Defaults to **"Give additional feedback"**, if none provided. **Max 65 chars allowed. No URLs.** |
| `business_privacy` | `Object` | *Required*. Object to provide your privacy policies in the template. |
| `business_privacy.url` | String | *Required*. The link to your hosted privacy policy. Example, the "privacy policy" link in the screenshots. You only need to provide the URL, and the link text will be automatically generated in the template. |
| `expires_in_days` | Integer | *Optional*. Set the time for template expiration in minutes. You can set a value between 1 to 7. Unit is days. If no value is set then a default of 1 day would be set. |

![Two Messenger screens showing the in-thread Rate Experience template and the resulting CSAT feedback bottom sheet from the API call](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/103260056_2779439025617991_1201279550415615271_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kLVaSkxh2WwQ7kNvwEmkGEA&_nc_oc=AdqEE2p82b7FoDi43VZgJkfqMFKERFsFzfu7-ZBEfmq9pmp7NYHgcScGsJXPmpGcghdFGwO70BcYZ2rMaH4VbxFi&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=BMQGvZB-_BRfm8aTO920XQ&_nc_ss=7b289&oh=00_AQB6zSucNEy2j_P8FKQ3xBh3dbkI1cMMEtB4GaCfY9_3RA&oe=6A605B34)

### Restrictions:

Please re-note the following restrictions that apply to the template.

* A template can have:
  * 1 title + 1 scoring component + 1 free-form input box
  * 1 title + 1 scoring component
  * 1 title + 1 free-form input
* A template CANNOT have:
  * More than 1 title
  * More than 1 scoring component

Please check individual field restrictions in the API properties table above.

### Receiving data on submission:

After the template is sent in thread, you shall wait and expect the customer to fill in the information and submit it. Your web-hook server will receive a "**messaging\_feedback**" event (i.e., an event that contains the submitted data) once the customer submits the feedback. Please ensure you have subscribed to the "**messaging\_feedback**" webhook subscription for your app and page in the app dashboard.

Note: The customer will have the time; set in the **expires\_in\_days** field of the send request (default 1 day, if not set) to fill the template and submit the feedback. The form will auto-expire after the set time, after which the in-thread entry point will no longer be available.

The received feedback event will be as below:

```
  {
  "object": "page",
  "entry": [{
    "time": <timestamp>,
    "messaging": [{
      "sender": {
        "id": "<PSID>"
      },
      "recipient": {
        "id": "<page_id>"
      },
      "messaging_feedback": {
        "feedback_screens": [{
          "screen_id": 0,
          "questions": {
            "hauydmns8": {
              "type": "csat",
              "payload" : "5",
              "follow_up": {
                "type": "free_form",
                "payload" : "I am very satisfied!"
              }
            }
          }
        }]
      }
    }]
  }]
}
```

### Receive Event Properties:

| Property | Type | Description |
| --- | --- | --- |
| `time` | Integer | The timestamp when the customer submits the feedback. |
| sender `id` | String | The customer `PSID`. |
| recipient `id` | String | The page `ID` of your business page. |
| `messaging_feedback` | `Object` | The standard key of a "messaging\_feedback" event. This holds an array of feedback\_screens with an array of object of feedback question responses. |
| `messaging_feedback.feedback_screens` | Array<`Objects`> | Holds feedback by the customer. Each object represents a form page of your original request, with customer feedbacks. Each object has a key "screen\_id", which is the form page index, and a key "questions", which holds your question ids and customer answers. The objects are present in the same sequence as your original request. |
| `feedback_screens.questions` | `Object` | Holds questions in a form page. Each object has the key as the question id, and the value answered by the customer. |
| `question.<id>` | String | question.id set in the Send API request, as a key to the responses submitted by the customer. |
| `question.<id>.type` | String | Defines the type of the scoring mechanism used. For e.g csat, nps, ces etc |
| `question.<id>.payload` | String | Score value selected by the customer. |
| `question.<id>.follow_up` | `Object` | Object that stores the value of the free form text input if set. |
| `follow_up.type` | String | Will be set to free\_form to identify free form responses vs other responses. |
| `follow_up.payload` | String | Free form text feedback provided by the customer. |
