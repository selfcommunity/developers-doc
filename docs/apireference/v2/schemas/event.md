---
sidebar_label: Event
sidebar_position: 1
title: Event
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
  "show_on_feed": "boolean",
  "subscription_status": {},
  "image_bigger": "string",
  "image_big": "string",
  "image_medium": "string",
  "image_small": "string",
  "subscribers_counter": "integer",
  "goings_counter": "integer",
  "start_date": "string",
  "end_date": "string",
  "recurring": "string",
  "location": "string",
  "geolocation": "string",
  "geolocation_lat": "integer",
  "geolocation_lng": "integer",
  "link": "string",
  "created_at": "string",
  "created_by": {},
  "managed_by": {},
  "running": "boolean",
  "running_start_date": "string",
  "running_end_date": "string",
  "next_start_date": "string",
  "next_end_date": "string"
}

```

#### Properties

| Name                | Type                                                            | Required | Restrictions | Description                                                                                                                             |
|---------------------|-----------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| id                  | integer                                                         | false    | read-only    | Unique integer value identifying this event                                                                                             |                                                                         |
| name                | string                                                          | true     | none         | Unique name of the event                                                                                                                |
| description         | string¦null                                                     | false    | none         | The event description                                                                                                                   |
| slug                | string                                                          | false    | none         | Unique slug identifying this event in a URL                                                                                             |
| color               | string¦null                                                     | false    | none         | The event color                                                                                                                         |
| privacy             | string                                                          | true     | none         | The event privacy. Can be 'public' or 'private'                                                                                         |
| visible             | boolean                                                         | false    | none         | The event visibility status                                                                                                             |
| active              | boolean                                                         | false    | none         | Is this event active?                                                                                                                   |
| show_on_feed        | boolean                                                         | false    | none         | The event visibility on  feed                                                                                                           |
| subscription_status | [status](/docs/apireference/v2/schemas/event#enumerated-values) | false    | none         | Enum to define the event subscription status                                                                                            |
| image_original      | string                                                          | false    | none         | The event cover image uploaded during event creation. Only for [Create Event](/docs/apireference/v2/event/create_an_event) request body |
| image_bigger        | string                                                          | false    | read-only    | Squared image - auto generated bigger size                                                                                              |
| image_big           | string                                                          | false    | read-only    | Squared image - auto generated big size                                                                                                 |
| image_medium        | string                                                          | false    | read-only    | Squared image - auto generated medium size                                                                                              |
| image_small         | string                                                          | false    | read-only    | Squared image - auto generated small size                                                                                               |
| subscribers_counter | integer                                                         | false    | none         | Number of event subscribers                                                                                                             |
| goings_counter      | integer                                                         | false    | none         | Number of user going to the event                                                                                                       |
| start_date          | string(date-time)                                               | false    | read-only    | Datetime of event beginning                                                                                                             |
| end_date            | string(date-time)                                               | false    | read-only    | Datetime of event conclusion                                                                                                            |
| recurring           | string                                                          | false    | none         | The event frequency. Can be one of these values: 'never','daily','weekly','monthly'                                                     |
| location            | string                                                          | false    | none         | The event location. Can be 'in person' or 'virtual'                                                                                     |
| geolocation         | string                                                          | false    | none         | The event address                                                                                                                       |
| geolocation_lat     | integer                                                         | false    | none         | The event address latitude                                                                                                              |
| geolocation_lng     | integer                                                         | false    | none         | The event  address longitude                                                                                                            |
| link                | string                                                          | false    | none         | The event link (when it is online)                                                                                                      |
| created_at          | string(date-time)                                               | false    | read-only    | Datetime of event creation                                                                                                              |
| created_by          | [User](/docs/apireference/v2/schemas/user)                      | false    | read-only    | The event creator                                                                                                                       |
| managed_by          | [User](/docs/apireference/v2/schemas/user)                      | false    | read-only    | The event manager                                                                                                                       |
| running             | boolean                                                         | false    | none         | If the event is currently underway                                                                                                      |
| running_start_date  | string(date-time)                                               | false    | read-only    | Datetime of event                                                                                                                       |
| running_end_date    | string(date-time)                                               | false    | read-only    | Datetime of event                                                                                                                       |
| next_start_date     | string(date-time)                                               | false    | read-only    | Datetime of event                                                                                                                       |
| next_end_date       | string(date-time)                                               | false    | read-only    | Datetime of event                                                                                                                       |

#### Enumerated Values

| Property            | Value      | Description                                                                            |
|---------------------|------------|----------------------------------------------------------------------------------------|
| subscription_status | null       | The user is not subscribed to the event                                                |
| subscription_status | subscribed | The user is subscribed to the event                                                    |
| subscription_status | requested  | The user has requested to subscribe to the event (available when the event is private) |
| subscription_status | invited    | The user has been invited to participate to the event                                  |
| subscription_status | going      | The user is going to the event                                                         |
| subscription_status | not_going  | The user is not going to the event                                                     |


