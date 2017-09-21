-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 21 2017 г., 22:55
-- Версия сервера: 5.7.13
-- Версия PHP: 5.5.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `corporationDB`
--

-- --------------------------------------------------------

--
-- Структура таблицы `corporation`
--

CREATE TABLE IF NOT EXISTS `corporation` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `income` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `corporation`
--

INSERT INTO `corporation` (`id`, `name`, `income`, `parent_id`) VALUES
(1, 'Apple', 0, 0),
(2, 'Desktop Computers', 500, 1),
(3, 'Apple I', 120, 2),
(4, 'Apple II', 210, 3),
(5, 'Apple II GS', 110, 3),
(6, 'Apple Lisa', 150, 3),
(7, 'Performa', 100, 3),
(8, 'Macintosh', 200, 2),
(9, 'Macintosh TV', 210, 8),
(10, 'Macintosh Classic', 220, 8),
(11, 'Power Macintosh', 310, 8),
(12, 'Power Mac G3', 180, 11),
(13, 'Power Mac G4', 215, 11),
(14, 'Power Mac G5', 310, 11),
(15, 'eMac', 320, 2),
(16, 'Mac mini', 150, 15),
(17, 'iMac', 300, 2),
(18, 'iMac Pro', 400, 17),
(19, 'Mac Pro', 200, 17),
(20, 'iPad', 0, 1),
(21, 'iPad mini', 100, 20),
(22, 'iPad mini 2', 120, 21),
(23, 'iPad mini 3', 185, 21),
(24, 'iPad mini 4', 140, 21),
(25, 'HTC', 0, 0),
(26, 'Phone', 0, 25),
(27, 'HTC U11', 100, 26),
(28, 'HTC U Ultra', 120, 26),
(29, 'HTC 10', 310, 27),
(30, 'HTC One X10', 160, 29),
(31, 'HTC One M9+', 110, 30),
(32, 'HTC Desire 650', 150, 31),
(33, 'HTC Desire 830 dual sim', 200, 28),
(34, 'HTC Desire 628', 160, 30),
(35, 'HTC Desire 728', 230, 29);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `corporation`
--
ALTER TABLE `corporation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `corporation`
--
ALTER TABLE `corporation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
