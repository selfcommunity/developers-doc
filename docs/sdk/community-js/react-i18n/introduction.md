---
sidebar_label: Introduction
sidebar_position: 1
title: Introduction
---

:::info
React-i18n Package allows the internationalization and localization of your application.
:::

### How to generate translation files

After package [installation](../getting_started/installation.md/#install-sc-i18n) a folder `locales` with two json files (en, it) will be generated.

Inside those files there are components translation strings. The standard pattern in use to define them is :

`"package.tag.component name.element name.string description" : "Message to translate"`

**example**:

`"ui.categoriesPopular.button.showMore": "Show More"`


### Usage in components

There are two ways to declare and use translations:

:::tipMethod 1 steps:
1. import [`defineMessages`](https://formatjs.io/docs/react-intl/api#definemessages) and [`useIntl`](https://formatjs.io/docs/react-intl/api/#useintl-hook) hook from react-intl API.
2. Define a `messages` constant  that will contain the objs with description strings you want to translate.
3. Inside your functional component, declare a `intl` constant that uses `useIntl` hook.
4. Refer the message string to be translated inside the textual component inside your render function.
:::

```jsx
//Import
import {defineMessages, useIntl} from 'react-intl';

// Outside component
const messages = defineMessages({
    categoryFollowers: {
        id: 'ui.category.categoryFollowers',
        defaultMessage: 'ui.category.categoryFollowers'
    }
});
//Inside component state
const intl = useIntl();

//Inside JSX Render
`${intl.formatMessage(messages.categoryFollowers)}`
```

:::tipMethod s steps:
1. import [`FormattedMessages`](https://formatjs.io/docs/react-intl/components#formattedmessage) from react-intl API
2. Use `FormattedMessages` component with `id` and `defaultMessage` string as defined in your JSON files.
   :::
3. 
```jsx
//Import
import {FormattedMessage} from 'react-intl';

//Inside JSX Render
<FormattedMessage id="ui.categoriesSuggestion.noResults" defaultMessage="ui.categoriesSuggestion.noResults" />
```




