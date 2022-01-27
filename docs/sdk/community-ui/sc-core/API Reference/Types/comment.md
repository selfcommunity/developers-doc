---
sidebar_label: Comment
sidebar_position: 1
title: Comment
---



### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false| The ID of the comment|
|discussion|number|false|Id of the Discussion object|
|post|number|false|Id of the Post object|
|status|number|false|Id of the Status object|
|author|[SCUserType](../Types/user)|true|User who commented|
|added_at|Date|false|comment added at|
|html|string|false|Html of the comment|
|summary|string|false|Summary|
|deleted|boolean|false|If the comments is deleted|
|collapsed|boolean|false|If the comments is hidden|
|parent|number|false|Id of the parent|
|in_reply_to|number|false|Id of the reply Comment, it must have the same parent|
|vote_count|number|false|The number of votes|
|voted|boolean|false|True if the logged user has already voted the comment|
|flag_count|number|false|The number of flags|
|comment_count|number|false|The number of comments|
|text|string|true|Text of the comment|
|latest_comments|[SCCommentType](../Types/comment)|Comments childs|