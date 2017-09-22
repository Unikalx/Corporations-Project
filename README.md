# Corporations-Project

<ul>
	<li>
		Установка</li>
	<li>
		Инструкция</li>
</ul>
<h3><strong>Установка</strong></h3>
<hr>
<h4>
	1.) Скачиваем репозиторий и распаковываем.</h4>
<h4>
	2.) Устанавливаем node.js&nbsp;</h4>
<p>
	Я не буду объяснять как это делать ведь уже все рассказали до меня</p>
<p>
	Вот ресурсы:</p>
<p>
	https://nodejs.org/uk/</p>
<p>
	https://learn.javascript.ru/ajax-nodejs</p>
<h4>
	3.) Устанавливаем все модули к node.js:</h4>
<pre>
<code>
npm install
</code>
</pre>
 
 <h4>4.) Устонавливаем MSQL</h4>
 
 <p>Вот ресурс:</p>
 
 https://losst.ru/ustanovka-mysql-ubuntu-16-04
 
<h4>5.) Открываем server.js ищем функцию connectionsDB() и прописываем подключения к базе данных, лично я подключился к локальной базе Open Server</h4>
http://joxi.ru/4AkLPDDUMVELVr
<p>Вот ресурсы:</p>
<p>https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-and-reset-a-root-password-in-mysql</p>
<p>https://www.npmjs.com/package/mysql</p>
<p>https://www.w3schools.com/nodejs/nodejs_mysql.asp</p>
	
	 
<h4>6.) Экспортируем corporationDB в базу данных</h4> 
<p>Вот ресуср:</p>
<p>http://dev-mark.blogspot.com/2012/11/ubuntu-mysql.html</p>
<h4>7.) Запускаем файл server.js через node.js</h4>
	
	
<pre><code>node server.js
npm run start
</code></pre>

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
http://18.221.11.133:8080/corporation
	
<!--<p>Для более удобного скрола используйте комбинацию shift + колесико мышки</p>
