---
sidebar_label: Platform Url
sidebar_position: 16
title: Platform Url
---

This endpoint retrieves the platform url starting from the Authorization user token.
Using this url, the logged user (must be a staff member) can access the platform to manage the community.

:::info

This operation requires a staff member user.

:::

## HTTP Request

`GET /api/v2/user/me/platform_url/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next|query|string|false|Redirect to this relative path (eg: /moderation/flags/)|

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

fetch('/api/v2/user/me/platform_url/',
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
curl -X GET /api/v2/user/me/platform_url/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Response Schema

Status Code **200**

|Name|Type|Description|
|---|---|---|---|---|
|» platform_url|string(uri)|The URL to access the platform|
|» token_details|string|Some informative token details|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "platform_url": "https://URL/community/sso/?token=TOKEN&is_owner=1&domain=DOMAIN_URL&next=/",
    "token_details": {
        "access_token": "string",
        "expires_in": "2021-08-09T16:17:01Z",
        "token_type": "string",
        "refresh_token": "string",
        "scope": "string"
    }
}
```

</TabItem>
</Tabs>
````




