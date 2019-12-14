let standingsBase = 'http://statsapi.web.nhl.com/api/v1/standings'
let filtersBase = '';
let teamId = '';
let metroContainer = document.getElementById('metroDiv');
let atlanticContainer = document.getElementById('atlanticDiv');
let centralContainer = document.getElementById('centralDiv');
let pacificContainer = document.getElementById('pacificDiv');
let myLi = '';
let teamName = '';
let idArray = [];
let picsObj = {
	CalgaryFlames: "/images/calgary.png",
	SanJoseSharks: "/images/sanjose.jpg",
	VegasGoldenKnights: "/images/vegas.png",
	VancouverCanucks: "/images/vancouver.png",
	LosAngelesKings: "/images/losangeles.png",
	AnaheimDucks: "/images/anaheim.jpg",
	ArizonaCoyotes: "/images/arizona.jpg",
	EdmontonOilers: "/images/edmonton.png",
	NashvillePredators: "/images/nashville.png",
	WinnipegJets: "/images/winnipeg.png",
	StLouisBlues: "/images/stlouis.png",
	DallasStars: "/images/dallas.jpg",
	ColoradoAvalanche: "/images/colorado.png",
	ChicagoBlackhawks: "/images/chicago.png",
	MinnesotaWild: "/images/minnesota.jpg",
	TampaBayLightning: "/images/tampabay.png",
	BostonBruins: "/images/boston.png",
	TorontoMapleLeafs: "/images/toronto.png",
	MontréalCanadiens: "/images/montréal.png",
	FloridaPanthers: "/images/florida.jpg",
	BuffaloSabres: "/images/buffalo.png",
	DetroitRedWings: "/images/detroit.jpg",
	OttawaSenators: "/images/ottawa.jpg",
	WashingtonCapitals: "/images/washington.png",
	NewYorkIslanders: "/images/newyorkislanders.png",
	PittsburghPenguins: "/images/pittsburgh.png",
	CarolinaHurricanes: "/images/carolina.jpg",
	ColumbusBlueJackets: "/images/columbus.jpg",
	PhiladelphiaFlyers: "/images/philadelphia.png",
	NewYorkRangers: "/images/newyorkrangers.png",
	NewJerseyDevils: "/images/newjersey.png",
};
let teamLogo = '';
let userInput = '';
let standingsDropInfo = document.getElementById('standingsDropDown');
let optionsArray = ['Select Filter: ', 'Overtime Losses', 'Games Remaining', 'Powerplay', 'Penalty Kill',
	'Goals For Per Game', 'Goals Against Per Game'];
