---
sidebar_label: Introduction
sidebar_position: 1
title: Introduction
---

:::info
Sc-I18n Package allows the internationalization and localization of your application.
:::

### How to generate translation files

After package [installation](../getting_started/installation.md/#install-sc-i18n) a folder `locales` with two json files (en, it) will be generated.

Inside those files there are components translation strings. The standard pattern in use to define them is :

`"package tag.component name.element name.string description" : "Message to translate"`

**example**:

`"ui.categoriesPopular.button.showMore": "Show More"`


### Usage in components

There are two ways to declare and use translations:

```jsx
import {defineMessages, useIntl} from 'react-intl';

const messages = defineMessages({
    categoryFollowers: {
        id: 'ui.category.categoryFollowers',
        defaultMessage: 'ui.category.categoryFollowers'
    }
});
//Inside state
const intl = useIntl();

`${intl.formatMessage(messages.categoryFollowers, {total: category.followers_count})}`

```
**or**

```jsx
import {FormattedMessage} from 'react-intl';

//Inside Render
<FormattedMessage id="ui.categoriesSuggestion.noResults" defaultMessage="ui.categoriesSuggestion.noResults" />
```




