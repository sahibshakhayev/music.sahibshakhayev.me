-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 15 2021 г., 12:01
-- Версия сервера: 5.5.45
-- Версия PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `music`
--

-- --------------------------------------------------------

--
-- Структура таблицы `songs`
--

CREATE TABLE `songs` (
  `TrackName` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ArtistRelease` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `SongFile` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CoverFile` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `LRCFile` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `IsBegin` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `songs`
--

INSERT INTO `songs` (`TrackName`, `ArtistRelease`, `SongFile`, `CoverFile`, `LRCFile`, `IsBegin`) VALUES
('BLUE EYES', 'JONY - BLUE EYES (Single)', '/songs/JONY - Blue Eyes.mp3', '/songs/cover/JONY - BLUE EYES.jpg', '/songs/lrc/JONY - Blue Eyes.lrc', ''),
('Лилии', 'Мот - Лилии (Single)', '/songs/Мот, JONY - Лилии.mp3', '/songs/cover/Мот, JONY - Лилии.jpg', '/songs/lrc/Мот, JONY - Лилии.lrc', ''),
('Mavi Qızılgüllər', 'Orkhan Zeynalli - Yaş Gəlir', '/songs/Orkhan Zeynalli - Mavi Qızılgüllər (feat. Gültəkin).mp3', '/songs/cover/Orkhan Zeynalli - Yaş Gəlir.jpeg', '/songs/lrc/Orkhan Zeynalli - Mavi Qızılgüllər (feat. Gültəkin).lrc', ''),
('eight (Prod.&Feat. SUGA of BTS)', 'IU - eight (Single)', '/songs/IU - eight (Prod.&Feat. SUGA of BTS).mp3', '/songs/cover/IU - eight (Prod.&Feat. SUGA of BTS).jpg', '/songs/lrc/IU - eight (Prod.&Feat. SUGA of BTS).lrc', ''),
('Spring Day', 'BTS - Wings: You Never Walk Alone', '/songs/BTS - Spring Day.mp3', '/songs/cover/BTS - Spring Day.jpg', '/songs/lrc/BTS - Spring Day.lrc', ''),
('Week-end', 'Black M - Alpha, Pt. 1', '/songs/Black M - Week-end.mp3', '/songs/cover/Black M - Week-end.jpg', '/songs/lrc/Black M - Week-end.lrc', ''),
('Gəl Danış (feat. Elşad Xose)', 'Röya - Feat.', '/songs/Röya - Gəl Danış (feat. Elşad Xose).mp3', '/songs/cover/Röya - Gəl Danış (feat. Elşad Xose).jpg', '/songs/lrc/Röya - Gəl Danış (feat. Elşad Xose).lrc', ''),
('Wide Awake', 'Katy Perry - Teenage Dream: The Complete Confection', '/songs/Katy Perry - Wide Awake.mp3', '/songs/cover/Katy Perry - Wide Awake.jpg', '/songs/lrc/Katy Perry - Wide Awake.lrc', ''),
('Life Goes On', 'BTS - Be', '/songs/BTS - Life Goes On.mp3', '/songs/cover/BTS - Life Goes On.jpg', '/songs/lrc/BTS - Life Goes On.lrc', ''),
('Blueming', 'IU - Love Poem (EP)', '/songs/IU - Blueming.mp3', '/songs/cover/IU - Blueming.png', '/songs/lrc/IU - Blueming.lrc', ''),
('Deyin Ona (feat. Samir)', 'Röya - Feat.', '/songs/Röya - Deyin Ona (feat. Samir).mp3', '/songs/cover/Röya - Deyin Ona (feat. Samir).jpg', '/songs/lrc/Röya - Deyin Ona (feat. Samir).lrc', ''),
('Kef Chilini', 'LADANIVA - Kef Chilini (Single)', '/songs/LADANIVA - Kef Chilini.mp3', '/songs/cover/LADANIVA - Kef Chilini.jpg', '/songs/lrc/LADANIVA - Kef Chilini.lrc', ''),
('Esti Iubibila', 'Taxi - 15', '/songs/Taxi - Esti Iubibila.mp3', '/songs/cover/Taxi - Esti Iubibila.jpg', '/songs/lrc/Taxi - Esti Iubibila.lrc', ''),
('Meyvələr', 'İradə İbrahimova - Meyvələr (Single)', '/songs/İradə İbrahimova - Meyvələr.mp3', '/songs/cover/İradə İbrahimova - Meyvələr.jpg', '/songs/lrc/İradə İbrahimova - Meyvələr.lrc', 'Yes'),
('Vaaste', 'Dhvani Bhanushali, Nikhil D’Souza - Vaaste (Single)', '/songs/Dhvani Bhanushali, Nikhil D’Souza  - Vaaste.mp3', '/songs/cover/Dhvani Bhanushali, Nikhil D’Souza  - Vaaste.jpeg', '/songs/lrc/Dhvani Bhanushali, Nikhil D’Souza  - Vaaste.lrc', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
