---
id: "hooks_useSCAuth"
title: "Module: hooks/useSCAuth"
sidebar_label: "hooks/useSCAuth"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useAuth

▸ **useAuth**(`initialSession`): `Object`

:::info
This component is used to navigate through the application.
:::

#### Usage

In order to use router you need to import this components first:

```jsx
import {SCRoutingContextType, useSCRouting, Link, SCRoutes} from '@selfcommunity/core';
````

:::tipUsage Example:

```jsx
const scRoutingContext: SCRoutingContextType = useSCRouting();
<Button component={Link} to={scRoutingContext.url(SCRoutes.USER_PROFILE_ROUTE_NAME, {id: user.id})>Go to profile</Button>
````
or

```jsx
const scRoutingContext: SCRoutingContextType = useSCRouting();
<Link to={scRoutingContext.url('profile', {id: user.id})}>Go to profile</Link>
````
:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialSession` | [`SCSessionType`](../interfaces/types_context.SCSessionType.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dispatch` | `Dispatch`<`any`\> |
| `helpers` | { `refreshSession`: () => `Promise`<[`SCAuthTokenType`](../interfaces/types_context.SCAuthTokenType.md)\>  } |
| `helpers.refreshSession` | () => `Promise`<[`SCAuthTokenType`](../interfaces/types_context.SCAuthTokenType.md)\> |
| `state` | `any` |

#### Defined in

[hooks/useSCAuth.ts:122](https://github.com/selfcommunity/community-ui/blob/a7bfc2b/packages/sc-core/src/hooks/useSCAuth.ts#L122)
