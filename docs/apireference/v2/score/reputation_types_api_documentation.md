---
sidebar_label: Get Reputation Types
sidebar_position: 1
title: Get Reputation Types
---

This endpoint returns the list of available reputation types.

Each reputation type contains its numeric identifier, its internal string description, and the
current point value(s) it's worth (read live from the score configuration, so it always
reflects the current settings — not a hardcoded constant).

:::info

This endpoint is public.

:::

## HTTP Request

`GET /api/v2/score/reputation_types/`

### Parameters

This endpoint does not accept any parameters.

### Example Request

```bash
curl -X GET "/api/v2/score/reputation_types/" \
  -H "Accept: application/json"
```

## Responses

| Status | Meaning | Description         |
|--------|---------|---------------------|
| 200    | OK      | Successful response |

### Response Schema

| Name   | Type                     | Description                                                                       |
|--------|--------------------------|--------------------------------------------------------------------------------------|
| id     | integer                  | Reputation type numeric identifier                                                |
| name   | string                   | Reputation type description                                                       |
| points | integer¦object¦null      | See below                                                                          |

`points` is one of:

- an **integer** for types with a single, unambiguous point value (e.g. `gain_by_connection`);
- an **object** broken down by content type, for types whose value depends on what was
  upvoted/created (`gain_by_upvoted`/`lose_by_upvote_canceled`,
  `gain_by_make_post`/`lose_by_delete_post`) — keys are a subset of
  `discussion`, `post`, `first_level_comment`, `second_level_comment`;
- **`null`** for types with no fixed value: `manual` (arbitrary, chosen per transaction),
  `reset` (always sets score to 0, not a "gain"), and
  `gain_by_unblock_account`/`lose_by_block_account` (computed from how many days the account
  was blocked, not from a fixed preference).

### Example Response

```json
[
  {
    "id": 1,
    "name": "gain_by_upvoted",
    "points": {
      "discussion": 10,
      "post": 10,
      "first_level_comment": 10,
      "second_level_comment": 5
    }
  },
  {
    "id": 10,
    "name": "manual",
    "points": null
  },
  {
    "id": 12,
    "name": "gain_by_make_post",
    "points": {
      "discussion": 2,
      "post": 2
    }
  },
  {
    "id": 13,
    "name": "gain_by_make_first_level_comment",
    "points": 1
  },
  {
    "id": 18,
    "name": "gain_by_daily_visit",
    "points": 1
  },
  {
    "id": -1,
    "name": "lose_by_upvote_canceled",
    "points": {
      "discussion": -10,
      "post": -10,
      "first_level_comment": -10,
      "second_level_comment": -5
    }
  }
]
```

## Notes

- Reputation types are used by score and leaderboard endpoints.
- The `manual` type identifies manually assigned reputation changes.
- Positive ids usually represent score gains.
- Negative ids usually represent score losses.
- `points` reads the same configuration used by automatic scoring (the score section of
  [Dynamic Preferences](/docs/apireference/v2/dynamicpreference/get_all_dynamic_preferences)),
  so it changes if that configuration changes, and can differ per community/environment.

