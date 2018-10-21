// we create header and footer components to ensure that all pages
// in react application have same header and footer.
import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Modal,
        Button, ModalHeader, ModalBody, Form, FormGroup,
        Label, Input, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';

// using class rather than func component because we need to maintain state (ui state)
class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };

    toggleNav = function () {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    handleLogin(event){
        //close login modal when user has submitted form
        // note we're pulling values for user inputs straight from DOM.
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: "
            + this.password.value + " Remember: " + this.remeber.checked);

        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand 
                            className="mr-auto" href="/">
                                <img src="assets/images/logo.png"
                                     height="30"
                                     width="41"
                                     alt="Ristorante Con Fusion"/>
                        </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"> Home </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"> About Us </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"> Menu </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"> Contact Us </span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"> Login </span>
                                    </Button>
                                </NavItem>
                            </Nav>
                            </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> Ristorante Con Fusion </h1>
                                <p> We take inspiration from the World's best cuisines
                                    and create a unique fusion experience.
                                    Our lip-smacking creations will tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}> Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSumbit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username"> Username</Label>
                                <Input name="username"
                                       id="username"
                                       type="text"
                                       innerRef={(input) => {this.username=input}}>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"> Password </Label>
                                <Input name="password"
                                       id="password"
                                       type="text"
                                       innerRef={(input) => {this.password=input}}>
                                </Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check >
                                   <Input type="checkbox"
                                          name="remember"
                                          innerRef={(input) => {this.remember=input}}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="bg-primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;


/*
React Fragments vs Divs for grouping elements -

Both React Fragement and Div tags can both be used to group react elements
together so that they are rendered together.

Both sever the same function, however Div tags are treated as parent components
and create an additional node in the virtual DOM, with all the grouped elements
as children. React Fragments were developed by React to reduce VDOM complexity,
they aren't treated as parents and don't create additional nodes.
 */

/*
React fragments (like most react components) have a shorthand. The short hand for
<React.Fragment> </React.Fragment> is simply <></>. Careful! not all browsers
currently understand react shorthand so it's advised for portability reasons that devs use
the full tag names.

Using a collapsing nav bar -
We don't' want to show all of the nav links (their content being icons) if
the user is using a small device. We want to collapse the nav bar.
Bootstrap (via Reactstrap) allows us to this using the Collapse element.

1. wrap navbar in a Collapse container
2. create a toggler - in this case it's we'll use BS' navbar toggler.
3. create a function that is activated when the toggler is clicked -
   this function will set state of isNavOpen to the opposite.
4. is the navbar is collapsed (isNavOpen=false) then isNavOpen will be set
to true, state change so DOM rerendered and navbar is uncollapsed.
The opposite state change occures if navbar is uncollapsed.


 */