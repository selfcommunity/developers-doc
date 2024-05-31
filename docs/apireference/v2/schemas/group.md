---
sidebar_label: Group
sidebar_position: 1
title: Group
---

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "slug": "string",
  "color": "string",
  "privacy": {},
  "visible": "boolean",
  "active": "boolean",
  "subscription_status": {},
  "subscribed": "boolean",
  "image_bigger": "string",
  "image_original": "string",
  "image_big": "string",
  "image_medium": "string",
  "image_small": "string",
  "emotional_image": "string",
  "emotional_image_original": "string",
  "emotional_image_position": "integer",
  "subscribers_counter": "integer",
  "created_at": "string",
  "created_by": {},
  "managed_by": {}
}

```

#### Properties

| Name                     | Type                                                            | Required | Restrictions | Description                                                                                                                              |
|--------------------------|-----------------------------------------------------------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| id                       | integer                                                         | false    | read-only    | Unique integer value identifying this group                                                                                              |                                                                         |
| name                     | string                                                          | true     | none         | Unique name of the group                                                                                                                 |
| description              | string¦null                                                     | false    | none         | The group description                                                                                                                    |
| slug                     | string                                                          | false    | none         | Unique slug identifying this group in a URL                                                                                              |
| color                    | string¦null                                                     | false    | none         | The group color                                                                                                                          |
| privacy                  | string                                                          | true     | none         | The group privacy. Can be 'public' or 'private'                                                                                          |
| visible                  | boolean                                                         | false    | none         | The group visibility status                                                                                                              |
| active                   | boolean                                                         | false    | none         | Is this group active?                                                                                                                    |
| subscription_status      | [status](/docs/apireference/v2/schemas/group#enumerated-values) | false    | none         | Enum to define the group subscription status                                                                                             |
| image_original           | string                                                          | false    | none         | The group profile image uploaded during group creation. Only for [Create Group](/docs/apireference/v2/group/create_a_group) request body |
| image_bigger             | string                                                          | false    | read-only    | Squared image - auto generated bigger size                                                                                               |
| image_big                | string                                                          | false    | read-only    | Squared image - auto generated big size                                                                                                  |
| image_medium             | string                                                          | false    | read-only    | Squared image - auto generated medium size                                                                                               |
| image_small              | string                                                          | false    | read-only    | Squared image - auto generated small size                                                                                                |
| emotional_image_original | string                                                          | false    | none         | The group cover image uploaded during group creation. Only for [Create Group](/docs/apireference/v2/group/create_a_group) request body   |
| emotional_image          | string                                                          | false    | none         | Landscape format image for group hub (1920x1080) if passed empty a default image will be used                                            |
| emotional_image_position | integer                                                         | false    | none         | Css background-position                                                                                                                  |
| subscribers_counter      | integer                                                         | false    | none         | Number of group subscribers                                                                                                              |
| created_at               | string(date-time)                                               | false    | read-only    | Datetime of group creation                                                                                                               |
| created_by               | [User](/docs/apireference/v2/schemas/user)                      | false    | read-only    | The group creator                                                                                                                        |
| managed_by               | [User](/docs/apireference/v2/schemas/user)                      | false    | read-only    | The group manager                                                                                                                        |


#### Enumerated Values

| Property            | Value      | Description                                                                    |
|---------------------|------------|--------------------------------------------------------------------------------|
| subscription_status | null       | The user is not subscribed to the group                                        |
| subscription_status | subscribed | The user is subscribed to the group                                            |
| subscription_status | requested  | The user has requested to join the group (available when the group is private) |
| subscription_status | invited    | The user has been invited to join to the group                                 |


