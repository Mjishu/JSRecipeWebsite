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

eval("\r\nconst content = document.getElementById(\"content\"); \r\n//* This isn't following the TOP as it wants me to create different modules for the tabs but id rather do the project rn then follow to the Tx.x\r\n\r\nconst unorderedListContainer = document.createElement(\"ul\")\r\nunorderedListContainer.setAttribute(\"id\", \"tabsList\")\r\ncontent.append(unorderedListContainer)\r\n\r\nconst linkTexts = [\"Home\", \"Menu\", \"About\"]\r\nconst linkJump = ['home', 'menu', 'about']\r\n\r\nfor (i=0;i<3;i++){\r\n    const tab = document.createElement(\"li\")\r\n    unorderedListContainer.append(tab)\r\n\r\n    const tabLink = document.createElement(\"a\")\r\n    tabLink.setAttribute('id', \"link\"+i)\r\n    tabLink.setAttribute(\"href\", \"#\"+linkJump[i])\r\n    tab.append(tabLink)\r\n\r\n\r\n    const link0 = document.getElementById(\"link\" + i);\r\n    link0.innerHTML = linkTexts[i]\r\n}\r\n\r\n\r\nconst tabPanels = document.createElement(\"div\")\r\ntabPanels.setAttribute(\"id\", \"tabPanels\")\r\ncontent.append(tabPanels)\r\n\r\n// Home tab info\r\nconst tabHome = document.createElement(\"div\")\r\ntabHome.setAttribute('id', 'home')\r\n\r\nconst headerHome = document.createElement(\"h1\")\r\nheaderHome.innerHTML = \"Home\";\r\n\r\nconst bodyHome = document.createElement(\"p\")\r\nbodyHome.innerHTML = \"Drift away from the vistitudes of life and enjoy a peaceful meal wherever you are\"\r\n\r\nconst homeImg = document.createElement(\"img\")\r\nhomeImg.src = \"../lake-house.webp\"\r\nhomeImg.alt = \"Cottage Image\"\r\n\r\ntabHome.append(headerHome,bodyHome,homeImg)\r\n\r\n//Menu Tab info\r\nconst tabMenu = document.createElement(\"div\");\r\ntabMenu.setAttribute(\"id\", \"menu\")\r\n\r\nconst headerMenu = document.createElement(\"h1\")\r\nheaderMenu.innerHTML = \"Menu\"\r\n\r\ntabMenu.append(headerMenu)\r\n\r\n//About\r\nconst tabAbout = document.createElement(\"div\")\r\ntabAbout.setAttribute(\"id\", \"about\")\r\n\r\nconst headerAbout = document.createElement(\"h1\");\r\nheaderAbout.innerHTML = \"About\"\r\ntabAbout.append(headerAbout)\r\n\r\ntabPanels.append(tabHome, tabMenu, tabAbout )\r\n\r\n//* Part that makes tabs work\r\n\r\nconst tabButtons = tabsList.querySelectorAll(\"a\");\r\nconst tabToggler = document.querySelectorAll(\"#tabPanels > div\");\r\nconst tabsContainer = document.getElementById(\"content\")\r\n\r\n    // Makes the first tab automatically show up\r\ntabButtons.forEach((tab,index)=> {\r\n    if (index === 0){\r\n\r\n    } else{\r\n        tabToggler[index].setAttribute(\"hidden\", \"\")\r\n    }\r\n})\r\n\r\ntabsContainer.addEventListener(\"click\", (e) => {\r\n    const clickedTab = e.target.closest('a');\r\n    if (!clickedTab) return;\r\n    e.preventDefault();\r\n\r\n   switchTab(clickedTab)\r\n})\r\n\r\nfunction switchTab(newTab){\r\n    const activePanelId = newTab.getAttribute(\"href\")\r\n    const activePanel = tabsContainer.querySelector(activePanelId) //THis is the issue, it just returns null //* FIxed it was an issue with tabsConatiner selecting\r\n    console.log(activePanelId)\r\n    console.log(activePanel)\r\n\r\n    tabToggler.forEach((panel) => {\r\n        panel.setAttribute(\"hidden\", true);\r\n    });\r\n    activePanel.removeAttribute(\"hidden\")\r\n}\n\n//# sourceURL=webpack://jsrecipewebsite/./src/index.js?");

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