"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38193],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},70805:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Deploying Workloads",description:"Read this step by step guide for deploying workloads. Deploy a workload to run an application in one or more containers.",weight:3026},p=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads",title:"Deploying Workloads",description:"Read this step by step guide for deploying workloads. Deploy a workload to run an application in one or more containers.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Deploying Workloads",description:"Read this step by step guide for deploying workloads. Deploy a workload to run an application in one or more containers.",weight:3026},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Workloads and Pods",permalink:"/pages-for-subheaders/workloads-and-pods"},next:{title:"Rolling Back Workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"}},u={},d=[],c={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploy a workload to run an application in one or more containers."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster where you want to upgrade a workload and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Workload"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the type of workload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the namespace where the workload will be deployed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the workload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Container Image")," field, enter the name of the Docker image that you want to deploy to the project, optionally prefacing it with the registry host (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"quay.io"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.gitlab.com"),", etc.). During deployment, Rancher pulls this image from the specified public or private registry. If no registry host is provided, Rancher will pull the image from ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/explore/"},"Docker Hub"),". Enter the name exactly as it appears in the registry server, including any required path, and optionally including the desired tag (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.gitlab.com/user/path/image:tag"),"). If no tag is provided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag will be automatically used.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Either select an existing namespace, or click ",(0,o.kt)("strong",{parentName:"p"},"Add to a new namespace")," and enter a new namespace.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Port")," to enter a port mapping, which enables access to the application inside and outside of the cluster . For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/workloads-and-pods#services"},"Services"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the remaining options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Environment Variables")),(0,o.kt)("p",{parentName:"li"},"  Use this section to either specify environment variables for your workload to consume on the fly, or to pull them from another source, such as a secret or ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMap"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Node Scheduling"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Health Check"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Volumes")),(0,o.kt)("p",{parentName:"li"},"  Use this section to add storage for your workload. You can manually specify the volume that you want to add, use a persistent volume claim to dynamically create a volume for the workload, or read data for a volume to use from a file such as a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMap"),"."),(0,o.kt)("p",{parentName:"li"},"  When you are deploying a Stateful Set, you should use a Volume Claim Template when using Persistent Volumes. This will ensure that Persistent Volumes are created dynamically when you scale your Stateful Set.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scaling/Upgrade Policy")),(0,o.kt)("p",{parentName:"li"},"  :::note Amazon Note for Volumes:"),(0,o.kt)("p",{parentName:"li"},"  To mount an Amazon EBS volume:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"Amazon AWS"),", the nodes must be in the same Availability Zone and possess IAM permissions to attach/unattach volumes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The cluster must be using the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#aws"},"AWS cloud provider")," option. For more information on enabling this option see ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"},"Creating an Amazon EC2 Cluster")," or ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-existing-nodes"},"Creating a Custom Cluster"),"."),(0,o.kt)("p",{parentName:"li"},":::")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Show Advanced Options")," and configure:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Networking")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Labels & Annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security and Host Config")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The workload is deployed to the chosen namespace. You can view the workload's status from the project's ",(0,o.kt)("strong",{parentName:"p"},"Workloads")," view."))}m.isMDXComponent=!0}}]);