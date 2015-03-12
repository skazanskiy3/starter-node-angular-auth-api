# MEAN Stack Single Page Application Starter

This is a repo for a starter appliation for a Single Page MEAN Stack application from scotch.io. Just download and install and you have a good foundation for building an application. 

The *app* folder contains the Node application. It's the backend for the project and has a sample API exposed.

The *public* folder contains the AngularJS application. It has two simple views, **Home** and **Sample**. The **Sample** page makes a call to our backend's API and displays the result on the page.  

## Installation
1. Download the repository.
2. Install npm modules: `npm install`.
3. Install bower dependencies `bower install`.
4. Start up the server: `node server.js`.
5. View in browser at http://localhost:8080.

Use this starter kit to build any MEAN stack application you like.

## Deploying to Heroku
To deploy to Heroku, follow Heroku instructions as is, already edited the original **.gitignore** file to not ignore *public/libs*. 
