Setup (Windows Tested):
DBSetup:
1. Navigate to the makeDB folder
2. Copy the teamSpencer.sql file
3. Paste the file in whatever folder is your current
   directory when using your mariaDB database
4. From the mariaDB terminal, run the command "\. teamSpencer.sql"
5. This will create the database used in the project

Flask Setup:
1. edit the username and password in the csi3335sp2023.py file
to the correct credentials for your database. Edit the location
if desired
2. Next, start the virtual environment (Not provided in the project)
3. In your environment run the command "flask run" when in the project directory
4. Using the url given by flask, use a web browser to view the site
5. Either create a user or use the existing admin user (username: admin password: admin)



Website Features:
- A login page
- A create user page
- An admin account (username: admin password: admin)
- A page to view team rosters for a given year
- A page to view an individual players' statistics
- A profile page
- A page to view logs (admin only)
- The ability to edit your profile
- A secret surprise on the index page



Extra Credit:
1. Instead of adding to existing tables, our group created the tables directly from the new Lahman database.
the following tables are the most recent Lahman data (2023):
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
are either from the Lahman 2022 data or are created by our group.

The makeTables folder contains all cleaned data and scripts to create the database from the new lahman data.

makeTable program: The makeTable folder is logically separated from the rest of the project and is solely for helping create
a sql file for the project. The main code for this comes from registry.py and createDump.py. Given a registry of tables to add in a specific order,
these files have the logic to convert csvs into Insert into values for specific tables. The readyTables folder contains all the data files from lahman
that have been cleaned to fit the existing schema of the baseball database. In addition, addWar.py has separate logic for creating sql
commands to add the advanced statistics table to the database. From here, the full sql file is created from the existing table schemas in the baseball
database, our groups new table schemas, the output from the war creation functions and the registry based functions, and some other, user added commands
This concatenation is what you see in the teamSpencer.sql file.


2. Player stats which can be accessed by clicking a player name from a teams page and you can go back to the teams page from the players page

3. WAR statistics have been added for the players. stats include pitching, fielding, and overall
WAR per 162 games. These statistics can be viewed for a specific player by navigating to their player page.

4. A secret surprise by pressing the rainbow button in the middle of the index page

5. A toggleable option for showing advanced stats for a team


