---
sidebar_label: Feed
sidebar_position: 1
title: Feed
---

## SCFeedUnitType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCFeedObjectTypologyType](#scfeedobjecttypologytype)|false|The type of the object, can be discussion, post or status|
|discussion|[SCFeedDiscussionType](#scfeeddiscussiontype)|false|Discussion object|
|post|[SCFeedPostType](#scfeedposttype)|false|Post object|
|status|[SCFeedStatusType](#scfeedstatustype)|false|Status object|
|seen_by_id|number[]|false|Id of User that have seen this object|
|has_boost|boolean|false|True if this object has the visibility boost|
|activities|[SCFeedUnitActivityType](#scfeedunitactivitytype)[]|false|List of feed activities. This field is returned only for relevance feed|






### SCFeedTypologyType

Typology of feed.

|Name|Value|
|---|---|
|HOME|'home'|
|EXPLORE|'explore'|


### SCFeedObjectTypologyType

Typology of feedObject.

|Name|Value|
|---|---|
|DISCUSSION|'discussion'|
|POST|'post'|
|STATUS|'status'|


### SCFeedUnitActivityTypologyType

Typology of feed activity.

|Name|Value|
|---|---|
|COMMENT|'comment'|
|VOTE|'vote'|
|POLLVOTE|'pollvote'|
|FOLLOW|'follow'|



## SCFeedUnitActivityType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SCFeedUnitActivityTypologyType](#scfeedunitactivitytypologytype)|false|The type of the activity|
|comment|any|false|The comment if type ==  SCFeedUnitActivityTypologyType.COMMENT|
|author|[SCUserType](../Types/user)|false|The user involved|
|active_at|Date|false|Time of activity|
|seen_by_id|number[]|false|Id of Users that have seen this activity|


## SCFeedObjectType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|The ID of the post|
|categories|[SCCategoryType](../Types/category)[]|false|List of categories|
|medias|[SCMediaType](../Types/media)[]|false|List of medias|
|location|[SCContributionLocation](../Types/location)|false|Location (contribution geolocation)|
|author|[SCUserType](../Types/user)|false|Author of the contribute|
|last_activity_at|Date|false|Last activity at|
|added_at|Date|false|Added at|
|slug|string|false|Slug|
|html|string|false|Html|
|summary|string|false|Summary|
|deleted|boolean|false|True if the object is deleted|
|collapsed|boolean|false|True if the object is hidden|
|comment_count|number|false|Number of comments|
|share_count|number|false|Number of internal share|
|followed|boolean|false|True if the logged user follow this object|
|vote_count|number|false|Number of votes|
|voted|boolean|false|True if the logged user has already voted this object|
|flag_count|number|false|Number of flags|
|addressing|[SCTagType](../Types/tag)[]|false|Tags adderssing|
|type|[SCFeedObjectTypologyType](#scfeedobjecttypologytype)|false|Type: discussion, post, status|
|suspended|boolean|false|Suspended notification|


## SCFeedDiscussionType

Extends [SCFeedObjectType](#scfeedobjecttype)

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|title|string|false|Title of the discussion|
|poll|[SCPollType](../Types/poll)|false|Poll|



## SCFeedPostType

Extends [SCFeedObjectType](#scfeedobjecttype)

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|poll|[SCPollType](../Types/poll)|false|Poll|


## SCFeedStatusType

Same as [SCFeedObjectType](#scfeedobjecttype)