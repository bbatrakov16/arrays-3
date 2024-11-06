// // Lesson 3: Associative Arrays & Data Options

// // Ex 1:  English Grades
// let lastNames = ["Bacque", "Dunn", "Sabourin", "Trump", "Trudeau", "Harris"];
// let grades = [65, 80, 100, 50, 64, 85];
// let diploma = [false, true, true, false, false, true];

// for (let i = 0; i < lastNames.length; i++) {
//   console.log(
//     `Student: ${lastNames[i]} Grade: ${grades[i]} Writing Dip: ${diploma[i]}`
//   );
// }

// // You try: Add a few more entries to the arrays above.
// // Then, Using the arrays above, output:
// // a. Only students with grades above 75.
// // console.log("Students with grades above 75%:");
// for (let i = 0; i < lastNames.length; i++) {
//   if (grades[i] >= 75) {
//     console.log(
//       `Student: ${lastNames[i]} Grade: ${grades[i]} Writing Dip: ${diploma[i]}`
//     );
//   }
// }
// // b. Only students who plan to write the diploma.
// console.log("\n\nStudents who plan to write the diploma:");
// for (let i = 0; i < lastNames.length; i++) {
//   if (diploma[i]) {
//     console.log(
//       `Student: ${lastNames[i]} Grade: ${grades[i]} Writing Dip: ${diploma[i]}`
//     );
//   }
// }

// Ex. Multi-dimensional Arrays
// var circlePositions = [
//   [100, 120],
//   [200, 50],
//   [300, 75],
// ];

// // Print the last array:
// console.log(circlePositions[2]);

// // Print 300 (in the last array)
// console.log(circlePositions[2][0]);

// // You Try:  print the [200,50] array.  Print the 120 element in the first subarray.
// alert(circlePositions[1]);
// alert(circlePositions[0][1]);

// Ex. Multidimensional Rectangles
// let rectangles = [
//   [20, 50, 100, 100],
//   [100, 30, 70, 20],
//   [20, 200, 30, 90],
//   [100, 200, 10, 30],
// ];

// You Try:
// a. Use a loop to print the rectangles
// b. Add a 4th rectangle

// Associative Arrays (objects)

// var otherPlayer = [500, 20, 12];

// var player = {
//   health: 500,
//   attackStat: 20,
//   defenseStat: 12,
// };

// // Keys:  health, attackStat, defenseStat
// // Values: 500, 20, 12
// // Objects contain key-value pairs

// // alert(player.health); // prints 500

// // Change the attackStat to 100:
// player.attackStat = 100;

// // Increase Defense by 10:
// player.defenseStat += 10;

// // Add new key-value pairs.  Add magic stat:
// player.magicStat = 50;

// console.log(player);

// Ex. Circle object

// let oneCircle = {
//   x: 120,
//   y: cnv.height / 2,
//   radius: 50,
//   color: "maroon",
//   dx: 4,
//   dy: 3,
// };

// You try:
// When circle hits edge, it bounces moves in opposite direction.
// Repeat exercise, but in the y-direction

// Keyboard Control:
// a) When z is pressed, slow down the x-speed. When x is pressed, speed it up
// b) choose 2 buttons to control the y-speed

// Keyboard event listener
// document.addEventListener("keypress", keypressHandler);

// function keypressHandler(event) {
//   console.log(event.key);

//   // horizontal speed control
//   if (event.key == "z" && oneCircle.dx > 0) {
//     oneCircle.dx--;
//   }

//   if (event.key == "z" && oneCircle.dx < 0) {
//     oneCircle.dx++;
//   }

//   if (event.key == "x" && oneCircle.dx >= 0) {
//     oneCircle.dx++;
//   }

//   if (event.key == "x" && oneCircle.dx <= 0) {
//     oneCircle.dx--;
//   }

//   // vertical speed control
//   if (event.key == "a" && oneCircle.dy > 0) {
//     oneCircle.dy--;
//   }

//   if (event.key == "a" && oneCircle.dy < 0) {
//     oneCircle.dy++;
//   }

//   if (event.key == "s" && oneCircle.dy >= 0) {
//     oneCircle.dy++;
//   }

