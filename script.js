window.onload = function(){
	let gameContainer =document.getElementById('game');
	let count = 1; // змінна лічильник (рахуєм кількість кліків)
	let endGame = false; // зміна для збереження статуса гри

	// Ініціалізація гри
	initGame();

	// Відслідковуємо кліки в контейнері game
	gameContainer.onclick = function(event){
		console.log(event);
		makeMove(event); // Робимо хід на вільній клітинці
	}


	// Ініціалізація гри, створюємо 9 клітинок поля
	function initGame(){
		for (let i=0; i<9; i++) {
			gameContainer.innerHTML+='<div class="block space"></div>';
		}
	}

	// Робимо хід на вільній клітинці
	function makeMove(event){
		let symbol = '';

		if (event.target.className === 'block space'){
			if (count%2 == 0) 
				symbol = 'x';
			else 
				symbol = '0';
			
			event.target.innerHTML = symbol;
			event.target.className = 'block';
			
			if (count > 4){
		        checkWinner(); // перевірка переможця 
			}

		    count++; // збвльшуємо лічильник на 1
		}
	}


	function checkWinner(){
		let allblock = document.getElementsByClassName('block');
		// console.log(allblock);

		// Перемогли хрестики!
		if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') resultGame('Перемогли хрестики!');
		if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') resultGame('Перемогли хрестики!');
		if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') resultGame('Перемогли хрестики!');
		if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') resultGame('Перемогли хрестики!');
		if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') resultGame('Перемогли хрестики!');
		if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') resultGame('Перемогли хрестики!');
		if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') resultGame('Перемогли хрестики!');
		if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') resultGame('Перемогли хрестики!');

		// Перемогли нолики!
		if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') resultGame('Перемогли нолики!');
		if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') resultGame('Перемогли нолики!');
		if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') resultGame('Перемогли нолики!');
		if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') resultGame('Перемогли нолики!');
		if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') resultGame('Перемогли нолики!');
		if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') resultGame('Перемогли нолики!');
		if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') resultGame('Перемогли нолики!');
		if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') resultGame('Перемогли нолики!');
	
		// Нічия!
		if (count == 9 && endGame == false)  resultGame('Нічия!');
	}

	function resultGame(text){
			alert(text);
			location.reload(); //перезавантаження веб-сторінки з поточною URL адресою
			endGame = true;
	}

}
