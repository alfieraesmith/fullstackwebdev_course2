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

# React Components

A react component is a set of React elements that collectively
render a part of the screen.
Components act as a grouping of React elements that share
some common purpose.
Components enable dev to split UI into independent, reusable, pieces.
Components also accept inputs
Components can be of different kinds.

* always start user defined components with capital letters.

# React components: State and props -

state:

each component can store its own local info in its "state"
This information is:
    --  only class components can store state, but not
        all components need to store state.
    --  Local info is private and fully controlled by the component
    --  component state can be passed to children
        of component through props.
    -- usually declared in the constructor method

example of state being declared:

```jsx

class Menu extends Component{

constructor(props){
    super(props);

    this.state = {selectedDish:null}
     }
}
```

We're defining a new class, Menu, that's an ext of the
template JS component.

Within defining the constructor method, we initialise a variable
called 'this.state'.  this.state is a JS object
contains the state info for the component.

#Updating a component state

All component state updates have to be implemented through
the standard setState() method.

```
onDishSelect(dish){
    this.setState({
        selectedDish:dish
    });
}

```

In this method, we're creating a application specific
wrapper method around the standard setState method.

This wrapper method, onDishSelect, takes in a variable
called 'dish', probably triggered by a user selecting
a dish in ui, and runs the setstate method to update
its 'selectedDish' state to the user's dish choice.

# lifting the state up

We're almost always working within a hierarchy of
components. Sometimes, it's required that a parent component
change state as a result of a child changing state.
This is called lifting the state up the tree.

example: say 5 child components of one parent all need
to be the same state. If a change is required, the easiest
method to change all 5 children at once is to update the
parent state.

# props
JSX attributes are passed into a component as a single object
called 'props'. This is short for "properties"

All child components receive attributes of parent component
as props.


# handling events:

Handling events is similar to the way you handle
events on DOM elements.
* use camelCase to specify events
* pass function as the event handler.


onclick event handler -
```
<Card onclick={() => this.onDishSelect(dish)}>
```
We are specifying an onclick event handler,
where we're passing in an arrow function as a parameter.

# lists and keys -

lists are handled the same as JS generally

```
const menu = this.props.dishes.map((dish) => {

    return (
        <div key (dish.id)>
            <h1> {dish.name} </h1>
            <p>  {dish.description}</p>
        </div>
        );
        });
```

We want to iterate over all the dishes held in the data
this.props.dishes. For each dish, we want to create
some content that's a header and some text.

We'll use the JS operator map to map our JS array
of dishes to a list of HTML items.

We do this by
1. extract the array from this.props.dishes
2. for each item in array, we map to a list item
3. for each item, the dish id, dish.name dish.description
is taken as values in return output
4. final output is a list of items returned.

Note, input is an array -- json object
it's a list of dictionaries.
[{id:, name:, description:,} {id:.....}]

For each element (dict of attributes), we want to map
it to some html content. We're expecting a list back
(not an array) where each item in list represents
one element in original JS array, converted through
process outlined in return function.

# component life cycle

A react application can be thought of as a set of react-components
combined together to all the content in the screen.

When needed in the view, each component will be added into the
DOM.

A component will pass through a life cycle of:
1. not existing
2. existing but not in view
3. mounted by React Application and entered into view
4... various updating of component to change content.
5. unmounted by React Application and exits from view
6. not existing

Several lifecycle methods are available in each stage of component's lifecylce.
These lifecycle methods will be invoked by React as component
passes through stages of life cycle.

# Mounting life-cycle methods:

called when an instance of is being created and inserted
into the DOM.

1. constructor()
2. render()
3. componentDidMount()

Usually, these methods are called in this order by the React Application.
These methods will be run automatically by the react app
aslong as they exist in component's js file.

1. constructor -

called when component is instantiated and is always the
first method called from any component.

```
 constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

```

2. render -

Typically, this method is executed after constructor() and
tells React the content that needs to be displayed in viewport.

In this case, we're iterating through an inherited array,
this.props.dishes, using map, and returning a list of
of html card objects.


```
render(){
         const menu = this.props.dishes.map((dish) => {
             return (
                 <div className="col-12 col-md-5 m-1">
                     <Card  key={dish.id}
                            onClick={() => this.onDishSelect(dish)}>
                         <CardImg width="100%" src={dish.image} alt={dish.name}/>
                         <CardImgOverlay>
                             <CardTitle> {dish.name} </CardTitle>
                         </CardImgOverlay>
                     </Card>
                 </div>
             );
         });

         return (
             <div className="container">
                 <div className="row">
                     {menu}
                 </div>
                 <div className="row">
                     <div  className="col-12 col-md-5 m-1">
                         {this.renderDish(this.state.selectedDish)}
                     </div>
                 </div>
             </div>
         );
     }
 }
```
3. componentDidMount

