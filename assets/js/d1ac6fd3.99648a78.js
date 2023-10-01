"use strict";(self.webpackChunkkathy_works=self.webpackChunkkathy_works||[]).push([[8636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"likelihood",title:"Likelihood",date:"2019-07-31 05:04:21 +0800"},i=void 0,l={permalink:"/likelihood",source:"@site/blog/2019-07-31-likelihood.md",title:"Likelihood",description:"Summary: Statistics &lt; Data Science &lt; ?",date:"2019-07-31T05:04:21.000Z",formattedDate:"July 31, 2019",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{slug:"likelihood",title:"Likelihood",date:"2019-07-31 05:04:21 +0800"},prevItem:{title:"Acknowledge Its Existence",permalink:"/acknowledge-its-existence"},nextItem:{title:"Trust Your Gut",permalink:"/trust-your-gut"}},s={authorsImageUrls:[]},u=[],c={toc:u},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("small",null,"Summary: Statistics < Data Science < ?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"I could tell something must have gone wrong. The last stretches of the highway leading up to Tai Lam Tunnel \u2014 including the 3.8-kilometer tunnel itself \u2014 were brought to a complete standstill."),(0,a.kt)("p",null,"As it turns out, there was a crash involving two double-decker buses, injuring 77 people."),(0,a.kt)("p",null,"Before I ramble on, I'd like to wish everyone who's injured a speedy recovery."),(0,a.kt)("p",null,"I happened to be minutes behind the crash. While I was stuck in the heavy traffic with nothing better to do, I couldn't help but sat there and overthought the situation a bit."),(0,a.kt)("h2",null,"Statistics"),(0,a.kt)("p",null,"Back in the days of traditional statistics, the mathematical analysis would be something like this:"),(0,a.kt)("p",null,"What are the odds of being involved in that accident, out of..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All the people"),(0,a.kt)("li",{parentName:"ul"},"Who were headed that direction"),(0,a.kt)("li",{parentName:"ul"},"Taking that particular means of transportation"),(0,a.kt)("li",{parentName:"ul"},"At that specific time"),(0,a.kt)("li",{parentName:"ul"},"(Plus a whole bunch of other factors)")),(0,a.kt)("p",null,"Don't worry, the result isn't something that's alarming at all. But at the same time, the ballpark figure also isn't telling you much."),(0,a.kt)("h2",null,"Data Science"),(0,a.kt)("p",null,"And then there is modern-day data science."),(0,a.kt)("p",null,"How likely is it for someone to be involved in that accident, given:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of past accidents"),(0,a.kt)("li",{parentName:"ul"},"That occurred in the proximity of the crash site"),(0,a.kt)("li",{parentName:"ul"},"Around the same time of the day"),(0,a.kt)("li",{parentName:"ul"},"In a similar model of vehicle")),(0,a.kt)("p",null,"Here's the thing, though. The prediction can range from wildly inaccurate to highly accurate, depending upon various conditions."),(0,a.kt)("p",null,"Has enough data been used? Is the data relevant?"),(0,a.kt)("p",null,"Have enough elements been taken into account? Did we forget to consider things like weather, driver's physical state, materials used, et cetera et cetera?"),(0,a.kt)("p",null,'And that is precisely the danger of relying too heavily on half-baked, "data-driven" "A.I." algorithms in any decision-making process.'),(0,a.kt)("p",null,"I have shared similar thoughts on these risks in some of my past talks, except with different cases and scenarios."),(0,a.kt)("p",null,"(But now it's time for me to go to bed and stop overthinking random things for a few hours.)"))}p.isMDXComponent=!0}}]);