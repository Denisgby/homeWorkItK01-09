var goButton = document.getElementById('make-changes');
goButton.onclick = function () {
	// тому что слева, мы присваиваем то, что что справа 
	var firstNameId = 'first-name';
	// = это оператор присваивания ... то есть то что слева (переменная), ей присваивается значение справа. 
	var firstNameEl = document.getElementById(firstNameId);

	// а можно не создавать отдельную переменную для id и сразу передавать значение id в метод getElementById
	var lastNameEl = document.getElementById('last-name');
	var addressEl = document.getElementById('address')
	var citiesEl = document.getElementById('cities')
	var hobbiesEl = document.getElementById('hobbies');
	var avatarWrapperEl = document.getElementById('avatar-wrapper');
	var avatarEl = document.getElementById('avatar');
	var buttonEl = document.getElementById('make-changes')
	// то это значит, что firstNameEl.value приобретёт новое значение 'Andrey'  
	firstNameEl.value = 'Andrey';
	lastNameEl.value = 'Zbanov'
	addressEl.value = 'kirovsk'
	hobbiesEl.value = '1.html 2.css 3.JS'
	citiesEl.value = 'kiev'
	//avatarEl.src ='https://social-network.samuraijs.com/Content/1CSS/img/mc-avatar.png'
	avatarWrapperEl.innerHTML = '<h1>fuck fuck fuck you all kresh <h1/> <br/>  '
	buttonEl.className = 'buttonClass classTest'
	buttonEl.clientWidth = '500px'
}

















/*
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
var adresE1 = document.getElementById('address')
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
*/

