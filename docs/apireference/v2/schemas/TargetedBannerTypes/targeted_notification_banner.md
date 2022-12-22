---
sidebar_label: Targeted Notification Banner
sidebar_position: 1
title: Targeted Notification Banner
---

```json
{
    "title": "string",
    "description": "string",
    "link_text": "string",
    "link": "string",
    "open_in_new_tab": "boolean",
    "image": "string",
    "added_at": "string",
    "type_banner": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|read-only|Title of the banner|
|description|string|false|read-only|Description of the banner|
|link_text|string|false|read-only|Label of the link of the banner|
|link|string|false|read-only|Url link of the banner|
|open_in_new_tab|bool|false|read-only|Url link of the banner|
|image|string|false|read-only|Url of an image|
|added_at|string(date-time)|false|read-only|Creation date of the banner|
|type_banner|string|true|read-only|Banner of type "notification_banner"|
