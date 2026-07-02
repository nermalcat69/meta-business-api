---
title: "User Experience Design"
source_url: https://developers.facebook.com/documentation/facebook-login/login-connect
---

# User Experience Design

Updated: Jun 30, 2026

The onboarding experience is one of the most important user experiences in your app. A high quality onboarding experience can lead to conversion rates above 90% and encourages people to become more engaged and profitable.

Facebook Login lets people start using your app quickly and easily, and enjoy more personalized and meaningful experiences. In this doc, we offer tips and considerations to create a great login user experience with Facebook Login.

* [Show value first](https://developers.facebook.com/documentation/facebook-login/login-connect#showvaluefirst)
* [Avoid unnecessary steps](https://developers.facebook.com/documentation/facebook-login/login-connect#avoidunnecessarysteps)
* [Button design](https://developers.facebook.com/documentation/facebook-login/login-connect#buttondesign)
* [Permissions](https://developers.facebook.com/documentation/facebook-login/login-connect#permissions)
* [Provide a way to log out](https://developers.facebook.com/documentation/facebook-login/login-connect#loggingout)
* [Test and measure](https://developers.facebook.com/documentation/facebook-login/login-connect#testing)

## 1. Show value before prompting people to login

When deciding where in the user experience to prompt people to log in, ask yourself at what point will people appreciate what your app has to offer enough to trust it with their information.

This is often influenced by what people experience before even downloading the app, but there is a lot you can do to further influence this by design within the app.

Here are a few design approaches to encourage more people to log in:

* Provide a clear and succinct statement of what your app has to offer
* Provide a glimpse of the content they’ll get after they’re logged in
* Provide a new user experience
* Allow people to experience your app without an account

### Provide a clear and succinct statement of what your app has to offer

Provide a clear, succinct and compelling statement about what your app has to offer. It might have been a while since they downloaded the app or read about it in the app store.

![Pinterest mobile login screen with the value statement Save creative ideas for any project or interest above a Continue with Facebook button](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/18853685_793461504169530_595604250470383616_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=l1KQY1B8BW4Q7kNvwFsjfZN&_nc_oc=AdpKFAep7r29u0xbnIJGDyHTbqVcVuKV_xjPAtykAxBccH_UMoHV6RjkyP3-JQw9MnL4TRUw9wHxc2YlGzGOFl8z&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=IMPszea7w9QtzYO62mn5bA&_nc_ss=7b289&oh=00_AQA9Jdi8hFLnzBL2c5uqrOSX4pxgFGJDYvZmth3QosXcqA&oe=6A60A954)

### Provide a glimpse of the content they’ll get after they log in

Provide a glimpse of the content available to people prior to logging in, like the background photo in this example. It doesn’t have to be detailed, even blurred out images of Pinterest’s pinboard encourages more people to log into Pinterest.

![Pinterest desktop login card Welcome to Pinterest shown over a blurred grid of pinboard photos, previewing content behind Facebook Login](https://scontent.fdel27-7.fna.fbcdn.net/v/t39.2365-6/19085411_1932698890278599_609064407393107968_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KiVSy2ibMoMQ7kNvwG_byRs&_nc_oc=Adp7DBafiW7bFXmKkVWukLERJxrzMLvBZ1hlB4VmBeNCQpIuIQZ8OJNf8jGvoMVc7FHhaQGcI9p1yRBeWBvR_Qbr&_nc_zt=14&_nc_ht=scontent.fdel27-7.fna&_nc_gid=IMPszea7w9QtzYO62mn5bA&_nc_ss=7b289&oh=00_AQC7FpjeFFHf4vR1JX15ID0EKB2kIoIIzwIvCvDPg3VLXg&oe=6A6072FA)

### Provide a new user experience

If your app requires additional education to have the best experience, include a multi step demo above your Login button. This gives people the option to either learn more or log in immediately if they’re ready.

![Tinder onboarding demo screen headed Discover new and interesting people nearby, with a swipeable card above a Log in with Facebook button](https://scontent.fdel27-9.fna.fbcdn.net/v/t39.2365-6/18853645_1838914009762991_5958627649814265856_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=IgyT1b8i-gMQ7kNvwHacDd5&_nc_oc=AdoAlKASx36cKdcfQEfrBtl0xWVEm0kZkmlVJOzHGxeHNNo13zTBQaAKoHPcukayx01L0hSKjZVnn4JglVnufNV7&_nc_zt=14&_nc_ht=scontent.fdel27-9.fna&_nc_gid=IMPszea7w9QtzYO62mn5bA&_nc_ss=7b289&oh=00_AQDnPZ1rFXXDrt0r0owldMB8SRbEOpLMjZkrzo3iV63vmw&oe=6A6093D9)

### Allow people to experience your app before logging in

If possible, allow people experience your app before prompting them to log in. For example, many ecommerce apps such as Zulily don’t require people to log in until they’re ready to check out.

## 2. Avoid unnecessary steps

Reducing unnecessary steps is one of the most effective ways to improve your conversion rate.

Avoid asking users to first tap “Login” or “Register” to get to the Facebook login button. With Facebook Login, this is an unnecessary step. There’s no need for people to even have stop to think about if they have an account or not.

![Pinterest mobile login screen placing Continue with Facebook directly on the first screen, avoiding a separate Login or Register step](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/18853685_793461504169530_595604250470383616_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=l1KQY1B8BW4Q7kNvwFsjfZN&_nc_oc=AdpKFAep7r29u0xbnIJGDyHTbqVcVuKV_xjPAtykAxBccH_UMoHV6RjkyP3-JQw9MnL4TRUw9wHxc2YlGzGOFl8z&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=IMPszea7w9QtzYO62mn5bA&_nc_ss=7b289&oh=00_AQA9Jdi8hFLnzBL2c5uqrOSX4pxgFGJDYvZmth3QosXcqA&oe=6A60A954)

In addition, after people have logged in with Facebook, don’t prompt them to create a username or password. One of the most popular reasons people log in with Facebook is because “it’s fast and easy and I don’t have to enter a password”. After logging in with Facebook, people especially do not want to have to create a username or password.

## 3. Button design

### Logo

In order to build recognition and trust, always use the [approved “f” Logo⁠](https://en.facebookbrand.com/assets/f-logo/?audience=advertisers) available on the [Facebook Brand Resource Center⁠](https://www.facebookbrand.com/).

When using the “f” Logo in the login button design, it should appear before the call to action. Don’t use it as part of the call to action by saying “Login with “f” Logo.

### Color

Color is one of the best ways for people to recognize something quickly. From a usability perspective, the more quickly people recognize what your button is and does, the faster they want to tap on it and the more seamless the experience.

Button colors are white and Facebook blue: 5890FF. Around the world, when people talk about Facebook Login they often refer to it as “the blue button”. If you are unable to use Facebook blue, revert to black and white.

**FACEBOOK BLUE COLOR VALUES**

* CMYK Coated: 83 / 52 / 00 / 00
* CMYK Uncoated: 77 / 36 / 00 / 00
* PMS 2727C
* PMS 2382U
* Hex #1877F2
* R = 24 G = 119 B = 242

![Four approved Login with Facebook button color variants: solid Facebook blue, white with blue text, solid black, and white with black text](https://scontent.fdel27-6.fna.fbcdn.net/v/t39.2365-6/653709925_1459945739197409_1556449356053532260_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=GFsALjlIZNcQ7kNvwF1Rfa8&_nc_oc=AdqpiA8yV15i_18JoF59jHv6P0rbuzwMlg13_oHZpp0Gk2FtC8gXhHJsVDJpCRQm7yOiiZOwqSlgjoXk_GA5eyMP&_nc_zt=14&_nc_ht=scontent.fdel27-6.fna&_nc_gid=IMPszea7w9QtzYO62mn5bA&_nc_ss=7b289&oh=00_AQDp40sxhpxMnxia2cZUO6APPcpfYfiHV4aIm-cOrGGopg&oe=6A6080AF)

### Text

The preferred labels are either “Continue with Facebook” or “Login with Facebook” depending on the context. When using the [“f” Logo⁠](https://en.facebookbrand.com/assets/f-logo/?audience=advertisers) with a call to action, use the official version available for download on the Facebook [Facebook Brand Resource Center⁠](https://www.facebookbrand.com/).

Place the call to action copy within the login button, it should not be outside of the button.

Choose the font, font weight, and kerning that looks best in your app, but optimize for easy legibility.

![Four Facebook Login button label options with the f logo before the call to action: Login with Facebook, Continue with Facebook, Continue as Sarah, and Continue as Jonathan](https://scontent.fdel27-3.fna.fbcdn.net/v/t39.2365-6/653880421_1459945765864073_3792559234865676829_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zN_bxCCdAQ0Q7kNvwGMuyTc&_nc_oc=AdqJR2Kg6rcatC5BCjUQaGOu1D7lSze9EVqXF-or-vzkmtqalOENuoizVgIXTvOE6vlTD5A5IZ19UYqvlzWFaaZY&_nc_zt=14&_nc_ht=scontent.fdel27-3.fna&_nc_gid=IMPszea7w9QtzYO62mn5bA&_nc_ss=7b289&oh=00_AQCpYGMV89yvfl0NCfLCEIUpILks1xCi595NoxwhZeC7lg&oe=6A609ACB)

### Placement

Your login button should be as fast and easy to recognize and tap as possible. On a mobile device, this means close to the thumb and large enough to tap easily. It’s simplistic but true; larger buttons convert better than small buttons.

The “f” Logo is provided in various sizes for button scaling purposes, but the proportions and typography style must stay consistent.

### Do’s and Dont’ts

* **DO** use the approved [“f” Logo⁠](https://en.facebookbrand.com/assets/f-logo/?audience=advertisers) provided on the Facebook [Facebook Brand Resource Center⁠](https://www.facebookbrand.com/) and follow the guidelines for use.
* **DO** use the preferred label “Continue with Facebook” or “Login with Facebook” on the login button depending on the context, and ensure the copy resides inside the button design.
* **DON’T** modify the “f” logo in any way, such as by changing the design, scale, color or any other custom variation. If you can’t use the correct color due to technical limitations, use black and white.
* **DON’T** use the “f” logo on a button without an appropriate call to action, preferably “Continue with Facebook” or “Login with Facebook”
* **DON’T** place the call to action copy (example: Continue with Facebook) outside of the login button.

## 4. Permissions

### Only ask for the permissions you need

The fewer permissions you ask for, the easier it is for people to feel comfortable granting them. We’ve seen that asking for fewer permissions typically results in greater conversion.

You can always ask for additional permissions later after people have had a chance to try out your app.

An additional benefit of asking for fewer permissions is that you might not need to submit your app for [Login Review](https://developers.facebook.com/docs/facebook-login/review). You only need to submit for Login Review if you’re requesting permissions other than `public_profile` and `email`.

### Ask for permissions in context and explain why

People are most likely to accept permission requests when they understand why your app needs that information to offer a better experience. So trigger permission requests when people are trying to accomplish an action in your app which requires that specific permission.

For example, the Facebook app only asks for Location Services when people explicitly tap on the location button when updating their status.

## 5. Provide a way to log out

Once people are logged in, you also need to give them a way to log out, disconnect their account, or delete it all together. In addition to being a courtesy, this is also a requirement of our [Developer Policies for Login](https://developers.facebook.com/devpolicy/#login).

The dating app Tinder, for example, gives you the option to hide your profile card to prevent people from finding you, log out, or delete your account entirely.

![Tinder settings screens showing Logout, a logout confirmation dialog, and a Hide My Account screen with a Delete My Account option](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/18853684_1972355499664306_464661615422210048_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=W_i9p-_mhcwQ7kNvwGf6D04&_nc_oc=AdpRkR-VW8SFycEOucGITunJsS-iyW416V9vN0_WzWracOKa6xB_g-nsQv-z2U8VmroQtjnwPLRKF_QOapsSAHez&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=IMPszea7w9QtzYO62mn5bA&_nc_ss=7b289&oh=00_AQCfUZenbNU-X26U7bH8BFzWyODeIXViPNLncpW4xRsV8A&oe=6A60A456)

## 6. Test and measure

Not even the best designers get their onboarding flow right on the first try. Great onboarding experiences are usually the result of thoughtful design and testing, with multiple iterations.

Before launching your app, run a qualitative usability test to understand how people are reacting to what they see. It doesn’t have to be formal to be useful, but make sure to watch people run through the experience.

In addition to qualitative testing, use analytics to understand if people are completing the process and their overall conversion rates. Best practice apps can see conversion rates of over 90%.
