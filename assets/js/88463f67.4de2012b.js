"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5422],{10984:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(26396),s=n(58215),l=["components"],u={sidebar_label:"Subscribe to an Incubator",sidebar_position:5,title:"Subscribe to an Incubator"},c=void 0,p={unversionedId:"apireference/v2/incubator/subscribe_to_an_incubator",id:"apireference/v2/incubator/subscribe_to_an_incubator",isDocsHomePage:!1,title:"Subscribe to an Incubator",description:"This endpoint subscribes to an Incubator.",source:"@site/docs/apireference/v2/incubator/subscribe_to_an_incubator.md",sourceDirName:"apireference/v2/incubator",slug:"/apireference/v2/incubator/subscribe_to_an_incubator",permalink:"/docs/apireference/v2/incubator/subscribe_to_an_incubator",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/incubator/subscribe_to_an_incubator.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Subscribe to an Incubator",sidebar_position:5,title:"Subscribe to an Incubator"},sidebar:"apireferenceSidebar",previous:{title:"Get Incubator's Subscribers",permalink:"/docs/apireference/v2/incubator/get_incubators_subscribers"},next:{title:"Unsubscribe to an Incubator",permalink:"/docs/apireference/v2/incubator/unsubscribe_to_an_incubator"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[],level:2}],b={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint subscribes to an Incubator."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/v2/incubator/{id}/subscribe/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this Incubator.")))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(o.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = 'null';\nconst headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/incubator/{id}/subscribe/',\n{\n  method: 'POST',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X POST /api/v2/incubator/{id}/subscribe/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"204"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.5"},"No Content")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))))}m.isMDXComponent=!0}}]);