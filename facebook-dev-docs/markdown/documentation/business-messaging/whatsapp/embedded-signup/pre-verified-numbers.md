---
title: "Pre-filling screens"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers
---

# Pre-filling screens

Updated: Jun 21, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

If you know details about your customer’s business, such as its name and address, you can inject this data into Embedded Signup. Injecting this data can pre-fill screens or bypass them altogether, reducing the amount of input and interaction required by your customers.

For example, here is the business portfolio screen, pre-filled with business’s name, email address, website, country, and a pre-verified business phone number:

![Embedded Signup business portfolio screen pre-filled with the business name, phone number, email, website, and country.](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/465727373_1573223883300812_8312998736298536563_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9LZo1Ya_7yMQ7kNvwGs2eKq&_nc_oc=AdoDYy_olFrvnIvEN5DEbYnFQ2HBhz82UpuIP2rdV_xbVrZvEpR7NaEs13OdskqZGEHpnO0w3NuUEhE41YAve0Xr&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=Doj4er7kTFgJgxCBT24W5A&_nc_ss=7b2a8&oh=00_AQAs8PH_WMsNLb3LhhboqlcIi8ifRIjBvYY8BmwL-o2hxQ&oe=6A604687)

For the best experience, inject [business portfolio data](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers#business-portfolio-data), a [pre-verified number](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers#pre-verified-phone-numbers), and [phone profile data](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers#phone-profile-data). Injecting this data provides the best experience for your customer, as it:

* entirely pre-fills the business portfolio screen
* bypasses the WhatsApp Business account (WABA) selection and creation screens
* bypasses the business phone number selection and verification screens
* automatically sets the business phone number’s profile information in the WhatsApp client

## Embedded Signup integration helper

The Embedded Signup Integration Helper provides a convenient way for you to create pre-filled data payloads and test their impact on the flow. To access the payload tool:

* Navigate to **App Dashboard** > **WhatsApp** > **Embedded Signup Builder**.
* Locate the **Embedded Signup Setup** section.
* Locate the **Embedded Signup Pre-fill** row.
* Click the **Edit pre-fill data** button.

## Injecting data

The `FB.login` function, which gets called when a business customer launches Embedded Signup, accepts an object as an argument. Use this object’s `extras.setup` property to inject data:

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '<CONFIGURATION_ID>', // your configuration ID goes here
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {
        business: {
          // Business portfolio data goes here
        },
        preVerifiedPhone: {
          // Pre-verified phone number IDs go here
        },
        phone: {
          // Phone number profile data goes here
        },
        whatsAppBusinessAccount: {
          // WABA IDs go here
        }
      },
      featureType: '',
      sessionInfoVersion: '3',
    }
  });
}
```

### Business portfolio data

You can inject the following business portfolio details into the business portfolio screen:

* business portfolio name
* business portfolio email address
* business portfolio website
* business portfolio country (as well as additional address details)
* business phone number

Alternatively, you can inject *just an existing business portfolio ID*, and Embedded Signup automatically injects the portfolio’s existing details into the screen. Injecting just the portfolio ID can be useful if you want a pre-verified phone number to be associated with the customer’s existing business portfolio.

Injecting business portfolio data will pre-fill the business portfolio screen and also cause Embedded Signup to skip the WABA selection and WABA creation screens.

![Embedded Signup business portfolio screen with callouts mapping business.name, business.email, business.website, and address.country to their fields.](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/465818706_1256612865537779_5095106003564232822_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=bv8zhNN3F4gQ7kNvwFfDs1v&_nc_oc=AdqURzDrna5GrmQ5beqfLXdv42dBdJy4Xy-cOrvZUwnTHbvpSKHCvoa0lZK3JfZ8LLAilwdVZbaOgyGPV7YErviU&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=Doj4er7kTFgJgxCBT24W5A&_nc_ss=7b2a8&oh=00_AQB59ye4cXWaCpEQVja-1hwKMzdFWciGDUiaHoQVAiXm2Q&oe=6A60601A)

Injecting business phone number data will pre-fill the [phone number addition screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen):

![Embedded Signup phone number addition screen with callouts mapping business.phone.code and business.phone.number to the phone fields.](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/466044438_1065156355155603_6571589207868521084_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9hoqlPYC-VEQ7kNvwFdWZvl&_nc_oc=AdpUetFGAK8J3wm3J9YsEGO0d8VzAtJBWhKfD6_lao-pvSlvt2TGpHsl8HzTqCMzAQsY4DOhI-gtND06DT_kSINP&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=Doj4er7kTFgJgxCBT24W5A&_nc_ss=7b2a8&oh=00_AQCWzWLr8nh7CACzmA2O_-atG4alAcojxdA36i1CdKyKuQ&oe=6A605190)

Note that even if you inject data, the business customer can still edit this data using the **Edit** button, if they wish.

When a business customer completes the flow, Embedded Signup uses the business portfolio information you injected to create the business customer’s business portfolio and WABA.

#### Business object syntax

The `business` object pre-fills the business portfolio screen. Use the following syntax:

```
```
setup: {  
  business: {  
    id: <BUSINESS_PORTFOLIO_ID>,  
    name: '<BUSINESS_PORTFOLIO_NAME>',  
    email: '<BUSINESS_PORTFOLIO_EMAIL_ADDRESS>',  
    website: '<BUSINESS_PORTFOLIO_WEBSITE>',  
    address: {  
      streetAddress1: '<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_1>',  
      streetAddress2: '<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_2>',  
      city: '<BUSINESS_PORTFOLIO_CITY>',  
      state: '<BUSINESS_PORTFOLIO_STATE>',  
      zipPostal: '<BUSINESS_PORTFOLIO_ZIP_CODE>',  
      country: '<BUSINESS_PORTFOLIO_COUNTRY>'  
    },  
    phone: {  
      code: <BUSINESS_PORTFOLIO_COUNTRY_CALLING_CODE>,  
      number: '<BUSINESS_PORTFOLIO_PHONE_NUMBER>'  
    },  
    timezone: '<BUSINESS_PORTFOLIO_TIME_ZONE>'  
  }  
}
```
```

#### Business object parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_PORTFOLIO_ID>`  *Integer or null* | **Required if using an existing business portfolio, otherwise set to null or omit to create a new portfolio.**  Set to the business customer’s existing business portfolio ID if you want to pre-fill the screen with data already set on the business portfolio, or if you want to associate a pre-verified phone number with this portfolio.  If set to a portfolio ID, Embedded Signup checks whether the business customer owns the portfolio.  If they own it, Embedded Signup injects its existing data into the flow and ignores all other business object properties.  If they do not own it, Embedded Signup injects the `business.name`, `business.email`, `business.website`, and `address.country` values, if they are **all** set. If **any** are not set, the flow will display the default business portfolio screen instead.  Set to `null` (or omit the `id` property entirely) if you want to create a new business portfolio based on injected `business.name`, `business.email`, `business.website`, and `address.country` values. | `2729063490586005` |
| `<BUSINESS_PORTFOLIO_NAME>`  *String* | **Required if creating a new business portfolio.**  Business portfolio name.  If this name matches the name of an existing business portfolio owned by the business customer, the existing portfolio will be used instead (it will be treated as if you assigned the existing portfolio’s ID to the `id` property).  This name will also be used as the WhatsApp Business account name, which is only visible in the WhatsApp Manager.  Maximum 100 characters. | `Wind & Wool` |
| `<BUSINESS_PORTFOLIO_EMAIL_ADDRESS>`  *String* | **Required if creating a new business portfolio.**  The business’s email address.  This information will appear in the **Meta Business Suite** > **Business portfolio** > **Settings** > **Business info** panel. | `support@windandwool.com` |
| `<BUSINESS_PORTFOLIO_COUNTRY_CALLING_CODE>`  *Integer* | **Required if injecting a business phone number.**  Business phone number country calling code. | `1` |
| `<BUSINESS_PORTFOLIO_PHONE_NUMBER>`  *String* | **Required if injecting a business phone number.**  Business phone number, without country calling code. | `6505559999` |
| `<BUSINESS_PORTFOLIO_WEBSITE>`  *String* | **Required if creating a new business portfolio.**  The business’s website URL.  This information will appear in the **Meta Business Suite** > **Business portfolio** > **Settings** > **Business info** panel. | `https://windandwool.com/` |
| `<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_1>`  *String* | The business’s street address, line 1.  This information will appear in the **Meta Business Suite** > **Business portfolio** > **Settings** > **Business info** panel. | `1 Hacker Way` |
| `<BUSINESS_PORTFOLIO_STREET_ADDRESS_LINE_2>`  *String* | The business’s street address, line 2.  This information will appear in the **Meta Business Suite** > **Business portfolio** > **Settings** > **Business info** panel. | `Suite 1` |
| `<BUSINESS_PORTFOLIO_CITY>`  *String* | The business’s city address.  This information will appear in the **Meta Business Suite** > **Business portfolio** > **Settings** > **Business info** panel. | `Menlo Park` |
| `<BUSINESS_PORTFOLIO_STATE>`  *String* | The business’s state address.  This information will appear in the **Meta Business Suite** > **Business portfolio** > **Settings** > **Business info** panel. | `California` |
| `<BUSINESS_PORTFOLIO_ZIP_CODE>`  *String* | The business’s zip code address.  This information will appear in the **Meta Business Suite** > **Business portfolio** > **Settings** > **Business info** panel. | `94025` |
| `<BUSINESS_PORTFOLIO_COUNTRY>`  *String* | **Required if creating a new business portfolio.**  Business address [ISO 3166-1 alpha-2⁠](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7-VObiTxlxTaqCGXBIbVmv_9gUI0gZ2PyNcZEG5dRGO-rMPyr_5diVpB4C6Q_aem__oExKUnJtWiy6zuMT6Ie7A) country code. | `US` |
| `<BUSINESS_PORTFOLIO_TIME_ZONE>`  *String* | The business’s time zone in [UTC offset⁠](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5X5NMdR8BYNeRmQUydEo_MuPv9UfuVrrfuCgz3YxIIe28OoxyUf1KYisv97Q_aem_WQ7XY5OthMfAYYnv9wjnZA) format. | `UTC-07:00` |

