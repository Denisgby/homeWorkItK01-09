// console.log()---выводим инфу в консоль
	// window.alert()--выводим инфу в  алерт

	// находим элемент по айдишнику и  результат (найденный элемент) присваиваем переменной firstNameEl
	var firstNameEl = document.getElementById('first-name');
	// выводим в консоль значение атрибута value у найденного элемента	
	console.log(firstNameEl.value);
	//выводим в консоль значения атрибута class для найденного  firstNameEl
	console.log(firstNameEl.className);
	//выводим в консоль значение атрибута value в элементе input  c ID = last-name 
	var lastNameE1 = document.getElementById('last-name');
	console.log(lastNameE1.value);
	//выводим в консоль значение атрибута value в элементе input c ID = adres
	var adresE1 = document.getElementById('adres')
	console.log(adresE1.value)
	//выводим в консоль значение атрибута value в элементе select c ID = selectAdres 
	var selectAdresE1 = document.getElementById('selectAdres')
	console.log(selectAdresE1.value)
	//выводим в консоль значение атрибута value в элементе textarea c ID = textHobby
	var textHobbyE1 = document.getElementById('textHobby')
	console.log(textHobbyE1.value)
	//выводим в консоль значение атрибута value в элементе img c ID = imgMyFoto, -----ошибка undefined т.к 
	// value принимает только значения каторые можно ввести иливыбрать.
	var imgMyFotoE1 = document.getElementById('imgMyFoto')
	console.log(imgMyFotoE1.value)
	//выводим в консоль значение innerHTML в элементе select c ID = selectAdres 
	var selectAdresE1 = document.getElementById('selectAdres')
	console.log(selectAdresE1.innerHTML)
	//выводим в консоль значение атрибута alt в элементе img c ID = imgMyFoto
	var imgMyFotoE1 = document.getElementById('imgMyFoto')
	console.log(imgMyFotoE1.alt)
	//выводим в консоль значение атрибута src в элементе img c ID = imgMyFoto
	var imgMyFotoE1 = document.getElementById('imgMyFoto')
	console.log(imgMyFotoE1.src)


