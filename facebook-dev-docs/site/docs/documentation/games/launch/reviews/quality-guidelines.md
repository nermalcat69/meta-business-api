---
title: "App Review"
source_url: https://developers.facebook.com/documentation/games/launch/reviews/quality-guidelines
---

# App Review

Updated: Mar 3, 2026

App Review is Facebook’s process for evaluating the permissions and data access that your application requests.

This page explains what App Review is, how to prepare for it, how to submit, and how to handle rejections.

## What Is App Review?

When your Instant Game integrates with Facebook features that access user data, your app must request **permissions** for that access. App Review is the process by which Facebook verifies that:

* Your app has a legitimate need for each requested permission.
* You use the data responsibly and in accordance with Facebook’s data policies.
* Players understand what data your app accesses and why.
* Your implementation follows the technical guidelines for each permission.

App Review is required for any permission beyond the default set that Instant Games receive automatically. The default permissions provided to all Instant Games include basic player information (player name, player photo, and a game-scoped player ID via the `FBInstant.player` API). If your game only uses these default capabilities, you may not need to submit for additional App Review, but you should still verify this on the App Dashboard.

## App Review vs. Instant Games Quality Review

These are two different review processes that evaluate different things:

| Aspect | App Review | Quality Review (Instant Games Review) |
| --- | --- | --- |
| **What it evaluates** | Permissions and data access | Game quality, gameplay, performance, and content |
| **Who reviews** | Facebook’s App Review team | Facebook’s Instant Games Review team |
| **When to submit** | After integrating features that need permissions | After your game is complete and ready to go live |
| **Rejection reasons** | Improper use of permissions, privacy issues | Poor quality, bugs, policy violations, bad UX |
| **Applies to** | All Facebook apps | Instant Games specifically |

Both reviews must pass before your game can go live.

## Permissions You Might Need

Here are some common permissions that Instant Games may request and that require App Review:

| Permission | Use Case | Notes |
| --- | --- | --- |
| `gaming_activity` | Accessing the player’s gaming activity | Required for some social features. |
| `user_friends` | Accessing the player’s friend list | Used for friend leaderboards or social features beyond the default connected players API. |
| `email` | Accessing the player’s email address | Rarely needed for Instant Games. Requires strong justification. |

> **Note:** The Instant Games SDK provides many social features (such as connected players, context-based interactions, and sharing) without requiring additional permissions. Before requesting a new permission, check whether the SDK’s built-in features meet your needs. Using the SDK’s default capabilities reduces the scope of App Review and speeds up the process.

## How to Submit for App Review

### Step 1: Prepare Your Game

Before submitting, make sure:

