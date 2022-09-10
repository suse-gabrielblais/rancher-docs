"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51976],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),n=a(86010),o="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(87462),n=a(67294),o=a(86010),s=a(72389),l=a(67392),i=a(7094),u=a(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,s=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,g=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),w=y.tabGroupChoices,T=y.setTabGroupChoices,C=(0,n.useState)(N),R=C[0],S=C[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=w[f];null!=I&&I!==R&&k.some((function(e){return e.value===I}))&&S(I)}var x=function(e){var t=e.currentTarget,a=O.indexOf(t),r=k[a].value;r!==R&&(E(t),S(r),null!=f&&T(f,String(r)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=O.indexOf(e.currentTarget)+1;a=null!=(r=O[n])?r:O[0];break;case"ArrowLeft":var o,s=O.indexOf(e.currentTarget)-1;a=null!=(o=O[s])?o:O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,a=e.label,s=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:x,onClick:x},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":R===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(v.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function h(e){var t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},71733:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=a(65488),l=a(85162),i=["components"],u={title:"Restoring a Cluster from Backup",weight:2050},c=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",title:"Restoring a Cluster from Backup",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Restoring a Cluster from Backup",weight:2050},sidebar:"tutorialSidebar",previous:{title:"Backing up a Cluster",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},next:{title:"Cluster Autoscaler",permalink:"/v2.0-v2.4/pages-for-subheaders/install-cluster-autoscaler"}},d={},h=[{value:"Viewing Available Snapshots",id:"viewing-available-snapshots",level:2},{value:"Restoring a Cluster from a Snapshot",id:"restoring-a-cluster-from-a-snapshot",level:2},{value:"Recovering etcd without a Snapshot",id:"recovering-etcd-without-a-snapshot",level:2}],m={toc:h};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,o.kt)("p",null,"etcd backup and recovery for ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes clusters")," can be easily performed. Snapshots of the etcd database are taken and saved either locally onto the etcd nodes or to a S3 compatible target. The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster."),(0,o.kt)("p",null,"Rancher recommends enabling the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#configuring-recurring-snapshots"},"ability to set up recurring snapshots of etcd"),", but ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#one-time-snapshots"},"one-time snapshots")," can easily be taken as well. Rancher allows restore from ",(0,o.kt)("a",{parentName:"p",href:"#restoring-a-cluster-from-a-snapshot"},"saved snapshots")," or if you don't have any snapshots, you can still ",(0,o.kt)("a",{parentName:"p",href:"#recovering-etcd-without-a-snapshot"},"restore etcd"),"."),(0,o.kt)("p",null,"As of Rancher v2.4.0, clusters can also be restored to a prior Kubernetes version and cluster configuration."),(0,o.kt)("p",null,"This section covers the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#viewing-available-snapshots"},"Viewing Available Snapshots")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#restoring-a-cluster-from-a-snapshot"},"Restoring a Cluster from a Snapshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#recovering-etcd-without-a-snapshot"},"Recovering etcd without a Snapshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enabling-snapshot-features-for-clusters-created-before-rancher-v2-2-0"},"Enabling snapshot features for clusters created before Rancher v2.2.0"))),(0,o.kt)("h2",{id:"viewing-available-snapshots"},"Viewing Available Snapshots"),(0,o.kt)("p",null,"The list of all available snapshots for the cluster is available."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to view snapshots.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Tools > Snapshots")," from the navigation bar to view the list of saved snapshots. These snapshots include a timestamp of when they were created."))),(0,o.kt)("h2",{id:"restoring-a-cluster-from-a-snapshot"},"Restoring a Cluster from a Snapshot"),(0,o.kt)("p",null,"If your Kubernetes cluster is broken, you can restore the cluster from a snapshot."),(0,o.kt)("p",null,"Restores changed in Rancher v2.4.0."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher v2.4.0+",mdxType:"TabItem"},(0,o.kt)("p",null,"Snapshots are composed of the cluster data in etcd, the Kubernetes version, and the cluster configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml.")," These components allow you to select from the following options when restoring a cluster from a snapshot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restore just the etcd contents:")," This restore is similar to restoring to snapshots in Rancher before v2.4.0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version:")," This option should be used if a Kubernetes upgrade is the reason that your cluster is failing, and you haven't made any cluster configuration changes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restore etcd, Kubernetes versions and cluster configuration:")," This option should be used if you changed both the Kubernetes version and cluster configuration when upgrading.")),(0,o.kt)("p",null,"When rolling back to a prior Kubernetes version, the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes#configuring-the-upgrade-strategy"},"upgrade strategy options")," are ignored. Worker nodes are not cordoned or drained before being reverted to the older Kubernetes version, so that an unhealthy cluster can be more quickly restored to a healthy state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," To restore snapshots from S3, the cluster needs to be configured to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#configuring-recurring-snapshots"},"take recurring snapshots on S3."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to restore from a snapshots.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Restore Snapshot"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the snapshot that you want to use for restoring your cluster from the dropdown of available snapshots.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Restoration Type")," field, choose one of the restore options described above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The cluster will go into ",(0,o.kt)("inlineCode",{parentName:"p"},"updating")," state and the process of restoring the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," nodes from the snapshot will start. The cluster is restored when it returns to an ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," state.")),(0,o.kt)(l.Z,{value:"Rancher before v2.4.0",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Make sure your etcd nodes are healthy. If you are restoring a cluster with unavailable etcd nodes, it's recommended that all etcd nodes are removed from Rancher before attempting to restore. For clusters in which Rancher used node pools to provision ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes in an infrastructure provider"),", new etcd nodes will automatically be created. For ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom clusters"),", please ensure that you add new etcd nodes to the cluster."),(0,o.kt)("li",{parentName:"ul"},"To restore snapshots from S3, the cluster needs to be configured to ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#configuring-recurring-snapshots"},"take recurring snapshots on S3.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to restore from a snapshot.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Restore Snapshot"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the snapshot that you want to use for restoring your cluster from the dropdown of available snapshots.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The cluster will go into ",(0,o.kt)("inlineCode",{parentName:"p"},"updating")," state and the process of restoring the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," nodes from the snapshot will start. The cluster is restored when it returns to an ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," state."))),(0,o.kt)("h2",{id:"recovering-etcd-without-a-snapshot"},"Recovering etcd without a Snapshot"),(0,o.kt)("p",null,"If the group of etcd nodes loses quorum, the Kubernetes cluster will report a failure because no operations, e.g. deploying workloads, can be executed in the Kubernetes cluster. The cluster should have three etcd nodes to prevent a loss of quorum. If you want to recover your set of etcd nodes, follow these instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Keep only one etcd node in the cluster by removing all other etcd nodes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the single remaining etcd node, run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike etcd\n")),(0,o.kt)("p",{parentName:"li"},"This command outputs the running command for etcd, save this command to use later.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the etcd container that you launched in the previous step and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd-old"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ docker stop etcd\n$ docker rename etcd etcd-old\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take the saved command from Step 2 and revise it:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you originally had more than 1 etcd node, then you need to change ",(0,o.kt)("inlineCode",{parentName:"li"},"--initial-cluster")," to only contain the node that remains."),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"--force-new-cluster")," to the end of the command."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the revised command.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the single nodes is up and running, Rancher recommends adding additional etcd nodes to your cluster. If you have a ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom cluster")," and you want to reuse an old node, you are required to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"clean up the nodes")," before attempting to add them back into a cluster."))),(0,o.kt)("h1",{id:"enabling-snapshot-features-for-clusters-created-before-rancher-v220"},"Enabling Snapshot Features for Clusters Created Before Rancher v2.2.0"),(0,o.kt)("p",null,"If you have any Rancher launched Kubernetes clusters that were created before v2.2.0, after upgrading Rancher, you must ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"edit the cluster")," and ",(0,o.kt)("em",{parentName:"p"},"save")," it, in order to enable the updated snapshot features. Even if you were already creating snapshots before v2.2.0, you must do this step as the older snapshots will not be available to use to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},"back up and restore etcd through the UI"),"."))}f.isMDXComponent=!0}}]);