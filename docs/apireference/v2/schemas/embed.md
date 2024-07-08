---
sidebar_label: Embed
sidebar_position: 1
title: Embed
---

```json
{
  "id": "integer",
  "embed_type": "string",
  "embed_id": "string",
  "url": "string",
  "metadata": {}
}

```

#### Properties

| Name       | Type                                                            | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------|-----------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id         | integer                                                         | false    | read-only    | A unique integer value identifying this embed                                                                                                                                                                                                                                                                                                                                                                         |
| embed_type | [string](/docs/apireference/v2/schemas/embed#enumerated-values) | true     | none         | Type of the embed, can be any string except `sc_link` or `sc_shared_object` that are used for embedded objects auomatically created by the community                                                                                                                                                                                                                                                                  |
| embed_id   | string                                                          | true     | none         | External id for the embed object                                                                                                                                                                                                                                                                                                                                                                                      |
| url        | string(uri)¦null                                                | false    | none         | Url for the resource, if any                                                                                                                                                                                                                                                                                                                                                                                          |
| metadata   | json                                                            | false    | none         | Metadata associated to this embed. It mus be a valid json object. For embed_type  `sc_link` it contains metadata associated with the external resource. For embed_type `sc_shared_object` it contains a field `type` that is the type of the object ([Discussion](/docs/apireference/v2/schemas/discussion) or [Post](/docs/apireference/v2/schemas/post)) and a field `id` that contains the id of the object shared |

#### Enumerated Values

| Parameter  | Value            | Description                                                                                                                                                                                           |
|------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| embed_type | sc_link          | Embed of type link. This type is used internally by the community                                                                                                                                     |
| embed_type | sc_shared_object | Embed of type shared object. This type is used internally by the community when the user share a [Discussion](/docs/apireference/v2/schemas/discussion) or [Post](/docs/apireference/v2/schemas/post) |
