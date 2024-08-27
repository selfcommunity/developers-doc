---
sidebar_label: Search Events
sidebar_position: 1
title: Search Events
---

This endpoint (without params) returns the list of all events visible for the current user; this means all events with
`visible = true` and also the events with `visible = false` and subscribed by the current user. The list of events can
be filtered by some params (see the parameters section for more information).

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/event/search/`

### Parameters

| Name        | In    | Type    | Required | Description                                                                                                                    |
|-------------|-------|---------|----------|--------------------------------------------------------------------------------------------------------------------------------|
| search      | query | string  | false    | A term that will be searched for within the event name and description                                                         |
| date_filter | query | string  | false    | Filter events by date; return only events that will be running in the: past, today, tomorrow, this_week, next_week, this_month |
| follows     | query | boolean | false    | Return only events my followings (or connections) are subscribed to                                                            |
| limit       | query | integer | false    | Number of results to return per page                                                                                           |
| offset      | query | integer | false    | The initial index from which to return the results                                                                             |

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

fetch('/api/v2/event/search/',
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
curl -X GET /api/v2/event/search/ \
  -H 'Accept: application/json' \
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
