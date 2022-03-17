---
id: "SnippetNotifications"
title: "Module: SnippetNotifications"
sidebar_label: "SnippetNotifications"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [SnippetNotificationsProps](../interfaces/SnippetNotifications.SnippetNotificationsProps.md)

## Functions

### SnippetNotifications

▸ **SnippetNotifications**(`props`): `JSX.Element`

> API documentation for the Community-UI SnippetNotifications component. Learn about the available props and the CSS API.

#### Import

```jsx
import {SnippetNotifications} from '@selfcommunity/ui';
```

#### Component Name

The name `SCSnippetNotifications` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCSnippetNotification-root|Styles applied to the root element.|
|notificationsWrap|.SCSnippetNotification-notification-wrap|Styles applied to the notifications wrap.|
|emptyBoxNotifications|.SCSnippetNotification-empty-box-notifications|Styles applied to the box indicating that there are no notifications.|
|notificationsList|.SCSnippetNotification-notifications-list|Styles applied to the list of notifications.|
|notificationItem|.SCSnippetNotification-notification-item|Styles applied to the single notification.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SnippetNotificationsProps`](../interfaces/SnippetNotifications.SnippetNotificationsProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx:135](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/SnippetNotifications/SnippetNotifications.tsx#L135)

___

### SnippetNotificationsSkeleton

▸ **SnippetNotificationsSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/SnippetNotifications/Skeleton.tsx:19](https://github.com/selfcommunity/community-ui/blob/e8a635a/packages/sc-ui/src/components/SnippetNotifications/Skeleton.tsx#L19)
