---
id: "types_user.SCUserType"
title: "Interface: SCUserType"
sidebar_label: "SCUserType"
custom_edit_url: null
---

[types/user](../modules/types_user).SCUserType

## Properties

### avatar

• **avatar**: `string`

Avatar of the user.

#### Defined in

[types/user.ts:100](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L100)

___

### bio

• **bio**: `string`

User biography.

#### Defined in

[types/user.ts:55](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L55)

___

### connection\_requests\_received\_counter

• `Optional` **connection\_requests\_received\_counter**: `number`

Number of connection requests received by the user.

#### Defined in

[types/user.ts:140](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L140)

___

### connection\_requests\_sent\_counter

• `Optional` **connection\_requests\_sent\_counter**: `number`

Number of connection requests sent by the user.

#### Defined in

[types/user.ts:135](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L135)

___

### connection\_status

• `Optional` **connection\_status**: `string`

The connection status between the request user and this user.

#### Defined in

[types/user.ts:130](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L130)

___

### connections\_counter

• `Optional` **connections\_counter**: `number`

Number of connections of the user.

#### Defined in

[types/user.ts:145](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L145)

___

### cover

• `Optional` **cover**: `string`

Image Cover of the user.

#### Defined in

[types/user.ts:105](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L105)

___

### date\_joined

• **date\_joined**: `Date`

Date joined to the community.

#### Defined in

[types/user.ts:50](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L50)

___

### date\_of\_birth

• `Optional` **date\_of\_birth**: `Date`

Date of birth. Format: YYYY-MM-DD (ISO 8601).

#### Defined in

[types/user.ts:75](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L75)

___

### description

• **description**: `string`

User description.

#### Defined in

[types/user.ts:80](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L80)

___

### discussions\_counter

• `Optional` **discussions\_counter**: `number`

Number of discussions created by the user.

#### Defined in

[types/user.ts:165](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L165)

___

### email

• `Optional` **email**: `string`

Email of the user.

#### Defined in

[types/user.ts:40](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L40)

___

### email\_isvalid

• `Optional` **email\_isvalid**: `boolean`

Email is valid. Default: False.

#### Defined in

[types/user.ts:45](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L45)

___

### ext\_id

• `Optional` **ext\_id**: `number`

The external ID of the user. It is assigned only during signup if necessary.

#### Defined in

[types/user.ts:110](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L110)

___

### followers\_counter

• `Optional` **followers\_counter**: `number`

Number of followers of the user

#### Defined in

[types/user.ts:155](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L155)

___

### followings\_counter

• `Optional` **followings\_counter**: `number`

Number of followings of the user

#### Defined in

[types/user.ts:150](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L150)

___

### gender

• **gender**: `string`

Gender of the user. Values: Male, Female, Unspecified. Default: Unspecified.

#### Defined in

[types/user.ts:85](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L85)

___

### id

• **id**: `number`

The ID of the user.

#### Defined in

[types/user.ts:25](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L25)

___

### location

• **location**: `string`

Location

#### Defined in

[types/user.ts:60](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L60)

___

### location\_lat\_lng

• `Optional` **location\_lat\_lng**: `string`

Location in coordinates. Format: lat,lng.

#### Defined in

[types/user.ts:65](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L65)

___

### permission

• `Optional` **permission**: `string`[]

List of user permission. Only for the resource /user/me/.

#### Defined in

[types/user.ts:125](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L125)

___

### polls\_counter

• `Optional` **polls\_counter**: `number`

Number of polls created by the user.

#### Defined in

[types/user.ts:175](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L175)

___

### position\_lat\_lng

• `Optional` **position\_lat\_lng**: `string`

User current position. Format: lat,lng.

#### Defined in

[types/user.ts:70](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L70)

___

### posts\_counter

• `Optional` **posts\_counter**: `number`

Number of posts created by the user.

#### Defined in

[types/user.ts:160](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L160)

___

### real\_name

• **real\_name**: `string`

Real name of the user.

#### Defined in

[types/user.ts:35](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L35)

___

### reputation

• **reputation**: `number`

User reputation.

#### Defined in

[types/user.ts:120](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L120)

___

### role

• **role**: `string`[]

 User roles

#### Defined in

[types/user.ts:180](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L180)

___

### status

• **status**: `string`

User status. Values: a (approved), b (blocked), d (deleted; soft deleted), u (unregistered). Default: a.

#### Defined in

[types/user.ts:90](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L90)

___

### statuses\_counter

• `Optional` **statuses\_counter**: `number`

Number of statuses created by the user.

#### Defined in

[types/user.ts:170](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L170)

___

### tags

• **tags**: [`SCTagType`](types_tag.SCTagType)[]

User's tag list. List of Tag.

#### Defined in

[types/user.ts:115](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L115)

___

### unseen\_interactions\_counter

• `Optional` **unseen\_interactions\_counter**: `number`

interactions counter

#### Defined in

[types/user.ts:185](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L185)

___

### unseen\_notification\_banners\_counter

• `Optional` **unseen\_notification\_banners\_counter**: `number`

notification banner counter

#### Defined in

[types/user.ts:190](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L190)

___

### username

• **username**: `string`

The username of the user.

#### Defined in

[types/user.ts:30](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L30)

___

### website

• **website**: `string`

User website.

#### Defined in

[types/user.ts:95](https://github.com/selfcommunity/community-ui/blob/0c5b0c7/packages/sc-core/src/types/user.ts#L95)
