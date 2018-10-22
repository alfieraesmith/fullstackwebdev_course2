import React, {Component}  from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Label,
    Col,
    Row,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input, Modal
} from 'reactstrap';
import {Link} from "react-router-dom";
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props){
        super(props);

        // to make methods available to other methods (say Render()) we have to
        // "bind" the method to the state of the component overall.
        // Note: component.method works without any binding. Only internal method calls require binding.
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        // log the current state of the form after form submitted and alert user
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        //default behaviour post-submit is to direct to next page. We want to override this.
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home"> Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3> Contact Us </h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone">
                            </i>: +852 1234 5678<br />
                            <i className="fa fa-fax">
                            </i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"/>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"> <i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"> </i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"> <i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>



            <div className = "row row-content">
                <div className="col-12">
                    <h3> Send us your Feedback </h3>
                </div>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                                          placeholder="First Name"
                                          className="form-control"
                                          validators={{
                                              required, minLength: minLength(3), maxLength: maxLength(15)
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                        <Col md={10}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                          placeholder="Last Name"
                                          className="form-control"
                                          validators={{
                                              required, minLength: minLength(3), maxLength: maxLength(15)
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                                          placeholder="Tel. Number"
                                          className="form-control"
                                          validators={{
                                              required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                                          placeholder="Email"
                                          className="form-control"
                                          validators={{
                                              required, validEmail
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 6, offset: 2}}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox model=".agree" name="agree"
                                                      className="form-check-input"
                                    /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </div>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={10}>
                            <Control.textarea model=".message" id="message" name="message"
                                              rows="12"
                                              className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset: 2}}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
                </div>
            </div>
        );
    }

}

export default Contact;

/*

Each form element is comprised of an input field and a label for that field. This is true of
plain HTML, BS HTML and also React.

General form structure:
<Form> is the main component grouping together all the form elements
<FormGroup> basic unit for each element we want to add to form.
            Form group and the sub component (COL) allow us to use
            BS grid system (via ReactStrap) to position our label and input fields.
<FormFeedback> text area displayed under input field. Will be populated if variable passed
                in isn't empty str '' or null.
                We'll update error.input if user enters input and input is not valid.

Key point: every form input (<FormGroup><Input>) has a default value, which is usually set
to the current value of the component state tied to that input. The component state is
NOT UPDATED automatically. We need a helper function to tie user-input to component state.

We use <Input onChange> argument that will execute the value (our helper function) every time
a user submits the form. This passes the users input (event) into the helper function which
will then look up the related component state and update the value.



 */
