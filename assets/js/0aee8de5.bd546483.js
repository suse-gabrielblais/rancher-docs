"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60905],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(i,".").concat(u)]||m[u]||s[u]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47610:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],d={title:"Opening Ports with firewalld",weight:1},i=void 0,p={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",id:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",title:"Opening Ports with firewalld",description:"We recommend disabling firewalld. For Kubernetes 1.19.x and higher, firewalld must be turned off.",source:"@site/docs/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",permalink:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Opening Ports with firewalld",weight:1},sidebar:"tutorialSidebar",previous:{title:"Continuous Delivery",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery"},next:{title:"Tuning etcd for Large Installations",permalink:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"}},c={},s=[],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"We recommend disabling firewalld. For Kubernetes 1.19.x and higher, firewalld must be turned off.")),(0,l.kt)("p",null,"Some distributions of Linux ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux#Rebuilds"},"derived from RHEL,")," including Oracle Linux, may have default firewall rules that block communication with Helm."),(0,l.kt)("p",null,"For example, one Oracle Linux image in AWS has REJECT rules that stop Helm from communicating with Tiller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Chain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED\nACCEPT     icmp --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\nACCEPT     tcp  --  anywhere             anywhere             state NEW tcp dpt:ssh\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination\n")),(0,l.kt)("p",null,"You can check the default firewall rules with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo iptables --list\n")),(0,l.kt)("p",null,"This section describes how to use ",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld")," to apply the ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},"firewall port rules")," for nodes in a high-availability Rancher server cluster."),(0,l.kt)("h1",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("p",null,"Install v7.x or later ofv",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yum install firewalld\nsystemctl start firewalld\nsystemctl enable firewalld\n")),(0,l.kt)("h1",{id:"applying-firewall-port-rules"},"Applying Firewall Port Rules"),(0,l.kt)("p",null,"In the Rancher high-availability installation instructions, the Rancher server is set up on three nodes that have all three Kubernetes roles: etcd, controlplane, and worker. If your Rancher server nodes have all three roles, run the following commands on each node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"firewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,l.kt)("p",null,"If your Rancher server nodes have separate roles, use the following commands based on the role of the node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# For etcd nodes, run the following commands:\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\n\n# For control plane nodes, run the following commands:\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n\n# For worker nodes, run the following commands:\nfirewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,l.kt)("p",null,"After the ",(0,l.kt)("inlineCode",{parentName:"p"},"firewall-cmd")," commands have been run on a node, use the following command to enable the firewall rules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"firewall-cmd --reload\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The firewall is updated so that Helm can communicate with the Rancher server nodes."))}u.isMDXComponent=!0}}]);