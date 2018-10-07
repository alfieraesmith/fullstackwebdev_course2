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

# Front end JavaScript Frameworks and Libraries

You can achieve a lot with 'vanilla' JS/HTML complimented
by a UI framework like Bootstrap 4 and DOM manipulation
with JQuery.

However the main problem tge 'vanilla' approach encounters
is implementing complex manipulation of the DOM, especially when
getting content updates from the server, requires detailed
javascript components to be written.

Furthermore, it also requires the dev to have a good
application architecture that's resilient to
scope/changes/new features.

Instead of building their own components/archictecture,
a dev can instead use a JS framework/library that always come with
1. broad range of pre-written/documented components
2. well defined application architecture

+ software libraries allow the devs to re-use behaviour
across projects and teams - quicker fixes, fast prototyping etc.

+ modularity - the ability to break applications into
parts so that they can be re-used and rebuilt individually.

well-defined application architecture:
* model view controller/model view view model/model view whatever
* binding of model and view: controllers, view models
* flux architecture, redux.


software framework vs software library:

A funny metaphor for framework vs library distinction is
called the "hollywood principle"

A framework is like an agent "don't call us we'll call you"
Software is the opposite, 'we do nothing unless you call'

Frameworks 'invert control' running in a pre-set pattern
and turning only to user written code when it needs
to fill in application specific gaps.

A software library is a collection of functions/classes
which are useful when writing web apps. Your code
is in charge and calls the library when it sees fit.
software libraries are called by scripts, that the dev
has full responsibility to write.

a software framework is an abstraction in which software
provides generic functionality that can be selectively
changed by additional user-written code.
A software framework gives you a particular, basic, implementation
and calls into your code when it needs something app-specific.

frameworks are often highly opinionated foundations that devs
can add additional, application-specific, layers ontop.

frameworks: angular, ember, backbone

But some frameworks are more 'opinionated' than others.
most opinionated (ember)
middle - angular
least - backbone

#Is React a library or a framework?
The React Team explicitly call react a 'javascript library for building user interfaces'
However, some JS script developers refer to React as a framework because
React uses a declarative approach, which are traditionally used
by frameworks.

# Overview of React:

* Designed for speed, simplicity and scalability.

* Declarative approach: see frameworks
* Component-Based approach: small units of behaviour is encapsulated
into separate sections of code called 'components'
* Technology stack agnostic: React makes no assumptions on
software is being used in application. React concentrates
only on user-interface side of story, leaving it up to
app designer how they want to implement architecture
and how they want front-end to react with back-end.

React History:
* Designed by Jordan Walke, when working as Facebook dev
* First deployed on FB newsfeed in 2011
* Open-sourced at JSConf US in May 20113

Reach Vocabulary:
* One-way data flow (particularly in context of Flux archiecture)
* JSX
* Components - groups of elements and core parts of the UI
functionality.
* State: how react components interact with application state
         and where application state is stored.
* props: a way of passing data between various components
* virtual DOM: How react updates the virtual DOM, which in turn
is translated into real DOM
* element: smallest unit of building up React application
* flux/redux: application architectures.

# getting started with react

- install create-react-app package

npm install -g create-react-app@1.5.2

- create react app in new folder called confusion
create-react-app confusion

- start react application
yarn start

We'll often switch to using yarn node package manager
rather than npm for running our app and installing
additional react packages.

This is because the create-react-app
package and other react packages are optimized to use
yarn. Both are valid package managers, everything that
is done with yarn has an npm equivalent.

# overview of a react app:
The general structure of a react app is

                    app dir (confusion/)

public/                     src/                        node_modules/
all web pages            app js scripts                js packages
manifest

react elements:

elements are the smallest building blocks of react apps.

example of a react element

```js
const element = <h1 className="App-title"> Welcome to React </h1>;

```

Notice the h1 tag - similar to html h1 tag -
in react this is a 'plain js objects'

plain js objects:
cheap to create
used repeatedly

react components:

made up several elements using the class...extend.... keywords

```js
class App extends Component {...}
```
class App extends Component is saying extend the Component
class with the following features

App is a sub-class of Component with additional methods
that we're defining - render

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
```

# React css elements
"App-header" is a CSS class that can be found in App.CSS

In react, we don't use class="xxxx" like we would for Bootstrap
to wrap html tags with css classes. Instead,
we use className="yyyy".

For example:

<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
 </header>


This is because ES6 JS uses the keyword "class" for defining
classes. As our HTML is being formatted within Javascript,
we need to avoid using the class keyword, even within
our HTML code. Instead, we'll use className as a substitute
and let React/Browser translate.

We export our app class and imported by index.js.

#index.js
ReactDOM.render(<App />, document.getElementById('root'));

This is the key line in our index.js.

This is saying, when the ReactDom is rendering, take the
app class (called using a new self-closing tag) and
attach it to the element with id 'root' in our index.HTML page.

document, with the DOM model, always refers to a HTML
document and in this case index.html

Looking at our index.html page - we can see this in body tag
```html
<body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>

```

 # JSX - Javascript extension language

JSX is syntactic extension to JavaScript
that allows us to add a shorthand notation to represent
JS function calls that evaluate to JS objects.

JSX acts a preprocessor step that adds XML syntax to JS.

Helps us avoid artificial separation of rendering logic
from other UI logic.

Very often in other frameworks/libraries, the template code,
or "UI logic", is kept separate from the rendering logic (HTML).

example1:

JSX code:

``` jsx
const element = {
    <h1> Hello, world" </h1>
    };
```

is mapped to JS code:
```js
const element = React.createElement('h1',
                                    {'className':'greeting'},
                                    'Hello, world!'
                                    );
```

# Using Bootstrap via reactstrap

We want to use Bootstrap styling but there's a problem with
simply using bootstrap files.

We cannot use Bootstrap directly when also using REACT because
Bootstrap, like react, uses its own set of JS components.

However, a react sub-module, reactstrap, takes bootstrap
and remodels its JS functionality as React components.

- setting up react strap
1. install bootstrap: yarn add bootstrap@4.0.0
2. install reactstrap and react-popper: yarn add reactstrap@5.0.0 react-popper@0.9.2
3. import bootstrap css into app: (index.js): 3. import bootstrap css into app: (index.js):

4. import bootstrap (reactstrap) components when needed

```jsx
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color ="primary">
          <div className="container">
            <NavbarBrand href"/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;

```



























































































































