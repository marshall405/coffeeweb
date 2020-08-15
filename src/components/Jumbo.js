import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Container, Header, Icon } from 'semantic-ui-react'

export default function Jumbo(props) {
    return (
        <Container text className="jumbo">

            <Header
                as='h1'
                content='CoffeeWeb'
                inverted
            />
            <Icon name='coffee' size='massive' />
            <Header
                as='h2'
                content='Need a website? Let us do it for you!'
                inverted
            />
            <Button size='huge' as={Link} to="/pricing" >
                Learn More
                <Icon name='right arrow' color="yellow" />
            </Button>
        </Container>
    )
}
