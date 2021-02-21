
SET sql_notes = 0;
CREATE TABLE IF NOT EXISTS `author` (
  `idAuthor` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `jobTitle` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAuthor`)
) ;
CREATE TABLE IF NOT EXISTS `article` (
  `idArticle` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `body` varchar(45) DEFAULT NULL,
  `likes` int DEFAULT NULL,
  `comments` varchar(45) DEFAULT NULL,
  `authorIdAuthor` int DEFAULT NULL,
  PRIMARY KEY (`idArticle`),
  FOREIGN KEY (authorIdAuthor) REFERENCES author(idAuthor)
) ;
SET sql_notes = 1;