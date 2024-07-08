"use strict";(self.webpackChunkkathy_works=self.webpackChunkkathy_works||[]).push([[7069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"building-fullstack-mern-web-app-01",title:"Building a full-stack MERN web app: [Ch. 1] The\xa0setup",date:"2024-07-08 22:45:21 +0800",image:"./building-fullstack-mern-web-app_01_cover-photo.png"},o=void 0,i={permalink:"/building-fullstack-mern-web-app-01",source:"@site/blog/2024-07-08-building-fullstack-mern-web-app-01/index.md",title:"Building a full-stack MERN web app: [Ch. 1] The\xa0setup",description:"Getting started.",date:"2024-07-08T22:45:21.000Z",formattedDate:"July 8, 2024",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{slug:"building-fullstack-mern-web-app-01",title:"Building a full-stack MERN web app: [Ch. 1] The\xa0setup",date:"2024-07-08 22:45:21 +0800",image:"./building-fullstack-mern-web-app_01_cover-photo.png"},nextItem:{title:"$10M+ Businesses for Grabs",permalink:"/multimillion-dollar-businesses-for-grabs"}},s={image:n(6379).Z,authorsImageUrls:[]},p=[{value:"Brief Backstory",id:"brief-backstory",level:2},{value:"The Tech Stack",id:"the-tech-stack",level:2},{value:"My Setup",id:"my-setup",level:2},{value:"Tone",id:"tone",level:2},{value:"Creating a NodeJS Application",id:"creating-a-nodejs-application",level:2},{value:"Folder Structure",id:"folder-structure",level:3},{value:"package.json",id:"packagejson",level:3},{value:".gitignore",id:"gitignore",level:3},{value:"Installing Packages",id:"installing-packages",level:2},{value:"Running the Project",id:"running-the-project",level:2},{value:"Next Up",id:"next-up",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("small",null,"Getting started."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"brief-backstory"},"Brief Backstory"),(0,r.kt)("p",null,"I am beginning the process of turning my blog into a self-hosted web app, so I thought I would take this opportunity to create a step-by-step documentation / tutorial as I go."),(0,r.kt)("h2",{id:"the-tech-stack"},"The Tech Stack"),(0,r.kt)("p",null,"The MERN stack is what I'll be using in this project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MongoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Express")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NodeJS"))),(0,r.kt)("p",null,"The internet already has abundant resources that explain what a MERN stack is and what it is (or is not) capable of, so I won't go into too much detail here.\nQuite simply put, both the frontend and backend sides of the code will primarily be written in JavaScript, making this stack highly versatile for small dev teams (or even one-person bands)."),(0,r.kt)("h2",{id:"my-setup"},"My Setup"),(0,r.kt)("p",null,"The beauty of building a web app is you can easily get started in virtually any environment. But just for the sake of succinctness, I am listing what I currently use in this project for reference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"macOS"),(0,r.kt)("br",null),"(Windows or Linux would work just as well here)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visual Studio Code")),(0,r.kt)("li",{parentName:"ul"},"[Optional]"," A clicky mechanical keyboard")),(0,r.kt)("h2",{id:"tone"},"Tone"),(0,r.kt)("p",null,"Whilst this series is essentially just me documenting my own steps, I decided to type everything out as if I am instructing another developer (perhaps you?) on how to do it-just so the chapters will flow more naturally."),(0,r.kt)("p",null,"Let's dive right in."),(0,r.kt)("h2",{id:"creating-a-nodejs-application"},"Creating a NodeJS Application"),(0,r.kt)("p",null,"Let's start by building out a backend first. In our case, it will be a NodeJS app."),(0,r.kt)("p",null,"If you are reading this series, chances are you would already have NodeJS and npm installed. To check the versions you have, type this command in Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v && npm -v\n")),(0,r.kt)("p",null,"In case NodeJS has not been installed on your local machine yet, it can be downloaded from ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"https://nodejs.org"),"."),(0,r.kt)("p",null,"When you install NodeJS this way, npm will automatically get installed as well."),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("p",null,'My preferred top-level project folder structure is as follows, where "Kathy Works" is the name of my blog:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/kathy_works\n\u251c\u2500\u2500 /backend/\n\u2514\u2500\u2500 /frontend/\n")),(0,r.kt)("p",null,"Feel free to name your own project anything you want."),(0,r.kt)("p",null,"In this chapter, I'll only be working on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/backend/")," part. We will get to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/frontend/")," in future chapters."),(0,r.kt)("p",null,"To create the desired folders:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir kathy_works\ncd kathy_works\nmkdir backend\ncd backend\n")),(0,r.kt)("h3",{id:"packagejson"},"package.json"),(0,r.kt)("p",null,"In modern node development, a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file is crucial for installing node packages in the project."),(0,r.kt)("p",null,"To scaffold the ",(0,r.kt)("inlineCode",{parentName:"p"},"/backend/")," with a default ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,r.kt)("h3",{id:"gitignore"},".gitignore"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," is highly recommended if you use git for version control. As its name suggests, files and folders listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file will be ignored by the GitHub repository."),(0,r.kt)("p",null,"The dot in front of the filename means the file is a hidden one."),(0,r.kt)("h2",{id:"installing-packages"},"Installing Packages"),(0,r.kt)("p",null,"For this project, we will be installing several necessary packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Express"),(0,r.kt)("br",null),"\nThe NodeJS framework we'll use to create API endpoints, which will act as communicative bridges between our frontend and our database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mongoose"),(0,r.kt)("br",null),"\nA package for us to connect to our MongoDB database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dotnev"),(0,r.kt)("br",null),"\nIt is commonly used to store project secrets or special configurations that we do not want to go onto a live database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Nodemon"),(0,r.kt)("br",null),"\nA great development tool, which is capable of restarting our backend server as soon as we make any changes in the codebase."))),(0,r.kt)("p",null,"To install the first 3 packages, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i express mongoose dotenv\n")),(0,r.kt)("p",null,"As for ",(0,r.kt)("inlineCode",{parentName:"p"},"nodemon"),", since we won't need it in production, we will install it as a dev dependency via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-dev")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev nodemon\n")),(0,r.kt)("p",null,"Now if we open up ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),', we should see that the packages have been installed appropriately in either "dependencies" or "devDependencies".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n    "dotenv": "^16.4.5",\n    "express": "^4.19.2",\n    "mongoose": "^8.4.5"\n},\n"devDependencies": {\n    "nodemon": "^3.1.4"\n}\n')),(0,r.kt)("h2",{id:"running-the-project"},"Running the Project"),(0,r.kt)("p",null,"The default main javascript file in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),". However, the more common convention in backend node development is to name it ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js"),", so we'll create it and give it just one line (for now) in Visual Studio Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log("Hello world! I am your server.");\n')),(0,r.kt)("p",null,"Next, in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", update the ",(0,r.kt)("inlineCode",{parentName:"p"},'"main"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"scripts"')," sections accordingly to reflect our changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"main": "server.js",\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "start": "node server.js",\n    "dev": "nodemon server.js"\n},\n')),(0,r.kt)("p",null,"At this point, our folder structure should look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/kathy_works\n\u251c\u2500\u2500 /backend\n\u2502   \u251c\u2500\u2500 .gitignore\n\u2502   \u251c\u2500\u2500 /node_modules/\n\u2502   \u251c\u2500\u2500 package-lock.json\n\u2502   \u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 /frontend/\n")),(0,r.kt)("p",null,"As we are just getting started, we are not quite ready to deploy our code to production yet."),(0,r.kt)("p",null,"Let's run in development for the time being. In Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("p",null,"If everything works properly, you should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[nodemon] starting `node server.js`\nHello world! I am your server.\n")),(0,r.kt)("p",null,"Congratulations!"),(0,r.kt)("h2",{id:"next-up"},"Next Up"),(0,r.kt)("p",null,"In the next chapter, we will create an Express server, which will contain our routes and controllers."),(0,r.kt)("p",null,"Until next time!"))}d.isMDXComponent=!0},6379:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/building-fullstack-mern-web-app_01_cover-photo-51c78408c60014885a09b4b1eb9e06e7.png"}}]);