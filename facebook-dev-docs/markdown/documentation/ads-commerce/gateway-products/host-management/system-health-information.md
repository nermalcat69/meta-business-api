---
title: "Conversions API Gateway or Signals Gateway: Set Auto-Scaling Limits"
source_url: https://developers.facebook.com/documentation/ads-commerce/gateway-products/host-management/system-health-information
---

# Conversions API Gateway or Signals Gateway: Set Auto-Scaling Limits

Updated: Feb 2, 2025

For Conversions API Gateway and Signals Gateway, its event processing capacity is determined by the event capacity that you set. By default, Conversions API Gateway and Signals Gateway can process up to 100 events per second. You can update this value on the Conversions API Gateway or Signals Gateway Admin UI after installation.

![Auto scaling page showing Set auto scaling limits with event capacity slider, client account capacity, and What is auto scaling charts.](https://scontent.fdel27-2.fna.fbcdn.net/v/t39.2365-6/475389426_1121687069425493_1346043499068404725_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fOXA2XbN8soQ7kNvwEsHn0o&_nc_oc=AdpTS3_tc5x7Sc2whg5k68GSqmjEU6HEfka7GpC5LvR3IKJ0wXRwvIL-9HAn4fnTgXlWcq7agcHq5-tZ_yB8Atx3&_nc_zt=14&_nc_ht=scontent.fdel27-2.fna&_nc_gid=WjK5DKWSmMh_195ce5SAqQ&_nc_ss=7b289&oh=00_AQCnuiQhF52K9u-08Oy8XqxLZzogvxOwVDLcReXHdL-SpA&oe=6A607D95)

The auto-scaling limits display the current event capacity and the average number of events per second in the last 24 hours. You can update the event capacity using the slider. When you choose a new value and click the **Save changes** button, a pop-up window will appear.

![Confirm auto scaling limits dialog warning that increasing capacity may raise fees, with New event capacity 400 and Cancel and Confirm buttons.](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/475412662_1360703861954620_6445470652412365398_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vpqq3mR9G9oQ7kNvwHsh0zD&_nc_oc=AdryWPtKFC5Rr0M2Hq6LrvTAZxQJlv2OMYJgQhogfLzoedUWbi3QjvhrsLgE4hSCrucJjzikEvMLuGjMSJH2Jj51&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=WjK5DKWSmMh_195ce5SAqQ&_nc_ss=7b289&oh=00_AQDbmqwo9gBUEsKXrM98jwzbmxP_THaPr2Jd1tizDPxQ-A&oe=6A6083C3)

The message will include information about how increasing event capacity may result in an increase in fees.

After clicking the **Confirm** button, the event capacity will be updated.

![Auto scaling limits page with a red alert that peak events per second is 15% over maximum capacity, showing current and average event volume.](https://scontent.fdel27-8.fna.fbcdn.net/v/t39.2365-6/474592112_1156959119153135_5719739229352329164_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=f6ANRpJ5OOoQ7kNvwGx5Ph_&_nc_oc=AdqoSdZAk7Xft2CAmfTW_WW9lnku7MAPoEFKQjkoOmGnB3FO66sWnSRYzhMf-Cm_qxZp6ONeLuMRn-j1-E6qBmah&_nc_zt=14&_nc_ht=scontent.fdel27-8.fna&_nc_gid=WjK5DKWSmMh_195ce5SAqQ&_nc_ss=7b289&oh=00_AQCeC3bVGY_bJoTcg98Rv9nsgzRjF8o5x8JKmgNSA59CTA&oe=6A609739)

When the number of events per second on your instance exceeds the event capacity you have set, you will see an alert message on this page. The message will show how much the peak event per second is above the event capacity and provide a recommended value to help you choose a new limit.

## See Also

* [Using the Conversions API](https://developers.facebook.com/documentation/ads-commerce/conversions-api/using-the-api)
