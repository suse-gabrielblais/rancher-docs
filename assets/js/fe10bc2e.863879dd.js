"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29449],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Kubernetes Installation Using Helm 2",weight:1,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2","/rancher/v2.x/en/installation/resources/advanced/helm2/"]},s=void 0,u={unversionedId:"pages-for-subheaders/helm2",id:"version-2.0-2.4/pages-for-subheaders/helm2",title:"Kubernetes Installation Using Helm 2",description:"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Kubernetes Installation Using Helm 2",weight:1,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2","/rancher/v2.x/en/installation/resources/advanced/helm2/"]},sidebar:"tutorialSidebar",previous:{title:"UI for Istio Virtual Services and Destination Rules",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"},next:{title:"1. Create Nodes and Load Balancer",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"}},c={},d=[{value:"Recommended Architecture",id:"recommended-architecture",level:2},{value:"Required Tools",id:"required-tools",level:2},{value:"Installation Outline",id:"installation-outline",level:2},{value:"Additional Install Options",id:"additional-install-options",level:2},{value:"Previous Methods",id:"previous-methods",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3."),(0,l.kt)("p",{parentName:"blockquote"},"If you are using Helm 2, we recommend ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"migrating to Helm 3")," because it is simpler to use and more secure than Helm 2."),(0,l.kt)("p",{parentName:"blockquote"},"This section provides a copy of the older high-availability Kubernetes Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,l.kt)("p",null,"For production environments, we recommend installing Rancher in a high-availability configuration so that your user base can always access Rancher Server. When installed in a Kubernetes cluster, Rancher will integrate with the cluster's etcd database and take advantage of Kubernetes scheduling for high-availability."),(0,l.kt)("p",null,"This procedure walks you through setting up a 3-node cluster with Rancher Kubernetes Engine (RKE) and installing the Rancher chart with the Helm package manager."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important:")," The Rancher management server can only be run on an RKE-managed Kubernetes cluster. Use of Rancher on hosted Kubernetes or other providers is not supported.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important:")," For the best performance, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads.")),(0,l.kt)("h2",{id:"recommended-architecture"},"Recommended Architecture"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DNS for Rancher should resolve to a Layer 4 load balancer (TCP)"),(0,l.kt)("li",{parentName:"ul"},"The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster."),(0,l.kt)("li",{parentName:"ul"},"The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443."),(0,l.kt)("li",{parentName:"ul"},"The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.")),(0,l.kt)("figcaption",null,"Kubernetes Rancher install with layer 4 load balancer, depicting SSL termination at ingress controllers"),"![High-availability Kubernetes Install](/img/ha/rancher2ha.svg)",(0,l.kt)("sup",null,"Kubernetes Rancher install with Layer 4 load balancer (TCP), depicting SSL termination at ingress controllers"),(0,l.kt)("h2",{id:"required-tools"},"Required Tools"),(0,l.kt)("p",null,"The following CLI tools are required for this install. Please make sure these tools are installed and available in your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl")," - Kubernetes command-line tool."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"rke")," - Rancher Kubernetes Engine, cli for building Kubernetes clusters."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.helm.sh/using_helm/#installing-helm"},"helm")," - Package management for Kubernetes. Refer to the ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher.")),(0,l.kt)("h2",{id:"installation-outline"},"Installation Outline"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"},"Create Nodes and Load Balancer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke"},"Install Kubernetes with RKE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"},"Initialize Helm (tiller)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm-rancher"},"Install Rancher"))),(0,l.kt)("h2",{id:"additional-install-options"},"Additional Install Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on"))),(0,l.kt)("h2",{id:"previous-methods"},"Previous Methods"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on"},"RKE add-on install")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,l.kt)("p",{parentName:"blockquote"},"Please use the Rancher helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,l.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the Helm chart.")))}h.isMDXComponent=!0}}]);