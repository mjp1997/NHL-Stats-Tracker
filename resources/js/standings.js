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
			buttonLink()
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
					metroArray.push([idArray[i], parseFloat(teamBase['stats'][0]['splits'][0]['stat']['ot'])]);
					atlanticArray.sort(function (a, b) {
						return a[1] - b[1];
					});
					console.log(metroArray);
					if (i === 15) {
						for (i = 0; i <= 7; i++) {
							console.log(metroArray[i])
							myLi = '';
							myLi.innerHTML += metroArray[i]

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
						for (i = 0; i <= 7; i++) {
							console.log(atlanticArray[i])
							myLi = '';
							myLi.innerHTML += atlanticArray[i]

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
								myLi.innerHTML += 'Chicago Blackhawks';
								myLi.innerHTML += centralArray[i][1]
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['ChicagoBlackhawks']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
							}
							else if (centralArray[i][0] === 18) {
								myLi.innerHTML += 'Nashville Predators';
								myLi.innerHTML += centralArray[i][1]
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['NashvillePredators']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
							}
							else if (centralArray[i][0] === 19) {
								myLi.innerHTML += 'St. Louis Blues';
								myLi.innerHTML += centralArray[i][1]
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['StLouisBlues']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
							}
							else if (centralArray[i][0] === 21) {
								myLi.innerHTML += 'Colorado Avalanche';
								myLi.innerHTML += centralArray[i][1]
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['ColoradoAvalanche']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
							}
							else if (centralArray[i][0] === 25) {
								myLi.innerHTML += 'Dallas Stars';
								myLi.innerHTML += centralArray[i][1]
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['DallasStars']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
							}
							else if (centralArray[i][0] === 30) {
								myLi.innerHTML += 'Minnesota Wild';
								myLi.innerHTML += centralArray[i][1];
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['MinnesotaWild']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
							}
							else {
								myLi.innerHTML += 'Winnipeg Jets ';
								myLi.innerHTML += 'Overtime Losses: ' + centralArray[i][1];
								myImg.className = 'teamLogo'
								myImg.setAttribute("src", picsObj['WinnipegJets']);
								myDiv.appendChild(myImg);
								myLi.appendChild(myDiv)
							}

							console.log(myLi);
							document.getElementById('centralDiv').appendChild(myLi)

						}
					}
				},

			});
		}

	}
}
