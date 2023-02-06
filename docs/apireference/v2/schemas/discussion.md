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
  "tags": [],
  "poll": {},
  "title": "string"
}

```

#### Properties

| Name             | Type                                                   | Required | Restrictions | Description                                                                                                                                                                   |
|------------------|--------------------------------------------------------|----------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id               | integer                                                | false    | read-only    | A unique integer value identifying this discussion                                                                                                                            |
| type             | string                                                 | false    | read-only    | Discussion type                                                                                                                                                               |
| last_activity_at | string(date-time)                                      | false    | read-only    | Discussion last activity datetime                                                                                                                                             |
| author           | [User](/docs/apireference/v2/schemas/user)             | false    | read-only    | Discussion author                                                                                                                                                             |
| added_at         | string(date-time)                                      | false    | read-only    | Discussion creation time                                                                                                                                                      |
| last_edited_at   | string(date-time)                                      | false    | read-only    | Discussion last edit time                                                                                                                                                     |
| html             | string                                                 | false    | read-only    | Discussion html content                                                                                                                                                       |
| summary          | string                                                 | false    | read-only    | Discussion summary                                                                                                                                                            |
| deleted          | boolean                                                | false    | read-only    | If true, discussion has been deleted                                                                                                                                          |
| collapsed        | string                                                 | false    | read-only    | If true, discussion has been collapsed                                                                                                                                        |
| comment_count    | integer                                                | false    | read-only    | The number of comments associated to this contribution                                                                                                                        |
| view_count       | integer                                                | false    | read-only    | The number of views associated to this contribution                                                                                                                           |
| vote_count       | integer                                                | false    | read-only    | The number of votes/reactions associated to this contribution                                                                                                                 |
| reactions_count  | list([Reaction](/docs/apireference/v2/schemas/reaction)) | false    | read-only    | Reactions associated to this contribution                                                                                                                                     |
| voted            | boolean                                                | false    | read-only    | If true,  the logged user has already voted this contribution                                                                                                                 |
| reaction         | [Reaction](/docs/apireference/v2/schemas/reaction)     | false    | read-only    | Reaction of the logged user (if he voted this contribution)                                                                                                                   |
| follower_count   | string                                                 | false    | read-only    | The number of followers associated to this contribution                                                                                                                       |
| followed         | boolean                                                | false    | read-only    | If true, the logged user follows the discussion                                                                                                                               |
| suspended        | boolean                                                | false    | read-only    | If true, the logged user has suspended the notifications for the discussion                                                                                                   |
| flag_count       | integer                                                | false    | read-only    | The number of flags associated to this contribution                                                                                                                           |
| share_count      | integer                                                | false    | read-only    | The number of shares associated to this contribution                                                                                                                          |
| slug             | string                                                 | false    | read-only    | Discussion  slug                                                                                                                                                              |
| categories       | list([Category](/docs/apireference/v2/schemas/category)) | true     | none         | The categories (at least one category is required) associated to this contribution                                                                                            |
| medias           | list([Media](/docs/apireference/v2/schemas/media))     | false    | none         | The medias  associated to this contribution                                                                                                                                   |
| location         | object¦null                                            | false    | none         | The location object associated to this contribution                                                                                                                           |
| » location       | string¦null                                            | true     | none         | Location name                                                                                                                                                                 |
| » lat            | number¦null                                            | true     | none         | Location latitude                                                                                                                                                             |
| » lng            | number¦null                                            | true     | none         | Location Longitude                                                                                                                                                            |
| tags             | list(integer)                                          | false    | none         | List of [Tag](/docs/apireference/v2/schemas/tag) ids. If tags are of type 'user' they are used for addressing this contribution else they are normal 'contribution' type tags |
| poll             | [Poll](/docs/apireference/v2/schemas/poll)¦null        | false    | none         | The poll object associated to this contribution                                                                                                                               |
| title            | string                                                 | true     | none         | Discussion title                                                                                                                                                              |













