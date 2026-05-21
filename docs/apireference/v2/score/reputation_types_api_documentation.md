---
sidebar_label: Get Reputation Types
sidebar_position: 1
title: Get Reputation Types
---

This endpoint returns the list of available reputation types.

Each reputation type contains its numeric identifier and its internal string description.

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

| Name | Type    | Description                        |
|------|---------|------------------------------------|
| id   | integer | Reputation type numeric identifier |
| name | string  | Reputation type description        |

### Example Response

```json
[
  {
    "id": 1,
    "name": "gain_by_upvoted"
  },
  {
    "id": 10,
    "name": "manual"
  },
  {
    "id": 12,
    "name": "gain_by_make_post"
  },
  {
    "id": 13,
    "name": "gain_by_make_first_level_comment"
  },
  {
    "id": 18,
    "name": "gain_by_daily_visit"
  },
  {
    "id": -1,
    "name": "lose_by_upvote_canceled"
  }
]
```

## Notes

- Reputation types are used by score and leaderboard endpoints.
- The `manual` type identifies manually assigned reputation changes.
- Positive ids usually represent score gains.
- Negative ids usually represent score losses.

