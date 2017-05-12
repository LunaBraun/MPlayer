function createDefElements() {
	const elemCode = [65,83,68,70,71,72,74,75,76];

	for (var i = 0; i < elemCode.length; i++) {

		var li = document.createElement('li');
			li.setAttribute('data-key', elemCode[i]);
			li.className = 'alert';
			li.innerHTML = String.fromCharCode(elemCode[i]);

		list.appendChild(li);	
	}
}

document.addEventListener('keydown', (event) => {
	var btns = document.querySelectorAll('ul>li');

	for (var i = 0; i < btns.length; i++) {
		var elemCode = btns[i].dataset.key;
		
		if (event.keyCode == elemCode) {
			var audio = new Audio('audio/audio' + i + '.wav');
				audio.load();
				audio.play();

			console.log(elemCode + ' - ' + i);
			btns[i].className = 'btn';	
		}
	}
});

document.addEventListener('keyup', (event) => {
	var btns = document.querySelectorAll('ul>li');

	for (var i = 0; i < btns.length; i++) {
		btns[i].className = 'alert';
	}
});

createDefElements();