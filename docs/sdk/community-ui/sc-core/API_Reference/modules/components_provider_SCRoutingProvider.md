---
id: "components_provider_SCRoutingProvider"
title: "Module: components/provider/SCRoutingProvider"
sidebar_label: "components/provider/SCRoutingProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCRoutingContext

• **SCRoutingContext**: `Context`<[`SCRoutingContextType`](../interfaces/types_context.SCRoutingContextType)\>

Creates Global Context

:::tipContext can be consumed in one of the following ways:

```jsx
1. <SCRoutingContext.Consumer>{(routerLink, routes, url) => (...)}</SCRoutingContext.Consumer>
```
```jsx
2. const scRoutingContext: SCRoutingContextType = useContext(SCRoutingContext);
```
```jsx
3. const scRoutingContext: SCRoutingContextType = useSCRouting();
````

:::

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:40](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L40)

## Functions

### SCRoutingProvider

▸ **SCRoutingProvider**(`children`): `JSX.Element`

#### Description:
This component provides routing context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `Object` |
| `children.children` | `ReactNode` |

#### Returns

`JSX.Element`

```jsx
<SCRoutingContext.Provider value={contextValue}>{children}</SCRoutingContext.Provider>
```

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:51](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L51)

___

### useSCRouting

▸ **useSCRouting**(): [`SCRoutingContextType`](../interfaces/types_context.SCRoutingContextType)

Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCRoutingContextType`](../interfaces/types_context.SCRoutingContextType)

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:137](https://github.com/selfcommunity/community-ui/blob/3d68cce/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L137)
