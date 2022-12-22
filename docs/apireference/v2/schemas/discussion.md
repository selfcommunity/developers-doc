---
sidebar_label: Discussion
sidebar_position: 1
title: Discussion
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
  "location": "string",
  "addressing": [],
  "poll": {},
  "title": "string"
}

```

#### Properties

| Name               | Type                                                     | Required | Restrictions | Description                                                                |
|--------------------|----------------------------------------------------------|----------|--------------|----------------------------------------------------------------------------|
| id                 | integer                                                  | false    | read-only    | none                                                                       |
| type               | string                                                   | false    | read-only    | none                                                                       |
| title              | string                                                   | true     | none         | none                                                                       |
| slug               | string                                                   | false    | read-only    | none                                                                       |
| categories         | list([Category](/docs/apireference/v2/schemas/category)) | true     | none         | At least one category is required                                          |
| medias             | list([Media](/docs/apireference/v2/schemas/media))       | false    | none         | none                                                                       |
| location           | object¦null                                              | false    | none         | none                                                                       |
| » location         | string¦null                                              | true     | none         | none                                                                       |
| » lat              | number¦null                                              | true     | none         | none                                                                       |
| » lng              | number¦null                                              | true     | none         | none                                                                       |
| poll               | object¦null                                              | false    | none         | none                                                                       |
| » id               | integer                                                  | false    | read-only    | none                                                                       |
| » title            | string                                                   | true     | none         | none                                                                       |
| » multiple_choices | boolean                                                  | false    | none         | none                                                                       |
| » added_at         | string(date-time)                                        | false    | read-only    | none                                                                       |
| » modified_at      | string(date-time)                                        | false    | read-only    | none                                                                       |
| » closed           | boolean                                                  | false    | none         | none                                                                       |
| » expiration_at    | string(date-time)                                        | false    | none         | none                                                                       |
| » hidden           | string                                                   | false    | read-only    | none                                                                       |
| » choices          | list(object)                                             | true     | none         | none                                                                       |
| »» id              | integer                                                  | false    | read-only    | none                                                                       |
| »» choice          | string                                                   | true     | none         | none                                                                       |
| »» order           | integer                                                  | false    | read-only    | none                                                                       |
| »» added_at        | string(date-time)                                        | false    | read-only    | none                                                                       |
| »» deleted         | string                                                   | false    | read-only    | none                                                                       |
| »» vote_count      | integer                                                  | false    | read-only    | none                                                                       |
| »» voted           | boolean                                                  | false    | read-only    | true if the logged user has already voted the choice                       |
| last_activity_at   | string(date-time)                                        | false    | read-only    | none                                                                       |
| view_count         | integer                                                  | false    | read-only    | none                                                                       |
| author             | [User](/docs/apireference/v2/schemas/user)               | false    | read-only    | none                                                                       |
| added_at           | string(date-time)                                        | false    | read-only    | none                                                                       |
| html               | string                                                   | false    | read-only    | none                                                                       |
| summary            | string                                                   | false    | read-only    | none                                                                       |
| deleted            | boolean                                                  | false    | read-only    | none                                                                       |
| collapsed          | string                                                   | false    | read-only    | none                                                                       |
| comment_count      | integer                                                  | false    | read-only    | none                                                                       |
| share_count        | integer                                                  | false    | read-only    | none                                                                       |
| vote_count         | integer                                                  | false    | read-only    | Number of votes/reactions associated to this contribution                  |
| reactions_count    | list([Reaction](/docs/apireference/v2/schemas/reaction)) | false    | read-only    | Reactions associated to this contribution                                  |
| voted              | boolean                                                  | false    | read-only    | true if the logged user has already voted this contribution                |
| reaction           | [Reaction](/docs/apireference/v2/schemas/reaction)       | false    | read-only    | Reaction of the logged user (if he voted this contribution)                |
| followed           | boolean                                                  | false    | read-only    | true if the logged user follows the discussion                             |
| suspended          | boolean                                                  | false    | read-only    | true if the logged user has suspended the notifications for the discussion |
| flag_count         | integer                                                  | false    | read-only    | none                                                                       |
| addressing         | [integer]                                                | false    | none         | none                                                                       |
| follower_count     | string                                                   | false    | read-only    | none                                                                       |

