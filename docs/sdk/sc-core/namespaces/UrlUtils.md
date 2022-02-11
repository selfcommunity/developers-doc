---
id: "UrlUtils"
title: "Namespace: UrlUtils"
sidebar_label: "UrlUtils"
sidebar_position: 0
custom_edit_url: null
---

List all exports

## Functions

### getDomain

▸ `Const` **getDomain**(`url`): `string`

Get domain

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[utils/url.ts:23](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/url.ts#L23)

___

### isValidUrl

▸ `Const` **isValidUrl**(`url`): `boolean`

Check a str is a valid url pattern

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`boolean`

#### Defined in

[utils/url.ts:36](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/url.ts#L36)

___

### isValidUrls

▸ `Const` **isValidUrls**(`value`, `delimiter`): `boolean`

Check a str is a valid list of urls separated by delimiter

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `delimiter` | `string` |

#### Returns

`boolean`

#### Defined in

[utils/url.ts:46](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/url.ts#L46)

___

### urlReplacer

▸ `Const` **urlReplacer**(`path`): (`params`: `object`) => `any`

Utility Url Replacer

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`fn`

▸ (`params`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `object` |

##### Returns

`any`

#### Defined in

[utils/url.ts:5](https://github.com/selfcommunity/community-ui/blob/8bbb33c/packages/sc-core/src/utils/url.ts#L5)
