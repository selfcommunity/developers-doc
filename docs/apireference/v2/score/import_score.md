---
sidebar_label: Import Scores (CSV)
sidebar_position: 1
title: Import Scores (CSV)
---

This endpoint bulk-imports manual score changes from a CSV file, one row per user. Useful for
awarding/removing points to many users at once (e.g. for a challenge/contest), instead of calling
[Add/Remove Score to a User](/docs/apireference/v2/score/addremove_score_to_user) once per user.

Each imported row is created as a `manual` reputation change (same as
[Add/Remove Score to a User](/docs/apireference/v2/score/addremove_score_to_user)), attributed to
the moderator who ran the import.

:::info

This operation requires admin or moderation role.

:::

## HTTP Request

`POST /api/v2/score/import/`

### Parameters

| Name       | In   | Type    | Required | Description                                                                 |
|------------|------|---------|----------|-------------------------------------------------------------------------------|
| csv_file   | body | file    | false    | The CSV file to import (multipart upload)                                   |
| csv_string | body | string  | false    | The CSV content as a raw string, alternative to `csv_file`                  |
| dry_run    | body | boolean | false    | Validate without writing anything. Default `true`.                          |

#### CSV columns

`username,user_id,variation_points,context,comment` — no header row required (if present, a
row matching `username,user_id` is auto-detected and skipped).

Note these column names don't match the `score`/`reputation_context` naming used by
[Add/Remove Score to a User](/docs/apireference/v2/score/addremove_score_to_user) — same
concepts, different names, kept as-is here since this format is already relied upon by an
existing admin console integration.

| Column             | Required                          | Notes                                                                 |
|---------------------|------------------------------------|------------------------------------------------------------------------|
| username            | one of `username`/`user_id`       | If both are given, they must refer to the same user.                  |
| user_id             | one of `username`/`user_id`       |                                                                        |
| variation_points    | yes                                | Integer, positive or negative. Cannot be `0`.                        |
| context             | yes                                | Unlike the single add/remove endpoint, `comment` is **not** a substitute here — every row needs a `context`. Pipe-separated values are normalized (trimmed, empty segments dropped). |
| comment             | no                                 |                                                                        |

### Notes

- Specify exactly one of `csv_file` or `csv_string`.
- With `dry_run=true` (the default), the whole file is validated and **nothing is written** —
  use this first to catch bad rows before committing.
- With `dry_run=false`, if any row is invalid the entire import is rejected (`400`, no partial
  writes); if every row is valid, all rows are imported in a single transaction.
- Row numbering in `errors` is 1-based and does not count blank lines or a detected header row.

### Example CSV

```csv
username,user_id,variation_points,context,comment
mario.rossi,,10,contest|first_place|apis,Winner of the APIS contest
,124,-5,contest|disqualified,Disqualified after review
```

### Example Request

Validate first (`dry_run`, default):

```bash
curl -X POST /api/v2/score/import/ \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}" \
  -F "csv_file=@scores.csv"
```

Then commit:

```bash
curl -X POST /api/v2/score/import/ \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}" \
  -F "csv_file=@scores.csv" \
  -F "dry_run=false"
```

Or, passing the CSV inline instead of a file:

```bash
curl -X POST /api/v2/score/import/ \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer {access_token}" \
  --data-raw '{
    "csv_string": "mario.rossi,,10,contest|first_place|apis,Winner of the APIS contest",
    "dry_run": false
  }'
```

## Responses

| Status | Meaning      | Description                                                     |
|--------|--------------|-------------------------------------------------------------------|
| 200    | OK           | Dry-run validation result, or successful import                 |
| 400    | Bad Request  | Invalid params (missing/duplicate `csv_file`/`csv_string`), unreadable file, or `dry_run=false` with invalid rows |
| 401    | Unauthorized | Missing or invalid access token                                 |
| 403    | Forbidden    | User does not have moderation permissions                       |

### Example response (`dry_run=true`)

```json
{
  "total_rows": 2,
  "valid_rows": 1,
  "invalid_rows": 1,
  "total_points_variation": 10,
  "errors": [
    {
      "row_number": 2,
      "field": "user",
      "message": "User not found"
    }
  ]
}
```

### Example response (`dry_run=false`, success)

```json
{
  "imported_rows": 2,
  "total_points_variation": 5
}
```

### Example response (`dry_run=false`, rejected)

```json
{
  "imported_rows": 0,
  "errors": [
    {
      "row_number": 2,
      "field": "user",
      "message": "User not found"
    }
  ]
}
```
