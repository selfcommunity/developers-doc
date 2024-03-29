---
sidebar_label: Installation
sidebar_position: 1
title: Installation
---

# Installation

CommunityJS is available as an [npm package](https://www.npmjs.com/package/@selfcommunity/community-ui).

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

### Install api-services:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/types @selfcommunity/utils @selfcommunity/api-services
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/types @selfcommunity/utils @selfcommunity/api-services
```
</TabItem>
</Tabs>
````

### Install react-core:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/api-services @selfcommunity/react-i18n @selfcommunity/types @selfcommunity/utils @selfcommunity/react-core
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/api-services @selfcommunity/react-i18n @selfcommunity/types @selfcommunity/utils @selfcommunity/react-core
```
</TabItem>
</Tabs>
````

### Install react-i18n:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/react-i18n
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/react-i18n
```
</TabItem>
</Tabs>
````

### Install react-templates:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/react-i18n @selfcommunity/react-core @selfcommunity/react-templates
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/react-i18n @selfcommunity/react-core @selfcommunity/react-templates
```
</TabItem>
</Tabs>
````



### Install react-theme-default:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/react-core @selfcommunity/react-ui @selfcommunity/react-theme-default
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/react-core @selfcommunity/react-ui @selfcommunity/react-theme-default
```
</TabItem>
</Tabs>
````

### Install react-ui:

````mdx-code-block


<Tabs defaultValue="npm" values={[{ label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }]}>
<TabItem value="npm">

```npm
npm install @selfcommunity/api-services @selfcommunity/react-core @selfcommunity/react-i18n @selfcommunity/types @selfcommunity/utils @selfcommunity/react-ui
```

</TabItem>
<TabItem value="yarn">

```yarn
yarn add @selfcommunity/api-services @selfcommunity/react-core @selfcommunity/react-i18n @selfcommunity/types @selfcommunity/utils @selfcommunity/react-ui
```
</TabItem>
</Tabs>
````