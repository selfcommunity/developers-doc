---
sidebar_label: Patch Event
sidebar_position: 1
title: Patch Event
---

This endpoint patches a specific event.

:::info

This operation requires authentication and that the user is the manager of the event.

:::

:::note

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

For example to change only `privacy` or `image_original` fields.

:::

## HTTP Request

`PATCH /api/v2/event/{id}/`

### Parameters

| Name | In   | Type                                         | Required | Description                                   |
|------|------|----------------------------------------------|----------|-----------------------------------------------|
| id   | path | integer                                      | true     | A unique integer value identifying this event |
| body | body | [Event](/docs/apireference/v2/schemas/event) | true     | The request body (event params)               |

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

| Status | Meaning                                                 | Description          | Schema                                       |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Event](/docs/apireference/v2/schemas/event) |
