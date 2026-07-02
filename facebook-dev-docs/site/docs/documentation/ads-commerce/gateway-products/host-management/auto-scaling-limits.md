---
title: "Conversions API Gateway and Signals Gateway: Set Up SMTP Configuration"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/auto-scaling-limits
---

# Conversions API Gateway and Signals Gateway: Set Up SMTP Configuration

Updated: Feb 2, 2025

Admin users for systems that host multiple accounts can configure the system’s SMTP service, for both the Conversions API Gateway or Signals Gateway configuration, under the **Host settings** menu.

When this feature is enabled, each time a new user is invited, the Conversions API Gateway or Signals Gateway will send an invitation email (containing the invitation link) to the email address provided for their user profile. Invitation link regeneration and password reset requests will also inform the impacted user via their email address. If this feature is disabled the host will have to share the above links manually.

![SMTP configuration panel with Set up an SMTP to send emails toggled OFF and a notice that email through SMTP is disabled](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/475138904_584035797775963_6221341055336608427_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=92T4LBaO9L8Q7kNvwEzGRia&_nc_oc=AdoLj9ImmMvVPvIDUy_4xpXbOz_FlOfLQITzCOCbA6S6a-oS_GgukAIxUkbx7dpfcQUFmXan7VKA3gVn-Gky126h&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=Ib1FsE8GTdEBGx2h1Hzj1A&_nc_ss=7b289&oh=00_AQC6GG_mfAH74mOimOmhRFusHbbs8pU6iNshIqEn3LIPbg&oe=6A60A1E3)

![SMTP configuration panel toggled ON showing Host, Port, Sender display name, Sent from fields and Enable SSL, StartTLS, authentication toggles](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/475330845_628686429629397_7925495154724998794_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=a2M4_XbqLx8Q7kNvwH__46g&_nc_oc=AdrKGZw5AQnW5EeWZ2guDJ-wYrZQxVwx_vF95KLBhNXriB2mFei6YpqdJYfCn5p-gwxSLR86FWDD6BYJc-QI-HwK&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=Ib1FsE8GTdEBGx2h1Hzj1A&_nc_ss=7b289&oh=00_AQCgesjuJ1roTyIjmt7IsygqdOeCnfzzWXne8qc1HuV0RA&oe=6A60763E)

Here are some links to guide you through setting up SMTP with your email provider:

* [Google⁠](https://support.google.com/a/answer/176600?hl=en)
* [Microsoft⁠](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353)
* [Zoho⁠](https://www.zoho.com/mail/help/zoho-smtp.html)
* [Amazon SES⁠](https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html)

To configure the SMTP, specify the following parameters as described:

**Host** — The server that will be used for SMTP forwarding.

**Port** — The port they specify for TLS or SSL encryption.

**From display name** — The name before the email address that will send messages.

**From email** — The email address that the emails will be sent from.

![Email sender preview showing Host name from admin@hostdomain.com addressed To: Host user](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/475439901_1331337751337141_941385967098955299_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=8ys_Nc54FyoQ7kNvwEEbRGK&_nc_oc=AdpGOtRXSc4FF0KQq1wRKYS-J2kYZQ6S25FPqv41MT68cUOkkcHu1_k3LbQmLOkw5rjmHt9Pme-vZ2E59OS4JEoG&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=Ib1FsE8GTdEBGx2h1Hzj1A&_nc_ss=7b289&oh=00_AQAeGjX-OK4YBfheM_IL2FgS3i0pNUKPbnHit67byn7PFw&oe=6A608AC1)

**Enable SSL** — Depending on the encryption your email provider requires, you may need SSL.

**Enable StartTLS** — Depending on the encryption being used, TLS may be required. Please use the Send test email button to check SSL and TLS settings. Test emails will be sent to the email address you logged into the Conversions API Gateway or Signals Gateway with.

**Enable Authentication** — If your email provider required authentication to send emails through them.

**Username** — The email address provisioned for SMTP forwarding.

**Password** — The password for that account. If your email service leverages two factor authentication you may need to use an app-specific password in the password field.

You need to **Save** the configuration before enabling it. To disable the SMTP configuration simply switch it off in the dashboard:

![Enable email through SMTP setting toggled OFF, with description of sending invite, account creation, and password reset links through the Gateway](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/328994164_723134039220247_6559171481195573972_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ze5ow75KOe8Q7kNvwEu8HFz&_nc_oc=Adp4yOQt5G7jjkMX7HlQb5FPD946PsZ7E1aQ37PJoCxDdMEOt_A1EwSeUVhCEl-EwZPAb-KbnbTEKMxEWd_E6Q6P&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=Ib1FsE8GTdEBGx2h1Hzj1A&_nc_ss=7b289&oh=00_AQBm4YRbAtXnAjcS1unaqpSPwzuDuUnZIADukolvbI0AvA&oe=6A609E3C)

## See Also

* [Conversions API Gateway Overview](https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway)
* [Signals Gateway Overview](https://developers.facebook.com/documentation/ads-commerce/gateway-products/signals-gateway)
