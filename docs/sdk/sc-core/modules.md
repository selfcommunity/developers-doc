---
id: "modules"
title: "@selfcommunity/core"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [Locale](namespaces/Locale)
- [ObjectUtils](namespaces/ObjectUtils)
- [SCFeatures](namespaces/SCFeatures)
- [SCNotification](namespaces/SCNotification)
- [SCRoutes](namespaces/SCRoutes)
- [StringUtils](namespaces/StringUtils)
- [UrlUtils](namespaces/UrlUtils)

## Enumerations

- [SCCustomAdvPosition](enums/SCCustomAdvPosition)
- [SCFeedObjectTypologyType](enums/SCFeedObjectTypologyType)
- [SCFeedTypologyType](enums/SCFeedTypologyType)
- [SCFeedUnitActivityTypologyType](enums/SCFeedUnitActivityTypologyType)
- [SCNotificationTopicType](enums/SCNotificationTopicType)
- [SCNotificationTypologyType](enums/SCNotificationTypologyType)
- [SCPrivateMessageStatusType](enums/SCPrivateMessageStatusType)

## Classes

- [Logger](classes/Logger)
- [WSClient](classes/WSClient)

## Interfaces

- [EndpointType](interfaces/EndpointType)
- [SCAlertMessagesContextType](interfaces/SCAlertMessagesContextType)
- [SCAuthTokenType](interfaces/SCAuthTokenType)
- [SCCategoriesManagerType](interfaces/SCCategoriesManagerType)
- [SCCategoryType](interfaces/SCCategoryType)
- [SCCommentType](interfaces/SCCommentType)
- [SCConnectionsManagerType](interfaces/SCConnectionsManagerType)
- [SCContextProviderType](interfaces/SCContextProviderType)
- [SCContextType](interfaces/SCContextType)
- [SCContributionLocation](interfaces/SCContributionLocation)
- [SCCustomAdvType](interfaces/SCCustomAdvType)
- [SCCustomNotificationType](interfaces/SCCustomNotificationType)
- [SCEmbedType](interfaces/SCEmbedType)
- [SCFeedDiscussionType](interfaces/SCFeedDiscussionType)
- [SCFeedObjectType](interfaces/SCFeedObjectType)
- [SCFeedPostType](interfaces/SCFeedPostType)
- [SCFeedUnitActivityType](interfaces/SCFeedUnitActivityType)
- [SCFeedUnitType](interfaces/SCFeedUnitType)
- [SCFollowedManagerType](interfaces/SCFollowedManagerType)
- [SCIncubatorType](interfaces/SCIncubatorType)
- [SCLocaleContextType](interfaces/SCLocaleContextType)
- [SCLocalityType](interfaces/SCLocalityType)
- [SCMediaType](interfaces/SCMediaType)
- [SCNotificationAggregatedType](interfaces/SCNotificationAggregatedType)
- [SCNotificationBlockedUserType](interfaces/SCNotificationBlockedUserType)
- [SCNotificationCollapsedForType](interfaces/SCNotificationCollapsedForType)
- [SCNotificationCommentType](interfaces/SCNotificationCommentType)
- [SCNotificationConnectionAcceptType](interfaces/SCNotificationConnectionAcceptType)
- [SCNotificationConnectionRequestType](interfaces/SCNotificationConnectionRequestType)
- [SCNotificationContextType](interfaces/SCNotificationContextType)
- [SCNotificationCustomNotificationType](interfaces/SCNotificationCustomNotificationType)
- [SCNotificationDeletedForType](interfaces/SCNotificationDeletedForType)
- [SCNotificationFollowType](interfaces/SCNotificationFollowType)
- [SCNotificationIncubatorType](interfaces/SCNotificationIncubatorType)
- [SCNotificationKindlyNoticeType](interfaces/SCNotificationKindlyNoticeType)
- [SCNotificationMentionType](interfaces/SCNotificationMentionType)
- [SCNotificationPrivateMessageType](interfaces/SCNotificationPrivateMessageType)
- [SCNotificationType](interfaces/SCNotificationType)
- [SCNotificationUnBlockedUserType](interfaces/SCNotificationUnBlockedUserType)
- [SCNotificationUnDeletedForType](interfaces/SCNotificationUnDeletedForType)
- [SCNotificationUserFollowType](interfaces/SCNotificationUserFollowType)
- [SCNotificationVoteUpType](interfaces/SCNotificationVoteUpType)
- [SCPollChoiceType](interfaces/SCPollChoiceType)
- [SCPollType](interfaces/SCPollType)
- [SCPreferencesContextType](interfaces/SCPreferencesContextType)
- [SCPrivateMessageType](interfaces/SCPrivateMessageType)
- [SCPrizeType](interfaces/SCPrizeType)
- [SCRoutingContextType](interfaces/SCRoutingContextType)
- [SCSessionType](interfaces/SCSessionType)
- [SCSettingsType](interfaces/SCSettingsType)
- [SCTagType](interfaces/SCTagType)
- [SCThemeContextType](interfaces/SCThemeContextType)
- [SCUserContextType](interfaces/SCUserContextType)
- [SCUserType](interfaces/SCUserType)
- [WSClientPropTypes](interfaces/WSClientPropTypes)
- [WSClientType](interfaces/WSClientType)

