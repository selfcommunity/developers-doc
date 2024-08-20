---
sidebar_label: Get Event Info
sidebar_position: 1
title: Get Event Info
---

This endpoint retrieves a specific event information.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::


## HTTP Request

`GET /api/v2/event/{id}/`

### Parameters

| Name | In   | Type   | Required | Description                                      |
|------|------|--------|----------|--------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this event |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/event/{id}/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X GET /api/v2/event/{id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description          | Schema                                       |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Event](/docs/apireference/v2/schemas/event) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

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

</TabItem>
</Tabs>
````




