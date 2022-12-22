---
sidebar_label: Targeted Banner Visibility
sidebar_position: 1
title: Targeted Banner Visibility
---

```json
{
      "id": "integer",
      "banner": {
        "html": "string",
        "type_banner": "string"
      },
      "added_at": "string",
      "disposed_at": "string",
      "viewed_at": "string"
}
```

> Or

```json
{
    "id": "integer",
    "banner": {
        "title": "string",
        "body_text": "string",
        "link_text": "string",
        "link": "string(uri)",
        "open_in_new_tab": "boolean",
        "image": "string",
        "added_at": "string",
        "type_banner": "string"
    },
    "added_at": "string",
    "disposed_at": "string",
    "viewed_at": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions| Description          |
|---|---|---|---|----------------------|
|id|integer|false|read-only| none                 |
|banner|[TargetedHtmlBanner](/docs/apireference/v2/schemas/TargetedBannerTypes/targeted_html_banner), [TargetedNotificationBanner](/docs/apireference/v2/schemas/TargetedBannerTypes/targeted_notification_banner)|false|read-only| none                 |
|added_at|string(date-time)|false|read-only| Datetime of creation |
|disposed_at|string(date-time)|false|read-only| Datetime of disposal |
|viewed_at|string(date-time)|false|read-only| Datetime of view     |
