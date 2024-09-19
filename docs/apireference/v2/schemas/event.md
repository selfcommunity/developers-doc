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
  "share_count": "integer",
  "start_date": "string",
  "end_date": "string",
  "recurring": "string",
  "location": "string",
  "geolocation": "string",
  "geolocation_lat": "float",
  "geolocation_lng": "float",
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

| Name                | Type                                                               | Required | Restrictions | Description                                                                                                                             |
|---------------------|--------------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| id                  | integer                                                            | false    | read-only    | Unique integer value identifying this event                                                                                             |                                                                         |
| name                | string                                                             | true     | none         | Unique name of the event                                                                                                                |
| description         | string¦null                                                        | false    | none         | The event description                                                                                                                   |
| slug                | string                                                             | false    | read-only    | Auto-generated slug identifying this event in a URL                                                                                     |
| color               | string¦null                                                        | false    | none         | The event color                                                                                                                         |
| privacy             | [privacy](/docs/apireference/v2/schemas/event#enumerated-values)   | true     | none         | Enum to define the event privacy                                                                                                        |
| visible             | boolean                                                            | false    | none         | The event visibility status                                                                                                             |
| active              | boolean                                                            | false    | none         | Is this event active?                                                                                                                   |
| show_on_feed        | boolean                                                            | false    | read-only    | Define if the contents created in this event are visibile in feed of the current user                                                   |
| subscription_status | [status](/docs/apireference/v2/schemas/event#enumerated-values)    | false    | read-only    | Enum to define the event subscription status                                                                                            |
| image_original      | string                                                             | false    | none         | The event cover image uploaded during event creation. Only for [Create Event](/docs/apireference/v2/event/create_an_event) request body |
| image_bigger        | string                                                             | false    | read-only    | Image auto generated from image_original; it maintains the aspect ratio and height and width will be less than 1200px                   |
| image_big           | string                                                             | false    | read-only    | Image auto generated from image_original; it maintains the aspect ratio and height and width will be less than 1000px                   |
| image_medium        | string                                                             | false    | read-only    | Image auto generated from image_original; it maintains the aspect ratio and height and width will be less than 600px                    |
| image_small         | string                                                             | false    | read-only    | Image auto generated from image_original; it maintains the aspect ratio and height and width will be less than 300px                    |
| subscribers_counter | integer                                                            | false    | read-only    | Number of event subscribers                                                                                                             |
| goings_counter      | integer                                                            | false    | read-only    | Number of user going to the event                                                                                                       |
| share_count         | integer                                                            | false    | read-only    | Number of shares of the event                                                                                                           |
| start_date          | string(date-time)                                                  | true     | read-only    | Datetime of event beginning                                                                                                             |
| end_date            | string(date-time)                                                  | true     | read-only    | Datetime of event conclusion                                                                                                            |
| recurring           | [recurring](/docs/apireference/v2/schemas/event#enumerated-values) | true     | none         | Enum to define the event recurring frequency                                                                                            |
| location            | [location](/docs/apireference/v2/schemas/event#enumerated-values)  | true     | none         | Enum to define the event location                                                                                                       |
| geolocation         | string                                                             | false    | none         | A string to define the event location place                                                                                             |
| geolocation_lat     | float                                                              | false    | none         | The event geolocation latitude for events with location in person                                                                       |
| geolocation_lng     | float                                                              | false    | none         | The event geolocation longitude for events with location in person                                                                      |
| link                | url                                                                | false    | none         | The event link for events with location virtual                                                                                         |
| created_at          | string(date-time)                                                  | false    | read-only    | Datetime of event creation                                                                                                              |
| created_by          | [User](/docs/apireference/v2/schemas/user)                         | false    | read-only    | The event creator                                                                                                                       |
| managed_by          | [User](/docs/apireference/v2/schemas/user)                         | false    | read-only    | The event manager                                                                                                                       |
| running             | boolean                                                            | false    | read-only    | If the event is currently underway                                                                                                      |
| running_start_date  | string(date-time)                                                  | false    | read-only    | Datetime of event                                                                                                                       |
| running_end_date    | string(date-time)                                                  | false    | read-only    | Datetime of event                                                                                                                       |
| next_start_date     | string(date-time)                                                  | false    | read-only    | Datetime of event                                                                                                                       |
| next_end_date       | string(date-time)                                                  | false    | read-only    | Datetime of event                                                                                                                       |

#### Enumerated Values

| Property            | Value      | Description                                                                            |
|---------------------|------------|----------------------------------------------------------------------------------------|
| privacy             | public     | The event is public (any user can subscribe to the event)                              |
| privacy             | private    | The event is private (only users invited can subscribe to the event)                   |
| subscription_status | null       | The user is not subscribed to the event                                                |
| subscription_status | subscribed | The user is subscribed to the event                                                    |
| subscription_status | requested  | The user has requested to subscribe to the event (available when the event is private) |
| subscription_status | invited    | The user has been invited to participate to the event                                  |
| subscription_status | going      | The user is going to the event (the user is also subscribed)                           |
| subscription_status | not_going  | The user is not going to the event (the user is also subscribed)                       |
| recurring           | never      | The event is never recurring                                                           |
| recurring           | daily      | The event is recurring daily                                                           |
| recurring           | weekly     | The event is recurring weekly                                                          |
| recurring           | monthly    | The event is recurring monthly                                                         |
| location            | in person  | The event location is in person (usually a real place)                                 |
| location            | virtual    | The event location is virtual (usually online)                                         |

