import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderDish ({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div/>
            );
    }

    const RenderComments = ({comments}) => {
        const comment_content = comments.map((comment) => {
            return (
                <ul className="list-unstyled" key={comment.id}>
                    <li className="mt-2 mb-2"> {comment.comment} </li>
                    <li className="mt-2 mb-2">
                         -- {comment.author}, {' '}
                        {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </li>
                </ul>
            );
        });
        return (
            <div>
                <h4> Comments </h4>
                {comment_content}
            </div>);
    };


    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments}/>
                        </div>
                    </div>
                </div>);
        } else {
            console.log('Empty props passed to DishDetail Component');
            return (
                <div/>
            );
        }
    };





export default DishDetail;


