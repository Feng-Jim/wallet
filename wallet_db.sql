/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.53 : Database - wallet
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wallet` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `wallet`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `aid` int(10) NOT NULL AUTO_INCREMENT,
  `username` bigint(20) NOT NULL,
  `password` int(10) NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `admin` */

insert  into `admin`(`aid`,`username`,`password`) values (1,15915719715,123);

/*Table structure for table `bankcard` */

DROP TABLE IF EXISTS `bankcard`;

CREATE TABLE `bankcard` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `card_number` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT '6222600260001072444',
  `card_balance` float NOT NULL DEFAULT '10000',
  `card_username` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT '张三',
  `card_bank` varchar(10) COLLATE utf8_bin NOT NULL DEFAULT '交通银行',
  `uid` int(10) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `bankcard` */

insert  into `bankcard`(`cid`,`card_number`,`card_balance`,`card_username`,`card_bank`,`uid`) values (1,'6222600260001072444',10000,'张三','交通银行',2147483647),(2,'6222600260001072444',10000,'张三','交通银行',0),(3,'6222600260001072444',10000,'张三','交通银行',113),(4,'6222600260001072444',4687,'张三','交通银行',114),(5,'6222021001116245702',-495000,'风神股','工商银行',24),(6,'6222021001116245702',-501300,'疯疯疯','工商银行',24);

/*Table structure for table `sitedata` */

DROP TABLE IF EXISTS `sitedata`;

CREATE TABLE `sitedata` (
  `did` int(10) NOT NULL AUTO_INCREMENT,
  `login_number` int(10) NOT NULL,
  `user_number` int(10) NOT NULL,
  `transfer_number` int(10) NOT NULL,
  PRIMARY KEY (`did`),
  KEY `uid` (`user_number`),
  KEY `tid` (`transfer_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='网站数据统计表';

/*Data for the table `sitedata` */

insert  into `sitedata`(`did`,`login_number`,`user_number`,`transfer_number`) values (1,74,39,0);

/*Table structure for table `transfer` */

DROP TABLE IF EXISTS `transfer`;

