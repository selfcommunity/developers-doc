---
sidebar_label: User
sidebar_position: 1
title: User
---


## SCUserType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|The ID of the user.|
|username|string|false|The username of the user|
|real_name|string|false|Real name of the user|
|email|string|false|Email of the user.|
|email_isvalid|boolean|false|Email is valid. Default: False.|
|date_joined|Date|false|Date joined to the community.|
|bio|string|false|none|User biography|
|location|string|false|User location|
|location_lat_lng|string|false|Location in coordinates.Format: lat,lng|
|position_lat_lng|string|false|User current position. Format: lat,lng|
|date_of_birth|Date|false|Date of birth. Format: YYYY-MM-DD (ISO 8601)|
|description|string|false|User description|
|gender|string|false|User gender. Values: Male, Female, Unspecified. Default: Unspecified.|
|status|string|false|User status. Values: a (approved), b (blocked), d (deleted; soft deleted), u (unregistered; hard deleted). Default: a|
|website|string|false|User website|
|avatar|string|false|Avatar of the user|
|cover|string|false|Image cover of the user|
|ext_id|number|false|The external ID of the user. It is assigned only during signup if necessary|
|tags|Array<[SCTagType](../Types/tag)>|false|User's tag list|
|reputation|number|false|User reputation|
|permission|Array`<`string`>`|false|List of user permission. Only for the resource /user/me/|
|connection_status|string|false|The connection status between the request user and this user|
|connection_requests_sent_counter|number|false|Number of connection requests sent by the user|
|connection_requests_received_counter|number|false|Number of connection requests received by the user|
|connections_counter|number|false|Number of connections of the user|
|followings_counter|number|false|Number of followings of the user|
|followers_counter|number|false|Number of followers of the user|
|posts_counter|number|false|Number of posts created by the user|
|discussions_counter|number|false|Number of discussions created by the user|
|statuses_counter|number|false|Number of statuses created by the user|
|polls_counter|number|false|Number of polls created by the user|
|role|string[]|false|User role|


## SCUserBlockedSettingsType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|days_blocked|number|false|N° days of block|
|reputation_delta|number|false|Reputation stolen|
|blocked_at|Date|false|Start User Block datetime|
|expire_at|Date|false|End User Block datetime|