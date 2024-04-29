Setup:
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
3. In your environment run the command "flask run"
4. Using the url given, use a web brower to view the site
5. Either create a user or use the existing admin user (username: admin password: admin)

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

2. WAR statistics have been added for the players. stats include pitching, fielding, and overall
WAR per 162 games.

