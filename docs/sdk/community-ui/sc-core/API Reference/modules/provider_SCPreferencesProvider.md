---
id: "provider_SCPreferencesProvider"
title: "Module: provider/SCPreferencesProvider"
sidebar_label: "provider/SCPreferencesProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCPreferencesContext

• **SCPreferencesContext**: `Context`<`SCPreferencesContextType`\>

Create Preferences/Features Context
Consuming this context in one of the following ways:
 1. `<SCPreferencesContext.Consumer>
      {(preferences) => (...)}
    </SCPreferencesContext.Consumer>`
 2. const scPreferences: SCPreferencesType = usePreferencesContext(SCPreferencesContext);
 3. const scPreferences: SCPreferencesType = useSCPreferences();

#### Defined in

[provider/SCPreferencesProvider/index.tsx:17](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L17)

## Functions

### default

▸ **default**(`__namedParameters`): `JSX.Element`

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

[provider/SCPreferencesProvider/index.tsx:23](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L23)

___

### useSCPreferences

▸ **useSCPreferences**(): `SCPreferencesContextType`

Let's only export the `useSCPreferences` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

`SCPreferencesContextType`

#### Defined in

[provider/SCPreferencesProvider/index.tsx:57](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L57)
