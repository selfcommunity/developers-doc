---
id: "components_provider_SCPreferencesProvider"
title: "Module: components/provider/SCPreferencesProvider"
sidebar_label: "components/provider/SCPreferencesProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCPreferencesContext

• **SCPreferencesContext**: `Context`<[`SCPreferencesContextType`](../interfaces/types_context.SCPreferencesContextType)\>

 * @hidden
Create Preferences/Features Context
Consuming this context in one of the following ways:
 1. `<SCPreferencesContext.Consumer>
      {(preferences) => (...)}
    </SCPreferencesContext.Consumer>`
 2. const scPreferences: SCPreferencesType = usePreferencesContext(SCPreferencesContext);
 3. const scPreferences: SCPreferencesType = useSCPreferences();

#### Defined in

[components/provider/SCPreferencesProvider/index.tsx:18](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L18)

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

[components/provider/SCPreferencesProvider/index.tsx:24](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L24)

___

### useSCPreferences

▸ **useSCPreferences**(): [`SCPreferencesContextType`](../interfaces/types_context.SCPreferencesContextType)

 * @hidden
Let's only export the `useSCPreferences` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCPreferencesContextType`](../interfaces/types_context.SCPreferencesContextType)

#### Defined in

[components/provider/SCPreferencesProvider/index.tsx:59](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L59)
