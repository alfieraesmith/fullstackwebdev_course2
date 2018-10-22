import React, {Component} from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    BreadcrumbItem,
    Breadcrumb,
    Row,
    Label,
    Col,
    Button, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, Errors, LocalForm} from "react-redux-form";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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
        console.log(comments);
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

    class CommentForm extends Component {

        constructor(props){
            super(props);
            this.state = {
                isModalOpen:false
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        };

        handleSubmit(values){
            console.log("Current state is: " + JSON.stringify(values));
            alert("Current state is: " + JSON.stringify(values));
            this.toggleModal();
        }

        render (){
            return (
                <React.Fragment>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil"> Submit Comment </span>
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            Submit Comment
                        </ModalHeader>
                        <ModalBody>
                            <div className="row row-content">
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating" md={12}> <strong>  Rating </strong> </Label>
                                        <Col md={{size: 12, offset: 0}}>
                                            <Control.select model=".rating"
                                                            id="rating"
                                                            name="rating"
                                                            className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="yourName" md={12}> <strong> Your Name </strong> </Label>
                                        <Col md={12}>
                                            <Control.text model=".yourName"
                                                          id="yourName"
                                                          name="yourName"
                                                          placeholder="Your Name"
                                                          className="form-control"
                                                          validators={{
                                                              minLength: minLength(3),
                                                              maxLength: maxLength(15)
                                                          }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".yourName"
                                                show="touched"
                                                messages={{
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="comment" md={12}> <strong>  Comment </strong> </Label>
                                        <Col md={12}>
                                            <Control.textarea model=".comment" id="comment" name="comment"
                                                              rows="12"
                                                              className="form-control" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size:12, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
                );
        }
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
            console.log(props);
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">  Menu </Link> </BreadcrumbItem>
                            <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3> {props.dish.name} </h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments}/>
                            <div className="col-12 col-md-2">
                                <CommentForm/>
                            </div>
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


