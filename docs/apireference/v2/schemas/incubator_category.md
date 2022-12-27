---
sidebar_label: Incubator Category
sidebar_position: 1
title: Incubator Category
---

```json
{
  "id": "integer",
  "name": "string",
  "slug": "string",
  "slogan": "string",
  "approved_category": {},
  "added_at": "string"
}

```

#### Properties

|Name| Type                                               |Required|Restrictions| Description                                                                              |
|---|----------------------------------------------------|---|---|------------------------------------------------------------------------------------------|
|id| integer                                            |false|read-only| A unique integer value identifying this category                                         |
|name| string                                             |true|none| Unique name of the category                                                              |
|slug| string                                             |true|none| Unique slug identifying this category in a URL (pass `_GENERATE_` to auto generate slug) |
|slogan| string¦null                                        |false|none| Short slogan to describe the category                                                    |
|approved_category| [Category](/docs/apireference/v2/schemas/category) |false|none| Category created from incubator                                                          |
|added_at| string(date-time)                                  |false|read-only| Added at date time                                                                       |
|status| [integer](/docs/apireference/v2/schemas/incubator_category#enumerated-values)                                        |true|none| Status incubator                                                                         |

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|0|Pending|
|status|1|Proposal|
|status|2|Approved|
|status|3|Ignored|
