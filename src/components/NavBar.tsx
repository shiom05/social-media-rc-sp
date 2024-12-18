import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export interface NavBarProps {
}

const NavBar = (props: NavBarProps) => {
    return (
        <div>
            
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    </Container>
                    
                </Navbar>
          
        </div>
    );
}

export default NavBar