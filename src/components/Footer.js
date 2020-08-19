import React from 'react'
import { Link } from 'react-router-dom'

import { Segment, Container, Header, Grid, List } from 'semantic-ui-react'

export default function Footer(props) {
    const handleItemClick = (e, { name }) => {
        console.log(name)
        props.setActiveItem(name)
    };
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as={Link} to="/" name="home" onClick={handleItemClick}>Home</List.Item>
                                <List.Item as={Link} to="/pricing" name="prices" onClick={handleItemClick}>Prices</List.Item>
                                <List.Item as={Link} to="/about" name="about" onClick={handleItemClick}>About Us</List.Item>
                                <List.Item as={Link} to="/contact" name="contact" onClick={handleItemClick}>Contact Us</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item>Static and Dynamic Websites</List.Item>
                                <List.Item>Website Maintenance</List.Item>
                                {/* <List.Item>Database Management</List.Item> */}
                            </List>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as='h4' inverted>
                                CoffeeWeb 2020
                            </Header>
                            <p>
                                We strive to make every customer happy! Located in Georgetown, Texas.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}
