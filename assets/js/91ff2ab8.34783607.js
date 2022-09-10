"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76902],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61658:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),c=["components"],s={title:"Adding TLS Secrets",weight:2},o=void 0,l={unversionedId:"getting-started/installation-and-upgrade/resources/add-tls-secrets",id:"getting-started/installation-and-upgrade/resources/add-tls-secrets",title:"Adding TLS Secrets",description:"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the tls-rancher-ingress secret in the cattle-system namespace with the certificate and key.",source:"@site/docs/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/add-tls-secrets",permalink:"/getting-started/installation-and-upgrade/resources/add-tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Adding TLS Secrets",weight:2},sidebar:"tutorialSidebar",previous:{title:"Helm Version Requirements",permalink:"/getting-started/installation-and-upgrade/resources/helm-version-requirements"},next:{title:"About Custom CA Root Certificates",permalink:"/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace with the certificate and key."),(0,i.kt)("p",null,"Combine the server certificate followed by any intermediate certificate(s) needed into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt"),". Copy your certificate key into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("a",{parentName:"p",href:"https://acme.sh"},"acme.sh")," provides server certificate and CA chains in ",(0,i.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," file.\nThis ",(0,i.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," should be renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt")," & certificate key file as ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," secret type to create the secrets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to replace the certificate, you can delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use."))),(0,i.kt)("h1",{id:"using-a-private-ca-signed-certificate"},"Using a Private CA Signed Certificate"),(0,i.kt)("p",null,"If you are using a private CA, Rancher requires a copy of the CA certificate which is used by the Rancher Agent to validate the connection to the server."),(0,i.kt)("p",null,"Copy the CA certificate into a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem=./cacerts.pem\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The configured ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret is retrieved when Rancher starts. On a running Rancher installation the updated CA will take effect after new Rancher pods are started."))),(0,i.kt)("h1",{id:"updating-a-private-ca-certificate"},"Updating a Private CA Certificate"),(0,i.kt)("p",null,"Follow the steps on ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},"this page")," to update the SSL certificate of the ingress in a Rancher ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"high availability Kubernetes installation")," or to switch from the default self-signed certificate to a custom certificate."))}m.isMDXComponent=!0}}]);