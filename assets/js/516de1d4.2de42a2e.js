"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4180],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=i,g=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7127:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={title:"Configuring Google OAuth",weight:15,aliases:["/rancher/v2.x/en/admin-settings/authentication/google/"]},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth",title:"Configuring Google OAuth",description:"If your organization uses G Suite for user authentication, you can configure Rancher to allow your users to log in using their G Suite credentials.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth.md",tags:[],version:"2.5",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Configuring Google OAuth",weight:15,aliases:["/rancher/v2.x/en/admin-settings/authentication/google/"]},sidebar:"tutorialSidebar",previous:{title:"Local Authentication",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users"},next:{title:"Configuring Active Directory (AD)",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory"}},u={},h=[{value:"1. Adding Rancher as an Authorized Domain",id:"1-adding-rancher-as-an-authorized-domain",level:3},{value:"2. Creating OAuth2 Credentials for the Rancher Server",id:"2-creating-oauth2-credentials-for-the-rancher-server",level:3},{value:"3. Creating Service Account Credentials",id:"3-creating-service-account-credentials",level:3},{value:"4. Register the Service Account Key as an OAuth Client",id:"4-register-the-service-account-key-as-an-oauth-client",level:3}],d={toc:h};function p(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your organization uses G Suite for user authentication, you can configure Rancher to allow your users to log in using their G Suite credentials."),(0,o.kt)("p",null,"Only admins of the G Suite domain have access to the Admin SDK. Therefore, only G Suite admins can configure Google OAuth for Rancher."),(0,o.kt)("p",null,"Within Rancher, only administrators or users with the ",(0,o.kt)("strong",{parentName:"p"},"Manage Authentication")," ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"global role")," can configure authentication."),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must have a ",(0,o.kt)("a",{parentName:"li",href:"https://admin.google.com"},"G Suite admin account")," configured."),(0,o.kt)("li",{parentName:"ul"},"G Suite requires a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/guava/wiki/InternetDomainNameExplained#public-suffixes-and-private-domains"},"top private domain FQDN")," as an authorized domain. One way to get an FQDN is by creating an A-record in Route53 for your Rancher server. You do not need to update your Rancher Server URL setting with that record, because there could be clusters using that URL."),(0,o.kt)("li",{parentName:"ul"},"You must have the Admin SDK API enabled for your G Suite domain. You can enable it using the steps on ",(0,o.kt)("a",{parentName:"li",href:"https://support.google.com/a/answer/60757?hl=en"},"this page."))),(0,o.kt)("p",null,"After the Admin SDK API is enabled, your G Suite domain's API screen should look like this:\n",(0,o.kt)("img",{alt:"Enable Admin APIs",src:a(76815).Z,width:"2398",height:"1286"})),(0,o.kt)("h1",{id:"setting-up-g-suite-for-oauth-with-rancher"},"Setting up G Suite for OAuth with Rancher"),(0,o.kt)("p",null,"Before you can set up Google OAuth in Rancher, you need to log in to your G Suite account and do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-adding-rancher-as-an-authorized-domain"},"Add Rancher as an authorized domain in G Suite")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-creating-oauth2-credentials-for-the-rancher-server"},"Generate OAuth2 credentials for the Rancher server")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-creating-service-account-credentials"},"Create service account credentials for the Rancher server")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4-register-the-service-account-key-as-an-oauth-client"},"Register the service account key as an OAuth Client"))),(0,o.kt)("h3",{id:"1-adding-rancher-as-an-authorized-domain"},"1. Adding Rancher as an Authorized Domain"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"here")," to go to credentials page of your Google domain."),(0,o.kt)("li",{parentName:"ol"},"Select your project and click ",(0,o.kt)("strong",{parentName:"li"},"OAuth consent screen."),(0,o.kt)("img",{alt:"OAuth Consent Screen",src:a(64137).Z,width:"1082",height:"712"})),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Authorized Domains")," and enter the top private domain of your Rancher server URL in the list. The top private domain is the rightmost superdomain. So for example, ",(0,o.kt)("a",{parentName:"li",href:"http://www.foo.co.uk"},"www.foo.co.uk")," a top private domain of foo.co.uk. For more information on top-level domains, refer to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/guava/wiki/InternetDomainNameExplained#public-suffixes-and-private-domains"},"this article.")),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Scopes for Google APIs")," and make sure ",(0,o.kt)("strong",{parentName:"li"},"email,")," ",(0,o.kt)("strong",{parentName:"li"},"profile")," and ",(0,o.kt)("strong",{parentName:"li"},"openid")," are enabled.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher has been added as an authorized domain for the Admin SDK API."),(0,o.kt)("h3",{id:"2-creating-oauth2-credentials-for-the-rancher-server"},"2. Creating OAuth2 Credentials for the Rancher Server"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the Google API console, select your project, and go to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"credentials page."),(0,o.kt)("img",{alt:"Credentials",src:a(70922).Z,width:"1004",height:"418"})),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Create Credentials")," dropdown, select ",(0,o.kt)("strong",{parentName:"li"},"OAuth client ID.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Web application.")),(0,o.kt)("li",{parentName:"ol"},"Provide a name."),(0,o.kt)("li",{parentName:"ol"},"Fill out the ",(0,o.kt)("strong",{parentName:"li"},"Authorized JavaScript origins")," and ",(0,o.kt)("strong",{parentName:"li"},"Authorized redirect URIs.")," Note: The Rancher UI page for setting up Google OAuth (available from the Global view under ",(0,o.kt)("strong",{parentName:"li"},"Security > Authentication > Google"),") provides you the exact links to enter for this step.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Authorized JavaScript origins,")," enter your Rancher server URL."),(0,o.kt)("li",{parentName:"ul"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Authorized redirect URIs,")," enter your Rancher server URL appended with the path ",(0,o.kt)("inlineCode",{parentName:"li"},"verify-auth"),". For example, if your URI is ",(0,o.kt)("inlineCode",{parentName:"li"},"https://rancherServer"),", you will enter ",(0,o.kt)("inlineCode",{parentName:"li"},"https://rancherServer/verify-auth"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Create.")),(0,o.kt)("li",{parentName:"ol"},"After the credential is created, you will see a screen with a list of your credentials. Choose the credential you just created, and in that row on rightmost side, click ",(0,o.kt)("strong",{parentName:"li"},"Download JSON.")," Save the file so that you can provide these credentials to Rancher.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your OAuth credentials have been successfully created."),(0,o.kt)("h3",{id:"3-creating-service-account-credentials"},"3. Creating Service Account Credentials"),(0,o.kt)("p",null,"Since the Google Admin SDK is available only to admins, regular users cannot use it to retrieve profiles of other users or their groups. Regular users cannot even retrieve their own groups."),(0,o.kt)("p",null,"Since Rancher provides group-based membership access, we require the users to be able to get their own groups, and look up other users and groups when needed."),(0,o.kt)("p",null,"As a workaround to get this capability, G Suite recommends creating a service account and delegating authority of your G Suite domain to that service account."),(0,o.kt)("p",null,"This section describes how to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a service account"),(0,o.kt)("li",{parentName:"ul"},"Create a key for the service account and download the credentials as JSON")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("a",{parentName:"li",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"here")," and select your project for which you generated OAuth credentials."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Create Service Account.")),(0,o.kt)("li",{parentName:"ol"},"Enter a name and click ",(0,o.kt)("strong",{parentName:"li"},"Create."),(0,o.kt)("img",{alt:"Service account creation Step 1",src:a(96013).Z,width:"1470",height:"990"})),(0,o.kt)("li",{parentName:"ol"},"Don't provide any roles on the ",(0,o.kt)("strong",{parentName:"li"},"Service account permissions")," page and click ",(0,o.kt)("strong",{parentName:"li"},"Continue"),(0,o.kt)("img",{alt:"Service account creation Step 2",src:a(92901).Z,width:"1560",height:"888"})),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Create Key")," and select the JSON option. Download the JSON file and save it so that you can provide it as the service account credentials to Rancher.\n",(0,o.kt)("img",{alt:"Service account creation Step 3",src:a(58129).Z,width:"2278",height:"1328"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your service account is created."),(0,o.kt)("h3",{id:"4-register-the-service-account-key-as-an-oauth-client"},"4. Register the Service Account Key as an OAuth Client"),(0,o.kt)("p",null,"You will need to grant some permissions to the service account you created in the last step. Rancher requires you to grant only read-only permissions for users and groups."),(0,o.kt)("p",null,"Using the Unique ID of the service account key, register it as an Oauth Client using the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the Unique ID of the key you just created. If it's not displayed in the list of keys right next to the one you created, you will have to enable it. To enable it, click ",(0,o.kt)("strong",{parentName:"p"},"Unique ID")," and click ",(0,o.kt)("strong",{parentName:"p"},"OK.")," This will add a ",(0,o.kt)("strong",{parentName:"p"},"Unique ID")," column to the list of service account keys. Save the one listed for the service account you created. NOTE: This is a numeric key, not to be confused with the alphanumeric field ",(0,o.kt)("strong",{parentName:"p"},"Key ID.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Service account Unique ID",src:a(62726).Z,width:"500",height:"732"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://admin.google.com/AdminHome?chromeless=1#OGX:ManageOauthClients"},(0,o.kt)("strong",{parentName:"a"},"Manage OAuth Client Access")," page."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the Unique ID obtained in the previous step in the ",(0,o.kt)("strong",{parentName:"p"},"Client Name")," field.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"One or More API Scopes")," field, add the following scopes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"openid,profile,email,https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Authorize.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The service account is registered as an OAuth client in your G Suite account."),(0,o.kt)("h1",{id:"configuring-google-oauth-in-rancher"},"Configuring Google OAuth in Rancher"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign into Rancher using a local user assigned the ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," role. This user is also called the local principal."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, click ",(0,o.kt)("strong",{parentName:"li"},"Security > Authentication")," from the main menu."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Google.")," The instructions in the UI cover the steps to set up authentication with Google OAuth.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Admin Email: Provide the email of an administrator account from your GSuite setup. In order to perform user and group lookups, google apis require an administrator's email in conjunction with the service account key."),(0,o.kt)("li",{parentName:"ol"},"Domain: Provide the domain on which you have configured GSuite. Provide the exact domain and not any aliases."),(0,o.kt)("li",{parentName:"ol"},"Nested Group Membership: Check this box to enable nested group memberships. Rancher admins can disable this at any time after configuring auth.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step One")," is about adding Rancher as an authorized domain, which we already covered in ",(0,o.kt)("a",{parentName:"li",href:"#1-adding-rancher-as-an-authorized-domain"},"this section.")),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"Step Two,")," provide the OAuth credentials JSON that you downloaded after completing ",(0,o.kt)("a",{parentName:"li",href:"#2-creating-oauth2-credentials-for-the-rancher-server"},"this section.")," You can upload the file or paste the contents into the ",(0,o.kt)("strong",{parentName:"li"},"OAuth Credentials")," field."),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"Step Three,")," provide the service account credentials JSON that downloaded at the end of ",(0,o.kt)("a",{parentName:"li",href:"#3-creating-service-account-credentials"},"this section.")," The credentials will only work if you successfully ",(0,o.kt)("a",{parentName:"li",href:"#4-register-the-service-account-key-as-an-oauth-client"},"registered the service account key")," as an OAuth client in your G Suite account."))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Authenticate with Google"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Google authentication is successfully configured."))}p.isMDXComponent=!0},70922:function(e,t,a){t.Z=a.p+"assets/images/Google-Credentials-tab-c55f5c0e773946934414505d230366df.png"},76815:function(e,t,a){t.Z=a.p+"assets/images/Google-Enable-APIs-Screen-b50535bfb53acfe043e5e24347bb6f8d.png"},64137:function(e,t,a){t.Z=a.p+"assets/images/Google-OAuth-consent-screen-tab-32c3418c5270f4125e762342da7d3f9a.png"},62726:function(e,t,a){t.Z=a.p+"assets/images/Google-Select-UniqueID-column-8a3aaf074a5bf58e635aa59ab2ce7189.png"},96013:function(e,t,a){t.Z=a.p+"assets/images/Google-svc-acc-step1-d5ffa189a2f7d48276489dc822af13dc.png"},92901:function(e,t,a){t.Z=a.p+"assets/images/Google-svc-acc-step2-81585fe242ee9d1f74d269931261eec7.png"},58129:function(e,t,a){t.Z=a.p+"assets/images/Google-svc-acc-step3-key-creation-ab07e4e887ee459e9cc6eb172689dffc.png"}}]);