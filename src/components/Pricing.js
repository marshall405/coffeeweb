import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Container, Header, Segment } from 'semantic-ui-react'

import Package from './Package'
const style = {
    root: {
        margin: '50px',
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0px auto",
        justifyContent: "center"
    },
}

export default function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <Container style={style.root} className="pricing-container">
            <Header as="h1">
                Website Packages
            </Header>
            <Container style={style.container} className="pricing-container">
                <Package bundle="BASIC" price="699" meta={["3 or Less Pages", "Contact Form", "Basic SEO", "3 Months of Updates"]} />
                <Package bundle="WORDPRESS" price="1299" meta={["3 to 6 Pages", "Advanced SEO", "WordPress / CMS", "Contact Form", "6 Months of Updates"]} />
                <Package bundle="CUSTOM" price="?" meta={["Unlimited Pages", "Advanced SEO", "WordPress / CMS", "Custom Functionality", "1 Year of Updates"]} />
            </Container >
            <div style={{ textAlign: "center", margin: "30px" }}>
                <Button as={Link} to="/contact" size='huge' style={style.button}>
                    Let's Get Started &nbsp; &nbsp;<Icon name='paper plane' color="yellow" />
                </Button>
            </div>

            <Segment>
                <p>***Pricing does not include hosting or domain name. You can checkout <a href="http://www.bluehost.com/" target="_blank" rel="noopener noreferrer"> Bluehost</a> to see current hosting prices.</p>

            </Segment>
        </Container>
    )
}
