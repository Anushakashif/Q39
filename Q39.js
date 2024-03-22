"use strict";
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function 
// should return a string formatted like this: 
// "Lahore , Pakistan"
// call your function with at least three city_country pairs, and print the value that's returned 
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let c1 = cityCountry('paris', 'france');
let c2 = cityCountry('london', 'uk');
let c3 = cityCountry('tokyo', 'japan');
console.log(c1);
console.log(c2);
console.log(c3);
