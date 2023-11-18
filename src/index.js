const content  = document.getElementById("content");


function pageDescription(evt, tab){
    const header = document.createElement("h1");
    header.innerHTML = "Cushy Cottage"

    const img = document.createElement("img");
    img.src = "../lake-house.webp"

    const details = document.createElement("p");
    details.innerHTML = "Cottage between worlds, this cottage takes you on a trip from the <br> mountains of europe to the depths of the sea and the wonders of the forest"

    

    content.append(header,img,details)
}

function pageMenu(evt,tab){
    const header = document.createElement('h1');
    header.innerHTML = "Menu"


}

function pageContact(evt,tab){
    const header = document.createElement('h1')
    header.innerHTML = "Contact Us"
}

const tab = document.createElement("div");
    tab.classList.add('tab');

content.append(tab)

numTabs = 3
for (i=0; i<numTabs; i++){
    const tabLink = document.createElement("button");
    tabLink.classList.add("tabLink")
    tabLink.setAttribute('id','tab'+i)
    tab.append(tabLink)
}

const tab0 = document.getElementById('tab'+ 0);
tab0.setAttribute(onclick, 'openCity(event, "tab0')

const tab1 = document.getElementById('tab'+ 1);
tab1.setAttribute(onclick, 'openCity(event, "tab1')

const tab2 = document.getElementById('tab'+ 2);
tab2.setAttribute(onclick, 'openCity(event, "tab2')


pageDescription(1,2)