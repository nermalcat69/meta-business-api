---
title: "How to Set Up DNS Record on Cloudflare"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/conversions-api-gateway-pipeline
---

# How to Set Up DNS Record on Cloudflare

Updated: Feb 2, 2025

This document will guide you through the steps to set up a DNS record on Cloudflare correctly.

### For new DNS records, make sure the 'Proxy status' setting is set as 'DNS only'.

![Cloudflare DNS management Add record form with Proxy status toggle off, set to DNS only, highlighted](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/307166224_3572520549698623_4889651852549459404_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KqjGk_TIt68Q7kNvwGs4iaK&_nc_oc=Adr3JfVdYdl_tvBpndvACazZgD8X2eAt0BU2XPI1dYHhNzmEXuLVajOki6EeCVAlbBl4EudzRPJGr5VIY2DQ8Q9O&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=76ULZ8cMNyaMxC5vFhPv5A&_nc_ss=7b289&oh=00_AQBq9DvJtyl-zeQefGF1hBVyrpVKXEmofzB_ymDxdQ8GaA&oe=6A6090F4)

### For existing DNS records, edit their settings and change 'Proxy status' to 'DNS only'.

![Cloudflare editing an existing Proxied A record, with the Proxy status toggle switched to DNS only](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/307308600_409463217973484_2666392095185844610_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_rWJF32VFw0Q7kNvwHAc7nS&_nc_oc=AdpdPF29-TzOSDnbCulIO_3tDsPEeGXD4C3v3G4tkVNO_oRwYqxWxnVcnQSU7iPHBjJWh5UNH1ytvgHrSAmvWHYB&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=76ULZ8cMNyaMxC5vFhPv5A&_nc_ss=7b289&oh=00_AQAbs90mDAcwg6apcKlgGX1nYEJa0mtw_SijY0kpfPbJBg&oe=6A607782)

### In some cases, if you need to use the 'Proxied' mode, for example, certificates are provisioned via proxy, please make sure the encryption mode under the TLS/SSL setting is set to 'Full'.

## See Also

* [Set Up Custom Domain for AWS](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-aws-eks/set-up-domain)
* [Create a Custom Domain for Google Cloud Platform](https://developers.facebook.com/documentation/ads-commerce/gateway-products/gateway-gcp/set-up-domain)
