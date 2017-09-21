# Corporations-Project

<ul>
	<li>
		Установка</li>
	<li>
		Инструкция</li>
</ul>
<p style="text-align: center;">
	<span style="font-size:16px;"><strong>Установка</strong></span></p>
<p>
	1.) Скачиваем репозиторий и распаковываем.</p>
<p>
	2.) Устанавливаем node.js&nbsp;</p>
<p>
	Я не буду объяснять как это делать ведь уже все рассказали до меня</p>
<p>
	Вот ресурсы:</p>
<p>
	https://nodejs.org/uk/</p>
<p>
	https://learn.javascript.ru/ajax-nodejs</p>
<p>
	3.) Устанавливаем все модули к node.js:</p>
<ul>
	<li>
		npm install express --save</li>
	<li>
		npm install body-parser &nbsp;--save</li>
	<li>
		npm install mysql &nbsp;--save</li>
	<li>
		npm install ejs &nbsp;--save</li>
	<li>
		npm install path &nbsp;--save</li>
</ul>
http://joxi.ru/YmEgQddfZLz7xA
 
<p>
	4.) Открываем server.js ищем функцию connectionsDB() и прописываем подключения к базе данных, лично я подключился к локальной базе Open Server и Экспортируем corporationDB в базу данных</p>
http://joxi.ru/4AkLPDDUMVELVr
<p>
	Вот ресурсы:</p>
<p>
	https://ospanel.io/download/</p>
<p>
	https://www.npmjs.com/package/mysql</p>
<p>
	https://www.w3schools.com/nodejs/nodejs_mysql.asp</p>

<p>
	5.) Запускаем файл server.js через node.js &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$ node server.js</p>
	http://joxi.ru/bmoRPeeTMlv1Gr
<p>
	Если есть подключеник к базе должно все заработать.</p>
	http://joxi.ru/krDgVWWf0dz9bA
	
<p style="text-align: center;">
	<span style="font-size:16px;"><strong>Инструкция</strong></span></p>
	
	
<p>
	Есть 3 основных действия это&nbsp;</p>
<ul>
	<li>
		Добавить</li>
	<li>
		Редактировать</li>
	<li>
		Удалить</li>
</ul>
<p>Что бы вызвать меню изменения элемента нажмите ПКМ на тот элемент который нужно изменить</p>
	http://joxi.ru/E2p3PDDhBjMDpm
<p>Есть валидация на добавления и редактирование, на имя меньше одной буквы, на цену меньше 0 и не больше 9999</p>
	http://joxi.ru/zANMRXXclwzn72
<p>Что бы добавить Главною корпорацию нажмите на кнопку &quot;Добавить&quot; в верхнем левом углу</p>
<p>Перерасчёт суммы дочерних корпораций происходит автоматически</p>
http://joxi.ru/GrqlPDDUNbdDWA
	
<p>Есть меню, с помощю которой можно переходить по главным корпорациями</p>
	http://joxi.ru/MAjdPDDTvYKDbm
<p>Для более удобного скрола используйте комбинацию shift + колесико мышки</p>
