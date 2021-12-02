CREATE TABLE IF NOT EXISTS admins(
id_admin int NOT NULL AUTO_INCREMENT,
nom_admin  varchar(50) not null,
email_admin varchar(100)  not null,
password_admin varbinary(50) not null,
PRIMARY KEY(id_admin) 
);
CREATE TABLE IF NOT EXISTS Sabores(
	id_sab int NOT NULL AUTO_INCREMENT,
	nom_sab varchar(30) NOT NULL,
	cos_sab varchar(30) NOT NULL,
	PRIMARY KEY(id_sab),
	KEY(nom_sab)
	); 
    show tables in rano95li1dxmil52