(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4399],{69368:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var o=r(80102),a=r(83117),n=r(67294),i=r(63961),s=r(94780),l=r(41796),c=r(21964),d=r(88169),u=r(85893);const p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var g=r(98216),v=r(71657),f=r(90948),Z=r(1588),b=r(34867);function x(e){return(0,b.Z)("MuiCheckbox",e)}const y=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),_=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],k=(0,f.ZP)(c.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,t[`size${(0,g.Z)(r.size)}`],"default"!==r.color&&t[`color${(0,g.Z)(r.color)}`]]}})((({theme:e,ownerState:t})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${y.checked}, &.${y.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),S=(0,u.jsx)(h,{}),C=(0,u.jsx)(p,{}),E=(0,u.jsx)(m,{}),R=n.forwardRef((function(e,t){var r,l;const c=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=S,color:p="primary",icon:h=C,indeterminate:m=!1,indeterminateIcon:f=E,inputProps:Z,size:b="medium",className:y}=c,R=(0,o.Z)(c,_),O=m?f:h,w=m?f:d,$=(0,a.Z)({},c,{color:p,indeterminate:m,size:b}),z=(e=>{const{classes:t,indeterminate:r,color:o,size:n}=e,i={root:["root",r&&"indeterminate",`color${(0,g.Z)(o)}`,`size${(0,g.Z)(n)}`]},l=(0,s.Z)(i,x,t);return(0,a.Z)({},t,l)})($);return(0,u.jsx)(k,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":m},Z),icon:n.cloneElement(O,{fontSize:null!=(r=O.props.fontSize)?r:b}),checkedIcon:n.cloneElement(w,{fontSize:null!=(l=w.props.fontSize)?l:b}),ownerState:$,ref:t,className:(0,i.Z)(z.root,y)},R,{classes:z}))}))},98456:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var o=r(80102),a=r(83117),n=r(67294),i=r(63961),s=r(94780),l=r(70917),c=r(98216),d=r(71657),u=r(90948),p=r(1588),h=r(34867);function m(e){return(0,h.Z)("MuiCircularProgress",e)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=r(85893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,Z,b,x,y=e=>e;const _=44,k=(0,l.F4)(f||(f=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.F4)(Z||(Z=y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),C=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(b||(b=y`
      animation: ${0} 1.4s linear infinite;
    `),k))),E=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),R=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(x||(x=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S))),O=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:l="primary",disableShrink:u=!1,size:p=40,style:h,thickness:f=3.6,value:Z=0,variant:b="indeterminate"}=r,x=(0,o.Z)(r,v),y=(0,a.Z)({},r,{color:l,disableShrink:u,size:p,thickness:f,value:Z,variant:b}),k=(e=>{const{classes:t,variant:r,color:o,disableShrink:a}=e,n={root:["root",r,`color${(0,c.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,a&&"circleDisableShrink"]};return(0,s.Z)(n,m,t)})(y),S={},O={},w={};if("determinate"===b){const e=2*Math.PI*((_-f)/2);S.strokeDasharray=e.toFixed(3),w["aria-valuenow"]=Math.round(Z),S.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,O.transform="rotate(-90deg)"}return(0,g.jsx)(C,(0,a.Z)({className:(0,i.Z)(k.root,n),style:(0,a.Z)({width:p,height:p},O,h),ownerState:y,ref:t,role:"progressbar"},w,x,{children:(0,g.jsx)(E,{className:k.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,g.jsx)(R,{className:k.circle,style:S,ownerState:y,cx:_,cy:_,r:(_-f)/2,fill:"none",strokeWidth:f})})}))}))},93946:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var o=r(80102),a=r(83117),n=r(67294),i=r(63961),s=r(94780),l=r(41796),c=r(90948),d=r(71657),u=r(49990),p=r(98216),h=r(1588),m=r(34867);function g(e){return(0,m.Z)("MuiIconButton",e)}const v=(0,h.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var f=r(85893);const Z=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,c.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,p.Z)(r.color)}`],r.edge&&t[`edge${(0,p.Z)(r.edge)}`],t[`size${(0,p.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>{var r;const o=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,a.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,a.Z)({color:null==o?void 0:o.main},!t.disableRipple&&{"&:hover":(0,a.Z)({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${v.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),x=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:l,className:c,color:u="default",disabled:h=!1,disableFocusRipple:m=!1,size:v="medium"}=r,x=(0,o.Z)(r,Z),y=(0,a.Z)({},r,{edge:n,color:u,disabled:h,disableFocusRipple:m,size:v}),_=(e=>{const{classes:t,disabled:r,color:o,edge:a,size:n}=e,i={root:["root",r&&"disabled","default"!==o&&`color${(0,p.Z)(o)}`,a&&`edge${(0,p.Z)(a)}`,`size${(0,p.Z)(n)}`]};return(0,s.Z)(i,g,t)})(y);return(0,f.jsx)(b,(0,a.Z)({className:(0,i.Z)(_.root,c),centerRipple:!0,focusRipple:!m,disabled:h,ref:t,ownerState:y},x,{children:l}))}))},59773:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o=r(67294).createContext({})},21964:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var o=r(80102),a=r(83117),n=r(67294),i=r(63961),s=r(94780),l=r(98216),c=r(90948),d=r(49299),u=r(74423),p=r(49990),h=r(1588),m=r(34867);function g(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=r(85893);const f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=(0,c.ZP)(p.Z)((({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),b=(0,c.ZP)("input",{shouldForwardProp:c.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=n.forwardRef((function(e,t){const{autoFocus:r,checked:n,checkedIcon:c,className:p,defaultChecked:h,disabled:m,disableFocusRipple:x=!1,edge:y=!1,icon:_,id:k,inputProps:S,inputRef:C,name:E,onBlur:R,onChange:O,onFocus:w,readOnly:$,required:z=!1,tabIndex:I,type:A,value:P}=e,F=(0,o.Z)(e,f),[M,N]=(0,d.Z)({controlled:n,default:Boolean(h),name:"SwitchBase",state:"checked"}),j=(0,u.Z)();let W=m;j&&void 0===W&&(W=j.disabled);const T="checkbox"===A||"radio"===A,U=(0,a.Z)({},e,{checked:M,disabled:W,disableFocusRipple:x,edge:y}),L=(e=>{const{classes:t,checked:r,disabled:o,edge:a}=e,n={root:["root",r&&"checked",o&&"disabled",a&&`edge${(0,l.Z)(a)}`],input:["input"]};return(0,s.Z)(n,g,t)})(U);return(0,v.jsxs)(Z,(0,a.Z)({component:"span",className:(0,i.Z)(L.root,p),centerRipple:!0,focusRipple:!x,disabled:W,tabIndex:null,role:void 0,onFocus:e=>{w&&w(e),j&&j.onFocus&&j.onFocus(e)},onBlur:e=>{R&&R(e),j&&j.onBlur&&j.onBlur(e)},ownerState:U,ref:t},F,{children:[(0,v.jsx)(b,(0,a.Z)({autoFocus:r,checked:n,defaultChecked:h,className:L.input,disabled:W,id:T?k:void 0,name:E,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;N(t),O&&O(e,t)},readOnly:$,ref:C,required:z,ownerState:U,tabIndex:I,type:A},"checkbox"===A&&void 0===P?{}:{value:P},S)),M?c:_]}))}))},34484:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});r(67294);var o=r(88169),a=r(85893);const n=(0,o.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},71579:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(67294);const a=function(e,t){var r,a;return o.isValidElement(e)&&-1!==t.indexOf(null!=(r=e.type.muiName)?r:null==(a=e.type)||null==(a=a._payload)||null==(a=a.value)?void 0:a.muiName)}},2097:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(67294);const a=e=>{const t=o.useRef({});return o.useEffect((()=>{t.current=e})),t.current}},69721:(e,t,r)=>{"use strict";r.d(t,{AL:()=>i,DC:()=>_,G8:()=>x,Gp:()=>O,I$:()=>S,L4:()=>d,M7:()=>g,NX:()=>s,Nj:()=>C,Nm:()=>F,Ny:()=>l,R4:()=>R,Rg:()=>h,Tb:()=>$,X5:()=>y,Z4:()=>v,ZV:()=>k,_Z:()=>f,_j:()=>o,eg:()=>Z,ht:()=>a,hu:()=>M,k5:()=>m,mK:()=>b,oE:()=>I,ol:()=>w,t9:()=>p,u5:()=>c,wp:()=>A,wv:()=>E,xh:()=>P,zj:()=>z});const o=(e,t)=>`_fo_${t}_${e}`,a=e=>`_co_${e}`,n="_cos_",i=(e,t,r)=>`${n}${t}_${e}_${r}`,s=(e,t)=>`${n}${t}_${e}`,l=()=>"_cas_",c=e=>`_ca_${e}`,d=e=>`_inc_${e}`,u="_contr_",p=(e,t,r)=>`${u}${t}_${e}_${r}`,h=()=>"_bcms_",m=(e,t)=>`_feed_${e}_${t}`,g=e=>`_feed_st_${e}`,v=e=>`_virtualized_scroll_st_${e}`,f=e=>`_feed_spos_${e}`,Z=e=>`_adv_${e}`,b=()=>"_pmss_",x=e=>`_pms_${e}`,y="_cFolWidget_",_="_cSugWidget_",k="_cPopWidget_",S="_uFolWidget_",C="_uFoldWidget_",E="_uConWidget_",R="_uConReqWidget_",O="_uConReqSentWidget_",w="_fTrendWidget_",$="_rFeedWidget_",z="_pTrendWidget_",I="_pSugWidget_",A="_iListWidget_",P="_iSugWidget_",F="_pSugWidget_",M=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},58952:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(97582),a=r(67294),n=r(74482),i=r(24085),s=r(65001),l=r(59219),c=r(99960),d=r(69721);const u={categories:[],isLoading:!0},p=e=>{const{cacheStrategy:t=l.n2.CACHE_FIRST}=e||{},r=(0,d.Ny)(),p=t!==l.n2.NETWORK_ONLY?(e=>{if(!e)return null;const t=e.map((e=>{const t=(0,d.u5)(e);return l.ZP.get(t)}));return t.filter((e=>!e)).length>0?null:t})(l.ZP.get(r,null)):null,[h,m]=(0,a.useState)(null!==p?{categories:p,isLoading:!1}:u),g=(e=i.Z.CategoryList.url())=>(0,o.mG)(void 0,void 0,void 0,(function*(){const t=(yield s.Z.request({url:e,method:i.Z.CategoryList.method})).data;return t.next?t.results.concat(yield g(t.next)):t.results}));return(0,a.useEffect)((()=>{t===l.n2.CACHE_FIRST&&p||g().then((e=>{m({categories:e,isLoading:!1}),l.ZP.set(r,e.map((e=>{const t=(0,d.u5)(e.id);return l.ZP.set(t,e),e.id})))})).catch((e=>{console.log(e),c.Y.error(n.h,"Unable to retrieve categories")}))}),[]),h}},94158:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var o=r(97582),a=r(67294),n=r(44012),i=r(45185),s=r(77931),l=r(98456),c=r(69368),d=r(23370),u=r.n(d),p=r(11447),h=r.n(p),m=r(87918),g=r(58952),v=r(90948),f=r(29628);const Z="SCCategoryAutocomplete",b={root:`${Z}-root`},x=(0,v.ZP)(i.Z,{name:Z,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({}))),y=e=>{const t=(0,f.Z)({props:e,name:Z}),{onChange:r,multiple:i=!1,defaultValue:d=(i?[]:null),limitCountCategories:p=0,checkboxSelect:v=!1,disabled:y=!1,TextFieldProps:_={variant:"outlined",label:a.createElement(n.Z,{id:"ui.categoryAutocomplete.label",defaultMessage:"ui.categoryAutocomplete.label"})}}=t,k=(0,o._T)(t,["onChange","multiple","defaultValue","limitCountCategories","checkboxSelect","disabled","TextFieldProps"]),[S,C]=(0,a.useState)(!1),[E,R]=(0,a.useState)("string"==typeof d?null:d),{categories:O,isLoading:w}=(0,g.Z)();(0,a.useEffect)((()=>{null!==E&&r&&r(E)}),[E]),(0,a.useEffect)((()=>{w||"string"!=typeof d||R(i?O.filter((e=>e.id===Number(d))):O.find((e=>e.id===Number(d))))}),[w]);return a.createElement(x,Object.assign({className:b.root,multiple:i,open:S,onOpen:()=>{C(!0)},onClose:()=>{C(!1)},filterSelectedOptions:!v,disableCloseOnSelect:v,options:O||[],getOptionLabel:e=>e.name||"",value:E,selectOnFocus:!0,clearOnBlur:!0,blurOnSelect:!0,handleHomeEndKeys:!0,clearIcon:null,disabled:y||w,noOptionsText:a.createElement(n.Z,{id:"ui.categoryAutocomplete.empty",defaultMessage:"ui.categoryAutocomplete.empty"}),onChange:(e,t)=>{let r=null;if(i&&p>0){const[...e]=t;r=e.slice(-1*p)}else r=t;R(r)},isOptionEqualToValue:(e,t)=>t.id===e.id,renderTags:(e,t)=>e.map(((e,r)=>a.createElement(m.Z,Object.assign({key:e.id,id:e.id,label:e.name,color:e.color},t({index:r}))))),renderOption:(e,t,{selected:r,inputValue:o})=>{const n=h()(t.name,o),i=u()(t.name,n);return a.createElement("li",Object.assign({},e),v&&a.createElement(c.Z,{style:{marginRight:8},checked:r}),a.createElement(m.Z,{label:a.createElement(a.Fragment,null,i.map(((e,t)=>a.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text))))}))},renderInput:e=>a.createElement(s.Z,Object.assign({},e,_,{margin:"dense",InputProps:Object.assign(Object.assign({},e.InputProps),{autoComplete:"categories",endAdornment:a.createElement(a.Fragment,null,w?a.createElement(l.Z,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))},k))}},59219:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>a,n2:()=>o});var o;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(o||(o={}));const a=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,r={noSsr:!0}){let o;return this.values.has(e)?(o=this.values.get(e),this.values.delete(e),this.values.set(e,o)):t&&(o=t,(!this.ssr||!r.noSsr)&&this.values.set(e,o)),o}set(e,t,r={noSsr:!0}){if(!this.ssr||!r.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,r)=>{r.startsWith(e)&&this.values.delete(r)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}},11447:function(e){var t,r;e.exports=(t={772:(e,t,r)=>{const o=r(826).remove,a=/[.*+?^${}()|[\]\\]/g,n=/[a-z0-9_]/i,i=/\s+/;e.exports=function(e,t,r){var s,l;l={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},s=(s=r)||{},Object.keys(s).forEach((e=>{l[e]=!!s[e]})),r=l;const c=Array.from(e).map((e=>o(e)));let d=c.join("");return(t=o(t)).trim().split(i).filter((e=>e.length>0)).reduce(((e,t)=>{const o=t.length,i=!r.insideWords&&n.test(t[0])?"\\b":"",s=new RegExp(i+t.replace(a,"\\$&"),"i");let l,u;if(l=s.exec(d),r.requireMatchAll&&null===l)return d="",[];for(;l;){u=l.index;const t=o-c.slice(u,u+o).join("").length,a=u-c.slice(0,u).join("").length,n=[u+a,u+o+a+t];if(n[0]!==n[1]&&e.push(n),d=d.slice(0,u)+new Array(o+1).join(" ")+d.slice(u+o),!r.findAllOccurrences)break;l=s.exec(d)}return e}),[]).sort(((e,t)=>e[0]-t[0]))}},826:e=>{var t={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\u1ea4":"A","\u1eae":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc6":"AE","\u1ea6":"A","\u1eb0":"A","\u0202":"A","\xc7":"C","\u1e08":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\u1ebe":"E","\u1e16":"E","\u1ec0":"E","\u1e14":"E","\u1e1c":"E","\u0206":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\u1e2e":"I","\u020a":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\u1ed0":"O","\u1e4c":"O","\u1e52":"O","\u020e":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\u1ea5":"a","\u1eaf":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe6":"ae","\u1ea7":"a","\u1eb1":"a","\u0203":"a","\xe7":"c","\u1e09":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\u1ebf":"e","\u1e17":"e","\u1ec1":"e","\u1e15":"e","\u1e1d":"e","\u0207":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\u1e2f":"i","\u020b":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\u1ed1":"o","\u1e4d":"o","\u1e53":"o","\u020f":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u0108":"C","\u0109":"c","\u010a":"C","\u010b":"c","\u010c":"C","\u010d":"c","C\u0306":"C","c\u0306":"c","\u010e":"D","\u010f":"d","\u0110":"D","\u0111":"d","\u0112":"E","\u0113":"e","\u0114":"E","\u0115":"e","\u0116":"E","\u0117":"e","\u0118":"E","\u0119":"e","\u011a":"E","\u011b":"e","\u011c":"G","\u01f4":"G","\u011d":"g","\u01f5":"g","\u011e":"G","\u011f":"g","\u0120":"G","\u0121":"g","\u0122":"G","\u0123":"g","\u0124":"H","\u0125":"h","\u0126":"H","\u0127":"h","\u1e2a":"H","\u1e2b":"h","\u0128":"I","\u0129":"i","\u012a":"I","\u012b":"i","\u012c":"I","\u012d":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0132":"IJ","\u0133":"ij","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u1e30":"K","\u1e31":"k","K\u0306":"K","k\u0306":"k","\u0139":"L","\u013a":"l","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u013f":"L","\u0140":"l","\u0141":"l","\u0142":"l","\u1e3e":"M","\u1e3f":"m","M\u0306":"M","m\u0306":"m","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0149":"n","N\u0306":"N","n\u0306":"n","\u014c":"O","\u014d":"o","\u014e":"O","\u014f":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","P\u0306":"P","p\u0306":"p","\u0154":"R","\u0155":"r","\u0156":"R","\u0157":"r","\u0158":"R","\u0159":"r","R\u0306":"R","r\u0306":"r","\u0212":"R","\u0213":"r","\u015a":"S","\u015b":"s","\u015c":"S","\u015d":"s","\u015e":"S","\u0218":"S","\u0219":"s","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u021b":"t","\u021a":"T","\u0164":"T","\u0165":"t","\u0166":"T","\u0167":"t","T\u0306":"T","t\u0306":"t","\u0168":"U","\u0169":"u","\u016a":"U","\u016b":"u","\u016c":"U","\u016d":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0216":"U","\u0217":"u","V\u0306":"V","v\u0306":"v","\u0174":"W","\u0175":"w","\u1e82":"W","\u1e83":"w","X\u0306":"X","x\u0306":"x","\u0176":"Y","\u0177":"y","\u0178":"Y","Y\u0306":"Y","y\u0306":"y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u017f":"s","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01cd":"A","\u01ce":"a","\u01cf":"I","\u01d0":"i","\u01d1":"O","\u01d2":"o","\u01d3":"U","\u01d4":"u","\u01d5":"U","\u01d6":"u","\u01d7":"U","\u01d8":"u","\u01d9":"U","\u01da":"u","\u01db":"U","\u01dc":"u","\u1ee8":"U","\u1ee9":"u","\u1e78":"U","\u1e79":"u","\u01fa":"A","\u01fb":"a","\u01fc":"AE","\u01fd":"ae","\u01fe":"O","\u01ff":"o","\xde":"TH","\xfe":"th","\u1e54":"P","\u1e55":"p","\u1e64":"S","\u1e65":"s","X\u0301":"X","x\u0301":"x","\u0403":"\u0413","\u0453":"\u0433","\u040c":"\u041a","\u045c":"\u043a","A\u030b":"A","a\u030b":"a","E\u030b":"E","e\u030b":"e","I\u030b":"I","i\u030b":"i","\u01f8":"N","\u01f9":"n","\u1ed2":"O","\u1ed3":"o","\u1e50":"O","\u1e51":"o","\u1eea":"U","\u1eeb":"u","\u1e80":"W","\u1e81":"w","\u1ef2":"Y","\u1ef3":"y","\u0200":"A","\u0201":"a","\u0204":"E","\u0205":"e","\u0208":"I","\u0209":"i","\u020c":"O","\u020d":"o","\u0210":"R","\u0211":"r","\u0214":"U","\u0215":"u","B\u030c":"B","b\u030c":"b","\u010c\u0323":"C","\u010d\u0323":"c","\xca\u030c":"E","\xea\u030c":"e","F\u030c":"F","f\u030c":"f","\u01e6":"G","\u01e7":"g","\u021e":"H","\u021f":"h","J\u030c":"J","\u01f0":"j","\u01e8":"K","\u01e9":"k","M\u030c":"M","m\u030c":"m","P\u030c":"P","p\u030c":"p","Q\u030c":"Q","q\u030c":"q","\u0158\u0329":"R","\u0159\u0329":"r","\u1e66":"S","\u1e67":"s","V\u030c":"V","v\u030c":"v","W\u030c":"W","w\u030c":"w","X\u030c":"X","x\u030c":"x","Y\u030c":"Y","y\u030c":"y","A\u0327":"A","a\u0327":"a","B\u0327":"B","b\u0327":"b","\u1e10":"D","\u1e11":"d","\u0228":"E","\u0229":"e","\u0190\u0327":"E","\u025b\u0327":"e","\u1e28":"H","\u1e29":"h","I\u0327":"I","i\u0327":"i","\u0197\u0327":"I","\u0268\u0327":"i","M\u0327":"M","m\u0327":"m","O\u0327":"O","o\u0327":"o","Q\u0327":"Q","q\u0327":"q","U\u0327":"U","u\u0327":"u","X\u0327":"X","x\u0327":"x","Z\u0327":"Z","z\u0327":"z"},r=Object.keys(t).join("|"),o=new RegExp(r,"g"),a=new RegExp(r,""),n=function(e){return e.replace(o,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(a)},e.exports.remove=n}},r={},function e(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={exports:{}};return t[o](n,n.exports,e),n.exports}(772))},23370:function(e){var t,r;e.exports=(t={705:e=>{e.exports=function(e,t){const r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach(((o,a)=>{const n=o[0],i=o[1];r.push({text:e.slice(n,i),highlight:!0}),a===t.length-1?i<e.length&&r.push({text:e.slice(i,e.length),highlight:!1}):i<t[a+1][0]&&r.push({text:e.slice(i,t[a+1][0]),highlight:!1})})),r}}},r={},function e(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={exports:{}};return t[o](n,n.exports,e),n.exports}(705))},44012:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(25719),a=r(67294),n=r(86896),i=r(680);function s(e){var t=(0,n.Z)(),r=t.formatMessage,o=t.textComponent,i=void 0===o?a.Fragment:o,s=e.id,l=e.description,c=e.defaultMessage,d=e.values,u=e.children,p=e.tagName,h=void 0===p?i:p,m=r({id:s,description:l,defaultMessage:c},d,{ignoreTag:e.ignoreTag});return"function"==typeof u?u(Array.isArray(m)?m:[m]):h?a.createElement(h,null,a.Children.toArray(m)):a.createElement(a.Fragment,null,m)}s.displayName="FormattedMessage";var l=a.memo(s,(function(e,t){var r=e.values,a=(0,o._T)(e,["values"]),n=t.values,s=(0,o._T)(t,["values"]);return(0,i.wU)(n,r)&&(0,i.wU)(a,s)}));l.displayName="MemoizedFormattedMessage";const c=l}}]);