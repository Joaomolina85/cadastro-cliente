/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 10.4.24-MariaDB : Database - produto_cadastro
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`produto_cadastro` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `produto_cadastro`;

/*Table structure for table `cadastro` */

DROP TABLE IF EXISTS `cadastro`;

CREATE TABLE `cadastro` (
  `Id` int(10) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(250) DEFAULT NULL,
  `Senha` varchar(250) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Nascimento` date DEFAULT NULL,
  `Telefone` varchar(50) DEFAULT NULL,
  `cpf` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `cadastro` */

insert  into `cadastro`(`Id`,`Nome`,`Senha`,`Email`,`Nascimento`,`Telefone`,`cpf`) values 
(7,NULL,NULL,NULL,NULL,NULL,NULL),
(8,'Bruno','senha123','joao@example.com','1999-04-13',NULL,'507.900.800-76');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
