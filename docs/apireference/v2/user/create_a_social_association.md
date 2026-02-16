---
sidebar_label: Create a social association
sidebar_position: 200
title: Create a social association
---

Create a social association for the user (identified in the path)

:::info

This operation requires that the user is the same or has the admin role.

:::

## HTTP Request

`POST /api/v2/user/{id}/provider/`

### Parameters

| Name            | In   | Type   | Required | Description                                                                                                                              |
|-----------------|------|--------|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| id              | path | string | true     | A unique integer value identifying this user                                                                                             | |
| ext_id          | body | string | true     | A unique external id identifying the user                                                                                                |
| provider        | body | string | true     | The external provider of the ext_id. For example: facebook, google, linkedin, twitter, keycloak, azure-ad                                |
| profile_url     | body | string | false    | An optional url to the social profile; only for providers other than external                                                            |
| metadata        | body | string | false    | An optional json only for the external provider                                                                                          |
| show_in_profile | body | bool   | false    | Default false. An optional flag to indicate if the social association can be showed in the user profile. Provider must not be 'external' |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "user_id": "integer",
  "ext_id": "string",
  "provider": "string"
}';
const headers = {
  'Authorization':'Bearer {access_token}',
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/provider/',
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
curl -X POST /api/v2/user/{id}/provider/ \
  -H 'Authorization: Bearer {access_token}'
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -d '{
  "user_id": "integer",
  "ext_id": "string",
  "provider": "string"
 }'
```
</TabItem>

</Tabs>

````

## Responses

| Status | Meaning                                                      | Schema                                                                         |
|--------|--------------------------------------------------------------|--------------------------------------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | [User External Provider](/docs/apireference/v2/schemas/user_external_provider) |

### Example responses

````mdx-code-block

<Tabs defaultValue="201" values={[{ label: '201', value: '201', }]}>
<TabItem value="201">

```json
{
    "user_id": "integer",
    "provider": "string",
    "ext_id": "string",
    "profile_url": "string(uri)",
    "show_in_profile":  "boolean"
}
```

</TabItem>
</Tabs>
````




