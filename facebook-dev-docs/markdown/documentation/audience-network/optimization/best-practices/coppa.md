---
title: "Identifying Authorized Sellers with ads.txt"
source_url: https://developers.facebook.com/documentation/audience-network/optimization/best-practices/coppa
---

# Identifying Authorized Sellers with ads.txt

Updated: Feb 21, 2020

Facebook has committed to reducing ad fraud by adopting the [ADS.TXT - Authorized Digital Sellers⁠](https://iabtechlab.com/ads-txt/) initiative. As an Audience Network publisher, you are required to participate in this initiative by placing a crawlable `ads.txt` file on your site and adding a record in the file that identifies facebook.com as an authorized reseller of your ads.

## ads.txt Record Format

An ads.txt record consists of a single line comprised of four fields separated by commas.

The ads.txt record fields are as follows:

| Field | Description | Value |
| --- | --- | --- |
| `Ad System Domain` | (Required) The canonical domain name of the advertising system to which the bidder connects. | `facebook.com` |
| `Publisher Account ID` | (Required) The identifier associated with the reseller account within the advertising system. | Your property IDs or Business ID |
| `Account Type/Relationship` | (Required) An enumeration of the type of account. | `RESELLER` |
| `Certificate Authority ID` | An ID that uniquely identifies the advertising system within a certification authority. | `c3e20eee3f780d68` |

### Example for Publishers Working with Audience Network

To add Facebook to your ads.txt, you have the option of using either property IDs or your business ID. In either case, the ads.txt file must be located at `http://yourdomain.com/ads.txt` and be visible to web crawlers.

#### Adding Facebook with Property IDs

To add Facebook to your ads.text with property IDs, copy and paste the following string to each of your properties. (Note: You must also update the property ID for each string.)

```
facebook.com, Property ID, RESELLER, c3e20eee3f780d68
```

The following is an example.

```
[...]
facebook.com, 1000001, RESELLER, c3e20eee3f780d68
facebook.com, 1000002, RESELLER, c3e20eee3f780d68
facebook.com, 1000003, RESELLER, c3e20eee3f780d68
[...]
```

#### Adding Facebook with a Business ID

To add Facebook to your ads.txt with a business ID, copy and paste the following string containing your Business ID. This is the option for publishers with several property IDs.

```
facebook.com, Business ID, RESELLER, c3e20eee3f780d68
```

For more information on the format of the ads.txt file, see [IAB Tech Lab, Ads.txt Specification⁠](https://iabtechlab.com/wp-content/uploads/2019/03/IAB-OpenRTB-Ads.txt-Public-Spec-1.0.2.pdf).
