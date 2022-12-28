---
sidebar_label: Post
sidebar_position: 1
title: Post
---

```json
{
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
  "reaction": {},
  "follower_count": "integer",
  "followed": "boolean",
  "suspended": "boolean",
  "flag_count": "integer",
  "share_count": "integer",
  "slug": "string",
  "categories": [],
  "medias": [],
  "location": {},
  "addressing": [],
  "poll": {}
}

```

#### Properties

| Name             | Type                                                     | Required | Restrictions | Description                                                           |
|------------------|----------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------|
| id               | integer                                                  | false    | read-only    | A unique integer value identifying this post                          |
| type             | string                                                   | false    | read-only    | The post type                                                         |
| last_activity_at | string(date-time)                                        | false    | read-only    | Datetime of last activity                                             |
| author           | [User](/docs/apireference/v2/schemas/user)               | false    | read-only    | The post author                                                       |
| added_at         | string(date-time)                                        | false    | read-only    | Datetime of post creation                                             |
| last_edited_at   | string(date-time)                                        | false    | read-only    | Datetime of last post edit                                            |
| html             | string                                                   | false    | read-only    | Post html                                                             |
| summary          | string                                                   | false    | read-only    | The post summary                                                      |
| deleted          | boolean                                                  | false    | read-only    | If true, post has been deleted                                        |
| collapsed        | string                                                   | false    | read-only    | If true, post has been collapsed                                      |
| comment_count    | integer                                                  | false    | read-only    | The number of comments associated to this contribution                |
| view_count       | integer                                                  | false    | read-only    | The number of views associated to this contribution                   |
| vote_count       | integer                                                  | false    | read-only    | The number of votes/reactions associated to this contribution         |
| reactions_count  | list([Reaction](/docs/apireference/v2/schemas/reaction)) | false    | read-only    | Reactions associated to this contribution                             |
| voted            | boolean                                                  | false    | read-only    | If true, the logged user has already voted the post                   |
| reaction         | [Reaction](/docs/apireference/v2/schemas/reaction)       | false    | read-only    | Reaction of the logged user (if he voted this contribution)           |
| follower_count   | integer                                                  | false    | read-only    | The number of followers associated to this contribution               |
| followed         | boolean                                                  | false    | read-only    | If true, the logged user follows the post                             |
| suspended        | boolean                                                  | false    | read-only    | If true, the logged user has suspended the notifications for the post |
| flag_count       | integer                                                  | false    | read-only    | The number of flags associated to this contribution                   |
| share_count      | integer                                                  | false    | read-only    | The number of shares associated to this contribution                  |
| slug             | string                                                   | false    | read-only    | The slug associated to this contribution                              |
| categories       | list([Category](/docs/apireference/v2/schemas/category)) | true     | read-only    | The categories associated to this contribution                        |
| medias           | list([Media](/docs/apireference/v2/schemas/media))       | false    | read-only    | The medias associated to this contribution                            |
| location         | object¦null                                              | false    | read-only    | The location object associated to this contribution                   |
| » location       | string¦null                                              | true     | read-only    | Location name                                                         |
| » lat            | number¦null                                              | true     | read-only    | Location latitude                                                     |
| » lng            | number¦null                                              | true     | read-only    | Location longitude                                                    |
| addressing       | list(integer)                                            | false    | read-only    | List of [Tag](/docs/apireference/v2/schemas/tag) ids                  |
| poll             | [Poll](/docs/apireference/v2/schemas/poll)               | false    | read-only    | The post poll object                                                  |


