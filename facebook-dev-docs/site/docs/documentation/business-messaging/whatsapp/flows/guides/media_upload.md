---
title: "Lifecycle of a Flow"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload
---

# Lifecycle of a Flow

Updated: Dec 1, 2025

Flows can exist in a variety of states during their lifetime,
with each state conveying different requirements, abilities, and limitations.
This article outlines the different states that exist, how a Flow transitions into each state, and what each state means for developers building and sending Flows.

![Flow state diagram showing transitions between Draft, Published, Throttled, Blocked, and Deprecated states](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/652320293_1459945439197439_1489942373579195270_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=YqlenpdM6BoQ7kNvwGGiSGz&_nc_oc=Adok3dSy70rE-6AviY_ySvKo6XYA_57YEJ4tJgDYjqlseKSnP4G8xRRZoADjwOw1YwmhqYsOhhDsGH_3TRkL4wtu&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=S8MutsW_qz0tHZlDOCijgQ&_nc_ss=7b289&oh=00_AQBRFCeXRgndkLEoQjc6VvXMxTnqmQGPgs0t7bWkvwf6-A&oe=6A606C7D)

## Business-set Flow states

Most common states are the result of API calls, such as creating or publishing a Flow. This section covers the various states that you have control over as a business.

### Draft

When a Flow is initially created, it enters the “Draft” state which indicates that the Flow is actively being modified.

While in the Draft state, the Flow is only able to be sent for testing, and also has the ability to be fully deleted if no longer needed.

WhatsApp shows a banner at the top of the Flow when a user views it in Draft state.

**Next states**: [Deleted](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#deleted), [Published](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#published)

### Deleted

Technically this is not a “state” of a Flow because this represents a Flow that no longer exists.
However, it’s important to note that Flows may be deleted, but only if they are in the Draft state.

You can delete a Flow using [Flow Builder](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/gettingstarted).

**Next states**: None (terminal)

### Published

Once a Flow is ready to be sent, it transitions from the Draft state to the Published state. This allows it to be sent to real users rather than just for testing.

After a Flow has been published, you can make some changes and return the Flow to “Draft”. Use this option for small changes and fixes, rather than significant changes.

The following alternatives let you edit a Flow after publishing:

* Edit Flow metadata or Flow JSON. This puts the Flow back to “Draft”. Old messages keep previous content, but the new messages reflect the changes. Use this for small fixes.
* If you need to change the Flow significantly, [create a new Flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#create) that clones the existing one (using the `clone_flow_id` field).
* Since you cannot delete a published Flow, deprecate it instead using [the `/deprecate` API call](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#deprecate).

**Next states**: [Draft](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#draft), [Deprecated](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#deprecated), [Throttled](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#throttled)

### Deprecated

Once a Flow enters the Deprecated state, it can no longer be sent to real users. Keep in mind that a deprecated Flow may still be present on users’ devices and you may still see responses from the deprecated Flow.

**Next states**: None (terminal)

## System-set Flow states

This section covers the states that can only be entered based on WhatsApp monitoring determining that there is an issue or that an issue has been resolved.

### Throttled

In the case that WhatsApp monitoring detects that the endpoint or screen navigations for your Flow are unhealthy, it transitions the Flow to a Throttled state.
A throttled Flow can still be opened and sent, however sending is limited to 10 messages per hour.

If your Flow enters the Throttled state and you need help diagnosing the issue, start by opening a support case using the [Support Portal⁠](https://business.facebook.com/direct-support/).

If WhatsApp monitoring detects an improvement in the health of the Flow’s endpoint, it transitions the Flow out of the Throttled state and back into the [Published](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#published) state.

**Next states**: [Published](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#published), [Deprecated](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#deprecated), [Blocked](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#blocked)

### Blocked

If a Flow has entered the [Throttled](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#throttled) state and WhatsApp monitoring detects that the health of the provided endpoint has deteriorated even further, it transitions the Flow into the Blocked state. This is to prevent a degraded user experience for WhatsApp Flows.

While in the Blocked state, the business cannot send the Flow and users cannot open it. WhatsApp monitoring continues to check the health of the endpoint, and upon improvement it transitions the Flow back to [Throttled](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#throttled) and then to the [Published](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#published) state.

**Next states**: [Deprecated](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#deprecated), [Throttled](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/media_upload#throttled)

## Editing a published Flow

After a Flow has been published, you might still need to make some changes to it. You can modify a published Flow by updating the metadata or Flow JSON. After that, the Flow returns to the “Draft” state.

Note that the old cloning functionality still works the same way as before. You can always move your progress to a new Flow by cloning the current one. It’s your decision whether you want to make changes in the current Flow or create a new one by cloning, depending on what fits better.

Flow messages that you already sent to WhatsApp users won’t reflect the updates you made to the Flow. Only the new messages you send after you publish the Flow again will have the new version of the Flow JSON. WhatsApp supports up to 5 last versions. WhatsApp deprecates older Flow versions.

Keep the new Flow JSON in sync with the Flow endpoint if it’s been used. Breaking changes to the Flow JSON will break the whole Flow experience if the Flow data doesn’t correspond to the endpoint contract.

WhatsApp only measures quality features like Flow endpoint webhook notifications, error rate, and latency metrics for the last published Flow version.

**Restrictions**

* Some old Flows still don’t support editing. You can create a new Flow by cloning the old one, and the new Flow will support editing.

## Example Flow lifecycles

To illustrate how Flows might transition through the various states, here are some real-life examples of the stages and events leading to transitions.

### A successful Flow

In this example, you publish a Flow and it continues to run with no issues. One day it may be deprecated, but it has not entered that state yet.

| State | Event | Action | New state |
| --- | --- | --- | --- |
|  | Create a new Flow | [Create](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#create) | Draft |
| Draft | Update the Flow JSON content | [Update JSON](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#update-json) | Draft |
| Draft | Update the `data_channel_uri` | [Update](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#update) | Draft |
| Draft | Decide that the Flow is ready for production | [Publish](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#publish) | Published |

### A Flow with health issues

In this example, you publish a Flow that has intermittent health issues with the provided endpoint. WhatsApp monitoring detects problems, recoveries, and then further problems. Finally, health is fully restored.

| State | Event | Action | New state |
| --- | --- | --- | --- |
|  | Create a new Flow | [Create](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#create) | Draft |
| Draft | Update the Flow JSON content | [Update JSON](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#update-json) | Draft |
| Draft | Decide that the Flow is ready for production | [Publish](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#publish) | Published |
| Published | WhatsApp monitoring detects health issues with the provided endpoint or screen navigations for your Flow | Throttle | Throttled |
| Throttled | WhatsApp monitoring detects the endpoint is healthy | Unthrottle | Published |
| Published | WhatsApp monitoring detects health issues again | Throttle | Throttled |
| Throttled | WhatsApp monitoring detects health has deteriorated further | Block | Blocked |
| Blocked | WhatsApp monitoring detects the endpoint is healthy | Unblock | Throttled |
| Throttled | WhatsApp monitoring detects the endpoint is still healthy | Unthrottle | Published |

### A Flow that never makes it to production

In this example, you work on a Flow but decide that you no longer need it. This Flow never ends up being visible to real users.

| State | Event | Action | New state |
| --- | --- | --- | --- |
|  | Create a new Flow | [Create](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#create) | Draft |
| Draft | Update the Flow JSON content | [Update JSON](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#update-json) | Draft |
| Draft | Update the `data_channel_uri` | [Update](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#update) | Draft |
| Draft | Decide that the Flow isn’t needed anymore | [Delete](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowsapi#delete) | Deleted |
