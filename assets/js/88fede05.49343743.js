"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81131],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),k=a,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},25281:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Workload with Ingress Quick Start",weight:100},s=void 0,p={unversionedId:"getting-started/quick-start-guides/deploy-workloads/workload-ingress",id:"getting-started/quick-start-guides/deploy-workloads/workload-ingress",title:"Workload with Ingress Quick Start",description:"Prerequisite",source:"@site/docs/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",sourceDirName:"getting-started/quick-start-guides/deploy-workloads",slug:"/getting-started/quick-start-guides/deploy-workloads/workload-ingress",permalink:"/getting-started/quick-start-guides/deploy-workloads/workload-ingress",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Workload with Ingress Quick Start",weight:100},sidebar:"tutorialSidebar",previous:{title:"Deploying Workloads",permalink:"/pages-for-subheaders/deploy-rancher-workloads"},next:{title:"Workload with NodePort Quick Start",permalink:"/getting-started/quick-start-guides/deploy-workloads/nodeports"}},d={},u=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"1. Deploying a Workload",id:"1-deploying-a-workload",level:3},{value:"View Your Application",id:"view-your-application",level:3},{value:"Finished",id:"finished",level:4},{value:"What&#39;s Next?",id:"whats-next",level:4}],c={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"You have a running cluster with at least 1 node."),(0,o.kt)("h3",{id:"1-deploying-a-workload"},"1. Deploying a Workload"),(0,o.kt)("p",null,"You're ready to create your first Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"workload"),". A workload is an object that includes pods along with other files and info needed to deploy your application."),(0,o.kt)("p",null,"For this workload, you'll be deploying the application Rancher Hello-World."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Deployment"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for your workload."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Docker Image")," field, enter ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher/hello-world"),". This field is case-sensitive."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Port")," and enter ",(0,o.kt)("inlineCode",{parentName:"li"},"80")," in the ",(0,o.kt)("strong",{parentName:"li"},"Private Container Port")," field. Adding a port enables access to the application inside and outside of the cluster. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/workloads-and-pods#services"},"Services"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your workload is deployed. This process might take a few minutes to complete."),(0,o.kt)("li",{parentName:"ul"},"When your workload completes deployment, it's assigned a state of ",(0,o.kt)("strong",{parentName:"li"},"Active"),". You can view this status from the project's ",(0,o.kt)("strong",{parentName:"li"},"Workloads")," page.")),(0,o.kt)("br",null),"### 2. Expose The Application Via An Ingress",(0,o.kt)("p",null,"Now that the application is up and running, it needs to be exposed so that other services can connect."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Service Discovery > Ingresses"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When choosing ",(0,o.kt)("strong",{parentName:"p"},"Namespace"),", ensure it is the same as the one used when you created your deployment. Otherwise, your deployment will not be available when you attempt to select ",(0,o.kt)("strong",{parentName:"p"},"Target Service"),", as in Step 8 below.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name"),", such as ",(0,o.kt)("strong",{parentName:"p"},"hello"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify your ",(0,o.kt)("strong",{parentName:"p"},"Path"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Target Service")," field, drop down the list and choose the name that you set for your service.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Port")," field, drop down the list and select ",(0,o.kt)("inlineCode",{parentName:"p"},"80"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create")," at the bottom right."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The application is assigned a ",(0,o.kt)("inlineCode",{parentName:"p"},"sslip.io")," address and exposed. It may take a minute or two to populate."),(0,o.kt)("h3",{id:"view-your-application"},"View Your Application"),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Deployments")," page, find the ",(0,o.kt)("strong",{parentName:"p"},"Endpoints")," column for your deployment and click on an endpoint. The endpoints available will depend on how you configured the port you added to your deployment. For endpoints where you do not see a randomly assigned port, append the path you specified when creating the ingress to the IP address. For example, if your endpoint looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"xxx.xxx.xxx.xxx")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://xxx.xxx.xxx.xxx")," change it to ",(0,o.kt)("inlineCode",{parentName:"p"},"xxx.xxx.xxx.xxx/hello")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://xxx.xxx.xxx.xxx/hello"),"."),(0,o.kt)("p",null,"Your application will open in a separate window."),(0,o.kt)("h4",{id:"finished"},"Finished"),(0,o.kt)("p",null,"Congratulations! You have successfully deployed a workload exposed via an ingress."),(0,o.kt)("h4",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"When you're done using your sandbox, destroy the Rancher Server and your cluster. See one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/aws#destroying-the-environment"},"Amazon AWS: Destroying the Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean#destroying-the-environment"},"DigitalOcean: Destroying the Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant#destroying-the-environment"},"Vagrant: Destroying the Environment"))))}k.isMDXComponent=!0}}]);