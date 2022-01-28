---
sidebar_label: Notification
sidebar_position: 1
title: Notification
---



### SCNotificationTypologyType

|Name|Value|
|---|---|
|COMMENT|'comment'|
|NESTED_COMMENT|'nested_comment'|
|CONNECTION_REQUEST|'connection_request'|
|CONNECTION_ACCEPT|'connection_accept'|
|CONNECTION_REMOVE|'connection_remove'|
|MENTION|'mention'|
|VOTE_UP|'vote_up'|
|FOLLOW|'follow'|
|PRIVATE_MESSAGE|'private_message'|
|DELETED_FOR_ADVERTISING|'deleted_for_advertising'|
|DELETED_FOR_AGGRESSIVE|'deleted_for_aggressive'|
|DELETED_FOR_VULGAR|'deleted_for_vulgar'|
|DELETED_FOR_POOR|'deleted_for_poor'|
|DELETED_FOR_OFFTOPIC|'deleted_for_offtopic'|
|UNDELETED_FOR|'undeleted_for'|
|COLLAPSED_FOR_ADVERTISING|'collapsed_for_advertising'|
|COLLAPSED_FOR_AGGRESSIVE|'collapsed_for_aggressive'|
|COLLAPSED_FOR_VULGAR|'collapsed_for_vulgar'|
|COLLAPSED_FOR_POOR|'collapsed_for_poor'|
|COLLAPSED_FOR_OFFTOPIC|'collapsed_for_offtopic'|
|USER_FOLLOW|'user_follow'|
|USER_UNFOLLOW|'user_unfollow'|
|KINDLY_NOTICE_ADVERTISING|'kindly_notice_advertising'|
|KINDLY_NOTICE_AGGRESSIVE|'kindly_notice_aggressive'|
|KINDLY_NOTICE_VULGAR|'kindly_notice_vulgar'|
|KINDLY_NOTICE_POOR|'kindly_notice_poor'|
|KINDLY_NOTICE_OFFTOPIC|'kindly_notice_offtopic'|
|KINDLY_NOTICE_FLAG|'kindly_notice_flag'|
|BLOCKED_USER|'blocked_user'|
|UNBLOCKED_USER|'unblocked_user'|
|CUSTOM_NOTIFICATION|'custom_notification'|



### SCNotificationTopicType

Defines topic for notifications; useful for websocket.

|Name|Value|
|---|---|

|INTERACTION = 'interaction'|
|NEWS = 'news'|


