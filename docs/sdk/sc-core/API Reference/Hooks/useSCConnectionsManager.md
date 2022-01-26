---
sidebar_label: useSCConnectionsManager
sidebar_position: 1
title: useSCConnectionsManager
---


## Constants

<dl>
<dt><a href="#STATUS_CONNECTED">STATUS_CONNECTED</a></dt>
<dd><p>Used on refresh and in status method
Check if the user status is 'connected', 'sent_connection_request'
'received_connection_request', to update the cache and data</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#useSCConnectionsManager">useSCConnectionsManager()</a></dt>
<dd><p>Custom hook 'useSCConnectionsManager'
Use this hook to manage friends:</p>
<ol>
<li>const scUserContext: SCUserContextType = useSCUser();</li>
<li>const scConnectionsManager: SCConnectionsManagerType = scUserContext.manager.connections;</li>
<li>scConnectionsManager.status(user)</li>
</ol></dd>
</dl>

<a name="STATUS_CONNECTED"></a>

## STATUS\_CONNECTED
<p>Used on refresh and in status method
Check if the user status is 'connected', 'sent_connection_request'
'received_connection_request', to update the cache and data</p>

**Kind**: global constant  
<a name="useSCConnectionsManager"></a>

## useSCConnectionsManager()
<p>Custom hook 'useSCConnectionsManager'
Use this hook to manage friends:</p>
<ol>
<li>const scUserContext: SCUserContextType = useSCUser();</li>
<li>const scConnectionsManager: SCConnectionsManagerType = scUserContext.manager.connections;</li>
<li>scConnectionsManager.status(user)</li>
</ol>

**Kind**: global function  

* [useSCConnectionsManager()](#useSCConnectionsManager)
    * [~refresh](#useSCConnectionsManager..refresh)
    * [~requestConnection](#useSCConnectionsManager..requestConnection)
    * [~acceptConnection](#useSCConnectionsManager..acceptConnection)
    * [~getCurrentStatus](#useSCConnectionsManager..getCurrentStatus)
    * [~status](#useSCConnectionsManager..status)
    * [~notificationSubscriber(msg, data)](#useSCConnectionsManager..notificationSubscriber)
    * [~checkUserConnectionStatus(user)](#useSCConnectionsManager..checkUserConnectionStatus)

<a name="useSCConnectionsManager..refresh"></a>

### useSCConnectionsManager~refresh
<p>Memoized refresh all connections
It makes a single request to the server and retrieves
all the users connected by the authenticated user in a single solution
It might be useful for multi-tab sync</p>

**Kind**: inner constant of [<code>useSCConnectionsManager</code>](#useSCConnectionsManager)  
<a name="useSCConnectionsManager..requestConnection"></a>

### useSCConnectionsManager~requestConnection
<p>Memoized Request connection</p>

**Kind**: inner constant of [<code>useSCConnectionsManager</code>](#useSCConnectionsManager)  
<a name="useSCConnectionsManager..acceptConnection"></a>

### useSCConnectionsManager~acceptConnection
<p>Memoized Accept Request connection</p>

**Kind**: inner constant of [<code>useSCConnectionsManager</code>](#useSCConnectionsManager)  
<a name="useSCConnectionsManager..getCurrentStatus"></a>

### useSCConnectionsManager~getCurrentStatus
<p>Return current user status if exist,
otherwise return null</p>

**Kind**: inner constant of [<code>useSCConnectionsManager</code>](#useSCConnectionsManager)  
<a name="useSCConnectionsManager..status"></a>

### useSCConnectionsManager~status
<p>Memoized status
If user is already in cache -&gt; check data user statuses,
otherwise, check if auth user is connected with user</p>

**Kind**: inner constant of [<code>useSCConnectionsManager</code>](#useSCConnectionsManager)  
<a name="useSCConnectionsManager..notificationSubscriber"></a>

### useSCConnectionsManager~notificationSubscriber(msg, data)
<p>Notification subscriber only for FOLLOW</p>

**Kind**: inner method of [<code>useSCConnectionsManager</code>](#useSCConnectionsManager)  

| Param |
| --- |
| msg | 
| data | 

<a name="useSCConnectionsManager..checkUserConnectionStatus"></a>

### useSCConnectionsManager~checkUserConnectionStatus(user)
<p>Check if the authenticated user is connected with the user
Update the users cached
Update user statuses</p>

**Kind**: inner method of [<code>useSCConnectionsManager</code>](#useSCConnectionsManager)  

| Param |
| --- |
| user | 

