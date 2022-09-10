"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75025],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"2. Enable Istio in a Namespace",weight:2,aliases:["/rancher/v2.5/en/istio/setup/enable-istio-in-namespace","/rancher/v2.5/en/istio/v2.5/setup/enable-istio-in-namespace","/rancher/v2.x/en/istio/v2.5/setup/enable-istio-in-namespace/"]},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",id:"version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",title:"2. Enable Istio in a Namespace",description:"You will need to manually enable Istio in each namespace that you want to be tracked or controlled by Istio. When Istio is enabled in a namespace, the Envoy sidecar proxy will be automatically injected into all new workloads that are deployed in the namespace.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace.md",tags:[],version:"2.5",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"2. Enable Istio in a Namespace",weight:2,aliases:["/rancher/v2.5/en/istio/setup/enable-istio-in-namespace","/rancher/v2.5/en/istio/v2.5/setup/enable-istio-in-namespace","/rancher/v2.x/en/istio/v2.5/setup/enable-istio-in-namespace/"]},sidebar:"tutorialSidebar",previous:{title:"1. Enable Istio in the Cluster",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},next:{title:"3. Add Deployments and Services with the Istio Sidecar",permalink:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"}},d={},u=[{value:"Verifying that Automatic Istio Sidecar Injection is Enabled",id:"verifying-that-automatic-istio-sidecar-injection-is-enabled",level:3},{value:"Excluding Workloads from Being Injected with the Istio Sidecar",id:"excluding-workloads-from-being-injected-with-the-istio-sidecar",level:3},{value:"Next: Select the Nodes ",id:"next-select-the-nodes-",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will need to manually enable Istio in each namespace that you want to be tracked or controlled by Istio. When Istio is enabled in a namespace, the Envoy sidecar proxy will be automatically injected into all new workloads that are deployed in the namespace."),(0,o.kt)("p",null,"This namespace setting will only affect new workloads in the namespace. Any preexisting workloads will need to be re-deployed to leverage the sidecar auto injection."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," To enable Istio in a namespace, the cluster must have Istio installed.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer,")," open the kubectl shell."),(0,o.kt)("li",{parentName:"ol"},"Then run ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl label namespace <namespace> istio-injection=enabled"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The namespace now has the label ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled"),". All new workloads deployed in this namespace will have the Istio sidecar injected by default."),(0,o.kt)("h3",{id:"verifying-that-automatic-istio-sidecar-injection-is-enabled"},"Verifying that Automatic Istio Sidecar Injection is Enabled"),(0,o.kt)("p",null,"To verify that Istio is enabled, deploy a hello-world workload in the namespace. Go to the workload and click the pod name. In the ",(0,o.kt)("strong",{parentName:"p"},"Containers")," section, you should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-proxy")," container."),(0,o.kt)("h3",{id:"excluding-workloads-from-being-injected-with-the-istio-sidecar"},"Excluding Workloads from Being Injected with the Istio Sidecar"),(0,o.kt)("p",null,"If you need to exclude a workload from getting injected with the Istio sidecar, use the following annotation on the workload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sidecar.istio.io/inject: \u201cfalse\u201d\n")),(0,o.kt)("p",null,"To add the annotation to a workload,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer")," view, use the side-nav to select the ",(0,o.kt)("strong",{parentName:"li"},"Overview")," page for workloads."),(0,o.kt)("li",{parentName:"ol"},"Go to the workload that should not have the sidecar and edit as yaml"),(0,o.kt)("li",{parentName:"ol"},"Add the following key, value ",(0,o.kt)("inlineCode",{parentName:"li"},"sidecar.istio.io/inject: false")," as an annotation on the workload"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The Istio sidecar will not be injected into the workload."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," If you are having issues with a Job you deployed not completing, you will need to add this annotation to your pod using the provided steps. Since Istio Sidecars run indefinitely, a Job cannot be considered complete even after its task has completed.")),(0,o.kt)("h3",{id:"next-select-the-nodes-"},(0,o.kt)("a",{parentName:"h3",href:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"Next: Select the Nodes ")))}h.isMDXComponent=!0}}]);