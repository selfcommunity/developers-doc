---
sidebar_label: Comment Summary
sidebar_position: 1
title: Comment Summary
---

```json
{
  "id": "integer",
  "discussion": "integer",
  "author": {},
  "added_at": "string",
  "html": "string",
  "summary": "string",
  "deleted": "boolean",
  "collapsed": "boolean",
  "parent": "integer",
  "in_reply_to": "integer",
  "comments_count": "integer",
  "vote_count": 4,
  "reactions_count": [],
  "voted": "boolean",
  "reaction": {},
  "flag_count": "integer",
  "comment_count": "integer"
}

```

#### Properties

| Name            | Type                                                     | Required | Restrictions | Description                                                                                                   |
|-----------------|----------------------------------------------------------|----------|--------------|---------------------------------------------------------------------------------------------------------------|
| id              | integer                                                  | false    | read-only    | A unique integer value identifying this  object                                                               |
| discussion      | integer¦null                                             | false    | none         | Id of the [Discussion](/docs/apireference/v2/schemas/discussion)                                              |
| post            | integer¦null                                             | false    | none         | Id of the [Post](/docs/apireference/v2/schemas/post)                                                          |
| status          | integer¦null                                             | false    | none         | Id of the [Status](/docs/apireference/v2/schemas/status)                                                      |
| author          | [User](/docs/apireference/v2/schemas/user)               | true     | read-only    | The user object                                                                                               |
| added_at        | string(date-time)                                        | false    | read-only    | The creation datetime                                                                                         |
| html            | string                                                   | false    | read-only    | Html                                                                                                          |
| summary         | string                                                   | false    | read-only    | Comment summary                                                                                               |
| deleted         | boolean                                                  | false    | read-only    | Is this comment deleted                                                                                       |
| collapsed       | boolean                                                  | false    | read-only    | Is this comment collapsed                                                                                     |
| parent          | integer¦null                                             | false    | none         | Id of the parent [Comment](/docs/apireference/v2/schemas/comment)                                             |
| in_reply_to     | integer¦null                                             | false    | none         | Id of the reply [Comment](/docs/apireference/v2/schemas/comment), it must have the same `parent` and `object` |
| vote_count      | integer                                                  | false    | read-only    | Number of votes/reactions associated to this contribution                                                     |
| reactions_count | list([Reaction](/docs/apireference/v2/schemas/reaction)) | false    | read-only    | Reactions associated to this contribution                                                                     |
| voted           | boolean                                                  | false    | read-only    | If true, the logged user has already voted this contribution                                                  |
| reaction        | [Reaction](/docs/apireference/v2/schemas/reaction)       | false    | read-only    | Reaction of the logged user (if he voted this contribution)                                                   |
| flag_count      | integer                                                  | false    | read-only    | The number of flags                                                                                           |
| comment_count   | integer                                                  | false    | read-only    | The number of comments                                                                                        |
