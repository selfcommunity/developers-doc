---
sidebar_label: Embed
sidebar_position: 1
title: Embed
---

## SCEmbedType

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|The ID of the embed|
|embed_type|string|false|Type of the embed, can be any string except `sc_vimeo`, `sc_link` or `sc_shared_object` that are used for embedded objects automatically created by the community|    
|embed_id|number|false|External id for the embed object|
|url|string|false|Url for the resource, if any|
|metadata|Record `<` string, any `>`|false|Metadata associated to this embed. It mus be a valid json object. For `embed_type` `sc_vimeo` or `sc_link `it contains metadata associated with the external resource. For `embed_type`, `sc_shared_object` it contains a field type that is the type of the object (Discussion or Post) and a `field id` that contains the id of the object shared|