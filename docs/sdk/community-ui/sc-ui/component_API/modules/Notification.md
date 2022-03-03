---
id: "Notification"
title: "Module: Notification"
sidebar_label: "Notification"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [NotificationProps](../interfaces/Notification.NotificationProps.md)

## Functions

### NotificationSkeleton

▸ **NotificationSkeleton**(`props`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Notification/Skeleton.tsx:18](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/Notification/Skeleton.tsx#L18)

___

### UserNotification

▸ **UserNotification**(`props`): `JSX.Element`

> API documentation for the Community-UI UserNotification component. Learn about the available props and the CSS API.

#### Import

```jsx
import {UserNotification} from '@selfcommunity/ui';
```

#### Component Name

The name `SCUserNotification` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUserNotification-root|Styles applied to the root element.|
|notificationWrap|.SCUserNotification-notification-wrap|Styles applied to the element wrap.|
|notificationHeader|.SCUserNotification-notification-wrap|Styles applied to the notification header.|
|notificationUnCollapsed|.SCUserNotification-notification-wrap|Styles applied to the uncollapsed elements.|
|notificationUnCollapsed|.SCUserNotification-notification-wrap|Styles applied to the collapsed elements.|
|title|.SCUserNotification-title|Styles applied to the title element.|
|stopNotificationButton|.SCUserNotification-stop-notification-button|Styles applied to the stop notification button.|
|showOtherAggregated|.SCUserNotification-show-other-aggregated|Styles applied to the show other aggregated element.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NotificationProps`](../interfaces/Notification.NotificationProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/Notification/Notification.tsx:170](https://github.com/selfcommunity/community-ui/blob/f8d581a/packages/sc-ui/src/components/Notification/Notification.tsx#L170)
