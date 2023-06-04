"use strict";(self.webpackChunkkathy_works=self.webpackChunkkathy_works||[]).push([[5496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"set-up-environment-to-build-full-stack-dapp",title:"Configuring Development Environment to Build Full-Stack Dapps",date:"2022-03-30 17:18:21 +0800",tags:["final static"]},i=void 0,o={permalink:"/set-up-environment-to-build-full-stack-dapp",source:"@site/blog/2022-03-30-set-up-environment-to-build-full-stack-dapp/index.md",title:"Configuring Development Environment to Build Full-Stack Dapps",description:"One nice thing about building full-stack applications from scratch is the flexibility. You are not limited to any one fixed set of tools, and can therefore go the pragmatic route of selecting:",date:"2022-03-30T17:18:21.000Z",formattedDate:"March 30, 2022",tags:[{label:"final static",permalink:"/tags/final-static"}],hasTruncateMarker:!0,authors:[],frontMatter:{slug:"set-up-environment-to-build-full-stack-dapp",title:"Configuring Development Environment to Build Full-Stack Dapps",date:"2022-03-30 17:18:21 +0800",tags:["final static"]},prevItem:{title:"Dapp Project Setup",permalink:"/dapp-project-setup"},nextItem:{title:"How to Hook Up Custom Domain Emails to Free Gmail Account",permalink:"/set-up-custom-domain-emails-free"}},s={authorsImageUrls:[]},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"The Stack:",id:"the-stack",level:3},{value:"Operating System:",id:"operating-system",level:3},{value:"Upgrading Node.js",id:"upgrading-nodejs",level:2},{value:"Installing MetaMask Extension for Chrome",id:"installing-metamask-extension-for-chrome",level:2},{value:"What is MetaMask",id:"what-is-metamask",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One nice thing about building full-stack applications from scratch is the flexibility. You are not limited to any one fixed set of tools, and can therefore go the pragmatic route of selecting:"),(0,r.kt)("p",null,"a. What suits the job best"),(0,r.kt)("p",null,"b. What you are most familiar with"),(0,r.kt)("p",null,"c. A mix of the above  "),(0,r.kt)("p",null,"That said, because I am building my first-ever decentralized application (dapp), it would probably make more sense to reference what experienced dapp developers have already done rather than completely reinventing the wheels. With that in mind, I've decided to follow Nader Dabit's ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb"},"tutorial")," to build out the skeletal structure, making minor modifications as necessary."),(0,r.kt)("p",null,"According to Nader, this is the list of tools I would need:"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js version ",(0,r.kt)("inlineCode",{parentName:"li"},"16.14.0")," or greater"),(0,r.kt)("li",{parentName:"ul"},"MetaMask digital wallet installed as a browser extension")),(0,r.kt)("h3",{id:"the-stack"},"The Stack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web application framework - Next.js"),(0,r.kt)("li",{parentName:"ul"},"Solidity development environment - Hardhat"),(0,r.kt)("li",{parentName:"ul"},"File storage - IPFS"),(0,r.kt)("li",{parentName:"ul"},"Ethereum web client library - Ethers.js")),(0,r.kt)("p",null,"And just to avoid ambiguity, I should also list the below."),(0,r.kt)("h3",{id:"operating-system"},"Operating System:"),(0,r.kt)("p",null,"macOS (This is not a requirement at all. It just happens to be what I primarily use as a hybrid app developer.)"),(0,r.kt)("p",null,"Now, time to jump right in!"),(0,r.kt)("h2",{id:"upgrading-nodejs"},"Upgrading Node.js"),(0,r.kt)("p",null,"A quick version check on Terminal showed that I needed a newer Node installation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nv12.13.0\n")),(0,r.kt)("p",null,"Since I already had Homebrew installed, at first I figured I would just upgrade Node via Homebrew."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew doctor\nbrew cleanup\nbrew upgrade node\nbrew link --overwrite node\nsudo chown -R $(whoami) /usr/local\nbrew postinstall node\n")),(0,r.kt)("p",null,"But then as I was troubleshooting some errors, I came across several articles which pointed out that nvm might be a more suitable choice for my project. For example, this ",(0,r.kt)("a",{parentName:"p",href:"https://heynode.com/tutorial/install-nodejs-locally-nvm/"},"article")," said:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using nvm (Node.js Version Manager) makes it easier to install and manage multiple versions of Node.js on a single local environment. Even if you only need a single version of Node.js right now, we still recommend using nvm because it allows you to switch between different versions of Node (depending on the requirements of your project) with minimal hassle.")),(0,r.kt)("p",null,"So I went ahead and installed nvm locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew uninstall node\nbrew install nvm\n")),(0,r.kt)("p",null,"Terminal had to be restarted afterwards."),(0,r.kt)("p",null,"Then I used the newly installed nvm to install Node.js once again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install node\n")),(0,r.kt)("h2",{id:"installing-metamask-extension-for-chrome"},"Installing MetaMask Extension for Chrome"),(0,r.kt)("h3",{id:"what-is-metamask"},"What is MetaMask"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications (dapps).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:n(4383).Z,width:"1280",height:"774"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:n(5103).Z,width:"1280",height:"774"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:n(4309).Z,width:"1280",height:"645"})),(0,r.kt)("p",null,"In the next post, I will proceed to create a new application with Next.js."))}d.isMDXComponent=!0},4383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/final-static_dev-environment_01-46d047a36642262f5ebd3600975c4f10.png"},5103:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/final-static_dev-environment_02-db2a9425b6325900a4528c96032303b5.png"},4309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/final-static_dev-environment_03-1bbd21e981aeec2a2bbaa620d93ce5ef.png"}}]);