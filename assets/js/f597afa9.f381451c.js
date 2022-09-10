"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76724],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(c,".").concat(d)]||p[d]||l[d]||a;return r?i.createElement(h,o(o({ref:t},f),{},{components:r})):i.createElement(h,o({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72619:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"7. Generate and View Traffic",weight:7,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/view-traffic","/rancher/v2.0-v2.4/en/istio/legacy/setup/view-traffic","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/view-traffic","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/view-traffic/"]},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",title:"7. Generate and View Traffic",description:"This section describes how to view the traffic that is being managed by Istio.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"7. Generate and View Traffic",weight:7,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/view-traffic","/rancher/v2.0-v2.4/en/istio/legacy/setup/view-traffic","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/view-traffic","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/view-traffic/"]},sidebar:"tutorialSidebar",previous:{title:"6. Set up Istio's Components for Traffic Management",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},next:{title:"CIS Scan Guides",permalink:"/v2.0-v2.4/pages-for-subheaders/cis-scan-guides"}},f={},l=[],p={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to view the traffic that is being managed by Istio."),(0,a.kt)("h1",{id:"the-kiali-traffic-graph"},"The Kiali Traffic Graph"),(0,a.kt)("p",null,"Rancher integrates a Kiali graph into the Rancher UI. The Kiali graph provides a powerful way to visualize the topology of your Istio service mesh. It shows you which services communicate with each other."),(0,a.kt)("p",null,"To see the traffic graph,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the project view in Rancher, click ",(0,a.kt)("strong",{parentName:"li"},"Resources > Istio.")),(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"Traffic Graph")," tab. This tab has the Kiali network visualization integrated into the UI.")),(0,a.kt)("p",null,"If you refresh the URL to the BookInfo app several times, you should be able to see green arrows on the Kiali graph showing traffic to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"v3")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," service. The control panel on the right side of the graph lets you configure details including how many minutes of the most recent traffic should be shown on the graph."),(0,a.kt)("p",null,"For additional tools and visualizations, you can go to each UI for Kiali, Jaeger, Grafana, and Prometheus by clicking their icons in the top right corner of the page."),(0,a.kt)("h1",{id:"viewing-traffic-metrics"},"Viewing Traffic Metrics"),(0,a.kt)("p",null,"Istio\u2019s monitoring features provide visibility into the performance of all your services."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the project view in Rancher, click ",(0,a.kt)("strong",{parentName:"li"},"Resources > Istio.")),(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"Traffic Metrics")," tab. After traffic is generated in your cluster, you should be able to see metrics for ",(0,a.kt)("strong",{parentName:"li"},"Success Rate, Request Volume, 4xx Response Count, Project 5xx Response Count")," and ",(0,a.kt)("strong",{parentName:"li"},"Request Duration."))))}d.isMDXComponent=!0}}]);