## Type aliases

### SCFeedStatusType

Ƭ **SCFeedStatusType**: [`SCFeedObjectType`](interfaces/SCFeedObjectType)

List all exports

#### Defined in

[types/feed.ts:247](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/feed.ts#L247)

## Properties

### Link

• **Link**: `ForwardRefExoticComponent`<`Pick`<`Object`, `ReactText`\> & `RefAttributes`<`unknown`\>\>

List all exports

___

### SCPreferences

• **SCPreferences**: `any`

List all exports

## Variables

### Endpoints

• **Endpoints**: `Object`

List all exports

#### Index signature

▪ [key: `string`]: [`EndpointType`](interfaces/EndpointType)

#### Defined in

[constants/Endpoints.ts:9](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/constants/Endpoints.ts#L9)

___

### SCAlertMessagesContext

• **SCAlertMessagesContext**: `Context`<[`SCAlertMessagesContextType`](interfaces/SCAlertMessagesContextType)\>

List all exports

#### Defined in

[components/provider/SCAlertMessagesProvider/index.tsx:14](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L14)

___

### SCCommentTypologyType

• **SCCommentTypologyType**: ``"comment"``

List all exports

#### Defined in

[types/comment.ts:6](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/types/comment.ts#L6)

___

### SCContext

• **SCContext**: `Context`<[`SCContextType`](interfaces/SCContextType)\>

List all exports

#### Defined in

[components/provider/SCContextProvider/index.tsx:15](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L15)

___

### SCLocaleContext

• **SCLocaleContext**: `Context`<[`SCLocaleContextType`](interfaces/SCLocaleContextType)\>

List all exports

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:20](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L20)

___

### SCNotificationContext

• **SCNotificationContext**: `Context`<[`SCNotificationContextType`](interfaces/SCNotificationContextType)\>

List all exports

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:15](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L15)

___

### SCPreferencesContext

• **SCPreferencesContext**: `Context`<[`SCPreferencesContextType`](interfaces/SCPreferencesContextType)\>

List all exports

#### Defined in

[components/provider/SCPreferencesProvider/index.tsx:17](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L17)

___

### SCRoutingContext

• **SCRoutingContext**: `Context`<[`SCRoutingContextType`](interfaces/SCRoutingContextType)\>

List all exports

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:31](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L31)

___

### SCThemeContext

• **SCThemeContext**: `Context`<[`SCThemeContextType`](interfaces/SCThemeContextType)\>

List all exports

#### Defined in

[components/provider/SCThemeProvider/index.tsx:19](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L19)

___

### SCUserContext

• **SCUserContext**: `Context`<[`SCUserContextType`](interfaces/SCUserContextType)\>

List all exports

#### Defined in

[components/provider/SCUserProvider/index.tsx:29](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L29)

___

### http

• **http**: `AxiosInstance`

List all exports

#### Defined in

[utils/http.ts:8](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/http.ts#L8)

## Functions

### SCAlertMessagesProvider

▸ **SCAlertMessagesProvider**(`__namedParameters`): `JSX.Element`

This component makes the `intl` available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCAlertMessagesProvider/index.tsx:19](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L19)

___

### SCContextProvider

▸ **SCContextProvider**(`__namedParameters`): `JSX.Element`

