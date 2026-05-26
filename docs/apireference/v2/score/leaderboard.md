---
sidebar_label: Get Leaderboard
sidebar_position: 1
title: Get Leaderboard
---

This endpoint returns the user’s leaderboard ordered by total score.

The leaderboard aggregates all score history entries and calculates the total score for each user.

:::info

This endpoint is public.

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

### Example Request

```bash
curl -X GET "/api/v2/score/leaderboard/?reputation_type=10&reputed_at_from=2026-05-01T00:00:00Z&exclude_reset=true" \
  -H "Accept: application/json"
```

## Responses

| Status | Meaning | Description         |
|--------|---------|---------------------|
| 200    | OK      | Successful response |

### Response Schema

| Name     | Type                | Description         |
|----------|---------------------|---------------------|
| count    | integer             | Total results count |
| next     | string(uri) or null | Next page url       |
| previous | string(uri) or null | Previous page url   |
| results  | array               | Leaderboard results |

### Example Response

```json
{
  "count": 3,
  "next": null,
  "previous": null,
  "results": [
    {
      "user_id": 123,
      "user__username": "mario.rossi",
      "user__real_name": "Mario Rossi",
      "total_score": 150
    },
    {
      "user_id": 124,
      "user__username": "anna.bianchi",
      "user__real_name": "Anna Bianchi",
      "total_score": 120
    },
    {
      "user_id": 125,
      "user__username": "luca.verdi",
      "user__real_name": "Luca Verdi",
      "total_score": 95
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
