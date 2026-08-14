---
sidebar_label: Get All Scores
sidebar_position: 1
title: Get All Scores
---

This endpoint retrieves score history entries.

:::info

Any authenticated user can call this endpoint. A **non-moderator only sees their own entries**,
and never sees `manual` entries that a moderator applied on their behalf, nor `reset` entries.
Moderators/admins see everything and can filter by any `user_id`.

:::

## HTTP Request

`GET /api/v2/score/`

### Parameters

| Name            | In    | Type             | Required | Description                                                           |
|-----------------|-------|------------------|----------|-------------------------------------------------------------------------|
| limit           | query | integer          | false    | Number of results to return per page                                  |
| offset          | query | integer          | false    | The initial index from which to return the results                    |
| search          | query | string           | false    | Search by username, comment or reputation_context                     |
| search_reputation_context | query | string  | false    | Filter by reputation_context only, case-insensitive "contains"        |
| user_id         | query | integer          | false    | Filter by user id (moderators/admins only, see note below)            |
| reputation_type | query | integer          | false    | Filter by reputation type                                             |
| reputed_at_from | query | string(datetime) | false    | Filter results with reputed_at greater than or equal to this datetime |
| reputed_at_to   | query | string(datetime) | false    | Filter results with reputed_at lower than or equal to this datetime   |
| exclude_manual  | query | boolean          | false    | Exclude manual reputation entries                                     |
| exclude_reset   | query | boolean          | false    | Exclude reset reputation entries                                      |
| ordering        | query | string           | false    | Which field to use when ordering the results                          |

### Notes

- For a **non-moderator**, the results are always scoped to their own `user_id` regardless of
  the `user_id` filter — the endpoint effectively answers "show me my score history".
- For a non-moderator, the following are excluded even without `exclude_manual`/`exclude_reset`:
  - `manual` entries whose `created_by` is **not** the requesting user (e.g. points a moderator
    added/removed on their behalf, which may carry an internal comment not meant to be shown);
  - `reset` entries.
  - Entries the user created themselves via
    [Add/Remove Score to a User](/docs/apireference/v2/score/addremove_score_to_user) are
    always visible to them.
- Moderators/admins are unaffected by the above and keep seeing every entry.
- `search_reputation_context` differs from `search`: it only matches `reputation_context`,
  never `comment` or the username, so it's the right choice when filtering by a campaign/context
  tag without accidentally matching unrelated comments.

### Search Fields

The `search` parameter supports:

- `user.username`
- `comment`
- `reputation_context`

### Example Request

Self-service (returns only the caller's own score history):

```bash
curl -X GET "/api/v2/score/?search=contest&exclude_reset=true&ordering=-reputed_at" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}"
```

## Responses

| Status | Meaning      | Description                      |
|--------|--------------|-----------------------------------|
| 200    | OK           | Successful response              |
| 401    | Unauthorized | Missing or invalid access token  |

### Response Schema

| Name     | Type                | Description           |
|----------|---------------------|------------------------|
| count    | integer             | Total results count   |
| next     | string(uri) or null | Next page url          |
| previous | string(uri) or null | Previous page url      |
| results  | array               | List of score entries |

### Example Response

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 456,
      "user": {
        "id": 123,
        "username": "mario.rossi",
        "real_name": "Mario Rossi",
        "avatar": "https://example.com/avatar.jpg",
        "reputation": 110
      },
      "score": 10,
      "reputation_type": 10,
      "reputation_type_description": "manual",
      "comment": "Winner of the APIS contest",
      "reputation_context": "contest|first_place|apis",
      "related_content": null,
      "created_by": {
        "id": 123,
        "username": "mario.rossi",
        "avatar": "https://example.com/avatar.jpg"
      },
      "reputed_at": "2026-05-20T10:30:00Z"
    },
    {
      "id": 457,
      "user": {
        "id": 123,
        "username": "mario.rossi",
        "real_name": "Mario Rossi",
        "avatar": "https://example.com/avatar.jpg",
        "reputation": 110
      },
      "score": 5,
      "reputation_type": 12,
      "reputation_type_description": "gain_by_make_post",
      "comment": null,
      "reputation_context": null,
      "related_content": {
        "id": 789,
        "type": "post",
        "title": "My new post"
      },
      "created_by": null,
      "reputed_at": "2026-05-20T11:15:00Z"
    }
  ]
}
```
