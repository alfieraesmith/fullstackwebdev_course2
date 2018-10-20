import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent'
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';


import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        };
    }
    // we want to display a featured dish, promotion, leader on the home page (dish.featured=TRUE)
    // set dish prop in Home page component to the dish in DISHES where featured is True
    // repeat for LEADERS and PROMOTIONS arrays.

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter( (dish) =>  dish.featured === true)[0]}
                    promotion={this.state.promotions.filter( (promo) =>  promo.featured === true)[0]}
                    leader={this.state.leaders.filter( (leader) =>  leader.featured === true)[0]}
                />
            );
        };

        const AboutPage = () => {
            return(
                <About leaders={this.state.leaders}/>
            );
        }

        // note: match is a js array and a property of props. it contains url params as key value pairs.
        // we need to find the dish and comments that matches dish id in url param.
        const DishWithId = ({match}) => {
            return(
                <DishDetail
                     dish={this.state.dishes.filter(
                           (dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                     comments = {this.state.comments.filter(
                         (comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu"
                           component= {() => <Menu dishes={this.state.dishes}/>}

                    />
                    <Route exact path="/contactus" component={Contact}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route path="/aboutus" component={AboutPage}/>
                    <Redirect to = "/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

/* Menu component will receive two props - props.dishes and props.onClick
 *  When onclick is a method that when invoked, will pass the dish id param to the this.onDishSelect
 *  function and invoke that function.
  *
  * Dish Detail component -
  * We want to pass th dish detail component the dish selected by user.
  * We have the dishId provided by menu.onClick.
  * We need to lookup the related dish and provide that as input.
  *
  * this.state.dishes --> variable with value DISHES (our JSON array of dishes)
  * .filter  --> Array function that returns a sub-array of all items where condition is true
  * {dish.id === this.sate.selectedDish}. this is a function that returns either
  * true or false.
  *
  * */

/*  React Router notes:
From our Menu component we will give the user the ability to navigate to
different views.

switch - controller component for grouping multiple routes together.

path vs exact path - path on its own allows for partial url matching.
For example a url request for '/home/aldflasdfa/safs' will match to '/home'.
However, '/menu/menu1' will not match to '/menu' because exact match
has been used.
Developers use exact path when they are created multiple routes with similar
names, as we will do with dish detail component.

routing to components that need props:

For components that DONT need props, we can simply use <router component={Component}/>
For components that DO need props, we have to pass props via a function that
assigns the props to the component before returning it.

Our menu component needs props. So we are saying component = output of function
where function returns the menu component with props.

redirect:

All <Redirect> comp does is redirect the user a page IFF none of the router
tags above it are satisfied.

Using arrow functions to assign props to components:
There's NO difference between returning a component with props via -
1. In-Line function: {() => <Menu dishes={this.state.dishes}/>}
2. Constant Variable Function:
       const HomePage = () => {
            return (<Home/>);
        };

We could just as easily use:
const Menu = () {
 return <Menu dishes = {this.state.dishes}/>;
}

and component = {() => <HomePage/> }

 */


export default Main;