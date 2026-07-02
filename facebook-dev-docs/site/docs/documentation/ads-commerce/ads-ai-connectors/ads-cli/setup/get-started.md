---
title: "Ads CLI"
source_url: https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/get-started
---

# Ads CLI

Updated: Apr 29, 2026

**Ads CLI is a command-line tool** for managing Meta advertising from your terminal. It provides a developer-friendly interface to the Meta Marketing API, so you can create ad campaigns from start to finish, manage product catalogs and Meta Pixels, and query performance insights. Ads CLI helps you build integrations and scale operations for your existing apps.

Ads CLI is built for developers who manage advertising programmatically:

* **Developers building ad management integrations** who want to prototype and test Marketing API workflows from the terminal before writing application code
* **Operations teams** who need to automate ad campaign creation, monitoring, and cleanup through scripts and CI/CD pipelines
* **AI agents and tools** that interact with Meta advertising through a structured command-line interface

## Key capabilities

### Full ad lifecycle management

Create, read, update, and delete resources across the entire Meta advertising hierarchy — ad campaigns, ad sets, ads, and ad creatives. Each resource supports the operations you need to manage it end-to-end.

| Resource | Operations |
| --- | --- |
| Ad Campaigns | `list`, `create`, `get`, `update`, `delete` |
| Ad Sets | `list`, `create` (with targeting, Pixels, conversion tracking), `get`, `update`, `delete` |
| Ads | `list`, `create` (with tracking specs), `get`, `update`, `delete` |
| Ad Creatives | `list`, `create`, `get`, `update`, `delete` |
| Insights | `get` (with date ranges, breakdowns, and custom fields) |
| Product Catalogs | `list`, `create`, `get`, `update`, `delete` |
| Product Items | `list`, `create`, `get`, `update`, `delete` |
| Product Sets | `list`, `create`, `get`, `update`, `delete` |
| Datasets (Pixels) | `list`, `create`, `get`, `connect`, `disconnect`, `assign-user` |
| Ad Accounts | `list`, `get`, `current` |
| Facebook Business Pages | `list`, `get` |

### Performance insights

* Query ad performance data with flexible date ranges, breakdowns, and custom metrics
* Filter by ad campaign, ad set, or individual ad
* Sort and limit results for the data you need

### Product catalogs and conversion tracking

* Manage product catalogs for Advantage+ catalog ads
* Create datasets (Pixels) for conversion tracking
* Connect datasets to ad accounts and catalogs
* Assign user permissions on datasets

### Automation-ready

Ads CLI is designed for scripting and automation:

* `--no-input` and `--force` flags suppress interactive prompts for unattended operation
* Three output formats: `table` for interactive use, `json` for piping to `jq` and other tools, `plain` (tab-separated) for Unix pipelines
* Consistent exit codes (0-5) for reliable error handling in scripts
* `.env` file support for managing credentials across environments

## How it works

Ads CLI authenticates with a Meta system user access token and calls the Marketing API on your behalf. The command structure follows a noun-verb pattern:

```
meta ads <resource> <action> [options]
```

For example, `meta ads campaign list` lists your ad campaigns, and `meta ads creative create --name "My Ad" --page-id <PAGE_ID> --image ./banner.jpg` creates an ad creative.

All commands require an ad account ID, which you can set once as an environment variable or pass per-command. Ads CLI resolves business IDs for catalog and dataset operations from your ad account when possible.

## Next steps

* [Get Started](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/get-started) -- Installation and authentication
* [Configuration](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/configuration) -- Environment variables and config precedence
* [Command Reference](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/command-reference) -- Every command, option, and argument
* [Tutorials and Recipes](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/tutorials-and-recipes) -- Step-by-step workflows for common tasks
* [Ad Creatives](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/ad-creatives) -- Images, videos, and ad creative management
* [Datasets and Catalogs](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/datasets-and-catalogs) -- Conversion tracking and product catalog management
* [Insights](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/insights) -- Querying ad performance insights
