import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                    © 2020 Copyright 
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    This site was made by Lindsey Gobert
                    <a href="https://github.com/LindseyGobert" class="fa fa-github" target="_blank"></a>
                    <a href="https://www.linkedin.com/in/lindsey-gobert-b5b325117/" class="fa fa-linkedin" target="_blank"></a>
                    <a href="#" class="fa fa-twitter" target="_blank"></a>
       
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;