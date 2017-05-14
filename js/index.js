const createDefElements = () => {
	const elemCode = [65,83,68,70,71,72,74,75,76];

	for (let i = 0; i < elemCode.length; i++) {

		let li = document.createElement('li');
			li.setAttribute('data-key', elemCode[i]);
			li.className = 'alert';
			li.innerHTML = String.fromCharCode(elemCode[i]);

		list.appendChild(li);	
	}
}

addEventListener('keydown', (event) => {
	 const btns = document.querySelectorAll('ul>li');

	for (let i = 0; i < btns.length; i++) {
		let elemCode = btns[i].dataset.key;
		
		if (event.keyCode == elemCode) {
			let audio = new Audio(`audio/audio${i}.wav`);
				audio.load();
				audio.play();

			console.log(`${elemCode}-${i}`);
			btns[i].className = 'btn';	
		}
	}
});

addEventListener('keyup', (event) => {
	const btns = document.querySelectorAll('ul>li');

	for (let i = 0; i < btns.length; i++) {
		btns[i].className = 'alert';
	}
});

createDefElements();