let modInfo = {
	name: "The Decrementree",
	id: "decTree",
	author: "unpingabot#0245",
	pointsName: "points",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal("(e^1e308)1"), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.01",
	name: "A single button",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- You can begin decrementing.<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return getBuyableAmount("tree-tab", 11).gte(0.9)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(1)

	let gain = new Decimal(1.001)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	phase: 0
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}