
const content = document.getElementById("content"); 
//* This isn't following the TOP as it wants me to create different modules for the tabs but id rather do the project rn then follow to the Tx.x

const unorderedListContainer = document.createElement("ul")
unorderedListContainer.setAttribute("id", "tabsList")
content.append(unorderedListContainer)

const linkTexts = ["Home", "Menu", "About"]
const linkJump = ['home', 'menu', 'about']

for (i=0;i<3;i++){
    const tab = document.createElement("li")
    unorderedListContainer.append(tab)

    const tabLink = document.createElement("a")
    tabLink.setAttribute('id', "link"+i)
    tabLink.setAttribute("href", "#"+linkJump[i])
    tab.append(tabLink)


    const link0 = document.getElementById("link" + i);
    link0.innerHTML = linkTexts[i]
}


const tabPanels = document.createElement("div")
tabPanels.setAttribute("id", "tabPanels")
content.append(tabPanels)

// Home tab info
const tabHome = document.createElement("div")
tabHome.setAttribute('id', 'home')

const headerHome = document.createElement("h1")
headerHome.innerHTML = "Home";

const bodyHome = document.createElement("p")
bodyHome.innerHTML = "Drift away from the vistitudes of life and enjoy a peaceful meal wherever you are"

const homeImg = document.createElement("img")
homeImg.src = "../lake-house.webp"
homeImg.alt = "Cottage Image"

tabHome.append(headerHome,bodyHome,homeImg)

//Menu Tab info
const tabMenu = document.createElement("div");
tabMenu.setAttribute("id", "menu")

const headerMenu = document.createElement("h1")
headerMenu.innerHTML = "Menu"

tabMenu.append(headerMenu)

//About
const tabAbout = document.createElement("div")
tabAbout.setAttribute("id", "about")

const headerAbout = document.createElement("h1");
headerAbout.innerHTML = "About"
tabAbout.append(headerAbout)

tabPanels.append(tabHome, tabMenu, tabAbout )

//* Part that makes tabs work

const tabButtons = tabsList.querySelectorAll("a");
const tabToggler = document.querySelectorAll("#tabPanels > div");
const tabsContainer = document.getElementById("content")

    // Makes the first tab automatically show up
tabButtons.forEach((tab,index)=> {
    if (index === 0){

    } else{
        tabToggler[index].setAttribute("hidden", "")
    }
})

tabsContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest('a');
    if (!clickedTab) return;
    e.preventDefault();

   switchTab(clickedTab)
})

function switchTab(newTab){
    const activePanelId = newTab.getAttribute("href")
    const activePanel = tabsContainer.querySelector(activePanelId) //THis is the issue, it just returns null //* FIxed it was an issue with tabsConatiner selecting
    console.log(activePanelId)
    console.log(activePanel)

    tabToggler.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    activePanel.removeAttribute("hidden")
}