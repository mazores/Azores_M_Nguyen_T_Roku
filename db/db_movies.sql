-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 20, 2020 at 02:34 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_arating`
--

CREATE TABLE `tbl_arating` (
  `arating_id` smallint(5) UNSIGNED NOT NULL,
  `arating_name` varchar(125) NOT NULL,
  `arating_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `tbl_arating`
--

INSERT INTO `tbl_arating` (`arating_id`, `arating_name`, `arating_desc`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. Parents urged to give  	&ldquo;parental guidance&rdquo;. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(5, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `comments_id` mediumint(8) UNSIGNED NOT NULL,
  `comments_auth` varchar(125) NOT NULL,
  `comments_copy` text NOT NULL,
  `comments_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

CREATE TABLE `tbl_genre` (
  `genre_id` tinyint(3) UNSIGNED NOT NULL,
  `genre_name` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Comedy'),
(4, 'Crime'),
(5, 'Drama'),
(6, 'Historical'),
(7, 'Horror'),
(8, 'Musical'),
(9, 'Science Fiction'),
(10, 'War'),
(11, 'Western'),
(12, 'Animation'),
(13, 'Family'),
(14, 'Fantasy'),
(15, 'Romance'),
(16, 'Sport');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `movies_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `movies_title` varchar(125) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `decade` varchar(5) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `permission` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_cover`, `movies_title`, `movies_year`, `decade`, `movies_storyline`, `movies_trailer`, `permission`) VALUES
(1, 'Cinderella.png', 'Cinderella', '1950', '1950', 'Cinderella is a 1950 American animated musical fantasy film produced by Walt Disney and originally released by RKO Radio Pictures. Based on the fairy tale of the same name by Charles Perrault, it is the 12th Disney animated feature film. The film was directed by Clyde Geronimi, Hamilton Luske, and Wilfred Jackson.', 'movie1_cinderella.mp4', 'Kid'),
(2, 'Alice.png', 'Alice in Wonderland', '1951', '1950', 'Alice in Wonderland is a 1951 American animated musical fantasy-adventure film produced by Walt Disney Productions and based on the Alice books by Lewis Carroll. The 13th release of Disney\'s animated features, the film premiered in London on July 26, 1951, and in New York City on July 28, 1951. The film features the voices of Kathryn Beaumont as Alice, Sterling Holloway as the Cheshire Cat, Verna Felton as the Queen of Hearts, and Ed Wynn as the Mad Hatter.', 'movie2_AliceInWonderland.mp4', 'Kid'),
(3, 'Witness.png', 'Witness For The Prosecution', '1957', '1950', 'Witness for the Prosecution is a 1957 American film co-adapted and directed by Billy Wilder and starring Tyrone Power, Marlene Dietrich, Charles Laughton, and Elsa Lanchester. The film, which has film noir elements, depicts an English courtroom drama. Set in the Old Bailey in London, the picture is based on the play of the same name by Agatha Christie and deals with the trial of a man accused of murder. The first film adaptation of Christie\'s story, Witness for the Prosecution was adapted for the screen by Larry Marcus, Harry Kurnitz and Wilder. The film received positive reviews and six Academy Award nominations.', 'movie3_witnessForTheProsecution.mp4', 'Parent'),
(4, 'psycho.png', 'Psycho', '2017', '1960', 'Psycho is a 1960 American psychological horror film directed and produced by Alfred Hitchcock, and written by Joseph Stefano. It stars Anthony Perkins, Janet Leigh, John Gavin, Vera Miles, and Martin Balsam, and was based on the 1959 novel of the same name by Robert Bloch. The film centers on an encounter between a secretary, Marion Crane (Leigh), who ends up at a secluded motel after stealing money from her employer, and the motel\'s owner-manager, Norman Bates (Perkins), and its aftermath.', 'movie4_Psycho.mp4', 'Parent'),
(5, 'jungle.png', 'The Jungle Book', '1967', '1960', 'The Jungle Book is a 1967 American animated musical comedy film produced by Walt Disney Productions. Based on Rudyard Kipling\'s book of the same name, it is the 19th Disney animated feature film. Directed by Wolfgang Reitherman, it was the last film to be produced by Walt Disney, who died during its production. The plot follows Mowgli, a feral child raised in the Indian jungle by wolves, as his friends Bagheera the panther and Baloo the bear try to convince him to leave the jungle before the evil tiger Shere Khan arrives.', 'movie5_theJungleBook.mp4', 'Kid'),
(6, 'breakfast.png', 'Breakfast At Tiffanys', '1961', '1960', 'Hepburn\'s portrayal of Holly Golightly as the naïve, eccentric café society girl is generally considered to be one of the actress\'s most memorable and identifiable roles. Hepburn regarded it as one of her most challenging roles, since she was an introvert required to play an extrovert.', 'movie6_breakfastAtTiffanys.mp4', 'Parent'),
(7, 'godfather.png', 'The Godfather', '1972', '1970', 'The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo\'s best-selling novel of the same name. It is the first installment in The Godfather trilogy. It stars Marlon Brando and Al Pacino as the father and son of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of the son Michael Corleone (Pacino), raised to have a life outside of crime, from reluctant family outsider to ruthless mafia boss.', 'movie7_theGodfather.mp4', 'Parent'),
(8, 'cuckoo.png', 'One Flew Over The Cuckoo\'s Nest', '1975', '1970', 'One Flew Over the Cuckoo\'s Nest is a 1975 American comedy-drama film directed by Miloš Forman, based on the 1962 novel One Flew Over the Cuckoo\'s Nest by Ken Kesey and the play version adapted from the novel by Dale Wasserman. The film stars Jack Nicholson as Randle McMurphy, a new patient at a mental institution, and features a supporting cast of Louise Fletcher, William Redfield, Will Sampson, Sydney Lassick, Brad Dourif, Danny DeVito and Christopher Lloyd in his film debut.', 'movie8_oneFlewOverTheCuckoosNest.mp4', 'Parent'),
(9, 'pooh.png', 'The Many Adventures of Winnie the Pooh', '1977', '1970', 'The Many Adventures of Winnie the Pooh is a 1977 American animated musical drama film produced by Walt Disney Productions and distributed by Buena Vista Distribution. It is the 22nd Disney animated feature film and was first released on a double bill with The Littlest Horse Thieves on March 11, 1977.', 'movie9_The Many Adventures of Winnie the Pooh.mp4', 'Kid'),
(10, 'airplane.png', 'Airplane!', '1980', '1980', 'Airplane! was released by Paramount Pictures and was a critical and financial success, grossing $158 million worldwide against a budget of $3.5 million.[8] The film\'s creators received the Writers Guild of America Award for Best Adapted Comedy, and nominations for the Golden Globe Award for Best Motion Picture – Musical or Comedy and for the BAFTA Award for Best Screenplay.', 'movie10_Airplane!.mp4', 'Kid'),
(11, 'popeye.png', 'Popeye', '1980', '1980', 'Popeye is a 1980 American musical comedy film directed by Robert Altman and distributed by Paramount Pictures. It is based on E. C. Segar\'s comics character of the same name. It was written by Jules Feiffer and stars Robin Williams[2] as Popeye the Sailor Man and Shelley Duvall as Olive Oyl. Its story follows Popeye\'s adventures as he arrives in the town of Sweethaven.', 'movie11_popeye.mp4', 'Kid'),
(12, 'ordinaryPeople.png', 'Ordinary People', '1980', '1980', 'The story concerns the disintegration of an upper-middle class family in Lake Forest, Illinois, following the accidental death of one of their two sons and the attempted suicide of the other. The screenplay by Alvin Sargent was based upon the 1976 novel Ordinary People by Judith Guest.', 'movie12_OrdinaryPeople.mp4', 'Parent'),
(13, 'home_alone.png', 'Home Alone', '1990', '1990', 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.', 'movie13_homeAlone.mp4', 'Kid'),
(14, 'pulpFiction.png', 'Pulp Fiction', '1994', '1990', 'Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[5] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.', 'movie14_pulpFiction.mp4', 'Parent'),
(15, 'Titanic.png', 'Titanic', '1997', '1990', 'This spectacular epic re-creates the ill-fated maiden voyage of the White Star Line\'s $7.5 million R.M.S Titanic and the tragic sea disaster of April 15, 1912. Running over three hours and made with the combined contributions of two major studios (20th Century-Fox, Paramount) at a cost of more than $200 million, Titanic ranked as the most expensive film in Hollywood history at the time of its release, and became the most successful. ', 'movie15_Titanic.mp4', 'Parent');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_genre`
--

CREATE TABLE `tbl_mov_genre` (
  `mov_genre_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mov_genre`
--

INSERT INTO `tbl_mov_genre` (`mov_genre_id`, `movies_id`, `genre_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 9),
(4, 2, 1),
(5, 2, 5),
(6, 2, 6),
(7, 2, 10),
(8, 3, 1),
(9, 3, 5),
(10, 3, 9),
(11, 4, 1),
(12, 4, 2),
(13, 4, 5),
(14, 4, 9),
(15, 5, 8),
(16, 5, 13),
(17, 5, 14),
(18, 6, 5),
(19, 6, 6),
(20, 6, 10),
(21, 7, 1),
(22, 7, 2),
(23, 7, 3),
(24, 7, 15),
(25, 8, 5),
(26, 8, 9),
(27, 9, 3),
(28, 9, 5),
(29, 9, 16),
(30, 10, 14),
(31, 10, 2),
(32, 10, 3),
(33, 10, 8),
(34, 10, 13),
(35, 11, 2),
(36, 11, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

CREATE TABLE `tbl_music` (
  `music_id` int(11) NOT NULL,
  `music_cover` varchar(75) NOT NULL,
  `music_title` varchar(125) NOT NULL,
  `music_year` varchar(5) NOT NULL,
  `decade` varchar(5) NOT NULL,
  `music_artist` varchar(125) NOT NULL,
  `music_trailer` varchar(75) NOT NULL,
  `permission` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `music_cover`, `music_title`, `music_year`, `decade`, `music_artist`, `music_trailer`, `permission`) VALUES
(1, 'everybody_loves_somebody.png', 'Put Your Head On My Shoulder', '1959', '1950', 'Paul Anka', 'music1_putYourHeadOnMyShouder.mp4', 'Kid'),
(2, 'return_to_me.png', 'Return to Me', '1958', '1950', 'Dean Martin', 'music2_ReturnToMe.mp4', 'Kid'),
(3, 'Jailhouse_Rock.png', 'Jailhouse Rock', '1957', '1950', 'Elvis Presley', 'music3_JailhouseRock.mp4', 'Kid'),
(4, 'please_mister_postman.png', 'Please Mister Postman', '1961', '1960', 'The Marvelettes', 'music4_PleaseMr.Postman.mp4', 'Kid'),
(5, 'everybody_loves_somebody.png', 'Everybody Loves Somebody', '1965', '1960', 'Dean Martin', 'music5_EverybodyLovesSomebody.mp4', 'Kid'),
(6, 'stand_by_me.png', 'Stand By Me', '1961', '1960', 'Ben E. King', 'music6_standByMe.mp4', 'Kid'),
(7, 'close_to_you.png', 'Close to You', '1970', '1970', 'Carpenters', 'music7_Close To You.mp4', 'Kid'),
(8, 'let_it_be.png', 'Let It Be', '1970', '1970', 'The Beatles', 'music8_LetItBe.mp4', 'Kid'),
(9, 'bohemian_rhapsody.png', 'Bohemian Rhapsody', '1975', '1970', 'Queen', 'music9_BohemianRhapsody.mp4', 'Kid'),
(10, 'never_gonna_give_up.png', 'Never Gonna Give Up', '1987', '1980', 'Rick Astley', 'music12_neverGonnaGiveUp.mp4', 'Kid'),
(11, 'take_on_me.png', 'Take On Me', '1986', '1980', 'aha', 'music10_TakeOnMe.mp4', 'Kid'),
(12, 'Billie_jeans.png', 'Billie Jean', '1983', '1980', 'Michael Jackson', 'music11_BillieJean.mp4', 'Kid'),
(13, 'november_Rain.png', 'November Rain', '1992', '1990', 'Gun n\' Roses', 'music13_novemberRain.mp4', 'Kid'),
(14, 'smell_like_teen_spirit.png', 'Smells Like Teen Spirit', '1991', '1990', 'Nirvana', 'music14_SmellsLikeTeenSpirit.mp4', 'Kid'),
(15, 'say_my_name.png', 'Say My Name', '1999', '1990', 'Destiny\'s Child', 'music15_SayMyName.mp4', 'Kid');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

CREATE TABLE `tbl_tv` (
  `tv_id` int(11) NOT NULL,
  `tv_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `tv_title` varchar(125) NOT NULL,
  `tv_year` varchar(15) NOT NULL,
  `decade` varchar(20) NOT NULL,
  `tv_storyline` text NOT NULL,
  `tv_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `permission` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`tv_id`, `tv_cover`, `tv_title`, `tv_year`, `decade`, `tv_storyline`, `tv_trailer`, `permission`) VALUES
(1, 'show1_Ozzie&Harriet.png', 'Adventures of Ozzie & Harriet', '1952 - 1966', '1950 1960', 'The Adventures of Ozzie and Harriet is a sitcom that aired on ABC from 1952 until 1966 starring the real life Nelson family. After a long run on radio, the show was brought to television where it continued its success, running on both radio and TV for a couple of years. The series attracted large audiences, and although it was never a top-ten hit, it became synonymous with the 1950s ideal American family life. It is the longest-running live-action sitcom in US TV history.', 'show1_Adventures of Ozzie and Harriet.mp4', 'Kid'),
(2, 'show2_Bonanza.png', 'Bonanza', '1959 - 1973', '1950 1960 1970', 'The Cartwright\'s thousand-square-mile Ponderosa Ranch is located near Virginia City, Nevada, site of the Comstock Silver Lode, during and after the Civil War. Each of the sons was born to a different wife of Ben\'s; with none of the mothers still alive. Join Ben (Lorne Greene), Adam (Pernell Roberts), Hoss (Dan Blocker) and Little Joe (Michael Landon) as they rewrite the book on the western genre. These were the days where family values and the fight for justice were backed up by six-guns that always had right on their side.', 'show2_Bonanza.mp4', 'Parent'),
(3, 'show3_ILoveLucy.png', 'I Love Lucy', '1951 - 1957', '1950', 'Lucy Ricardo is the wacky wife of Cuban bandleader Ricky Ricardo. Living in New York, (623 East 68th Street, Aprtment 3-B), Ricky tries to succeed in show business while Lucy -- always trying to help -- usually manages to get in some kind of trouble that drives Ricky crazy. Their best friends are Fred and Ethel Mertz, who are also their landlords. The two couples were almost inseparable, whatever the Ricardos did, so did the Mertzs. Usually, Ethel becomes Lucy\'s less-than-willing partner in crime. Ricky and Lucy welcomed little Ricky in 1953, whose birth was a national TV event. Later in the show\'s run, the Ricardos (and the Mertzes) moved to Hollywood, where Ricky tried to become a movie star.', 'show3_I Love Lucy.mp4', 'Kid'),
(5, 'show4_AddamsFamily.png', 'The Addams Family', '1964 - 1966', '1960', 'The Addams Family television sitcom portrayed a monster family whose moribund physical appearances were counteracted by each family member\'s exuberance for passion and adventure. Premiering the same year as The Munsters, this short-lived series was one of the first two shows to take issue with the Leave It To Beaver aesthetic that dominated television throughout the 50s, in which perfect families narrowly defined normality in the American home. Instead, it starred a family feared by neighbors, who within the boundaries of their haunted Victorian mansion invented their own thriving, not to mention fun, culture. The Addams Family proved that outsiders could be extremely gracious, educated, and interesting, even if eccentricities rendered their looks a threat.', 'show5_The Addams Family .mp4', 'Kid'),
(6, 'show6_Avengers.png', 'The Avengers', '1966 - 1969', '1960', 'The Avengers is a secret-agent thriller that almost bests James Bond. Jonathan Steed - an urbane, proper gentleman spy - and adventurous citizen Emma Peel repeatedly saved the world from diabolical schemes plotted by equally diabolical evil-doers (among them robots and man-eating monsters).Emma Peel, in her leather boots and mini-skirts, is now considered one of the most liberated women on 60\'s television.', 'show6_The avengers.mp4', 'Kid'),
(7, 'show7_Charlie\'s Angel.png', 'Charlie\'s Angels', '1976 - 1981', '1970 1980', 'Once upon a time, there were three little girls who went to the police academy. And they were each assigned very hazardous duties but I took them all away from all that and now they work for me. My name is Charlie. Those famous words were heard every week from 1976 to 1981 during Charlie\'s Angels 5 year run. This ABC crime series began in September of 1976 introducing three stunning, sexy and young former policewoman, private detectives working for the Charles Townsend Detective Agency. The wealthy Charlie Townsend, voiced by John Forsythe, was their never-seen boss, who relayed assignments via a speaker telephone. The trio of Angels featured Sabrina Duncan; (Kate Jackson) the \"cool, smart, multilingual leader,\" Jill Munroe; (Farrah Fawcett-Majors) the \"athletic angel\" and finally Kelly Garrett; (Jaclyn Smith) the \"street wise angel.\" The Angels worked with their trusty male counter-part, John Bosley played by (David Doyle).', 'show7_Charlie\'s Angels .mp4', 'Parent'),
(9, 'show9_Land_of_the_Lost.png', 'Land of the Lost', '1974 - 1976', '1970', 'Land of the Lost details the adventures of the Marshall family (father Rick and his children Will and Holly), who are trapped in an alternate universe or time warp inhabited by dinosaurs, a primate-type people called Pakuni, and aggressive humanoid/lizard creatures called Sleestak. The episode storylines focus on the family\'s efforts to survive and find a way back to their own world, but the exploration of the exotic inhabitants of the Land of the Lost is also an ongoing part of the story', 'show9_Land of the Lost.mp4', 'Kid'),
(10, 'show10_Thomas.png', 'Thomas the Tank Engine & Friends', '1984', '1980', 'The series is set in the fictional island of Sodor, located in the Irish Sea. Sodor is depicted as located in Cumbria, near the historical town of Barrow-in-Furness Thomas the Tank Engine is an anthropomorphic steam locomotive, with a design loosely based on the LB&SCR E2 class (1913-1963). Thomas and his associates work at the North Western Railway, the main standard gauge rail network of Sodor. The series focuses on their work relationship.', 'show10_Thomas & Friends.mp4', 'Kid'),
(11, 'show11_21_Jump_Street.png', '21 Jump Street', '1987 - 1991', '1980 1990', '21 Jump Street is an American police procedural crime drama television series that aired on the Fox Network and in first run syndication from 1987, to 1991, with a total of 103 episodes. The series focused on a squad of youthful-looking undercover police officers investigating crimes in high schools, colleges, and other teenage venues.', 'show11_ 21 Jump Street.mp4', 'Parent'),
(12, 'show14_FreshPrinceOfBelAir.png', 'The Fresh Prince of Bel-Air', '1990 - 1996', '1990', 'When Will (Will Smith), an inner-city teenager from Philly is sent by his mother to live with his relatives (the Banks) in Bel-Air, everybody is in for a surprise. It is funny how influence can go both ways.', 'show14_The Fresh Prince Of Bel Air.mp4', 'Parent'),
(13, 'show15_friends.png', 'Friends', '1994-2004', '1990', 'Six young people from New York, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.', 'show15_F.R.I.E.N.D.mp4', 'Parent');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_urating`
--

CREATE TABLE `tbl_urating` (
  `rating_id` tinyint(3) UNSIGNED NOT NULL,
  `rating_number` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_avatar` varchar(20) NOT NULL DEFAULT 'parent',
  `user_permissions` int(11) NOT NULL,
  `user_admin` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_avatar`, `user_permissions`, `user_admin`) VALUES
(3, 'Mikka', 'mikka', '123', 'mikkaazores@gmail.com', '2020-03-09 15:48:21', '::1', 'parent', 5, 1),
(4, 'Megan', 'meg', '123', 'megannguyen@gmail.com', '2020-03-09 15:49:04', 'no', 'parent', 5, 1),
(5, 'Trevor', 'user1', 'password', 'me@you.com', '2020-03-09 15:49:39', '::1', 'kid', 3, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  ADD PRIMARY KEY (`arating_id`);

--
-- Indexes for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD PRIMARY KEY (`comments_id`);

--
-- Indexes for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  ADD PRIMARY KEY (`movies_id`);

--
-- Indexes for table `tbl_mov_genre`
--
ALTER TABLE `tbl_mov_genre`
  ADD PRIMARY KEY (`mov_genre_id`);

--
-- Indexes for table `tbl_music`
--
ALTER TABLE `tbl_music`
  ADD PRIMARY KEY (`music_id`);

--
-- Indexes for table `tbl_tv`
--
ALTER TABLE `tbl_tv`
  ADD PRIMARY KEY (`tv_id`);

--
-- Indexes for table `tbl_urating`
--
ALTER TABLE `tbl_urating`
  ADD PRIMARY KEY (`rating_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  MODIFY `arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  MODIFY `comments_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  MODIFY `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `movies_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_mov_genre`
--
ALTER TABLE `tbl_mov_genre`
  MODIFY `mov_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tbl_music`
--
ALTER TABLE `tbl_music`
  MODIFY `music_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_tv`
--
ALTER TABLE `tbl_tv`
  MODIFY `tv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_urating`
--
ALTER TABLE `tbl_urating`
  MODIFY `rating_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
