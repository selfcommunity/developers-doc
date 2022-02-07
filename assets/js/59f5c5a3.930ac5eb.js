"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[1590],{30188:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var i=t(83117),a=t(80102),s=(t(67294),t(3905)),l=t(26396),r=t(58215),o=["components"],d={sidebar_label:"Check if Following Discussion",sidebar_position:23,title:"Check if Following Discussion"},c=void 0,u={unversionedId:"apireference/v2/discussion/check_following_discussion",id:"apireference/v2/discussion/check_following_discussion",isDocsHomePage:!1,title:"Check if Following Discussion",description:"This endpoint returns following = true if the discussion (identified in path) is followed by me",source:"@site/docs/apireference/v2/discussion/check_following_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/check_following_discussion",permalink:"/docs/apireference/v2/discussion/check_following_discussion",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/discussion/check_following_discussion.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_label:"Check if Following Discussion",sidebar_position:23,title:"Check if Following Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Hide a Specific Discussion",permalink:"/docs/apireference/v2/discussion/hide_a_specific_discussion"},next:{title:"Check if Suspended Discussion",permalink:"/docs/apireference/v2/discussion/check_suspended_discussion"}},p=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],m={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This endpoint returns following = true if the discussion (identified in path) is followed by me"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This operation requires authentication."))),(0,s.kt)("h2",{id:"http-request"},"HTTP Request"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET /api/v2/discussion/{id}/following/")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"In"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"id"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"true"),(0,s.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this discussion.")))),(0,s.kt)("h3",{id:"example-request"},"Example Request"),(0,s.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/discussion/{id}/following/`,\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,s.kt)(r.Z,{value:"bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/discussion/{id}/following/ \\\n  -H 'Accept: application/json' \\\n  -H \"Authorization: Bearer <token>\"\n")))),(0,s.kt)("h2",{id:"responses"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"none")))),(0,s.kt)("h3",{id:"example-responses"},"Example responses"),(0,s.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"200",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "following": false\n}\n')))))}h.isMDXComponent=!0}}]);