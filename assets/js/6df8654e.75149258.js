"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[74348],{71871:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},76018:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),r=a(67294),l=a(5730),i=a(87139),o=a(86010);const s="tabItem_LplD";function p(e){var t,a;const{lazy:l,block:p,defaultValue:u,values:d,groupId:c,className:m}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=g[0])?void 0:a.props.value);if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=(0,i.UB)(),[_,y]=(0,r.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=c){const e=f[c];null!=e&&e!==_&&h.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==_&&(w(t),y(n),null!=c&&k(c,n))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},m)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":_===t})}),a??t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===_))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function u(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},13138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),l=a(76018),i=a(71871);const o={sidebar_label:"Get All Webhook Endpoint Attempts",sidebar_position:8,title:"Get All Webhook Endpoint Attempts"},s=void 0,p={unversionedId:"apireference/v2/webhook/get_all_webhook_endpoint_attemps",id:"apireference/v2/webhook/get_all_webhook_endpoint_attemps",title:"Get All Webhook Endpoint Attempts",description:"This endpoint retrieves attempts related to this endpoint",source:"@site/docs/apireference/v2/webhook/get_all_webhook_endpoint_attemps.md",sourceDirName:"apireference/v2/webhook",slug:"/apireference/v2/webhook/get_all_webhook_endpoint_attemps",permalink:"/docs/apireference/v2/webhook/get_all_webhook_endpoint_attemps",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/webhook/get_all_webhook_endpoint_attemps.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Get All Webhook Endpoint Attempts",sidebar_position:8,title:"Get All Webhook Endpoint Attempts"},sidebar:"apireferenceSidebar",previous:{title:"Delete a Webhook Endpoint",permalink:"/docs/apireference/v2/webhook/delete_a_webhook_endpoint"},next:{title:"Expire a specific Webhook Endpoint signing secret",permalink:"/docs/apireference/v2/webhook/expire_a_specific_webhook_endpoint_signing_secret"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint retrieves attempts related to this endpoint"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication and admin role."))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v2/webhook/endpoint/{id}/attempt/")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Which field to use when ordering the results. For sorting desc use - in front of the field name. Default to -created_at. Available values are created_at, sent_at, next_retry")))),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/webhook/endpoint/{id}/attempt/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,r.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/webhook/endpoint/{id}/attempt/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/attempt"},"Attempt"))))),(0,r.kt)("h3",{id:"example-responses"},"Example responses"),(0,r.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1,\n    "next": null,\n    "previous": null,\n    "results": [\n        {\n            "id": 1,\n            "created_at": "2021-03-25T15:21:46.575398+01:00",\n            "event": {\n                "type": "vote.created",\n                "added_at": "2021-03-25T15:21:01.594964+01:00"\n            },\n            "sent_at": "2021-03-25T15:21:46.574763+01:00",\n            "http_request_body": "{\\"type\\": \\"vote.created\\", \\"created\\": 1616682106.481539, \\"data\\": {\\"user\\": {\\"id\\": 8, \\"username\\": \\"stefano\\", \\"real_name\\": \\"Stefano Rossi\\", \\"email\\": \\"fake8@example.org\\", \\"email_isvalid\\": true, \\"date_joined\\": \\"2021-03-23T12:34:01.637442+01:00\\", \\"bio\\": \\"Direttore ricerca e sviluppo nella mia azienda\\", \\"location\\": \\"Milano (MI) - Italia\\", \\"location_lat_lng\\": \\"45.4612,9.1878\\", \\"position_lat_lng\\": null, \\"date_of_birth\\": \\"1964-09-09\\", \\"description\\": \\"Imprenditore\\", \\"gender\\": \\"Male\\", \\"status\\": \\"a\\", \\"website\\": \\"http://www.yahoo.com\\", \\"avatar\\": \\"http://127.0.0.1:8000/upfiles/avatars/stefano/resized/53/8.jpg\\", \\"cover\\": null, \\"ext_id\\": null, \\"tags\\": [], \\"reputation\\": 62}, \\"voted_at\\": \\"2021-03-25T15:21:46.468720+01:00\\", \\"object_type\\": \\"discussion\\", \\"discussion\\": {\\"id\\": 2, \\"categories\\": [{\\"id\\": 4, \\"tags\\": [], \\"order\\": 4, \\"name\\": \\"animali\\", \\"name_synonyms\\": \\"animali\\", \\"slug\\": \\"animali\\", \\"slogan\\": \\"Per tutti gli amanti del fantastico mondo degli animali, per parlare della loro storia, evoluzione e dei loro comportamenti.\\", \\"html_info\\": null, \\"seo_title\\": null, \\"seo_description\\": null, \\"auto_follow\\": \\"None\\", \\"active\\": true, \\"deleted\\": false, \\"image_original\\": \\"http://127.0.0.1:8000/upfiles/categories/original/animali_5473.png\\", \\"image_bigger\\": \\"http://127.0.0.1:8000/upfiles/categories/bigger/animali_8125.png\\", \\"image_big\\": \\"http://127.0.0.1:8000/upfiles/categories/big/animali_3945.png\\", \\"image_medium\\": \\"http://127.0.0.1:8000/upfiles/categories/medium/animali_9527.png\\", \\"image_small\\": \\"http://127.0.0.1:8000/upfiles/categories/small/animali_3322.png\\", \\"emotional_image_original\\": \\"http://127.0.0.1:8000/upfiles/categories/e_original/animali_3880.jpg\\", \\"emotional_image_position\\": 50, \\"lastmod_datetime\\": \\"2021-03-23T12:33:33.078971+01:00\\", \\"stream_order_by\\": \\"recent\\"}], \\"medias\\": [], \\"location\\": null, \\"poll\\": null, \\"last_activity_at\\": \\"2021-03-23T12:35:03.313074+01:00\\", \\"author\\": {\\"id\\": 1, \\"username\\": \\"admin\\", \\"real_name\\": \\"\\", \\"date_joined\\": \\"2021-03-23T12:33:53.388318+01:00\\", \\"bio\\": \\"\\", \\"location\\": \\"\\", \\"location_lat_lng\\": null, \\"position_lat_lng\\": null, \\"date_of_birth\\": null, \\"description\\": \\"\\", \\"gender\\": \\"Unspecified\\", \\"website\\": \\"\\", \\"avatar\\": \\"http://127.0.0.1:8000/upfiles/avatars/admin/resized/53/1.jpg\\", \\"cover\\": null, \\"ext_id\\": null, \\"tags\\": [], \\"reputation\\": 35}, \\"added_at\\": \\"2021-03-23T12:35:00.575063+01:00\\", \\"html\\": \\"The Nicotines Of The City of Detroit - Tiny (CD, Self, 2004) \\\\n \\\\n Rock. New wave. Deflagrazioni pop. \\\\n Album d\'esordio per questo gruppo che gravita intorno al corno inglese di Mike Patton. \\\\n Tiny mescola fanciullescamente new wave, no wave, new wave, trombe arsty, e dark wave, perfetto per sogni on the road again. \\\\n Ogni riferimento ai Faust e\' puramente casuale. \\\\n Bombe e colore lottano annunciando dei fraseggi distaccati e lucidi. \\\\n Miglior album del 2004. \\\\n \\\\n (6) per il disco, (8) perche\' si\'.\\", \\"summary\\": \\"The Nicotines Of The City of Detroit - Tiny (CD, Self, 2004) Rock. New wave. Deflagrazioni pop. Album d&#39;esordio per questo gruppo che gravita intorno al corno inglese di Mike Patto ...\\", \\"deleted\\": false, \\"collapsed\\": false, \\"comment_count\\": 11, \\"vote_count\\": 0, \\"flag_count\\": 0, \\"addressing\\": [], \\"title\\": \\"Indiana Jones - S/t (CD, Greenwide, 2004)     Hip-hop. Rinascimentale.   Nuovo lavoro per i Indiana Jones, gruppo nato dall\'incontro tra Jacob Kirkegaard e Greg Davis.   S/t crea il suono adatto a regalare tinte intimistiche, perfetto per viaggi dell\\", \\"slug\\": \\"indiana-jones---st-cd-greenwide-2004-hip-hop-rinascimentale-nuovo-lavoro-per-i-indiana-jones-gruppo-nato-dallincontro-tra-jacob-kirkegaard-e-greg\\", \\"view_count\\": 0, \\"follower_count\\": 0}}}",\n            "http_request_signature_header": "t=1492774577,v0=6ffbb59b2300aae63f272406069a9788598b792a944a07aba816edb039989a39",\n            "http_response_code": 200,\n            "http_response_body": "b\'{\\"success\\":true}\'",\n            "next_retry": null\n        }\n    ]\n}\n')))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);