---
sidebar_label: Score
sidebar_position: 1
title: Score
---

```json
{
  "id": "integer",
  "user": {
    "id": "integer",
    "username": "string",
    "real_name": "string",
    "email": "user@example.com",
    "description": "string",
    "avatar": "string",
    "reputation": "integer"
  },
  "score": "string",
  "reputation_type": "integer",
  "reputation_type_description": "string",
  "comment": "string"
}

```

#### Properties

| Name                        | Type                                                            | Required | Restrictions | Description                                              |
|-----------------------------|-----------------------------------------------------------------|----------|--------------|----------------------------------------------------------|
| id                          | integer                                                         | false    | read-only    | A unique integer value identifying this score            |
| user                        | object                                                          | false    | read-only    | The [user](/docs/apireference/v2/schemas/user) object    |
| score                       | string                                                          | false    | read-only    | Positive or negative integer value                       |
| reputation_type             | [integer](/docs/apireference/v2/schemas/score#reputation-types) | false    | read-only    | Integer code                                             |
| reputation_type_description | string                                                          | false    | read-only    | String description of the code                           |
| comment                     | string¦null                                                     | false    | none         | Custom comment for this score variation                  |
| created_by                  | object                                                          | false    | read-only    | The moderator [user](/docs/apireference/v2/schemas/user) |

#### Reputation Types

| reputation_type | reputation_type_description              |
|-----------------|------------------------------------------|
| 1               | gain_by_upvoted                          |
| 10              | assigned_by_moderator                    |
| 11              | gain_by_cancelling_contribute_moderation |
| 12              | gain_by_make_post                        |
| 13              | gain_by_make_first_level_comment         |
| 14              | gain_by_make_second_level_comment        |
| 15              | gain_by_connection                       |
| 17              | gain_by_app_used                         |
| 18              | gain_by_daily_visit                      |
| 19              | gain_by_follower                         |
| 20              | gain_by_unblock_account                  |
| -1              | lose_by_upvote_canceled                  |
| -11             | lose_by_contribute_moderation            |
| -12             | lose_by_delete_post                      |
| -13             | lose_by_delete_first_level_comment       |
| -14             | lose_by_delete_second_level_comment      |
| -15             | lose_by_connection                       |
| -19             | lose_by_follower                         |
| -20             | lose_by_block_account                    |
