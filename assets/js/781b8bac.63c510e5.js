/*! For license information please see 781b8bac.63c510e5.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[92697],{74438:(e,n,o)=>{"use strict";o.r(n),o.d(n,{assets:()=>Y,contentTitle:()=>J,default:()=>te,frontMatter:()=>K,metadata:()=>Q,toc:()=>ee});var t=o(87462),a=o(67294),i=o(3905),r=o(19666),c=o(90948),s=o(87357),m=o(15861),l=o(86886),d=o(90629),p=o(93946),u=o(34386),f=o(63366),h=o(86010),g=o(94780),b=o(98216),_=o(71657),y=o(18791),x=o(51705),Z=o(1588),v=o(34867);function k(e){return(0,v.Z)("MuiLink",e)}const w=(0,Z.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var E=o(54844),C=o(41796);const S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},N=({theme:e,ownerState:n})=>{const o=(e=>S[e]||e)(n.color),t=(0,E.DW)(e,`palette.${o}`,!1)||n.color,a=(0,E.DW)(e,`palette.${o}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:(0,C.Fq)(t,.4)};var P=o(85893);const R=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],z=(0,c.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${(0,b.Z)(o.underline)}`],"button"===o.component&&n.button]}})((({theme:e,ownerState:n})=>(0,t.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,t.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:N({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${w.focusVisible}`]:{outline:"auto"}}))),j=a.forwardRef((function(e,n){const o=(0,_.Z)({props:e,name:"MuiLink"}),{className:i,color:r="primary",component:c="a",onBlur:s,onFocus:m,TypographyClasses:l,underline:d="always",variant:p="inherit",sx:u}=o,Z=(0,f.Z)(o,R),{isFocusVisibleRef:v,onBlur:w,onFocus:E,ref:C}=(0,y.Z)(),[N,j]=a.useState(!1),D=(0,x.Z)(n,C),L=(0,t.Z)({},o,{color:r,component:c,focusVisible:N,underline:d,variant:p}),A=(e=>{const{classes:n,component:o,focusVisible:t,underline:a}=e,i={root:["root",`underline${(0,b.Z)(a)}`,"button"===o&&"button",t&&"focusVisible"]};return(0,g.Z)(i,k,n)})(L);return(0,P.jsx)(z,(0,t.Z)({color:r,className:(0,h.Z)(A.root,i),classes:l,component:c,onBlur:e=>{w(e),!1===v.current&&j(!1),s&&s(e)},onFocus:e=>{E(e),!0===v.current&&j(!0),m&&m(e)},ref:D,ownerState:L,variant:p,sx:[...Object.keys(S).includes(r)?[]:[{color:r}],...Array.isArray(u)?u:[u]]},Z))})),D=j;var L=o(83321),A=o(67564),T=o(96144);const I=[{name:"access_time",codepoint:"e900"},{name:"add",codepoint:"e903"},{name:"add_circle_outline",codepoint:"e901"},{name:"add_location_alt",codepoint:"e902"},{name:"arrow_back",codepoint:"e904"},{name:"attach_file",codepoint:"e905"},{name:"bar_chart",codepoint:"e906"},{name:"bookmark_added",codepoint:"e907"},{name:"bookmark_border",codepoint:"e908"},{name:"CalendarIcon",codepoint:"e909"},{name:"card_giftcard",codepoint:"e90a"},{name:"card_membership",codepoint:"e90b"},{name:"chat_bubble_outline",codepoint:"e90c"},{name:"check",codepoint:"e90d"},{name:"chevron_left",codepoint:"e90e"},{name:"chevron_right",codepoint:"e90f"},{name:"close",codepoint:"e910"},{name:"code",codepoint:"e911"},{name:"create",codepoint:"e912"},{name:"delete",codepoint:"e913"},{name:"download",codepoint:"e914"},{name:"drag",codepoint:"e962"},{name:"edit",codepoint:"e915"},{name:"email",codepoint:"e916"},{name:"error",codepoint:"e917"},{name:"expand_less",codepoint:"e918"},{name:"expand_more",codepoint:"e919"},{name:"explore",codepoint:"e91a"},{name:"face",codepoint:"e91b"},{name:"facebook",codepoint:"e91c"},{name:"fiber_manual_record",codepoint:"e91d"},{name:"folder_open",codepoint:"e91e"},{name:"format_align_center",codepoint:"e91f"},{name:"format_align_justify",codepoint:"e920"},{name:"format_align_left",codepoint:"e921"},{name:"format_align_right",codepoint:"e922"},{name:"format_bold",codepoint:"e923"},{name:"format_clear",codepoint:"e924"},{name:"format_heading_1",codepoint:"e925"},{name:"format_heading_2",codepoint:"e926"},{name:"format_heading_3",codepoint:"e927"},{name:"format_horizontal_rule",codepoint:"e928"},{name:"format_italic",codepoint:"e929"},{name:"format_list_bulleted",codepoint:"e92a"},{name:"format_list_numbered",codepoint:"e92b"},{name:"format_paragraph",codepoint:"e92c"},{name:"format_quote",codepoint:"e92d"},{name:"format_strikethrough",codepoint:"e92e"},{name:"format_subscript",codepoint:"e92f"},{name:"format_superscript",codepoint:"e930"},{name:"format_underline",codepoint:"e931"},{name:"google",codepoint:"e932"},{name:"help_outline",codepoint:"e933"},{name:"hide_image",codepoint:"e934"},{name:"highlight",codepoint:"e936"},{name:"highlight_off",codepoint:"e935"},{name:"home",codepoint:"e937"},{name:"image",codepoint:"e938"},{name:"info",codepoint:"e939"},{name:"insert_link",codepoint:"e93a"},{name:"instagram",codepoint:"e93b"},{name:"label",codepoint:"e93c"},{name:"link",codepoint:"e93d"},{name:"linkedin",codepoint:"e93e"},{name:"list",codepoint:"e93f"},{name:"more_circle",codepoint:"e940"},{name:"more_vert",codepoint:"e941"},{name:"movie",codepoint:"e942"},{name:"notifications_active",codepoint:"e943"},{name:"notifications_off",codepoint:"e944"},{name:"outlined_flag",codepoint:"e945"},{name:"people_alt",codepoint:"e946"},{name:"person",codepoint:"e947"},{name:"photo",codepoint:"e949"},{name:"photo_camera",codepoint:"e948"},{name:"picture_as_pdf",codepoint:"e94a"},{name:"play_arrow",codepoint:"e94b"},{name:"play_circle_outline",codepoint:"e94c"},{name:"public",codepoint:"e94d"},{name:"redo",codepoint:"e94e"},{name:"restore",codepoint:"e950"},{name:"restore_from_trash",codepoint:"e94f"},{name:"save",codepoint:"e951"},{name:"search",codepoint:"e952"},{name:"send",codepoint:"e953"},{name:"sentiment_satisfied_alt",codepoint:"e954"},{name:"share",codepoint:"e955"},{name:"thumb_up",codepoint:"e957"},{name:"thumb_up_off_alt",codepoint:"e956"},{name:"title",codepoint:"e958"},{name:"twitter",codepoint:"e959"},{name:"undo",codepoint:"e95a"},{name:"upload",codepoint:"e95b"},{name:"visibility",codepoint:"e95d"},{name:"visibility_off",codepoint:"e95c"},{name:"whatsup_circle",codepoint:"e95e"},{name:"zoom_in",codepoint:"e95f"},{name:"zoom_out",codepoint:"e961"},{name:"zoom_out_map",codepoint:"e960"}];var $=o(64666),M=o(66485),F=o.n(M),B=o(31425),W=o(6514),V=o(37645);const O="SDKIcons",q={root:`${O}-root`,iconBox:`${O}-icon-box`,iconName:`${O}-icon-name`},H=(0,c.ZP)(s.Z,{name:O,slot:"Root",overridesResolver:(e,n)=>n.root})((e=>{let{theme:n}=e;return{marginTop:n.spacing(2),backgroundColor:n.palette.grey.A200,[`& .${q.iconBox}`]:{display:"inline-flex",flexDirection:"column",color:n.palette.text.secondary,margin:n.spacing(2)},[`& .${q.iconName}`]:{flexGrow:1,fontSize:".6rem",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center",width:0}}})),U=(0,c.ZP)(A.Z)((e=>{let{theme:n}=e;return{boxSizing:"content-box",cursor:"pointer",color:n.palette.text.primary,borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow"],{duration:n.transitions.duration.shortest}),padding:n.spacing(2),margin:n.spacing(.5,0),"&:hover":{backgroundColor:n.palette.background.paper,boxShadow:n.shadows[1]}}})),X=(0,c.ZP)(m.Z)((e=>{let{theme:n}=e;return{component:"span",display:"inline-block",cursor:"pointer",transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{backgroundColor:"#96c6fd80"}}}));function G(){return a.createElement(r.Z,null,(()=>{const[e,n]=(0,a.useState)(I),[o,t]=(0,a.useState)(""),[i,r]=(0,a.useState)(""),[c,f]=(0,a.useState)(""),[h,g]=(0,a.useState)(!1),[b,_]=(0,a.useState)(!1),[y,x]=(0,a.useState)(!1),Z=((e,n)=>n?e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase()))):e)(e,c),v=()=>{g(!0)},k=()=>{t(""),r(""),g(!1)};const w=e=>{!function(e){const n=window.getSelection();n.removeAllRanges();const o=document.createRange();o.selectNodeContents(e),n.addRange(o)}(e.currentTarget)};return a.createElement(H,null,a.createElement(l.ZP,{item:!0},a.createElement(d.Z,null,a.createElement(p.Z,{sx:{padding:"10px"},"aria-label":"search"},a.createElement(A.Z,{baseClassName:"community-icons"},"search")),a.createElement(T.ZP,{autoFocus:!0,value:c,onChange:e=>f(e.target.value),placeholder:"Search icons\u2026",inputProps:{"aria-label":"search icons"}})),a.createElement(a.Fragment,null,Z.length>=1?a.createElement(m.Z,null,`${Z.length} matching results`):a.createElement(m.Z,{align:"center"},"No results!"),Z.map(((e,n)=>a.createElement(s.Z,{component:"span",className:q.iconBox,key:n,onClick:()=>(e=>{t(e.name),r(e.codepoint)})(e)},a.createElement(U,{baseClassName:"community-icons",fontSize:"large",onClick:v},e.name),a.createElement(s.Z,{sx:{display:"flex"}},a.createElement(s.Z,{className:q.iconName,onClick:w},e.name))))))),h&&a.createElement($.Z,{fullWidth:!0,maxWidth:"sm",onClose:k,open:h},a.createElement(V.Z,null,a.createElement(u.Z,{placement:"right",title:b?"copied":"click to copy",TransitionProps:{onExited:()=>_(!1)}},a.createElement(X,{variant:"inherit",onClick:e=>{F()(e.currentTarget.textContent),_(!0)}},o))),a.createElement(s.Z,{sx:{display:"flex"}},a.createElement(m.Z,{sx:{marginRight:"8px",marginLeft:"8px",fontWeight:800}},"codepoint: ",i),a.createElement(u.Z,{placement:"right",title:y?"copied":"copy",TransitionProps:{onExited:()=>x(!1)}},a.createElement(A.Z,{baseClassName:"community-icons",fontSize:"small",onClick:()=>{F()(i),x(!0)}},"content_copy"))),a.createElement(m.Z,{align:"right",variant:"caption"},a.createElement(D,{href:"/docs/sdk/community-js/icons/overview",color:"inherit",sx:{paddingRight:"8px"}},"Learn more about the import")),a.createElement(W.Z,null,a.createElement(l.ZP,{container:!0},a.createElement(l.ZP,{item:!0,xs:!0,sx:{border:"solid"}},a.createElement(l.ZP,{container:!0,justifyContent:"center"},a.createElement(A.Z,{baseClassName:"community-icons",sx:{fontSize:"48px !important"}},o))),a.createElement(l.ZP,{item:!0,xs:!0},a.createElement(l.ZP,{container:!0,alignItems:"flex-end",justifyContent:"center"},a.createElement(l.ZP,{item:!0},a.createElement(u.Z,{title:"fontSize small"},a.createElement(s.Z,{component:"span",sx:{margin:"16px"}},a.createElement(A.Z,{baseClassName:"community-icons",fontSize:"small"},o)))),a.createElement(l.ZP,{item:!0},a.createElement(u.Z,{title:"fontSize medium"},a.createElement(s.Z,{component:"span",sx:{margin:"16px"}},a.createElement(A.Z,{baseClassName:"community-icons",fontSize:"medium"},o)))),a.createElement(l.ZP,{item:!0},a.createElement(u.Z,{title:"fontSize large"},a.createElement(s.Z,{component:"span",sx:{margin:"16px"}},a.createElement(A.Z,{baseClassName:"community-icons",fontSize:"large"},o)))))))),a.createElement(B.Z,null,a.createElement(L.Z,{onClick:k,variant:"outlined"},"close"))))}))}const K={sidebar_label:"Icons List",sidebar_position:2,title:"Icons List"},J=void 0,Q={unversionedId:"sdk/community-js/icons/list",id:"sdk/community-js/icons/list",title:"Icons List",description:"",source:"@site/docs/sdk/community-js/icons/list.mdx",sourceDirName:"sdk/community-js/icons",slug:"/sdk/community-js/icons/list",permalink:"/docs/sdk/community-js/icons/list",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/icons/list.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Icons List",sidebar_position:2,title:"Icons List"},sidebar:"sdkSidebar",previous:{title:"Overview",permalink:"/docs/sdk/community-js/icons/overview"},next:{title:"Introduction",permalink:"/docs/sdk/community-js/api-services/API_Reference/"}},Y={},ee=[],ne={toc:ee},oe="wrapper";function te(e){let{components:n,...o}=e;return(0,i.kt)(oe,(0,t.Z)({},ne,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(G,{mdxType:"Icons"}))}te.isMDXComponent=!0},66485:e=>{function n(){return new DOMException("The request is not allowed","NotAllowedError")}e.exports=async function(e){try{await async function(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}(e)}catch(o){try{await async function(e){const o=document.createElement("span");o.textContent=e,o.style.whiteSpace="pre",o.style.webkitUserSelect="auto",o.style.userSelect="all",document.body.appendChild(o);const t=window.getSelection(),a=window.document.createRange();t.removeAllRanges(),a.selectNode(o),t.addRange(a);let i=!1;try{i=window.document.execCommand("copy")}finally{t.removeAllRanges(),window.document.body.removeChild(o)}if(!i)throw n()}(e)}catch(t){throw t||o||n()}}}}}]);