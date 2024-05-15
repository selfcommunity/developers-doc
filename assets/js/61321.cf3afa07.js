(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[61321],{5616:(t,e,s)=>{"use strict";s.d(e,{Z:()=>w});var o=s(83117),r=s(80102),i=s(67294),n=s(70828),l=s(6352),h=s(86523),a=s(39707),c=s(96682),p=s(85893);const u=["className","component"];var d=s(31983),m=s(75389),f=s(10606);const v=(0,s(1977).Z)("MuiBox",["root"]),g=(0,m.Z)(),T=function(t={}){const{themeId:e,defaultTheme:s,defaultClassName:d="MuiBox-root",generateClassName:m}=t,f=(0,l.default)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(h.Z);return i.forwardRef((function(t,i){const l=(0,c.Z)(s),h=(0,a.Z)(t),{className:v,component:g="div"}=h,T=(0,r.Z)(h,u);return(0,p.jsx)(f,(0,o.Z)({as:g,ref:i,className:(0,n.Z)(v,m?m(d):d),theme:e&&l[e]||l},T))}))}({themeId:f.Z,defaultTheme:g,defaultClassName:v.root,generateClassName:d.Z.generate}),w=T},61730:(t,e,s)=>{"use strict";var o;s.d(e,{Z:()=>p});var r=s(67294),i=s(54895),n=s(20539),l=s(34168);function h(t,e,s,o,n){const[l,h]=r.useState((()=>n&&s?s(t).matches:o?o(t).matches:e));return(0,i.Z)((()=>{let e=!0;if(!s)return;const o=s(t),r=()=>{e&&h(o.matches)};return r(),o.addListener(r),()=>{e=!1,o.removeListener(r)}}),[t,s]),l}const a=(o||(o=s.t(r,2))).useSyncExternalStore;function c(t,e,s,o,i){const n=r.useCallback((()=>e),[e]),l=r.useMemo((()=>{if(i&&s)return()=>s(t).matches;if(null!==o){const{matches:e}=o(t);return()=>e}return n}),[n,t,o,i,s]),[h,c]=r.useMemo((()=>{if(null===s)return[n,()=>()=>{}];const e=s(t);return[()=>e.matches,t=>(e.addListener(t),()=>{e.removeListener(t)})]}),[n,s,t]);return a(c,h,l)}function p(t,e={}){const s=(0,l.Z)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:i=(o?window.matchMedia:null),ssrMatchMedia:p=null,noSsr:u=!1}=(0,n.Z)({name:"MuiUseMediaQuery",props:e,theme:s});let d="function"==typeof t?t(s):t;d=d.replace(/^@media( ?)/m,"");return(void 0!==a?c:h)(d,r,i,p,u)}},63902:(t,e,s)=>{"use strict";s.d(e,{Z:()=>u});var o=s(97582),r=s(67294),i=s(90948),n=s(66242),l=s(94184),h=s.n(l);const a="SCWidget",c={root:`${a}-root`},p=(0,i.ZP)(n.Z,{name:a,slot:"Root",overridesResolver:(t,e)=>e.root})((({theme:t})=>({}))),u=(0,r.forwardRef)(((t,e)=>{const{className:s,onHeightChange:i,onStateChange:n}=t,l=(0,o._T)(t,["className","onHeightChange","onStateChange"]);return r.createElement(p,Object.assign({className:h()(c.root,s)},l,{ref:e}))}))},79558:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var o=s(67294),r=s(3774);const i="Pixel",n="Percent",l={unit:n,value:.8};function h(t){return"number"==typeof t?{unit:n,value:100*t}:"string"==typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:n,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),l):(console.warn("scrollThreshold should be string or number"),l)}class a extends o.Component{constructor(t){super(t),this.lastScrollTop=0,this.actionTriggered=!1,this.startY=0,this.currentY=0,this.dragging=!1,this.maxPullDownDistance=0,this.getScrollableTarget=()=>this.props.scrollableTarget instanceof HTMLElement?this.props.scrollableTarget:"string"==typeof this.props.scrollableTarget?document.getElementById(this.props.scrollableTarget):(null===this.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null),this.onStart=t=>{this.lastScrollTop||(this.dragging=!0,t instanceof MouseEvent?this.startY=t.pageY:t instanceof TouchEvent&&(this.startY=t.touches[0].pageY),this.currentY=this.startY,this._infScroll&&(this._infScroll.style.willChange="transform",this._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},this.onMove=t=>{this.dragging&&(t instanceof MouseEvent?this.currentY=t.pageY:t instanceof TouchEvent&&(this.currentY=t.touches[0].pageY),this.currentY<this.startY||(this.currentY-this.startY>=Number(this.props.pullDownToRefreshThreshold)&&this.setState({pullToRefreshThresholdBreached:!0}),this.currentY-this.startY>1.5*this.maxPullDownDistance||this._infScroll&&(this._infScroll.style.overflow="visible",this._infScroll.style.transform=`translate3d(0px, ${this.currentY-this.startY}px, 0px)`)))},this.onEnd=()=>{this.startY=0,this.currentY=0,this.dragging=!1,this.state.pullToRefreshThresholdBreached&&(this.props.refreshFunction&&this.props.refreshFunction(),this.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((()=>{this._infScroll&&(this._infScroll.style.overflow="auto",this._infScroll.style.transform="none",this._infScroll.style.willChange="unset")}))},this.onScrollListener=t=>{"function"==typeof this.props.onScroll&&setTimeout((()=>this.props.onScroll&&this.props.onScroll(t)),0);const e=this.props.height||this._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;if(this.actionTriggered)return;const s=this.isElementAtBottom(e,this.props.scrollThreshold),o=this.isElementAtTop(e,this.props.scrollThreshold);s&&this.props.hasMoreNext&&(this.actionTriggered=!0,this.setState({showLoaderNext:!0}),this.props.next&&this.props.next()),o&&this.props.hasMorePrevious&&(this.actionTriggered=!0,this.setState({showLoaderPrevious:!0}),this.props.previous&&this.props.previous()),this.lastScrollTop=e.scrollTop},this.state={showLoaderNext:!1,showLoaderPrevious:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},this.throttledOnScrollListener=(0,r.throttle)(150,this.onScrollListener).bind(this),this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this)}componentDidMount(){if(void 0===this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')}componentWillUnmount(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))}componentDidUpdate(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoaderPrevious:!1,showLoaderNext:!1}))}static getDerivedStateFromProps(t,e){return t.dataLength!==e.prevDataLength?Object.assign(Object.assign({},e),{prevDataLength:t.dataLength}):null}isElementAtTop(t,e=.8){const s=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,o=h(e);return o.unit===i?t.scrollTop<=o.value&&Math.abs(this.lastScrollTop-t.scrollTop)>=o.value/3&&t.scrollTop<this.lastScrollTop:this.props.inverse?t.scrollTop<=o.value/100+s-t.scrollHeight+1:t.scrollTop<=o.value/100+s&&t.scrollTop<this.lastScrollTop}isElementAtBottom(t,e=.8){const s=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,o=h(e);return o.unit===i?t.scrollTop+s>=t.scrollHeight-o.value:t.scrollTop+s>=o.value/100*t.scrollHeight}render(){const t=Object.assign({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),e=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return o.createElement("div",{style:s,className:"infinite-scroll-component__outerdiv"},o.createElement("div",{className:`infinite-scroll-component ${this.props.className||""}`,ref:t=>this._infScroll=t,style:t},this.props.header,this.props.pullDownToRefresh&&o.createElement("div",{style:{position:"relative"},ref:t=>this._pullDown=t},o.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),!this.props.inverse&&this.state.showLoaderPrevious&&this.props.hasMorePrevious&&this.props.loaderPrevious,this.props.children,this.props.inverse&&this.state.showLoaderPrevious&&this.props.hasMorePrevious&&this.props.loaderPrevious,!this.state.showLoaderNext&&!e&&this.props.hasMoreNext&&this.props.loaderNext,this.state.showLoaderNext&&this.props.hasMoreNext&&this.props.loaderNext,!this.props.hasMoreNext&&this.props.endMessage,this.props.footer))}}const c=a},3774:function(t,e){!function(t){"use strict";function e(t,e,s,o){var r,i=!1,n=0;function l(){r&&clearTimeout(r)}function h(){l(),i=!0}function a(){for(var h=arguments.length,a=new Array(h),c=0;c<h;c++)a[c]=arguments[c];var p=this,u=Date.now()-n;function d(){n=Date.now(),s.apply(p,a)}function m(){r=void 0}i||(o&&!r&&d(),l(),void 0===o&&u>t?d():!0!==e&&(r=setTimeout(o?m:d,void 0===o?t-u:t)))}return"boolean"!=typeof e&&(o=s,s=e,e=void 0),a.cancel=h,a}function s(t,s,o){return void 0===o?e(t,s,!1):e(t,o,!1!==s)}t.debounce=s,t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);