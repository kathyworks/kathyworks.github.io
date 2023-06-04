"use strict";(self.webpackChunkkathy_works=self.webpackChunkkathy_works||[]).push([[5279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,_=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(_,o(o({ref:t},u),{},{components:n})):i.createElement(_,o({ref:t},u))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={slug:"implementing-smart-contract",title:"Implementing the Smart Contract",date:"2022-04-05 17:18:21 +0800",tags:["final static"]},o=void 0,s={permalink:"/implementing-smart-contract",source:"@site/blog/2022-04-05-implementing-smart-contract/index.md",title:"Implementing the Smart Contract",description:"As documented in the previous post, I built out the application skeleton which came with an auto-generated sample Solidity smart contract.",date:"2022-04-05T17:18:21.000Z",formattedDate:"April 5, 2022",tags:[{label:"final static",permalink:"/tags/final-static"}],hasTruncateMarker:!0,authors:[],frontMatter:{slug:"implementing-smart-contract",title:"Implementing the Smart Contract",date:"2022-04-05 17:18:21 +0800",tags:["final static"]},prevItem:{title:"Building the Front End",permalink:"/building-front-end"},nextItem:{title:"Dapp Project Setup",permalink:"/dapp-project-setup"}},l={authorsImageUrls:[]},c=[{value:"Coding the smart contract",id:"coding-the-smart-contract",level:2},{value:"Writing the test",id:"writing-the-test",level:2},{value:"Running the test",id:"running-the-test",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As documented in the previous post, I built out the application skeleton which came with an auto-generated sample Solidity smart contract."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A smart contract is a self-executing protocol with the terms of the agreement between two parties (e.g. buyer and seller) being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network.")),(0,r.kt)("p",null,"With that in place, the next item on the docket would be to create Final Static's smart contract."),(0,r.kt)("h2",{id:"coding-the-smart-contract"},"Coding the smart contract"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"/contracts/")," folder, there's already a sample smart contract code file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".sol")," extension. To set up our own smart contract, I created a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"FinalStatic.sol")," in the same folder."),(0,r.kt)("p",null,"Here's the entirety of the file thus far:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.4;\n\nimport "@openzeppelin/contracts/utils/Counters.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\n\nimport "hardhat/console.sol";\n\ncontract FinalStatic is ERC721URIStorage\n{\n    using Counters for Counters.Counter;\n    Counters.Counter private _token_ids;\n    Counters.Counter private _items_sold;\n\n    uint256 listing_price = 0.025 ether;\n    address payable owner;\n\n    mapping(uint256 => MarketItem) private id_to_market_item;\n\n    struct MarketItem\n    {\n        uint256 token_id;\n        address payable seller;\n        address payable owner;\n        uint256 price;\n        bool is_sold;\n    }\n\n    event MarketItemCreated\n    (\n        uint256 indexed token_id,\n        address seller,\n        address owner,\n        uint256 price,\n        bool is_sold\n    );\n\n    constructor() ERC721("Metaverse Tokens", "METT")\n    {\n        owner = payable(msg.sender);\n    }\n\n    // Updates the listing price of the contract\n    function updateListingPrice(uint _listing_price) public payable\n    {\n        require(owner == msg.sender, "Only marketplace owner can update listing price.");\n        listing_price = _listing_price;\n    }\n\n    // Returns the listing price of the contract\n    function getListingPrice() public view returns (uint256)\n    {\n        return listing_price;\n    }\n\n    // Mints a token and lists it in the marketplace\n    function createToken(string memory token_URI, uint256 price) public payable returns (uint)\n    {\n        _token_ids.increment();\n        uint256 new_token_id = _token_ids.current();\n\n        _mint(msg.sender, new_token_id);\n        _setTokenURI(new_token_id, token_URI);\n        createMarketItem(new_token_id, price);\n        return new_token_id;\n    }\n\n    function createMarketItem(uint256 token_id, uint256 price) private\n    {\n        require(price > 0, "Price must be at least 1 wei");\n        require(msg.value == listing_price, "Price must be equal to listing price");\n\n        id_to_market_item[token_id] = MarketItem(\n            token_id,\n            payable(msg.sender),\n            payable(address(this)),\n            price,\n            false\n        );\n\n        _transfer(msg.sender, address(this), token_id);\n\n        emit MarketItemCreated(\n            token_id,\n            msg.sender,\n            address(this),\n            price,\n            false\n        );\n    }\n\n    // Allows someone to resell a token they have purchased\n    function resellToken(uint256 token_id, uint256 price) public payable\n    {\n        require(id_to_market_item[token_id].owner == msg.sender, "Only item owner can perform this operation");\n        require(msg.value == listing_price, "Price must be equal to listing price");\n\n        id_to_market_item[token_id].is_sold = false;\n        id_to_market_item[token_id].price = price;\n        id_to_market_item[token_id].seller = payable(msg.sender);\n        id_to_market_item[token_id].owner = payable(address(this));\n        _items_sold.decrement();\n\n        _transfer(msg.sender, address(this), token_id);\n    }\n\n    // Creates the sale of a marketplace item\n    // Transfers ownership of the item, as well as funds between parties\n    function createMarketSale(uint256 token_id) public payable\n    {\n        uint price = id_to_market_item[token_id].price;\n        address seller = id_to_market_item[token_id].seller;\n\n        require(msg.value == price, "Please submit the asking price in order to complete the purchase");\n\n        id_to_market_item[token_id].owner = payable(msg.sender);\n        id_to_market_item[token_id].is_sold = true;\n        id_to_market_item[token_id].seller = payable(address(0));\n\n        _items_sold.increment();\n        _transfer(address(this), msg.sender, token_id);\n\n        payable(owner).transfer(listing_price);\n        payable(seller).transfer(msg.value);\n    }\n\n    // Returns all unsold market items\n    function fetchMarketItems() public view returns (MarketItem[] memory)\n    {\n        uint item_count = _token_ids.current();\n        uint unsold_item_count = _token_ids.current() - _items_sold.current();\n        uint current_index = 0;\n\n        MarketItem[] memory items = new MarketItem[](unsold_item_count);\n\n        for (uint i = 0; i < item_count; i++)\n        {\n            if (id_to_market_item[i + 1].owner == address(this))\n            {\n                uint curr_id = i + 1;\n                MarketItem storage curr_item = id_to_market_item[curr_id];\n                items[current_index] = curr_item;\n                current_index += 1;\n            }\n        }\n\n        return items;\n    }\n\n    // Returns only items that a user has purchased\n    function fetchMyNFTs() public view returns (MarketItem[] memory)\n    {\n        uint total_item_count = _token_ids.current();\n        uint item_count = 0;\n        uint current_index = 0;\n\n        for (uint i = 0; i < total_item_count; i++)\n        {\n            if (id_to_market_item[i + 1].owner == msg.sender)\n            {\n                item_count += 1;\n            }\n        }\n\n        MarketItem[] memory items = new MarketItem[](item_count);\n\n        for (uint i = 0; i < total_item_count; i++)\n        {\n            if (id_to_market_item[i + 1].owner == msg.sender)\n            {\n                uint curr_id = i + 1;\n                MarketItem storage curr_item = id_to_market_item[curr_id];\n                items[current_index] = curr_item;\n                current_index += 1;\n            }\n        }\n\n        return items;\n    }\n\n    // Returns only items that a user has listed\n    function fetchItemsListed() public view returns (MarketItem[] memory)\n    {\n        uint total_item_count = _token_ids.current();\n        uint item_count = 0;\n        uint current_index = 0;\n\n        for (uint i = 0; i < total_item_count; i++)\n        {\n            if (id_to_market_item[i + 1].seller == msg.sender)\n            {\n                item_count += 1;\n            }\n        }\n\n        MarketItem[] memory items = new MarketItem[](item_count);\n\n        for (uint i = 0; i < total_item_count; i++)\n        {\n            if (id_to_market_item[i + 1].seller == msg.sender)\n            {\n                uint curr_id = i + 1;\n                MarketItem storage curr_item = id_to_market_item[curr_id];\n                items[current_index] = curr_item;\n                current_index += 1;\n            }\n        }\n\n        return items;\n    }\n}\n\n')),(0,r.kt)("p",null,"This contract inherits from the ERC721 standard implemented by OpenZepplin."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OpenZeppelin is an open-source platform for building secure dapps. The framework provides the required tools to create and automate Web3 applications.")),(0,r.kt)("p",null,"Next, I was hoping to test out the core functionality of the smart contract code and environment, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minting a token"),(0,r.kt)("li",{parentName:"ul"},"Listing the token for sale"),(0,r.kt)("li",{parentName:"ul"},"Selling the token to another user"),(0,r.kt)("li",{parentName:"ul"},"Querying for tokens")),(0,r.kt)("h2",{id:"writing-the-test"},"Writing the test"),(0,r.kt)("p",null,"To create the test locally, I replaced the sample code in ",(0,r.kt)("inlineCode",{parentName:"p"},"test/sample-test.js")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\ndescribe("FinalStatic", function()\n{\n    it("Should create and execute market sales", async function()\n    {\n        // Deploy the marketplace\n        const FinalStatic = await ethers.getContractFactory("FinalStatic");\n        const finalStatic = await FinalStatic.deploy();\n        await finalStatic.deployed();\n\n        let listing_price = await finalStatic.getListingPrice();\n        listing_price = listing_price.toString();\n\n        const auction_price = ethers.utils.parseUnits(\'1\', \'ether\');\n\n        // Create 2 tokens\n        await finalStatic.createToken("https://mytokenlocation1.com", auction_price, { value: listing_price });\n        await finalStatic.createToken("https://mytokenlocation2.com", auction_price, { value: listing_price });\n\n        const [_, buyer_address] = await ethers.getSigners();\n\n        // Execute sale of token to another user\n        await finalStatic.connect(buyer_address).createMarketSale(1, { value: auction_price });\n\n        // Resell a token\n        await finalStatic.connect(buyer_address).resellToken(1, auction_price, { value: listing_price });\n\n        // Query for and return the unsold items\n        items = await finalStatic.fetchMarketItems();\n\n        items = await Promise.all(items.map(async i => {\n            const token_URI = await finalStatic.tokenURI(i.token_id)\n\n            let item = {\n                price: i.price.toString(),\n                token_id: i.token_id.toString(),\n                seller: i.seller,\n                owner: i.owner,\n                token_URI\n            };\n\n            return item;\n        }))\n\n        console.log("items: ", items);\n    })\n});\n\n')),(0,r.kt)("h2",{id:"running-the-test"},"Running the test"),(0,r.kt)("p",null,"To start the test, I ran this command on Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat test\n")),(0,r.kt)("p",null,"Here's the result I got:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:n(746).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"From the log, we can see an array which contains the two marketplace placeholder items \u2014\xa0indicating a successful test."),(0,r.kt)("p",null,"That's great progress with the backbone so far."),(0,r.kt)("p",null,"Let's jump over to the client side in the next post, where I will start building out the front end."))}p.isMDXComponent=!0},746:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/final-static_implementing-smart-contract_cover-903733517fe110d9245060fe65d80c12.png"}}]);