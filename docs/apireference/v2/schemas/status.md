---
sidebar_label: Status
sidebar_position: 1
title: Status
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
  "addressing": []
}

```

#### Properties

| Name             | Type                                                     | Required | Restrictions | Description                                                            |
|------------------|----------------------------------------------------------|----------|--------------|------------------------------------------------------------------------|
| id               | integer                                                  | false    | read-only    | none                                                                   |
| type             | string                                                   | false    | read-only    | none                                                                   |
| action           | string                                                   | true     | none         | none                                                                   |
| categories       | list([Category](/docs/apireference/v2/schemas/category)) | true     | none         | none                                                                   |
| medias           | list([Media](/docs/apireference/v2/schemas/media))       | false    | none         | none                                                                   |
| location         | object¦null                                              | false    | none         | none                                                                   |
| » location       | string¦null                                              | true     | none         | none                                                                   |
| » lat            | number¦null                                              | true     | none         | none                                                                   |
| » lng            | number¦null                                              | true     | none         | none                                                                   |
| last_activity_at | string(date-time)                                        | false    | read-only    | none                                                                   |
| author           | [User](/docs/apireference/v2/schemas/user)               | false    | read-only    | none                                                                   |
| added_at         | string(date-time)                                        | false    | read-only    | none                                                                   |
| html             | string                                                   | false    | read-only    | none                                                                   |
| summary          | string                                                   | false    | read-only    | none                                                                   |
| deleted          | boolean                                                  | false    | read-only    | none                                                                   |
| collapsed        | string                                                   | false    | read-only    | none                                                                   |
| comment_count    | integer                                                  | false    | read-only    | none                                                                   |
| share_count      | integer                                                  | false    | read-only    | none                                                                   |
| vote_count       | integer                                                  | false    | read-only    | Number of votes/reactions associated to this contribution              |
| reactions_count  | list([Reaction](/docs/apireference/v2/schemas/reaction)) | false    | read-only    | Reactions associated to this contribution                              |
| voted            | boolean                                                  | false    | read-only    | true if the logged user has already voted this contribution            |
| reaction         | [Reaction](/docs/apireference/v2/schemas/reaction)       | false    | read-only    | Reaction of the logged user (if he voted this contribution)            |
| followed         | boolean                                                  | false    | read-only    | true if the logged user follows the status                             |
| suspended        | boolean                                                  | false    | read-only    | true if the logged user has suspended the notifications for the status |
| flag_count       | integer                                                  | false    | read-only    | none                                                                   |
| addressing       | [integer]                                                | false    | none         | none                                                                   |

