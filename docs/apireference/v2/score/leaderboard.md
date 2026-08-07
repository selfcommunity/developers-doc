---
sidebar_label: Get Leaderboard
sidebar_position: 1
title: Get Leaderboard
---

This endpoint returns the user's leaderboard ordered by total score.

The leaderboard aggregates all score history entries and calculates the total score for each user.

:::info

This endpoint is public. If called with a valid access token, the response also includes
`my_position`: the rank of the user identified by the token, computed on the same (filtered)
leaderboard as `results`.

:::

## HTTP Request

`GET /api/v2/score/leaderboard/`

### Parameters

| Name            | In    | Type             | Required | Description                                                           |
|-----------------|-------|------------------|----------|-----------------------------------------------------------------------|
| limit           | query | integer          | false    | Number of results to return per page                                  |
| offset          | query | integer          | false    | The initial index from which to return the results                    |
| search          | query | string           | false    | Search by username, comment or reputation_context                     |
| user_id         | query | integer          | false    | Filter score entries by user id before aggregation                    |
| reputation_type | query | integer          | false    | Filter score entries by reputation type                               |
| reputed_at_from | query | string(datetime) | false    | Filter entries with reputed_at greater than or equal to this datetime |
| reputed_at_to   | query | string(datetime) | false    | Filter entries with reputed_at lower than or equal to this datetime   |
| exclude_manual  | query | boolean          | false    | Exclude manual reputation entries                                     |
| exclude_reset   | query | boolean          | false    | Exclude reset reputation entries                                      |
| ordering        | query | string           | false    | Ordering field                                                        |

### Notes

- The leaderboard is calculated using the sum of `variation_points`.
- Filters are applied before aggregation.
- Results are ordered by `total_score` descending by default.
- `search` also supports filtering by `reputation_context`.
- Each entry's `position` (and `my_position.position`) is a **1-based rank**, computed as the
  count of users with a strictly greater `total_score`, plus 1. Users tied on `total_score`
  share the same `position`.
- `my_position` is `null` when the request is anonymous, or when the authenticated user has no
  score entries matching the current filters.
- `user` in each entry (and in `my_position`) is the same lightweight user object used
  elsewhere in the API (`id`, `username`, `real_name`, `avatar`, `ext_id`, `deleted`).

### Example Request

```bash
curl -X GET "/api/v2/score/leaderboard/?reputation_type=10&reputed_at_from=2026-05-01T00:00:00Z&exclude_reset=true" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}"
```

## Responses

| Status | Meaning | Description         |
|--------|---------|----------------------|
| 200    | OK      | Successful response |

### Response Schema

| Name        | Type                | Description                                                          |
|-------------|---------------------|------------------------------------------------------------------------|
| my_position | object or null      | Rank of the authenticated caller, same shape as an entry in `results` |
| count       | integer             | Total results count                                                   |
| next        | string(uri) or null | Next page url                                                         |
| previous    | string(uri) or null | Previous page url                                                     |
| results     | array               | Leaderboard entries, each `{ position, total_score, user }`           |

### Example Response

```json
{
  "my_position": {
    "position": 8,
    "total_score": 60,
    "user": {
      "id": 126,
      "username": "giulia.neri",
      "real_name": "Giulia Neri",
      "avatar": "https://example.com/avatar.jpg",
      "ext_id": null,
      "deleted": false
    }
  },
  "count": 3,
  "next": null,
  "previous": null,
  "results": [
    {
      "position": 1,
      "total_score": 150,
      "user": {
        "id": 123,
        "username": "mario.rossi",
        "real_name": "Mario Rossi",
        "avatar": "https://example.com/avatar.jpg",
        "ext_id": null,
        "deleted": false
      }
    },
    {
      "position": 2,
      "total_score": 120,
      "user": {
        "id": 124,
        "username": "anna.bianchi",
        "real_name": "Anna Bianchi",
        "avatar": "https://example.com/avatar.jpg",
        "ext_id": null,
        "deleted": false
      }
    },
    {
      "position": 3,
      "total_score": 95,
      "user": {
        "id": 125,
        "username": "luca.verdi",
        "real_name": "Luca Verdi",
        "avatar": "https://example.com/avatar.jpg",
        "ext_id": null,
        "deleted": false
      }
    }
  ]
}
```

## Example Use Cases

### Monthly leaderboard

```text
GET /api/v2/score/leaderboard/?reputed_at_from=2026-05-01T00:00:00Z&reputed_at_to=2026-05-31T23:59:59Z
```

### Contest leaderboard

```text
GET /api/v2/score/leaderboard/?search=contest
```

### Excluding manual adjustments

```text
GET /api/v2/score/leaderboard/?exclude_manual=true
```

### "Your position" widget

Pass the user's own access token and read `my_position` from the response — no separate
endpoint is needed to know where the current user ranks:

```bash
curl -X GET "/api/v2/score/leaderboard/?limit=1" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}"
```
