---
id: "provider_SCAlertMessagesProvider"
title: "Module: provider/SCAlertMessagesProvider"
sidebar_label: "provider/SCAlertMessagesProvider"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### SCAlertMessagesContext

• **SCAlertMessagesContext**: `Context`<`SCAlertMessagesContextType`\>

Create Global Context
Consuming this context in one of the following ways:
 1. `<SCAlertMessagesContext.Consumer>
      {(options,) => (...)}
    </SCAlertMessagesContext.Consumer>`
 2. const scAlertMessagesContext: SCAlertMessagesContextType = useContext(SCAlertMessagesContext);
 3. const scAlertMessagesContext: SCAlertMessagesContextType = useSCAlertMessages();

#### Defined in

[provider/SCAlertMessagesProvider/index.tsx:14](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L14)

## Functions

### default

▸ **default**(`children`): `JSX.Element`

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
<SCAlertMessagesContext.Provider value={{options}}>
```

#### Defined in

[provider/SCAlertMessagesProvider/index.tsx:25](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L25)

___

### useSCAlertMessages

▸ **useSCAlertMessages**(): `SCAlertMessagesContextType`

Let's only export the `useSCAlertMessages` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

`SCAlertMessagesContextType`

#### Defined in

[provider/SCAlertMessagesProvider/index.tsx:39](https://github.com/selfcommunity/community-ui/blob/7f26f69/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L39)
