
let catList = [];

const catsElement = document.getElementById("cats");

const reset = () => catsElement.innerHTML = "";

const displayCats = (catList) => {
    
    catList.forEach(cat => {
        let articleContainer = document.createElement("article");
        let catName = document.createElement("h3");
        let catImg = document.createElement("img");
        let catTemperament = document.createElement("p")
        let catOrigin = document.createElement("p")
        
        
        catName.textContent = `${cat.breeds[0].name}`;
        catImg.src = `${cat.url}`;
        catTemperament.innerHTML = `<strong>Description:</strong> ${cat.breeds[0].temperament}` 
        catOrigin.innerHTML = `<strong>Origin:</strong> ${cat.breeds[0].origin}`

        console.log(cat.breeds[0])
        articleContainer.appendChild(catName);
        articleContainer.appendChild(catImg);
        articleContainer.appendChild(catTemperament)
        articleContainer.appendChild(catOrigin)
        
        catsElement.appendChild(articleContainer);
    });
}



const getCats = async () => {
    
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=48&has_breeds=1", {
            headers :{
            "x-api-key" : "live_vpHXmCmCHxIdPsEkmoK2VMrB6y3QSk8rIdArCcfWy0m7K5S6KRBef3FKQMF0YSfs"}
        });
    
        catList = await response.json();

    displayCats(catList)
};




/*

const filterCats = (cats) => {
    
    reset()
    

    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "unitedStates ":
            displayTemples(cats.filter(cat=> cat.breeds[0].origin.includes("United States")));
            break;
            case "egypt":
            displayTemples(cats.filter(cat=> cat.breeds[0].origin.includes("Egypt")));
            break;
            case "unitedKigndom":
            displayTemples(cats.filter(cat=> cat.breeds[0].origin.includes("United Kingdom")));
            break;
            case "all":
            displayTemples(cats);
            break;
        }
    }

*/

getCats()

//document.getElementById("filtered").addEventListener("change", () => {filterCats(catList)})