/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Julie Eakins",
    photo: {
        src: "images/myPhoto.png",
        alt: "Profile Picture"
    },
    favoriteFoods: [
        "Cookies",
        "Donuts",
        "Chocolate",
        "Fruit"
    ],
    hobbies: [
        "Hiking",
        "Mountain Biking",
        "Cooking",
        "Pencil Drawing"
    ],

    placesLived: {
        place: [
            "California",
            "Arizona",
            "Texas"
        ],
        
        length: [
            "21 years",
            "8 years",
            "11 years" 
         ]
    },   
    

};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.place.push("Utah");
myProfile.placesLived.length.push("10 years");  
  


/* DOM Manipulation - Output */

/* Name */
//Assign the vvalue of the name property of the myProfile object to the HTML id=name//
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

//Assign the value of the photo property as the src attribute of the MTML with id= photo//
document.querySelector("#photo").src = myProfile.photo.src;


//Assign the value of the name property as the alt attribute of the HTML with id= photo//
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

// Get the ul element by ID
const ulElement = document.getElementById("favorite-foods");

// Iterate over favoriteFoods array using forEach
myProfile.favoriteFoods.forEach(food => {
    // Create a new li element
    let liElement = document.createElement("li");

    // Set the text content of the li element to the current food item
    liElement.textContent = food;

    // Append the li element with content as a child of the ul element
    document.querySelector("#favorite-foods").appendChild(liElement);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    // Create a new li element
    let liElement = document.createElement("li");

    // Set the text content of the li element
    liElement.textContent = hobby;

    // Append the li element with content as a child of the HTML
    document.querySelector("#hobbies").appendChild(liElement);
});

/* Places Lived DataList */


// Access the 'place' and 'length' arrays 
const places = myProfile.placesLived.place;
const lengths = myProfile.placesLived.length;

// Iterate over the places array using forEach
places.forEach((place, index) => {
    // Create an HTML <dt> element and put its place property in the <dt> element
    let dtElement = document.createElement("dt");
    dtElement.textContent = place;

    // Create an HTML <dd> element and put its length property in the <dd> element
    let ddElement = document.createElement("dd");
    ddElement.textContent = lengths[index];

    // Append the HTML <dt> and <dd> elements to the HTML <dl> element with an ID of places-lived
    document.querySelector("#places-lived").appendChild(dtElement);
    document.querySelector("#places-lived").appendChild(ddElement);
});

