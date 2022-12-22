---
sidebar_label: Search Discussion
sidebar_position: 1
title: Search Discussion
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
  "title": "string",
  "matches": [
    {
      "object": {
        "id": "integer",
        "type": "string",
        "added_at": "string",
        "html": "string"
      },
      "author": {}
    }
  ]
}

```

#### Properties

| Name             | Type                                                            | Required | Restrictions | Description                                              |
|------------------|-----------------------------------------------------------------|----------|--------------|----------------------------------------------------------|
| id               | integer                                                         | false    | read-only    | none                                                     |
| title            | string                                                          | true     | none         | none                                                     |
| slug             | string                                                          | false    | read-only    | none                                                     |
| text             | string                                                          | true     | write-only   | none                                                     |
| categories       | list([Category](/docs/apireference/v2/schemas/category))        | true     | none         | none                                                     |
| medias           | list([Media](/docs/apireference/v2/schemas/media))              | false    | none         | none                                                     |
| location         | object¦null                                                     | false    | none         | none                                                     |
| » location       | string¦null                                                     | true     | none         | none                                                     |
| » lat            | number¦null                                                     | true     | none         | none                                                     |
| » lng            | number¦null                                                     | true     | none         | none                                                     |
| poll             | [Poll](/docs/apireference/v2/schemas/poll)                      | false    | none         | The discussion poll object                               |
| last_activity_at | string(date-time)                                               | false    | read-only    | none                                                     |
| view_count       | integer                                                         | false    | read-only    | none                                                     |
| author           | [User](/docs/apireference/v2/schemas/user)                      | false    | read-only    | none                                                     |
| added_at         | string(date-time)                                               | false    | read-only    | none                                                     |
| html             | string                                                          | false    | read-only    | none                                                     |
| summary          | string                                                          | false    | read-only    | none                                                     |
| deleted          | boolean                                                         | false    | read-only    | none                                                     |
| collapsed        | string                                                          | false    | read-only    | none                                                     |
| comment_count    | integer                                                         | false    | read-only    | none                                                     |
| share_count      | integer                                                         | false    | read-only    | none                                                     |
| vote_count       | integer                                                         | false    | read-only    | none                                                     |
| voted            | boolean                                                         | false    | read-only    | true if the logged user has already voted the discussion |
| flag_count       | integer                                                         | false    | read-only    | none                                                     |
| addressing       | [integer]                                                       | false    | none         | none                                                     |
| follower_count   | string                                                          | false    | read-only    | none                                                     |
| matches          | list([SearchMatch](/docs/apireference/v2/schemas/search_match)) | false    | read-only    | none                                                     |
