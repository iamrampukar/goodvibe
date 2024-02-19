(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{2873:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/about",function(){return r(2247)}])},3554:function(e,t,r){"use strict";var s=r(5893),a=r(682),i=r(6819),o=r(4688),n=r(3299),l=r(5005),d=r(979),c=r(8193),u=r(1664),p=r.n(u);t.Z=function(){var e;let{data:t}=(0,n.useSession)(),{collapseSidebar:r}=(0,d.Wf)();return(0,s.jsx)("div",{children:(0,s.jsxs)(o.Z,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[(0,s.jsx)("span",{onClick:()=>r(),children:(0,s.jsx)(c.LHV,{size:40,color:"White",className:"mx-3"})}),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(o.Z.Brand,{as:p(),href:"/admin/dashboard",children:"Goodvibes Education Consultancy"}),(0,s.jsx)(o.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,s.jsxs)(o.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,s.jsx)(i.Z,{className:"me-auto",children:(0,s.jsxs)("div",{style:{textAlign:"center",width:"40%",margin:"auto",color:"white"},children:[(0,s.jsx)("span",{style:{color:"white"},children:"Welcome"}),(0,s.jsx)("h5",{style:{color:"red"},className:"my-auto",children:null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.email})]})}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(l.Z,{variant:"danger",onClick:()=>{(0,n.signOut)({redirect:!0,callbackUrl:"/"})},children:"Logout"})})]})]})]})})}},5160:function(e,t,r){"use strict";var s=r(5893);r(5675),r(7294);var a=r(979),i=r(1664),o=r.n(i);let n=()=>(0,s.jsxs)(a.YE,{style:{height:"100vh"},children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:(0,s.jsx)("h5",{className:"text-center p-4",children:"Dashboard"})}),(0,s.jsxs)(a.v2,{children:[(0,s.jsxs)(a.Wd,{label:"UserData",children:[(0,s.jsxs)(a.sN,{as:o(),href:"/admin/dashboard/user/add",children:[" ","Add User"," "]}),(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/user",children:[" ","All"," "]})]}),(0,s.jsxs)(a.Wd,{label:"AboutData",children:[(0,s.jsxs)(a.sN,{as:o(),href:"/admin/dashboard/about/add",children:[" ","Add About"," "]}),(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/about",children:[" ","All"," "]})]}),(0,s.jsxs)(a.Wd,{label:"Carousel",children:[(0,s.jsxs)(a.sN,{as:o(),href:"/admin/dashboard/carousel/add",children:[" ","Add Carousel"," "]}),(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/carousel",children:[" ","All"," "]})]}),(0,s.jsxs)(a.Wd,{label:"SuccessStory",children:[(0,s.jsxs)(a.sN,{as:o(),href:"/admin/dashboard/successstory/add",children:[" ","Add SuccessStory"," "]}),(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/successstory",children:[" ","All"," "]})]}),(0,s.jsxs)(a.Wd,{label:"Faq",children:[(0,s.jsxs)(a.sN,{as:o(),href:"/admin/dashboard/faq/add",children:[" ","Add Faq"," "]}),(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/faq",children:[" ","All"," "]})]}),(0,s.jsxs)(a.Wd,{label:"Blog",children:[(0,s.jsxs)(a.sN,{as:o(),href:"/admin/dashboard/blog/add",children:[" ","Add Blog"," "]}),(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/blog",children:[" ","All"," "]})]}),(0,s.jsx)(a.Wd,{label:"FeedbackData",children:(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/feedback",children:[" ","All"," "]})}),(0,s.jsx)(a.Wd,{label:"FormData",children:(0,s.jsxs)(a.sN,{ad:o(),href:"/admin/dashboard/form",children:[" ","All"," "]})})]})]});t.Z=n},5845:function(e,t,r){"use strict";var s=r(5893);r(7294);var a=r(4206);let i=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"40%",margin:"auto"},children:(0,s.jsx)(a.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})});t.Z=i},2247:function(e,t,r){"use strict";r.r(t);var s=r(5893),a=r(5160),i=r(3798),o=r(5147),n=r(8193),l=r(7294),d=r(1664),c=r.n(d),u=r(5845),p=r(6501),h=r(1163),f=r(6879),m=r(3554);let x=()=>{var e;let{data:t,isLoading:r}=(0,f.NS)(),a=(0,h.useRouter)(),[i,{isSuccess:d,isError:m}]=(0,f.mN)();return(0,l.useEffect)(()=>{d&&(p.Am.success("Deleted Successfully"),a.push("/admin/dashboard/about"))},[d,p.Am]),(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)(u.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.x7,{}),(0,s.jsxs)("div",{style:{width:"100%"},children:[(0,s.jsx)("h5",{style:{textAlign:"center"},children:"All About  List "}),(0,s.jsxs)(o.Z,{responsive:!0,striped:!0,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Id"}),(0,s.jsx)("th",{children:"Message"}),(0,s.jsx)("th",{colSpan:1,children:"ImageUrl"}),(0,s.jsx)("th",{children:"Actions"})]})}),(0,s.jsx)("tbody",{children:null==t?void 0:null===(e=t.aboutdata)||void 0===e?void 0:e.map((e,t)=>{var r;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e._id}),(0,s.jsx)("td",{children:e.message}),(0,s.jsx)("td",{children:null==e?void 0:null===(r=e.images)||void 0===r?void 0:r.url}),(0,s.jsx)("td",{children:(0,s.jsxs)("div",{style:{display:"flex",padding:"1rem",gap:"0.5rem"},children:[(0,s.jsx)(c(),{href:"/admin/dashboard/about/".concat(null==e?void 0:e._id),style:{textDecoration:"none"},children:(0,s.jsxs)("span",{children:[(0,s.jsx)(n.QML,{color:""}),"Edit"]})}),(0,s.jsxs)(c(),{href:"/",style:{textDecoration:"none",color:"red"},onClick:t=>{t.preventDefault(),i(null==e?void 0:e._id)},children:[" ",(0,s.jsx)(n.YK6,{}),"Delete"]})]})})]},t)})})]})]})]})})};t.default=x,x.getLayout=function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.C,{children:[(0,s.jsx)(m.Z,{}),(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)(a.Z,{}),e]})]})})}},5147:function(e,t,r){"use strict";var s=r(4184),a=r.n(s),i=r(7294),o=r(6792),n=r(5893);let l=i.forwardRef(({bsPrefix:e,className:t,striped:r,bordered:s,borderless:i,hover:l,size:d,variant:c,responsive:u,...p},h)=>{let f=(0,o.vE)(e,"table"),m=a()(t,f,c&&`${f}-${c}`,d&&`${f}-${d}`,r&&`${f}-${"string"==typeof r?`striped-${r}`:"striped"}`,s&&`${f}-bordered`,i&&`${f}-borderless`,l&&`${f}-hover`),x=(0,n.jsx)("table",{...p,className:m,ref:h});if(u){let e=`${f}-responsive`;return"string"==typeof u&&(e=`${e}-${u}`),(0,n.jsx)("div",{className:e,children:x})}return x});t.Z=l},6501:function(e,t,r){"use strict";let s,a;r.d(t,{x7:function(){return ea},Am:function(){return W}});var i,o=r(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",s="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":s+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},h={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},m=(e,t,r,s,a)=>{var i,o;let n=f(e),l=h[n]||(h[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!h[l]){let t=n!==e?e:(e=>{let t,r,s=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?s.shift():t[3]?(r=t[3].replace(u," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);h[l]=p(a?{["@keyframes "+l]:t}:t,r?"":"."+l)}let m=r&&h.g?h.g:null;return r&&(h.g=h[l]),i=h[l],o=t,m?o.data=o.data.replace(m,i):-1===o.data.indexOf(i)&&(o.data=s?i+o.data:o.data+i),l},x=(e,t,r)=>e.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?x(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let g,y,v,j=b.bind({k:1});function w(e,t){let r=this||{};return function(){let s=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;r.p=Object.assign({theme:y&&y()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,s)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),g(d,n)}return t?t(a):a}}var N=e=>"function"==typeof e,A=(e,t)=>N(e)?e(t):e,E=(s=0,()=>(++s).toString()),$=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},k=new Map,C=e=>{if(k.has(e))return;let t=setTimeout(()=>{k.delete(e),S({type:4,toastId:e})},1e3);k.set(e,t)},D=e=>{let t=k.get(e);t&&clearTimeout(t)},_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&D(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?_(e,{type:1,toast:r}):_(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?C(s):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},O=[],Z={toasts:[],pausedAt:void 0},S=e=>{Z=_(Z,e),O.forEach(e=>{e(Z)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,r]=(0,o.useState)(Z);(0,o.useEffect)(()=>(O.push(r),()=>{let e=O.indexOf(r);e>-1&&O.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var r,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),L=e=>(t,r)=>{let s=z(t,e,r);return S({type:2,toast:s}),s.id},W=(e,t)=>L("blank")(e,t);W.error=L("error"),W.success=L("success"),W.loading=L("loading"),W.custom=L("custom"),W.dismiss=e=>{S({type:3,toastId:e})},W.remove=e=>S({type:4,toastId:e}),W.promise=(e,t,r)=>{let s=W.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(W.success(A(t.success,e),{id:s,...r,...null==r?void 0:r.success}),e)).catch(e=>{W.error(A(t.error,e),{id:s,...r,...null==r?void 0:r.error})}),e};var P=(e,t)=>{S({type:1,toast:{id:e,height:t}})},T=()=>{S({type:5,time:Date.now()})},M=e=>{let{toasts:t,pausedAt:r}=I(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&W.dismiss(t.id);return}return setTimeout(()=>W.dismiss(t.id),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,r]);let s=(0,o.useCallback)(()=>{r&&S({type:6,time:Date.now()})},[r]),a=(0,o.useCallback)((e,r)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=r||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:P,startPause:T,endPause:s,calculateOffset:a}}},H=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,q=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=w("div")`
  position: absolute;
`,R=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(Y,null,t):t:"blank"===r?null:o.createElement(R,null,o.createElement(U,{...s}),"loading"!==r&&o.createElement(B,null,"error"===r?o.createElement(H,{...s}):o.createElement(q,{...s})))},X=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[X(r),G(r)];return{animation:t?`${j(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?J(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(V,{toast:e}),n=o.createElement(Q,{...e.ariaProps},A(e.message,e));return o.createElement(K,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof s?s({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,g=i,y=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let i=o.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return o.createElement("div",{ref:i,className:t,style:r},a)},er=(e,t)=>{let r=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...s}},es=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ea=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:d}=M(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let i=r.position||t,n=er(i,d.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}));return o.createElement(et,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?es:"",style:n},"custom"===r.type?A(r.message,r):a?a(r):o.createElement(ee,{toast:r,position:i}))}))}}},function(e){e.O(0,[206,774,888,179],function(){return e(e.s=2873)}),_N_E=e.O()}]);