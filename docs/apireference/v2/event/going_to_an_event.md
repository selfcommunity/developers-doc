---
sidebar_label: Going to Event
sidebar_position: 1
title: Going to Event
---

This endpoint allows the user to specify that he will be going to the event.

:::note

By passing the optional param `users` an event manager is able to set to going some users (if they are not subscribed
the api will first subscribe them to the event).

:::

:::info

This operation requires authentication and that the user is subscribed to the event. It requires also that the user is
the manager of the event if the `users` param is passed.

:::

## HTTP Request

`POST /api/v2/event/{id}/going/`

### Parameters

| Name  | In   | Type          | Required | Description                                                                       |
|-------|------|---------------|----------|-----------------------------------------------------------------------------------|
| id    | path | integer       | true     | A unique integer value identifying this event                                     |
| users | body | list(integer) | false    | List of id of [User](/docs/apireference/v2/schemas/user) to set going to an event |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = 'null';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/event/{id}/going/',
{
  method: 'POST',
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
curl -X POST /api/v2/event/{id}/going/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |




