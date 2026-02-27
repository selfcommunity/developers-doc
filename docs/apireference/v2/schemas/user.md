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
  "ext_id": "string",
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

| Name                | Type                                                                         | Required | Restrictions | Description                                                                                                                                                | Note                                                                                             |
|---------------------|------------------------------------------------------------------------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| id                  | integer                                                                      | false    | read-only    | A unique integer value identifying this user                                                                                                               |
| username            | string                                                                       | false    | read-only    | The username of the user. Max 255 characters. Letters, numbers and -/_ characters                                                                          |
| real_name           | string                                                                       | false    | none         | Real name. Max 255 characters                                                                                                                              |
| avatar              | string(binary)¦null                                                          | false    | none         | The user avatar. In some endpoints such as "patch a specific user" and "add an avatar" you can pass a avatar_base64 string in alternative to avatar field. |
| ext_id              | string                                                                       | false    | read-only    | The external ID of the user. It is assigned only during signup                                                                                             |
| followings_counter  | integer¦null                                                                 | false    | read-only    | Number of followings of the user                                                                                                                           | Only if dynamic preference `configurations.follow_enabled` is `true`                             |
| followers_counter   | integer¦null                                                                 | false    | read-only    | Number of followers of the user                                                                                                                            | Only if dynamic preference `configurations.follow_enabled` is `true`                             |
| posts_counter       | integer¦null                                                                 | false    | read-only    | Number of posts created by the user                                                                                                                        | Only if dynamic preference `configurations.post_type_enabled` is `true`                          |
| discussions_counter | integer¦null                                                                 | false    | read-only    | Number of discussions created by the user                                                                                                                  | Only if dynamic preference `configurations.post_type_enabled` is `true`                          |
| polls_counter       | integer¦null                                                                 | false    | read-only    | Number of polls created by the user                                                                                                                        | Only if dynamic preference `addons.polls_enabled` is `true` or if the user has a staff role      |
| connection_status   | [string](/docs/apireference/v2/schemas/user#connection-statuses-values)¦null | false    | read-only    | The connection status between the request user and this user                                                                                               |                                                                                                  |
| categories_counter  | integer¦null                                                                 | false    | read-only    | Number of categories followed by the user                                                                                                                  |
| date_joined         | string(date-time)                                                            | false    | read-only    | Date joined to the community                                                                                                                               |
| bio                 | string                                                                       | false    | none         | User biography                                                                                                                                             |
| location            | string                                                                       | false    | none         | User location. Max 100 characters                                                                                                                          |
| location_lat_lng    | string                                                                       | false    | none         | Location in coordinates. It is populated automatically if "Google Geocoding" integration is active. Format: lat,lng                                        |
| position_lat_lng    | string                                                                       | false    | none         | User current position. Format: lat,lng                                                                                                                     |
| date_of_birth       | string(date)                                                                 | false    | none         | Date of birth. Format: YYYY-MM-DD (ISO 8601)                                                                                                               |
| description         | string                                                                       | false    | none         | User description. Max 50 characters.                                                                                                                       |
| gender              | [string](/docs/apireference/v2/schemas/user#enumerated-values)               | false    | none         | User gender. Values: Male, Female, Unspecified. Default: Unspecified                                                                                       |
| website             | string(uri)                                                                  | false    | none         | User website. Max 200 characters.                                                                                                                          |
| cover               | string(binary)¦null                                                          | false    | none         | Cover of the user                                                                                                                                          |
| tags                | [Tag](/docs/apireference/v2/schemas/tag)  ¦[]                                | false    | none         | User's tag list. List of [Tag](/docs/apireference/v2/schemas/tag)                                                                                          |
| reputation          | integer                                                                      | false    | read-only    | User reputation                                                                                                                                            |
| community_badge     | boolean                                                                      | false    | read-only    | Community badge active. Default: False                                                                                                                     |
| reg_approved        | boolean                                                                      | false    | read-only    | Registration approved (false only if users_approval_enabled=true and the user is not approved)                                                             |                                                                                                  |
| company_name        | string                                                                       | false    | read-only    | User company name                                                                                                                                          |
| company_role        | string                                                                       | false    | read-only    | User company role                                                                                                                                          |
| deleted             | boolean                                                                      | false    | read-only    | The user account deletion state                                                                                                                            |
| deleted_at          | string(date-time)                                                            | false    | read-only    | The user account deletion datetime                                                                                                                         | Only if `deleted` is `true`                                                                      |
| can_send_pm_to      | boolean                                                                      | false    | read-only    | Shows if the logged user is able to send a private message to the requested user                                                                           | Only  in [Get a specific User](/docs/apireference/v2/user/get_a_specific_user) endpoint response |

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

:::info

avatar_base64 example:

image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=

:::