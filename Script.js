// 1a. Create a const variable named jedi and set the value of the variable to an empty array
const jedi = [];

// 1b. Using index add "Luke" to the jedi array (Should be the first and only item in the array)
jedi[0] = "Luke";

// 1c. Using the Push method add "Obi-Wan Kenobi" to the jedi array
jedi.push("Obi-Wan Kenobi");

// 1d. Using the Unshift method add "Yoda" to the jedi array
jedi.unshift("Yoda");

// 1e. Using index on the jedi array display "Luke"
console.log(jedi[0]);  // Output: "Luke"

// 1f. Using another array method remove "Obi-Wan Kenobi" from the end of the jedi array
jedi.pop();

// 1g. Finally, using another method remove "Yoda" from the beginning of the jedi array and display the final value of the array
jedi.shift();
console.log(jedi);  // Output: ["Luke"]

// 2a. Create a const variable named sithLords and set the value of the variable to the following array items "Darth Vader", "Darth Sidious", and "Darth Maul"
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

// 2b. Create another const variable named imperialOfficers and set the value of the variable to the following array items "Grand Moff Tarkin" and "Orson Krennic"
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

// 2c. Using the concat method join the two arrays into one and set the value to a new const variable called starWarsVillains
// Also, display the value of the new starWarsVillains variable
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);  // Output: ["Darth Vader", "Darth Sidious", "Darth Maul", "Grand Moff Tarkin", "Orson Krennic"]

// 2d. Using the slice method on the starWarsVillains array display an array that contains "Darth Maul" and "Grand Moff Tarkin"
console.log(starWarsVillains.slice(2, 4));  // Output: ["Darth Maul", "Grand Moff Tarkin"]

// 3a. Create a const variable called droids and set the value to an object with the following key value pairs (astromech: "R2-D2"), (protocol: "C-3PO"), and (assassin: "IG-88")
const droids = {
  astromech: "R2-D2",
  protocol: "C-3PO",
  assassin: "IG-88"
};

// 3b. Display "R2-D2" from the droids variable/object in terminal/console using square brackets "[]"
console.log(droids["astromech"]);  // Output: "R2-D2"

// 3c. Display "C-3PO" from the droids variable/object in terminal/console using dot "."
console.log(droids.protocol);  // Output: "C-3PO"

// 3d. In the droids variable/object change the "IG-88" value to "IG-11"
droids.assassin = "IG-11";

// 4. Using indexes display the "V" from "Darth Vader" from the starWarsVillains array
console.log(starWarsVillains[0][1]);  // Output: "V"

// 5. Using only negative numbers display "Darth Sidious" from the sithLords array using Slice
console.log(sithLords.slice(-2, -1)[0]);  // Output: "Darth Sidious"

// 6a. Create a const variable named starWarsMovies and set the value to an array of three objects
const starWarsMovies = [
  {
    episodeOne: "The Phantom Menace",
    episodeTwo: "Attack of the Clones",
    episodeThree: "Revenge of the Sith"
  },
  {
    episodeFour: "A New Hope",
    episodeFive: "The Empire Strikes Back",
    episodeSix: "Return of the Jedi"
  },
  {
    episodeSeven: "The Force Awakens",
    episodeEight: "The Last Jedi",
    episodeNine: "The Rise of Skywalker"
  }
];

// 6b. Using an array method add the following string values ("Solo" and "Rogue One") as items in the starWarsMovies array between the 1st and 2nd objects
starWarsMovies.splice(1, 0, "Solo", "Rogue One");