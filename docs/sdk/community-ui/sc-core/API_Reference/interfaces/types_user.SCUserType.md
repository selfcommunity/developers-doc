---
id: "types_user.SCUserType"
title: "Interface: SCUserType"
sidebar_label: "SCUserType"
custom_edit_url: null
---

[types/user](../modules/types_user.md).SCUserType

## Properties

### avatar

• **avatar**: `string`

Avatar of the user.

#### Defined in

[types/user.ts:101](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L101)

___

### bio

• **bio**: `string`

User biography.

#### Defined in

[types/user.ts:56](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L56)

___

### connection\_requests\_received\_counter

• `Optional` **connection\_requests\_received\_counter**: `number`

Number of connection requests received by the user.

#### Defined in

[types/user.ts:141](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L141)

___

### connection\_requests\_sent\_counter

• `Optional` **connection\_requests\_sent\_counter**: `number`

Number of connection requests sent by the user.

#### Defined in

[types/user.ts:136](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L136)

___

### connection\_status

• `Optional` **connection\_status**: `string`

The connection status between the request user and this user.

#### Defined in

[types/user.ts:131](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L131)

___

### connections\_counter

• `Optional` **connections\_counter**: `number`

Number of connections of the user.

#### Defined in

[types/user.ts:146](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L146)

___

### cover

• `Optional` **cover**: `string`

Image Cover of the user.

#### Defined in

[types/user.ts:106](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L106)

___

### date\_joined

• **date\_joined**: `Date`

Date joined to the community.

#### Defined in

[types/user.ts:51](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L51)

___

### date\_of\_birth

• `Optional` **date\_of\_birth**: `Date`

Date of birth. Format: YYYY-MM-DD (ISO 8601).

#### Defined in

[types/user.ts:76](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L76)

___

### description

• **description**: `string`

User description.

#### Defined in

[types/user.ts:81](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L81)

___

### discussions\_counter

• `Optional` **discussions\_counter**: `number`

Number of discussions created by the user.

#### Defined in

[types/user.ts:166](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L166)

___

### email

• `Optional` **email**: `string`

Email of the user.

#### Defined in

[types/user.ts:41](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L41)

___

### email\_isvalid

• `Optional` **email\_isvalid**: `boolean`

Email is valid. Default: False.

#### Defined in

[types/user.ts:46](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L46)

___

### ext\_id

• `Optional` **ext\_id**: `number`

The external ID of the user. It is assigned only during signup if necessary.

#### Defined in

[types/user.ts:111](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L111)

___

### followers\_counter

• `Optional` **followers\_counter**: `number`

Number of followers of the user

#### Defined in

[types/user.ts:156](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L156)

___

### followings\_counter

• `Optional` **followings\_counter**: `number`

Number of followings of the user

#### Defined in

[types/user.ts:151](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L151)

___

### gender

• **gender**: `string`

Gender of the user. Values: Male, Female, Unspecified. Default: Unspecified.

#### Defined in

[types/user.ts:86](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L86)

___

### id

• **id**: `number`

The ID of the user.

#### Defined in

[types/user.ts:26](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L26)

___

### location

• **location**: `string`

Location

#### Defined in

[types/user.ts:61](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L61)

___

### location\_lat\_lng

• `Optional` **location\_lat\_lng**: `string`

Location in coordinates. Format: lat,lng.

#### Defined in

[types/user.ts:66](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L66)

___

### permission

• `Optional` **permission**: `string`[]

List of user permission. Only for the resource /user/me/.

#### Defined in

[types/user.ts:126](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L126)

___

### polls\_counter

• `Optional` **polls\_counter**: `number`

Number of polls created by the user.

#### Defined in

[types/user.ts:176](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L176)

___

### position\_lat\_lng

• `Optional` **position\_lat\_lng**: `string`

User current position. Format: lat,lng.

#### Defined in

[types/user.ts:71](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L71)

___

### posts\_counter

• `Optional` **posts\_counter**: `number`

Number of posts created by the user.

#### Defined in

[types/user.ts:161](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L161)

___

### real\_name

• **real\_name**: `string`

Real name of the user.

#### Defined in

[types/user.ts:36](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L36)

___

### reputation

• **reputation**: `number`

User reputation.

#### Defined in

[types/user.ts:121](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L121)

___

### role

• **role**: `string`

 User role

#### Defined in

[types/user.ts:181](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L181)

___

### status

• **status**: `string`

User status. Values: a (approved), b (blocked), d (deleted; soft deleted), u (unregistered). Default: a.

#### Defined in

[types/user.ts:91](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L91)

___

### statuses\_counter

• `Optional` **statuses\_counter**: `number`

Number of statuses created by the user.

#### Defined in

[types/user.ts:171](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L171)

___

### tags

• **tags**: [`SCTagType`](types_tag.SCTagType.md)[]

User's tag list. List of Tag.

#### Defined in

[types/user.ts:116](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L116)

___

### unseen\_interactions\_counter

• `Optional` **unseen\_interactions\_counter**: `number`

interactions counter

#### Defined in

[types/user.ts:186](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L186)

___

### unseen\_notification\_banners\_counter

• `Optional` **unseen\_notification\_banners\_counter**: `number`

notification banner counter

#### Defined in

[types/user.ts:191](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L191)

___

### username

• **username**: `string`

The username of the user.

#### Defined in

[types/user.ts:31](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L31)

___

### website

• **website**: `string`

User website.

#### Defined in

[types/user.ts:96](https://github.com/selfcommunity/community-ui/blob/cab08cf/packages/sc-core/src/types/user.ts#L96)
