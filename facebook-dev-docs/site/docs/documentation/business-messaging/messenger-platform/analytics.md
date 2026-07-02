---
title: "Natural Language Processing for Messenger Platform"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/analytics
---

# Natural Language Processing for Messenger Platform

Updated: May 22, 2024

Natural Language Processing (NLP) allows you to understand and extract meaningful information (dates, time, and more) from messages that your business receives. You can use this information to identify intent to implement the messaging experience needed for the conversation.

Using Meta’s Built-in NLP reduces API calls that count against messaging rate limits.

## How It Works

Before a message is delivered to your business, Meta’s Built-in NLP first parses the messages to help detect meaning and extract information using Wit.ai from Meta as well as a confidence level that indicates the probability the parser is correct. The message will then be relayed to your business as usual, along with any meaningful information, **entities** and **traits**, detected in the message. For example, if a message contains a phrase like “hello, tomorrow at 2pm”, you will get a trait that includes the greeting and an entity that includes the actual timestamp.

Language identification is automatically enabled with built-in NLP, and the date and time are automatically localized based on the locale in the person’s profile.

### Wit.ai

The Wit.ai is the app that parses the message and creates the entities from a person’s message. You can use the default Wit.ai for supported languages or create your own Wit.ai app for each language you want to support. When Messenger Platform receives a message, it will first find the top detected language, and use the associated Wit.ai app for extracting the entities. If there isn’t a Wit.ai app linked to the top detected language, the default language model will be used.

Visit our Wit.ai documentation for more information about [Wit.ai apps and creating and testing your own custom Wit.ai app⁠](https://wit.ai/) as well as a [list of supported languages⁠](https://wit.ai/faq?fbclid=IwAR3sLT-fr3Z9Vy60G5oSWhSMZMPsR3Wy_-MDhC8WV0sPGfPst1HfZ24tdU4).

## Add NLP to Your Page

There are two ways to add NLP to your business Page, using the Meta App Dashboard or programmatically.

### App Dashboard

To add Built-in NLP using the [App Dashboard](https://developers.facebook.com/apps), under **Products > Messenger > Settings** and scrolldown to the **Built-in NLP** section. Select the Facebook Page from the dropdown menu and toggle to **ON**. Then select the **Language Model**, which includes an option to add multiple languages. **Advanced settings** allow you to select the NLP version, the verbose flag to get more information about entities, and n-best values for each intent and trait you want to receive. This setting also determines the number of detected locales returned.

Random samples from your past conversations in the Page inbox will be compiled, and will show in a newly created Wit app. The samples will be available for tagging in your Wit.ai app immediately.

### Programmatically

To add NLP programmatically, you will need:

* A Page access token requested from a person who can perform the `MESSAGING` task on the Page
* The Page ID
* The `pages_messaging` and `pages_manage_metadata` permissions

Send a `POST` request to the `/PAGE-ID/nlp_configs` endpoint with the `nlp_enabled` parameter set to `true` to enable NLP for the Page. You can also include the `model` parameter to set a language other than the default, English.

View the [Page NLP reference](https://developers.facebook.com/docs/graph-api/reference/page/nlp_configs) for more information.

#### Sample Request

*Formatted for readability.*

```
curl -i -X POST "https://graph.facebook.com/v25.0/me/nlp_configs
      ?nlp_enabled=true
      &model=PORTUGUESE
      &access_token=PAGE-ACCESS-TOKEN"
```

You can use the `custom_token` parameter to use your custom Wit.ai app, and update NLP parameters with `POST` requests. To disable NLP, send a `POST` request with the `nlp_enabled` parameter set to `false`.

## Webhook Notification

The message webhook now contains two NLP fields when built-in NLP is enabled: `nlp` and `nlpv2`. The `nlp` field is a legacy field using a deprecated naming convention for entity and trait names. The `nlpv2` field uses simplified names for entities and traits, as shown below.

The `nlp` field will be removed on June 18, 2024.

If Built-in NLP is enabled, the pertinent NLP entities and traits will be included in the `message` webhooks notification for each message object.

### Entities and Traits

The Messenger Platform returns the following entities by default.

| Information | Entity |
| --- | --- |
| Amount of money | `amount_of_money` |
| Date/Time | `datetime` |
| Distance | `distance` |
| Duration | `duration` |
| Email address | `email` |
| Location | `location` |
| Phone number | `phone_number` |
| Quantity | `quantity` |
| Temperature | `temperature` |
| URL | `url` |
| Volume | `volume` |

### Built-in Traits

The Messenger Platform returns the following traits by default.

| Information | Trait |
| --- | --- |
| Bye (English only) | `bye` |
| Greetings (English only) | `greetings` |
| Sentiment | `sentiment` |
| Thanks (English only) | `thanks` |

Visit [our Wit.ia documentation⁠](https://wit.ai/docs/built-in-entities/20210928) to learn more about available entities, traits, and more.

### Example Notification

The following example is for a message that includes the phrase “see you tomorrow at 4pm” and would include the `datetime` and `sentiment` entities after parsing:

```
{...,
  "entities": {
    "datetime:datetime": [
      {
        "id": "340464963587159",
        "name": "datetime",
        "role": "datetime",
        "start": 8,
        "end": 23,
        "body": "tomorrow at 4pm",
        "confidence": 0.9704,
        "entities": [],
        "type": "value",
        "grain": "hour",
        "value": "2020-06-16T16:00:00.000-07:00",
        "values": [
          {
            "type": "value",
            "grain": "hour",
            "value": "2020-06-16T16:00:00.000-07:00"
          }
        ]
      }
    ]
  },
  "traits": {
    "sentiment": [
      {
        "id": "5ac2b50a-44e4-466e-9d49-bad6bd40092c",
        "value": "neutral",
        "confidence": 0.6162
      }
    ]
  }
```

### Parse an NLP Message

In your `messages` Webhooks, you can respond to a message by taking advantage of Default NLP. For example, if you have a `handleMessage()` function that responds to each message received, you can use the `greetings` entity to send an appropriate response:

```
function firstTrait(nlp, name) {
  return nlp && nlp.entities && nlp.traits[name] && nlp.traits[name][0];
}

function handleMessage(message) {
  // check greeting is here and is confident
  const greeting = firstTrait(message.nlp, 'greetings');
  if (greeting && greeting.confidence > 0.8) {
    sendResponse('Hi there!');
  } else {
    // default logic
  }
}
```
