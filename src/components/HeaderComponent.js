import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    render () {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand  className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41"
                            alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                <span className='fa fa-sign-in fa-lg'></span>Login
                                </Button>
                                    
                            </NavItem>
                        </Nav>
                        </Collapse>
                </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6"></div>
                            <h1 className="container">Ristorante Con Fusion</h1>
                            <p>We take inspiratiom from</p>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;