---
sidebar_label: User Permission
sidebar_position: 1
title: User Permission
---

```json
{
  "upload_video": "boolean",
  "create_contribute": "boolean",
  "create_poll": "boolean",
  "locate_post": "boolean",
  "create_post": "boolean",
  "create_post_with_category": "boolean",
  "follow_user": "boolean",
  "request_connection": "boolean",
  "accept_connection": "boolean"
}

```

#### Properties

| Name                      | Type | Required | Restrictions | Description                                    |
|---------------------------|------|----------|--------------|------------------------------------------------|
| upload_video              | bool | true     | read-only    | User can upload video when creating a post     |
| create_contribute         | bool | true     | read-only    | User can create a contribute                   |
| create_poll               | bool | true     | read-only    | User can add a poll when creating a contribute |
| locate_post               | bool | true     | read-only    | User can locate a contribute                   |
| create_post               | bool | true     | read-only    | User can create a post                         |
| create_post_with_category | bool | true     | read-only    | User can add categories when creating a post   |
| follow_user               | bool | true     | read-only    | User can follow users                          |
| request_connection        | bool | true     | read-only    | User can accept a connection                   |
| accept_connection         | bool | true     | read-only    | User can accept a connection                   |
