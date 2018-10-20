import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

    // make Menu a functional component as it it purely presentational and
    //has no state and takes only props in.

    // create a second, helper, func component to render specific menu items.
    // takes props as input but we know we want the props.dish and props.onClick properties

    // We're converting the menu items into links where the dish id will be added
    // as a parm to the redirect url send to dish detail component

    // keypoint: the general menu is at "/menu" whereas the dishdetail is "/menu/:id"
    // because menu is linked from home with exact match, it is always rendered when no
    // id is passed as a param.

    function RenderMenuItem({dish}) {
        return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle> {dish.name} </CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
        // define a new array (menu) that contains a menu item for every dish in props.dishes
        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });

        // return menu (list of card tags) in div container.
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home"> Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3> Menu </h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    };





export default Menu;





