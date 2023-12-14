"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[49901],{59225:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(80102),o=n(83117),r=n(94780),i=n(63961),l=n(67294),s=n(90948),c=n(71657),u=n(98216),m=n(1588),d=n(34867);function g(e){return(0,d.Z)("MuiImageListItemBar",e)}(0,m.Z)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);var p=n(85893);const v=["actionIcon","actionPosition","className","subtitle","title","position"],h=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,u.Z)(n.position)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===t.position&&{bottom:0},"top"===t.position&&{top:0},"below"===t.position&&{position:"relative",background:"transparent",alignItems:"normal"}))),f=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.titleWrap,t[`titleWrap${(0,u.Z)(n.position)}`],n.actionIcon&&t[`titleWrapActionPos${(0,u.Z)(n.actionPosition)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({flexGrow:1,padding:"12px 16px",color:(e.vars||e).palette.common.white,overflow:"hidden"},"below"===t.position&&{padding:"6px 0 12px",color:"inherit"},t.actionIcon&&"left"===t.actionPosition&&{paddingLeft:0},t.actionIcon&&"right"===t.actionPosition&&{paddingRight:0}))),Z=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(e,t)=>t.title})((({theme:e})=>({fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}))),E=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(e,t)=>t.subtitle})((({theme:e})=>({fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}))),w=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.actionIcon,t[`actionIconActionPos${(0,u.Z)(n.actionPosition)}`]]}})((({ownerState:e})=>(0,o.Z)({},"left"===e.actionPosition&&{order:-1}))),b=l.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiImageListItemBar"}),{actionIcon:l,actionPosition:s="right",className:m,subtitle:d,title:b,position:C="bottom"}=n,I=(0,a.Z)(n,v),P=(0,o.Z)({},n,{position:C,actionPosition:s}),y=(e=>{const{classes:t,position:n,actionIcon:a,actionPosition:o}=e,i={root:["root",`position${(0,u.Z)(n)}`],titleWrap:["titleWrap",`titleWrap${(0,u.Z)(n)}`,a&&`titleWrapActionPos${(0,u.Z)(o)}`],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon",`actionIconActionPos${(0,u.Z)(o)}`]};return(0,r.Z)(i,g,t)})(P);return(0,p.jsxs)(h,(0,o.Z)({ownerState:P,className:(0,i.Z)(y.root,m),ref:t},I,{children:[(0,p.jsxs)(f,{ownerState:P,className:y.titleWrap,children:[(0,p.jsx)(Z,{className:y.title,children:b}),d?(0,p.jsx)(E,{className:y.subtitle,children:d}):null]}),l?(0,p.jsx)(w,{ownerState:P,className:y.actionIcon,children:l}):null]}))}))},15619:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(97582),o=n(67294),r=n(90948),i=n(5616),l=n(2734),s=n(98396),c=n(18972),u=n(48885),m=n(69417),d=n(39005),g=n(25464),p=n(14564),v=n(15861),h=n(67720),f=n(46901),Z=n(65001),E=n(24085),w=n(68689),b=n(67564),C=n(54490),I=n(86896),P=n(44012),y=n(27560),S=n(94184),$=n.n(S),M=n(98456),N=n(29628),B=n(75459),x=n(99960);const L="SCChangeCoverButton",k={root:`${L}-root`,helpPopover:`${L}-help-popover`,addMenuItem:`${L}-add-menuItem`,delMenuItem:`${L}-del-menuItem`},R=(0,r.ZP)(i.Z,{name:L,slot:"Root"})((()=>({}))),j=(0,C.vU)({imageMaxSize:{id:"ui.changeCover.button.change.alertMaxSize",defaultMessage:"ui.changeCover.button.change.alertMaxSize"},errorLoadImage:{id:"ui.changeCover.button.change.alertErrorImage",defaultMessage:"ui.changeCover.button.change.alertErrorImage"}});const T=function(e){const t=(0,N.Z)({props:e,name:L}),{onChange:n,autoHide:r,className:C}=t,S=(0,a._T)(t,["onChange","autoHide","className"]),T=(0,o.useContext)(w.K8),z=(0,l.Z)(),O=(0,s.Z)(z.breakpoints.down("md"));let A=(0,o.useRef)(null);const[_,F]=o.useState(null),U=Boolean(_),[W,H]=o.useState(null),[Y,D]=(0,o.useState)(!1),[X,J]=(0,o.useState)(!1),[G,q]=(0,o.useState)(!1),[K,V]=(0,o.useState)(null),Q=(0,I.Z)(),ee=e=>{F(e.currentTarget)},te=()=>{F(null)},ne=T.user&&null!==T.user.cover,ae=Boolean(W);if(!T.user)return null;const oe=e=>{var t;(null===(t=e.target.files[0])||void 0===t?void 0:t.size)<=5242880?(A=e.target.files[0],re()):(V(Q.formatMessage(j.imageMaxSize)),F(null))};function re(e=!1){q(!0);const t=new FormData;e?t.append("cover",""):t.append("cover",A),Z.Z.request({url:E.Z.UserPatch.url({id:T.user.id}),method:E.Z.UserPatch.method,headers:{"Content-Type":"multipart/form-data"},data:t}).then((t=>{T.updateUser({cover:t.data.cover}),n&&n(t.data.cover),F(null),q(!1),e&&(J(!1),D(!1))})).catch((e=>{x.Y.error(B.J,e),q(!1),V(Q.formatMessage(j.errorLoadImage))}))}function ie(){return o.createElement(i.Z,null,G?o.createElement(c.Z,{sx:{justifyContent:"center"}},o.createElement(M.Z,{size:15})):o.createElement(o.Fragment,null,o.createElement("input",{type:"file",onChange:oe,ref:A,hidden:!0,accept:".gif,.png,.jpg,.jpeg"}),o.createElement(c.Z,{disabled:G,onClick:()=>A.current.click(),className:k.addMenuItem},o.createElement(u.Z,null,o.createElement(b.Z,{fontSize:"small"},"add_circle_outline")),o.createElement(P.Z,{id:"ui.changeCover.button.upload",defaultMessage:"ui.changeCover.button.upload"})),ne&&o.createElement(c.Z,{className:k.delMenuItem,onClick:()=>D(!0)},o.createElement(u.Z,null,o.createElement(b.Z,{fontSize:"small"},"delete")),o.createElement(P.Z,{id:"ui.changeCover.button.delete",defaultMessage:"ui.changeCover.button.delete"}))))}const le=o.createElement(o.Fragment,null,o.createElement(m.Z,Object.assign({size:"small",variant:"contained",disabled:G,onClick:ee},S),o.createElement(b.Z,null,"photo_camera")),o.createElement(o.Fragment,null,O?o.createElement(d.Z,{open:U,onClose:te,onOpen:ee,anchor:"bottom",disableSwipeToOpen:!0},ie()):o.createElement(g.Z,{anchorEl:_,open:U,onClose:te},ie())),!O&&o.createElement(o.Fragment,null,o.createElement(m.Z,{className:k.helpPopover,variant:"contained",onClick:e=>{H(e.currentTarget)}},o.createElement(b.Z,{fontSize:"small"},"help_outline")),ae&&o.createElement(p.ZP,{open:ae,anchorEl:W,onClose:()=>{H(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"}},o.createElement(i.Z,{sx:{p:"10px"}},o.createElement(v.Z,{component:"h3"},o.createElement(P.Z,{id:"ui.changeCover.button.uploadA",defaultMessage:"ui.changeCover.button.uploadA"})),o.createElement(h.Z,null),o.createElement(v.Z,{component:"span"},o.createElement(P.Z,{id:"ui.changeCover.info",defaultMessage:"ui.changeCover.info",values:{li:e=>o.createElement("li",null,e),ul:e=>o.createElement("ul",null,e)}}))))),Y&&o.createElement(y.Z,{open:Y,title:o.createElement(P.Z,{id:"ui.changeCover.dialog.msg",defaultMessage:"ui.changeCover.dialog.msg"}),onConfirm:function(){J(!0),re(!0)},isUpdating:X,onClose:()=>{D(!1),F(null)}}));return K?o.createElement(f.Z,{color:"error",onClose:()=>V(null)},K):r?null:o.createElement(R,Object.assign({},S,{className:$()(k.root,C)}),le)}},27464:(e,t,n)=>{n.d(t,{Z:()=>ue});var a=n(97582),o=n(67294),r=n(90948),i=n(69417),l=n(15861),s=n(5616),c=n(46901),u=n(80102),m=n(83117),d=n(94780),g=n(63961),p=n(71657),v=n(1588),h=n(34867);function f(e){return(0,h.Z)("MuiImageList",e)}(0,v.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);const Z=o.createContext({});var E=n(85893);const w=["children","className","cols","component","rowHeight","gap","style","variant"],b=(0,r.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant]]}})((({ownerState:e})=>(0,m.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"}))),C=o.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiImageList"}),{children:a,className:r,cols:i=2,component:l="ul",rowHeight:s="auto",gap:c=4,style:v,variant:h="standard"}=n,C=(0,u.Z)(n,w),I=o.useMemo((()=>({rowHeight:s,gap:c,variant:h})),[s,c,h]);o.useEffect((()=>{0}),[]);const P="masonry"===h?(0,m.Z)({columnCount:i,columnGap:c},v):(0,m.Z)({gridTemplateColumns:`repeat(${i}, 1fr)`,gap:c},v),y=(0,m.Z)({},n,{component:l,gap:c,rowHeight:s,variant:h}),S=(e=>{const{classes:t,variant:n}=e,a={root:["root",n]};return(0,d.Z)(a,f,t)})(y);return(0,E.jsx)(b,(0,m.Z)({as:l,className:(0,g.Z)(S.root,S[h],r),ref:t,style:P,ownerState:y},C,{children:(0,E.jsx)(Z.Provider,{value:I,children:a})}))})),I=C;n(76607);var P=n(71579);function y(e){return(0,h.Z)("MuiImageListItem",e)}const S=(0,v.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),$=["children","className","cols","component","rows","style"],M=(0,r.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${S.img}`]:t.img},t.root,t[n.variant]]}})((({ownerState:e})=>(0,m.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${S.img}`]:(0,m.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})}))),N=o.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiImageListItem"}),{children:a,className:r,cols:i=1,component:l="li",rows:s=1,style:c}=n,v=(0,u.Z)(n,$),{rowHeight:h="auto",gap:f,variant:w}=o.useContext(Z);let b="auto";"woven"===w?b=void 0:"auto"!==h&&(b=h*s+f*(s-1));const C=(0,m.Z)({},n,{cols:i,component:l,gap:f,rowHeight:h,rows:s,variant:w}),I=(e=>{const{classes:t,variant:n}=e,a={root:["root",n],img:["img"]};return(0,d.Z)(a,y,t)})(C);return(0,E.jsx)(M,(0,m.Z)({as:l,className:(0,g.Z)(I.root,I[w],r),ref:t,style:(0,m.Z)({height:b,gridColumnEnd:"masonry"!==w?`span ${i}`:void 0,gridRowEnd:"masonry"!==w?`span ${s}`:void 0,marginBottom:"masonry"===w?f:void 0,breakInside:"masonry"===w?"avoid":void 0},c),ownerState:C},v,{children:o.Children.map(a,(e=>o.isValidElement(e)?"img"===e.type||(0,P.Z)(e,["Image"])?o.cloneElement(e,{className:(0,g.Z)(I.img,e.props.className)}):e:null))}))})),B=N;var x=n(59225),L=n(93946),k=n(67564),R=n(49877),j=n(24085),T=n(68689),z=n(53704),O=n(44012),A=n(39154),_=n(27560),F=n(94184),U=n.n(F),W=n(98456);function H(e,t){this.scrollLeft=e,this.scrollTop=t}const Y=(e,t,n="cannot convert to dictionary.")=>`Failed to execute '${e}' on '${t}': ${n}`,D=(e,t,n)=>{var a;const o=`__SEAMLESS.BACKUP$${t}`;return e[o]||!e[t]||(null===(a=e[t])||void 0===a?void 0:a.__isPolyfill)||(e[o]=e[t]),e[o]||n},X=e=>e.ownerDocument.scrollingElement||e.ownerDocument.documentElement;const J=e=>.5*(1-Math.cos(Math.PI*e));function G(){var e;let t;return t=(null===(e=window.performance)||void 0===e?void 0:e.now)?()=>window.performance.now():()=>window.Date.now(),G=t,t()}const q=e=>{const t=(G()-e.timeStamp)/(e.duration||500);if(t>1)return e.method(e.targetX,e.targetY),void e.callback();const n=(e.timingFunc||J)(t),a=e.startX+(e.targetX-e.startX)*n,o=e.startY+(e.targetY-e.startY)*n;e.method(a,o),e.rafId=window.requestAnimationFrame((()=>{q(e)}))},K=e=>isFinite(e)?Number(e):0,V=(e,t,n)=>{var a,o;if(!(e=>{var t;return null!==(t=e.isConnected)&&void 0!==t?t:!(e.ownerDocument&&1&e.ownerDocument.compareDocumentPosition(e))})(e))return;const r=e.scrollLeft,i=e.scrollTop,l=K(null!==(a=t.left)&&void 0!==a?a:r),s=K(null!==(o=t.top)&&void 0!==o?o:i);if(l===r&&s===i)return;const c=D(HTMLElement.prototype,"scroll",H),u=D(Object.getPrototypeOf(e),"scroll",c).bind(e);if("smooth"!==t.behavior)return void u(l,s);const m=()=>{window.removeEventListener("wheel",g),window.removeEventListener("touchmove",g)},d=Object.assign(Object.assign({},n),{timeStamp:G(),startX:r,startY:i,targetX:l,targetY:s,rafId:0,method:u,callback:()=>{m();const t=9===e.nodeType;e.dispatchEvent(function(e){if("function"==typeof Event)return new Event("scrollend",{bubbles:e,cancelable:!1});const t=document.createEvent("Event");return t.initEvent("scrollend",e,!1),t}(t))}}),g=()=>{window.cancelAnimationFrame(d.rafId),m()};window.addEventListener("wheel",g,{passive:!0,once:!0}),window.addEventListener("touchmove",g,{passive:!0,once:!0}),q(d)},Q=e=>(t,n,a)=>{const[o,r]=(i=t).window===i?[X(t.document.documentElement),"Window"]:[t,"Element"];var i;const l=null!=n?n:{};if(!(e=>{const t=typeof e;return null!==e&&("object"===t||"function"===t)})(l))throw new TypeError(Y(e,r));if(void 0!==(m=l.behavior)&&"auto"!==m&&"instant"!==m&&"smooth"!==m)throw new TypeError((s=e,c=r,u=l.behavior,Y(s,c,`The provided value '${u}' is not a valid enum value of type ScrollBehavior.`)));var s,c,u,m;"scrollBy"===e&&(l.left=K(l.left)+o.scrollLeft,l.top=K(l.top)+o.scrollTop),V(o,l,a)},ee=Q("scroll");var te=n(75459),ne=n(99960);const ae="SCChangePictureButton",oe={dialogRoot:`${ae}-dialog-root`,upload:`${ae}-upload`,imagesList:`${ae}-images-list`,imageItem:`${ae}-image-item`,primary:`${ae}-primary`},re=(0,r.ZP)(A.Z,{name:ae,slot:"DialogRoot"})((()=>({})));function ie(e){const{open:t,onChange:n,onClose:r,className:u}=e,m=(0,a._T)(e,["open","onChange","onClose","className"]),d=(0,o.useContext)(T.K8),g=(0,o.useContext)(z.zL),[p,v]=(0,o.useState)(d.user.avatar),[h,f]=(0,o.useState)(!1),[Z,E]=(0,o.useState)(!1),[w,b]=(0,o.useState)(null),[C,P]=(0,o.useState)([]),[y,S]=(0,o.useState)(null);let $=(0,o.useRef)(null);const[M,N]=(0,o.useState)(!1),[A,F]=(0,o.useState)(!1),[H,Y]=(0,o.useState)(!1);const D=(e=j.Z.GetAvatars.url({}))=>(0,a.mG)(this,void 0,void 0,(function*(){const t=yield R.Z.getUserAvatars({url:e});return t.next?t.results.concat(yield D(t.next)):t.results}));function X(e){e.id!==w&&R.Z.setUserPrimaryAvatar(e.id,{headers:{Authorization:`Bearer ${g.settings.session.authToken.accessToken}`}}).then((()=>{d.updateUser({avatar:e.avatar}),b(e.id),n&&n(e)})).catch((e=>{ne.Y.error(te.J,e)}))}return(0,o.useEffect)((()=>{D().then((e=>{const t=function(e){return e.find((e=>!0===e.primary))}(e);e&&e.length&&(P(e),b(t.id),v(t.avatar))})).catch((e=>{ne.Y.error(te.J,e)}))}),[]),o.createElement(re,Object.assign({className:U()(oe.dialogRoot,u),title:o.createElement(O.Z,{defaultMessage:"ui.changePicture.title",id:"ui.changePicture.title"}),onClose:r,open:t},m),o.createElement(s.Z,{className:oe.upload},Z?o.createElement(c.Z,{color:"error",onClose:()=>E(!1)},o.createElement(O.Z,{id:"ui.changePicture.button.upload.alert",defaultMessage:"ui.changePicture.button.upload.alert"})):o.createElement(o.Fragment,null,o.createElement("input",{type:"file",onChange:function(e){var t;e&&(null===(t=e.target.files[0])||void 0===t?void 0:t.size)<=3145728?($=e.target.files[0],v(URL.createObjectURL($)),function(){Y(!0);const e=new FormData;e.append("avatar",$),R.Z.addUserAvatar(e,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{P((t=>[...t,e])),X(e),Y(!1),setTimeout((()=>{const e=document.getElementById("avatarsList");e&&ee(e,{top:e.scrollHeight,behavior:"smooth"})}),200),f(!1)})).catch((e=>{f(!0),Y(!1),ne.Y.error(te.J,e)}))}()):E(!0)},ref:$,hidden:!0,accept:".gif,.png,.jpg,.jpeg"}),o.createElement(i.Z,{disabled:H||A,variant:"outlined",onClick:()=>$.current.click(),color:h?"error":"primary",startIcon:H?null:o.createElement(k.Z,{fontSize:"small"},"folder_open")},H?o.createElement(W.Z,{size:15}):o.createElement(o.Fragment,null,h?o.createElement(O.Z,{id:"ui.changePicture.button.upload.error",defaultMessage:"ui.changePicture.button.upload.error"}):o.createElement(O.Z,{id:"ui.changePicture.button.upload",defaultMessage:"ui.changePicture.button.upload"})))),o.createElement(l.Z,{component:"span",fontSize:"small",color:"text.secondary",gutterBottom:!0},o.createElement(O.Z,{id:"ui.changePicture.info",defaultMessage:"ui.changePicture.info",values:{li:e=>o.createElement("li",null,e),ul:e=>o.createElement("ul",null,e)}}))),o.createElement(I,{cols:3,rowHeight:"auto",id:"avatarsList",classes:{root:oe.imagesList}},C.map((e=>o.createElement(s.Z,{className:oe.imageItem,key:e.id},o.createElement(B,{className:w===e.id?oe.primary:"",key:e.id,onClick:()=>X(e)},o.createElement("img",{src:e.avatar,loading:"lazy",alt:"img"}),o.createElement(x.Z,{position:"top",actionIcon:o.createElement(L.Z,{onClick:()=>{return t=e.id,N(!0),void S(t);var t},size:"small"},o.createElement(k.Z,null,"delete"))})))))),M&&o.createElement(_.Z,{open:M,title:o.createElement(O.Z,{id:"ui.changePicture.dialog.msg",defaultMessage:"ui.changePicture.dialog.msg"}),btnConfirm:o.createElement(O.Z,{id:"ui.changePicture.dialog.confirm",defaultMessage:"ui.changePicture.dialog.confirm"}),onConfirm:function(){F(!0),R.Z.removeUserAvatar(y,{headers:{Authorization:`Bearer ${g.settings.session.authToken.accessToken}`}}).then((()=>{const e=C.filter((e=>e.id!==y));P(e),F(!1),N(!1),w===y&&(e.length>0?X(e[e.length-1]):n&&n(null))})).catch((e=>{N(!1),ne.Y.error(te.J,e)}))},isUpdating:A,onClose:()=>N(!1)}))}var le=n(29628);const se={root:`${ae}-root`,dialog:`${ae}-dialog`},ce=(0,r.ZP)(i.Z,{name:ae,slot:"Root"})((()=>({})));const ue=function(e){const t=(0,le.Z)({props:e,name:ae}),{iconButton:n,onChange:r,autoHide:i,className:l}=t,s=(0,a._T)(t,["iconButton","onChange","autoHide","className"]),[c,u]=(0,o.useState)(!1);return(0,o.useContext)(T.K8).user?i?null:o.createElement(o.Fragment,null,o.createElement(ce,Object.assign({className:U()(se.root,l),size:"small",variant:"contained",onClick:()=>u(!0)},s),n?o.createElement(k.Z,null,"photo_camera"):o.createElement(O.Z,{id:"ui.changePicture.button.change",defaultMessage:"ui.changePicture.button.change"})),c&&o.createElement(ie,{className:se.dialog,open:c,onChange:e=>r&&r(e),onClose:()=>u(!1)})):null}},41298:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),o=n(5616),r=n(2734),i=n(15861),l=n(31536),s=n(69417),c=n(93946),u=n(67564),m=n(90948),d=n(88078),g=n(88832);const p={root:`${g.B}-skeleton-root`,cover:`${g.B}-cover`,avatar:`${g.B}-avatar`,actions:`${g.B}-actions`,section:`${g.B}-section`,username:`${g.B}-username`},v=(0,m.ZP)(o.Z,{name:g.B,slot:"SkeletonRoot"})((()=>({})));const h=function(){const e=(0,r.Z)();return a.createElement(v,{className:p.root},a.createElement(d.Z,{className:p.cover,animation:"wave",variant:"rectangular"}),a.createElement(o.Z,{className:p.avatar},a.createElement(d.Z,{animation:"wave",variant:"circular",width:e.selfcommunity.user.avatar.sizeXLarge,height:e.selfcommunity.user.avatar.sizeXLarge})),a.createElement(o.Z,{className:p.section},a.createElement(i.Z,{variant:"h5",className:p.username},a.createElement(d.Z,{animation:"wave",sx:{height:30,width:100,margin:"0 auto"}})),a.createElement(l.Z,{direction:"row",className:p.actions},a.createElement(s.Z,{variant:"contained",disabled:!0},a.createElement(d.Z,{animation:"wave",sx:{height:20,width:60}})),a.createElement(c.Z,{disabled:!0},a.createElement(u.Z,null,"more_vert")))))}},88832:(e,t,n)=>{n.d(t,{B:()=>a});const a="SCUserProfileHeader"},49901:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(97582),o=n(67294),r=n(90948),i=n(5616),l=n(90629),s=n(15861),c=n(15619),u=n(27464),m=n(66380),d=n(53704),g=n(68689),p=n(45412),v=n(85472),h=n(41298),f=n(94184),Z=n.n(f),E=n(29628),w=n(88832);const b={root:`${w.B}-root`,cover:`${w.B}-cover`,avatar:`${w.B}-avatar`,info:`${w.B}-info`,infOpsSection:`${w.B}-infops-section`,username:`${w.B}-username`,realname:`${w.B}-realname`,changePicture:`${w.B}-change-picture`,changeCover:`${w.B}-change-cover`},C=(0,r.ZP)(i.Z,{name:w.B,slot:"Root"})((()=>({})));const I=function(e){const t=(0,E.Z)({props:e,name:w.B}),{id:n=null,className:r=null,userId:f=null,user:I=null,ChangePictureProps:P={},ChangeCoverProps:y={},actions:S}=t,$=(0,a._T)(t,["id","className","userId","user","ChangePictureProps","ChangeCoverProps","actions"]),M=(0,m.ko)(),N=(0,d.RM)(),B=(0,g.LD)(),{scUser:x,setSCUser:L}=(0,p.Z)({id:f,user:I}),k=(0,o.useMemo)((()=>B.user&&(null==x?void 0:x.id)===B.user.id),[B.user,x]);if(!x)return o.createElement(h.Z,null);const R=Object.assign({},x.cover?{background:`url('${x.cover}') center / cover`}:{background:`url('${M.preferences[v.IJ].value}') center / cover`}),j=k&&B.user.real_name||x.real_name;return o.createElement(C,Object.assign({id:n,className:Z()(b.root,r)},$),o.createElement(l.Z,{style:R,classes:{root:b.cover}},o.createElement("img",{src:x.avatar?x.avatar:"",className:b.avatar}),k&&o.createElement(o.Fragment,null,o.createElement(u.Z,Object.assign({iconButton:!0,onChange:function(e){x.id===B.user.id&&e?L(Object.assign({},x,{avatar:e.avatar})):L(Object.assign({},x,{avatar:`${N.settings.portal}/api/v2/avatar/${x.id}`}))},className:b.changePicture},P)),o.createElement("div",{className:b.changeCover},o.createElement(c.Z,Object.assign({onChange:function(e){x.id===B.user.id&&L(Object.assign({},x,{cover:e}))}},y))))),o.createElement(i.Z,{className:b.infOpsSection},o.createElement(i.Z,{className:b.info},o.createElement(s.Z,{variant:"h5",className:b.username},"@",k?B.user.username:x.username),j&&o.createElement(s.Z,{variant:"h5",className:b.realname},j)),S&&S))}}}]);