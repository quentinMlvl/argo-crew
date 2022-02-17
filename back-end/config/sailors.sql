-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 17 Février 2022 à 23:09
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `argo_crew_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `sailors`
--

CREATE TABLE IF NOT EXISTS `sailors` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` set('CANDIDATE','CAPTAIN','SAILOR','LIEUTENANT') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CANDIDATE',
  `age` int(255) NOT NULL DEFAULT '18',
  `fight_lvl` int(4) NOT NULL DEFAULT '0',
  `swim_lvl` int(4) NOT NULL DEFAULT '0',
  `lead_lvl` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Contenu de la table `sailors`
--

INSERT INTO `sailors` (`id`, `name`, `role`, `age`, `fight_lvl`, `swim_lvl`, `lead_lvl`) VALUES
(1, 'Jason', 'CAPTAIN', 24, 4, 4, 4),
(2, 'Castor', 'LIEUTENANT', 45, 2, 3, 4),
(3, 'Pollux', 'LIEUTENANT', 30, 4, 3, 2),
(5, 'Nobody', 'CANDIDATE', 18, 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
