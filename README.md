# MVC-Blog-Post

User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions


Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

This project is the use of the MVC model for coding. Needed to use express-handlebars, mysql, sequelize. There is also a use of the dotenv package, bcrypt package for passwords as well as express-session and connect-session-sequelize packages for authentication. The express-session package is working with cookie expiration times.

Installation:
1. Download it through Github
2. Ensure express is installed
3. Ensure express-handlebars is installed
4. Ensure express-session is installed
5. Ensure mysql2 is installed
6. Ensure sequelize is installed
7. Ensure connect-session-sequelize is installed
8. Ensure dotenv is installed
8. Ensure bcrypt is installed

To connect to the database, once files are downloaded to you computer, you will need to use a .env file to input your password and username for your mysql.

Back-end after cloning or downloading repo files:

1. Open terminal and navigate to MVC BLOG-POST folder
2. Type npm init -y into terminal to create a new .json file
3. Type npm i into terminal
4. Type npm i express into terminal
5. Type npm i express-handlebars into terminal
6. Type npm i express-session into terminal
7. Type npm i mysql2 into terminal
8. Type npm i sequelize into terminal
9. Type npm i dotenv into terminal
10. Type npm i bcrypt into terminal
11. Type npm i connect-session-sequelize into terminal
12. Navigate to the db folder
13. Type mysql -u root -p into terminal
14. Enter your password into terminal
15. Type source db/schema.sql into terminal
16. Type quit into terminal
17. Navigate back to the blog_post in terminal
18. Type node seeds/index.js so the seeds will populate the database
19. Type npm start into the terminal
You will see the Now Listening indication and can access on your localhost