standingsDropInfo.innerHTML = optionsArray.map(function (option) {
	return "<option class='dropDownText'>" + option + "</option>";
})
$.ajax({
	type: "GET",
	url: standingsBase,
	async: true,
	success: function (standingsBase) {
		//metro
		for (i = 0; i <= 7; i++) {
			myLi = document.createElement('li');
			myDiv = document.createElement('div');
			myImg = document.createElement('IMG');
			myLi.className = "formatStandings";
			let displayTeamName = standingsBase['records'][0]['teamRecords'][i]['team']['name'];
			teamId = standingsBase['records'][0]['teamRecords'][i]['team']['id'];
			myLi.id = teamId;
			idArray.push(teamId);
			let teamName = standingsBase['records'][0]['teamRecords'][i]['team']['name'].split(' ').join('');
			teamName = teamName.replace('.', '');
			console.log(teamName);
			teamLogo = picsObj[teamName];
			myImg.className = 'teamLogo'
			myImg.setAttribute("src", teamLogo);
			myLi.innerHTML = displayTeamName;
			myDiv.appendChild(myImg);
			console.log(myDiv);
			// myLi.innerHTML += teamLogo;
			// document.querySelector('.formatStandings').appendChild(teamLogo);
			myLi.appendChild(myDiv);
			myLi.innerHTML += ' Record: ' + standingsBase['records'][0]['teamRecords'][i]['leagueRecord']['wins'];
			myLi.innerHTML += '-' + standingsBase['records'][0]['teamRecords'][i]['leagueRecord']['losses'];
			myLi.innerHTML += '-' + standingsBase['records'][0]['teamRecords'][i]['leagueRecord']['ot'];
			myLi.innerHTML += '</br>' + ' Points: ' + standingsBase['records'][0]['teamRecords'][i]['points'];
			document.getElementById('metroDiv').appendChild(myLi);
			// buttonLink()
			// document.getElementById('pacificDiv').appendChild(myDiv);
		}
		for (i = 0; i <= 7; i++) {
			myLi = document.createElement('li');
			myDiv = document.createElement('div');
			myImg = document.createElement('IMG');
			myLi.className = "formatStandings";
			let displayTeamName = standingsBase['records'][1]['teamRecords'][i]['team']['name'];
			teamId = standingsBase['records'][1]['teamRecords'][i]['team']['id'];
			myLi.id = teamId;
			idArray.push(teamId);
			let teamName = standingsBase['records'][1]['teamRecords'][i]['team']['name'].split(' ').join('');
			teamName = teamName.replace('.', '');
			console.log(teamName);
			teamLogo = picsObj[teamName];
			myImg.className = 'teamLogo'
			myImg.setAttribute("src", teamLogo);
			myLi.innerHTML = displayTeamName;
			myDiv.appendChild(myImg);
			console.log(myDiv);
			myLi.appendChild(myDiv);
			myLi.innerHTML += ' Record: ' + standingsBase['records'][1]['teamRecords'][i]['leagueRecord']['wins'];
			myLi.innerHTML += '-' + standingsBase['records'][1]['teamRecords'][i]['leagueRecord']['losses'];
			myLi.innerHTML += '-' + standingsBase['records'][1]['teamRecords'][i]['leagueRecord']['ot'];
			myLi.innerHTML += '</br>' + ' Points: ' + standingsBase['records'][1]['teamRecords'][i]['points'];
			document.getElementById('atlanticDiv').appendChild(myLi);
		}

		for (i = 0; i <= 6; i++) {
			myLi = document.createElement('li');
			myDiv = document.createElement('div');
			myImg = document.createElement('IMG');
			myLi.className = "formatStandings";
			let displayTeamName = standingsBase['records'][2]['teamRecords'][i]['team']['name'];
			teamId = standingsBase['records'][2]['teamRecords'][i]['team']['id'];
			myLi.id = teamId;
			console.log(teamId);
			idArray.push(teamId);
			let teamName = standingsBase['records'][2]['teamRecords'][i]['team']['name'].split(' ').join('');
			teamName = teamName.replace('.', '');
			console.log(teamName);
			teamLogo = picsObj[teamName];
			myImg.className = 'teamLogo'
			myImg.setAttribute("src", teamLogo);
			myLi.innerHTML = displayTeamName;
			myDiv.appendChild(myImg);
			console.log(myDiv);
			// myLi.innerHTML += teamLogo;
			// document.querySelector('.formatStandings').appendChild(teamLogo);

			myLi.appendChild(myDiv);
			myLi.innerHTML += ' Record: ' + standingsBase['records'][2]['teamRecords'][i]['leagueRecord']['wins'];
			myLi.innerHTML += '-' + standingsBase['records'][2]['teamRecords'][i]['leagueRecord']['losses'];
			myLi.innerHTML += '-' + standingsBase['records'][2]['teamRecords'][i]['leagueRecord']['ot'];
			myLi.innerHTML += '</br>' + ' Points: ' + standingsBase['records'][2]['teamRecords'][i]['points'];
			document.getElementById('centralDiv').appendChild(myLi);
			// document.getElementById('pacificDiv').appendChild(myDiv);
		}

		for (i = 0; i <= 7; i++) {
			myLi = document.createElement('li');
			myDiv = document.createElement('div');
			myImg = document.createElement('IMG');
			myLi.className = "formatStandings";
			let displayTeamName = standingsBase['records'][3]['teamRecords'][i]['team']['name'];
			teamId = standingsBase['records'][3]['teamRecords'][i]['team']['id'];
			myLi.id = teamId;
			console.log(myLi);
			idArray.push(teamId);
			let teamName = standingsBase['records'][3]['teamRecords'][i]['team']['name'].split(' ').join('');
			console.log(teamName);
			teamLogo = picsObj[teamName];
			myImg.className = 'teamLogo'
			myImg.setAttribute("src", teamLogo);
			myLi.innerHTML = displayTeamName;
			myDiv.appendChild(myImg);
			console.log(myDiv);
			// myLi.innerHTML += teamLogo;
			// document.querySelector('.formatStandings').appendChild(teamLogo);
			myLi.appendChild(myDiv);
			myLi.innerHTML += ' Record: ' + standingsBase['records'][3]['teamRecords'][i]['leagueRecord']['wins'];
			myLi.innerHTML += '-' + standingsBase['records'][3]['teamRecords'][i]['leagueRecord']['losses'];
			myLi.innerHTML += '-' + standingsBase['records'][3]['teamRecords'][i]['leagueRecord']['ot'];
			myLi.innerHTML += '</br>' + ' Points: ' + standingsBase['records'][3]['teamRecords'][i]['points'];
			document.getElementById('pacificDiv').appendChild(myLi);
			// document.getElementById('pacificDiv').appendChild(myDiv);
		}
		// buttonLink(idArray)
	}

	// function buttonLink() {
	// 	let userInput = document.getElementById('standingsDropDown').value
	// 	console.log(userInput);
});

