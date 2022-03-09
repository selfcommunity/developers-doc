---
id: "types_embed.SCEmbedType"
title: "Interface: SCEmbedType"
sidebar_label: "SCEmbedType"
custom_edit_url: null
---

[types/embed](../modules/types_embed.md).SCEmbedType

Interface SCEmbedType.
Embed Schema.

## Properties

### embed\_id

• **embed\_id**: `number`

External id for the embed object

#### Defined in

[types/embed.ts:21](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/embed.ts#L21)

___

### embed\_type

• **embed\_type**: `string`

Type of the embed, can be any string except
sc_vimeo, sc_link or sc_shared_object that are used
for embedded objects automatically created by the community

#### Defined in

[types/embed.ts:16](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/embed.ts#L16)

___

### id

• **id**: `number`

Id of the embed

#### Defined in

[types/embed.ts:9](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/embed.ts#L9)

___

### metadata

• **metadata**: `Record`<`string`, `any`\>

Metadata associated to this embed. It mus be a valid json object.
For embed_type sc_vimeo or sc_link it contains metadata associated
with the external resource. For embed_type sc_shared_object it contains a field
type that is the type of the object (Discussion or Post) and a field id
that contains the id of the object shared

#### Defined in

[types/embed.ts:35](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/embed.ts#L35)

___

### url

• `Optional` **url**: `string`

Url for the resource, if any

#### Defined in

[types/embed.ts:26](https://github.com/selfcommunity/community-ui/blob/de7e3c8/packages/sc-core/src/types/embed.ts#L26)
