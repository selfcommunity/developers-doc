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

Create Global Context
Consuming this context in one of the following ways:
 1. `<SCRoutingContext.Consumer>
      {(routerLink, routes, url) => (...)}
    </SCRoutingContext.Consumer>`
 2. const scRoutingContext: SCRoutingContextType = useContext(SCRoutingContext);
 3. const scRoutingContext: SCRoutingContextType = useSCRouting();

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:31](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L31)

## Functions

### default

▸ **default**(`__namedParameters`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:33](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L33)

___

### useSCRouting

▸ **useSCRouting**(): [`SCRoutingContextType`](../interfaces/types_context.SCRoutingContextType)

Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCRoutingContextType`](../interfaces/types_context.SCRoutingContextType)

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:119](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L119)
