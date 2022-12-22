---
sidebar_label: Search Post
sidebar_position: 1
title: Search Post
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

| Name             | Type                                                            | Required | Restrictions | Description                                                           |
|------------------|-----------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------|
| id               | integer                                                         | false    | read-only    | The post id                                                           |
| type             | string                                                          | false    | read-only    | The post type                                                         |
| last_activity_at | string(date-time)                                               | false    | read-only    | Datetime of last activity                                             |
| author           | [User](/docs/apireference/v2/schemas/user)                      | false    | read-only    | Post author                                                           |
| added_at         | string(date-time)                                               | false    | read-only    | Datetime of post creation                                             |
| last_edited_at   | string(date-time)                                               | false    | read-only    | Datetime of last post edit                                            |
| html             | string                                                          | false    | read-only    | Post html                                                             |
| summary          | string                                                          | false    | read-only    | The post summary                                                      |
| deleted          | boolean                                                         | false    | read-only    | If true, post has been deleted                                        |
| collapsed        | string                                                          | false    | read-only    | If true, post has been collapsed                                      |
| comment_count    | integer                                                         | false    | read-only    | Number of post comments                                               |
| view_count       | integer                                                         | false    | read-only    | Number of post views                                                  |
| vote_count       | integer                                                         | false    | read-only    | Number of votes/reactions associated to this contribution             |
| reactions_count  | list([Reaction](/docs/apireference/v2/schemas/reaction))        | false    | read-only    | Reactions associated to this contribution                             |
| voted            | boolean                                                         | false    | read-only    | If true, the logged user has already voted the post                   |
| reaction         | [Reaction](/docs/apireference/v2/schemas/reaction)              | false    | read-only    | Reaction of the logged user (if he voted this contribution)           |
| follower_count   | integer                                                         | false    | read-only    | Number of post followers                                              |
| followed         | boolean                                                         | false    | read-only    | If true, the logged user follows the post                             |
| suspended        | boolean                                                         | false    | read-only    | If true, the logged user has suspended the notifications for the post |
| flag_count       | integer                                                         | false    | read-only    | Post flags number                                                     |
| share_count      | integer                                                         | false    | read-only    | Post shares number                                                    |
| slug             | string                                                          | false    | read-only    | Post slug                                                             |
| categories       | list([Category](/docs/apireference/v2/schemas/category))        | true     | read-only    | The post categories                                                   |
| medias           | list([Media](/docs/apireference/v2/schemas/media))              | false    | read-only    | The post medias                                                       |
| location         | object¦null                                                     | false    | read-only    | The post location object                                              |
| » location       | string¦null                                                     | true     | read-only    | Location name                                                         |
| » lat            | number¦null                                                     | true     | read-only    | Location latitude                                                     |
| » lng            | number¦null                                                     | true     | read-only    | Location longitude                                                    |
| addressing       | [integer]                                                       | false    | read-only    | The list of post addressing ids                                       |
| poll             | [Poll](/docs/apireference/v2/schemas/poll)                      | false    | read-only    | The post poll object                                                  |
| matches          | list([SearchMatch](/docs/apireference/v2/schemas/search_match)) | false    | read-only    | The post search matches                                               |
