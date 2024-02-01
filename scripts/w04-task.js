/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Julie Eakins",
    photo: "images/myPhoto.png",
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

    placesLived: []
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push = {
    place: [
        "California",
        "Arizona",
        "Texas",
        "Utah"
    ],

    length: [
        "21 years",
        "8 years",
        "11 years",
        "10 years"
    ]

};


/* DOM Manipulation - Output */

/* Name */
//Assign the vvalue of the name property of the myProfile object to the HTML id=name//
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

//Assign the value of the photo property as the src attribute of the MTML with id= photo//
document.querySelector("#photo").src = myProfile.photo;

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
    let li = document.createElement("li");

    // Set the text content of the li element
    li.textContent = hobby;

    // Append the li element with content as a child of the HTML
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

// Iterate placesLived array using forEach
myProfile.placesLived.forEach(place => {
    // Create a new dt element
    let dt = document.createElement("dt");

    // Set the text content of the dt element to the current place
    dt.textContent = place.place;

    // Create a new dd element
    let dd = document.createElement("dd");

    // Set the text content of the dd element to the length property
    dd.textContent = place.length;

    // Append the dt and dd elements to the dl element
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
   
});


