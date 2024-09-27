---
sidebar_label: Get Subscribed Events
sidebar_position: 1
title: Get Subscribed Events
---

This endpoint retrieves all events the user is subscribed to; it will return only the not ended events.
If you want to retrieve only the events created by a specific user use the created_by parameter.
If you want to retrieve the past events use the past parameter.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/event/`

### Parameters

| Name                | In    | Type    | Required | Description                                                                            |
|---------------------|-------|---------|----------|----------------------------------------------------------------------------------------|
| subscription_status | query | string  | false    | Filter by subscription [status](/docs/apireference/v2/schemas/event#enumerated-values) |
| past                | query | boolean | false    | Return only past events (events already ended) or events not ended (default)           |
| created_by          | query | integer | false    | Return only events created by this user id                                             |
| recurring           | query | string  | false    | Filter by recurring [recurring](/docs/apireference/v2/schemas/event#enumerated-values) |
| location            | query | string  | false    | Filter by location [location](/docs/apireference/v2/schemas/event#enumerated-values)   |
| limit               | query | integer | false    | Number of results to return per page                                                   |
| offset              | query | integer | false    | The initial index from which to return the results                                     |

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

fetch('/api/v2/event/',
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
curl -X GET /api/v2/event/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema |
|--------|---------------------------------------------------------|----------------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | Inline |

### Response Schema

Status Code **200**

| Name       | Type                                               | Required | Restrictions | Description         |
|------------|----------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                            | false    | none         | Total results count |
| » next     | string(uri)¦null                                   | false    | none         | Next page url       |
| » previous | string(uri)¦null                                   | false    | none         | Previous page url   |
| » results  | list([Event](/docs/apireference/v2/schemas/event)) | false    | none         | List of results     |
