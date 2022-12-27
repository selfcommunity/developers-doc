---
sidebar_label: User Settings
sidebar_position: 1
title: User Settings
---

```json
{
  "qa_frequency": "integer",
  "email_notification_not_qa": "integer",
  "mobile_notifications_scmty": "integer",
  "toast_notifications_emit_sound": "integer",
  "show_toast_notifications": "integer"
}

```

#### Properties

| Name                           | Type        | Required | Restrictions | Description                                                                                           |
|--------------------------------|-------------|----------|--------------|-------------------------------------------------------------------------------------------------------|
| qa_frequency                   | [integer](/docs/apireference/v2/schemas/user_settings#enumerated-values) | false    | none         | Frequency of the email notifications for all interactions (except for private messages notifications) |
| email_notification_not_qa      | [integer](/docs/apireference/v2/schemas/user_settings#enumerated-values)     | false    | none         | Enable private messages notifications also via mail                                                   |
| mobile_notifications_scmty     | [integer](/docs/apireference/v2/schemas/user_settings#enumerated-values)     | false    | none         | Enable mobile app notifications                                                                       |
| show_toast_notifications       | [integer](/docs/apireference/v2/schemas/user_settings#enumerated-values)     | false    | none         | Shows a popup when the user receive a notification (only if the frontend is enabled)                  |
| toast_notifications_emit_sound | [integer](/docs/apireference/v2/schemas/user_settings#enumerated-values)     | false    | none         | Emit a sound when the notification popup is shown. See 'show_toast_notifications'                     |


#### Enumerated Values

| Property                       | Value | Description                                                                                                           |
|--------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| qa_frequency                   | -1    | Send email immediately                                                                                                |
| qa_frequency                   | 1     | Send email daily                                                                                                      |
| qa_frequency                   | 0     | Never send email                                                                                                      |
| email_notification_not_qa      | 1     | Notify also via email                                                                                                 |
| email_notification_not_qa      | 0     | Notify only frontend side                                                                                             |
| mobile_notifications_scmty     | 1     | Notify also via mobile push notification (FCM, APNS). Available only if there is an app associated with the community |
| mobile_notifications_scmty     | 0     | Never send push notification                                                                                          |
| show_toast_notifications       | 1     | Show popup (frontend - not on the notifications page)                                                                 |
| show_toast_notifications       | 0     | Hide popup (frontend)                                                                                                 |
| toast_notifications_emit_sound | 1     | Emit sound with the popup notification (frontend)                                                                     |
| toast_notifications_emit_sound | 0     | Don't emit sound                                                                                                      |
