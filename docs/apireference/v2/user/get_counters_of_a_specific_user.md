---
sidebar_label: Get Counters of a Specific User
sidebar_position: 5
title: Get Counters of a Specific User
---

This endpoint retrieves the counters of a specific user identified by {id}

:::info

This operation does not require authentication only if `configurations.content_availability` is true.

:::

## HTTP Request

`GET /api/v2/user/{id}/counters/`

### Parameters

| Name | In   | Type   | Required | Description                                   |
|------|------|--------|----------|-----------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this user. |

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

fetch('/api/v2/user/{id}/counters/',
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
curl -X GET /api/v2/user/{id}/counters/ \
  -H 'Accept: application/json'
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

| Field                        | Description                                        | Note                                                                                        |
|------------------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| discussions                  | Number of discussions created by the user          | Only if dynamic preference `configurations.discussion_type_enabled` is `true`               |
| posts                        | Number of posts created by the user                | Only if dynamic preference `configurations.post_type_enabled` is `true`                     |
| statuses                     | Number of statuses created by the user             | Only if dynamic preference `configurations.status_type_enabled` is `true`                   |
| polls                        | Number of polls created by the user                | Only if dynamic preference `addons.polls_enabled` is `true` or if the user has a staff role |
| followings                   | Number of followings of the user                   | Only if dynamic preference `configurations.follow_enabled` is `true`                        |
| followers                    | Number of followers of the user                    | Only if dynamic preference `configurations.follow_enabled` is `true`                        |
| connection_requests_sent     | Number of connection requests sent by the user     | Only if dynamic preference `configurations.follow_enabled` is `false`                       |
| connection_requests_received | Number of connection requests received by the user | Only if dynamic preference `configurations.follow_enabled` is `false`                       |
| connections                  | Number of connections of the user                  | Only if dynamic preference `configurations.follow_enabled` is `false`                       |
| categories                   | Number of categories followed by the user          |                                                                                             |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "discussions": "integer",
    "polls": "integer",
    "posts": "integer",
    "statuses": "integer",
    "followings": "integer",
    "followers": "integer",
    "categories": "integer"
}
```

</TabItem>
</Tabs>
````




