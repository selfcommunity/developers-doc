---
id: "NotificationFeed.NotificationFeedProps"
title: "Interface: NotificationFeedProps"
sidebar_label: "NotificationFeedProps"
custom_edit_url: null
---

[NotificationFeed](../modules/NotificationFeed).NotificationFeedProps

## Properties

### FeedSidebarProps

• `Optional` **FeedSidebarProps**: `FeedSidebarProps`

Props to spread to single feed object

**`default`** {top: 0, bottomBoundary: `#${id}`}

#### Defined in

[NotificationFeed/NotificationFeed.tsx:60](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/NotificationFeed/NotificationFeed.tsx#L60)

___

### NotificationProps

• `Optional` **NotificationProps**: `NotificationProps`

Props to spread to single feed object

**`default`** empty object

#### Defined in

[NotificationFeed/NotificationFeed.tsx:54](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/NotificationFeed/NotificationFeed.tsx#L54)

___

### className

• `Optional` **className**: `string`

Overrides or extends the styles applied to the component.

**`default`** null

#### Defined in

[NotificationFeed/NotificationFeed.tsx:42](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/NotificationFeed/NotificationFeed.tsx#L42)

___

### id

• `Optional` **id**: `string`

Id of the feed object

**`default`** 'notification_feed'

#### Defined in

[NotificationFeed/NotificationFeed.tsx:36](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/NotificationFeed/NotificationFeed.tsx#L36)

___

### widgets

• `Optional` **widgets**: `SCFeedWidgetType`[]

Widgets to be rendered into the feed

**`default`** [CategoriesFollowed, UserFollowed]

#### Defined in

[NotificationFeed/NotificationFeed.tsx:48](https://github.com/selfcommunity/community-ui/blob/80e4c04/packages/sc-templates/src/components/NotificationFeed/NotificationFeed.tsx#L48)
