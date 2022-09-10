"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38009],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74091:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={title:"Roles for Nodes in Kubernetes",weight:1},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",title:"Roles for Nodes in Kubernetes",description:"This section describes the roles for etcd nodes, controlplane nodes, and worker nodes in Kubernetes, and how the roles work together in a cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Roles for Nodes in Kubernetes",weight:1},sidebar:"tutorialSidebar",previous:{title:"Recommended Cluster Architecture",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"},next:{title:"Setting up Clusters from Hosted Kubernetes Providers",permalink:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"}},c={},d=[{value:"kube-apiserver",id:"kube-apiserver",level:3},{value:"kube-controller-manager",id:"kube-controller-manager",level:3},{value:"kube-scheduler",id:"kube-scheduler",level:3}],p={toc:d};function h(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes the roles for etcd nodes, controlplane nodes, and worker nodes in Kubernetes, and how the roles work together in a cluster."),(0,s.kt)("p",null,"This diagram is applicable to Kubernetes clusters ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"launched with Rancher using RKE."),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Cluster diagram",src:n(56492).Z,width:"772",height:"1145"}),(0,s.kt)("br",null)),(0,s.kt)("sup",null,"Lines show the traffic flow between components. Colors are used purely for visual aid"),(0,s.kt)("h1",{id:"etcd"},"etcd"),(0,s.kt)("p",null,"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd")," role run etcd, which is a consistent and highly available key value store used as Kubernetes\u2019 backing store for all cluster data. etcd replicates the data to each node."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd")," role are shown as ",(0,s.kt)("inlineCode",{parentName:"p"},"Unschedulable")," in the UI, meaning no pods will be scheduled to these nodes by default.")),(0,s.kt)("h1",{id:"controlplane"},"controlplane"),(0,s.kt)("p",null,"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," role run the Kubernetes master components (excluding ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd"),", as it's a separate role). See ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#master-components"},"Kubernetes: Master Components")," for a detailed list of components."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," role are shown as ",(0,s.kt)("inlineCode",{parentName:"p"},"Unschedulable")," in the UI, meaning no pods will be scheduled to these nodes by default.")),(0,s.kt)("h3",{id:"kube-apiserver"},"kube-apiserver"),(0,s.kt)("p",null,"The Kubernetes API server (",(0,s.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),") scales horizontally. Each node with the role ",(0,s.kt)("inlineCode",{parentName:"p"},"controlplane")," will be added to the NGINX proxy on the nodes with components that need to access the Kubernetes API server. This means that if a node becomes unreachable, the local NGINX proxy on the node will forward the request to another Kubernetes API server in the list."),(0,s.kt)("h3",{id:"kube-controller-manager"},"kube-controller-manager"),(0,s.kt)("p",null,"The Kubernetes controller manager uses leader election using an endpoint in Kubernetes. One instance of the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," will create an entry in the Kubernetes endpoints and updates that entry in a configured interval. Other instances will see an active leader and wait for that entry to expire (for example, when a node is unresponsive)."),(0,s.kt)("h3",{id:"kube-scheduler"},"kube-scheduler"),(0,s.kt)("p",null,"The Kubernetes scheduler uses leader election using an endpoint in Kubernetes. One instance of the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," will create an entry in the Kubernetes endpoints and updates that entry in a configured interval. Other instances will see an active leader and wait for that entry to expire (for example, when a node is unresponsive)."),(0,s.kt)("h1",{id:"worker"},"worker"),(0,s.kt)("p",null,"Nodes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"worker")," role run the Kubernetes node components. See ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"Kubernetes: Node Components")," for a detailed list of components."),(0,s.kt)("h1",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"Kubernetes: Node Components"))))}h.isMDXComponent=!0},56492:function(e,t,n){t.Z=n.p+"assets/images/clusterdiagram-2b66ee124fed594265b3bc07fa1f145d.svg"}}]);