## SCNotificationAggregatedType

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|sid|string|true|Serialization id of the macro notification aggregate block.|
|is_new|boolean|true|It's true if in the aggregated group there is at least one notification not yet seen by the user making the request|
|discussion|[SCFeedDiscussionType](../Types/feed/#scfeeddiscussiontype)|false|Primary object involved (object that is common to notifications group) if it is a discusssion. For some types of notifications it will not be present.|
|post|[SCFeedPostType](../Types/feed/#scfeedposttype)|false|Primary object involved (object that is common to notifications group) if it is a post. For some types of notifications it will not be present.|
|status|[SCFeedStatusType](../Types/feed/#scfeedstatustype)|false|Primary object involved (object that is common to notifications group) if it is a status. For some types of notifications it will not be present.|
|aggregated|[SCNotificationType](#scnotificationtype)[]|false|List of aggregated notifications by type. Types Object: [SCNotificationCommentType](#scnotificationcommenttype), [SCNotificationMentionType](#scnotificationmentiontype),[SCNotificationConnectionAcceptType](#scnotificationconnectionaccepttype), [SCNotificationConnectionRequestType](#scnotificationconnectionrequesttype),[SCNotificationFollowType](#scnotificationfollowtype), [SCNotificationVoteUpType](#scnotificationvoteuptype), [SCNotificationBlockedUserType](#scnotificationblockedusertype), [SCNotificationUnBlockedUserType](#scnotificationunblockedusertype), [SCNotificationKindlyNoticeType](#scnotificationkindlynoticetype), [SCNotificationCollapsedForType](#scnotificationcollapsedfortype), [SCNotificationDeletedForType](#scnotificationdeletedfortype), [SCNotificationCustomNotificationType](#scnotificationcustomnotificationtype)|


## SCNotificationType

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|is_new|boolean|True if the notification has been read, otherwise false|
|sid|string|Serialization id of the single notification|
|type|[SCNotificationTypologyType](#scnotificationtypologytype)|Type of the notification|
|active_at|Date|Time when the notification was generated|


## SCNotificationCommentType

Comment Notification Schema. Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|comment|[SCCommentType](../Types/comment)|false|Comment of first/second level|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).COMMENT/[SCNotificationTypologyType](#scnotificationtypologytype).NESTED_COMMENT|false|Type Comment or Nested_comment|


##  SCNotificationMentionType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).MENTION|true|Type "mention"|
|discussion|[SCFeedDiscussionType](../Types/feed/#scfeeddiscussiontype)|false|If user is mentioned in a discussion|
|post|[SCFeedPostType](../Types/feed/#scfeedposttype)|false|If the user is mentioned in a post|
|status|[SCFeedStatusType](../Types/feed/#scfeedstatustype)|false|if user is mentioned in a status|
|comment|[SCCommentType](../Types/comment)|false|read-only|if user is mentioned in a comment|



##  SCNotificationConnectionRequestType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).CONNECTION_REQUEST|true|Type "connection request"|
|request_user|[SCUserType](../Types/user)|true|User who requested the connection|



##  SCNotificationConnectionAcceptType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).CONNECTION_ACCEPT|true|Type "connection accept"|
|accept_user|[SCUserType](../Types/user)|true|User who accepted the connection|



##  SCNotificationPrivateMessageType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).PRIVATE_MESSAGE|true|Type "private_message"|
|message|[SCPrivateMessageType](../Types/private_message)|true|Message received|


##  SCNotificationFollowType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).FOLLOW|false|Type "follow"|
|discussion|[SCFeedDiscussionType](../Types/feed/#scfeeddiscussiontype)|false|If user is mentioned in a discussion|
|post|[SCFeedPostType](../Types/feed/#scfeedposttype)|false|If the user is mentioned in a post|
|status|[SCFeedStatusType](../Types/feed/#scfeedstatustype)|false|if user is mentioned in a status|


##  SCNotificationVoteUpType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).VOTE_UP|false|Type "vote_up"|
|discussion|[SCFeedDiscussionType](../Types/feed/#scfeeddiscussiontype)|false|If user is mentioned in a discussion|
|post|[SCFeedPostType](../Types/feed/#scfeedposttype)|false|If the user is mentioned in a post|
|status|[SCFeedStatusType](../Types/feed/#scfeedstatustype)|false|if user is mentioned in a status|
|user|[SCUserType](../Types/user)|true|User who voted up|



##  SCNotificationBlockedUserType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).BLOCKED_USER|false|Type "blocked_user"|
|blocked_settings|[SCUserBlockedSettingsType](../Types/user/#scuserblockedsettings)|false|Data of user blocked|



##  SCNotificationUnBlockedUserType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).UNBLOCKED_USER|false|Type "unblocked_user"|



##  SCNotificationKindlyNoticeType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).KINDLY_NOTICE_ADVERTISING, KINDLY_NOTICE_FLAG, KINDLY_NOTICE_VULGAR,KINDLY_NOTICE_AGGRESSIVE, KINDLY_NOTICE_POOR, KINDLY_NOTICE_OFFTOPIC|false|Types as described|
|discussion|[SCFeedDiscussionType](../Types/feed/#scfeeddiscussiontype)|false|If the contribute is a discussion|
|post|[SCFeedPostType](../Types/feed/#scfeedposttype)|false|If the contribute is a post|
|status|[SCFeedStatusType](../Types/feed/#scfeedstatustype)|false|If the contribute is a status|
|comment|[SCCommentType](../Types/comment)|false|If the contribute is a comment|


##  SCNotificationKindlyNoticeType

Only for comments.Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).COLLAPSED_FOR_ADVERTISING, COLLAPSED_FOR_AGGRESSIVE, COLLAPSED_FOR_POOR,COLLAPSED_FOR_OFFTOPIC, COLLAPSED_FOR_VULGAR|false|Types as described|
|comment|[SCCommentType](../Types/comment)|false|comment collapsed|



##  SCNotificationDeletedForType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).DELETED_FOR_ADVERTISING, DELETED_FOR_AGGRESSIVE, DELETED_FOR_VULGAR,DELETED_FOR_POOR, DELETED_FOR_OFFTOPIC|false|Types deleted for|
|discussion|[SCFeedDiscussionType](../Types/feed/#scfeeddiscussiontype)|false|If a discussion is deleted|
|post|[SCFeedPostType](../Types/feed/#scfeedposttype)|false|If a post is deleted|
|status|[SCFeedStatusType](../Types/feed/#scfeedstatustype)|false|If a status is deleted|
|comment|[SCCommentType](../Types/comment)|false|If a comment is deleted|



##  SCNotificationUnDeletedForType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).UNDELETED_FOR|false|Type undeleted for|
|discussion|[SCFeedDiscussionType](../Types/feed/#scfeeddiscussiontype)|false|If a discussion is undeleted|
|post|[SCFeedPostType](../Types/feed/#scfeedposttype)|false|If a post is undeleted|
|status|[SCFeedStatusType](../Types/feed/#scfeedstatustype)|false|If a status is undeleted|
|comment|[SCCommentType](../Types/comment)|false|If a comment is undeleted|



##  SCNotificationUserFollowType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).USER_FOLLOW|true|Type "user follow"|
|follower|[SCUserType](../Types/user)|true|Follower|


##  SCNotificationCustomNotificationType

Extends [SCNotificationType](#scnotificationtype)

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCNotificationTypologyType](#scnotificationtypologytype).CUSTOM_NOTIFICATION|true|Type "custom notification"|
|user|[SCUserType](../Types/user)|true|User who generated the custom notification|
|custom_notification|[SCCustomNotificationType](../Types/custom_notification)|false|Custom notification data|