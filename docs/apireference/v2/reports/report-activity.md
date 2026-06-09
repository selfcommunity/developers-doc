---
sidebar_label: Activity Report
sidebar_position: 1
title: Get Activity Report
---

This endpoint returns community activity statistics for a specified date range.

The report aggregates active users, category feed visits, content creation, comments, and reactions.

:::info

This endpoint requires authentication and is available only to users with permission to view console statistics.

:::

## HTTP Request

`GET /api/v2/reports/activity/`

### Parameters

| Name      | In    | Type         | Required | Description             |
|-----------|-------|--------------|----------|-------------------------|
| date_from | query | string(date) | true     | Start date (YYYY-MM-DD) |
| date_to   | query | string(date) | true     | End date (YYYY-MM-DD)   |

### Notes

- `date_from` and `date_to` are inclusive.
- Active users are calculated from daily community visits.
- Category feed visits are calculated from users that requested a category feed.
- Category feed users are counted once per user, category and day.
- `visits` counts the total number of category feed requests recorded for the same user/category/day.
- Content statistics are calculated over the selected date range.
- Hidden system users are excluded from active user and category feed visit statistics.

### Metrics Definition

| Metric               | Description                                                       |
|----------------------|-------------------------------------------------------------------|
| Active users         | Users that visited the community during the selected period       |
| Daily active users   | Number of active users grouped by day                             |
| Category feed visits | Users that requested a category feed at least once during the day |
| Posts                | Discussions/threads created during the selected period            |
| Comments             | Comments created during the selected period                       |
| Reactions            | Reactions/votes created during the selected period                |

### Example Request

```bash
curl -X GET "/api/v2/reports/activity/?date_from=2026-05-01&date_to=2026-05-31" \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Accept: application/json"
```

## Responses

| Status | Meaning      | Description                   |
|--------|--------------|-------------------------------|
| 200    | OK           | Successful response           |
| 400    | Bad Request  | Invalid or missing parameters |
| 401    | Unauthorized | Authentication required       |
| 403    | Forbidden    | User cannot access reports    |

### Response Schema

| Name                       | Type         | Description                                     |
|----------------------------|--------------|-------------------------------------------------|
| date_from                  | string(date) | Report start date                               |
| date_to                    | string(date) | Report end date                                 |
| daily_active_users         | array        | Daily active users                              |
| active_users_total         | integer      | Number of unique active users in the date range |
| daily_category_feed_visits | array        | Daily category feed visits                      |
| content                    | object       | Global content statistics                       |
| content_by_category        | array        | Content statistics grouped by category          |

### Daily Active Users Object

| Name  | Type         | Description            |
|-------|--------------|------------------------|
| date  | string(date) | Activity date          |
| users | integer      | Number of active users |

### Daily Category Feed Visits Object

| Name          | Type         | Description                           |
|---------------|--------------|---------------------------------------|
| date          | string(date) | Activity date                         |
| category_id   | integer      | Category identifier                   |
| category_name | string       | Category name                         |
| users         | integer      | Unique users who visited the category |
| visits        | integer      | Total category feed visits recorded   |

### Content Object

| Name      | Type    | Description             |
|-----------|---------|-------------------------|
| posts     | integer | Total posts created     |
| comments  | integer | Total comments created  |
| reactions | integer | Total reactions created |

### Content By Category Object

| Name          | Type    | Description                         |
|---------------|---------|-------------------------------------|
| category_id   | integer | Category identifier                 |
| category_name | string  | Category name                       |
| posts         | integer | Posts created in the category       |
| comments      | integer | Comments created in the category    |
| reactions     | integer | Reactions generated in the category |

### Example Response

```json
{
  "date_from": "2026-05-01",
  "date_to": "2026-05-31",
  "daily_active_users": [
    {
      "date": "2026-05-01",
      "users": 45
    },
    {
      "date": "2026-05-02",
      "users": 51
    }
  ],
  "active_users_total": 182,
  "daily_category_feed_visits": [
    {
      "date": "2026-05-01",
      "category_id": 3,
      "category_name": "Technology",
      "users": 20,
      "visits": 42
    },
    {
      "date": "2026-05-01",
      "category_id": 7,
      "category_name": "Events",
      "users": 12,
      "visits": 18
    }
  ],
  "content": {
    "posts": 85,
    "comments": 423,
    "reactions": 1732
  },
  "content_by_category": [
    {
      "category_id": 3,
      "category_name": "Technology",
      "posts": 24,
      "comments": 115,
      "reactions": 532
    },
    {
      "category_id": 7,
      "category_name": "Events",
      "posts": 12,
      "comments": 48,
      "reactions": 201
    }
  ]
}
```

## Example Use Cases

### Monthly community activity

```text
GET /api/v2/reports/activity/?date_from=2026-05-01&date_to=2026-05-31
```

### Weekly activity report

```text
GET /api/v2/reports/activity/?date_from=2026-06-01&date_to=2026-06-07
```

### Quarterly engagement analysis

```text
GET /api/v2/reports/activity/?date_from=2026-01-01&date_to=2026-03-31
```

### Category feed engagement analysis

```text
GET /api/v2/reports/activity/?date_from=2026-06-01&date_to=2026-06-30
```
