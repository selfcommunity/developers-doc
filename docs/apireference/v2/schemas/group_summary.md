---
sidebar_label: Group Summary
sidebar_position: 1
title: Group Summary
---

The summary of a group: it is the `group` object returned inside the contributions (discussions, posts and statuses)
addressed to a group. The complete object is the [Group](/docs/apireference/v2/schemas/group).

```json
{
  "id": "integer",
  "type": "string",
  "name": "string",
  "description": "string",
  "slug": "string",
  "privacy": "string",
  "image_bigger": "string",
  "image_big": "string",
  "image_medium": "string",
  "image_small": "string",
  "subscribers_counter": "integer",
  "managed_by": {},
  "can_manage": "boolean",
  "paywalls": []
}

```

#### Properties

| Name                | Type                                       | Required | Restrictions | Description                                                                                                                                                                       |
|---------------------|--------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                  | integer                                    | false    | read-only    | Unique integer value identifying this group                                                                                                                                       |
| type                | string                                     | false    | read-only    | Always `group`                                                                                                                                                                    |
| name                | string                                     | false    | read-only    | Unique name of the group                                                                                                                                                          |
| description         | string¦null                                | false    | read-only    | The group description                                                                                                                                                             |
| slug                | string                                     | false    | read-only    | Unique slug identifying this group in a URL                                                                                                                                       |
| privacy             | string                                     | false    | read-only    | The group privacy. Can be 'public' or 'private'                                                                                                                                   |
| image_bigger        | string                                     | false    | read-only    | Squared image - auto generated bigger size                                                                                                                                        |
| image_big           | string                                     | false    | read-only    | Squared image - auto generated big size                                                                                                                                           |
| image_medium        | string                                     | false    | read-only    | Squared image - auto generated medium size                                                                                                                                        |
| image_small         | string                                     | false    | read-only    | Squared image - auto generated small size                                                                                                                                         |
| subscribers_counter | integer                                    | false    | read-only    | Number of group subscribers                                                                                                                                                       |
| managed_by          | [User](/docs/apireference/v2/schemas/user) | false    | read-only    | The group manager                                                                                                                                                                 |
| can_manage          | boolean                                    | false    | read-only    | `true` if the logged user is an administrator of the group (the creator, the manager or a user elected by the other administrators); it is `false` if the user is not authenticated. The administrators can moderate the contributions of the group |
| paywalls            | list(object)¦null                          | false    | read-only    | The active paywalls of the group; `null` if the user is not authenticated                                                                                                         |
