---
sidebar_label: Get Course Joined Users
sidebar_position: 1
title: Get Course Joined Users
---

This endpoint retrieves the list of joined users to the course identified by `{id}`.<br/>
By default joined users means:

- user with `join_status` equal to `manager`;
- user with `join_status` equal to `joined`.

If you need more or less roles use the param `statuses` (only `creator`, `manager` and `joined` are valid status for
this route).

:::info
This operation requires the course creator or manager role if the option `hide_member_count` is active.<br/>
If the option `hide_member_count` is not active and the course `privacy` is:

- empty string (draft mode): only managers can see the users that joined the course;
- `open` and `private`: anyone can see the users that joined the course;
- `secret`: only invited members can see the users that joined the course.

:::

## HTTP Request

`GET /api/v2/course/{id}/join/`

### Parameters

| Name     | In    | Type                | Required | Description                                                                                                                                                                                   |
|----------|-------|---------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id       | path  | string              | true     | A unique integer value identifying this course                                                                                                                                                |
| limit    | query | integer             | false    | Number of results to return per page                                                                                                                                                          |
| offset   | query | integer             | false    | The initial index from which to return the results                                                                                                                                            |
| statuses | query | list(string)¦string | false    | Filter by [join_status](/docs/apireference/v2/schemas/course#enumerated-values); default: `["manager", "joined"]`.<br/>Only `creator`, `manager` and `joined` are valid status for this route |

#### Enumerated Values

| Parameter     | Value   | Description                      |
|---------------|---------|----------------------------------|
| » join_status | creator | The creator of the course        |
| » join_status | manager | The managers of the course       |
| » join_status | joined  | The users that joined the course |

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

fetch('/api/v2/course/{id}/join/',
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
curl -X GET /api/v2/course/{id}/join/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
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

| Name       | Type                                                             | Required | Restrictions | Description         |
|------------|------------------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                          | false    | none         | Total results count |
| » next     | string(uri)¦null                                                 | false    | none         | Next page url       |
| » previous | string(uri)¦null                                                 | false    | none         | Previous page url   |
| » results  | list([User Minimal](/docs/apireference/v2/schemas/user_minimal)) | false    | none         | List of users       |
