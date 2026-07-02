---
title: "Version 3 Public Preview"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-2-public-preview
---

# Version 3 Public Preview

Updated: May 21, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

Embedded Signup is being updated with a new Phone Number First flow. You can preview it by enabling v3-public-preview. In this flow, business customers enter and verify their phone number at the start of signup, before they create or select business assets. This surfaces phone number eligibility and verification issues earlier.

Functionality between v3-public-preview and v3 is identical. The key differences are the simplified UI and the Phone Number First flow.

## Enterprise number flow

### Authentication screen

This screen authenticates business customers using their Facebook or Meta Business Suite credentials.

![Facebook Login for Business authentication screen prompting the business customer to continue as their Facebook account](https://scontent.oculuscdn.com/v/t64.5771-25/499298281_967923179536758_9110966386944372471_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=MIKX3dbhoogQ7kNvwHtKjoJ&_nc_oc=Adp4pl98OKkF94m8Nxc8izQcRnQbQRuH55TNYEfhwunTRbuECWfhodqJX3XEQJk-LJamk19tNfDh__-s3jgTWqWo&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQB98mvyQWxuCe-0xHQkw_P73KpD5m1nOsB04s3Bw58KDw&oe=6A606715)

### Authorization screen

This screen describes the data the business customer will be permitting your app to access.

![Authorization screen explaining the access the app will have to the business customer's WhatsApp and Cloud API](https://scontent.oculuscdn.com/v/t64.5771-25/499307962_1008389814869598_5637589979105939691_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=T66tu6Q0kgwQ7kNvwFXCV_z&_nc_oc=AdqjQFcWazmP5-_RqxaM0esKI23jyrdxxFXfw24VyaAMEoc10N5VrL5RhtMDEoQsya8NPnNtx2jbjB4JflGypnCo&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQBDe5w0LbgOvoJubu-48AeHq5TSIdCwa9l9xw2DL7qFtw&oe=6A603FDB)

### Phone number entry screen

This screen lets the business customer enter a new business phone number, or select an existing phone number from the dropdown, to associate with their WhatsApp Business Account. In v3-public-preview, the phone number is the first piece of information collected, before any asset selection.

![Phone number entry screen with a country code dropdown and option to create a new WhatsApp Business profile](https://scontent.oculuscdn.com/v/t64.5771-25/499303769_1732373084783037_3309979817692562809_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=vqRDZn7nQCQQ7kNvwFmowbR&_nc_oc=Adp0N2x7Q9vuvLRPvzT2VvzaKefn-mVg63QTA3xXHLszMQAzxD85V9RQz3xRebREaXASO_oCG15GiR27gJfeS700&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQDETtmtLcMfYVVbLmQgo54bO3lvIie7aOM5MhvLo0BiWA&oe=6A6058EB)

### Phone number verification screen

This screen lets the business customer verify ownership of the phone number entered in the previous step. The customer can choose to receive the verification code via SMS or voice call from this screen, then submit the code to complete verification.

If you are providing phone numbers to your customers, you will have to deliver these codes, or provide pre-verified numbers instead.

![Phone number verification screen with a verification code field and options to verify by text message or phone call](https://scontent.oculuscdn.com/v/t64.5771-25/499292329_1555667949496849_4759546761035133559_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QZHBN4P3tR8Q7kNvwFAr88i&_nc_oc=AdocE0oezHVLeJTppkdFkUKG-zkJvw5ONWWfBsSAWw4hlpPM43RlnQyKQWCMswJTcPg8IW5ZMLwkQ2_XDKnjQWUg&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQC7lRx6AnFpoN_NCkw7XXRJ45Vgjore4f3L8JpByaWKFw&oe=6A605D75)

### Business asset selection screen

This screen lets the business customer select existing business assets, such as a Meta business portfolio and WhatsApp Business Account, to use with the new phone number.

Customers can also create new assets if they have not reached their portfolio limit.

![Business asset selection screen with dropdowns to choose or create a Business portfolio and WhatsApp Business Account](https://scontent.oculuscdn.com/v/t64.5771-25/499312257_986892563838514_7465135936279023922_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=mYN9bMSE_LYQ7kNvwGojssz&_nc_oc=AdpQRMHfFw0mcyiHMf1a_UOyFpY3neOzanZ1zU8LoyGDbMo39l6y0RO3YvyGf4Aq-cvXTVU7H0uBRthi7r4cJxH9&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQBFRyp8uKWuD_jr3esOTkZ6LcPCUaYMMA8nIPE4baDONw&oe=6A606EC8)

### New business creation screen

This screen lets the business customer create a new business portfolio or WhatsApp Business Account if no suitable existing asset is available.

![New business creation form with fields for name, email, category, country, website, and time zone](https://scontent.oculuscdn.com/v/t64.5771-25/499307444_2764231043958566_65932879041628759_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=AVJ02C3QTgwQ7kNvwGY_zJe&_nc_oc=Adqz-XMbr7zFfZZAam69PQUF99MYITQBRale3-MqSBdXKe0Eacl-3uOF93DvIkCWlcoxja2YjkTxoSWT77Xgjk10&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQAoCz6T9OaZbc73Jo-xgUFow1-onUGLKfwboCokSMtpfQ&oe=6A6051A4)

### Permissions review screen

This screen provides a summary of the permissions the business customer is granting to your app.

![Permissions review screen summarizing the WhatsApp Business Account access being granted to the app](https://scontent.oculuscdn.com/v/t64.5771-25/499303100_2477857079333204_3147825980683278787_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wM2KhFJKeH8Q7kNvwEvoUWk&_nc_oc=Adpr0sRQg4IJrbvzXCNdYzJczu6r3UY5Pfds1SOXd6CCfIG_ql0h2oP_e9cdigdyJLVGl9lPsbMoftm455EGbQVd&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQDuJ4J3DvemLMOkQ68rFcFV8oSCFfLahSpg9RdqDM3L2Q&oe=6A604C55)

### Success screen

This screen indicates that all of the business customer's assets (business portfolio, WhatsApp Business Account, phone number display profile, and business phone number) were successfully created and associated.

When the customer clicks Finish, a message event is triggered containing the customer's WhatsApp Business Account ID and business phone number ID, which you must use to onboard the customer to the platform.

![Success screen confirming the account is connected, listing created business and WhatsApp Account assets, with a Finish button](https://scontent.oculuscdn.com/v/t64.5771-25/499299365_1297004592575186_7011001686527044778_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=xsd4nqSJVGkQ7kNvwHyGNBx&_nc_oc=Adp4fR8YGWRUa28Lpceol8o9LbK3TDrxUcH6D3O2a3R0ionWa_u-Um52cn8ETV0iR0rbVAr65XKvCvMTWhVulf3B&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQDNAcg3n28VIbU9cGTgqsjbC5TbcdXv-COHZhmsUHFh5w&oe=6A605E6E)

## Coexistence flow

The Coexistence flow is automatically triggered when the business customer enters a phone number that is already in use with the WhatsApp Business app. Coexistence lets the business keep using the app on their phone while also enabling Cloud API access on the same number.

### Authentication screen

This screen authenticates business customers using their Facebook or Meta Business Suite credentials.

![Facebook Login for Business authentication screen prompting the business customer to continue as their Facebook account](https://scontent.oculuscdn.com/v/t64.5771-25/499298281_967923179536758_9110966386944372471_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=MIKX3dbhoogQ7kNvwHtKjoJ&_nc_oc=Adp4pl98OKkF94m8Nxc8izQcRnQbQRuH55TNYEfhwunTRbuECWfhodqJX3XEQJk-LJamk19tNfDh__-s3jgTWqWo&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQB98mvyQWxuCe-0xHQkw_P73KpD5m1nOsB04s3Bw58KDw&oe=6A606715)

### Authorization screen

This screen describes the data the business customer will be permitting your app to access.

![Authorization screen explaining the access the app will have to the business customer's WhatsApp and Cloud API](https://scontent.oculuscdn.com/v/t64.5771-25/499307962_1008389814869598_5637589979105939691_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=T66tu6Q0kgwQ7kNvwFXCV_z&_nc_oc=AdqjQFcWazmP5-_RqxaM0esKI23jyrdxxFXfw24VyaAMEoc10N5VrL5RhtMDEoQsya8NPnNtx2jbjB4JflGypnCo&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQBDe5w0LbgOvoJubu-48AeHq5TSIdCwa9l9xw2DL7qFtw&oe=6A603FDB)

### Phone number entry screen

This screen lets the business customer enter the phone number they want to onboard. To trigger the Coexistence flow, the customer must enter a WhatsApp Business app phone number.

![Phone number entry screen with an existing WhatsApp Business app number filled in to trigger the Coexistence flow](https://scontent.oculuscdn.com/v/t64.5771-25/499300725_1470062230996738_158005859595832172_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=5HEVarjSbjoQ7kNvwF3g5_Y&_nc_oc=AdoGwAtIJbrasBcL6l6v4SoTls1jEBcD21JmA9xWKdzVeKotJ5gYXip007vrNyhseKcMpE750m0PW7UzalLH4DiY&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQCSNbABNwm2kfeAEaVai_OieBQ0c-l60Va4qQtU4kav0w&oe=6A6067CF)

### Business profile screen

This screen displays the WhatsApp Business app account details associated with the entered phone number — the profile picture, name, phone number, and website that the business has set in the WhatsApp Business app. The business customer reviews these details and confirms this is the WhatsApp Business app account they want to onboard.

![Business profile screen showing the WhatsApp Business app profile picture, name, phone number, and website to confirm](https://scontent.oculuscdn.com/v/t64.5771-25/499313069_1389527599895128_7043341498025829570_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=hScpfPdBrtwQ7kNvwEu-xwL&_nc_oc=Adov39RCLRQADCqIzGx2go0gfFQSWAPszU9RTbnZx9eMxmtszNx-l7PBZkjO_kAiYMDnWVasPurkNT9B6Sj6B-1J&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQD5lruViAMe6uiMY3OaJLEU5NUe3SoftuLAMNoPQxx3LA&oe=6A607633)

### Business portfolio selection screen

This screen lets the business customer select an existing Meta business portfolio to associate with the Coexistence onboarding, or create a new one.

![Business portfolio selection screen with a dropdown to choose an existing Meta business portfolio or create a new one](https://scontent.oculuscdn.com/v/t64.5771-25/499311597_981669164610316_1800456959882667107_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=icfy_1DuW_YQ7kNvwHQKFFy&_nc_oc=AdpwlObCWNVWxJAXyP-MsCaCYbcHgQoQzzl57HO4kk-AtNN2QN4PlVZunOxC1Jqym6X4mYjZZDA1hi8uoZqWLW1P&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQA_J4VaD_25c_H1qQ-3fAgXShM5cHSdaCfGJ52To9F0EA&oe=6A60585E)

### Business creation screen

This screen lets the business customer create a new business portfolio by entering business information: name, country, and website.

![Business creation form with fields for new business name, email, country, and website](https://scontent.oculuscdn.com/v/t64.5771-25/499295566_1871995543474424_9084855772139197380_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Quulk1SwzzgQ7kNvwGBkygh&_nc_oc=AdpNAVFJL5l8-w1ZnSt0fF9MEFivA9tLy55vlsmiwkxM6GyNmjNmxBDtrfz0GB5P6A2G0aKRofiRegQOnqJsJpUe&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQAXce6PP9hWVoi6WEoGX0rn2JKHSPc8yZ-dMiqTPirBEw&oe=6A606B72)

### QR code verification screen

This screen displays a QR code that the business customer scans from inside the WhatsApp Business app on their phone. To make scanning easier, a WhatsApp message containing a link to the QR code is also delivered to the same number. Once the customer scans the QR code, the flow advances automatically.

![QR code verification screen with a QR code to scan from the WhatsApp Business app to import contacts and chat history](https://scontent.oculuscdn.com/v/t64.5771-25/499308522_2975432439456543_6277030950218254579_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jchW4dwOELoQ7kNvwEnCW15&_nc_oc=AdqXGSifW3h883bHr-P70JqPoFYv050X_3QiKkNegOEIT-O3RZEsAqD-Kl8OygrDroHBBYMwY2Z8awfHEktHxxgr&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQBD5rtMdizkFK-h3gBAbt0owvMML2rvlQ1vrtjOtLLfeA&oe=6A60654A)

### Business information confirmation screen

This screen lets the business customer confirm their WhatsApp Business Account name (read-only) and select a time zone (required) for the account.

![Business information confirmation screen with a read-only WhatsApp Business Account name and a time zone dropdown](https://scontent.oculuscdn.com/v/t64.5771-25/499307309_1663908571513023_7981049472507936754_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=5kFrp3ffqfkQ7kNvwEtKe7-&_nc_oc=Adp63vlRKoKzopBW3duHOLB4sAW3iJIdMzmab_qEOJ85eATnw0--XGLNcsui7p7_LzJzgx29Z64agOf1PzMj6Pnz&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQDRDcW48m3oqHoMVk8ZGIiJmn4DRFFiXnTRWTAJArjl7Q&oe=6A60545B)

### Terms and conditions review screen

This screen presents the terms and conditions that the business customer must accept to complete Coexistence onboarding.

![Terms and conditions review screen the business customer must accept to complete Coexistence onboarding](https://scontent.oculuscdn.com/v/t64.5771-25/499294643_941976661935218_7452330591006400118_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=hJwUcMsbgToQ7kNvwFYd3Jq&_nc_oc=AdoygL0smyJAoIZ8Iw4KYVMEC3cM8DIA2tSDazE7nhnDPztm3LJxCws0UurKXoWv2iGMwY-K_3xrR6kaSOzh6R2l&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQBjRSeOKXSFJWAgMu4JjINHPSpUEUkjloQ7VCMCc5w4qw&oe=6A605B2E)

### Success screen

This screen indicates that the Coexistence onboarding completed successfully. When the customer clicks Finish, a message event is triggered containing the customer's WhatsApp Business Account ID and business phone number ID, which you must use to onboard the customer to the platform.

![Success screen confirming Coexistence onboarding completed, listing the created business asset, with a Finish button](https://scontent.oculuscdn.com/v/t64.5771-25/499299365_1649509376198400_2742425130304284765_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=g-TItxsvVXQQ7kNvwGgpu8D&_nc_oc=Adq2qkMJw9_TFKP6USbl__CvUojfit67a5uJz3Am5d76KfIYacNzYCMu9m-ajp-cDlrgBcYnG7oqKMrz2OGnrua3&_nc_zt=3&_nc_ht=scontent.oculuscdn.com&_nc_ss=7b2a8&oh=00_AQAyZ1vIkkXtVT47cTqR5xV1Vg0U7SIpnv-JZ8tIVw3Lbg&oe=6A604226)
