---
sidebar_label: User
sidebar_position: 1
title: User
---

```json
{
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
  "deleted": "boolean",
  "company_name": "string",
  "company_role": "string"
}

```

#### Properties

| Name                | Type                                                                         | Required | Restrictions | Description                                                                                                         | Note                                                                                        |
|---------------------|------------------------------------------------------------------------------|----------|--------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                  | integer                                                                      | false    | read-only    | A unique integer value identifying this user                                                                        |
| username            | string                                                                       | false    | read-only    | The username of the user. Max 255 characters. Letters, numbers and -/_ characters                                   |
| real_name           | string                                                                       | false    | none         | Real name. Max 255 characters                                                                                       |
| avatar              | string(binary)¦null                                                          | false    | none         | The user avatar                                                                                                     |
| ext_id              | integer                                                                      | false    | read-only    | The external ID of the user. It is assigned only during signup                                                      |
| followings_counter  | integer¦null                                                                 | false    | read-only    | Number of followings of the user                                                                                    | Only if dynamic preference `configurations.follow_enabled` is `true`                        |
| followers_counter   | integer¦null                                                                 | false    | read-only    | Number of followers of the user                                                                                     | Only if dynamic preference `configurations.follow_enabled` is `true`                        |
| posts_counter       | integer¦null                                                                 | false    | read-only    | Number of posts created by the user                                                                                 | Only if dynamic preference `configurations.post_type_enabled` is `true`                     |
| discussions_counter | integer¦null                                                                 | false    | read-only    | Number of discussions created by the user                                                                           | Only if dynamic preference `configurations.post_type_enabled` is `true`                     |
| polls_counter       | integer¦null                                                                 | false    | read-only    | Number of polls created by the user                                                                                 | Only if dynamic preference `addons.polls_enabled` is `true` or if the user has a staff role |
| connection_status   | [string](/docs/apireference/v2/schemas/user#connection-statuses-values)¦null | false    | read-only    | The connection status between the request user and this user                                                        |                                                                                             |
| categories_counter  | integer¦null                                                                 | false    | read-only    | Number of categories followed by the user                                                                           |
| date_joined         | string(date-time)                                                            | false    | read-only    | Date joined to the community                                                                                        |
| bio                 | string                                                                       | false    | none         | User biography                                                                                                      |
| location            | string                                                                       | false    | none         | User location. Max 100 characters                                                                                   |
| location_lat_lng    | string                                                                       | false    | none         | Location in coordinates. It is populated automatically if "Google Geocoding" integration is active. Format: lat,lng |
| position_lat_lng    | string                                                                       | false    | none         | User current position. Format: lat,lng                                                                              |
| date_of_birth       | string(date)                                                                 | false    | none         | Date of birth. Format: YYYY-MM-DD (ISO 8601)                                                                        |
| description         | string                                                                       | false    | none         | User description. Max 50 characters.                                                                                |
| gender              | [string](/docs/apireference/v2/schemas/user#enumerated-values)               | false    | none         | User gender. Values: Male, Female, Unspecified. Default: Unspecified                                                |
| website             | string(uri)                                                                  | false    | none         | User website. Max 200 characters.                                                                                   |
| cover               | string(binary)¦null                                                          | false    | none         | Cover of the user                                                                                                   |
| tags                | [Tag](/docs/apireference/v2/schemas/tag)  ¦[]                                | false    | none         | User's tag list. List of [Tag](/docs/apireference/v2/schemas/tag)                                                   |
| reputation          | integer                                                                      | false    | read-only    | User reputation                                                                                                     |
| community_badge     | boolean                                                                      | false    | read-only    | Community badge active. Default: False                                                                              |
| reg_approved        | boolean                                                                      | false    | read-only    | Registration approved (false only if users_approval_enabled=true and the user is not approved)                      |                                                                                             |
| company_name        | string                                                                       | false    | read-only    | User company name                                                                                                   |
| company_role        | string                                                                       | false    | read-only    | User company role                                                                                                   |
| deleted             | boolean                                                                      | false    | read-only    | The user account deletion state                                                                                     |
| deleted_at          | string(date-time)                                                            | false    | read-only    | The user account deletion datetime                                                                                  | Only if `deleted` is `true`                                                                 |

#### Enumerated Values

| Property | Value       | Description |
|----------|-------------|-------------|
| gender   | Male        | Male        |
| gender   | Female      | Female      |
| gender   | Unspecified | Unspecified |

#### Connection statuses values

| Property          | Value                       | Description                                                 |
|-------------------|-----------------------------|-------------------------------------------------------------|
| connection_status | null                        | No connection status between the request user and this user |
| connection_status | followed                    | This user is followed                                       |
| connection_status | connected                   | This user is connected (friend)                             |
| connection_status | sent_connection_request     | Connection (friendship) request sent to this user           |
| connection_status | received_connection_request | Connection (friendship) request received from this user     |

:::info

It is possible to define additional custom fields for the user.
For further information on how these custom fields (user's metadata) work, refer to the following
guide
[User's custom fields (metadata)](/docs/apireference/v2/usermetadata/)

:::