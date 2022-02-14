---
id: "index"
title: "@selfcommunity/ui"
slug: "/sdk/community-ui/sc-ui/component_API/"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [CommentsOrderBy](enums/CommentsOrderBy)
- [FeedObjectActivitiesType](enums/FeedObjectActivitiesType)
- [FeedObjectTemplateType](enums/FeedObjectTemplateType)

## Interfaces

- [CategoriesListProps](interfaces/CategoriesListProps)
- [CategoryHeaderProps](interfaces/CategoryHeaderProps)
- [CategoryProps](interfaces/CategoryProps)
- [ChangeCoverProps](interfaces/ChangeCoverProps)
- [ChangePictureProps](interfaces/ChangePictureProps)
- [CommentObjectProps](interfaces/CommentObjectProps)
- [CommentsObjectProps](interfaces/CommentsObjectProps)
- [CustomAdvProps](interfaces/CustomAdvProps)
- [EditorProps](interfaces/EditorProps)
- [FeedObjectProps](interfaces/FeedObjectProps)
- [FeedProps](interfaces/FeedProps)
- [FeedSidebarProps](interfaces/FeedSidebarProps)
- [FeedUpdatesProps](interfaces/FeedUpdatesProps)
- [FollowCategoryButtonProps](interfaces/FollowCategoryButtonProps)
- [FollowUserButtonProps](interfaces/FollowUserButtonProps)
- [LoyaltyProgramProps](interfaces/LoyaltyProgramProps)
- [MessageEditorProps](interfaces/MessageEditorProps)
- [MessageProps](interfaces/MessageProps)
- [NotificationProps](interfaces/NotificationProps)
- [PeopleSuggestionProps](interfaces/PeopleSuggestionProps)
- [PlatformProps](interfaces/PlatformProps)
- [PrivateMessagesProps](interfaces/PrivateMessagesProps)
- [RelatedDiscussionProps](interfaces/RelatedDiscussionProps)
- [SCCategoryType](interfaces/SCCategoryType)
- [SCFeedWidgetType](interfaces/SCFeedWidgetType)
- [SCMediaChunkType](interfaces/SCMediaChunkType)
- [SCMediaObjectType](interfaces/SCMediaObjectType)
- [SnippetsProps](interfaces/SnippetsProps)
- [ThreadProps](interfaces/ThreadProps)
- [TrendingFeedProps](interfaces/TrendingFeedProps)
- [TrendingPeopleProps](interfaces/TrendingPeopleProps)
- [UserFollowersProps](interfaces/UserFollowersProps)
- [UserProfileHeaderProps](interfaces/UserProfileHeaderProps)
- [UserProps](interfaces/UserProps)
- [UserToastNotificationsProps](interfaces/UserToastNotificationsProps)
- [UsersFollowedProps](interfaces/UsersFollowedProps)

## Type aliases

### ComposerProps

Ƭ **ComposerProps**<`D`, `P`\>: `OverrideProps`<`ComposerTypeMap`<`P`, `D`\>, `D`\>

List all exports

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `React.ElementType` = `ComposerTypeMap`[``"defaultComponent"``] |
| `P` | {} |

#### Defined in

