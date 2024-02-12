/* W05: Programming Tasks */

/* Declare and initialize global variables */



let templeList = [];

const templesElement = document.getElementById("temples");

/* async displayTemples Function */

const displayTemples = (templeList) => {
    templeList.forEach(temple => {
        let articleContainer = document.createElement("article");
        let subtitle = document.createElement("h3");
        subtitle.textContent = temple.templeName;
        let templeImg = document.createElement("img");
        templeImg.src = temple.imageUrl;
        templeImg.alt = temple.location;
        articleContainer.appendChild(subtitle);
        articleContainer.appendChild(templeImg);
        templesElement.appendChild(articleContainer);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    templeList = await response.json();

    displayTemples(templeList);
};
/* reset Function */

const reset = () => templesElement.innerHTML = "";

/* filterTemples Function */


// Name of the function could also be "sortBy":

const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
            case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
            case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date("1950, January, 1")));
            break;
            case "all":
            displayTemples(temples);
            break;
        }
}

getTemples();

/* Event Listener */

document.getElementById("filtered").addEventListener("change", () => {filterTemples(templeList)})