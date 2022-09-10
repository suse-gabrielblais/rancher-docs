"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81147],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99551:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Custom Roles",weight:1128},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",title:"Custom Roles",description:"Within Rancher, roles determine what actions a user can make within a cluster or project.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Custom Roles",weight:1128},sidebar:"tutorialSidebar",previous:{title:"Cluster and Project Roles",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},next:{title:"Locked Roles",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"}},u={},p=[],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, ",(0,o.kt)("em",{parentName:"p"},"roles")," determine what actions a user can make within a cluster or project."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("em",{parentName:"p"},"roles")," are different from ",(0,o.kt)("em",{parentName:"p"},"permissions"),", which determine what clusters and projects you can access."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is possible for a custom role to enable privilege escalation. For details, see ",(0,o.kt)("a",{parentName:"p",href:"#privilege-escalation"},"this section.")))),(0,o.kt)("p",null,"This section covers the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-custom-role"},"Creating a custom role")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-custom-role-that-inherits-from-another-role"},"Creating a custom role that inherits from another role")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#deleting-a-custom-role"},"Deleting a custom role")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#assigning-a-custom-role-to-a-group"},"Assigning a custom role to a group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#privilege-escalation"},"Privilege escalation"))),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To complete the tasks on this page, one of the following permissions are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Roles")," role assigned.")),(0,o.kt)("h1",{id:"creating-a-custom-role"},"Creating A Custom Role"),(0,o.kt)("p",null,"While Rancher comes out-of-the-box with a set of default user roles, you can also create default custom roles to provide users with very specific permissions within Rancher."),(0,o.kt)("p",null,"The steps to add custom roles differ depending on the version of Rancher."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Roles"),"."),(0,o.kt)("li",{parentName:"ol"},"Select a tab to determine the scope of the role you're adding. The tabs are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Global:")," The role is valid for allowing members to manage global scoped resources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cluster:")," The role is valid for assignment when adding/managing members to clusters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project/Namespaces:")," The role is valid for assignment when adding/managing members to projects or namespaces.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create Global Role,")," ",(0,o.kt)("strong",{parentName:"p"},"Create Cluster Role")," or ",(0,o.kt)("strong",{parentName:"p"},"Create Project/Namespaces Role,")," depending on the scope.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the role.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optional: Choose the ",(0,o.kt)("strong",{parentName:"p"},"Cluster/Project Creator Default")," option to assign this role to a user when they create a new cluster or project. Using this feature, you can expand or restrict the default roles for cluster/project creators."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Out of the box, the Cluster Creator Default and the Project Creator Default roles are ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster Owner")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Owner")," respectively."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("strong",{parentName:"p"},"Grant Resources")," options to assign individual ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API endpoints")," to the role."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,o.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,o.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field.")),(0,o.kt)("p",{parentName:"li"},"You can also choose the individual cURL methods (",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Get"),", etc.) available for use with each endpoint you assign.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("strong",{parentName:"p"},"Inherit from")," options to assign individual Rancher roles to your custom roles. Note: When a custom role inherits from a parent role, the parent role cannot be deleted until the child role is deleted.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("h1",{id:"creating-a-custom-role-that-inherits-from-another-role"},"Creating a Custom Role that Inherits from Another Role"),(0,o.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom role in which all of the rules from another role, such as the administrator role, are copied into a new role. This allows you to only configure the variations between the existing role and the new role."),(0,o.kt)("p",null,"The custom role can then be assigned to a user or group so that the role takes effect the first time the user or users sign into Rancher."),(0,o.kt)("p",null,"To create a custom role based on an existing role,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Roles"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Cluster")," or ",(0,o.kt)("strong",{parentName:"p"},"Project/Namespaces")," tab. Click ",(0,o.kt)("strong",{parentName:"p"},"Create Cluster Role")," or ",(0,o.kt)("strong",{parentName:"p"},"Create Project/Namespaces Role")," depending on the scope. Note: Only cluster roles and project/namespace roles can inherit from another role.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Inherit From")," tab, select the role(s) that the custom role will inherit permissions from.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Grant Resources")," tab, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,o.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optional: Assign the role as default.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("h1",{id:"deleting-a-custom-role"},"Deleting a Custom Role"),(0,o.kt)("p",null,"When deleting a custom role, all global role bindings with this custom role are deleted."),(0,o.kt)("p",null,"If a user is only assigned one custom role, and the role is deleted, the user would lose access to Rancher. For the user to regain access, an administrator would need to edit the user and apply new global permissions."),(0,o.kt)("p",null,"Custom roles can be deleted, but built-in roles cannot be deleted."),(0,o.kt)("p",null,"To delete a custom role,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Roles"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the custom global role that should be deleted and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee (\u2026) > Delete"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),".")),(0,o.kt)("h1",{id:"assigning-a-custom-role-to-a-group"},"Assigning a Custom Role to a Group"),(0,o.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom role. When the role is assigned to a group, the users in the group have the appropriate level of access the first time they sign into Rancher."),(0,o.kt)("p",null,"When a user in the group logs in, they get the built-in Standard User global role by default. They will also get the permissions assigned to their groups."),(0,o.kt)("p",null,"If a user is removed from the external authentication provider group, they would lose their permissions from the custom role that was assigned to the group. They would continue to have their individual Standard User role."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can only assign a global role to a group if:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"You have set up an ",(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/about-authentication#external-vs-local-authentication"},"external authentication provider")),(0,o.kt)("li",{parentName:"ul"},"The external authentication provider supports ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},"user groups")),(0,o.kt)("li",{parentName:"ul"},"You have already set up at least one user group with the authentication provider")))),(0,o.kt)("p",null,"To assign a custom role to a group, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Groups"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the existing group that will be assigned the custom role and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"If you have created roles, they will show in the ",(0,o.kt)("strong",{parentName:"li"},"Custom")," section. Choose any custom role that will be assigned to the group."),(0,o.kt)("li",{parentName:"ol"},"Optional: In the ",(0,o.kt)("strong",{parentName:"li"},"Global Permissions")," or ",(0,o.kt)("strong",{parentName:"li"},"Built-in")," sections, select any additional permissions that the group should have."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save."),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The custom role will take effect when the users in the group log into Rancher."),(0,o.kt)("h1",{id:"privilege-escalation"},"Privilege Escalation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Configure Catalogs")," custom permission is powerful and should be used with caution. When an admin assigns the  ",(0,o.kt)("inlineCode",{parentName:"p"},"Configure Catalogs")," permission to a standard user, it could result in privilege escalation in which the user could give themselves admin access to Rancher provisioned clusters. Anyone with this permission should be considered equivalent to an admin."))}d.isMDXComponent=!0}}]);