[packages/sc-ui/src/components/Composer/Composer.tsx:298](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Composer/Composer.tsx#L298)

___

### InlineComposerProps

Ƭ **InlineComposerProps**<`D`, `P`\>: `OverrideProps`<`InlineComposerTypeMap`<`P`, `D`\>, `D`\>

List all exports

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `React.ElementType` = `InlineComposerTypeMap`[``"defaultComponent"``] |
| `P` | {} |

#### Defined in

[packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx:82](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx#L82)

## Variables

### classes

• **classes**: `Object`

List all exports

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actions` | `string` |
| `categoryImage` | `string` |
| `title` | `string` |

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:25](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L25)

## Functions

### AvatarGroupSkeleton

▸ **AvatarGroupSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Skeleton/AvatarGroupSkeleton.tsx:24](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Skeleton/AvatarGroupSkeleton.tsx#L24)

___

### CategoriesFollowed

▸ **CategoriesFollowed**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CategoriesListProps`](interfaces/CategoriesListProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoriesFollowed/CategoriesFollowed.tsx:38](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoriesFollowed/CategoriesFollowed.tsx#L38)

___

### CategoriesFollowedSkeleton

▸ **CategoriesFollowedSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoriesFollowed/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoriesFollowed/Skeleton.tsx#L4)

___

### CategoriesPopular

▸ **CategoriesPopular**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CategoriesListProps`](interfaces/CategoriesListProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoriesPopular/CategoriesPopular.tsx:26](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoriesPopular/CategoriesPopular.tsx#L26)

___

### CategoriesPopularSkeleton

▸ **CategoriesPopularSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoriesPopular/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoriesPopular/Skeleton.tsx#L4)

___

### CategoriesSuggestion

▸ **CategoriesSuggestion**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CategoriesListProps`](interfaces/CategoriesListProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoriesSuggestion/CategoriesSuggestion.tsx:46](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoriesSuggestion/CategoriesSuggestion.tsx#L46)

___

### CategoriesSuggestionSkeleton

▸ **CategoriesSuggestionSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoriesSuggestion/Skeleton.tsx:22](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoriesSuggestion/Skeleton.tsx#L22)

___

### Category

▸ **Category**(`props`): `JSX.Element`

Category Component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CategoryProps`](interfaces/CategoryProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Category/Category.tsx:90](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Category.tsx#L90)

___

### CategoryHeader

▸ **CategoryHeader**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CategoryHeaderProps`](interfaces/CategoryHeaderProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoryHeader/CategoryHeader.tsx:104](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoryHeader/CategoryHeader.tsx#L104)

___

### CategoryHeaderSkeleton

▸ **CategoryHeaderSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CategoryHeader/Skeleton.tsx:34](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CategoryHeader/Skeleton.tsx#L34)

___

### ChangeCover

▸ **ChangeCover**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ChangeCoverProps`](interfaces/ChangeCoverProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/ChangeCover/ChangeCover.tsx:51](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/ChangeCover/ChangeCover.tsx#L51)

___

### ChangePicture

▸ **ChangePicture**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ChangePictureProps`](interfaces/ChangePictureProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/ChangePicture/ChangePicture.tsx:44](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/ChangePicture/ChangePicture.tsx#L44)

___

### CommentObject

▸ **CommentObject**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CommentObjectProps`](interfaces/CommentObjectProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentObject/CommentObject.tsx:222](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CommentObject/CommentObject.tsx#L222)

___

### CommentObjectSkeleton

▸ **CommentObjectSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentObject/Skeleton.tsx:25](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CommentObject/Skeleton.tsx#L25)

___

### CommentsObject

▸ **CommentsObject**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CommentsObjectProps`](interfaces/CommentsObjectProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx:224](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CommentsObject/CommentsObject.tsx#L224)

___

### CommentsObjectSkeleton

▸ **CommentsObjectSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentsObject/Skeleton.tsx:22](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CommentsObject/Skeleton.tsx#L22)

___

### Composer

▸ **Composer**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `OverrideProps`<`ComposerTypeMap`<{}, ``"div"``\>, ``"div"``\> |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Composer/Composer.tsx:344](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Composer/Composer.tsx#L344)

___

### ComposerSkeleton

▸ **ComposerSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Composer/Skeleton.tsx:66](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Composer/Skeleton.tsx#L66)

___

### Connection

▸ **Connection**(`__namedParameters`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ConnectionButtonProps` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/ConnectionUserButton/ConnectionUserButton.tsx:51](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/ConnectionUserButton/ConnectionUserButton.tsx#L51)

___

### CustomAdv

▸ **CustomAdv**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CustomAdvProps`](interfaces/CustomAdvProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CustomAdv/CustomAdv.tsx:47](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CustomAdv/CustomAdv.tsx#L47)

___

### CustomAdvSkeleton

▸ **CustomAdvSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CustomAdv/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CustomAdv/Skeleton.tsx#L4)

___

### Editor

▸ **Editor**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`EditorProps`](interfaces/EditorProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Editor/Editor.tsx:142](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Editor/Editor.tsx#L142)

___

### EditorSkeleton

▸ **EditorSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Editor/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Editor/Skeleton.tsx#L4)

___

### Feed

▸ **Feed**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedProps`](interfaces/FeedProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Feed/Feed.tsx:134](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Feed/Feed.tsx#L134)

___

### FeedObject

▸ **FeedObject**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedObjectProps`](interfaces/FeedObjectProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedObject/FeedObject.tsx:236](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/FeedObject.tsx#L236)

___

### FeedObjectSkeleton

▸ **FeedObjectSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.template?` | [`FeedObjectTemplateType`](enums/FeedObjectTemplateType) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedObject/Skeleton.tsx:28](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedObject/Skeleton.tsx#L28)

___

### FeedSkeleton

▸ **FeedSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<`FeedSkeletonMap`\> |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Feed/Skeleton.tsx:34](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Feed/Skeleton.tsx#L34)

___

### FeedUpdates

▸ **FeedUpdates**(`props`): `JSX.Element`

This Component subscribe to updates from PubSub channel (eg. websocket) and tell the feed to updates if necessary

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FeedUpdatesProps`](interfaces/FeedUpdatesProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx:66](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedUpdates/FeedUpdates.tsx#L66)

___

### FeedUpdatesSkeleton

▸ **FeedUpdatesSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FeedUpdates/Skeleton.tsx:19](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FeedUpdates/Skeleton.tsx#L19)

___

### FollowCategoryButton

▸ **FollowCategoryButton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FollowCategoryButtonProps`](interfaces/FollowCategoryButtonProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx:57](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FollowCategoryButton/FollowCategoryButton.tsx#L57)

___

### FollowUserButton

▸ **FollowUserButton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FollowUserButtonProps`](interfaces/FollowUserButtonProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx:51](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/FollowUserButton/FollowUserButton.tsx#L51)

___

### GenericSkeleton

▸ **GenericSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Skeleton/GenericSkeleton.tsx:21](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Skeleton/GenericSkeleton.tsx#L21)

___

### InlineComposer

▸ **InlineComposer**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `OverrideProps`<`InlineComposerTypeMap`<{}, ``"div"``\>, ``"div"``\> |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx:100](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/InlineComposer/InlineComposer.tsx#L100)

___

### InlineComposerSkeleton

▸ **InlineComposerSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/InlineComposer/Skeleton.tsx:33](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/InlineComposer/Skeleton.tsx#L33)

___

### LoyaltyProgram

▸ **LoyaltyProgram**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`LoyaltyProgramProps`](interfaces/LoyaltyProgramProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/LoyaltyProgram/LoyaltyProgram.tsx:84](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/LoyaltyProgram/LoyaltyProgram.tsx#L84)

___

### LoyaltyProgramSkeleton

▸ **LoyaltyProgramSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/LoyaltyProgram/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/LoyaltyProgram/Skeleton.tsx#L4)

___

### Message

▸ **Message**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MessageProps`](interfaces/MessageProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Message/Message.tsx:116](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Message.tsx#L116)

___

### MessageEditor

▸ **MessageEditor**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MessageEditorProps`](interfaces/MessageEditorProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx:60](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/MessageEditor/MessageEditor.tsx#L60)

___

### MessageEditorSkeleton

▸ **MessageEditorSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/MessageEditor/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/MessageEditor/Skeleton.tsx#L4)

___

### MessageSkeleton

▸ **MessageSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Message/Skeleton.tsx:26](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Message/Skeleton.tsx#L26)

___

### Notification

▸ **Notification**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NotificationProps`](interfaces/NotificationProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:131](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Notification/Notification.tsx#L131)

___

### NotificationSkeleton

▸ **NotificationSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Notification/Skeleton.tsx:14](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Notification/Skeleton.tsx#L14)

___

### PeopleSuggestion

▸ **PeopleSuggestion**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`PeopleSuggestionProps`](interfaces/PeopleSuggestionProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/PeopleSuggestion/PeopleSuggestion.tsx:55](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/PeopleSuggestion/PeopleSuggestion.tsx#L55)

___

### PeopleSuggestionSkeleton

▸ **PeopleSuggestionSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/PeopleSuggestion/Skeleton.tsx:22](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/PeopleSuggestion/Skeleton.tsx#L22)

___

### Platform

▸ **Platform**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`PlatformProps`](interfaces/PlatformProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Platform/Platform.tsx:40](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Platform/Platform.tsx#L40)

___

### PlatformSkeleton

▸ **PlatformSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Platform/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Platform/Skeleton.tsx#L4)

___

### PrivateMessages

▸ **PrivateMessages**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`PrivateMessagesProps`](interfaces/PrivateMessagesProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/PrivateMessages/PrivateMessages.tsx:59](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/PrivateMessages/PrivateMessages.tsx#L59)

___

### PrivateMessagesSkeleton

▸ **PrivateMessagesSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/PrivateMessages/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/PrivateMessages/Skeleton.tsx#L4)

___

### RelatedDiscussion

▸ **RelatedDiscussion**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RelatedDiscussionProps`](interfaces/RelatedDiscussionProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/RelatedDiscussion/RelatedDiscussion.tsx:79](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/RelatedDiscussion/RelatedDiscussion.tsx#L79)

___

### RelatedDiscussionSkeleton

▸ **RelatedDiscussionSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/RelatedDiscussion/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/RelatedDiscussion/Skeleton.tsx#L4)

___

### ReplyComment

▸ **ReplyComment**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ReplyCommentObjectProps` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/CommentObject/ReplyComment/ReplyComment.tsx:127](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/CommentObject/ReplyComment/ReplyComment.tsx#L127)

___

### Skeleton

▸ **Skeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Category/Skeleton.tsx:24](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Category/Skeleton.tsx#L24)

___

### Snippets

▸ **Snippets**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SnippetsProps`](interfaces/SnippetsProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Snippets/Snippets.tsx:51](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Snippets/Snippets.tsx#L51)

___

### SnippetsSkeleton

▸ **SnippetsSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Snippets/Skeleton.tsx:22](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Snippets/Skeleton.tsx#L22)

___

### Thread

▸ **Thread**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ThreadProps`](interfaces/ThreadProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Thread/Thread.tsx:97](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Thread/Thread.tsx#L97)

___

### ThreadSkeleton

▸ **ThreadSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Thread/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/Thread/Skeleton.tsx#L4)

___

### TrendingFeed

▸ **TrendingFeed**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TrendingFeedProps`](interfaces/TrendingFeedProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/TrendingFeed/TrendingFeed.tsx:51](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/TrendingFeed/TrendingFeed.tsx#L51)

___

### TrendingFeedSkeleton

▸ **TrendingFeedSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/TrendingFeed/Skeleton.tsx:24](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/TrendingFeed/Skeleton.tsx#L24)

___

### TrendingPeople

▸ **TrendingPeople**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TrendingPeopleProps`](interfaces/TrendingPeopleProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/TrendingPeople/TrendingPeople.tsx:55](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/TrendingPeople/TrendingPeople.tsx#L55)

___

### TrendingPeopleSkeleton

▸ **TrendingPeopleSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/TrendingPeople/Skeleton.tsx:24](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/TrendingPeople/Skeleton.tsx#L24)

___

### User

▸ **User**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UserProps`](interfaces/UserProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/User/User.tsx:90](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/User.tsx#L90)

___

### UserFollowers

▸ **UserFollowers**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UserFollowersProps`](interfaces/UserFollowersProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UserFollowers/UserFollowers.tsx:53](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UserFollowers/UserFollowers.tsx#L53)

___

### UserFollowersSkeleton

▸ **UserFollowersSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UserFollowers/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UserFollowers/Skeleton.tsx#L4)

___

### UserProfileHeader

▸ **UserProfileHeader**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UserProfileHeaderProps`](interfaces/UserProfileHeaderProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UserProfileHeader/UserProfileHeader.tsx:102](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UserProfileHeader/UserProfileHeader.tsx#L102)

___

### UserProfileHeaderSkeleton

▸ **UserProfileHeaderSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UserProfileHeader/Skeleton.tsx:34](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UserProfileHeader/Skeleton.tsx#L34)

___

### UserSkeleton

▸ **UserSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/User/Skeleton.tsx:26](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/User/Skeleton.tsx#L26)

___

### UserToastNotifications

▸ **UserToastNotifications**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UserToastNotificationsProps`](interfaces/UserToastNotificationsProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UserToastNotifications/UserToastNotifications.tsx:69](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UserToastNotifications/UserToastNotifications.tsx#L69)

___

### UserToastNotificationsSkeleton

▸ **UserToastNotificationsSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UserToastNotifications/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UserToastNotifications/Skeleton.tsx#L4)

___

### UsersFollowed

▸ **UsersFollowed**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UsersFollowedProps`](interfaces/UsersFollowedProps) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UsersFollowed/UsersFollowed.tsx:53](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UsersFollowed/UsersFollowed.tsx#L53)

___

### UsersFollowedSkeleton

▸ **UsersFollowedSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/UsersFollowed/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-ui/src/components/UsersFollowed/Skeleton.tsx#L4)
