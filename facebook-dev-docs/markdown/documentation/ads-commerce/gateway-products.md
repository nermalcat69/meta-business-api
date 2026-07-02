---
title: "Step 1: Implement Conversion Leads Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products
---

# Step 1: Implement Conversion Leads Integration

Updated: Jun 28, 2026

Follow the [2: Getting Started With the CRM Integration guide](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/crm-integration/2-getting-started-with-integration) to start the Zapier integration. Return to this step once that is complete.

* Zapier redirects you to a template for your selected CRM. If your CRM does not have a template, create a new Zap from scratch.
  
* This guide assumes you create the Zap from scratch to cover all steps.
    
  Choose your CRM app as the first app (trigger). Choose the **Facebook Conversions** app and **Send Funnel Event** action as the second app (action).
  
* You will need to create Zap(s) for when:
  * New leads are added to your CRM from Meta.
  * Leads status change and progress further into your sales process.
* In this example, this Zap sends a funnel event from HubSpot to Meta whenever a contact's status changes. This Zap sends event updates when the lead status changes. Later, you will need to create a second Zap to send events when new leads are added to your CRM.

  ![Zapier flow linking a HubSpot trigger step to a Facebook Conversions Send Funnel Event action](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/653697015_1459945239197459_4678613476109444995_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=V_zt3BTskcYQ7kNvwEZjkSP&_nc_oc=AdpHnkp8m6qYyGt5vpYLBl8Kpbwgf5y9QmJC_j3gRm8N750To0Y85LXCzHCpIiVJ4OsMqZuAFeYOEEi3XNY1phjb&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQAyqq1ByP8sugQxho9HAJyOlgkLykrpivVpNSzepwfvWg&oe=6A606AB6)
  
* First, set up the **trigger** app (HubSpot, in this case). During the setup steps, ensure you select the appropriate CRM and trigger events, and connect your CRM account to Zapier. In this example, choose the New Contact Property Change event to send an event when the property changes.

  ![Zapier HubSpot trigger setup with New Contact Property Change event and connected account selected](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/653963343_1459945269197456_2323606605751061009_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qQVd1jYqshYQ7kNvwFlrt6G&_nc_oc=AdoP3ew9AJRQ0AG2d85Y0HsKNCCNBeYbEOdQ9Cl53p2wQRVu5xjCORezdhaaKXEi7ez2p8LDcwlqZS6MwL8W-eyI&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQAH_g6A2HUo0UTXVQNUl86kTV_6X4r1dPOknAWOMs0xJQ&oe=6A60A108)
  
* Then, click **Continue**, select the property that will trigger Zapier to send an event when the property changes. In this HubSpot example, Zapier will send an event when the Lifecycle Stage property changes in HubSpot.
    
    
  Zapier will only integrate a select number of properties by default for some CRMs. You may add additional properties to integrate if the default selection does not include all relevant properties.   
    
  In this example, because you stored the Facebook lead ID in your manually added properties in HubSpot, you can retrieve it through additional properties.

  ![Zapier HubSpot configure step with Lifecycle Stage property and Facebook lead id added as a property to retrieve](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/653704119_1459945355864114_6302574750959977657_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=QupsdobTruwQ7kNvwEI_fOr&_nc_oc=AdpbogqXsZmhwbbBAgl-OKkBlYlH-wQwpFZzFPcpVHgaYfWF8BB5XiYFmak6twD4p9YKSK-LRXXQidfshnBvXM8d&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQDlnruVCV7oVJpeRN8DPWnE78a26gFu3R5VrTFVqFllfA&oe=6A606CC8)
  
* In the action app, ensure that the Facebook Conversion app and **Send Funnel Event** action event are chosen, and connect your Facebook account.

  ![Zapier action setup for Facebook Conversions app with Send Funnel Event action and connected account](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/653704075_1459945255864124_2096636517164388913_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=57QLUK_UHtoQ7kNvwGYUJTz&_nc_oc=AdoEEPgslfjTTbI3SDMLjqqc_o1qKr1u_ZX_BOdTu5qa6jZSSXPADbR_KSfVvLhlWhmob70jqQ7S_Bm-zTDIXsx-&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQDWw4up9sknpgInOp30Bxeo7tscMCQStJZ9jnVsTiUx-A&oe=6A609A2C)
  
