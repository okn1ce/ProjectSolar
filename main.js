//Variables
var powerCount = 0;
var powerUpgrade = 1;
var powerUpPrice = 10;
var moneyCount = 0;
var panelCount = 0;
var panelAdd = 0;
var panelPrice = 100;


//Functions
  //Harvest function
function Harvest() {
	powerCount += powerUpgrade;
	document.getElementById('powerCount').innerHTML = Math.trunc(powerCount) + " ⚡"

}

  //Upgrade harvest count
function UpgradeHarvest(number) {
	if (moneyCount >= powerUpPrice) {
	powerUpgrade += number;
	moneyCount -= powerUpPrice;
	powerUpPrice = powerUpPrice*1.20;
	
	 }
}

  //Buy Panels
 function BuyPanel() {
 	if (moneyCount >= panelPrice) {
 		panelCount += 1;
 		moneyCount -= panelPrice;
 		panelPrice = panelPrice*1.55;
 		panelAdd = (panelAdd+2)*1.70;
 	}
 }

  //Sell all power
function Sell() {
	if (powerCount > 0) {
	moneyCount = powerCount/2;
	powerCount = 0;
	
}

}

function updateClock() {
  // Will update vars every second.
  document.getElementById('moneyCount').innerHTML = "$" + Math.trunc(moneyCount);
  document.getElementById('powerCount').innerHTML = Math.trunc(powerCount) + " ⚡"
  document.getElementById('upCount').innerHTML = Math.trunc(powerUpgrade) - 1;
  document.getElementById('upPrice').innerHTML = "$" + Math.trunc(powerUpPrice);
  document.getElementById('panelCount').innerHTML = Math.trunc(panelCount);
  document.getElementById('panelPrice').innerHTML = "$" + Math.trunc(panelPrice);
  document.getElementById('panelAdd').innerHTML = Math.trunc(panelAdd);
}
setInterval(updateClock, 10);

function add() {
  // Will update vars every second.
  powerCount += panelAdd;
}
setInterval(add, 1000);




