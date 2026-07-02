---
title: "Pricing on the WhatsApp Business Platform"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages
---

# Pricing on the WhatsApp Business Platform

Updated: Jul 1, 2026

This document explains how pricing works on the WhatsApp Business Platform.

## Cloud API and Marketing Messages API for WhatsApp

Effective July 1, 2025, Meta charges on a **per-message basis**:

* You are only charged when a [template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) is delivered (`"type":"template"`).
* Rates vary based on the template's [category](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#message-template-categories) and the recipient WhatsApp phone number's [country calling code](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#country-calling-codes).

Meta charges businesses in the following ways:

* All non-template messages are free (`"type":"text"`, `"type":"image"`, and so on). Non-template messages can only be sent within an open [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows). See [Sending messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#sending-messages) for a list of message types.
* Utility templates delivered within an open customer service window are free.
* You can unlock [lower rates](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#volume-tiers) for utility and authentication template messages, based on messaging volume.
* All messages are free for 72 hours, including template messages, if sent within an open [free entry point window](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#free-entry-point-windows).

## Pricing explainer

The pricing explainer PDF outlines how Meta charges businesses, in PDF form:

[Pricing Explainer PDF](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/506409115_515804291560768_5477144239594007982_n.pdf?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KovdHOi5_cYQ7kNvwHq1tsB&_nc_oc=Adp1qSUmEaIyehoQOCAgfpeu3aC9pSOmpV5PXNdGTqNU9ZveqWGXx2ANgzcr5LeaDru2kaKeqMpD2NQx2757qwFY&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBbupXvfsez-3FL2pXmusUttkVx9gyfmo2HXXLaqSsNfQ&oe=6A605E3A)

## Message template categories

Unlike non-template messages, template messages are the only message type that can be sent outside of a customer service window. Templates can be categorized as:

* Marketing
* Utility
* Authentication

See [Template categorization](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization) to learn how template categorization works.

### Template messages vs. non-template messages

![Diagram showing template messages vs non-template messages pricing](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/571069280_1541820816822527_6328052606712176022_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gMHkyOhcV94Q7kNvwFuzjmN&_nc_oc=Adro-Kuzr_kb-ZMmtosLStHRLCt2DmwlTKToBOUTiJjLC5rRgk6L8UdET1h3KEw7c8s8IQCxlFa2mjVNwC_dQ4kv&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQB3mP0UuQckl9EsNoPrwoKn5Xj8DAvnxL3OFM-uHqNlMg&oe=6A60582F)

* CSW = [Customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows)
* FEP = [Free entry point window](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#free-entry-point-windows)

Businesses are responsible for reviewing the category assigned to their approved templates. Whenever a template is used, a business accepts the charges associated with the category applied to the template at time of use.

## Charge example

In the example below, a business sends 4 messages to a WhatsApp user but is only charged for 2 (1 marketing charge, 1 utility charge).

| Hour | Action | Rate | Reason |
| --- | --- | --- | --- |
| 0 | You send a marketing template message to a WhatsApp user, promoting your new product. | Marketing | All marketing template messages are charged. |
| 2 | The user messages you about the product.  This opens a 24 hour [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) ("CSW"). | - | Messages sent from a WhatsApp user to a business are not charged. |
| 3 | You send a [text message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/text-messages) to the user (`"type":"text"`), describing the product in more detail. | None | All non-template messages are free within an open customer service window. |
| 4 | The user purchases the product and you send them a utility template confirming their order. | None | The CSW is still open, and utility templates sent within an open CSW are free. |
| 26 | The CSW closes, which means you can no longer send non-template messages. | - | 24 hours have passed since the user last messaged you. |
| 30 | You send a utility template message to the user, updating them on their order. | Utility | Utility template messages sent outside of a CSW are charged, and no open CSW exists between you and the user. |

## Pricing calendar

To better enable our customers to plan and prepare for pricing updates, the following pricing calendar applies for messaging and voice on the WhatsApp Business Platform:

* Meta may update pricing only *on the 1st day of each quarter*, thus up to 4 times per year: January 1, April 1, July 1, and/or October 1.
* Meta will provide advanced notice that is better aligned to the effort required to implement different types of pricing updates, per below:

| Type of pricing update | Examples | Minimum advance notice |
| --- | --- | --- |
| **Rate card update** | Updating the [rate](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#rates) for a given market–product  Updating the volume tiers for a given market–product (utility and authentication only)  Moving a market from one [pricing region](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#country-calling-codes) (for example, "Other") to another or to be standalone on the rate card | 1 month |
| **Pricing model add-on** | Our July 1, 2025, introduction of new [volume tiers](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#volume-tiers) for utility and authentication messages | 3 months |
| **Pricing model change** | Our July 1, 2025 update to our pricing model, from conversation-based pricing to per-message pricing | 6 months |

## Rates

Rates vary based on [template category](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization), [volume tier](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#volume-tiers), and [country/region](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#country-calling-codes) rate.

### Rate cards and volume tiers

These rate cards reflect our current rates and volume tiers, effective July 1, 2026, based on WhatsApp Business account timezone. This information is also available interactively on our [WhatsApp Business website⁠](https://business.whatsapp.com/products/platform-pricing?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4vtMiWribYV0_SoUNRdSl3gjxdjx_XZgF438NmTlQcjV_tUtRP3c7CBA8OrQ_aem_wMVJfDH-8b_ygwtAgI_wvg#rates).

| Currency | Rates(CSV) | Volume tiers(CSV) | Rates and Volume tiers(PDF) |
| --- | --- | --- | --- |
| USD | [USD rates](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.8562-6/735608455_876449615529066_702006520977041900_n.csv?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=ebPa1p2vSwIQ7kNvwE1iw1S&_nc_oc=Adpbun2fNPNlsmzY0MKfAVNsto-vl36h-6ePmtE5GowkzX_WOCj3MMU74JRO8l1gv6o5c4VEwmO9NxLmQwEaSi-F&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQAmpRvHeqK3TZ6HHCv8fPbnskCA_m310C0ANwMZCEEzYA&oe=6A4BFE8A) | [USD volume tiers](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/737075891_1702232854373489_5701801020098956708_n.csv?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=c0aKF_lO4ToQ7kNvwF1K3RJ&_nc_oc=Adp3DKKBh-TgIkw4NxNnX4bbS1KzelRJyT0yMLrc2Wpkl7dSMlzzxf422f_mnHeIjIhx4lEViv-eeamFiVqA-hC5&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQAvJjbktpvOhFU-7zmWIBBObB9hvU21XrM4HI3I6owv3A&oe=6A4BEFB2) | [USD rates and volume tiers](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/735958960_1334659692185186_1051304524066939928_n.pdf?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=vxYgdQcXTbEQ7kNvwHYSYxf&_nc_oc=AdrIV3dsgT_dJRdubp0L-y9KkN6BQTrViBg4betZUeez5E2zCI5qakXuD60r2kJVO1bjGe-Sm-OkjGBXxme0sNyw&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDExrttfy4UB75ul67LoZYKelk9CgJ5NuicIk1S2GfkXA&oe=6A4BD902) |
| AED | [AED rates](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/736007923_1007780768825862_1511088673050509864_n.csv?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=v45nS7WDuIIQ7kNvwGjvaHD&_nc_oc=AdrroMr3sH641Dh8AbUjjS3cGRUl7HvmIOu5j56h-f82_B4_kl0RJmiAnZPMyj5UFGRPXLAKfNPNkqFsfLG3a1Zq&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBNbflOlUAVKk2Szh_E0RJt_eoUjbIBXSGwC7da3Lmuyw&oe=6A4BD483) | [AED volume tiers](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/737543898_2205636523614147_3149899026296297993_n.csv?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=59hsXqOVAjkQ7kNvwFFodp-&_nc_oc=AdrMR0TN2DFzRAPjMHeVgiQ-xFccc-t9Td8slJFaVRvww0LH5bPaTDfRjRoCIkb0QI-vskNBqohhGTYkf6wTVp2H&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQB1DQS9ZROK0iZhTpCpYz_X29C1h_pp6cFXdeUhXcMNfQ&oe=6A4BFE59) | [AED rates and volume tiers](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.8562-6/737577477_1529340172226220_5555586059054904533_n.pdf?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=2Hghmzq4FvEQ7kNvwEwMB_o&_nc_oc=AdpwgbqQfy5WO-Pz24GWY7cHppotcvSyZuor0_lf6KsdgkOMHcvw1L8JbMgGTkx3pvb_x3CSVM_kZ69l-F-amsmL&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCUvn4UxbcSexgPX3EGhACAr6AwCL_JPU384ofATGNihA&oe=6A4BEF5E) |
| ARS | [ARS rates](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.8562-6/735544505_1951035662214119_8041070606606550692_n.csv?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=e2I4Egc38aAQ7kNvwHsVSJ1&_nc_oc=AdqpS8m0gnwNV8ZfVBAD1I56t5XaJJQmE8WWlqYGdEyUsTQ17qPkM4p75o5WNOx-ZDkoRadWuJl807wo9jt4w7FI&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQAey1pelreV4YHvsUDqNQfHWCJMxevuMpOVdNgVGrgz8w&oe=6A4BD3C4) | [ARS volume tiers](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/736032900_1646538203123299_3991554277711287498_n.csv?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=28D7hhdgingQ7kNvwG7Xh7Z&_nc_oc=AdrAuBxTBr2A8AOPGcGMtOTu5532QCmMPPittdQXVdsLQLr1oq5uzWaQiDYUXhZsq68gswSKoueeaVBeg_LVdLOA&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDS7UaDcYUrUiKUQsJdt5jAlmA6nxaZ2g0gs9c5ksL58g&oe=6A4BD5EF) | [ARS rates and volume tiers](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.8562-6/737413236_1579756600476488_3419930143722592762_n.pdf?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=_KkHJeTw6ykQ7kNvwEOrClC&_nc_oc=AdpX_L_NraAXXIKXCAP6sr9NS6yObqYrvu9NV4sd7xc-RjCnhy2mYEzEJOPMWPEdIJla68yiDGQD45vbXNy2yOnS&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBDMP1AKE0l8M8yuXuQJmtOEqzVzmwyhY_0MYNTKiynIg&oe=6A4BFBC6) |
| AUD | [AUD rates](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/737819602_2250319009144778_2723599044309184961_n.csv?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=3e30LoEO21wQ7kNvwGFJt9N&_nc_oc=AdqHs9P6rh8chFzz4VYkzL9oOuj4DCyhU9iwZrwGk_uX248mtWBBunxz-C_pS2Pw8m0QG3eoAizDrhLVUXkaMg21&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQB1x5gg9i4SzVno2j8ZahuhFt-GysUCD817Do_F7XDf_g&oe=6A4BEEE1) | [AUD volume tiers](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.8562-6/738188485_1032545096390806_7329272158665046349_n.csv?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=2svVkkI0DOQQ7kNvwEc4gp9&_nc_oc=AdqsiKedmLYM5hFM7Sex-D9TCu4hiw8zxi3v7EZq9K5TZVxvTgUoRC3m77Gk6UmOIDGIyNxfsJGzYJd_lRjEP3MG&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQADzZMklKzp-gUNbwLBKVDiTe7otZLF81HZw-iLEwN7RQ&oe=6A4BF54F) | [AUD rates and volume tiers](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.8562-6/735210839_884591274108825_6944922357200504424_n.pdf?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=nd95HFefAMQQ7kNvwHw2rKd&_nc_oc=AdqKjcekN725wzZ5z4gBxlC5wJ0A5-Y_wp14WSGzCpEkfeJKwTAAQ6l5QXfkwloDVS7PHMYrrVcLDQZaDQNjd1wB&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBJZ_tB4Jxur0NXhVYaVJu45MdBe4GARGc3hYC88vI2lA&oe=6A4C0505) |
| BRL | [BRL rates](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/735552825_1485054360056316_195551103792202202_n.csv?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=q2_ro7Au0ScQ7kNvwFO8Sjm&_nc_oc=AdqGm-stIre8oFcrN51bsGin1HC854dERbm-sCwoV0Odkq3hceyQz_xcUnRSFNtAASJnfyIOG-g-y2vrAN_A_FIR&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDAxUH3zEtK03i71ay9U6sv956H9FwbasArls0Eu_h_ew&oe=6A4BCD95) | [BRL volume tiers](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.8562-6/735595288_1739825867366495_2229215757296612949_n.csv?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=Ve9kntTLlI8Q7kNvwG5O91n&_nc_oc=AdrA7niLekbDrf4VT5zKxs6d8Us3WKHJvOuw-d5Wvh6MxnhKL93n4VNAkm0eSa-RBgT62rXC44pfzpDKRAPeDahm&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBpv-GUrhLM1kvFPQwHiDC2ldSB5-RiIfnf1DpS1bBkJA&oe=6A4BCF26) | [BRL rates and volume tiers](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.8562-6/737730541_1380600147294120_5812385598624907160_n.pdf?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=MseHYevD0o0Q7kNvwE54iIc&_nc_oc=AdpljYZlu0HM3xRGwelemgUP8P8hmTD-v6y0aYfB3zLArEH0FBfWsZJoMZxPVtadJthLRAJjD2NkJgwt-6lrHzBS&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCM5At8NGUzOX511pJ7U4_E4Uc3wRMFSSIbHT49nbgZ_Q&oe=6A4BD741) |
| CLP | [CLP rates](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.8562-6/737577492_1804373267193354_4636676735932956940_n.csv?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=mrNBHn95bNEQ7kNvwHI5qBT&_nc_oc=Adru3N45sd3nLLHEUXpYc-TlotMp-K0P8Qaa3fG0EsPN5UE2txf_1SrdSHaU_UHdr1ChZwQ3duhmQHI9RFUmvm0P&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDE5w7zM50UaI23HzLqOb3KheNEhGN-OXkikgm0wrSZ8w&oe=6A4BD684) | [CLP volume tiers](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.8562-6/736413128_1042652738200319_72159566375144995_n.csv?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=VH_qXrxyJUQQ7kNvwFNU8FE&_nc_oc=Adq5YpOp6IF-nGyomJWHhYV87OyS7_TEHIi8xNesmhrJt8om_l752fpvZvPMGgxeMIS4hd3iqgM1IBTAoA5meOJR&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDMOZe4H2Ckey6ib_mHWKsNXOFo6Ni5Na-jXpUgY5Wo2A&oe=6A4BDF38) | [CLP rates and volume tiers](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.8562-6/736413007_999185086362914_3868948611378535219_n.pdf?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=0Tgd64Aw9rUQ7kNvwE7tUgJ&_nc_oc=AdrJ_FSLXTIXL6FVKBu8Z1Y1KcZa4DC8zu78_A7nE5dvU-p5Diblh9IEnOsnP2k-7HpyX7r0lnbLsNNGi3RGWsNF&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCdwg6CWa8j3uy8V64oWy_GjOqnf-LAZxcScJp3Xrn6KA&oe=6A4BD010) |
| COP | [COP rates](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.8562-6/735482743_2296023081140804_2474258772751213192_n.csv?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=D3pDjfPJMU0Q7kNvwG-y4IV&_nc_oc=AdoFiu73miPs3YOOAm7vGKjaQfpEJfV6eNuBFLiw5SMsxgHgJ4uS3sxzMu1vVt15G7FuG4nPbVPbf0NiK4teKw5x&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBTpjAI8Gx9aUjYHSP_rYrGMBNBDvBLjgfH75BErXGo5A&oe=6A4BD531) | [COP volume tiers](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/735786322_1563169278856774_8318221048910614101_n.csv?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=-lqPOeL9npEQ7kNvwF40jlB&_nc_oc=AdowGSbN84PEYi2Y4WTuWKRG5KmFkKTZVrzwQDbAu04Fzad91WXBoT5NfKDNTohW7SX_8az0Dg_kd35b34vJGUrp&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQAHt0IZ8WxJrudH00Ushe9WxFfHOHVC3O39pb2KRYsbhA&oe=6A4BD31B) | [COP rates and volume tiers](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/736261268_3399672776863686_6664467053461918579_n.pdf?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=tezNgIX3N60Q7kNvwE3E6WD&_nc_oc=AdpN6B68YiI2mbqEEG2hxFGdh9EHIIaBVdZ0wovrPm6y9wNUBa28HyCyuEzqhPhsNT8vEvSkEGJP1q4w-T_t8sA5&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDKKIBvwnITu17SG5sd-JvMsXcUTbCVwWBldf55ss40aA&oe=6A4BF78E) |
| EUR | [EUR rates](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/735577288_880523067910219_5282602229183099875_n.csv?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=boo0nOtTEhgQ7kNvwFWtIpn&_nc_oc=AdpFILrxC__vgx85QImbrkDQhRYedZZ11m6IZy3rcWD9k5rOs_XCSoysuAY8QaLMK9IqCfLJoZbbYZnuOvHV0F7v&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDJeZfc6aa1y-EeH4gAuyF_GoWq4Vt2OPBOKxTTktFR-Q&oe=6A4BEE8A) | [EUR volume tiers](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/738438435_4431554183839532_4085221187255469478_n.csv?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=5MbzVQowqfEQ7kNvwG5W8LG&_nc_oc=Adp0uee1PzR7_88XZibcWn3PEcNuvBnJid-h400W3sB0JrFM8idXbRUfh0LvvnzKphCn3LOBpKqD722_3b6qKp5b&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDsWdxv2DwxPAxhbQyr37Y8U8jBQNqOwznOseshMzNgxw&oe=6A4BDCC5) | [EUR rates and volume tiers](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.8562-6/734958213_26993049673710039_8772457889658925801_n.pdf?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=4tzgs9KR1KQQ7kNvwGSp71w&_nc_oc=AdoUYkY6u8MYKxvx5yX3tDSJfj4mkCaa5-SwwSRKLMHrhp0mmIySiAWvthoE10HLS4qu_0rERL6DuCkLhbTRzIPq&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCj1HcY336wZ2euGgsD1g9lgNQG_4ryA9s2_D5spXyvbA&oe=6A4BDC0C) |
| GBP | [GBP rates](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.8562-6/735430054_26918261854536870_5055388467024304012_n.csv?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=cr9yv_p_un0Q7kNvwHjTDI2&_nc_oc=AdqT1Yof67o2dDLWMRdh_l9QT7KWOKerQhrSMGC3uz3llvFMEXKQq4ZZkzS6XlinngrDXmuB0HUR2f76k6CLaLSu&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDCfSM_h5refjEQ_F9WaFRDoUcwc5hwgpBbM_EQqJwkHw&oe=6A4BD94E) | [GBP volume tiers](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/735504700_2096207764666537_2245163982827477699_n.csv?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=qgf3t_P4bgEQ7kNvwG1gKpH&_nc_oc=Adoc1ohB2yXJKk5z7uSFXVCBz864jGc2pzsLIkROOg-Ct8W--Sh-ylMijZrQVE1_jtpkoFQX4CzVhDOT2RupM19G&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBp1Mpapsjfzk6urTpZs8FOgNuLxUVdFt00Pg7RlbPKiA&oe=6A4BE04E) | [GBP rates and volume tiers](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/735608285_4417940318486706_4352340668351392604_n.pdf?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=YBxQXDfUONEQ7kNvwENVfjT&_nc_oc=AdrDzbBHLUs-okokuWpzk8X0Re3HGHxsj-aJwC8K29uK-5brXSWBMlq8GBEpiu_MWswhe06vifl2g75FAXfk-Who&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQAwtQX57bWzZ9Fm3ZggXtZpC280QV7zjqudG6vDJcC40w&oe=6A4BEF26) |
| IDR | [IDR rates](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.8562-6/736248761_4017328625226592_348718840733499952_n.csv?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=U6juChZfVY4Q7kNvwGDw4je&_nc_oc=Adq15o2Fy9Pbse3NNIR_bsHFo79lFwwgb3BGtQCL1AXmhAyODtvYoBIigZnQSNgxFHyr9fBzldGSCMyVpz0J2ToY&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQD-RpZg4hR_vsBUS5IibAmkVyywV7u5rJJ_UjW9VQWwCQ&oe=6A4BE8E9) | [IDR volume tiers](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.8562-6/738217727_1011684251610955_29790659035043351_n.csv?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=jdGQ4zdglu4Q7kNvwHAnkse&_nc_oc=AdqG8hAgvzZBPIFbjqxihgIMTApU49obUdxHVR7uaMWtkCLhoILte9SVyOdXDLq8XgmLPrlboumCUtBGIna49ox9&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCPVsKRmDfvIedwBVreM4sa3U-fZrUwREKAcWP7KkhCIA&oe=6A4BDECA) | [IDR rates and volume tiers](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/737249720_4588912348010993_3128121200416753655_n.pdf?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=NYhxsgmCPrMQ7kNvwEcN5FP&_nc_oc=Adp9dcukUgKXMiv1Zn2MYuzjZg7FIhDyFIQwsFCnpB3UVf4S-xk0Pq26hITz9XN8cWbzVThH3PJN799j2IUZrQTr&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQAFL1KVgdmcMa8J941-7tMnqD_DpH1Xmo2O2pUwXkIZ0Q&oe=6A4BEA82) |
| INR | [INR rates](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/736778577_2057477481812167_3914865669314423839_n.csv?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=LkTmptXdT8wQ7kNvwF2uBFU&_nc_oc=Adr7tR0d0uoMVtQNQ24WKq9TlWplf84lgMBrtECB5gCWVX_mS7F5cflxSrvCunWGb5hQeN4tlt7yHT0aLR33O-RL&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQA3OeHK_IwZefIWahV_7WTPvjZJ5mGfcguyL0fSmQ-xbA&oe=6A4C032D) | [INR volume tiers](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/735482746_895954676210792_8671102688426610970_n.csv?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=I1_Pq41FMogQ7kNvwF2MrmE&_nc_oc=AdpUzj_czQD7xNSBMU8y4vFaSgL-cNVnQCXnaUupp3DiZm4z4BT2Vxct4x3MTPZil-mbcNrDJnn451CI6pWaASte&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQD-3IPo93dTqvGcN4IgF-Jfszw-3ghhOEQZ6Z0Ha1Biew&oe=6A4BE0E0) | [INR rates and volume tiers](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.8562-6/736384855_1505842434676019_4947936918470739818_n.pdf?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=E3z9vBSBDWcQ7kNvwGdE28-&_nc_oc=AdqqjreY7QKSIBJc52uOkvILIXjTfrhpAVtJ2qhHJpm2ffuv1HXghrlzr6D-pRNHtP_6B3fyK06oVCqLWzuy59Ih&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDG-SfpZXgmbdwLeigfS6Ip-If7jjWArZ-mt1mYuYLHjw&oe=6A4BFBF7) |
| MXN | [MXN rates](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/738303933_2082142922514658_5654975035703609718_n.csv?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=d0AP76FoO-YQ7kNvwG50twf&_nc_oc=AdrY-lKZ0Byoxul7fRKa4McQ96D_HXDMieO6yxUfDCpU-8jvhbmg1cfHVIDKTZa0PlsUmevVLXRH_PBK1JOrQe-x&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQAneUxzw49B_PSsVLsma7QBj4B_vZ2dT8cRwjGWIqu7Yg&oe=6A4BF267) | [MXN volume tiers](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.8562-6/737467685_1942444759760824_5108418538792223432_n.csv?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=AFf5si--smwQ7kNvwHdxYFI&_nc_oc=AdrGuhbZkDwGOytb7ZavgDOzAnr_N_6OZAUQHvDnuZ5XKdl5jL2F-KDsXTQLdjXqy1lozzhao97h0RIUbzvq73mI&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCciUArwT16qTPH6fHNh8aMEf7i_EpEvhzzDLOksVIofQ&oe=6A4BD983) | [MXN rates and volume tiers](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/735010003_1033289046050785_4574233614213498855_n.pdf?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=8IBbdC1ehNEQ7kNvwEI2NGl&_nc_oc=Ado1cPS6G_Falq8CVYTbxQF9eTORi9rliru4S2B2ap1jILccGLXL4gtNHdXX0OpP1X-9qvV24bPMx9vSKX_fNXSk&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCkQUgMbapMR5I7-3RGS7qVEwNquRJ9-SDMU_mqCk9F7Q&oe=6A4BDE0F) |
| MYR | [MYR rates](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/736019878_2036940027213698_6346536453281015409_n.csv?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=5hlgRNjXOX4Q7kNvwHi9EfU&_nc_oc=AdpFz_6EReaIpfxE1UM5iMkKfb295hHmV4mQAeImxaPQCPHg77-C38CK8niXV7MMqewp4c5fNvWMImOcPOF1_6uj&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQB_AXQ9tdAEO2pFcsfku6gDvP-gamAD-aMn1tYyhAtU-A&oe=6A4BEAA1) | [MYR volume tiers](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.8562-6/737249720_1529462038920457_4883100668876133763_n.csv?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=Gvfhr2ttBroQ7kNvwHRYz5K&_nc_oc=Adr0ceJu1mBkD0961-doI_uXG8FlRol0MjM4cVlcXmQX5PL9WppBCDJ-Jj3gEFSNmAEB4IloyNpRJTqSG2tQ-e91&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQD1FoQjUPgY2srQyDqYqvoUWDsX4y0AgJUMUGZfp11Fpg&oe=6A4BF62F) | [MYR rates and volume tiers](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/735597616_991741870500391_6460664815430493087_n.pdf?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=WKovcVFzwhQQ7kNvwFs91iY&_nc_oc=Adog81KyV5m7Ij7iY-XpUlXlQ-o2flLVNKUlAqchd8nppynxsCZwvk07x-ZErQzwWYa4NfxeplVmf6oZbvD2kN3I&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQCngSeXVtyuHLRNlyBhsCA84r6qQUox7pbfEfezz91M_A&oe=6A4BDCDD) |
| PEN | [PEN rates](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.8562-6/735210839_913840621730202_4639960200844523870_n.csv?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=eMUT0KGfQa4Q7kNvwE0dgFT&_nc_oc=Adp1VI-XhZbtaZWyGMgjMivfED1yZDTnPIfLAhlkJ9dAKeRTxRYbOSe8QlcSb9L9gy2_2qUHy6K8LN4L1hKP-lAg&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBcR7z_VurAe_7EFB7T5b0lqkfpezmSNO6GoqLKbf2UZw&oe=6A4BF10F) | [PEN volume tiers](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.8562-6/735608282_2191695831666586_6461143467874321366_n.csv?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=kuuvf-NY4MMQ7kNvwGWl4IK&_nc_oc=AdqW5o_sO4qJXVzooFvV4JOCXIKz-A1bdYStgedLDnykM4UhrjQf-FQ_NLFj9m1ksku-0ufrXhj_f-8g0fYbHZ5m&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDU0w70ukjWCye7ZXzTOfPXatVChjQwSdsG252ELfvdhw&oe=6A4BE223) | [PEN rates and volume tiers](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/735994319_3400176270160441_2750577549294559078_n.pdf?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=AlZ6cV7lSewQ7kNvwGxs2B3&_nc_oc=AdpG8CdYXHXanFTd5kK3TT5OOPbmyzvCFsQAdsXhPwdtiPSiRyObRYDSjFeNOfe58CgsxrlIIkRoAuPGe9umkpAE&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQD8Mrwl0oLCv9ti5IgzXQ7FIg1WrDZAUsOfMier1mKsNg&oe=6A4C0577) |
| SAR | [SAR rates](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.8562-6/734958344_1400197512001211_1727363918616552387_n.csv?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=1khsf4gHWRAQ7kNvwGK-lVb&_nc_oc=AdqhKGrRRzkRhM7xPfK42Jmbpniu5qnUcB79VARl2XXjEejD3s9q56xGn4CoWkt_cSTXZ16Yde6AhuUF5CYVnUGM&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQB1HtPFX6VbbXlrbhn61h0h4VqUed-ZZLNk8jlKqew_nw&oe=6A4BFCBD) | [SAR volume tiers](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.8562-6/736045144_4611753665817050_6210021807198769413_n.csv?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=-s5SHWbY6zoQ7kNvwFacpRY&_nc_oc=AdoOScNYwFZMSXP5JmeLN46RluPKjfsg6AOCGuS7T_4bSzqbIPp1AEtvmI-sFaYSMaxLg5UuTYW9pLWwefhKOcOF&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDM6SeQOTyCANBW-kLGsT67X582RHoK_2JaO26aFbgF4w&oe=6A4BEC63) | [SAR rates and volume tiers](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.8562-6/737674863_845888481708031_7067407008342933548_n.pdf?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=Pl4PDhrSyawQ7kNvwFkHp-3&_nc_oc=Adp-abtqtMVEsR7G_oF1dqYRaDD83bE364poEVUXkTDJYRpi7nNJpeq6N5IWOB85yt3SflytlDi62PlN_jgHNwi5&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQBV_EIIylOj3-uDALbHoKxEZ51WgLGEHh8GoFtpTpaPFg&oe=6A4BF251) |
| SGD | [SGD rates](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/738235648_27545834748410359_3612846730455957655_n.csv?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=-DE4_zvTe3cQ7kNvwFfGMMk&_nc_oc=AdoYAb9CLc8qIbYvuF66DMj8MzDphi9ZQAA3cPd8sAedILBi6FyJAxfEKaJbJdT2YXw41IJ8Mk2LmPPGSQDLHVMs&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQD8SlHrD5zBripLOGeGerO8WkmA69OO91t1Iuo_6XvlIw&oe=6A4BE324) | [SGD volume tiers](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.8562-6/735544502_1024960916924033_6280503177956106671_n.csv?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=syRfQBzoCP0Q7kNvwHUozfW&_nc_oc=Adop7ricZQBj5cgS-eW8nMW4xoRECNhqDQ9oa6gQQGfxY-oOYy3LCVsysX2wQ3ntj99RjXjpI-G0nXDi8XzPRhzS&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQDRZQDlLbb_DpMbiEPdQxo9_NvgE_WXUxuPQEzVfvPZyA&oe=6A4BD45D) | [SGD rates and volume tiers](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.8562-6/735687605_1604668864416234_1010790687769924176_n.pdf?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=3GRFJoIPSFgQ7kNvwHudO8R&_nc_oc=AdpZ022xlmUOxdva3buajJagIZ1pwKLzzoZ-SScG6fDV3Dl8kB9Ix-hDvhlS5Y2EiK81CEfSk3Rs2Y59D6E9Gcel&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQApyxD0Xe0nrNBDHA_137-1DdXYHxohlzNy64SwdW1kQw&oe=6A4BF448) |

### Updates to rate cards

Below represents future updates to our rates. See our [rate cards](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#rate-cards-and-volume-tiers) above for current rates.

#### Rate card updates effective October 1, 2026

To give customers more than 1-month notice – more time to plan and prepare – Meta is sharing pricing updates launching October 1, 2026 by June 1, 2026. Consistent with July 1, 2026, Meta will move additional markets out of their respective "Rest Of" pricing region to be standalone on rate cards. Below are at least the markets Meta will move out, and the corresponding updates to rates. Meta will announce to-be rates no later than September 1, 2026, per the [pricing calendar](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#pricing-calendar).

* Bangladesh\*, Iraq\*, Nepal\*, Sri Lanka\* – Lower utility and authentication rates, plus a new authentication-international rate that is higher vs. the current regional authentication rate
* Kazakhstan\*, Kuwait\*, Morocco\*, Oman\*, Ukraine\* – Higher utility and authentication rates, plus a new authentication-international rate that is higher vs. the current regional authentication rate

#### Billing localization launches

**Brazil**

*Effective July 1, 2026, as of 9am PT* – Only partners and directly-integrated clients whose Sold-To country is Brazil in [Billing Hub⁠](https://business.facebook.com/billing_hub/legal_entities) (eligible customers) can create new WhatsApp Business accounts (WABAs) in BRL (Brazilian Reals). Learn more about billing localization for Brazil [here⁠](https://www.facebook.com/business/help/4344414845795884).

Per-message rates in BRL are now published [below](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#updates-to-rate-cards). Charges from any BRL WABA will be invoiced in BRL by Meta's local entity in Brazil, Facebook Brasil.

As a reminder, eligible customers must ensure all WABAs in their business portfolio are migrated to BRL by June 30, 2027 to avoid disruptions, since as of July 1, 2027 Meta will no longer deliver the messages of non-BRL WABAs of eligible customers. To make this migration process easier and faster, use the [WABA Currency Migration APIs](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/change-billing-currency), which are available as of June 1, 2026.

**India**

Billing localization launched on January 1, 2026 for partners and directly-integrated clients whose Sold-To country is India in [Billing Hub⁠](https://business.facebook.com/billing_hub/legal_entities) (eligible customers). Learn more [here⁠](https://www.facebook.com/business/help/2301408543603167).

Eligible customers must ensure all WABAs in their business portfolio are migrated to INR by December 31, 2026 to avoid disruptions, since as of January 1, 2027 Meta will no longer deliver the messages of non-INR WABAs of eligible customers. To make this migration process easier and faster, use the [WABA Currency Migration APIs](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/change-billing-currency), which are available as of June 1, 2026.

#### Previous rate card updates

* Effective July 1, 2026 at 12am by WhatsApp Business account timezone, the rate updates below applied:
  * Hong Kong\* – Higher utility and authentication rates.
  * Hungary\* – Higher utility and authentication rates.
  * Italy – Higher marketing message rate.
  * Poland\* – Lower marketing, utility and authentication rates.
  * Qatar\* – Higher utility and authentication rates.
  * Romania\* – Higher utility and authentication rates.
  * Singapore\* – Higher utility and authentication rates.
  * Spain – Higher marketing message rate.
  * United Kingdom – Higher marketing message rate.

  \* Until June 30, 2026, messages to users in these markets were charged the respective regional rates (e.g., Rest of Central and Eastern Europe for Poland). These markets have been moved out of regional rate pricing to be standalone on rate cards, with market-specific rates.

  For utility and authentication messages – Volume tiers for these markets are now market-specific. For example, messages businesses send to users in Poland a/ no longer count toward the volume tiers of Rest of Central and Eastern Europe and instead b/ count toward the volume tiers of Poland.
* Effective April 1, 2026 at 12am by WhatsApp Business account timezone, the rate updates below applied:
  * Saudi Arabia – Higher marketing message rate.
  * India – Higher authentication-international rate.
  * Pakistan – Higher utility and authentication rates. No change to the authentication-international rate.
  * Turkey – Lower utility and authentication rates.
  * 8 new billing currencies introduced: ARS (Argentina), CLP (Chile), COP (Colombia), MYR (Malaysia), PEN (Peru), SAR (Saudi Arabia), SGD (Singapore), AED (United Arab Emirates).
* Effective January 1, 2026 at 12am by WhatsApp Business account timezone, the rate updates below applied:
  * India - Higher marketing rate.
  * France, Egypt - Lower marketing rates.
  * North America - Lower utility and authentication rates.
* Effective October 1, 2025 at 12am by WhatsApp Business account timezone, the rate updates below applied:
  * Colombia – Higher utility and authentication rates.
  * Mexico – Lower marketing rates.
  * United Arab Emirates – Higher marketing message rate.
  * Argentina, Egypt, Saudi Arabia – Lower utility and authentication rates.
  * Zimbabwe is mapped to our "Rest of Africa" region vs. "Other". Messages delivered to WhatsApp users with a +263 country calling code (Zimbabwe) will be charged "Rest of Africa" rates.
* Effective July 1, 2025 – Lower utility and authentication message rates across several markets, to ensure pricing is on-par to alternate channels for these use cases. Marketing conversation rates became marketing message rates.
* Effective April 1, 2025 – Lowered [authentication-international conversation rates](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) for Egypt, Nigeria, Pakistan, and South Africa.
* Effective February 1, 2025 – Lowered [authentication conversation rates](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#rates) for Egypt, Malaysia, Nigeria, Pakistan, Saudi Arabia, South Africa, and the United Arab Emirates.
* Effective November 1, 2024 – [Service conversations](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#service-conversations) are now free for all businesses.
* Effective October 1, 2024 – Updated [marketing conversation rates](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#rates) in India, Saudi Arabia, the United Arab Emirates, and the United Kingdom.
* Effective August 1, 2024 – Lowered [utility conversation rates](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#rates).

### Authentication-international rates

Specific countries have an authentication-international rate. Our rate cards reflect these rates. See [Authentication-International rates](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) to learn about these rates and if they apply to you.

### Country calling codes

Charges for messages are based on the country calling code of the recipient WhatsApp phone number. The table below shows how Meta maps country calling codes and ISO 3166 Alpha-2 country codes to countries or regions. If a country is not listed below, it maps to **Other**.

| Markets | Calling Code   (and network prefix if applicable) | ISO Country Code |
| --- | --- | --- |
| Countries  Argentina  Brazil  Chile  Colombia  Egypt  France  Germany  Hong Kong  Hungary  India  Indonesia  Israel  Italy  Malaysia  Mexico  Netherlands  Nigeria  Pakistan  Peru  Poland  Qatar  Romania  Russia  Saudi Arabia  Singapore  South Africa  Spain  Turkey  United Arab Emirates  United Kingdom | 54  55  56  57  20  33  49  852  36  91  62  972  39  60  52  31  234  92  51  48  974  40  7  966  65  27  34  90  971  44 | AR  BR  CL  CO  EG  FR  DE  HK  HU  IN  ID  IL  IT  MY  MX  NL  NG  PK  PE  PL  QA  RO  RU  SA  SG  ZA  ES  TR  AE  GB |
| North America  Canada    United States | 1    1 | CA    US |
| Rest of Africa  Algeria    Angola    Benin    Botswana    Burkina Faso    Burundi    Cameroon    Chad    Republic of the Congo (Brazzaville)    Eritrea    Ethiopia    Gabon    Gambia    Ghana    Guinea-Bissau    Ivory Coast    Kenya    Lesotho    Liberia    Libya    Madagascar    Malawi    Mali    Mauritania    Morocco    Mozambique    Namibia    Niger    Rwanda    Senegal    Sierra Leone    Somalia    South Sudan    Sudan    Swaziland    Tanzania    Togo    Tunisia    Uganda    Zambia    Zimbabwe | 213    244    229    267    226    257    237    235    242    291    251    241    220    233    245    225    254    266    231    218    261    265    223    222    212    258    264    227    250    221    232    252    211    249    268    255    228    216    256    260    263 | DZ    AO    BJ    BW    BF    BI    CM    TD    CG    ER    ET    GA    GM    GH    GW    CI    KE    LS    LR    LY    MG    MW    ML    MR    MA    MZ    NA    NE    RW    SN    SL    SO    SS    SD    SZ    TZ    TG    TN    UG    ZM    ZW |
| Rest of Asia Pacific  Afghanistan    Australia    Bangladesh    Cambodia    China    Japan    Laos    Mongolia    Nepal    New Zealand    Papua New Guinea    Philippines    Sri Lanka    Taiwan    Tajikistan    Thailand    Turkmenistan    Uzbekistan    Vietnam | 93    61    880    855    86    81    856    976    977    64    675    63    94    886    992    66    993    998    84 | AF    AU    BD    KH    CN    JP    LA    MN    NP    NZ    PG    PH    LK    TW    TJ    TH    TM    UZ    VN |
| Rest of Central and Eastern Europe  Albania    Armenia    Azerbaijan    Belarus    Bulgaria    Croatia    Czech Republic    Georgia    Greece    Latvia    Lithuania    Moldova    North Macedonia    Serbia    Slovakia    Slovenia    Ukraine | 355    374    994    375    359    385    420    995    30    371    370    373    389    381    421    386    380 | AL    AM    AZ    BY    BG    HR    CZ    GE    GR    LV    LT    MD    MK    RS    SK    SI    UA |
| Rest of Western Europe  Austria    Belgium    Denmark    Finland    Ireland    Norway    Portugal    Sweden    Switzerland | 43    32    45    358    353    47    351    46    41 | AT    BE    DK    FI    IE    NO    PT    SE    CH |
| Rest of Latin America  Bolivia    Costa Rica    Dominican Republic    Ecuador    El Salvador    Guatemala    Haiti    Honduras    Jamaica    Nicaragua    Panama    Paraguay    Puerto Rico    Uruguay    Venezuela | 591    506    1 (809, 829, 849)    593    503    502    509    504    1 (658, 876)    505    507    595    1 (787, 939)    598    58 | BO    CR    DO    EC    SV    GT    HT    HN    JM    NI    PA    PY    PR    UY    VE |
| Rest of Middle East  Bahrain    Iraq    Jordan    Kuwait    Lebanon    Oman    Yemen | 973    964    962    965    961    968    967 | BH    IQ    JO    KW    LB    OM    YE |
| Other  All other countries | Varies by country |  |

## Volume tiers

You can unlock lower utility and authentication rates based on the number of messages you send in a month.

### Tiering accrual

* **Messages are aggregated at the business portfolio level, across all WhatsApp Business accounts (WABAs) owned by the portfolio** — To determine what tier rates may apply in a given month for a given market–category pair, Meta aggregates messages across all of a business portfolio's WABAs for each market-category pair (e.g., Brazil–authentication, Brazil–utility, India–authentication, and so on).
* **Only messages that are charged count toward the tiers** — Thus, the following messages do not count:
  * Utility templates delivered to WhatsApp users within an open customer service window.
  * Utility templates delivered within a [free entry point window](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#free-entry-point-windows).
* **Volume tiers will be determined solely by Meta** — All insights data is approximate due to small variations in data processing. Undue reliance should not be placed on insights data.

### Key dynamics

* **Tiers are market–category specific** — Volume tiers are aligned to our rate cards and differ by market (e.g., Brazil or Rest of Latin America) and category (utility, authentication).
* **Rates are tier-specific** — When a business sends enough messages at a given market–category pair to reach the next tier, they unlock the rate of the next tier, specifically for messages in that tier. This rate applies across all of their WABAs.
* **Tiers reset monthly** — At the start of the next month (12am WABA timezone), message count resets to 0 and businesses begin to accrue messages toward that month.

### Volume tiers examples

The table below is illustrative and only highlights the dynamics of volume tiers. Please refer to our [rate cards](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages#rate-cards-and-volume-tiers) to see the rates charged.

![Table showing volume tier rate examples](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/502514970_1202956304344062_4629097874159039633_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=auQy7ttVLUIQ7kNvwHnxvdi&_nc_oc=AdonweUX-hBQDeYX6OZJVwgZAZWjxg8-6tNR3zsQVpu4Sm3xHdon0dnaLHnKMJnQkUfAKEDbeLYFPaf_FrAfDsID&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=vF8kuQO8QiHymQTkxTuEbQ&_nc_ss=7b2a8&oh=00_AQB4ksI40qyiPmzi-JYkV-e6VpaoZMiAJr2QoxheK4HpAA&oe=6A605851)

Below are several examples to highlight how the tiers work and what is charged in a given month, for a given market–category. These examples refer to the illustrative table above:

Example 1: A business that sends a total of B authentication messages in a month to India is charged:

* List rate for the first A messages.
* Tier rate 1 for messages A+1 to B.
* Total charges for that month = Rate per tier 𝗑 messages in each tier.

Example 2: A business that starts to be charged our authentication-international rates on the 15th day of the month:

* Day 1 to 14 of that month: Volume tiers apply on the authentication rate.
* Day 15 onward of that month: Volume tiers apply on the authentication-international rate, with messages continuing to accrue in that month. For example, if a business has already reached the Tier 2, the business would be charged Tier 2's authentication-international rate:

Example 3: A business has 3 WABAs sending authentication messages to India. For WABA A, it is still July 31 based on their timezone. For WABAs B and C, it is already August 1 based on their timezone. For July, the business is already being charged Tier Rate 1.

* The business portfolio will be accruing toward tiers for both July (via WABA A) and August (via WABAs B, C) for a period of time.
* The business can reach the next tier for July, via WABA A. If that happens, messages for the remainder of July for WABA A will be charged Tier Rate 2.

Example 4: A business has 3 WABAs, integrated across 2 partners. Provider 1 sends the first B messages in a given month, and provider 2 starts sending messages as of when the business is in the 3rd tier. The business does not send enough messages that month to reach the next tier. What Meta charges each provider:

* Provider 1: List rate for A messages, then Tier Rate 1 from A+1 to B, and Tier Rate 2 for B+1 to C.
* Provider 2: Tier Rate 2 across all of their messages.

### Tiering webhooks

Starting October 1, 2025, an [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook with `event` set to `VOLUME_BASED_PRICING_TIER_UPDATE` will be triggered when your WhatsApp Business account reaches a new volume tier, in any market, in a given month. This complements our [pricing\_analytics](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#pricing-analytics) endpoint, which will continue to provide intra-month tiering progress and tiering information for delivered messages.

Example webhook:

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "time": 1743451903,  
      "changes": [  
        {  
          "value": {  
            "volume_tier_info": {  
                "tier_update_time": 1743451903,  
                "pricing_category": "UTILITY",  
                "tier": "25000001:50000000",  
                "effective_month": "2025-11",  
                "region": "India"  
            },  
            "event": "VOLUME_BASED_PRICING_TIER_UPDATE"  
          },  
          "field": "account_update"  
        }  
      ]  
    }  
  ]  
}
```

* `tier_update_time` tells when your WABA reached a higher volume tier (Unix timestamp).
* `pricing_category` tells you the template category for which your new volume tier rate applies.
* `tier` tells you the new volume tier's lower and upper bounds.
* `effective_month` tells you the month in which your new volume tier rate is in effect.
* `region` tells you the WhatsApp user country/region for which your new volume tier rate applies.

Note that it's possible for multiple [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhooks to be triggered that describe the same tier switch event. In these cases, use the webhook with the smaller `tier_update_time` Unix timestamp as the official webhook.

### Tiering analytics

You can get [volume tier information](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#volume-tier-information) via [template analytics](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#template-analytics).

## Free non-template messages

Non-template messages, which can only be sent within an open [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows), are free. These messages will have `type` set to `free_customer_service` in the `pricing` object of status [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) webhooks:

```
"pricing": {  
  "billable": false,  
  "pricing_model": "PMP",  
  "type": "free_customer_service",  
  "category": "service"  
}
```

## Free utility template messages

Utility template messages sent within an open [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) are free. These messages will have `type` set to `free_customer_service` and `category` set to `utility` in the `pricing` object of status [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) webhooks:

```
"pricing": {  
  "billable": false,  
  "pricing_model": "PMP",  
  "type": "free_customer_service",  
  "category": "utility"  
}
```

### Edge case

If you send a message to a WhatsApp user prior to July 1, 2025 (which is when Meta switched from conversation-based pricing to per-message pricing), a utility conversation is opened between you and a user that spans the switch to per-message pricing (the conversation was opened before the switch but won't close until after the switch). In this case, utility templates sent to the user after the switch while the conversation is open will be free, but attributed to the open conversation. In status [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) webhooks, these messages will have a `pricing_model` of `CBP` and the utility conversation ID will be assigned to `conversation.id`. Once the conversation closes, subsequent utility messages will use per-message pricing, which will be reflected in new webhooks.

## Free entry point windows

If a WhatsApp user messages you via a Click to WhatsApp Ad or Facebook Page Call-to-Action button using a device running our Android or iOS app (our desktop and web apps are not supported):

* A 24-hour [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) is opened (as normal).
* If you respond within 24 hours using any type of message, the message will be free, and a Free Entry Point ("FEP") window will be opened, starting from the time when you responded.

FEP windows remain open for 72 hours. While open, you can send any type of message to the user at no charge. Note, however, that the customer service window is independent of the FEP window, so if the customer service window closes, you will only be able to send template messages.

## New max-price feature for Marketing Messages API for WhatsApp

Starting in 2026, businesses integrated into Marketing Messages API for WhatsApp can choose to set a [max-price](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/pricing) per marketing message delivery; when a max-price is set, Meta will charge that max-price or lower for delivery.

## New pricing policy for AI Providers leveraging WhatsApp Business Platform

Click [here](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/ai-providers) to learn more about our new pricing policy for "AI Providers" leveraging WhatsApp Business Platform, which is effective February 16, 2026, and updated as of May 12, 2026.

## Analytics

Use the [pricing\_analytics field](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#pricing-analytics) to get per-message pricing breakdowns and tiering information for delivered messages.

## Webhooks

Billable messages have `type` set to `regular` in the `pricing` object of status [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) webhooks:

```
"pricing": {  
  "billable": true,  
  "pricing_model": "PMP",  
  "type": "regular",  
  "category": "<PRICING_CATEGORY>"  
}
```

The `<PRICING_CATEGORY>` tells you what rate was applied (for example, `marketing`). See the status messages webhook reference for a list of possible values.

Note that currently, tiering information is not included in any webhooks. Use the [pricing\_analytics field](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#pricing-analytics) to get tiering information for delivered messages.

## Billing

Billing and billing-related actions are handled through the Meta Business Suite. See [About Billing For Your WhatsApp Business Account⁠](https://www.facebook.com/business/help/2225184664363779) for more information.

## WhatsApp Business Calling API pricing

The WhatsApp Business Calling API has different pricing. See our [Calling API pricing document](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing) to learn more.

## Conversation-based pricing

[Conversation-based pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing) is deprecated. It was replaced with per-message pricing on July 1, 2025.
