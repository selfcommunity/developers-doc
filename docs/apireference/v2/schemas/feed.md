---
sidebar_label: Feed
sidebar_position: 1
title: Feed
---

```json
{
  "type": "string",
  "discussion": {
    "id": "integer",
    "type": "string",
    "last_activity_at": "string",
    "author": {},
    "added_at": "string",
    "last_edited_at": "string",
    "html": "string",
    "summary": "string",
    "deleted": "boolean",
    "collapsed": "boolean",
    "comment_count": "integer",
    "view_count": "integer",
    "vote_count": "integer",
    "reactions_count": [],
    "voted": "boolean",
    "follower_count": "integer",
    "followed": "boolean",
    "suspended": "boolean",
    "flag_count": "integer",
    "share_count": "integer",
    "slug": "string",
    "categories": [],
    "medias": [],
    "location": "string",
    "addressing": [],
    "tags": [],
    "poll": {},
    "title": "string"
  },
  "seen_by_id": [],
  "has_boost": "boolean"
}

```

#### Properties

|Name|Type|Required|Restrictions| Description                                                                 |
|---|---|---|---|-----------------------------------------------------------------------------|
|type|string|false|read-only| The type of the object, can be `discussion` , `post` or `status`            |
|discussion|[Discussion](/docs/apireference/v2/schemas/discussion)¦null|false|read-only| The discussion obj                                                          |
|post|[Post](/docs/apireference/v2/schemas/post)¦undefined|false|read-only| The post obj                                                                |
|status|[Status](/docs/apireference/v2/schemas/status)¦undefined|false|read-only| The status obj                                                              |
|seen_by_id|list(integer)¦undefined|false|read-only| Id of [User](/docs/apireference/v2/schemas/user) that have seen this object |
|has_boost|¦undefined|false|read-only| If true, this object has the visibility boost                               |
|activities|list([FeedActivity](/docs/apireference/v2/schemas/feed_activity))¦undefined|false|read-only| List of feed acitivity. This field is returned only for relevance feed      |