* Click **Continue**, connect your Facebook account and choose your CRM pixel (data source).
  
* Fill in all fields in the **Set up action** section of the **action** app.
  * **Time of customer event** — A Unix timestamp that represents when this event has been updated in your CRM. If you cannot find an applicable field in your CRM, you can leave this parameter empty and Zapier will use the upload time.
    
  * **Stage in Sales Process** — Refers to a lead moving through the sales funnel in your CRM. Make sure to send all stages as they are updated, including the initial raw lead stage. Use HubSpot's **Lifecycle Stage** property to represent this.
      
      
    For example, your funnel could look like this:
    * Raw Lead from Meta
    * Marketing Qualified Lead
    * Sales Opportunity
    * CustomerIf a lead reaches the final **Customer** stage, then the previous 3 stages should have been sent as they occurred.
    
  * **CRM you use** — The name of your CRM. This could be a static text like "HubSpot".
    
  * **Customer information parameter** — The field containing the customer information parameter for your downloaded leads. Send as many parameters as possible for better ad performance.
    
  * **Facebook Lead ID** — Meta recommends sending the Facebook lead ID for best performance. Note that in the case of HubSpot, **there is no Facebook lead ID** field by default. However, because you retrieved the additional property of lead ID in step 6, you can map it to the Facebook lead ID field. Refer to the
    [How to Find the Meta Lead ID](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration/how-to-find-the-lead-id) documentation.

    ![Send Funnel Event fields mapping HubSpot Facebook lead id, email, and phone to the customer info parameters](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/653700527_1459945429197440_7727161800360605242_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mt-Eom_lQGMQ7kNvwEb9jNQ&_nc_oc=Adprn-pxNH_ZdHNsiu-iP9RchaDhQrtzKbxkL8cvbTpxXe_ZTfBD6UlAsgiRLvj4Yq5TgKtiTE4Kx70_xHahFlAe&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQA7tu0lD64iXMXm5e4nEIVUeTsz6PJmR_1iNbf1WCv-ng&oe=6A606D00)
  
* Review the Zap to verify the correct data is pulled into the parameters. If everything appears correct, send a test event to Meta by clicking the **test** button.  
    
  Publish the Zap to begin sending events if the test is successful.

  ![Zapier test step showing a successful stage update sent to Facebook Conversions with response data out](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/653077347_1459945219197461_7950545287480576094_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2DHz93UAtg4Q7kNvwHggT1y&_nc_oc=Adr2oP2IDfQUQssDroNtzzY9SLTLteo6TcLuHhr9P-j_WE7B2_16WGlF6_DtlZSOTJ3we7wLv1o7FllbThs1tI6D&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQAWmrF8k4MGUCi1-H9JseGG8gIs0RywPS_6zlb5JKCHpg&oe=6A609AD0)
  
* Repeat from Step 3 above if you need to create additional Zaps for when:
  * New leads are added to your CRM from Meta.
  * Leads status change and progress further into your sales process.
