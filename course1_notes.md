# Course Overview

Week1: full stack dev overview and intro to react components
* Full Stack Web Dev: The big picture
* Setting up development env - Git and Node
* Introduction to react
* React Components

Week2: React Router and Single Page applications
* React component types
* react router
* single page applications

Week3: Forms as user-input
* Controlled Components - mostly controlled forms
* Unctrolled Component - uncontrolled forms
* Redux - way of structuring applications
* React Redux form

Week4: Redux details and client-server communications
* redux actions
* redux thunk
* client-side communication
* fetch
* react animations
* building,testing and deployment

# What is full stack web development

# Front end/back end view:

## Front end or 'client-side':

definition: the area of the app where content is delivered
to the user, typically through a browser of some kind.
technologies: HTML, CSS, JS, SASS/LESS
frameworks: BOOTSTRAP (UI), ANGULAR/REACT (FRONT-END)

# back end or 'server-side':
definition: area of the app where business logic is implemented,
data is stored and requests are processed.
technologies: PHP, Java, ASP.Net, Ruby, Node JS, Python

# Traditional Three tier architecture view:
1. Presentation layer: delivering content to user
2. Business logic layer: data valid, dynamic content processing, request processing.
3. data access layer: data persistence, data storage, api

In the traditional approach, server-side rendering means
that the business logic layer processes user requests,
renders content as HTML and passes HTML whole to the browser.

In the traditional approach, a relational database is used
to store data and the business logic layer accesses it
in a application api. Data format is typically xml, text or
files.

Modern approaches
 1. use one language across the three-tier model
 (react/angular JS for presentation, Node JS BL layer, Mongo JS for DB)
 2. have the browser doing some processing
and rendering html dynamically.
 3. Back-end treated as service
 4. Data not stored in relational structure, rather stored
 in JSON trees.
 5. RESTFUL APIs

 Node JS:

NodeJS is an open-source, cross-platform, JS run-time env that
executes javascript outside of a browser.

Node.js was a very powerful addition to java script development
as it meant that devs could run js on desktops or servers.
This has enabled the development of:
1. JS command line tools
2. JS server-side scripting
3. JS database management
4. JS task runners and deployment

# package.json
The package.json file servers as the 'manifest' for any
web project listing all the packages, and their versions,
required to run a package.

listing out all the exact dependencies required makes
applications easier to deploy and maintain.

you can create a package.json file by running npm init
-- complete the step up questions
-- a lot of web applications use index.js as the entry point,
for this project, we'll use the more traditional index.html install.

# Serving up our project to a browser
We'll need some kind of server to host our project and serve
up the content of our .html files.

we'll use lite-server as a small, desktop, server-emulator that
will serve content to localhost.

install using npm and save it as dependency to our package.json:
npm install lite-server --save--dev










