CREATE TABLE `transfer` (
  `tid` int(10) NOT NULL,
  `fid` int(10) NOT NULL,
  `shou_name` varchar(10) COLLATE utf8_bin NOT NULL,
  `uid` int(10) NOT NULL,
  `fa_name` varchar(10) COLLATE utf8_bin NOT NULL,
  `amount` float NOT NULL,
  `shou_card_munber` int(50) NOT NULL,
  `fa_card_munber` int(50) NOT NULL,
  `time` int(20) NOT NULL,
  PRIMARY KEY (`tid`),
  KEY `uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='转账数据表';

/*Data for the table `transfer` */

insert  into `transfer`(`tid`,`fid`,`shou_name`,`uid`,`fa_name`,`amount`,`shou_card_munber`,`fa_card_munber`,`time`) values (0,1,'你好',24,'',200,45464,4566666,4444444),(1,1,'你好',1,'',200,45464,4566666,4444444);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `username` bigint(20) NOT NULL,
  `password` varchar(20) COLLATE utf8_bin NOT NULL,
  `name` varchar(20) COLLATE utf8_bin NOT NULL,
  `email` varchar(20) COLLATE utf8_bin NOT NULL,
  `phone` bigint(20) NOT NULL,
  `region` varchar(10) CHARACTER SET utf8 NOT NULL,
  `imageUrl` varchar(60) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `user` */

insert  into `user`(`uid`,`username`,`password`,`name`,`email`,`phone`,`region`,`imageUrl`) values (14,2147483647,'123','好人','15915713526@qq.com',2147483647,'广州市',NULL),(15,2147483647,'123','好人','15915713526@qq.com',2147483647,'广州市',NULL),(16,2147483647,'123','好人','15915713526@qq.com',2147483647,'广州市',NULL),(17,111111,'11111','15915713526','15915716542@qq.com',2147483647,'深圳市',NULL),(18,111111,'11111','15915713526','15915716542@qq.com',2147483647,'深圳市',NULL),(19,546,'546','2222222','111111@qq.com',15915713526,'深圳市',NULL),(20,546,'546','2222222','111111@qq.com',2147483647,'深圳市',NULL),(22,2147483647,'123','好人','15915716542@qq.com',2147483647,'广州市',NULL),(23,333333,'3333332','东方红','333333@qq.com',15915712654,'上海市',NULL),(24,123,'123','55555555','123@qq.com',15915719777,'上海市','G:\\xampp\\www\\Wallet\\public/..\\public/upload/24.jpg'),(25,15915719777,'15915719777','15915719777','15915719777@qq.com',15915719777,'海北藏族自治州',NULL),(26,15915719777,'15915719777','15915719777','15915719777@qq.com',15915719777,'海北藏族自治州',NULL),(27,15915719777,'15915719777','15915719777','15915719777@qq.com',15915719777,'海北藏族自治州',NULL),(28,15915719777,'15915719777','15915719777','15915719777@qq.com',15915719777,'海北藏族自治州',NULL),(29,1591571999,'1591571999','好人','15915716542@qq.com',15915719799,'广州市',NULL),(30,1591571999,'1591571999','好人','15915716542@qq.com',15915719799,'广州市',NULL),(31,15915799998,'15915799998','15915799998','15915713526@qq.com',15915799998,'沈阳市',NULL),(32,15915799998,'15915799998','15915799998','15915713526@qq.com',15915799998,'沈阳市',NULL),(33,789,'789','789','15915716542@qq.com',15915716542,'北京市',NULL),(34,789,'789','789','15915716542@qq.com',15915716542,'北京市',NULL),(35,789,'789','789','15915716542@qq.com',15915716542,'北京市',NULL),(36,789,'789','789','15915716542@qq.com',15915716542,'北京市',NULL),(37,789,'789','789','15915716542@qq.com',15915716542,'上海市',NULL),(38,789,'789','789','15915716542@qq.com',15915716542,'上海市',NULL),(39,789,'789','789','15915716542@qq.com',15915716542,'广州市',NULL),(40,789,'789','789','15915716542@qq.com',15915716542,'广州市',NULL),(41,789,'789','789','15915716542@qq.com',15915716542,'广州市',NULL),(42,789,'789','789','15915716542@qq.com',15915716542,'广州市',NULL),(43,789,'789','789','15915716542@qq.com',15915716542,'广州市',NULL),(44,789,'789','789','15915716542@qq.com',15915716542,'广州市',NULL),(45,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(46,456789456,'456789456','456789456','15915716542@qq.com',15915716542,'深圳市',NULL),(47,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(48,456789456,'456789456','456789456','15915716542@qq.com',15915716542,'广州市',NULL),(49,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(50,44646489,'44646489','44646489','15915716542@qq.com',15915716542,'广州市',NULL),(51,12345679,'12345679','12345679','12345679@qq.com',15915719159,'北京市',NULL),(52,44444444,'44444444','44444444','15915716542@qq.com',15915716542,'广州市',NULL),(53,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(54,4545545454,'4545545454','4545545454','15915716542@qq.com',15915716542,'广州市',NULL),(55,55555555555555,'123','55555555555555','15915716542@qq.com',15915716542,'广州市',NULL),(56,55555555555555,'123','55555555555555','15915716542@qq.com',15915716542,'广州市',NULL),(57,66666666,'123','66666666','15915716542@qq.com',15915716542,'广州市',NULL),(58,66666666,'123','66666666','15915716542@qq.com',15915716542,'广州市',NULL),(59,66666666,'123','66666666','15915716542@qq.com',15915716542,'北京市',NULL),(60,159157197177,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(61,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(62,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(63,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(64,66666,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(65,666666666666,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(66,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(67,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(68,77777777777777,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(69,7777,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(70,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(71,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(72,7777,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(73,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(74,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(75,88888888888,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(76,999999999999999,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(77,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(78,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(79,333,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(80,987654321,'123','987654321','15915716542@qq.com',15915716542,'广州市',NULL),(81,987654321,'123','15915713526','15915716542@qq.com',15915716542,'广州市',NULL),(82,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(83,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(84,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(85,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(86,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(87,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(88,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(89,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(90,15915719715,'123','15915713526','15915716542@qq.com',15915716542,'广州市',NULL),(91,15915719715,'123','好人','15915713526@qq.com',15915716542,'深圳市',NULL),(92,15915719715,'123','好人','15915713526@qq.com',15915713526,'广州市',NULL),(93,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(94,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(95,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(96,15915719715,'123','好人','15915716542@qq.com',15915716542,'深圳市',NULL),(97,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(98,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(99,15915719715,'123','15915713526','15915716542@qq.com',15915716542,'广州市',NULL),(100,15915719715,'123','15915713526','15915713526@qq.com',15915716542,'深圳市',NULL),(101,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(102,15915719715,'123','好人','15915716542@qq.com',15915716542,'深圳市',NULL),(103,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(104,123456,'123456','好人','15915716542@qq.com',15915716542,'广州市','G:\\xampp\\www\\Wallet\\public/..\\public/upload/104.jpg'),(105,55555555,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(106,15915719711,'123','15915713526','15915716542@qq.com',15915716542,'广州市',NULL),(107,15915719711,'123','东方学学自傲','15915713526@qq.com',15915713526,'深圳市',NULL),(108,15915719715,'123','15915713526','15915716542@qq.com',15915716542,'广州市',NULL),(109,15915719715,'123','好人','15915716542@qq.com',15915716542,'广州市',NULL),(110,15915719715,'123','15915713526','15915716542@qq.com',15915716542,'广州市',NULL),(111,5555555555,'5555555555','源码','5555555555@qq.com',15915719711,'北京市',NULL),(112,666666,'666666','666666','666666@qq.com',15915719711,'北京市',NULL),(113,44444444,'44444444','44444444','44444444@qq.com',15915719711,'南京市',NULL),(114,13044055454,'13044055454','13044055454','13044055454@qq.com',13044055454,'北京市',NULL);

/*Table structure for table `userexpend` */

DROP TABLE IF EXISTS `userexpend`;

CREATE TABLE `userexpend` (
  `acid` int(10) NOT NULL AUTO_INCREMENT,
  `uid` int(10) NOT NULL,
  `type` varchar(10) COLLATE utf8_bin NOT NULL,
  `description` varchar(20) COLLATE utf8_bin NOT NULL,
  `account` int(10) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`acid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='支出表的数据';

/*Data for the table `userexpend` */

insert  into `userexpend`(`acid`,`uid`,`type`,`description`,`account`,`date`) values (8,114,'餐饮','沙发大概',5,'2018-12-04'),(9,114,'日用','电风扇',60,'2018-12-03'),(11,114,'1','股票',500,'2018-12-05'),(12,114,'1','发过火',500,'2018-12-03'),(13,114,'1','愉快',600,'2018-12-03'),(15,114,'餐饮','富商大贾',500,'2018-12-04'),(17,114,'餐饮','建行卡',100,'2018-12-03'),(18,24,'餐饮','牛肉',500,'2019-02-12'),(19,24,'餐饮','10000',10000,'2019-03-13'),(20,24,'购物','500000',500000,'2019-03-13');

/*Table structure for table `userincome` */

DROP TABLE IF EXISTS `userincome`;

CREATE TABLE `userincome` (
  `iid` int(10) NOT NULL AUTO_INCREMENT,
  `uid` int(10) NOT NULL,
  `type` varchar(10) COLLATE utf8_bin NOT NULL,
  `description` varchar(20) COLLATE utf8_bin NOT NULL,
  `account` int(10) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`iid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='收入表数据';

/*Data for the table `userincome` */

insert  into `userincome`(`iid`,`uid`,`type`,`description`,`account`,`date`) values (1,12,'工资','工资',2000,'2018-12-04'),(2,12,'工资','工资',2000,'2018-12-04'),(3,114,'1','炒股票',1000,'2018-12-03'),(5,114,'理财','也同样',500,'2018-12-03'),(7,114,'理财','一会让他',500,'2018-12-03'),(8,114,'理财','是的法规',456,'2018-12-07'),(10,114,'理财','换个',100,'2018-12-06'),(11,24,'工资','工资',2000,'2019-02-12'),(12,24,'理财','答复',500,'2019-03-13'),(13,24,'其他','大师傅',8000,'2019-03-13');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
