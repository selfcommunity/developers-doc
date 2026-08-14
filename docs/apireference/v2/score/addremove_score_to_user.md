---
sidebar_label: Add/Remove Score to a User
sidebar_position: 1
title: Add/Remove Score to a User
---

This endpoint adds or removes score points from a user.

The score change is registered as a manual reputation adjustment.

:::info

Any authenticated user can call this endpoint, but a **non-moderator can only add/remove
points to themselves** — the user identified by the access token. To change another user's
score you need an admin or moderation role.

:::

## HTTP Request

`POST /api/v2/score/`

### Parameters

| Name               | In   | Type    | Required | Description                                                        |
|--------------------|------|---------|----------|--------------------------------------------------------------------|
| user_id            | body | integer | false    | A unique integer value identifying the user                        |
| username           | body | string  | false    | Username identifying the user                                      |
| score              | body | integer | true     | Positive or negative integer value                                 |
| reputation_context | body | string  | false    | Pipe-separated values used to classify and filter the score change |
| comment            | body | string  | false    | A comment about this operation                                     |

#### Notes

- You cannot specify both `user_id` and `username`.
- If you are **not** a moderator/admin:
  - omit `user_id`/`username` entirely to add/remove points to yourself, or
  - pass your own `user_id`/`username` — any other value returns a `400` error.
- If you **are** a moderator/admin, you must specify either `user_id` or `username`
  (unchanged: this still lets you act on any user).
- `score` can be positive or negative.
- `score` cannot be `0`.
-  You must specify either `reputation_context` or `comment`.
- `reputation_type` is automatically set to `manual`.

#### Example Body Parameters

Self-service (no `user_id`/`username`, adds points to the caller):

```json
{
  "score": 10,
  "reputation_context": "contest|first_place|apis",
  "comment": "Winner of the APIS contest"
}
```

Moderator adding points on behalf of another user:

```json
{
  "username": "mario.rossi",
  "score": 10,
  "reputation_context": "contest|first_place|apis",
  "comment": "Winner of the APIS contest"
}
```

### Example Request

```bash
curl -X POST /api/v2/score/ \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}" \
  --data-raw '{
    "score": 10,
    "reputation_context": "contest|first_place|apis",
    "comment": "Winner of the APIS contest"
  }'
```

## Responses

| Status | Meaning      | Description                                                                                     |
|--------|--------------|---------------------------------------------------------------------------------------------------|
| 201    | Created      | Score change created                                                                             |
| 400    | Bad Request  | Invalid request body, or a non-moderator targeted a `user_id`/`username` other than their own    |
| 401    | Unauthorized | Missing or invalid access token                                                                  |

### Example response

```json
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
    "id": 1,
    "username": "moderator",
    "avatar": "https://example.com/avatar.jpg"
  },
  "reputed_at": "2026-05-20T10:30:00Z"
}
```
