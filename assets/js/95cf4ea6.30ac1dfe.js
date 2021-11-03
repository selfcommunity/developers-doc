"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3198],{5813:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return c},default:function(){return k}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),i=a(6396),p=a(8215),d=["components"],s={sidebar_label:"Update a specific Embed",sidebar_position:5,title:"Update a specific Embed"},m=void 0,o={unversionedId:"apireference/v2/embed/update_a_specific_embed",id:"apireference/v2/embed/update_a_specific_embed",isDocsHomePage:!1,title:"Update a specific Embed",description:"This endpoint updates a specific Embed",source:"@site/docs/apireference/v2/embed/update_a_specific_embed.md",sourceDirName:"apireference/v2/embed",slug:"/apireference/v2/embed/update_a_specific_embed",permalink:"/docs/apireference/v2/embed/update_a_specific_embed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/embed/update_a_specific_embed.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Update a specific Embed",sidebar_position:5,title:"Update a specific Embed"},sidebar:"apireferenceSidebar",previous:{title:"Get a specific Embed",permalink:"/docs/apireference/v2/embed/get_a_specific_embed"},next:{title:"Patch a Specific Embed",permalink:"/docs/apireference/v2/embed/patch_a_specific_embed"}},c=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[{value:"Example Body Parameters",id:"example-body-parameters",children:[],level:4}],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[],level:3}],level:2}],u={toc:c};function k(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint updates a specific Embed"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,r.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/embed/{id}/")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb url"),(0,r.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Url for the resource, if any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata associated to this embed. It mus be a valid json object")))),(0,r.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,r.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://example.com",\n  "metadata": {}\n}\n')))),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = '{\n  \"url\": \"https://example.com\",\n  \"metadata\": {}\n}';\nconst headers = {\n  'Content-Type':'application/json',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/embed/{id}/',\n{\n  method: 'PUT',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,r.kt)(p.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X PUT /api/v2/embed/{id}/ \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --data-raw '{\n    \"url\": \"https://example.com\",\n    \"metadata\": {}\n  }'\n")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/embed"},"UpdateEmbed"))))),(0,r.kt)("h3",{id:"example-responses"},"Example responses"),(0,r.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "embed_type": "string",\n  "embed_id": "string",\n  "url": "https://example.com",\n  "metadata": {}\n}\n')))))}k.isMDXComponent=!0}}]);