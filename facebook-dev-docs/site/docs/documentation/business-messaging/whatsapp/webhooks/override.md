---
title: "Create a test webhook endpoint"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override
---

# Create a test webhook endpoint

Updated: May 21, 2026

If you aren’t ready to create your own webhook endpoint yet, you can deploy a test webhook app on [Render.com⁠](https://www.render.com/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5qwRpgv8WOIDsPBezBjowW_A_F0bd63kqOjEYjikBrw2QGElAiwd9j8uivNw_aem_K3Rx72IJZiUbXR3a3IZ95g) that accepts webhook requests and dumps their contents to Render’s console.

*Only use this app for testing purposes.*

## Requirements

* A [Render⁠](https://www.render.com/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5z7nbLbsDbpGeXyCmzGeVDrUM1iin3UNvXQm7kN44chQRgY75m4zkgULoncg_aem_4X28XbeZAAJQC_fdt2f6mA) account.
* A [GitHub⁠](https://www.github.com/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4YpAK2VmJyYigeSTeulm9hBeUu2-Fiix2KwIn4NkysaMJV59AYAR66LQ_egQ_aem_MDJtP4lWUUrAPztTliacIA) account.

## Step 1: Create a GitHub repository

Sign into your GitHub account and create a new repo (public or private) with a name of your choice. Within the repo, create an `app.js` file and paste this code into it:

```
// Import Express.js
const express = require('express');

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set port and verify_token
const port = process.env.PORT || 3000;
const verifyToken = process.env.VERIFY_TOKEN;

// Route for GET requests
app.get('/', (req, res) => {
  const { 'hub.mode': mode, 'hub.challenge': challenge, 'hub.verify_token': token } = req.query;

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WEBHOOK VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});

// Route for POST requests
app.post('/', (req, res) => {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(`\n\nWebhook received ${timestamp}\n`);
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});

// Start the server
app.listen(port, () => {
  console.log(`\nListening on port ${port}\n`);
});
```

## Step 2: Deploy a Node Express app on Render

Follow Render’s instructions for [deploying a Node Express app⁠](https://render.com/docs/deploy-node-express-app?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4YpAK2VmJyYigeSTeulm9hBeUu2-Fiix2KwIn4NkysaMJV59AYAR66LQ_egQ_aem_MDJtP4lWUUrAPztTliacIA), with these differences:

* Skip step 1.
* Use these settings for step 3:
  * Build command: `npm install express`
  * Start command: `node app.js`
  * In the **Environment Variables** section, add the variable `VERIFY_TOKEN` and set it to a string of your choice (for example, `vibecode`).

When you’re done, click the **Deploy your web service** button. Clicking **Deploy your web service** takes you to the app log where you will see your app being built, which can take a few minutes. You’ll know it’s done when you see “Your service is live” in the log.

![Render test webhook app Events page with app log highlighting the Your service is live message](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/518314752_779138407775567_4233589617658404934_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=T-4sI_UKwEQQ7kNvwGGVmsv&_nc_oc=Adp5ghBYlmpt3Cdu7C-Ty5ZU7LqbqDFg-ELnyPXTwu65McEmC9UaRmzTwCkiLAq66wRrSS6RiLwkHwjgOD2uyEcW&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=GcUCUtJi3PzPIVhNMHyySw&_nc_ss=7b2a8&oh=00_AQBZQ5mvVz69BMUFXxPUU0-h1EWH1512DdVha1wl7vuoBQ&oe=6A607485)

Copy your deployed test webhook app URL, which appears at the top of the page under your GitHub repo name. (If you view the URL, you’ll get a 403 error, which is expected).

## Step 3: Add your test webhook app URL to your Meta app

Open a new window/tab, and navigate to the (Meta) [App Dashboard](https://developers.facebook.com/apps) > **WhatsApp** > **Webhooks** > **Configuration** panel.

Paste your test webhook app URL in the **Callback URL** field, and add the `VERIFY_TOKEN` environment variable string you set earlier to the **Verify token** field, then click **Verify and save**.

![App Dashboard WhatsApp Configuration panel highlighting the Callback URL and Verify token fields](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/518348561_1679202599393717_3427225193188619311_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mXiycTSUPJoQ7kNvwFSXlOJ&_nc_oc=AdrwCCMN-cDgEuhkwmv32ocTjhEHtRzeekB8z7kYGSJoI1ivDmtotGh_I_QbaHPG0PQZzj0b-7VzgPq_-9bjuuMS&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=GcUCUtJi3PzPIVhNMHyySw&_nc_ss=7b2a8&oh=00_AQDLHzjXBeYSFd1XO9L8q8za6oyOokgGSJv5RVkbLA_QEg&oe=6A606C30)

If verification is successful, the Meta app dashboard should refresh and you should see a list of webhook fields you can subscribe to.

*Subscribe to the **messages** webhook field if you haven’t already.*

Also, in Render’s app log, if you see “WEBHOOK VERIFIED”, your test webhook app URL has been successfully verified.

![Render test webhook app log highlighting the WEBHOOK VERIFIED message confirming successful verification](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/516871315_2146397049169598_3394446764023076795_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=vuA6cfWLuqcQ7kNvwFInysr&_nc_oc=AdqJ0B5F2PuEQUNa6k8MKxfxYsgKKmqYec8i4FdFctwzqpGqDpcLAiGRNmH55I8RJi3pW1TXm53qtr5Ls4wJFZ5n&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=GcUCUtJi3PzPIVhNMHyySw&_nc_ss=7b2a8&oh=00_AQApGICQZJkvSTiGyjRxeohyn9v_tpfJmnsRzbfvHy8AlQ&oe=6A605C90)

## Step 4: Send a test message

Back in the Meta app dashboard **Configuration** panel, scroll down to the **messages** webhook field, subscribe to the field if you haven’t already, then click the **Test** link.

![App Dashboard Configuration webhook fields list highlighting the messages field set to Subscribed with a Test link](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/518357131_2083466912058941_6508814785021877118_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=nwaa00lNAEAQ7kNvwEsuLz7&_nc_oc=Adp50YivZcYEb6YJabhh13iFLB_IgtRMTLPT6C2GC2UIFDwA_5vyQ9zhKs7MiteOFww4UFkr76iweJj3ojPRSfxL&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=GcUCUtJi3PzPIVhNMHyySw&_nc_ss=7b2a8&oh=00_AQD_Is7QM6z61X-L0Um7zUgj6dEshRzJ2-nXgmvJfupl-Q&oe=6A606A4B)

Clicking the **Test** link sends a test message to your test webhook app. Confirm that it appears in Render app log with “Webhook received” followed by a test JSON payload:

![Render test webhook app log highlighting a Webhook received entry followed by a test JSON payload](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/516488905_709538035232698_4800340255912767794_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=XVPdji3kSa4Q7kNvwHz9yMJ&_nc_oc=AdqWlUOyh4DN6yuQd6AYUAousM4w0hKcYLNmkcbnYxwoGxpv5laqoHiMVHRd5ARXOsjHYqKeJPRQMDiJMQSwmM6Y&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=GcUCUtJi3PzPIVhNMHyySw&_nc_ss=7b2a8&oh=00_AQCK1IF9Kf0M-wM1mmPbhfm0ICGDb3evAtQfVJ77HcMp1A&oe=6A605541)

## Troubleshooting

If the test **messages** webhook doesn’t appear in the Render app dashboard log:

* Confirm that you successfully added your test webhook app URL to your Meta app (Step 3).
* Confirm that your app is subscribed to the **messages** webhook field.
* Make sure you are sending a **messages** test webhook; some test webhooks only work when your app is in Live mode, while others only work in Development mode (**messages** test webhooks work in both modes).
