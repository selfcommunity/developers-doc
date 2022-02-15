---
id: "provider_SCLocaleProvider"
title: "Module: provider/SCLocaleProvider"
sidebar_label: "provider/SCLocaleProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCLocaleContext

• **SCLocaleContext**: `Context`<`SCLocaleContextType`\>

Create Global Context
Consuming this context in one of the following ways:
 1. `<SCLocaleContext.Consumer>
      {(locale,) => (...)}
    </SCLocaleContext.Consumer>`
 2. const scLocaleContext: SCLocaleContextType = useContext(SCLocaleContext);
 3. const scLocaleContext: SCLocaleContextType = useSCLocale();

#### Defined in

[provider/SCLocaleProvider/index.tsx:20](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L20)

## Functions

### default

▸ **default**(`__namedParameters`): `JSX.Element`

This component makes the `intl` available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[provider/SCLocaleProvider/index.tsx:25](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L25)

___

### useSCLocale

▸ **useSCLocale**(): `SCLocaleContextType`

Let's only export the `useSCLocale` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

`SCLocaleContextType`

#### Defined in

[provider/SCLocaleProvider/index.tsx:83](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L83)

___

### withSCLocale

▸ `Const` **withSCLocale**(`Component`): (`props`: `any`) => `Element`

Export hoc to inject the base theme to components

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `any` |

#### Returns

`fn`

▸ (`props`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

##### Returns

`Element`

#### Defined in

[provider/SCLocaleProvider/index.tsx:70](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L70)
