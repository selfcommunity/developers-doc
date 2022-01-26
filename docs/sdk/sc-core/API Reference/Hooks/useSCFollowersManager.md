---
sidebar_label: useSCFollowedManager
sidebar_position: 1
title: useSCFollowedManager
---


## Constants

<dl>
<dt><a href="#STATUS_FOLLOWED">STATUS_FOLLOWED</a></dt>
<dd><p>Used on refresh and in isFollowed method
Check if the user status is 'followed'
to update the cache and data</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#useSCFollowedManager">useSCFollowedManager()</a></dt>
<dd><p>Custom hook 'useSCFollowedManager'
Use this hook to manage followed users:</p>
<ol>
<li>const scUserContext: SCUserContextType = useSCUser();</li>
<li>const scFollowedManager: SCFollowedManagerType = scUserContext.manager.followed;</li>
<li>scFollowedManager.isFollowed(user)</li>
</ol></dd>
</dl>

<a name="STATUS_FOLLOWED"></a>

## STATUS\_FOLLOWED
<p>Used on refresh and in isFollowed method
Check if the user status is 'followed'
to update the cache and data</p>

**Kind**: global constant  
<a name="useSCFollowedManager"></a>

## useSCFollowedManager()
<p>Custom hook 'useSCFollowedManager'
Use this hook to manage followed users:</p>
<ol>
<li>const scUserContext: SCUserContextType = useSCUser();</li>
<li>const scFollowedManager: SCFollowedManagerType = scUserContext.manager.followed;</li>
<li>scFollowedManager.isFollowed(user)</li>
</ol>

**Kind**: global function  

* [useSCFollowedManager()](#useSCFollowedManager)
    * [~refresh](#useSCFollowedManager..refresh)
    * [~follow](#useSCFollowedManager..follow)
    * [~getConnectionStatus](#useSCFollowedManager..getConnectionStatus)
    * [~isFollowed](#useSCFollowedManager..isFollowed)
    * [~notificationSubscriber(msg, data)](#useSCFollowedManager..notificationSubscriber)
    * [~checkIsUserFollowed(user)](#useSCFollowedManager..checkIsUserFollowed)

<a name="useSCFollowedManager..refresh"></a>

### useSCFollowedManager~refresh
<p>Memoized refresh all followed
It makes a single request to the server and retrieves
all the users followed by the authenticated user in a single solution
It might be useful for multi-tab sync</p>

**Kind**: inner constant of [<code>useSCFollowedManager</code>](#useSCFollowedManager)  
<a name="useSCFollowedManager..follow"></a>

### useSCFollowedManager~follow
<p>Memoized follow/unfollow User
Toggle action</p>

**Kind**: inner constant of [<code>useSCFollowedManager</code>](#useSCFollowedManager)  
<a name="useSCFollowedManager..getConnectionStatus"></a>

### useSCFollowedManager~getConnectionStatus
<p>Bypass remote check if the user is followed</p>

**Kind**: inner constant of [<code>useSCFollowedManager</code>](#useSCFollowedManager)  
<a name="useSCFollowedManager..isFollowed"></a>

### useSCFollowedManager~isFollowed
<p>Memoized isFollowed
If user is already in cache -&gt; check if the user is in followed,
otherwise, check if auth user follow the user</p>

**Kind**: inner constant of [<code>useSCFollowedManager</code>](#useSCFollowedManager)  
<a name="useSCFollowedManager..notificationSubscriber"></a>

### useSCFollowedManager~notificationSubscriber(msg, data)
<p>Notification subscriber only for FOLLOW</p>

**Kind**: inner method of [<code>useSCFollowedManager</code>](#useSCFollowedManager)  

| Param |
| --- |
| msg | 
| data | 

<a name="useSCFollowedManager..checkIsUserFollowed"></a>

### useSCFollowedManager~checkIsUserFollowed(user)
<p>Check if the authenticated user follow the user
Update the followed cached
Update followed user</p>

**Kind**: inner method of [<code>useSCFollowedManager</code>](#useSCFollowedManager)  

| Param |
| --- |
| user | 

