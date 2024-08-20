---
sidebar_label: Get Related Events
sidebar_position: 1
title: Get Related Events
---

This endpoint retrieves the list of all the events related to the event identified by \{id}.



## HTTP Request

`GET /api/v2/event/{id}/related/`

### Parameters

| Name       | In    | Type    | Required | Description                                        |
|------------|-------|---------|----------|----------------------------------------------------|
| id         | path  | string  | true     | A unique integer value identifying this event      |
| limit      | query | integer | false    | Number of results to return per page               |
| offset     | query | integer | false    | The initial index from which to return the results |
| created_by | query | integer | false    | The integer value identifying the event creator id |


### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/event/{id}/related/',
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
curl -X GET /api/v2/event/{id}/related/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

|Name| Type                                               |Required|Restrictions|Description|
|---|----------------------------------------------------|---|---|---|
|» count| integer                                            |false|none|Total results count|
|» next| string(uri)¦null                                   |false|none|Next page url|
|» previous| string(uri)¦null                                   |false|none|Previous page url|
|» results| list([Event](/docs/apireference/v2/schemas/event)) |false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
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
  ]
}
```

</TabItem>
</Tabs>
````




