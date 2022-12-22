---
sidebar_label: Legal Page
sidebar_position: 1
title: Legal Page
---

```json
{
  "id": "integer",
  "name_and_version": "string",
  "icon_class": "string",
  "label": "string",
  "external_url": "string",
  "html_summary": "string",
  "html_body": "string",
  "order": "integer",
  "valid_from": "string",
  "valid_to": "string",
  "created_at": "string",
  "created_by": "integer",
  "ack": {
      "id": "integer",
      "accepted_at": "string",
      "not_accepted_at": "string",
      "policy_document": "integer",
      "user": "integer"
  }      
}

```

#### Properties

| Name             | Type                             | Required | Restrictions                               | Description                                                     |
|------------------|----------------------------------|----------|--------------------------------------------|-----------------------------------------------------------------|
| id               | integer                          | false    | read-only                                  | Unique integer value identifying this page                      |
| name_and_version | string                           | true     | none                                       | The name and version code for this page                         |
| icon_class       | string                           | false    | none                                       | A css class representing the icon associated to this page       |
| label            | string                           | true     | none                                       | A label for the page in the menu                                |
| external_url     | string                           | false    | none                                       | An external url for this page (in alternative to the full body) |
| html_summary     | string                           | true     | none                                       | A short html summary                                            |
| html_body        | string¦null                      | false    | none                                       | The full html body for this page                                |
| order            | integer                          | false    | none                                       | The extraction order of the page                                |
| valid_from       | string(date)                     | true     | none                                       | This page is valid from this date                               |
| valid_to         | string(date)                     | true     | none                                       | This page is valid till this date                               |
| created_at       | string(date-time)                | false    | none                                       | Datetime of creation                                            |
| created_by       | integer                          | true     | none                                       | The id of the creator of this page                              |
| ack              | [Legal Page Ack](legal_page_ack) | false    | returned only if the user is authenticated | The user's ack status for this document                         |