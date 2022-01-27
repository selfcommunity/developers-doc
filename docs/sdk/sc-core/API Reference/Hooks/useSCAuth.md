---
sidebar_label: useAuth
sidebar_position: 1
title: useAuth
---

:::info
This custom hook is used to manage the session in AuthContextProvider.
:::

## useAuth(initialSession)

| Param |
| --- |
| initialSession | 

## Members

- [processQueue](#processQueue)
- [useEffect](#useEffect)

<a name="processQueue"></a>

### processQueue

Manages multiple request during refresh session.
Saves concurrent requests and retries them again
at the end of refreshing session.

**Kind**: inner constant of `useAuth`


<a name="useEffect"></a>

### UseEffect

Adds/removes an http request interceptor.
When the component unmounts the interceptor will be detached.
The interceptor check if the token is expiring.

## Constants

- [userActionTypes](#userActionTypes)

<a name="userActionTypes"></a>

### userActionTypes
We have complex state logic that involves multiple sub-values, so useReducer is preferable to useState.
Define all possible auth action types label and use this to export actions and dispatch them.




## Functions

- [userReducer](#userReducer)
- [stateInitializer](#stateInitializer)




<a name="userReducer"></a>

### userReducer(state, action)

Manages the state of authentication update the state base on action type

**Kind**: global variable  

| Param |
| --- |
| state | 
| action | 


<a name="stateInitializer"></a>

### stateInitializer(session)

Defines the initial auth session context.

**Kind**: global function  

| Param |
| --- |
| session | 







