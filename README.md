# Corporations-Project

<ul>
	<li>
		Установка</li>
	<li>
		Инструкция</li>
</ul>
<h3><strong>Установка</strong></h3>
<hr>
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
<pre>
<code>
npm install
</code>
</pre>
 
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
	5.) Запускаем файл server.js через node.js </p>
	<pre>
<code>
node server.js
npm run start
</code>
</pre>

<p>
	Если есть подключеник к базе должно все заработать.</p>
<h3><strong>Инструкция</strong></h3>	
<hr>

	
	
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
http://joxi.ru/GrqlPDDUNbdDWA


<p>Перерасчёт суммы дочерних корпораций происходит автоматически</p>

	
<p>Есть меню, с помощю которой можно переходить по главным корпорациями</p>
	http://joxi.ru/MAjdPDDTvYKDbm
	
<h2>Вот рабочий вариант приложения</h2>

	http://18.221.161.133:8080/corporation
<!--<p>Для более удобного скрола используйте комбинацию shift + колесико мышки</p>
