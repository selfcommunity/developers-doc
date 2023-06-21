---
sidebar_label: Media
sidebar_position: 1
title: Media
---

```json
{
  "id": "integer",
  "added_at": "string",
  "type": "string",
  "title": "string",
  "description": "string",
  "url": "string(uri)",
  "image": "string",
  "image_width": "integer",
  "image_height": "integer",
  "order": "integer",
  "embed": {}
}

```

#### Properties

| Name         | Type                                                            | Required | Restrictions | Description                                    |
|--------------|-----------------------------------------------------------------|----------|--------------|------------------------------------------------|
| id           | integer                                                         | false    | read-only    | A unique integer value identifying this  media |
| added_at     | string(date-time)                                               | false    | read-only    | Date time of media creation                    |
| type         | [string](/docs/apireference/v2/schemas/media#enumerated-values) | true     | none         | Media type                                     |
| title        | string                                                          | false    | read-only    | Media title                                    |
| description  | string                                                          | false    | read-only    | Media description                              |
| url          | string(uri)                                                     | false    | none         | Media url                                      |
| image        | string(binary)                                                  | false    | read-only    | Media image                                    |
| image_width  | integer                                                         | false    | read-only    | Media image width                              |
| image_height | integer                                                         | false    | read-only    | Media image     height                         |
| order        | integer                                                         | false    | read-only    | The order                                      |
| embed        | [Embed](/docs/apireference/v2/schemas/embed)¦null               | false    | none         | The embed obj                                  |

#### Enumerated Values

| Property | Value  | Description                                                                                                                                                             |
|----------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type     | vimeo  | Media associated to an uploaded video on vimeo platform                                                                                                                 |
| type     | url    | Media associated to a webpage url                                                                                                                                       |
| type     | embed  | Media of type embed                                                                                                                                                     |
| type     | image  | Media of type image                                                                                                                                                     |
| type     | eimage | Media of type inline image, used in [Discussion](/docs/apireference/v2/discussion/get_all_discussions) or [Post](/docs/apireference/v2/post/get_all_posts)  text editor |
| type     | doc    | Media of type document (pdf)                                                                                                                                            |
| type     | share  | Media associate to a community shared object ([Discussion](/docs/apireference/v2/schemas/discussion) or [Post](/docs/apireference/v2/schemas/post))                     |
