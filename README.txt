Setup:
DBSetup:
1. Navigate to the makeDB folder
2. Copy the teamSpencer.sql file
3. Paste the file in whatever folder is your current
   directory when using your mariaDB database
4. From the mariaDB terminal, run the command "\. teamSpecer.sql"
5. This will create the database used in the project

Flask Setup:
1. edit the username and password in the csi3335sp2023.py file
to the correct credentials for your database. Edit the location
if desired
2. Next, start the virtual environment (Not provided in the project)
3. In your environment run the command "flask run" when in the project directory
4. Using the url given by flask, use a web brower to view the site
5. Either create a user or use the existing admin user (username: admin password: admin)



Website Features:
- A log in page
- A create user page
- an admin account (username: admin password: admin)
- a page to view team rosters for a given year
- a page to view an individual players statistics
- a profile page
- a page to view logs (admin only)
- The ability to edit your profile


Extra Credit:
1. Instead of adding to existing tables, our group created the tables directly from the new larman database.
the following tables are the most recent lahman data (2023):
- allstarfull
- appearances
- batting
- battingpost
- collegeplaying
- fielding
- fieldingpost
- franchises
- halloffame
- homegames
- managers
- parks
- people
- pitching
- pitchingpost
- salaries
- schools
- seriespost
- teams

the tables: divisions, awards, awardsshare, leagues, users, advancedstats, and logging
are either from the lahman 2022 data or are created by our group.

The makeTables folder contains all cleaned data and scripts to create the database from the new lahman data.

makeTable program: The makeTable folder is logically seperated from the rest of the project and is solely for helping create
an sql file for the project. The main code for this comes from registry.py and createDump.py. Given a registry of tables to add in a specific order,
these files have the logic to convert csvs into Insert into values for specific tables. The readyTables folder contains all the data files from lahman
that have been cleaned to fit the existing schema of the baseball database. In addition, addWar.py has seperate logic for creating sql
commands to add the advanced statistics table to the databse. From here, the full sql file is created from the existing table schemas in the baseball
database, our groups new table schemas, the output from the war creation functions and the registry based functions, and some other, user added commands
This concatination is what you see in the teamSpencer.sql file.


2. WAR statistics have been added for the players. stats include pitching, fielding, and overall
WAR per 162 games. These statistics can be viewed for a specific player by navigating to their player page

