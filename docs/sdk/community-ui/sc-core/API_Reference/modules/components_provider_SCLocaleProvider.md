---
id: "components_provider_SCLocaleProvider"
title: "Module: components/provider/SCLocaleProvider"
sidebar_label: "components/provider/SCLocaleProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCLocaleContext

• **SCLocaleContext**: `Context`<[`SCLocaleContextType`](../interfaces/types_context.SCLocaleContextType)\>

Creates Global Context

:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCLocaleContext.Consumer>{(locale,) => (...)}</SCLocaleContext.Consumer>
```
```jsx
2. const scLocaleContext: SCLocaleContextType = useContext(SCLocaleContext);
```
```jsx
3. const scLocaleContext: SCLocaleContextType = useSCLocale();
````
:::

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:27](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L27)

## Functions

### SCLocaleProvider

▸ **SCLocaleProvider**(`children`): `JSX.Element`

#### Description:
This component makes the `intl` available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `Object` |
| `children.children` | `ReactNode` |

#### Returns

`JSX.Element`

```jsx
<SCLocaleContext.Provider value={{locale, messages, selectLocale}}>
```

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:38](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L38)

___

### useSCLocale

▸ **useSCLocale**(): [`SCLocaleContextType`](../interfaces/types_context.SCLocaleContextType)

Let's only export the `useSCLocale` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCLocaleContextType`](../interfaces/types_context.SCLocaleContextType)

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:96](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L96)

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

[components/provider/SCLocaleProvider/index.tsx:83](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L83)
