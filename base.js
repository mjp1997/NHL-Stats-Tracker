let stats;
let baseURL = 'http://statsapi.web.nhl.com/api/v1/teams/';
let teamSelector = '/roster';

let dropDownDiv = document.getElementById('dropDownInfo')
teamsArray = ['---Select Option:---', 'Devils', 'Islanders', 'Rangers', 'Flyers', 'Penguins',
	'Bruins', 'Sabres', 'Canadiens', 'Senators', 'Leafs', 'Buffer', 'Hurricanes', 'Panthers',
	'Lightning', 'Capitals', 'Blackhawks', 'Red Wings', 'Predators', 'Blues', 'Flames',
	'Avalanche', 'Oilers', 'Canucks', 'Ducks', 'Stars', 'Kings', 'Buffer', 'Sharks',
	'Blue Jackets', 'Wild'];

dropDownDiv.innerHTML = teamsArray.map(function (team) {
	return "<option class='dropDownText'>" + team + "</option>";
}).join("");
function buttonLink() {
	let userInput = document.getElementById('dropDownInfo').value
	console.log(userInput)
	if (teamsArray.indexOf(userInput) == -1) {
		alert("Please enter a valid NHL team (then again, are the Blackhaws really valid?)")
	}
	teamsArray.forEach(nhlTeam => {
		if (nhlTeam === userInput) {
			let urlParam = teamsArray.indexOf(nhlTeam)
			urlParam = urlParam.toString()
			loadAPI(urlParam)
		}
	});

}

function loadAPI(userTeam) {
	let completeUrl = baseURL + userTeam + teamSelector;
	let siteUrl = baseURL + userTeam;
	console.log(siteUrl)
	console.log(userTeam)
	console.log(completeUrl)
	let myDiv = document.getElementById('pasteData');
	myDiv.innerHTML = '';

	$.ajax({
		type: "GET",
		url: completeUrl,
		async: true,
		success: function (completeUrl) {
			for (i = 0; i < completeUrl['roster'].length; i++) {
				let myPlayer = completeUrl['roster'][i]['person']['fullName'];
				let playerNum = completeUrl['roster'][i]['jerseyNumber']
				let playerPos = completeUrl['roster'][i]['position']['abbreviation']
				myDiv.innerHTML += "<li class='formatResult'>" + '#' + playerNum + ' ' + myPlayer + " - " + playerPos + "<li /> ";
			}
		}
	})
	$.ajax({
		type: "GET",
		url: siteUrl,
		async: true,
		success: function (siteUrl) {
			let myTeamURL = siteUrl['teams'][0]['officialSiteUrl'];
			console.log(myTeamURL)
			myDiv.innerHTML += "<li class='formatResult'>For more information, visit the team site! </li>"
			myDiv.innerHTML += "<a href ='formatResult'>" + myTeamURL + "<br> <br>";
		}
	})
}

