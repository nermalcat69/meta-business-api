---
title: "Get Started"
source_url: https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/configuration
---

# Get Started

Updated: Apr 29, 2026

This guide walks you through installing Ads CLI, authenticating with a system user access token, and running your first commands.

## Requirements

* Python 3.12 or later
* A virtual environment setup
* [pip⁠](https://pip.pypa.io/) and [uv⁠](https://docs.astral.sh/uv/) package managers
* A Meta system user access token with appropriate scopes (see [Authentication](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/configuration#authentication))
* An ad account with the assets you want to manage

## Installation

### Step 1: Install the package

The [`meta-ads`⁠](https://pypi.org/project/meta-ads/) package is available on PyPI.

```
pip install meta-ads
```

### Step 2: Sync dependencies and set up the virtual environment

```
uv sync
```

After setup, run commands with `uv run meta` or activate the virtual environment to use Ads CLI directly. For more about virtual environments and configuration, see [Configuration](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/configuration).

## Authentication

> **Important:** Ads CLI requires a system user access token to authenticate for programmatic access.

### Step 1: Create an admin system user

* Go to [Meta Business Suite⁠](https://business.facebook.com/) > **Settings** > **Users** > **System Users**.
* Click **Add** to create a new system user.
* Set the role to **Admin**.
* Give it a descriptive name (for example, "Ads CLI").

### Step 2: Assign assets to the system user

Click on the system user and select **Assign Assets**. Grant access to:

* The datasets (Meta Pixels) you want to use for conversion tracking
* The ad account(s) you want to manage
* The Business Page(s) you want to use for ad creatives
* The product catalog(s), if using catalog ads

### Step 3: Add the system user as app admin

* Go to your app in [Meta for Developers](https://developers.facebook.com/apps) > **App Settings** > **Roles** > **Roles**.
* Add the system user as an **App Admin**.

### Step 4: Generate an access token

* In Meta Business Suite > **Settings** > **Users** > **System Users**, select your system user.
* Click **Generate New Token**.
* Select your app.
* Grant the following scopes:
  * `business_management`
  * `ads_management`
  * `pages_show_list`
  * `pages_read_engagement`
  * `pages_manage_ads`
  * `catalog_management`
  * `read_insights`

  Add any additional scopes required for your use case.
* Click **Generate Token** and copy the resulting token.

#### Save your token

##### Option A: Set it in your .env file

Create a `.env` file in your project directory:

```
ACCESS_TOKEN=<ACCESS_TOKEN>
```

##### Option B: Environment variable (CI/scripts)

```
export ACCESS_TOKEN=<ACCESS_TOKEN>
```

### Check auth status

```
meta auth status
```

## Configure your ad account ID

Most commands require an ad account ID. Set it once and it applies to all commands:

```
# Via .env (recommended)
AD_ACCOUNT_ID=<AD_ACCOUNT_ID>

# Via environment variable
export AD_ACCOUNT_ID=<AD_ACCOUNT_ID>

# Via flag (per-command)
meta ads --ad-account-id <AD_ACCOUNT_ID> campaign list
```

To retrieve your ad account IDs:

```
meta ads adaccount list
```

See [Find your IDs](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/tutorials-and-recipes#find-your-ids) for more information on finding any IDs needed for Ads CLI.

## Run your first commands

Once you have your token and ad account ID configured, here are some commands to start with:

```
# List your ad campaigns
meta ads campaign list

# Check performance for the last 30 days
meta ads insights get --fields spend,impressions,ctr,cpc

# List your Business Pages (needed for creating ad creatives)
meta ads page list
```

## Next steps

* [Configuration](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/configuration) -- Environment variables and config precedence
* [Command Reference](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/command-reference) -- Full documentation for every command
* [Tutorials and Recipes](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/tutorials-and-recipes) -- Step-by-step workflows for common tasks
* [Ad Creatives](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/ad-creatives) -- Creating ads with images, videos, and Dynamic Creative Optimization
* [Datasets and Catalogs](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/datasets-and-catalogs) -- Conversion tracking and product catalog management
* [Insights](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/insights) -- Querying ad performance insights
