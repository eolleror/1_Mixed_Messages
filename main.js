const messages = [
  "Hello stranger",
  "You are going to have a wonderful day",
  "The sun is in your favour today",
  "The stars say NO to you",
];

function randNumb() {
  return Math.trunc(Math.random() * 3);
}

function randMessage() {
  switch (randNumb()) {
    case 0:
      console.log(messages[0]);
      break;
    case 1:
      console.log(messages[1]);
      break;
    case 2:
      console.log(messages[2]);
      break;
    case 3:
      console.log(messages[3]);
      break;

    default:
      console.log("Sorry, I need to refill my knowledge");
  }
}

randMessage();
