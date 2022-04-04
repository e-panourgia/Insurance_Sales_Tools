-- CREATE TABLE quetion (
--                          id_q int not null,
--                          quetion varchar(1000) not null,
--                          primary key(id_q)
-- );
-- CREATE TABLE Answer (
--                         answer_1 VARCHAR(200) NOT NULL,
--                         answer_2 VARCHAR(200) NOT NULL,
--                         answer_3 VARCHAR(200) NOT NULL,
--                         value1 int not null,
--                         value2 int not null,
--                         value3 int not null,
--                         id_a INT NOT NULL,
--                         FOREIGN KEY (id_a) REFERENCES Quetion(id_q)
-- );
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("A.Συντηρητικός", "B.Ισορροπημένος", "Γ.Επιθετικός",1, 0, 0, 0);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("A.Εισόδημα μετά τη συνταξιοδότηση", "Β.Σπουδές παιδιών", "Γ.Άλλη μελλοντική ανάγκη",2, 0,0,0);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α.Εφάπαξ", "Β. Σε τακτικές καταβολές", "Γ.Και οι δύο επιλογές",3, 2, 20, 10);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α.Μικρότερος από 10 έτη*", "Β.10 έως 20 έτη", "20. έτη και άνω",4, 1, 5, 10);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α.Έως 20%", "Β.20%-40%", "Γ.Πάνω από 40%",5, 10, 5, 1);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("A.Έχω ελάχιστη/μηδενική εμπειρία στη διαχείριση επενδύσεων που αφορούν αγορές κεφαλαίων", "Β. Έχω μερική γνώση/εμπειρία σε επενδύσεις που αφορούν αγορές κεφαλαίων", "Γ. Έχω πλήρη εξοικείωση με τέτοιου είδους επενδύσεις",6, 1, 10, 20);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α.Υψηλός", "Β.Μέτριος", "Γ.Χαμηλός / Δεν έχω προβεί σε αντίστοιχη οικονομική απόφαση – αποταμίευση ή επένδυση στο παρελθόν",7, 10, 5, 1);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α.Τολμηρή / Επιθετική", "Β. Μέτρια / Ισορροπημένη", "Γ. Προσεκτική / Συντηρητική",8, 10, 5, 1);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α.Ναι", "Β.Δεν είμαι σίγουρος/η", "Γ.Όχι",9, 1, 1, 10);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α. Χαρτοφυλάκιο Α ", "Β. Χαρτοφυλάκιο Β ", "Γ. Χαρτοφυλάκιο Γ ",10, 1, 5, 10);
-- INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a, value1, value2, value3) VALUES ("Α. Χαρτοφυλάκιο Α ", "Β. Χαρτοφυλάκιο Α ", "Γ. Χαρτοφυλάκιο Α ",11, 1, 5, 10);
/**store consultant so that they log-in and register*/
select * from consultantt;
drop table consultantt;
select * from consultantt;
select * from consultantt;
drop table consultantt;
CREATE TABLE consultantt (
	id_consultant int auto_increment primary key , 
	fullName varchar(100) not null,
    consultantName varchar(100) not null,
    gender varchar(6) not null,
    userPassword varchar(100) not null,
    email varchar(100) unique not null
);


