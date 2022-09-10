"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[48942],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return p}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),h=c(r),p=a,g=h["".concat(l,".").concat(p)]||h[p]||o[p]||i;return r?t.createElement(g,s(s({ref:n},d),{},{components:r})):t.createElement(g,s({ref:n},d))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82856:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return o}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],u={title:"Rancher v2.2",weight:4,aliases:["/rancher/v2.x/en/security/rancher-2.2/"]},l=void 0,c={unversionedId:"pages-for-subheaders/rancher-v2.2-hardening-guides",id:"version-2.0-2.4/pages-for-subheaders/rancher-v2.2-hardening-guides",title:"Rancher v2.2",description:"Self Assessment Guide",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-v2.2-hardening-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-v2.2-hardening-guides",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-v2.2-hardening-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-v2.2-hardening-guides.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Rancher v2.2",weight:4,aliases:["/rancher/v2.x/en/security/rancher-2.2/"]},sidebar:"tutorialSidebar",previous:{title:"Hardening Guide v2.1",permalink:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.1-hardening-guides/hardening-guide-with-cis-v1.3-benchmark"},next:{title:"CIS Benchmark Rancher Self-Assessment Guide v2.2",permalink:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.2-hardening-guides/self-assessment-guide-with-cis-v1.4-benchmark"}},d={},o=[{value:"Self Assessment Guide",id:"self-assessment-guide",level:3},{value:"Hardening Guide",id:"hardening-guide",level:3}],h={toc:o};function p(e){var n=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"self-assessment-guide"},"Self Assessment Guide"),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.2-hardening-guides/self-assessment-guide-with-cis-v1.4-benchmark"},"guide")," corresponds to specific versions of the hardening guide, Rancher, Kubernetes, and the CIS Benchmark:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guide Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Self Assessment Guide v2.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Rancher v2.2.x"),(0,i.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes 1.13"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.0 and v1.4.1")))),(0,i.kt)("h3",{id:"hardening-guide"},"Hardening Guide"),(0,i.kt)("p",null,"This hardening ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.2-hardening-guides/hardening-guide-with-cis-v1.4-benchmark"},"guide")," is intended to be used with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guide Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Rancher v2.2.x"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.1, 1.4.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes 1.13")))))}p.isMDXComponent=!0}}]);