---
title: "Best Practices"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/testingdebugging
---

# Best Practices

Updated: Jun 28, 2026

These are guidelines to optimize both the WhatsApp Flows user and developer experience.

## Setup

### Flows shouldn’t be long

Users should enter flows aiming to complete a task as quickly as possible, with tasks taking no longer than 5 minutes to complete.

### Don’t have more than one task per screen

Screens with too many tasks may look messy and overwhelm the user. If the flow needs the user to complete multiple tasks, split them across several screens.

### Don’t use too many components per screen

Too many components will make your screens look messy and may overwhelm users. It will also take longer to load.

### Build for caching

Once a user has completed a screen and moves onto the next, their information will be cached. If there are too many components on a single screen and the user exits the flow, they will lose all of this information, which could be frustrating for users.

![Don't vs do comparison of a long booking form crammed onto one screen versus split across several screens](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/652277310_1459945522530764_4667306230082696048_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=yIT5uQQFjrcQ7kNvwFUToI6&_nc_oc=Adpz2U6hz9s4AbWKhNbDFut6p_L9D_VNxErEMeGJktgvzKlNDr1y7bukwJBOF9hyjO06__71PBmvRJRGw-Iu2KTm&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQBgjSQ-t5EgwJrqXhajRiTIC0DaLjQ7oc-NFBEFAEYbLg&oe=6A607FF1)

### Use flows without the endpoint where the data channel is not required

* Endpointless flows often offer better experience for consumers
* Endpointless flows are faster to build and integrate
* Endpointless flows allow for the dynamic data to be injected in them at the time of sending

### Only use endpoint powered flows, when the live data is required while user completes a flow - for example, for ticket booking.

* Prefer to make the first screen a data-channel-less to optimize flow opening
* Use an endpoint only for the specific screens which require it and use a navigate action otherwise

## Technical

### Latency

In order to achieve the best latency:

* Reduce the number of calls to third party platforms
* Use asynchronous calls to slow third party platforms
* Cache data to prevent re-fetching unchanged data

Requests to the WhatsApp Flows data endpoint time out after **10 seconds.**

### `flow_token` expiration management

Set flow token expiration to 2-3 days to give users more time to engage with flow messages after receiving them.

If that is not possible for security reasons, consider embedding a re-authentication mechanism in the flow, or set a user-friendly message for an [invalid flow token error](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/reference/error-codes#endpoint_error_codes) with the recommended action to receive a new flow message.

If you have a business requirement to limit the flow message flow time, the timing should start only once the flow message has been opened, which is when the data channel receives the `INIT` request.

## Design

### Call-to-actions (CTAs)

The CTA should always tell the user what will happen next or what task is being completed on each screen, for example **Confirm booking.**

![Don't vs do comparison of a 'Your details' screen with a vague 'Done' CTA versus a clear 'Confirm booking' CTA](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/651794737_1459945729197410_2240860389340405752_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=7yucZLAxqkUQ7kNvwHf_4cN&_nc_oc=AdpJcTh6WHGRRnI2biBtbh1FVyfMSWGPk5I_vlv4SQ3dIIEJWcpLpUQ9MJZEZea1ozInjVh6swbAeWfbhaQ_ww6R&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQAhhNcT7y6rFnQj0JpOBacYjx6Isj08Q0ylCvF7_QuWtQ&oe=6A606C65)

### Capitalization

Use sentence case on screen titles, headings, and CTAs. Use consistent capitalization throughout each flow.

![Don't vs do comparison of a booking details screen with inconsistent title-case labels versus consistent sentence case](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/650683262_1459945695864080_813175482456100048_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fTCgtKe8hq4Q7kNvwHD2v51&_nc_oc=Adr97PAEIuO6WX5RALwakb8zn0PsRcovgXhAmSZsUNVZu9Ft7W36hOxf7qDPIlclJwkJBQ5LLfj0ANcJA50PLES0&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQA9puRNew171Uz6lRvPtgcPHTsB7LJ-Sgu6jTe6WHLapg&oe=6A607925)

### Emojis

Always consider the context of the content when using emojis, such as:

* Are they appropriate to use?
* Will they add to the content?
* Do they reflect the business brand?

### Error handling

* Communicate errors clearly to the user, including what has happened and how to resolve it.
* Make sure validation rules are clearly communicated, such as if a user tries to enter a password that is not long enough.
* If the flow is exchanging data with your endpoint and a screen becomes invalid (for example, appointment booking), take the user back to the previous screen rather than ending the flow.

![Don't vs do comparison of vague form error messages versus errors that explain how to fix the input](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/651763608_1459945499197433_5530225472011935941_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JN9NKISPiL8Q7kNvwEsUWWl&_nc_oc=Adr2wOBl0gk0U_zw-N-H0GvEwkNUtPCp0PwnMUnDtrWmufDXx0w45MiNO4KwX8qF2m3KOUelRajRQb0LxUpwsrhU&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQD_9WZBrGcJ2vH5MY0f7Zd9uWK1tL9YoigDqQeSitJvmg&oe=6A606F64)

### Diverging flows

If you need to create a sub flow for certain use cases (for example, a forgot password flow), limit it to a maximum of 3 screens and always take the user back to the main flow and task at hand.

![Three-screen reset password sub flow from Login to email entry to reset link sent, returning to login](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/653853743_1459945649197418_4892987482333801249_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zyZsO6UdYUkQ7kNvwEo3QSV&_nc_oc=Adp6n1QSVkzS2-yFB_CQqJmJ7iycc5-vGnVeU1sX1uL2rgOwmV0qmIlkzHNvG5JXHqAIrnG-iCro55MHCr8RZ3Fy&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQB1_WhAMW4U6EM_DUbjLSF4DT0lBQLp4503t5LUQ_MGiw&oe=6A605C53)

### Form quality

* Always use the right components for specific actions, for example use the date picker to capture DOB.
* If an input requires a lot of text, use the text area component and not the text input.
* Questions and form labels must provide full clarity on what it is asking the user.
* Forms or questions should be logically ordered, for example, first name, last name, and so on.
* Make non-critical fields optional.

![Sign up form annotated with the component used for each field: text, password, date picker, email, and text area](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/650262846_1459945529197430_4164859470529278961_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Qr6tT5iP1mgQ7kNvwFMP9cI&_nc_oc=AdqH5izKtc9TVg9lBHGSixlvwJsdavzrzvL6QL5tODuOrAKzfSlOAT4CH8BmtbpqmQgY0i-MOg-5BQDuJN2acv4l&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQA9SsF0RtYysUP_Jb7BnyeFUQhG4clSBCZIEauliKlkeg&oe=6A608023)

### Formatting

Ensure that any information is correctly formatted for context, for example currency symbols, phone numbers, and dates.

### Grammar and spelling

* Always check the content in your flows before publishing.
* Ensure you use consistent spelling and capitalization for certain terms.
* Check your grammar such as ensuring sentences use full-stops.

### Helper text

Helper text should provide clarity for users, for example, the correct format for a phone number, date input, or email address.

![Create account screen with helper text under the ID, password, and date of birth fields explaining each input](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/653708488_1459945645864085_8384520835334405020_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vWZWlYOY6MwQ7kNvwFfb6O6&_nc_oc=Adp4p8Ggl0L3pWU4NGWnA4AppGGGi2ieuPOygquBjIGK0i9xiDzVrxem6s1pU2m7yNaZqJFTYkwDqcLUG0n6tAmf&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQDaXXMJR3rQ_TliPnmAC_dJkcjwcJq3fobdSTQRZb-ooA&oe=6A60678D)

### Initiation flow

#### The chat should provide clarity

Users will choose to open a flow based on the clarity of the initiation messages. The exchange should feel conversational, providing context and clear task-focused actions for the user.

#### Users want to complete a task

The CTA must match the message content. It should be short and concise, telling the user what task they can expect to complete by opening the flow.

#### There should be no surprises

The first screen of the flow should mirror the action of the CTA. Any deviations from the task at hand will result in a bad experience for the user, resulting in them closing the flow.

![WhatsApp chats with clear task-focused CTAs that open flows matching the initiation message, such as 'Book a table'](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/653700264_1459945642530752_4315354198930332437_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qK-fv6qxiRcQ7kNvwEc14LC&_nc_oc=AdqO6rUWWmJv932O83M-8ZwuwG2vuUKtMkN73K6LNr211MgqjwnNoh8VZoblVL4WKOpfHeo-1eEuUi_dPoVKdepv&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQB9oxqB7NSC7_6PkuiH2KsgtMj97dHpH1AE-dVgLwFHyQ&oe=6A6068D5)

### Login screens

Some flows may need login screens to complete tasks. However, there are factors to consider when including them in your flows.

#### Use only when necessary

Including a login screen may discourage some users, so try to only use them when absolutely necessary. If you do need one, set the expectations for users so it doesn’t come as a surprise.

#### Orientation within flow

Research has shown that login screens may confuse users within flows. Some people thought screens would take them to an external page, outside of WhatsApp. This may result in users losing track of where they are within the flow.

#### Users need to see the benefit of logging in

The placement of login screens is key. If they are too early in the flow, users will not be motivated to continue. Showing the benefits upfront will make users want to complete the flow. Aim to make the login screen one of the last steps before completion.

### Navigation

* Always set expectations for how long it will take to complete a task, for example, “It should only take a few minutes to complete.”
* Help the user know where they are in the flow by using short, concise action-oriented screen titles, such as “Book appointment.”
* Use screen titles to show progress where possible, for example, “Question 1 of 3.”
* End the flow with a summary screen, especially if there have been multiple steps, so users can review and complete the task with clarity.

### Opt-in

* It should be clear what the user is consenting to.
* You should try to include a “Read more” CTA which links to the relevant information, for example, Terms and Conditions.

![Sign up screen with a Terms and Conditions opt-in checkbox and 'Read more' link opening the full terms screen](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/651719810_1459945465864103_6134028857871079489_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=oZ6KGMRelv4Q7kNvwFMXrhv&_nc_oc=AdrO22ta_C3qKvfQ2Uf_e7yqwCaKvKn1KOZQbYMstoRxNhmCO80Alq68S8y65ThCoK5SHfp0W674-QNAqvBY4eIj&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQA1li2WB1icQfrRi6cbODFjeJ6QVM2vnJN4p7FIKYwOCA&oe=6A605511)

### Options and lists

* Keep it simple; use no more than 10 options per screen.
* Only use dropdown options when there are 8 or more options.
* Use a radio button if there is only one selection to make.
* Use checkboxes if the user can select multiple options.
* Always make the option at the top of the list the default selection.

### Termination flow

#### Set expectations

The last screen should clearly tell the user what will happen when they end the flow. They will also want confirmation of their actions. Sending a summary message should make the user feel reassured.

#### Keep the size of the completion payload minimal

Include only user-input data in the Flow’s completion payload, and keep the payload size to a minimum. Avoid leveraging the completion payload to send base64 images.

#### Confirm flow completion

Respond to the user with a message when they submit a Flow. These messages should provide the user with information about next steps, and who they can get in touch with if they have any questions or if they want to edit or cancel a task.

As of Flows version 5.1, upon submitting a Flow, a user will be able to access a summary of their submitted data via the Flow response message UI. By default, all user-input data is included in the response message, with the exception of [text entry fields of type password and passcode](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/components#textinput). Businesses have the option to specify which data fields contain sensitive information by leveraging the `sensitive` property. These fields will not appear in the response message. For more details on how to configure sensitive fields, please refer to our [documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#additional-information-on-sensitive-fields).

### Trust and support

* The business logo (profile photo) should be simple and identifiable in the footer so the user knows and trusts the flow.
* Add a CTA within your flow that enables your users to get in touch when needed. This can also be done in follow-up messages once the user has completed the flow.

![Don't vs do comparison of a login footer with an unclear business name versus a recognizable verified business logo](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/652218479_1459945489197434_2048823773378475966_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Hb5ur0Z_ybkQ7kNvwHFeGee&_nc_oc=AdrwvzEWJRpbfYXEi6Zs1C4jqEWJYwbxihp7wUjDJA12Lh-KWqCHYDbdEe_roLqeCXJE4hCbvlequLI9GRYyKUdX&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=02Z6DVaYT1d70Mnzda3rjg&_nc_ss=7b289&oh=00_AQCSsNTVHSEw-V0hMT0y98pRo75SiXJYVtrSlBIOz_sqxg&oe=6A608504)

### Writing content

* Make sure your content follows a simple, clear hierarchy using a heading, body, and captions
* Do not repeat content unnecessarily, for example:

  * “Complete registration”
  * “Complete registration below”