/* dynamic produce of form for invenstment profile*/
select q.quetion, a.answer_1, a.answer_2, answer_3 from answer as a , quetion as q where a.id_a = q.id_q;
select * from answer;
select * from quetion;
INSERT INTO `Quetion`(id_q, quetion) VALUES (1, "Σε ό,τι αφορά στο επενδυτικό μου προφίλ, πιστεύω ότι είμαι:");
INSERT INTO `Quetion`(id_q, quetion) VALUES (2,"Ο σκοπός για τον οποίο σκέφτομαι να δημιουργήσω/αξιοποιήσω κεφάλαιο είναι:");
INSERT INTO `Quetion`(id_q, quetion) VALUES (3,"Η υπό εξέταση συσσώρευση/επένδυση θα πραγματοποιηθεί:");
INSERT INTO `Quetion`(id_q, quetion) VALUES (4, "Ποιός είναι ο χρονικός ορίζοντας της επένδυσής σας;");
INSERT INTO `Quetion`(id_q, quetion) VALUES (5, "Τι μέρος της περιουσίας* σας πιστεύετε ότι θα αποτελεί η συγκεκριμένη επένδυση στο χρονικό σημείο που σκοπεύετε να την αξιοποιήσετε; (βάσει της επιλογής σας στην ερώτηση 2)");
INSERT INTO `Quetion`(id_q, quetion) VALUES (6, "Ποιά είναι η εξοικείωσή σας με τις αγορές κεφαλαίων;");
INSERT INTO `Quetion`(id_q, quetion) VALUES (7, "Ο βαθμός του επενδυτικού κινδύνου που έχετε λάβει στο παρελθόν, κατά τη λήψη αντίστοιχων οικονομικών αποφάσεων είναι:");
INSERT INTO `Quetion`(id_q, quetion) VALUES (8, "Η συνήθης προσέγγισή σας στη λήψη επενδυτικών αποφάσεων είναι:");
INSERT INTO `Quetion`(id_q, quetion) VALUES (9, "Προτιμάτε μία επένδυση η οποία είναι ασφαλής και μεγαλώνει αργά αλλά σταθερά, έστω και αν αυτό σημαίνει χαμηλότερη συνολική απόδοση;");
INSERT INTO `Quetion`(id_q, quetion) VALUES (10, "Ο παρακάτω πίνακας περιγράφει την τελική αξία της επένδυσης ύψους €100 στο τέλος του χρονικού ορίζοντα της επένδυσης που επιλέξατε. Λαμβάνοντας υπόψη τα παρακάτω τρία σενάρια, σε ποιό Επενδυτικό Χαρτοφυλάκιο πιθανότατα να επενδύατε;");
INSERT INTO `Quetion`(id_q, quetion) VALUES (11, "Ποιό από τα παρακάτω 3 επενδυτικά χαρτοφυλάκια θα επιλέγατε για την επένδυσή σας ύψους €100 λαμβάνοντας υπόψη σας τον τρόπο με τον οποίο θα αντιδρούσατε κατά τη διάρκεια των οποιωνδήποτε διακυμάνσεων στην αξία του χαρτοφυλακίου σας (όπως επισημαίνεται με χρώμα στον παρακάτω πίνακα) αντί να εστιάζετε μόνο στην αξία του χαρτοφυλακίου σας κατά το 10o έτος;");
CREATE TABLE Answer (
    answer_1 VARCHAR(200) NOT NULL,
    answer_2 VARCHAR(200) NOT NULL,
    answer_3 VARCHAR(200) NOT NULL,
    id_a INT NOT NULL,
    FOREIGN KEY (id_a) REFERENCES Quetion(id_q)
);

CREATE TABLE `Quetion` (
  `id_q` INT NOT NULL,
  `quetion` varchar(1000) NOT NULL,
  PRIMARY KEY (`id_q`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
drop table quetion;
drop table answer;
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("A.Συντηρητικός", "B.Ισορροπημένος", "Γ.Επιθετικός",1);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("A.Εισόδημα μετά τη συνταξιοδότηση", "Β.Σπουδές παιδιών", "Γ.Άλλη μελλοντική ανάγκη",2);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α.Εφάπαξ", "Β. Σε τακτικές καταβολές", "Γ.Και οι δύο επιλογές",3);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α.Μικρότερος από 10 έτη*", "Β.10 έως 20 έτη", "20. έτη και άνω",4);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α.Έως 20%", "Β.20%-40%", "Γ.Πάνω από 40%",5);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("A.Έχω ελάχιστη/μηδενική εμπειρία στη διαχείριση επενδύσεων που αφορούν αγορές κεφαλαίων", "Β. Έχω μερική γνώση/εμπειρία σε επενδύσεις που αφορούν αγορές κεφαλαίων", "Γ. Έχω πλήρη εξοικείωση με τέτοιου είδους επενδύσεις",6);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α.Υψηλός", "Β.Μέτριος", "Γ.Χαμηλός / Δεν έχω προβεί σε αντίστοιχη οικονομική απόφαση – αποταμίευση ή επένδυση στο παρελθόν",7);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α.Τολμηρή / Επιθετική", "Β. Μέτρια / Ισορροπημένη", "Γ. Προσεκτική / Συντηρητική",8);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α.Ναι", "Β.Δεν είμαι σίγουρος/η", "Γ.Όχι",9);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α. Χαρτοφυλάκιο Α ", "Β. Χαρτοφυλάκιο Β ", "Γ. Χαρτοφυλάκιο Γ ",10);
INSERT INTO `Answer`(answer_1, answer_2, answer_3,id_a) VALUES ("Α. Χαρτοφυλάκιο Α ", "Β. Χαρτοφυλάκιο Α ", "Γ. Χαρτοφυλάκιο Α ",11);

/*add customet*/
-- add key who consultantt 
CREATE TABLE Customer(
	id_customer int  auto_increment Primary key,
    fullName varchar(100) not null,
    email varchar(100) unique not null,
    phone integer(10),
    gender varchar(6) not null,
    profile varchar(100) not null,
    market varchar(500) not null,
    saving varchar(500) not null,
    pension varchar(500) not null,
    description varchar(1000) not null
)
select * from customer;