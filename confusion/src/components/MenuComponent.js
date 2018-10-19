import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

    // make Menu a functional component as it it purely presentational and
    //has no state and takes only props in.

    // create a second, helper, func component to render specific menu items.
    // takes props as input but we know we want the props.dish and props.onClick properties
    function RenderMenuItem({dish, onClick}) {
        return(
            // return the card as view with data from props.
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle> {dish.name} </CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        // define a new array (menu) that contains a menu item for every dish in props.dishes
        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });

        // return menu (list of card tags) in div container.
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }





export default Menu;





