---
sidebar_label: Patch Event
sidebar_position: 1
title: Patch Event
---

This endpoint patches a specific event.

:::info

This operation requires the event manager role.

:::

:::note

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

For example to change `privacy` or `image_original` etc. fields.

:::


## HTTP Request

`PATCH /api/v2/event/{id}/`

### Parameters

| Name | In   | Type                                               | Required | Description                                      |
|------|------|----------------------------------------------------|----------|--------------------------------------------------|
| id   | path | string                                             | true     | A unique integer value identifying this event |
| body | body | [Event](/docs/apireference/v2/schemas/event) | false    | The request body(event params)                |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "image_original": "string"
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "image_original": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/event/{id}/',
{
  method: 'PATCH',
  body: inputBody,
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
curl -X PATCH /api/v2/event/{id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Event](/docs/apireference/v2/schemas/event)|

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




