let stats;
let baseURL = 'http://statsapi.web.nhl.com/api/v1/teams/';
let playerURL = 'http://statsapi.web.nhl.com';
let factsURL = 'http://statsapi.web.nhl.com/api/v1/people/';
let teamSelector = '/roster';

let dropDownDiv = document.getElementById('dropDownInfo')
//array of all 31 NHL teams
teamsArray = ['Select An Option: ', 'NJ Devils', 'NY Islanders', 'NY Rangers', 'Philadelphia Flyers', 'Pittsburgh Penguins',
	'Boston Bruins', 'Buffalo Sabres', 'Montreal Canadiens', 'Ottawa Senators', 'Toronto Maple Leafs', 'Carolina Hurricanes', 'Florida Panthers',
	'Tampa Bay Lightning', 'Washington Capitals', 'Chicago Blackhawks', 'Detroit Red Wings', 'Nashville Predators', 'St. Louis Blues', 'Calgary Flames',
	'Colorado Avalanche', ' Edmonton Oilers', 'Vancouver Canucks', ' Anaheim Ducks', 'Dallas Stars', 'Los Angeles Kings', 'San Jose Sharks',
	'Columbus Blue Jackets', 'Minnesota Wild', 'Arizona Coyotes', 'Winnipeg Jets', 'Vegas Golden Knights'];

dropDownDiv.innerHTML = teamsArray.map(function (team) {
	return "<option class='dropDownText'>" + team + "</option>";
}).join("");
function buttonLink() {
	let userInput = document.getElementById('dropDownInfo').value
	console.log(userInput);
	//Editing index passed to URL in order to accomodate 
	//for the API's odd formatting
	teamsArray.forEach(nhlTeam => {
		if (nhlTeam === userInput) {
			let urlParam = teamsArray.indexOf(nhlTeam);
			if (urlParam > 10 && urlParam < 26) {
				urlParam = urlParam + 1;
			}
			if (urlParam > 26) {
				urlParam = urlParam + 2;
			}
			if (userInput === 'Arizona Coyotes') {
				urlParam = 53;
			}
			if (userInput === 'Winnipeg Jets') {
				urlParam = 52;
			}
			if (userInput === 'Vegas Golden Knights') {
				urlParam = 54;
			}
			urlParam = urlParam.toString()
			loadAPI(urlParam)
		}
	});

}
function playerFacts(element) {
	let playerInfoURL = factsURL + element;
	let headerDiv = document.querySelector('.contTwoWrapper');
	// let bodyDiv = document.querySelector('.contTwoBody');
	headerDiv.innerHTML = '';
	// bodyDiv.innerHTML = '';
	// let myDiv = document.getElementById('pasteData');
	$.ajax({
		type: "GET",
		url: playerInfoURL,
		async: true,
		success: function (playerInfoURL) {
			console.log(playerInfoURL);
			let fullName = playerInfoURL['people'][0]['fullName'];
			let playerWeight = playerInfoURL['people'][0]['weight'];
			headerDiv.innerHTML += '<div class = "popUpHead">' + fullName + '</div>';
			headerDiv.innerHTML += '<div class = "bodyContent">' + 'Weight: ' + playerWeight + '</div>';
			// myDiv.innerHTML += "<span class = 'popUpFacts'" + playerWeight + "</span";
			// console.log(myDiv);
		}
	})
}
//composing base URL
function loadAPI(userTeam) {
	let completeUrl = baseURL + userTeam + teamSelector;
	let siteUrl = baseURL + userTeam;
	let myDiv = document.getElementById('pasteData');
	myDiv.innerHTML = '';

	//Get request for team website's URL
	$.ajax({
		type: "GET",
		url: siteUrl,
		async: true,
		success: function (siteUrl) {
			let myTeamURL = siteUrl['teams'][0]['officialSiteUrl'];
			myDiv.innerHTML += "<li class='formatResult'><div>For more information, visit the team site!</div> <br> <a href ='formatResult'>" + myTeamURL + "</li >"
		}
	})
	//Get request for player name, position, and number
	$.ajax({
		type: "GET",
		url: completeUrl,
		async: true,
		success: function (completeUrl) {
			for (i = 0; i < completeUrl['roster'].length; i++) {
				let myRoster = completeUrl['roster'][i]['person']['link'];
				let factsId = myRoster.substr(15, 21);
				let myPlayer = completeUrl['roster'][i]['person']['fullName'];
				let playerNum = completeUrl['roster'][i]['jerseyNumber'];
				let playerPos = completeUrl['roster'][i]['position']['abbreviation'];
				let playerId = myPlayer.split(' ').join('_');
				if (playerNum == null) {
					playerNum = '(pending)';
					myDiv.innerHTML += "<li class='formatResult' id =" + playerId + ' onclick = playerFacts(this)' + '>' + playerNum + ' ' + myPlayer + ' - ' + playerPos + '<li /> '
				}
				else {
					myDiv.innerHTML += "<li class='formatResult' id =" + playerId + ' onclick = playerFacts(' + factsId + ')' + '>' + '#' + playerNum + ' ' + myPlayer + ' - ' + playerPos + '<li /> '
				}

			}
		}
	});
}
