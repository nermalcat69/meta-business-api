---
title: "Testing and Debugging Flows"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/examples
---

# Testing and Debugging Flows

Updated: Jun 28, 2026

WhatsApp Flows provides multiple options for developers to test and debug their flows before publishing.

To test and verify that a flow works as expected, you can use:

* [Interactive preview](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/testingdebugging#test-flow-using-the-interactive-preview)
* [Draft flow message](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/examples#send-draft-flow-to-your-device)

To debug any issues with the flow developers can use:

* [Action tab in the Flow Builder](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/examples#debug-flow-actions-using-the-actions-section-of-the-builder)
* [Endpoint health check](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/examples#debug-endpoint-configuration-and-encryption-setup-using-health-check)

## Test flow using the interactive preview

![Interactive preview of a WhatsApp Flow in the Flow Builder Preview section](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/641418964_1445181697340480_7309697148052643154_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=krX9UEjCPPUQ7kNvwEKYB5e&_nc_oc=AdrZ4JFRC1hDBurdsg1rjeSTKJz91ENGVdQ2iY05NBS31bTIZgap4_3HmWa7efm0Un8xd0HhD5_qQS8xxpdHpqah&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=C5EeF7k9W2Ijw_Af54Cpew&_nc_ss=7b289&oh=00_AQChGdpLqRdr1NUoPo8Xifdvfg_TgkUznmyk2qOvqdcbiw&oe=6A606280)

Interactive preview lets you test the flow throughout the development process. Interactive preview triggers the same actions as the real device would, and if the flow has an endpoint configured, the flow sends encrypted requests to the endpoint. To start interactive preview:

* Navigate to the [Flows page in WA Account Manager⁠](https://business.facebook.com/wa/manage/flows/) and click on any Flow.
* Trigger the interactive preview by clicking on the settings menu in the **Preview** section of the Flow Builder and enabling **Interactive mode** toggle.
* In the modal that appears, select the phone number, enter any string as **Flow token** and choose how to **Request data on first screen**.

You can now interact and complete the flow in the preview. The Flow Builder logs each action in the **Actions** tab at the bottom of the editor where you can see more details. If the Flow is using an endpoint each `data_exchange` action will trigger the request to the endpoint. Full request and response are also visible in the **Actions** tab.

## Send draft flow to your device

![Draft Flow message on a device showing the draft-mode warning banner](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/644354673_1445181780673805_7011494971436207321_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=1bvdSZPJsp0Q7kNvwFwOZF3&_nc_oc=AdrHNPqcTObMeSNWlcekXovYnQGPIHS9CfLFEa3BbJVc2PS-es3Qapbs_BFbT0mQ-hdA5dD-h-hI0Z5LNw1JDEQ1&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=C5EeF7k9W2Ijw_Af54Cpew&_nc_ss=7b289&oh=00_AQA8xXqKBbTz3TrdMO6ioXr9-FL7YXdqqTgqYgbaLyi6Ew&oe=6A606116)

Before you publish your flow you can also send it and test it on a real device. Flow messages sent in draft mode show a warning banner on the device. Once a Flow is published, the device no longer shows this warning.

Ensure you first send a message from your test device to the sender number. This is to make sure that you are within the 24-hour customer service window to receive the message. Learn more about [customer service windows](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows).

* Navigate to the [Flows page in WA Account Manager⁠](https://business.facebook.com/wa/manage/flows/) and click on any Flow in *Draft* state.
* In the Flow Builder select **three dot** menu in the top right corner of the screen and select **Send** option.
* In the modal select **Sender number** from the list. As the **Recipient phone number**, enter the phone number of your test device.
* Enter any string as a **Flow token** (learn more about the [`flow_token` parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow#interactive-parameters)), select the **Request Data option** (learn more about [providing data for the first screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow#interactive-parameters)) and click on **Send**.

You should receive a message with a Flow attached to your device and be able to test the Flow.

Draft messages can also be [sent via API](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow#interactive-parameters) by setting `mode` parameter to `draft`.

## Debug flow actions using the Actions section of the Builder

![Actions tab at the bottom of the Flow Builder code editor listing logged Flow actions](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/641500520_1445181784007138_6514310903295791856_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=r_nMzlyA_UoQ7kNvwHydHfJ&_nc_oc=AdpwAWTODDExJPAORFEQLcB6zLdIJgMSBGwpEdfAvCX_JkB0XlpXF-8qwtf4Wl6XGL0mfEEOLPQZRZNuoLlz9ESV&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=C5EeF7k9W2Ijw_Af54Cpew&_nc_ss=7b289&oh=00_AQApSqS0fGkBK3KJBMAsEEeO93OCqfsw1L5PrGM1Klqz2Q&oe=6A606946)

When you enable the Interactive preview, the Flow Builder logs each Flow action in the Actions tab at the bottom of the code editor.

**Flows without endpoint**

For Flows without an endpoint the Action tab will show:

* `navigate` actions including any data passed between the screens
* `back` action when user clicks on back button
* `complete` action with the full payload submitted at the Flow completion

**Flows with endpoint**

For Flows with an endpoint the Action tab will show all the actions:

* `init` action with initial data returned by the endpoint
* `navigate` actions including any data passed between the screens
* `data_exchange` actions with HTTP status code, the unencrypted request sent to the endpoint, and the unencrypted response received from it.
* `back` action when user clicks on back button
* `complete` action with the full payload submitted at the Flow completion

## Debug endpoint configuration and encryption setup using health check

![Endpoint health check results in the Flow Builder showing configuration, reachability, encryption, and payload checks](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/641631141_1445181750673808_1340548174965317536_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=4roHQDPMkHkQ7kNvwFPwnFs&_nc_oc=AdqAVNJLEqfaLn4dWKUsaVk5mdilq9gz7PY5sMXsAg1tAJ_v1g-VG-BGwJswfmZcVGv80d7IkLAs5AkU1vnInXec&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=C5EeF7k9W2Ijw_Af54Cpew&_nc_ss=7b289&oh=00_AQCR5cPznn1cNVJzCojmlcvBkJDEPQagIxZQq07Ph2n8uQ&oe=6A606B5C)

The health check allows users to verify that the endpoint health check ping request and encryption are working correctly.

Endpoint health check is accessible from the Flow Builder, from the three dot menu in the top right corner of the screen. Select **Setup** under the **Endpoint** section. In the modal select **Health check** step and click on **Run Check** button to trigger the check.

Health check triggers a ping against the provided endpoint URI and if there’s an error, the health check returns detailed error and resolution information.

It detects various issues such as:

* *Missing/incorrect configuration*: It checks whether all the pre-requisites are set up correctly. For example, it checks whether the public key is uploaded, or whether the endpoint URI is set.
* *Endpoint not being reachable or responding correctly*: It checks whether the provided endpoint URI is reachable from the internet, whether it is responsive, and whether it returns expected status code.
* *Encryption*: It checks whether the response is encrypted, whether it is encrypted with the correct key, and whether it is base64 encoded.
* *Payload*: It checks whether the response payload is as expected.

## See also

See following reference guides for additional information:

* [List of all Flow error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/reference/error-codes)
* [Endpoint Error notification request](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/implementingyourflowendpoint#error_notification_request)
