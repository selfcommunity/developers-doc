---
sidebar_label: Create a Category
sidebar_position: 1
title: Create a Category
---

This endpoint allow to create a Category.

:::info

This operation requires admin role.

:::

## HTTP Request

`POST /api/v2/category/`

### Parameters

Please refer to the schema [Category](/docs/apireference/v2/schemas/category) for the required fields.

## Response

| Status | Meaning                                                      | Description          | Schema                                             |
|--------|--------------------------------------------------------------|----------------------|----------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | [Category](/docs/apireference/v2/schemas/category) |

