---
sidebar_label: useSCCategoriesManager
sidebar_position: 1
title: useSCCategoriesManager
---

<a name="useSCCategoriesManager"></a>

## useSCCategoriesManager()
<p>Custom hook 'useSCCategoriesManager'
Use this hook to manage categories followed:</p>
<ol>
<li>const scUserContext: SCUserContextType = useSCUser();</li>
<li>const scCategoriesManager: SCCategoriesManagerType = scUserContext.manager.categories;</li>
<li>scCategoriesManager.isFollowed(category)</li>
</ol>

**Kind**: global function  

* [useSCCategoriesManager()](#useSCCategoriesManager)
    * [~refresh](#useSCCategoriesManager..refresh)
    * [~follow](#useSCCategoriesManager..follow)
    * [~isFollowed](#useSCCategoriesManager..isFollowed)
    * [~checkIsCategoryFollowed(category)](#useSCCategoriesManager..checkIsCategoryFollowed)

<a name="useSCCategoriesManager..refresh"></a>

### useSCCategoriesManager~refresh
<p>Memoized refresh all categories
It makes a single request to the server and retrieves
all the categories followed by the user in a single solution
It might be useful for multi-tab sync</p>

**Kind**: inner constant of [<code>useSCCategoriesManager</code>](#useSCCategoriesManager)  
<a name="useSCCategoriesManager..follow"></a>

### useSCCategoriesManager~follow
<p>Memoized follow/unfollow Category
Toggle action</p>

**Kind**: inner constant of [<code>useSCCategoriesManager</code>](#useSCCategoriesManager)  
<a name="useSCCategoriesManager..isFollowed"></a>

### useSCCategoriesManager~isFollowed
<p>Memoized isFollowed
If category is already in cache -&gt; check if the category is in categories,
otherwise, check if user follow the category</p>

**Kind**: inner constant of [<code>useSCCategoriesManager</code>](#useSCCategoriesManager)  
<a name="useSCCategoriesManager..checkIsCategoryFollowed"></a>

### useSCCategoriesManager~checkIsCategoryFollowed(category)
<p>Check if the user follow the category
Update the categories cached
Update categories followed</p>

**Kind**: inner method of [<code>useSCCategoriesManager</code>](#useSCCategoriesManager)  

| Param |
| --- |
| category | 

