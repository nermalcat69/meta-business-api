---
title: "Integration Patterns"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/integration-examples
---

# Integration Patterns

Updated: Jun 26, 2026

## Possible high-level approaches

| Approach | Number setup | Solution Partner responsibilities | Calling Tech Provider responsibilities | End business responsibilities |
| --- | --- | --- | --- | --- |
| **Message Solution Partner capable of Calling** | Extend an existing messaging number for calling, or use a new number. | * Messaging Solution Partner reuses their app and subscribes it to calls webhooks. You can also create a new calling-specific app, but this is [not recommended](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/integration-patterns#single-app-vs--multiple-apps) * Process calls webhooks and coordinate with real-time media infra * Make calls related Graph API calls similar to messaging Graph API calls | Not applicable because there is only a single partner involved. | * Enable and use calling * Continue paying the Solution Partner, who now bills for calling usage |
| [**Multi-solution Conversation**](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations) | Single number independently operated by both messaging Solution Partner and Calling Solution Partner or TP | * Messaging Solution Partner does no changes | * Calling Solution Partner or TP hosts ES on their own website pointing to their own app * Gets the business to go through their ES | * Onboard using calling partner’s ES * Pay the bills to Messaging Solution Partner like before * For Calling partner incurred activity, pay the bill to calling partner if they are a Solution Partner or to Meta if they are not a Solution Partner |
| Exclusive Calling ISV | New number for calling | Not applicable because there is no messaging Solution Partner | * Calling ISV hosts Embedded Signup (ES) on their website pointing to their own app * Gets the business to go through their ES * If ISV is a tech provider or partner, Meta bills the business directly. ISV and the business figure out their own billing * If ISV is a Solution Partner, they can extend their credit line to the business | * Onboard using ES on TP * If ISV is Tech Provider or Partner, pay Meta directly   * This requires the business to have a direct payment relation with Meta. Setting up this relation may take several weeks * If ISV is Solution Partner, pay the bill from Solution Partner |
| [Multi-platform solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) using Calling ISV registered as Tech Provider (TP) | New calling exclusive number serviced (**only**) by Calling TP | * Solution Partner and TP work together to create or approve a multi-partner solution. Solution Partner and TP have their own apps * Work out Messaging Solution Partner <> Calling ISV commercial relation * Extend credit line to end business * Can receive messages or calls but cannot send messages or calls because you can select only one of the two partners to send messages or calls in a multi-platform solution | * Solution Partner and TP work together to create or approve a multi-partner solution. Solution Partner and TP have their own apps * Work out Messaging Solution Partner <> Calling ISV commercial relation * Onboard businesses using ES pointing to created solution * Send or receive messages or calls | * Onboard using ES on TP * The business is informed about TP in ES * Pay the bill from Solution Partner |

## Multi-solution conversations (MSC)

Multi-solution Conversations allow multiple solutions on the same phone number, localizing messaging and calling in a single chat thread.

[Learn more about Multi-Solution Conversations](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations)

## Integrating using a third party calling provider detailed design

The following logical architecture illustrates how to integrate WhatsApp Business Calling using a third party (3p) calling provider.

In this scenario, you would use the 3p vendor internally, and that 3p vendor would not be visible to Meta. This pattern is similar to any other SaaS service you may be using.

The diagram also illustrates how this architecture can be optionally extended to integrate with the SIP infrastructure on your side.

**Our terms disallow use of PSTN on *any* leg of the WhatsApp call in the overall call flow.**

Even if you bridge WA call into the SIP world, you must ensure it still stays exclusively on VoIP and never touches the PSTN. SIP trunk by itself is not disallowed because technically a SIP trunk can be used without any PSTN at all.

![Architecture diagram showing WhatsApp Business Calling integration with third-party provider](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/565132736_1339318364593481_1182320683426712488_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_on7cudB_HQQ7kNvwF_UvJk&_nc_oc=AdqAJ-nAclpSqnWPj0hj0H-Al847i-ps8APEFesgDUiMT_PuAZ59_HBe-axK2trYIE23HeQDc_EZSDC1o6eW_mCb&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=dGvlwJHJmc5u6v4TQjA5lQ&_nc_ss=7b2a8&oh=00_AQBeJ-y5uCZzKF8UXJn40sIeFff2DF9q_yA8bgXZgAzuBA&oe=6A606958)

## Single app vs. multiple apps

This section covers guidelines and considerations for reusing your existing messaging app for calling vs. creating a new app specifically for Calling API features.

To integrate with the WhatsApp Calling API, you need to call [Graph API endpoints](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#whatsapp-cloud-api) and process Webhooks from Meta. This [requires you to have an app](https://developers.facebook.com/docs/development/create-an-app), and almost always, you should already have an app that is used for messaging.

You can reuse an existing app which is used for [Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview) and for a messaging use case.

In this setup, the Webhook Callback URI is the same for both message and call related webhooks, but the webhook payload can be used to distinguish between the two categories of functions (messaging and calling). Hence you can still forward Calling API specific webhooks to a calls related component from your main webhook business logic.

Reusing the same app offers the following benefits:

* Reduced operational overhead (for example, app review, ongoing maintenance)
* Simplified footprint on Meta
* Equality between the app used for Embedded Signup and the one used for invoking Graph APIs and receiving webhooks
* There would be no impact to existing functionality by reusing that app for calling. You need to ensure the webhook server gracefully handles calls-related webhooks.

Having separate apps is still supported, see the [Get Started FAQ](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq#getting-started-faq) for details.

## Guidelines for media path integration

The WhatsApp Business Calling VoIP stack is designed to be compatible with WebRTC. However, to ensure smooth integration with the WhatsApp protocol, Meta restricts the supported functionalities. As a result, the following requirements and recommendations apply.

### Mandatory requirements

If any mandatory requirement is unmet, the call will fail. This failure can occur either during the call signaling phase, leading to a rejected call, or during the media packet decoding phase.

* Use only the supported codecs.
* For Opus, set the media clock rate to 48 kHz.
* For Opus, use a `ptime` of 20 ms.
* Audio must use a single SSRC. The Meta relay server overwrites the SSRC of all business audio packets to a fixed SSRC before these packets reach the WA client. WA clients handle only one audio source from their peers. Using multiple SSRCs causes undefined behavior. This undefined behavior includes severe media corruption, audio glitches, and likely total media failure.
* Set the DTMF clock rate to 8 kHz.

### Recommendations

While the following aspects are not mandatory, they are recommended to achieve high call quality and reliability.

* **ICE Process**
  * Our VoIP stack is ICE-LITE, so it is recommended that Solution Partners’ VoIP stack is ICE-FULL. ([RFC 5245 Section 2.7⁠](https://datatracker.ietf.org/doc/html/rfc5245?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5hUUCuVfMrSpK1nFWwfgmhEX4J170f66mpbcRuH2F1v9AX32Sq6E3-nMvJdw_aem_zQZRjbb3Ajl9qFef31D3HA#section-2.7))
  * Solution Partners’ VoIP stack should initiate the ICE process by sending STUN connectivity checks.
  * Solution Partners’ VoIP stack should assume the ICE CONTROLLING role, as Meta will only assume the CONTROLLED role.
  * Use regular nomination instead of aggressive nomination. ([RFC 5245 Section 8.1.1.2⁠](https://datatracker.ietf.org/doc/html/rfc5245?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5oi7-_dtdsPdT8yveuXaPzHDAFOiY_rkEuSJd1eHMqF3t6QQ_rCf88wxSBsA_aem_k6Wph4fS8kYDJqAR2k7_5Q#section-8.1.1.2))
  * Wait for the ICE process to complete before nominating the candidate and starting DTLS.
  * Do not switch the candidate in the middle of the call.
* **DTLS**
  * Use ECDH keys for the DTLS certificates to prevent packet fragmentation during transmission.
  * Solution Partner should act as a DTLS client. ([RFC 6347 Section 4.2⁠](https://datatracker.ietf.org/doc/html/rfc6347?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR41FnCrohmZXHsu5M4EJCevDdqIFZE9l2HqUq7Halwy_NG48ZuFb9Gh1XRg8A_aem__2jI8CjMwFhsIG1RsL6ejA#section-4.2))
* **Media**
  * WhatsApp might not always send the first RTP media packet. Your media server’s media egress should not wait for WhatsApp media ingress. If it does, there is a chance of deadlock where each side is waiting for the other to start media transmission.
* **Addressing Audio Clipping**
  * See [Audio clipping](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#audio-clipping-issue-and-solution) for details.
