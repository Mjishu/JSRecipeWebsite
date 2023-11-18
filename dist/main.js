/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content  = document.getElementById(\"content\");\r\n\r\n\r\nfunction pageDescription(evt, tab){\r\n    const header = document.createElement(\"h1\");\r\n    header.innerHTML = \"Cushy Cottage\"\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = \"../lake-house.webp\"\r\n\r\n    const details = document.createElement(\"p\");\r\n    details.innerHTML = \"Cottage between worlds, this cottage takes you on a trip from the <br> mountains of europe to the depths of the sea and the wonders of the forest\"\r\n\r\n    \r\n\r\n    content.append(header,img,details)\r\n}\r\n\r\nfunction pageMenu(evt,tab){\r\n    const header = document.createElement('h1');\r\n    header.innerHTML = \"Menu\"\r\n\r\n\r\n}\r\n\r\nfunction pageContact(evt,tab){\r\n    const header = document.createElement('h1')\r\n    header.innerHTML = \"Contact Us\"\r\n}\r\n\r\nconst tab = document.createElement(\"div\");\r\n    tab.classList.add('tab');\r\n\r\ncontent.append(tab)\r\n\r\nnumTabs = 3\r\nfor (i=0; i<numTabs; i++){\r\n    const tabLink = document.createElement(\"button\");\r\n    tabLink.classList.add(\"tabLink\")\r\n    tabLink.setAttribute('id','tab'+i)\r\n    tab.append(tabLink)\r\n}\r\n\r\nconst tab0 = document.getElementById('tab'+ 0);\r\ntab0.setAttribute(onclick, 'openCity(event, \"tab0')\r\n\r\nconst tab1 = document.getElementById('tab'+ 1);\r\ntab1.setAttribute(onclick, 'openCity(event, \"tab1')\r\n\r\nconst tab2 = document.getElementById('tab'+ 2);\r\ntab2.setAttribute(onclick, 'openCity(event, \"tab2')\r\n\r\n\r\npageDescription(1,2)\n\n//# sourceURL=webpack://jsrecipewebsite/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;