//   if (event.key == "s" && oneCircle.dy <= 0) {
//     oneCircle.dy--;
//   }
// }

// var oneLine = {
//   x: Math.random() * cnv.width,
//   y: Math.random() * cnv.height,
//   length: Math.random() * 100 + 20,
//   width: Math.random() * 5 + 1,
//   colour: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
//     Math.random() * 255
//   })`,
// };

var linesArray = [];

for (let i = 0; i < 100; i++) {
  linesArray.push({
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    length: Math.random() * 100 + 20,
    width: Math.random() * 5 + 1,
    colour: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`,
    dx: Math.random() * 4, // 0.01 - 3.99
  });
}

console.log(linesArray);

// // 1
// var firstNames = ["Bones", "Welma", "Frank", "Han", "Jack"];
// var lastNames = ["Smith", "Seger", "Mathers", "Solo", "Jackles"];
// var heights = [158, 169, 172, 183, 201];

// var fName = prompt("Enter first name:");
// var lName = prompt("Enter last name:");
// var userHeight = +prompt("Enter height");

// part a
// firstNames.push(fName);
// lastNames.push(lName);
// heights.push(userHeight);

// // part b
// for (let i = 0; i < heights.length; i++) {
//   if (userHeight <= heights[i]) {
//     // position
//     firstNames.splice(i, 0, fName);
//     lastNames.splice(i, 0, lName);
//     heights.splice(i, 0, userHeight);
//     break;
//   } else if (i === heights.length - 1) {
//     firstNames.push(fName);
//     lastNames.push(lName);
//     heights.push(userHeight);
//     break;
//   }
// }

// console.log(firstNames);
// console.log(lastNames);
// console.log(heights);

// // 2
// // function to draw a playing board
// function displayBoard(board) {
//   for (let i = 0; i < 3; i++) {
//     console.log(
//       "[" +
//         board[i][0] +
//         "]" +
//         " [" +
//         board[i][1] +
//         "]" +
//         " [" +
//         board[i][2] +
//         "]"
//     );
//   }
//   console.log("-----------");
// }

// // function to find a winner
// function checkForWinner(player, board) {
//   // checking raws
//   for (let i = 0; i < 3; i++) {
//     if (
//       board[i][0] === player &&
//       board[i][1] === player &&
//       board[i][2] === player
//     ) {
//       return true;
//     }
//   }

//   // checking columns
//   for (let i = 0; i < 3; i++) {
//     if (
//       board[0][i] === player &&
//       board[1][i] === player &&
//       board[2][i] === player
//     ) {
//       return true;
//     }
//   }

//   // checking diagonales
//   if (
//     board[0][0] === player &&
//     board[1][1] === player &&
//     board[2][2] === player
//   ) {
//     return true;
//   }
//   if (
//     board[0][2] === player &&
//     board[1][1] === player &&
//     board[2][0] === player
//   ) {
//     return true;
//   }

//   // If there's no a winner
//   return false;
// }

// // main logic
// let ticTacToeBoard = [
//   ["X", "X", "O"],
//   ["", "X", "O"],
//   ["", "", ""],
// ];

// // prompting for the player
// let row, column;
// do {
//   row = prompt("Enter row (1-3):") - 1;
//   column = prompt("Enter column (1-3):") - 1;
// } while (ticTacToeBoard[row][column] !== "");

// // updating the board
// ticTacToeBoard[row][column] = "X";
// displayBoard(ticTacToeBoard);

// // is there a winner?
// if (checkForWinner("X", ticTacToeBoard)) {
//   console.log("Player X wins!");
// } else {
//   console.log("No winner yet.");
// }

// // 3
// // dragon characteristics
// var dragon = {
//   health: 100,
//   atkString: ">", // showing the attack
//   attackPwr: 15, // power of attack
// };

// // a: attack
// function attack(actor) {
//   let attackString = "";
//   for (let i = 0; i < actor.attackPwr; i++) {
//     attackString += actor.atkString;
//   }
//   console.log(attackString);
// }

// // calling the function of the dragon's attack
// attack(dragon);

// // b: creating the player with random characteristics
// var player = {
//   health: randomInt(80, 100), // health of the player
//   atkString: "-/--> ", // showing the attack
//   attackPwr: randomInt(10, 20), // power of attack
// };

// // calling the function of the player's attack
// attack(player);

// // c: fighting
// console.log("The dragon attacks!\n");
// attack(dragon);
// player.health -= dragon.attackPwr; // loosing of the player's health

// console.log(
//   "\nThe player is struck for " +
//     dragon.attackPwr +
//     " and has " +
//     player.health +
//     " health remaining.\n"
// );

// // the player is attacking
// console.log("The player attacks!\n");
// attack(player);
// dragon.health -= player.attackPwr; // loosing of the dragon's health

// console.log(
//   "\nThe dragon is struck for " +
//     player.attackPwr +
//     " and has " +
//     dragon.health +
//     " health remaining.\n"
// );

// // question 2
// var cities = ['Edmonton', 'Calgary', 'Vancouver']
// var popByThousands = [1469, 1543, 2737]

// cities.splice(2, 0, 'Winnipeg');
// cities.splice(2, 0, 850);

// // question 3
// let pokemon = [
//   ["Bulbasaur", "grass", 318],
//   ["Charmander", "fire", 309],
//   ["Squirtle", "water", 314],
// ];

// // a.
// console.log(pokemon[1][0]); // Charmander

// // b.
// pokemon[0][1] = "poison";

// // c.
// pokemon[2][2] -= 10; // 314 - 10 = 304

// // d.
// pokemon.push(["Caterpie", "bug", 195]);

// // e.
// for (let i = 0; i < pokemon.length; i++) {
//   console.log(
//     "Name: " +
//       pokemon[i][0] +
//       ", Element: " +
//       pokemon[i][1] +
//       ", Total Stats: " +
//       pokemon[i][2]
//   );
// }

// // question 4
// // Abdi's dog's data
// let abdiDog = {
//   breed: "golden retriever",
//   weight: 30,
//   color: "dark golden",
// };

// // Account holder's data
// let account = {
//   fName: "Tifa",
//   lName: "Lockhart",
//   number: 2157,
//   balance: 537,
// };

// console.log(abdiDog);
// console.log(account);

// // question 5
// var car = {
//   make: "Hyundai",
//   model: "Tucson",
//   weight: 950,
//   color: "black",
// };

// // a.
// console.log(car.make); // Hyundai

// // b.
// car.color = "red";

// // c.
// car.weight += 50; // 950 + 50 = 1000

// // d.
// car.year = 2012;

// console.log(car);

// // question 6
// // Let's assume instagramPosts is already an array of 100 objects.
// let instagramPosts = [
//   { image: "img1Name", date: "2024-11-01", numLikes: 45 },
//   { image: "img2Name", date: "2024-11-02", numLikes: 60 },
//   // (other posts) ....
//   { image: "img35Name", date: "2024-12-05", numLikes: 61 },
// ];

// // a.
// console.log(instagramPosts[34].date); // Display date of the 35th post

// // b.
// for (let i = 0; i < instagramPosts.length; i++) {
//   console.log(instagramPosts[i].image);
// }

// // c.
// let likesCount = 0;
// for (let i = 0; i < instagramPosts.length; i++) {
//   if (instagramPosts[i].numLikes > 50) {
//     likesCount++;
//   }
// }
// console.log(likesCount);

// // question 7
// var movies = [
//   ["Avatar", 2.847, 2009],
//   ["Avengers: Endgame", 2.797, 2019],
//   ["Titanic", 2.187, 1997],
//   ["Star Wars: The Force Awakens", 2.068, 2015],
//   ["Avengers: Infinity War", 2.048, 2018],
// ];

// var movies = [
//   {
//     title: "Avatar",
//     gross: 2.847,
//     year: 2009,
//   },
//   {
//     title: "Avengers: Endgame",
//     gross: 2.797,
//     year: 2019,
//   },
//   {
//     title: "Titanic",
//     gross: 2.187,
//     year: 1997,
//   },
//   {
//     title: "Star Wars: The Force Awakens",
//     gross: 2.068,
//     year: 2015,
//   },
//   {
//     title: "Avengers: Infinity War",
//     gross: 2.048,
//     year: 2018,
//   },
// ];
// console.log(movies);
