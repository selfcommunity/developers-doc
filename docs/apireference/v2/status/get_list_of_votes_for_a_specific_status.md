---
sidebar_label: Get List of Votes for a Specific Status
sidebar_position: 8
title: Get List of Votes for a Specific Status
---

This endpoint retrieves all votes for a specific status

:::info

This operation requires authentication only if `content_availability` community option is false.

:::


## HTTP Request

`GET /api/v2/status/{id}/vote/`

### Parameters

| Name   | In    | Type    | Required | Description                                         |
|--------|-------|---------|----------|-----------------------------------------------------|
| id     | path  | string  | true     | A unique integer value identifying this status.     |
| limit  | query | integer | false    | Number of results to return per page.               |
| offset | query | integer | false    | The initial index from which to return the results. |

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

fetch('/api/v2/status/{id}/vote/',
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
curl -X GET /api/v2/status/{id}/vote/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

### Response Schema

Status Code **200**

| Name       | Type                      | Required | Restrictions | Description         |
|------------|---------------------------|----------|--------------|---------------------|
| » count    | integer                   | true     | none         | Total results count |
| » next     | string¦null               | false    | none         | Next page url       |
| » previous | string¦null               | false    | none         | Previous page url   |
| » results  | list([Vote](#schemavote)) | true     | none         | List of results     |


### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "string",
  "previous": "string",
  "results": [
      {
        "user": {
          "id": 0,
          "username": "string",
          "real_name": "string",
          "email": "user@example.com",
          "email_isvalid": true,
          "date_joined": "2019-08-24T14:15:22Z",
          "bio": "string",
          "location": "string",
          "location_lat_lng": "string",
          "position_lat_lng": "string",
          "date_of_birth": "2019-08-24",
          "description": "string",
          "gender": "Male",
          "status": "a",
          "website": "https://example.com",
          "avatar": "string",
          "cover": "string",
          "ext_id": "string",
          "tags": [
            {
              "id": 0,
              "active": true,
              "type": "user",
              "name": "string",
              "description": "string",
              "color": "string",
              "visible": true,
              "deleted": true,
              "created_at": "2019-08-24T14:15:22Z"
            }
          ],
          "reputation":111,
          "followings_counter": 0,
          "followers_counter": 0,
          "posts_counter": 0,
          "discussions_counter": 0,
          "statuses_counter": 0,
          "polls_counter": 0
        },
        "voted_at": "2019-08-24T14:15:22Z"
        }
  ]
}
```

</TabItem>
</Tabs>
````