let goalsFor = '';
let goalsAgainst = '';
let teamBase = '';
let goalDiffMetro = {};
let goalDiffAtlantic = {};
let goalDiffCentral = {};
let goalDiffPacific = {};
let metroArray = [];
let atlanticArray = [];
let centralArray = [];
let pacificArray = [];

function buttonLink() {
	userInput = document.getElementById('standingsDropDown').value;
	console.log(userInput);
	filtersBase = 'https://statsapi.web.nhl.com/api/v1/teams';
	for (let i = 0; i <= 7; i++) {
		if (userInput === 'Overtime Losses') {
			document.getElementById('metroDiv').innerHTML = '';
			let idKey = (idArray[i])
			console.log(idKey);
			teamBase = filtersBase + '/' + idKey + '/stats';
			console.log(teamBase);
			$.ajax({
				type: "GET",
				url: teamBase,
				async: true,
				success: function (teamBase) {
					metroArray.push([idArray[i], parseInt(teamBase['stats'][0]['splits'][0]['stat']['ot'])]);
					metroArray.sort(function (a, b) {
						return a[1] - b[1];
					});
					console.log(metroArray);
					if (i === 7) {
						for (i = 0; i < 8; i++) {
							console.log(metroArray[i])
							console.log(i);
							myLi = document.createElement('li');
							myImg = document.createElement('IMG');
							myDiv = document.createElement('div');
							myLi.className = 'formatStandings';
							// myLi.innerHTML == centralArray[i][1];
							if (metroArray[i][0] === 15) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['WashingtonCapitals']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Washington Capitals' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1];
							}
							else if (metroArray[i][0] === 2) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['NewYorkIslanders']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'New York Islanders' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1];
							}
							else if (metroArray[i][0] === 5) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['PittsburghPenguins']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
								myLi.innerHTML += 'Pittsburgh Penguins' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1];
							}
							else if (metroArray[i][0] === 12) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['CarolinaHurricanes']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Carolina Hurricanes' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1]
							}
							else if (metroArray[i][0] === 29) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['ColumbusBlueJackets']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Columbus Blue Jackets' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1];
							}
							else if (metroArray[i][0] === 4) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['PhiladelphiaFlyers']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Philadelphia Flyers' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1];
							}
							else if (metroArray[i][0] === 3) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['NewYorkRangers']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'New York Rangers' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1];
							}
							else {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['NewJerseyDevils']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'New Jersey Devils' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + metroArray[i][1];
							}

							console.log(myLi);
							document.getElementById('metroDiv').appendChild(myLi)

						}
					}
				},

			});
		}

	}
	for (let i = 8; i <= 15; i++) {
		if (userInput === 'Overtime Losses') {
			document.getElementById('atlanticDiv').innerHTML = '';
			let idKey = (idArray[i])
			teamBase = filtersBase + '/' + idKey + '/stats';
			$.ajax({
				type: "GET",
				url: teamBase,
				async: true,
				success: function (teamBase) {
					atlanticArray.push([idArray[i], parseFloat(teamBase['stats'][0]['splits'][0]['stat']['ot'])]);
					atlanticArray.sort(function (a, b) {
						return a[1] - b[1];
					});
					console.log(atlanticArray);
					if (i === 15) {
						for (i = 0; i < 8; i++) {
							console.log(metroArray[i])
							console.log(i);
							myLi = document.createElement('li');
							myImg = document.createElement('IMG');
							myDiv = document.createElement('div');
							myLi.className = 'formatStandings';
							// myLi.innerHTML == centralArray[i][1];
							if (atlanticArray[i][0] === 14) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['TampaBayLightning']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Tampa Bay Lightning' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1];
							}
							else if (atlanticArray[i][0] === 6) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['BostonBruins']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Boston Bruins' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1];
							}
							else if (atlanticArray[i][0] === 10) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['TorontoMapleLeafs']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
								myLi.innerHTML += 'Toronto Maple' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1];
							}
							else if (atlanticArray[i][0] === 8) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['Montréal Canadiens']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Montréal Canadiens' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1]
							}
							else if (atlanticArray[i][0] === 13) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['FloridaPanthers']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Florida Panthers' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1];
							}
							else if (atlanticArray[i][0] === 17) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['DetroitRedWings']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Detroit Red Wings' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1];
							}
							else if (atlanticArray[i][0] === 7) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['BuffaloSabres']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Buffalo Sabres' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1];
							}
							else {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['OttawaSenators']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Ottawa Senators' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + atlanticArray[i][1];
							}

							console.log(myLi);
							document.getElementById('atlanticDiv').appendChild(myLi)

						}
					}
				},

			});
		}

	}

	for (let i = 16; i <= 22; i++) {
		if (userInput === 'Overtime Losses') {
			document.getElementById('centralDiv').innerHTML = '';
			let idKey = (idArray[i])
			console.log(idKey);
			teamBase = filtersBase + '/' + idKey + '/stats';
			console.log(teamBase);
			$.ajax({
				type: "GET",
				url: teamBase,
				async: true,
				success: function (teamBase) {
					centralArray.push([idArray[i], parseInt(teamBase['stats'][0]['splits'][0]['stat']['ot'])]);
					centralArray.sort(function (a, b) {
						return a[1] - b[1];
					});
					console.log(centralArray);
					if (i === 22) {
						for (i = 0; i < 7; i++) {
							console.log(centralArray[i])
							console.log(i);
							myLi = document.createElement('li');
							myImg = document.createElement('IMG');
							myDiv = document.createElement('div');
							myLi.className = 'formatStandings';
							// myLi.innerHTML == centralArray[i][1];
							if (centralArray[i][0] === 16) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['ChicagoBlackhawks']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Chicago Blackhawks' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + centralArray[i][1]
							}
							else if (centralArray[i][0] === 18) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['NashvillePredators']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
								myLi.innerHTML += 'Nashville Predators' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + centralArray[i][1]
							}
							else if (centralArray[i][0] === 19) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['StLouisBlues']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'St. Louis Blues' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + centralArray[i][1]
							}
							else if (centralArray[i][0] === 21) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['ColoradoAvalanche']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Colorado Avalanche' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + centralArray[i][1];
							}
							else if (centralArray[i][0] === 25) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['DallasStars']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Dallas Stars' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + centralArray[i][1]
							}
							else if (centralArray[i][0] === 30) {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['MinnesotaWild']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Minnesota Wild' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + centralArray[i][1];
							}
							else {
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['WinnipegJets']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv);
								myLi.innerHTML += 'Winnipeg Jets ' + '</br>';
								myLi.innerHTML += 'OT Losses: ' + centralArray[i][1];
							}

							console.log(myLi);
							document.getElementById('centralDiv').appendChild(myLi)

						}
					}
				},

			});
		}

	}

