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

[types/user.ts:125](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L125)

___

### bio

• **bio**: `string`

User biography.

#### Defined in

[types/user.ts:66](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L66)

___

### connection\_requests\_received\_counter

• `Optional` **connection\_requests\_received\_counter**: `number`

Number of connection requests received by the user.

#### Defined in

[types/user.ts:165](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L165)

___

### connection\_requests\_sent\_counter

• `Optional` **connection\_requests\_sent\_counter**: `number`

Number of connection requests sent by the user.

#### Defined in

[types/user.ts:160](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L160)

___

### connection\_status

• `Optional` **connection\_status**: `string`

The connection status between the request user and this user.

#### Defined in

[types/user.ts:155](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L155)

___

### connections\_counter

• `Optional` **connections\_counter**: `number`

Number of connections of the user.

#### Defined in

[types/user.ts:170](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L170)

___

### cover

• `Optional` **cover**: `string`

Image Cover of the user.

#### Defined in

[types/user.ts:130](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L130)

___

### date\_joined

• **date\_joined**: `Date`

Date joined to the community.

#### Defined in

[types/user.ts:61](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L61)

___

### date\_of\_birth

• `Optional` **date\_of\_birth**: `Date`

Date of birth. Format: YYYY-MM-DD (ISO 8601).

#### Defined in

[types/user.ts:86](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L86)

___

### description

• **description**: `string`

User description.

#### Defined in

[types/user.ts:91](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L91)

___

### discussions\_counter

• `Optional` **discussions\_counter**: `number`

Number of discussions created by the user.

#### Defined in

[types/user.ts:190](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L190)

___

### email

• `Optional` **email**: `string`

Email of the user.

#### Defined in

[types/user.ts:51](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L51)

___

### email\_isvalid

• `Optional` **email\_isvalid**: `boolean`

Email is valid. Default: False.

#### Defined in

[types/user.ts:56](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L56)

___

### ext\_id

• `Optional` **ext\_id**: `number`

The external ID of the user. It is assigned only during signup if necessary.

#### Defined in

[types/user.ts:135](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L135)

___

### followers\_counter

• `Optional` **followers\_counter**: `number`

Number of followers of the user

#### Defined in

[types/user.ts:180](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L180)

___

### followings\_counter

• `Optional` **followings\_counter**: `number`

Number of followings of the user

#### Defined in

[types/user.ts:175](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L175)

___

### gender

• **gender**: `string`

Gender of the user. Values: Male, Female, Unspecified. Default: Unspecified.

#### Defined in

[types/user.ts:96](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L96)

___

### id

• **id**: `number`

The ID of the user.

#### Defined in

[types/user.ts:36](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L36)

___

### location

• **location**: `string`

Location

#### Defined in

[types/user.ts:71](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L71)

___

### location\_lat\_lng

• `Optional` **location\_lat\_lng**: `string`

Location in coordinates. Format: lat,lng.

#### Defined in

[types/user.ts:76](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L76)

___

### permission

• `Optional` **permission**: `string`[]

List of user permission. Only for the resource /user/me/.

#### Defined in

[types/user.ts:150](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L150)

___

### polls\_counter

• `Optional` **polls\_counter**: `number`

Number of polls created by the user.

#### Defined in

[types/user.ts:200](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L200)

___

### position\_lat\_lng

• `Optional` **position\_lat\_lng**: `string`

User current position. Format: lat,lng.

#### Defined in

[types/user.ts:81](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L81)

___

### posts\_counter

• `Optional` **posts\_counter**: `number`

Number of posts created by the user.

#### Defined in

[types/user.ts:185](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L185)

___

### real\_name

• **real\_name**: `string`

Real name of the user.

#### Defined in

[types/user.ts:46](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L46)

___

### reputation

• **reputation**: `number`

User reputation.

#### Defined in

[types/user.ts:145](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L145)

___

### role

• **role**: `string`

 User role

#### Defined in

[types/user.ts:205](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L205)

___

### status

• **status**: `string`

User status. Values: a (approved), b (blocked), d (deleted; soft deleted), u (unregistered). Default: a.
A blocked user can't:
   - create contribution (post/discussion/status)
   - create comment
   - vote/unvote contribution
   - follow/connect user
   - edit contribution
   - suggest an incubator
   - flag a contribution
   - send a private message
   - edit info profile
but he can't:
   - follow/unfollow a post/discussion/status
   - follow/unfollow a category
   - unfollow user

#### Defined in

[types/user.ts:115](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L115)

___

### statuses\_counter

• `Optional` **statuses\_counter**: `number`

Number of statuses created by the user.

#### Defined in

[types/user.ts:195](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L195)

___

### tags

• **tags**: [`SCTagType`](types_tag.SCTagType.md)[]

User's tag list. List of Tag.

#### Defined in

[types/user.ts:140](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L140)

___

### unseen\_interactions\_counter

• `Optional` **unseen\_interactions\_counter**: `number`

interactions counter

#### Defined in

[types/user.ts:210](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L210)

___

### unseen\_notification\_banners\_counter

• `Optional` **unseen\_notification\_banners\_counter**: `number`

notification banner counter

#### Defined in

[types/user.ts:215](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L215)

___

### username

• **username**: `string`

The username of the user.

#### Defined in

[types/user.ts:41](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L41)

___

### website

• **website**: `string`

User website.

#### Defined in

[types/user.ts:120](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/types/user.ts#L120)
