/* W05: Programming Tasks */

/* Declare and initialize global variables */
//variable to reference the HTML div element
const templesElement = document.querySelector("#temples");
let templeList = [];
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        //create <article> element
        const article = document.createElement("article");

        //create <h3> element
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName; //add templeName to new element

        //create HTML <img> element
        const img = document.createElement("img");
        img.src = temple.imageUrl; //add imageUrl property to the src attribute
        img.alt = temple.location; //add location to alt attribute

        //append the <h3> and <img> element to the <article> element as children
        article.appendChild(h3);
        article.appendChild(img);

        //append <article> element to global templesElement variable
        templesElement.appendChild(article);
    });
};

/* async displayTemples Function */

/* async getTemples Function using fetch()*/
const getTemples = async () => {

    //declare a const variable name response that awaits the fetch temple date(URL)
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    //convert fetch of data into a JavaScript object (.json)
    templeList = await response.json();//assign the fetched data to templeList

    //call the displayTemples function and pass to templeList
    displayTemples(templeList);
    //console.log(templeList);

};

/* reset Function */
function reset() {
    templesElement.innerHTML = ""; //Clears all child elements inside templesElement
};

/* filterTemples Function */
function sortBy(temples) {
    //call reset function
    reset();
    //define variable named filter that obtains "filtered" id from HTML
    let filter = document.getElementById("filtered").value;//use .value to properly call from in HTML
    //use switch statement with filter value 
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;

    }
};

document.querySelector("#filtered").addEventListener("change", () => { sortBy(templeList) });


getTemples();

/* Event Listener */
