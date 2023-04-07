function characters() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://rickandmortyapi.com/api/character', true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			let data = JSON.parse(xhr.responseText);
			let html = '';
			data.results.forEach(function(character) {
				html += '<div class="character-card">';
				html += '<a href="character.html?id=' + character.id + '">';
				html += '<img src="' + character.image + '" alt="' + character.name + '">';
				html += '<h3>' + character.name + '</h3>';
				html += '</a>';
				html += '</div>';
			});
			document.getElementById('characters').innerHTML = html;
		}
	};
	xhr.send();
};


function characterDetails() {
	let urlParams = new URLSearchParams(window.location.search);
	let param = urlParams.get('id');
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://rickandmortyapi.com/api/character/' + param, true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			let data = JSON.parse(xhr.responseText);
			let html = '';
			html += '<h2>' + data.name + '</h2>';
			html += '<img src="' + data.image + '" alt="' + data.name + '">';
			html += '<p>Статус: ' + data.status + '</p>';
			html += '<p>Вид: ' + data.species + '</p>';
			html += '<p>Тип: ' + data.type + '</p>';
			html += '<p>Пол: ' + data.gender + '</p>';
			html += '<p>Происхождение: ' + data.origin.name + '</p>';
			html += '<p>Местоположение: ' + data.location.name + '</p>';
			document.getElementById('characterDetails').innerHTML = html;
		}
	};
	xhr.send();
}


if (document.title === 'Characters') {
	characters();
} else if (document.title === 'Character details') {
    characterDetails();
}