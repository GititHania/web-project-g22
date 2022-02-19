CREATE DATABASE  IF NOT EXISTS `group22` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `group22`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: group22
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `topic` varchar(255) DEFAULT NULL,
  `msg` varchar(750) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'sdad sad ','afdafsd@gmail.com','1234567890','ew','העוגיות ממש טעיממות אבל אם היה אפשר להוסיף גם עוגיות לאלרגנים זה יהיה מעולה!'),(2,'sdad sad ','afdafsd@gmail.com','1234567890','ew','העוגיות ממש טעיממות אבל אם היה אפשר להוסיף גם עוגיות לאלרגנים זה יהיה מעולה!');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookies`
--

DROP TABLE IF EXISTS `cookies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookies` (
  `CookieID` int NOT NULL AUTO_INCREMENT,
  `Base` varchar(255) NOT NULL,
  `Topping` varchar(255) NOT NULL,
  `Price` varchar(255) NOT NULL,
  `ImgSrc` varchar(255) NOT NULL,
  `Class` varchar(255) NOT NULL,
  PRIMARY KEY (`CookieID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookies`
--

LOCK TABLES `cookies` WRITE;
/*!40000 ALTER TABLE `cookies` DISABLE KEYS */;
INSERT INTO `cookies` VALUES (1,'שוקולד חלב','קינדר','10','cookieCard/imgs/Kinder.JPG','Milk'),(2,'שוקולד חלב','אגוזי לוז','10','cookieCard/imgs/Hazelnut.JPG','Milk'),(3,'שוקולד חלב','אוריאו','10','cookieCard/imgs/Oreo.JPG','Milk'),(4,'שוקולד מריר','קינדר','10','cookieCard/imgs/Kinder.JPG','Dark'),(5,'שוקולד מריר','אוריאו','10','cookieCard/imgs/Oreo.JPG','Dark'),(6,'שוקולד מריר','M&M','10','cookieCard/imgs/M&M.JPG','Dark'),(7,'שוקולד לבן','קינדר','10','cookieCard/imgs/Kinder.JPG','White'),(8,'שוקולד לבן','אוריאו','10','cookieCard/imgs/Oreo.JPG','White'),(9,'שוקולד לבן','אגוזי לוז','10','cookieCard/imgs/Hazelnut.JPG','White'),(10,'שוקולד לבן','M&M','10','cookieCard/imgs/M&M.JPG','White'),(11,'שוקולד לבן','פיסטוקים','10','cookieCard/imgs/Pistachio.JPG','White');
/*!40000 ALTER TABLE `cookies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit_cards`
--

DROP TABLE IF EXISTS `credit_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credit_cards` (
  `Number` varchar(12) NOT NULL,
  `CCV` int NOT NULL,
  `Expire_Date` date NOT NULL,
  `PayerID` int NOT NULL,
  `Valid` bit(1) NOT NULL,
  `CustomerEmail` varchar(255) NOT NULL,
  PRIMARY KEY (`Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit_cards`
--

LOCK TABLES `credit_cards` WRITE;
/*!40000 ALTER TABLE `credit_cards` DISABLE KEYS */;
INSERT INTO `credit_cards` VALUES ('147853269987',147,'2024-02-01',147852369,_binary '','adasd@gmail.com');
/*!40000 ALTER TABLE `credit_cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `PhoneNumber` varchar(10) NOT NULL,
  `Points` int DEFAULT '0',
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('adasd@gmail.com','123456','asd dasd ','1234456787',14),('asd@gmail.com','111111',' d dddd','2131231231',12),('asdf@gmail.com','123456','zxc aSd','1234567890',0),('gaa@gmail.com','asasas','asda asd','1478521693',15),('sda@gmail.com','aaa','mai jh','0215563254',0),('we@sdfc.dc','123456','dsf asdf','1234567893',0);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `OrderId` int NOT NULL AUTO_INCREMENT,
  `SubmittedDT` datetime DEFAULT CURRENT_TIMESTAMP,
  `Address-Street` varchar(45) DEFAULT NULL,
  `Address-City` varchar(45) DEFAULT NULL,
  `Address-House` int DEFAULT NULL,
  `CustomerEmail` varchar(255) DEFAULT NULL,
  `Cost` int DEFAULT NULL,
  PRIMARY KEY (`OrderId`),
  KEY `CustomerEmail_idx` (`CustomerEmail`),
  CONSTRAINT `CustomerEmail` FOREIGN KEY (`CustomerEmail`) REFERENCES `customers` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,'2022-02-17 19:58:15','הבנים','אשדוד',34,'sda@gmail.com',45);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packs`
--

DROP TABLE IF EXISTS `packs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packs` (
  `PackID` int NOT NULL AUTO_INCREMENT,
  `Size` int NOT NULL,
  `Price` int NOT NULL,
  `ImgSrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PackID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packs`
--

LOCK TABLES `packs` WRITE;
/*!40000 ALTER TABLE `packs` DISABLE KEYS */;
INSERT INTO `packs` VALUES (1,6,50,'cookieCard/imgs/6pack.JPG'),(2,12,105,'cookieCard/imgs/12pack.JPG');
/*!40000 ALTER TABLE `packs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qa`
--

DROP TABLE IF EXISTS `qa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qa` (
  `num` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qa`
