---
sidebar_label: Get Event Feed
sidebar_position: 1
title: Get Event Feed
---

This endpoint retrieves the event feed.

:::info

This operation does not require authentication and subscription if the event is **public**.

This operation requires authentication and being subscribed to the event if the event is **private**.

:::

## HTTP Request

`GET /api/v2/event/{id}/feed/`

### Parameters

| Name     | In    | Type    | Required | Description                                                                                                    |
|----------|-------|---------|----------|----------------------------------------------------------------------------------------------------------------|
| id       | path  | integer | true     | A unique integer value identifying this event                                                                  |
| limit    | query | integer | false    | Number of results to return per page                                                                           |
| offset   | query | integer | false    | The initial index from which to return the results                                                             |
| ordering | query | string  | false    | Order the contents of the feed; valid values are: recent, relevance and last_activity; default value is recent |

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

fetch('/api/v2/event/{id}/feed/',
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
curl -X GET /api/v2/event/{id}/feed/ \
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

| Name       | Type                                         | Required | Restrictions | Description         |
|------------|----------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                      | false    | none         | Total results count |
| » next     | string(uri)¦null                             | false    | none         | Next page url       |
| » previous | string(uri)¦null                             | false    | none         | Previous page url   |
| » results  | [[Feed](/docs/apireference/v2/schemas/feed)] | false    | none         | List of results     |
