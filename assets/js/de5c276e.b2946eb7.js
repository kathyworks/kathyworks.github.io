"use strict";(self.webpackChunkkathy_works=self.webpackChunkkathy_works||[]).push([[1106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"dapp-project-setup",title:"Dapp Project Setup",date:"2022-04-02 17:18:21 +0800",tags:["final static"]},l=void 0,i={permalink:"/dapp-project-setup",source:"@site/blog/2022-04-02-dapp-project-setup/index.md",title:"Dapp Project Setup",description:"In the previous post I went through the steps to configure my local development environment, so now would be a good time to start creating the project skeleton.",date:"2022-04-02T17:18:21.000Z",formattedDate:"April 2, 2022",tags:[{label:"final static",permalink:"/tags/final-static"}],hasTruncateMarker:!0,authors:[],frontMatter:{slug:"dapp-project-setup",title:"Dapp Project Setup",date:"2022-04-02 17:18:21 +0800",tags:["final static"]},prevItem:{title:"Implementing the Smart Contract",permalink:"/implementing-smart-contract"},nextItem:{title:"Configuring Development Environment to Build Full-Stack Dapps",permalink:"/set-up-environment-to-build-full-stack-dapp"}},s={authorsImageUrls:[]},p=[{value:"Creating a Next.js project",id:"creating-a-nextjs-project",level:2},{value:"Setting up Tailwind CSS",id:"setting-up-tailwind-css",level:2},{value:"Configuring Hardhat",id:"configuring-hardhat",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous post I went through the steps to configure my local development environment, so now would be a good time to start creating the project skeleton."),(0,r.kt)("h2",{id:"creating-a-nextjs-project"},"Creating a Next.js project"),(0,r.kt)("p",null,"As a memory refresher:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Next.js is an open-source web development framework built on top of Node.js, enabling React-based web application functionalities such as server-side rendering and generating static websites.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"React is an open-source front-end JavaScript library that is typically used to build web applications and their user interfaces rendered in the client's browser.")),(0,r.kt)("p",null,"On Terminal, I first changed into the directory where I wanted the new project to be housed. Feel free to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Development")," with your preferred directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Development\n")),(0,r.kt)("p",null,"Then I ran the following command to create an app named ",(0,r.kt)("inlineCode",{parentName:"p"},"final-static"),". All of the project files would be generated inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"final-static")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app final-static\n")),(0,r.kt)("p",null,"If you didn't already have it, you would be asked to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-next-app")," package first."),(0,r.kt)("p",null,"When the command completed, I changed into the newly created project directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd final-static\n")),(0,r.kt)("p",null,"The next step would be to install the dependencies using a package manager like ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"."),(0,r.kt)("p",null,"I tried both ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", and it appeared that ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," worked better for my particular setup. Feel free to pick whichever works better for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ethers hardhat @nomiclabs/hardhat-waffle \\\nethereum-waffle chai @nomiclabs/hardhat-ethers \\\nweb3modal @openzeppelin/contracts ipfs-http-client \\\naxios\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add ethers hardhat @nomiclabs/hardhat-waffle \\\nethereum-waffle chai @nomiclabs/hardhat-ethers \\\nweb3modal @openzeppelin/contracts ipfs-http-client \\\naxios\n")),(0,r.kt)("p",null,"You might also need to follow the prompts to troubleshoot any warnings or errors."),(0,r.kt)("h2",{id:"setting-up-tailwind-css"},"Setting up Tailwind CSS"),(0,r.kt)("p",null,"When it comes to customizing web-based user interfaces, I like the full control you get with Cascading Style Sheets (CSS), but honestly dread having to put in the sometimes counter-intuitive work just to get things to look good enough (let alone perfect)."),(0,r.kt)("p",null,"If you are in the same boat as far as CSS is concerned, then you might also find Tailwind CSS helpful."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you the building blocks you need to add styling and create good-looking designs the easy way.")),(0,r.kt)("p",null,"Here's the command I used to install the Tailwind dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add tailwindcss@latest postcss@latest autoprefixer@latest\n")),(0,r.kt)("p",null,"Then, in order to create the configuration files needed for Tailwind to work with Next.js (namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"postcss.config.js"),"), I ran:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx tailwindcss init -p\n")),(0,r.kt)("p",null,"With said configuration files generated, I was able to make some preliminary updates."),(0,r.kt)("p",null,"To add custom template content paths in ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// tailwind.config.js\nmodule.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx}",\n    "./components/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n')),(0,r.kt)("p",null,"The next thing I did was replacing the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"styles/globals.css")," with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),(0,r.kt)("h2",{id:"configuring-hardhat"},"Configuring Hardhat"),(0,r.kt)("p",null,"One distinctive characteristic of decentralized applications (dapps) is the use of blockchain technology with smart contract functionality."),(0,r.kt)("p",null,"The blockchain platform of choice here is Ethereum. To support this, I went ahead and set up Hardhat."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hardhat is a Solidity development environment to compile, deploy, test, and debug Ethereum software.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms \u2014 most notably \u2014 Ethereum.")),(0,r.kt)("p",null,"I started by initializing a new Hardhat development environment from the root of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/final-static")," project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat\n")),(0,r.kt)("p",null,"At the prompt, I selected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? What do you want to do?\n> Create a basic sample project\n")),(0,r.kt)("p",null,"When asked about the project root, I went with the default. Your directories would be different."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Hardhat project root: > /Users/kathy/Development/final-static\n")),(0,r.kt)("p",null,'After saying "yes" to adding a ',(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),", I got a possibly git-related error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Error HH16: The directory /Users/kathy/Development/final-static contains files that could conflict:\n\n  README.md\n\nEither try using a new directory, or remove the files listed above.\n")),(0,r.kt)("p",null,"And therefore I deleted ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," and ran the initialization again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm README.md\nnpx hardhat\n")),(0,r.kt)("p",null,"When the initialization completed, I quickly checked to make sure the following files and folders were successfully generated in the project root directory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hardhat.config.js"))),(0,r.kt)("p",null,"The entirety of your Hardhat setup (i.e. your config, plugins, and custom tasks) is contained in this file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/scripts/"))),(0,r.kt)("p",null,"A folder containing a script named sample-script.js that will deploy your smart contract when executed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/test/"))),(0,r.kt)("p",null,"A folder containing an example testing script."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/contracts/"))),(0,r.kt)("p",null,"A folder holding an example Solidity smart contract."),(0,r.kt)("p",null,"Next, per Nader's tutorial, I updated the configuration at ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," by replacing the auto-generated code with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// hardhat.config.js\nrequire("@nomiclabs/hardhat-waffle")\n\nmodule.exports = {\n  defaultNetwork: "hardhat",\n  networks: {\n    hardhat: {\n      chainId: 1337\n    },\n//  Unused configuration. Commented out for now.\n//  TODO: Test Mumbai network\n//  mumbai: {\n//    url: "https://rpc-mumbai.maticvigil.com",\n//    accounts: [process.env.privateKey]\n//  }\n  },\n  solidity: {\n    version: "0.8.4",\n    settings: {\n      optimizer: {\n        enabled: true,\n        runs: 200\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The above configured the local Hardhat development environment as well as the Mumbai testnet (commented out for now until I got ready for the test)."),(0,r.kt)("p",null,"They are both Polygon (formerly Matic) networks."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Polygon makes Web3 more accessible. It is a decentralized Ethereum scaling platform that enables developers to build scalable user-friendly dapps with low transaction fees.")),(0,r.kt)("p",null,"Let's break things up here for now. In the next post, I will proceed to set up smart contracts."))}u.isMDXComponent=!0}}]);