---
sidebar_label: User Permission
sidebar_position: 1
title: User Permission
---

```json
{
  "create_contribute": "boolean",
  "create_poll": "boolean",
  "locate_post": "boolean",
  "create_post": "boolean",
  "create_group": "boolean",
  "create_event": "boolean",
  "create_course": "boolean",
  "create_live_stream": "boolean",
  "follow_user": "boolean",
  "request_connection": "boolean",
  "accept_connection": "boolean"
}

```

#### Properties

| Name               | Type | Required | Restrictions | Description                                    |
|--------------------|------|----------|--------------|------------------------------------------------|
| create_contribute  | bool | true     | read-only    | User can create a contribute                   |
| create_poll        | bool | true     | read-only    | User can add a poll when creating a contribute |
| locate_post        | bool | true     | read-only    | User can locate a contribute                   |
| create_post        | bool | true     | read-only    | User can create a post                         |
| create_group       | bool | true     | read-only    | User can create a group                        |
| create_event       | bool | true     | read-only    | User can create an event                       |
| create_course      | bool | true     | read-only    | User can create a course                       |
| create_live_stream | bool | true     | read-only    | User can create a live stream                  |
| follow_user        | bool | true     | read-only    | User can follow users                          |
| request_connection | bool | true     | read-only    | User can accept a connection                   |
| accept_connection  | bool | true     | read-only    | User can accept a connection                   |
