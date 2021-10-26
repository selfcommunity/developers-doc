---
sidebar_label: Notification
sidebar_position: 1
title: Notification
---

```json
{
   "is_new": false,
   "sid": "1605259249000",
   "discussion": {...},
   "post": {...},
   "status": {...},
   "aggregated": [
        {
          "is_new": false,
          "type": "connection_accept",
          "sid": 16037238513640000000074020,
          "active_at": "2020-10-26T15:50:51.364336+01:00",
          "accept_user": {}
        }
   ]
}
```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|True if there is in aggregate list at least one notification not yet read by the user, otherwise false.|
|sid|string|true|read-only|Serialization id of the macro notification aggregate block.|
|discussion|[Discussion](../schemas/discussion)|false|read-only|Primary object involved (object that is common to notifications group) if it is a discusssion. For some types of notifications it will not be present.|
|post|[Post](../schemas/post)|false|read-only|Primary object involved (object that is common to notifications group) if it is a post. For some types of notifications it will not be present.|
|status|[Status](../schemas/status)|false|read-only|Primary object involved (object that is common to notifications group) if it is a status. For some types of notifications it will not be present.|
|aggregated|list(Object)|false|read-only|List of aggregated notifications by type. Types Object: [NotificationTypeComment](../schemas/NotificationTypes/type_comment), [NotificationTypeMention](../schemas/NotificationTypes/type_mention), [NotificationTypeConnectionAccept](../schemas/NotificationTypes/type_connection_accept), [NotificationTypeConnectionRequest](../schemas/NotificationTypes/type_connection_request), [NotificationTypePrivateMessage](../schemas/private_message), [NotificationTypeFollow](../schemas/NotificationTypes/type_follow), [NotificationTypeVoteUp](../schemas/NotificationTypes/type_voteup), [NotificationTypeBlockedUser](../schemas/NotificationTypes/type_blocked_user), [NotificationTypeUnBlockedUser](../schemas/NotificationTypes/type_unblocked_user), [NotificationTypeKindlyNotice](../schemas/NotificationTypes/type_kindly_notice), [NotificationTypeCollapsedFor](../schemas/NotificationTypes/type_collapsed_for), [NotificationTypeDeletedFor](../schemas/NotificationTypes/type_deleted_for), [NotificationTypeCustomNotification](../schemas/NotificationTypes/type_custom_notification) |
