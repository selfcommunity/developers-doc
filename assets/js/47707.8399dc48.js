"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[47707],{68269:(e,t,n)=>{n.d(t,{Z:()=>W});var o=n(80102),r=n(83117),s=n(67294),i=n(70828),a=n(68027),u=n(8027),l=n(58510),c=n(6352),d=n(17172),m=n(86523);const h=["ownerState"],p=["variants"],f=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function _(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const v=(0,d.Z)(),S=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function y({defaultTheme:e,theme:t,themeId:n}){return o=t,0===Object.keys(o).length?e:t[n]||t;var o}function g(e){return e?(t,n)=>n[e]:null}function T(e,t){let{ownerState:n}=t,s=(0,o.Z)(t,h);const i="function"==typeof e?e((0,r.Z)({ownerState:n},s)):e;if(Array.isArray(i))return i.flatMap((e=>T(e,(0,r.Z)({ownerState:n},s))));if(i&&"object"==typeof i&&Array.isArray(i.variants)){const{variants:e=[]}=i;let t=(0,o.Z)(i,p);return e.forEach((e=>{let o=!0;"function"==typeof e.props?o=e.props((0,r.Z)({ownerState:n},s,n)):Object.keys(e.props).forEach((t=>{(null==n?void 0:n[t])!==e.props[t]&&s[t]!==e.props[t]&&(o=!1)})),o&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,r.Z)({ownerState:n},s,n)):e.style))})),t}return i}const E=function(e={}){const{themeId:t,defaultTheme:n=v,rootShouldForwardProp:s=_,slotShouldForwardProp:i=_}=e,u=e=>(0,m.Z)((0,r.Z)({},e,{theme:y((0,r.Z)({},e,{defaultTheme:n,themeId:t}))}));return u.__mui_systemSx=!0,(e,l={})=>{(0,c.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:d,slot:m,skipVariantsResolver:h,skipSx:p,overridesResolver:v=g(S(m))}=l,E=(0,o.Z)(l,f),w=void 0!==h?h:m&&"Root"!==m&&"root"!==m||!1,Z=p||!1;let O=_;"Root"===m||"root"===m?O=s:m?O=i:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(O=void 0);const $=(0,c.default)(e,(0,r.Z)({shouldForwardProp:O,label:undefined},E)),b=e=>"function"==typeof e&&e.__emotion_real!==e||(0,a.P)(e)?o=>T(e,(0,r.Z)({},o,{theme:y({theme:o.theme,defaultTheme:n,themeId:t})})):e,C=(o,...s)=>{let i=b(o);const a=s?s.map(b):[];d&&v&&a.push((e=>{const o=y((0,r.Z)({},e,{defaultTheme:n,themeId:t}));if(!o.components||!o.components[d]||!o.components[d].styleOverrides)return null;const s=o.components[d].styleOverrides,i={};return Object.entries(s).forEach((([t,n])=>{i[t]=T(n,(0,r.Z)({},e,{theme:o}))})),v(e,i)})),d&&!w&&a.push((e=>{var o;const s=y((0,r.Z)({},e,{defaultTheme:n,themeId:t}));return T({variants:null==s||null==(o=s.components)||null==(o=o[d])?void 0:o.variants},(0,r.Z)({},e,{theme:s}))})),Z||a.push(u);const l=a.length-s.length;if(Array.isArray(o)&&l>0){const e=new Array(l).fill("");i=[...o,...e],i.raw=[...o.raw,...e]}const c=$(i,...a);return e.muiName&&(c.muiName=e.muiName),c};return $.withConfig&&(C.withConfig=$.withConfig),C}}(),w=E;var Z=n(29628),O=n(39707),$=n(95408),b=n(98700),C=n(85893);const I=["component","direction","spacing","divider","children","className","useFlexGap"],M=(0,d.Z)(),N=w("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function R(e){return(0,Z.Z)({props:e,name:"MuiStack",defaultTheme:M})}function k(e,t){const n=s.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,r)=>(e.push(o),r<n.length-1&&e.push(s.cloneElement(t,{key:`separator-${r}`})),e)),[])}const A=({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex",flexDirection:"column"},(0,$.k9)({theme:t},(0,$.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,b.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),s=(0,$.P$)({values:e.direction,base:r}),i=(0,$.P$)({values:e.spacing,base:r});"object"==typeof s&&Object.keys(s).forEach(((e,t,n)=>{if(!s[e]){const o=t>0?s[n[t-1]]:"column";s[e]=o}}));const u=(t,n)=>{return e.useFlexGap?{gap:(0,b.NA)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${r=n?s[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,b.NA)(o,t)}};var r};n=(0,a.Z)(n,(0,$.k9)({theme:t},i,u))}return n=(0,$.dt)(t.breakpoints,n),n};var P=n(90948),q=n(71657);const x=function(e={}){const{createStyledComponent:t=N,useThemeProps:n=R,componentName:a="MuiStack"}=e,c=t(A),d=s.forwardRef((function(e,t){const s=n(e),d=(0,O.Z)(s),{component:m="div",direction:h="column",spacing:p=0,divider:f,children:_,className:v,useFlexGap:S=!1}=d,y=(0,o.Z)(d,I),g={direction:h,spacing:p,useFlexGap:S},T=(0,l.Z)({root:["root"]},(e=>(0,u.ZP)(a,e)),{});return(0,C.jsx)(c,(0,r.Z)({as:m,ownerState:g,ref:t,className:(0,i.Z)(T.root,v)},y,{children:f?k(_,f):_}))}));return d}({createStyledComponent:(0,P.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,q.Z)({props:e,name:"MuiStack"})}),W=x},69721:(e,t,n)=>{n.d(t,{AL:()=>i,DC:()=>Z,Em:()=>d,G8:()=>E,Gp:()=>M,I$:()=>$,L4:()=>m,M7:()=>v,NX:()=>a,Nj:()=>b,Nm:()=>x,Ny:()=>u,R4:()=>I,Rg:()=>f,Tb:()=>R,X5:()=>w,Z4:()=>S,ZV:()=>O,_Z:()=>y,_j:()=>o,b0:()=>c,eg:()=>g,ht:()=>r,hu:()=>D,k5:()=>_,mK:()=>T,oE:()=>A,ol:()=>N,t9:()=>p,u5:()=>l,wp:()=>P,wv:()=>C,xh:()=>q,zL:()=>W,zj:()=>k});const o=(e,t)=>`_fo_${t}_${e}`,r=e=>`_co_${e}`,s="_cos_",i=(e,t,n)=>`${s}${t}_${e}_${n}`,a=(e,t)=>`${s}${t}_${e}`,u=()=>"_cas_",l=e=>`_ca_${e}`,c=e=>`_grp_${e}`,d=()=>"_grps_",m=e=>`_inc_${e}`,h="_contr_",p=(e,t,n)=>`${h}${t}_${e}_${n}`,f=()=>"_bcms_",_=(e,t)=>`_feed_${e}_${t}`,v=e=>`_feed_st_${e}`,S=e=>`_virtualized_scroll_st_${e}`,y=e=>`_feed_spos_${e}`,g=e=>`_adv_${e}`,T=()=>"_pmss_",E=e=>`_pms_${e}`,w="_cFolWidget_",Z="_cSugWidget_",O="_cPopWidget_",$="_uFolWidget_",b="_uFoldWidget_",C="_uConWidget_",I="_uConReqWidget_",M="_uConReqSentWidget_",N="_fTrendWidget_",R="_rFeedWidget_",k="_pTrendWidget_",A="_pSugWidget_",P="_iListWidget_",q="_iSugWidget_",x="_pSugWidget_",W="_gSubWidget_",D=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},91568:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(97582),r=n(67294),s=n(90948),i=n(5616),a=n(34386),u=n(15861),l=n(67564),c=n(86896),d=n(25719),m=n(25687),h=3600;function p(e){var t=Math.abs(e);return t<60?"second":t<h?"minute":t<86400?"hour":"day"}function f(e){switch(e){case"second":return 1;case"minute":return 60;case"hour":return h;default:return 86400}}var _=["second","minute","hour"];function v(e){return void 0===e&&(e="second"),_.indexOf(e)>-1}var S=function(e){var t=(0,c.Z)(),n=t.formatRelativeTime,o=t.textComponent,s=e.children,i=n(e.value||0,e.unit,(0,d._T)(e,["children","value","unit"]));return"function"==typeof s?s(i):o?r.createElement(o,null,i):r.createElement(r.Fragment,null,i)},y=function(e){var t=e.value,n=e.unit,o=e.updateIntervalInSeconds,s=(0,d._T)(e,["value","unit","updateIntervalInSeconds"]);(0,m.kG)(!o||!(!o||!v(n)),"Cannot schedule update with unit longer than hour");var i,a=r.useState(),u=a[0],l=a[1],c=r.useState(0),_=c[0],y=c[1],g=r.useState(0),T=g[0],E=g[1];n===u&&t===_||(y(t||0),l(n),E(v(n)?function(e,t){if(!e)return 0;switch(t){case"second":return e;case"minute":return 60*e;default:return e*h}}(t,n):0)),r.useEffect((function(){function e(){clearTimeout(i)}if(e(),!o||!v(n))return e;var t=T-o,r=p(t);if("day"===r)return e;var s=f(r),a=t-t%s,u=a>=T?a-s:a,l=Math.abs(u-T);return T!==u&&(i=setTimeout((function(){return E(u)}),1e3*l)),e}),[T,o,n]);var w=t||0,Z=n;if(v(n)&&"number"==typeof T&&o){var O=f(Z=p(T));w=Math.round(T/O)}return r.createElement(S,(0,d.pi)({value:w,unit:Z},s))};y.displayName="FormattedRelativeTime",y.defaultProps={value:0,unit:"second"};const g=y;var T=n(94184),E=n.n(T);const w=e=>{const t=(new Date).getTime()-new Date(e).getTime(),n=Math.floor(t/1e3),o=Math.floor(n/60),r=Math.floor(o/60),s=Math.floor(r/24),i=Math.floor(s/7),a=Math.floor(s/30),u=Math.floor(a/12);return u>0?{value:u,unit:"year"}:a>0?{value:a,unit:"month"}:i>0?{value:i,unit:"week"}:s>0?{value:s,unit:"day"}:r>0?{value:r,unit:"hour"}:o>0?{value:o,unit:"minute"}:{value:n,unit:"second"}},Z="SCDateTimeAgo",O={root:`${Z}-root`},$=(0,s.ZP)(i.Z,{name:Z,slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({width:"auto",display:"inline-flex",alignItems:"center",marginRight:3,"& .MuiIcon-root":{fontSize:"18px",marginRight:2},"& .MuiTypography-root":{lineHeight:1.8}})));function b(e){const{className:t,date:n=null,showStartIcon:s=!0}=e,i=(0,o._T)(e,["className","date","showStartIcon"]),d=(0,c.Z)();if(n){const e=w(n);return r.createElement($,Object.assign({component:"span",className:E()(O.root,t)},i),s&&r.createElement(l.Z,null,"access_time"),r.createElement(a.Z,{title:`${d.formatDate(n,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}`,enterTouchDelay:0},r.createElement(u.Z,{variant:"body2",component:"span"},r.createElement(g,{value:-e.value,unit:e.unit,numeric:"auto"}))))}return null}},70050:(e,t,n)=>{n.d(t,{Ig:()=>d,P$:()=>u,P3:()=>c,Wu:()=>a,cO:()=>l,p3:()=>m});var o=n(67294),r=n(12132),s=n(49794),i=n(44012);function a(e){return s.q.DISCUSSION in e?s.q.DISCUSSION:s.q.POST in e?s.q.POST:s.q.STATUS in e?s.q.STATUS:s.q.COMMENT in e?s.q.COMMENT:null}function u(e){return s.q.DISCUSSION in e?e[s.q.DISCUSSION]:s.q.POST in e?e[s.q.POST]:s.q.STATUS in e?e[s.q.STATUS]:s.q.COMMENT in e?e[s.q.COMMENT]:null}function l(e){return e.type===s.q.DISCUSSION?e.summary?o.createElement("span",{dangerouslySetInnerHTML:{__html:e.summary}}):e.title:e.summary?o.createElement("span",{dangerouslySetInnerHTML:{__html:e.summary}}):o.createElement(i.Z,{id:`ui.common.${e.type.toLowerCase()}WithoutText`,defaultMessage:`ui.common.${e.type.toLowerCase()}WithoutText`})}function c(e,t){return e.replace(/<mention.*? id="([0-9]+)"{1}.*?>@([a-z\d_]+)<\/mention>/gi,((e,n,o)=>`<a href='${t(r.USER_PROFILE_ROUTE_NAME,{id:n,username:o})}'>@${o}</a>`))}function d(e){return e?e.type?r[`${e.type.toUpperCase()}_ROUTE_NAME`]:e.type:null}function m(e){let t={};if(e)if(e.type===s.q.DISCUSSION||e.type===s.q.POST||e.type===s.q.STATUS)t=Object.assign(Object.assign({},e),{contribution_type:e.type,contribution_id:e.id,contribution_slug:e.slug});else if(e.type===s.q.COMMENT){const n=a(e),o=e[n]&&"object"==typeof e[n];t=Object.assign(Object.assign({},e),{contribution_type:n,contribution_id:o?e[n].id:e[n],contribution_slug:o?e[n].slug:n})}return t}},49794:(e,t,n)=>{var o,r;n.d(t,{q:()=>o}),function(e){e.DISCUSSION="discussion",e.POST="post",e.STATUS="status",e.COMMENT="comment"}(o||(o={})),function(e){e.OPEN="open",e.IGNORED="ignored",e.HIDDEN="hidden",e.DELETED="deleted"}(r||(r={}))},59219:(e,t,n)=>{n.d(t,{ZP:()=>r,n2:()=>o});var o;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(o||(o={}));const r=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,n={noSsr:!0}){let o;return this.values.has(e)?(o=this.values.get(e),this.values.delete(e),this.values.set(e,o)):t&&(o=t,(!this.ssr||!n.noSsr)&&this.values.set(e,o)),o}set(e,t,n={noSsr:!0}){if(!this.ssr||!n.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,n)=>{n.startsWith(e)&&this.values.delete(n)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}}}]);