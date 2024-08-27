---
sidebar_label: Get User Events to Address a Contribution
sidebar_position: 1
title: Get User Events to Address a Contribution
---

This endpoint returns the user events to address a contribution.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/user/event/events_to_address_a_contribution/`

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer <token>'
};

fetch('/api/v2/user/event/events_to_address_a_contribution/',
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
curl -X GET /api/v2/user/event/events_to_address_a_contribution/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <token>'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                             |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | list([Event](/docs/apireference/v2/schemas/event)) |
