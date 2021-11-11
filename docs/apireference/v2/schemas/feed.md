---
sidebar_label: Feed
sidebar_position: 1
title: Feed
---

```json
{
  "type": "discussion",
  "discussion": {
    "id": 0,
    "text": "string",
    "categories": [
      0
    ],
    "medias": [
      0
    ],
    "location": {
      "location": "string",
      "lat": 0,
      "lng": 0
    },
    "poll": {
      "id": 0,
      "title": "string",
      "multiple_choices": true,
      "added_at": "2019-08-24T14:15:22Z",
      "modified_at": "2019-08-24T14:15:22Z",
      "closed": true,
      "expiration_at": "2019-08-24T14:15:22Z",
      "hidden": "string",
      "choices": [
        {
          "id": 0,
          "choice": "string",
          "order": 0,
          "added_at": "2019-08-24T14:15:22Z",
          "deleted": "string",
          "vote_count": 0,
          "voted": true
        }
      ],
      "votes": [
        {
          "id": 0,
          "choice": "string",
          "user": "string"
        }
      ]
    },
    "last_activity_at": "2019-08-24T14:15:22Z",
    "author": {
      "id": 0,
      "username": "string",
      "real_name": "string",
      "date_joined": "2019-08-24T14:15:22Z",
      "bio": "string",
      "location": "string",
      "position": "string",
      "birthday": "string",
      "description": "string",
      "gender": "Male",
      "website": "https://example.com",
      "avatar": "string",
      "cover": "string",
      "ext_id": "string",
      "tags": [
        {
          "id": 0,
          "active": true,
          "type": "user",
          "name": "string",
          "description": "string",
          "color": "string",
          "visible": true,
          "deleted": true,
          "created_at": "2019-08-24T14:15:22Z"
        }
      ]
    },
    "added_at": "2019-08-24T14:15:22Z",
    "html": "string",
    "summary": "string",
    "deleted": true,
    "collapsed": false,
    "comment_count": 0,
    "share_count": 0,
    "vote_count": 0,
    "flag_count": 0,
    "addressing": [
      0
    ],
    "title": "string",
    "slug": "string",
    "view_count": 0,
    "captcha": {
      "hashkey": "string",
      "response": "string"
    },
    "follower_count": "string"
  },
  "post": {
    "id": 0,
    "text": "string",
    "categories": [
      0
    ],
    "medias": [
      0
    ],
    "location": {
      "location": "string",
      "lat": 0,
      "lng": 0
    },
    "poll": {
      "id": 0,
      "title": "string",
      "multiple_choices": true,
      "added_at": "2019-08-24T14:15:22Z",
      "modified_at": "2019-08-24T14:15:22Z",
      "closed": true,
      "expiration_at": "2019-08-24T14:15:22Z",
      "hidden": "string",
      "choices": [
        {
          "id": 0,
          "choice": "string",
          "order": 0,
          "added_at": "2019-08-24T14:15:22Z",
          "deleted": "string",
          "vote_count": 0,
          "voted": true
        }
      ],
      "votes": [
        {
          "id": 0,
          "choice": "string",
          "user": "string"
        }
      ]
    },
    "last_activity_at": "2019-08-24T14:15:22Z",
    "author": {
      "id": 0,
      "username": "string",
      "real_name": "string",
      "date_joined": "2019-08-24T14:15:22Z",
      "bio": "string",
      "location": "string",
      "location_lat_lng": "string",
      "position_lat_lng": "string",
      "date_of_birth": "string",
      "description": "string",
      "gender": "Male",
      "website": "https://example.com",
      "avatar": "string",
      "cover": "string",
      "ext_id": "string",
      "tags": [
        {
          "id": 0,
          "active": true,
          "type": "user",
          "name": "string",
          "description": "string",
          "color": "string",
          "visible": true,
          "deleted": true,
          "created_at": "2019-08-24T14:15:22Z"
        }
      ],
      "reputation":111
    },
    "added_at": "2019-08-24T14:15:22Z",
    "html": "string",
    "summary": "string",
    "deleted": true,
    "collapsed": false,
    "comment_count": 0,
    "share_count": 0,
    "vote_count": 0,
    "flag_count": 0,
    "addressing": [
      0
    ]
  },
  "seen_by_id": [],
  "has_boost": true,
  "activities": [
    {
      "type": "string",
      "object": {},
      "author": {
        "id": 0,
        "username": "string",
        "real_name": "string",
        "date_joined": "2019-08-24T14:15:22Z",
        "bio": "string",
        "location": "string",
        "location_lat_lng": "string",
        "position_lat_lng": "string",
        "date_of_birth": "string",
        "description": "string",
        "gender": "Male",
        "website": "https://example.com",
        "avatar": "string",
        "cover": "string",
        "ext_id": "string",
        "tags": [
          {
            "id": 0,
            "active": true,
            "type": "user",
            "name": "string",
            "description": "string",
            "color": "string",
            "visible": true,
            "deleted": true,
            "created_at": "2019-08-24T14:15:22Z"
          }
        ],
        "reputation":111
      },
      "active_at": "2019-08-24T14:15:22Z",
      "seen_by_id": [
        null
      ]
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|The type of the object, can be `discussion` , `post` or `status` |
|discussion|[Discussion](../schemas/discussion)¦null|false|read-only|none|
|post|[Post](../schemas/post)¦undefined|false|read-only|none|
|status|[Status](../schemas/status)¦undefined|false|read-only|none|
|seen_by_id|list(integer)¦undefined|false|read-only|Id of [User](../schemas/user) that have seen this object|
|has_boost|¦undefined|false|read-only|True if this object has the visibility boost|
|activities|list([FeedActivity](../schemas/feed_activity))¦undefined|false|read-only|List of feed acitivity. This field is returned only for relevance feed|



