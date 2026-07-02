---
title: "Bypassing the phone number addition screen"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/website-optional
---

# Bypassing the phone number addition screen

Updated: Jun 26, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This document describes how to customize Embedded Signup to bypass the [phone number addition screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) (shown below). The same customization also bypasses the [phone number verification screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-verification-screen).

![Embedded Signup phone number addition screen](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/464076811_858112679765152_5952854678961541773_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hzwA6NBd8YQQ7kNvwFs2Bly&_nc_oc=AdomcWYVjAkUACy7bJ87ueZyRp-WCt8mHIVA73U_rrxpK-KLm95Xqe2lUJD4v0640A8LCOAafriIhYnkQTPlr0hF&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=6UgcSOUqoqmfMKE89t7c4g&_nc_ss=7b2a8&oh=00_AQASZhIh230cGj3KgKTGmBEjk1lzBB1H9vsgCEsvN3xRig&oe=6A60758E)

You might not want your business customers to enter or choose a business phone number in the phone number addition screen. You can customize Embedded Signup to skip the screen entirely. However, after a customer successfully completes the customized flow, you must register a phone number for them. To do this, you can [programmatically create and register their business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers). Alternatively, you can build a UI in your app that lets them register a phone number.

## Enabling the feature

The phone number screen bypass is controlled by the `featureType` parameter. To enable it, set `featureType` to `only_waba_sharing` in the [launch method and callback registration](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#launch-method-and-callback-registration) portion of the Embedded Signup code:

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '<CONFIGURATION_ID>', // your configuration ID goes here
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {},
      featureType: 'only_waba_sharing', // set to only_waba_sharing
      sessionInfoVersion: '3',
    }
  });
}
```

When a business customer successfully completes the bypass (`only_waba_sharing`) flow, the [session logging message event](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) will have `event` set to `FINISH_ONLY_WABA`:

```
```
{  
  data: {  
    phone_number_id: "<CUSTOMER_BUSINESS_PHONE_NUMBER_ID>",  
    waba_id: "<CUSTOMER_WABA_ID>"  
  },  
  type: "WA_EMBEDDED_SIGNUP",  
  event: "FINISH_ONLY_WABA",  
  version: 3  
}
```
```
