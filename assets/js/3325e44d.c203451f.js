"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8056],{83401:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=n(83117),s=n(80102),r=(n(67294),n(3905)),i=n(26396),o=n(58215),l=["components"],d={sidebar_label:"Get User's Tags to Address a Contribution",sidebar_position:40,title:"Get User's Tags to Address a Contribution"},u=void 0,p={unversionedId:"apireference/v2/user/get_users_tags_to_address_a_contribution",id:"apireference/v2/user/get_users_tags_to_address_a_contribution",isDocsHomePage:!1,title:"Get User's Tags to Address a Contribution",description:"This endpoint returns user's tags to address a contribution",source:"@site/docs/apireference/v2/user/get_users_tags_to_address_a_contribution.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/get_users_tags_to_address_a_contribution",permalink:"/docs/apireference/v2/user/get_users_tags_to_address_a_contribution",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/get_users_tags_to_address_a_contribution.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_label:"Get User's Tags to Address a Contribution",sidebar_position:40,title:"Get User's Tags to Address a Contribution"},sidebar:"apireferenceSidebar",previous:{title:"List User's Connections Statuses",permalink:"/docs/apireference/v2/user/list_users_connection_statuses"},next:{title:"Check email token",permalink:"/docs/apireference/v2/user/check_email_token"}},c=[{value:"HTTP Request",id:"http-request",children:[{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],m={toc:c};function g(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint returns user's tags to address a contribution"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication."))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v2/user/tag/tags_to_address_a_contribution/")),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer <token>'\n};\n\nfetch('/api/v2/user/tag/tags_to_address_a_contribution/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n\n"))),(0,r.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/user/tag/tags_to_address_a_contribution/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer <token>'\n")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/tag"},"Tag"))))),(0,r.kt)("h3",{id:"example-responses"},"Example responses"),(0,r.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "id": 0,\n      "type": "user",\n      "name": "string",\n      "description": "string",\n      "color": "string",\n      "visible": true\n    },\n    {\n      "id": 0,\n      "type": "user",\n      "name": "string",\n      "description": "string",\n      "color": "string",\n      "visible": false\n    }\n]\n')))))}g.isMDXComponent=!0}}]);