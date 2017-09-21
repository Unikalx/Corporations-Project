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
	1.) Скачиваем репозиторийи распаковываем.</p>
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
[alt text](http://joxi.ru/YmEgQddfZLz7xA)
 
<p>
	4.) Открываем server.js ищем функцию connectionsDB() и прописываем подключения к базе данных, лично я подключился к локальной базе Open Server</p>
<p>
	Вот ресурсы:</p>
<p>
	https://ospanel.io/download/</p>
<p>
	https://www.npmjs.com/package/mysql</p>
<p>
	https://www.w3schools.com/nodejs/nodejs_mysql.asp</p>
<p>
	5.) Экспортим corporationDB в базу данных</p>
<p>
	6.) Запускаем файл server.js через node.js &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$ node server.js</p>
<p>
	Если есть подключеник к базе должно все заработать.</p>
