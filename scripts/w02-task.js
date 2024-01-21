let fullName = "Julie Eakins";
//This variable holds the current year//
let currentYear = new Date().getFullYear();
//Holds the file path and filename of the image//
let myPhoto = 'images/myPhoto.jpg';
//Holds the location of the image-matches image//
profilePicture = "images/myPhoto.png";
/* The getElementById() method of the Document 
interface returns an Element object representing 
the element whose id property matches the specified string 
aka 'name, 'food.*/
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
/*The Document method querySelector() returns the first
 Element within the document that matches the specified
 selector, or group of selectors.
 # is used for id attribute value*/
const yearElement = document.querySelector('#year');
/*template literal ``Template literals are literals 
delimited with backtick (`) characters, allowing for 
multi-line strings, string interpolation with embedded 
expressions, and special constructs called tagged templates. */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

element.textContent = currentYear;
imageElement.setAttribute = ('src', profilePicture);
//Need to check this one.I am not sure correct//
imageElement.setAttribute = `('alt','Profile image of [Insert Name Variable]')`;



