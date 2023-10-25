console.log("Welcome to Zee5");
let isUserPremium = true;
let isUserVIP = true;

if (isUserPremium) {
  console.log("Enjoy premium content such as Zee5 originals ");
} else if (isUserVIP) {
  console.log("Enjoy VIP content. Please buy Premium plan for more content");
} else {
  console.log(
    "Please purchase either VIP or Premium subscription plan to continue watching"
  );
}
