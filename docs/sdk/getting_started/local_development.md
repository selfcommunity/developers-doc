---
sidebar_label: Local Development
sidebar_position: 3
title: Local Development
---

Community UI library uses a "monorepo" organization style for managing multiple npm packages in a single git repo.
This is done through a [Yarn](https://yarnpkg.com/en/) feature called workspaces.
It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of
them in a single pass. Some workspaces depends on other workspace and in this way ensure all using the most up-to-date
code available. With a root command yarn install, all workspaces dependencies will be installed together.
A single lockfile is unique for all workspaces. Common dependencies will be correctly deduped and put at the root of
the project.
This projects use also lerna, a tool that use yarn workspaces to manage multi packages operation.

This repo contains this workspaces:
- sc-core
- sc-ui
- sc-templates
- sc-i18n

### sc-core
Groups core components.

### sc-ui
Contains all atomic components usefull to integrate a community in a frontend service context.
Some components use sc-core components, so sc-core is list between dependencies.
Requiring an sc-core component from this package, use the exact code currently located inside the project rather than
what is published on npm.

### sc-templates
Contains full community pages components usefull to integrate a community in a frontend service context.

### sc-ui
Contains i18n.
````