Third method executed after component instance created and
content rendered. This method is often used to perform
tasks that require the existence of component/content.

This example just writes a log message.

```
 componentDidMount(){
        console.log('Menu Component has been mounted');
    }

```

# life cycle methods for updating

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. Render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

2. shouldComponentUpdate:

You can return false from shouldComponentUpdate: to tell React that
this component doesn't ever need to be updated when re-rendering DOM.

3. Render() --
called every time component is re-rendered.

4. getSnapshotBeforeUpdate()
Save some kind of info before view is re-rendered. You could use this
to store the position of the scroll so the placement is the same
on the new view.

5. componentDidUpdate()
Used to check that a view has been updated correctly.



# state vs stateless  components (many terms, similar meanings) --

React doesn't have any standard component classifications but a group
of terms has arisen to classify components.

Informal Component definitions:
* Presentational vs Container
* Skinny vs Fat
* Dumb vs Smart

# Presentation vs Container Components.

Presentation components:

mainly concerned with rendering view (markup, styles)
they render the view based on inherited data (this.props)
often don't maintain their own local state attributes (this.state....)
(although they may retain some ui states, like with dialogue boxes,
but don't worry about the APPLICATION state).

Pure Presentational components are stateless children that inherit
data via props and generate content for the view.

Container components:
Responsible for tracking all/part of state of Application
Responsible for making things work (fetching data/processing data...)
Store state and pass data to presentational component children as props.
They often don't generate any content towards view and act
as data stores/processors for presentational cocmponents.

# Skinny vs Fat components
Skinny: purely responsible for rendering view
Fat: have other, more complex, data responsibilities.

# Dumb vs Smart - similar to Skinny vs Fat.

# Class components vs Functional Components:

Class components -
So far, Menu, Main, DishDetail are all class components -
where we extended the React Component class to define our own class components.

Class components:
1. generated by ext React Component class
2. Need to implement render() method that returns view
3. Can have local state
4. Lifecycle hooks possible

Functional Components:

Very simple components, that don't need local state or lifecylce hooks,
can be generated on the fly by a JS function.

1. generated by defining JS function that returns a React element/collection
   of react elements that define a view
2. Can't have local state
3. Can't have lifecycle hooks
4. receives a 'props' object a param

Why use a functional component?

It's common practice to have the view rendered by one, functional, component
that inherits all the data as props and returns view elements.


```
    function RenderMenuItem({dish, onClick}){
        return(
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle> {dish.name} </CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = {props} => {
        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                   <RenderMenuItem dish={dish} onClick={(props.onClick)}/>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
```

# React Virtual DOM:

There's a very important distinction between the Browser DOM (often just called 'the DOM')
and the React Virtual DOM.

Browser DOM: browser object, every change to a web page is enacted through changing
the browser DOM. Browsers monitor changes in the Browser DOM for signals to re-render
the web page.

Virtual DOM: React object, is a "lightweight" representation of the browser DOM.
The React virtual DOM is an in-memory data structure of plain JS objects, whereas
the browser DOM is contained in browser memory and has a far more complex data structure.

Having a simpler, smaller and in-memory representation of the DOM allows the react
app to manipulate objects much faster than if it tried to manipulate the browser DOM.

The virtual DOM is recreated completely from scratch on every setState.

Another benefit of using the virtual DOM is the 'diffing algorithm'

React employs a diffing algorithm that detects changes to nodes
by comparing a previous version of the VDOM to the current version.

This algorithm works by setting the entire sub-tree of a component to update if
it detects that two elements are of different types between versions.
However, when manipulating lists of elements, we can use the key attribute of
individual list items to hint that child elements are stable.  This allows the REACT
developer with the ability to minimise re-rendering.

# React Router

A typical react application may consist of of multiple "pages"
This is to say,a react application has multiple views and requires a way
for users to navigate between views.
The React Router is the core component for navigating between views.
The React router can also be leverage to create a growing kind of React
applications - "single page" applications where all views are contained
within one web page.

# what is the react router?

1. Enables navigation among views
2. collection of navigational components:
    * routing components
    * route matching components
    * navigation components
3. Uses a browser-based book-markable urls as an instruction to navigate to
   a client-generated view in your web app.
   Each view has an associated URL and may also contain optional params
   that determine the content rendered in the view.

# web app routing:
install react-router-dom into our application this provides the app with
access to
* router component <BrowserRouter>
* hash router component <HashRouter> (only used if url hashing is required)
* Route Matching components:
    * <Route>, <Switch>, <Redirect>
* Navigation components:
    * <Link>, <NavLink>

# Route, Redirect and Switch

<Route> has two key props:
props.path -- specifies the current locations pathname
props.component -- specifies the corresponding view for the location

<Redirect> defines the default url that the user will be navigated to if
one of the url paths doesn't match a known location

<switch> enables grouping together of several routes.
         iterates over all its children and find the first route that matches
         the path.

# link and navlink

<link>: creates links in your application
      : rendered as <a> tags in HTML - as it performs a representation of
        the <a href=www...> in a traditional HTML page.

<NavLink> also attaches the active class to the link prop matches the current
          location.


React Router Paramaters:

Passing params as additional sections of the url, through the router, is
a common method for showing content conditional on user requests.

e.g. /menu/42

* 42 is a parameter added onto the url for our menu view

We tell the react router to pass '42' as a route parameter by
creating a token "page/:token"
e.g. "menu/:id"

We then use string concatenation (via ES6's `` syntax) to build the route.
<Link to={`/Menu/${dish.id}`} />


# Traditional vs Single Page applications

Traditional websites:

Browsers request webpages when either the user clicks a link or types address
into address bar.

The get request is made to the web server for the content of the web page.
The server processes the request, returns the .html page, which is DOWNLOADED
onto the user's PC (cache) via the browser.

This request-response cycle in repeated for any additional web pages the user
requests.

Request index.html ----->
<---- Send index.html
Request contactus.html --->
<---- send contactus.html

Problems:

1. Inefficient: A lot of the content across pages is repeated (headers, footers, navbar...)
2. Server strain: sites with large trees of pages can cause slow response times.
3. Full re-rendering: every new page needs to be re-rendered from scratch.

Single Page applications were developed to mediate some of issues 1-3.

Single Page applications:

* No need to reload the entire page
* UX like a desktop/native application
* most resources are retrieved with a single page load
* redraw parts of the page when needed without requiring full server RR cycle.


Request Web Application ------>
<-------- Send Web app and all assets

User clicks on link, new request ---->
<----  Response with JSON data if required

This approach replaces the numerous smaller downloads (each webpage) with
one larger download (the whole web application).
As all web application logic and assets are stored in browser cache, any
subsequent requests may not be necessary to re-render page.
Often, with SPA, only additional data (JSON) is required from server to
render new content.

Problems with SPA:
1. poorer search engine optimization
2. Partitioning the responsibility between client/server leaves a lot of work
   on the browser side, which can cause other problems.
3. Maintaining history
4. Analytics is harder - it's harder to track in-page activity than across page activity
5. Speed of initial page load.

# Controlled Forms:

Forms   - means for users to supply data to web applications
        - cohesive, effective and compelling data entry experience
        - general term for a broad range of different common data entry vehicles
            1. log in boxes
            2. placing orders, reserving tables etc.
            3. submitting feedback or comments
            4. requesting company response.

HTML forms -
<form>
</form>
Form elements:
<input> - type: text, password, submit, radio, checkbox, date....
<textarea>
<button>
<select>

React components model the same functionality as HTML <form> tags. The components vary
but all compile into some type of <form> tags before being rendered as webpage.

Controlled components make the react component control the form that it renders
1. single source of truth
2. form state tied to component state. User submits data, which updates component state.
3. Component can also valdiate date entered by checking its own state values.

Every state mutation will have an associated handler function. The handler functions
update the state of the react component in response to user actions on the form.
Every user action should have a matching associated handler functio.

# uncontrolled components

Usually, forms are implemented through controlled components where the every user
action updates a state in the component. Furthermore, state changes are validated
and error messages are displayed if the user enters invalid data.

But, setting up controlled components is time-extensive as they require
dev to write event handler for every state update.
There are scenarios where a simple uncontrolled form is sufficient.

Scenarios:
1. Large amount of non-react JS code in application:
            -- uncontrolled components allow for better integration between
                REACT and non-React code.
2. No data validation required

Instead of writing an event handler for every state update (controlled comp),
we use a ref to get form values from the DOM.

# Model - View - Controller Framework:

A (software/architectural) design pattern is a well-documented
and/or frequently used solution to a recurring problem.
The aim of reusing common patterns of design is to avoid 're-inventing'
the wheel every time a software engineer solves a similar problem.

The MVC framework is an example of a "software engineering architecture pattern":
View: concerned with displaying info and content to the user.
Model: stores domain state and logic. Provides means of manipulation application state.
Controller: mediates between view and model.

The aim of MVC (as with some competitors) is to isolate the domain logic from
the user interface. The pieces of the application that display content should
be completely divorced from the parts that make decisions.

This "separation of concerns" allows software engineers to independently
develop, test and maintain each part without harming the whole.

# Model:

* captures the whole state of the application - updated by controller
* managed the behaviour and data of the application domain
* responds to requests for info about the application state (usually req come from view)
* responds to instructions to change state (usually from controller)
* (event-driven systems) model notifies views when the info changes so that they re-render.

# View:
* renders the model into a form suitable for interaction
    - typically this consists of varying user interface elements.
* multiple views exist for a single model for different purposes.
   - we call the collection of views, "The View"
* viewport typically has a one-to-one correspondence with a display surface and
   knows how to render to it.

# Controller
* Receives info from View and initiates a response by making calls on model objects.
* Controller accepts inputs from user and instructs model to change state.
* Controller may also tell View to re-render because of changes to Viewport.

# React and MVC

Initially 'React' was viewed as just the 'V' in the MVC where REACT components
would just be used for the View.
REACT is now considered suitable for building whole applications and is no
longer marketed as solely the 'View'.

A basic REACT application model is:

One Main Component (parent of all components, stores state for all components)
Some Container Components (used for business logic/presentation logic - stateful)
Many Presentational Components (used for rendering different parts of  View - stateless)

This works well for simple web applications but for more complex applications,
with potentially 100s of components and many hierachies, states become impossible
to manage with just a MAIN component.

Facebook discovered this and tried to move to a more traditional MVC approach,
using REACT components, and isolating all state in a Model.

However - Facebook found many issues with using standard MVC architecture pattern
1. Cascading updates: where on model state change leads to many others.
2. decentralized mutations
3. race conditions

They then discarded traditional MVC in favor of the 'Flux architecture'

# Flux architecture - a new software engineering pattern

The salient feature of FLUX is a Unidirectional data flows
This helps avoid the cascades of updates FB found using MVC approach with REACT.
All state removed from controller components (including MAIN) and put into stores.

Unidirectional data flow:

Action --> Dispatcher ---> Store ---> View

Store: one or more stores hold application state
       DOES NOT EXPOSE "SETTERS" for controller views:
            - Controller components cannot directly change the store.
       The only way to change application state is by requesting the
            - This is done through DISPATCHER components.
       Stores expose "GETTERS" that component views can use to get application state
            - The controller components then use presentational comp to update VIEW.

Actions:  requests for store to change state
          new actions are propagated through the system in response to user interactions
          all actions are sent to dispatcher

dispatcher: controlling unit for serialising actions into requests to the store.
            mediates relationship between views and store via actions.

views: subscribe to store
       strictly speaking, only "controller" views subscribe to store.
       presentational components do not subscribe to store.

The main component (a type of controller view) gets state from STORE. Receives
state by using GETTERs exposed by stores. Cannot directly update store.

User interaction with View ---> Controller View sends action --> Dispatcher --> Store update

# Redux

A flux like approach and developed by Dan Abramov intended to be
a "realisation" of the basic flux like architecture
that improves on some of flux's issues.

Inspired by 'Flux' but also 'ELM' and 'Immutable' approaches.

Dan Abramov's 3 core principles for the Redux approach:

1. Single source of truth
    - single state object tree within a single store.
    - FLUX permits multiple stores and requires coordination between stores.
2. State is read-only (only getters, no setters)
    - Changes should only be done through actions
3. Changes are made with pure functions ("reducer" functions)
    - takes previous state and an action, returns next state
    - no mutation of previous state.


* Adopted widely by REACT community but not tied to REACT.
  Could also be used in an app based around a Angular or Backbone framework.
* makes state mutations predictable. Prioritizes consistent and tracked
  state changes.

# Single Store and Single State Tree:

The main benefits Abramov found when using a single store/single tree approach
was that -
* logging got a lot simpler, we can record all state changes as three items
    - previous state, action, next state
* API HANDLING:
* Undo/redo approaches: walk back through state changes and undo any state
                        changes to resolve bugs.
* state persistence
* time-travel debugging

# REDUX data flow

View -- Action --- Dispatch --> Reducer --> State
                                        <--  | |
   <-------------------------------------------

The "STORE": comprised of Dispatch, Reducer and State.

Dispatch: exposure point for rest of application
          receives actions from view (created through user interaction)

Reducer: pure function, receives old state, action and returns new state.
         update to date is done immutably - does not modify inputs.

State: stored in plain JS object tree.

Action: plain JS action with type field.
        type field specifies how to change something in the state.
        carries payload

# REDUX STORE DETAILS

use: holds the current state value for all components
created: createStore() function
methods: supplies three methods
        1. dispatch(): states state update with the provided action object
        2. getState(): returns the current stored state value.
        3. subscribe(): accepts callback function that runs every time
                         an action is dispatched.













