for (let i = 23; i <= 30; i++) {
	if (userInput === 'Overtime Losses') {
		document.getElementById('pacificDiv').innerHTML = '';
		let idKey = (idArray[i])
		teamBase = filtersBase + '/' + idKey + '/stats';
		$.ajax({
			type: "GET",
			url: teamBase,
			async: true,
			success: function (teamBase) {
				pacificArray.push([idArray[i], parseFloat(teamBase['stats'][0]['splits'][0]['stat']['ot'])]);
				pacificArray.sort(function (a, b) {
					return a[1] - b[1];
				});				if (i === 30) {
					for (i = 0; i < 8; i++) {
						console.log(i);
						myLi = document.createElement('li');
						myImg = document.createElement('IMG');
						myDiv = document.createElement('div');
						myLi.className = 'formatStandings';
						// myLi.innerHTML == centralArray[i][1];
						if (pacificArray[i][0] === 20) {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['CalgaryFlames']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv);
							myLi.innerHTML += 'Calgary Flames' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1];
						}
						else if (pacificArray[i][0] === 28) {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['SanJoseSharks']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv);
							myLi.innerHTML += 'San Jose Sharks' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1];
						}
						else if (pacificArray[i][0] === 54) {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['VegasGoldenKnights']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv)
							myLi.innerHTML += 'Vegas Golden Knights' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1];
						}
						else if (pacificArray[i][0] === 53) {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['ArizonaCoyotes']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv);
							myLi.innerHTML += 'Arizona Coyotes' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1]
						}
						else if (pacificArray[i][0] === 23) {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['VancouverCanucks']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv);
							myLi.innerHTML += 'Vancouver Canucks' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1];
						}
						else if (pacificArray[i][0] === 24) {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['AnaheimDucks']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv);
							myLi.innerHTML += 'Anaheim Ducks' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1];
						}
						else if (pacificArray[i][0] === 22) {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['EdmontonOilers']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv);
							myLi.innerHTML += 'Edmonton Oilers' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1];
						}
						else {
							myImg.className = 'teamLogo'
							myImg.setAttribute("src", picsObj['LosAngelesKings']);
							myDiv.appendChild(myImg);
							myLi.appendChild(myDiv);
							myLi.innerHTML += 'Los Angeles Kings' + '</br>';
							myLi.innerHTML += 'OT Losses: ' + pacificArray[i][1];
						}

						console.log(myLi);
						document.getElementById('pacificDiv').appendChild(myLi)

					}
				}
			},

		});
	}

}
}