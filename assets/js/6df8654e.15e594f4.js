"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4348],{71871:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),i=n(5730),l=n(62040),o=n(86010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),_=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,r.useState)(b),w=N[0],T=N[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=_[m];null!=j&&j!==w&&h.some((function(e){return e.value===j}))&&T(j)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==w&&(E(t),T(a),null!=m&&y(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},13138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(76018),o=n(71871),s=["components"],u={sidebar_label:"Get All Webhook Endpoint Attempts",sidebar_position:8,title:"Get All Webhook Endpoint Attempts"},p=void 0,d={unversionedId:"apireference/v2/webhook/get_all_webhook_endpoint_attemps",id:"apireference/v2/webhook/get_all_webhook_endpoint_attemps",title:"Get All Webhook Endpoint Attempts",description:"This endpoint retrieves attempts related to this endpoint",source:"@site/docs/apireference/v2/webhook/get_all_webhook_endpoint_attemps.md",sourceDirName:"apireference/v2/webhook",slug:"/apireference/v2/webhook/get_all_webhook_endpoint_attemps",permalink:"/docs/apireference/v2/webhook/get_all_webhook_endpoint_attemps",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/webhook/get_all_webhook_endpoint_attemps.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Get All Webhook Endpoint Attempts",sidebar_position:8,title:"Get All Webhook Endpoint Attempts"},sidebar:"apireferenceSidebar",previous:{title:"Delete a Webhook Endpoint",permalink:"/docs/apireference/v2/webhook/delete_a_webhook_endpoint"},next:{title:"Expire a specific Webhook Endpoint signing secret",permalink:"/docs/apireference/v2/webhook/expire_a_specific_webhook_endpoint_signing_secret"}},c={},m=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}],f={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint retrieves attempts related to this endpoint"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication and admin role."))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/webhook/endpoint/{id}/attempt/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offset"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ordering"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Which field to use when ordering the results. For sorting desc use - in front of the field name. Default to -created_at. Available values are created_at, sent_at, next_retry")))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/webhook/endpoint/{id}/attempt/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/webhook/endpoint/{id}/attempt/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/attempt"},"Attempt"))))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1,\n    "next": null,\n    "previous": null,\n    "results": [\n        {\n            "id": 1,\n            "created_at": "2021-03-25T15:21:46.575398+01:00",\n            "event": {\n                "type": "vote.created",\n                "added_at": "2021-03-25T15:21:01.594964+01:00"\n            },\n            "sent_at": "2021-03-25T15:21:46.574763+01:00",\n            "http_request_body": "{\\"type\\": \\"vote.created\\", \\"created\\": 1616682106.481539, \\"data\\": {\\"user\\": {\\"id\\": 8, \\"username\\": \\"stefano\\", \\"real_name\\": \\"Stefano Rossi\\", \\"email\\": \\"fake8@example.org\\", \\"email_isvalid\\": true, \\"date_joined\\": \\"2021-03-23T12:34:01.637442+01:00\\", \\"bio\\": \\"Direttore ricerca e sviluppo nella mia azienda\\", \\"location\\": \\"Milano (MI) - Italia\\", \\"location_lat_lng\\": \\"45.4612,9.1878\\", \\"position_lat_lng\\": null, \\"date_of_birth\\": \\"1964-09-09\\", \\"description\\": \\"Imprenditore\\", \\"gender\\": \\"Male\\", \\"status\\": \\"a\\", \\"website\\": \\"http://www.yahoo.com\\", \\"avatar\\": \\"http://127.0.0.1:8000/upfiles/avatars/stefano/resized/53/8.jpg\\", \\"cover\\": null, \\"ext_id\\": null, \\"tags\\": [], \\"reputation\\": 62}, \\"voted_at\\": \\"2021-03-25T15:21:46.468720+01:00\\", \\"object_type\\": \\"discussion\\", \\"discussion\\": {\\"id\\": 2, \\"categories\\": [{\\"id\\": 4, \\"tags\\": [], \\"order\\": 4, \\"name\\": \\"animali\\", \\"name_synonyms\\": \\"animali\\", \\"slug\\": \\"animali\\", \\"slogan\\": \\"Per tutti gli amanti del fantastico mondo degli animali, per parlare della loro storia, evoluzione e dei loro comportamenti.\\", \\"html_info\\": null, \\"seo_title\\": null, \\"seo_description\\": null, \\"auto_follow\\": \\"None\\", \\"active\\": true, \\"deleted\\": false, \\"image_original\\": \\"http://127.0.0.1:8000/upfiles/categories/original/animali_5473.png\\", \\"image_bigger\\": \\"http://127.0.0.1:8000/upfiles/categories/bigger/animali_8125.png\\", \\"image_big\\": \\"http://127.0.0.1:8000/upfiles/categories/big/animali_3945.png\\", \\"image_medium\\": \\"http://127.0.0.1:8000/upfiles/categories/medium/animali_9527.png\\", \\"image_small\\": \\"http://127.0.0.1:8000/upfiles/categories/small/animali_3322.png\\", \\"emotional_image_original\\": \\"http://127.0.0.1:8000/upfiles/categories/e_original/animali_3880.jpg\\", \\"emotional_image_position\\": 50, \\"lastmod_datetime\\": \\"2021-03-23T12:33:33.078971+01:00\\", \\"stream_order_by\\": \\"recent\\"}], \\"medias\\": [], \\"location\\": null, \\"poll\\": null, \\"last_activity_at\\": \\"2021-03-23T12:35:03.313074+01:00\\", \\"author\\": {\\"id\\": 1, \\"username\\": \\"admin\\", \\"real_name\\": \\"\\", \\"date_joined\\": \\"2021-03-23T12:33:53.388318+01:00\\", \\"bio\\": \\"\\", \\"location\\": \\"\\", \\"location_lat_lng\\": null, \\"position_lat_lng\\": null, \\"date_of_birth\\": null, \\"description\\": \\"\\", \\"gender\\": \\"Unspecified\\", \\"website\\": \\"\\", \\"avatar\\": \\"http://127.0.0.1:8000/upfiles/avatars/admin/resized/53/1.jpg\\", \\"cover\\": null, \\"ext_id\\": null, \\"tags\\": [], \\"reputation\\": 35}, \\"added_at\\": \\"2021-03-23T12:35:00.575063+01:00\\", \\"html\\": \\"The Nicotines Of The City of Detroit - Tiny (CD, Self, 2004) \\\\n \\\\n Rock. New wave. Deflagrazioni pop. \\\\n Album d\'esordio per questo gruppo che gravita intorno al corno inglese di Mike Patton. \\\\n Tiny mescola fanciullescamente new wave, no wave, new wave, trombe arsty, e dark wave, perfetto per sogni on the road again. \\\\n Ogni riferimento ai Faust e\' puramente casuale. \\\\n Bombe e colore lottano annunciando dei fraseggi distaccati e lucidi. \\\\n Miglior album del 2004. \\\\n \\\\n (6) per il disco, (8) perche\' si\'.\\", \\"summary\\": \\"The Nicotines Of The City of Detroit - Tiny (CD, Self, 2004) Rock. New wave. Deflagrazioni pop. Album d&#39;esordio per questo gruppo che gravita intorno al corno inglese di Mike Patto ...\\", \\"deleted\\": false, \\"collapsed\\": false, \\"comment_count\\": 11, \\"vote_count\\": 0, \\"flag_count\\": 0, \\"addressing\\": [], \\"title\\": \\"Indiana Jones - S/t (CD, Greenwide, 2004)     Hip-hop. Rinascimentale.   Nuovo lavoro per i Indiana Jones, gruppo nato dall\'incontro tra Jacob Kirkegaard e Greg Davis.   S/t crea il suono adatto a regalare tinte intimistiche, perfetto per viaggi dell\\", \\"slug\\": \\"indiana-jones---st-cd-greenwide-2004-hip-hop-rinascimentale-nuovo-lavoro-per-i-indiana-jones-gruppo-nato-dallincontro-tra-jacob-kirkegaard-e-greg\\", \\"view_count\\": 0, \\"follower_count\\": 0}}}",\n            "http_request_signature_header": "t=1492774577,v0=6ffbb59b2300aae63f272406069a9788598b792a944a07aba816edb039989a39",\n            "http_response_code": 200,\n            "http_response_body": "b\'{\\"success\\":true}\'",\n            "next_retry": null\n        }\n    ]\n}\n')))))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);