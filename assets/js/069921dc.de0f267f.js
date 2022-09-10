"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45417],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21911:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Troubleshooting",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-init/troubleshooting","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-init/troubleshooting/"]},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting",title:"Troubleshooting",description:"Helm commands show forbidden",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Troubleshooting",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-init/troubleshooting","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-init/troubleshooting/"]},sidebar:"tutorialSidebar",previous:{title:"Initialize Helm: Install the Tiller Service",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"},next:{title:"4.  Install Rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/helm-rancher"}},d={},u=[{value:"Helm commands show forbidden",id:"helm-commands-show-forbidden",level:3}],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"helm-commands-show-forbidden"},"Helm commands show forbidden"),(0,i.kt)("p",null,"When Helm is initiated in the cluster without specifying the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),", the command ",(0,i.kt)("inlineCode",{parentName:"p"},"helm init")," will succeed but you won't be able to execute most of the other ",(0,i.kt)("inlineCode",{parentName:"p"},"helm")," commands. The following error will be shown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Error: configmaps is forbidden: User "system:serviceaccount:kube-system:default" cannot list configmaps in the namespace "kube-system"\n')),(0,i.kt)("p",null,"To resolve this, the server component (",(0,i.kt)("inlineCode",{parentName:"p"},"tiller"),") needs to be removed and added with the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),". You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"helm reset --force")," to remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," from the cluster. Please check if it is removed using ",(0,i.kt)("inlineCode",{parentName:"p"},"helm version --server"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm reset --force\nTiller (the Helm server-side component) has been uninstalled from your Kubernetes Cluster.\nhelm version --server\nError: could not find tiller\n")),(0,i.kt)("p",null,"When you have confirmed that ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," has been removed, please follow the steps provided in ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"},"Initialize Helm (Install tiller)")," to install ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," with the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),"."))}p.isMDXComponent=!0}}]);