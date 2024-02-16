/*W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/*Step 2 - Variables */
const fullName = "Julie Eakins";
const currentYear = new Date().getFullYear();

//Holds the location of the image-matches image//
const profilePicture = "images/myPhoto.png";

/* The getElementById() method of the Document 
interface returns an Element object representing 
the element whose id property matches the specified string 
aka 'name, 'food.*/
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");

/*The Document method querySelector() returns the first
 Element within the document that matches the specified
 selector, or group of selectors.
 # is used for id attribute value*/
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/*Step 4 - Adding Content */
/*template literal ``Template literals are literals 
delimited with backtick (`) characters, allowing for 
multi-line strings, string interpolation with embedded 
expressions, and special constructs called tagged templates. */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

//yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
//Need to check this one.I am not sure correct//
imageElement.setAttribute('alt', `Profile image of ${fullName}.`);

/*Step 5 - Array */
let favFood = ["Cookies", "Donuts", "Chocolate", "Fruit"];
foodElement.innerHTML = favFood;
let addFood = "Gummy Bears";
favFood.push(addFood);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;

