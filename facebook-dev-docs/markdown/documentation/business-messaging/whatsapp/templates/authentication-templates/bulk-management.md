---
title: "Keyboard suggestions"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/bulk-management
---

# Keyboard suggestions

Updated: May 21, 2026

**iOS only:** Keyboard suggestions apply to iOS devices (iOS 26 and later). Android devices have their own keyboard suggestions mechanism and are not affected by these settings.

iOS 26 introduced native OTP autofill support for third-party messaging apps, including WhatsApp. When a WhatsApp user receives an authentication code on an iOS 26 device, iOS detects the OTP in the push notification and presents a one-tap autofill prompt in the keyboard, similar to how SMS OTP autofill works.

This feature works automatically with your existing authentication templates. You do not need to create new templates or update your integration.

## How it works

* Your app sends an authentication template message containing an OTP to a WhatsApp user.
* The WhatsApp user’s iOS device receives a push notification containing the code.
* iOS detects the numeric code in the notification and presents a one-tap autofill prompt in the keyboard.
* The WhatsApp user taps the prompt to autofill the code into your app.

The copy code button remains available in the WhatsApp message as a fallback.

## Requirements

For Keyboard suggestions to work, the WhatsApp user’s device must meet these requirements:

* The device must be running **iOS 26** or later.
* WhatsApp notifications must be enabled: **Settings** > **Notifications** > **WhatsApp** > **Allow Notifications**.
* Autofill for security codes must be enabled: **Settings** > **Passwords** > **Password Options** > **Autofill Security Codes**.

If any of these conditions are not met, the WhatsApp user will not see the autofill prompt. They can still use the copy code button in the WhatsApp message.

## Limitations

* iOS only detects **numeric codes of 3 to 8 digits**. Alphanumeric codes are not supported for autofill.
* Autofill does not trigger when the WhatsApp app is in the foreground, because iOS relies on the push notification to extract the code.
* This feature is only available on iOS 26 and later. WhatsApp users on earlier iOS versions are not affected.

## Opt out

Keyboard suggestions are enabled by default for all authentication templates. To disable it for a specific template, opt out at the template level:

* Open the authentication template in the template editor.
* Deselect the **Allow autofill on iOS** toggle.
* Save the template.

![WhatsApp Manager template editor showing the Allow autofill on iOS toggle](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/696208125_829700696874701_1896249807592746170_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=U4EcdAhuPHcQ7kNvwFaVDu8&_nc_oc=Adp5jUG00CoGqja7BI3486iTwL8crnCqJYx2lwJ6Elxg8RK8SS1UlpT29ArOVoTs1p-hKGN67q3hdgzKFBAwS_Q9&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=DmcsFNWd4A2QCbTR2IVtaw&_nc_ss=7b2a8&oh=00_AQBfLd27od87VIeKcs5HinDXchmbnstL7OFaZeqk9z9jGw&oe=6A6054E2)

This gives you granular control over autofill behavior. For example, you can disable autofill for high-security flows like financial transactions or account recovery while keeping it enabled for standard logins.

You can re-enable autofill at any time by selecting the **Allow autofill on iOS** toggle again.

The opt-out toggle is only available in WhatsApp Manager. There is no corresponding API parameter for this setting.

## Related

For Android OTP delivery, see [zero-tap authentication templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/zero-tap-authentication-templates).
