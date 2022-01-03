"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[9220],{31128:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=a(83117),i=a(80102),s=(a(67294),a(3905)),r=a(26396),l=a(58215),o=["components"],c={sidebar_label:"Get Hide Status for a Specific Discussion",sidebar_position:24,title:"Get Hide Status for a Specific Discussion"},d=void 0,u={unversionedId:"apireference/v2/discussion/get_hide_status_for_a_specific_discussion",id:"apireference/v2/discussion/get_hide_status_for_a_specific_discussion",isDocsHomePage:!1,title:"Get Hide Status for a Specific Discussion",description:"This Endpoint retrieves if the logged user has hidden the Discussion.",source:"@site/docs/apireference/v2/discussion/get_hide_status_for_a_specific_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/get_hide_status_for_a_specific_discussion",permalink:"/docs/apireference/v2/discussion/get_hide_status_for_a_specific_discussion",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/discussion/get_hide_status_for_a_specific_discussion.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_label:"Get Hide Status for a Specific Discussion",sidebar_position:24,title:"Get Hide Status for a Specific Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Show a Specific Discussion",permalink:"/docs/apireference/v2/discussion/show_a_specific_discussion"},next:{title:"Get All Dynamic Preferences",permalink:"/docs/apireference/v2/dynamicpreference/get_all_dynamic_preferences"}},p=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[],level:2}],m={toc:p};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This Endpoint retrieves if the logged user has hidden the ",(0,s.kt)("a",{parentName:"p",href:"../schemas/discussion"},"Discussion"),"."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,s.kt)("h2",{id:"http-request"},"HTTP Request"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET /api/v2/discussion/{id}/hide/status/")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"In"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"id"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"true"),(0,s.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this discussion.")))),(0,s.kt)("h3",{id:"example-request"},"Example Request"),(0,s.kt)(r.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/discussion/{id}/hide/status/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n\n"))),(0,s.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/discussion/{id}/hide/status/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n")))),(0,s.kt)("h2",{id:"responses"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"../schemas/flag"},"Flag"))))))}h.isMDXComponent=!0}}]);