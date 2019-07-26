let stats;
let baseURL = 'http://statsapi.web.nhl.com/api/v1/teams/';
let teamSelector = '/roster';

function buttonLink() {
	userInput = document.getElementById('searchField').value;
	teamsArray = ['Buffer', 'Devils', 'Islanders', 'Rangers', 'Flyers', 'Penguins',
	'Bruins', 'Sabres', 'Canadiens', 'Senators', 'Leafs', 'Buffer','Hurricanes', 'Panthers', 
	'Lightning', 'Capitals', 'Blackhawks', 'Red Wings', 'Predators', 'Blues', 'Flames', 
	'Avalanche', 'Oilers', 'Canucks', 'Ducks', 'Stars', 'Kings', 'Buffer', 'Sharks', 
	'Blue Jackets', 'Wild'];
	if(teamsArray.indexOf(userInput) == -1 ){
		alert("Please enter a valid NHL team (then again, are the Blackhaws really valid?)")
	}
	teamsArray.forEach(nhlTeam => {
		if(nhlTeam === userInput){
			let urlParam = teamsArray.indexOf(nhlTeam)
			urlParam = urlParam.toString()
			loadAPI(urlParam)
		}	
	});

}
function loadAPI(userTeam) {
	let completeUrl = baseURL + userTeam + teamSelector;
	console.log(userTeam)
	console.log(completeUrl)

	 $.ajax({
	 	type: "GET",
	 	url: completeUrl,
	 	async: false,
		 success: function(completeUrl){
			for(i = 0; i < completeUrl['roster'].length; i++){
			myPlayer = completeUrl['roster'][i]['person']['fullName']
			console.log(myPlayer);
			$('.rightContainerInfo').html(myPlayer);
			// document.getElementById("rightContainerInfo").innerHTML = myPlayer;
		}
	 }
	})
	}
