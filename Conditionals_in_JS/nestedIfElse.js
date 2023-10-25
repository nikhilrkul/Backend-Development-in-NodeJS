console.log("Welcome to Amazon prime");

let isUserPrime = true;
let isUserDiscovery = false;
let isUserAccorn = true;

if (isUserPrime) {
  if (isUserDiscovery) {
    if (isUserAccorn) {
      console.log("Enjoy all accorn, Discovery channel and the Prime content");
    } else {
      console.log("Enjoy Discovery channel along with the Prime content");
    }
  } else if (isUserAccorn) {
    console.log("Enjoy Accorn along with the Prime content");
  } else {
    console.log("Enjoy only the Prime content");
  }
} else {
  console.log("Sign up for the subscription to watch the favorite content");
}
