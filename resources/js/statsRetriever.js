
let stats;
let baseURL = 'http://statsapi.web.nhl.com/api/v1/teams/';
let playerURL = 'http://statsapi.web.nhl.com';
let factsURL = 'http://statsapi.web.nhl.com/api/v1/people/';
let teamSelector = '/roster';
let objIndex;
let dropDownDiv = document.getElementById('displayTeams')
console.log(picsObj);

document.body.addEventListener( 'click', function ( event ) {
	if( event.srcElement.id == 'backButton' ) {
	  backButton();
	};
  } );
//array of all 31 NHL teams
teamsArray = ['New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'Pittsburgh Penguins',
	'Boston Bruins', 'Buffalo Sabres', 'Montréal Canadiens', 'Ottawa Senators', 'Toronto Maple Leafs', 'Carolina Hurricanes', 'Florida Panthers',
	'Tampa Bay Lightning', 'Washington Capitals', 'Chicago Blackhawks', 'Detroit Red Wings', 'Nashville Predators', 'St. Louis Blues', 'Calgary Flames',
	'Colorado Avalanche', ' Edmonton Oilers', 'Vancouver Canucks', ' Anaheim Ducks', 'Dallas Stars', 'Los Angeles Kings', 'San Jose Sharks',
	'Columbus Blue Jackets', 'Minnesota Wild', 'Arizona Coyotes', 'Winnipeg Jets', 'Vegas Golden Knights'];
let i = 0;
let teamIdent = '';
dropDownDiv.innerHTML = teamsArray.map(function (team) {
	objIndex = team.split(' ').join('');
	teamIdent = team.split(' ').join('_');
	if(objIndex.includes('.') === true){
		objIndex = objIndex.split('.').filter(e => e !== '.').join('');
	}
	console.log(objIndex);
	console.log(picsObj[objIndex]);
	return "<div class='dropDownText'" + 'onclick = selectTeam(' + teamIdent +')'  + ">"  + "<img src='" + picsObj[objIndex] + "'" + "class = 'teamLogoTwo'" + "id =" + "'" + teamIdent +  "'" + "</img>" + team + "</div>";
}).join("");
function buttonLink() {
	console.log('entering');
	document.getElementById('changeViaOpt').innerHTML = 'Enter a team by city or mascot: ';
	document.getElementById('displayTeams').style.display = 'block';
	let optionLabel = document.querySelector('.optionCont');
	optionLabel.style.display = 'none';
	let userInput = document.getElementById('dropDownInfo');
	userInput.style.display = 'block';
	console.log(userInput);
	//Editing index passed to URL in order to accomodate 
	//for the API's odd formatting
}
let searchContent = '';
function filterTeams(){
	console.log('test')
	let teamList = document.getElementsByClassName('teamLogoTwo');
	teamList = Array.from(teamList);
	teamList.map(function(image){
		searchContent = document.getElementById('dropDownInfo').value
		searchContent = searchContent.toUpperCase();
		compId = image.id
		compId = compId.toUpperCase();
		compId = compId.replace('_', ' ')
		console.log(compId);
		if(compId.includes(searchContent) !== true){
			image.parentElement.style.display = 'none';
		}
		else{
			image.parentElement.style.display = 'block';
		}
	})
}
function selectTeam(nhlTeam){
	nhlTeam = nhlTeam.id.split('_').join(' ');
		let urlParam = teamsArray.indexOf(nhlTeam) + 1;
		if (urlParam > 10 && urlParam < 26) {
			urlParam = urlParam + 1;
		}
		if (urlParam > 26) {
			urlParam = urlParam + 2;
		}
		if (urlParam === 31) {
			urlParam = 53;
		}
		if (urlParam === 32) {
			urlParam = 52;
		}
		if (urlParam === 33) {
			urlParam = 54;
		}
		urlParam = urlParam.toString()
		console.log(urlParam)
		loadAPI(urlParam)
	}
let headerDiv = '';
let openStatus = {};
function playerFacts(element) {
	let playerInfo = document.querySelectorAll('.bodyContent');
	playerInfo = Array.from(playerInfo);
	if(playerInfo.length > 1){
		playerInfo[0].classList.remove('bodyContent');
		playerInfo[0].innerHTML = '';
		playerInfo[1].classList.remove('bodyContent');
		playerInfo[1].innerHTML = '';
		console.log(playerInfo);
	}
	let playerInfoURL = factsURL + element;
	console.log(playerInfoURL);
	headerDiv = document.createElement('div')
	headerDiv.innerHTML = '';
	$.ajax({
		type: "GET",
		url: playerInfoURL,
		async: true,
		success: function (playerInfoURL) {
			console.log(playerInfoURL);
			let fullName = playerInfoURL['people'][0]['fullName'];
			let playerWeight = playerInfoURL['people'][0]['weight'];
			let playerHeight = playerInfoURL['people'][0]['height'];
			playerHeight = playerHeight.replace('"', '');
			let DOB = playerInfoURL['people'][0]['birthDate'];
			DOB = moment(DOB).format('MM/DD/YYYY');
			let playerCountry = playerInfoURL['people'][0]['birthCountry'];
			let playerHomeTown = playerInfoURL['people'][0]['birthCity'];
			headerDiv.innerHTML += '<div class = "bodyContent">' +
				'Born: ' + DOB + ' in ' + playerHomeTown + ', ' + playerCountry + '</div>';
			headerDiv.innerHTML += '<div class = "bodyContent">' + 'Height: ' + playerHeight +
				' Weight: ' + playerWeight + ' lbs' + '</div>'
			document.getElementById(fullName.split(' ').join('_')).appendChild(headerDiv);
		}
	})
}
//composing base URL
function loadAPI(userTeam) {
	let completeUrl = baseURL + userTeam + teamSelector;
	// let siteUrl = baseURL + userTeam;
	document.getElementById('displayTeams').style.display = 'none';
	let myDiv = document.getElementById('displayPlayers');
	myDiv.innerHTML = '';
	myDiv.style.display = 'block';
	let backButton = document.createElement('button');
	backButton.innerHTML = 'Search for Another Roster: '
	backButton.id = 'backButton'
	backButton.style.height = '40px';
	myDiv.innerHTML = '';
	myDiv.appendChild(backButton);
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
					myDiv.innerHTML += "<li class='formatResult' id =" + playerId + ' onclick = playerFacts(' + factsId + ')' + '>' + playerNum + ' ' + myPlayer + ' - ' + playerPos + '<li /> '
				}
				else {
					console.log('appending');
					myDiv.innerHTML += "<li class='formatResult' id =" + playerId + ' onclick = playerFacts(' + factsId + ')' + '>' + '#' + playerNum + ' ' + myPlayer + ' - ' + playerPos + '<li /> '
				}

			}
		}
	});
}
function backButton(){
	console.log('entering')
	document.getElementById('displayTeams').style.display = 'block';
	document.getElementById('displayPlayers').style.display = 'none';

}
// module.exports = stats;