(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{6804:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/about/[id]",function(){return a(7486)}])},3554:function(e,t,a){"use strict";var r=a(5893),s=a(682),i=a(6819),o=a(4688),n=a(3299),l=a(5005),d=a(979),c=a(8193),u=a(1664),p=a.n(u);t.Z=function(){var e;let{data:t}=(0,n.useSession)(),{collapseSidebar:a}=(0,d.Wf)();return(0,r.jsx)("div",{children:(0,r.jsxs)(o.Z,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[(0,r.jsx)("span",{onClick:()=>a(),children:(0,r.jsx)(c.LHV,{size:40,color:"White",className:"mx-3"})}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z.Brand,{as:p(),href:"/admin/dashboard",children:"Goodvibes Education Consultancy"}),(0,r.jsx)(o.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,r.jsxs)(o.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,r.jsx)(i.Z,{className:"me-auto",children:(0,r.jsxs)("div",{style:{textAlign:"center",width:"40%",margin:"auto",color:"white"},children:[(0,r.jsx)("span",{style:{color:"white"},children:"Welcome"}),(0,r.jsx)("h5",{style:{color:"red"},className:"my-auto",children:null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.email})]})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(l.Z,{variant:"danger",onClick:()=>{(0,n.signOut)({redirect:!0,callbackUrl:"/"})},children:"Logout"})})]})]})]})})}},5160:function(e,t,a){"use strict";var r=a(5893);a(5675),a(7294);var s=a(979),i=a(1664),o=a.n(i);let n=()=>(0,r.jsxs)(s.YE,{style:{height:"100vh"},children:[(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:(0,r.jsx)("h5",{className:"text-center p-4",children:"Dashboard"})}),(0,r.jsxs)(s.v2,{children:[(0,r.jsxs)(s.Wd,{label:"UserData",children:[(0,r.jsxs)(s.sN,{as:o(),href:"/admin/dashboard/user/add",children:[" ","Add User"," "]}),(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/user",children:[" ","All"," "]})]}),(0,r.jsxs)(s.Wd,{label:"AboutData",children:[(0,r.jsxs)(s.sN,{as:o(),href:"/admin/dashboard/about/add",children:[" ","Add About"," "]}),(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/about",children:[" ","All"," "]})]}),(0,r.jsxs)(s.Wd,{label:"Carousel",children:[(0,r.jsxs)(s.sN,{as:o(),href:"/admin/dashboard/carousel/add",children:[" ","Add Carousel"," "]}),(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/carousel",children:[" ","All"," "]})]}),(0,r.jsxs)(s.Wd,{label:"SuccessStory",children:[(0,r.jsxs)(s.sN,{as:o(),href:"/admin/dashboard/successstory/add",children:[" ","Add SuccessStory"," "]}),(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/successstory",children:[" ","All"," "]})]}),(0,r.jsxs)(s.Wd,{label:"Faq",children:[(0,r.jsxs)(s.sN,{as:o(),href:"/admin/dashboard/faq/add",children:[" ","Add Faq"," "]}),(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/faq",children:[" ","All"," "]})]}),(0,r.jsxs)(s.Wd,{label:"Blog",children:[(0,r.jsxs)(s.sN,{as:o(),href:"/admin/dashboard/blog/add",children:[" ","Add Blog"," "]}),(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/blog",children:[" ","All"," "]})]}),(0,r.jsx)(s.Wd,{label:"FeedbackData",children:(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/feedback",children:[" ","All"," "]})}),(0,r.jsx)(s.Wd,{label:"FormData",children:(0,r.jsxs)(s.sN,{ad:o(),href:"/admin/dashboard/form",children:[" ","All"," "]})})]})]});t.Z=n},5845:function(e,t,a){"use strict";var r=a(5893);a(7294);var s=a(4206);let i=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"40%",margin:"auto"},children:(0,r.jsx)(s.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})});t.Z=i},7486:function(e,t,a){"use strict";a.r(t);var r=a(5893),s=a(3554),i=a(5160),o=a(5845),n=a(6879),l=a(3798);a(5675);var d=a(1163),c=a(7294),u=a(7346),p=a(5005),h=a(6501);let m=()=>{let e=(0,d.useRouter)(),{id:t}=e.query,{data:a,isError:s,isLoading:i}=(0,n.eI)(t),[l,{isSuccess:m,isError:f,isLoading:b}]=(0,n.fX)(),[g,x]=(0,c.useState)({message:""}),{message:y}=g;(0,c.useEffect)(()=>{if(a){let{message:e}=null==a?void 0:a.aboutdata;x({message:e})}s&&h.Am.error("Error Fetching Data"),m&&(h.Am.success("Successfully Updated"),e.push("/admin/dashboard/about")),f&&h.Am.error("Something went wrong")},[a,s,f,m]);let v=e=>{e.preventDefault(),l({id:t,data:{message:y}})},j=e=>{x({...g,[e.target.name]:e.target.value})};return(0,r.jsx)(r.Fragment,{children:i?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.x7,{}),(0,r.jsx)("div",{style:{border:"1px solid red",height:"auto",width:"80%",display:"flex",justifyContent:"center"},children:(0,r.jsxs)("form",{onSubmit:v,encType:"multipart/form-data",children:[(0,r.jsx)("h5",{children:"Update About Data"}),(0,r.jsx)(u.Z.Control,{name:"message",value:y,onChange:j,as:"textarea"}),(0,r.jsx)(p.Z,{id:"createProductBtn",type:"submit",disabled:!!b,style:{marginTop:"2rem",width:"100%"},children:"Update Data"})]})})]})})};t.default=m,m.getLayout=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.C,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)(i.Z,{}),e]})]})})}},6501:function(e,t,a){"use strict";let r,s;a.d(t,{x7:function(){return es},Am:function(){return T}});var i,o=a(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},h={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},f=(e,t,a,r,s)=>{var i,o;let n=m(e),l=h[n]||(h[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!h[l]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);h[l]=p(s?{["@keyframes "+l]:t}:t,a?"":"."+l)}let f=a&&h.g?h.g:null;return a&&(h.g=h[l]),i=h[l],o=t,f?o.data=o.data.replace(f,i):-1===o.data.indexOf(i)&&(o.data=r?i+o.data:o.data+i),l},b=(e,t,a)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?b(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let x,y,v,j=g.bind({k:1});function w(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=g.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),x(d,n)}return t?t(s):s}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,A=(r=0,()=>(++r).toString()),k=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},C=new Map,D=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),S({type:4,toastId:e})},1e3);C.set(e,t)},$=e=>{let t=C.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?O(e,{type:1,toast:a}):O(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?D(r):e.toasts.forEach(e=>{D(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},Z=[],F={toasts:[],pausedAt:void 0},S=e=>{F=O(F,e),Z.forEach(e=>{e(F)})},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,a]=(0,o.useState)(F);(0,o.useEffect)(()=>(Z.push(a),()=>{let e=Z.indexOf(a);e>-1&&Z.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||_[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},I=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||A()}),P=e=>(t,a)=>{let r=I(t,e,a);return S({type:2,toast:r}),r.id},T=(e,t)=>P("blank")(e,t);T.error=P("error"),T.success=P("success"),T.loading=P("loading"),T.custom=P("custom"),T.dismiss=e=>{S({type:3,toastId:e})},T.remove=e=>S({type:4,toastId:e}),T.promise=(e,t,a)=>{let r=T.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(T.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{T.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var W=(e,t)=>{S({type:1,toast:{id:e,height:t}})},L=()=>{S({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:a}=z(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&T.dismiss(t.id);return}return setTimeout(()=>T.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,o.useCallback)(()=>{a&&S({type:6,time:Date.now()})},[a]),s=(0,o.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=a||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:W,startPause:L,endPause:r,calculateOffset:s}}},q=w("div")`
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
`,H=w("div")`
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
`,M=w("div")`
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
`,X=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=w("div")`
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
`,V=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(R,null,t):t:"blank"===a?null:o.createElement(X,null,o.createElement(H,{...r}),"loading"!==a&&o.createElement(B,null,"error"===a?o.createElement(q,{...r}):o.createElement(M,{...r})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,J=w("div")`
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
`,K=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(a),G(a)];return{animation:t?`${j(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(V,{toast:e}),n=o.createElement(K,{...e.ariaProps},E(e.message,e));return o.createElement(J,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,x=i,y=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let i=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:a},s)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:d}=U(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let i=a.position||t,n=ea(i,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?E(a.message,a):s?s(a):o.createElement(ee,{toast:a,position:i}))}))}}},function(e){e.O(0,[206,774,888,179],function(){return e(e.s=6804)}),_N_E=e.O()}]);