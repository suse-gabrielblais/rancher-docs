"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[62289],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(t),p=o,f=g["".concat(l,".").concat(p)]||g[p]||d[p]||a;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},86073:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={title:"Adding Ingresses",description:"Ingresses can be added for workloads to provide load balancing, SSL termination and host/path-based routing. Learn how to add Rancher ingress",weight:3042},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",title:"Adding Ingresses",description:"Ingresses can be added for workloads to provide load balancing, SSL termination and host/path-based routing. Learn how to add Rancher ingress",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Adding Ingresses",description:"Ingresses can be added for workloads to provide load balancing, SSL termination and host/path-based routing. Learn how to add Rancher ingress",weight:3042},sidebar:"tutorialSidebar",previous:{title:"Layer 4 and Layer 7 Load Balancing",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},next:{title:"Ingress Configuration",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration"}},c={},d=[],g={toc:d};function p(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ingresses can be added for workloads to provide load balancing, SSL termination and host/path based routing. When using ingresses in a project, you can program the ingress hostname to an external DNS by setting up a Global DNS entry."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you want to add an ingress to and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Service Discovery > Ingresses"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Select an existing ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," from the drop-down list."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Name")," for the ingress."),(0,a.kt)("li",{parentName:"ol"},"Create ingress forwarding ",(0,a.kt)("strong",{parentName:"li"},"Rules"),". For help configuring the rules, refer to ",(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration#ingress-rule-configuration"},"this section.")," If any of your ingress rules handle requests for encrypted ports, add a certificate to encrypt/decrypt communications."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Optional:")," click ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," to create additional ingress rules. For example, after you create ingress rules to direct requests for your hostname, you'll likely want to create a default backend to handle 404s."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," at the bottom right.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your ingress is added to the project. The ingress begins enforcing your ingress rules."))}p.isMDXComponent=!0}}]);