#### Example business object

```
setup: {
  business: {
    name: 'Wind & Wool',
    email: 'support@windandwool.com',
    website: 'https://windandwool.com/',
    address: {
      streetAddress1: '1 Hacker Way',
      streetAddress2: 'Suite 1',
      city: 'Menlo Park',
      state: 'California',
      zipPostal: '94025',
      country: 'US'
    },
    phone: {
      code: 1,
      number: '6505559999'
    },
    timezone: 'UTC-07:00'
  }
}
```

### Pre-verified phone numbers

You can inject a [pre-verified business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers) ID into Embedded Signup, which will cause Embedded Signup to skip the [phone number addition](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) and [phone number verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-verification-screen) screens.

If you are injecting a pre-verified phone number along with business portfolio data (either creating a new portfolio or using an existing one), Embedded Signup pre-fills the [business portfolio screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen) with the pre-verified number:

![Embedded Signup business portfolio screen pre-filled with business data and a pre-verified phone number, with callouts for each mapped field.](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/465901723_348914194949317_6482687639584528008_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y1J6D1M5Z_gQ7kNvwHI9alU&_nc_oc=AdqyMxf7g8H3PwjpkAZUYaqiG5vXtozCHql3RTdjBKzQXlMvq7wkjknRfOxJs6ixkUcg6gGE6HW_52bku3LM_fmz&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=Doj4er7kTFgJgxCBT24W5A&_nc_ss=7b2a8&oh=00_AQAo1xTkZga7GPxmZXUkyT0U87kwSXQ3p8SZ-rLGQzI62Q&oe=6A6047F2)

