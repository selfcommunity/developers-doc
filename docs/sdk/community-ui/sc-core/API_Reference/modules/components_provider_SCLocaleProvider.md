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

 * @hidden
Create Global Context
Consuming this context in one of the following ways:
 1. `<SCLocaleContext.Consumer>
      {(locale,) => (...)}
    </SCLocaleContext.Consumer>`
 2. const scLocaleContext: SCLocaleContextType = useContext(SCLocaleContext);
 3. const scLocaleContext: SCLocaleContextType = useSCLocale();

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:21](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L21)

## Functions

### SCLocaleProvider

▸ **SCLocaleProvider**(`__namedParameters`): `JSX.Element`

This component makes the `intl` available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:26](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L26)

___

### useSCLocale

▸ **useSCLocale**(): [`SCLocaleContextType`](../interfaces/types_context.SCLocaleContextType)

 * @hidden
Let's only export the `useSCLocale` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCLocaleContextType`](../interfaces/types_context.SCLocaleContextType)

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:86](https://github.com/selfcommunity/community-ui/blob/7897031/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L86)
