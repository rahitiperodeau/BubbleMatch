# BubbleMatchUserService
ReadMe for the microService User

This Service is set-up with mariaDB
In application.properties change this settings with your DB to try :
----------------------------------------------
## FOR EXTERNAL MYSQL DB
spring.jpa.hibernate.ddl-auto = validate
##spring.jpa.hibernate.ddl-auto=create
spring.datasource.url=jdbc:mariadb://localhost:3306/userDB
spring.datasource.username=seraph
spring.datasource.password=10061996
----------------------------------------------