If you are not injecting business portfolio data along with a pre-verified number ID, the number will appear in the [WABA selection screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen):

![Embedded Signup phone number addition screen with a verified pre-verified phone number, callout mapping the preVerifiedPhone field.](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/465853311_1297615144933767_5353203651542728771_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=EHW384mDWuYQ7kNvwF7ZY4t&_nc_oc=AdpwaqOS5U0J04mU7l4ZuV8OLh3XrjnUmQP-bW_KUszWZzO9ErDy7UT8GdyDfBTkznodBsB2uu68po5FWDmrt3rf&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=Doj4er7kTFgJgxCBT24W5A&_nc_ss=7b2a8&oh=00_AQAswCUTbzHxpfjTdPYVj4e3ZzW8G02VMi8nhprqXv5RMg&oe=6A606291)

#### PreVerifiedPhone object syntax

The `preVerifiedPhone` object injects a pre-verified phone number ID, which causes Embedded Signup to skip the phone number addition and verification screens. Use the following syntax:

```
```
setup: {  
  preVerifiedPhone: {  
    ids: [  
      '<PRE-VERIFIED_PHONE_NUMBER_ID>'  
    ]  
  }  
}
```
```

Replace `<PRE-VERIFIED_PHONE_NUMBER_ID>` with a unique, pre-verified business phone number ID.

Note that although the `ids` value accepts an array of strings, if you include more than one pre-verified business phone number ID, only the first ID in the array will appear in the WABA selection screen.

#### Example preVerifiedPhone object

```
setup: {
  preVerifiedPhone: {
    ids: [
      '106540352242922'
    ]
  }
}
```

### Phone profile data

You can inject the following phone number profile data. This data does not pre-fill any Embedded Signup screens, but Embedded Signup populates the business phone number’s profile in the WhatsApp client with it, which is visible to WhatsApp users.

* Phone number profile display name
* Phone number category
* Phone number description

![WhatsApp client Business info profile with callouts mapping phone.displayName, phone.category, and phone.description to the profile.](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/466002126_2208553189514290_7696161917337366109_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_x3kYNsiBecQ7kNvwFuZyIF&_nc_oc=Adq_ycy7mh90K7uFJZ2d2nGOybCi4BJewXJmkPjDfMx9kwTyj7DpaCcH1CugWGnb9diiL04Oqggx71piT8uET1g9&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=Doj4er7kTFgJgxCBT24W5A&_nc_ss=7b2a8&oh=00_AQDNu1vQMuSs2V2yERbQlK7FZ2RERIcGiAc3BtRS8g_r2Q&oe=6A603FDF)

