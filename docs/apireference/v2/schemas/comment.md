---
sidebar_label: Comment
sidebar_position: 1
title: Comment
---

```json
{
  "id": "integer",
  "author": {},
  "added_at": "string",
  "last_edited_at": "string",
  "html": "string",
  "summary": "string",
  "deleted": "boolean",
  "collapsed": "boolean",
  "parent": "integer",
  "in_reply_to": "integer",
  "comment_count": "integer",
  "vote_count": "integer",
  "reactions_count": [],
  "flag_count": "integer",
  "post": {
    "id": "integer",
    "slug": "string"
  },
  "latest_comments": [],
  "type": "string",
  "voted": "boolean",
  "reaction": {}
}

```

#### Properties

| Name            | Type                                                                  | Required | Restrictions | Description                                                                                                   |
|-----------------|-----------------------------------------------------------------------|----------|--------------|---------------------------------------------------------------------------------------------------------------|
| id              | integer                                                               | false    | read-only    | The comment id                                                                                                |
| author          | [User](/docs/apireference/v2/schemas/user)                            | true     | read-only    | The comment author                                                                                            |
| added_at        | string(date-time)                                                     | false    | read-only    | Datetime of creation                                                                                          |
| last_edited_at  | string(date-time)                                                     | false    | read-only    | Datetime of last edit                                                                                         |
| html            | string                                                                | false    | read-only    | The html description                                                                                          |
| summary         | string                                                                | false    | read-only    | The comment summary                                                                                           |
| deleted         | boolean                                                               | false    | read-only    | Is this comment deleted                                                                                       |
| collapsed       | boolean                                                               | false    | read-only    | Is this comment collapsed                                                                                     |
| parent          | integer¦null                                                          | false    | none         | Id of the parent [Comment](/docs/apireference/v2/schemas/comment)                                             |
| in_reply_to     | integer¦null                                                          | false    | none         | Id of the reply [Comment](/docs/apireference/v2/schemas/comment), it must have the same `parent` and `object` |
| comment_count   | integer                                                               | false    | read-only    | The number of comments                                                                                        |
| vote_count      | integer                                                               | false    | read-only    | Number of votes/reactions associated to this contribution                                                     |
| reactions_count | list([Reaction](/docs/apireference/v2/schemas/reaction))              | false    | read-only    | Reactions associated to this contribution                                                                     |
| flag_count      | integer                                                               | false    | read-only    | The number of flags                                                                                           |
| discussion      | dictionary                                                            | false    | none         | Id and slug of the [Discussion](/docs/apireference/v2/schemas/discussion)                                     |
| post            | integer¦null                                                          | false    | none         | Id of the [Post](/docs/apireference/v2/schemas/post)                                                          |
| status          | integer¦null                                                          | false    | none         | Id of the [Status](/docs/apireference/v2/schemas/status)                                                      |
| latest_comments | list([CommentSummary](/docs/apireference/v2/schemas/comment_summary)) | false    | read-only    | The list of last comments                                                                                     |
| type            | string                                                                | true     | write-only   | The type of comment                                                                                           |
| voted           | boolean                                                               | false    | read-only    | True if the logged user has already voted this contribution                                                   |
| reaction        | [Reaction](/docs/apireference/v2/schemas/reaction)                    | false    | read-only    | Reaction of the logged user (if he voted this contribution)                                                   |


        
                                                                                                      


