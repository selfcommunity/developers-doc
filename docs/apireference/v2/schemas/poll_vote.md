---
sidebar_label: Poll Vote
sidebar_position: 1
title: Poll Vote
---

```json
{
  "id": "integer",
  "choice": "integer",
  "user": {
            "id": "integer",
            "username": "string",
            "real_name": "string",
            "avatar": "string",
            "ext_id": "integer",
            "followings_counter": "integer",
            "followers_counter": "integer",
            "posts_counter": "integer",
            "discussions_counter": "integer",
            "polls_counter": "integer",
            "connection_status": "string",
            "categories_counter": "integer",
            "date_joined": "string",
            "bio": "string",
            "location": "string",
            "location_lat_lng": "string",
            "position_lat_lng": "string",
            "date_of_birth": "string",
            "description": "string",
            "gender": "string",
            "website": "string",
            "cover": "string",
            "tags": [],
            "reputation": "integer",
            "community_badge": "boolean",
            "reg_approved": "boolean",
            "company_name": "string",
            "company_role": "string"
  }
}

```

#### Properties

| Name   | Type                                       | Required | Restrictions | Description            |
|--------|--------------------------------------------|----------|--------------|------------------------|
| id     | integer                                    | false    | read-only    | A unique integer value |
| choice | integer                                    | false    | read-only    | Poll Choice unique id  |
| user   | [User](/docs/apireference/v2/schemas/user) | false    | read-only    | The user object        |
