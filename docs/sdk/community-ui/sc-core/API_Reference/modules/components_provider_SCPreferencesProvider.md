---
id: "components_provider_SCPreferencesProvider"
title: "Module: components/provider/SCPreferencesProvider"
sidebar_label: "components/provider/SCPreferencesProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCPreferencesContext

• `Const` **SCPreferencesContext**: `Context`<[`SCPreferencesContextType`](../interfaces/types_context.SCPreferencesContextType.md)\>

Creates Preferences/Features Context

:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCPreferencesContext.Consumer>{(preferences) => (...)}</SCPreferencesContext.Consumer>
```
```jsx
2. const scPreferences: SCPreferencesType = usePreferencesContext(SCPreferencesContext);
```
```jsx
3. const scPreferences: SCPreferencesType = useSCPreferences();
````
:::

#### Defined in

[components/provider/SCPreferencesProvider/index.tsx:25](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L25)

## Functions

### SCPreferencesProvider

▸ **SCPreferencesProvider**(`__namedParameters`): `JSX.Element`

SCPreferencesProvider
This import all preferences and features enabled

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCPreferencesProvider/index.tsx:31](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L31)

___

### useSCPreferences

▸ **useSCPreferences**(): [`SCPreferencesContextType`](../interfaces/types_context.SCPreferencesContextType.md)

Let's only export the `useSCPreferences` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCPreferencesContextType`](../interfaces/types_context.SCPreferencesContextType.md)

#### Defined in

[components/provider/SCPreferencesProvider/index.tsx:65](https://github.com/selfcommunity/community-ui/blob/67100aa/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L65)