* Your game is functional and demonstrates the features that use the requested permissions.
* The permissions you are requesting are actually needed. Do not request permissions “just in case.” Only request what you actively use.
* Your privacy policy (required, see [Game Setup](https://developers.facebook.com/documentation/games/launch/game-setup)) accurately describes how you use the data from each requested permission.

### Step 2: Navigate to App Review

* Go to your app on the [App Dashboard](https://developers.facebook.com/apps/).
* In the left sidebar, click **App Review > Permissions and Features** (or the equivalent section).
* You will see a list of available permissions. Find the permission(s) you need and click **Request** next to each one.

### Step 3: Provide Justification for Each Permission

For each permission you request, you must provide:

* **A description of how you use the permission.** Explain specifically what feature in your game uses this permission and why it is necessary.
* **Step-by-step instructions** for how a reviewer can test the feature. Reviewers need to see the permission in action. Tell them exactly what to do: “Open the game, tap Play, complete the tutorial, tap the Leaderboard button to see friend scores.”
* **A screencast or screenshots** showing the feature in use. This is strongly recommended and, for some permissions, required. Record a short video demonstrating the feature and upload it as part of your submission.

### Step 4: Submit for Review

* After adding justifications for all requested permissions, click **Submit for Review**.
* You will see a confirmation that your submission is pending.

### Step 5: Wait for the Review

App Review typically takes **1 to 5 business days**, but may take longer during periods of high volume. You will receive a notification (email and App Dashboard alert) when the review is complete.

## What Reviewers Look For

App Review evaluators assess the following:

* **Necessity.** Is the permission genuinely needed for the feature you described? Could you achieve the same functionality without this permission?
* **Usage.** Does your app actually use the permission in the way you described? Reviewers will follow your test instructions to verify.
* **Data handling.** Is the data obtained through the permission handled responsibly? Is it used only for the stated purpose?
* **User experience.** Is it clear to the player why your game is accessing their data? Are there appropriate disclosures and consent flows?
* **Policy compliance.** Does your use of the permission comply with all applicable Facebook Platform Policies?

## Common Rejection Reasons

### Insufficient Justification

**Symptom:** Your submission is rejected with a note that the justification is unclear or insufficient.

**Fix:** Provide a more detailed, specific explanation of why you need the permission. Include concrete examples: “We use `user_friends` to show a leaderboard of the player’s Facebook friends who also play the game. This leaderboard is displayed on the main menu screen after completing the tutorial.”

### Feature Not Demonstrable

**Symptom:** Reviewers could not find or access the feature that uses the permission.

**Fix:** Provide clearer, step-by-step test instructions. If the feature is behind gameplay progression (e.g., unlocked after level 5), either provide a shortcut for reviewers or include a screencast showing the feature. Consider providing a test account that already has the necessary progression.

### Permission Not Actively Used

**Symptom:** Your game requests a permission but does not appear to use it in the current build.

**Fix:** Remove the permission request if it is not yet implemented. Only request permissions for features that are live and functional in the build you are submitting.

### Privacy Policy Issues

**Symptom:** Your privacy policy does not mention the data you access through the requested permission, or the privacy policy URL is broken.

**Fix:** Update your privacy policy to explicitly mention the data you access and how you use it. Ensure the privacy policy URL is working and publicly accessible.

### Incorrect Platform Usage

**Symptom:** Your app uses the permission in a way that violates platform policies (e.g., sharing user data with third parties without consent).

**Fix:** Review the [Facebook Platform Policies](https://developers.facebook.com/policy/) and ensure your implementation complies. Remove any data sharing that violates the policies.

## Testing Considerations

### Test Accounts and Their Limitations

Facebook provides test accounts that you can use to test your app without affecting real users. However, there are important limitations to be aware of:

> **Important:** Test accounts cannot receive bot messages. If your game uses Facebook Messenger bots (for example, to send game updates, re-engagement messages, or notifications through a bot), you must use real Facebook accounts for testing these features. Test accounts will not receive the messages, and you will not be able to demonstrate the feature to reviewers using test accounts.

For bot-related features:

* Use your own Facebook account or the accounts of team members with roles on the app.
* Make sure the accounts you use for testing have agreed to receive messages from your bot.
* Include clear instructions in your App Review submission explaining which accounts to use and how to test the bot functionality.

### Testing on All Platforms

Reviewers may test your game on any supported platform (iOS, Android, web). Make sure your game and the features that use requested permissions work correctly on all platforms before submitting.

## How to Appeal a Rejection

If you believe your submission was incorrectly rejected:

* Go to **App Review** on the App Dashboard.
* Find the rejected submission.
* Click **Appeal** or **Request Re-Review**.
* Provide a detailed explanation of why you believe the rejection was incorrect, including any additional context or evidence.

Appeals are reviewed by a different reviewer. Be respectful and factual in your appeal.

If your appeal is also rejected, carefully re-read the feedback, make the necessary changes to your app, and submit a new review request.

## Timeline Expectations

| Scenario | Typical Duration |
| --- | --- |
| Initial App Review | 1-5 business days |
| Resubmission after rejection | 1-5 business days |
| Appeal review | 5-10 business days |

These timelines can vary. During major platform updates, product launches, or holidays, review times may be longer.

## Best Practices

* **Request only what you need.** Each additional permission adds complexity to the review and increases the chance of rejection. Use the Instant Games SDK’s built-in features wherever possible.
* **Be thorough in your justifications.** Write clear, detailed explanations. Assume the reviewer has never seen your game before.
* **Provide a screencast.** A 1-2 minute video showing the feature in action is extremely helpful for reviewers and significantly reduces the chance of rejection due to “feature not found.”
* **Keep your privacy policy up to date.** Every time you request a new permission, update your privacy policy to reflect the new data access.
* **Test everything before submitting.** Run through the exact steps you provide in your test instructions and make sure they work.

## Next Steps

After passing App Review:

* Confirm that all requested permissions are approved on the App Dashboard.
* Proceed to the [Quality Review](https://developers.facebook.com/documentation/games/launch/reviews/quality-guidelines) if you have not already submitted.
* Once all reviews pass, see [Game Launch](https://developers.facebook.com/documentation/games/launch/game-launch) for the final steps.
