---
id: "AccountSignIn"
title: "Module: AccountSignIn"
sidebar_label: "AccountSignIn"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [AccountSignInProps](../interfaces/AccountSignIn.AccountSignInProps.md)

## Functions

### AccountSignIn

▸ **AccountSignIn**(`props`): `JSX.Element`

> API documentation for the Community-UI AccountSignIn component. Learn about the available props and the CSS API.
> This component support [OAuth2 authentication](https://developers.selfcommunity.com/docs/api/authentication/oauth#password) protocol with grant_type password

#### Import

```jsx
import {AccountSignIn} from '@selfcommunity/ui';
```

#### Component Name

The name `SCAccountSignIn` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCAccountSignIn-root|Styles applied to the root element.|
|username|.SCAccountSignIn-username|Styles applied to the username TextField.|
|password|.SCAccountSignIn-password|Styles applied to the password TextField.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AccountSignInProps`](../interfaces/AccountSignIn.AccountSignInProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx:96](https://github.com/selfcommunity/community-ui/blob/1eb776a/packages/sc-ui/src/components/AccountSignIn/AccountSignIn.tsx#L96)
