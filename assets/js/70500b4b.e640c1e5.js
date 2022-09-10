"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79794],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66641:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],d={title:"Rancher Agent Options",weight:2500},o=void 0,p={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",id:"reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",title:"Rancher Agent Options",description:"Rancher deploys an agent on each node to communicate with the node. This pages describes the options that can be passed to the agent. To use these options, you will need to create a cluster with custom nodes and add the options to the generated docker run command when adding a node.",source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Rancher Agent Options",weight:2500},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes on Existing Custom Nodes",permalink:"/pages-for-subheaders/use-existing-nodes"},next:{title:"Syncing",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"}},s={},m=[{value:"General options",id:"general-options",level:2},{value:"Role options",id:"role-options",level:2},{value:"IP address options",id:"ip-address-options",level:2},{value:"Dynamic IP address options",id:"dynamic-ip-address-options",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher deploys an agent on each node to communicate with the node. This pages describes the options that can be passed to the agent. To use these options, you will need to ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-existing-nodes"},"create a cluster with custom nodes")," and add the options to the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command when adding a node."),(0,i.kt)("p",null,"For an overview of how Rancher communicates with downstream clusters using node agents, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#3-node-agents"},"architecture section.")),(0,i.kt)("h2",{id:"general-options"},"General options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--server")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_SERVER")),(0,i.kt)("td",{parentName:"tr",align:null},"The configured Rancher ",(0,i.kt)("inlineCode",{parentName:"td"},"server-url")," setting which the agent connects to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_TOKEN")),(0,i.kt)("td",{parentName:"tr",align:null},"Token that is needed to register the node in Rancher")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--ca-checksum")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_CA_CHECKSUM")),(0,i.kt)("td",{parentName:"tr",align:null},"The SHA256 checksum of the configured Rancher ",(0,i.kt)("inlineCode",{parentName:"td"},"cacerts")," setting to validate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--node-name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_NODE_NAME")),(0,i.kt)("td",{parentName:"tr",align:null},"Override the hostname that is used to register the node (defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"hostname -s"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--label")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_NODE_LABEL")),(0,i.kt)("td",{parentName:"tr",align:null},"Add node labels to the node. For multiple labels, pass additional ",(0,i.kt)("inlineCode",{parentName:"td"},"--label")," options. (",(0,i.kt)("inlineCode",{parentName:"td"},"--label key=value"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--taints")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_NODE_TAINTS")),(0,i.kt)("td",{parentName:"tr",align:null},"Add node taints to the node. For multiple taints, pass additional ",(0,i.kt)("inlineCode",{parentName:"td"},"--taints")," options.  (",(0,i.kt)("inlineCode",{parentName:"td"},"--taints key=value:effect"),")")))),(0,i.kt)("h2",{id:"role-options"},"Role options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--all-roles")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ALL=true")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply all roles (",(0,i.kt)("inlineCode",{parentName:"td"},"etcd"),",",(0,i.kt)("inlineCode",{parentName:"td"},"controlplane"),",",(0,i.kt)("inlineCode",{parentName:"td"},"worker"),") to the node")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--etcd")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ETCD=true")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply the role ",(0,i.kt)("inlineCode",{parentName:"td"},"etcd")," to the node")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--controlplane")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CONTROL=true")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply the role ",(0,i.kt)("inlineCode",{parentName:"td"},"controlplane")," to the node")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--worker")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WORKER=true")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply the role ",(0,i.kt)("inlineCode",{parentName:"td"},"worker")," to the node")))),(0,i.kt)("h2",{id:"ip-address-options"},"IP address options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_ADDRESS")),(0,i.kt)("td",{parentName:"tr",align:null},"The IP address the node will be registered with (defaults to the IP used to reach ",(0,i.kt)("inlineCode",{parentName:"td"},"8.8.8.8"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--internal-address")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_INTERNAL_ADDRESS")),(0,i.kt)("td",{parentName:"tr",align:null},"The IP address used for inter-host communication on a private network")))),(0,i.kt)("h3",{id:"dynamic-ip-address-options"},"Dynamic IP address options"),(0,i.kt)("p",null,"For automation purposes, you can't have a specific IP address in a command as it has to be generic to be used for every node. For this, we have dynamic IP address options. They are used as a value to the existing IP address options. This is supported for ",(0,i.kt)("inlineCode",{parentName:"p"},"--address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--internal-address"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Interface name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address eth0")),(0,i.kt)("td",{parentName:"tr",align:null},"The first configured IP address will be retrieved from the given interface")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ipify")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address ipify")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"https://api.ipify.org")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"awslocal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address awslocal")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/latest/meta-data/local-ipv4")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"awspublic")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address awspublic")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/latest/meta-data/public-ipv4")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"doprivate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address doprivate")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/v1/interfaces/private/0/ipv4/address")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dopublic")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address dopublic")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"azprivate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address azprivate")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/instance/network/interface/0/ipv4/ipAddress/0/privateIpAddress?api-version=2017-08-01&format=text")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"azpublic")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address azpublic")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/instance/network/interface/0/ipv4/ipAddress/0/publicIpAddress?api-version=2017-08-01&format=text")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gceinternal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address gceinternal")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gceexternal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address gceexternal")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"packetlocal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address packetlocal")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"https://metadata.packet.net/2009-04-04/meta-data/local-ipv4")," will be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"packetpublic")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--address packetlocal")),(0,i.kt)("td",{parentName:"tr",align:null},"Value retrieved from ",(0,i.kt)("inlineCode",{parentName:"td"},"https://metadata.packet.net/2009-04-04/meta-data/public-ipv4")," will be used")))))}c.isMDXComponent=!0}}]);