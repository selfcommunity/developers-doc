"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3200],{49751:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return g}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(26396),s=a(58215),o=["components"],p={sidebar_label:"Create a Tag",sidebar_position:2,title:"Create a Tag"},d=void 0,m={unversionedId:"apireference/v2/tag/create_a_tag",id:"apireference/v2/tag/create_a_tag",isDocsHomePage:!1,title:"Create a Tag",description:"This endpoint creates a tag",source:"@site/docs/apireference/v2/tag/create_a_tag.md",sourceDirName:"apireference/v2/tag",slug:"/apireference/v2/tag/create_a_tag",permalink:"/docs/apireference/v2/tag/create_a_tag",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/tag/create_a_tag.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create a Tag",sidebar_position:2,title:"Create a Tag"},sidebar:"apireferenceSidebar",previous:{title:"Get All Tags",permalink:"/docs/apireference/v2/tag/get_all_tags"},next:{title:"Search a Tag",permalink:"/docs/apireference/v2/tag/search_a_tag"}},c=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[{value:"Example Body Parameters",id:"example-body-parameters",children:[],level:4}],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint creates a tag"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication and admin role."))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/v2/tag/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../schemas/tag"},"Tag")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none")))),(0,l.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,l.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "active": true,\n  "type": "string",\n  "name": "string",\n  "description": "string",\n  "color": "string",\n  "visible": true,\n  "visibility_boost": true,\n  "deleted": false\n}\n')))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\nconst inputBody = \'{\n  "active": true,\n  "type": "string",\n  "name": "string",\n  "description": "string",\n  "color": "string",\n  "visible": true,\n  "visibility_boost": true,\n  "deleted": false\n}\';\nconst headers = {\n  \'Content-Type\':\'application/x-www-form-urlencoded\',\n  \'Accept\':\'application/json\',\n  \'Authorization\': \'Bearer {access_token}\'\n};\n\nfetch(\'/api/v2/tag/\',\n{\n  method: \'POST\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'))),(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X POST /api/v2/tag/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --DATA '{body}'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},"Created")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../schemas/tag"},"Tag"))))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "type": "string",      \n  "name": "string",      \n  "description": "string",\n  "color": "string",\n  "visible": true,\n  "visibility_boost": true,\n  "created_at": "2019-08-24T14:15:22Z",\n  "active": true,\n  "deleted": false\n}\n')))))}g.isMDXComponent=!0}}]);