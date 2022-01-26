---
sidebar_label: Router
sidebar_position: 1
title: Router
---


## Usage

In order to use router you need to import this components first:

```jsx
import {SCRoutingContextType, useSCRouting, Link, SCRoutes} from '@selfcommunity/core';
````

:::tip

Example:


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