If you do not include this data, Embedded Signup sets the category to **Other**, and the business customer must set or edit their profile data on their own.

Your customers can do this in the [**WhatsApp Manager** > **Account tools** > **Phone numbers** panel⁠](https://business.facebook.com/latest/whatsapp_manager/phone_numbers/) by selecting their business phone number and accessing the **Profile** tab. You can also provide a way for them to update it programmatically by using the [WhatsApp Business Profile API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#post-version-phone-number-id-whatsapp-business-profile).

#### Phone object syntax

The `phone` object populates the business phone number’s profile in the WhatsApp client. Use the following syntax:

```
```
setup: {  
  phone: {  
    displayName: '<PHONE_PROFILE_DISPLAY_NAME>',  
    category: '<PHONE_PROFILE_DISPLAY_CATEGORY>',  
    description: '<PHONE_PROFILE_DISPLAY_DESCRIPTION>'  
  }  
}
```
```

#### Phone object parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<PHONE_PROFILE_DISPLAY_NAME>`  *String* | **Required.**  Business profile display name, visible to WhatsApp users in the WhatsApp client (see screenshot above). | `Wind & Wool` |
| `<PHONE_PROFILE_DISPLAY_CATEGORY>`  *String* | **Required.**  Business profile display category.  See the vertical field in the [GET /<WHATSAPP\_BUSINESS\_PHONE\_ID>/`whatsapp_business_profile`](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#fields) endpoint reference for a list of possible values. | `APPAREL` |
| `<PHONE_PROFILE_DISPLAY_DESCRIPTION>`  *String* | **Required.**  Business phone number profile description.   * Maximum 512 characters. * Rendered emojis are supported; however, their Unicode values are not. Emoji Unicode values must be Java- or JavaScript-escape encoded. * Hyperlinks can be included but will not render as clickable links. * Markdown is not supported. | `Bespoke artisan apparel and lifestyle goods from upcoming designers.` |

#### Example phone object

```
setup: {
  phone: {
    displayName: 'Wind & Wool',
    category: 'APPAREL',
    description: 'Bespoke artisan apparel and lifestyle goods from upcoming designers.'
  }
}
```

### WhatsApp Business accounts

If you are injecting a pre-verified phone number, you can also include a WABA ID. This will associate the pre-verified number with the existing WABA instead of with a new one that the business customer would be prompted to create as part of the flow.

#### WhatsAppBusinessAccount object syntax

The `whatsAppBusinessAccount` object associates a pre-verified phone number with an existing WABA, so it does not appear in any pre-filled screen. Use the following syntax:

```
```
setup: {  
  whatsAppBusinessAccount: {  
    ids: '<WABA_ID>'  
  }  
}
```
```

Replace `<WABA_ID>` with a unique WABA ID.

#### Example whatsAppBusinessAccount object

This example associates a pre-verified phone number with an existing WABA.

```
setup: {
  preVerifiedPhone: {
    ids: [
      '106540352242922'
    ]
  },
  whatsAppBusinessAccount: {
    id: [
      '432428883295692'
    ]
  }
}
```

## Examples

### New business portfolio, pre-verified number, and display profile

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '31602279155865',
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {
        business: {
          name: 'Wind & Wool',
          email: 'support@windandwool.com',
          website: 'https://windandwool.com/',
          address: {
            streetAddress1: '1 Hacker Way',
            streetAddress2: 'Suite 1',
            city: 'Menlo Park',
            state: 'California',
            zipPostal: '94025',
            country: 'US'
          },
          phone: {
            code: 1,
            number: '6505559999'
          },
          timezone: 'UTC-07:00'
        },
        preVerifiedPhone: {
          ids: [
            '106540352242922'
          ]
        },
        phone: {
          displayName: 'Wind & Wool',
          category: 'APPAREL',
          description: 'Bespoke artisan apparel and lifestyle goods from upcoming designers.'
        }
      },
      featureType: '',
      sessionInfoVersion: '3',
    }
  });
}
```

### Existing business portfolio, pre-verified number, and display profile

```
// Launch method and callback registration
const launchWhatsAppSignup = () => {
  FB.login(fbLoginCallback, {
    config_id: '31602279155865',
    response_type: 'code',
    override_default_response_type: true,
    extras: {
      setup: {
        business: {
          id: '2729063490586005'
        },
        preVerifiedPhone: {
          ids: [
            '106540352242922'
          ]
        },
        phone: {
          displayName: 'Wind & Wool',
          category: 'APPAREL',
          description: 'Bespoke artisan apparel and lifestyle goods from upcoming designers.'
        }
      },
      featureType: '',
      sessionInfoVersion: '3',
    }
  });
}
```
