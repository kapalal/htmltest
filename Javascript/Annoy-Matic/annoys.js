//Version1

/*var answer = prompt("Are we there yet?");

while (answer !== "yes") {
  var answer = prompt("are we there yet?");
}

alert("YAY WE MADE IT!!!");
*/

//Version2 eyusdjqd

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("are we there yet?");
}

alert("YAY WE MADE IT!!!");
