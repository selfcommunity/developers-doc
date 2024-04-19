---
sidebar_label: Introduction
sidebar_position: 1
---
# Webhooks

This documentation is the reference about  SelfCommunity Webhooks.

### About Webhooks
Webhooks allow you to get programmatical notifications from SelfCommunity about changes to your data as they happen. If you're new to webhooks, [read this guide](https://requestbin.com/blog/working-with-webhooks/) to learn more.

Rather than requiring you to pull information via our API, webhooks will push information to your endpoint. When one of those events is triggered (for example a new post is created), SelfCommunity will send this notification as an HTTP POST request, with a JSON body, to the endpoint(s) you specify.

The SelfCommunity webhook module are **only available for enterprise communities**.
Take a look at the various [plans](https://selfcommunity.com/pricing/) you can subscribe to on.

As an Enterprise plan subscriber, login to [https://make.selfcommunity.io](https://make.selfcommunity.io) with your account, go to the Webhooks section on Integration menu and enable the Webhooks.