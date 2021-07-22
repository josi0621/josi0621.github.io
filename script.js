/* .js files add interaction to your website */
// KEY FEATURE: Generate a fact
var factList = [
"Every year, more than 10 million animals die from abuse in the U.S alone.", 
"Approximately 95% of the total number of animals needed for medical and scientific inquiry in the U.S are rodents.", 
"Every 60 seconds, an animal suffers abuse.", 
"Close to 65% of all abused animals are dogs.", 
"About 97% of all abused and killed animals yearly are farm animals.",
"There are over 10,000 puppy mills in the U.S.",
"⅓ of parrot species could become extinct because of the exotic bird trade.",
"Over 100,000 horses in the U.S are killed for human consumption.",
"Only 1,920 animal abuse cases are presented by the media every year.",
"Every year, more than 6.5 million animals enter animal shelters according to animal abuse statistics in the U.S.",
"The U.S kills over 3 million mink for fur each year."];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
