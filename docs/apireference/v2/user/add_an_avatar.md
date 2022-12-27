---
sidebar_label: Add an Avatar to My Avatars
sidebar_position: 100
title: Add an Avatar to My Avatars
---

This endpoint adds an avatar to my avatars

:::info

This operation requires authentication.

:::


## HTTP Request

`POST /api/v2/user/avatar/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|avatar|body/formdata|file|true|Avatar of the user|

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
var formdata = new FormData();
formdata.append("avatar", fileInput.files[0], "URL");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("/api/v2/user/avatar/", requestOptions)
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
curl --location --request POST '/api/v2/user/avatar/' \
--header 'Authorization: Bearer {access_token}' \
--form 'avatar=@"URL"'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Avatar](/docs/apireference/v2/schemas/avatar)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "id": "integer",
    "primary": "boolean",
    "avatar": "string(uri)",
    "date_uploaded": "string",
    "user": "integer"
}
```

</TabItem>
</Tabs>
````