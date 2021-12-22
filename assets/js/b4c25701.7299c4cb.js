"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4737],{74788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(26396),s=n(58215),o=["components"],p={sidebar_label:"Get Counters of a Specific User",sidebar_position:5,title:"Get Counters of a Specific User"},d=void 0,u={unversionedId:"apireference/v2/user/get_counters_of_a_specific_user",id:"apireference/v2/user/get_counters_of_a_specific_user",isDocsHomePage:!1,title:"Get Counters of a Specific User",description:"This endpoint retrieves the counters of a specific user identified by",source:"@site/docs/apireference/v2/user/get_counters_of_a_specific_user.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/get_counters_of_a_specific_user",permalink:"/docs/apireference/v2/user/get_counters_of_a_specific_user",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/get_counters_of_a_specific_user.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Get Counters of a Specific User",sidebar_position:5,title:"Get Counters of a Specific User"},sidebar:"apireferenceSidebar",previous:{title:"Get a Specific User",permalink:"/docs/apireference/v2/user/get_a_specific_user"},next:{title:"Update a Specific User",permalink:"/docs/apireference/v2/user/update_a_specific_user"}},c=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint retrieves the counters of a specific user identified by {id}"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation does not require authentication only if ",(0,i.kt)("inlineCode",{parentName:"p"},"configurations.content_availability")," is true."))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/user/{id}/counters/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this user.")))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json'\n};\n\nfetch('/api/v2/user/{id}/counters/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/user/{id}/counters/ \\\n  -H 'Accept: application/json'\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK"))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussions_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of discussions created by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.discussion_type_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"posts_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of posts created by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.post_type_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"statuses_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of statuses created by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.status_type_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"polls_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of polls created by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"addons.polls_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," or if the user has a staff role")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"followings_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of followings of the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"followers_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of followers of the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connection_requests_sent_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of connection requests sent by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connection_requests_received_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of connection requests received by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connections_counter"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of connections of the user"),(0,i.kt)("td",{parentName:"tr",align:null},"Only if dynamic preference ",(0,i.kt)("inlineCode",{parentName:"td"},"configurations.follow_enabled")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "discussions": 11,\n    "polls": 10,\n    "posts": 2,\n    "statuses": 3,\n    "followings": 2,\n    "followers": 1\n}\n')))))}f.isMDXComponent=!0}}]);