SCContextProvider
This import all providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SCContextProviderType`](interfaces/SCContextProviderType) |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCContextProvider/index.tsx:21](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L21)

___

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

[components/provider/SCLocaleProvider/index.tsx:25](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L25)

___

### SCNotificationProvider

▸ **SCNotificationProvider**(`__namedParameters`): `JSX.Element`

This component makes the notification context available down the React tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:20](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L20)

___

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

[components/provider/SCPreferencesProvider/index.tsx:23](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L23)

___

### SCRoutingProvider

▸ **SCRoutingProvider**(`__namedParameters`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:33](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L33)

___

### SCThemeProvider

▸ **SCThemeProvider**(`__namedParameters`): `JSX.Element`

This component makes the `theme` available down the React tree.
It should preferably be used at **the root of your component tree**.
See: https://mui.com/system/styled/

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCThemeProvider/index.tsx:26](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L26)

___

### SCUserProvider

▸ **SCUserProvider**(`__namedParameters`): `JSX.Element`

Export the provider as we need to wrap the entire app with it
This provider keeps current user logged and session

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactNode` |

#### Returns

`JSX.Element`

#### Defined in

[components/provider/SCUserProvider/index.tsx:35](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L35)

___

### formatHttpError

▸ **formatHttpError**(`error`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`any`

#### Defined in

[utils/http.ts:80](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/http.ts#L80)

___

### useSCAlertMessages

▸ **useSCAlertMessages**(): [`SCAlertMessagesContextType`](interfaces/SCAlertMessagesContextType)

Let's only export the `useSCAlertMessages` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCAlertMessagesContextType`](interfaces/SCAlertMessagesContextType)

#### Defined in

[components/provider/SCAlertMessagesProvider/index.tsx:33](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCAlertMessagesProvider/index.tsx#L33)

___

### useSCContext

▸ **useSCContext**(): [`SCContextType`](interfaces/SCContextType)

Let's only export the `useSCContext` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCContextType`](interfaces/SCContextType)

#### Defined in

[components/provider/SCContextProvider/index.tsx:78](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCContextProvider/index.tsx#L78)

___

### useSCFetchCategory

▸ **useSCFetchCategory**(`__namedParameters`): `Object`

Custom hook 'useSCFetchCategory'
Use this hook to fetch a category object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.category?` | [`SCCategoryType`](interfaces/SCCategoryType) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scCategory` | [`SCCategoryType`](interfaces/SCCategoryType) |
| `setSCCategory` | `Dispatch`<`SetStateAction`<[`SCCategoryType`](interfaces/SCCategoryType)\>\> |

#### Defined in

[hooks/useSCFetchCategory.ts:15](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/hooks/useSCFetchCategory.ts#L15)

___

### useSCFetchCommentObject

▸ **useSCFetchCommentObject**(`__namedParameters`): `Object`

Custom hook 'useSCFetchCommentObject'
Use this hook to fetch a comment

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.commentObject?` | [`SCCommentType`](interfaces/SCCommentType) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `obj` | [`SCCommentType`](interfaces/SCCommentType) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCCommentType`](interfaces/SCCommentType)\>\> |

#### Defined in

[hooks/useSCFetchCommentObject.ts:15](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/hooks/useSCFetchCommentObject.ts#L15)

___

### useSCFetchCustomAdv

▸ **useSCFetchCustomAdv**(`__namedParameters`): `Object`

Custom hook 'useSCFetchCustomAdv'
Use this hook to fetch a custom adv object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.categoryId?` | `number` |
| `__namedParameters.position` | [`SCCustomAdvPosition`](enums/SCCustomAdvPosition) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scCustomAdv` | [`SCCustomAdvType`](interfaces/SCCustomAdvType) |
| `setSCCustomAdv` | `Dispatch`<`SetStateAction`<[`SCCustomAdvType`](interfaces/SCCustomAdvType)\>\> |

#### Defined in

[hooks/useSCFetchCustomAdv.ts:15](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/hooks/useSCFetchCustomAdv.ts#L15)

___

### useSCFetchFeedObject

▸ **useSCFetchFeedObject**(`__namedParameters`): `Object`

Custom hook 'useFetchFeedObject'
Use this hook to fetch a feed object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.feedObject?` | [`SCFeedObjectType`](interfaces/SCFeedObjectType) |
| `__namedParameters.feedObjectType` | [`SCFeedObjectTypologyType`](enums/SCFeedObjectTypologyType) |
| `__namedParameters.id?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `obj` | [`SCFeedDiscussionType`](interfaces/SCFeedDiscussionType) \| [`SCFeedObjectType`](interfaces/SCFeedObjectType) \| [`SCFeedPostType`](interfaces/SCFeedPostType) |
| `setObj` | `Dispatch`<`SetStateAction`<[`SCFeedDiscussionType`](interfaces/SCFeedDiscussionType) \| [`SCFeedObjectType`](interfaces/SCFeedObjectType) \| [`SCFeedPostType`](interfaces/SCFeedPostType)\>\> |

#### Defined in

[hooks/useSCFetchFeedObject.ts:16](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/hooks/useSCFetchFeedObject.ts#L16)

___

### useSCFetchTag

▸ **useSCFetchTag**(`__namedParameters`): `Object`

Custom hook 'useSCFetchTag'
Use this hook to fetch a tag object

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.id?` | `number` |
| `__namedParameters.tag?` | [`SCTagType`](interfaces/SCTagType) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scTag` | [`SCTagType`](interfaces/SCTagType) |
| `setSCTag` | `Dispatch`<`SetStateAction`<[`SCTagType`](interfaces/SCTagType)\>\> |

#### Defined in

[hooks/useSCFetchTag.ts:15](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/hooks/useSCFetchTag.ts#L15)

___

### useSCFetchUser

▸ **useSCFetchUser**(`initialSession`): `Object`

Custom hook 'useSCFetchUser'
Use this hook to fetch a user object

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialSession` | `Object` |
| `initialSession.id?` | `number` |
| `initialSession.user?` | [`SCUserType`](interfaces/SCUserType) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `scUser` | [`SCUserType`](interfaces/SCUserType) |
| `setSCUser` | `Dispatch`<`SetStateAction`<[`SCUserType`](interfaces/SCUserType)\>\> |

#### Defined in

[hooks/useSCFetchUser.ts:14](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/hooks/useSCFetchUser.ts#L14)

___

### useSCLocale

▸ **useSCLocale**(): [`SCLocaleContextType`](interfaces/SCLocaleContextType)

Let's only export the `useSCLocale` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCLocaleContextType`](interfaces/SCLocaleContextType)

#### Defined in

[components/provider/SCLocaleProvider/index.tsx:83](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L83)

___

### useSCNotification

▸ **useSCNotification**(): [`SCNotificationContextType`](interfaces/SCNotificationContextType)

Let's only export the `useSCNotification` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCNotificationContextType`](interfaces/SCNotificationContextType)

#### Defined in

[components/provider/SCNotificationProvider/index.tsx:31](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCNotificationProvider/index.tsx#L31)

___

### useSCPreferences

▸ **useSCPreferences**(): [`SCPreferencesContextType`](interfaces/SCPreferencesContextType)

Let's only export the `useSCPreferences` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCPreferencesContextType`](interfaces/SCPreferencesContextType)

#### Defined in

[components/provider/SCPreferencesProvider/index.tsx:57](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCPreferencesProvider/index.tsx#L57)

___

### useSCRouting

▸ **useSCRouting**(): [`SCRoutingContextType`](interfaces/SCRoutingContextType)

Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCRoutingContextType`](interfaces/SCRoutingContextType)

#### Defined in

[components/provider/SCRoutingProvider/index.tsx:119](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCRoutingProvider/index.tsx#L119)

___

### useSCTheme

▸ **useSCTheme**(): [`SCThemeContextType`](interfaces/SCThemeContextType)

Let's only export the `useSCTheme` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCThemeContextType`](interfaces/SCThemeContextType)

#### Defined in

[components/provider/SCThemeProvider/index.tsx:61](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L61)

___

### useSCUser

▸ **useSCUser**(): [`SCUserContextType`](interfaces/SCUserContextType)

Let's only export the `useSCUser` hook instead of the context.
We only want to use the hook directly and never the context component.

#### Returns

[`SCUserContextType`](interfaces/SCUserContextType)

#### Defined in

[components/provider/SCUserProvider/index.tsx:190](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCUserProvider/index.tsx#L190)

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

[components/provider/SCLocaleProvider/index.tsx:70](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCLocaleProvider/index.tsx#L70)

___

### withSCTheme

▸ `Const` **withSCTheme**(`Component`): (`props`: `any`) => `Element`

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

[components/provider/SCThemeProvider/index.tsx:48](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/components/provider/SCThemeProvider/index.tsx#L48)
