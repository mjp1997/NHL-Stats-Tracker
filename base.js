let stats;
//Oskar Sundquist = 8476897
let baseURL = 'http://statsapi.web.nhl.com/api/v1/teams/';
let teamSelector = '/roster';

function buttonLink() {
	linkButton = document.getElementById(searchField);
	console.log(linkButton)
	// linkButton.onclick(loadAPI);
	// userInput = getElementById(searchField);
}
function loadAPI() {
	let url = baseURL + userInput.value() + teamSelector;
	loadJSON(url, retrieveData);
}
function retrieveData(data) {
	stats = data;
}