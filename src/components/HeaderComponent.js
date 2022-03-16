import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render () {
        return (
            <>
                <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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
            </>
        );
    }
}

export default Header;