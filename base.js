let stats;
let baseURL = 'http://statsapi.web.nhl.com/api/v1/teams/';
let teamSelector = '/roster';

let dropDownDiv = document.getElementById('dropDownInfo')
teamsArray = ['Select An Option: ', 'NJ Devils', 'NY Islanders', 'NY Rangers', 'Philadelphia Flyers', 'Pittsburgh Penguins',
	'Boston Bruins', 'Buffalo Sabres', 'Montreal Canadiens', 'Ottawa Senators', 'Toronto Maple Leafs', 'Carolina Hurricanes', 'Florida Panthers',
	'Tampa Bay Lightning', 'Washington Capitals', 'Chicago Blackhawks', 'Detroit Red Wings', 'Nashville Predators', 'St. Louis Blues', 'Calgary Flames',
	'Colorado Avalanche', ' Edmonton Oilers', 'Vancouver Canucks', ' Anaheim Ducks', 'Dallas Stars', 'Los Angeles Kings', 'San Jose Sharks',
	'Columbus Blue Jackets', 'Minnesota Wild', 'Arizona Coyotes'];

dropDownDiv.innerHTML = teamsArray.map(function (team) {
	return "<option class='dropDownText'>" + team + "</option>";
}).join("");
function buttonLink() {
	let userInput = document.getElementById('dropDownInfo').value
	console.log(userInput);
	teamsArray.forEach(nhlTeam => {
		if (nhlTeam === userInput) {
			let urlParam = teamsArray.indexOf(nhlTeam);
			if (urlParam > 10 && urlParam < 26) {
				urlParam = urlParam + 1;
			}
			if (urlParam > 26) {
				urlParam = urlParam + 2;
			}
			if (userInput == 'Arizona Coyotes') {
				urlParam = 53;
			}
			urlParam = urlParam.toString()
			loadAPI(urlParam)
		}
	});

}

function loadAPI(userTeam) {
	let completeUrl = baseURL + userTeam + teamSelector;
	let siteUrl = baseURL + userTeam;
	let myDiv = document.getElementById('pasteData');
	myDiv.innerHTML = '';


	$.ajax({
		type: "GET",
		url: siteUrl,
		async: true,
		success: function (siteUrl) {
			let myTeamURL = siteUrl['teams'][0]['officialSiteUrl'];
			myDiv.innerHTML += "<li class='formatResult'><h3>For more information, visit the team site!</h1> <br> <a href ='formatResult'>" + myTeamURL + "</li >"
		}
	})



	$.ajax({
		type: "GET",
		url: completeUrl,
		async: true,
		success: function (completeUrl) {
			for (i = 0; i < completeUrl['roster'].length; i++) {
				let myPlayer = completeUrl['roster'][i]['person']['fullName'];
				let playerNum = completeUrl['roster'][i]['jerseyNumber'];
				let playerPos = completeUrl['roster'][i]['position']['abbreviation'];
				if (playerNum == null) {
					playerNum = '(pending)';
					myDiv.innerHTML += "<li class='formatResult'>" + playerNum + ' ' + myPlayer + " - " + playerPos + "<li /> "
				}
				else {
					myDiv.innerHTML += "<li class='formatResult'>" + '#' + playerNum + ' ' + myPlayer + " - " + playerPos + "<li /> ";
				}
			}

		}
	})
}