* If you receive the Sample error 1 below, you either can choose to connect Zapier using the Meta Events Manager onboarding flow (see [this Business Help Center article⁠](https://www.facebook.com/business/help/571704773472628) for more). Or, if you prefer, you can connect from the Zapier side by opening the data source permission:  
    
  **Datasource** -> **Setting** -> **Conversions API** -> **Choose a partner** -> **Zapier** -> **Turn on permission**  
    
  Sample error 1

  ![Zapier error: failed to create a stage update because Zapier partner integration is not enabled in Events Manager](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/652943299_1459945402530776_1103942209917210299_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=XHl0ELuy_iQQ7kNvwGjg_Ky&_nc_oc=AdpDwYZWC3-cJEyZKil_DIPTgz9wNO6rwFlQ5LSse47lfo5p-n0XJ5UG_HTncBI2ebseX3YJJVq_ayFWmM9rhWll&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQDF-yKY0Xx6jPOqKrn2_JvzqRIkjFyDXRFzpMS6kuUrNw&oe=6A6090A8)

  Steps to follow to resolve error:

  ![Events Manager dataset Settings tab showing Conversions API setup options including Choose a partner](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/653700987_1459945322530784_7715129791082058527_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=z9er_TiY_sEQ7kNvwHAXqW3&_nc_oc=Ado3a64RiFrnlGV5T63FTY2RoQkp4nvjS8Hz-RC5zPNvUEgXVdCUrxe-TGitXERvQw6g9YzPvYEMfFkF99uXZDIb&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQAGUx4y1lxmZsjPejbIa9tcxdjcfIadwc5zMstQg0jysg&oe=6A608921)

  ![Choose a partner dialog in Events Manager listing integration partners including Zapier](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/654408786_1459945332530783_1321018341599093245_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=29h5yWsC0QkQ7kNvwFKGrgd&_nc_oc=Adr-fYcHWbHZ3j3NlysrVbWYAL6q33EnFWZMnyMK26R0TTQF59wOVJxsKab9N4EG57FhESX3_KZ3INAKyy_ylGGQ&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQCBH21kTfaHB0OrvQPzBeTj2Bs8hOmxGVZiyY_qvMOUJg&oe=6A60729E)

  ![Connect Your Zapier Account to Meta dialog with the Authorize Zapier connection toggle enabled](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/653708221_1459945262530790_8270727085761393477_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=a1W1gJ5mv78Q7kNvwHWF6AX&_nc_oc=AdqIW5ojWoOO07999E0S45hm7vzlT41SIdCeY1VE2ykE1F2fCLBiH9FakR-seVmtoteO76I0ONZ-sXpO0ZPDI8Zf&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQCVtl2FmVcuVwMD6hXJCDFYQ1WhpYhtZt2yuDnxNb9E3A&oe=6A607842)
  
Sample error 2

![Zapier error: stage update failed because of no or too broad customer information parameters](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/655006047_1459945199197463_6090089811679193623_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fwD1pkGuCbwQ7kNvwHKOA5S&_nc_oc=AdrLaOPzxvmJfDIXzJNb5OfRIsDXMi0604Kl5O-Uyev3lOyY7i-qQWzf3ra9Nrbr6dhTHnJ03_uiyCllBSCxWp7m&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQCAbCE5i6k0reRL9RlFz6Ue8Ps5hxhU8GKNxoS3feF5aQ&oe=6A607499)

**Error** - No customer information parameter, or a combination of customer information parameters that is too broad.  
  
Make sure at least one customer information parameter is selected on the mapping sessions.   
  
Also, if you choose to use the field mapping features, make sure the field has actual data attached to pass the test action. Screenshots below show error field mapping versus correct field mapping.

![Incorrect field mapping with warning icons on empty Customer Email and Customer Phone Number fields](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/651896893_1459945415864108_1104455846012382576_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ysPFoO-coE8Q7kNvwH1_Qvz&_nc_oc=AdpUYHfg7E1amjrFFfP1bmX4ZxPG4yp7Zi13mdqt2o-vevOFeobFiiGml2hpaSTHMI91n387iAlXCYlhjzkAEtsX&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQB5bJPylY-oVw8K3f3BdA1zVyb-FX-u_5sVLmCHbn-dyQ&oe=6A608EE7)

![Correct field mapping with Customer Email and Customer Phone Number populated with sample HubSpot data](https://scontent.fdel27-4.fna.fbcdn.net/v/t39.2365-6/654488101_1459945305864119_6881430278944961631_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6vVYIQezKEMQ7kNvwEqd61V&_nc_oc=AdpYH2WHxsBvXqN91chU9xRtomgSI3o5UARPFJgrxTt43vxGvHPG5bfg3kInvyGcBnISuPZRDGwGDQafe1J7qOtf&_nc_zt=14&_nc_ht=scontent.fdel27-4.fna&_nc_gid=TvMS1jGy1-gJ3K6cR_JROA&_nc_ss=7b289&oh=00_AQB35N86lz0q2wXXH0ybJZfnt_dhPhG9SX4XAMRGF2NtUA&oe=6A60878E)
