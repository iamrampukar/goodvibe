(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{4695:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feedback",function(){return a(6558)}])},6558:function(e,t,a){"use strict";a.r(t);var r=a(5893),i=a(7294),s=a(7346),o=a(5005),n=a(6879),l=a(5675),c=a.n(l),d=a(6501),u=a(1163),p=a(8243),m=a.n(p);let f=()=>{let[e,{isError:t,isLoading:a,isSuccess:l}]=(0,n.db)(),p=(0,u.useRouter)(),[f,h]=(0,i.useState)({fullname:"",message:""}),{fullname:g,message:y}=f,[b,x]=(0,i.useState)("../favicon.io"),[v,w]=(0,i.useState)("/favicon.io");(0,i.useEffect)(()=>{t&&d.Am.error(t),l&&(d.Am.success("Created Successfully"),p.push("/"))});let E=t=>{t.preventDefault(),e({fullname:g,message:y,images:b})},j=e=>{if("images"===e.target.name){let t=new FileReader;t.onload=()=>{2===t.readyState&&(w(t.result),x(t.result))},t.readAsDataURL(e.target.files[0])}else h({...f,[e.target.name]:e.target.value})};return(0,r.jsxs)("div",{children:[(0,r.jsx)(d.x7,{}),(0,r.jsxs)("div",{className:m().mainDiv,children:[(0,r.jsx)("h2",{className:"text-center",children:"We were happy to hear from you"}),(0,r.jsxs)(s.Z,{onSubmit:E,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z.Label,{children:"FullName"}),(0,r.jsx)(s.Z.Control,{type:"text",placeholder:"Enter FullName",name:"fullname",value:g,onChange:j})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z.Label,{children:"Mesage"}),(0,r.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Message",name:"message",value:y,onChange:j})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z.Label,{children:"Upload Your Image"}),(0,r.jsx)(s.Z.Control,{type:"file",multiple:!0,accept:"image/*",onChange:j,name:"images"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{src:v,alt:"Product Preview",width:50,height:50})}),(0,r.jsx)("div",{className:"my-3 text-center",children:(0,r.jsx)(o.Z,{style:{width:"100%"},onClick:E,children:"Submit"})})]})]})]})};t.default=f},8243:function(e){e.exports={mainDiv:"Feedback_mainDiv__GF5Wc"}},6501:function(e,t,a){"use strict";let r,i;a.d(t,{x7:function(){return ei},Am:function(){return L}});var s,o=a(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",i="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+o+";":r+="f"==s[1]?p(o,s):s+"{"+p(o,"k"==s[1]?"":t)+"}":"object"==typeof o?r+=p(o,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(s,o):s+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,i)=>{var s,o;let n=f(e),l=m[n]||(m[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!m[l]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[l]=p(i?{["@keyframes "+l]:t}:t,a?"":"."+l)}let h=a&&m.g?m.g:null;return a&&(m.g=m[l]),s=m[l],o=t,h?o.data=o.data.replace(h,s):-1===o.data.indexOf(s)&&(o.data=r?s+o.data:o.data+s),l},g=(e,t,a)=>e.reduce((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,x,v,w=y.bind({k:1});function E(e,t){let a=this||{};return function(){let r=arguments;function i(s,o){let n=Object.assign({},s),l=n.className||i.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(l),n.className=y.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),b(c,n)}return t?t(i):i}}var j=e=>"function"==typeof e,k=(e,t)=>j(e)?e(t):e,C=(r=0,()=>(++r).toString()),N=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},$=new Map,_=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),S({type:4,toastId:e})},1e3);$.set(e,t)},O=e=>{let t=$.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?D(e,{type:1,toast:a}):D(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?_(r):e.toasts.forEach(e=>{_(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],P={toasts:[],pausedAt:void 0},S=e=>{P=D(P,e),A.forEach(e=>{e(P)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={})=>{let[t,a]=(0,o.useState)(P);(0,o.useEffect)(()=>(A.push(a),()=>{let e=A.indexOf(a);e>-1&&A.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},I=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||C()}),Z=e=>(t,a)=>{let r=I(t,e,a);return S({type:2,toast:r}),r.id},L=(e,t)=>Z("blank")(e,t);L.error=Z("error"),L.success=Z("success"),L.loading=Z("loading"),L.custom=Z("custom"),L.dismiss=e=>{S({type:3,toastId:e})},L.remove=e=>S({type:4,toastId:e}),L.promise=(e,t,a)=>{let r=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(L.success(k(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{L.error(k(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{S({type:1,toast:{id:e,height:t}})},T=()=>{S({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:a}=F(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,o.useCallback)(()=>{a&&S({type:6,time:Date.now()})},[a]),i=(0,o.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=a||{},o=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:T,endPause:r,calculateOffset:i}}},R=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
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
    animation: ${w`
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
    animation: ${w`
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
`,U=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,W=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
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
    animation: ${w`
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
`,X=E("div")`
  position: absolute;
`,Y=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,B=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(q,null,t):t:"blank"===a?null:o.createElement(Y,null,o.createElement(U,{...r}),"loading"!==a&&o.createElement(X,null,"error"===a?o.createElement(R,{...r}):o.createElement(W,{...r})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=E("div")`
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
`,Q=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=(e,t)=>{let a=e.includes("top")?1:-1,[r,i]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),J(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?V(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(B,{toast:e}),n=o.createElement(Q,{...e.ariaProps},k(e.message,e));return o.createElement(K,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):o.createElement(o.Fragment,null,s,n))});s=o.createElement,p.p=void 0,b=s,x=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let s=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:s,className:t,style:a},i)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:c}=H(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let s=a.position||t,n=ea(s,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?k(a.message,a):i?i(a):o.createElement(ee,{toast:a,position:s}))}))}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4695)}),_N_E=e.O()}]);