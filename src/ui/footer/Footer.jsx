import React from "react";
import {Container} from "react-bootstrap";


const Footer = () => {
    return (
        <>
            <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
                <Container style={{padding: '20px'}}>
                    <p className="text-center">© 2021 MovieDB</p>
                </Container>
            </Container>
        </>
    )
}

export default Footer