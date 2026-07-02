---
title: "Connect AI Agents to Meta with MCP"
source_url: https://developers.facebook.com/documentation/mcp
---

# Connect AI Agents to Meta with MCP

Updated: Jun 12, 2026

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/mcp.md)

Official remote MCP servers for integrating Facebook, Instagram, WhatsApp, and Meta Ads capabilities into your agentic workflows.

## Benefits

* **One protocol, built for agent workflows.** Your agent connects to a Meta MCP server and discovers available tools at runtime. Tool descriptions, parameter schemas, and error responses are designed for LLMs to interpret correctly, which minimizes hallucination and failed tool calls.
* **Standard authentication.** OAuth-based authentication with Read and Manage scopes you control from your Meta account settings. Revoke access at any time.

## Available MCP servers

The following table lists the available Meta MCP servers:

| Server | Description | Type |
| --- | --- | --- |
| [Meta Developer Tools MCP](https://developers.facebook.com/documentation/mcp/devtools-mcp) | Manage Meta apps, configure webhooks, check compliance, review app status, and search developer documentation. | Remote MCP |

If you have feedback or want to see more tools, [share your feedback⁠](https://forms.gle/6MUgLiWU2PWVtjeM6).

## Supported clients

The Meta team has validated these clients for general availability. For configuration snippets per client, see the linked tools reference for each server.

* Claude Desktop
* Claude Code
* ChatGPT (Web)
* Codex App
* Codex CLI
* Cursor App
* Cursor CLI

More clients coming soon. Each client needs explicit support, so clients not listed above aren't supported yet.

## Get started

The setup pattern is the same for every Meta MCP server. For per-client setup details, see the tools reference for each server.

* **Add the server URL to your client.** Most clients have a Connectors or MCP settings panel. See the server's reference page for client-specific instructions.
* **Sign in with your Meta account** when prompted.
* **Select the apps** you want to grant access to on the consent screen. You can adjust each app's scope (Read or Manage) afterward from your Facebook account's Business Integrations settings.
* **Verify.** Ask your agent what tools it has — you should see the server's tools listed.

## Security and best practices

By accessing or using a Meta MCP server, you and the agent acting on your behalf are bound by the [Meta Platform Terms](https://developers.facebook.com/terms/). The Terms govern how data returned by Meta APIs may be stored, processed, shared, and displayed. You are responsible for ensuring that any agent or downstream system that consumes MCP responses complies with these obligations, including data retention limits, prohibited uses, and end-user transparency requirements.

**Important:** AI agents act on your behalf. Anything an AI agent is able to call at the direction of your granted scopes, the AI agent will be able to call directly — including in response to malicious instructions hidden in tool outputs (prompt injection). These instructions come from untrusted content the AI agent processes, such as webhook payloads, documents, or web pages — not from the Meta MCP server itself. Treat MCP servers like any third-party integration.

### Recommended practices

* **Use the scope you need.** Keep an app at the Read scope unless an agent needs to make changes, and set the scope per app from your Business Integrations settings.
* **Use separate apps for dev and prod.** Don't grant production app scopes to experimental agents.
* **Audit periodically.** Review connected MCP servers at facebook.com > **Settings** > **Business Integrations** every few months. Revoke ones you no longer use.
* **Watch for prompt injection.** Untrusted content an AI agent reads — webhook payloads, documents, web pages, or data returned by other tools — can carry hidden instructions that manipulate the AI agent into misusing its granted scopes. Don't grant write/manage scopes to AI agents that process untrusted input.

## More resources

For more context on Meta MCP servers, the Platform Terms, and the protocol spec, see:

* [Meta Platform Terms](https://developers.facebook.com/terms)
* [Responsible Platform Initiatives](https://developers.facebook.com/docs/resp-plat-initiatives)
* [Business Integration⁠](https://www.facebook.com/settings/?tab=business_tools)
* [Model Context Protocol Spec⁠](https://modelcontextprotocol.io/)
* [llms.txt](https://developers.facebook.com/llms.txt)
