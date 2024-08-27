---
sidebar_label: Get User Events
sidebar_position: 1
title: Get User Events
---

This endpoint return the list of events the user is subscribed to.

:::info

This operation does not require authentication.

:::

## HTTP Request

`GET /api/v2/user/{id}/events/`

### Parameters

| Name | In   | Type    | Required | Description                                  |
|------|------|---------|----------|----------------------------------------------|
| id   | path | integer | true     | A unique integer value identifying this user |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/events/',
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
curl -X GET /api/v2/user/{id}/events/ \
  -H 'Accept: application/json'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                             |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | list([Event](/docs/apireference/v2/schemas/event)) |