--

LOCK TABLES `qa` WRITE;
/*!40000 ALTER TABLE `qa` DISABLE KEYS */;
INSERT INTO `qa` VALUES (1,'מהי עלות המשלוח?','עלות המשלוח תלויה בסניף שממנו המשלוח יוצא, וזה יהיה הסניף הנמצא הבעירך. '),(2,'כמה זמן משלוח?','את ההזמנה לוקח להכין בערך רבע שעה, המשלוח עצמו לוקח בין 10 דקות ל40 דקות (תלוי במיקום והאם הכתובת היא באותה העיר)'),(3,'איזה סוגי עוגיות ניתן להזמין ?','ניתן להזמין עוגיה בודדה או מארז עוגיות , ניתן לבחור על בסיס שוקולד מריר/חלב/לבן'),(4,'האם קיים עוגיות לאלרגיים?','לצערנו לא :\\ בהמשך נוציא קולקציה מיוחדת לאלרגיים לאגוזים.. מתנצלים');
/*!40000 ALTER TABLE `qa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `storeID` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `num` int DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `del_cost` int DEFAULT '10',
  PRIMARY KEY (`storeID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES (2,'תלאביב','רוגוזין',23,'0521478963',15),(3,'נתניה','שדרות ניצה',6,'0509887864',15),(4,'אשדוד','פלונטין',14,'054323451',13),(5,'אילת','מול הים',104,'0502887619',20),(6,'חיפה','הברבור',18,'0524252321',18),(7,'חדרה','רחבעם זאבי',10,'054901004',10),(8,'הרצליה','בן גוריון',66,'0509226210',12),(9,'ירושלים','הנביאים',23,'052225243',15);
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suggestions`
--

DROP TABLE IF EXISTS `suggestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suggestions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `custEmail` varchar(255) DEFAULT NULL,
  `base` varchar(255) DEFAULT NULL,
  `tooping` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `votes` int DEFAULT '0',
  `sub_date` date NOT NULL DEFAULT (curdate()),
  PRIMARY KEY (`id`),
  KEY `cust_idx` (`custEmail`),
  CONSTRAINT `cust` FOREIGN KEY (`custEmail`) REFERENCES `customers` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suggestions`
--

LOCK TABLES `suggestions` WRITE;
/*!40000 ALTER TABLE `suggestions` DISABLE KEYS */;
INSERT INTO `suggestions` VALUES (1,'sda@gmail.com','שוקולד רובי','פקאנים','',1,'2022-01-16'),(2,'sda@gmail.com','שוקולד רובי','קוקוס','',0,'2022-01-17'),(3,'sda@gmail.com','ווניל','קוקוס','',1,'2022-01-23'),(4,'sda@gmail.com','שוקולד רובי','M&M','אפשר גם ציפוי של שוקולד לבן בבקשה?',0,'2022-02-16'),(5,'sda@gmail.com','שוקולד לבן','צימוקים','אם אפשר להוסיף גם מקורונים',2,'2022-01-01'),(6,'sda@gmail.com','שוקולד רובי','פקאנים','',0,'2022-02-19');
/*!40000 ALTER TABLE `suggestions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-19 15:11:49
