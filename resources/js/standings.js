let standingsBase = 'http://statsapi.web.nhl.com/api/v1/standings'
let metroContainer = document.getElementById('metroDiv');
let atlanticContainer = document.getElementById('atlanticDiv');
let centralContainer = document.getElementById('centralDiv');
let pacificContainer = document.getElementById('pacificDiv');
let myLi = '';
let teamName = '';
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
	DetroitRedWings: "/images/detroit.png",
	OttawaSenators: "/images/ottawa.png",
	WashingtonCapitals: "/images/washington.png",
	NewYorkIslanders: "/images/newyorkislanders.png",
	PittsburghPenguins: "/images/pittsburgh.png",
	CarolinaHurricanes: "/images/carolina.png",
	ColumbusBlueJackets: "/images/columbus.jpg",
	PhiladelphiaFlyers: "/images/philadelphia.png",
	NewYorkRangers: "/images/newyorkrangers.png",
	NewJerseyDevils: "/images/newjersey.png",
};
let teamLogo = '';
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
			// document.getElementById('pacificDiv').appendChild(myDiv);
		}
		for (i = 0; i <= 7; i++) {
			myLi = document.createElement('li');
			myDiv = document.createElement('div');
			myImg = document.createElement('IMG');
			myLi.className = "formatStandings";
			let displayTeamName = standingsBase['records'][1]['teamRecords'][i]['team']['name'];
			let teamName = standingsBase['records'][1]['teamRecords'][i]['team']['name'].split(' ').join('');
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
			myLi.innerHTML += ' Record: ' + standingsBase['records'][1]['teamRecords'][i]['leagueRecord']['wins'];
			myLi.innerHTML += '-' + standingsBase['records'][1]['teamRecords'][i]['leagueRecord']['losses'];
			myLi.innerHTML += '-' + standingsBase['records'][1]['teamRecords'][i]['leagueRecord']['ot'];
			myLi.innerHTML += '</br>' + ' Points: ' + standingsBase['records'][1]['teamRecords'][i]['points'];
			document.getElementById('atlanticDiv').appendChild(myLi);
			// document.getElementById('pacificDiv').appendChild(myDiv);
		}
		for (i = 0; i <= 6; i++) {
			myLi = document.createElement('li');
			myDiv = document.createElement('div');
			myImg = document.createElement('IMG');
			myLi.className = "formatStandings";
			let displayTeamName = standingsBase['records'][2]['teamRecords'][i]['team']['name'];
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
	}
});
