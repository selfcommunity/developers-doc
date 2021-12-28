---
sidebar_label: Installation
sidebar_position: 1
title: Installation
---

# Installation

CommunityUI is available as an [npm package](https://www.npmjs.com/package/@selfcommunity/community-ui).

First install peer dependencies needed to make the library work:

### Dependencies

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-intl
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled react-intl
```
</TabItem>
</Tabs>
````


Based on which package you want to install proceed as follows:

### Install sc-core:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/i18n @selfcommunity/core
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/i18n @selfcommunity/core
```
</TabItem>
</Tabs>
````

### Install sc-ui package:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/i18n @selfcommunity/core @selfcommunity/ui
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/i18n @selfcommunity/core @selfcommunity/ui
```
</TabItem>
</Tabs>
````

### Install sc-templates package:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/i18n @selfcommunity/core @selfcommunity/templates
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/i18n @selfcommunity/core @selfcommunity/templates
```
</TabItem>
</Tabs>
````

### Install sc-i18n:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/i18n
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/i18n
```
</TabItem>
</Tabs>
````