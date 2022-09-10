"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33084],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=g(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),g=n(12466),u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,h=e.defaultValue,d=e.values,m=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),y=N.tabGroupChoices,C=N.setTabGroupChoices,x=(0,a.useState)(w),T=x[0],L=x[1],O=[],E=(0,g.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=y[m];null!=R&&R!==T&&v.some((function(e){return e.value===R}))&&L(R)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==T&&(E(t),L(r),null!=m&&C(m,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=O.indexOf(e.currentTarget)+1;n=null!=(r=O[a])?r:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;n=null!=(o=O[i])?o:O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},23867:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return g},metadata:function(){return c},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),s=["components"],g={title:"Rancher Integration with Logging Services",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:15,aliases:["/rancher/v2.5/en/dashboard/logging","/rancher/v2.5/en/logging/v2.5","/rancher/v2.5/en/cluster-admin/tools/logging","/rancher/v2.x/en/logging/","/rancher/v2.x/en/logging/v2.5/"]},u=void 0,c={unversionedId:"pages-for-subheaders/logging",id:"version-2.5/pages-for-subheaders/logging",title:"Rancher Integration with Logging Services",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/logging.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/logging",permalink:"/v2.5/pages-for-subheaders/logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/logging.md",tags:[],version:"2.5",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Rancher Integration with Logging Services",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:15,aliases:["/rancher/v2.5/en/dashboard/logging","/rancher/v2.5/en/logging/v2.5","/rancher/v2.5/en/cluster-admin/tools/logging","/rancher/v2.x/en/logging/","/rancher/v2.x/en/logging/v2.5/"]},sidebar:"tutorialSidebar",previous:{title:"Longhorn - Cloud native distributed block storage for Kubernetes",permalink:"/v2.5/explanations/integrations-in-rancher/longhorn"},next:{title:"Architecture",permalink:"/v2.5/explanations/integrations-in-rancher/logging/logging-architecture"}},p={},h=[{value:"Flows and ClusterFlows",id:"flows-and-clusterflows",level:3},{value:"Outputs and ClusterOutputs",id:"outputs-and-clusteroutputs",level:3},{value:"Windows Support",id:"windows-support",level:3},{value:"Working with a Custom Docker Root Directory",id:"working-with-a-custom-docker-root-directory",level:3},{value:"Working with Taints and Tolerations",id:"working-with-taints-and-tolerations",level:3},{value:"Logging V2 with SELinux",id:"logging-v2-with-selinux",level:3},{value:"Additional Logging Sources",id:"additional-logging-sources",level:3},{value:"The <code>cattle-logging</code> Namespace Being Recreated",id:"the-cattle-logging-namespace-being-recreated",level:3}],d={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzai Cloud Logging operator")," now powers Rancher's logging solution in place of the former, in-house solution."),(0,o.kt)("p",null,"For an overview of the changes in v2.5, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/logging-architecture#changes-in-rancher-v25"},"this section.")," For information about migrating from Logging V1, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"},"this page.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enabling-logging"},"Enabling Logging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#uninstall-logging"},"Uninstall Logging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#architecture"},"Architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#role-based-access-control"},"Role-based Access Control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuring-the-logging-custom-resources"},"Configuring the Logging Custom Resources"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#flows-and-clusterflows"},"Flows and ClusterFlows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#outputs-and-clusteroutputs"},"Outputs and ClusterOutputs")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuring-the-logging-helm-chart"},"Configuring the Logging Helm Chart"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#windows-support"},"Windows Support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#working-with-taints-and-tolerations"},"Working with Taints and Tolerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#logging-v2-with-selinux"},"Logging V2 with SELinux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#additional-logging-sources"},"Additional Logging Sources")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting"))),(0,o.kt)("h1",{id:"enabling-logging"},"Enabling Logging"),(0,o.kt)("p",null,"You can enable the logging for a Rancher managed cluster by going to the Apps page and installing the logging app."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install logging and click ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apps"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-logging")," app."),(0,o.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The logging app is deployed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace."),(0,o.kt)("h1",{id:"uninstall-logging"},"Uninstall Logging"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer"),", click ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")," namespace and check the boxes for ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-logging")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-logging-crd"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),"."),(0,o.kt)("li",{parentName:"ol"},"Confirm ",(0,o.kt)("strong",{parentName:"li"},"Delete"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result")," ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-logging")," is uninstalled."),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"For more information about how the logging application works, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/logging-architecture"},"this section.")),(0,o.kt)("h1",{id:"role-based-access-control"},"Role-based Access Control"),(0,o.kt)("p",null,"Rancher logging has two roles, ",(0,o.kt)("inlineCode",{parentName:"p"},"logging-admin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"logging-view"),". For more information on how and when to use these roles, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/rbac-for-logging"},"this page.")),(0,o.kt)("h1",{id:"configuring-logging-custom-resources"},"Configuring Logging Custom Resources"),(0,o.kt)("p",null,"To manage ",(0,o.kt)("inlineCode",{parentName:"p"},"Flows,")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Outputs"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", go to the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer")," in the Rancher UI. In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer > Logging"),"."),(0,o.kt)("h3",{id:"flows-and-clusterflows"},"Flows and ClusterFlows"),(0,o.kt)("p",null,"For help with configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},"this page.")),(0,o.kt)("h3",{id:"outputs-and-clusteroutputs"},"Outputs and ClusterOutputs"),(0,o.kt)("p",null,"For help with configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"},"this page.")),(0,o.kt)("h1",{id:"configuring-the-logging-helm-chart"},"Configuring the Logging Helm Chart"),(0,o.kt)("p",null,"For a list of options that can be configured when the logging application is installed or upgraded, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options"},"this page.")),(0,o.kt)("h3",{id:"windows-support"},"Windows Support"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,o.kt)("p",null,"As of Rancher v2.5.8, logging support for Windows clusters has been added and logs can be collected from Windows nodes."),(0,o.kt)("p",null,"For details on how to enable or disable Windows node logging, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enabledisable-windows-node-logging"},"this section."))),(0,o.kt)(l.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,o.kt)("p",null,"Clusters with Windows workers support exporting logs from Linux nodes, but Windows node logs are currently unable to be exported.\nOnly Linux node logs are able to be exported."),(0,o.kt)("p",null,"To allow the logging pods to be scheduled on Linux nodes, tolerations must be added to the pods. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"Working with Taints and Tolerations")," section for details and an example."))),(0,o.kt)("h3",{id:"working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory"),(0,o.kt)("p",null,"For details on using a custom Docker root directory, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#working-with-a-custom-docker-root-directory"},"this section.")),(0,o.kt)("h3",{id:"working-with-taints-and-tolerations"},"Working with Taints and Tolerations"),(0,o.kt)("p",null,"For information on how to use taints and tolerations with the logging application, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"this page.")),(0,o.kt)("h3",{id:"logging-v2-with-selinux"},"Logging V2 with SELinux"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,o.kt)("p",null,"For information on enabling the logging application for SELinux-enabled nodes, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enabling-the-logging-application-to-work-with-selinux"},"this section.")),(0,o.kt)("h3",{id:"additional-logging-sources"},"Additional Logging Sources"),(0,o.kt)("p",null,"By default, Rancher collects logs for control plane components and node components for all cluster types. In some cases additional logs can be collected. For details, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#additional-logging-sources"},"this section.")),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"the-cattle-logging-namespace-being-recreated"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"cattle-logging")," Namespace Being Recreated"),(0,o.kt)("p",null,"If your cluster previously deployed logging from the Cluster Manager UI, you may encounter an issue where its ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace is continually being recreated."),(0,o.kt)("p",null,"The solution is to delete all ",(0,o.kt)("inlineCode",{parentName:"p"},"clusterloggings.management.cattle.io")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"projectloggings.management.cattle.io")," custom resources from the cluster specific namespace in the management cluster.\nThe existence of these custom resources causes Rancher to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace in the downstream cluster if it does not exist."),(0,o.kt)("p",null,"The cluster namespace matches the cluster ID, so we need to find the cluster ID for each cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your web browser, navigate to your cluster(s) in either the Cluster Manager UI or the Cluster Explorer UI."),(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion from one of the URLs below. The ",(0,o.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion is the cluster namespace name.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Cluster Management UI\nhttps://<your-url>/c/<cluster-id>/\n\n# Cluster Explorer UI (Dashboard)\nhttps://<your-url>/dashboard/c/<cluster-id>/\n")),(0,o.kt)("p",null,"Now that we have the ",(0,o.kt)("inlineCode",{parentName:"p"},"<cluster-id>")," namespace, we can delete the CRs that cause ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-logging")," to be continually recreated.\n",(0,o.kt)("em",{parentName:"p"},"Warning:")," ensure that logging, the version installed from the Cluster Manager UI, is not currently in use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete clusterloggings.management.cattle.io -n <cluster-id>\nkubectl delete projectloggings.management.cattle.io -n <cluster-id>\n")))}m.isMDXComponent=!0}}]);