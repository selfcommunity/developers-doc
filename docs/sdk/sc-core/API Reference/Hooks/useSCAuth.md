---
sidebar_label: useAuth
sidebar_position: 1
title: useAuth
---




## Members

<dl>
<dt><a href="#userActionTypes">userActionTypes</a></dt>
<dd><p>userReducer:</p>
<ul>
<li>manage the state of authentication</li>
<li>update the state base on action type</li>
</ul></dd>
</dl>

## Constants

<dl>
<dt><a href="#userActionTypes">userActionTypes</a></dt>
<dd><p>We have complex state logic that involves multiple sub-values,
so useReducer is preferable to useState.
Define all possible auth action types label
Use this to export actions and dispatch an action</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#stateInitializer">stateInitializer(session)</a></dt>
<dd><p>Define initial context auth session</p></dd>
<dt><a href="#useAuth">useAuth(initialSession)</a></dt>
<dd><p>Custom hook 'useAuth'
Use this hook to manage the session in AuthContextProvider</p></dd>
</dl>

<a name="userActionTypes"></a>

## userActionTypes
<p>userReducer:</p>
<ul>
<li>manage the state of authentication</li>
<li>update the state base on action type</li>
</ul>

**Kind**: global variable  

| Param |
| --- |
| state | 
| action | 

<a name="userActionTypes"></a>

## userActionTypes
<p>We have complex state logic that involves multiple sub-values,
so useReducer is preferable to useState.
Define all possible auth action types label
Use this to export actions and dispatch an action</p>

**Kind**: global constant  
<a name="stateInitializer"></a>

## stateInitializer(session)
<p>Define initial context auth session</p>

**Kind**: global function  

| Param |
| --- |
| session | 

<a name="useAuth"></a>

## useAuth(initialSession)
<p>Custom hook 'useAuth'
Use this hook to manage the session in AuthContextProvider</p>

**Kind**: global function  

| Param |
| --- |
| initialSession | 

<a name="useAuth..processQueue"></a>

### useAuth~processQueue
<p>Manages multiple request during refresh session
Save concurrent requests and retry them again
at the end of refreshing session</p>

**Kind**: inner constant of [<code>useAuth</code>](#useAuth)  
