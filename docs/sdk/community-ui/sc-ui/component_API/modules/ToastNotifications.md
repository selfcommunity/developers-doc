---
id: "ToastNotifications"
title: "Module: ToastNotifications"
sidebar_label: "ToastNotifications"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [ToastNotificationsProps](../interfaces/ToastNotifications.ToastNotificationsProps.md)

## Functions

### ToastNotificationsSkeleton

▸ **ToastNotificationsSkeleton**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/ToastNotifications/Skeleton.tsx:4](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/ToastNotifications/Skeleton.tsx#L4)

___

### UserToastNotifications

▸ **UserToastNotifications**(`props`): `JSX.Element`

> API documentation for the Community-UI Toast Notifications component. Learn about the available props and the CSS API.

#### Import

```jsx
import {ToastNotifications} from '@selfcommunity/ui';
```

#### Component Name

The name `SCToastNotifications` can be used when providing style overrides in the theme.

#### CSS

|Rule Name|Global class|Description|
|---|---|---|
|root|.SCUserNotifications-root|Styles applied to the root element.|
|toastMessage|.SCUserToastNotifications-toast-message|Styles applied to the toast message element.|
|toastContent|.SCUserToastNotifications-toast-content|Styles applied to the toast content element.|
|toastActions|.SCUserToastNotifications-toast-actions|Styles applied to the toast actions section.|

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ToastNotificationsProps`](../interfaces/ToastNotifications.ToastNotificationsProps.md) |

#### Returns

`JSX.Element`

#### Defined in

[packages/sc-ui/src/components/ToastNotifications/ToastNotifications.tsx:82](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-ui/src/components/ToastNotifications/ToastNotifications.tsx#L82)
