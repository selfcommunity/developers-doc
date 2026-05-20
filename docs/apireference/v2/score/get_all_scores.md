---
sidebar_label: Get All Scores
sidebar_position: 1
title: Get All Scores
---

This endpoint retrieves all score history entries.

:::info

This operation requires admin or moderation role.

:::

## HTTP Request

`GET /api/v2/score/`

### Parameters

| Name            | In    | Type             | Required | Description                                                           |
|-----------------|-------|------------------|----------|-----------------------------------------------------------------------|
| limit           | query | integer          | false    | Number of results to return per page                                  |
| offset          | query | integer          | false    | The initial index from which to return the results                    |
| search          | query | string           | false    | Search by username, comment or reputation_context                     |
| user_id         | query | integer          | false    | Filter by user id                                                     |
| reputation_type | query | integer          | false    | Filter by reputation type                                             |
| reputed_at_from | query | string(datetime) | false    | Filter results with reputed_at greater than or equal to this datetime |
| reputed_at_to   | query | string(datetime) | false    | Filter results with reputed_at lower than or equal to this datetime   |
| exclude_manual  | query | boolean          | false    | Exclude manual reputation entries                                     |
| exclude_reset   | query | boolean          | false    | Exclude reset reputation entries                                      |
| ordering        | query | string           | false    | Which field to use when ordering the results                          |

### Search Fields

The `search` parameter supports:

- `user.username`
- `comment`
- `reputation_context`

### Example Request

```bash
curl -X GET "/api/v2/score/?search=contest&exclude_reset=true&ordering=-reputed_at" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}"
```

## Responses

| Status | Meaning      | Description                               |
|--------|--------------|-------------------------------------------|
| 200    | OK           | Successful response                       |
| 401    | Unauthorized | Missing or invalid access token           |
| 403    | Forbidden    | User does not have moderation permissions |

### Response Schema

| Name     | Type                | Description           |
|----------|---------------------|-----------------------|
| count    | integer             | Total results count   |
| next     | string(uri) or null | Next page url         |
| previous | string(uri) or null | Previous page url     |
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
      "created_by": {
        "id": 1,
        "username": "moderator",
        "avatar": "https://example.com/avatar.jpg"
      },
      "reputed_at": "2026-05-20T10:30:00Z"
    },
    {
      "id": 457,
      "user": {
        "id": 124,
        "username": "anna.bianchi",
        "real_name": "Anna Bianchi",
        "avatar": "https://example.com/avatar.jpg",
        "reputation": 95
      },
      "score": -5,
      "reputation_type": 10,
      "reputation_type_description": "manual",
      "comment": "Score correction",
      "reputation_context": "manual|correction",
      "created_by": {
        "id": 1,
        "username": "moderator",
        "avatar": "https://example.com/avatar.jpg"
      },
      "reputed_at": "2026-05-20T11:15:00Z"
    }
  ]
}
```