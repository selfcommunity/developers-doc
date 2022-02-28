---
id: "types_broadcastMessage.SCBannerType"
title: "Interface: SCBannerType"
sidebar_label: "SCBannerType"
custom_edit_url: null
---

[types/broadcastMessage](../modules/types_broadcastMessage).SCBannerType

## Properties

### added\_at

• **added\_at**: `Date`

The date the Banner was created

#### Defined in

[types/broadcastMessage.ts:46](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L46)

___

### body\_text

• `Optional` **body\_text**: `string`

The text of the banner

#### Defined in

[types/broadcastMessage.ts:29](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L29)

___

### html

• `Optional` **html**: `string`

The html to insert into the DOM
This field is used when type_banner is html_banner

#### Defined in

[types/broadcastMessage.ts:19](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L19)

___

### image

• `Optional` **image**: `string`

The image url to insert into the banner

#### Defined in

[types/broadcastMessage.ts:42](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L42)

___

### link

• `Optional` **link**: `string`

The action link of the banner

#### Defined in

[types/broadcastMessage.ts:38](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L38)

___

### link\_text

• `Optional` **link\_text**: `string`

The text of the link associated to the banner

#### Defined in

[types/broadcastMessage.ts:34](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L34)

___

### open\_in\_new\_tab

• **open\_in\_new\_tab**: `boolean`

If true tell to open the banner in new tab

#### Defined in

[types/broadcastMessage.ts:50](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L50)

___

### title

• `Optional` **title**: `string`

The title of the banner

#### Defined in

[types/broadcastMessage.ts:24](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L24)

___

### type\_banner

• **type\_banner**: [`SCBroadcastMessageBannerType`](../enums/types_broadcastMessage.SCBroadcastMessageBannerType)

The type of the banner, based on it the behaviour of the render component must be different

#### Defined in

[types/broadcastMessage.ts:13](https://github.com/selfcommunity/community-ui/blob/9148e4e/packages/sc-core/src/types/broadcastMessage.ts#L13)
